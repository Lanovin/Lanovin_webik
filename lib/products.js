export const products = [
  {
    id: "rs",
    name: "Rulandské šedé",
    vintage: "2021, 2023",
    category: "bílé",
    description: "Plnější bílé víno.",
    price: 150,
    image: "/20231226_200404.jpg",
  },
  {
    id: "rv",
    name: "Ryzlink vlašský",
    vintage: "2022, 2023",
    category: "bílé",
    description: "Svěží moravská klasika.",
    price: 150,
    image: "/20250131_213403.jpg",
  },
  {
    id: "vz",
    name: "Veltlínské zelené",
    vintage: "2020, 2022",
    category: "bílé",
    description: "Suchý a kořenitější styl.",
    price: 150,
    image: "/20240616_094933.jpg",
  },
  {
    id: "sg",
    name: "Sauvignon",
    vintage: "2022, 2023",
    category: "bílé",
    description: "Aromatické bílé víno.",
    price: 150,
    image: "/20240922_081922.jpg",
  },
  {
    id: "andre",
    name: "André",
    vintage: "2022",
    category: "červené",
    description: "Jemné červené víno.",
    price: 150,
    image: "/20211002_100345.jpg",
  },
  {
    id: "frankovka",
    name: "Frankovka",
    vintage: "2021, 2022",
    category: "červené",
    description: "Klasická Frankovka.",
    price: 150,
    image: "/20231014_093400.jpg",
  },
  {
    id: "zweigelt",
    name: "Zweigeltrebe",
    vintage: "2021, 2022",
    category: "červené",
    description: "Lehčí červené víno.",
    price: 150,
    image: "/20211002_100359.jpg",
  },
  {
    id: "porto",
    name: "Portovíno",
    vintage: "2024",
    category: "speciál",
    description: "Sladší speciál.",
    price: 250,
    image: "/sklepecek.jpg",
  },
];

export const productsById = Object.fromEntries(products.map((product) => [product.id, product]));

export function formatPrice(value) {
  return `${value.toLocaleString("cs-CZ")} Kč`;
}