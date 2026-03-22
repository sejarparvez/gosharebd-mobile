import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { CircleUserRound, Heart, Home, Package } from 'lucide-react-native';
import { useEffect } from 'react';
import { Platform, Pressable, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// ── Design tokens ───────────────────────────────────────────────────
const C = {
  primary: '#5a9e2f',
  white: '#ffffff',
  background: '#ffffff',
  border: '#e4e4e7',
  muted: '#a1a1aa',
  dark: '#1e1d22',
};

const SPRING = { damping: 16, stiffness: 300, mass: 0.6 };
const PRESS_SPRING = { damping: 10, stiffness: 500 };

// ── Tab definitions ─────────────────────────────────────────────────
const TABS = [
  { name: 'index', label: 'Home', Icon: Home },
  { name: 'packages', label: 'Packages', Icon: Package },
  { name: 'wishlist', label: 'Wishlist', Icon: Heart },
  { name: 'account', label: 'Account', Icon: CircleUserRound },
];

// ── Single tab item ─────────────────────────────────────────────────
function TabItem({
  icon: Icon,
  label,
  focused,
  onPress,
  onLongPress,
}: {
  icon: React.ElementType;
  label: string;
  focused: boolean;
  onPress: () => void;
  onLongPress: () => void;
}) {
  // ← KEY FIX: drive animations from a shared value, not the raw prop
  const progress = useSharedValue(focused ? 1 : 0);
  const pressScale = useSharedValue(1);

  // Sync the shared value whenever the focused prop changes
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
      ['transparent', C.primary],
    ),
    transform: [
      { scale: withSpring(progress.value === 1 ? 1 : 0.75, SPRING) },
      { translateY: progress.value * -10 },
    ],
    shadowOpacity: progress.value * 0.32,
  }));

  return (
    <Pressable
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onPress={() => {
        pressScale.value = withSpring(0.85, PRESS_SPRING, () => {
          pressScale.value = withSpring(1, SPRING);
        });
        onPress();
      }}
      onLongPress={onLongPress}
      accessibilityRole='button'
      accessibilityLabel={label}
      accessibilityState={{ selected: focused }}
    >
      <Animated.View style={itemStyle}>
        <Animated.View
          style={[
            {
              width: 48,
              height: 48,
              borderRadius: 24,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: C.primary,
              shadowOffset: { width: 0, height: 6 },
              shadowRadius: 12,
              elevation: focused ? 8 : 0,
            },
            bubbleStyle,
          ]}
        >
          <Icon
            size={22}
            color={focused ? C.white : C.muted}
            strokeWidth={focused ? 2.2 : 1.7}
          />
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}

// ── Custom floating tab bar ─────────────────────────────────────────
function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const bottomInset = insets.bottom > 0 ? insets.bottom + 8 : 16;

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
          shadowColor: C.dark,
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 28,
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

// ── Root layout ─────────────────────────────────────────────────────
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
