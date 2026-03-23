import { Badge, BadgeText } from '@/components/ui/badge';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Divider } from '@/components/ui/divider';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import {
  ArrowRight,
  Bell,
  Clock,
  MapPin,
  Package,
  Star,
  TrendingUp,
} from 'lucide-react-native';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// ── Mock data ────────────────────────────────────────────────────────
const RECENT_ORDERS = [
  {
    id: '1',
    title: 'Electronics Package',
    from: 'Gulshan, Dhaka',
    to: 'Dhanmondi, Dhaka',
    status: 'In Transit',
    statusColor: 'info' as const,
    time: '2h ago',
  },
  {
    id: '2',
    title: 'Clothing Bundle',
    from: 'Uttara, Dhaka',
    to: 'Mirpur, Dhaka',
    status: 'Delivered',
    statusColor: 'success' as const,
    time: '1d ago',
  },
  {
    id: '3',
    title: 'Food Packages',
    from: 'Banani, Dhaka',
    to: 'Motijheel, Dhaka',
    status: 'Pending',
    statusColor: 'warning' as const,
    time: '2d ago',
  },
];

const STATS = [
  { label: 'Total Orders', value: '128', icon: Package, color: '#5a9e2f' },
  { label: 'Delivered', value: '114', icon: TrendingUp, color: '#3b82f6' },
  { label: 'Pending', value: '14', icon: Clock, color: '#f59e0b' },
];

const STATUS_BADGE_CLASSES = {
  info: 'bg-info-100 dark:bg-info-900',
  success: 'bg-success-100 dark:bg-success-900',
  warning: 'bg-warning-100 dark:bg-warning-900',
};

const STATUS_TEXT_CLASSES = {
  info: 'text-info-700 dark:text-info-300',
  success: 'text-success-700 dark:text-success-300',
  warning: 'text-warning-700 dark:text-warning-300',
};

// ── Screen ───────────────────────────────────────────────────────────
export default function HomeScreen() {
  return (
    <SafeAreaView className='flex-1 bg-background-50 dark:bg-background-950'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* ── Header ── */}
        <HStack className='items-center justify-between px-5 pt-4 pb-2'>
          <VStack>
            <Text className='text-sm text-typography-500 dark:text-typography-400'>
              Good morning 👋
            </Text>
            <Text className='text-2xl font-bold text-typography-950 dark:text-typography-0'>
              Welcome Back
            </Text>
          </VStack>
          <TouchableOpacity>
            <Box className='w-11 h-11 rounded-full bg-background-0 dark:bg-background-800 items-center justify-center border border-outline-200 dark:border-outline-700'>
              <Bell size={20} color='#a1a1aa' />
              <View className='absolute top-2 right-2 w-2 h-2 rounded-full bg-error-500' />
            </Box>
          </TouchableOpacity>
        </HStack>

        {/* ── Promo Banner ── */}
        <Box className='mx-5 mt-4 rounded-2xl bg-primary-500 dark:bg-primary-600 overflow-hidden'>
          <Box className='p-5'>
            <Badge className='bg-primary-400 dark:bg-primary-500 mb-3 self-start'>
              <BadgeText className='text-white text-xs font-semibold'>
                🎉 Special Offer
              </BadgeText>
            </Badge>
            <Text className='text-white text-xl font-bold mb-1'>
              50% off your next delivery
            </Text>
            <Text className='text-primary-100 text-sm mb-4'>
              Use code SHARE50 before it expires
            </Text>
            <Button size='sm' className='bg-white self-start'>
              <ButtonText className='text-primary-600 font-semibold'>
                Claim Now
              </ButtonText>
            </Button>
          </Box>
        </Box>

        {/* ── Stats Row ── */}
        <HStack className='mx-5 mt-5 gap-3'>
          {STATS.map((stat) => (
            <Card
              key={stat.label}
              className='flex-1 bg-background-0 dark:bg-background-800 rounded-2xl p-3 items-center border border-outline-100 dark:border-outline-700'
            >
              <Box
                className='w-9 h-9 rounded-full items-center justify-center mb-2'
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon size={18} color={stat.color} />
              </Box>
              <Text className='text-xl font-bold text-typography-950 dark:text-typography-0'>
                {stat.value}
              </Text>
              <Text className='text-xs text-typography-500 dark:text-typography-400 text-center'>
                {stat.label}
              </Text>
            </Card>
          ))}
        </HStack>

        {/* ── Recent Orders ── */}
        <VStack className='mx-5 mt-6'>
          <HStack className='items-center justify-between mb-3'>
            <Text className='text-lg font-bold text-typography-950 dark:text-typography-0'>
              Recent Orders
            </Text>
            <TouchableOpacity>
              <HStack className='items-center gap-1'>
                <Text className='text-sm text-primary-500 font-medium'>
                  See all
                </Text>
                <ArrowRight size={14} color='#5a9e2f' />
              </HStack>
            </TouchableOpacity>
          </HStack>

          <Card className='bg-background-0 dark:bg-background-800 rounded-2xl border border-outline-100 dark:border-outline-700 p-0 overflow-hidden'>
            {RECENT_ORDERS.map((order, index) => (
              <Box key={order.id}>
                <TouchableOpacity>
                  <HStack className='items-center gap-3 px-4 py-4'>
                    <Box className='w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-950 items-center justify-center'>
                      <Package size={20} color='#5a9e2f' />
                    </Box>

                    <VStack className='flex-1 gap-1'>
                      <HStack className='items-center justify-between'>
                        <Text className='font-semibold text-typography-900 dark:text-typography-100 text-sm'>
                          {order.title}
                        </Text>
                        <Text className='text-xs text-typography-400 dark:text-typography-500'>
                          {order.time}
                        </Text>
                      </HStack>

                      <HStack className='items-center gap-1'>
                        <MapPin size={11} color='#a1a1aa' />
                        <Text
                          className='text-xs text-typography-500 dark:text-typography-400 flex-1'
                          numberOfLines={1}
                        >
                          {order.from} → {order.to}
                        </Text>
                      </HStack>

                      <Box
                        className={`self-start px-2 py-0.5 rounded-full mt-0.5 ${STATUS_BADGE_CLASSES[order.statusColor]}`}
                      >
                        <Text
                          className={`text-xs font-medium ${STATUS_TEXT_CLASSES[order.statusColor]}`}
                        >
                          {order.status}
                        </Text>
                      </Box>
                    </VStack>
                  </HStack>
                </TouchableOpacity>

                {index < RECENT_ORDERS.length - 1 && (
                  <Divider className='bg-outline-100 dark:bg-outline-700' />
                )}
              </Box>
            ))}
          </Card>
        </VStack>

        {/* ── Rate Us ── */}
        <Card className='mx-5 mt-5 bg-background-0 dark:bg-background-800 rounded-2xl border border-outline-100 dark:border-outline-700'>
          <HStack className='items-center gap-4'>
            <Box className='w-12 h-12 rounded-full bg-warning-100 dark:bg-warning-900 items-center justify-center'>
              <Star size={22} color='#f59e0b' fill='#f59e0b' />
            </Box>
            <VStack className='flex-1'>
              <Text className='font-semibold text-typography-900 dark:text-typography-100'>
                Enjoying GoShare?
              </Text>
              <Text className='text-xs text-typography-500 dark:text-typography-400'>
                Rate us to help us improve
              </Text>
            </VStack>
            <Button size='sm' variant='outline' className='border-primary-500'>
              <ButtonText className='text-primary-500 text-xs font-semibold'>
                Rate
              </ButtonText>
            </Button>
          </HStack>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
