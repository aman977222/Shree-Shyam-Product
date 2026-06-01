// Shreeshyamproducts - Cloud Database Layer using Firebase Firestore

// Apply saved theme instantly to prevent screen flashing
(function() {
    const savedTheme = localStorage.getItem("mystore_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
})();


// Firebase Setup Config
const firebaseConfig = {
  apiKey: "AIzaSyBOJ9Sh_ucSy813Hfical2UZLxu7D_Rn2w",
  authDomain: "shreeshyam-2d08d.firebaseapp.com",
  projectId: "shreeshyam-2d08d",
  storageBucket: "shreeshyam-2d08d.firebasestorage.app",
  messagingSenderId: "1027018932139",
  appId: "1:1027018932139:web:8dce9bc926d9b4a1499cee",
  measurementId: "G-8XFL0XNTM8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Seed Data definition (used for initial Firestore setups)
const initialCategories = [
    { categories_id: 1, categories_title: "Wooden Crafts" },
    { categories_id: 2, categories_title: "Clay & Pottery" },
    { categories_id: 3, categories_title: "Handwoven Textiles" },
    { categories_id: 4, categories_title: "Metal & Brass Art" }
];

const initialBrands = [
    { Brands_id: 1, Brands_title: "Heritage Crafts" },
    { Brands_id: 2, Brands_title: "Rajasthan Artisans" },
    { Brands_id: 3, Brands_title: "Clay Magic" },
    { Brands_id: 4, Brands_title: "WoodArt India" },
    { Brands_id: 5, Brands_title: "Loom & Weave" }
];

const initialProducts = [
    {
        product_id: 1,
        product_title: "Wooden Handicraft Elephant",
        product_description: "Hand-carved Indian elephant made of premium rosewood with intricate design work.",
        product_keywords: "wooden, elephant, handcraft, rosewood, carving",
        category_id: 1,
        brand_id: 4,
        product_Image1: "wooden_elephant.png",
        product_Image2: "wooden_elephant.png",
        product_Image3: "wooden_elephant.png",
        product_price: 1500
    },
    {
        product_id: 2,
        product_title: "Jaipur Blue Pottery Vase",
        product_description: "Traditional Jaipur blue pottery flower vase with classic floral motifs, hand-glazed and fired.",
        product_keywords: "blue pottery, vase, clay, ceramic, jaipur",
        category_id: 2,
        brand_id: 3,
        product_Image1: "blue_pottery_vase.png",
        product_Image2: "blue_pottery_vase.png",
        product_Image3: "blue_pottery_vase.png",
        product_price: 1200
    },
    {
        product_id: 3,
        product_title: "Handwoven Pashmina Shawl",
        product_description: "Authentic Kashmiri Pashmina shawl, handwoven from fine Cashmere wool. Warm and elegant.",
        product_keywords: "pashmina, shawl, handwoven, kashmiri, wool",
        category_id: 3,
        brand_id: 5,
        product_Image1: "pashmina_shawl.png",
        product_Image2: "pashmina_shawl.png",
        product_Image3: "pashmina_shawl.png",
        product_price: 8500
    },
    {
        product_id: 4,
        product_title: "Antique Brass Ganesha Statue",
        product_description: "Antique finished handcrafted brass Lord Ganesha idol, perfect for home decor and gifting.",
        product_keywords: "brass, ganesha, statue, idol, metal",
        category_id: 4,
        brand_id: 1,
        product_Image1: "brass_ganesha.png",
        product_Image2: "brass_ganesha.png",
        product_Image3: "brass_ganesha.png",
        product_price: 3500
    },
    {
        product_id: 5,
        product_title: "Carved Wooden Wall Panel",
        product_description: "Traditional floral carved wooden wall hanging panel made of seasoned mango wood.",
        product_keywords: "wooden, wall panel, carving, mango wood, decor",
        category_id: 1,
        brand_id: 4,
        product_Image1: "wooden_wall_panel.png",
        product_Image2: "wooden_wall_panel.png",
        product_Image3: "wooden_wall_panel.png",
        product_price: 4500
    },
    {
        product_id: 6,
        product_title: "Terracotta Clay Diya Set",
        product_description: "Hand-painted decorative terracotta clay diyas for festivals and daily home decor. Set of 6.",
        product_keywords: "terracotta, clay, diya, festival, decor",
        category_id: 2,
        brand_id: 2,
        product_Image1: "clay_diyas.png",
        product_Image2: "clay_diyas.png",
        product_Image3: "clay_diyas.png",
        product_price: 350
    },
    {
        product_id: 7,
        product_title: "Eco-Friendly Jute Handbag",
        product_description: "Eco-friendly hand-stitched jute handbag with traditional embroidery and sturdy handles.",
        product_keywords: "jute, bag, handbag, ecofriendly, handstitched",
        category_id: 3,
        brand_id: 5,
        product_Image1: "jute_handbag.png",
        product_Image2: "jute_handbag.png",
        product_Image3: "jute_handbag.png",
        product_price: 800
    },
    {
        product_id: 8,
        product_title: "Hand Block Printed Bedsheet",
        product_description: "Pure cotton double bedsheet hand-printed using traditional wooden blocks by local artisans.",
        product_keywords: "block print, bedshet, cotton, jaipur, handprint",
        category_id: 3,
        brand_id: 2,
        product_Image1: "cotton_bedsheet.png",
        product_Image2: "cotton_bedsheet.png",
        product_Image3: "cotton_bedsheet.png",
        product_price: 1800
    },
    {
        product_id: 9,
        product_title: "Dhokra Metal Art Figurine",
        product_description: "Tribal Dhokra metal figurine, handcrafted using ancient lost-wax casting technique.",
        product_keywords: "dhokra, metal, figurine, tribal, handicraft",
        category_id: 4,
        brand_id: 1,
        product_Image1: "dhokra_art.png",
        product_Image2: "dhokra_art.png",
        product_Image3: "dhokra_art.png",
        product_price: 2200
    },
    {
        product_id: 10,
        product_title: "Marble Inlay Coasters Set",
        product_description: "Set of 4 marble coasters handcrafted with colorful semi-precious stone inlay work.",
        product_keywords: "marble, coasters, inlay, handicraft, stone",
        category_id: 2,
        brand_id: 2,
        product_Image1: "marble_coasters.png",
        product_Image2: "marble_coasters.png",
        product_Image3: "marble_coasters.png",
        product_price: 950
    }
];

// // Memory Caches loaded from Firestore / Storage Cache
let productsCache = [];
let categoriesCache = [];
let brandsCache = [];
let usersCache = [];
let ordersCache = [];
let messagesCache = [];

// Load caches from localStorage immediately for 0ms initial page responses
function loadInitialCacheFromStorage() {
    try {
        productsCache = JSON.parse(localStorage.getItem("mystore_products_cache")) || [];
        categoriesCache = JSON.parse(localStorage.getItem("mystore_categories_cache")) || [];
        brandsCache = JSON.parse(localStorage.getItem("mystore_brands_cache")) || [];
        usersCache = JSON.parse(localStorage.getItem("mystore_users_cache")) || [];
        ordersCache = JSON.parse(localStorage.getItem("mystore_orders_cache")) || [];
        messagesCache = JSON.parse(localStorage.getItem("mystore_messages_cache")) || [];
    } catch (e) {
        console.warn("Could not parse LocalStorage cache", e);
    }
}
loadInitialCacheFromStorage();

// Clear LocalStorage cache when a write/mutation operation is performed
function clearDatabaseCache() {
    localStorage.removeItem("mystore_products_cache");
    localStorage.removeItem("mystore_categories_cache");
    localStorage.removeItem("mystore_brands_cache");
    localStorage.removeItem("mystore_users_cache");
    localStorage.removeItem("mystore_orders_cache");
    localStorage.removeItem("mystore_messages_cache");

    // Clear in-memory cache to force dbInit to await network data
    productsCache = [];
    categoriesCache = [];
    brandsCache = [];
    usersCache = [];
    ordersCache = [];
    messagesCache = [];
}

// Initialize database by downloading collections, seeding if empty
async function dbInit() {
    // If the cache is empty, we must wait for the network request to finish
    const mustWait = (productsCache.length === 0 || categoriesCache.length === 0 || brandsCache.length === 0);

    const fetchPromise = (async () => {
        try {
            // Fetch all collections in parallel to minimize round-trip latencies
            const [catSnapshot, brandSnapshot, prodSnapshot, userSnapshot, orderSnapshot, msgSnapshot] = await Promise.all([
                db.collection("categories").get(),
                db.collection("brands").get(),
                db.collection("products").get(),
                db.collection("users").get(),
                db.collection("orders").get(),
                db.collection("messages").get()
            ]);

            const seedPromises = [];

            // 1. Load Categories (Seed in parallel if empty)
            if (catSnapshot.empty) {
                initialCategories.forEach(c => {
                    seedPromises.push(db.collection("categories").doc(c.categories_id.toString()).set(c));
                });
                categoriesCache = initialCategories;
            } else {
                categoriesCache = catSnapshot.docs.map(doc => doc.data());
            }

            // 2. Load Brands (Seed in parallel if empty)
            if (brandSnapshot.empty) {
                initialBrands.forEach(b => {
                    seedPromises.push(db.collection("brands").doc(b.Brands_id.toString()).set(b));
                });
                brandsCache = initialBrands;
            } else {
                brandsCache = brandSnapshot.docs.map(doc => doc.data());
            }

            // 3. Load Products (Seed in parallel if empty)
            if (prodSnapshot.empty) {
                initialProducts.forEach(p => {
                    seedPromises.push(db.collection("products").doc(p.product_id.toString()).set(p));
                });
                productsCache = initialProducts;
            } else {
                productsCache = prodSnapshot.docs.map(doc => doc.data());
            }

            // 5. Load Users (Seed default superadmin if missing)
            usersCache = userSnapshot.docs.map(doc => doc.data());
            const hasSuperAdmin = usersCache.some(u => u.role === 'superadmin');

            const defaultUsers = [];
            if (!hasSuperAdmin) {
                const hashedPassword = await hashPassword("superadminpassword");
                defaultUsers.push({
                    username: "superadmin",
                    user_email: "superadmin@shreeshyam.com",
                    user_password: hashedPassword,
                    user_image: "admin.png",
                    user_address: "Head Office, Delhi",
                    user_mobile: "9999999999",
                    role: "superadmin"
                });
            }

            if (defaultUsers.length > 0) {
                defaultUsers.forEach(u => {
                    seedPromises.push(db.collection("users").doc(u.username).set(u));
                });
                usersCache = [...usersCache, ...defaultUsers];
            }

            // 5. Load Orders
            ordersCache = orderSnapshot.docs.map(doc => doc.data());

            // 6. Load Messages
            messagesCache = msgSnapshot.docs.map(doc => doc.data());

            // Save refreshed data back to LocalStorage cache
            localStorage.setItem("mystore_products_cache", JSON.stringify(productsCache));
            localStorage.setItem("mystore_categories_cache", JSON.stringify(categoriesCache));
            localStorage.setItem("mystore_brands_cache", JSON.stringify(brandsCache));
            localStorage.setItem("mystore_users_cache", JSON.stringify(usersCache));
            localStorage.setItem("mystore_orders_cache", JSON.stringify(ordersCache));
            localStorage.setItem("mystore_messages_cache", JSON.stringify(messagesCache));

            // Await all parallel seeds if any were triggered
            if (seedPromises.length > 0) {
                await Promise.all(seedPromises);
            }
        } catch (err) {
            console.error("Failed to fetch cloud database updates:", err);
        }
    })();

    if (mustWait) {
        await fetchPromise;
    } else {
        // Run network fetch in background to revalidate (refresh cache silently)
        fetchPromise.then(() => {
            // Dispatch event in case page wants to handle instant updates
            window.dispatchEvent(new CustomEvent("db-updated"));
        });
    }
}

// Database Synchronous Getters (from preloaded Firestore cache)
function getProducts() {
    return productsCache;
}

function getCategories() {
    return categoriesCache;
}

function getBrands() {
    return brandsCache;
}

function getUsers() {
    return usersCache;
}

function getOrders() {
    return ordersCache;
}

function getMessages() {
    return messagesCache;
}

// User Authentication (against Cache)
function getLoggedInUser() {
    return JSON.parse(sessionStorage.getItem("mystore_logged_in_user"));
}

function compressAndResizeImage(file, maxWidth = 150, maxHeight = 150) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = event => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > maxWidth) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width = Math.round((width * maxHeight) / height);
                        height = maxHeight;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                resolve(canvas.toDataURL('image/jpeg', 0.7));
            };
            img.onerror = err => reject(err);
        };
        reader.onerror = err => reject(err);
    });
}

