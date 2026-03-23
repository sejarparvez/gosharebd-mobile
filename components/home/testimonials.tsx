import { Image } from 'expo-image';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  View,
  type ViewToken,
} from 'react-native';
import Animated, {
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { Text } from '@/components/ui/text';

// ─── Data ────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: 'Sarah Khan',
    location: 'Dhaka',
    text: 'GoShareBD made it so easy to find authentic tours! The guides were knowledgeable and friendly. Best trip ever to the Sundarbans.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    tour: 'Sundarbans Safari',
  },
  {
    name: 'Ahmed Hassan',
    location: 'Chittagong',
    text: 'The Sundarbans tour was absolutely incredible. Worth every taka. The wildlife, the scenery, everything was perfect. Highly recommend GoShareBD.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tour: 'Mangrove Explorer',
  },
  {
    name: 'Priya Roy',
    location: 'Sylhet',
    text: "Amazing experiences and even better prices. The tea garden tour was breathtaking. The community here is so welcoming. Can't wait to book again.",
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    tour: 'Tea Garden Tour',
  },
  {
    name: 'Rafiq Ahmed',
    location: 'Bandarban',
    text: 'The mountain trek exceeded all expectations. Professional guides, stunning views, and a well-organized itinerary. GoShareBD is the real deal.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    tour: 'Mountain Adventure',
  },
  {
    name: 'Nadia Islam',
    location: "Cox's Bazar",
    text: 'The beach tour was fantastic — great value and the sunset views were unforgettable. Will absolutely recommend to friends and family.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    tour: 'Beach Paradise',
  },
];

const TOTAL_REVIEWS = 10247;
const AVG_RATING = 4.8;
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - 48; // 16px padding each side + 16px peek

// ─── Testimonial Card ─────────────────────────────────────────────────────────

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <View
      style={{ width: CARD_WIDTH }}
      className='mr-4 rounded-2xl border border-outline-200 dark:border-outline-700 bg-background-0 dark:bg-background-950 p-5 gap-4'
    >
      {/* Top row: quote icon + stars */}
      <View className='flex-row items-center justify-between'>
        <View className='w-9 h-9 rounded-xl bg-primary-50 dark:bg-primary-950 items-center justify-center'>
          <Quote size={16} color='#5a9e2f' />
        </View>
        <View className='flex-row gap-0.5'>
          {[...Array(testimonial.rating)].map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static list
            <Star key={i} size={14} fill='#facc15' color='#facc15' />
          ))}
        </View>
      </View>

      {/* Review text */}
      <Text className='text-sm text-typography-800 dark:text-typography-200 leading-relaxed flex-1'>
        "{testimonial.text}"
      </Text>

      {/* Tour tag */}
      <View style={s.tourRow}>
        <View style={s.tourLine} />
        <Text className='text-[10px] font-semibold tracking-widest uppercase text-primary-400'>
          {testimonial.tour}
        </Text>
      </View>

      {/* Divider */}
      <View className='h-px bg-outline-100 dark:bg-outline-800' />

      {/* Profile row */}
      <View className='flex-row items-center gap-3'>
        <View style={s.avatarWrap}>
          <Image
            source={{ uri: testimonial.image }}
            style={s.avatar}
            contentFit='cover'
          />
        </View>
        <View className='flex-1'>
          <Text
            className='text-sm font-bold text-typography-900 dark:text-typography-100 leading-tight'
            numberOfLines={1}
          >
            {testimonial.name}
          </Text>
          <Text className='text-xs text-typography-500 mt-0.5'>
            {testimonial.location}
          </Text>
        </View>
        {/* Verified badge */}
        <View style={s.verifiedBadge}>
          <Text style={s.verifiedText}>Verified</Text>
        </View>
      </View>
    </View>
  );
}

// ─── Dot Indicators ───────────────────────────────────────────────────────────

// ─── Nav Button ───────────────────────────────────────────────────────────────

