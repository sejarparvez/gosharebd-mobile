// app/(tabs)/wishlist.tsx

import { Heart } from 'lucide-react-native';
import { ScrollView, View } from 'react-native';

import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export default function WishlistScreen() {
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
            My{' '}
            <Text className='italic font-light text-typography-500'>saved</Text>{' '}
            packages
          </Text>
        </View>
        <View className='px-4 py-16 items-center'>
          <View className='w-20 h-20 rounded-full bg-primary-500/10 items-center justify-center mb-5'>
            <Heart size={32} color='#5a9e2f' />
          </View>
          <Text className='text-lg font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Your wishlist is empty
          </Text>
          <Text className='text-sm text-typography-500 text-center max-w-xs mb-6'>
            Start exploring our packages and save the ones you love — they'll
            all appear here.
          </Text>
          <Button>
            <ButtonText>Explore Packages</ButtonText>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}
