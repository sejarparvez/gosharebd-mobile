// app/(tabs)/account.tsx

import { useRouter } from 'expo-router';
import { Bell, FileText, Heart, Settings, User } from 'lucide-react-native';
import { Pressable, ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const MENU_ITEMS: {
  icon: typeof User;
  label: string;
  href: '/profile' | '/bookings' | '/wishlist' | '/notifications' | '/settings';
}[] = [
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: FileText, label: 'My Bookings', href: '/bookings' },
  { icon: Heart, label: 'Wishlist', href: '/wishlist' },
  { icon: Bell, label: 'Notifications', href: '/notifications' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function AccountScreen() {
  const router = useRouter();

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
            Welcome back<Text className='text-primary-500'>!</Text>
          </Text>
        </View>

        {/* Profile Card */}
        <View className='px-4 pb-6'>
          <View className='p-5 rounded-2xl border border-outline-200 dark:border-outline-800 bg-background-50 dark:bg-background-900 flex-row items-center gap-4'>
            <View className='w-16 h-16 rounded-full bg-primary-500/10 items-center justify-center'>
              <User size={28} color='#5a9e2f' />
            </View>
            <View className='flex-1'>
              <Text className='text-base font-bold text-typography-900 dark:text-typography-0'>
                Guest User
              </Text>
              <Text className='text-sm text-typography-500'>
                Sign in to access all features
              </Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View className='px-4 gap-3'>
          {MENU_ITEMS.map(({ icon: Icon, label, href }) => (
            <Pressable
              key={label}
              onPress={() => router.push(href)}
              className='flex-row items-center gap-4 p-4 rounded-2xl border border-outline-200 dark:border-outline-800'
            >
              <View className='w-10 h-10 rounded-xl bg-primary-500/10 items-center justify-center'>
                <Icon size={18} color='#5a9e2f' />
              </View>
              <Text className='flex-1 text-sm font-semibold text-typography-900 dark:text-typography-0'>
                {label}
              </Text>
              <View className='w-6 h-6 rounded-full border border-outline-300 dark:border-outline-600' />
            </Pressable>
          ))}
        </View>

        {/* Sign In Button */}
        <View className='px-4 pt-6'>
          <Pressable
            onPress={() => router.push('/sign-in')}
            className='p-4 rounded-2xl bg-primary-500 items-center'
          >
            <Text className='text-sm font-semibold text-white'>
              Sign In / Sign Up
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
