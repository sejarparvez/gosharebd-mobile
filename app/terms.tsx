// app/terms.tsx

import {
  AlertTriangle,
  BookOpen,
  FileText,
  Gavel,
  Lock,
  Scale,
  ShieldAlert,
  UserX,
} from 'lucide-react-native';
import { Pressable, ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const LAST_UPDATED = 'February 2026';

const SECTIONS = [
  {
    id: 'acceptance',
    icon: BookOpen,
    title: 'Acceptance of terms',
    content: [
      {
        subtitle: 'Agreement to terms',
        body: 'By accessing or using our platform — including browsing, creating an account, or making a booking — you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.',
      },
      {
        subtitle: 'Eligibility',
        body: 'You must be at least 18 years old to create an account or make a booking. By using the platform you confirm that you meet this requirement. A booking made by a person under 18 must be completed by a parent or legal guardian.',
      },
      {
        subtitle: 'Changes to terms',
        body: 'We may update these terms at any time. Significant changes will be communicated by email. Continued use of the platform after changes are published constitutes your acceptance of the revised terms.',
      },
    ],
  },
  {
    id: 'bookings',
    icon: FileText,
    title: 'Bookings & reservations',
    content: [
      {
        subtitle: 'Booking confirmation',
        body: 'A booking is confirmed only after you receive a written confirmation from us. Submitting a booking request does not guarantee availability. We reserve the right to decline any booking request.',
      },
      {
        subtitle: 'Accuracy of information',
        body: 'You are responsible for ensuring all traveller information provided during booking — including names, ID numbers, ages, and contact details — is accurate. Errors that result in issues during the tour (e.g. hotel check-in rejection, park entry denial) are your responsibility.',
      },
      {
        subtitle: 'Lead booker responsibility',
        body: 'The person making the booking (the lead booker) accepts these terms on behalf of all travellers in the group and is responsible for ensuring all group members are aware of and comply with tour rules and safety guidelines.',
      },
      {
        subtitle: 'Package contents',
        body: 'Each package listing specifies what is included and excluded. We reserve the right to substitute activities, accommodation, or transport with equivalent alternatives where necessary due to weather, safety, availability, or other circumstances beyond our control.',
      },
    ],
  },
  {
    id: 'payments',
    icon: Scale,
    title: 'Payments & pricing',
    content: [
      {
        subtitle: 'Pricing',
        body: 'All prices displayed are in Bangladeshi Taka (৳) and inclusive of 15% VAT where applicable. Prices are subject to change at any time before a booking is confirmed. Once confirmed, the price is locked.',
      },
      {
        subtitle: 'Payment obligation',
        body: 'Full payment is required within the timeframe specified in your booking confirmation. Failure to complete payment by the deadline may result in automatic cancellation of the booking.',
      },
      {
        subtitle: 'Pricing errors',
        body: 'In the event of a pricing error on our platform, we are not obligated to honour the incorrect price. We will contact you promptly to either offer the correct price or cancel the booking with a full refund.',
      },
    ],
  },
  {
    id: 'cancellations',
    icon: AlertTriangle,
    title: 'Cancellations & changes',
    content: [
      {
        subtitle: 'Cancellation by you',
        body: 'Cancellations are subject to our Refund Policy, which is incorporated into these terms by reference. Please review it before booking.',
      },
      {
        subtitle: 'Cancellation by us',
        body: 'We reserve the right to cancel any tour at any time due to safety concerns, insufficient group size, natural disasters, government restrictions, or other circumstances beyond our control. In such cases you will receive a full refund or the option to reschedule at no extra cost.',
      },
      {
        subtitle: 'Itinerary changes',
        body: 'We reserve the right to modify itineraries for safety, weather, or operational reasons. Changes to the fundamental nature of a package (e.g. the primary destination) entitle you to a full refund if you do not wish to proceed.',
      },
    ],
  },
  {
    id: 'conduct',
    icon: UserX,
    title: 'Traveller conduct',
    content: [
      {
        subtitle: 'Expected behaviour',
        body: 'All travellers are expected to behave respectfully toward guides, other travellers, local communities, and the natural environment. Harassment, discrimination, or disruptive behaviour will not be tolerated.',
      },
      {
        subtitle: 'Guide authority',
        body: 'Our guides have the authority to make decisions on safety, timing, and group management. Any traveller who refuses to follow reasonable safety instructions may be removed from the tour without refund.',
      },
      {
        subtitle: 'Prohibited activities',
        body: 'You must not engage in any illegal activity during a tour, damage natural or cultural sites, or act in a way that endangers yourself or others. You are responsible for any costs, fines, or legal consequences arising from your own conduct.',
      },
    ],
  },
  {
    id: 'liability',
    icon: ShieldAlert,
    title: 'Liability',
    content: [
      {
        subtitle: 'Limitation of liability',
        body: 'To the fullest extent permitted by applicable law, our total liability to you for any claim arising from use of the platform or participation in a tour is limited to the amount you paid for the booking in question.',
      },
      {
        subtitle: 'Force majeure',
        body: 'We are not liable for failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, government actions, civil unrest, pandemics, or extreme weather events.',
      },
      {
        subtitle: 'Personal risk',
        body: 'Outdoor and adventure activities carry inherent risk. By booking a tour you acknowledge this and accept that some level of risk is unavoidable. We strongly recommend obtaining adequate travel insurance before your tour.',
      },
      {
        subtitle: 'Travel insurance',
        body: 'We strongly recommend that all travellers obtain comprehensive travel insurance covering medical expenses, trip cancellation, and personal liability before booking. We do not provide insurance.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    icon: Lock,
    title: 'Intellectual property',
    content: [
      {
        subtitle: 'Our content',
        body: 'All content on the platform — including text, photographs, itineraries, brand elements, and code — is owned by or licensed to us. You may not reproduce, distribute, or use our content for commercial purposes without written permission.',
      },
      {
        subtitle: 'Your content',
        body: 'If you submit reviews, photographs, or other content to the platform, you grant us a non-exclusive, royalty-free licence to use, display, and share that content in connection with our services. You retain ownership of your content.',
      },
    ],
  },
  {
    id: 'governing-law',
    icon: Gavel,
    title: 'Governing law & disputes',
    content: [
      {
        subtitle: 'Applicable law',
        body: "These terms are governed by the laws of the People's Republic of Bangladesh. Any disputes arising from these terms or your use of the platform will be subject to the exclusive jurisdiction of the courts of Bangladesh.",
      },
      {
        subtitle: 'Informal resolution',
        body: 'Before initiating any formal legal proceedings, we ask that you contact us to attempt an informal resolution. Most issues can be resolved quickly through direct communication.',
      },
    ],
  },
];

export default function TermsScreen() {
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
            Terms of{' '}
            <Text className='italic font-light text-typography-500'>
              service
            </Text>
            <Text className='text-primary-500'>.</Text>
          </Text>
          <Text className='text-sm text-typography-500 dark:text-typography-400 leading-relaxed mb-2'>
            These terms govern your use of our platform and the bookings you
            make through it. Please read them — they are written to be
            understood, not to hide behind.
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
              These Terms of Service ("Terms") constitute a legally binding
              agreement between you and us. They apply to all users of the
              platform. If you have questions, contact us at{' '}
              <Text className='text-primary-500'>legal@gosharebd.com</Text>.
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

          {/* Related Links */}
          <View className='pt-2'>
            <Text className='text-xs font-semibold text-typography-500 uppercase tracking-wider mb-3 ml-1'>
              Related
            </Text>
            <View className='gap-1 pl-1'>
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Refund Policy', href: '/refund' },
                { label: 'Cookie Policy', href: '/cookies' },
              ].map(({ label }) => (
                <Text key={label} className='text-sm text-typography-500 py-1'>
                  → {label}
                </Text>
              ))}
            </View>
          </View>

          {/* Contact CTA */}
          <View className='p-6 rounded-2xl border-2 border-dashed border-outline-300 dark:border-outline-700'>
            <Text className='text-base font-bold text-typography-900 dark:text-typography-0 text-center mb-2'>
              Questions about these terms?
            </Text>
            <Text className='text-sm text-typography-500 text-center mb-3'>
              Email{' '}
              <Text className='text-primary-500'>legal@gosharebd.com</Text> and
              we'll respond within 2 business days.
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
