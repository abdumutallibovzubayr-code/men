// =========================================================================
// 1. MAHSULOTLAR VA COMBO BAZASI
// =========================================================================
const MENU_ITEMS = [
    // --- COMBO SETLAR ---
    {
        id: 'combo-1',
        name: 'Burger Combo',
        category: 'combos',
        isCombo: true,
        badge: '-20% TEJAMKOR',
        badgeColor: 'bg-danger text-white',
        price: 44000,
        oldPrice: 55000,
        popular: true,
        bestseller: true,
        ingredients: 'Classic Burger + O‘rtacha Kartoshka Fri + Coca-Cola 0.5L + Maxsus sous',
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'combo-2',
        name: 'Hotdog Combo',
        category: 'combos',
        isCombo: true,
        badge: '-18% CHEGIRMA',
        badgeColor: 'bg-warning text-dark',
        price: 36000,
        oldPrice: 44000,
        popular: true,
        bestseller: false,
        ingredients: 'Special Hot-dog + Kartoshka Fri + Fanta yoki Cola 0.5L',
        image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'combo-3',
        name: 'Student Combo',
        category: 'combos',
        isCombo: true,
        badge: 'TALABALAR UCHUN',
        badgeColor: 'bg-dark text-warning',
        price: 32000,
        oldPrice: 40000,
        popular: true,
        bestseller: false,
        ingredients: 'Cheese Hot-dog + Kichik Fri + 3 ta Chicken Nuggets + Ichimlik 0.33L',
        image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'combo-4',
        name: 'Family Combo',
        category: 'combos',
        isCombo: true,
        badge: '-25% OILAVIY',
        badgeColor: 'bg-danger text-white',
        price: 129000,
        oldPrice: 172000,
        popular: true,
        bestseller: true,
        ingredients: '2 ta Double Burger + 2 ta Cheese Hotdog + 2 ta Katta Fri + 1.5L Coca-Cola + 4 ta sous',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'combo-5',
        name: 'Mega Combo (4-5 kishilik)',
        category: 'combos',
        isCombo: true,
        badge: 'HIT MEGA SET',
        badgeColor: 'bg-warning text-dark',
        price: 165000,
        oldPrice: 215000,
        popular: true,
        bestseller: false,
        ingredients: '3 ta Cheeseburger + 1 ta Pepperoni Pitsa + 12 ta Nuggets + 2 ta Katta Fri + 2L Cola',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
    },

    // --- GAMBURGERLAR ---
    {
        id: 'burger-1',
        name: 'Classic Burger',
        category: 'burgers',
        badge: 'YANGI',
        badgeColor: 'bg-dark text-white',
        price: 28000,
        popular: false,
        bestseller: false,
        ingredients: '100% halol mol go‘shti kotleti, aysberg salati, yangi pomidor, tuzlangan bodring, maxsus burger sousi',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'burger-2',
        name: 'Cheeseburger',
        category: 'burgers',
        badge: 'HIT',
        badgeColor: 'bg-warning text-dark',
        price: 32000,
        popular: true,
        bestseller: true,
        ingredients: 'Mol go‘shti kotleti, eritilgan Cheddar pishlog‘i, piyoz halqalari, bodring, xantal va ketchup sousi',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'burger-3',
        name: 'Double Fire Burger',
        category: 'burgers',
        badge: 'TOP SOTUV',
        badgeColor: 'bg-danger text-white',
        price: 42000,
        popular: true,
        bestseller: true,
        ingredients: '2 qavat suvli mol go‘shti kotleti, 2 qavat Cheddar pishlog‘i, qovurilgan piyoz, jalapeno va barbekyu sousi',
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80'
    },

    // --- HOT-DOGLAR ---
    {
        id: 'hotdog-1',
        name: 'Classic Hotdog',
        category: 'hotdogs',
        price: 18000,
        popular: false,
        bestseller: false,
        ingredients: 'Yumshoq bulochka, dudlangan mol go‘shtli sosiska, karam salati, ketchup va mayonez',
        image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'hotdog-2',
        name: 'Cheese Hotdog',
        category: 'hotdogs',
        badge: 'PISHLOQLI',
        badgeColor: 'bg-warning text-dark',
        price: 22000,
        popular: true,
        bestseller: false,
        ingredients: 'Grilda pishgan sosiska, iliq Cheddar pishloq sousi, qarsildoq piyoz va tuzlangan bodring',
        image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'hotdog-3',
        name: 'Special Royal Hotdog',
        category: 'hotdogs',
        badge: 'CHEF TANLOVI',
        badgeColor: 'bg-danger text-white',
        price: 27000,
        popular: true,
        bestseller: false,
        ingredients: 'Qo‘shaloq sosiska, eritilgan pishloq, pomidor bo‘laklari, fri kartoshka va maxsus achchiq-shirin sous',
        image: 'https://images.unsplash.com/photo-1627054247366-6374b929d2c5?auto=format&fit=crop&w=800&q=80'
    },

    // --- PITSALAR ---
    {
        id: 'pizza-1',
        name: 'Pepperoni Pitsa (32 sm)',
        category: 'pizzas',
        badge: 'HIT',
        badgeColor: 'bg-danger text-white',
        price: 68000,
        popular: true,
        bestseller: true,
        ingredients: 'Yupqa xamir, maxsus tomat sousi, cho‘ziluvchan Mozzarella pishlog‘i va halol dudlangan kolbasa',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'pizza-2',
        name: 'Tovuq va Qo‘ziqorinli Pitsa (32 sm)',
        category: 'pizzas',
        price: 72000,
        popular: true,
        bestseller: false,
        ingredients: 'Ziravorlangan tovuq filesi, shampinyon qo‘ziqorinlari, Mozzarella pishlog‘i va qaymoqli sous',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80'
    },

    // --- FRI VA GAZAKLAR ---
    {
        id: 'fries-1',
        name: 'Kartoshka Fri (Katta)',
        category: 'fries',
        price: 16000,
        popular: true,
        bestseller: false,
        ingredients: 'Oltin rangda qovurilgan qarsildoq kartoshka tayoqchalari va dengiz tuzi',
        image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'fries-2',
        name: 'Pishloqli Fri va Jalapeno',
        category: 'fries',
        badge: 'MAZZA',
        badgeColor: 'bg-warning text-dark',
        price: 22000,
        popular: false,
        bestseller: false,
        ingredients: 'Issiq kartoshka fri ustiga quyilgan issiq Cheddar pishloq sousi va jalapeno bo‘laklari',
        image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80'
    },

    // --- TOVUQ MAHSULOTLARI ---
    {
        id: 'chicken-1',
        name: 'Chicken Nuggets (9 dona)',
        category: 'chicken',
        price: 24000,
        popular: true,
        bestseller: false,
        ingredients: 'Yumshoq tovuq filesidan tayyorlangan qarsildoq naggetslar + sarimsoqli sous',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'chicken-2',
        name: 'Qarsildoq Chicken Strips (6 dona)',
        category: 'chicken',
        badge: 'QARSILDOQ',
        badgeColor: 'bg-danger text-white',
        price: 29000,
        popular: true,
        bestseller: false,
        ingredients: 'Maxsus panirovkada qovurilgan tovuq bo‘laklari va barbekyu sousi',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'chicken-3',
        name: 'Buffalo Tovuq Qanotchalari (8 dona)',
        category: 'chicken',
        price: 34000,
        popular: false,
        bestseller: false,
        ingredients: 'Achchiq-shirin Buffalo sousida qovurilgan suvli tovuq qanotchalari',
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80'
    },

    // --- SENDVICH VA LAVASH ---
    {
        id: 'lavash-1',
        name: 'Tandir Mol Go‘shtli Lavash',
        category: 'lavash',
        badge: 'ENG MASHHUR',
        badgeColor: 'bg-danger text-white',
        price: 34000,
        popular: true,
        bestseller: false,
        ingredients: 'Yupqa lavash xamiri, mol go‘shti donari, pomidor, bodring, fri va maxsus oq-qizil sous',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'lavash-2',
        name: 'Club Sendvich (Tovuq va Pishloq)',
        category: 'lavash',
        price: 31000,
        popular: false,
        bestseller: false,
        ingredients: 'Qovurilgan tost noni, tovuq filesi, pishloq, yangi sabzavotlar va fri kartoshka',
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80'
    },

    // --- ICHIMLIKLAR ---
    {
        id: 'drink-1',
        name: 'Coca-Cola 0.5L',
        category: 'drinks',
        price: 9000,
        popular: true,
        bestseller: false,
        ingredients: 'Muzdek gazlangan ichimlik (0.5 litr)',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'drink-2',
        name: 'Fanta Orange 0.5L',
        category: 'drinks',
        price: 9000,
        popular: false,
        bestseller: false,
        ingredients: 'Apelsin ta’mli gazlangan salqin ichimlik (0.5 litr)',
        image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'drink-3',
        name: 'Sprite 0.5L',
        category: 'drinks',
        price: 9000,
        popular: false,
        bestseller: false,
        ingredients: 'Limon va laym ta’mli tetiklashtiruvchi ichimlik (0.5 litr)',
        image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'drink-4',
        name: 'Tabiiy Olma Sharbati 1L',
        category: 'drinks',
        price: 15000,
        popular: false,
        bestseller: false,
        ingredients: '100% tabiiy meva sharbati, shakarsiz (1 litr)',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80'
    },

    // --- SHIRINLIKLAR ---
    {
        id: 'dessert-1',
        name: 'Shokoladli Donat',
        category: 'desserts',
        price: 14000,
        popular: true,
        bestseller: false,
        ingredients: 'Yumshoq ponchik, belgiya shokoladi glazuri va rangli bezaklar',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'dessert-2',
        name: 'Qulupnayli Chizkeyk',
        category: 'desserts',
        badge: 'SHIRIN',
        badgeColor: 'bg-warning text-dark',
        price: 22000,
        popular: false,
        bestseller: false,
        ingredients: 'Nafis tvorogli krem, pechenye asosi va yangi qulupnay sousi',
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80'
    }
];

