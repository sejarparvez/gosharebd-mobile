// app/safety.tsx

import {
  AlertTriangle,
  Heart,
  Phone,
  Shield,
  ShieldCheck,
  Stethoscope,
  ThumbsUp,
  Users,
  Zap,
} from 'lucide-react-native';
import { Pressable, ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const COMMITMENTS = [
  {
    icon: ShieldCheck,
    title: 'Vetted guides & operators',
    body: 'Every guide on our platform goes through background verification, first-aid certification, and an in-person assessment before leading a tour. We re-evaluate annually.',
  },
  {
    icon: Stethoscope,
    title: 'First aid on every tour',
    body: 'All our guides carry a stocked first aid kit and hold a valid first aid certificate. For remote or multi-day tours, we carry an expanded wilderness kit.',
  },
  {
    icon: AlertTriangle,
    title: 'Weather & route monitoring',
    body: 'We monitor weather and route conditions 48 hours before every departure. If conditions become unsafe, we notify you immediately and offer a full reschedule or refund.',
  },
  {
    icon: Users,
    title: 'Group size limits',
    body: 'Every package has a maximum group size set not just for experience quality but for safety. Smaller groups are easier to manage, track, and evacuate in an emergency.',
  },
  {
    icon: Zap,
    title: 'Emergency protocols',
    body: 'Each tour has a written emergency action plan. Guides know the nearest hospital, police station, and evacuation route for every destination we operate in.',
  },
  {
    icon: Heart,
    title: 'Traveller wellbeing first',
    body: 'We would rather cancel a tour than compromise your safety. Our guides are empowered to call off or cut short any activity if they judge it to be unsafe — no questions asked.',
  },
];

const TRAVELLER_TIPS = [
  {
    number: '01',
    title: 'Carry your ID at all times',
    body: 'Keep your National ID or passport on you throughout the tour. It is required for hotel check-ins, park entries, and emergency identification.',
  },
  {
    number: '02',
    title: 'Share your itinerary',
    body: "Before you depart, share your full tour itinerary with a trusted contact at home — including departure time, accommodation details, and your guide's phone number.",
  },
  {
    number: '03',
    title: "Follow your guide's instructions",
    body: 'Your guide knows the terrain, local conditions, and community customs. Follow their instructions, especially near water, cliffs, or wildlife areas.',
  },
  {
    number: '04',
    title: 'Disclose medical conditions',
    body: 'Let us know about any medical conditions, allergies, or mobility limitations when booking. We treat this information confidentially and use it only to keep you safe.',
  },
  {
    number: '05',
    title: 'Stay with the group',
    body: 'Do not wander off alone, especially in unfamiliar terrain or after dark. If you need to leave the group for any reason, inform your guide first.',
  },
  {
    number: '06',
    title: 'Keep emergency contacts saved',
    body: "Save your guide's number, our 24-hour helpline, and local emergency numbers before you travel. Network coverage can be patchy in remote areas.",
  },
];

const EMERGENCY_CONTACTS = [
  { label: 'Our 24hr helpline', value: '+880 1XXX-XXXXXX' },
  { label: 'Bangladesh Police', value: '999' },
  { label: 'Fire & Civil Defence', value: '199' },
  { label: 'Ambulance (DGHS)', value: '16000' },
  { label: 'Tourist Police', value: '01769-691604' },
];

export default function SafetyScreen() {
  return (
    <View className='flex-1 bg-background-0 dark:bg-background-950'>
      <ScrollView
        className='flex-1'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <View className='pt-12 pb-6 px-4'>
          <View className='flex-row items-center gap-2 mb-3'>
            <View className='h-0.5 w-10 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              Your Safety
            </Text>
          </View>
          <Text className='text-4xl font-bold text-typography-950 dark:text-typography-0 leading-tight mb-4'>
            Safety is not a{' '}
            <Text className='italic font-light text-typography-500'>
              feature
            </Text>
            <Text className='text-primary-500'>.</Text>
          </Text>
          <Text className='text-sm text-typography-500 dark:text-typography-400 leading-relaxed'>
            It is the foundation of everything we do. Before a single itinerary
            is published, we have assessed the route, vetted the operators, and
            prepared for the unexpected.
          </Text>
        </View>

        {/* Our Commitments */}
        <View className='px-4 py-4'>
          <View className='flex-row items-center gap-2 mb-4'>
            <View className='h-0.5 w-10 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              Our Commitments
            </Text>
          </View>
          <Text className='text-2xl font-bold text-typography-950 dark:text-typography-0 mb-5'>
            What we do to keep{' '}
            <Text className='italic font-light text-typography-500'>
              you safe
            </Text>
          </Text>
          <View className='gap-3'>
            {COMMITMENTS.map(({ icon: Icon, title, body }) => (
              <View
                key={title}
                className='p-4 rounded-2xl border border-outline-200 dark:border-outline-800'
              >
                <View className='flex-row items-center gap-3 mb-2'>
                  <View className='w-9 h-9 rounded-lg bg-primary-500/10 items-center justify-center'>
                    <Icon size={16} className='text-primary-500' />
                  </View>
                  <Text className='text-sm font-bold text-typography-900 dark:text-typography-0'>
                    {title}
                  </Text>
                </View>
                <Text className='text-xs text-typography-500 leading-relaxed pl-12'>
                  {body}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Traveller Tips */}
        <View className='px-4 py-6'>
          <View className='flex-row items-center gap-2 mb-4'>
            <View className='h-0.5 w-10 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              Traveller Tips
            </Text>
          </View>
          <Text className='text-2xl font-bold text-typography-950 dark:text-typography-0 mb-4'>
            Your role in staying safe
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            Safety is a two-way responsibility. Following these guidelines helps
            us help you — and makes every tour better for the whole group.
          </Text>
          <View className='flex-row items-center gap-2 mb-4'>
            <ThumbsUp size={14} className='text-primary-500' />
            <Text className='text-xs text-primary-500 font-medium'>
              Applies to all tours and destinations
            </Text>
          </View>
          <View className='gap-4'>
            {TRAVELLER_TIPS.map(({ number, title, body }) => (
              <View key={number} className='flex-row gap-3'>
                <Text className='text-2xl font-bold text-primary-500/20 w-8 text-right shrink-0'>
                  {number}
                </Text>
                <View className='flex-1'>
                  <Text className='text-sm font-bold text-typography-900 dark:text-typography-0 mb-1'>
                    {title}
                  </Text>
                  <Text className='text-xs text-typography-500 leading-relaxed'>
                    {body}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Emergency Contacts */}
        <View className='px-4 py-6'>
          <View className='flex-row items-center gap-2 mb-4'>
            <View className='h-0.5 w-10 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              Emergency Contacts
            </Text>
          </View>
          <Text className='text-2xl font-bold text-typography-950 dark:text-typography-0 mb-4'>
            Save these before you go
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            Network coverage in remote areas can be unreliable. Save these
            numbers offline before your tour.
          </Text>
          <View className='rounded-2xl border border-outline-200 dark:border-outline-800 overflow-hidden'>
            {EMERGENCY_CONTACTS.map(({ label, value }, i) => (
              <View
                key={label}
                className={`flex-row items-center justify-between px-4 py-3 ${
                  i < EMERGENCY_CONTACTS.length - 1
                    ? 'border-b border-outline-200 dark:border-outline-800'
                    : ''
                }`}
              >
                <View className='flex-row items-center gap-3'>
                  <View className='w-7 h-7 rounded-full bg-primary-500/10 items-center justify-center'>
                    <Phone size={12} className='text-primary-500' />
                  </View>
                  <Text className='text-sm text-typography-500'>{label}</Text>
                </View>
                <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0'>
                  {value}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Report Concern CTA */}
        <View className='px-4 py-6'>
          <View className='p-6 rounded-2xl bg-primary-5 border border-primary-500/20'>
            <View className='w-12 h-12 rounded-2xl bg-primary-500/10 items-center justify-center mb-3 self-center'>
              <Shield size={24} className='text-primary-500' />
            </View>
            <Text className='text-base font-bold text-typography-900 dark:text-typography-0 text-center mb-2'>
              Something doesn't feel right?
            </Text>
            <Text className='text-sm text-typography-500 text-center mb-4'>
              If you ever feel unsafe — before, during, or after a tour — please
              tell us. Every report is taken seriously.
            </Text>
            <Pressable className='p-3 rounded-xl bg-primary-500'>
              <Text className='text-sm font-semibold text-white text-center'>
                Report a concern
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
