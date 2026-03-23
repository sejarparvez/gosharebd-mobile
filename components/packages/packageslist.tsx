import { Badge, BadgeText } from '@/components/ui/badge';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Text } from '@/components/ui/text';
import { Image } from 'expo-image';
import {
  AlertTriangle,
  Award,
  Clock,
  MapPin,
  Package,
  RefreshCcw,
  Star,
  Users,
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { useAllPackages } from '@/services/packages';
import type { AllPackagesType } from '@/types/package';

// ─── Props ────────────────────────────────────────────────────────────────────

interface PackagesScreenProps {
  onPackagePress: (pkg: AllPackagesType) => void;
  onGoHome: () => void;
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  return (
    <View className='px-4 pt-10 pb-8 bg-primary-50 dark:bg-primary-950/20 border-b border-outline-200 dark:border-outline-700'>
      <View style={s.eyebrow}>
        <View style={s.eyebrowLine} />
        <Text className='text-[11px] font-bold tracking-widest uppercase text-primary-500 ml-2'>
          Tour Packages
        </Text>
      </View>
      <Text className='text-4xl font-extrabold tracking-tight text-typography-950 dark:text-typography-0 leading-tight mt-3'>
        Find your next{' '}
        <Text className='italic font-light text-typography-500'>adventure</Text>
        <Text className='text-primary-500'>.</Text>
      </Text>
      <Text className='text-sm text-typography-500 leading-relaxed mt-2'>
        Browse all our curated tour packages across Bangladesh — from the misty
        hills of Bandarban to the mangroves of the Sundarbans.
      </Text>
    </View>
  );
}

// ─── Skeleton Card ────────────────────────────────────────────────────────────

function PackageCardSkeleton() {
  return (
    <View
      style={s.card}
      className='border border-outline-200 dark:border-outline-700 overflow-hidden'
    >
      {/* Image area */}
      <Skeleton className='h-48 w-full rounded-none' />

      {/* Body */}
      <View className='p-4 gap-3'>
        {/* Stats row */}
        <View className='flex-row gap-4'>
          <Skeleton className='h-3 w-16 rounded-full' />
          <Skeleton className='h-3 w-16 rounded-full' />
          <Skeleton className='h-3 w-12 rounded-full ml-auto' />
        </View>
        {/* Tags */}
        <View className='flex-row gap-2'>
          <Skeleton className='h-5 w-16 rounded-full' />
          <Skeleton className='h-5 w-20 rounded-full' />
        </View>
        {/* Price */}
        <View style={s.priceRowSkeleton}>
          <View className='gap-1.5'>
            <Skeleton className='h-2.5 w-16 rounded-full' />
            <Skeleton className='h-5 w-28 rounded-md' />
          </View>
        </View>
      </View>
    </View>
  );
}

// ─── Loading State ────────────────────────────────────────────────────────────

function LoadingState() {
  return (
    <View className='px-4 pt-6 gap-4'>
      {Array.from({ length: 4 }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: skeleton
        <PackageCardSkeleton key={i} />
      ))}
    </View>
  );
}

// ─── Error State ──────────────────────────────────────────────────────────────

