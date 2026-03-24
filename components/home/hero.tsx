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
} from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

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

const CAROUSEL_HEIGHT = SCREEN_WIDTH * 0.7;

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
      className='flex-1 items-center py-3'
    >
      <Text className='text-lg font-bold text-typography-950 dark:text-typography-0 tabular-nums'>
        {displayed}
      </Text>
      <Text className='text-[10px] text-typography-500 mt-0.5'>
        {stat.label}
      </Text>
    </Animated.View>
  );
}

export default function Hero({
  onExploreTours,
  onContact,
}: {
  onExploreTours?: () => void;
  onContact?: () => void;
}) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const flatListRef = useRef<FlatList>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (activeIdx + 1) % destinations.length;
      flatListRef.current?.scrollToIndex({ index: next, animated: true });
      setActiveIdx(next);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIdx]);

  return (
    <View>
      {/* Carousel */}
      <View style={{ height: CAROUSEL_HEIGHT }}>
        <FlatList
          ref={flatListRef}
          data={destinations}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => String(i)}
          getItemLayout={(_, index) => ({
            length: SCREEN_WIDTH,
            offset: SCREEN_WIDTH * index,
            index,
          })}
          onMomentumScrollEnd={(e) => {
            const offset = e.nativeEvent.contentOffset.x;
            const index = Math.round(offset / SCREEN_WIDTH);
            setActiveIdx(index);
          }}
          renderItem={({ item: dest, index: idx }) => (
            <View style={{ width: SCREEN_WIDTH, height: CAROUSEL_HEIGHT }}>
              <Image
                source={{ uri: dest.image }}
                style={{ width: '100%', height: '100%' }}
                contentFit='cover'
                priority={idx === 0 ? 'high' : 'normal'}
              />
              <LinearGradient
                colors={['rgba(0,0,0,0.3)', 'transparent', 'rgba(0,0,0,0.7)']}
                locations={[0, 0.4, 1]}
                style={StyleSheet.absoluteFillObject}
              />

              {/* Tag */}
              <View
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 4,
                  backgroundColor: 'rgba(90,158,47,0.9)',
                  borderRadius: 20,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                }}
              >
                <Sparkles size={12} color='#fff' />
                <Text
                  style={{ color: '#fff', fontSize: 12, fontWeight: '600' }}
                >
                  {dest.tag}
                </Text>
              </View>

              {/* Rating */}
              <View
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 4,
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  borderRadius: 20,
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                }}
              >
                <Star size={13} fill='#facc15' color='#facc15' />
                <Text
                  style={{ fontSize: 12, fontWeight: '700', color: '#18181b' }}
                >
                  4.8
                </Text>
              </View>

              {/* Location */}
              <View
                style={{
                  position: 'absolute',
                  bottom: 16,
                  left: 16,
                  right: 16,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 6,
                    marginBottom: 4,
                  }}
                >
                  <MapPin size={14} color='rgba(255,255,255,0.8)' />
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.8)',
                      fontWeight: '500',
                    }}
                  >
                    Bangladesh
                  </Text>
                </View>
                <Text
                  style={{ fontSize: 22, fontWeight: '800', color: '#fff' }}
                >
                  {dest.name}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.8)',
                    marginTop: 2,
                  }}
                >
                  {dest.subtitle}
                </Text>
              </View>
            </View>
          )}
        />
      </View>

      {/* Destination Tabs */}
      <View className='px-4 py-3 -mt-6 relative z-10'>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
        >
          {destinations.map((dest, idx) => (
            <Button
              // biome-ignore lint/suspicious/noArrayIndexKey: static list
              key={idx}
              size='sm'
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
              <ButtonText className='text-xs'>{dest.name}</ButtonText>
            </Button>
          ))}
        </ScrollView>
      </View>

      {/* Content */}
      <View className='px-4 pb-3 gap-4'>
        {/* Headline */}
        <View className='gap-2 py-4'>
          <Text className='text-3xl font-extrabold tracking-tight text-typography-950 dark:text-typography-0 leading-tight'>
            See The Beauty.{'\n'}
            <Text className='text-primary-500 font-extrabold text-3xl'>
              GoShare
            </Text>{' '}
            The Story.
          </Text>
          <Text className='text-sm text-typography-500 mt-1 leading-relaxed'>
            10,000+ travelers have found their paradise with us.
          </Text>
        </View>

        {/* CTAs */}
        <View className='flex-row gap-3'>
          <Button
            size='lg'
            className='flex-1 h-12 bg-primary-500 rounded-lg'
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
          </Button>
        </View>

        {/* Social Proof */}
        <View className='flex-row items-center justify-between rounded-2xl bg-background-50 dark:bg-background-900 px-4 py-3 border border-outline-200 dark:border-outline-700'>
          <View className='flex-row items-center gap-3'>
            <View style={{ flexDirection: 'row' }}>
              {travelers.map((avatar, idx) => (
                <Animated.View
                  // biome-ignore lint/suspicious/noArrayIndexKey: static list
                  key={idx}
                  entering={ZoomIn.delay(200 + idx * 70).duration(350)}
                  style={{
                    marginLeft: idx === 0 ? 0 : -10,
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    borderWidth: 2,
                    borderColor: isDark ? '#1e1d22' : '#ffffff',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    source={{ uri: avatar }}
                    style={{ width: 28, height: 28 }}
                    contentFit='cover'
                  />
                </Animated.View>
              ))}
            </View>
            <View>
              <Text className='text-xs font-semibold text-typography-950 dark:text-typography-0'>
                10,247 travelers
              </Text>
              <View style={{ flexDirection: 'row', gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static list
                  <Star key={i} size={10} fill='#facc15' color='#facc15' />
                ))}
              </View>
            </View>
          </View>
          <View className='flex-row items-center gap-1.5 bg-success-100 dark:bg-success-900/30 rounded-full px-3 py-1.5'>
            <CheckCircle2 size={14} color='#5a9e2f' />
            <Text className='text-xs font-bold text-success-700 dark:text-success-400'>
              98%
            </Text>
          </View>
        </View>

        {/* Trust Features */}
        <View className='flex-row items-center justify-center gap-6'>
          {features.map((f) => (
            <View key={f} className='flex-row items-center gap-1'>
              <CheckCircle2 size={12} color='#5a9e2f' />
              <Text className='text-[10px] text-typography-500'>{f}</Text>
            </View>
          ))}
        </View>

        {/* Stats */}
        <View className='flex-row pt-2 border-t border-outline-100 dark:border-outline-800'>
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} stat={stat} delay={i * 100} />
          ))}
        </View>
      </View>
    </View>
  );
}
