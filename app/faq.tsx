// app/faq.tsx

import { ChevronDown } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const FAQ_CATEGORIES = [
  {
    id: 'booking',
    label: 'Booking',
    questions: [
      {
        q: 'How do I book a tour package?',
        a: "Browse our packages, choose one that suits you, and click 'Book Now'. You'll need to be logged in, then fill in your group details, travel date, and traveller information. After reviewing the summary, confirm your booking — we'll get back to you within 24 hours.",
      },
      {
        q: 'Do I need an account to book?',
        a: 'Yes. An account lets us send you booking confirmations, keep your booking history in one place, and handle any changes or cancellations smoothly. Signing up takes under a minute and you can use Google to log in instantly.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'We recommend booking at least 7 days in advance for domestic tours and 14–21 days for longer packages. Popular tours during Eid, Puja holidays, and long weekends fill up quickly — for those, book 4–6 weeks ahead.',
      },
      {
        q: 'Can I book for a group?',
        a: "Absolutely. Our booking form supports groups up to the package's maximum size. You can add adults, pre-teens (11–14), children (6–10), and under-5s separately. Each adult and pre-teen will need their own details entered.",
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing & Payment',
    questions: [
      {
        q: 'How is the tour price calculated?',
        a: 'Pricing is based on a per-person base rate that varies by age tier. Adults pay the full rate, pre-teens (11–14) pay 75%, children (6–10) pay 50%, and under-5s travel free. A 15% VAT is added to the subtotal, as required by Bangladesh tax regulations.',
      },
      {
        q: 'When do I pay?',
        a: "After your booking request is confirmed by our team, we'll send you payment instructions. We currently support bKash, Nagad, bank transfer, and cash payment at our office. Full payment is required to secure your spot.",
      },
      {
        q: 'Are there any hidden fees?',
        a: "No hidden fees. The total shown at checkout — including VAT — is what you pay. The only potential extras are optional activities or personal expenses during the tour that aren't part of the package.",
      },
      {
        q: 'Do you offer group discounts?',
        a: "We offer negotiated rates for groups of 10 or more. Contact us directly for a custom quote — we're happy to work with corporate teams, school trips, and large families.",
      },
    ],
  },
  {
    id: 'cancellation',
    label: 'Cancellation & Changes',
    questions: [
      {
        q: 'What is your cancellation policy?',
        a: 'Cancellations made 7 or more days before the travel date receive a full refund. Cancellations within 3–6 days receive a 50% refund. Cancellations within 48 hours are non-refundable. In cases of natural disaster or government-declared emergency, we offer full refunds or free rescheduling.',
      },
      {
        q: 'Can I change my travel date after booking?',
        a: "Yes, date changes are free if requested 5 or more days before departure, subject to availability. Changes within 5 days may incur a ৳500 rescheduling fee. Contact us as early as possible and we'll do our best to accommodate you.",
      },
      {
        q: 'What happens if the tour is cancelled by you?',
        a: "If we cancel a tour for any reason — weather, insufficient group size, unforeseen circumstances — you'll receive a full refund within 3–5 business days, or the option to reschedule at no extra charge.",
      },
    ],
  },
  {
    id: 'tours',
    label: 'During the Tour',
    questions: [
      {
        q: 'What is included in the package price?',
        a: "Each package page lists exactly what's included and excluded. Typically included: transportation, accommodation (for overnight tours), guided activities, and entry fees. Typically excluded: meals unless stated, personal shopping, and optional add-ons.",
      },
      {
        q: 'Are your tours suitable for children?',
        a: 'Most of our tours welcome children, with age-appropriate activities. Each package page notes any age restrictions. For very young children, we recommend checking the physical demand level listed on the package before booking.',
      },
      {
        q: 'What should I bring on the tour?',
        a: "A detailed packing list is sent with your confirmation. Generally: national ID or passport (required for all adults), comfortable walking shoes, weather-appropriate clothing, any personal medication, and a small day bag. We'll handle the rest.",
      },
      {
        q: 'Is there a tour guide?',
        a: "Yes. All our packages include an experienced, English and Bengali speaking guide. They're your point of contact throughout the tour and are responsible for keeping the itinerary on track while making room for spontaneous moments.",
      },
    ],
  },
];

export default function FAQScreen() {
  const [openId, setOpenId] = useState<string | null>('booking-0');

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

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
              Help Centre
            </Text>
          </View>
          <Text className='text-4xl font-bold text-typography-950 dark:text-typography-0 leading-tight mb-4'>
            Frequently asked{' '}
            <Text className='italic font-light text-typography-500'>
              questions
            </Text>
            <Text className='text-primary-500'>.</Text>
          </Text>
          <Text className='text-sm text-typography-500 dark:text-typography-400 leading-relaxed'>
            Everything you need to know about booking a tour, pricing,
            cancellations, and what to expect on the day.
          </Text>
        </View>

        {/* FAQ Content */}
        <View className='px-4 py-4 gap-6'>
          {FAQ_CATEGORIES.map((category) => (
            <View key={category.id}>
              <View className='flex-row items-center gap-2 mb-3'>
                <View className='h-0.5 w-6 bg-primary-500' />
                <Text className='text-xs font-bold tracking-widest uppercase text-primary-500'>
                  {category.label}
                </Text>
              </View>
              <View className='border border-outline-200 dark:border-outline-800 rounded-2xl overflow-hidden'>
                {category.questions.map((item, i) => {
                  const id = `${category.id}-${i}`;
                  const isOpen = openId === id;
                  return (
                    <Pressable
                      key={id}
                      onPress={() => handleToggle(id)}
                      className={`p-4 border-b border-outline-200 dark:border-outline-800 ${
                        i === category.questions.length - 1 ? 'border-b-0' : ''
                      } ${isOpen ? 'bg-primary-5' : ''}`}
                    >
                      <View className='flex-row items-start justify-between gap-2'>
                        <Text
                          className={`text-sm font-medium leading-snug flex-1 ${
                            isOpen
                              ? 'text-primary-500'
                              : 'text-typography-900 dark:text-typography-0'
                          }`}
                        >
                          {item.q}
                        </Text>
                        <ChevronDown
                          size={16}
                          className={`text-typography-500 mt-0.5 shrink-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </View>
                      {isOpen && (
                        <Text className='text-sm text-typography-500 leading-relaxed mt-3'>
                          {item.a}
                        </Text>
                      )}
                    </Pressable>
                  );
                })}
              </View>
            </View>
          ))}
        </View>

        {/* Still not answered CTA */}
        <View className='px-4 py-6'>
          <View className='p-6 rounded-2xl border-2 border-dashed border-outline-300 dark:border-outline-700 text-center'>
            <Text className='text-base font-bold text-typography-900 dark:text-typography-0 mb-2'>
              Didn't find your answer?
            </Text>
            <Text className='text-sm text-typography-500 mb-3'>
              Our team typically responds within a few hours during business
              hours.
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
