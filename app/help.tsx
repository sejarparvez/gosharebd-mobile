// app/help.tsx

import { useRouter } from 'expo-router';
import {
  BookOpen,
  Calendar,
  CreditCard,
  LogIn,
  RefreshCw,
  Search,
  Shield,
  Star,
  Ticket,
  Users,
} from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const CATEGORIES = [
  {
    id: 'getting-started',
    icon: BookOpen,
    label: 'Getting Started',
    color: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    articles: [
      { title: 'How to create an account', slug: 'create-account' },
      { title: 'Signing in with Google', slug: 'google-signin' },
      {
        title: 'Browsing and filtering tour packages',
        slug: 'browsing-packages',
      },
      { title: 'Understanding package inclusions', slug: 'package-inclusions' },
      { title: 'How to read a tour itinerary', slug: 'read-itinerary' },
    ],
  },
  {
    id: 'booking',
    icon: Ticket,
    label: 'Booking',
    color: 'bg-green-50',
    iconBg: 'bg-green-100',
    articles: [
      { title: 'How to make a booking', slug: 'make-booking' },
      { title: 'Adding group members', slug: 'adding-members' },
      { title: 'Age categories explained', slug: 'age-categories' },
      { title: 'Booking for children and infants', slug: 'children-infants' },
      { title: 'What happens after I book?', slug: 'after-booking' },
      { title: 'Can I book for someone else?', slug: 'booking-for-others' },
    ],
  },
  {
    id: 'payments',
    icon: CreditCard,
    label: 'Payments',
    color: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    articles: [
      { title: 'How payment works', slug: 'how-payment-works' },
      { title: 'Accepted payment methods', slug: 'payment-methods' },
      { title: 'How pricing is calculated', slug: 'pricing-calculation' },
      { title: 'Understanding VAT on bookings', slug: 'vat-explained' },
      { title: 'Payment not going through', slug: 'payment-issues' },
    ],
  },
  {
    id: 'cancellations',
    icon: RefreshCw,
    label: 'Cancellations & Refunds',
    color: 'bg-red-50',
    iconBg: 'bg-red-100',
    articles: [
      { title: 'How to cancel a booking', slug: 'cancel-booking' },
      { title: 'Refund policy explained', slug: 'refund-policy' },
      { title: 'Requesting a date change', slug: 'date-change' },
      {
        title: 'What if the tour is cancelled by you?',
        slug: 'tour-cancelled',
      },
      { title: 'Refunds for medical emergencies', slug: 'medical-refund' },
    ],
  },
  {
    id: 'during-tour',
    icon: Ticket,
    label: 'During the Tour',
    color: 'bg-teal-50',
    iconBg: 'bg-teal-100',
    articles: [
      { title: 'What to bring on your tour', slug: 'what-to-bring' },
      { title: 'Meeting your guide', slug: 'meeting-your-guide' },
      { title: 'What happens if I miss departure?', slug: 'missed-departure' },
      { title: 'Itinerary changes on the day', slug: 'day-of-changes' },
      { title: 'Contacting us during the tour', slug: 'contact-during-tour' },
    ],
  },
  {
    id: 'safety',
    icon: Shield,
    label: 'Safety',
    color: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    articles: [
      { title: 'Our safety standards', slug: 'safety-standards' },
      { title: 'Disclosing medical conditions', slug: 'medical-disclosure' },
      { title: 'Emergency contacts', slug: 'emergency-contacts' },
      { title: 'Reporting a safety concern', slug: 'report-concern' },
    ],
  },
  {
    id: 'account',
    icon: LogIn,
    label: 'Account & Profile',
    color: 'bg-slate-50',
    iconBg: 'bg-slate-100',
    articles: [
      { title: 'Updating your profile', slug: 'update-profile' },
      { title: 'Changing your email address', slug: 'change-email' },
      { title: 'Viewing your booking history', slug: 'booking-history' },
      { title: 'Deleting your account', slug: 'delete-account' },
    ],
  },
  {
    id: 'reviews',
    icon: Star,
    label: 'Reviews',
    color: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    articles: [
      { title: 'How to leave a review', slug: 'leave-review' },
      { title: 'Editing or deleting a review', slug: 'edit-review' },
      { title: 'Our review guidelines', slug: 'review-guidelines' },
    ],
  },
];

const POPULAR_ARTICLES = [
  { title: 'How to make a booking', slug: 'make-booking', category: 'Booking' },
  {
    title: 'Age categories explained',
    slug: 'age-categories',
    category: 'Booking',
  },
  {
    title: 'Accepted payment methods',
    slug: 'payment-methods',
    category: 'Payments',
  },
  {
    title: 'Refund policy explained',
    slug: 'refund-policy',
    category: 'Cancellations',
  },
  {
    title: 'What to bring on your tour',
    slug: 'what-to-bring',
    category: 'During the Tour',
  },
  {
    title: 'Disclosing medical conditions',
    slug: 'medical-disclosure',
    category: 'Safety',
  },
];

