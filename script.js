
"use strict";

// ==========================================
// WEDDING MALL - PRODUCT DATA
// ==========================================

const products = [
  {
    id: 1,
    name: "Zar-e-Gul Formal",
    brand: "Noore Atelier",
    category: "Women",
    type: "Formal Wear",
    price: 28500,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=650&q=70"
  },
  {
    id: 2,
    name: "Mehndi Garden Suit",
    brand: "Rangrez Studio",
    category: "Women",
    type: "Mehndi Wear",
    price: 18900,
    badge: "New",
    // Changed to an image URL already used by another working card.
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=650&q=70"
  },
  {
    id: 3,
    name: "Pearl Moon Ensemble",
    brand: "Mehra Couture",
    category: "Women",
    type: "Party Wear",
    price: 32500,
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=650&q=70"
  },
  {
    id: 4,
    name: "Ivory Bloom Outfit",
    brand: "Noore Atelier",
    category: "Women",
    type: "Formal Wear",
    price: 24000,
    badge: "",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=650&q=70"
  },
  {
    id: 5,
    name: "Royal Nawab Sherwani",
    brand: "Sherwani Room",
    category: "Men",
    type: "Sherwani",
    price: 46500,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=650&q=70"
  },
  {
    id: 6,
    name: "Mehfil Waistcoat Set",
    brand: "Raunaq Menswear",
    category: "Men",
    type: "Waistcoat",
    price: 14500,
    badge: "New",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=650&q=70"
  },
  {
    id: 7,
    name: "Classic Ivory Kurta",
    brand: "Raunaq Menswear",
    category: "Men",
    type: "Kurta",
    price: 8900,
    badge: "Classic",
    image: "https://images.unsplash.com/photo-1618354691229-88d47f285158?auto=format&fit=crop&w=650&q=70"
  },
  {
    id: 8,
    name: "Baraat Signature Suit",
    brand: "Sherwani Room",
    category: "Men",
    type: "Sherwani",
    price: 39500,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=650&q=70"
  },
  {
    id: 9,
    name: "Laal Sitara Bridal Lehenga",
    brand: "Mehra Couture",
    category: "Bridal & Groom",
    type: "Bridal Lehenga",
    price: 185000,
    badge: "Bridal Edit",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=650&q=70"
  },
  {
    id: 10,
    name: "Gulnaar Mehndi Lehenga",
    brand: "Noore Atelier",
    category: "Bridal & Groom",
    type: "Mehndi Wear",
    price: 96500,
    badge: "Colour Story",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e9?auto=format&fit=crop&w=650&q=70"
  },
  {
    id: 11,
    name: "Shehzada Ivory Sherwani",
    brand: "Sherwani Room",
    category: "Bridal & Groom",
    type: "Groom Sherwani",
    price: 112000,
    badge: "Groom Edit",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=650&q=70"
  },
  {
    id: 12,
    name: "Noor Bridal Peshwas",
    brand: "Rangrez Studio",
    category: "Bridal & Groom",
    type: "Bridal Peshwas",
    price: 149000,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=650&q=70"
  }
];

// ==========================================
// PRICE FORMAT
// ==========================================

const money = amount =>
  "Rs " + amount.toLocaleString("en-PK");

// ==========================================
// SHOPPING CART STORAGE
// ==========================================

function getSavedCart() {
  try {
    return JSON.parse(
      localStorage.getItem("weddingMallCart")
    ) || [];
  } catch {
    return [];
  }
}

let cart = getSavedCart();

function saveCart() {
  try {
    localStorage.setItem(
      "weddingMallCart",
      JSON.stringify(cart)
    );
  } catch {
    showToast("Cart could not be saved in this browser.");
  }
}

// ==========================================
// TOAST MESSAGE
// ==========================================

