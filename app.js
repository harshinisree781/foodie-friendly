// =====================
// DATA
// =====================
const FOODS = [
  {
    id: 1, name: "Truffle Margherita Pizza", emoji: "🍕",
    price: 649, oldPrice: 799, category: "Pizza",
    rating: 4.8, reviews: 1243, time: "25-30 min",
    desc: "Hand-stretched dough with San Marzano tomato sauce, fresh mozzarella di bufala, truffle oil, and fresh basil. A reimagined classic.",
    badge: "Bestseller", isVeg: true,
    tags: ["Vegetarian", "Italian", "Crispy Crust"],
    calories: "680 kcal", protein: "28g", carbs: "82g",
    color: "#e8621a",
  },
  {
    id: 2, name: "Smoky BBQ Smash Burger", emoji: "🍔",
    price: 449, oldPrice: 549, category: "Burgers",
    rating: 4.9, reviews: 2847, time: "20-25 min",
    desc: "Double smash patty with aged cheddar, caramelized onions, pickles, house-made BBQ sauce and brioche bun. Weekend in every bite.",
    badge: "Popular", isVeg: false,
    tags: ["Non-Veg", "American", "Extra Cheese"],
    calories: "890 kcal", protein: "52g", carbs: "64g",
    color: "#d4541a",
  },
  {
    id: 3, name: "Spicy Ramen Tonkotsu", emoji: "🍜",
    price: 549, oldPrice: null, category: "Asian",
    rating: 4.7, reviews: 987, time: "30-35 min",
    desc: "Rich pork bone broth simmered 12 hours, with chashu pork belly, soft egg, nori, bamboo shoots, and a fiery miso paste.",
    badge: "New", isVeg: false,
    tags: ["Non-Veg", "Japanese", "Spicy"],
    calories: "720 kcal", protein: "38g", carbs: "78g",
    color: "#f5a623",
  },
  {
    id: 4, name: "Avocado Grain Bowl", emoji: "🥗",
    price: 399, oldPrice: 479, category: "Healthy",
    rating: 4.6, reviews: 734, time: "15-20 min",
    desc: "Quinoa and farro base with roasted sweet potato, avocado, chickpeas, tahini lemon dressing, seeds and microgreens.",
    badge: "Veg", isVeg: true,
    tags: ["Vegan", "Gluten-Free", "High Protein"],
    calories: "520 kcal", protein: "22g", carbs: "68g",
    color: "#22c55e",
  },
  {
    id: 5, name: "Butter Chicken Feast", emoji: "🍛",
    price: 499, oldPrice: 599, category: "Indian",
    rating: 4.9, reviews: 3201, time: "25-30 min",
    desc: "Succulent chicken tikka in silky tomato-cream sauce with aromatic spices. Served with garlic naan and fragrant basmati rice.",
    badge: "Bestseller", isVeg: false,
    tags: ["Non-Veg", "Indian", "Rich & Creamy"],
    calories: "810 kcal", protein: "44g", carbs: "72g",
    color: "#f97316",
  },
  {
    id: 6, name: "Tiramisu Supreme", emoji: "🍰",
    price: 299, oldPrice: 349, category: "Desserts",
    rating: 4.8, reviews: 562, time: "10-15 min",
    desc: "House-made ladyfingers soaked in espresso and Kahlúa, layered with mascarpone cream and dusted with Valrhona cocoa.",
    badge: "Veg", isVeg: true,
    tags: ["Dessert", "Italian", "Coffee"],
    calories: "420 kcal", protein: "9g", carbs: "58g",
    color: "#92400e",
  },
  {
    id: 7, name: "Crispy Fish Tacos", emoji: "🌮",
    price: 429, oldPrice: null, category: "Mexican",
    rating: 4.7, reviews: 891, time: "20-25 min",
    desc: "Beer-battered cod in warm corn tortillas with purple cabbage slaw, mango salsa, chipotle mayo and fresh lime.",
    badge: "New", isVeg: false,
    tags: ["Non-Veg", "Mexican", "Street Food"],
    calories: "590 kcal", protein: "32g", carbs: "60g",
    color: "#ef4444",
  },
  {
    id: 8, name: "Wagyu Beef Sushi Platter", emoji: "🍣",
    price: 1299, oldPrice: 1499, category: "Asian",
    rating: 4.9, reviews: 421, time: "35-45 min",
    desc: "Premium sushi platter with A5 wagyu nigiri, tuna sashimi, salmon rolls, and chef's special maki. An omakase experience at home.",
    badge: "Premium", isVeg: false,
    tags: ["Non-Veg", "Japanese", "Premium"],
    calories: "640 kcal", protein: "48g", carbs: "52g",
    color: "#8b5cf6",
  },
  {
    id: 9, name: "Neapolitan Gelato Trio", emoji: "🍨",
    price: 249, oldPrice: 299, category: "Desserts",
    rating: 4.6, reviews: 1102, time: "5-10 min",
    desc: "Authentic Italian gelato: pistachio, dark chocolate, and stracciatella. Churned slower for denser, creamier texture.",
    badge: "Veg", isVeg: true,
    tags: ["Vegetarian", "Italian", "Cold"],
    calories: "380 kcal", protein: "8g", carbs: "46g",
    color: "#ec4899",
  },
  {
    id: 10, name: "Pad Thai Signature", emoji: "🥘",
    price: 429, oldPrice: 499, category: "Asian",
    rating: 4.7, reviews: 1567, time: "25-30 min",
    desc: "Wok-tossed flat rice noodles with tiger prawns, tofu, bean sprouts, egg, tamarind sauce, and roasted peanuts.",
    badge: "Popular", isVeg: false,
    tags: ["Non-Veg", "Thai", "Wok-fired"],
    calories: "660 kcal", protein: "36g", carbs: "80g",
    color: "#f59e0b",
  },
  {
    id: 11, name: "Sourdough Club Sandwich", emoji: "🥪",
    price: 349, oldPrice: null, category: "Sandwiches",
    rating: 4.5, reviews: 678, time: "15-20 min",
    desc: "Triple-decker sourdough with smoked turkey, applewood bacon, heirloom tomato, avocado, and herb aioli.",
    badge: null, isVeg: false,
    tags: ["Non-Veg", "American", "Hearty"],
    calories: "740 kcal", protein: "42g", carbs: "68g",
    color: "#78716c",
  },
  {
    id: 12, name: "Paneer Tikka Masala", emoji: "🍲",
    price: 449, oldPrice: 529, category: "Indian",
    rating: 4.8, reviews: 1891, time: "25-30 min",
    desc: "Grilled cottage cheese in smoky tikka masala with bell peppers. Paired with butter naan and mint chutney.",
    badge: "Veg", isVeg: true,
    tags: ["Vegetarian", "Indian", "Spicy"],
    calories: "690 kcal", protein: "28g", carbs: "66g",
    color: "#f97316",
  },
];

