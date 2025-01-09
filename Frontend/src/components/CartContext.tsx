import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Book } from '../types';

interface CartItem extends Book {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: number) => void;
  updateQuantity: (bookId: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (book: Book) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === book.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
  };

  const updateQuantity = (bookId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === bookId ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

