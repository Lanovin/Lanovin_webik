const products = [
  {
    id: "rs",
    name: "Rulandské šedé",
    vintage: "2021, 2023",
    category: "bílé",
    description: "Plnější bílé víno.",
    price: 150,
    image: "20231226_200404.jpg",
  },
  {
    id: "rv",
    name: "Ryzlink vlašský",
    vintage: "2022, 2023",
    category: "bílé",
    description: "Svěží moravská klasika.",
    price: 150,
    image: "20250131_213403.jpg",
  },
  {
    id: "vz",
    name: "Veltlínské zelené",
    vintage: "2020, 2022",
    category: "bílé",
    description: "Suchý a kořenitější styl.",
    price: 150,
    image: "20240616_094933.jpg",
  },
  {
    id: "sg",
    name: "Sauvignon",
    vintage: "2022, 2023",
    category: "bílé",
    description: "Aromatické bílé víno.",
    price: 150,
    image: "20240922_081922.jpg",
  },
  {
    id: "andre",
    name: "André",
    vintage: "2022",
    category: "červené",
    description: "Jemné červené víno.",
    price: 150,
    image: "20211002_100345.jpg",
  },
  {
    id: "frankovka",
    name: "Frankovka",
    vintage: "2021, 2022",
    category: "červené",
    description: "Klasická Frankovka.",
    price: 150,
    image: "20231014_093400.jpg",
  },
  {
    id: "zweigelt",
    name: "Zweigeltrebe",
    vintage: "2021, 2022",
    category: "červené",
    description: "Lehčí červené víno.",
    price: 150,
    image: "20211002_100359.jpg",
  },
  {
    id: "porto",
    name: "Portovíno",
    vintage: "2024",
    category: "speciál",
    description: "Sladší speciál.",
    price: 250,
    image: "sklepecek.jpg",
  },
];

const cartKey = "lanovin-cart";
const cart = loadCart();

const productGrid = document.getElementById("productGrid");
const cartButton = document.getElementById("cartButton");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartShipping = document.getElementById("cartShipping");
const cartTotal = document.getElementById("cartTotal");
const closeCart = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");
const checkoutButton = document.getElementById("checkoutButton");
const clearCartButton = document.getElementById("clearCart");
const contactForm = document.getElementById("contactForm");
const deliveryMode = document.getElementById("deliveryMode");
const orderNote = document.getElementById("orderNote");

if (productGrid) {
  renderProducts();
}
renderCart();

if (cartButton) {
  cartButton.addEventListener("click", () => toggleCart(true));
}
if (closeCart) {
  closeCart.addEventListener("click", () => toggleCart(false));
}
if (overlay) {
  overlay.addEventListener("click", () => toggleCart(false));
}

if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    if (!cart.items.length) {
      alert("Výběr je prázdný. Nejdřív vyberte víno.");
      return;
    }
    const subject = encodeURIComponent("Poptávka vín Lanovín");
    const message = encodeURIComponent(buildOrderSummary());
    window.location.href = `mailto:lanovin.sklepecek@lanovin.cz?subject=${subject}&body=${message}`;
  });
}

