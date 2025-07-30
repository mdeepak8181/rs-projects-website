export interface Community {
  _id: string;
  name: string;
  description?: string;
  features: string[];
  heroImage: string;
}

export interface PortfolioProject {
  title: string;
  location: string;
  type: string;
  year: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
  heroImage: any;
  beforeImage: any;
  galleryImages: any[];
  budgetRange: string;
  timeline: string;
  community?: any;
}

export interface Gallery {
  _id: string
  title: string
  description?: string
  heroImage: string
  images: string[]
}
