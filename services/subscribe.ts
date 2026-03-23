// services/subscribe.ts

import api from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { Alert } from 'react-native';

type SubscribePayload = {
  email: string;
  name?: string;
  source?: string;
};

type SubscribeResponse = {
  message: string;
};

export function useSubscribe() {
  return useMutation<SubscribeResponse, Error, SubscribePayload>({
    mutationFn: async (payload) => {
      const { data } = await api.post<SubscribeResponse>('/api/subscribe', payload);
      return data;
    },
    onSuccess: (data) => {
      Alert.alert('Subscribed!', data.message);
    },
    onError: (err) => {
      const message =
        (err as { response?: { data?: { error?: string } } })?.response?.data
          ?.error ?? 'Something went wrong. Please try again.';
      Alert.alert('Error', message);
    },
  });
}