// components/home/footer.tsx

import { useRouter } from 'expo-router';
import {
  Compass,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react-native';
import { Linking, Pressable, StyleSheet, View } from 'react-native';
import { Text } from '@/components/ui/text';
import Newsletter from './newsletter';

// ─── Data ────────────────────────────────────────────────────────────────────

type FooterLink = {
  label: string;
  href: string;
};

const nav: { label: string; links: FooterLink[] }[] = [
  {
    label: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Press', href: '/press' },
    ],
  },
  {
    label: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Safety', href: '/safety' },
      { label: 'FAQs', href: '/faq' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Refund Policy', href: '/refund' },
    ],
  },
];

const social = [
  { Icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { Icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { Icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com' },
  { Icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
];

const contactItems = [
  {
    Icon: Mail,
    label: 'info@gosharebd.com',
    href: 'mailto:info@gosharebd.com',
  },
  { Icon: Phone, label: '+880 123 456 7890', href: 'tel:+8801234567890' },
  { Icon: MapPin, label: 'Dhaka, Bangladesh', href: null },
];

const trustItems = ['Secure Payment', '100% Verified Tours', 'Local Guides'];

// ─── Footer ───────────────────────────────────────────────────────────────────

interface FooterProps {
  onNavPress?: (href: string) => void;
}

export default function Footer({ onNavPress }: FooterProps) {
  const router = useRouter();
  const year = new Date().getFullYear();

  const handlePress = (href: string | null) => {
    if (!href) return;
    // External URLs open in browser
    if (
      href.startsWith('http') ||
      href.startsWith('mailto') ||
      href.startsWith('tel')
    ) {
      Linking.openURL(href);
    } else {
      // Internal routes - try onNavPress callback first, then use router
      if (onNavPress) {
        onNavPress(href);
      } else {
        router.push(href as Parameters<typeof router.push>[0]);
      }
    }
  };

  return (
    <View className='bg-background-0 dark:bg-background-950 border-t border-outline-200 dark:border-outline-700'>
      {/* ── Newsletter ── */}
      <Newsletter />

      {/* ── Main content ── */}
      <View className='px-4 pt-10 pb-8 gap-10'>
        {/* ── Brand block ── */}
        <View className='gap-5'>
          {/* Logo */}
          <View className='flex-row items-center gap-2.5'>
            <View className='w-9 h-9 bg-primary-500 rounded-xl items-center justify-center'>
              <Compass size={18} color='#fff' />
            </View>
            <Text className='text-lg font-bold tracking-tight text-typography-950 dark:text-typography-0'>
              GoShareBD
            </Text>
          </View>

          {/* Tagline */}
          <Text className='text-sm text-typography-500 leading-relaxed'>
            Discover authentic travel experiences across Bangladesh — from
            mangrove forests to mountain peaks, guided by locals who love their
            home.
          </Text>

          {/* Contact info */}
          <View className='gap-2'>
            {contactItems.map(({ Icon, label, href }) => (
              <Pressable
                key={label}
                onPress={() => handlePress(href)}
                disabled={!href}
                style={s.contactRow}
              >
                <Icon size={14} color='#5a9e2f' />
                <Text className='text-sm text-typography-500 ml-2'>
                  {label}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Social icons */}
          <View className='flex-row gap-2'>
            {social.map(({ Icon, label, href }) => (
              <Pressable
                key={label}
                onPress={() => Linking.openURL(href)}
                className='w-9 h-9 rounded-xl border border-outline-200 dark:border-outline-700 items-center justify-center'
                accessibilityLabel={label}
              >
                <Icon size={16} color='#71717a' />
              </Pressable>
            ))}
          </View>
        </View>

        {/* ── Nav columns — 3-col grid ── */}
        <View style={s.navGrid}>
          {nav.map((col) => (
            <View key={col.label} style={s.navCol}>
              {/* Column header */}
              <View style={s.colHeader}>
                <View style={s.colHeaderLine} />
                <Text className='text-[10px] font-semibold tracking-widest uppercase text-primary-500 ml-2'>
                  {col.label}
                </Text>
              </View>

              {/* Links */}
              <View className='gap-3'>
                {col.links.map(({ label, href }) => (
                  <Pressable key={label} onPress={() => handlePress(href)}>
                    <Text className='text-sm text-typography-500'>{label}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* ── Bottom bar ── */}
        <View className='border-t border-outline-100 dark:border-outline-800 pt-6 gap-3'>
          <Text className='text-xs text-typography-500'>
            © {year} GoShareBD. All rights reserved.
          </Text>

          <View style={s.trustRow}>
            {trustItems.map((item, i) => (
              <View key={item} style={s.trustItem}>
                {i > 0 && <View style={s.trustDot} />}
                <Text className='text-xs text-typography-500'>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const s = StyleSheet.create({
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  navGrid: {
    flexDirection: 'row',
    gap: 8,
  },
  navCol: {
    flex: 1,
    gap: 14,
  },
  colHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  colHeaderLine: {
    height: 1,
    width: 16,
    backgroundColor: '#5a9e2f',
  },

  trustRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 6,
  },
  trustItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  trustDot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: 'rgba(90,158,47,0.5)',
  },
});
