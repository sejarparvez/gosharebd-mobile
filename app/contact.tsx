// app/contact.tsx

import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from 'lucide-react-native';
import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const CONTACT_CHANNELS = [
  {
    icon: Phone,
    label: 'Call us',
    value: '+880 1XXX-XXXXXX',
    sublabel: 'Sat–Thu, 9am–7pm',
  },
  {
    icon: Mail,
    label: 'Email us',
    value: 'hello@gosharebd.com',
    sublabel: 'We reply within 24 hours',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+880 1XXX-XXXXXX',
    sublabel: 'Quick questions',
  },
  {
    icon: MapPin,
    label: 'Visit us',
    value: 'Dhaka, Bangladesh',
    sublabel: 'By appointment only',
  },
];

const RESPONSE_TIMES = [
  { channel: 'Phone', time: 'Immediate', available: 'Sat–Thu, 9am–7pm' },
  { channel: 'WhatsApp', time: 'Under 1 hour', available: 'Sat–Thu, 9am–9pm' },
  { channel: 'Email', time: 'Within 24 hrs', available: 'Every day' },
  { channel: 'Contact form', time: 'Within 24 hrs', available: 'Every day' },
];

const SOCIAL = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
];

const OFFICE_HOURS = [
  { day: 'Saturday – Thursday', hours: '9:00am – 7:00pm' },
  { day: 'Friday', hours: 'Closed' },
  { day: 'Public holidays', hours: 'Closed' },
];

export default function ContactScreen() {
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
              Get in touch
            </Text>
          </View>
          <Text className='text-4xl font-bold text-typography-950 dark:text-typography-0 leading-tight mb-4'>
            We'd love to{' '}
            <Text className='italic font-light text-typography-500'>hear</Text>{' '}
            from you
            <Text className='text-primary-500'>.</Text>
          </Text>
          <Text className='text-sm text-typography-500 dark:text-typography-400 leading-relaxed'>
            Whether you have a question about a tour, need to make a change, or
            just want to say hello — we're here. Pick the channel that works
            best for you.
          </Text>
        </View>

        {/* Contact Channels */}
        <View className='px-4 pb-4'>
          <View className='grid grid-cols-2 gap-3'>
            {CONTACT_CHANNELS.map(({ icon: Icon, label, value, sublabel }) => (
              <View
                key={label}
                className='p-4 rounded-2xl border border-outline-200 dark:border-outline-800'
              >
                <View className='w-10 h-10 rounded-xl bg-primary-500/10 items-center justify-center mb-3'>
                  <Icon size={18} className='text-primary-500' />
                </View>
                <Text className='text-xs font-semibold tracking-widest uppercase text-typography-500 mb-1'>
                  {label}
                </Text>
                <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0'>
                  {value}
                </Text>
                <Text className='text-xs text-typography-500 mt-0.5'>
                  {sublabel}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Main Content */}
        <View className='px-4 py-4'>
          <View className='gap-6'>
            {/* Response Times */}
            <View>
              <View className='flex-row items-center gap-2 mb-3'>
                <View className='h-0.5 w-8 bg-primary-500' />
                <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
                  Response Times
                </Text>
              </View>
              <View className='rounded-2xl border border-outline-200 dark:border-outline-800 overflow-hidden'>
                {RESPONSE_TIMES.map(({ channel, time, available }, i) => (
                  <View
                    key={channel}
                    className={`flex-row items-center justify-between px-4 py-3.5 ${
                      i < RESPONSE_TIMES.length - 1
                        ? 'border-b border-outline-200 dark:border-outline-800'
                        : ''
                    }`}
                  >
                    <View>
                      <Text className='text-sm font-medium text-typography-900 dark:text-typography-0'>
                        {channel}
                      </Text>
                      <Text className='text-xs text-typography-500'>
                        {available}
                      </Text>
                    </View>
                    <View className='flex-row items-center gap-1.5'>
                      <Clock size={12} className='text-primary-500' />
                      <Text className='text-xs font-semibold text-primary-500'>
                        {time}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>

            {/* Office Hours */}
            <View>
              <View className='flex-row items-center gap-2 mb-3'>
                <View className='h-0.5 w-8 bg-primary-500' />
                <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
                  Office Hours
                </Text>
              </View>
              <View className='rounded-2xl border border-outline-200 dark:border-outline-800 overflow-hidden'>
                {OFFICE_HOURS.map(({ day, hours }, i) => (
                  <View
                    key={day}
                    className={`flex-row justify-between px-4 py-3 ${
                      i < 2
                        ? 'border-b border-outline-200 dark:border-outline-800'
                        : ''
                    }`}
                  >
                    <Text className='text-sm text-typography-500'>{day}</Text>
                    <Text
                      className={`text-sm font-medium ${
                        hours === 'Closed'
                          ? 'text-typography-500/60'
                          : 'text-typography-900 dark:text-typography-0'
                      }`}
                    >
                      {hours}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Social */}
            <View>
              <View className='flex-row items-center gap-2 mb-3'>
                <View className='h-0.5 w-8 bg-primary-500' />
                <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
                  Follow Us
                </Text>
              </View>
              <View className='flex-row gap-3'>
                {SOCIAL.map(({ icon: Icon, label }) => (
                  <View
                    key={label}
                    className='w-10 h-10 rounded-xl border border-outline-200 dark:border-outline-700 items-center justify-center'
                  >
                    <Icon size={16} className='text-typography-500' />
                  </View>
                ))}
              </View>
            </View>

            {/* Quick Links */}
            <View className='pt-2'>
              <Text className='text-xs font-semibold text-typography-500 uppercase tracking-wider mb-3 ml-1'>
                Quick links
              </Text>
              <View className='gap-2'>
                {['FAQ', 'Help Centre', 'Refund Policy', 'Safety Page'].map(
                  (label) => (
                    <Text
                      key={label}
                      className='text-sm text-typography-500 dark:text-typography-400 py-1 ml-1'
                    >
                      → {label}
                    </Text>
                  ),
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
