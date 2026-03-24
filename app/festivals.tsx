// app/festivals.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

export default function FestivalsScreen() {
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
              Festival Tours
            </Text>
          </View>
          <Text className='text-3xl font-bold text-typography-950 dark:text-typography-0'>
            Experience Bangladesh{' '}
            <Text className='italic font-light text-typography-500'>
              in celebration
            </Text>
            <Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-8 items-center'>
          <Text className='text-lg font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Festival Tours Coming Soon
          </Text>
          <Text className='text-sm text-typography-500 text-center'>
            From Rash Mela to Pohela Boishakh — we're curating authentic
            festival experiences across Bangladesh.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
