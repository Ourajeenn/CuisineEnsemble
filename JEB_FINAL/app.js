// App State & Data
// App State & Data
const state = {
    role: null, // 'admin' or 'student' (null at start for login)
    currentPage: 'login',
    currentUser: {
        name: 'Alice Martin',
        email: 'alice.martin@univ-paris.fr',
        address: '12 Rue des Écoles, 75005 Paris',
        phone: '06 12 34 56 78',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
        points: 450,
        preferences: ['Végétarien', 'Sans Gluten']
    },
    baskets: [
        { id: 1, title: 'Panier Fraîcheur', store: 'HyperFresh', priceOld: 9.99, priceNew: 3.99, type: 'Frais', emoji: '🥗', active: true, quantity: 5 },
        { id: 2, title: 'Panier Boulangerie', store: 'HyperFresh', priceOld: 5.00, priceNew: 2.50, type: 'Épicerie', emoji: '🍞', active: true, quantity: 8 },
        { id: 3, title: 'Panier Complet', store: 'HyperFresh', priceOld: 14.99, priceNew: 4.99, type: 'Complet', emoji: '🥙', active: true, quantity: 2 },
        { id: 4, title: 'Panier Sushi Mix', store: 'Sushi Shop', priceOld: 18.00, priceNew: 6.50, type: 'Traiteur', emoji: '🍣', active: true, quantity: 3 },
        { id: 5, title: 'Panier Pizza', store: 'Pizza Hut', priceOld: 12.00, priceNew: 4.00, type: 'Traiteur', emoji: '🍕', active: true, quantity: 4 },
        { id: 6, title: 'Panier Fruits Bio', store: 'Bio C Bon', priceOld: 15.00, priceNew: 5.00, type: 'Frais', emoji: '🍎', active: true, quantity: 6 },
        { id: 7, title: 'Panier Pâtisserie', store: 'Paul', priceOld: 8.00, priceNew: 3.50, type: 'Sucré', emoji: '🍰', active: true, quantity: 2 },
        { id: 8, title: 'Yaourts Fermiers', store: 'HyperFresh', priceOld: 4.50, priceNew: 2.00, type: 'Frais', emoji: '🥛', active: true, quantity: 10 },
        { id: 9, title: 'Pack Lait Bio', store: 'HyperFresh', priceOld: 6.00, priceNew: 3.00, type: 'Frais', emoji: '🥛', active: true, quantity: 5 },
        { id: 10, title: 'Fromages Affinés', store: 'Fromagerie Claire', priceOld: 12.00, priceNew: 5.50, type: 'Frais', emoji: '🧀', active: true, quantity: 3 },
        { id: 11, title: 'Mix Fruits Rouges', store: 'HyperFresh', priceOld: 8.00, priceNew: 4.00, type: 'Frais', emoji: '🍓', active: true, quantity: 4, image: 'images/fruits_rouges.jpg' },
        { id: 12, title: 'Fruits de la Passion', store: 'HyperFresh', priceOld: 7.00, priceNew: 3.50, type: 'Frais', emoji: '🍈', active: true, quantity: 6, image: 'images/passion.jpg' },
        { id: 13, title: 'Panier Mix Fruits', store: 'HyperFresh', priceOld: 10.00, priceNew: 5.00, type: 'Frais', emoji: '🍇', active: true, quantity: 3, image: 'images/mix_fruits.jpg' },
        { id: 14, title: 'Panier Kiwis Vitamine', store: 'HyperFresh', priceOld: 6.50, priceNew: 3.00, type: 'Frais', emoji: '🥝', active: true, quantity: 7, image: 'images/kiwi.jpg' },
        { id: 15, title: 'Panier Exotique Pitaya', store: 'HyperFresh', priceOld: 9.00, priceNew: 4.50, type: 'Frais', emoji: '🐉', active: true, quantity: 2, image: 'images/pitaya.jpg' }
    ],
    recipes: [
        {
            title: "🥔 Poêlée “fin de frigo” paysanne",
            desc: "La recette des grands-mères. Ingrédients : Légumes fatigués, 2 œufs, reste de fromage. Préparation : Coupe tout. Fais revenir. Ajoute œufs/fromage. Mange.",
            tag: "Zéro gaspillage, 100 % réconfort"
        },
        {
            title: "🍞 Pain perdu salé au fromage & légumes",
            desc: "Ingrédients : Pain rassis, lait, œuf, restes légumes, fromage. Préparation : Bats œuf+lait. Trempe pain. Garnis. Poêle bien chaude.",
            tag: "Petit budget. Grand respect du pain"
        },
        {
            title: "🍌 Gâteau express aux fruits trop mûrs",
            desc: "Ingrédients : Fruits trop mûrs, 2 œufs, 80g sucre, 150g farine, levure. Préparation : Écrase fruits. Mélange tout. Four 180°C 30min.",
            tag: "Dessert humble. Conscience propre"
        }
    ],
    reservations: [
        { id: 'JEB1245', basketId: 1, studentName: 'Alice Martin', status: 'confirmé', time: '18h-19h' },
        { id: 'JEB1198', basketId: 2, studentName: 'Marc Durand', status: 'en attente', time: '17h-20h' },
        { id: 'JEB1300', basketId: 4, studentName: 'Sophie L.', status: 'récupéré', time: 'Hier' }
    ]
};

// Menu Definitions
const menus = {
    admin: [
        { id: 'dashboard', label: 'Dashboard', icon: 'fa-chart-line' },
        { id: 'add-basket', label: 'Ajouter un panier', icon: 'fa-plus-circle' },
        { id: 'active-baskets', label: 'Paniers actifs', icon: 'fa-box' },
        { id: 'reservations', label: 'Réservations', icon: 'fa-clipboard-list' },
        { id: 'stats', label: 'Statistiques', icon: 'fa-chart-bar' },
        { id: 'clients', label: 'Gestion Clients', icon: 'fa-users' },
        { id: 'promotions', label: 'Promotions', icon: 'fa-tags' },
        { id: 'settings', label: 'Paramètres', icon: 'fa-cog' }
    ],
    student: [
        { id: 'home', label: 'Accueil', icon: 'fa-home' },
        { id: 'explorer', label: 'Explorer', icon: 'fa-search' },
        { id: 'my-reservations', label: 'Mes paniers', icon: 'fa-shopping-bag' },
        { id: 'recipes', label: 'Recettes Anti-Gaspi', icon: 'fa-utensils' },
        { id: 'favorites', label: 'Favoris', icon: 'fa-heart' },
        { id: 'stores', label: 'Magasins', icon: 'fa-store' },
        { id: 'rewards', label: 'Récompenses', icon: 'fa-gift' },
        { id: 'impact', label: 'Mon Impact', icon: 'fa-leaf' },
        { id: 'profile', label: 'Mon Profil', icon: 'fa-user' }
    ]
};

// DOM Elements
const sidebarNav = document.querySelector('.sidebar-nav');
const pageTitle = document.getElementById('page-title');
const contentView = document.getElementById('content-view');
const switchRoleBtn = document.getElementById('switch-role');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const aiToggle = document.getElementById('ai-toggle');
const aiChatWindow = document.getElementById('ai-chat-window');
const closeChat = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const sendMsgBtn = document.getElementById('send-msg');
const chatMessages = document.getElementById('chat-messages');

// Initialization
function init() {
    if (!state.role) {
        renderLogin();
    } else {
        renderSidebar();
        renderPage(state.currentPage);
        setupEventListeners();

        // Update body class for styling
        document.body.className = state.role === 'student' ? 'student-mode' : 'light-mode';
    }
}

function renderSidebar() {
    const currentMenu = menus[state.role];
    if (!currentMenu) return; // Should not happen if role is set

    sidebarNav.innerHTML = currentMenu.map(item => `
        <div class="nav-item ${state.currentPage === item.id ? 'active' : ''}" onclick="navigateTo('${item.id}')">
            <i class="fas ${item.icon}"></i>
            <span>${item.label}</span>
        </div>
    `).join('');

    switchRoleBtn.innerHTML = `
        <i class="fas fa-sign-out-alt"></i>
        <span>Déconnexion</span>
    `;
    // Override default behavior for logout
    switchRoleBtn.onclick = () => {
        state.role = null;
        state.currentPage = 'login';
        sidebar.classList.add('hidden'); // Hide sidebar on logout
        renderLogin();
    };
}

