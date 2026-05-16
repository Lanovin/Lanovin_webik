"use client";

import { useCart } from "@/components/CartProvider";

export function CartButton() {
  const { itemCount, openCart } = useCart();

  return (
    <button className="cart-button" type="button" onClick={openCart}>
      Výběr vín <span>{itemCount}</span>
    </button>
  );
}