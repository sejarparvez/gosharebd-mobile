import { Image } from 'expo-image';
import {
  ArrowRight,
  Award,
  Clock,
  MapPin,
  Package,
  Star,
  Tag,
} from 'lucide-react-native';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  FadeInDown,
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { usePopularPackages } from '@/services/packages';
import type { AllPackagesType } from '@/types/package';

// ─── Skeleton Card ────────────────────────────────────────────────────────────

function PackageCardSkeleton() {
  return (
    <View className='rounded-2xl border border-outline-200 dark:border-outline-700 bg-background-0 dark:bg-background-950 overflow-hidden'>
      <View className='h-48 bg-background-100 dark:bg-background-800' />
      <View className='p-4 gap-3'>
        <View className='flex-row justify-between'>
          <View className='h-3 w-20 rounded bg-background-100 dark:bg-background-800' />
          <View className='h-3 w-16 rounded bg-background-100 dark:bg-background-800' />
        </View>
        <View className='h-3 w-full rounded bg-background-100 dark:bg-background-800' />
        <View className='h-10 w-full rounded-xl bg-background-100 dark:bg-background-800' />
      </View>
    </View>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <View className='items-center py-12 gap-3'>
      <View className='w-20 h-20 rounded-full bg-background-100 dark:bg-background-800 items-center justify-center'>
        <Package size={40} color='#a1a1aa' />
      </View>
      <Text className='text-base font-semibold text-typography-900 dark:text-typography-100'>
        No packages available
      </Text>
      <Text className='text-sm text-typography-500 text-center max-w-xs leading-relaxed'>
        Check back soon — new tour packages are being added regularly.
      </Text>
    </View>
  );
}

// ─── Package Card ─────────────────────────────────────────────────────────────

function PackageCard({
  pkg,
  index,
  onPress,
}: {
  pkg: AllPackagesType;
  index: number;
  onPress: () => void;
}) {
  const scale = useSharedValue(1);
  const animStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const discountPct =
    pkg.originalPrice && pkg.originalPrice > pkg.pricePerPerson
      ? Math.round(
          ((pkg.originalPrice - pkg.pricePerPerson) / pkg.originalPrice) * 100,
        )
      : null;

  return (
    <Animated.View entering={FadeInDown.delay(index * 100).duration(450)}>
      <Animated.View style={animStyle}>
        <Pressable
          onPressIn={() =>
            (scale.value = withSpring(0.98, { stiffness: 300, damping: 20 }))
          }
          onPressOut={() =>
            (scale.value = withSpring(1, { stiffness: 300, damping: 20 }))
          }
          onPress={onPress}
          className='rounded-2xl border border-outline-200 dark:border-outline-700 bg-background-0 dark:bg-background-950 overflow-hidden'
        >
          {/* ── Image ── */}
          <View style={s.imageWrap}>
            {pkg.coverImage ? (
              <Image
                source={{ uri: pkg.coverImage }}
                style={s.image}
                contentFit='cover'
                priority={index < 3 ? 'high' : 'normal'}
              />
            ) : (
              <View className='flex-1 items-center justify-center bg-background-100 dark:bg-background-800'>
                <Package size={40} color='#a1a1aa' />
              </View>
            )}

            <View style={s.overlayTop} />
            <View style={s.overlayBottom} />

            {/* Top-left: Bestseller OR Duration */}
            {pkg.isBestseller ? (
              <View style={s.bestsellerBadge}>
                <Award size={13} color='#fff' />
                <Text
                  style={{ fontSize: 11, fontWeight: '700', color: '#fff' }}
                >
                  Bestseller
                </Text>
              </View>
            ) : pkg.durationDays ? (
              <View style={s.durationBadge}>
                <Clock size={13} color='#5a9e2f' />
                <Text
                  style={{ fontSize: 12, fontWeight: '700', color: '#09090b' }}
                >
                  {pkg.durationDays} days
                </Text>
              </View>
            ) : null}

            {/* Top-right: Duration when bestseller takes top-left */}
            {pkg.isBestseller && pkg.durationDays ? (
              <View style={s.durationBadgeRight}>
                <Clock size={13} color='#5a9e2f' />
                <Text
                  style={{ fontSize: 12, fontWeight: '700', color: '#09090b' }}
                >
                  {pkg.durationDays} days
                </Text>
              </View>
            ) : null}

            {/* Discount pill */}
            {discountPct ? (
              <View style={s.discountBadge}>
                <Text
                  style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}
                >
                  {discountPct}% off
                </Text>
              </View>
            ) : null}

            {/* Bottom name + location */}
            <View style={s.imageBottom}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '800',
                  color: '#fff',
                  marginBottom: 3,
                }}
                numberOfLines={1}
              >
                {pkg.name}
              </Text>
              <View style={s.locationRow}>
                <MapPin size={13} color='rgba(255,255,255,0.8)' />
                <Text
                  style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)' }}
                  numberOfLines={1}
                >
                  {pkg.location}
                </Text>
              </View>
            </View>
          </View>

          {/* ── Card Content — Gluestack Text with className ── */}
          <View className='p-4 gap-3'>
            {/* Rating + group size */}
            <View className='flex-row items-center justify-between'>
              <View className='flex-row items-center gap-1'>
                {pkg.averageRating ? (
                  <>
                    <Star size={13} fill='#facc15' color='#facc15' />
                    <Text className='text-sm font-bold text-typography-900 dark:text-typography-100'>
                      {pkg.averageRating.toFixed(1)}
                    </Text>
                    <Text className='text-xs text-typography-500'>
                      ({pkg.reviewCount})
                    </Text>
                  </>
                ) : (
                  <Text className='text-xs text-typography-500'>
                    No reviews yet
                  </Text>
                )}
              </View>
              <View className='flex-row items-center gap-1'>
                <Tag size={13} color='#5a9e2f' />
                <Text className='text-xs text-typography-500'>
                  {pkg.minGroupSize}–{pkg.maxGroupSize} pax
                </Text>
              </View>
            </View>

            {/* Price row */}
            <View className='flex-row items-end justify-between'>
              <View>
                <Text className='text-[11px] text-typography-500 mb-0.5'>
                  Per person
                </Text>
                {pkg.originalPrice && pkg.originalPrice > pkg.pricePerPerson ? (
                  <Text className='text-xs text-typography-400 line-through'>
                    ৳{Number(pkg.originalPrice).toLocaleString()}
                  </Text>
                ) : null}
              </View>
              <Text className='text-xl font-extrabold text-primary-500'>
                ৳{Number(pkg.pricePerPerson).toLocaleString()}
              </Text>
            </View>

            {/* CTA — Gluestack Button */}
            <Button
              variant='outline'
              className='w-full border-outline-300 dark:border-outline-700'
            >
              <ButtonText className='text-typography-700 dark:text-typography-300'>
                View Package
              </ButtonText>
              <ButtonIcon
                as={ArrowRight}
                className='text-typography-700 dark:text-typography-300 ml-1'
              />
            </Button>
          </View>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface PopularPackagesProps {
  onPackagePress?: (pkg: AllPackagesType) => void;
  onBrowseAll?: () => void;
}

