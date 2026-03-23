// types/package.ts
//
// Mirrors @/types/package from the Next.js project.
// PackageType enum is inlined here since we don't have Prisma client in RN.

export type PackageType = 'REGULAR' | 'FESTIVAL';

export interface SinglePackageType {
  id: string;
  destinationId: string;
  packageType: PackageType;
  name: string;
  slug: string;
  division: string;
  tags: string[];
  coverImage: string;
  pricePerPerson: number;
  originalPrice: number;
  couplePrice: number;
  originalCouplePrice: number;
  isCouple: boolean;
  durationDays: number;
  maxGroupSize: number;
  minGroupSize: number;
  location: string;
  summary: string;
  highlights: string[];
  includes: string[];
  excludes: string[];
  cancellationPolicy: string;
  weatherPolicy: string;
  ageRestriction: string;
  isBestseller: boolean;
  reviewCount: number;
  averageRating: number | null;
  isActive: boolean;
  gallery: { id: string; url: string; publicId: string }[];
  itinerary: {
    id: string;
    time: string;
    title: string;
    description: string;
    order: number;
  }[];
}

export interface AllPackagesType {
  id: string;
  name: string;
  slug: string;
  location: string;
  pricePerPerson: number;
  originalPrice?: number | null;
  coverImage: string;
  durationDays?: number;
  isActive: boolean;
  isBestseller: boolean;
  minGroupSize: number;
  maxGroupSize: number;
  couplePrice?: number;
  originalCouplePrice?: number;
  isCouple: boolean;
  tags: string[];
  reviewCount: number;
  averageRating: number | null;
}

export interface FestivalPackageType {
  id: string;
  name: string;
  slug: string;
  division: string;
  location: string;
  tags: string[];
  coverImage: string;
  pricePerPerson: number;
  originalPrice?: number | null;
  couplePrice?: number;
  originalCouplePrice?: number;
  isCouple: boolean;
  durationDays: number;
  maxGroupSize: number;
  minGroupSize: number;
  summary: string;
  highlights: string[];
  isBestseller: boolean;
  isActive: boolean;
  packageType: PackageType;
  gallery: { id: string; url: string }[];
  reviewCount: number;
  averageRating: number | null;
}

export interface AdminPackageWithGalleryType {
  id: string;
  name: string;
  gallery: { id: string; url: string; publicId: string }[];
}