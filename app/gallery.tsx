// app/gallery.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

export default function GalleryScreen() {
  return (
    <View className='flex-1 bg-background-0 dark:bg-background-950'>
      <ScrollView
        className='flex-1'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='pt-12 pb-6 px-4'>
          <View className='flex-row items-center gap-2 mb-4'>
            <View className='h-0.5 w-12 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              Explore Bangladesh
            </Text>
          </View>
          <Text className='text-4xl font-bold text-typography-950 dark:text-typography-0'>
            Visual{'\n'}
            <Text className='italic font-light text-typography-500'>
              Stories
            </Text>
            <Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-8 items-center'>
          <Text className='text-lg font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Gallery Coming Soon
          </Text>
          <Text className='text-sm text-typography-500 text-center'>
            A collection of moments captured across the green delta — rivers,
            forests, and faces of Bangladesh.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
