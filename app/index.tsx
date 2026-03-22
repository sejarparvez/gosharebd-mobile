import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView className='flex-1 bg-background-0'>
      <View className='flex-1 items-center justify-center gap-6 px-6 py-16'>
        {/* Header */}
        <Text className='text-3xl font-bold text-typography-950'>
          Color Token Test
        </Text>

        {/* ── PRIMARY ─────────────────────────────────────────── */}
        <View className='w-full gap-2'>
          <Text className='text-sm font-semibold text-typography-500 uppercase tracking-widest'>
            Primary
          </Text>
          <View className='flex-row flex-wrap gap-2'>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-primary-50  items-center justify-center'>
              <Text className='text-[9px] text-typography-950'>50</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-primary-100 items-center justify-center'>
              <Text className='text-[9px] text-typography-950'>100</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-primary-200 items-center justify-center'>
              <Text className='text-[9px] text-typography-950'>200</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-primary-300 items-center justify-center'>
              <Text className='text-[9px] text-typography-950'>300</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-primary-400 items-center justify-center'>
              <Text className='text-[9px] text-typography-0'>400</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-primary-500 items-center justify-center'>
              <Text className='text-[9px] text-typography-0'>500</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-primary-600 items-center justify-center'>
              <Text className='text-[9px] text-typography-0'>600</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-primary-700 items-center justify-center'>
              <Text className='text-[9px] text-typography-0'>700</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-primary-800 items-center justify-center'>
              <Text className='text-[9px] text-typography-0'>800</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-primary-900 items-center justify-center'>
              <Text className='text-[9px] text-typography-0'>900</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-primary-950 items-center justify-center'>
              <Text className='text-[9px] text-typography-0'>950</Text>
            </View>
          </View>
        </View>

        {/* ── SECONDARY ───────────────────────────────────────── */}
        <View className='w-full gap-2'>
          <Text className='text-sm font-semibold text-typography-500 uppercase tracking-widest'>
            Secondary
          </Text>
          <View className='flex-row flex-wrap gap-2'>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-secondary-50  border border-outline-200 items-center justify-center'>
              <Text className='text-[9px] text-typography-500'>50</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-secondary-100 border border-outline-200 items-center justify-center'>
              <Text className='text-[9px] text-typography-500'>100</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-secondary-200 items-center justify-center'>
              <Text className='text-[9px] text-typography-500'>200</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-secondary-300 items-center justify-center'>
              <Text className='text-[9px] text-typography-500'>300</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-secondary-400 items-center justify-center'>
              <Text className='text-[9px] text-typography-0'>400</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-secondary-500 items-center justify-center'>
              <Text className='text-[9px] text-typography-0'>500</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-secondary-600 items-center justify-center'>
              <Text className='text-[9px] text-typography-0'>600</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-secondary-700 items-center justify-center'>
              <Text className='text-[9px] text-typography-0'>700</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-secondary-800 items-center justify-center'>
              <Text className='text-[9px] text-typography-0'>800</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-secondary-900 items-center justify-center'>
              <Text className='text-[9px] text-typography-0'>900</Text>
            </View>
            <View className='h-10 flex-1 min-w-[36px] rounded-md bg-secondary-950 items-center justify-center'>
              <Text className='text-[9px] text-typography-0'>950</Text>
            </View>
          </View>
        </View>

        {/* ── SEMANTIC ────────────────────────────────────────── */}
        <View className='w-full gap-2'>
          <Text className='text-sm font-semibold text-typography-500 uppercase tracking-widest'>
            Semantic
          </Text>
          <View className='flex-row gap-3'>
            <View className='flex-1 rounded-xl bg-error-500 py-4 items-center'>
              <Text className='text-typography-0 font-semibold text-sm'>
                Error
              </Text>
              <Text className='text-typography-0 text-xs opacity-70'>
                #e5431a
              </Text>
            </View>
            <View className='flex-1 rounded-xl bg-warning-500 py-4 items-center'>
              <Text className='text-typography-950 font-semibold text-sm'>
                Warning
              </Text>
              <Text className='text-typography-950 text-xs opacity-70'>
                #f59e0b
              </Text>
            </View>
            <View className='flex-1 rounded-xl bg-success-500 py-4 items-center'>
              <Text className='text-typography-0 font-semibold text-sm'>
                Success
              </Text>
              <Text className='text-typography-0 text-xs opacity-70'>
                #5a9e2f
              </Text>
            </View>
            <View className='flex-1 rounded-xl bg-info-500 py-4 items-center'>
              <Text className='text-typography-0 font-semibold text-sm'>
                Info
              </Text>
              <Text className='text-typography-0 text-xs opacity-70'>
                #3b82f6
              </Text>
            </View>
          </View>
        </View>

        {/* ── TERTIARY / RING ──────────────────────────────────── */}
        <View className='w-full gap-2'>
          <Text className='text-sm font-semibold text-typography-500 uppercase tracking-widest'>
            Tertiary (Ring Accent)
          </Text>
          <View className='flex-row gap-3'>
            <View className='flex-1 rounded-xl bg-tertiary-300 py-4 items-center'>
              <Text className='text-typography-950 font-semibold text-sm'>
                -300
              </Text>
              <Text className='text-typography-950 text-xs opacity-60'>
                #86efac
              </Text>
            </View>
            <View className='flex-1 rounded-xl bg-tertiary-500 py-4 items-center'>
              <Text className='text-typography-0 font-semibold text-sm'>
                -500
              </Text>
              <Text className='text-typography-0 text-xs opacity-70'>
                #22c55e
              </Text>
            </View>
          </View>
        </View>

        {/* ── BACKGROUND SURFACES ─────────────────────────────── */}
        <View className='w-full gap-2'>
          <Text className='text-sm font-semibold text-typography-500 uppercase tracking-widest'>
            Background Surfaces
          </Text>
          <View className='flex-row flex-wrap gap-2'>
            <View className='rounded-lg px-4 py-3 bg-background-0 border border-outline-200'>
              <Text className='text-typography-700 text-xs font-medium'>
                default
              </Text>
            </View>
            <View className='rounded-lg px-4 py-3 bg-background-muted'>
              <Text className='text-typography-700 text-xs font-medium'>
                muted
              </Text>
            </View>
            <View className='rounded-lg px-4 py-3 bg-background-error'>
              <Text className='text-error-700 text-xs font-medium'>error</Text>
            </View>
            <View className='rounded-lg px-4 py-3 bg-background-warning'>
              <Text className='text-warning-700 text-xs font-medium'>
                warning
              </Text>
            </View>
            <View className='rounded-lg px-4 py-3 bg-background-success'>
              <Text className='text-success-700 text-xs font-medium'>
                success
              </Text>
            </View>
            <View className='rounded-lg px-4 py-3 bg-background-info'>
              <Text className='text-info-700 text-xs font-medium'>info</Text>
            </View>
          </View>
        </View>

        {/* ── TYPOGRAPHY SCALE ────────────────────────────────── */}
        <View className='w-full gap-2'>
          <Text className='text-sm font-semibold text-typography-500 uppercase tracking-widest'>
            Typography
          </Text>
          <View className='rounded-xl bg-background-100 p-4 gap-1'>
            <Text className='text-typography-950 text-base font-bold'>
              950 — Primary text
            </Text>
            <Text className='text-typography-700 text-base'>
              700 — Secondary text
            </Text>
            <Text className='text-typography-500 text-base'>
              500 — Muted text
            </Text>
            <Text className='text-typography-300 text-base'>
              300 — Placeholder
            </Text>
          </View>
        </View>

        {/* ── OUTLINE / BORDER ────────────────────────────────── */}
        <View className='w-full gap-2'>
          <Text className='text-sm font-semibold text-typography-500 uppercase tracking-widest'>
            Outline / Border
          </Text>
          <View className='flex-row gap-3'>
            <View className='flex-1 h-14 rounded-lg border-2 border-outline-200 items-center justify-center'>
              <Text className='text-typography-500 text-xs'>200</Text>
            </View>
            <View className='flex-1 h-14 rounded-lg border-2 border-outline-400 items-center justify-center'>
              <Text className='text-typography-500 text-xs'>400</Text>
            </View>
            <View className='flex-1 h-14 rounded-lg border-2 border-outline-600 items-center justify-center'>
              <Text className='text-typography-500 text-xs'>600</Text>
            </View>
            <View className='flex-1 h-14 rounded-lg border-2 border-outline-800 items-center justify-center'>
              <Text className='text-typography-500 text-xs'>800</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
