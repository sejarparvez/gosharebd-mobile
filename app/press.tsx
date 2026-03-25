// app/press.tsx

import { Mail, Newspaper } from 'lucide-react-native';
import { Pressable, ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const COVERAGE = [
  {
    outlet: 'The Daily Star',
    category: 'Travel',
    title:
      'How local tour platforms are reshaping weekend travel in Bangladesh',
    excerpt:
      'A new wave of curated domestic tour operators is making it easier than ever for Bangladeshis to explore their own backyard.',
    date: 'January 2026',
    logo: 'TDS',
  },
  {
    outlet: 'Prothom Alo',
    category: 'Lifestyle',
    title: 'দেশের ভেতরে ভ্রমণের নতুন অভিজ্ঞতা',
    excerpt: 'স্থানীয় পর্যটনকে নতুনভাবে সংজ্ঞায়িত করছে একটি প্ল্যাটফর্ম।',
    date: 'December 2025',
    logo: 'PA',
  },
  {
    outlet: 'Business Standard BD',
    category: 'Technology',
    title:
      'Bangladeshi travel startups see surge in domestic bookings post-pandemic',
    excerpt:
      'Domestic tourism platforms are reporting record booking numbers as travellers increasingly opt for local experiences.',
    date: 'November 2025',
    logo: 'BS',
  },
  {
    outlet: 'Dhaka Tribune',
    category: 'Travel',
    title:
      'The Sundarbans is back — and these tour operators are making it accessible',
    excerpt:
      'With improved access and safety protocols, the Sundarbans is seeing a tourism revival.',
    date: 'October 2025',
    logo: 'DT',
  },
  {
    outlet: 'The Financial Express BD',
    category: 'Business',
    title:
      'Tourism tech: local platforms bridge the gap between travellers and operators',
    excerpt:
      'Technology-enabled tour booking platforms are transforming how Bangladeshis plan and book travel.',
    date: 'September 2025',
    logo: 'FE',
  },
];

const STATS = [
  { value: '5,000+', label: 'Happy travellers' },
  { value: '50+', label: 'Destinations' },
  { value: '4.8', label: 'Average rating' },
  { value: '2023', label: 'Founded' },
];

export default function PressScreen() {
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
              Press & Media
            </Text>
          </View>
          <Text className='text-4xl font-bold text-typography-950 dark:text-typography-0 leading-tight mb-4'>
            In the{' '}
            <Text className='italic font-light text-typography-500'>news</Text>
            <Text className='text-primary-500'>.</Text>
          </Text>
          <Text className='text-sm text-typography-500 dark:text-typography-400 leading-relaxed mb-4'>
            We're proud to be covered by some of Bangladesh's leading
            publications. For press enquiries, interviews, or media assets, get
            in touch with our press team directly.
          </Text>
          <Pressable className='flex-row items-center gap-2'>
            <Mail size={14} className='text-primary-500' />
            <Text className='text-sm font-medium text-primary-500'>
              press@gosharebd.com
            </Text>
          </Pressable>
        </View>

        {/* Stats */}
        <View className='px-4 pb-4'>
          <View className='grid grid-cols-2 gap-px bg-outline-200 dark:bg-outline-800 rounded-2xl overflow-hidden'>
            {STATS.map(({ value, label }) => (
              <View
                key={label}
                className='p-4 bg-background-0 dark:bg-background-900 items-center'
              >
                <Text className='text-2xl font-bold text-primary-500'>
                  {value}
                </Text>
                <Text className='text-[10px] text-typography-500 uppercase tracking-wider mt-1'>
                  {label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Coverage */}
        <View className='px-4 py-6'>
          <View className='flex-row items-center gap-2 mb-4'>
            <View className='h-0.5 w-10 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              As Seen In
            </Text>
          </View>
          <Text className='text-2xl font-bold text-typography-950 dark:text-typography-0 mb-5'>
            Recent coverage
          </Text>
          <View className='gap-3'>
            {COVERAGE.map(
              ({ outlet, category, title, excerpt, date, logo }) => (
                <View
                  key={outlet}
                  className='p-4 rounded-2xl border border-outline-200 dark:border-outline-800'
                >
                  <View className='flex-row items-center justify-between mb-3'>
                    <View className='flex-row items-center gap-3'>
                      <View className='w-9 h-9 rounded-lg bg-primary-500/10 items-center justify-center'>
                        <Text className='text-xs font-bold text-primary-500'>
                          {logo}
                        </Text>
                      </View>
                      <View>
                        <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0'>
                          {outlet}
                        </Text>
                        <Text className='text-xs text-typography-500'>
                          {category} · {date}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-1'>
                    {title}
                  </Text>
                  <Text className='text-xs text-typography-500 leading-relaxed'>
                    {excerpt}
                  </Text>
                </View>
              ),
            )}
          </View>
        </View>

        {/* Press Contact CTA */}
        <View className='px-4 py-6'>
          <View className='p-6 rounded-2xl bg-primary-5 border border-primary-500/20'>
            <View className='w-12 h-12 rounded-2xl bg-primary-500/10 items-center justify-center mb-3 self-center'>
              <Newspaper size={24} className='text-primary-500' />
            </View>
            <Text className='text-lg font-bold text-typography-900 dark:text-typography-0 text-center mb-2'>
              Working on a story?
            </Text>
            <Text className='text-sm text-typography-500 text-center mb-4'>
              We're happy to assist journalists and content creators with
              interviews, data, photography, and access to our team.
            </Text>
            <Pressable className='p-3 rounded-xl bg-primary-500'>
              <Text className='text-sm font-semibold text-white text-center'>
                Email press team
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