function showToast(message) {
  let toast = document.getElementById("mallToast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "mallToast";
    toast.className = "mall-toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// ==========================================
// PRODUCT CARD
// Includes an image fallback if an image fails
// ==========================================

function createProductCard(product) {
  const fallbackImage =
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=650&q=70";

  return `
    <div class="col-6 col-lg-3">
      <article class="product-card">

        <div class="product-photo">
          <img
            class="product-image"
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            decoding="async"
            width="650"
            height="867"
            onerror="this.onerror=null; this.src='${fallbackImage}';"
          >

          ${
            product.badge
              ? `<span class="product-badge">${product.badge}</span>`
              : ""
          }
        </div>

        <div class="product-info">
          <div class="product-brand">${product.brand}</div>

          <h3 class="product-name">${product.name}</h3>

          <div class="d-flex justify-content-between align-items-center gap-2 mb-3">
            <span class="product-price">${money(product.price)}</span>
            <span class="product-type">${product.type}</span>
          </div>

          <button
            class="add-button"
            type="button"
            data-add="${product.id}"
          >
            Add to Bag +
          </button>
        </div>

      </article>
    </div>
  `;
}

// ==========================================
// PRODUCTS FOR EACH PAGE
// ==========================================

function productsForPage() {
  const page = document.body.dataset.page;

  if (page === "women") {
    return products.filter(
      product => product.category === "Women"
    );
  }

  if (page === "men") {
    return products.filter(
      product => product.category === "Men"
    );
  }

  if (page === "bridal") {
    return products.filter(
      product => product.category === "Bridal & Groom"
    );
  }

  return products.filter(
    product => [1, 5, 9, 3].includes(product.id)
  );
}

// ==========================================
// HOME PAGE PRODUCTS
// ==========================================

function renderHomeProducts() {
  const container = document.getElementById("homeProducts");

  if (container) {
    container.innerHTML = productsForPage()
      .map(createProductCard)
      .join("");
  }
}

// ==========================================
// SEARCH, FILTER AND SORT
// ==========================================

function setupFilters() {
  const grid = document.getElementById("productGrid");

  if (!grid) return;

  const pageProducts = productsForPage();
  const search = document.getElementById("productSearch");
  const category = document.getElementById("categoryFilter");
  const sort = document.getElementById("sortFilter");

  if (!search || !category || !sort) return;

  const categories = [
    ...new Set(pageProducts.map(product => product.type))
  ];

  category.innerHTML =
    '<option value="all">All categories</option>' +
    categories.map(type =>
      `<option value="${type}">${type}</option>`
    ).join("");

  function updateProducts() {
    const query = search.value.trim().toLowerCase();

    let result = pageProducts.filter(product => {
      const text =
        `${product.name} ${product.brand} ${product.type}`
          .toLowerCase();

      const matchesSearch = text.includes(query);

      const matchesCategory =
        category.value === "all" ||
        product.type === category.value;

      return matchesSearch && matchesCategory;
    });

    if (sort.value === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort.value === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort.value === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    grid.innerHTML = result
      .map(createProductCard)
      .join("");

    const count = document.getElementById("resultCount");

    if (count) {
      count.textContent = `${result.length} outfits found`;
    }

    const empty = document.getElementById("emptyState");

    if (empty) {
      empty.classList.toggle(
        "d-none",
        result.length > 0
      );
    }
  }

  search.addEventListener("input", updateProducts);
  category.addEventListener("change", updateProducts);
  sort.addEventListener("change", updateProducts);

  document
    .getElementById("resetFilters")
    ?.addEventListener("click", () => {
      search.value = "";
      category.value = "all";
      sort.value = "featured";
      updateProducts();
    });

  updateProducts();
}

// ==========================================
// SHOPPING CART
// ==========================================

function updateCartCount() {
  const count = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  document.querySelectorAll(".cart-count").forEach(element => {
    element.textContent = count;
  });

  saveCart();
}

function renderCart() {
  const container = document.getElementById("cartItems");

  if (!container) return;

  let total = 0;

  if (cart.length === 0) {
    container.innerHTML =
      '<p class="text-center text-secondary py-5">Your bag is empty. Explore our collections!</p>';
  } else {
    container.innerHTML = cart.map(item => {
      const product = products.find(
        product => product.id === item.id
      );

      if (!product) return "";

      total += product.price * item.quantity;

      return `
        <div class="cart-row">
          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=650&q=70';"
          >

          <div>
            <h4>${product.name}</h4>
            <p>${money(product.price)}</p>

            <button
              type="button"
              data-qty="${product.id}"
              data-change="-1"
            >−</button>

            <span>${item.quantity}</span>

            <button
              type="button"
              data-qty="${product.id}"
              data-change="1"
            >+</button>

            <button
              type="button"
              data-remove="${product.id}"
            >Remove</button>
          </div>
        </div>
      `;
    }).join("");
  }

  document.getElementById("cartTotal").textContent =
    money(total);

  updateCartCount();
}

function addToCart(id) {
  const product = products.find(
    product => product.id === Number(id)
  );

  if (!product) return;

  const existing = cart.find(
    item => item.id === product.id
  );

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: product.id,
      quantity: 1
    });
  }

  renderCart();
  showToast(`${product.name} added to your bag.`);
}

