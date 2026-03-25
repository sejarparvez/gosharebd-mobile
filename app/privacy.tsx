// app/privacy.tsx

import {
  FileText,
  Lock,
  Mail,
  RefreshCw,
  Server,
  Share2,
  ShieldCheck,
  Trash2,
  UserCheck,
} from 'lucide-react-native';
import { Pressable, ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const LAST_UPDATED = 'February 2026';

const SECTIONS = [
  {
    id: 'what-we-collect',
    icon: FileText,
    title: 'What we collect',
    content: [
      {
        subtitle: 'Account information',
        body: 'When you create an account, we collect your name, email address, and — if you sign in with Google — your profile picture. We do not collect your Google password.',
      },
      {
        subtitle: 'Booking information',
        body: 'When you make a booking, we collect traveller details including full names, genders, National ID or passport numbers, email addresses, and phone numbers for each adult and pre-teen in your group. This is required by tour operators and accommodation providers.',
      },
      {
        subtitle: 'Payment information',
        body: 'We do not store card or banking details on our servers. Payments are processed via bKash, Nagad, or bank transfer. We record only the transaction reference number and payment status.',
      },
      {
        subtitle: 'Usage information',
        body: 'We collect standard server logs — pages visited, time spent, device type, browser, and approximate location derived from IP address. This is used solely to improve our service and diagnose technical issues.',
      },
    ],
  },
  {
    id: 'how-we-use',
    icon: UserCheck,
    title: 'How we use your information',
    content: [
      {
        subtitle: 'To fulfil your booking',
        body: 'Traveller details are shared with our tour guides and, where necessary, accommodation providers and park authorities. This is the primary purpose for collecting personal information and is required to operate the service.',
      },
      {
        subtitle: 'To communicate with you',
        body: 'We use your email address and phone number to send booking confirmations, itinerary updates, and important notices about your tour. We do not send marketing emails unless you have explicitly opted in.',
      },
      {
        subtitle: 'To improve the service',
        body: 'Aggregated, anonymised usage data helps us understand which destinations are popular, where users encounter problems, and how to improve the booking experience. No individual is identifiable from this data.',
      },
      {
        subtitle: 'To comply with the law',
        body: 'Bangladesh tourism regulations may require us to submit traveller registers to relevant authorities for certain national parks, border-adjacent areas, or overnight tours. We will always inform you when this applies to your booking.',
      },
    ],
  },
  {
    id: 'sharing',
    icon: Share2,
    title: 'Who we share it with',
    content: [
      {
        subtitle: 'Tour guides and operators',
        body: 'Guides receive the names, emergency contacts, and any disclosed medical conditions for their group. They do not receive National ID numbers or financial information.',
      },
      {
        subtitle: 'Accommodation providers',
        body: 'For overnight tours, accommodation providers receive the full name and National ID or passport number of each traveller as required by Bangladesh hotel regulations.',
      },
      {
        subtitle: 'Service providers',
        body: 'We use a small number of trusted third-party services to operate our platform — including our cloud infrastructure provider and email delivery service. They process data on our behalf and are contractually bound to protect it.',
      },
      {
        subtitle: 'We never sell your data',
        body: 'We do not sell, rent, or trade personal information to third parties for marketing purposes. Ever.',
      },
    ],
  },
  {
    id: 'storage',
    icon: Server,
    title: 'Storage & security',
    content: [
      {
        subtitle: 'Where your data is stored',
        body: 'Our servers are hosted in data centres that comply with international security standards. All data is encrypted in transit using TLS and at rest using AES-256 encryption.',
      },
      {
        subtitle: 'How long we keep it',
        body: 'Account data is retained for as long as your account is active. Booking records are retained for 5 years after the travel date, as required for tax and regulatory compliance. If you delete your account, personal data is removed within 30 days, except where retention is legally required.',
      },
      {
        subtitle: 'Passwords',
        body: 'Passwords are hashed using industry-standard algorithms and are never stored in plain text. Our team cannot see your password — if you forget it, you must reset it.',
      },
    ],
  },
  {
    id: 'rights',
    icon: ShieldCheck,
    title: 'Your rights',
    content: [
      {
        subtitle: 'Access',
        body: 'You can request a copy of all personal data we hold about you at any time. We will respond within 10 business days.',
      },
      {
        subtitle: 'Correction',
        body: 'If any information we hold is inaccurate, you can update it via your account settings or by contacting us directly.',
      },
      {
        subtitle: 'Deletion',
        body: 'You can delete your account at any time from your account settings. This will remove your personal profile and any data not required for legal or regulatory retention.',
      },
      {
        subtitle: 'Objection',
        body: 'You can object to certain uses of your data — for example, opting out of marketing communications — at any time via your account preferences or by emailing us.',
      },
    ],
  },
  {
    id: 'cookies',
    icon: Lock,
    title: 'Cookies',
    content: [
      {
        subtitle: 'What we use',
        body: 'We use only essential cookies required to operate the site — for example, to keep you logged in between sessions. We do not use advertising or tracking cookies.',
      },
      {
        subtitle: 'Third-party cookies',
        body: 'If you sign in with Google, Google may set cookies in accordance with their own privacy policy. We do not control these cookies.',
      },
    ],
  },
];

const RIGHTS_SUMMARY = [
  { icon: UserCheck, label: 'Access your data' },
  { icon: RefreshCw, label: 'Correct inaccuracies' },
  { icon: Trash2, label: 'Delete your account' },
  { icon: Mail, label: 'Opt out of marketing' },
];

export default function PrivacyScreen() {
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
              Legal
            </Text>
          </View>
          <Text className='text-4xl font-bold text-typography-950 dark:text-typography-0 leading-tight mb-4'>
            Privacy{' '}
            <Text className='italic font-light text-typography-500'>
              policy
            </Text>
            <Text className='text-primary-500'>.</Text>
          </Text>
          <Text className='text-sm text-typography-500 dark:text-typography-400 leading-relaxed mb-2'>
            We believe privacy policies should be readable. This one explains in
            plain language what data we collect, why we collect it, and what
            rights you have over it.
          </Text>
          <Text className='text-xs text-typography-500'>
            Last updated:{' '}
            <Text className='font-medium text-typography-900 dark:text-typography-0'>
              {LAST_UPDATED}
            </Text>
          </Text>
        </View>

        {/* Intro Note */}
        <View className='px-4 pb-4'>
          <View className='p-4 rounded-2xl bg-primary-5 border border-primary-500/20'>
            <Text className='text-sm text-typography-500 leading-relaxed'>
              This policy applies to all services operated by our platform,
              including the website, mobile app, and booking system. By using
              our services, you agree to the collection and use of information
              as described here. If you have questions, email us at{' '}
              <Text className='text-primary-500'>privacy@gosharebd.com</Text>.
            </Text>
          </View>
        </View>

        {/* Content */}
        <View className='px-4 py-4 gap-8'>
          {SECTIONS.map((section) => (
            <View key={section.id}>
              <View className='flex-row items-center gap-3 mb-4'>
                <View className='w-9 h-9 rounded-xl bg-primary-500/10 items-center justify-center'>
                  <section.icon size={16} className='text-primary-500' />
                </View>
                <Text className='text-lg font-bold text-typography-900 dark:text-typography-0'>
                  {section.title}
                </Text>
              </View>
              <View className='pl-12 gap-4'>
                {section.content.map(({ subtitle, body }) => (
                  <View key={subtitle}>
                    <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-1.5'>
                      {subtitle}
                    </Text>
                    <Text className='text-sm text-typography-500 leading-relaxed'>
                      {body}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          {/* Your Rights Summary */}
          <View>
            <Text className='text-xs font-semibold text-typography-500 uppercase tracking-wider mb-3 ml-1'>
              Your rights at a glance
            </Text>
            <View className='grid grid-cols-2 gap-2'>
              {RIGHTS_SUMMARY.map(({ icon: Icon, label }) => (
                <View
                  key={label}
                  className='flex-row items-center gap-2 text-xs text-typography-500'
                >
                  <Icon size={12} className='text-primary-500' />
                  <Text className='text-xs text-typography-500'>{label}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Contact CTA */}
          <View className='p-6 rounded-2xl border-2 border-dashed border-outline-300 dark:border-outline-700'>
            <Text className='text-base font-bold text-typography-900 dark:text-typography-0 text-center mb-2'>
              Questions about your privacy?
            </Text>
            <Text className='text-sm text-typography-500 text-center mb-3'>
              Email us at{' '}
              <Text className='text-primary-500'>privacy@gosharebd.com</Text>{' '}
              and we'll respond within 2 business days.
            </Text>
            <Pressable className='p-3 rounded-xl bg-primary-500'>
              <Text className='text-sm font-semibold text-white text-center'>
                Contact us
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
