// --- MENU ITEMS DATA WITH SVG ILLUSTRATIONS ---
const DEFAULT_MENU_ITEMS = [
  {
    id: "thattu-vadai-set",
    name: "Thattu Vadai Set",
    description: "The classic Salem street snack. Crunchy flat puris loaded with grated carrots, beetroots, onions, and signature spicy-tangy chutneys.",
    category: "thattu-vadai",
    spicyLevel: 3,
    price: 35.00,
    tag: "veg",
    image: "assets/thattu_vadai_set.png"
  },
  {
    id: "norukkal-set",
    name: "Norukkal Set",
    description: "Crispy puris crushed by hand and tossed together with fresh grated veggies, roasted peanuts, and a generous splash of spicy garlic soup (settu thuni).",
    category: "norukkal",
    spicyLevel: 4,
    price: 45.00,
    tag: "veg",
    image: "assets/norukkal_set.png"
  },
  {
    id: "mango-thattu-vadai",
    name: "Mango Thattu Vadai",
    description: "Classic Thattu Vadai Set upgraded with crunchy, raw sour mango slices and a special dusting of hot chili powder. Tangy and spicy clash!",
    category: "thattu-vadai",
    spicyLevel: 4,
    price: 40.00,
    tag: "veg",
    image: "assets/mango_thattu_vadai.png"
  },
  {
    id: "mutta-thattu-vadai",
    name: "Mutta Thattu Vadai",
    description: "Thattu Vadai Set layered with thin slices of hard-boiled eggs, spiced green chutney, and hot Salem pepper powder.",
    category: "thattu-vadai",
    spicyLevel: 3,
    price: 50.00,
    tag: "non-veg",
    image: "assets/mutta_thattu_vadai.png"
  },
  {
    id: "mutta-norukkal",
    name: "Mutta Norukkal",
    description: "Hand-crushed crispy flat puris mixed with scrambled egg bits, sautéed onions, green chilies, and drenched in aromatic spicy egg gravy.",
    category: "norukkal",
    spicyLevel: 4,
    price: 60.00,
    tag: "non-veg",
    image: "assets/mutta_norukkal.png"
  },
  {
    id: "chicken-norukkal",
    name: "Chicken Norukkal",
    description: "Premium high-energy Norukkal. Hand-crushed crispy puris, loaded with hot shredded chicken, curry leaves, and a thick spicy chicken salna.",
    category: "norukkal",
    spicyLevel: 5,
    price: 75.00,
    tag: "non-veg",
    image: "assets/chicken_norukkal.png"
  },
  {
    id: "spicy-lays",
    name: "Spicy Lays",
    description: "A fun street-side fusion. A packet of crushed Lays chips topped with raw mango slices, carrots, onions, and hot green-red chili pastes.",
    category: "snacks",
    spicyLevel: 3,
    price: 30.00,
    tag: "veg",
    image: "assets/spicy_lays.png"
  },
  {
    id: "mutta-masala",
    name: "Mutta Masala",
    description: "Perfect tea-time street snack. Halved hard-boiled eggs pan-fried and simmered in a thick, fiery onion-tomato gravy with curry leaves.",
    category: "snacks",
    spicyLevel: 4,
    price: 40.00,
    tag: "non-veg",
    image: "assets/mutta_masala.png"
  },
  {
    id: "mutta-burger",
    name: "Mutta Burger",
    description: "Desi street burger. Soft toasted buns enclosing a fluffy double egg omelette, topped with raw onions, cabbage, and extra hot spicy garlic sauce.",
    category: "snacks",
    spicyLevel: 3,
    price: 55.00,
    tag: "non-veg",
    image: "assets/mutta_burger.png"
  },
  {
    id: "pani-puri-set",
    name: "Pani Puri Set",
    description: "10 pieces of crispy puff-puris, stuffed with potato masala, and served with custom ice-cold spicy mint water (pani) and sweet tamarind sauce.",
    category: "pani-puri",
    spicyLevel: 3,
    price: 40.00,
    tag: "veg",
    image: "assets/pani_puri_set.png"
  },
  {
    id: "pani-puri-norukkal",
    name: "Pani Puri Norukkal",
    description: "A hybrid street delight. Crushed hollow puris mixed with spiced potato, raw onions, and completely drenched in spicy mint pani and curd.",
    category: "pani-puri",
    spicyLevel: 3,
    price: 45.00,
    tag: "veg",
    image: "assets/pani_puri_norukkal.png"
  },
  {
    id: "chicken-puri-norukkal",
    name: "Chicken Puri Norukkal",
    description: "The ultimate fusion. Crushed pani puris mixed with shredded spicy chicken, diced onions, sweet dates chutney, and hot green-chili water.",
    category: "pani-puri",
    spicyLevel: 5,
    price: 70.00,
    tag: "non-veg",
    image: "assets/chicken_puri_norukkal.png"
  }
];