// =========================================================================
// 2. HOLAT (STATE) VA LOCALSTORAGE BOSHQARUVI
// =========================================================================
const STORAGE_KEYS = {
    CART: 'firebite_cart_v1',
    WISHLIST: 'firebite_wishlist_v1',
    ORDERS: 'firebite_orders_v1',
    PROMO: 'firebite_promo_v1'
};

let cart = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
let wishlist = JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST)) || [];
let savedOrders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [];
let activePromo = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROMO)) || null;

// Kartochkalardagi vaqtinchalik son tanlagichlar
const cardQuantities = {};
MENU_ITEMS.forEach(item => cardQuantities[item.id] = 1);

let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'default';

const DELIVERY_FEE_STANDARD = 15000;
const FREE_DELIVERY_THRESHOLD = 100000;

// =========================================================================
// 3. YORDAMCHI FUNKSIYALAR
// =========================================================================
function formatPrice(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " so'm";
}

function saveState() {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(savedOrders));
    localStorage.setItem(STORAGE_KEYS.PROMO, JSON.stringify(activePromo));
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const bgClass = type === 'success' ? 'bg-dark text-white border-warning' : 'bg-danger text-white';
    const icon = type === 'success' ? '<i class="bi bi-check-circle-fill text-warning me-2"></i>' : '<i class="bi bi-exclamation-triangle-fill me-2"></i>';

    const toastEl = document.createElement('div');
    toastEl.className = `toast align-items-center ${bgClass} border mb-2 show`;
    toastEl.setAttribute('role', 'alert');
    toastEl.innerHTML = `
        <div class="d-flex">
            <div class="toast-body fw-semibold">${icon}${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    container.appendChild(toastEl);
    setTimeout(() => toastEl.remove(), 3000);
}

// =========================================================================
// 4. MAHSULOT VA COMBO KARTOCHKALARINI CHIZISH (RENDER)
// =========================================================================
function createProductCardHTML(item) {
    const isLiked = wishlist.includes(item.id);
    const qty = cardQuantities[item.id] || 1;

    return `
        <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="product-card ${item.isCombo ? 'combo-card' : ''}">
                <div class="product-img-box">
                    ${item.badge ? `<span class="product-badge ${item.badgeColor || 'bg-danger text-white'}">${item.badge}</span>` : ''}
                    <button class="wishlist-toggle-btn ${isLiked ? 'active' : ''}" onclick="toggleWishlist('${item.id}')" title="Sevimlilarga qo'shish">
                        <i class="bi ${isLiked ? 'bi-heart-fill' : 'bi-heart'}"></i>
                    </button>
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="p-3 d-flex flex-column flex-grow-1">
                    <h5 class="fw-bold mb-1">${item.name}</h5>
                    <p class="text-muted small flex-grow-1 mb-3">${item.ingredients}</p>
                    
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <div>
                            ${item.oldPrice ? `<div class="text-muted text-decoration-line-through x-small">${formatPrice(item.oldPrice)}</div>` : ''}
                            <div class="fw-black fs-5 text-danger">${formatPrice(item.price)}</div>
                        </div>
                        <div class="qty-selector">
                            <button type="button" onclick="changeCardQty('${item.id}', -1)">-</button>
                            <span id="card-qty-${item.id}">${qty}</span>
                            <button type="button" onclick="changeCardQty('${item.id}', 1)">+</button>
                        </div>
                    </div>

                    <button class="btn btn-danger w-100 rounded-pill fw-bold py-2" onclick="addToCart('${item.id}')">
                        <i class="bi bi-bag-plus-fill me-1"></i> Savatga qo'shish
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderBestsellers() {
    const container = document.getElementById('bestsellersContainer');
    const bestsellers = MENU_ITEMS.filter(item => item.bestseller).slice(0, 4);
    container.innerHTML = bestsellers.map(createProductCardHTML).join('');
}

