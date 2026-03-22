import { Slot } from 'expo-router';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

export default function Layout() {
  return (
    <GluestackUIProvider mode='dark'>
      <Slot />
    </GluestackUIProvider>
  );
}
