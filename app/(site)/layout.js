import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartProvider";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";
import { getContent } from "@/lib/content";

export default async function SiteLayout({ children }) {
  const shippingNote = await getContent(
    "shipping_note",
    "Objednávky odesíláme vždy jednou za 2 týdny.",
  );

  return (
    <CartProvider>
      <PublicHeader />
      <main className="site-main">{children}</main>
      <PublicFooter />
      <CartDrawer shippingNote={shippingNote} />
    </CartProvider>
  );
}