if (clearCartButton) {
  clearCartButton.addEventListener("click", () => {
    cart.items = [];
    saveCart();
    renderCart();
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent("Poptávka z webu Lanovín");
    const body = encodeURIComponent(
      [
        `Jméno: ${name}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:lanovin.sklepecek@lanovin.cz?subject=${subject}&body=${body}`;
    contactForm.reset();
  });
}

function renderProducts() {
  productGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-topline">
            <span class="product-tag">${product.category}</span>
            <span>Ročníky ${product.vintage}</span>
          </div>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p class="product-availability">Dostupné ročníky: ${product.vintage}</p>
          <div class="product-meta">
            <span class="price">${formatPrice(product.price)}</span>
            <button class="button primary" data-id="${product.id}">
              Přidat
            </button>
          </div>
        </article>
      `
    )
    .join("");

  productGrid.querySelectorAll("button[data-id]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.id));
  });
}

function addToCart(productId) {
  const item = cart.items.find((entry) => entry.id === productId);
  if (item) {
    item.qty += 1;
  } else {
    cart.items.push({ id: productId, qty: 1 });
  }
  saveCart();
  renderCart();
  toggleCart(true);
}

function removeFromCart(productId) {
  cart.items = cart.items.filter((entry) => entry.id !== productId);
  saveCart();
  renderCart();
}

function updateQty(productId, delta) {
  const item = cart.items.find((entry) => entry.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    renderCart();
  }
}

function renderCart() {
  if (!cartItems || !cartSubtotal || !cartShipping || !cartTotal || !cartCount) {
    return;
  }
  const entries = cart.items.map((entry) => {
    const product = products.find((p) => p.id === entry.id);
    if (!product) return "";
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" />
        <div>
          <h4>${product.name}</h4>
          <span class="price">${formatPrice(product.price)}</span>
          <div class="cart-item-controls">
            <button class="qty-button" data-action="decrease" data-id="${product.id}">-</button>
            <span>${entry.qty} ks</span>
            <button class="qty-button" data-action="increase" data-id="${product.id}">+</button>
            <button class="qty-button" data-action="remove" data-id="${product.id}">×</button>
          </div>
        </div>
      </div>
    `;
  });

  cartItems.innerHTML =
    entries.length > 0
      ? entries.join("")
      : "<p>Zatím nemáte vybrané žádné víno.</p>";

  cartItems.querySelectorAll("button[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      const action = button.dataset.action;
      if (action === "increase") updateQty(id, 1);
      if (action === "decrease") updateQty(id, -1);
      if (action === "remove") removeFromCart(id);
    });
  });

  const subtotalValue = cart.items.reduce((sum, entry) => {
    const product = products.find((p) => p.id === entry.id);
    return sum + (product ? product.price * entry.qty : 0);
  }, 0);
  const shippingValue = subtotalValue > 1500 || subtotalValue === 0 ? 0 : 89;
  const totalValue = subtotalValue + shippingValue;

  cartSubtotal.textContent = formatPrice(subtotalValue);
  cartShipping.textContent = formatPrice(shippingValue);
  cartTotal.textContent = formatPrice(totalValue);
  cartCount.textContent = cart.items.reduce((sum, entry) => sum + entry.qty, 0);
}

function toggleCart(open) {
  if (!cartDrawer || !overlay) return;
  cartDrawer.classList.toggle("open", open);
  overlay.classList.toggle("show", open);
  cartDrawer.setAttribute("aria-hidden", open ? "false" : "true");
}

function saveCart() {
  localStorage.setItem(cartKey, JSON.stringify(cart));
}

function loadCart() {
  try {
    const raw = localStorage.getItem(cartKey);
    if (!raw) return { items: [] };
    return { items: JSON.parse(raw).items || [] };
  } catch (error) {
    return { items: [] };
  }
}

function formatPrice(value) {
  return `${value.toLocaleString("cs-CZ")} Kč`;
}

function buildOrderSummary() {
  const lines = [
    "Dobrý den,",
    "",
    "mám zájem o tato vína:",
    "",
  ];

  const itemLines = cart.items.map((entry) => {
    const product = products.find((p) => p.id === entry.id);
    if (!product) return "";
    return `${product.name} (${product.vintage}) — ${entry.qty} ks`;
  });

  lines.push(...itemLines.filter(Boolean));
  lines.push(`Mezisoučet: ${cartSubtotal.textContent}`);
  lines.push(`Doprava: ${cartShipping.textContent}`);
  lines.push(`Celkem: ${cartTotal.textContent}`);
  lines.push("");
  lines.push(`Preferované převzetí: ${getDeliveryModeLabel()}`);

  const note = orderNote?.value.trim() || "";
  if (note) {
    lines.push(`Poznámka: ${note}`);
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

function getDeliveryModeLabel() {
  if (deliveryMode && deliveryMode.value === "pickup") {
    return "Osobní odběr";
  }

  return "Odeslat v nejbližším termínu";
}