function renderCombos() {
    const container = document.getElementById('combosContainer');
    const combos = MENU_ITEMS.filter(item => item.isCombo);
    container.innerHTML = combos.map(item => {
        // Combo kartochkalari biroz kengroq (col-lg-4) ko'rinishi uchun
        return createProductCardHTML(item).replace('col-xl-3', 'col-xl-4');
    }).join('');
}

function renderMenu() {
    const container = document.getElementById('productsContainer');
    const countLabel = document.getElementById('productsFoundCount');

    // Faqat oddiy menyu mahsulotlari yoki qidiruv bo'lsa barchasi
    let filtered = MENU_ITEMS.filter(item => !item.isCombo);

    if (currentCategory !== 'all') {
        filtered = filtered.filter(item => item.category === currentCategory);
    }

    if (currentSearch.trim() !== '') {
        const q = currentSearch.toLowerCase().trim();
        filtered = MENU_ITEMS.filter(item =>
            item.name.toLowerCase().includes(q) ||
            item.ingredients.toLowerCase().includes(q)
        );
    }

    // Saralash
    if (currentSort === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'popular') {
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }

    countLabel.textContent = filtered.length;

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-search fs-1 text-muted d-block mb-2"></i>
                <h5 class="fw-bold">Hech narsa topilmadi</h5>
                <p class="text-muted">Boshqa kalit so'z bilan qidirib ko'ring yoki filterni tozalang.</p>
                <button class="btn btn-outline-danger rounded-pill px-4" onclick="resetFilters()">Barcha menyuni ko'rsatish</button>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(createProductCardHTML).join('');
}

