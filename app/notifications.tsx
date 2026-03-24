// app/notifications.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const NOTIFICATIONS = [
  {
    id: '1',
    title: 'Booking Confirmed!',
    message: 'Your Sundarbans Adventure booking has been confirmed.',
    time: '2 hours ago',
  },
  {
    id: '2',
    title: 'New Festival Added',
    message: 'Check out our new Pohela Boishakh celebration tour!',
    time: '1 day ago',
  },
  {
    id: '3',
    title: 'Special Offer',
    message: 'Get 20% off on all Sylhet tours this month!',
    time: '3 days ago',
  },
];

export default function NotificationsScreen() {
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
            Notifications<Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6 gap-3'>
          {NOTIFICATIONS.map((notif) => (
            <View
              key={notif.id}
              className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'
            >
              <View className='flex-row justify-between items-start mb-1'>
                <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0'>
                  {notif.title}
                </Text>
                <Text className='text-[10px] text-typography-500'>
                  {notif.time}
                </Text>
              </View>
              <Text className='text-xs text-typography-500 leading-relaxed'>
                {notif.message}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