export default function PopularPackages({
  onPackagePress,
  onBrowseAll,
}: PopularPackagesProps) {
  const { data: packages, isPending, isError } = usePopularPackages();

  return (
    <View className='px-4 pt-10 pb-10 bg-background-50 dark:bg-background-950 border-b border-outline-200 dark:border-outline-700'>
      {/* ── Section Header ── */}
      <Animated.View
        entering={FadeInUp.delay(50).duration(500)}
        className='mb-6'
      >
        <View style={s.eyebrow}>
          <View style={s.eyebrowLine} />
          <Text className='text-[11px] font-bold tracking-widest uppercase text-primary-500'>
            Tour Packages
          </Text>
        </View>

        <View className='gap-3'>
          <Text className='text-3xl font-bold tracking-tight text-typography-950 dark:text-typography-0 leading-tight'>
            Our most{' '}
            <Text className='italic font-bold text-3xl text-primary-500'>
              loved
            </Text>{' '}
            tours across Bangladesh
            <Text className='text-primary-500'>.</Text>
          </Text>

          {/* Browse all — Gluestack Button */}
          <Button
            variant='outline'
            size='sm'
            className='self-start border-primary-500 gap-1.5'
            onPress={onBrowseAll}
          >
            <ButtonText className='text-primary-500'>
              Browse all packages
            </ButtonText>
            <ButtonIcon as={ArrowRight} className='text-primary-500' />
          </Button>
        </View>
      </Animated.View>

      {/* ── Content ── */}
      {isPending ? (
        <View className='gap-4'>
          {Array.from({ length: 3 }).map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: skeleton
            <PackageCardSkeleton key={i} />
          ))}
        </View>
      ) : isError || !packages || packages.length === 0 ? (
        <EmptyState />
      ) : (
        <View className='gap-4'>
          {packages.map((pkg, idx) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              index={idx}
              onPress={() => onPackagePress?.(pkg)}
            />
          ))}
        </View>
      )}
    </View>
  );
}

// ─── StyleSheet — only for overlay + absolute positioned items ────────────────
// These can't be expressed with className (position, percentages, insets).

const s = StyleSheet.create({
  imageWrap: { position: 'relative', height: 200 },
  image: { width: '100%', height: '100%' },
  overlayTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '45%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  overlayBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '55%',
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  bestsellerBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#5a9e2f',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  durationBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(255,255,255,0.93)',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  durationBadgeRight: {
    position: 'absolute',
    top: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(255,255,255,0.93)',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  discountBadge: {
    position: 'absolute',
    bottom: 52,
    right: 12,
    backgroundColor: '#e5431a',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  imageBottom: { position: 'absolute', bottom: 12, left: 12, right: 12 },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  eyebrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  eyebrowLine: { height: 1, width: 32, backgroundColor: '#5a9e2f' },
});