function ErrorState({
  onRetry,
  onGoHome,
}: {
  onRetry: () => void;
  onGoHome: () => void;
}) {
  return (
    <View className='items-center justify-center px-8 py-24 gap-5'>
      <View className='w-16 h-16 rounded-full bg-error-100 dark:bg-error-900/30 items-center justify-center'>
        <AlertTriangle size={28} color='#e5431a' />
      </View>
      <View className='items-center gap-2'>
        <Text className='text-xl font-semibold text-typography-950 dark:text-typography-0 text-center'>
          Failed to load packages
        </Text>
        <Text className='text-sm text-typography-500 text-center leading-relaxed'>
          We couldn't fetch the packages. This might be a temporary issue —
          please try again.
        </Text>
      </View>
      <View className='flex-row gap-3'>
        <Button variant='outline' className='gap-2' onPress={onRetry}>
          <ButtonIcon
            as={RefreshCcw}
            className='text-typography-700 dark:text-typography-300'
          />
          <ButtonText className='text-typography-700 dark:text-typography-300'>
            Try again
          </ButtonText>
        </Button>
        <Button variant='outline' onPress={onGoHome}>
          <ButtonText className='text-typography-700 dark:text-typography-300'>
            Go home
          </ButtonText>
        </Button>
      </View>
    </View>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <View className='items-center justify-center py-24 gap-4'>
      <View className='w-20 h-20 rounded-full bg-background-100 dark:bg-background-800 items-center justify-center'>
        <Package size={40} color='#a1a1aa' />
      </View>
      <Text className='text-base font-semibold text-typography-900 dark:text-typography-100'>
        No packages yet
      </Text>
      <Text className='text-sm text-typography-500 text-center max-w-xs leading-relaxed'>
        Packages will appear here once they are added.
      </Text>
    </View>
  );
}

// ─── Package Card ─────────────────────────────────────────────────────────────

