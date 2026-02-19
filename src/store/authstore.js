import { create } from "zustand";
import api from "@/services/api";

export const useAuthStore = create((set) => ({
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  user: null,

  // LOGIN
  login: async (username, password) => {
    const res = await api.post("/auth/login", {
      username,
      password,
      expiresInMins: 30,
    });

    const token = res.data.accessToken;

    localStorage.setItem("token", token);

    set({
      token,
      user: res.data,
    });
  },

  // GET CURRENT USER
  fetchMe: async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    const res = await api.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    set({ user: res.data });
  },

  // LOGOUT
  logout: () => {
    localStorage.removeItem("token");
    set({ token: null, user: null });
  },
}));
