// app/privacy.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

export default function PrivacyScreen() {
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
              Legal
            </Text>
          </View>
          <Text className='text-3xl font-bold text-typography-950 dark:text-typography-0'>
            Privacy Policy<Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            Last updated: January 2026
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            GoShareBD ("we", "our", or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard your information.
          </Text>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Information We Collect
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            We collect information you provide directly, such as name, email,
            and phone number when you create an account or make a booking.
          </Text>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            How We Use Your Information
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            We use your information to process bookings, send confirmations, and
            provide customer support.
          </Text>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Contact
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed'>
            For privacy concerns, contact us at info@gosharebd.com
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
