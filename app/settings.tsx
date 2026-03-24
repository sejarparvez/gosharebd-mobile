// app/settings.tsx

import { useRouter } from 'expo-router';
import { Pressable, ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

export default function SettingsScreen() {
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
            <View className='h-0.5 w-10 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              My Account
            </Text>
          </View>
          <Text className='text-3xl font-bold text-typography-950 dark:text-typography-0'>
            Settings<Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6 gap-3'>
          <View className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'>
            <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
              Profile Settings
            </Text>
            <Text className='text-xs text-typography-500'>
              Manage your display name and profile photo.
            </Text>
          </View>
          <View className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'>
            <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
              Notification Preferences
            </Text>
            <Text className='text-xs text-typography-500'>
              Choose what notifications you want to receive.
            </Text>
          </View>
          <View className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'>
            <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
              Privacy & Security
            </Text>
            <Text className='text-xs text-typography-500'>
              Manage your account security and privacy settings.
            </Text>
          </View>
          <View className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'>
            <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-2'>
              Help & Support
            </Text>
            <Text className='text-xs text-typography-500'>
              Get help with your account or bookings.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