function changeCardQty(id, delta) {
    const newQty = Math.max(1, Math.min(20, (cardQuantities[id] || 1) + delta));
    cardQuantities[id] = newQty;
    document.querySelectorAll(`#card-qty-${id}`).forEach(el => {
        el.textContent = newQty;
    });
}

function resetFilters() {
    currentCategory = 'all';
    currentSearch = '';
    currentSort = 'default';
    document.getElementById('searchInput').value = '';
    document.getElementById('clearSearchBtn').classList.add('d-none');
    document.getElementById('sortSelect').value = 'default';
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'all');
    });
    renderMenu();
}

function filterByCategoryFromFooter(category) {
    currentCategory = category;
    currentSearch = '';
    document.getElementById('searchInput').value = '';
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    renderMenu();
}

// =========================================================================
// 5. SAVAT (SHOPPING CART) FUNKSIYALARI
// =========================================================================
function addToCart(productId) {
    const product = MENU_ITEMS.find(item => item.id === productId);
    if (!product) return;

    const qtyToAdd = cardQuantities[productId] || 1;
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.qty += qtyToAdd;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: qtyToAdd
        });
    }

    // Kartochka sonini 1 ga qaytarish
    cardQuantities[productId] = 1;
    document.querySelectorAll(`#card-qty-${productId}`).forEach(el => el.textContent = 1);

    saveState();
    updateCartUI();
    showToast(`"${product.name}" (${qtyToAdd} ta) savatga qo'shildi!`);
}

