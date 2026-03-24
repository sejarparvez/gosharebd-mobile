// app/profile.tsx

import { useRouter } from 'expo-router';
import { Pressable, ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

export default function ProfileScreen() {
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
            Profile<Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6'>
          <View className='items-center mb-6'>
            <View className='w-24 h-24 rounded-full bg-primary-500/10 items-center justify-center mb-3'>
              <Text className='text-2xl font-bold text-primary-500'>?</Text>
            </View>
            <Text className='text-lg font-semibold text-typography-900 dark:text-typography-0'>
              Guest User
            </Text>
            <Text className='text-sm text-typography-500'>
              Sign in to see your profile
            </Text>
          </View>
          <View className='gap-3'>
            <View className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'>
              <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-1'>
                Display Name
              </Text>
              <Text className='text-xs text-typography-500'>Not set</Text>
            </View>
            <View className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'>
              <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-1'>
                Email
              </Text>
              <Text className='text-xs text-typography-500'>Not set</Text>
            </View>
            <View className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'>
              <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-1'>
                Member Since
              </Text>
              <Text className='text-xs text-typography-500'>Not available</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
