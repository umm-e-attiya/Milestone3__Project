"use client"
import React, { createContext, useContext, useState } from 'react';

type CartItem = { id: number; name: string; price: number; };

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => setCart((prev) => [...prev, item]);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);