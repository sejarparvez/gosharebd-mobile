// app/sign-in.tsx

import { ScrollView, View } from 'react-native';

import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export default function SignInScreen() {
  return (
    <View className='flex-1 bg-background-0 dark:bg-background-950'>
      <ScrollView
        className='flex-1'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='pt-20 pb-6 px-6'>
          <Text className='text-3xl font-bold text-typography-950 dark:text-typography-0 mb-2'>
            Welcome to GoShareBD
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-8'>
            Sign in to book tours, manage bookings, and more.
          </Text>
        </View>
        <View className='px-6 py-6 gap-4'>
          <Button className='w-full' size='lg'>
            <ButtonText>Sign in with Google</ButtonText>
          </Button>
          <Button variant='outline' className='w-full' size='lg'>
            <ButtonText>Sign in with Email</ButtonText>
          </Button>
        </View>
        <View className='px-6 py-6 items-center'>
          <Text className='text-sm text-typography-500'>
            Don't have an account?{' '}
            <Text className='text-primary-500 font-semibold'>Sign Up</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
