// app/terms.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

export default function TermsScreen() {
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
            Terms of Service<Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            Last updated: January 2026
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            By using GoShareBD, you agree to these terms. Please read them
            carefully.
          </Text>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Booking Terms
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            Bookings are confirmed after payment is received. Prices are subject
            to change. Full payment is required to secure your spot.
          </Text>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Cancellation
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            Cancellations made 7+ days before travel receive a full refund.
            Cancellations within 48 hours are non-refundable.
          </Text>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Liability
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            GoShareBD is not liable for injuries, losses, or damages during
            tours. Travel insurance is recommended.
          </Text>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Contact
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed'>
            Questions? Contact us at info@gosharebd.com
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
