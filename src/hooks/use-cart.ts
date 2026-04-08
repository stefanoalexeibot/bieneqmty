"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  quantity: number;
  category: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: (open?: boolean) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);
        
        if (existingItem) {
          const updatedItems = currentItems.map((i) => 
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
          set({ items: updatedItems });
        } else {
          set({ items: [...currentItems, { ...item, quantity: 1 }] });
        }
      },
      
      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity < 1) return;
        const updatedItems = get().items.map((i) => 
          i.id === id ? { ...i, quantity } : i
        );
        set({ items: updatedItems });
      },
      
      clearCart: () => set({ items: [] }),
      
      toggleCart: (open) => set({ isOpen: open !== undefined ? open : !get().isOpen }),
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
    }),
    {
      name: "bieneq-cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
