import { create } from "zustand";
import api from "@/services/api";

export const useProductStore = create((set) => ({
  products: [],
  total: 0,
  categories: [],

  fetchProducts: async (limit = 10, skip = 0) => {
    const res = await api.get(`/products?limit=${limit}&skip=${skip}`);
    set({ products: res.data.products, total: res.data.total });
  },

  searchProducts: async (query) => {
    const res = await api.get(`/products/search?q=${query}`);
    set({ products: res.data.products, total: res.data.total });
  },

  fetchCategories: async () => {
    const res = await api.get("/products/categories");
    set({ categories: res.data });
  },

  filterByCategory: async (category) => {
    const res = await api.get(`/products/category/${category}`);
    set({ products: res.data.products, total: res.data.total });
  },
}));