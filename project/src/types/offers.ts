export type CityInformation = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  name: string;
};

export type HostInformation = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type LocationInformation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Offer = {
  bedrooms: number;
  city: CityInformation;
  description: string;
  goods: string[];
  host: HostInformation;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: LocationInformation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type OffersArray = Offer[];
