// app/book.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

export default function BookScreen() {
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
              Book Now
            </Text>
          </View>
          <Text className='text-3xl font-bold text-typography-950 dark:text-typography-0'>
            Reserve your{' '}
            <Text className='italic font-light text-typography-500'>spot</Text>
            <Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            To book a tour, please select a package and fill in your details.
            Our team will confirm your booking within 24 hours.
          </Text>
          <View className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'>
            <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
              How it works
            </Text>
            <View className='gap-2'>
              <Text className='text-xs text-typography-500'>
                1. Choose a tour package
              </Text>
              <Text className='text-xs text-typography-500'>
                2. Fill in your details
              </Text>
              <Text className='text-xs text-typography-500'>
                3. Submit booking request
              </Text>
              <Text className='text-xs text-typography-500'>
                4. Pay after confirmation
              </Text>
            </View>
          </View>
          <Text className='text-xs text-typography-500 mt-4'>
            Need help? <Text className='text-primary-500'>Contact us</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
