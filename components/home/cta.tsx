import { ArrowRight, Headset, MapPin } from 'lucide-react-native';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

// ─── Data ────────────────────────────────────────────────────────────────────

const destinations = [
  "Cox's Bazar",
  'Sundarbans',
  'Sylhet',
  'Bandarban',
  'Sajek',
  'Ratargul',
  'Saint Martin',
  'Kuakata',
];

const trustFeatures = [
  'Free cancellation',
  'Best price guarantee',
  '24/7 support',
];

// ─── Ambient glow blob ────────────────────────────────────────────────────────

function GlowBlob() {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.08, { duration: 5000, easing: Easing.inOut(Easing.sin) }),
        withTiming(1, { duration: 5000, easing: Easing.inOut(Easing.sin) }),
      ),
      -1,
      false,
    );
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.5, { duration: 5000, easing: Easing.inOut(Easing.sin) }),
        withTiming(0.3, { duration: 5000, easing: Easing.inOut(Easing.sin) }),
      ),
      -1,
      false,
    );
  }, [scale, opacity]);

  const animStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return <Animated.View style={[s.glowBlob, animStyle]} pointerEvents='none' />;
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface CtaProps {
  onBrowseTours?: () => void;
  onContact?: () => void;
  onDestinationPress?: (destination: string) => void;
}

export default function Cta({
  onBrowseTours,
  onContact,
  onDestinationPress,
}: CtaProps) {
  return (
    <View className='py-10 bg-background-0 dark:bg-background-950 overflow-hidden'>
      <GlowBlob />

      <View className='px-4'>
        {/* ── Main CTA card ── */}
        <Animated.View
          entering={FadeInUp.delay(50).duration(500)}
          className='rounded-2xl border border-outline-200 dark:border-outline-700 overflow-hidden'
        >
          {/* ── Top content area ── */}
          <View className='p-6 items-center gap-6'>
            {/* Eyebrow — lines on both sides */}
            <View style={s.eyebrow}>
              <View style={s.eyebrowLine} />
              <Text className='text-[11px] font-bold tracking-widest uppercase text-primary-500 mx-2'>
                Start your journey
              </Text>
              <View style={s.eyebrowLine} />
            </View>

            {/* Headline */}
            <Animated.View entering={FadeInUp.delay(100).duration(500)}>
              <Text className='text-3xl font-bold tracking-tight text-typography-950 dark:text-typography-0 leading-tight text-center'>
                Ready to explore{' '}
                <Text className='italic font-bold text-3xl text-primary-500'>
                  beautiful
                </Text>{' '}
                Bangladesh
                <Text className='text-primary-500 text-3xl'>?</Text>
              </Text>
            </Animated.View>

            {/* Subtext */}
            <Animated.View entering={FadeInUp.delay(150).duration(500)}>
              <Text className='text-base text-typography-500 leading-relaxed text-center'>
                Join 10,000+ travelers who have discovered the raw beauty of
                Bangladesh — from mangrove forests to mountain peaks.
              </Text>
            </Animated.View>

            {/* CTAs */}
            <Animated.View
              entering={FadeInUp.delay(200).duration(500)}
              className='w-full gap-3'
            >
              <Button
                size='lg'
                className='h-12 bg-primary-500 shadow-soft-2 gap-2 rounded-lg'
                onPress={onBrowseTours}
              >
                <ButtonText className='text-white font-semibold'>
                  Browse All Tours
                </ButtonText>
                <ButtonIcon as={ArrowRight} className='text-white' />
              </Button>

              <Button
                size='lg'
                variant='outline'
                className='h-12 border-outline-300 dark:border-outline-700 gap-2 rounded-lg'
                onPress={onContact}
              >
                <ButtonIcon
                  as={Headset}
                  className='text-typography-700 dark:text-typography-300'
                />
                <ButtonText className='text-typography-700 dark:text-typography-300'>
                  Talk to Us
                </ButtonText>
              </Button>
            </Animated.View>

            {/* Trust micro-copy */}
            <Animated.View
              entering={FadeInUp.delay(250).duration(500)}
              className='flex-row flex-wrap items-center justify-center gap-x-5 gap-y-2'
            >
              {trustFeatures.map((f) => (
                <View key={f} style={s.trustItem}>
                  <View style={s.trustDot} />
                  <Text className='text-xs text-typography-500'>{f}</Text>
                </View>
              ))}
            </Animated.View>
          </View>

          {/* ── Destinations strip ── */}
          <Animated.View
            entering={FadeInUp.delay(300).duration(500)}
            className='border-t border-outline-200 dark:border-outline-700'
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={s.stripContent}
            >
              {/* Label */}
              <View style={s.stripLabel}>
                <MapPin size={13} color='#5a9e2f' />
                <Text className='text-[10px] font-semibold tracking-widest uppercase text-typography-500 ml-1.5'>
                  Popular destinations
                </Text>
              </View>

              {/* Separator */}
              <View style={s.stripSep} />

              {/* Destination pills */}
              {destinations.map((dest, i) => (
                <View key={dest} style={s.destWrap}>
                  <Text
                    className='text-xs font-medium text-typography-500 py-4 px-4'
                    onPress={() => onDestinationPress?.(dest)}
                  >
                    {dest}
                  </Text>
                  {i < destinations.length - 1 && <View style={s.stripSep} />}
                </View>
              ))}
            </ScrollView>
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
}

// ─── StyleSheet ───────────────────────────────────────────────────────────────

const s = StyleSheet.create({
  glowBlob: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 300,
    height: 200,
    marginLeft: -150,
    marginTop: -100,
    backgroundColor: 'rgba(90,158,47,0.06)',
    borderRadius: 999,
    // blur not supported in RN — opacity + large radius gives similar ambient feel
  },

  eyebrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyebrowLine: {
    height: 1,
    width: 28,
    backgroundColor: '#5a9e2f',
  },

  trustItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  trustDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(90,158,47,0.5)',
  },

  // Destinations strip
  stripContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
  },
  stripLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  stripSep: {
    width: 1,
    height: 40,
    backgroundColor: '#e4e4e7',
  },
  destWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