function openCart() {
  const overlay = document.getElementById("cartOverlay");

  if (!overlay) return;

  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  renderCart();
}

function closeCart() {
  const overlay = document.getElementById("cartOverlay");

  if (!overlay) return;

  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ==========================================
// CLICK EVENTS
// ==========================================

document.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");

  if (addButton) {
    addToCart(addButton.dataset.add);
  }

  if (event.target.closest("[data-open-cart]")) {
    openCart();
  }

  if (event.target.closest("[data-close-cart]")) {
    closeCart();
  }

  const quantityButton = event.target.closest("[data-qty]");

  if (quantityButton) {
    const id = Number(quantityButton.dataset.qty);

    const item = cart.find(row => row.id === id);

    if (item) {
      item.quantity += Number(
        quantityButton.dataset.change
      );

      if (item.quantity <= 0) {
        cart = cart.filter(row => row.id !== id);
      }

      renderCart();
    }
  }

  const removeButton = event.target.closest("[data-remove]");

  if (removeButton) {
    cart = cart.filter(
      row => row.id !== Number(removeButton.dataset.remove)
    );

    renderCart();
  }

  if (event.target.closest("[data-open-privacy]")) {
    event.preventDefault();

    const modal = document.getElementById("privacyModal");

    if (modal && window.bootstrap) {
      bootstrap.Modal.getOrCreateInstance(modal).show();
    }
  }
});

// Close cart with Escape key
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCart();
  }
});

// ==========================================
// DEMO CHECKOUT
// ==========================================

document
  .getElementById("checkoutButton")
  ?.addEventListener("click", () => {
    showToast(
      "Demo checkout only. Real payment is not connected."
    );
  });

// ==========================================
// COOKIE CONSENT
// ==========================================

const cookieBanner = document.getElementById("cookieBanner");

try {
  if (
    localStorage.getItem("weddingMallCookieAccepted") === "yes"
  ) {
    if (cookieBanner) {
      cookieBanner.hidden = true;
    }
  }
} catch {}

document
  .getElementById("acceptCookies")
  ?.addEventListener("click", () => {
    try {
      localStorage.setItem(
        "weddingMallCookieAccepted",
        "yes"
      );
    } catch {}

    if (cookieBanner) {
      cookieBanner.hidden = true;
    }

    showToast("Preference saved on this device.");
  });

// ==========================================
// NEWSLETTER DEMO
// Does not send emails to a server
// ==========================================

document
  .getElementById("newsletterForm")
  ?.addEventListener("submit", event => {
    event.preventDefault();

    const message =
      document.getElementById("newsletterMessage");

    if (message) {
      message.textContent =
        "Thank you! Demo form only; no email was sent.";
    }

    event.currentTarget.reset();
  });

// ==========================================
// CURRENT YEAR IN FOOTER
// ==========================================

document.querySelectorAll("[data-year]").forEach(element => {
  element.textContent = new Date().getFullYear();
});

// ==========================================
// START WEBSITE FEATURES
// ==========================================

renderHomeProducts();
setupFilters();
renderCart();
