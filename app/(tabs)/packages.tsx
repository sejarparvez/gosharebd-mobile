// app/(tabs)/packages.tsx

import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import PackagesList from '@/components/packages/packageslist';

export default function PackagesScreen() {
  const router = useRouter();
  return (
    <SafeAreaView
      className='flex-1 bg-background-light dark:bg-background-dark'
      edges={['top']}
    >
      <PackagesList
        onPackagePress={(pkg) => router.push(`/packages/${pkg.slug}`)}
        onGoHome={() => router.push('/')}
      />
    </SafeAreaView>
  );
}