async function hashPassword(password) {
    const msgBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function loginUser(username, password) {
    const matched = usersCache.find(u => u.username === username);
    if (!matched) {
        return { success: false, message: "Invalid username or password!" };
    }

    const hashedPassword = await hashPassword(password);

    // Check if matches hash
    if (matched.user_password === hashedPassword) {
        sessionStorage.setItem("mystore_logged_in_user", JSON.stringify(matched));
        return { success: true, user: matched };
    }

    // Fallback: Check if matches plain text (for existing plain-text passwords)
    if (matched.user_password === password) {
        // Upgrade to hashed password in Firestore
        matched.user_password = hashedPassword;
        await db.collection("users").doc(username).update({ user_password: hashedPassword });
        clearDatabaseCache();

        sessionStorage.setItem("mystore_logged_in_user", JSON.stringify(matched));
        return { success: true, user: matched };
    }

    return { success: false, message: "Invalid username or password!" };
}

function validatePasswordStrength(password) {
    if (password.length < 8) {
        return { isValid: false, message: "Password must be at least 8 characters long!" };
    }
    if (!/^[a-zA-Z]/.test(password)) {
        return { isValid: false, message: "Password must start with a letter!" };
    }
    if (!/[0-9]$/.test(password)) {
        return { isValid: false, message: "Password must end with a number!" };
    }
    const middlePart = password.substring(1, password.length - 1);
    if (!middlePart.includes('@')) {
        return { isValid: false, message: "Password must contain '@' in the middle (not as start or end)!" };
    }
    return { isValid: true };
}

async function registerUser(userData) {
    clearDatabaseCache();
    const userDoc = await db.collection("users").doc(userData.username).get();
    if (userDoc.exists) {
        return { success: false, message: "Username already registered!" };
    }
    userData.role = "user";
    userData.user_password = await hashPassword(userData.user_password);
    await db.collection("users").doc(userData.username).set(userData);
    return { success: true };
}

function logoutUser() {
    sessionStorage.removeItem("mystore_logged_in_user");
}

// Local Cart Management
function getCart() {
    return JSON.parse(localStorage.getItem("mystore_cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("mystore_cart", JSON.stringify(cart));
}

function addToCart(productId) {
    const cart = getCart();
    const existing = cart.find(item => item.product_id === parseInt(productId));
    if (existing) {
        alert("This item is already present in cart");
    } else {
        cart.push({ product_id: parseInt(productId), quanthy: 1 });
        saveCart(cart);
        alert("Item is added to cart");
    }
}

function removeCartItem(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.product_id !== parseInt(productId));
    saveCart(cart);
}

function updateCartQuantity(productId, qty) {
    const cart = getCart();
    const item = cart.find(item => item.product_id === parseInt(productId));
    if (item) {
        item.quanthy = parseInt(qty) > 0 ? parseInt(qty) : 1;
        saveCart(cart);
    }
}

function getCartCount() {
    return getCart().length;
}

function getCartTotal() {
    const cart = getCart();
    const products = getProducts();
    let total = 0;
    cart.forEach(item => {
        const prod = products.find(p => p.product_id === item.product_id);
        if (prod) {
            total += prod.product_price * item.quanthy;
        }
    });
    return total;
}

// Orders and Messages Mutations
async function createOrder(orderData) {
    clearDatabaseCache();
    orderData.order_id = Date.now();
    orderData.order_date = new Date().toLocaleDateString();
    orderData.invoice_number = Math.floor(Math.random() * 900000) + 100000;
    orderData.order_status = "pending";
    
    await db.collection("orders").doc(orderData.order_id.toString()).set(orderData);
    saveCart([]);
    return orderData;
}

async function addMessage(msgData) {
    clearDatabaseCache();
    msgData.id = Date.now();
    msgData.date = new Date().toLocaleDateString();
    await db.collection("messages").doc(msgData.id.toString()).set(msgData);
}

// Admin panel Cloud operations
async function cloudInsertProduct(p) {
    clearDatabaseCache();
    await db.collection("products").doc(p.product_id.toString()).set(p);
}

async function cloudUpdateProduct(p) {
    clearDatabaseCache();
    await db.collection("products").doc(p.product_id.toString()).set(p);
}

async function cloudDeleteProduct(id) {
    clearDatabaseCache();
    await db.collection("products").doc(id.toString()).delete();
}

async function cloudInsertCategory(c) {
    clearDatabaseCache();
    await db.collection("categories").doc(c.categories_id.toString()).set(c);
}

async function cloudUpdateCategory(c) {
    clearDatabaseCache();
    await db.collection("categories").doc(c.categories_id.toString()).set(c);
}

async function cloudDeleteCategory(id) {
    clearDatabaseCache();
    await db.collection("categories").doc(id.toString()).delete();
}

async function cloudInsertBrand(b) {
    clearDatabaseCache();
    await db.collection("brands").doc(b.Brands_id.toString()).set(b);
}

async function cloudUpdateBrand(b) {
    clearDatabaseCache();
    await db.collection("brands").doc(b.Brands_id.toString()).set(b);
}

async function cloudDeleteBrand(id) {
    clearDatabaseCache();
    await db.collection("brands").doc(id.toString()).delete();
}

// Global Modal & Action Handlers for Homepage Edit/Delete (Admins & Superadmins)
function showHomepageEditModal(title, formHtml, onSubmitCallback) {
    const existing = document.getElementById("homepage-edit-modal");
    if (existing) existing.remove();

    const overlay = document.createElement("div");
    overlay.id = "homepage-edit-modal";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(8, 9, 12, 0.85)";
    overlay.style.backdropFilter = "blur(8px)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "10000";
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.3s ease";

    overlay.innerHTML = `
        <div class="form-glass-card shadow-lg p-4" style="max-width: 600px; width: 90%; max-height: 90vh; overflow-y: auto; border: 2px solid var(--accent-gold); border-radius: 20px; background: var(--bg-card); color: var(--text-primary);">
            <h3 class="text-center mb-4" style="color: var(--accent-gold); font-weight: 700; font-family: 'Playfair Display', serif;">${title}</h3>
            <form id="modal-edit-form">
                ${formHtml}
                <div class="text-center mt-4 d-flex justify-content-center gap-3">
                    <button type="submit" class="btn-luxury-primary px-4 py-2 text-dark" style="border-radius: 12px; font-weight:700; border:none; background: linear-gradient(135deg, var(--accent-gold), var(--accent-gold-dark));">Save Changes</button>
                    <button type="button" class="btn-luxury-outline px-4 py-2" style="border-radius: 12px; border: 1px solid var(--border-color); background:transparent; color:var(--text-primary);" onclick="document.getElementById('homepage-edit-modal').remove()">Cancel</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(overlay);
    setTimeout(() => overlay.style.opacity = "1", 10);

    const form = overlay.querySelector("#modal-edit-form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        await onSubmitCallback(form);
        overlay.remove();
    });
}

async function handleEditProductHome(id) {
    const products = getProducts();
    const p = products.find(prod => prod.product_id === id);
    if (!p) return;

    const cats = getCategories();
    const brs = getBrands();

    const formHtml = `
        <div class="form-outline mb-3">
            <label class="form-label-luxury" style="color: var(--accent-gold); font-weight:600;">Product Title</label>
            <input type="text" id="edit-modal-title" class="form-control form-control-luxury" style="background: rgba(8, 9, 12, 0.5); border: 1px solid rgba(212, 175, 55, 0.25); color: #fff;" value="${p.product_title}" required>
        </div>
        <div class="form-outline mb-3">
            <label class="form-label-luxury" style="color: var(--accent-gold); font-weight:600;">Description</label>
            <input type="text" id="edit-modal-desc" class="form-control form-control-luxury" style="background: rgba(8, 9, 12, 0.5); border: 1px solid rgba(212, 175, 55, 0.25); color: #fff;" value="${p.product_description}" required>
        </div>
        <div class="form-outline mb-3">
            <label class="form-label-luxury" style="color: var(--accent-gold); font-weight:600;">Product Keywords</label>
            <input type="text" id="edit-modal-keywords" class="form-control form-control-luxury" style="background: rgba(8, 9, 12, 0.5); border: 1px solid rgba(212, 175, 55, 0.25); color: #fff;" value="${p.product_keywords}" required>
        </div>
        <div class="row">
            <div class="col-md-6 form-outline mb-3">
                <label class="form-label-luxury" style="color: var(--accent-gold); font-weight:600;">Category</label>
                <select id="edit-modal-category" class="form-select form-control-luxury" style="background: rgba(8, 9, 12, 0.5); border: 1px solid rgba(212, 175, 55, 0.25); color: #fff;" required>
                    ${cats.map(c => `<option value="${c.categories_id}" style="background: #12141a; color: #fff;" ${c.categories_id === p.category_id ? 'selected' : ''}>${c.categories_title}</option>`).join('')}
                </select>
            </div>
            <div class="col-md-6 form-outline mb-3">
                <label class="form-label-luxury" style="color: var(--accent-gold); font-weight:600;">Brand</label>
                <select id="edit-modal-brand" class="form-select form-control-luxury" style="background: rgba(8, 9, 12, 0.5); border: 1px solid rgba(212, 175, 55, 0.25); color: #fff;" required>
                    ${brs.map(b => `<option value="${b.Brands_id}" style="background: #12141a; color: #fff;" ${b.Brands_id === p.brand_id ? 'selected' : ''}>${b.Brands_title}</option>`).join('')}
                </select>
            </div>
        </div>
        <div class="form-outline mb-3">
            <label class="form-label-luxury" style="color: var(--accent-gold); font-weight:600;">Product Image 1 (Current: ${p.product_Image1})</label>
            <input type="file" id="edit-modal-img1" class="form-control form-control-luxury" style="background: rgba(8, 9, 12, 0.5); border: 1px solid rgba(212, 175, 55, 0.25); color: #fff;">
        </div>
        <div class="form-outline mb-3">
            <label class="form-label-luxury" style="color: var(--accent-gold); font-weight:600;">Product Image 2 (Current: ${p.product_Image2})</label>
            <input type="file" id="edit-modal-img2" class="form-control form-control-luxury" style="background: rgba(8, 9, 12, 0.5); border: 1px solid rgba(212, 175, 55, 0.25); color: #fff;">
        </div>
        <div class="form-outline mb-3">
            <label class="form-label-luxury" style="color: var(--accent-gold); font-weight:600;">Product Image 3 (Current: ${p.product_Image3})</label>
            <input type="file" id="edit-modal-img3" class="form-control form-control-luxury" style="background: rgba(8, 9, 12, 0.5); border: 1px solid rgba(212, 175, 55, 0.25); color: #fff;">
        </div>
        <div class="form-outline mb-4">
            <label class="form-label-luxury" style="color: var(--accent-gold); font-weight:600;">Product Price (₹)</label>
            <input type="number" id="edit-modal-price" class="form-control form-control-luxury" style="background: rgba(8, 9, 12, 0.5); border: 1px solid rgba(212, 175, 55, 0.25); color: #fff;" value="${p.product_price}" required>
        </div>
    `;

    showHomepageEditModal("Edit Product", formHtml, async (form) => {
        const title = form.querySelector("#edit-modal-title").value;
        const desc = form.querySelector("#edit-modal-desc").value;
        const keywords = form.querySelector("#edit-modal-keywords").value;
        const category = form.querySelector("#edit-modal-category").value;
        const brand = form.querySelector("#edit-modal-brand").value;
        const price = form.querySelector("#edit-modal-price").value;

        const img1File = form.querySelector("#edit-modal-img1").files[0];
        const img2File = form.querySelector("#edit-modal-img2").files[0];
        const img3File = form.querySelector("#edit-modal-img3").files[0];

        const updatedProduct = {
            product_id: id,
            product_title: title,
            product_description: desc,
            product_keywords: keywords,
            category_id: parseInt(category),
            brand_id: parseInt(brand),
            product_Image1: img1File ? img1File.name : p.product_Image1,
            product_Image2: img2File ? img2File.name : p.product_Image2,
            product_Image3: img3File ? img3File.name : p.product_Image3,
            product_price: parseInt(price)
        };

        try {
            await cloudUpdateProduct(updatedProduct);
            await dbInit();
            alert("Product updated successfully!");
            window.location.reload();
        } catch (err) {
            console.error("Error updating product:", err);
            alert("Failed to update product.");
        }
    });
}

async function handleDeleteProductHome(id) {
    const user = getLoggedInUser();
    if (!user || (user.role !== 'admin' && user.role !== 'superadmin')) {
        alert("Only admin/superadmin can delete products!");
        return;
    }
    if (confirm("Are you sure you want to delete this product?")) {
        try {
            await cloudDeleteProduct(id);
            await dbInit();
            alert("Product deleted successfully!");
            window.location.reload();
        } catch (err) {
            console.error("Error deleting product:", err);
            alert("Failed to delete product.");
        }
    }
}

async function handleEditCategoryHome(id) {
    const cats = getCategories();
    const c = cats.find(cat => cat.categories_id === id);
    if (!c) return;

    const formHtml = `
        <div class="form-outline mb-4">
            <label class="form-label-luxury" style="color: var(--accent-gold); font-weight:600;">Category Title</label>
            <input type="text" id="edit-modal-cat-title" class="form-control form-control-luxury" style="background: rgba(8, 9, 12, 0.5); border: 1px solid rgba(212, 175, 55, 0.25); color: #fff;" value="${c.categories_title}" required>
        </div>
    `;

    showHomepageEditModal("Edit Category", formHtml, async (form) => {
        const title = form.querySelector("#edit-modal-cat-title").value;
        const updatedCategory = {
            categories_id: id,
            categories_title: title
        };

        try {
            await cloudUpdateCategory(updatedCategory);
            await dbInit();
            alert("Category updated successfully!");
            window.location.reload();
        } catch (err) {
            console.error("Error updating category:", err);
            alert("Failed to update category.");
        }
    });
}

async function handleDeleteCategoryHome(id) {
    const user = getLoggedInUser();
    if (!user || (user.role !== 'admin' && user.role !== 'superadmin')) {
        alert("Only admin/superadmin can delete categories!");
        return;
    }
    if (confirm("Are you sure you want to delete this category?")) {
        try {
            await cloudDeleteCategory(id);
            await dbInit();
            alert("Category deleted successfully!");
            window.location.reload();
        } catch (err) {
            console.error("Error deleting category:", err);
            alert("Failed to delete category.");
        }
    }
}

async function handleEditBrandHome(id) {
    const brs = getBrands();
    const b = brs.find(brand => brand.Brands_id === id);
    if (!b) return;

    const formHtml = `
        <div class="form-outline mb-4">
            <label class="form-label-luxury" style="color: var(--accent-gold); font-weight:600;">Brand Title</label>
            <input type="text" id="edit-modal-brand-title" class="form-control form-control-luxury" style="background: rgba(8, 9, 12, 0.5); border: 1px solid rgba(212, 175, 55, 0.25); color: #fff;" value="${b.Brands_title}" required>
        </div>
    `;

    showHomepageEditModal("Edit Brand", formHtml, async (form) => {
        const title = form.querySelector("#edit-modal-brand-title").value;
        const updatedBrand = {
            Brands_id: id,
            Brands_title: title
        };

        try {
            await cloudUpdateBrand(updatedBrand);
            await dbInit();
            alert("Brand updated successfully!");
            window.location.reload();
        } catch (err) {
            console.error("Error updating brand:", err);
            alert("Failed to update brand.");
        }
    });
}

async function handleDeleteBrandHome(id) {
    const user = getLoggedInUser();
    if (!user || (user.role !== 'admin' && user.role !== 'superadmin')) {
        alert("Only admin/superadmin can delete brands!");
        return;
    }
    if (confirm("Are you sure you want to delete this brand?")) {
        try {
            await cloudDeleteBrand(id);
            await dbInit();
            alert("Brand deleted successfully!");
            window.location.reload();
        } catch (err) {
            console.error("Error deleting brand:", err);
            alert("Failed to delete brand.");
        }
    }
}

async function cloudDeleteOrder(id) {
    clearDatabaseCache();
    await db.collection("orders").doc(id.toString()).delete();
}

async function cloudCompleteOrder(id, paymentMode) {
    clearDatabaseCache();
    const updateData = { order_status: 'Complete' };
    if (paymentMode) {
        updateData.payment_mode = paymentMode;
    }
    await db.collection("orders").doc(id.toString()).update(updateData);
}

async function cloudUpdateOrderStatus(id, status) {
    clearDatabaseCache();
    await db.collection("orders").doc(id.toString()).update({ order_status: status });
}

async function cloudDeleteMessage(id) {
    clearDatabaseCache();
    await db.collection("messages").doc(id.toString()).delete();
}

async function cloudUpdateUser(username, updatedData) {
    clearDatabaseCache();
    await db.collection("users").doc(username).update(updatedData);
}

async function cloudDeleteUser(username) {
    clearDatabaseCache();
    await db.collection("users").doc(username).delete();
    // Also delete user's orders
    const orderSnapshot = await db.collection("orders").where("username", "==", username).get();
    for (const doc of orderSnapshot.docs) {
        await doc.ref.delete();
    }
}

async function cloudInsertAdmin(adminData) {
    clearDatabaseCache();
    const userDoc = await db.collection("users").doc(adminData.username).get();
    if (userDoc.exists) {
        return { success: false, message: "Username already exists!" };
    }
    adminData.user_password = await hashPassword(adminData.user_password);
    await db.collection("users").doc(adminData.username).set(adminData);
    return { success: true };
}

// Theme Toggle Dial Auto-injection and Logic
function initThemeDial() {
    if (document.getElementById("global-theme-dial")) return;

    const savedTheme = localStorage.getItem("mystore_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    const themeDial = document.createElement("div");
    themeDial.className = `theme-dial ${savedTheme === 'light' ? 'active' : ''}`;
    themeDial.id = "global-theme-dial";
    themeDial.title = "Switch Theme Mode";
    themeDial.innerHTML = `<i class="fa-solid ${savedTheme === 'light' ? 'fa-sun' : 'fa-moon'}"></i>`;

    document.body.appendChild(themeDial);

    themeDial.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        themeDial.classList.add("switching");
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("mystore_theme", newTheme);

        const icon = themeDial.querySelector("i");
        if (newTheme === "light") {
            themeDial.classList.add("active");
            icon.className = "fa-solid fa-sun";
        } else {
            themeDial.classList.remove("active");
            icon.className = "fa-solid fa-moon";
        }

        setTimeout(() => {
            themeDial.classList.remove("switching");
        }, 600);

        window.dispatchEvent(new CustomEvent("theme-changed", { detail: { theme: newTheme } }));
    });
}

// Custom Success Alert Modal
function showSuccessAlert(title, message, redirectUrl) {
    const overlay = document.createElement("div");
    overlay.className = "success-overlay";
    overlay.innerHTML = `
        <div class="success-card">
            <div class="checkmark-wrapper">
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
            </div>
            <h3 class="mb-2" style="color: var(--accent-gold); font-weight: 700;">${title}</h3>
            <p class="text-secondary mb-0">${message}</p>
        </div>
    `;
    document.body.appendChild(overlay);

    setTimeout(() => overlay.classList.add("show"), 10);

    setTimeout(() => {
        overlay.classList.remove("show");
        setTimeout(() => {
            overlay.remove();
            if (redirectUrl) {
                window.location.href = redirectUrl;
            }
        }, 450);
    }, 2400);
}

if (document.readyState !== "loading") {
    initThemeDial();
} else {
    document.addEventListener("DOMContentLoaded", initThemeDial);
}


