// app/safety.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

export default function SafetyScreen() {
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
              Safety
            </Text>
          </View>
          <Text className='text-3xl font-bold text-typography-950 dark:text-typography-0'>
            Your Safety Matters<Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Verified Tours
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            All our tours and guides are thoroughly vetted and verified before
            listing on our platform.
          </Text>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Emergency Support
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            Our team is available 24/7 during tours. In case of emergency,
            contact our hotline immediately.
          </Text>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Travel Insurance
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            We strongly recommend purchasing travel insurance that covers
            medical emergencies and trip cancellations.
          </Text>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            What You Should Know
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            Always follow your guide's instructions, especially in natural
            areas. Keep emergency contact numbers handy.
          </Text>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Contact
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed'>
            Safety concerns? Email us at safety@gosharebd.com
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
