"use client";

import { useCart } from "@/components/CartProvider";
import { formatPrice, products } from "@/lib/products";

export function ShopProductGrid() {
  const { addToCart } = useCart();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <article className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="product-topline">
            <span className="product-tag">{product.category}</span>
            <span>Ročníky {product.vintage}</span>
          </div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="product-availability">Dostupné ročníky: {product.vintage}</p>
          <div className="product-meta">
            <span className="price">{formatPrice(product.price)}</span>
            <button className="button primary" type="button" onClick={() => addToCart(product.id)}>
              Přidat
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}