    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <div class="logo">
            <span>Rodinné vinařství</span>
            <strong>Lanovín</strong>
          </div>
          <p>Rodinné vinařství a ubytování.</p>
          <p class="footer-note">Víno odesíláme jednou za 14 dní.</p>
        </div>
        <div class="footer-card">
          <strong>Rychlé odkazy</strong>
          <div class="footer-links">
            <a href="/index.php">Domů</a>
            <a href="/shop.php">Ceník vín</a>
            <a href="/accommodation.php">Ubytování</a>
            <a href="/gallery.php">Galerie</a>
            <a href="/contact.php">Kontakt</a>
            <a href="/login.php">Admin</a>
          </div>
        </div>
        <div class="footer-card">
          <strong>Kontakt</strong>
          <p>Náměstí Republiky 102<br />Moravská Nová Ves</p>
          <p>
            <a href="tel:+420607622746">+420 607 622 746</a><br />
            <a href="mailto:lanovin.sklepecek@lanovin.cz">lanovin.sklepecek@lanovin.cz</a>
          </p>
        </div>
        <div class="footer-card">
          <strong>Předání vín</strong>
          <p>Pro dostupnost a předání nám napište nebo zavolejte.</p>
        </div>
      </div>
    </footer>

    <aside class="cart-drawer" id="cartDrawer" aria-hidden="true">
      <div class="cart-header">
        <div>
          <p class="eyebrow">Víno</p>
          <h3>Vybraná vína</h3>
        </div>
        <button type="button" id="closeCart">Zavřít</button>
      </div>
      <div class="cart-items" id="cartItems"></div>
      <div class="cart-summary">
        <div class="cart-row">
          <span>Mezisoučet</span>
          <strong id="cartSubtotal">0 Kč</strong>
        </div>
        <div class="cart-row">
          <span>Doprava</span>
          <strong id="cartShipping">0 Kč</strong>
        </div>
        <div class="cart-row total">
          <span>Celkem</span>
          <strong id="cartTotal">0 Kč</strong>
        </div>
        <div class="cart-mode">
          <span>Předání</span>
          <strong>Po domluvě</strong>
        </div>
        <label class="cart-field">
          Preferované převzetí
          <select id="deliveryMode" name="deliveryMode">
            <option value="ship">Odeslat v nejbližším termínu</option>
            <option value="pickup">Osobní odběr</option>
          </select>
        </label>
        <label class="cart-field">
          Poznámka k objednávce
          <textarea
            id="orderNote"
            name="orderNote"
            rows="3"
            placeholder="Např. osobní odběr nebo preferovaný kontakt."
          ></textarea>
        </label>
        <p class="cart-note"><?php echo get_content_html("shipping_note", "Objednávky odesíláme vždy jednou za 2 týdny."); ?></p>
        <button class="button primary" id="checkoutButton" type="button">
          Poslat poptávku e-mailem
        </button>
        <button class="button secondary" id="clearCart" type="button">Smazat výběr</button>
      </div>
    </aside>

    <div class="overlay" id="overlay"></div>

    <script src="/script.js"></script>
  </body>
</html>
