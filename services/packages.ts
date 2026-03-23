// services/packages.ts
//
// React Query hooks for package data.
// Mirrors services/packages from the Next.js project,
// using the shared axios instance pointed at the deployed API.

import { QUERY_KEYS } from '@/constants/query-keys';
import api from '@/lib/axios';
import type { AllPackagesType, FestivalPackageType, SinglePackageType } from '@/types/package';
import { useQuery } from '@tanstack/react-query';

// ─── Popular packages (used on Home screen) ───────────────────────────────────

export const usePopularPackages = () => {
  return useQuery<AllPackagesType[]>({
    queryKey: [QUERY_KEYS.ALL_PACKAGES, 'popular'],
    queryFn: async () => {
      const { data } = await api.get<AllPackagesType[]>('/api/packages/popular');
      return data;
    },
  });
};

// ─── All packages (with optional filters) ────────────────────────────────────

export const useAllPackages = ({
  type = 'ALL',
  isActive,
}: {
  type?: 'REGULAR' | 'FESTIVAL' | 'ALL';
  isActive?: boolean;
} = {}) => {
  return useQuery<AllPackagesType[]>({
    queryKey: [QUERY_KEYS.ALL_PACKAGES, type, isActive],
    queryFn: async () => {
      const { data } = await api.get<AllPackagesType[]>('/api/packages/all', {
        params: {
          ...(type !== 'ALL' && { type }),
          ...(isActive !== undefined && { isActive }),
        },
      });
      return data;
    },
  });
};

// ─── Single package by slug ───────────────────────────────────────────────────

export const useSinglePackage = (slug: string) => {
  return useQuery<SinglePackageType>({
    queryKey: [QUERY_KEYS.SINGLE_PACKAGES, slug],
    queryFn: async () => {
      const { data } = await api.get<SinglePackageType>(
        '/api/packages/single-package',
        { params: { slug } },
      );
      return data;
    },
    enabled: Boolean(slug),
  });
};

// ─── Festival packages ────────────────────────────────────────────────────────

export const useFestivalPackages = () => {
  return useQuery<FestivalPackageType[]>({
    queryKey: [QUERY_KEYS.FESTIVAL_PACKAGES],
    queryFn: async () => {
      const { data } = await api.get<FestivalPackageType[]>('/api/festivals');
      return data;
    },
  });
};