const CATEGORIES = ["All", "Pizza", "Burgers", "Asian", "Indian", "Mexican", "Healthy", "Desserts", "Sandwiches"];

// =====================
// STATE
// =====================
let state = {
  cart: JSON.parse(localStorage.getItem('fh_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('fh_wish') || '[]'),
  user: JSON.parse(localStorage.getItem('fh_user') || 'null'),
  orders: JSON.parse(localStorage.getItem('fh_orders') || '[]'),
  page: 'home',
  category: 'All',
  search: '',
  sort: 'popular',
  modalFood: null,
  cartOpen: false,
  authOpen: false,
  authMode: 'login',
  modalQty: 1,
  checkoutPayment: 'card',
};

function saveState() {
  localStorage.setItem('fh_cart', JSON.stringify(state.cart));
  localStorage.setItem('fh_wish', JSON.stringify(state.wishlist));
  if (state.user) localStorage.setItem('fh_user', JSON.stringify(state.user));
  localStorage.setItem('fh_orders', JSON.stringify(state.orders));
}

// =====================
// TOAST
// =====================
function toast(msg, type = 'default') {
  const container = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const icons = { success: '✅', error: '❌', default: '🔔' };
  t.innerHTML = `<span>${icons[type] || '🔔'}</span><span>${msg}</span>`;
  container.appendChild(t);
  setTimeout(() => {
    t.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => t.remove(), 300);
  }, 2800);
}

// =====================
// CART HELPERS
// =====================
function getCartItem(id) { return state.cart.find(i => i.id === id); }
function getCartQty(id) { const i = getCartItem(id); return i ? i.qty : 0; }
function cartTotal() { return state.cart.reduce((s, i) => s + i.price * i.qty, 0); }
function cartCount() { return state.cart.reduce((s, i) => s + i.qty, 0); }

function addToCart(food, qty = 1) {
  const existing = getCartItem(food.id);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ ...food, qty });
  }
  saveState();
  toast(`${food.name} added to cart! 🛒`, 'success');
  render();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveState();
  render();
}

function updateCartQty(id, delta) {
  const item = getCartItem(id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveState(); render(); }
}

