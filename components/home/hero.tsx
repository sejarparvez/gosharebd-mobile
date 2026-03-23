import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import {
  ArrowRight,
  CheckCircle2,
  Headset,
  MapPin,
  Sparkles,
  Star,
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  type ViewToken,
} from 'react-native';
import Animated, { FadeInUp, ZoomIn } from 'react-native-reanimated';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

// ─── Data ────────────────────────────────────────────────────────────────────

const destinations = [
  {
    name: "Cox's Bazar",
    subtitle: "World's longest natural beach",
    tag: 'Most Popular',
    image:
      'https://images.unsplash.com/photo-1665152038920-e3b63b660075?q=80&w=774&auto=format&fit=crop',
  },
  {
    name: 'Sundarbans',
    subtitle: 'Royal Bengal Tiger habitat',
    tag: 'Wildlife',
    image:
      'https://images.unsplash.com/photo-1551615577-1c7e180a77ac?q=80&w=967&auto=format&fit=crop',
  },
  {
    name: 'Sylhet',
    subtitle: 'Enchanting tea gardens',
    tag: 'Nature',
    image:
      'https://images.unsplash.com/photo-1667120205301-a2a3a886886e?q=80&w=774&auto=format&fit=crop',
  },
  {
    name: 'Bandarban',
    subtitle: 'Mountain paradise',
    tag: 'Adventure',
    image:
      'https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?q=80&w=801&auto=format&fit=crop',
  },
];

const travelers = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
];

const stats = [
  { value: 50, display: '50+', label: 'Destinations' },
  { value: 10000, display: '10K+', label: 'Travelers' },
  { value: 500, display: '500+', label: 'Tours' },
  { value: 4.8, display: '4.8★', label: 'Rating' },
];

const features = ['Free Cancellation', 'Best Price', '24/7 Support'];

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// ─── Static styles (no css-interop involved) ─────────────────────────────────

const s = StyleSheet.create({
  pillActive: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#5a9e2f',
  },
  pillInactive: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#f4f4f5', // background-100
  },
  pillInactiveDark: {
    backgroundColor: '#27272a', // background-800
  },
  pillTextActive: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  pillTextInactive: {
    fontSize: 14,
    fontWeight: '600',
    color: '#71717a', // typography-500
  },

  tagBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(90,158,47,0.9)',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  trustPill: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  trustPillDark: {
    backgroundColor: 'rgba(30,29,34,0.92)',
  },
  locationBox: {
    position: 'absolute',
    bottom: 24,
    left: 16,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
});

// ─── StatCounter ─────────────────────────────────────────────────────────────