// --- MENU CATEGORIES ---
const CATEGORIES = [
  { id: "all", name: "All Heat" },
  { id: "thattu-vadai", name: "Thattu Vadai" },
  { id: "norukkal", name: "Norukkal Sets" },
  { id: "pani-puri", name: "Pani Puri Specials" },
  { id: "snacks", name: "Spicy Snacks" }
];

// --- STATE MANAGEMENT ---
let menuItems = [...DEFAULT_MENU_ITEMS];
let currentFilter = "all";
let searchTerm = "";
let isOwnerMode = false;
let plate = []; // Cart items: { id, name, price, qty }

// --- DOM ELEMENTS ---
const menuGrid = document.getElementById("menuGrid");
const filterTabsContainer = document.getElementById("filterTabsContainer");
const menuSearchInput = document.getElementById("menuSearchInput");
const ownerModeToggle = document.getElementById("ownerModeToggle");
const ownerLinkToggle = document.getElementById("ownerLinkToggle");

const plateBadgeBtn = document.getElementById("plateBadgeBtn");
const plateDrawer = document.getElementById("plateDrawer");
const closePlateBtn = document.getElementById("closePlateBtn");
const plateBackdrop = document.getElementById("plateBackdrop");
const plateItemsContainer = document.getElementById("plateItemsContainer");
const plateTotalAmount = document.getElementById("plateTotalAmount");
const plateBadgeCount = document.getElementById("plateBadgeCount");
const checkoutBtn = document.getElementById("checkoutBtn");
const mainHeader = document.getElementById("mainHeader");
const backToTopBtn = document.getElementById("backToTopBtn");

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  loadPricesFromStorage();
  renderFilters();
  renderMenu();
  setupEmberCanvas();
  setupTrailCanvas();
  setupScrollTracking();
});

// --- LOCAL STORAGE PRICES ---
function loadPricesFromStorage() {
  const savedPrices = localStorage.getItem("aakooo_eatzz_prices");
  if (savedPrices) {
    try {
      const parsedPrices = JSON.parse(savedPrices);
      menuItems.forEach(item => {
        if (parsedPrices[item.id] !== undefined) {
          item.price = parsedPrices[item.id];
        }
      });
    } catch (e) {
      console.error("Error loading prices from storage:", e);
    }
  }
}

function savePricesToStorage() {
  const pricesMap = {};
  menuItems.forEach(item => {
    pricesMap[item.id] = item.price;
  });
  localStorage.setItem("aakooo_eatzz_prices", JSON.stringify(pricesMap));
}

// --- RENDER FILTER TABS ---
function renderFilters() {
  filterTabsContainer.innerHTML = CATEGORIES.map(category => `
    <button class="filter-chip ${category.id === currentFilter ? 'active' : ''}" 
            data-filter="${category.id}">
      ${category.name}
    </button>
  `).join("");

  // Add event listeners
  document.querySelectorAll(".filter-chip").forEach(button => {
    button.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-chip").forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");
      currentFilter = e.target.getAttribute("data-filter");
      renderMenu();
    });
  });
}

