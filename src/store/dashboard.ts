import { create } from "zustand";
import type { RFQ, Order, DashboardStats } from "@/types";

interface DashboardState {
  // Data
  rfqs: RFQ[];
  orders: Order[];
  stats: DashboardStats;

  // UI state
  sidebarOpen: boolean;
  activeTab: string;
  loading: boolean;

  // Actions
  setRFQs: (rfqs: RFQ[]) => void;
  setOrders: (orders: Order[]) => void;
  setStats: (stats: DashboardStats) => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setActiveTab: (tab: string) => void;
  setLoading: (loading: boolean) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  // Initial data
  rfqs: [],
  orders: [],
  stats: {
    activeRFQs: 0,
    pendingQuotes: 0,
    activeOrders: 0,
    completedOrders: 0,
  },

  // UI defaults
  sidebarOpen: true,
  activeTab: "overview",
  loading: false,

  // Actions
  setRFQs: (rfqs) => set({ rfqs }),
  setOrders: (orders) => set({ orders }),
  setStats: (stats) => set({ stats }),
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setActiveTab: (activeTab) => set({ activeTab }),
  setLoading: (loading) => set({ loading }),
}));