function toggleWishlist(id) {
  if (state.wishlist.includes(id)) {
    state.wishlist = state.wishlist.filter(i => i !== id);
    toast('Removed from wishlist', 'default');
  } else {
    state.wishlist.push(id);
    toast('Added to wishlist ❤️', 'success');
  }
  saveState();
  render();
}

// =====================
// FILTERED FOODS
// =====================
function getFilteredFoods() {
  let foods = [...FOODS];
  if (state.category !== 'All') foods = foods.filter(f => f.category === state.category);
  if (state.search) {
    const q = state.search.toLowerCase();
    foods = foods.filter(f => f.name.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q) || f.category.toLowerCase().includes(q));
  }
  if (state.sort === 'price-asc') foods.sort((a,b) => a.price - b.price);
  else if (state.sort === 'price-desc') foods.sort((a,b) => b.price - a.price);
  else if (state.sort === 'rating') foods.sort((a,b) => b.rating - a.rating);
  else foods.sort((a,b) => b.reviews - a.reviews);
  return foods;
}

// =====================
// RENDER COMPONENTS
// =====================
function renderNavbar() {
  const count = cartCount();
  return `
    <nav class="navbar">
      <div class="navbar-logo" onclick="navigate('home')">
        <div class="logo-icon">🍽️</div>
        <div class="logo-text">Feast<span>Hub</span></div>
      </div>
      <ul class="nav-links">
        <li class="${state.page === 'home' ? 'active' : ''}"><a href="#" onclick="navigate('home'); return false">Menu</a></li>
        <li class="${state.page === 'orders' ? 'active' : ''}"><a href="#" onclick="navigate('orders'); return false">My Orders</a></li>
        <li><a href="#" onclick="scrollToSection('about'); return false">About</a></li>
      </ul>
      <div class="nav-actions">
        <button class="cart-btn" onclick="toggleCart()">
          🛒 Cart
          <span class="cart-badge ${count > 0 ? 'visible' : ''}" id="cart-badge">${count}</span>
        </button>
        ${state.user
          ? `<button class="auth-btn" onclick="logout()">👋 ${state.user.name.split(' ')[0]}</button>`
          : `<button class="auth-btn" onclick="openAuth('login')">Sign In</button>`
        }
      </div>
    </nav>
  `;
}

function renderHero() {
  return `
    <div class="hero">
      <div class="hero-content">
        <div class="hero-tag">⚡ Free delivery on orders above ₹599</div>
        <h1>Food that <em>hits</em> different</h1>
        <p class="hero-desc">Restaurant-quality meals crafted by our top chefs, delivered to your doorstep in under 40 minutes. Fresh, fast, and absolutely unforgettable.</p>
        <div class="hero-ctas">
          <button class="btn-primary" onclick="scrollToSection('menu')">Explore Menu →</button>
          <button class="btn-secondary" onclick="navigate('orders')">📦 Track Order</button>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-num">50K+</span>
            <span class="stat-label">Happy Customers</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">4.9★</span>
            <span class="stat-label">App Rating</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">30min</span>
            <span class="stat-label">Avg Delivery</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-img-wrap">
          <div class="hero-food-emoji">🍕</div>
        </div>
        <div class="hero-floating-card card-1">
          <div class="hfc-label">Today's Offer</div>
          <div class="hfc-val">20% OFF</div>
          <div class="hfc-sub">↑ Limited time</div>
        </div>
        <div class="hero-floating-card card-2">
          <div class="hfc-label">Delivered</div>
          <div class="hfc-val">1,284</div>
          <div class="hfc-sub">✓ Orders today</div>
        </div>
      </div>
    </div>
  `;
}

function renderCategories() {
  const icons = {
    All: '🍽️', Pizza: '🍕', Burgers: '🍔', Asian: '🍜',
    Indian: '🍛', Mexican: '🌮', Healthy: '🥗', Desserts: '🍰', Sandwiches: '🥪'
  };
  return `
    <div class="categories-wrap">
      ${CATEGORIES.map(c => `
        <button class="cat-chip ${state.category === c ? 'active' : ''}" onclick="setCategory('${c}')">
          <span class="cat-icon">${icons[c]}</span> ${c}
        </button>
      `).join('')}
    </div>
  `;
}

function renderSearch() {
  return `
    <div class="search-wrap">
      <div style="display:flex;gap:12px;align-items:center;">
        <div class="search-bar" style="flex:1;">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="Search for dishes, cuisines..." value="${state.search}" oninput="setSearch(this.value)" />
        </div>
        <select class="sort-select" onchange="setSort(this.value)">
          <option value="popular" ${state.sort==='popular'?'selected':''}>Most Popular</option>
          <option value="rating" ${state.sort==='rating'?'selected':''}>Top Rated</option>
          <option value="price-asc" ${state.sort==='price-asc'?'selected':''}>Price: Low to High</option>
          <option value="price-desc" ${state.sort==='price-desc'?'selected':''}>Price: High to Low</option>
        </select>
      </div>
    </div>
  `;
}

