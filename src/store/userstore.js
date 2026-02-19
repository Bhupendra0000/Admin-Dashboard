import { create } from "zustand";
import api from "@/services/api";

export const useUserStore = create((set) => ({
  users: [],
  total: 0,
  skip: 0,
  limit: 10,

  // fetch users with pagination
  fetchUsers: async (skip = 0, limit = 10) => {
    const res = await api.get(`/users?limit=${limit}&skip=${skip}`);

    set({
      users: res.data.users,
      total: res.data.total,
      skip,
      limit,
    });
  },

  // search users
  searchUsers: async (query) => {
    const res = await api.get(`/users/search?q=${query}`);

    set({
      users: res.data.users,
      total: res.data.total,
      skip: 0,
    });
  },
}));
