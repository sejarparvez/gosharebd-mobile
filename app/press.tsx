// app/press.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

export default function PressScreen() {
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
              Press
            </Text>
          </View>
          <Text className='text-3xl font-bold text-typography-950 dark:text-typography-0'>
            Press & Media<Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            GoShareBD is Bangladesh's leading tour platform, connecting
            thousands of travelers with verified local guides and authentic
            experiences.
          </Text>

          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            About GoShareBD
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            Founded in 2020, GoShareBD helps travelers discover the hidden gems,
            rich culture, and natural beauty of Bangladesh through authentic,
            sustainable experiences.
          </Text>

          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Key Facts
          </Text>
          <View className='gap-2 mb-4'>
            <Text className='text-sm text-typography-500'>
              • 10,000+ Happy Travelers
            </Text>
            <Text className='text-sm text-typography-500'>
              • 50+ Destinations
            </Text>
            <Text className='text-sm text-typography-500'>
              • 500+ Verified Tours
            </Text>
            <Text className='text-sm text-typography-500'>
              • 200+ Local Guides
            </Text>
          </View>

          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Media Contact
          </Text>
          <Text className='text-sm text-typography-500 mb-4'>
            For press inquiries, interviews, or media assets, please contact:
          </Text>
          <Text className='text-sm text-typography-500'>
            press@gosharebd.com
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