// --- RENDER MENU CARDS ---
function renderMenu() {
  menuGrid.innerHTML = "";

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = currentFilter === "all" || item.category === currentFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filteredItems.length === 0) {
    menuGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--color-text-dim);">
        <i class="fa-solid fa-ghost" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
        <p>No spicy foods match your filter or search!</p>
      </div>
    `;
    return;
  }

  filteredItems.forEach(item => {
    const card = document.createElement("div");
    card.className = `menu-card ${isOwnerMode ? 'owner-active' : ''}`;
    card.id = `card-${item.id}`;

    // Spicy level chili rendering
    const chilis = Array(item.spicyLevel).fill('<i class="fa-solid fa-pepper-hot"></i>').join("");

    // Display standard price or empty placeholder
    const priceText = item.price ? `₹${Number(item.price).toFixed(2)}` : `<span class="price-display blank">Not Set</span>`;
    
    // Veg/Non-veg tag visual
    const tagClass = item.tag === "veg" ? "veg" : "non-veg";
    const tagText = item.tag === "veg" ? "Veg" : "Non-Veg";

    card.innerHTML = `
      <div class="food-img-container">
        <img src="${item.image}" alt="${item.name}" class="food-svg-graphic">
        <span class="spicy-badge">${chilis}</span>
        <span class="tag-badge ${tagClass}">${tagText}</span>
      </div>
      <div class="menu-card-body">
        <h3 class="menu-item-title">${item.name}</h3>
        <p class="menu-item-desc">${item.description}</p>
        <div class="menu-card-footer">
          <div class="price-container">
            <!-- Customer Mode Display -->
            <span class="price-display" id="display-price-${item.id}">${priceText}</span>
            
            <!-- Owner Mode Input -->
            <div class="price-input-wrapper">
              <input type="number" 
                     class="price-input" 
                     id="input-price-${item.id}" 
                     value="${item.price || ''}" 
                     placeholder="0.00" 
                     step="0.5" 
                     min="0"
                     aria-label="Edit price for ${item.name}">
            </div>
          </div>
          <button class="add-to-plate-btn" 
                  id="add-btn-${item.id}" 
                  ${!item.price ? 'disabled title="Owner needs to set a price first"' : ''}>
            <i class="fa-solid fa-plus"></i> Add
          </button>
        </div>
      </div>
    `;

    menuGrid.appendChild(card);

    // Setup input dynamic event listener for owner mode
    const priceInput = card.querySelector(`.price-input`);
    priceInput.addEventListener("change", (e) => {
      handlePriceChange(item.id, e.target.value);
    });

    // Add button click
    const addBtn = card.querySelector(`.add-to-plate-btn`);
    addBtn.addEventListener("click", () => {
      addToPlate(item.id);
    });
  });
}

// --- HANDLE PRICE UPDATES ---
function handlePriceChange(itemId, newValue) {
  const parsedValue = parseFloat(newValue);
  const targetItem = menuItems.find(item => item.id === itemId);
  
  if (targetItem) {
    if (isNaN(parsedValue) || parsedValue < 0) {
      targetItem.price = 0;
    } else {
      targetItem.price = parsedValue;
    }
    
    // Save, update displays & recalulate plates
    savePricesToStorage();
    updatePriceUI(targetItem);
    updatePlateItemPrices(targetItem.id, targetItem.price);
  }
}

// Update card UI locally without full re-render (maintains focus)
function updatePriceUI(item) {
  const displayPrice = document.getElementById(`display-price-${item.id}`);
  const addBtn = document.getElementById(`add-btn-${item.id}`);
  
  if (item.price) {
    displayPrice.innerHTML = `₹${Number(item.price).toFixed(2)}`;
    displayPrice.classList.remove("blank");
    addBtn.removeAttribute("disabled");
    addBtn.removeAttribute("title");
  } else {
    displayPrice.innerHTML = `<span class="price-display blank">Not Set</span>`;
    addBtn.setAttribute("disabled", "true");
    addBtn.setAttribute("title", "Owner needs to set a price first");
  }
}

// Update plate cart prices if owner changes them live
function updatePlateItemPrices(itemId, newPrice) {
  const plateItem = plate.find(p => p.id === itemId);
  if (plateItem) {
    if (!newPrice) {
      // Remove item if price set to blank/zero
      plate = plate.filter(p => p.id !== itemId);
    } else {
      plateItem.price = newPrice;
    }
    renderPlate();
  }
}

// --- SEARCH FILTERING ---
menuSearchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  renderMenu();
});

// --- OWNER MODE TOGGLES ---
function toggleOwnerMode(enabled) {
  isOwnerMode = enabled;
  ownerModeToggle.checked = enabled;
  
  // Update class list of cards
  const cards = document.querySelectorAll(".menu-card");
  cards.forEach(card => {
    if (enabled) {
      card.classList.add("owner-active");
    } else {
      card.classList.remove("owner-active");
    }
  });

  // Focus first input if enabled
  if (enabled) {
    const firstInput = document.querySelector(".price-input");
    if (firstInput) firstInput.focus();
  }
}

ownerModeToggle.addEventListener("change", (e) => {
  toggleOwnerMode(e.target.checked);
});

// Footer portal click shortcut
ownerLinkToggle.addEventListener("click", (e) => {
  e.preventDefault();
  toggleOwnerMode(!isOwnerMode);
  // Scroll to menu section where controls are visible
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

// --- PLATE / CART DRAWER INTERACTIONS ---
plateBadgeBtn.addEventListener("click", () => {
  plateDrawer.classList.add("open");
  plateBackdrop.classList.add("open");
});

closePlateBtn.addEventListener("click", closeDrawer);
plateBackdrop.addEventListener("click", closeDrawer);

function closeDrawer() {
  plateDrawer.classList.remove("open");
  plateBackdrop.classList.remove("open");
}

function addToPlate(itemId) {
  const foodItem = menuItems.find(item => item.id === itemId);
  if (!foodItem || !foodItem.price) return;

  const existingPlateItem = plate.find(p => p.id === itemId);
  if (existingPlateItem) {
    existingPlateItem.qty += 1;
  } else {
    plate.push({
      id: foodItem.id,
      name: foodItem.name,
      price: foodItem.price,
      qty: 1
    });
  }

  renderPlate();
  
  // Highlight the badge dynamically
  plateBadgeBtn.classList.add("neon-text-yellow");
  setTimeout(() => {
    plateBadgeBtn.classList.remove("neon-text-yellow");
  }, 400);
}

function updateQty(itemId, change) {
  const plateItem = plate.find(p => p.id === itemId);
  if (!plateItem) return;

  plateItem.qty += change;
  if (plateItem.qty <= 0) {
    plate = plate.filter(p => p.id !== itemId);
  }
  renderPlate();
}

function removeFromPlate(itemId) {
  plate = plate.filter(p => p.id !== itemId);
  renderPlate();
}

function renderPlate() {
  plateItemsContainer.innerHTML = "";
  
  let totalCost = 0;
  let totalQty = 0;

  if (plate.length === 0) {
    plateItemsContainer.innerHTML = `
      <div class="plate-empty-msg">
        <i class="fa-solid fa-fire-burner"></i>
        <p>Your plate is empty.<br>Start adding some spicy treats!</p>
      </div>
    `;
    plateTotalAmount.textContent = "₹0.00";
    plateBadgeCount.textContent = "0";
    checkoutBtn.setAttribute("disabled", "true");
    return;
  }

  checkoutBtn.removeAttribute("disabled");

  plate.forEach(item => {
    const itemCost = item.price * item.qty;
    totalCost += itemCost;
    totalQty += itemItemQtyCount = item.qty;

    const itemEl = document.createElement("div");
    itemEl.className = "plate-item";
    itemEl.innerHTML = `
      <div class="plate-item-info">
        <h4>${item.name}</h4>
        <p>₹${Number(item.price).toFixed(2)}</p>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <div class="plate-item-qty">
          <button class="qty-btn" onclick="updateQty('${item.id}', -1)" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty('${item.id}', 1)" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button class="remove-item-btn" onclick="removeFromPlate('${item.id}')" aria-label="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
    plateItemsContainer.appendChild(itemEl);
  });

  plateTotalAmount.textContent = `₹${totalCost.toFixed(2)}`;
  plateBadgeCount.textContent = plate.reduce((sum, item) => sum + item.qty, 0);
}

