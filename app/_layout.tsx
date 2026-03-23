import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import TanstackQueryProvider from '@/context/tanstack-provider';
import '@/global.css';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';

export default function Layout() {
  const { colorScheme } = useColorScheme();

  return (
    <TanstackQueryProvider>
      <GluestackUIProvider mode='system'>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        </Stack>
      </GluestackUIProvider>
    </TanstackQueryProvider>
  );
}
