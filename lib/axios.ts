
// lib/axios.ts
//
// Single axios instance used across the entire mobile app.
// Import this instead of bare `axios` everywhere.
//
// Usage:
//   import api from '@/lib/axios';
//   const { data } = await api.get('/api/packages/popular');

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ── Request interceptor ───────────────────────────────────────────────────────
// Attach auth token here once you add authentication.
api.interceptors.request.use(
  (config) => {
    // const token = getToken(); // plug in your auth store here
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

// ── Response interceptor ──────────────────────────────────────────────────────
// Centralised error handling — log or transform as needed.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (__DEV__) {
      console.warn(
        '[API Error]',
        error?.response?.status,
        error?.response?.data ?? error.message,
      );
    }
    return Promise.reject(error);
  },
);

export default api;