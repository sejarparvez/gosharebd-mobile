// app/(tabs)/account.tsx

import { useRouter } from 'expo-router';
import {
  BookOpen,
  ChevronRight,
  FileText,
  Headphones,
  Heart,
  HelpCircle,
  Lock,
  MessageCircle,
  Settings,
  Shield,
  Star,
  User,
} from 'lucide-react-native';
import { Pressable, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@/components/ui/text';

type Route =
  | '/profile'
  | '/bookings'
  | '/wishlist'
  | '/my-reviews'
  | '/settings'
  | '/help'
  | '/contact'
  | '/faq'
  | '/refund'
  | '/privacy'
  | '/terms'
  | '/cookies'
  | '/safety'
  | '/about'
  | '/careers'
  | '/press'
  | '/festivals'
  | '/gallery'
  | '/sign-in';

interface MenuItem {
  icon: typeof User;
  label: string;
  href: Route;
}

const MENU_ITEMS: MenuItem[] = [
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: FileText, label: 'My Bookings', href: '/bookings' },
  { icon: Heart, label: 'Wishlist', href: '/wishlist' },
  { icon: Star, label: 'My Reviews', href: '/my-reviews' },
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: HelpCircle, label: 'Help Center', href: '/help' },
  { icon: MessageCircle, label: 'Contact Us', href: '/contact' },
  { icon: Headphones, label: 'FAQs', href: '/faq' },
  { icon: BookOpen, label: 'Refund Policy', href: '/refund' },
  { icon: Shield, label: 'Privacy Policy', href: '/privacy' },
  { icon: FileText, label: 'Terms of Service', href: '/terms' },
  { icon: Lock, label: 'Cookie Policy', href: '/cookies' },
  { icon: Shield, label: 'Safety Info', href: '/safety' },
  { icon: Shield, label: 'About Us', href: '/about' },
  { icon: Shield, label: 'Careers', href: '/careers' },
  { icon: Shield, label: 'Press', href: '/press' },
  { icon: Shield, label: 'Festivals', href: '/festivals' },
  { icon: Shield, label: 'Gallery', href: '/gallery' },
];

export default function AccountScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className='flex-1 bg-background-0 dark:bg-background-950'>
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
          <View className='p-4 rounded-2xl border border-outline-200 dark:border-outline-800 bg-background-50 dark:bg-background-900 flex-row items-center gap-3'>
            <View className='w-12 h-12 rounded-full bg-primary-500/10 items-center justify-center'>
              <User size={22} color='#5a9e2f' />
            </View>
            <View className='flex-1'>
              <Text className='text-sm font-bold text-typography-900 dark:text-typography-0'>
                Guest User
              </Text>
              <Text className='text-xs text-typography-500'>
                Sign in to access all features
              </Text>
            </View>
          </View>
        </View>

        {/* Compact Menu Grid */}
        <View className='px-4 pb-4'>
          <View className='flex-row flex-wrap gap-2'>
            {MENU_ITEMS.map(({ icon: Icon, label, href }) => (
              <Pressable
                key={label}
                onPress={() => router.push(href)}
                className='w-[48%] flex-row items-center gap-2 p-3 rounded-xl border border-outline-200 dark:border-outline-800 bg-background-0 dark:bg-background-900'
              >
                <View className='w-8 h-8 rounded-lg bg-primary-500/10 items-center justify-center'>
                  <Icon size={14} color='#5a9e2f' />
                </View>
                <Text className='flex-1 text-xs font-semibold text-typography-900 dark:text-typography-0'>
                  {label}
                </Text>
                <ChevronRight size={14} color='#9ca3af' />
              </Pressable>
            ))}
          </View>
        </View>

        {/* Sign In Button */}
        <View className='px-4 pt-2 pb-4'>
          <Pressable
            onPress={() => router.push('/sign-in')}
            className='p-3 rounded-xl bg-primary-500 items-center'
          >
            <Text className='text-sm font-semibold text-white'>
              Sign In / Sign Up
            </Text>
          </Pressable>
        </View>

        {/* App Version */}
        <View className='items-center pb-8'>
          <Text className='text-xs text-typography-400'>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
