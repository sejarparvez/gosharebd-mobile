// app/bookings.tsx

import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const BOOKINGS = [
  {
    id: '1',
    name: 'Sundarbans Adventure',
    date: '15 Mar 2026',
    status: 'Confirmed',
    price: 8500,
  },
  {
    id: '2',
    name: "Cox's Bazar Beach Tour",
    date: '20 Feb 2026',
    status: 'Completed',
    price: 3500,
  },
];

export default function BookingsScreen() {
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
            My Bookings<Text className='text-primary-500'>.</Text>
          </Text>
        </View>
        <View className='px-4 py-6 gap-4'>
          {BOOKINGS.map((booking) => (
            <View
              key={booking.id}
              className='p-4 rounded-xl border border-outline-200 dark:border-outline-800'
            >
              <View className='flex-row justify-between items-start mb-2'>
                <Text className='text-base font-semibold text-typography-900 dark:text-typography-0'>
                  {booking.name}
                </Text>
                <View
                  className={`px-2 py-1 rounded-full ${booking.status === 'Confirmed' ? 'bg-primary-500/10' : 'bg-outline-100 dark:bg-outline-800'}`}
                >
                  <Text
                    className={`text-[10px] font-semibold ${booking.status === 'Confirmed' ? 'text-primary-500' : 'text-typography-500'}`}
                  >
                    {booking.status}
                  </Text>
                </View>
              </View>
              <Text className='text-xs text-typography-500 mb-1'>
                Travel Date: {booking.date}
              </Text>
              <Text className='text-sm font-bold text-primary-500'>
                ৳{booking.price.toLocaleString()}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