function updateCartItemQty(productId, delta) {
    const index = cart.findIndex(item => item.id === productId);
    if (index === -1) return;

    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    saveState();
    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveState();
    updateCartUI();
    showToast("Mahsulot savatdan o'chirildi", 'danger');
}

function calculateCartTotals(deliveryType = 'delivery') {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    let discount = 0;
    if (activePromo === 'FIRE2026' && subtotal > 0) {
        discount = Math.round(subtotal * 0.10); // 10% chegirma
    }

    const afterDiscount = subtotal - discount;
    let deliveryFee = 0;

    if (deliveryType === 'delivery' && subtotal > 0) {
        deliveryFee = afterDiscount >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE_STANDARD;
    }

    const grandTotal = afterDiscount + deliveryFee;

    return { totalQty, subtotal, discount, deliveryFee, grandTotal };
}

function updateCartUI() {
    const container = document.getElementById('cartItemsContainer');
    const footer = document.getElementById('cartFooterSection');
    const countBadge = document.getElementById('cartCount');

    const { totalQty, subtotal, discount, deliveryFee, grandTotal } = calculateCartTotals('delivery');
    countBadge.textContent = totalQty;

    if (cart.length === 0) {
        footer.classList.add('d-none');
        container.innerHTML = `
            <div class="text-center py-5 my-4">
                <i class="bi bi-bag-x display-1 text-muted opacity-50"></i>
                <h5 class="fw-bold mt-3">Savatingiz hozircha bo'sh</h5>
                <p class="text-muted small">Mazali burger yoki combo tanlab buyurtma bering!</p>
                <button class="btn btn-danger rounded-pill px-4 mt-2" data-bs-dismiss="offcanvas">Menyuga o'tish</button>
            </div>
        `;
        return;
    }

    footer.classList.remove('d-none');
    container.innerHTML = cart.map(item => `
        <div class="d-flex align-items-center gap-3 p-2 mb-2 bg-light rounded-3 border">
            <img src="${item.image}" alt="${item.name}" class="rounded-2" style="width: 64px; height: 64px; object-fit: cover;">
            <div class="flex-grow-1">
                <h6 class="fw-bold mb-0 small">${item.name}</h6>
                <div class="text-danger fw-bold small mb-1">${formatPrice(item.price * item.qty)}</div>
                <div class="qty-selector">
                    <button type="button" onclick="updateCartItemQty('${item.id}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button type="button" onclick="updateCartItemQty('${item.id}', 1)">+</button>
                </div>
            </div>
            <button class="btn btn-sm text-muted hover-danger" onclick="removeFromCart('${item.id}')" title="O'chirish">
                <i class="bi bi-trash3-fill"></i>
            </button>
        </div>
    `).join('');

    document.getElementById('cartTotalQty').textContent = totalQty;
    document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);

    const discountRow = document.getElementById('discountRow');
    if (discount > 0) {
        discountRow.style.removeProperty('display');
        document.getElementById('cartDiscount').textContent = '-' + formatPrice(discount);
    } else {
        discountRow.style.setProperty('display', 'none', 'important');
    }

    document.getElementById('cartDeliveryFee').innerHTML = deliveryFee === 0
        ? '<span class="text-success fw-bold">Bepul (0 so\'m)</span>'
        : formatPrice(deliveryFee);

    document.getElementById('cartGrandTotal').textContent = formatPrice(grandTotal);
}

