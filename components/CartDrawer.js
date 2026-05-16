"use client";

import { useState } from "react";

import { MultilineText } from "@/components/MultilineText";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/products";

const mailAddress = "lanovin.sklepecek@lanovin.cz";

function getDeliveryModeLabel(deliveryMode) {
  if (deliveryMode === "pickup") {
    return "Osobní odběr";
  }

  return "Odeslat v nejbližším termínu";
}

function buildOrderSummary({ entries, subtotal, shipping, total, deliveryMode, orderNote }) {
  const lines = ["Dobrý den,", "", "mám zájem o tato vína:", ""];

  for (const entry of entries) {
    lines.push(`${entry.name} (${entry.vintage}) — ${entry.qty} ks`);
  }

  lines.push(`Mezisoučet: ${formatPrice(subtotal)}`);
  lines.push(`Doprava: ${formatPrice(shipping)}`);
  lines.push(`Celkem: ${formatPrice(total)}`);
  lines.push("");
  lines.push(`Preferované převzetí: ${getDeliveryModeLabel(deliveryMode)}`);

  if (orderNote.trim()) {
    lines.push(`Poznámka: ${orderNote.trim()}`);
  }

  lines.push("");
  lines.push("Prosím o potvrzení dostupnosti a způsobu předání.");
  lines.push("");
  lines.push("Kontaktní údaje:");
  lines.push("Jméno:");
  lines.push("Telefon:");
  lines.push("Adresa:");

  return lines.join("\n");
}

export function CartDrawer({ shippingNote }) {
  const { clearCart, closeCart, entries, isOpen, removeFromCart, shipping, subtotal, total, updateQty } =
    useCart();
  const [deliveryMode, setDeliveryMode] = useState("ship");
  const [orderNote, setOrderNote] = useState("");

  function handleCheckout() {
    if (!entries.length) {
      window.alert("Výběr je prázdný. Nejdřív vyberte víno.");
      return;
    }

    const subject = encodeURIComponent("Poptávka vín Lanovín");
    const body = encodeURIComponent(
      buildOrderSummary({ entries, subtotal, shipping, total, deliveryMode, orderNote }),
    );

    window.location.href = `mailto:${mailAddress}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <aside className={`cart-drawer${isOpen ? " open" : ""}`} aria-hidden={isOpen ? "false" : "true"}>
        <div className="cart-header">
          <div>
            <p className="eyebrow">Víno</p>
            <h3>Vybraná vína</h3>
          </div>
          <button type="button" onClick={closeCart}>
            Zavřít
          </button>
        </div>
        <div className="cart-items">
          {entries.length ? (
            entries.map((entry) => (
              <div className="cart-item" key={entry.id}>
                <img src={entry.image} alt={entry.name} />
                <div>
                  <h4>{entry.name}</h4>
                  <span className="price">{formatPrice(entry.price)}</span>
                  <div className="cart-item-controls">
                    <button
                      className="qty-button"
                      type="button"
                      onClick={() => updateQty(entry.id, -1)}
                    >
                      -
                    </button>
                    <span>{entry.qty} ks</span>
                    <button
                      className="qty-button"
                      type="button"
                      onClick={() => updateQty(entry.id, 1)}
                    >
                      +
                    </button>
                    <button
                      className="qty-button"
                      type="button"
                      onClick={() => removeFromCart(entry.id)}
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Zatím nemáte vybrané žádné víno.</p>
          )}
        </div>
        <div className="cart-summary">
          <div className="cart-row">
            <span>Mezisoučet</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>
          <div className="cart-row">
            <span>Doprava</span>
            <strong>{formatPrice(shipping)}</strong>
          </div>
          <div className="cart-row total">
            <span>Celkem</span>
            <strong>{formatPrice(total)}</strong>
          </div>
          <div className="cart-mode">
            <span>Předání</span>
            <strong>Po domluvě</strong>
          </div>
          <label className="cart-field">
            Preferované převzetí
            <select value={deliveryMode} name="deliveryMode" onChange={(event) => setDeliveryMode(event.target.value)}>
              <option value="ship">Odeslat v nejbližším termínu</option>
              <option value="pickup">Osobní odběr</option>
            </select>
          </label>
          <label className="cart-field">
            Poznámka k objednávce
            <textarea
              name="orderNote"
              rows="3"
              placeholder="Např. osobní odběr nebo preferovaný kontakt."
              value={orderNote}
              onChange={(event) => setOrderNote(event.target.value)}
            />
          </label>
          <MultilineText className="cart-note" text={shippingNote} />
          <button className="button primary" type="button" onClick={handleCheckout}>
            Poslat poptávku e-mailem
          </button>
          <button className="button secondary" type="button" onClick={clearCart}>
            Smazat výběr
          </button>
        </div>
      </aside>

      <div className={`overlay${isOpen ? " show" : ""}`} onClick={closeCart} />
    </>
  );
}