// Make helper functions globally accessible for inline elements
window.updateQty = updateQty;
window.removeFromPlate = removeFromPlate;

// --- WHATSAPP CHECKOUT ---
checkoutBtn.addEventListener("click", () => {
  if (plate.length === 0) return;

  let message = "🔥 *AAKOOO EATZZ ORDER* 🔥\n";
  message += "Made for True Heat Lovers! 🌶️\n\n";
  message += "----------------------------\n";
  
  let totalCost = 0;
  plate.forEach(item => {
    const cost = item.price * item.qty;
    totalCost += cost;
    message += `• *${item.qty}x* ${item.name} - ₹${cost.toFixed(2)}\n`;
  });
  
  message += "----------------------------\n";
  message += `*Total Heat Cost:* ₹${totalCost.toFixed(2)}\n\n`;
  message += "Please prepare my order fresh! ⚡";

  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/919876543210?text=${encodedMsg}`;
  window.open(whatsappUrl, "_blank");
});

// --- PARTICLE / EMBER EFFECT CANVAS ---
function setupEmberCanvas() {
  const canvas = document.getElementById("emberCanvas");
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const maxParticles = 60;

  class Particle {
    constructor() {
      this.reset();
      this.y = Math.random() * height; // Distribute vertically at start
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 20;
      this.size = Math.random() * 3 + 1;
      this.speedY = Math.random() * 1.5 + 0.5;
      this.speedX = Math.random() * 1 - 0.5;
      this.life = Math.random() * 150 + 50;
      this.maxLife = this.life;
      
      // Heat color palette (red/orange/yellow glow)
      const colors = ["#ff2e00", "#ff7a00", "#ffd600", "#ff5d00"];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.opacity = Math.random() * 0.5 + 0.3;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.life--;

      if (this.life <= 0 || this.y < 0) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = (this.life / this.maxLife) * this.opacity;
      
      // Shadow glow for embers
      ctx.shadowBlur = this.size * 2;
      ctx.shadowColor = this.color;
      
      ctx.fill();
      ctx.shadowBlur = 0; // reset
    }
  }

  // Populate particles
  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    // Draw particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// --- CURSOR TRAIL / TOUCH SPARKS ANIMATION ---
function setupTrailCanvas() {
  const canvas = document.getElementById("trailCanvas");
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const mouse = { x: null, y: null };
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

  class TrailParticle {
    constructor(x, y, speedMult = 1, isScrollParticle = false) {
      this.x = x;
      this.y = y;
      this.isScrollParticle = isScrollParticle;
      
      // Random base size (radius)
      this.size = Math.random() * 2 + 2; 
      
      // Elongation stretch factor representing puffed rice (pori) grain
      this.stretch = 1.3 + Math.random() * 0.5;
      
      // Spawning velocities
      if (isScrollParticle) {
        // Falling grains: downwards speed with narrow sideways drift
        this.vx = (Math.random() * 1.4 - 0.7) * speedMult;
        this.vy = (Math.random() * 1.5 + 1.25) * speedMult;
      } else {
        // Scattered mouse trail grains
        this.vx = (Math.random() * 2.2 - 1.1) * speedMult;
        this.vy = (Math.random() * 2.2 - 1.1) * speedMult - 0.2;
      }
      
      // Gravity settlement forces
      this.gravity = isScrollParticle ? 0.08 : 0.03;
      
      // Rotation angles and speed for organic tumbling effect
      this.angle = Math.random() * Math.PI * 2;
      this.angularVelocity = Math.random() * 0.16 - 0.08;
      
      this.maxLife = Math.random() * 35 + 20;
      this.life = this.maxLife;
      
      // Warm roasted puffed rice off-white/golden/amber palette
      const colors = [
        "rgba(255, 244, 214, 0.95)", // puffed rice off-white
        "rgba(255, 226, 150, 0.95)", // toasted golden
        "rgba(255, 170, 45, 0.95)",  // fiery amber
        "rgba(255, 80, 0, 0.9)"       // hot ember orange
      ];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.glowColor = this.color.includes("255, 244") ? "rgba(255, 214, 0, 0.3)" : this.color;
      this.opacity = Math.random() * 0.6 + 0.4;
    }

    update() {
      // Apply settlement forces
      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      
      // Apply rotation tumbling
      this.angle += this.angularVelocity;
      
      this.life--;
      this.size = Math.max(0.1, this.size * 0.96);
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      
      ctx.beginPath();
      // Draw organic puffed rice grain shape using canvas ellipse
      ctx.ellipse(0, 0, this.size * 0.55, this.size * this.stretch, 0, 0, Math.PI * 2);
      
      ctx.fillStyle = this.color;
      ctx.globalAlpha = (this.life / this.maxLife) * this.opacity;
      
      ctx.shadowBlur = this.size * 1.5;
      ctx.shadowColor = this.glowColor;
      
      ctx.fill();
      ctx.restore();
      ctx.shadowBlur = 0;
    }
  }

  const scrollBtn = document.querySelector(".hero-scroll-btn");

  if (!isTouchDevice) {
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      for (let i = 0; i < 2; i++) {
        particles.push(new TrailParticle(mouse.x, mouse.y));
      }
    });
  } else {
    window.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      for (let i = 0; i < 12; i++) {
        particles.push(new TrailParticle(touch.clientX, touch.clientY, 3));
      }
    }, { passive: true });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    // Spawn downward puffed rice stream from Scroll Down arrow when in view
    if (scrollBtn) {
      const rect = scrollBtn.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        const emitX = rect.left + rect.width / 2;
        const emitY = rect.bottom - 10;
        if (Math.random() < 0.45) {
          particles.push(new TrailParticle(emitX, emitY, 1.2, true));
        }
      }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      if (p.life <= 0 || p.size <= 0.2) {
        particles.splice(i, 1);
      } else {
        p.draw();
      }
    }
    
    requestAnimationFrame(animate);
  }

  animate();
}

// --- NAV & MOBILE HAMBURGER INTERACTIONS ---
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  navMenu.classList.toggle("open");
});

// Close menu when clicking nav-links
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("open");
    navMenu.classList.remove("open");
  });
});

// --- SCROLL TRACKING & DYNAMICS ---
function setupScrollTracking() {
  window.addEventListener("scroll", () => {
    // Header shrink
    if (window.scrollY > 50) {
      mainHeader.classList.add("scrolled");
    } else {
      mainHeader.classList.remove("scrolled");
    }

    // Back to top visibility
    if (window.scrollY > 500) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }

    // Active link highlighting
    const sections = ["home", "about", "menu", "contact"];
    let currentActive = "home";

    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) {
        const rect = el.getBoundingClientRect();
        // Section is in viewport range
        if (rect.top <= 120 && rect.bottom >= 120) {
          currentActive = secId;
        }
      }
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentActive}`) {
        link.classList.add("active");
      }
    });
  });

  // Back to top click
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
