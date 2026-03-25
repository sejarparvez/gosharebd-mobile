// app/careers.tsx

import {
  CheckCircle2,
  Compass,
  Heart,
  MapPin,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react-native';
import { Pressable, ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const VALUES = [
  {
    icon: Compass,
    title: 'We explore first',
    body: "Every destination we sell, we've visited ourselves. We only offer what we genuinely believe in.",
  },
  {
    icon: Heart,
    title: 'People over metrics',
    body: "Traveller experience comes first. If a decision is good for the spreadsheet but bad for the customer, we don't make it.",
  },
  {
    icon: Zap,
    title: 'Move with purpose',
    body: "We're a small team that moves fast — but thoughtfully. Speed without care is just recklessness.",
  },
  {
    icon: Users,
    title: 'Everyone has a voice',
    body: 'Good ideas can come from anywhere. We create space for every team member to shape what we build.',
  },
];

const PERKS = [
  'Free tour on your first month',
  'Flexible working hours',
  'Remote-friendly culture',
  'Annual travel allowance',
  'Learning & development budget',
  'Regular team retreats',
  'Health coverage',
  'A team that genuinely likes each other',
];

export default function CareersScreen() {
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
              Careers
            </Text>
          </View>
          <Text className='text-4xl font-bold text-typography-950 dark:text-typography-0 leading-tight mb-4'>
            Come work with{' '}
            <Text className='italic font-light text-typography-500'>us</Text>
            <Text className='text-primary-500'>.</Text>
          </Text>
          <Text className='text-sm text-typography-500 dark:text-typography-400 leading-relaxed'>
            We're a small team building something we genuinely believe in —
            making it easier for people to explore the remarkable country they
            live in.
          </Text>
        </View>

        {/* No Open Roles */}
        <View className='px-4 pb-4'>
          <View className='flex-row items-center gap-2 mb-4'>
            <View className='h-0.5 w-8 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              Open Roles
            </Text>
          </View>
          <View className='p-8 rounded-2xl border-2 border-dashed border-outline-300 dark:border-outline-700 text-center'>
            <View className='w-12 h-12 rounded-2xl bg-primary-500/10 items-center justify-center mb-3 self-center'>
              <Sparkles size={24} className='text-primary-500' />
            </View>
            <Text className='text-lg font-bold text-typography-900 dark:text-typography-0 mb-2'>
              No open roles right now
            </Text>
            <Text className='text-sm text-typography-500 leading-relaxed mb-3'>
              We're not actively hiring at the moment — but we're growing, and
              that changes. If you're excited about what we're building, get in
              touch.
            </Text>
            <View className='flex-row items-center justify-center gap-2'>
              <MapPin size={12} className='text-primary-500' />
              <Text className='text-xs text-primary-500 font-medium'>
                Based in Dhaka, Bangladesh · Remote-friendly
              </Text>
            </View>
          </View>
        </View>

        {/* Values */}
        <View className='px-4 py-6'>
          <View className='flex-row items-center gap-2 mb-4'>
            <View className='h-0.5 w-10 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              How We Work
            </Text>
          </View>
          <Text className='text-2xl font-bold text-typography-950 dark:text-typography-0 mb-5'>
            What you'd be joining
          </Text>
          <View className='gap-3'>
            {VALUES.map(({ icon: Icon, title, body }) => (
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

        {/* Perks */}
        <View className='px-4 py-6'>
          <View className='flex-row items-center gap-2 mb-4'>
            <View className='h-0.5 w-10 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              Perks & Benefits
            </Text>
          </View>
          <Text className='text-2xl font-bold text-typography-950 dark:text-typography-0 mb-4'>
            What we offer
          </Text>
          <View className='grid grid-cols-1 gap-2'>
            {PERKS.map((perk) => (
              <View key={perk} className='flex-row items-center gap-2'>
                <CheckCircle2 size={16} className='text-primary-500 shrink-0' />
                <Text className='text-sm text-typography-500'>{perk}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Express Interest */}
        <View className='px-4 py-6'>
          <View className='flex-row items-center gap-2 mb-4'>
            <View className='h-0.5 w-10 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              Stay in Touch
            </Text>
          </View>
          <Text className='text-2xl font-bold text-typography-950 dark:text-typography-0 mb-2'>
            Express your interest
          </Text>
          <Text className='text-sm text-typography-500 leading-relaxed mb-4'>
            If you think you'd be a great fit for what we're building, tell us
            about yourself. We keep every submission on file.
          </Text>
          <View className='p-4 rounded-2xl border border-outline-200 dark:border-outline-800'>
            <Text className='text-sm text-typography-500 text-center mb-3'>
              Send your CV and introduction to:
            </Text>
            <Pressable className='p-3 rounded-xl bg-primary-500'>
              <Text className='text-sm font-semibold text-white text-center'>
                careers@gosharebd.com
              </Text>
            </Pressable>
            <Text className='text-xs text-typography-500 text-center mt-3'>
              We read every message personally.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
