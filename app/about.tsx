// app/about.tsx

import {
  Award,
  Heart,
  MapPin,
  Shield,
  Star,
  TreePine,
  Users,
} from 'lucide-react-native';
import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const STATS = [
  { icon: Users, label: 'Happy Travelers', value: '10,000+' },
  { icon: MapPin, label: 'Destinations', value: '50+' },
  { icon: Award, label: 'Verified Tours', value: '500+' },
  { icon: Star, label: 'Average Rating', value: '4.8★' },
];

const VALUES = [
  {
    icon: Heart,
    title: 'Authentic Experiences',
    description:
      'We connect travelers with genuine local experiences that showcase the true spirit of Bangladesh.',
    tag: 'Culture',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description:
      'Your safety is our priority. All tours and guides are thoroughly vetted and verified.',
    tag: 'Verified',
  },
  {
    icon: TreePine,
    title: 'Sustainable Tourism',
    description:
      'We promote responsible travel that preserves our natural beauty and supports local communities.',
    tag: 'Eco',
  },
  {
    icon: Users,
    title: 'Community First',
    description:
      'We empower local guides and businesses, creating opportunities and fostering connections.',
    tag: 'Local',
  },
];

const TEAM = [
  {
    name: 'Ahmed Rahman',
    role: 'Founder & CEO',
    bio: 'Passionate about showcasing Bangladesh to the world',
  },
  {
    name: 'Nadia Islam',
    role: 'Head of Operations',
    bio: 'Ensuring seamless travel experiences for all',
  },
  {
    name: 'Rafiq Ahmed',
    role: 'Tour Director',
    bio: 'Expert in creating unforgettable journeys',
  },
  {
    name: 'Priya Roy',
    role: 'Community Manager',
    bio: 'Building connections between travelers and locals',
  },
];

export default function AboutScreen() {
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
              Est. 2020
            </Text>
          </View>
          <Text className='text-4xl font-bold text-typography-950 dark:text-typography-0 leading-tight'>
            Your gateway{'\n'}
            <Text className='italic font-light text-typography-500'>to</Text>{' '}
            Bangladesh
            <Text className='text-primary-500'>.</Text>
          </Text>
        </View>

        <View className='px-4 py-6'>
          <Text className='text-lg font-bold text-typography-900 dark:text-typography-0 mb-3'>
            Our Story
          </Text>
          <View className='gap-4'>
            <Text className='text-sm text-typography-500 dark:text-typography-400 leading-relaxed'>
              Founded in 2020, GoShareBD was born from a simple belief: that
              Bangladesh has so much more to offer than what meets the eye. Our
              founders — a group of passionate travelers and local guides — came
              together with a vision to showcase the authentic beauty of our
              country.
            </Text>
            <Text className='text-sm text-typography-500 dark:text-typography-400 leading-relaxed'>
              What started as a small community initiative has grown into
              Bangladesh's leading tour platform, connecting thousands of
              travelers with verified local guides and authentic experiences.
              We've helped visitors discover hidden waterfalls in Bandarban,
              navigate the mystical mangroves of the Sundarbans, and sip tea in
              the serene gardens of Sylhet.
            </Text>
            <Text className='text-sm text-typography-500 dark:text-typography-400 leading-relaxed'>
              Today, we're proud to support over 200 local guides and tour
              operators, creating sustainable livelihoods while preserving our
              natural and cultural heritage.
            </Text>
          </View>
        </View>

        <View className='px-4 pb-2'>
          <View className='grid grid-cols-2 gap-px bg-outline-200 dark:bg-outline-800 rounded-2xl overflow-hidden'>
            {STATS.map((stat) => (
              <View
                key={stat.label}
                className='p-4 bg-background-0 dark:bg-background-900 items-center'
              >
                <Text className='text-2xl font-bold text-primary-500'>
                  {stat.value}
                </Text>
                <View className='flex-row items-center gap-1 mt-1'>
                  <stat.icon size={12} className='text-typography-500' />
                  <Text className='text-[10px] text-typography-500 uppercase tracking-wider'>
                    {stat.label}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View className='px-4 py-6'>
          <View className='flex-row items-center gap-2 mb-4'>
            <View className='h-0.5 w-10 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              Our Values
            </Text>
          </View>
          <Text className='text-2xl font-bold text-typography-950 dark:text-typography-0 mb-5'>
            What we{' '}
            <Text className='italic font-light text-typography-500'>stand</Text>{' '}
            for
            <Text className='text-primary-500'>.</Text>
          </Text>
          <View className='gap-3'>
            {VALUES.map((value, index) => (
              <View
                key={value.title}
                className='p-4 rounded-2xl border border-outline-200 dark:border-outline-800'
              >
                <View className='flex-row items-center justify-between mb-2'>
                  <View className='w-10 h-10 rounded-xl bg-primary-500/10 items-center justify-center'>
                    <value.icon size={18} className='text-primary-500' />
                  </View>
                  <View className='px-2 py-1 rounded-full border border-outline-200 dark:border-outline-700'>
                    <Text className='text-[10px] text-typography-500 uppercase tracking-wider'>
                      {value.tag}
                    </Text>
                  </View>
                </View>
                <Text className='text-sm font-bold text-typography-900 dark:text-typography-0 mb-1'>
                  {value.title}
                </Text>
                <Text className='text-xs text-typography-500 leading-relaxed'>
                  {value.description}
                </Text>
                <View className='flex-row items-center gap-2 mt-3'>
                  <View className='h-px w-4 bg-primary-500/40' />
                  <Text className='text-[10px] text-primary-500/60 uppercase font-semibold'>
                    {String(index + 1).padStart(2, '0')}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View className='px-4 py-6'>
          <View className='flex-row items-center gap-2 mb-4'>
            <View className='h-0.5 w-10 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              Our Team
            </Text>
          </View>
          <Text className='text-2xl font-bold text-typography-950 dark:text-typography-0 mb-5'>
            The people behind GoShareBD
            <Text className='text-primary-500'>.</Text>
          </Text>
          <View className='gap-3'>
            {TEAM.map((member) => (
              <View
                key={member.name}
                className='flex-row items-center gap-3 p-3 rounded-2xl border border-outline-200 dark:border-outline-800'
              >
                <View className='w-14 h-14 rounded-full bg-primary-500/10 items-center justify-center'>
                  <Users size={20} className='text-primary-500' />
                </View>
                <View className='flex-1'>
                  <Text className='text-sm font-bold text-typography-900 dark:text-typography-0'>
                    {member.name}
                  </Text>
                  <View className='flex-row items-center gap-2 mt-1'>
                    <View className='h-px w-4 bg-primary-500/40' />
                    <Text className='text-[10px] text-primary-500/60 uppercase tracking-wider'>
                      {member.role}
                    </Text>
                  </View>
                  <Text className='text-xs text-typography-500 mt-1'>
                    {member.bio}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