function renderFoodCard(food) {
  const inCart = getCartItem(food.id);
  const inWish = state.wishlist.includes(food.id);
  const discount = food.oldPrice ? Math.round((1 - food.price / food.oldPrice) * 100) : null;

  return `
    <div class="food-card" onclick="openFoodModal(${food.id})">
      <div class="food-img">
        <div class="food-img-bg" style="background:radial-gradient(circle at 50% 50%, ${food.color}99, transparent)"></div>
        ${food.badge ? `<div class="food-badge ${food.isVeg ? 'veg' : ''} ${food.badge === 'New' ? 'new' : ''}">${food.badge}</div>` : ''}
        <button class="food-wishlist ${inWish ? 'liked' : ''}" onclick="event.stopPropagation(); toggleWishlist(${food.id})">${inWish ? '❤️' : '🤍'}</button>
        <span style="font-size:90px;position:relative;z-index:1;">${food.emoji}</span>
      </div>
      <div class="food-info">
        <div class="food-name">${food.name}</div>
        <div class="food-desc">${food.desc}</div>
        <div class="food-meta">
          <div class="food-rating">
            <span class="star">★</span> ${food.rating}
            <span class="count">(${food.reviews.toLocaleString()})</span>
          </div>
          <div class="food-time">⏱ ${food.time}</div>
          ${discount ? `<div style="background:rgba(232,98,26,0.12);color:var(--accent);padding:2px 8px;border-radius:100px;font-size:11px;font-weight:700;">${discount}% OFF</div>` : ''}
        </div>
        <div class="food-footer">
          <div class="food-price">
            <span class="price-main">₹${food.price}</span>
            ${food.oldPrice ? `<span class="price-old">₹${food.oldPrice}</span>` : ''}
          </div>
          ${inCart
            ? `<div class="qty-control" onclick="event.stopPropagation()">
                <button class="qty-btn" onclick="updateCartQty(${food.id}, -1)">−</button>
                <span class="qty-num">${inCart.qty}</span>
                <button class="qty-btn" onclick="updateCartQty(${food.id}, 1)">+</button>
              </div>`
            : `<button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(FOODS.find(f=>f.id===${food.id}))">
                + Add
              </button>`
          }
        </div>
      </div>
    </div>
  `;
}

function renderFoodGrid() {
  const foods = getFilteredFoods();
  if (!foods.length) return `<div style="text-align:center;padding:60px;color:var(--text2);">
    <div style="font-size:48px;margin-bottom:12px;">🔍</div>
    <div style="font-size:18px;font-weight:600;">No results found</div>
    <div style="font-size:14px;margin-top:6px;">Try a different search or category</div>
  </div>`;
  return `<div class="food-grid">${foods.map(renderFoodCard).join('')}</div>`;
}

function renderCartSidebar() {
  const items = state.cart;
  const subtotal = cartTotal();
  const delivery = subtotal > 599 ? 0 : 49;
  const total = subtotal + delivery;

  return `
    <div class="cart-overlay ${state.cartOpen ? 'open' : ''}" onclick="toggleCart()"></div>
    <div class="cart-sidebar ${state.cartOpen ? 'open' : ''}">
      <div class="cart-header">
        <div class="cart-title">Your Cart 🛒</div>
        <button class="cart-close" onclick="toggleCart()">✕</button>
      </div>
      ${items.length === 0
        ? `<div class="cart-empty">
            <div class="cart-empty-icon">🛒</div>
            <div style="font-size:18px;font-weight:700;">Your cart is empty</div>
            <div class="cart-empty-text">Add some delicious items to get started!</div>
            <button class="btn-primary" onclick="toggleCart()" style="margin-top:8px">Browse Menu</button>
          </div>`
        : `<div class="cart-items">
            ${items.map(item => `
              <div class="cart-item">
                <div class="cart-item-emoji">${item.emoji}</div>
                <div class="cart-item-info">
                  <div class="cart-item-name">${item.name}</div>
                  <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
                  <div class="qty-control" style="margin-top:8px;">
                    <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">−</button>
                    <span class="qty-num">${item.qty}</span>
                    <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                  </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑️</button>
              </div>
            `).join('')}
          </div>
          <div class="cart-footer">
            <div class="cart-summary">
              <div class="summary-row"><span>Subtotal</span><span>₹${subtotal.toLocaleString()}</span></div>
              <div class="summary-row"><span>Delivery</span><span>${delivery === 0 ? '🎉 FREE' : '₹' + delivery}</span></div>
              ${delivery > 0 ? `<div style="font-size:12px;color:var(--accent);padding:4px 0;">Add ₹${599-subtotal} more for free delivery</div>` : ''}
              <div class="summary-row total">
                <span>Total</span>
                <span class="price">₹${total.toLocaleString()}</span>
              </div>
            </div>
            <button class="checkout-btn" onclick="toggleCart(); navigate('checkout')">
              Checkout →
            </button>
          </div>
        `
      }
    </div>
  `;
}

