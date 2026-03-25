// app/refund.tsx

import {
  AlertCircle,
  CalendarX,
  CreditCard,
  HelpCircle,
  RefreshCw,
  Umbrella,
} from 'lucide-react-native';
import { Pressable, ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const LAST_UPDATED = 'February 2026';

const CANCELLATION_TIERS = [
  {
    window: '7+ days before',
    refund: '100%',
    label: 'Full refund',
    color: 'text-green-600',
  },
  {
    window: '3–6 days before',
    refund: '50%',
    label: 'Partial refund',
    color: 'text-amber-600',
  },
  {
    window: 'Within 48 hours',
    refund: '0%',
    label: 'No refund',
    color: 'text-red-500',
  },
];

const SECTIONS = [
  {
    id: 'cancellation-by-you',
    icon: CalendarX,
    title: 'Cancellation by you',
    content: [
      {
        subtitle: '7 or more days before departure',
        body: 'You are entitled to a full refund of all amounts paid. No cancellation fee applies. Refunds are processed within 5–7 business days to your original payment method.',
      },
      {
        subtitle: '3 to 6 days before departure',
        body: 'A 50% refund of the total booking amount is issued. The remaining 50% covers costs already committed to guides, accommodation, and transport that cannot be recovered at short notice.',
      },
      {
        subtitle: 'Within 48 hours of departure',
        body: 'No refund is available. At this point, all operational costs for the tour have been committed. We strongly recommend purchasing travel insurance to cover last-minute cancellations.',
      },
    ],
  },
  {
    id: 'cancellation-by-us',
    icon: Umbrella,
    title: 'Cancellation by us',
    content: [
      {
        subtitle: 'Full refund or free reschedule',
        body: 'If we cancel a tour for any reason — including unsafe weather, insufficient group size, guide unavailability, or unforeseen operational issues — you will receive a full refund of all amounts paid, or the option to reschedule to any available date at no extra charge.',
      },
      {
        subtitle: 'Force majeure',
        body: 'In cases of natural disaster, government travel restrictions, civil emergency, or other events entirely beyond our control, we will offer a full credit valid for 12 months or a refund minus any non-recoverable third-party costs.',
      },
    ],
  },
  {
    id: 'date-changes',
    icon: RefreshCw,
    title: 'Date changes & rescheduling',
    content: [
      {
        subtitle: 'Free rescheduling (5+ days notice)',
        body: 'You can change your travel date once for free if you notify us at least 5 days before the original departure date, subject to availability on your preferred new date.',
      },
      {
        subtitle: 'Late rescheduling fee',
        body: 'Date changes requested within 5 days of departure are subject to a ৳500 rescheduling fee, again subject to availability.',
      },
    ],
  },
  {
    id: 'refund-process',
    icon: CreditCard,
    title: 'How refunds are processed',
    content: [
      {
        subtitle: 'Timeline',
        body: 'Refunds are initiated within 2 business days of confirmation. The time for funds to appear in your account depends on the payment method: bKash and Nagad typically within 24 hours; bank transfers within 3–5 business days.',
      },
      {
        subtitle: 'Payment method',
        body: 'Refunds are issued to the original payment method used for the booking. We cannot redirect a refund to a different account or method.',
      },
    ],
  },
  {
    id: 'non-refundable',
    icon: AlertCircle,
    title: 'Non-refundable items',
    content: [
      {
        subtitle: 'Add-ons and extras',
        body: 'Optional add-ons purchased separately — such as equipment rental, photography packages, or special activity upgrades — are non-refundable unless we cancel the tour.',
      },
      {
        subtitle: 'Third-party bookings',
        body: "If your tour package includes components booked through third parties (e.g. ferry tickets, domestic flights, national park permits), those components are subject to the third party's own refund policy.",
      },
    ],
  },
];

export default function RefundScreen() {
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
            Refund{' '}
            <Text className='italic font-light text-typography-500'>
              policy
            </Text>
            <Text className='text-primary-500'>.</Text>
          </Text>
          <Text className='text-sm text-typography-500 dark:text-typography-400 leading-relaxed mb-2'>
            Plans change — we understand. Here is exactly what happens to your
            money if you need to cancel or reschedule, with no small print.
          </Text>
          <Text className='text-xs text-typography-500'>
            Last updated:{' '}
            <Text className='font-medium text-typography-900 dark:text-typography-0'>
              {LAST_UPDATED}
            </Text>
          </Text>
        </View>

        {/* Cancellation Tiers */}
        <View className='px-4 pb-4'>
          <Text className='text-xs font-semibold text-typography-500 uppercase tracking-wider mb-3'>
            Cancellation at a glance
          </Text>
          <View className='gap-2'>
            {CANCELLATION_TIERS.map(({ window, refund, color }) => (
              <View
                key={window}
                className={`p-3 rounded-xl border ${
                  color === 'text-green-600'
                    ? 'bg-green-50 border-green-200 dark:bg-green-900/20'
                    : color === 'text-amber-600'
                      ? 'bg-amber-50 border-amber-200 dark:bg-amber-900/20'
                      : 'bg-red-50 border-red-200 dark:bg-red-900/20'
                }`}
              >
                <View className='flex-row justify-between items-center'>
                  <Text className='text-xs text-typography-600 dark:text-typography-300'>
                    {window}
                  </Text>
                  <Text className={`text-sm font-bold ${color}`}>{refund}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Insurance Tip */}
        <View className='px-4 pb-4'>
          <View className='p-3 rounded-xl bg-primary-5 border border-primary-500/20'>
            <View className='flex-row items-center gap-2 mb-1'>
              <HelpCircle size={14} className='text-primary-500' />
              <Text className='text-xs font-semibold text-primary-500'>
                Tip
              </Text>
            </View>
            <Text className='text-xs text-typography-500 leading-relaxed'>
              Travel insurance can cover cancellations outside our refund
              window. We recommend getting a policy before you book.
            </Text>
          </View>
        </View>

        {/* Content */}
        <View className='px-4 py-4 gap-6'>
          {SECTIONS.map((section) => (
            <View key={section.id}>
              <View className='flex-row items-center gap-3 mb-3'>
                <View className='w-8 h-8 rounded-lg bg-primary-500/10 items-center justify-center'>
                  <section.icon size={14} className='text-primary-500' />
                </View>
                <Text className='text-base font-bold text-typography-900 dark:text-typography-0'>
                  {section.title}
                </Text>
              </View>
              <View className='pl-11 gap-3'>
                {section.content.map(({ subtitle, body }) => (
                  <View key={subtitle}>
                    <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-1'>
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

          {/* Contact CTA */}
          <View className='p-5 rounded-2xl border-2 border-dashed border-outline-300 dark:border-outline-700'>
            <Text className='text-base font-bold text-typography-900 dark:text-typography-0 text-center mb-2'>
              Need to cancel or reschedule?
            </Text>
            <Text className='text-sm text-typography-500 text-center mb-3'>
              Get in touch as early as possible — the sooner you contact us, the
              more options we have.
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
