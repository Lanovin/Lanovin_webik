"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { productsById } from "@/lib/products";

const cartKey = "lanovin-cart";
const CartContext = createContext(null);

function normalizeItems(items) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .map((item) => {
      const id = typeof item?.id === "string" ? item.id : "";
      const qty = Number(item?.qty);

      if (!id || !Number.isFinite(qty) || qty <= 0 || !productsById[id]) {
        return null;
      }

      return {
        id,
        qty: Math.floor(qty),
      };
    })
    .filter(Boolean);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(cartKey);

      if (!raw) {
        return;
      }

      const parsed = JSON.parse(raw);
      setItems(normalizeItems(parsed?.items));
    } catch {
      setItems([]);
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    window.localStorage.setItem(cartKey, JSON.stringify({ items }));
  }, [isReady, items]);

  const entries = items
    .map((item) => {
      const product = productsById[item.id];

      if (!product) {
        return null;
      }

      return {
        ...product,
        qty: item.qty,
        lineTotal: product.price * item.qty,
      };
    })
    .filter(Boolean);

  const itemCount = entries.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = entries.reduce((sum, item) => sum + item.lineTotal, 0);
  const shipping = subtotal > 1500 || subtotal === 0 ? 0 : 89;
  const total = subtotal + shipping;

  function addToCart(productId) {
    setItems((currentItems) => {
      const nextItems = [...currentItems];
      const match = nextItems.find((item) => item.id === productId);

      if (match) {
        match.qty += 1;
      } else if (productsById[productId]) {
        nextItems.push({ id: productId, qty: 1 });
      }

      return nextItems;
    });
    setIsOpen(true);
  }

  function removeFromCart(productId) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId));
  }

  function updateQty(productId, delta) {
    setItems((currentItems) => {
      return currentItems.flatMap((item) => {
        if (item.id !== productId) {
          return item;
        }

        const nextQty = item.qty + delta;

        return nextQty > 0 ? { ...item, qty: nextQty } : [];
      });
    });
  }

  function clearCart() {
    setItems([]);
  }

  const value = {
    entries,
    itemCount,
    subtotal,
    shipping,
    total,
    isOpen,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider.");
  }

  return context;
}