function StatCounter({
  stat,
  delay = 0,
}: {
  stat: (typeof stats)[0];
  delay?: number;
}) {
  const [displayed, setDisplayed] = useState(stat.display);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    setDisplayed('0');

    const timeout = setTimeout(() => {
      const duration = 800;
      const steps = 35;
      const stepMs = duration / steps;
      let step = 0;

      const interval = setInterval(() => {
        if (!mounted.current) {
          clearInterval(interval);
          return;
        }
        step++;
        const eased = 1 - (1 - step / steps) ** 3;
        const current = eased * stat.value;

        if (stat.label === 'Rating') {
          setDisplayed(`${Math.min(current, stat.value).toFixed(1)}★`);
        } else if (stat.label === 'Travelers') {
          setDisplayed(`${Math.round(Math.min(current, stat.value) / 1000)}K+`);
        } else {
          setDisplayed(`${Math.round(Math.min(current, stat.value))}+`);
        }

        if (step >= steps) {
          setDisplayed(stat.display);
          clearInterval(interval);
        }
      }, stepMs);

      return () => clearInterval(interval);
    }, delay);

    return () => {
      mounted.current = false;
      clearTimeout(timeout);
    };
  }, [stat, delay]);

  return (
    <Animated.View
      entering={ZoomIn.delay(delay).duration(400)}
      className='flex-1 items-center py-2'
    >
      <Text className='text-xl font-bold text-typography-950 dark:text-typography-0 tabular-nums'>
        {displayed}
      </Text>
      <Text className='text-[10px] text-typography-500 mt-0.5'>
        {stat.label}
      </Text>
    </Animated.View>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────

interface HeroProps {
  onExploreTours?: () => void;
  onContact?: () => void;
}

export default function Hero({ onExploreTours, onContact }: HeroProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const flatListRef = useRef<FlatList>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      const next = (activeIdx + 1) % destinations.length;
      flatListRef.current?.scrollToIndex({ index: next, animated: true });
      setActiveIdx(next);
    }, 5000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [activeIdx]);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index != null) {
        setActiveIdx(viewableItems[0].index);
      }
    },
  ).current;

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  return (
    <View className='flex-1'>
      {/* ── Carousel ── */}
      <FlatList
        ref={flatListRef}
        data={destinations}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => String(i)}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(_, index) => ({
          length: SCREEN_WIDTH,
          offset: SCREEN_WIDTH * index,
          index,
        })}
        renderItem={({ item: dest, index: idx }) => (
          <View style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH * 0.92 }}>
            <Image
              source={{ uri: dest.image }}
              style={{ width: '100%', height: '100%' }}
              contentFit='cover'
              priority={idx === 0 ? 'high' : 'normal'}
            />

            <LinearGradient
              colors={['rgba(0,0,0,0.25)', 'transparent', 'rgba(0,0,0,0.78)']}
              locations={[0, 0.38, 1]}
              style={StyleSheet.absoluteFillObject}
            />

            {/* Tag badge — plain StyleSheet, no className */}
            <View style={s.tagBadge}>
              <Sparkles size={12} color='#fff' />
              <Text style={{ color: '#fff', fontSize: 12, fontWeight: '600' }}>
                {dest.tag}
              </Text>
            </View>

            {/* Trust pill — plain StyleSheet, no className */}
            <View style={[s.trustPill, isDark && s.trustPillDark]}>
              <Star size={13} fill='#facc15' color='#facc15' />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '700',
                  color: isDark ? '#fafafa' : '#18181b',
                }}
              >
                4.8
              </Text>
              <Text style={{ fontSize: 12, color: '#71717a' }}>· 10K+</Text>
            </View>

            {/* Location text */}
            {activeIdx === idx && (
              <Animated.View
                entering={FadeInUp.duration(350)}
                style={s.locationBox}
              >
                <View style={s.locationRow}>
                  <MapPin size={16} color='rgba(255,255,255,0.8)' />
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.8)',
                      fontWeight: '500',
                    }}
                  >
                    Bangladesh
                  </Text>
                </View>
                <Text
                  style={{ fontSize: 24, fontWeight: '800', color: '#fff' }}
                >
                  {dest.name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.8)',
                    marginTop: 2,
                  }}
                >
                  {dest.subtitle}
                </Text>
              </Animated.View>
            )}
          </View>
        )}
      />

      {/* After FlatList, before Content Block */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 12, marginBottom: 12 }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 8,
        }}
      >
        {destinations.map((dest, idx) => (
          <Button
            // biome-ignore lint/suspicious/noArrayIndexKey: this is fine
            key={idx}
            size='xs'
            variant={idx === activeIdx ? 'solid' : 'outline'}
            className='rounded-full'
            onPress={() => {
              flatListRef.current?.scrollToIndex({
                index: idx,
                animated: true,
              });
              setActiveIdx(idx);
            }}
          >
            <ButtonText>{dest.name}</ButtonText>
          </Button>
        ))}
      </ScrollView>

      {/* ── Content Block ── */}
      <View className='px-4 pb-8 gap-5'>
        {/* Headline */}
        <View>
          <Text className='text-4xl font-extrabold tracking-tight leading-snug text-typography-950 dark:text-typography-0'>
            See The Beauty.{'\n'}
            <Text className='text-5xl font-extrabold text-primary-500'>
              GoShare
            </Text>{' '}
            The Story.
          </Text>
          <Text className='text-typography-500 text-sm mt-2.5 leading-relaxed'>
            10,000+ travelers have found their paradise with us. Guided tours
            across Bangladesh's most breathtaking destinations.
          </Text>
        </View>

        {/* CTAs */}
        <View className='flex-row gap-3'>
          <Button
            size='lg'
            className='flex-1 h-12 bg-primary-500 shadow-soft-2 rounded-lg'
            onPress={onExploreTours}
          >
            <ButtonText className='text-white text-sm font-semibold'>
              Explore Tours
            </ButtonText>
            <ButtonIcon as={ArrowRight} className='text-white ml-1' />
          </Button>

          <Button
            size='lg'
            variant='outline'
            className='h-12 px-4 border-outline-300 dark:border-outline-700 rounded-lg'
            onPress={onContact}
          >
            <ButtonIcon
              as={Headset}
              className='text-typography-700 dark:text-typography-300'
            />
            <ButtonText className='text-typography-700 dark:text-typography-300 text-sm ml-1'>
              Contact
            </ButtonText>
          </Button>
        </View>

        {/* Social Proof Bar */}
        <View className='flex-row items-center justify-between rounded-2xl bg-background-50 dark:bg-background-900 px-4 py-3 border border-outline-200 dark:border-outline-700'>
          <View className='flex-row items-center gap-2.5'>
            {/* Stacked avatars */}
            <View className='flex-row'>
              {travelers.map((avatar, idx) => (
                <Animated.View
                  // biome-ignore lint/suspicious/noArrayIndexKey: static list
                  key={idx}
                  entering={ZoomIn.delay(200 + idx * 70).duration(350)}
                  style={{
                    marginLeft: idx === 0 ? 0 : -10,
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    borderWidth: 2,
                    borderColor: isDark ? '#1e1d22' : '#ffffff',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    source={{ uri: avatar }}
                    style={{ width: 32, height: 32 }}
                    contentFit='cover'
                  />
                </Animated.View>
              ))}
            </View>

            <View>
              <Text className='text-xs font-semibold text-typography-950 dark:text-typography-0'>
                10,247 happy travelers
              </Text>
              <View className='flex-row gap-0.5 mt-0.5'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    // biome-ignore lint/suspicious/noArrayIndexKey: static list
                    key={i}
                    size={12}
                    fill='#facc15'
                    color='#facc15'
                  />
                ))}
              </View>
            </View>
          </View>

          <View className='flex-row items-center gap-1.5 bg-success-100 dark:bg-success-900/30 rounded-full px-3 py-1.5'>
            <CheckCircle2 size={16} color='#5a9e2f' />
            <Text className='text-xs font-bold text-success-700 dark:text-success-400'>
              98% Happy
            </Text>
          </View>
        </View>

        {/* Trust Micro-copy */}
        <View className='flex-row items-center justify-center gap-4'>
          {features.map((f) => (
            <View key={f} className='flex-row items-center gap-1'>
              <CheckCircle2 size={13} color='#5a9e2f' />
              <Text className='text-[10px] text-typography-500'>{f}</Text>
            </View>
          ))}
        </View>

        {/* Stats Strip */}
        <View className='flex-row pt-1 border-t border-outline-100 dark:border-outline-800'>
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} stat={stat} delay={i * 100} />
          ))}
        </View>
      </View>
    </View>
  );
}
