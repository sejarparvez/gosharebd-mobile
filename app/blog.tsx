// app/blog.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

export default function BlogScreen() {
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
              Journal
            </Text>
          </View>
          <Text className='text-3xl font-bold text-typography-950 dark:text-typography-0'>
            Stories from the{' '}
            <Text className='italic font-light text-typography-500'>road</Text>
            <Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-8 items-center'>
          <Text className='text-lg font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Blog Coming Soon
          </Text>
          <Text className='text-sm text-typography-500 text-center'>
            Travel guides, destination deep-dives, and tips for exploring
            Bangladesh.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
