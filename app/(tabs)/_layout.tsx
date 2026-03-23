import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { CircleUserRound, Heart, Home, Package } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { Platform, Pressable, View } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// ── Design tokens ────────────────────────────────────────────────────
const LIGHT = {
  primary: '#5a9e2f',
  white: '#ffffff',
  background: '#ffffff',
  border: '#e4e4e7',
  muted: '#a1a1aa',
  shadow: '#1e1d22',
};

const DARK = {
  primary: '#5a9e2f',
  white: '#ffffff',
  background: '#27272a',
  border: '#3f3f46',
  muted: '#71717a',
  shadow: '#000000',
};

const SPRING = { damping: 18, stiffness: 260, mass: 0.7 };
const PRESS_SPRING = { damping: 8, stiffness: 600 };

// ── Tab definitions ──────────────────────────────────────────────────
const TABS = [
  { name: 'index', label: 'Home', Icon: Home },
  { name: 'packages', label: 'Packages', Icon: Package },
  { name: 'wishlist', label: 'Wishlist', Icon: Heart },
  { name: 'account', label: 'Account', Icon: CircleUserRound },
];

// ── Tab item ─────────────────────────────────────────────────────────
function TabItem({
  icon: Icon,
  label,
  focused,
  onPress,
  onLongPress,
  colors,
}: {
  icon: React.ElementType;
  label: string;
  focused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  colors: typeof LIGHT;
}) {
  const progress = useSharedValue(focused ? 1 : 0);
  const pressScale = useSharedValue(1);

  useEffect(() => {
    progress.value = withSpring(focused ? 1 : 0, SPRING);
  }, [focused, progress]);

  const itemStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pressScale.value }],
  }));

  const bubbleStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      ['transparent', colors.primary],
    ),
    transform: [
      {
        scale: withSpring(
          interpolate(progress.value, [0, 1], [0.82, 1]),
          SPRING,
        ),
      },
      {
        translateY: withSpring(
          interpolate(progress.value, [0, 1], [0, -8]),
          SPRING,
        ),
      },
    ],
    shadowOpacity: withTiming(interpolate(progress.value, [0, 1], [0, 0.3]), {
      duration: 200,
    }),
  }));

  return (
    <Pressable
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onPress={() => {
        pressScale.value = withSpring(0.87, PRESS_SPRING, () => {
          pressScale.value = withSpring(1, SPRING);
        });
        onPress();
      }}
      onLongPress={onLongPress}
      accessibilityRole='button'
      accessibilityLabel={label}
      accessibilityState={{ selected: focused }}
    >
      <Animated.View style={[{ alignItems: 'center' }, itemStyle]}>
        <Animated.View
          style={[
            {
              width: 48,
              height: 48,
              borderRadius: 24,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: colors.primary,
              shadowOffset: { width: 0, height: 6 },
              shadowRadius: 14,
              elevation: focused ? 8 : 0,
            },
            bubbleStyle,
          ]}
        >
          <Icon
            size={26}
            color={focused ? colors.white : colors.muted}
            strokeWidth={focused ? 2.1 : 1.6}
          />
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}

// ── Custom floating tab bar ───────────────────────────────────────────
function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const bottomInset = insets.bottom > 0 ? insets.bottom + 8 : 16;
  const { colorScheme } = useColorScheme();
  const C = colorScheme === 'dark' ? DARK : LIGHT;

  return (
    <View
      pointerEvents='box-none'
      style={{
        position: 'absolute',
        bottom: bottomInset,
        left: 16,
        right: 16,
      }}
    >
      <View
        style={{
          height: 72,
          borderRadius: 36,
          backgroundColor: C.background,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 8,
          shadowColor: C.shadow,
          shadowOffset: { width: 0, height: 12 },
          shadowOpacity: 0.16,
          shadowRadius: 32,
          elevation: 24,
          borderWidth: 1,
          borderColor: C.border,
          overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        }}
      >
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const tab = TABS.find((t) => t.name === route.name);
          if (!tab) return null;

          return (
            <TabItem
              key={route.key}
              icon={tab.Icon}
              label={tab.label}
              focused={focused}
              colors={C}
              onPress={() => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!focused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }}
              onLongPress={() => {
                navigation.emit({ type: 'tabLongPress', target: route.key });
              }}
            />
          );
        })}
      </View>
    </View>
  );
}

// ── Root layout ───────────────────────────────────────────────────────
export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name='index' options={{ title: 'Home' }} />
      <Tabs.Screen name='packages' options={{ title: 'Packages' }} />
      <Tabs.Screen name='wishlist' options={{ title: 'Wishlist' }} />
      <Tabs.Screen name='account' options={{ title: 'Account' }} />
    </Tabs>
  );
}
