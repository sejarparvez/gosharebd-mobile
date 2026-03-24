// app/help.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const CATEGORIES = [
  { id: 'getting-started', label: 'Getting Started', count: 5 },
  { id: 'booking', label: 'Booking', count: 6 },
  { id: 'payments', label: 'Payments', count: 5 },
  { id: 'cancellations', label: 'Cancellations & Refunds', count: 5 },
  { id: 'during-tour', label: 'During the Tour', count: 5 },
  { id: 'safety', label: 'Safety', count: 4 },
];

export default function HelpScreen() {
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
              Help Centre
            </Text>
          </View>
          <Text className='text-3xl font-bold text-typography-950 dark:text-typography-0'>
            How can we{' '}
            <Text className='italic font-light text-typography-500'>help</Text>?
            <Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6 gap-3'>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Popular Articles
          </Text>
          <View className='p-3 rounded-xl border border-outline-200 dark:border-outline-800'>
            <Text className='text-sm text-typography-900 dark:text-typography-0'>
              How to make a booking
            </Text>
          </View>
          <View className='p-3 rounded-xl border border-outline-200 dark:border-outline-800'>
            <Text className='text-sm text-typography-900 dark:text-typography-0'>
              Refund policy explained
            </Text>
          </View>
          <View className='p-3 rounded-xl border border-outline-200 dark:border-outline-800'>
            <Text className='text-sm text-typography-900 dark:text-typography-0'>
              Accepted payment methods
            </Text>
          </View>

          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mt-6 mb-2'>
            Browse by Category
          </Text>
          {CATEGORIES.map((cat) => (
            <View
              key={cat.id}
              className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'
            >
              <View className='flex-row justify-between items-center'>
                <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0'>
                  {cat.label}
                </Text>
                <Text className='text-xs text-typography-500'>
                  {cat.count} articles
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View className='px-4 py-6'>
          <Text className='text-sm text-typography-500 text-center'>
            Can't find what you're looking for?{' '}
            <Text className='text-primary-500'>Contact us</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
