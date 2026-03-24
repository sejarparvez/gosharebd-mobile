// app/my-reviews.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const REVIEWS = [
  {
    id: '1',
    package: 'Sundarbans Adventure',
    rating: 5,
    comment: 'Amazing experience! The guides were fantastic.',
    date: '15 Mar 2026',
  },
  {
    id: '2',
    package: "Cox's Bazar Beach Tour",
    rating: 4,
    comment: 'Beautiful views and great service.',
    date: '20 Feb 2026',
  },
];

export default function MyReviewsScreen() {
  return (
    <View className='flex-1 bg-background-0 dark:bg-background-950'>
      <ScrollView
        className='flex-1'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='pt-12 pb-6 px-4'>
          <View className='flex-row items-center gap-2 mb-3'>
            <View className='h-0.5 w-10 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              My Account
            </Text>
          </View>
          <Text className='text-3xl font-bold text-typography-950 dark:text-typography-0'>
            My Reviews<Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6 gap-4'>
          {REVIEWS.map((review) => (
            <View
              key={review.id}
              className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'
            >
              <View className='flex-row justify-between items-start mb-2'>
                <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0'>
                  {review.package}
                </Text>
                <Text className='text-xs text-primary-500'>
                  ★ {review.rating}/5
                </Text>
              </View>
              <Text className='text-sm text-typography-500 mb-2'>
                {review.comment}
              </Text>
              <Text className='text-xs text-typography-400'>{review.date}</Text>
            </View>
          ))}
          {REVIEWS.length === 0 && (
            <View className='py-12 items-center'>
              <Text className='text-sm text-typography-500'>
                No reviews yet
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