function NavButton({
  onPress,
  children,
}: {
  onPress: () => void;
  children: React.ReactNode;
}) {
  const scale = useSharedValue(1);
  const animStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animStyle}>
      <Pressable
        onPressIn={() =>
          (scale.value = withSpring(0.92, { stiffness: 400, damping: 20 }))
        }
        onPressOut={() =>
          (scale.value = withSpring(1, { stiffness: 400, damping: 20 }))
        }
        onPress={onPress}
        className='w-10 h-10 rounded-xl border border-outline-200 dark:border-outline-700 bg-background-0 dark:bg-background-950 items-center justify-center'
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Testimonials() {
  const flatListRef = useRef<FlatList>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance every 4s
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      const next = (activeIdx + 1) % testimonials.length;
      flatListRef.current?.scrollToIndex({ index: next, animated: true });
      setActiveIdx(next);
    }, 4000);
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

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(testimonials.length - 1, idx));
    flatListRef.current?.scrollToIndex({ index: clamped, animated: true });
    setActiveIdx(clamped);
    // Reset autoplay timer
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  return (
    <View className='pt-10 pb-10 bg-background-0 dark:bg-background-950 border-b border-outline-200 dark:border-outline-700'>
      {/* ── Section Header ── */}
      <Animated.View
        entering={FadeInUp.delay(50).duration(500)}
        className='px-4 mb-7'
      >
        {/* Eyebrow */}
        <View style={s.eyebrow}>
          <View style={s.eyebrowLine} />
          <Text className='text-[11px] font-bold tracking-widest uppercase text-primary-500'>
            Traveler Reviews
          </Text>
        </View>

        {/* Headline + aggregate rating side by side */}
        <View className='flex-row items-start justify-between gap-4'>
          <Text className='text-3xl font-bold tracking-tight text-typography-950 dark:text-typography-0 leading-tight flex-1'>
            What our{' '}
            <Text className='italic font-bold text-3xl text-primary-500'>
              travelers
            </Text>{' '}
            say
            <Text className='text-primary-500'>.</Text>
          </Text>

          {/* Aggregate rating block */}
          <View className='items-end gap-0.5'>
            <Text className='text-3xl font-bold text-typography-950 dark:text-typography-0 leading-none'>
              {AVG_RATING}
            </Text>
            <View className='flex-row gap-0.5'>
              {[...Array(5)].map((_, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static list
                <Star key={i} size={12} fill='#facc15' color='#facc15' />
              ))}
            </View>
            <Text className='text-[10px] text-typography-500 mt-0.5'>
              {TOTAL_REVIEWS.toLocaleString()} reviews
            </Text>
          </View>
        </View>
      </Animated.View>

      {/* ── Carousel ── */}
      <FlatList
        ref={flatListRef}
        data={testimonials}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => String(i)}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(_, index) => ({
          length: CARD_WIDTH + 16, // card + margin
          offset: (CARD_WIDTH + 16) * index,
          index,
        })}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        snapToInterval={CARD_WIDTH + 16}
        snapToAlignment='start'
        decelerationRate='fast'
        renderItem={({ item }) => <TestimonialCard testimonial={item} />}
      />

      {/* ── Dot indicators + nav buttons ── */}
      <View className='flex-row items-center justify-between px-4 mt-5'>
        {/* Dots */}
        <View className='flex-row items-center gap-1.5'>
          {testimonials.map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static list
            <Pressable key={i} onPress={() => goTo(i)}>
              <View
                style={[s.dot, i === activeIdx ? s.dotActive : s.dotInactive]}
              />
            </Pressable>
          ))}
        </View>

        {/* Prev / Next buttons */}
        <View className='flex-row gap-2'>
          <NavButton onPress={() => goTo(activeIdx - 1)}>
            <ChevronLeft size={18} color='#71717a' />
          </NavButton>
          <NavButton onPress={() => goTo(activeIdx + 1)}>
            <ChevronRight size={18} color='#71717a' />
          </NavButton>
        </View>
      </View>
    </View>
  );
}

// ─── StyleSheet — absolute positions + things className can't express ─────────

const s = StyleSheet.create({
  eyebrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  eyebrowLine: { height: 1, width: 32, backgroundColor: '#5a9e2f' },

  tourRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  tourLine: { height: 1, width: 20, backgroundColor: 'rgba(90,158,47,0.4)' },

  avatarWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e4e4e7',
  },
  avatar: { width: 40, height: 40 },

  verifiedBadge: {
    backgroundColor: 'rgba(34,197,94,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(34,197,94,0.2)',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  verifiedText: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    color: '#16a34a',
  },

  dot: { height: 6, borderRadius: 3 },
  dotActive: { width: 20, backgroundColor: '#5a9e2f' },
  dotInactive: { width: 6, backgroundColor: '#d4d4d8' },
});