export default function HelpScreen() {
  const router = useRouter();
  const [search, _setSearch] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  const filteredCategories = search
    ? CATEGORIES.filter((cat) =>
        cat.articles.some((a) =>
          a.title.toLowerCase().includes(search.toLowerCase()),
        ),
      ).map((cat) => ({
        ...cat,
        articles: cat.articles.filter((a) =>
          a.title.toLowerCase().includes(search.toLowerCase()),
        ),
      }))
    : CATEGORIES;

  const totalResults = search
    ? filteredCategories.reduce((sum, cat) => sum + cat.articles.length, 0)
    : null;

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
          <Text className='text-4xl font-bold text-typography-950 dark:text-typography-0 leading-tight mb-2'>
            How can we{' '}
            <Text className='italic font-light text-typography-500'>help</Text>?
            <Text className='text-primary-500'>.</Text>
          </Text>
          <Text className='text-sm text-typography-500 dark:text-typography-400 leading-relaxed'>
            Search our help articles or browse by category below.
          </Text>
        </View>

        {/* Search */}
        <View className='px-4 pb-4'>
          <View className='relative'>
            <View className='absolute left-4 top-1/2 -translate-y-1/2 z-10'>
              <Search size={16} className='text-typography-500' />
            </View>
            <Pressable className='h-12 rounded-xl border border-outline-200 dark:border-outline-800 bg-background-0 dark:bg-background-900 pl-10 pr-4'>
              <Text className='text-sm text-typography-500'>
                Search help articles...
              </Text>
            </Pressable>
          </View>
          {totalResults !== null && (
            <Text className='text-xs text-typography-500 mt-2'>
              {totalResults === 0
                ? 'No articles found — try different keywords or contact us.'
                : `${totalResults} article${totalResults !== 1 ? 's' : ''} found`}
            </Text>
          )}
        </View>

        {/* Popular Articles */}
        {!search && (
          <View className='px-4 pb-4'>
            <View className='flex-row items-center gap-2 mb-3'>
              <View className='h-0.5 w-8 bg-primary-500' />
              <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
                Popular Articles
              </Text>
            </View>
            <View className='gap-2'>
              {POPULAR_ARTICLES.map(({ title, slug, category }) => (
                <Pressable
                  key={slug}
                  onPress={() => router.push(`/help/${slug}`)}
                  className='flex-row items-center justify-between p-3 rounded-xl border border-outline-200 dark:border-outline-800'
                >
                  <View>
                    <Text className='text-sm font-medium text-typography-900 dark:text-typography-0'>
                      {title}
                    </Text>
                    <Text className='text-xs text-typography-500 mt-0.5'>
                      {category}
                    </Text>
                  </View>
                  <View className='w-6 h-6 rounded-full border border-outline-300 dark:border-outline-600' />
                </Pressable>
              ))}
            </View>
          </View>
        )}

        {/* Categories */}
        <View className='px-4 py-4 gap-4'>
          <View className='flex-row items-center gap-2 mb-2'>
            <View className='h-0.5 w-8 bg-primary-500' />
            <Text className='text-[10px] font-bold tracking-widest uppercase text-primary-500'>
              Categories
            </Text>
          </View>

          {filteredCategories.map((category) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === category.id;
            const showArticles = isExpanded && !search;

            return (
              <View
                key={category.id}
                className='rounded-2xl border border-outline-200 dark:border-outline-800 overflow-hidden'
              >
                {/* Category Header */}
                <Pressable
                  onPress={() => toggleCategory(category.id)}
                  className='flex-row items-center gap-3 px-4 py-3.5 bg-background-50 dark:bg-background-900'
                >
                  <View
                    className={`w-8 h-8 rounded-lg ${category.iconBg} items-center justify-center`}
                  >
                    <Icon size={14} className='text-primary-500' />
                  </View>
                  <View className='flex-1'>
                    <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0'>
                      {category.label}
                    </Text>
                    <Text className='text-xs text-typography-500'>
                      {category.articles.length} article
                      {category.articles.length !== 1 ? 's' : ''}
                    </Text>
                  </View>
                  <View className='w-6 h-6 rounded-full border border-outline-300 dark:border-outline-600 items-center justify-center'>
                    <View className='w-2 h-2 border-r-2 border-b-2 border-typography-500 -translate-y-0.5' />
                  </View>
                </Pressable>

                {/* Articles */}
                {showArticles && (
                  <View className='border-t border-outline-200 dark:border-outline-800'>
                    {category.articles.map((article, i) => (
                      <Pressable
                        key={article.slug}
                        onPress={() => router.push(`/help/${article.slug}`)}
                        className={`flex-row items-center justify-between px-4 py-3 ${
                          i < category.articles.length - 1
                            ? 'border-b border-outline-200 dark:border-outline-800'
                            : ''
                        }`}
                      >
                        <Text className='text-sm text-typography-500 flex-1'>
                          {article.title}
                        </Text>
                        <View className='w-4 h-4 rounded-full border border-outline-300 dark:border-outline-600' />
                      </Pressable>
                    ))}
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* Contact CTA */}
        <View className='px-4 py-6'>
          <View className='p-5 rounded-2xl bg-primary-5 border border-primary-500/20'>
            <View className='w-10 h-10 rounded-xl bg-primary-500/10 items-center justify-center mb-3 self-center'>
              <Users size={20} className='text-primary-500' />
            </View>
            <Text className='text-base font-bold text-typography-900 dark:text-typography-0 text-center mb-2'>
              Need more help?
            </Text>
            <Text className='text-sm text-typography-500 text-center mb-3'>
              Can't find what you're looking for? Our team is here to help.
            </Text>
            <Pressable className='p-3 rounded-xl border border-outline-200 dark:border-outline-700'>
              <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 text-center'>
                Contact us
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Still Need Help */}
        <View className='px-4 py-4 pb-8'>
          <View className='p-6 rounded-2xl bg-primary-5 border border-primary-500/20 text-center'>
            <View className='w-10 h-10 rounded-xl bg-primary-500/10 items-center justify-center mb-3 self-center'>
              <Calendar size={20} className='text-primary-500' />
            </View>
            <Text className='text-base font-bold text-typography-900 dark:text-typography-0 text-center mb-2'>
              Still have questions?
            </Text>
            <Text className='text-sm text-typography-500 text-center mb-3 leading-relaxed'>
              Our team is available Saturday through Thursday, 9am to 7pm. We
              also respond to emails within 24 hours every day.
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
