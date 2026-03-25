// ============================================================
// Wearable Apparels — Type Definitions
// ============================================================

export type Role = "CLIENT" | "ADMIN";
export type RFQStatus = "PENDING" | "REVIEWING" | "QUOTED" | "ACCEPTED" | "REJECTED";
export type QuoteStatus = "SENT" | "ACCEPTED" | "REJECTED";
export type OrderStatus =
  | "CONFIRMED"
  | "DESIGNING"
  | "SAMPLING"
  | "PRODUCTION"
  | "QC"
  | "SHIPPING"
  | "DELIVERED";

export interface User {
  id: string;
  email: string;
  name: string | null;
  company: string | null;
  phone: string | null;
  role: Role;
  createdAt: Date;
}

export interface RFQ {
  id: string;
  userId: string;
  projectType: string;
  quantity: number;
  description: string;
  fabricType: string | null;
  colors: string | null;
  sizes: string | null;
  budget: string | null;
  timeline: string | null;
  status: RFQStatus;
  attachments: RFQAttachment[];
  quotes: Quote[];
  createdAt: Date;
  updatedAt: Date;
}

export interface RFQAttachment {
  id: string;
  rfqId: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
}

export interface Quote {
  id: string;
  rfqId: string;
  unitPrice: number;
  totalPrice: number;
  timeline: string;
  notes: string | null;
  status: QuoteStatus;
  createdAt: Date;
}

export interface Order {
  id: string;
  rfqId: string;
  userId: string;
  status: OrderStatus;
  totalAmount: number;
  updates: OrderUpdate[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderUpdate {
  id: string;
  orderId: string;
  status: OrderStatus;
  note: string | null;
  imageUrl: string | null;
  createdAt: Date;
}

export interface Message {
  id: string;
  userId: string;
  rfqId: string | null;
  orderId: string | null;
  content: string;
  isAdmin: boolean;
  createdAt: Date;
}

// Form types
export interface RFQFormData {
  projectType: string;
  quantity: number;
  description: string;
  fabricType: string;
  colors: string;
  sizes: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  phone: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  brand: string;
  message: string;
}

// Dashboard stats
export interface DashboardStats {
  activeRFQs: number;
  pendingQuotes: number;
  activeOrders: number;
  completedOrders: number;
}

// Navigation
export interface NavLink {
  name: string;
  href: string;
  icon?: string;
}

// Project types for RFQ
export const PROJECT_TYPES = [
  "T-Shirts",
  "Hoodies",
  "Sweatshirts",
  "Pants / Joggers",
  "Shorts",
  "Jackets",
  "Tracksuits",
  "Caps / Hats",
  "Custom (Other)",
] as const;

export const FABRIC_TYPES = [
  "100% Cotton",
  "Cotton/Polyester Blend",
  "French Terry",
  "Fleece",
  "Jersey Knit",
  "Nylon",
  "Custom / TBD",
] as const;

export const BUDGET_RANGES = [
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
  "Let's discuss",
] as const;

export const TIMELINE_OPTIONS = [
  "2-3 weeks",
  "4-6 weeks",
  "6-8 weeks",
  "8-12 weeks",
  "Flexible",
] as const;

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  CONFIRMED: "Order Confirmed",
  DESIGNING: "Design Phase",
  SAMPLING: "Sample Production",
  PRODUCTION: "Full Production",
  QC: "Quality Control",
  SHIPPING: "Shipping",
  DELIVERED: "Delivered",
};

export const ORDER_STATUS_COLORS: Record<OrderStatus, string> = {
  CONFIRMED: "#6366f1",
  DESIGNING: "#8b5cf6",
  SAMPLING: "#c9a96e",
  PRODUCTION: "#f59e0b",
  QC: "#10b981",
  SHIPPING: "#3b82f6",
  DELIVERED: "#22c55e",
};