// =========================================================================
// 6. SEVIMLILAR (WISHLIST) FUNKSIYALARI
// =========================================================================
function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    if (idx === -1) {
        wishlist.push(productId);
        showToast("Sevimlilar ro'yxatiga qo'shildi ❤️");
    } else {
        wishlist.splice(idx, 1);
        showToast("Sevimlilardan olib tashlandi", 'danger');
    }

    saveState();
    updateWishlistUI();
    renderBestsellers();
    renderCombos();
    renderMenu();
}

function updateWishlistUI() {
    const countEl = document.getElementById('wishlistCount');
    const container = document.getElementById('wishlistContainer');
    countEl.textContent = wishlist.length;

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-heart display-1 text-muted opacity-50"></i>
                <h6 class="fw-bold mt-3">Sevimlilar ro'yxati bo'sh</h6>
                <p class="text-muted small">Yoqtirgan taomlaringizdagi yurakcha belgisini bosing.</p>
            </div>
        `;
        return;
    }

    const items = MENU_ITEMS.filter(item => wishlist.includes(item.id));
    container.innerHTML = items.map(item => `
        <div class="d-flex align-items-center gap-3 p-2 mb-2 border rounded-3">
            <img src="${item.image}" alt="${item.name}" class="rounded-2" style="width: 60px; height: 60px; object-fit: cover;">
            <div class="flex-grow-1">
                <h6 class="fw-bold mb-0 small">${item.name}</h6>
                <div class="text-danger fw-bold small">${formatPrice(item.price)}</div>
            </div>
            <button class="btn btn-sm btn-danger rounded-pill" onclick="addToCart('${item.id}')" title="Savatga">
                <i class="bi bi-bag-plus"></i>
            </button>
            <button class="btn btn-sm btn-outline-secondary rounded-circle" onclick="toggleWishlist('${item.id}')" title="O'chirish">
                <i class="bi bi-x"></i>
            </button>
        </div>
    `).join('');
}

// =========================================================================
// 7. CHECKOUT VA BACKEND/FIREBASE INTEGRATSIYA STRUKTURASI
// =========================================================================
function updateCheckoutSummary() {
    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    const { totalQty, subtotal, discount, deliveryFee, grandTotal } = calculateCartTotals(deliveryType);

    const itemsContainer = document.getElementById('checkoutSummaryItems');
    itemsContainer.innerHTML = cart.map(item => `
        <div class="d-flex justify-content-between align-items-center small py-2 border-bottom">
            <div>
                <span class="fw-bold">${item.name}</span>
                <span class="text-muted"> x ${item.qty}</span>
            </div>
            <span class="fw-semibold">${formatPrice(item.price * item.qty)}</span>
        </div>
    `).join('');

    document.getElementById('checkoutTotalItems').textContent = `${totalQty} ta`;
    document.getElementById('checkoutSubtotal').textContent = formatPrice(subtotal);

    const discountRow = document.getElementById('checkoutDiscountRow');
    if (discount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('checkoutDiscount').textContent = '-' + formatPrice(discount);
    } else {
        discountRow.style.display = 'none';
    }

    document.getElementById('checkoutDeliveryFee').innerHTML = deliveryFee === 0
        ? '<span class="text-success fw-bold">Bepul (0 so\'m)</span>'
        : formatPrice(deliveryFee);

    document.getElementById('checkoutGrandTotal').textContent = formatPrice(grandTotal);
}

/**
 * Backend yoki Firebase Firestore / Realtime Database ulash uchun tayyor servis moduli.
 * Hozircha demo rejimda LocalStorage ga saqlaydi.
 */
const OrderService = {
    async submitOrder(orderPayload) {
        // KELAJAKDA FIREBASE YOKI REST API UCHUN NAMUNA:
        // return await fetch('https://api.firebite.uz/v1/orders', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(orderPayload)
        // });
        // Yoki Firebase:
        // return await addDoc(collection(db, "orders"), orderPayload);

        return new Promise((resolve) => {
            setTimeout(() => {
                savedOrders.unshift(orderPayload);
                saveState();
                resolve({ ok: true, mode: 'demo_localstorage', order: orderPayload });
            }, 400);
        });
    }
};

function renderOrdersHistory() {
    const badge = document.getElementById('ordersCountBadge');
    const container = document.getElementById('ordersHistoryContainer');
    badge.textContent = savedOrders.length;

    if (savedOrders.length === 0) {
        container.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-receipt display-1 text-muted opacity-50"></i>
                <h6 class="fw-bold mt-3">Hali saqlangan buyurtmalar yo'q</h6>
                <p class="text-muted small">Buyurtma berganingizdan so'ng barcha ma'lumotlar shu yerda ko'rinadi.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = savedOrders.map(order => `
        <div class="border rounded-4 p-3 mb-3 bg-light">
            <div class="d-flex flex-wrap justify-content-between align-items-center border-bottom pb-2 mb-2">
                <div>
                    <span class="badge bg-dark text-warning me-2">${order.orderId}</span>
                    <strong class="small">${order.customer.fullName}</strong>
                    <span class="text-muted small ms-2">(${order.createdAt})</span>
                </div>
                <span class="badge bg-warning text-dark">Saqlangan (Demo)</span>
            </div>
            <div class="row small g-2 mb-2">
                <div class="col-md-6"><strong>Telefon:</strong> ${order.customer.phone}</div>
                <div class="col-md-6"><strong>Turi:</strong> ${order.deliveryType === 'delivery' ? 'Yetkazib berish' : 'Olib ketish'}</div>
                <div class="col-12"><strong>Manzil:</strong> ${order.addressSummary}</div>
                ${order.note ? `<div class="col-12"><strong>Izoh:</strong> ${order.note}</div>` : ''}
            </div>
            <div class="bg-white p-2 rounded-3 border small mb-2">
                ${order.items.map(i => `<div class="d-flex justify-content-between"><span>${i.name} x${i.qty}</span><span>${formatPrice(i.price * i.qty)}</span></div>`).join('')}
            </div>
            <div class="d-flex justify-content-between fw-bold">
                <span>Jami to'lov (yetkazish: ${formatPrice(order.pricing.deliveryFee)}):</span>
                <span class="text-danger">${formatPrice(order.pricing.grandTotal)}</span>
            </div>
        </div>
    `).join('');
}

// =========================================================================
// 8. EVENT LISTENERLAR VA SAHIFA YUKLANISHI
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    renderBestsellers();
    renderCombos();
    renderMenu();
    updateCartUI();
    updateWishlistUI();
    renderOrdersHistory();

    // Kategoriya filter tugmalari
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            currentSearch = '';
            document.getElementById('searchInput').value = '';
            document.getElementById('clearSearchBtn').classList.add('d-none');
            renderMenu();
        });
    });

    // Qidiruv (Search)
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        clearSearchBtn.classList.toggle('d-none', currentSearch.length === 0);
        renderMenu();
    });

    clearSearchBtn.addEventListener('click', () => {
        currentSearch = '';
        searchInput.value = '';
        clearSearchBtn.classList.add('d-none');
        renderMenu();
    });

    // Narx va mashhurlik bo'yicha saralash
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderMenu();
    });

    // Promo kod nusxalash tugmasi
    document.querySelectorAll('.copy-promo-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.dataset.code;
            navigator.clipboard?.writeText(code);
            activePromo = code;
            saveState();
            updateCartUI();
            showToast(`Promo kod "${code}" nusxalandi va savatga qo'llandi!`);
        });
    });

    // Savatda promo kod qo'llash
    document.getElementById('applyPromoBtn').addEventListener('click', () => {
        const input = document.getElementById('promoCodeInput').value.trim().toUpperCase();
        const msgEl = document.getElementById('promoMessage');
        if (input === 'FIRE2026') {
            activePromo = 'FIRE2026';
            saveState();
            updateCartUI();
            msgEl.innerHTML = '<span class="text-success fw-bold"><i class="bi bi-check-circle me-1"></i>10% chegirma qo\'llandi!</span>';
        } else {
            msgEl.innerHTML = '<span class="text-danger">Noto\'g\'ri promo kod. Sinab ko\'ring: FIRE2026</span>';
        }
    });

    // Savatni tozalash
    document.getElementById('clearCartBtn').addEventListener('click', () => {
        cart = [];
        activePromo = null;
        saveState();
        updateCartUI();
        showToast("Savat tozalandi", 'danger');
    });

    // Checkout modalni ochish
    document.getElementById('proceedCheckoutBtn').addEventListener('click', () => {
        if (cart.length === 0) return;
        const cartOffcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas'));
        cartOffcanvas?.hide();
        updateCheckoutSummary();
        const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
        checkoutModal.show();
    });

    // Yetkazib berish yoki Olib ketish o'zgarganda
    document.querySelectorAll('input[name="deliveryType"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const isDelivery = e.target.value === 'delivery';
            const wrapper = document.getElementById('addressFieldsWrapper');
            wrapper.style.display = isDelivery ? 'block' : 'none';

            // Olib ketish tanlansa manzil maydonlaridan required atributini olib tashlash
            wrapper.querySelectorAll('input, select').forEach(field => {
                if (isDelivery) {
                    field.setAttribute('required', 'required');
                } else {
                    field.removeAttribute('required');
                }
            });

            updateCheckoutSummary();
        });
    });

    // Buyurtma formasini tasdiqlash
    document.getElementById('checkoutForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = e.target;

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            showToast("Iltimos, barcha majburiy maydonlarni to'ldiring!", 'danger');
            return;
        }

        const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
        const pricing = calculateCartTotals(deliveryType);

        const region = document.getElementById('custRegion').value;
        const district = document.getElementById('custDistrict').value.trim();
        const mahalla = document.getElementById('custMahalla').value.trim();
        const street = document.getElementById('custStreet').value.trim();
        const house = document.getElementById('custHouse').value.trim();
        const landmark = document.getElementById('custLandmark').value.trim();

        const addressSummary = deliveryType === 'delivery'
            ? `${region}, ${district}, ${mahalla} MFY, ${street}, ${house} (Mo'ljal: ${landmark})`
            : 'Filialdan olib ketish (Chilonzor tumani, Bunyodkor shoh ko\'chasi, 15-uy)';

        const orderPayload = {
            orderId: '#FB-' + Math.floor(1000 + Math.random() * 9000),
            createdAt: new Date().toLocaleString('uz-UZ'),
            customer: {
                fullName: document.getElementById('custName').value.trim(),
                phone: document.getElementById('custPhone').value.trim()
            },
            deliveryType,
            address: deliveryType === 'delivery' ? {
                region, district, mahalla, street, house, landmark
            } : null,
            addressSummary,
            note: document.getElementById('custNote').value.trim(),
            items: [...cart],
            pricing
        };

        const confirmBtn = document.getElementById('confirmOrderBtn');
        confirmBtn.disabled = true;
        confirmBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Saqlanmoqda...';

        await OrderService.submitOrder(orderPayload);

        confirmBtn.disabled = false;
        confirmBtn.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Buyurtmani tasdiqlash';

        // Checkout modalni yopish
        bootstrap.Modal.getInstance(document.getElementById('checkoutModal'))?.hide();

        // Success modal ma'lumotlarini to'ldirish
        document.getElementById('successCustomerName').textContent = orderPayload.customer.fullName;
        document.getElementById('successOrderId').textContent = orderPayload.orderId;
        document.getElementById('successDeliveryType').textContent = deliveryType === 'delivery' ? 'Kuryer orqali yetkazib berish' : 'Olib ketish';
        document.getElementById('successAddress').textContent = orderPayload.addressSummary;
        document.getElementById('successPhone').textContent = orderPayload.customer.phone;
        document.getElementById('successTotal').textContent = formatPrice(orderPayload.pricing.grandTotal);

        const successModal = new bootstrap.Modal(document.getElementById('orderSuccessModal'));
        successModal.show();

        // Savat va formani tozalash
        cart = [];
        activePromo = null;
        form.reset();
        form.classList.remove('was-validated');
        document.getElementById('addressFieldsWrapper').style.display = 'block';
        saveState();
        updateCartUI();
        renderOrdersHistory();
    });
});