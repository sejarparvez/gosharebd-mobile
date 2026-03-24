import {
  Calendar,
  DollarSign,
  MapPin,
  Shield,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react-native';
import { View as RNView, StyleSheet } from 'react-native';
import Animated, {
  FadeInDown,
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Pressable } from '@/components/ui/pressable';

import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    Icon: Star,
    title: 'Verified Tours & Guides',
    description:
      'Every tour and guide is rigorously vetted for quality, safety, and authenticity — so you can explore Bangladesh with complete confidence.',
    tag: 'Quality Assured',
  },
  {
    Icon: DollarSign,
    title: 'Best Price Guarantee',
    description:
      "Find a lower price anywhere and we'll match it — no questions asked, no hidden fees.",
    tag: 'Best Value',
  },
  {
    Icon: Users,
    title: 'Community Driven',
    description:
      'Connect with local guides and like-minded travelers. Share stories, tips, and build friendships that outlast the trip.',
    tag: 'Local First',
  },
  {
    Icon: TrendingUp,
    title: 'Real Reviews',
    description:
      'Honest, unfiltered feedback from verified travelers only. No paid promotions, no inflated ratings.',
    tag: 'Transparent',
  },
  {
    Icon: Calendar,
    title: 'Flexible Booking',
    description:
      'Instant confirmations, easy amendments, and stress-free cancellations. Travel on your terms.',
    tag: 'No Stress',
  },
  {
    Icon: MapPin,
    title: 'Hidden Gems',
    description:
      'Go beyond the tourist trail. Our local guides reveal the authentic Bangladesh most visitors never see.',
    tag: 'Off the Map',
  },
];

// ─── Feature Card ─────────────────────────────────────────────────────────────
// Rule: Gluestack Text uses className only. Dynamic values (index number,
// tag string) go into bare <Text> via StyleSheet when they need style props,
// but here everything maps cleanly to static className tokens.

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const { Icon } = feature;
  const scale = useSharedValue(1);

  const animStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    // Outer: layout entrance animation only
    // Inner: press scale animation only
    // Keeping them separate avoids the reanimated "transform overwrite" warning
    <Animated.View entering={FadeInDown.delay(index * 80).duration(450)}>
      <Animated.View style={animStyle}>
        <Pressable
          onPressIn={() =>
            (scale.value = withSpring(0.97, { stiffness: 300, damping: 20 }))
          }
          onPressOut={() =>
            (scale.value = withSpring(1, { stiffness: 300, damping: 20 }))
          }
          className='rounded-2xl border border-outline-200 dark:border-outline-700 bg-background-0 dark:bg-background-950 p-5 gap-3'
        >
          {/* Top row: icon + tag */}
          <View className='flex-row items-start justify-between'>
            <View className='w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-950 items-center justify-center'>
              <Icon size={20} color='#5a9e2f' />
            </View>
            <View className='rounded-full border border-outline-200 dark:border-outline-700 px-2.5 py-1'>
              <Text className='text-[10px] font-semibold tracking-widest uppercase text-typography-500 dark:text-typography-400'>
                {feature.tag}
              </Text>
            </View>
          </View>

          {/* Index line */}
          <RNView style={s.indexRow}>
            <RNView style={s.indexLine} />
            <Text className='text-[10px] font-semibold tracking-widest uppercase text-primary-400'>
              {String(index + 1).padStart(2, '0')}
            </Text>
          </RNView>

          {/* Title + description */}
          <Text className='text-base font-bold tracking-tight text-typography-900 dark:text-typography-50 leading-snug'>
            {feature.title}
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed'>
            {feature.description}
          </Text>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Features() {
  return (
    <View className='px-4 pt-6 pb-6 border-b border-outline-200 dark:border-outline-700 bg-background-0 dark:bg-background-950'>
      {/* ── Section Header ── */}
      <Animated.View entering={FadeInUp.delay(50).duration(500)}>
        <View className='mb-7'>
          {/* Eyebrow */}
          <RNView style={s.eyebrow}>
            <RNView style={s.eyebrowLine} />
            <Text className='text-[11px] font-bold tracking-widest uppercase text-primary-500'>
              Why GoShareBD
            </Text>
          </RNView>

          {/* Headline */}
          <Text className='text-3xl font-bold tracking-tight text-typography-950 dark:text-typography-0 leading-tight mb-3'>
            Everything you need for an{' '}
            <Text className='italic font-bold text-3xl text-primary-500'>
              unforgettable
            </Text>{' '}
            journey
            <Text className='text-primary-500'>.</Text>
          </Text>

          {/* Subline */}
          <RNView style={s.subline}>
            <Shield size={14} color='#5a9e2f' />
            <Text className='text-sm text-typography-500 leading-relaxed flex-1'>
              Trusted by over 10,000 travelers across Bangladesh since 2020.
            </Text>
          </RNView>
        </View>
      </Animated.View>

      {/* ── Feature Cards ── */}
      <View className='gap-3'>
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </View>
    </View>
  );
}

// ─── Minimal StyleSheet — only for things className can't express ─────────────

const s = StyleSheet.create({
  eyebrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  eyebrowLine: { height: 1, width: 32, backgroundColor: '#5a9e2f' },
  indexRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  indexLine: { height: 1, width: 20, backgroundColor: 'rgba(90,158,47,0.4)' },
  subline: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
});
