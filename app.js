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
    svg: `<svg viewBox="0 0 100 100" class="food-svg-graphic">
      <defs>
        <radialGradient id="purigrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ff9d00" />
          <stop offset="100%" stop-color="#d45500" />
        </radialGradient>
      </defs>
      <!-- Base Plate -->
      <ellipse cx="50" cy="70" rx="35" ry="12" fill="#222" opacity="0.4" />
      <ellipse cx="50" cy="68" rx="32" ry="10" fill="#1b1b22" stroke="#333" stroke-width="1" />
      
      <!-- Puris -->
      <circle cx="38" cy="64" r="14" fill="url(#purigrad)" stroke="#b84200" stroke-width="1" />
      <circle cx="62" cy="64" r="14" fill="url(#purigrad)" stroke="#b84200" stroke-width="1" />
      <circle cx="50" cy="58" r="15" fill="url(#purigrad)" stroke="#b84200" stroke-width="1" />
      
      <!-- Veggie Stuffing -->
      <path d="M 40,50 Q 50,42 60,50 Q 55,62 40,50 Z" fill="#e65100" opacity="0.8" /> <!-- Carrot -->
      <path d="M 44,52 Q 50,45 56,52 Z" fill="#880e4f" /> <!-- Beetroot -->
      <ellipse cx="48" cy="56" rx="3" ry="1" fill="#fff" opacity="0.7" /> <!-- Onion -->
      <ellipse cx="55" cy="54" rx="2" ry="1.5" fill="#fff" opacity="0.7" /> 
      
      <!-- Chutney Drizzles -->
      <path d="M 38,55 Q 46,45 52,58" stroke="#d50000" stroke-width="2.5" fill="none" stroke-linecap="round" /> <!-- Spicy Red -->
      <path d="M 48,58 Q 58,48 64,56" stroke="#00c853" stroke-width="2" fill="none" stroke-linecap="round" /> <!-- Green Coriander -->
      
      <!-- Flame Detail -->
      <path d="M 50,22 Q 47,35 50,38 Q 53,35 50,22 Z" fill="#ff3d00" opacity="0.8" />
      <path d="M 50,26 Q 48,34 50,36 Q 52,34 50,26 Z" fill="#ffea00" />
    </svg>`
  },
  {
    id: "norukkal-set",
    name: "Norukkal Set",
    description: "Crispy puris crushed by hand and tossed together with fresh grated veggies, roasted peanuts, and a generous splash of spicy garlic soup (settu thuni).",
    category: "norukkal",
    spicyLevel: 4,
    price: 45.00,
    tag: "veg",
    svg: `<svg viewBox="0 0 100 100" class="food-svg-graphic">
      <ellipse cx="50" cy="72" rx="38" ry="12" fill="#222" opacity="0.4" />
      <ellipse cx="50" cy="70" rx="35" ry="10" fill="#1b1b22" stroke="#444" stroke-width="1.5" />
      
      <!-- Crushed puri fragments -->
      <polygon points="35,68 45,62 42,70" fill="#e65100" />
      <polygon points="58,68 68,64 62,72" fill="#ff9d00" />
      <polygon points="48,64 56,60 52,69" fill="#ff7a00" />
      
      <!-- Mixed carrots & beetroot strips -->
      <path d="M 38,62 C 42,66 48,64 52,67" stroke="#e65100" stroke-width="2" fill="none" stroke-linecap="round" />
      <path d="M 44,60 C 48,58 52,62 58,61" stroke="#880e4f" stroke-width="2" fill="none" stroke-linecap="round" />
      <path d="M 36,65 C 44,62 42,69 49,63" stroke="#2e7d32" stroke-width="1.5" fill="none" stroke-linecap="round" />
      
      <!-- Peanuts -->
      <ellipse cx="43" cy="68" rx="2" ry="1.2" fill="#8d6e63" />
      <ellipse cx="55" cy="65" rx="2" ry="1.2" fill="#8d6e63" />
      
      <!-- Rich Gravy Splash -->
      <path d="M 35,66 Q 50,52 65,66" stroke="#ff3d00" stroke-width="3" fill="none" opacity="0.8" stroke-linecap="round" />
    </svg>`
  },
  {
    id: "mango-thattu-vadai",
    name: "Mango Thattu Vadai",
    description: "Classic Thattu Vadai Set upgraded with crunchy, raw sour mango slices and a special dusting of hot chili powder. Tangy and spicy clash!",
    category: "thattu-vadai",
    spicyLevel: 4,
    price: 40.00,
    tag: "veg",
    svg: `<svg viewBox="0 0 100 100" class="food-svg-graphic">
      <ellipse cx="50" cy="70" rx="35" ry="10" fill="#1b1b22" opacity="0.5" />
      
      <!-- Puri base -->
      <circle cx="50" cy="60" r="16" fill="#ff9d00" stroke="#d45500" stroke-width="1" />
      
      <!-- Raw Mango Slices (Green crescents) -->
      <path d="M 40,52 Q 50,45 60,52 Q 50,48 40,52 Z" fill="#aeea00" stroke="#76ff03" stroke-width="0.5" />
      <path d="M 42,56 Q 50,48 58,56 Q 50,52 42,56 Z" fill="#c5e1a5" stroke="#76ff03" stroke-width="0.5" />
      
      <!-- Carrots and chili powder dots -->
      <path d="M 45,55 Q 52,62 55,54" stroke="#ff3d00" stroke-width="1.5" fill="none" />
      <circle cx="46" cy="58" r="0.8" fill="#d50000" />
      <circle cx="54" cy="57" r="0.8" fill="#d50000" />
      <circle cx="50" cy="54" r="0.8" fill="#d50000" />
    </svg>`
  },
  {
    id: "mutta-thattu-vadai",
    name: "Mutta Thattu Vadai",
    description: "Thattu Vadai Set layered with thin slices of hard-boiled eggs, spiced green chutney, and hot Salem pepper powder.",
    category: "thattu-vadai",
    spicyLevel: 3,
    price: 50.00,
    tag: "non-veg",
    svg: `<svg viewBox="0 0 100 100" class="food-svg-graphic">
      <ellipse cx="50" cy="70" rx="35" ry="10" fill="#1b1b22" opacity="0.5" />
      
      <!-- Puri base -->
      <circle cx="50" cy="60" r="16" fill="#ff9d00" stroke="#d45500" stroke-width="1" />
      
      <!-- Egg Slice -->
      <ellipse cx="50" cy="54" rx="11" ry="7" fill="#ffffff" stroke="#ddd" stroke-width="1" />
      <ellipse cx="50" cy="54" rx="5" ry="3.5" fill="#ffd600" />
      
      <!-- Spices and Onion garnish -->
      <path d="M 44,54 L 56,54" stroke="#8d6e63" stroke-width="1.5" stroke-dasharray="1 2" />
      <circle cx="48" cy="52" r="0.7" fill="#d50000" />
      <circle cx="52" cy="56" r="0.7" fill="#d50000" />
    </svg>`
  },
  {
    id: "mutta-norukkal",
    name: "Mutta Norukkal",
    description: "Hand-crushed crispy flat puris mixed with scrambled egg bits, sautéed onions, green chilies, and drenched in aromatic spicy egg gravy.",
    category: "norukkal",
    spicyLevel: 4,
    price: 60.00,
    tag: "non-veg",
    svg: `<svg viewBox="0 0 100 100" class="food-svg-graphic">
      <ellipse cx="50" cy="72" rx="38" ry="12" fill="#1b1b22" opacity="0.5" />
      
      <!-- Crushed bits -->
      <polygon points="38,68 46,63 43,70" fill="#ff9d00" />
      <polygon points="56,66 64,62 60,70" fill="#ff9d00" />
      
      <!-- Scrambled Egg Pieces (Yellowish chunks) -->
      <path d="M 45,60 Q 48,57 51,62 Z" fill="#ffd54f" stroke="#ffb300" stroke-width="0.5" />
      <path d="M 52,65 Q 55,62 58,66 Z" fill="#ffd54f" stroke="#ffb300" stroke-width="0.5" />
      <path d="M 40,65 Q 43,62 45,67 Z" fill="#fff9c4" />
      
      <!-- Red Gravy and herbs -->
      <path d="M 36,66 C 45,55 55,55 64,66" stroke="#ff2e00" stroke-width="2.5" fill="none" opacity="0.9" />
      <circle cx="48" cy="62" r="0.8" fill="#2e7d32" />
      <circle cx="52" cy="64" r="0.8" fill="#2e7d32" />
    </svg>`
  },
  {
    id: "chicken-norukkal",
    name: "Chicken Norukkal",
    description: "Premium high-energy Norukkal. Hand-crushed crispy puris, loaded with hot shredded chicken, curry leaves, and a thick spicy chicken salna.",
    category: "norukkal",
    spicyLevel: 5,
    price: 75.00,
    tag: "non-veg",
    svg: `<svg viewBox="0 0 100 100" class="food-svg-graphic">
      <ellipse cx="50" cy="72" rx="38" ry="12" fill="#1b1b22" opacity="0.5" stroke="#333" />
      
      <!-- Puri crumbs -->
      <polygon points="35,66 43,60 40,68" fill="#ff9d00" />
      <polygon points="58,66 66,62 62,70" fill="#e65100" />
      
      <!-- Shredded Chicken (Fleshy shreds) -->
      <path d="M 42,58 Q 48,62 55,59" stroke="#b71c1c" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <path d="M 45,64 Q 52,61 58,65" stroke="#b71c1c" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <path d="M 48,60 Q 50,67 52,61" stroke="#b71c1c" stroke-width="2" fill="none" stroke-linecap="round" />
      
      <!-- Spicy Chicken Salna Drizzle -->
      <path d="M 32,68 C 45,56 55,56 68,68" stroke="#ff2e00" stroke-width="3.5" fill="none" stroke-linecap="round" opacity="0.9" />
      <!-- Curry Leaves -->
      <path d="M 38,62 Q 40,60 42,63" fill="#1b5e20" />
      <path d="M 58,60 Q 60,58 62,61" fill="#1b5e20" />
    </svg>`
  },
  {
    id: "spicy-lays",
    name: "Spicy Lays",
    description: "A fun street-side fusion. A packet of crushed Lays chips topped with raw mango slices, carrots, onions, and hot green-red chili pastes.",
    category: "snacks",
    spicyLevel: 3,
    price: 30.00,
    tag: "veg",
    svg: `<svg viewBox="0 0 100 100" class="food-svg-graphic">
      <!-- Lays Packet (Open) -->
      <rect x="30" y="42" width="40" height="30" rx="4" fill="#d50000" stroke="#ff8f00" stroke-width="1.5" transform="rotate(-5 50 50)" />
      <!-- Label placeholder -->
      <ellipse cx="50" cy="56" rx="14" ry="7" fill="#ffd600" transform="rotate(-5 50 50)" />
      <text x="50" y="59" font-family="Arial" font-size="5" font-weight="900" fill="#d50000" text-anchor="middle" transform="rotate(-5 50 50)">LAYS</text>
      
      <!-- Chips popping out -->
      <circle cx="40" cy="40" r="5" fill="#ffd54f" stroke="#ffb300" stroke-width="0.5" />
      <circle cx="50" cy="38" r="6" fill="#ffd54f" stroke="#ffb300" stroke-width="0.5" />
      <circle cx="60" cy="42" r="5" fill="#ffd54f" stroke="#ffb300" stroke-width="0.5" />
      
      <!-- Veggies & Chili Powders -->
      <path d="M 38,40 Q 48,34 58,40" stroke="#ff3d00" stroke-width="2" fill="none" stroke-linecap="round" />
      <path d="M 44,38 Q 50,33 56,38" stroke="#4caf50" stroke-width="1.5" fill="none" stroke-linecap="round" />
    </svg>`
  },
  {
    id: "mutta-masala",
    name: "Mutta Masala",
    description: "Perfect tea-time street snack. Halved hard-boiled eggs pan-fried and simmered in a thick, fiery onion-tomato gravy with curry leaves.",
    category: "snacks",
    spicyLevel: 4,
    price: 40.00,
    tag: "non-veg",
    svg: `<svg viewBox="0 0 100 100" class="food-svg-graphic">
      <ellipse cx="50" cy="72" rx="35" ry="10" fill="#1b1b22" opacity="0.5" />
      
      <!-- Gravy Bowl -->
      <path d="M 28,54 C 28,68 72,68 72,54 Z" fill="#3e2723" stroke="#21100f" stroke-width="1.5" />
      <path d="M 30,53 Q 50,56 70,53" fill="none" stroke="#21100f" stroke-width="1" />
      
      <!-- Thick Red Masala -->
      <path d="M 30,55 C 36,68 64,68 70,55 Z" fill="#b71c1c" />
      
      <!-- Hard Boiled Egg Halves -->
      <ellipse cx="43" cy="56" rx="8" ry="5.5" fill="#ffffff" transform="rotate(-15 43 56)" />
      <ellipse cx="43" cy="56" rx="3.5" ry="2.5" fill="#ffc107" transform="rotate(-15 43 56)" />
      
      <ellipse cx="57" cy="56" rx="8" ry="5.5" fill="#ffffff" transform="rotate(15 57 56)" />
      <ellipse cx="57" cy="56" rx="3.5" ry="2.5" fill="#ffc107" transform="rotate(15 57 56)" />
      
      <!-- Gravy Splashes & Pepper -->
      <circle cx="50" cy="62" r="0.7" fill="#000" />
      <circle cx="44" cy="60" r="0.5" fill="#000" />
      <circle cx="56" cy="61" r="0.6" fill="#000" />
    </svg>`
  },
  {
    id: "mutta-burger",
    name: "Mutta Burger",
    description: "Desi street burger. Soft toasted buns enclosing a fluffy double egg omelette, topped with raw onions, cabbage, and extra hot spicy garlic sauce.",
    category: "snacks",
    spicyLevel: 3,
    price: 55.00,
    tag: "non-veg",
    svg: `<svg viewBox="0 0 100 100" class="food-svg-graphic">
      <!-- Shadow -->
      <ellipse cx="50" cy="78" rx="26" ry="7" fill="#1b1b22" opacity="0.6" />
      
      <!-- Bottom Bun -->
      <path d="M 28,68 Q 50,72 72,68 C 72,74 28,74 28,68 Z" fill="#d7ccc8" stroke="#8d6e63" stroke-width="1.5" />
      
      <!-- Hot Chili Sauce -->
      <path d="M 26,67 Q 50,70 74,67 L 70,69 Q 50,72 30,69 Z" fill="#d50000" />
      
      <!-- Double Egg Omelette (Folded yellow) -->
      <path d="M 24,63 Q 50,60 76,63 C 78,67 22,67 24,63 Z" fill="#ffd54f" stroke="#ffb300" stroke-width="1" />
      
      <!-- Onions & Greens -->
      <ellipse cx="38" cy="60" rx="7" ry="2" fill="none" stroke="#ba68c8" stroke-width="2.5" />
      <ellipse cx="62" cy="59" rx="6" ry="1.5" fill="none" stroke="#ba68c8" stroke-width="2.5" />
      <path d="M 25,60 Q 50,56 75,60" stroke="#4caf50" stroke-width="3" fill="none" />
      
      <!-- Top Bun -->
      <path d="M 26,56 Q 50,34 74,56 Z" fill="#a1887f" stroke="#5d4037" stroke-width="1.5" />
      <!-- Sesame seeds -->
      <circle cx="44" cy="46" r="0.6" fill="#fff" />
      <circle cx="56" cy="46" r="0.6" fill="#fff" />
      <circle cx="50" cy="50" r="0.6" fill="#fff" />
    </svg>`
  },
  {
    id: "pani-puri-set",
    name: "Pani Puri Set",
    description: "10 pieces of crispy puff-puris, stuffed with potato masala, and served with custom ice-cold spicy mint water (pani) and sweet tamarind sauce.",
    category: "pani-puri",
    spicyLevel: 3,
    price: 40.00,
    tag: "veg",
    svg: `<svg viewBox="0 0 100 100" class="food-svg-graphic">
      <ellipse cx="50" cy="74" rx="38" ry="10" fill="#1b1b22" opacity="0.5" />
      
      <!-- Big Pani Bowl (Green mint water) -->
      <ellipse cx="50" cy="54" rx="20" ry="12" fill="#1b5e20" stroke="#3e2723" stroke-width="2" />
      <ellipse cx="50" cy="50" rx="18" ry="9" fill="#2e7d32" />
      
      <!-- Crispy Puris surrounding -->
      <circle cx="26" cy="66" r="8" fill="#ffd54f" stroke="#ffb300" stroke-width="0.8" />
      <circle cx="24" cy="52" r="7.5" fill="#ffd54f" stroke="#ffb300" stroke-width="0.8" />
      <circle cx="74" cy="66" r="8" fill="#ffd54f" stroke="#ffb300" stroke-width="0.8" />
      <circle cx="76" cy="52" r="7.5" fill="#ffd54f" stroke="#ffb300" stroke-width="0.8" />
      
      <!-- Puri with Hole & Stuffing -->
      <circle cx="50" cy="72" r="10" fill="#ffd54f" stroke="#ffb300" stroke-width="1" />
      <ellipse cx="50" cy="69" rx="5" ry="3" fill="#8d6e63" /> <!-- stuffing -->
      <circle cx="50" cy="69" r="1.5" fill="#4caf50" /> <!-- green coriander -->
    </svg>`
  },
  {
    id: "pani-puri-norukkal",
    name: "Pani Puri Norukkal",
    description: "A hybrid street delight. Crushed hollow puris mixed with spiced potato, raw onions, and completely drenched in spicy mint pani and curd.",
    category: "pani-puri",
    spicyLevel: 3,
    price: 45.00,
    tag: "veg",
    svg: `<svg viewBox="0 0 100 100" class="food-svg-graphic">
      <ellipse cx="50" cy="74" rx="38" ry="10" fill="#1b1b22" opacity="0.5" />
      <ellipse cx="50" cy="70" rx="34" ry="9" fill="#15151e" stroke="#444" stroke-width="1" />
      
      <!-- Crushed hollow shell fragments -->
      <path d="M 32,68 A 6,6 0 0,1 42,62" stroke="#ffb300" stroke-width="2.5" fill="none" />
      <path d="M 58,68 A 6,6 0 0,0 68,62" stroke="#ffb300" stroke-width="2.5" fill="none" />
      
      <!-- Mint water (green pool) -->
      <path d="M 34,68 C 45,60 55,60 66,68 Z" fill="#2e7d32" opacity="0.8" />
      
      <!-- Potato masala & onions -->
      <circle cx="45" cy="68" r="3" fill="#8d6e63" />
      <circle cx="55" cy="67" r="2.5" fill="#8d6e63" />
      <ellipse cx="50" cy="65" rx="3" ry="1.5" fill="#fff" opacity="0.8" />
      
      <!-- Sweet Tamarind drizzle (red/brown) -->
      <path d="M 36,66 Q 50,56 64,66" stroke="#bf360c" stroke-width="2" fill="none" stroke-linecap="round" />
    </svg>`
  },
  {
    id: "chicken-puri-norukkal",
    name: "Chicken Puri Norukkal",
    description: "The ultimate fusion. Crushed pani puris mixed with shredded spicy chicken, diced onions, sweet dates chutney, and hot green-chili water.",
    category: "pani-puri",
    spicyLevel: 5,
    price: 70.00,
    tag: "non-veg",
    svg: `<svg viewBox="0 0 100 100" class="food-svg-graphic">
      <ellipse cx="50" cy="74" rx="38" ry="10" fill="#1b1b22" opacity="0.5" />
      <ellipse cx="50" cy="70" rx="34" ry="9" fill="#15151e" stroke="#444" stroke-width="1" />
      
      <!-- Crushed shell fragments -->
      <path d="M 30,68 Q 40,62 42,70" stroke="#ffb300" stroke-width="2.5" fill="none" />
      
      <!-- Green Chili Water Pool -->
      <path d="M 32,68 C 45,58 55,58 68,68 Z" fill="#1b5e20" opacity="0.75" />
      
      <!-- Shredded Chicken (reddish shreds) -->
      <path d="M 40,64 Q 48,60 56,65" stroke="#b71c1c" stroke-width="2" fill="none" stroke-linecap="round" />
      <path d="M 45,69 Q 52,64 60,67" stroke="#b71c1c" stroke-width="2" fill="none" stroke-linecap="round" />
      
      <!-- Diced Onions & Chili flakes -->
      <rect x="42" y="65" width="2" height="2" fill="#fff" opacity="0.9" />
      <rect x="52" y="64" width="2" height="2" fill="#fff" opacity="0.9" />
      <circle cx="48" cy="68" r="0.7" fill="#ff1744" />
      <circle cx="54" cy="69" r="0.7" fill="#ff1744" />
    </svg>`
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
        ${item.svg}
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
