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
  initTheme();
  loadPricesFromStorage();
  renderFilters();
  renderMenu();
  setupEmberCanvas();
  setupTrailCanvas();
  setupScrollTracking();
  setupScrollReveal();
  setupChatbot();
  initPageLoader();
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

    const dietIndicator = `<span class="diet-dot-wrapper ${item.tag}"><span class="diet-dot"></span></span>`;

    card.innerHTML = `
      <div class="food-img-container">
        <img src="${item.image}" alt="${item.name}" class="food-svg-graphic" loading="lazy">
        <span class="spicy-badge">${chilis}</span>
        <span class="tag-badge ${tagClass}">${tagText}</span>
      </div>
      <div class="menu-card-body">
        <h3 class="menu-item-title">${dietIndicator}${item.name}</h3>
        <p class="menu-item-desc">${item.description}</p>
        <div class="menu-card-divider"></div>
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

// --- DUAL BACKGROUND PARTICLES & BURST EFFECT CANVAS ---
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
  const maxParticles = 55;

  class Particle {
    constructor(x, y, isBurst = false) {
      this.isBurst = isBurst;
      if (isBurst) {
        this.type = 'chilli';
      } else {
        this.type = Math.random() < 0.35 ? 'chilli' : 'gold-dust';
      }
      
      this.reset(x, y);
      
      if (!isBurst && x === undefined && y === undefined) {
        this.y = Math.random() * height;
      }
    }

    reset(x, y) {
      this.x = x !== undefined ? x : Math.random() * width;
      this.y = y !== undefined ? y : height + Math.random() * 40;
      
      if (this.type === 'chilli') {
        this.size = Math.random() * 5 + 4; // Width/height 4 to 9px
        this.parallaxFactor = Math.random() * 0.15 + 0.35; // 0.35 to 0.5 (closer)
        
        // Build random irregular polygon coordinates (3-5 sides)
        const numPoints = Math.floor(Math.random() * 3) + 3;
        this.points = [];
        const radius = this.size;
        for (let i = 0; i < numPoints; i++) {
          const theta = (i / numPoints) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
          const r = radius * (0.6 + Math.random() * 0.4);
          this.points.push({
            x: Math.cos(theta) * r,
            y: Math.sin(theta) * r
          });
        }
        
        if (this.isBurst) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 5 + 3;
          this.speedX = Math.cos(angle) * speed;
          this.speedY = Math.sin(angle) * speed - 1.5;
          this.gravity = 0.08;
          this.life = Math.random() * 35 + 25;
          this.maxLife = this.life;
        } else {
          this.speedY = -(Math.random() * 0.5 + 0.2);
          this.speedX = Math.random() * 0.6 - 0.3;
          this.gravity = 0;
          this.life = Math.random() * 200 + 100;
          this.maxLife = this.life;
        }
        
        this.angle = Math.random() * Math.PI * 2;
        this.angularVelocity = Math.random() * 0.06 - 0.03;
        
        // Deep reds and maroons
        const colors = ["#800020", "#5c0612", "#4a040b", "#901a1e", "#722f37"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.4;
      } else {
        // Gold dust
        this.size = Math.random() * 1.8 + 0.8; // 0.8 to 2.6px
        this.parallaxFactor = Math.random() * 0.1 + 0.1; // 0.1 to 0.2 (deeper)
        this.speedY = -(Math.random() * 0.7 + 0.3);
        this.speedX = Math.random() * 0.4 - 0.2;
        this.gravity = 0;
        
        this.angle = 0;
        this.angularVelocity = 0;
        
        const colors = ["#d4af37", "#f3e5ab", "#cca43b", "#ffecb3"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.4 + 0.2;
      }
    }

    update() {
      if (this.type === 'chilli' && this.isBurst) {
        this.speedY += this.gravity;
        this.speedX *= 0.97;
        this.speedY *= 0.97;
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.angularVelocity * 1.8;
        this.life--;
      } else {
        this.y += this.speedY;
        this.x += this.speedX;
        this.angle += this.angularVelocity;
        
        // Wrap-around logic based on scroll position
        const scrollOffset = window.scrollY * (1 - this.parallaxFactor);
        const drawY = this.y + scrollOffset;
        
        if (drawY < -40 || this.y < -150) {
          this.y = height + 40 - scrollOffset;
          this.x = Math.random() * width;
        }
      }
    }

    draw() {
      const scrollOffset = window.scrollY * (1 - this.parallaxFactor);
      const drawY = this.y + scrollOffset;
      
      if (drawY < -50 || drawY > height + 50) return;
      
      ctx.save();
      ctx.translate(this.x, drawY);
      
      if (this.type === 'chilli') {
        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.closePath();
        ctx.fillStyle = this.color;
        
        if (this.isBurst) {
          ctx.globalAlpha = Math.max(0, (this.life / this.maxLife) * this.opacity);
        } else {
          ctx.globalAlpha = this.opacity;
        }
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
      ctx.restore();
    }
  }

  // Populate background particles
  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }

  // Explore button hover burst listener
  const exploreBtn = document.getElementById("exploreMenuBtn");
  if (exploreBtn) {
    exploreBtn.addEventListener("mouseenter", () => {
      const btnRect = exploreBtn.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      const x = btnRect.left - canvasRect.left + btnRect.width / 2;
      const y = btnRect.top - canvasRect.top + btnRect.height / 2;
      
      // Spawn 30 burst particles
      for (let i = 0; i < 30; i++) {
        particles.push(new Particle(x, y, true));
      }
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      if (p.isBurst && p.life <= 0) {
        particles.splice(i, 1);
      } else {
        p.draw();
      }
    }

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
  const fallingChilis = [];
  const mouse = { x: null, y: null };
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

  class TrailParticle {
    constructor(x, y, speedMult = 1, isScrollParticle = false) {
      this.x = x;
      this.y = y;
      this.isScrollParticle = isScrollParticle;
      
      // Random length and thickness for elongated dash/streak
      this.length = Math.random() * 12 + 8;
      this.thickness = Math.random() * 1.5 + 1;
      
      // Spawning velocities
      if (isScrollParticle) {
        // Falling spark particles: pointed downwards with slight spread
        const angle = Math.PI / 2 + (Math.random() * 0.6 - 0.3);
        const speed = (Math.random() * 1.5 + 1.25) * speedMult;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.gravity = 0.05;
      } else {
        // Scattered mouse trail streaks moving outwards radially
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * 2.5 + 1) * speedMult;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.gravity = 0;
      }
      
      // Lifetime in frames (approx 60 frames = 1 second)
      this.maxLife = Math.random() * 20 + 50; 
      this.life = this.maxLife;
      
      // Palette
      const colors = [
        "#d4af37", // Gold
        "#f3e5ab", // Light gold
        "#800020", // Maroon
        "#ff4500", // Fiery orange-red
        "#ff8c00"  // Hot orange
      ];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.opacity = Math.random() * 0.6 + 0.4;
    }

    update() {
      // Apply forces and velocity
      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      
      // Drag/friction to slow down slightly
      this.vx *= 0.97;
      this.vy *= 0.97;
      
      this.life--;
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      // Align dash along its direction of travel
      ctx.rotate(Math.atan2(this.vy, this.vx));
      
      ctx.beginPath();
      // Draw a line/dash/streak
      ctx.rect(-this.length / 2, -this.thickness / 2, this.length, this.thickness);
      
      ctx.fillStyle = this.color;
      ctx.globalAlpha = Math.max(0, (this.life / this.maxLife) * this.opacity);
      
      // Fiery neon glow shadow
      ctx.shadowBlur = 6;
      ctx.shadowColor = this.color;
      
      ctx.fill();
      ctx.restore();
    }
  }

  class ChiliParticle {
    constructor(titleRect) {
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;
      
      // Random starting point along the width of the brand name text
      this.x = (titleRect.left + scrollX) + Math.random() * titleRect.width;
      
      // Random starting point near top or bottom edge of heading letters
      const spawnAtBottom = Math.random() < 0.5;
      this.y = (titleRect.top + scrollY) + (spawnAtBottom ? titleRect.height : 0) + (Math.random() * 4 - 2);
      
      // Physics properties
      this.vx = Math.random() * 0.6 - 0.3; // Slight sideways drift
      this.vy = Math.random() * 0.8 + 0.4;  // Initial falling speed
      this.gravity = Math.random() * 0.02 + 0.03; // Falling speed acceleration
      
      // Rotation properties for tumbling
      this.angle = Math.random() * Math.PI * 2;
      this.angularVelocity = (Math.random() * 0.02 + 0.015) * (Math.random() < 0.5 ? 1 : -1);
      
      // Randomize visual size scale
      this.scale = Math.random() * 0.4 + 0.8;
      
      // Red/maroon palette matching theme
      const colors = ["#800020", "#a31d1d", "#5c0612", "#b91c1c", "#962d2d"];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.opacity = 1.0;
    }

    update(heroBottomDocY) {
      // Physics calculations
      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      
      // Rotation tumble
      this.angle += this.angularVelocity;
      
      // Fade out past the bottom of the hero section
      const fadeStart = heroBottomDocY - 120;
      if (this.y > fadeStart) {
        this.opacity = Math.max(0, 1 - (this.y - fadeStart) / 120);
      }
    }

    draw() {
      // Drawing relative to viewport because canvas is fixed position
      const drawX = this.x - window.scrollX;
      const drawY = this.y - window.scrollY;
      
      // Skip rendering if not visible on screen
      if (drawY < -20 || drawY > height + 20 || drawX < -20 || drawX > width + 20) return;
      
      ctx.save();
      ctx.translate(drawX, drawY);
      ctx.rotate(this.angle);
      ctx.scale(this.scale, this.scale);
      ctx.globalAlpha = this.opacity;
      
      // Draw flat procedural chili body
      ctx.beginPath();
      ctx.moveTo(0, -7);
      ctx.bezierCurveTo(4.5, -5.5, 6, 2, 1.5, 9.5);
      ctx.quadraticCurveTo(0, 12, -0.75, 13.5); // Tip pointing down-left
      ctx.bezierCurveTo(-2.25, 8.5, -4.5, 2, -3, -5.5);
      ctx.closePath();
      
      ctx.fillStyle = this.color;
      ctx.fill();
      
      // Draw flat green stem
      ctx.beginPath();
      ctx.moveTo(-1, -6.5);
      ctx.quadraticCurveTo(-1.5, -10.5, -4.5, -9);
      ctx.strokeStyle = "#2e7d32";
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";
      ctx.stroke();
      
      ctx.restore();
    }
  }

  const scrollBtn = document.querySelector(".hero-scroll-btn");
  const heroTitle = document.querySelector(".hero-title");
  const heroSection = document.getElementById("home");

  if (!isTouchDevice) {
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      for (let i = 0; i < 4; i++) {
        particles.push(new TrailParticle(mouse.x, mouse.y));
      }
    });
  } else {
    window.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      for (let i = 0; i < 15; i++) {
        particles.push(new TrailParticle(touch.clientX, touch.clientY, 2));
      }
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      const touch = e.touches[0];
      for (let i = 0; i < 2; i++) {
        particles.push(new TrailParticle(touch.clientX, touch.clientY));
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

    // Spawn falling chilis from brand heading
    if (heroTitle && heroSection) {
      const heroRect = heroSection.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const heroBottomDocY = heroRect.bottom + scrollY;
      
      // Only spawn when hero section is in view
      if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
        if (Math.random() < 0.05) { // 5% spawn rate per frame (approx 3 per sec)
          const titleRect = heroTitle.getBoundingClientRect();
          fallingChilis.push(new ChiliParticle(titleRect));
        }
      }
      
      // Update & Draw falling chilis
      for (let i = fallingChilis.length - 1; i >= 0; i--) {
        const chili = fallingChilis[i];
        chili.update(heroBottomDocY);
        if (chili.opacity <= 0 || chili.y > heroBottomDocY) {
          fallingChilis.splice(i, 1);
        } else {
          chili.draw();
        }
      }
    }

    // Update & Draw cursor trail particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      if (p.life <= 0) {
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

// --- THEME TOGGLE CONTROL ---
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  if (!themeToggleBtn) return;
  
  const savedTheme = localStorage.getItem("aakooo_eatzz_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeToggleIcon(savedTheme);
  
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    // Add transition class to body/html for smooth transition
    document.body.classList.add("theme-transitioning");
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("aakooo_eatzz_theme", newTheme);
    updateThemeToggleIcon(newTheme);
    
    setTimeout(() => {
      document.body.classList.remove("theme-transitioning");
    }, 500); // matches the CSS transition time
  });
}

function updateThemeToggleIcon(theme) {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  if (!themeToggleBtn) return;
  
  const icon = themeToggleBtn.querySelector("i");
  if (!icon) return;
  
  if (theme === "dark") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}

// --- SCROLL REVEAL UTILITY ---
function setupScrollReveal() {
  const sections = document.querySelectorAll(".about-section, .menu-section, .contact-section");
  
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    section.classList.add("reveal-section");
    observer.observe(section);
  });
}

// --- PAGE LOADER TRANSITION ---
function initPageLoader() {
  const loaderScreen = document.getElementById("loaderScreen");
  if (loaderScreen) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        loaderScreen.classList.add("fade-out");
      }, 600); // 600ms loader screen display time
    });
  }
}

// --- CUSTOMER CHATBOT ASSISTANT ---
function setupChatbot() {
  const chatbotToggle = document.getElementById("chatbotToggle");
  const chatCloseBtn = document.getElementById("chatCloseBtn");
  const chatWindow = document.getElementById("chatWindow");
  const chatInput = document.getElementById("chatInput");
  const chatSendBtn = document.getElementById("chatSendBtn");
  const chatBody = document.getElementById("chatBody");
  
  if (!chatbotToggle || !chatCloseBtn || !chatWindow) return;

  // Toggle Chat window
  chatbotToggle.addEventListener("click", () => {
    chatWindow.classList.add("open");
  });
  
  chatCloseBtn.addEventListener("click", () => {
    chatWindow.classList.remove("open");
  });

  // Handle Quick Reply Clicks
  chatBody.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("quick-reply-btn")) {
      const action = target.getAttribute("data-action");
      const label = target.textContent;
      
      // User message
      addMessage(label, "user");
      
      setTimeout(() => {
        handleAction(action);
      }, 400);
    }
  });

  // Handle User Input Text Send
  chatSendBtn.addEventListener("click", sendUserMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendUserMessage();
    }
  });

  function sendUserMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    
    addMessage(text, "user");
    chatInput.value = "";
    
    setTimeout(() => {
      handleTextResponse(text);
    }, 450);
  }

  function addMessage(text, sender, isHTML = false) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `chat-message ${sender}`;
    
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";
    
    if (isHTML) {
      bubble.innerHTML = text;
    } else {
      bubble.textContent = text;
    }
    
    messageDiv.appendChild(bubble);
    
    // Remove old quick reply container before inserting user message
    const quickReplies = chatBody.querySelector(".chat-quick-replies");
    if (quickReplies && sender === "user") {
      chatBody.insertBefore(messageDiv, quickReplies);
      quickReplies.remove();
    } else {
      chatBody.appendChild(messageDiv);
    }
    
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function handleAction(action) {
    let responseText = "";
    let isHTML = false;

    switch (action) {
      case "menu":
        responseText = "<strong>🔥 AAKOOO EATZZ MENU:</strong><br>" + 
                       menuItems.map(item => `• ${item.name}: ₹${item.price.toFixed(2)}`).join("<br>");
        isHTML = true;
        break;
      case "timings":
        responseText = "🕒 <strong>Operating Hours:</strong><br>Monday - Sunday: 4:00 PM - 11:30 PM<br>(Best street vibe around 8:00 PM!)";
        isHTML = true;
        break;
      case "location":
        responseText = "📍 <strong>Find Us:</strong><br>12/4 Spicy Street, Near Food Market, Erode, Tamil Nadu, 636001";
        isHTML = true;
        break;
      case "order":
        responseText = "To place an order, click below to chat with us on WhatsApp!<br>" + 
                       `<a href="https://wa.me/919384412751?text=Hi,%20I'd%20like%20to%20place%20an%20order%20from%20Aakooo%20Eatzz" target="_blank" class="chat-whatsapp-btn"><i class="fa-brands fa-whatsapp"></i> Order on WhatsApp</a>`;
        isHTML = true;
        break;
      case "contact":
        responseText = "📞 <strong>Contact Details:</strong><br>Phone: +91 9384412751<br>Email: aakooeatzz@gmail.com";
        isHTML = true;
        break;
    }
    
    addMessage(responseText, "bot", isHTML);
    showQuickReplies();
  }

  function handleTextResponse(text) {
    const cleanText = text.toLowerCase();
    let responseText = "";
    let isHTML = false;
    
    if (cleanText.includes("menu") || cleanText.includes("price") || cleanText.includes("food") || cleanText.includes("eat")) {
      responseText = "<strong>🔥 AAKOOO EATZZ MENU:</strong><br>" + 
                     menuItems.map(item => `• ${item.name}: ₹${item.price.toFixed(2)}`).join("<br>");
      isHTML = true;
    } else if (cleanText.includes("timing") || cleanText.includes("hours") || cleanText.includes("open") || cleanText.includes("close")) {
      responseText = "🕒 <strong>Operating Hours:</strong><br>Monday - Sunday: 4:00 PM - 11:30 PM<br>(Best street vibe around 8:00 PM!)";
      isHTML = true;
    } else if (cleanText.includes("location") || cleanText.includes("find") || cleanText.includes("where") || cleanText.includes("address")) {
      responseText = "📍 <strong>Find Us:</strong><br>12/4 Spicy Street, Near Food Market, Erode, Tamil Nadu, 636001";
      isHTML = true;
    } else if (cleanText.includes("order") || cleanText.includes("buy") || cleanText.includes("whatsapp")) {
      responseText = "To place an order, click below to chat with us on WhatsApp!<br>" + 
                     `<a href="https://wa.me/919384412751?text=Hi,%20I'd%20like%20to%20place%20an%20order%20from%20Aakooo%20Eatzz" target="_blank" class="chat-whatsapp-btn"><i class="fa-brands fa-whatsapp"></i> Order on WhatsApp</a>`;
      isHTML = true;
    } else if (cleanText.includes("contact") || cleanText.includes("phone") || cleanText.includes("email") || cleanText.includes("number")) {
      responseText = "📞 <strong>Contact Details:</strong><br>Phone: +91 9384412751<br>Email: aakooeatzz@gmail.com";
      isHTML = true;
    } else {
      responseText = "I'm not sure I understand that. 🌶️ You can ask about our menu, timings, location, contact, or click below to chat with us directly on WhatsApp:<br>" + 
                     `<a href="https://wa.me/919384412751?text=Hi,%20I'd%20like%20to%20place%20an%20order%20from%20Aakooo%20Eatzz" target="_blank" class="chat-whatsapp-btn"><i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp</a>`;
      isHTML = true;
    }
    
    addMessage(responseText, "bot", isHTML);
    showQuickReplies();
  }

  function showQuickReplies() {
    const oldReplies = chatBody.querySelector(".chat-quick-replies");
    if (oldReplies) oldReplies.remove();
    
    const container = document.createElement("div");
    container.className = "chat-quick-replies";
    container.id = "chatQuickReplies";
    
    const buttons = [
      { action: "menu", text: "View Menu" },
      { action: "timings", text: "Shop Timings" },
      { action: "location", text: "Location" },
      { action: "order", text: "Place an Order" },
      { action: "contact", text: "Contact Us" }
    ];
    
    buttons.forEach(btn => {
      const button = document.createElement("button");
      button.className = "quick-reply-btn";
      button.setAttribute("data-action", btn.action);
      button.textContent = btn.text;
      container.appendChild(button);
    });
    
    chatBody.appendChild(container);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}
