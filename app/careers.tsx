// app/careers.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const OPEN_POSITIONS = [
  { id: '1', title: 'Tour Guide', location: 'Sylhet', type: 'Full-time' },
  { id: '2', title: 'Customer Support', location: 'Dhaka', type: 'Full-time' },
  { id: '3', title: 'Marketing Manager', location: 'Dhaka', type: 'Full-time' },
];

export default function CareersScreen() {
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
              Careers
            </Text>
          </View>
          <Text className='text-3xl font-bold text-typography-950 dark:text-typography-0'>
            Join Our Team<Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            We're always looking for passionate people to help us share the
            beauty of Bangladesh with the world.
          </Text>

          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-3'>
            Why Work With Us
          </Text>
          <View className='gap-2 mb-6'>
            <Text className='text-sm text-typography-500'>
              • Make a positive impact on local communities
            </Text>
            <Text className='text-sm text-typography-500'>
              • Work with passionate travel enthusiasts
            </Text>
            <Text className='text-sm text-typography-500'>
              • Flexible work environment
            </Text>
            <Text className='text-sm text-typography-500'>
              • Opportunities for growth
            </Text>
          </View>

          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-3'>
            Open Positions
          </Text>
          <View className='gap-3'>
            {OPEN_POSITIONS.map((job) => (
              <View
                key={job.id}
                className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'
              >
                <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0'>
                  {job.title}
                </Text>
                <View className='flex-row gap-2 mt-1'>
                  <Text className='text-xs text-typography-500'>
                    {job.location}
                  </Text>
                  <Text className='text-xs text-typography-400'>•</Text>
                  <Text className='text-xs text-typography-500'>
                    {job.type}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <Text className='text-xs text-typography-500 mt-6'>
            Don't see a fit? Send your CV to careers@gosharebd.com
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
