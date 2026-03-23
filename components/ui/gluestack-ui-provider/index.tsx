import { OverlayProvider } from '@gluestack-ui/core/overlay/creator';
import { ToastProvider } from '@gluestack-ui/core/toast/creator';
import { useColorScheme } from 'react-native';
import type React from 'react';
import { View, type ViewProps } from 'react-native';
import { config } from './config';

export type ModeType = 'light' | 'dark' | 'system';

export function GluestackUIProvider({
  mode = 'light',
  ...props
}: {
  mode?: ModeType;
  children?: React.ReactNode;
  style?: ViewProps['style'];
}) {
  const systemColorScheme = useColorScheme();

  const resolvedMode: 'light' | 'dark' = mode === 'system' 
    ? (systemColorScheme === 'dark' ? 'dark' : 'light') 
    : mode;

  return (
    <View
      style={[
        config[resolvedMode],
        { flex: 1, height: '100%', width: '100%' },
        props.style,
      ]}
    >
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
}
