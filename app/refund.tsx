// app/refund.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

export default function RefundScreen() {
  return (
    <View className='flex-1 bg-background-0 dark:bg-background-950'>
      <ScrollView
        className='flex-1'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='pt-12 pb-6 px-4'>
          <View className='flex-row items-center gap-2 mb-3'>
            <View className='h-0.5 w-8 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              Legal
            </Text>
          </View>
          <Text className='text-3xl font-bold text-typography-950 dark:text-typography-0'>
            Refund Policy<Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            Plans change — we understand. Here is exactly what happens to your
            money if you need to cancel or reschedule.
          </Text>

          <View className='p-4 rounded-xl bg-primary-500/5 mb-4'>
            <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
              Cancellation at a glance
            </Text>
            <View className='gap-2'>
              <View className='flex-row justify-between'>
                <Text className='text-xs text-typography-500'>
                  7+ days before
                </Text>
                <Text className='text-xs font-bold text-green-600'>
                  100% refund
                </Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-xs text-typography-500'>
                  3-6 days before
                </Text>
                <Text className='text-xs font-bold text-amber-600'>
                  50% refund
                </Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-xs text-typography-500'>
                  Within 48 hours
                </Text>
                <Text className='text-xs font-bold text-red-500'>
                  No refund
                </Text>
              </View>
            </View>
          </View>

          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Cancellation by you
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            7+ days before: Full refund, no cancellation fee. Refunds processed
            within 5-7 business days.
          </Text>

          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Cancellation by us
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            If we cancel a tour for any reason, you will receive a full refund
            or free reschedule.
          </Text>

          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Date Changes
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            Free rescheduling with 5+ days notice. Late changes subject to ৳500
            fee.
          </Text>

          <Text className='text-xs text-typography-500'>
            Contact: info@gosharebd.com
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