function PackageCard({
  pkg,
  index,
  isDark,
  onPress,
}: {
  pkg: AllPackagesType;
  index: number;
  isDark: boolean;
  onPress: () => void;
}) {
  const discountPct =
    pkg.originalPrice && pkg.originalPrice > pkg.pricePerPerson
      ? Math.round(
          ((pkg.originalPrice - pkg.pricePerPerson) / pkg.originalPrice) * 100,
        )
      : null;

  return (
    <Animated.View entering={FadeInDown.delay(index * 60).duration(400)}>
      <Pressable
        onPress={onPress}
        style={[s.card, isDark ? s.cardDark : s.cardLight]}
      >
        {/* ── Image ── */}
        <View style={s.imageWrap}>
          <Image
            source={{ uri: pkg.coverImage }}
            style={{ width: '100%', height: '100%' }}
            contentFit='cover'
          />
          <View style={s.overlayTop} />
          <View style={s.overlayBottom} />

          {/* Bestseller badge */}
          {pkg.isBestseller && (
            <View style={s.bestsellerBadge}>
              <Award size={11} color='#fff' />
              <Text style={{ fontSize: 11, fontWeight: '700', color: '#fff' }}>
                Bestseller
              </Text>
            </View>
          )}

          {/* Discount badge */}
          {discountPct && (
            <View style={s.discountBadge}>
              <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}>
                {discountPct}% off
              </Text>
            </View>
          )}

          {/* Name + location */}
          <View style={s.imageBottom}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '700',
                color: '#fff',
                marginBottom: 3,
              }}
              numberOfLines={2}
            >
              {pkg.name}
            </Text>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
            >
              <MapPin size={12} color='rgba(255,255,255,0.75)' />
              <Text
                style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)' }}
                numberOfLines={1}
              >
                {pkg.location}
              </Text>
            </View>
          </View>
        </View>

        {/* ── Body ── */}
        <View style={{ padding: 14, gap: 12 }}>
          {/* Stats row */}
          <View className='flex-row items-center gap-4'>
            {pkg.durationDays ? (
              <View className='flex-row items-center gap-1'>
                <Clock size={13} color='#5a9e2f' />
                <Text className='text-sm text-typography-500'>
                  {pkg.durationDays}D
                </Text>
              </View>
            ) : null}
            <View className='flex-row items-center gap-1'>
              <Users size={13} color='#5a9e2f' />
              <Text className='text-sm text-typography-500'>
                {pkg.minGroupSize}–{pkg.maxGroupSize}
              </Text>
            </View>
            {pkg.averageRating ? (
              <View className='flex-row items-center gap-1 ml-auto'>
                <Star size={13} fill='#facc15' color='#facc15' />
                <Text className='text-sm font-semibold text-typography-900 dark:text-typography-100'>
                  {pkg.averageRating.toFixed(1)}
                </Text>
                <Text className='text-xs text-typography-500'>
                  ({pkg.reviewCount ?? 0})
                </Text>
              </View>
            ) : null}
          </View>

          {/* Tags */}
          {pkg.tags && pkg.tags.length > 0 && (
            <View className='flex-row flex-wrap gap-1.5'>
              {pkg.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant='outline'
                  className='rounded-full px-2 py-0'
                >
                  <BadgeText className='text-[11px]'>{tag}</BadgeText>
                </Badge>
              ))}
              {pkg.tags.length > 3 && (
                <Badge variant='outline' className='rounded-full px-2 py-0'>
                  <BadgeText className='text-[11px]'>
                    +{pkg.tags.length - 3}
                  </BadgeText>
                </Badge>
              )}
            </View>
          )}

          {/* Pricing */}
          <View
            style={[
              s.priceRow,
              { borderTopColor: isDark ? '#27272a' : '#f4f4f5' },
            ]}
          >
            <View>
              <Text className='text-[11px] text-typography-500 uppercase tracking-wide mb-0.5'>
                Per person
              </Text>
              <View className='flex-row items-baseline gap-1.5'>
                <Text className='text-lg font-bold text-primary-500'>
                  ৳{Number(pkg.pricePerPerson).toLocaleString()}
                </Text>
                {pkg.originalPrice && pkg.originalPrice > pkg.pricePerPerson ? (
                  <Text className='text-xs text-typography-400 line-through'>
                    ৳{Number(pkg.originalPrice).toLocaleString()}
                  </Text>
                ) : null}
              </View>
            </View>

            {pkg.couplePrice ? (
              <View className='items-end'>
                <Text className='text-[11px] text-typography-500 uppercase tracking-wide mb-0.5'>
                  Couple
                </Text>
                <Text className='text-base font-bold text-pink-500 dark:text-pink-400'>
                  ৳{Number(pkg.couplePrice).toLocaleString()}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────

export default function PackagesList({
  onPackagePress,
  onGoHome,
}: PackagesScreenProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const { data, isPending, isError, refetch } = useAllPackages({
    isActive: true,
    type: 'REGULAR',
  });

  return (
    <FlatList
      data={isError || isPending ? [] : (data ?? [])}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
      ListHeaderComponent={
        <>
          <Header />
          {isPending && <LoadingState />}
          {isError && <ErrorState onRetry={refetch} onGoHome={onGoHome} />}
          {!isPending && !isError && data && data.length > 0 && (
            <View className='flex-row items-center justify-between px-4 pt-6 pb-2'>
              <Text className='text-xl font-bold text-typography-950 dark:text-typography-0'>
                All Packages
              </Text>
              <Text className='text-sm text-typography-500'>
                {data.length} {data.length === 1 ? 'package' : 'packages'}
              </Text>
            </View>
          )}
        </>
      }
      ListEmptyComponent={!isPending && !isError ? <EmptyState /> : null}
      renderItem={({ item, index }) => (
        <View className='px-4 pb-4'>
          <PackageCard
            pkg={item}
            index={index}
            isDark={isDark}
            onPress={() => onPackagePress(item)}
          />
        </View>
      )}
    />
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const s = StyleSheet.create({
  eyebrow: { flexDirection: 'row', alignItems: 'center' },
  eyebrowLine: { height: 1, width: 28, backgroundColor: '#5a9e2f' },

  card: { borderRadius: 16, overflow: 'hidden' },
  cardLight: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e4e4e7',
  },
  cardDark: {
    backgroundColor: '#09090b',
    borderWidth: 1,
    borderColor: '#27272a',
  },

  imageWrap: { position: 'relative', height: 200 },
  overlayTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '40%',
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  overlayBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    backgroundColor: 'rgba(0,0,0,0.65)',
  },

  bestsellerBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#5a9e2f',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  discountBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#e5431a',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  imageBottom: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    right: 12,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    paddingTop: 12,
  },
  priceRowSkeleton: {
    borderTopWidth: 1,
    borderTopColor: '#f4f4f5',
    paddingTop: 12,
  },
});