function renderFoodModal() {
  if (!state.modalFood) return '';
  const food = state.modalFood;
  const qty = state.modalQty;
  const inWish = state.wishlist.includes(food.id);
  const discount = food.oldPrice ? Math.round((1 - food.price / food.oldPrice) * 100) : null;
  const total = food.price * qty;

  return `
    <div class="modal-overlay open" onclick="closeFoodModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <button class="modal-close" onclick="closeFoodModal()">✕</button>
        </div>
        <div class="modal-body">
          <div class="modal-food-display">
            <div class="modal-emoji-wrap" style="background:radial-gradient(circle at 40% 40%, ${food.color}22, var(--bg3))">
              <span style="font-size:110px;">${food.emoji}</span>
            </div>
            <div class="modal-food-right">
              <div class="food-meta" style="margin-bottom:10px;">
                <div class="food-rating"><span class="star">★</span> ${food.rating} <span class="count">(${food.reviews.toLocaleString()} reviews)</span></div>
                <div class="food-time">⏱ ${food.time}</div>
              </div>
              <div class="modal-food-name">${food.name}</div>
              <div class="modal-food-desc">${food.desc}</div>
              <div class="modal-tags">
                ${food.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
              </div>
              <div class="modal-price-row">
                <div class="modal-price">₹${(food.price * qty).toLocaleString()}</div>
                ${food.oldPrice ? `<div class="modal-old-price">₹${(food.oldPrice * qty).toLocaleString()}</div>` : ''}
                ${discount ? `<div class="modal-discount">${discount}% OFF</div>` : ''}
              </div>
              <div class="modal-qty-row">
                <span class="modal-qty-label">Quantity:</span>
                <div class="qty-control">
                  <button class="qty-btn" onclick="setModalQty(${qty - 1})">−</button>
                  <span class="qty-num">${qty}</span>
                  <button class="qty-btn" onclick="setModalQty(${qty + 1})">+</button>
                </div>
              </div>
              <div class="modal-actions">
                <button class="modal-cart-btn" onclick="addToCart(FOODS.find(f=>f.id===${food.id}), ${qty}); closeFoodModal()">
                  🛒 Add to Cart
                </button>
                <button class="modal-buy-btn" onclick="buyNow(${food.id}, ${qty})">
                  ⚡ Buy Now — ₹${total.toLocaleString()}
                </button>
              </div>
            </div>
          </div>
          <div class="modal-info-grid">
            <div class="modal-info-item">
              <div class="modal-info-icon">🔥</div>
              <div class="modal-info-val">${food.calories}</div>
              <div class="modal-info-key">Calories</div>
            </div>
            <div class="modal-info-item">
              <div class="modal-info-icon">💪</div>
              <div class="modal-info-val">${food.protein}</div>
              <div class="modal-info-key">Protein</div>
            </div>
            <div class="modal-info-item">
              <div class="modal-info-icon">🌾</div>
              <div class="modal-info-val">${food.carbs}</div>
              <div class="modal-info-key">Carbs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAuthModal() {
  if (!state.authOpen) return '';
  const isLogin = state.authMode === 'login';
  return `
    <div class="modal-overlay open" onclick="closeAuth(event)">
      <div class="auth-modal" onclick="event.stopPropagation()">
        <button class="modal-close" style="position:absolute;top:20px;right:20px;" onclick="closeAuth()">✕</button>
        <div class="auth-title">${isLogin ? 'Welcome back!' : 'Join FeastHub'}</div>
        <div class="auth-sub">${isLogin ? 'Sign in to order your favourite food' : 'Create an account to start ordering'}</div>
        <div class="auth-form">
          ${!isLogin ? `<div class="form-group">
            <label class="form-label">Full Name</label>
            <input class="form-input" type="text" id="auth-name" placeholder="John Doe" />
          </div>` : ''}
          <div class="form-group">
            <label class="form-label">Email</label>
            <input class="form-input" type="email" id="auth-email" placeholder="you@example.com" />
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input class="form-input" type="password" id="auth-password" placeholder="••••••••" />
          </div>
          <button class="auth-submit" onclick="${isLogin ? 'handleLogin()' : 'handleSignup()'}">
            ${isLogin ? 'Sign In' : 'Create Account'} →
          </button>
        </div>
        <div class="auth-switch">
          ${isLogin
            ? `Don't have an account? <a onclick="state.authMode='signup';render()">Sign Up</a>`
            : `Already have an account? <a onclick="state.authMode='login';render()">Sign In</a>`
          }
        </div>
      </div>
    </div>
  `;
}

function renderCheckoutPage() {
  if (!state.cart.length) {
    return `<div style="text-align:center;padding:80px 32px;">
      <div style="font-size:64px;margin-bottom:16px;">🛒</div>
      <div style="font-family:'Playfair Display',serif;font-size:28px;font-weight:900;margin-bottom:8px;">Your cart is empty</div>
      <div style="color:var(--text2);margin-bottom:24px;">Add items to cart before checking out.</div>
      <button class="btn-primary" onclick="navigate('home')">Browse Menu</button>
    </div>`;
  }

  const subtotal = cartTotal();
  const delivery = subtotal > 599 ? 0 : 49;
  const total = subtotal + delivery;

  return `
    <div class="checkout-page">
      <div class="checkout-left">
        <div class="checkout-title">Checkout</div>
        <div class="checkout-section">
          <div class="checkout-section-title"><div class="step-num">1</div> Delivery Address</div>
          <div class="form-grid">
            <div class="form-group"><label class="form-label">First Name</label><input class="form-input" placeholder="John" value="${state.user?.name?.split(' ')[0] || ''}" /></div>
            <div class="form-group"><label class="form-label">Last Name</label><input class="form-input" placeholder="Doe" /></div>
            <div class="form-group full"><label class="form-label">Street Address</label><input class="form-input" placeholder="123 Main Street, Apartment 4B" /></div>
            <div class="form-group"><label class="form-label">City</label><input class="form-input" placeholder="Hyderabad" /></div>
            <div class="form-group"><label class="form-label">PIN Code</label><input class="form-input" placeholder="500001" /></div>
            <div class="form-group full"><label class="form-label">Phone Number</label><input class="form-input" placeholder="+91 98765 43210" /></div>
          </div>
        </div>

        <div class="checkout-section">
          <div class="checkout-section-title"><div class="step-num">2</div> Payment Method</div>
          <div class="payment-options">
            ${[
              { id: 'card', icon: '💳', name: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay' },
              { id: 'upi', icon: '📱', name: 'UPI', desc: 'GPay, PhonePe, Paytm' },
              { id: 'netbanking', icon: '🏦', name: 'Net Banking', desc: 'All major banks' },
              { id: 'cod', icon: '💵', name: 'Cash on Delivery', desc: 'Pay when delivered' },
            ].map(p => `
              <div class="payment-option ${state.checkoutPayment === p.id ? 'selected' : ''}" onclick="state.checkoutPayment='${p.id}';render()">
                <div class="payment-radio"><div class="payment-dot"></div></div>
                <div class="payment-icon">${p.icon}</div>
                <div>
                  <div class="payment-name">${p.name}</div>
                  <div class="payment-desc">${p.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
          ${state.checkoutPayment === 'card' ? `
            <div class="form-grid" style="margin-top:16px;">
              <div class="form-group full"><label class="form-label">Card Number</label><input class="form-input" placeholder="1234 5678 9012 3456" /></div>
              <div class="form-group"><label class="form-label">Expiry</label><input class="form-input" placeholder="MM / YY" /></div>
              <div class="form-group"><label class="form-label">CVV</label><input class="form-input" placeholder="•••" /></div>
            </div>
          ` : ''}
        </div>
      </div>

      <div class="checkout-right">
        <div class="order-summary-card">
          <div class="order-summary-title">Order Summary</div>
          <div class="order-summary-items">
            ${state.cart.map(item => `
              <div class="order-item">
                <div class="order-item-emoji">${item.emoji}</div>
                <div>
                  <div class="order-item-name">${item.name}</div>
                  <div style="font-size:12px;color:var(--text3);">Qty: ${item.qty}</div>
                </div>
                <div class="order-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
              </div>
            `).join('')}
          </div>
          <div class="order-divider"></div>
          <div class="summary-row"><span>Subtotal</span><span>₹${subtotal.toLocaleString()}</span></div>
          <div class="summary-row"><span>Delivery Fee</span><span>${delivery === 0 ? '🎉 FREE' : '₹' + delivery}</span></div>
          <div class="summary-row"><span>Taxes (5%)</span><span>₹${Math.round(subtotal * 0.05).toLocaleString()}</span></div>
          <div class="order-divider"></div>
          <div class="summary-row total">
            <span>Total</span>
            <span class="price">₹${(total + Math.round(subtotal * 0.05)).toLocaleString()}</span>
          </div>
          <button class="place-order-btn" onclick="placeOrder()">
            🎉 Place Order
          </button>
          <div style="text-align:center;font-size:12px;color:var(--text3);margin-top:12px;">🔒 Secured by 256-bit SSL encryption</div>
        </div>
      </div>
    </div>
  `;
}

function renderOrderSuccess() {
  const order = state.orders[state.orders.length - 1];
  if (!order) return '';
  return `
    <div class="order-success">
      <div class="success-icon-wrap">✅</div>
      <div class="success-title">Order Placed!</div>
      <div class="success-sub">Your food is being prepared with love. You'll receive it in ${order.eta} minutes.</div>
      <div class="order-id-box">
        <div>
          <div class="order-id-label">Order ID</div>
          <div class="order-id-val">${order.id}</div>
        </div>
        <div style="text-align:right;">
          <div class="track-label">Status</div>
          <div class="track-val">🟢 Confirmed</div>
        </div>
      </div>
      <div class="progress-track">
        <div class="progress-step">
          <div class="progress-dot done">✓</div>
          <div class="progress-label">Order Placed</div>
        </div>
        <div class="progress-line done"></div>
        <div class="progress-step">
          <div class="progress-dot active">👨‍🍳</div>
          <div class="progress-label">Preparing</div>
        </div>
        <div class="progress-line"></div>
        <div class="progress-step">
          <div class="progress-dot">🛵</div>
          <div class="progress-label">On the way</div>
        </div>
        <div class="progress-line"></div>
        <div class="progress-step">
          <div class="progress-dot">🏠</div>
          <div class="progress-label">Delivered</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn-primary" onclick="navigate('orders')">View All Orders</button>
        <button class="btn-secondary" onclick="navigate('home')">Order More</button>
      </div>
    </div>
  `;
}

function renderOrdersPage() {
  const orders = [...state.orders].reverse();
  return `
    <div class="orders-page">
      <div class="page-title">My Orders</div>
      ${orders.length === 0
        ? `<div style="text-align:center;padding:60px 0;">
            <div style="font-size:64px;margin-bottom:16px;">📦</div>
            <div style="font-size:20px;font-weight:700;margin-bottom:8px;">No orders yet</div>
            <div style="color:var(--text2);margin-bottom:24px;">Your order history will appear here</div>
            <button class="btn-primary" onclick="navigate('home')">Start Ordering</button>
          </div>`
        : orders.map(order => `
          <div class="order-card">
            <div class="order-card-header">
              <div>
                <div class="order-card-id">${order.id}</div>
                <div style="font-size:12px;color:var(--text3);margin-top:2px;">${order.date}</div>
              </div>
              <div class="order-status status-${order.status.toLowerCase()}">${order.status}</div>
            </div>
            <div class="order-items-preview">${order.items.map(i => i.emoji).join('')}</div>
            <div style="font-size:14px;color:var(--text2);margin-bottom:12px;">
              ${order.items.map(i => `${i.name} ×${i.qty}`).join(', ')}
            </div>
            <div class="order-card-footer">
              <div class="order-card-date">📍 Delivered to ${order.address}</div>
              <div class="order-card-total">₹${order.total.toLocaleString()}</div>
            </div>
          </div>
        `).join('')
      }
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="footer" id="about">
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="navbar-logo" style="cursor:default;">
              <div class="logo-icon">🍽️</div>
              <div class="logo-text">Feast<span>Hub</span></div>
            </div>
            <p>Delivering restaurant-quality food right to your door since 2024. Made with love, delivered with speed.</p>
          </div>
          <div>
            <div class="footer-col-title">Explore</div>
            <div class="footer-links">
              <a href="#" onclick="navigate('home'); return false">Menu</a>
              <a href="#">Offers & Deals</a>
              <a href="#">Top Rated</a>
              <a href="#">New Arrivals</a>
            </div>
          </div>
          <div>
            <div class="footer-col-title">Account</div>
            <div class="footer-links">
              <a href="#" onclick="navigate('orders'); return false">My Orders</a>
              <a href="#">Wishlist</a>
              <a href="#">Profile</a>
              <a href="#">Addresses</a>
            </div>
          </div>
          <div>
            <div class="footer-col-title">Help</div>
            <div class="footer-links">
              <a href="#">FAQs</a>
              <a href="#">Contact Us</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-copy">© 2025 FeastHub. Built with ❤️ for foodies everywhere.</div>
          <div style="display:flex;gap:16px;font-size:20px;">🐦 📘 📸</div>
        </div>
      </div>
    </footer>
  `;
}

// =====================
// RENDER
// =====================
function render() {
  const app = document.getElementById('app');

  let pageContent = '';
  if (state.page === 'home') {
    pageContent = `
      ${renderHero()}
      <div id="menu">
        ${renderCategories()}
        ${renderSearch()}
        <div class="section">${renderFoodGrid()}</div>
      </div>
      ${renderFooter()}
    `;
  } else if (state.page === 'checkout') {
    pageContent = renderCheckoutPage();
  } else if (state.page === 'success') {
    pageContent = renderOrderSuccess();
  } else if (state.page === 'orders') {
    pageContent = renderOrdersPage();
  }

  app.innerHTML = `
    <div id="toast-container"></div>
    ${renderNavbar()}
    <main>${pageContent}</main>
    ${renderCartSidebar()}
    ${state.modalFood ? renderFoodModal() : ''}
    ${state.authOpen ? renderAuthModal() : ''}
  `;

  // Restore scroll
  if (state.page !== 'home') window.scrollTo({ top: 0 });
}

// =====================
// ACTIONS
// =====================
function navigate(page) {
  state.page = page;
  state.cartOpen = false;
  state.modalFood = null;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(id) {
  if (state.page !== 'home') { navigate('home'); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100); }
  else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function setCategory(cat) { state.category = cat; render(); }
function setSearch(val) { state.search = val; render(); }
function setSort(val) { state.sort = val; render(); }
function toggleCart() { state.cartOpen = !state.cartOpen; render(); }

function openFoodModal(id) {
  state.modalFood = FOODS.find(f => f.id === id);
  state.modalQty = 1;
  render();
}
function closeFoodModal(e) {
  if (e && e.target !== document.querySelector('.modal-overlay')) return;
  state.modalFood = null;
  render();
}
function setModalQty(qty) {
  state.modalQty = Math.max(1, qty);
  render();
}

function buyNow(id, qty) {
  const food = FOODS.find(f => f.id === id);
  addToCart(food, qty);
  state.modalFood = null;
  state.cartOpen = false;
  navigate('checkout');
}

function openAuth(mode) { state.authOpen = true; state.authMode = mode; render(); }
function closeAuth(e) {
  if (e && e.target !== document.querySelector('.modal-overlay')) return;
  state.authOpen = false;
  render();
}

function handleLogin() {
  const email = document.getElementById('auth-email')?.value;
  const password = document.getElementById('auth-password')?.value;
  if (!email || !password) { toast('Please fill all fields', 'error'); return; }
  state.user = { name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), email };
  saveState();
  state.authOpen = false;
  toast(`Welcome back, ${state.user.name.split(' ')[0]}! 🎉`, 'success');
  render();
}

function handleSignup() {
  const name = document.getElementById('auth-name')?.value;
  const email = document.getElementById('auth-email')?.value;
  const password = document.getElementById('auth-password')?.value;
  if (!name || !email || !password) { toast('Please fill all fields', 'error'); return; }
  if (password.length < 6) { toast('Password must be at least 6 characters', 'error'); return; }
  state.user = { name, email };
  saveState();
  state.authOpen = false;
  toast(`Welcome to FeastHub, ${name.split(' ')[0]}! 🎉`, 'success');
  render();
}

function logout() {
  state.user = null;
  localStorage.removeItem('fh_user');
  toast('Signed out successfully', 'default');
  render();
}

function placeOrder() {
  if (!state.cart.length) { toast('Your cart is empty!', 'error'); return; }
  const orderId = 'FH' + Date.now().toString().slice(-8);
  const order = {
    id: orderId,
    items: state.cart.map(i => ({ ...i })),
    total: cartTotal() + (cartTotal() > 599 ? 0 : 49) + Math.round(cartTotal() * 0.05),
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    status: 'Processing',
    eta: Math.floor(Math.random() * 15) + 25,
    address: 'Hyderabad',
    payment: state.checkoutPayment,
  };
  state.orders.push(order);
  state.cart = [];
  saveState();
  navigate('success');
}

// =====================
// INIT
// =====================
render();