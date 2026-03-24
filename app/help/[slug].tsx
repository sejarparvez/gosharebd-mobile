// app/help/[slug].tsx

import { useLocalSearchParams } from 'expo-router';
import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const ARTICLES: Record<string, { title: string; content: string }> = {
  'create-account': {
    title: 'How to create an account',
    content:
      'Creating an account is easy. Click on "Sign Up", enter your details or use Google to sign in instantly. Your account lets you book tours, save favorites, and manage bookings.',
  },
  'make-booking': {
    title: 'How to make a booking',
    content:
      'Browse our packages, choose one that suits you, and click "Book Now". Fill in your group details, travel date, and traveller information. After review, confirm your booking.',
  },
  'refund-policy': {
    title: 'Refund policy explained',
    content:
      'Cancellations made 7+ days before travel receive a full refund. Cancellations within 3-6 days receive 50% refund. Within 48 hours are non-refundable.',
  },
  'payment-methods': {
    title: 'Accepted payment methods',
    content:
      'We accept bKash, Nagad, bank transfer, and cash payment at our office. Payment instructions are sent after your booking is confirmed.',
  },
};

export default function HelpArticleScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const article = ARTICLES[slug as string] || {
    title: 'Help Article',
    content:
      'This article is coming soon. If you need immediate assistance, please contact us.',
  };

  return (
    <View className='flex-1 bg-background-0 dark:bg-background-950'>
      <ScrollView
        className='flex-1'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='pt-12 pb-6 px-4'>
          <Text className='text-xs text-typography-500 mb-2'>Help Article</Text>
          <Text className='text-2xl font-bold text-typography-950 dark:text-typography-0'>
            {article.title}
          </Text>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-sm text-typography-600 dark:text-typography-400 leading-relaxed'>
            {article.content}
          </Text>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-sm text-typography-500'>
            Need more help? <Text className='text-primary-500'>Contact us</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
