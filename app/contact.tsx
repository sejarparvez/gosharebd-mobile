// app/contact.tsx

import { useRouter } from 'expo-router';
import { Pressable, ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

export default function ContactScreen() {
  const router = useRouter();

  return (
    <View className='flex-1 bg-background-0 dark:bg-background-950'>
      <ScrollView
        className='flex-1'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='pt-12 pb-6 px-4'>
          <Pressable
            onPress={() => router.back()}
            className='flex-row items-center gap-2 mb-4'
          >
            <Text className='text-sm font-medium text-primary-500'>Back</Text>
          </Pressable>
          <View className='flex-row items-center gap-2 mb-3'>
            <View className='h-0.5 w-8 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              Get in touch
            </Text>
          </View>
          <Text className='text-3xl font-bold text-typography-950 dark:text-typography-0'>
            We'd love to{' '}
            <Text className='italic font-light text-typography-500'>hear</Text>{' '}
            from you
            <Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-lg font-bold text-typography-900 dark:text-typography-0 mb-4'>
            Contact Information
          </Text>
          <View className='gap-4'>
            <View className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'>
              <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0'>
                Email
              </Text>
              <Text className='text-sm text-typography-500'>
                info@gosharebd.com
              </Text>
            </View>
            <View className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'>
              <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0'>
                Phone
              </Text>
              <Text className='text-sm text-typography-500'>
                +880 123 456 7890
              </Text>
            </View>
            <View className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'>
              <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0'>
                Location
              </Text>
              <Text className='text-sm text-typography-500'>
                Dhaka, Bangladesh
              </Text>
            </View>
          </View>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-sm text-typography-500 text-center'>
            Office Hours: Saturday - Thursday, 9am - 7pm
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
