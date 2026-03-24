import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cta from '@/components/home/cta';
import Features from '@/components/home/feature';
import Hero from '@/components/home/hero';
import PopularPackages from '@/components/home/package';
import Testimonials from '@/components/home/testimonials';

// ── Screen ───────────────────────────────────────────────────────────
export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className='flex-1 bg-background-light dark:bg-background-dark'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Hero
          onExploreTours={() => router.push('/packages')}
          onContact={() => router.push('/contact')}
        />
        <Features />
        <PopularPackages />
        <Testimonials />
        <Cta
          onBrowseTours={() => router.push('/packages')}
          onContact={() => router.push('/contact')}
          onDestinationPress={(dest) =>
            router.push(`/packages?destination=${dest}`)
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}
