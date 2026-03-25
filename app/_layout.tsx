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
        <Stack
          screenOptions={{
            headerShown: true,
            headerBackTitle: 'Back',
            headerStyle: {
              backgroundColor: colorScheme === 'dark' ? '#27272a' : '#ffffff',
            },
            headerTintColor: colorScheme === 'dark' ? '#ffffff' : '#1e1d22',
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='about' options={{ title: 'About Us' }} />
          <Stack.Screen name='contact' options={{ title: 'Contact Us' }} />
          <Stack.Screen name='faq' options={{ title: 'FAQ' }} />
          <Stack.Screen name='privacy' options={{ title: 'Privacy Policy' }} />
          <Stack.Screen name='terms' options={{ title: 'Terms of Service' }} />
          <Stack.Screen name='refund' options={{ title: 'Refund Policy' }} />
          <Stack.Screen name='safety' options={{ title: 'Safety' }} />
          <Stack.Screen name='careers' options={{ title: 'Careers' }} />
          <Stack.Screen name='press' options={{ title: 'Press' }} />
          <Stack.Screen name='profile' options={{ title: 'Profile' }} />
          <Stack.Screen name='settings' options={{ title: 'Settings' }} />
          <Stack.Screen name='sign-in' options={{ title: 'Sign In' }} />
          <Stack.Screen name='festivals' options={{ title: 'Festivals' }} />
          <Stack.Screen name='gallery' options={{ title: 'Gallery' }} />
          <Stack.Screen name='help' options={{ title: 'Help Center' }} />
          <Stack.Screen
            name='help/[slug]'
            options={{
              title: 'Article',
              headerShown: true,
            }}
          />
          <Stack.Screen name='cookies' options={{ title: 'Cookie Policy' }} />
          <Stack.Screen name='book' options={{ title: 'Book Tour' }} />
          <Stack.Screen
            name='notifications'
            options={{ title: 'Notifications' }}
          />
          <Stack.Screen name='bookings' options={{ title: 'My Bookings' }} />
          <Stack.Screen name='my-reviews' options={{ title: 'My Reviews' }} />
          <Stack.Screen name='blog' options={{ title: 'Blog' }} />
        </Stack>
      </GluestackUIProvider>
    </TanstackQueryProvider>
  );
}