function navigateTo(pageId) {
    state.currentPage = pageId;

    // Sidebar update
    renderSidebar();

    // Bottom Nav update
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    bottomNavItems.forEach(item => {
        const onClickAttr = item.getAttribute('onclick');
        if (onClickAttr && onClickAttr.includes(`'${pageId}'`)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    renderPage(pageId);

    if (window.innerWidth < 768) {
        sidebar.classList.add('hidden');
    }
}

function renderPage(pageId) {
    // Set Page Title
    const menuItem = [...(menus.admin || []), ...(menus.student || [])].find(i => i.id === pageId);
    pageTitle.innerText = menuItem ? menuItem.label : 'JustEcoBox';

    switch (pageId) {
        case 'login': renderLogin(); break;
        case 'dashboard': renderAdminDashboard(); break;
        case 'add-basket': renderAddBasket(); break;
        case 'active-baskets': renderActiveBaskets(); break;
        case 'reservations': renderReservations(); break;
        case 'stats': renderStats(); break;
        case 'clients': renderClients(); break;
        case 'promotions': renderPromotions(); break;
        case 'settings': renderSettings(); break;
        case 'home': renderStudentHome(); break;
        case 'explorer': renderStudentExplorer(); break;
        case 'my-reservations': renderStudentReservations(); break;
        case 'favorites': renderFavorites(); break;
        case 'rewards': renderRewards(); break;
        case 'impact': renderStudentImpact(); break;
        case 'profile': renderStudentProfile(); break;
        case 'recipes': renderStudentRecipes(); break;
        case 'stores': renderStoresList(); break;
        default: contentView.innerHTML = `<h3>${pageId} en cours de développement...</h3>`;
    }
}

function renderLogin() {
    // Hide sidebar and bottom nav for login
    sidebar.classList.add('hidden');
    document.querySelector('.bottom-nav').style.display = 'none';
    document.getElementById('top-bar').style.display = 'none';

    contentView.innerHTML = `
        <div class="login-container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 80vh; text-align: center; gap: 2rem;">
            <div style="margin-bottom: 2rem;">
                <img src="logo.png" alt="JustEcoBox" style="width: 120px; height: 120px; object-fit: contain; margin-bottom: 1rem;">
                <h1 style="color: var(--primary); font-size: 2.5rem; margin-bottom: 0.5rem;">Bienvenue sur JustEcoBox</h1>
                <p style="color: var(--text-muted); font-size: 1.1rem;">Choisissez votre profil pour continuer</p>
            </div>
            
            <div class="role-cards" style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center;">
                <div class="role-card glass-card" onclick="loginAs('student')" style="cursor: pointer; padding: 2.5rem; width: 280px; transition: transform 0.3s; border: 2px solid transparent;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">🎓</div>
                    <h3 style="color: var(--primary); margin-bottom: 0.5rem;">Étudiant</h3>
                    <p style="color: var(--text-muted);">Je veux sauver des paniers à petit prix</p>
                </div>
                
                <div class="role-card glass-card" onclick="loginAs('admin')" style="cursor: pointer; padding: 2.5rem; width: 280px; transition: transform 0.3s; border: 2px solid transparent;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">🏪</div>
                    <h3 style="color: var(--primary); margin-bottom: 0.5rem;">Commerçant</h3>
                    <p style="color: var(--text-muted);">Je veux valoriser mes invendus</p>
                </div>
            </div>
        </div>
    `;
}

function loginAs(role) {
    if (role === 'student') {
        renderStudentLoginForm();
    } else {
        completeLogin('admin');
    }
}

function renderStudentLoginForm() {
    contentView.innerHTML = `
        <div class="login-container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 80vh; text-align: center; gap: 2rem;">
            <div style="margin-bottom: 2rem;">
                <img src="logo.png" alt="JustEcoBox" style="width: 100px; height: 100px; object-fit: contain; margin-bottom: 1rem;">
                <h2 style="color: var(--primary);">Connexion Étudiant</h2>
            </div>
            
            <form onsubmit="event.preventDefault(); completeLogin('student');" class="glass-card" style="padding: 2rem; width: 100%; max-width: 400px; text-align: left;">
                <div class="form-group">
                    <label>Email universitaire</label>
                    <input type="email" value="alice.martin@univ-paris.fr" required>
                </div>
                <div class="form-group">
                    <label>Mot de passe</label>
                    <input type="password" value="password123" required>
                </div>
                <button type="submit" class="btn-primary" style="width: 100%; margin-top: 1rem;">Se connecter</button>
                <div style="display: flex; justify-content: center; gap: 15px; margin-top: 15px;">
                     <p style="font-size: 0.9rem; color: var(--text-muted); cursor: pointer;" onclick="renderLogin()">Retour choix profil</p>
                     <p style="font-size: 0.9rem; color: var(--primary); cursor: pointer; font-weight: 500;" onclick="window.location.reload()">Retour Accueil</p>
                </div>
            </form>
        </div>
    `;
}

function completeLogin(role) {
    state.role = role;
    state.currentPage = role === 'admin' ? 'dashboard' : 'explorer';

    // Restore UI elements
    document.getElementById('top-bar').style.display = 'flex';
    if (role === 'student' && window.innerWidth < 768) {
        document.querySelector('.bottom-nav').style.display = 'flex';
    } else {
        sidebar.classList.remove('hidden');
    }

    init();
}

// Admin View Handlers
function renderAdminDashboard() {
    const totalRevenue = 1250.50;
    const co2Saved = 45;
    const totalReservations = state.reservations.length;
    const activeBaskets = state.baskets.filter(b => b.active).length;
    const outOfStock = state.baskets.filter(b => b.quantity === 0).length;

    contentView.innerHTML = `
        <div class="dashboard-stats">
            <div class="stat-card">
                <h3>Chiffre d'affaires</h3>
                <div class="value">${totalRevenue.toFixed(2)}€</div>
                <div class="trend positive"><i class="fas fa-arrow-up"></i> +12%</div>
            </div>
            <div class="stat-card">
                <h3>CO2 Évité</h3>
                <div class="value">${co2Saved}kg</div>
                <div class="trend positive"><i class="fas fa-leaf"></i> +5%</div>
            </div>
            <div class="stat-card">
                <h3>Réservations</h3>
                <div class="value">${totalReservations}</div>
                <div class="trend neutral"><i class="fas fa-minus"></i> Stable</div>
            </div>
            <div class="stat-card">
                <h3>Paniers Actifs</h3>
                <div class="value">${activeBaskets}</div>
                <div class="trend negative" style="color: #ef4444;">${outOfStock} en rupture</div>
            </div>
        </div>

        <div class="dashboard-actions grid-2">
            <div class="action-card" onclick="navigateTo('add-basket')">
                <i class="fas fa-plus-circle"></i>
                <h3>Ajouter un panier</h3>
                <p>Créer une nouvelle offre</p>
            </div>
            <div class="action-card" onclick="navigateTo('active-baskets')">
                <i class="fas fa-boxes"></i>
                <h3>Gérer les stocks</h3>
                <p>Modifier ou supprimer des paniers</p>
            </div>
            <div class="action-card" onclick="navigateTo('promotions')">
                <i class="fas fa-bullhorn"></i>
                <h3>Campagne Marketing</h3>
                <p>Lancer une promo flash</p>
            </div>
        </div>
        
        <div class="glass-card" style="margin-top: 2rem; padding: 1.5rem;">
            <h4 style="margin-bottom: 1rem;">État des stocks</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
                ${state.baskets.map(b => `
                    <div style="padding: 10px; background: ${b.quantity === 0 ? '#fee2e2' : '#f0fdf4'}; border-radius: 8px; border: 1px solid ${b.quantity === 0 ? '#fca5a5' : '#86efac'};">
                        <div style="font-weight: bold; ${b.quantity === 0 ? 'color: #991b1b;' : 'color: #166534;'}">${b.title}</div>
                        <div style="font-size: 0.9rem;">${b.quantity === 0 ? 'Rupture de stock ❌' : 'En stock: ' + b.quantity + ' ✅'}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderStats() {
    contentView.innerHTML = `
        <div class="stats-dashboard">
            <h3 style="margin-bottom: 2rem;">Statistiques & Analyses 📈</h3>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-bottom: 3rem;">
                <div class="glass-card" style="padding: 1.5rem;">
                    <h4 style="margin-bottom: 1rem;">Commandes Mensuelles</h4>
                    <div style="height: 200px; display: flex; align-items: flex-end; justify-content: space-around; padding-top: 20px;">
                        <div style="width: 30px; height: 40%; background: var(--secondary); border-radius: 5px 5px 0 0; position: relative;" title="Jan"><span style="position: absolute; bottom: -25px; left: 5px;">Jan</span></div>
                        <div style="width: 30px; height: 55%; background: var(--secondary); border-radius: 5px 5px 0 0; position: relative;" title="Fév"><span style="position: absolute; bottom: -25px; left: 5px;">Fév</span></div>
                        <div style="width: 30px; height: 80%; background: var(--primary); border-radius: 5px 5px 0 0; position: relative;" title="Mar (Actuel)"><span style="position: absolute; bottom: -25px; left: 5px; font-weight:bold;">Mar</span></div>
                    </div>
                </div>
                
                 <div class="glass-card" style="padding: 1.5rem;">
                    <h4 style="margin-bottom: 1rem;">Répartition par Type</h4>
                    <div style="display: flex; gap: 20px; align-items: center; justify-content: center; height: 200px;">
                        <div style="width: 120px; height: 120px; border-radius: 50%; background: conic-gradient(var(--primary) 0% 40%, var(--secondary) 40% 70%, #fbbf24 70% 100%);"></div>
                        <ul style="list-style: none;">
                            <li style="margin-bottom: 5px;"><span style="color: var(--primary);">■</span> Frais (40%)</li>
                            <li style="margin-bottom: 5px;"><span style="color: var(--secondary);">■</span> Épicerie (30%)</li>
                            <li><span style="color: #fbbf24;">■</span> Traiteur (30%)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
                 <div class="glass-card" style="padding: 1.5rem;">
                    <h4 style="margin-bottom: 1rem;">Clients Fidèles 🏆</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
                            <span><i class="fas fa-medal" style="color: gold;"></i> Alice Martin</span>
                            <strong>15 pts</strong>
                        </li>
                        <li style="padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
                            <span><i class="fas fa-medal" style="color: silver;"></i> Lucas Dubreuil</span>
                            <strong>12 pts</strong>
                        </li>
                        <li style="padding: 10px; display: flex; justify-content: space-between;">
                            <span><i class="fas fa-medal" style="color: #cd7f32;"></i> Chloé V.</span>
                            <strong>9 pts</strong>
                        </li>
                    </ul>
                </div>

                <div class="glass-card" style="padding: 1.5rem;">
                    <h4 style="margin-bottom: 1rem;">⚠️ Dates Courtes (Urgent)</h4>
                    <ul style="list-style: none; padding: 0;">
                         <li style="padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; color: #ef4444;">
                            <span>Yaourts Nature x4</span>
                            <strong>Exp: DEMAIN</strong>
                        </li>
                         <li style="padding: 10px; display: flex; justify-content: space-between; color: #ef4444;">
                            <span>Salade Sachet</span>
                            <strong>Exp: 10/01</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function renderReservations() {
    contentView.innerHTML = `
        <div class="reservation-manager">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Étudiant</th>
                        <th>Panier</th>
                        <th>Retrait</th>
                        <th>Statut</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${state.reservations.map(res => {
        const basket = state.baskets.find(b => b.id === res.basketId);
        return `
                        <tr>
                            <td>${res.id}</td>
                            <td>${res.studentName}</td>
                            <td>${basket ? basket.title : 'N/A'}</td>
                            <td>${res.time}</td>
                            <td><span class="status-pill ${res.status === 'confirmé' ? 'success' : 'warning'}">${res.status}</span></td>
                            <td>
                                <button class="btn-icon" onclick="confirmPickup('${res.id}')"><i class="fas fa-check"></i></button>
                                <button class="btn-icon"><i class="fas fa-times"></i></button>
                            </td>
                        </tr>
                    `}).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderAddBasket() {
    contentView.innerHTML = `
        <div class="form-container glass-card" style="max-width: 800px; padding: 2.5rem;">
            <h3 style="margin-bottom: 2rem; color: var(--primary);">📦 Configurer un nouveau panier</h3>
            <form onsubmit="addNewBasket(event)">
                <div class="form-row">
                    <div class="form-group">
                        <label>Type de panier</label>
                        <select id="new-basket-type" required>
                            <option value="Frais">🥗 Fraîcheur</option>
                            <option value="Épicerie">🍞 Boulangerie</option>
                            <option value="Complet">🥙 Complet (Mix)</option>
                            <option value="Traiteur">🍣 Traiteur/Sushi</option>
                            <option value="Sucré">🍰 Pâtisserie</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Nom personnalisé</label>
                        <input id="new-basket-title" type="text" placeholder="Ex: Panier Surprise Soir" required>
                    </div>
                </div>

                <div class="form-group">
                    <label>Description du contenu estimé</label>
                    <textarea id="new-basket-desc" style="width:100%; padding:10px; border-radius:10px; border:1px solid #ddd; min-height:80px;" placeholder="Ex: 3 pâtisseries du jour, 1 baguette..."></textarea>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Prix Original (€)</label>
                        <input id="new-basket-old-price" type="number" step="0.01" placeholder="15.00" required>
                    </div>
                    <div class="form-group">
                        <label>Prix JustEco (€)</label>
                        <input id="new-basket-new-price" type="number" step="0.01" placeholder="4.99" required>
                    </div>
                    <div class="form-group">
                        <label>Quantité disponible</label>
                        <input id="new-basket-qty" type="number" placeholder="5" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Début retrait</label>
                        <input type="time" value="18:00">
                    </div>
                    <div class="form-group">
                        <label>Fin retrait</label>
                        <input type="time" value="20:00">
                    </div>
                </div>

                <div style="display: flex; gap: 15px; margin-top: 2rem;">
                    <button type="button" class="btn-primary" style="background: #e2e8f0; color: var(--text-dark);" onclick="navigateTo('dashboard')">Annuler</button>
                    <button type="submit" class="btn-primary">Publier le panier</button>
                </div>
            </form>
        </div>
    `;
}

function addNewBasket(e) {
    e.preventDefault();
    const typeMap = { 'Frais': '🥗', 'Épicerie': '🍞', 'Complet': '🥙', 'Traiteur': '🍣', 'Sucré': '🍰' };
    const type = document.getElementById('new-basket-type').value;

    const newBasket = {
        id: Date.now(),
        title: document.getElementById('new-basket-title').value,
        store: 'HyperFresh',
        priceOld: parseFloat(document.getElementById('new-basket-old-price').value),
        priceNew: parseFloat(document.getElementById('new-basket-new-price').value),
        type: type,
        emoji: typeMap[type] || '📦',
        active: true,
        quantity: parseInt(document.getElementById('new-basket-qty').value)
    };

    state.baskets.push(newBasket);
    alert('Panier créé et publié avec succès !');
    navigateTo('active-baskets');
}

function renderActiveBaskets() {
    contentView.innerHTML = `
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <h3>Vos paniers en ligne (${state.baskets.length})</h3>
            <button class="btn-primary" onclick="navigateTo('add-basket')"><i class="fas fa-plus"></i> Nouveau</button>
        </div>
        <div class="basket-list">
            ${state.baskets.map(basket => `
                <div class="basket-item card" style="display: flex; align-items: center; justify-content: space-between; padding: 1.5rem; margin-bottom: 1rem;">
                    <div style="display: flex; align-items: center; gap: 1.5rem;">
                        <div class="basket-emoji" style="font-size: 2.5rem; background: #f8fafc; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px;">${basket.emoji}</div>
                        <div class="basket-details">
                            <h4 style="margin: 0; font-size: 1.1rem;">${basket.title}</h4>
                            <p style="margin: 5px 0 0; color: var(--text-muted); font-size: 0.9rem;">${basket.type} • Stock: <strong>${basket.quantity || 1}</strong></p>
                            <div class="prices" style="margin-top: 5px;">
                                <span class="new" style="font-weight: 700; color: var(--secondary);">${basket.priceNew}€</span>
                                <span class="old" style="text-decoration: line-through; color: #cbd5e1; font-size: 0.85rem; margin-left: 5px;">${basket.priceOld}€</span>
                            </div>
                        </div>
                    </div>
                    <div class="basket-actions" style="display: flex; align-items: center; gap: 10px;">
                        <button class="btn-icon-muted" title="Modifier"><i class="fas fa-edit"></i></button>
                        <button class="btn-icon-muted" title="Supprimer" onclick="if(confirm('Supprimer ce panier ?')) { state.baskets = state.baskets.filter(b => b.id !== ${basket.id}); renderActiveBaskets(); }"><i class="fas fa-trash"></i></button>
                        <label class="switch" title="Activer/Désactiver">
                            <input type="checkbox" ${basket.active ? 'checked' : ''} onchange="basket.active = this.checked">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Student View Handlers
function renderStudentHome() {
    const userName = state.currentUser.name.split(' ')[0];
    const pendingOrders = state.reservations.filter(r => r.status === 'en attente').length;

    contentView.innerHTML = `
        <div class="student-home-container">
            <div class="welcome-header glass-card" style="padding: 2rem; background: linear-gradient(135deg, var(--primary), #34d399); color: white; border-radius: 20px; text-align: left; margin-bottom: 2rem; position: relative; overflow: hidden;">
                <div style="position: relative; z-index: 2;">
                    <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem;">Bonjour ${userName} ! 👋</h1>
                    <p style="font-size: 1.1rem; opacity: 0.95;">Il y a ${state.baskets.filter(b => b.active).length} paniers disponibles autour de vous aujourd'hui.</p>
                    <button class="btn-primary" style="margin-top: 1.5rem; background: white; color: var(--primary); border: none; font-weight: 700;" onclick="navigateTo('explorer')">
                        <i class="fas fa-search"></i> Explorer les offres
                    </button>
                </div>
                <div style="position: absolute; right: -20px; bottom: -30px; font-size: 10rem; opacity: 0.2; transform: rotate(-15deg);">📦</div>
            </div>

            <h3 style="margin-bottom: 1.5rem;">Vite, avant qu'il ne soit trop tard ! ⚡</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                ${state.baskets.filter(b => b.active && (b.id === 3 || b.id === 7 || b.id === 15)).map(basket => `
                    <div class="urgent-card glass-card" style="padding: 1rem; display: flex; align-items: center; gap: 1rem; border-left: 4px solid #ef4444; cursor: pointer;" onclick="reserveBasket(${basket.id})">
                        <div style="width: 60px; height: 60px; border-radius: 50%; overflow: hidden; flex-shrink: 0;">
                            <img src="${basket.image || (basket.id === 3 ? 'images/panier_complet_1767866946881.png' : (basket.id === 7 ? 'images/panier_sucre_1767867012000.png' : 'images/pitaya.jpg'))}" 
                                 alt="${basket.title}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div>
                            <h4 style="margin: 0; font-size: 1rem;">${basket.title}</h4>
                            <p style="color: #ef4444; font-weight: bold; font-size: 0.9rem;">Plus que 2 !</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="home-stats-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                <div class="stat-box glass-card" style="padding: 1.5rem; text-align: center; cursor: pointer;" onclick="navigateTo('my-reservations')">
                    <div style="font-size: 2.5rem; color: var(--secondary); margin-bottom: 0.5rem;"><i class="fas fa-shopping-bag"></i></div>
                    <div style="font-size: 2rem; font-weight: 700;">${pendingOrders}</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">Commandes en cours</div>
                </div>
                <div class="stat-box glass-card" style="padding: 1.5rem; text-align: center; cursor: pointer;" onclick="navigateTo('impact')">
                    <div style="font-size: 2.5rem; color: #10b981; margin-bottom: 0.5rem;"><i class="fas fa-leaf"></i></div>
                    <div style="font-size: 2rem; font-weight: 700;">18kg</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem;">CO2 Économisé</div>
                </div>
            </div>
        </div>
    `;
}
function renderStudentExplorer(filterType = 'Tous') {
    // Mapping des paniers avec leurs images
    const basketImages = {
        1: 'images/panier_fraicheur_1767866913756.png',
        2: 'images/panier_boulangerie_1767866929658.png',
        3: 'images/panier_complet_1767866946881.png',
        4: 'images/panier_fruits_1767866963543.png',
        5: 'images/panier_epicerie_1767866980805.png'
    };

    const filteredBaskets = filterType === 'Tous'
        ? state.baskets.filter(b => b.active)
        : state.baskets.filter(b => b.active && (b.type === filterType || (filterType === 'Fruits & Légumes' && b.type === 'Frais'))); // Simple mapping logic

    const tabs = ['Tous', 'Frais', 'Épicerie', 'Boulangerie', 'Traiteur', 'Sucré'];

    contentView.innerHTML = `
        <div class="explorer-header">
            <div class="search-bar" style="background: white; padding: 10px 15px; border-radius: 12px; display: flex; align-items: center; gap: 10px; margin-bottom: 20px; box-shadow: var(--shadow);">
                <i class="fas fa-search" style="color: var(--text-muted);"></i>
                <input type="text" placeholder="Magasin, produit..." style="border: none; outline: none; width: 100%;" oninput="filterBasketsByName(this.value)">
            </div>
            
            <div class="tabs" style="overflow-x: auto; white-space: nowrap; padding-bottom: 5px;">
                ${tabs.map(tab => `
                    <div class="tab ${filterType === tab ? 'active' : ''}" onclick="renderStudentExplorer('${tab}')">${tab}</div>
                `).join('')}
            </div>
        </div>
        
        <div id="baskets-grid" class="student-baskets-grid" style="margin-top: 20px;">
            ${filteredBaskets.length > 0 ? filteredBaskets.map(basket => `
                <div class="student-basket-card" style="position: relative; overflow: hidden;">
                    <div class="card-image" style="width: 100%; height: 200px; overflow: hidden; border-radius: 15px 15px 0 0;">
                        <img src="${basketImages[basket.id] || 'images/panier_complet_1767866946881.png'}" 
                             alt="${basket.title}" 
                             style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;"
                             onmouseover="this.style.transform='scale(1.1)'"
                             onmouseout="this.style.transform='scale(1)'">
                    </div>
                    <div class="card-content">
                        <div class="badge-discount" style="position: absolute; top: 10px; right: 10px; background: #ef4444; color: white; padding: 5px 12px; border-radius: 20px; font-weight: 700; font-size: 0.9rem;">
                            -${Math.round((1 - basket.priceNew / basket.priceOld) * 100)}%
                        </div>
                        <h4>${basket.title}</h4>
                        <p>${basket.store}</p>
                        <div class="card-footer">
                            <div class="price-tag">${basket.priceNew.toFixed(2)}€ <span style="text-decoration: line-through; color: var(--text-muted); font-size: 0.9rem;">${basket.priceOld.toFixed(2)}€</span></div>
                            <button onclick="reserveBasket(${basket.id})" class="btn-reserve" ${basket.quantity === 0 ? 'disabled style="background:grey"' : ''}>
                                ${basket.quantity > 0 ? 'Réserver' : 'Épuisé'}
                            </button>
                        </div>
                    </div>
                </div>
            `).join('') : '<div style="text-align:center; width:100%; padding: 2rem; color: var(--text-muted);">Aucun panier trouvé dans cette catégorie.</div>'}
        </div>
    `;
}

function filterBasketsByName(query) {
    const cards = document.querySelectorAll('.student-basket-card');
    query = query.toLowerCase();
    cards.forEach(card => {
        const title = card.querySelector('h4').innerText.toLowerCase();
        const store = card.querySelector('p').innerText.toLowerCase();
        if (title.includes(query) || store.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function reserveBasket(id) {
    const basket = state.baskets.find(b => b.id === id);
    if (basket.quantity > 0) {
        // Validation Modal Logic Simulation
        const validationModalHtml = `
            <div id="validation-modal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;">
                <div class="glass-card" style="padding: 2rem; width: 90%; max-width: 400px; background: white;">
                    <h3 style="margin-bottom: 1.5rem;">Validation de Panier 🛍️</h3>
                    <p style="margin-bottom: 1rem;"><strong>Article:</strong> ${basket.title}</p>
                    <p style="margin-bottom: 1.5rem;"><strong>Prix:</strong> ${basket.priceNew.toFixed(2)}€</p>
                    
                    <div class="form-group">
                        <label>Mode de récupération</label>
                        <select id="delivery-mode" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #ddd;">
                            <option value="Retrait">Retrait en magasin</option>
                            <option value="Livraison">Livraison (+2.50€)</option>
                        </select>
                    </div>

                    <div class="form-group" style="margin-top: 1rem;">
                        <label>Note / Observation (facultatif)</label>
                        <textarea id="order-note" placeholder="Ex: Allergies, code d'entrée..." style="width: 100%; height: 80px; padding: 10px; border-radius: 8px; border: 1px solid #ddd;"></textarea>
                    </div>

                    <div style="display: flex; gap: 10px; margin-top: 2rem;">
                         <button class="btn-primary" style="background: #e2e8f0; color: var(--text-dark); flex: 1;" onclick="document.getElementById('validation-modal').remove()">Annuler</button>
                         <button class="btn-primary" style="flex: 1;" onclick="confirmOrder(${basket.id})">Valider</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', validationModalHtml);
    } else {
        alert("Désolé, ce panier est épuisé !");
    }
}

function confirmOrder(basketId) {
    const basket = state.baskets.find(b => b.id === basketId);
    const mode = document.getElementById('delivery-mode').value;
    const note = document.getElementById('order-note').value;

    document.getElementById('validation-modal').remove(); // Close modal

    if (basket.quantity > 0) {
        basket.quantity--;

        const newReservation = {
            id: 'JEB' + Math.floor(Math.random() * 9000 + 1000),
            basketId: basket.id,
            studentName: state.currentUser.name || 'Moi',
            status: 'en attente',
            time: 'Ce soir (18h-20h)',
            observation: `${mode} - ${note || 'Aucune note'}`
        };

        state.reservations.push(newReservation);

        alert(`✅ Commande Validée !\nMode: ${mode}\nNote: ${note}\nRetrouvez le code QR dans "Mes paniers"`);

        // Refresh view
        renderStudentExplorer();
        if (state.currentPage === 'home') renderStudentHome();
    }
}

function renderStudentReservations() {
    // Mapping des paniers avec leurs images
    const basketImages = {
        1: 'images/panier_fraicheur_1767866913756.png',
        2: 'images/panier_boulangerie_1767866929658.png',
        3: 'images/panier_complet_1767866946881.png',
        4: 'images/panier_fruits_1767866963543.png',
        5: 'images/panier_epicerie_1767866980805.png',
        6: 'images/panier_traiteur_1767866997000.png',
        7: 'images/panier_sucre_1767867012000.png'
    };

    const userReservations = state.reservations.filter(r => r.studentName === state.currentUser.name || r.studentName === 'Moi');

    contentView.innerHTML = `
        <div class="res-list">
            ${userReservations.length > 0 ? userReservations.map(res => {
        const basket = state.baskets.find(b => b.id === res.basketId);
        return `
                <div class="res-card" style="display: flex; gap: 1.5rem; align-items: center; background: white; padding: 1.5rem; border-radius: 15px; box-shadow: var(--shadow); margin-bottom: 1.5rem;">
                    <div class="res-image" style="width: 120px; height: 120px; border-radius: 12px; overflow: hidden; flex-shrink: 0;">
                        <img src="${basketImages[basket.id] || 'images/panier_complet_1767866946881.png'}" 
                             alt="${basket.title}" 
                             style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="res-info" style="flex: 1;">
                        <h4>${basket.title}</h4>
                        <p>${basket.store} • ${res.time}</p>
                        <span class="res-status">${res.status}</span>
                        <div style="margin-top: 0.5rem; color: var(--secondary); font-weight: 600; font-size: 1.1rem;">
                            ${basket.priceNew}€
                        </div>
                    </div>
                    <div class="res-qr" id="qr-${res.id}" style="flex-shrink: 0;"></div>
                </div>
                `
    }).join('') : '<p style="text-align:center; padding:2rem; color:var(--text-muted);">Aucune réservation pour le moment.</p>'}
        </div>
    `;

    // Triggering QR generation after HTML is set
    setTimeout(() => {
        state.reservations.forEach(res => {
            const el = document.getElementById(`qr-${res.id}`);
            if (el && typeof QRCode !== 'undefined') {
                new QRCode(el, {
                    text: res.id,
                    width: 100,
                    height: 100,
                    colorDark: "#1a5762",
                    colorLight: "#ffffff"
                });
            }
        });
    }, 100);
}

// Student View Handlers (Extended)
function renderStudentProfile() {
    const user = state.currentUser;
    contentView.innerHTML = `
        <div class="profile-container">
            <div class="profile-header-card" style="position: relative;">
                <button onclick="document.getElementById('avatar-upload').click()" class="btn-icon-small" style="position: absolute; top: 10px; right: 50px; background: white;" title="Changer la photo"><i class="fas fa-camera"></i></button>
                <button onclick="toggleEditProfile()" class="btn-icon-small" style="position: absolute; top: 10px; right: 10px; background: white;" title="Modifier profil"><i class="fas fa-edit"></i></button>
                <input type="file" id="avatar-upload" style="display: none;" accept="image/*" onchange="updateProfilePicture(this)">
                
                <img src="${user.avatar}" alt="Avatar" class="profile-avatar-large" id="current-avatar">
                <h3 id="profile-name-display">${user.name}</h3>
                <p id="profile-email-display">${user.email}</p>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 5px;"><i class="fas fa-phone"></i> <span id="profile-phone-display">${user.phone || 'Non renseigné'}</span></p>
                 <p style="font-size: 0.9rem; color: var(--text-muted);"><i class="fas fa-map-marker-alt"></i> <span id="profile-address-display">${user.address || 'Non renseigné'}</span></p>
                <div class="badge-tag" style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; display: inline-block; margin-top: 10px;">Étudiante Vérifiée ✅</div>
                
                <!-- Edit Form (Hidden by default) -->
                <form id="profile-edit-form" class="hidden" onsubmit="saveProfile(event)" style="margin-top: 15px; background: rgba(255,255,255,0.9); padding: 15px; border-radius: 10px;">
                    <div class="form-group-sm">
                        <label style="color:var(--text-dark); font-size:0.8rem;">Nom complet</label>
                        <input type="text" id="edit-name" value="${user.name}" required style="width: 100%; margin-bottom: 10px; padding: 8px; border-radius:8px; border:1px solid #ddd;">
                    </div>
                    <div class="form-group-sm">
                        <label style="color:var(--text-dark); font-size:0.8rem;">Email universitaire</label>
                        <input type="email" id="edit-email" value="${user.email}" required style="width: 100%; margin-bottom: 15px; padding: 8px; border-radius:8px; border:1px solid #ddd;">
                    </div>
                     <div class="form-group-sm">
                        <label style="color:var(--text-dark); font-size:0.8rem;">Téléphone</label>
                        <input type="tel" id="edit-phone" value="${user.phone || ''}" placeholder="06..." style="width: 100%; margin-bottom: 15px; padding: 8px; border-radius:8px; border:1px solid #ddd;">
                    </div>
                     <div class="form-group-sm">
                        <label style="color:var(--text-dark); font-size:0.8rem;">Adresse</label>
                        <input type="text" id="edit-address" value="${user.address || ''}" placeholder="Votre adresse" style="width: 100%; margin-bottom: 15px; padding: 8px; border-radius:8px; border:1px solid #ddd;">
                    </div>
                    <button type="submit" class="btn-primary" style="width: 100%; font-size: 0.9rem;">Enregistrer les modifications</button>
                </form>
            </div>

            <h4 style="margin: 1.5rem 0 1rem;">Mon Impact 🌱</h4>
            <div class="impact-grid">
                <div class="impact-card">
                    <span class="val">12</span>
                    <span class="lbl">Paniers sauvés</span>
                </div>
                <div class="impact-card">
                    <span class="val">48,50€</span>
                    <span class="lbl">Économisés</span>
                </div>
                <div class="impact-card">
                    <span class="val">18kg</span>
                    <span class="lbl">CO2 évité</span>
                </div>
                <div class="impact-card">
                    <span class="val">850L</span>
                    <span class="lbl">Eau préservée</span>
                </div>
            </div>

            <div class="profile-menu-list">
                <div class="profile-menu-item">
                    <i class="fas fa-star"></i>
                    <span class="text">Mes points fidélité (${user.points} pts)</span>
                    <i class="fas fa-chevron-right chevron"></i>
                </div>
                <div class="profile-menu-item">
                    <i class="fas fa-trophy"></i>
                    <span class="text">Mes récompenses</span>
                    <i class="fas fa-chevron-right chevron"></i>
                </div>
                <div class="profile-menu-item">
                    <i class="fas fa-heart"></i>
                    <span class="text">Magasins favoris</span>
                    <i class="fas fa-chevron-right chevron"></i>
                </div>
                <div class="profile-menu-item">
                    <i class="fas fa-credit-card"></i>
                    <span class="text">Moyens de paiement</span>
                    <i class="fas fa-chevron-right chevron"></i>
                </div>
                <div class="profile-menu-item">
                    <i class="fas fa-utensils"></i>
                    <span class="text">Préférences : ${user.preferences.join(', ')}</span>
                    <i class="fas fa-chevron-right chevron"></i>
                </div>
                <div class="profile-menu-item" onclick="renderStudentRecipes()">
                    <i class="fas fa-utensils"></i>
                    <span class="text">Recettes Anti-Gaspillage</span>
                    <i class="fas fa-chevron-right chevron"></i>
                </div>
                <div class="profile-menu-item" onclick="navigateTo('impact')">
                    <i class="fas fa-leaf"></i>
                    <span class="text">Mon Certificat d'Impact</span>
                    <i class="fas fa-chevron-right chevron"></i>
                </div>
                <div class="profile-menu-item" onclick="init()">
                    <i class="fas fa-sign-out-alt" style="color: #ef4444;"></i>
                    <span class="text" style="color: #ef4444;">Déconnexion</span>
                </div>
            </div>
        </div>
    `;
}

function toggleEditProfile() {
    const form = document.getElementById('profile-edit-form');
    form.classList.toggle('hidden');
}

function saveProfile(e) {
    e.preventDefault();
    const name = document.getElementById('edit-name').value;
    const email = document.getElementById('edit-email').value;
    const phone = document.getElementById('edit-phone').value;
    const address = document.getElementById('edit-address').value;

    if (name && email) {
        state.currentUser.name = name;
        state.currentUser.email = email;
        state.currentUser.phone = phone;
        state.currentUser.address = address;
        renderStudentProfile();
        // Since profile is re-rendered, form is hidden by default.
        // Optionally show success message
        alert('Profil mis à jour !');
    }
}

function updateProfilePicture(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            state.currentUser.avatar = e.target.result;
            document.getElementById('current-avatar').src = e.target.result;
            // Also update sidebar avatar if exists
            const sidebarAvatar = document.querySelector('.logo-image');
            if (sidebarAvatar) sidebarAvatar.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function renderStudentRecipes() {
    contentView.innerHTML = `
        <div class="student-recipes">
            <h3 style="margin-bottom: 1.5rem;">Recettes Anti-Gaspi 🍳</h3>
            <div style="display: grid; gap: 1.5rem;">
                ${state.recipes.map(recipe => `
                    <div class="glass-card" style="padding: 1.5rem;">
                        <h4 style="color: var(--primary); margin-bottom: 0.5rem;">${recipe.title}</h4>
                        <div class="badge-tag" style="background: #e0f2fe; color: var(--secondary); margin-bottom: 1rem; display: inline-block; padding: 5px 10px; border-radius: 15px; font-size: 0.8rem;">${recipe.tag}</div>
                        <p style="color: var(--text-dark); font-size: 0.95rem; line-height: 1.5;">${recipe.desc}</p>
                    </div>
                `).join('')}
            </div>
            <button class="btn-primary" style="margin-top: 2rem; width: 100%;" onclick="navigateTo('profile')">Retour au profil</button>
        </div>
    `;
}

function renderStudentImpact() {
    contentView.innerHTML = `
        <div class="impact-detailed">
            <h3>Tableau de bord écologique 🌍</h3>
            <div class="chart-box glass-card" style="margin-top: 1rem; padding: 20px; background: white; border-radius: 20px; box-shadow: var(--shadow);">
                <h4 style="margin-bottom: 20px;">Ton économie de CO2 cumulée</h4>
                <div class="mock-chart" style="display: flex; align-items: flex-end; gap: 10px; height: 150px; margin-top: 20px;">
                    <div class="bar" style="height: 20%; background: var(--secondary); flex: 1; border-radius: 5px;"></div>
                    <div class="bar" style="height: 40%; background: var(--secondary); flex: 1; border-radius: 5px;"></div>
                    <div class="bar" style="height: 55%; background: var(--secondary); flex: 1; border-radius: 5px;"></div>
                    <div class="bar" style="height: 85%; background: var(--primary); flex: 1; border-radius: 5px;"></div>
                </div>
            </div>
            
            <div class="badges-row" style="display: flex; gap: 15px; margin-top: 2rem; overflow-x: auto; padding-bottom: 10px;">
                <div class="badge-item" style="min-width: 90px; text-align: center;">
                    <div style="font-size: 2rem; background: #fef9c3; border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; margin: 0 auto 5px;">🌱</div>
                    <span style="font-size: 0.75rem; font-weight: 600;">Débutant</span>
                </div>
                <div class="badge-item" style="min-width: 90px; text-align: center;">
                    <div style="font-size: 2rem; background: #dcfce7; border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; margin: 0 auto 5px;">♻️</div>
                    <span style="font-size: 0.75rem; font-weight: 600;">Sauveur</span>
                </div>
                <div class="badge-item" style="min-width: 90px; text-align: center; opacity: 0.3;">
                    <div style="font-size: 2rem; background: #e2e8f0; border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; margin: 0 auto 5px;">🌳</div>
                    <span style="font-size: 0.75rem; font-weight: 600;">Expert</span>
                </div>
            </div>

            <div class="impact-stats-list" style="margin-top: 2rem;">
                <div class="stat-row" style="display: flex; justify-content: space-between; padding: 1rem; background: white; border-radius: 12px; margin-bottom: 0.5rem; box-shadow: var(--shadow);">
                    <span>🏙️ Équivalent repas</span>
                    <span style="font-weight: 700;">34 repas</span>
                </div>
                <div class="stat-row" style="display: flex; justify-content: space-between; padding: 1rem; background: white; border-radius: 12px; margin-bottom: 0.5rem; box-shadow: var(--shadow);">
                    <span>🌳 Arbres sauvés</span>
                    <span style="font-weight: 700;">2.4 arbres</span>
                </div>
            </div>
        </div>
    `;
}

// Event Listeners
function setupEventListeners() {
    menuToggle.onclick = () => {
        sidebar.classList.toggle('hidden');
    };

    aiToggle.onclick = () => {
        aiChatWindow.classList.toggle('hidden');
    };

    closeChat.onclick = () => {
        aiChatWindow.classList.add('hidden');
    };

    sendMsgBtn.onclick = sendMessage;
    chatInput.onkeypress = (e) => {
        if (e.key === 'Enter') sendMessage();
    };
}

function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage('user', text);
    chatInput.value = '';

    // Advanced AI Response simulation
    setTimeout(() => {
        let response = "Bonjour ! Je suis l'IA de JustEcoBox. Comment puis-je vous aider aujourd'hui ? 🌱";
        const lowerText = text.toLowerCase();

        if (lowerText.includes('bonjour') || lowerText.includes('salut')) {
            response = "Salut ! Prêt à sauver des paniers aujourd'hui ? 🥗";
        } else if (lowerText.includes('étudiant')) {
            response = "Les étudiants adorent les offres de fin de journée. 💡 Conseil : Proposez des paniers 'Surprise' après 18h, c'est ce qui marche le mieux !";
        } else if (lowerText.includes('panier') || lowerText.includes('stock')) {
            response = `Actuellement, vous avez ${state.baskets.filter(b => b.active).length} types de paniers en ligne. Le "Panier Fraîcheur" est très populaire ! Vérifiez vos stocks.`;
        } else if (lowerText.includes('prix') || lowerText.includes('coût')) {
            response = "Pour attirer plus de monde, essayez de garder un prix autour de 3-4€. C'est le budget idéal pour un étudiant.";
        } else if (lowerText.includes('merci')) {
            response = "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. À bientôt ! 👋";
        }

        appendMessage('ai', response);
    }, 1000);
}

function appendMessage(role, text) {
    const msg = document.createElement('div');
    msg.className = `message ${role}`;
    msg.innerText = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ========== NOUVELLES INTERFACES ADMIN ==========

function renderClients() {
    contentView.innerHTML = `
        <div class="clients-manager">
            <div class="section-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h3>Gestion des Clients</h3>
                <div style="display: flex; gap: 1rem;">
                    <input type="text" placeholder="Rechercher un client..." style="padding: 0.7rem; border-radius: 10px; border: 1px solid #e2e8f0; width: 300px;">
                    <button class="btn-primary" style="padding: 0.7rem 1.5rem;">Exporter (CSV)</button>
                </div>
            </div>
            
            <div class="stats-row" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem;">
                <div class="stat-card glass-card">
                    <h4>Total Clients</h4>
                    <p style="font-size: 2rem; font-weight: 700; color: var(--primary);">850</p>
                </div>
                <div class="stat-card glass-card">
                    <h4>Nouveaux (30j)</h4>
                    <p style="font-size: 2rem; font-weight: 700; color: var(--secondary);">124</p>
                </div>
                <div class="stat-card glass-card">
                    <h4>Clients VIP</h4>
                    <p style="font-size: 2rem; font-weight: 700; color: #9333ea;">45</p>
                </div>
                <div class="stat-card glass-card">
                    <h4>Taux de rétention</h4>
                    <p style="font-size: 2rem; font-weight: 700; color: #16a34a;">87%</p>
                </div>
            </div>
            
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>Email</th>
                        <th>Paniers</th>
                        <th>Total dépensé</th>
                        <th>Dernière visite</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alice Martin</td>
                        <td>alice.m@univ-paris.fr</td>
                        <td>12</td>
                        <td>48,50€</td>
                        <td>Aujourd'hui</td>
                        <td><span class="status-pill success">VIP</span></td>
                        <td>
                            <button class="btn-icon"><i class="fas fa-eye"></i></button>
                            <button class="btn-icon"><i class="fas fa-envelope"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>Marc Durand</td>
                        <td>marc.d@univ-paris.fr</td>
                        <td>5</td>
                        <td>22,00€</td>
                        <td>Il y a 2 jours</td>
                        <td><span class="status-pill" style="background: #dbeafe; color: #2563eb;">Actif</span></td>
                        <td>
                            <button class="btn-icon"><i class="fas fa-eye"></i></button>
                            <button class="btn-icon"><i class="fas fa-envelope"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function renderPromotions() {
    contentView.innerHTML = `
        <div class="promotions-manager">
            <div class="section-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h3>Gestion des Promotions</h3>
                <button class="btn-primary" onclick="alert('Créer une promotion')"><i class="fas fa-plus"></i> Nouvelle promotion</button>
            </div>
            
            <div class="promo-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
                <div class="promo-card glass-card" style="padding: 2rem; border-left: 4px solid var(--secondary);">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                        <div>
                            <h4 style="font-size: 1.3rem; margin-bottom: 0.5rem;">WELCOME10</h4>
                            <p style="color: var(--text-muted);">-10% pour les nouveaux clients</p>
                        </div>
                        <span class="status-pill success">Active</span>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1.5rem;">
                        <div>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Utilisations</p>
                            <p style="font-size: 1.5rem; font-weight: 700;">45</p>
                        </div>
                        <div>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Valide jusqu'au</p>
                            <p style="font-size: 1rem; font-weight: 600;">31/12/2026</p>
                        </div>
                        <div>
                            <button class="btn-icon-muted"><i class="fas fa-edit"></i></button>
                            <button class="btn-icon-muted"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                </div>
                
                <div class="promo-card glass-card" style="padding: 2rem; border-left: 4px solid #9333ea;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                        <div>
                            <h4 style="font-size: 1.3rem; margin-bottom: 0.5rem;">STUDENT20</h4>
                            <p style="color: var(--text-muted);">-20% pour les étudiants</p>
                        </div>
                        <span class="status-pill success">Active</span>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1.5rem;">
                        <div>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Utilisations</p>
                            <p style="font-size: 1.5rem; font-weight: 700;">128</p>
                        </div>
                        <div>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Valide jusqu'au</p>
                            <p style="font-size: 1rem; font-weight: 600;">30/06/2026</p>
                        </div>
                        <div>
                            <button class="btn-icon-muted"><i class="fas fa-edit"></i></button>
                            <button class="btn-icon-muted"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 3rem;">
                <h4 style="margin-bottom: 1.5rem;">Campagnes Marketing Créées</h4>
                <div class="data-table">
                     <table>
                        <thead>
                            <tr>
                                <th style="padding:15px;">Campagne</th>
                                <th>Type</th>
                                <th>Statut</th>
                                <th>Envoyés</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:15px;">Promo Rentrée</td>
                                <td>Email</td>
                                <td><span class="status-pill success">Envoyé</span></td>
                                <td>1500</td>
                                <td>05/09/2025</td>
                            </tr>
                            <tr>
                                <td style="padding:15px;">Flash Soirée</td>
                                <td>Push Notif</td>
                                <td><span class="status-pill success">Envoyé</span></td>
                                <td>500</td>
                                <td>Hier</td>
                            </tr>
                        </tbody>
                     </table>
                </div>

                <h4 style="margin-top: 2rem; margin-bottom: 1.5rem;">Créer une nouvelle campagne</h4>
                <div class="form-container glass-card">
                    <form onsubmit="event.preventDefault(); alert('Campagne créée !');">
                        <div class="form-row">
                            <div class="form-group">
                                <label>Nom de la campagne</label>
                                <input type="text" placeholder="Ex: Promo Week-end">
                            </div>
                            <div class="form-group">
                                <label>Type</label>
                                <select>
                                    <option>Email</option>
                                    <option>Push Notification</option>
                                    <option>SMS</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea style="width:100%; padding:10px; border-radius:10px; border:1px solid #ddd; min-height:100px;" placeholder="Votre message..."></textarea>
                        </div>
                        <button class="btn-primary">Lancer la campagne</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function renderSettings() {
    contentView.innerHTML = `
        <div class="settings-page">
            <h3 style="margin-bottom: 2rem;">Paramètres du Magasin</h3>
            
            <div class="form-container glass-card" style="max-width: 800px;">
                <form onsubmit="event.preventDefault(); alert('Paramètres enregistrés !');">
                    <h4 style="margin-bottom: 1.5rem; color: var(--primary);">Informations générales</h4>
                    
                    <div class="form-group">
                        <label>Nom du magasin</label>
                        <input type="text" value="HyperFresh">
                    </div>
                    
                    <div class="form-group">
                        <label>Adresse</label>
                        <input type="text" value="12 Rue de la Bastille, 75011 Paris">
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Téléphone</label>
                            <input type="tel" value="01 23 45 67 89">
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" value="contact@hyperfresh.fr">
                        </div>
                    </div>
                    
                    <h4 style="margin: 2rem 0 1.5rem; color: var(--primary);">Horaires de retrait</h4>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Ouverture</label>
                            <input type="time" value="17:00">
                        </div>
                        <div class="form-group">
                            <label>Fermeture</label>
                            <input type="time" value="20:00">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>Zone de retrait</label>
                        <input type="text" value="Comptoir principal" placeholder="Ex: Comptoir principal, Rayon frais...">
                    </div>
                    
                    <h4 style="margin: 2rem 0 1.5rem; color: var(--primary);">Configuration JustEcoBox</h4>
                    
                    <div class="form-group">
                        <label>Capacité max réservations/heure</label>
                        <input type="number" value="10">
                    </div>
                    
                    <div class="form-group" style="margin-top: 1rem;">
                        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                            <input type="checkbox" checked>
                            <span>Activer les notifications automatiques</span>
                        </label>
                    </div>
                    
                    <div class="form-group" style="margin-top: 0.5rem;">
                        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                            <input type="checkbox" checked>
                            <span>Autoriser les réservations le week-end</span>
                        </label>
                    </div>
                    
                    <div style="display: flex; gap: 15px; margin-top: 2rem;">
                        <button type="button" class="btn-primary" style="background: #e2e8f0; color: var(--text-dark);">Annuler</button>
                        <button type="submit" class="btn-primary">Enregistrer les modifications</button>
                    </div>
                </form>
            </div>
        </div >
    `;
}

// ========== NOUVELLES INTERFACES ÉTUDIANT ==========

function renderFavorites() {
    contentView.innerHTML = `
    <div class="favorites-page">
            <h3 style="margin-bottom: 2rem;">Mes Magasins Favoris ❤️</h3>
            
            <div class="favorites-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
                <div class="favorite-card glass-card" style="padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                        <div>
                            <h4 style="font-size: 1.2rem; margin-bottom: 0.3rem;">HyperFresh</h4>
                            <p style="color: var(--text-muted); font-size: 0.9rem;"><i class="fas fa-map-marker-alt"></i> 12 Rue de la Bastille</p>
                        </div>
                        <button class="btn-icon-muted" style="color: #ef4444;"><i class="fas fa-heart"></i></button>
                    </div>
                    
                    <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                        <div style="flex: 1; text-align: center; padding: 0.7rem; background: #f8fafc; border-radius: 10px;">
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Paniers sauvés</p>
                            <p style="font-size: 1.3rem; font-weight: 700; color: var(--primary);">8</p>
                        </div>
                        <div style="flex: 1; text-align: center; padding: 0.7rem; background: #f8fafc; border-radius: 10px;">
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Distance</p>
                            <p style="font-size: 1.3rem; font-weight: 700; color: var(--secondary);">1.2km</p>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                        <button class="btn-primary" style="flex: 1; padding: 0.7rem;" onclick="navigateTo('explorer')">Voir les paniers</button>
                        <button class="btn-icon" style="padding: 0.7rem;"><i class="fas fa-directions"></i></button>
                    </div>
                    
                    <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e2e8f0;">
                        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.9rem;">
                            <input type="checkbox" checked>
                            <span>Notifier pour les nouveaux paniers</span>
                        </label>
                    </div>
                </div>
                
                <div class="favorite-card glass-card" style="padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                        <div>
                            <h4 style="font-size: 1.2rem; margin-bottom: 0.3rem;">Bio&Co République</h4>
                            <p style="color: var(--text-muted); font-size: 0.9rem;"><i class="fas fa-map-marker-alt"></i> 45 Av. de la République</p>
                        </div>
                        <button class="btn-icon-muted" style="color: #ef4444;"><i class="fas fa-heart"></i></button>
                    </div>
                    
                    <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                        <div style="flex: 1; text-align: center; padding: 0.7rem; background: #f8fafc; border-radius: 10px;">
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Paniers sauvés</p>
                            <p style="font-size: 1.3rem; font-weight: 700; color: var(--primary);">4</p>
                        </div>
                        <div style="flex: 1; text-align: center; padding: 0.7rem; background: #f8fafc; border-radius: 10px;">
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Distance</p>
                            <p style="font-size: 1.3rem; font-weight: 700; color: var(--secondary);">800m</p>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                        <button class="btn-primary" style="flex: 1; padding: 0.7rem;" onclick="navigateTo('explorer')">Voir les paniers</button>
                        <button class="btn-icon" style="padding: 0.7rem;"><i class="fas fa-directions"></i></button>
                    </div>
                    
                    <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e2e8f0;">
                        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.9rem;">
                            <input type="checkbox" checked>
                            <span>Notifier pour les nouveaux paniers</span>
                        </label>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 3rem; padding: 3rem; background: linear-gradient(135deg, #f8fafc 0%, #e8f5f0 100%); border-radius: var(--radius);">
                <i class="fas fa-heart" style="font-size: 3rem; color: var(--secondary); margin-bottom: 1rem;"></i>
                <h4 style="margin-bottom: 0.5rem;">Découvre de nouveaux magasins</h4>
                <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Explore les paniers disponibles et ajoute tes commerces préférés</p>
                <button class="btn-primary" onclick="navigateTo('explorer')">Explorer les paniers</button>
            </div>
        </div>
    `;
}

function renderRewards() {
    contentView.innerHTML = `
    <div class="rewards-page">
            <div class="rewards-header glass-card" style="padding: 2rem; margin-bottom: 2rem; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; text-align: center;">
                <h3 style="margin-bottom: 1rem; font-size: 2rem;">Mes Récompenses 🎁</h3>
                <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">450 points</div>
                <p style="opacity: 0.9;">Tu es au niveau <strong>Or</strong> 🏆</p>
                <div style="margin-top: 1.5rem; background: rgba(255,255,255,0.2); height: 10px; border-radius: 10px; overflow: hidden;">
                    <div style="width: 75%; height: 100%; background: white; border-radius: 10px;"></div>
                </div>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; opacity: 0.9;">Plus que 50 points pour atteindre le niveau Platine</p>
            </div>
            
            <h4 style="margin-bottom: 1.5rem;">Récompenses disponibles</h4>
            
            <div class="rewards-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                <div class="reward-card glass-card" style="padding: 1.5rem; text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🎟️</div>
                    <h4 style="margin-bottom: 0.5rem;">Panier Gratuit</h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">Obtiens un panier gratuit de ton choix</p>
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary); margin-bottom: 1rem;">500 points</div>
                    <button class="btn-primary" style="width: 100%;" disabled>Bientôt disponible</button>
                </div>
                
                <div class="reward-card glass-card" style="padding: 1.5rem; text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">💰</div>
                    <h4 style="margin-bottom: 0.5rem;">Réduction 5€</h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">5€ de réduction sur ta prochaine commande</p>
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary); margin-bottom: 1rem;">300 points</div>
                    <button class="btn-primary" style="width: 100%;" onclick="alert('Récompense débloquée !')">Débloquer</button>
                </div>
                
                <div class="reward-card glass-card" style="padding: 1.5rem; text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">⭐</div>
                    <h4 style="margin-bottom: 0.5rem;">Accès VIP</h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">Accès prioritaire aux nouveaux paniers pendant 1 mois</p>
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary); margin-bottom: 1rem;">200 points</div>
                    <button class="btn-primary" style="width: 100%;" onclick="alert('Récompense débloquée !')">Débloquer</button>
                </div>

                <div class="reward-card glass-card" style="padding: 1.5rem; text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">♻️</div>
                    <h4 style="margin-bottom: 0.5rem;">Badge Écolo</h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">Affiche ton engagement sur ton profil</p>
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary); margin-bottom: 1rem;">150 points</div>
                    <button class="btn-primary" style="width: 100%;" onclick="alert('Badge ajouté au profil !')">Débloquer</button>
                </div>
            </div>
    </div>`;
}

function renderRecyclingReturn() {
    contentView.innerHTML = `
        <div class="recycling-page">
             <div class="glass-card" style="padding: 2rem; max-width: 600px; margin: 0 auto; text-align: center;">
                <h3 style="margin-bottom: 1.5rem;">Retour d'Emballages ♻️</h3>
                <p style="margin-bottom: 2rem;">Rapportez vos emballages réutilisables en magasin et gagnez des points bonus !</p>
                
                <div style="margin-bottom: 2rem;">
                    <div style="width: 150px; height: 150px; margin: 0 auto; background: #f0fdf4; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px dashed var(--primary);">
                        <i class="fas fa-qrcode" style="font-size: 5rem; color: var(--primary);"></i>
                    </div>
                </div>

                <p style="font-weight: bold; margin-bottom: 1rem;">Votre Code Retour : <span style="font-size: 1.5rem; color: var(--secondary);">REC-7890</span></p>
                
                <div style="background: #f8fafc; padding: 1rem; border-radius: 10px; text-align: left; margin-top: 2rem;">
                    <h5 style="margin-bottom: 0.5rem;">Comment ça marche ?</h5>
                    <ol style="padding-left: 20px; color: var(--text-muted);">
                        <li>Nettoyez votre emballage</li>
                        <li>Rapportez-le au point de collecte du magasin</li>
                        <li>Scannez ce QR code à la borne</li>
                        <li>Gagnez <strong>10 points</strong> par emballage !</li>
                    </ol>
                </div>

                <button class="btn-primary" style="margin-top: 2rem; width: 100%;" onclick="navigateTo('rewards')">Voir mes points</button>
            </div>
        </div>
    `;
}
            
            <h4 style="margin-bottom: 1.5rem;">Comment gagner des points ?</h4>
            
            <div class="points-info" style="display: grid; gap: 1rem;">
                <div class="point-item glass-card" style="padding: 1.2rem; display: flex; align-items: center; gap: 1.5rem;">
                    <div style="width: 50px; height: 50px; border-radius: 50%; background: #dcfce7; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">🛒</div>
                    <div style="flex: 1;">
                        <h5 style="margin-bottom: 0.3rem;">Réserver un panier</h5>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Gagne 10 points à chaque réservation</p>
                    </div>
                    <div style="font-size: 1.3rem; font-weight: 700; color: var(--secondary);">+10</div>
                </div>
                
                <div class="point-item glass-card" style="padding: 1.2rem; display: flex; align-items: center; gap: 1.5rem;">
                    <div style="width: 50px; height: 50px; border-radius: 50%; background: #dbeafe; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">✅</div>
                    <div style="flex: 1;">
                        <h5 style="margin-bottom: 0.3rem;">Retrait à l'heure</h5>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Bonus si tu récupères ton panier à l'heure</p>
                    </div>
                    <div style="font-size: 1.3rem; font-weight: 700; color: var(--secondary);">+50</div>
                </div>
                
                <div class="point-item glass-card" style="padding: 1.2rem; display: flex; align-items: center; gap: 1.5rem;">
                    <div style="width: 50px; height: 50px; border-radius: 50%; background: #fef9c3; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">👥</div>
                    <div style="flex: 1;">
                        <h5 style="margin-bottom: 0.3rem;">Parrainer un ami</h5>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Invite tes amis et gagnez tous les deux des points</p>
                    </div>
                    <div style="font-size: 1.3rem; font-weight: 700; color: var(--secondary);">+100</div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 3rem; padding: 2rem; background: linear-gradient(135deg, #f8fafc 0%, #e8f5f0 100%); border-radius: var(--radius);">
                <h4 style="margin-bottom: 0.5rem;">Code parrainage</h4>
                <div style="display: inline-block; padding: 1rem 2rem; background: white; border-radius: 12px; font-size: 1.5rem; font-weight: 700; color: var(--primary); margin: 1rem 0;">ALICE2026</div>
                <p style="color: var(--text-muted);">Partage ce code avec tes amis et gagnez 100 points chacun</p>
                <button class="btn-primary" style="margin-top: 1rem;" onclick="alert('Code copié !')"><i class="fas fa-copy"></i> Copier le code</button>
            </div>
        </div >
    `;
}

// Start the app
init();
