// components/home/newsletter.tsx

import { CheckCircle2, Send } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import { ActivityIndicator, StyleSheet, TextInput, View } from 'react-native';
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated';

import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useSubscribe } from '@/services/subscribe';

// ─── Simple email validator ───────────────────────────────────────────────────

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// ─── Success state ────────────────────────────────────────────────────────────

function SuccessCard() {
  return (
    <Animated.View
      entering={FadeIn.duration(400)}
      className='flex-row items-center gap-3 rounded-2xl border border-outline-200 dark:border-outline-700 px-4 py-4'
    >
      <View className='w-9 h-9 rounded-xl bg-primary-50 dark:bg-primary-950 items-center justify-center'>
        <CheckCircle2 size={16} color='#5a9e2f' />
      </View>
      <View>
        <Text className='text-sm font-semibold text-typography-900 dark:text-typography-100'>
          You're subscribed!
        </Text>
        <Text className='text-xs text-typography-500 mt-0.5'>
          We'll be in touch soon.
        </Text>
      </View>
    </Animated.View>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Newsletter() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const { mutate, isPending } = useSubscribe();

  const handleSubmit = () => {
    // Manual validation — replaces zod + react-hook-form
    if (!email.trim()) {
      setError('Email is required.');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');

    mutate(
      { email: email.trim(), source: 'newsletter_form' },
      {
        onSuccess: () => {
          setSubscribed(true);
          setEmail('');
        },
        onError: (err) => {
          const msg =
            (err as { response?: { data?: { error?: string } } })?.response
              ?.data?.error ?? 'Something went wrong.';
          setError(msg);
        },
      },
    );
  };

  return (
    <View className='border-b border-outline-200 dark:border-outline-700 px-4 py-8'>
      <View className='gap-6'>
        {/* ── Left — headline ── */}
        <Animated.View
          entering={FadeInUp.delay(50).duration(500)}
          className='gap-2'
        >
          <View style={s.eyebrow}>
            <View style={s.eyebrowLine} />
            <Text className='text-[11px] font-bold tracking-widest uppercase text-primary-500 ml-2'>
              Newsletter
            </Text>
          </View>

          <Text className='text-2xl font-bold tracking-tight text-typography-950 dark:text-typography-0 leading-tight'>
            Stay{' '}
            <Text className='italic font-bold text-2xl text-primary-500'>
              inspired
            </Text>
            <Text className='text-primary-500'>.</Text>
          </Text>

          <Text className='text-sm text-typography-500 leading-relaxed'>
            Special offers, travel guides, and hidden gems — delivered to your
            inbox.
          </Text>
        </Animated.View>

        {/* ── Right — form or success ── */}
        <Animated.View entering={FadeInUp.delay(150).duration(500)}>
          {subscribed ? (
            <SuccessCard />
          ) : (
            <View className='gap-2'>
              {/* Input */}
              <TextInput
                value={email}
                onChangeText={(t) => {
                  setEmail(t);
                  setError('');
                }}
                placeholder='your@email.com'
                placeholderTextColor='#71717a'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                editable={!isPending}
                style={[
                  s.input,
                  isDark ? s.inputDark : s.inputLight,
                  !!error && s.inputError,
                ]}
              />

              {/* Inline error */}
              {!!error && (
                <Text className='text-xs text-error-500 ml-1'>{error}</Text>
              )}

              {/* Submit button */}
              <Button
                size='lg'
                className='h-11 bg-primary-500 gap-2 mt-1 rounded-lg'
                onPress={handleSubmit}
                disabled={isPending}
              >
                {isPending ? (
                  <ActivityIndicator size='small' color='#fff' />
                ) : (
                  <ButtonIcon as={Send} className='text-white' />
                )}
                <ButtonText className='text-white font-semibold'>
                  {isPending ? 'Subscribing…' : 'Subscribe'}
                </ButtonText>
              </Button>
            </View>
          )}
        </Animated.View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  eyebrow: { flexDirection: 'row', alignItems: 'center' },
  eyebrowLine: { height: 1, width: 28, backgroundColor: '#5a9e2f' },
  input: {
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 14,
    fontSize: 14,
  },
  inputLight: {
    backgroundColor: '#ffffff',
    borderColor: '#e4e4e7',
    color: '#09090b',
  },
  inputDark: {
    backgroundColor: '#18181b',
    borderColor: '#3f3f46',
    color: '#fafafa',
  },
  inputError: {
    borderColor: '#e5431a',
  },
});
