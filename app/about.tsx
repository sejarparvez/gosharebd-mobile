// app/about.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

export default function AboutScreen() {
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
              Est. 2020
            </Text>
          </View>
          <Text className='text-4xl font-bold text-typography-950 dark:text-typography-0'>
            Your gateway to{'\n'}
            <Text className='italic font-light text-typography-500'>
              Bangladesh
            </Text>
            <Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-lg font-bold text-typography-900 dark:text-typography-0 mb-3'>
            About GoShareBD
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            GoShareBD was founded in 2020 with a simple belief: that Bangladesh
            has so much more to offer than what meets the eye.
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed'>
            We're proud to support over 200 local guides and tour operators,
            creating sustainable livelihoods while preserving our natural and
            cultural heritage.
          </Text>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-lg font-bold text-typography-900 dark:text-typography-0 mb-3'>
            Contact Us
          </Text>
          <Text className='text-sm text-typography-500'>
            Email: info@gosharebd.com
          </Text>
          <Text className='text-sm text-typography-500'>
            Phone: +880 123 456 7890
          </Text>
          <Text className='text-sm text-typography-500'>
            Location: Dhaka, Bangladesh
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
