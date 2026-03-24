// app/cookies.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

export default function CookiesScreen() {
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
            Cookie Policy<Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            Last updated: January 2026
          </Text>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            What are cookies?
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            Cookies are small text files stored on your device that help us
            improve your experience on our platform.
          </Text>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            How we use cookies
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            We use cookies to remember your preferences, keep you signed in, and
            understand how you use our services.
          </Text>
          <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Your choices
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            You can manage your cookie preferences in your browser settings.
            Disabling cookies may affect some features.
          </Text>
          <Text className='text-sm text-typography-500'>
            Questions? Contact us at info@gosharebd.com
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
