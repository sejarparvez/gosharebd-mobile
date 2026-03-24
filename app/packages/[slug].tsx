// app/packages/[slug].tsx

import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  ArrowLeft,
  Award,
  CalendarDays,
  Check,
  Clock,
  Heart,
  MapPin,
  Share2,
  Star,
  Users,
} from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useSinglePackage } from '@/services/packages';

export default function PackageDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const { data: pkg, isPending, isError } = useSinglePackage(slug || '');

  const discountPct =
    pkg?.originalPrice && pkg.originalPrice > pkg.pricePerPerson
      ? Math.round(
          ((pkg.originalPrice - pkg.pricePerPerson) / pkg.originalPrice) * 100,
        )
      : null;

  if (isPending) {
    return (
      <View className='flex-1 bg-background-0 dark:bg-background-950 items-center justify-center'>
        <Text className='text-typography-500'>Loading...</Text>
      </View>
    );
  }

  if (isError || !pkg) {
    return (
      <View className='flex-1 bg-background-0 dark:bg-background-950 items-center justify-center'>
        <Text className='text-lg font-semibold text-typography-900 dark:text-typography-0'>
          Package not found
        </Text>
        <Button className='mt-4' onPress={() => router.back()}>
          <ButtonText>Go Back</ButtonText>
        </Button>
      </View>
    );
  }

  return (
    <View className='flex-1 bg-background-0 dark:bg-background-950'>
      <ScrollView
        className='flex-1'
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Hero Image ── */}
        <View style={s.heroContainer}>
          <Image
            source={{ uri: pkg.coverImage }}
            style={s.heroImage}
            contentFit='cover'
          />

          {/* Gradient overlay */}
          <View style={s.heroOverlay} />

          {/* Top bar */}
          <View style={[s.topBar, { paddingTop: insets.top + 8 }]}>
            <Pressable
              onPress={() => router.back()}
              className='w-10 h-10 rounded-full bg-white/90 items-center justify-center'
            >
              <ArrowLeft size={20} color='#1a1a1a' />
            </Pressable>
            <View className='flex-row gap-2'>
              <Pressable
                onPress={() => setIsWishlisted(!isWishlisted)}
                className='w-10 h-10 rounded-full bg-white/90 items-center justify-center'
              >
                <Heart
                  size={20}
                  color={isWishlisted ? '#ef4444' : '#1a1a1a'}
                  fill={isWishlisted ? '#ef4444' : 'transparent'}
                />
              </Pressable>
              <Pressable className='w-10 h-10 rounded-full bg-white/90 items-center justify-center'>
                <Share2 size={20} color='#1a1a1a' />
              </Pressable>
            </View>
          </View>

          {/* Bottom info overlay */}
          <View style={s.heroBottom}>
            {pkg.isBestseller && (
              <View className='flex-row items-center gap-1.5 bg-primary-500 px-3 py-1 rounded-full self-start mb-2'>
                <Award size={12} color='#fff' />
                <Text
                  style={{ fontSize: 11, fontWeight: '700', color: '#fff' }}
                >
                  Bestseller
                </Text>
              </View>
            )}
            <Text className='text-2xl font-bold text-white mb-1'>
              {pkg.name}
            </Text>
            <View className='flex-row items-center gap-1.5'>
              <MapPin size={14} color='rgba(255,255,255,0.8)' />
              <Text className='text-sm text-white/80'>{pkg.location}</Text>
            </View>
          </View>
        </View>

        {/* ── Quick Stats ── */}
        <Animated.View entering={FadeInUp.delay(100)} className='px-4 py-4'>
          <View className='flex-row justify-between'>
            {[
              {
                icon: Clock,
                label: 'Duration',
                value: `${pkg.durationDays} days`,
              },
              {
                icon: Users,
                label: 'Group',
                value: `${pkg.minGroupSize}-${pkg.maxGroupSize}`,
              },
              {
                icon: Star,
                label: 'Rating',
                value: pkg.averageRating ? `${pkg.averageRating}★` : 'N/A',
              },
            ].map(({ icon: Icon, label, value }) => (
              <View key={label} className='items-center flex-1'>
                <View className='w-10 h-10 rounded-full bg-primary-500/10 items-center justify-center mb-1'>
                  <Icon size={18} color='#5a9e2f' />
                </View>
                <Text className='text-[10px] text-typography-500 uppercase tracking-wider'>
                  {label}
                </Text>
                <Text className='text-sm font-bold text-typography-900 dark:text-typography-0'>
                  {value}
                </Text>
              </View>
            ))}
          </View>
        </Animated.View>

        {/* ── Price Section ── */}
        <View className='px-4 py-4 border-t border-outline-200 dark:border-outline-800'>
          <View className='flex-row items-end justify-between'>
            <View>
              <Text className='text-[11px] text-typography-500 mb-0.5'>
                From
              </Text>
              <View className='flex-row items-center gap-2'>
                <Text className='text-2xl font-extrabold text-primary-500'>
                  ৳{Number(pkg.pricePerPerson).toLocaleString()}
                </Text>
                {discountPct && (
                  <View className='bg-red-500 px-2 py-0.5 rounded'>
                    <Text className='text-[10px] font-bold text-white'>
                      {discountPct}% off
                    </Text>
                  </View>
                )}
              </View>
              {pkg.originalPrice && pkg.originalPrice > pkg.pricePerPerson && (
                <Text className='text-sm text-typography-400 line-through'>
                  ৳{Number(pkg.originalPrice).toLocaleString()}
                </Text>
              )}
            </View>
            <Text className='text-xs text-typography-500'>per person</Text>
          </View>
        </View>

        {/* ── Tags ── */}
        <View className='px-4 py-4'>
          <View className='flex-row flex-wrap gap-2'>
            {pkg.tags.map((tag) => (
              <View
                key={tag}
                className='px-3 py-1.5 rounded-full bg-primary-500/10'
              >
                <Text className='text-xs font-medium text-primary-500'>
                  {tag}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── Summary ── */}
        <View className='px-4 py-4'>
          <Text className='text-lg font-bold text-typography-900 dark:text-typography-0 mb-2'>
            About this tour
          </Text>
          <Text className='text-sm text-typography-600 dark:text-typography-400 leading-relaxed'>
            {pkg.summary}
          </Text>
        </View>

        {/* ── Highlights ── */}
        {pkg.highlights.length > 0 && (
          <View className='px-4 py-4'>
            <Text className='text-lg font-bold text-typography-900 dark:text-typography-0 mb-3'>
              Highlights
            </Text>
            <View className='gap-3'>
              {pkg.highlights.map((highlight) => (
                <View key={highlight} className='flex-row items-start gap-3'>
                  <View className='w-6 h-6 rounded-full bg-primary-500/10 items-center justify-center mt-0.5'>
                    <Check size={14} color='#5a9e2f' />
                  </View>
                  <Text className='text-sm text-typography-700 dark:text-typography-300 flex-1 leading-relaxed'>
                    {highlight}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* ── Includes/Excludes ── */}
        <View className='px-4 py-4'>
          <Text className='text-lg font-bold text-typography-900 dark:text-typography-0 mb-3'>
            What's included
          </Text>
          <View className='gap-2'>
            {pkg.includes.map((item) => (
              <View key={item} className='flex-row items-center gap-2'>
                <Check size={16} color='#5a9e2f' />
                <Text className='text-sm text-typography-700 dark:text-typography-300'>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── Itinerary ── */}
        {pkg.itinerary.length > 0 && (
          <View className='px-4 py-4'>
            <Text className='text-lg font-bold text-typography-900 dark:text-typography-0 mb-3'>
              Itinerary
            </Text>
            <View className='gap-4'>
              {pkg.itinerary.map((day, i) => (
                <View key={day.id} className='flex-row gap-3'>
                  <View className='items-center'>
                    <View className='w-8 h-8 rounded-full bg-primary-500 items-center justify-center'>
                      <Text className='text-xs font-bold text-white'>
                        {i + 1}
                      </Text>
                    </View>
                    {i < pkg.itinerary.length - 1 && (
                      <View className='w-0.5 flex-1 bg-primary-500/20 mt-2' />
                    )}
                  </View>
                  <View className='flex-1 pb-4'>
                    <View className='flex-row items-center gap-2 mb-1'>
                      <Text className='text-xs font-medium text-primary-500'>
                        {day.time}
                      </Text>
                    </View>
                    <Text className='text-base font-semibold text-typography-900 dark:text-typography-0 mb-1'>
                      {day.title}
                    </Text>
                    <Text className='text-sm text-typography-600 dark:text-typography-400 leading-relaxed'>
                      {day.description}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* ── Gallery Preview ── */}
        {pkg.gallery.length > 0 && (
          <View className='px-4 py-4'>
            <Text className='text-lg font-bold text-typography-900 dark:text-typography-0 mb-3'>
              Gallery
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className='flex-row gap-2'
            >
              {pkg.gallery.slice(0, 6).map((img) => (
                <Image
                  key={img.id}
                  source={{ uri: img.url }}
                  style={{ width: 120, height: 80, borderRadius: 12 }}
                  contentFit='cover'
                />
              ))}
            </ScrollView>
          </View>
        )}

        {/* ── Policies ── */}
        <View className='px-4 py-4'>
          <Text className='text-lg font-bold text-typography-900 dark:text-typography-0 mb-3'>
            Policies
          </Text>
          <View className='gap-3'>
            <View className='bg-background-50 dark:bg-background-900 p-4 rounded-xl'>
              <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-1'>
                Cancellation
              </Text>
              <Text className='text-xs text-typography-500 leading-relaxed'>
                {pkg.cancellationPolicy}
              </Text>
            </View>
            <View className='bg-background-50 dark:bg-background-900 p-4 rounded-xl'>
              <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-1'>
                Weather Policy
              </Text>
              <Text className='text-xs text-typography-500 leading-relaxed'>
                {pkg.weatherPolicy}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* ── Fixed Bottom CTA ── */}
      <View
        className='absolute bottom-0 left-0 right-0 bg-white dark:bg-background-900 border-t border-outline-200 dark:border-outline-800 p-4'
        style={{ paddingBottom: insets.bottom + 8 }}
      >
        <Button className='w-full' size='lg'>
          <CalendarDays size={20} color='#fff' />
          <ButtonText className='ml-2'>Book Now</ButtonText>
        </Button>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  heroContainer: { position: 'relative', height: 300 },
  heroImage: { width: '100%', height: '100%' },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  heroBottom: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
});
