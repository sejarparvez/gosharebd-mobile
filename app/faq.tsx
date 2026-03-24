// app/faq.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const FAQS = [
  {
    q: 'How do I book a tour?',
    a: 'Browse our packages, choose one that suits you, and click "Book Now". Fill in your details and confirm.',
  },
  {
    q: 'Do I need an account to book?',
    a: 'Yes, but signing up takes under a minute and you can use Google to log in.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'We recommend booking at least 7 days in advance for domestic tours.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Cancellations made 7+ days before get a full refund. Within 48 hours are non-refundable.',
  },
];

export default function FAQScreen() {
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
            Frequently asked{' '}
            <Text className='italic font-light text-typography-500'>
              questions
            </Text>
            <Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6 gap-4'>
          {FAQS.map((faq) => (
            <View
              key={faq.q}
              className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'
            >
              <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
                {faq.q}
              </Text>
              <Text className='text-sm text-typography-500 leading-relaxed'>
                {faq.a}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
