"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Pie } from "../lib/types";

interface CartItem extends Pie {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (pie: Pie) => void;
  removeFromCart: (pieId: string) => void;
  updateQuantity: (pieId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    document.cookie = `cart=${encodeURIComponent(JSON.stringify(items))};path=/`;
  }, [items]);


  const addToCart = (pie: Pie) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === pie.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === pie.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentItems, { ...pie, quantity: 1 }];
    });
  };

  const removeFromCart = (pieId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== pieId)
    );
  };

  const updateQuantity = (pieId: string, quantity: number) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === pieId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
