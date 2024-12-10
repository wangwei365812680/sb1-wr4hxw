import { create } from 'zustand';
import { Product } from '../types';
import { FEATURED_PRODUCTS } from '../data/products';

interface SearchStore {
  searchQuery: string;
  searchResults: Product[];
  setSearchQuery: (query: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: '',
  searchResults: [],
  setSearchQuery: (query: string) =>
    set((state) => ({
      searchQuery: query,
      searchResults: query
        ? FEATURED_PRODUCTS.filter(
            (product) =>
              product.name.toLowerCase().includes(query.toLowerCase()) ||
              product.description.toLowerCase().includes(query.toLowerCase())
          )
        : [],
    })),
}));