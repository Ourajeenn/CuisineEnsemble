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
        { id: 1, title: 'Panier Fraîcheur', store: 'HyperFresh', priceOld: 9.99, priceNew: 3.99, type: 'Frais', emoji: '??', active: true, quantity: 5 },
        { id: 2, title: 'Panier Boulangerie', store: 'HyperFresh', priceOld: 5.00, priceNew: 2.50, type: 'Épicerie', emoji: '??', active: true, quantity: 8 },
        { id: 3, title: 'Panier Complet', store: 'HyperFresh', priceOld: 14.99, priceNew: 4.99, type: 'Complet', emoji: '??', active: true, quantity: 2 },
        { id: 4, title: 'Panier Sushi Mix', store: 'Sushi Shop', priceOld: 18.00, priceNew: 6.50, type: 'Traiteur', emoji: '??', active: true, quantity: 3 },
        { id: 5, title: 'Panier Pizza', store: 'Pizza Hut', priceOld: 12.00, priceNew: 4.00, type: 'Traiteur', emoji: '??', active: true, quantity: 4 },
        { id: 6, title: 'Panier Fruits Bio', store: 'Bio C Bon', priceOld: 15.00, priceNew: 5.00, type: 'Frais', emoji: '??', active: true, quantity: 6 },
        { id: 7, title: 'Panier Pâtisserie', store: 'Paul', priceOld: 8.00, priceNew: 3.50, type: 'Sucré', emoji: '??', active: true, quantity: 2 },
        { id: 8, title: 'Yaourts Fermiers', store: 'HyperFresh', priceOld: 4.50, priceNew: 2.00, type: 'Frais', emoji: '??', active: true, quantity: 10 },
        { id: 9, title: 'Pack Lait Bio', store: 'HyperFresh', priceOld: 6.00, priceNew: 3.00, type: 'Frais', emoji: '??', active: true, quantity: 5 },
        { id: 10, title: 'Fromages Affinés', store: 'Fromagerie Claire', priceOld: 12.00, priceNew: 5.50, type: 'Frais', emoji: '??', active: true, quantity: 3 },
        { id: 11, title: 'Mix Fruits Rouges', store: 'HyperFresh', priceOld: 8.00, priceNew: 4.00, type: 'Frais', emoji: '??', active: true, quantity: 4, image: 'images/fruits_rouges.jpg' },
        { id: 12, title: 'Fruits de la Passion', store: 'HyperFresh', priceOld: 7.00, priceNew: 3.50, type: 'Frais', emoji: '??', active: true, quantity: 6, image: 'images/passion.jpg' },
        { id: 13, title: 'Panier Mix Fruits', store: 'HyperFresh', priceOld: 10.00, priceNew: 5.00, type: 'Frais', emoji: '??', active: true, quantity: 3, image: 'images/mix_fruits.jpg' },
        { id: 14, title: 'Panier Kiwis Vitamine', store: 'HyperFresh', priceOld: 6.50, priceNew: 3.00, type: 'Frais', emoji: '??', active: true, quantity: 7, image: 'images/kiwi.jpg' },
        { id: 15, title: 'Panier Exotique Pitaya', store: 'HyperFresh', priceOld: 9.00, priceNew: 4.50, type: 'Frais', emoji: '??', active: true, quantity: 2, image: 'images/pitaya.jpg' }
    ],
    recipes: [
        {
            title: "?? Poêlée “fin de frigo” paysanne",
            desc: "La recette des grands-mères. Ingrédients : Légumes fatigués, 2 œufs, reste de fromage. Préparation : Coupe tout. Fais revenir. Ajoute œufs/fromage. Mange.",
            tag: "Zéro gaspillage, 100 % réconfort"
        },
        {
            title: "?? Pain perdu salé au fromage & légumes",
            desc: "Ingrédients : Pain rassis, lait, œuf, restes légumes, fromage. Préparation : Bats œuf+lait. Trempe pain. Garnis. Poêle bien chaude.",
            tag: "Petit budget. Grand respect du pain"
        },
        {
            title: "?? Gâteau express aux fruits trop mûrs",
            desc: "Ingrédients : Fruits trop mûrs, 2 œufs, 80g sucre, 150g farine, levure. Préparation : Écrase fruits. Mélange tout. Four 180°C 30min.",
            tag: "Dessert humble. Conscience propre"
        }
    ],
    reservations: [
        { id: 'JEB1245', basketId: 1, studentName: 'Alice Martin', status: 'confirmé', time: '18h-19h' },
        { id: 'JEB1198', basketId: 2, studentName: 'Marc Durand', status: 'en attente', time: '17h-20h' },
        { id: 'JEB1300', basketId: 4, studentName: 'Sophie L.', status: 'récupéré', time: 'Hier' }
    ],
    clients: [
        { id: 1, name: 'Alice Martin', email: 'alice.m@email.com', basketsSaved: 12, totalSpent: 48.50, status: 'VIP', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice' },
        { id: 2, name: 'Marc Durand', email: 'marc.d@email.com', basketsSaved: 5, totalSpent: 18.20, status: 'Actif', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marc' },
        { id: 3, name: 'Sophie L.', email: 'sophie.l@email.com', basketsSaved: 2, totalSpent: 7.50, status: 'Nouveau', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie' }
    ],
    promotions: [
        { id: 1, title: 'Promo Flash "Zéro Waste"', desc: '-50% sur les paniers de fruits après 19h.', status: 'Active', usage: 128, expiry: '30/06' },
        { id: 2, title: 'Offre Bienvenue', desc: 'Premier panier à 2€ pour les nouveaux étudiants.', status: 'Active', usage: 256, expiry: '31/12' }
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
        { id: 'stores-list', label: 'Liste des Magasins', icon: 'fa-store' },
        { id: 'promotions', label: 'Promotions', icon: 'fa-tags' },
        { id: 'faq', label: 'FAQ Aide', icon: 'fa-question-circle' },
        { id: 'about', label: 'Notre Histoire', icon: 'fa-info-circle' },
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
        { id: 'referral', label: 'Parrainage', icon: 'fa-users' },
        { id: 'faq', label: 'Aide & FAQ', icon: 'fa-question-circle' },
        { id: 'about', label: 'Notre Histoire', icon: 'fa-info-circle' },
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
    if (state.role === null) {
        renderLogin();
        // Hide preloader after a short delay on first load
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.style.opacity = '0';
                setTimeout(() => preloader.style.display = 'none', 500);
            }
        }, 1500);
    } else {
        renderSidebar();
        renderPage(state.currentPage);
        setupEventListeners();

        // Update body class for styling
        document.body.className = state.role === 'student' ? 'student-mode' : 'light-mode';

        // Ensure preloader is hidden even if refreshing internal page
        const preloader = document.getElementById('preloader');
        if (preloader) preloader.style.display = 'none';
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
    pageTitle.innerText = menuItem ? menuItem.label : 'CuisineEnsemble';

    // Add reveal animation
    contentView.classList.remove('reveal');
    void contentView.offsetWidth; // Trigger reflow
    contentView.classList.add('reveal');

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
        case 'faq': renderFAQ(); break;
        case 'referral': renderReferral(); break;
        case 'about': renderAbout(); break;
        case 'stores': renderStoresList(); break;
        case 'stores-list': renderStoresList(); break;
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
                <img src="logo.png" alt="CuisineEnsemble" style="width: 120px; height: 120px; object-fit: contain; margin-bottom: 1rem;" />
                <h1 style="color: var(--primary); font-size: 2.5rem; margin-bottom: 0.5rem;">Bienvenue sur CuisineEnsemble</h1>
                <p style="color: var(--text-muted); font-size: 1.1rem;">Choisissez votre profil pour continuer</p>
            </div>
            
            <div class="role-cards" style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center;">
                <div class="role-card glass-card" onclick="loginAs('student')" style="cursor: pointer; padding: 2.5rem; width: 280px; transition: transform 0.3s; border: 2px solid transparent;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">??</div>
                    <h3 style="color: var(--primary); margin-bottom: 0.5rem;">Étudiant</h3>
                    <p style="color: var(--text-muted);">Je veux sauver des paniers à petit prix</p>
                </div>
                
                <div class="role-card glass-card" onclick="loginAs('admin')" style="cursor: pointer; padding: 2.5rem; width: 280px; transition: transform 0.3s; border: 2px solid transparent;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">??</div>
                    <h3 style="color: var(--primary); margin-bottom: 0.5rem;">Commerçant</h3>
                    <p style="color: var(--text-muted);">Je veux valoriser mes invendus</p>
                </div>
            </div>

            <button class="btn-primary" style="margin-top: 1rem; width: auto; padding: 0.8rem 2rem; border-radius: 30px; font-size: 0.9rem;" onclick="window.location.href='home.html'">
                <i class="fas fa-home"></i> Retour à l'accueil
            </button>
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
                <img src="logo.png" alt="CuisineEnsemble" style="width: 100px; height: 100px; object-fit: contain; margin-bottom: 1rem;" />
                <h2 style="color: var(--primary);">Connexion Étudiant</h2>
            </div>
            
            <form onsubmit="event.preventDefault(); completeLogin('student');" class="glass-card" style="padding: 2rem; width: 100%; max-width: 400px; text-align: left;">
                <div class="form-group">
                    <label>Email universitaire</label>
                    <input type="email" value="alice.martin@univ-paris.fr" required />
                </div>
                <div class="form-group">
                    <label>Mot de passe</label>
                    <input type="password" value="password123" required />
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

    contentView.innerHTML = wrapResponsive(`
        <div class="dashboard-stats-modern">
            <div class="stat-row-long glass-card">
                <div class="stat-label-box">
                    <span>Chiffre d'affaires</span>
                </div>
                <div class="stat-value">${totalRevenue.toFixed(2)}€</div>
                <div class="trend positive"><i class="fas fa-arrow-up"></i> +12%</div>
            </div>

            <div class="stat-row-long glass-card">
                <div class="stat-label-box">
                    <span>CO2 Évité</span>
                </div>
                <div class="stat-value">${co2Saved}kg</div>
                <div class="trend positive" style="color: var(--primary);"><i class="fas fa-leaf"></i> +5%</div>
            </div>

            <div class="stat-row-long glass-card">
                <div class="stat-label-box">
                    <span>Réservations</span>
                </div>
                <div class="stat-value">${totalReservations}</div>
                <div class="trend neutral"><i class="fas fa-minus"></i> Stable</div>
            </div>

            <div class="stat-row-long glass-card">
                <div class="stat-label-box">
                    <span>Paniers Actifs</span>
                </div>
                <div class="stat-value">${activeBaskets}</div>
                <div class="trend negative">${outOfStock} en rupture</div>
            </div>
        </div>

        <div class="dashboard-actions-list" style="display: flex; flex-direction: column; gap: 0.8rem; margin-top: 3rem;">
            <div class="action-item-modern" onclick="navigateTo('add-basket')" style="display: flex; align-items: flex-start; gap: 15px; cursor: pointer; padding: 15px; transition: all 0.3s; border-radius: 12px;">
                <div style="width: 24px; font-size: 1.5rem; color: #1e293b;"><i class="fas fa-plus-circle"></i></div>
                <div>
                    <h4 style="margin:0; font-weight: 700; color: #1e293b;">Ajouter un panier</h4>
                    <p style="margin:2px 0 0 0; font-size: 0.9rem; color: var(--text-muted);">Créer une nouvelle offre</p>
                </div>
            </div>
            
            <div class="action-item-modern" onclick="navigateTo('active-baskets')" style="display: flex; align-items: flex-start; gap: 15px; cursor: pointer; padding: 15px; transition: all 0.3s; border-radius: 12px;">
                <div style="width: 24px; font-size: 1.5rem; color: #1e293b;"><i class="fas fa-boxes"></i></div>
                <div>
                    <h4 style="margin:0; font-weight: 700; color: #1e293b;">Gérer les stocks</h4>
                    <p style="margin:2px 0 0 0; font-size: 0.9rem; color: var(--text-muted);">Modifier ou supprimer des paniers</p>
                </div>
            </div>

            <div class="action-item-modern" onclick="navigateTo('promotions')" style="display: flex; align-items: flex-start; gap: 15px; cursor: pointer; padding: 15px; transition: all 0.3s; border-radius: 12px;">
                <div style="width: 24px; font-size: 1.5rem; color: #1e293b;"><i class="fas fa-bullhorn"></i></div>
                <div>
                    <h4 style="margin:0; font-weight: 700; color: #1e293b;">Campagne Marketing</h4>
                    <p style="margin:2px 0 0 0; font-size: 0.9rem; color: var(--text-muted);">Lancer une promo flash</p>
                </div>
            </div>
        </div>
        
        <div class="glass-card" style="margin-top: 2rem; padding: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h4>État des stocks en temps réel</h4>
                <button class="btn-primary" onclick="renderAdminDashboard()" style="padding: 5px 15px; font-size: 0.8rem;"><i class="fas fa-sync"></i> Actualiser</button>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
                ${state.baskets.map(b => `
                    <div style="padding: 10px; background: ${b.quantity === 0 ? '#fee2e2' : '#f0fdf4'}; border-radius: 8px; border: 1px solid ${b.quantity === 0 ? '#fca5a5' : '#86efac'}; transition: transform 0.2s; cursor: pointer;">
                        <div style="font-weight: bold; ${b.quantity === 0 ? 'color: #991b1b;' : 'color: #166534;'}">${b.emoji} ${b.title}</div>
                        <div style="font-size: 0.9rem; display: flex; justify-content: space-between; align-items: center; margin-top: 5px;">
                            <span>${b.quantity === 0 ? 'Rupture ?' : 'En stock: ' + b.quantity + ' ?'}</span>
                            <div style="display: flex; gap: 5px;">
                                <button onclick="event.stopPropagation(); b.quantity++; renderAdminDashboard();" style="border:none; background:white; border-radius:4px; width:20px; height:20px; cursor:pointer;">+</button>
                                <button onclick="event.stopPropagation(); if(b.quantity>0) b.quantity--; renderAdminDashboard();" style="border:none; background:white; border-radius:4px; width:20px; height:20px; cursor:pointer;">-</button>
                            </div>
                        </div>
                    </div>
`).join('')}
            </div>
        </div>

        <div class="glass-card" style="margin-top: 2rem; padding: 1.5rem;">
            <h4 style="margin-bottom: 1rem;">Activités récentes</h4>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                ${state.reservations.slice(-3).reverse().map(res => `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee;">
                        <div>
                            <span style="font-weight: 600;">${res.studentName}</span> a réservé un <span style="color: var(--primary);">${state.baskets.find(b => b.id === res.basketId)?.title || 'Panier'}</span>
                        </div>
                        <span style="font-size: 0.8rem; color: var(--text-muted);">${res.time}</span>
                    </div>
`).join('')}
            </div>
        </div>
`);
}

function renderStats() {
    contentView.innerHTML = wrapResponsive(`
        <div class="stats-dashboard">
            <h3 style="margin-bottom: 2rem;">Statistiques & Analyses ??</h3>
            
            <div class="responsive-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
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
                            <li style="margin-bottom: 5px;"><span style="color: var(--primary);">¦</span> Frais (40%)</li>
                            <li style="margin-bottom: 5px;"><span style="color: var(--secondary);">¦</span> Épicerie (30%)</li>
                            <li><span style="color: #fbbf24;">¦</span> Traiteur (30%)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="responsive-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                 <div class="glass-card" style="padding: 1.5rem;">
                    <h4 style="margin-bottom: 1rem;">Clients Fidèles ??</h4>
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
                    <h4 style="margin-bottom: 1rem;">?? Dates Courtes (Urgent)</h4>
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
`);
}

function renderReservations() {
    contentView.innerHTML = wrapResponsive(`
        <div class="reservation-manager">
            <h3 style="margin-bottom: 2rem;">Gestion des Réservations ??</h3>
            <div class="glass-card" style="overflow-x: auto; border-radius: 20px;">
                <table class="data-table" style="width: 100%; border-collapse: collapse; min-width: 600px;">
                    <thead>
                        <tr style="background: rgba(26, 87, 98, 0.05);">
                            <th style="padding: 1.2rem; text-align: left;">ID</th>
                            <th style="padding: 1.2rem; text-align: left;">Étudiant</th>
                            <th style="padding: 1.2rem; text-align: left;">Panier</th>
                            <th style="padding: 1.2rem; text-align: left;">Retrait</th>
                            <th style="padding: 1.2rem; text-align: left;">Statut</th>
                            <th style="padding: 1.2rem; text-align: center;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${state.reservations.map(res => {
        const basket = state.baskets.find(b => b.id === res.basketId);
        return `
                                <tr style="border-top: 1px solid #eee;">
                                    <td style="padding: 1.2rem;">${res.id}</td>
                                    <td style="padding: 1.2rem;">${res.studentName}</td>
                                    <td style="padding: 1.2rem;">${basket ? basket.title : 'N/A'}</td>
                                    <td style="padding: 1.2rem;">${res.time}</td>
                                    <td style="padding: 1.2rem;"><span class="status-pill ${res.status === 'confirmé' ? 'success' : 'warning'}">${res.status}</span></td>
                                    <td style="padding: 1.2rem; text-align: center;">
                                        <button class="btn-icon" onclick="confirmPickup('${res.id}')"><i class="fas fa-check"></i></button>
                                        <button class="btn-icon"><i class="fas fa-times"></i></button>
                                    </td>
                                </tr>
`}).join('')}
                    </tbody>
                </table>
            </div>
        </div>
`);
}

function renderAddBasket() {
    contentView.innerHTML = wrapResponsive(`
        <div class="form-container glass-card" style="max-width: 800px; margin: 0 auto;">
            <h3 style="margin-bottom: 2rem; color: var(--primary);">?? Configurer un nouveau panier</h3>
            <form onsubmit="addNewBasket(event)">
                <div class="form-row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
                    <div class="form-group">
                        <label>Type de panier</label>
                        <select id="new-basket-type" required>
                            <option value="Frais">?? Fraîcheur</option>
                            <option value="Épicerie">?? Boulangerie</option>
                            <option value="Complet">?? Complet (Mix)</option>
                            <option value="Traiteur">?? Traiteur/Sushi</option>
                            <option value="Sucré">?? Pâtisserie</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Nom personnalisé</label>
                        <input id="new-basket-title" type="text" placeholder="Ex: Panier Surprise Soir" required />
                    </div>
                </div>

                <div class="form-group">
                    <label>Description du contenu estimé</label>
                    <textarea id="new-basket-desc" style="width:100%; padding:10px; border-radius:10px; border:1px solid #ddd; min-height:80px;" placeholder="Ex: 3 pâtisseries du jour, 1 baguette..."></textarea>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Prix Original (€)</label>
                        <input id="new-basket-old-price" type="number" step="0.01" placeholder="15.00" required />
                    </div>
                    <div class="form-group">
                        <label>Prix JustEco (€)</label>
                        <input id="new-basket-new-price" type="number" step="0.01" placeholder="4.99" required />
                    </div>
                    <div class="form-group">
                        <label>Quantité disponible</label>
                        <input id="new-basket-qty" type="number" placeholder="5" required />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Début retrait</label>
                        <input type="time" value="18:00" />
                    </div>
                    <div class="form-group">
                        <label>Fin retrait</label>
                        <input type="time" value="20:00" />
                    </div>
                </div>

                <div style="display: flex; gap: 15px; margin-top: 2rem;">
                    <button type="button" class="btn-primary" style="background: #e2e8f0; color: var(--text-dark);" onclick="navigateTo('dashboard')">Annuler</button>
                    <button type="submit" class="btn-primary">Publier le panier</button>
                </div>
            </form>
        </div>
`);
}

function addNewBasket(e) {
    e.preventDefault();
    const typeMap = { 'Frais': '??', 'Épicerie': '??', 'Complet': '??', 'Traiteur': '??', 'Sucré': '??' };
    const type = document.getElementById('new-basket-type').value;

    const newBasket = {
        id: Date.now(),
        title: document.getElementById('new-basket-title').value,
        store: 'HyperFresh',
        priceOld: parseFloat(document.getElementById('new-basket-old-price').value),
        priceNew: parseFloat(document.getElementById('new-basket-new-price').value),
        type: type,
        emoji: typeMap[type] || '??',
        active: true,
        quantity: parseInt(document.getElementById('new-basket-qty').value)
    };

    state.baskets.push(newBasket);
    alert('Panier créé et publié avec succès !');
    navigateTo('active-baskets');
}

function renderActiveBaskets() {
    contentView.innerHTML = wrapResponsive(`
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <h3>Vos paniers en ligne (${state.baskets.length})</h3>
            <button class="btn-primary" onclick="navigateTo('add-basket')"><i class="fas fa-plus"></i> Nouveau</button>
        </div>
        <div class="basket-list">
            ${state.baskets.map(basket => `
                <div class="basket-item card" style="display: flex; align-items: center; justify-content: space-between; padding: 1.5rem; margin-bottom: 1rem;">
                    <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
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
                        <button class="btn-icon-muted" title="Supprimer" onclick="if(confirm('Supprimer ce panier ?')) {state.baskets = state.baskets.filter(b => b.id !== ${basket.id}); renderActiveBaskets();}"><i class="fas fa-trash"></i></button>
                        <label class="switch" title="Activer/Désactiver">
                            <input type="checkbox" ${basket.active ? 'checked' : ''} onchange="state.baskets.find(b = /> b.id === ${basket.id}).active = this.checked">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
`).join('')}
        </div>
`);
}

// Student View Handlers
function renderStudentHome() {
    const userName = state.currentUser.name.split(' ')[0];
    const pendingOrders = state.reservations.filter(r => r.status === 'en attente').length;

    contentView.innerHTML = wrapResponsive(`
        <div class="student-home-container">
            <div class="welcome-header glass-card" style="padding: 2.5rem; background: linear-gradient(135deg, var(--primary), #34d399); color: white; border-radius: 30px; text-align: left; margin-bottom: 2rem; position: relative; overflow: hidden; box-shadow: 0 20px 40px rgba(26, 87, 98, 0.2);">
                <div style="position: relative; z-index: 2;">
                    <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem; font-weight: 800;">Bonjour ${userName} ! ??</h1>
                    <p style="font-size: 1.1rem; opacity: 0.95;">Il y a ${state.baskets.filter(b => b.active).length} paniers disponibles autour de vous aujourd'hui.</p>
                    <button class="btn-primary" style="margin-top: 1.5rem; background: white; color: var(--primary); border: none; font-weight: 800; width: auto; padding: 12px 30px; border-radius: 50px;" onclick="navigateTo('explorer')">
                        <i class="fas fa-store"></i> Voir les offres HyperFresh
                    </button>
                </div>
                <div class="hide-mobile" style="position: absolute; right: -20px; bottom: -30px; font-size: 12rem; opacity: 0.15; transform: rotate(-15deg);">??</div>
            </div>

            <div style="margin-bottom: 3rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <h3 style="font-weight: 800; color: #1e293b;">Objectif de la semaine ??</h3>
                    <span style="font-size: 0.85rem; color: var(--primary); font-weight: 700; background: rgba(26, 87, 98, 0.1); padding: 5px 12px; border-radius: 20px;">3/5 Paniers sauvés</span>
                </div>
                <div class="glass-card stat-row-long" style="padding: 1.5rem; border-radius: 25px; display: flex; align-items: center; gap: 20px; border-left: 8px solid var(--secondary); background: white;">
                    <div style="font-size: 2.5rem; background: #f0fdf4; width: 70px; height: 70px; display: flex; align-items: center; justify-content: center; border-radius: 20px;">??</div>
                    <div style="flex: 1;">
                        <h4 style="margin: 0; font-size: 1.1rem; color: #1e293b; font-weight: 700;">Sauveur local parisien</h4>
                        <p style="margin: 4px 0 0 0; font-size: 0.85rem; color: var(--text-muted); line-height: 1.4;">Plus que 2 paniers cette semaine pour débloquer le badge <strong>"Protecteur du 5ème"</strong> et gagner 50 points bonus !</p>
                        <div style="width: 100%; height: 8px; background: #f1f5f9; border-radius: 4px; margin-top: 15px; overflow: hidden;">
                            <div style="width: 60%; height: 100%; background: linear-gradient(90deg, var(--secondary), #4ade80); border-radius: 4px; transition: width 1s ease-out;"></div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 style="margin-bottom: 1.5rem;">Vite, avant qu'il ne soit trop tard ! ?</h3>
            <div class="dashboard-grid" style="margin-bottom: 3rem;">
                ${state.baskets.filter(b => b.active && (b.id === 3 || b.id === 7 || b.id === 15)).map(basket => `
                    <div class="urgent-card glass-card" style="padding: 1rem; display: flex; align-items: center; gap: 1rem; border-left: 4px solid #ef4444; cursor: pointer;" onclick="reserveBasket(${basket.id})">
                        <div style="width: 70px; height: 70px; border-radius: 15px; overflow: hidden; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                            <img src="${basket.image || (basket.id === 3 ? 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80' : (basket.id === 7 ? 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&q=80' : 'https://images.unsplash.com/photo-1528825833341-7b2c658d3543?auto=format&fit=crop&w=200&q=80'))}" 
                                 alt="${basket.title}" style="width: 100%; height: 100%; object-fit: cover;" />
                        </div>
                        <div>
                            <h4 style="margin: 0; font-size: 1.1rem; color: var(--primary);">${basket.title}</h4>
                            <p style="color: #ef4444; font-weight: bold; font-size: 0.9rem; margin-top: 4px;"><i class="fas fa-running"></i> Plus que 2 !</p>
                        </div>
                    </div>
`).join('')}
            </div>

            <div class="responsive-grid">
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
`);
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

    contentView.innerHTML = wrapResponsive(`
        <div class="explorer-header">
            <div class="search-bar" style="background: white; padding: 10px 15px; border-radius: 12px; display: flex; align-items: center; gap: 10px; margin-bottom: 20px; box-shadow: var(--shadow);">
                <i class="fas fa-search" style="color: var(--text-muted);"></i>
                <input type="text" placeholder="Magasin, produit..." style="border: none; outline: none; width: 100%;" oninput="filterBasketsByName(this.value)" />
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
                             onmouseout="this.style.transform='scale(1)'" />
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
`);
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
                <h3 style="margin-bottom: 1.5rem;">Validation de Panier ???</h3>
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

    const modal = document.getElementById('validation-modal');
    if (modal) modal.remove();

    if (basket && basket.quantity > 0) {
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
        alert('Commande Validée!\nMode: ' + mode + '\nRetrouvez le code QR dans "Mes paniers"');

        // Refresh view
        renderStudentExplorer();
        if (state.currentPage === 'home') renderStudentHome();
    }
}

function renderStudentReservations() {
    const basketImages = {
        1: 'images/panier_fraicheur_1767866913756.png',
        2: 'images/panier_boulangerie_176786692929658.png',
        3: 'images/panier_complet_1767866946881.png',
        4: 'images/panier_fruits_1767866963543.png',
        5: 'images/panier_epicerie_1767866980805.png',
        6: 'images/panier_traiteur_1767866997000.png',
        7: 'images/panier_sucre_1767867012000.png'
    };

    const userReservations = state.reservations.filter(r => r.studentName === state.currentUser.name || r.studentName === 'Moi');

    contentView.innerHTML = wrapResponsive(`
    <div class="res-list">
        <h3 style="margin-bottom: 2rem;">Mes Réservations ???</h3>
            ${userReservations.length > 0 ? userReservations.map(res => {
        const basket = state.baskets.find(b => b.id === res.basketId);
        return `
                    <div class="res-card glass-card" style="display: flex; gap: 1.5rem; align-items: center; padding: 1.5rem; border-radius: 20px; margin-bottom: 1.5rem; flex-wrap: wrap;">
                        <div class="res-image" style="width: 100px; height: 100px; border-radius: 15px; overflow: hidden; flex-shrink: 0;">
                            <img src="${basketImages[basket.id] || 'images/panier_complet_1767866946881.png'}" 
                                 alt="${basket.title}" 
                                 style="width: 100%; height: 100%; object-fit: cover;" />
                        </div>
                        <div class="res-info" style="flex: 1; min-width: 200px;">
                            <h4 style="margin: 0; font-size: 1.2rem;">${basket.title}</h4>
                            <p style="margin: 5px 0; color: var(--text-muted);">${basket.store} • ${res.time}</p>
                            <span class="status-pill ${res.status === 'confirmé' ? 'success' : 'warning'}">${res.status}</span>
                            <div style="margin-top: 0.8rem; color: var(--secondary); font-weight: 700; font-size: 1.2rem;">
                                ${basket.priceNew.toFixed(2)}€
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 15px; align-items: flex-end; justify-content: center;">
                            <div class="res-qr" id="qr-${res.id}" style="padding: 10px; background: white; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);"></div>
                            ${res.status === 'en attente' ? `
                                <button class="btn-primary" style="padding: 10px 20px; font-size: 0.9rem; width: auto;" onclick="processPayment('${res.id}')">
                                    <i class="fas fa-credit-card"></i> Payer
                                </button>
` : `
                                 <span style="color: #10b981; font-weight: 700;"><i class="fas fa-check-circle"></i> Payé</span>
`}
                        </div>
                    </div>
`;
    }).join('') : '<div class="glass-card" style="text-align:center; padding:3rem; color:var(--text-muted); border-radius: 25px;"><i class="fas fa-shopping-basket" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i><p>Aucune réservation pour le moment.</p></div>'}
        </div>
`);

    // Triggering QR generation after HTML is set
    setTimeout(() => {
        state.reservations.forEach(res => {
            const el = document.getElementById(`qr - ${res.id}`);
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

function renderStudentProfile() {
    const user = state.currentUser;
    contentView.innerHTML = wrapResponsive(`
    <div class="profile-container">
        <div class="profile-header-card glass-card" style="position: relative; padding: 2.5rem; text-align: center; border-radius: 30px; background: linear-gradient(135deg, var(--primary), #2c7a7b); color: white;">
            <button onclick="document.getElementById('avatar-upload').click()" class="btn-icon-small" style="position: absolute; top: 15px; right: 60px; background: rgba(255,255,255,0.2); color: white; border: none;" title="Changer la photo"><i class="fas fa-camera"></i></button>
            <button onclick="toggleEditProfile()" class="btn-icon-small" style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.2); color: white; border: none;" title="Modifier profil"><i class="fas fa-edit"></i></button>
            <input type="file" id="avatar-upload" style="display: none;" accept="image/*" onchange="updateProfilePicture(this)" />

                <img src="${user.avatar}" alt="Avatar" class="profile-avatar-large" id="current-avatar" style="width: 120px; height: 120px; border-radius: 50%; border: 4px solid rgba(255,255,255,0.3); margin-bottom: 1rem; object-fit: cover;" />
                    <h3 id="profile-name-display" style="margin: 0; font-size: 1.8rem; font-weight: 800;">${user.name}</h3>
                    <p id="profile-email-display" style="opacity: 0.9; margin-top: 5px;">${user.email}</p>

                    <div style="display: flex; gap: 15px; justify-content: center; margin-top: 1rem; font-size: 0.9rem; opacity: 0.8; flex-wrap: wrap;">
                        <span><i class="fas fa-phone"></i> ${user.phone || 'Non renseigné'}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${user.address || 'Non renseigné'}</span>
                    </div>

                    <div class="badge-tag" style="background: rgba(255,255,255,0.2); padding: 6px 15px; border-radius: 20px; font-size: 0.85rem; display: inline-block; margin-top: 15px; font-weight: 600;">Étudiante Vérifiée ?</div>

                    <!-- Edit Form -->
                    <form id="profile-edit-form" class="hidden" onsubmit="saveProfile(event)" style="margin-top: 2rem; background: white; padding: 2rem; border-radius: 20px; color: var(--text-dark); text-align: left;">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                            <div class="form-group-sm">
                                <label style="display: block; margin-bottom: 5px; font-weight: 600; font-size: 0.85rem;">Nom complet</label>
                                <input type="text" id="edit-name" value="${user.name}" required style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 10px;" />
                            </div>
                            <div class="form-group-sm">
                                <label style="display: block; margin-bottom: 5px; font-weight: 600; font-size: 0.85rem;">Email</label>
                                <input type="email" id="edit-email" value="${user.email}" required style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 10px;" />
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
                            <div class="form-group-sm">
                                <label style="display: block; margin-bottom: 5px; font-weight: 600; font-size: 0.85rem;">Téléphone</label>
                                <input type="tel" id="edit-phone" value="${user.phone || ''}" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 10px;" />
                            </div>
                            <div class="form-group-sm">
                                <label style="display: block; margin-bottom: 5px; font-weight: 600; font-size: 0.85rem;">Adresse</label>
                                <input type="text" id="edit-address" value="${user.address || ''}" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 10px;" />
                            </div>
                        </div>
                        <button type="submit" class="btn-primary" style="margin-top: 1.5rem; width: 100%;">Enregistrer</button>
                    </form>
                </div>

                <h4 style="margin: 2.5rem 0 1.5rem; font-weight: 800;">Mon Impact ??</h4>
                <div class="responsive-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem;">
                    <div class="glass-card" style="padding: 1.5rem; text-align: center; border-bottom: 4px solid var(--primary);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--primary);">12</div>
                        <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-top: 5px;">Sauvés</div>
                    </div>
                    <div class="glass-card" style="padding: 1.5rem; text-align: center; border-bottom: 4px solid var(--secondary);">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--secondary);">48€</div>
                        <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-top: 5px;">Économisés</div>
                    </div>
                    <div class="glass-card" style="padding: 1.5rem; text-align: center; border-bottom: 4px solid #10b981;">
                        <div style="font-size: 2rem; font-weight: 800; color: #10b981;">18kg</div>
                        <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-top: 5px;">CO2 Évité</div>
                    </div>
                </div>

                <div class="profile-menu-list" style="margin-top: 3rem; display: flex; flex-direction: column; gap: 0.8rem;">
                    <div class="profile-menu-item action-item-modern" style="display: flex; justify-content: space-between; align-items: center; padding: 1.2rem; cursor: pointer;">
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <i class="fas fa-star" style="color: #fbbf24;"></i>
                            <span style="font-weight: 600;">Fidélité (${user.points} pts)</span>
                        </div>
                        <i class="fas fa-chevron-right" style="font-size: 0.8rem; color: var(--text-muted);"></i>
                    </div>
                    <div class="profile-menu-item action-item-modern" style="display: flex; justify-content: space-between; align-items: center; padding: 1.2rem; cursor: pointer;" onclick="navigateTo('referral')">
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <i class="fas fa-gift" style="color: var(--secondary);"></i>
                            <span style="font-weight: 600;">Parrainage (Gagne 5€) ??</span>
                        </div>
                        <i class="fas fa-chevron-right" style="font-size: 0.8rem; color: var(--text-muted);"></i>
                    </div>
                    <div class="profile-menu-item action-item-modern" style="display: flex; justify-content: space-between; align-items: center; padding: 1.2rem; cursor: pointer;" onclick="navigateTo('faq')">
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <i class="fas fa-question-circle" style="color: var(--primary);"></i>
                            <span style="font-weight: 600;">Aide & FAQ</span>
                        </div>
                        <i class="fas fa-chevron-right" style="font-size: 0.8rem; color: var(--text-muted);"></i>
                    </div>
                    <div class="profile-menu-item action-item-modern" style="display: flex; justify-content: space-between; align-items: center; padding: 1.2rem; cursor: pointer; border-left: 4px solid #ef4444;" onclick="state.role=null; renderLogin();">
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <i class="fas fa-sign-out-alt" style="color: #ef4444;"></i>
                            <span style="font-weight: 600; color: #ef4444;">Déconnexion</span>
                        </div>
                    </div>
                </div>
        </div>
`);
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
        alert('Profil mis à jour !');
    }
}

function updateProfilePicture(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            state.currentUser.avatar = e.target.result;
            document.getElementById('current-avatar').src = e.target.result;
            const sidebarAvatar = document.querySelector('.logo-image');
            if (sidebarAvatar) sidebarAvatar.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function renderStudentRecipes() {
    contentView.innerHTML = wrapResponsive(`
    <div class="student-recipes">
            <h3 style="margin-bottom: 2rem;">Recettes Anti-Gaspi ??</h3>
            <div style="display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
                ${state.recipes.map(recipe => `
                    <div class="glass-card" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
                        <img src="${recipe.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80'}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 15px;" />
                        <div>
                            <h4 style="margin: 0; color: var(--primary); font-size: 1.2rem;">${recipe.title}</h4>
                            <p style="margin: 5px 0; font-size: 0.9rem; color: var(--text-muted);"><i class="fas fa-clock"></i> ${recipe.time || '15 min'} • <i class="fas fa-signal"></i> ${recipe.difficulty || 'Facile'}</p>
                        </div>
                        <button class="btn-primary" style="width: 100%;" onclick="alert('Bientôt disponible !')">Voir la recette</button>
                    </div>
`).join('')}
            </div>
        </div>
        </div>
`);
}

function renderStudentImpact() {
    contentView.innerHTML = wrapResponsive(`
        <div class="impact-detailed" style="max-width: 900px; margin: 0 auto;">
            <h3 style="font-weight: 700; color: #1e293b; margin-bottom: 2rem;">Tableau de bord écologique</h3>
            
            <div class="chart-box glass-card" style="padding: 2.5rem; background: white; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); border: 1px solid #f1f5f9;">
                <h4 style="margin-bottom: 2rem; color: #334155; font-size: 1.1rem; font-weight: 600;">Ton économie de CO2 cumulée</h4>
                <div class="mock-chart" style="display: flex; align-items: flex-end; gap: 8px; height: 180px; margin-bottom: 1.5rem;">
                    <div class="bar" style="height: 25%; background: #91b072; flex: 1; border-top-left-radius: 4px; border-top-right-radius: 4px;"></div>
                    <div class="bar" style="height: 45%; background: #91b072; flex: 1; border-top-left-radius: 4px; border-top-right-radius: 4px;"></div>
                    <div class="bar" style="height: 60%; background: #91b072; flex: 1; border-top-left-radius: 4px; border-top-right-radius: 4px;"></div>
                    <div class="bar" style="height: 90%; background: #1a5762; flex: 1; border-top-left-radius: 4px; border-top-right-radius: 4px; box-shadow: 0 4px 15px rgba(26, 87, 98, 0.2);"></div>
                </div>
                <!-- Legend -->
                <div style="display: flex; gap: 20px; font-size: 0.8rem; justify-content: center; color: var(--text-muted);">
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <span style="width: 12px; height: 12px; background: #91b072; border-radius: 3px;"></span> Moyenne mensuelle
                    </div>
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <span style="width: 12px; height: 12px; background: #1a5762; border-radius: 3px;"></span> Performance actuelle
                    </div>
                </div>
            </div>
            
            <div class="badges-row" style="display: flex; gap: 30px; margin-top: 2.5rem; padding-left: 5px; flex-wrap: wrap; justify-content: center;">
                <div class="badge-item" style="text-align: center;">
                    <div style="font-size: 1.8rem; background: #fef9c3; border-radius: 50%; width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">??</div>
                    <span style="font-size: 0.8rem; font-weight: 700; color: #334155;">Débutant</span>
                </div>
                <div class="badge-item" style="text-align: center;">
                    <div style="font-size: 1.8rem; background: #dcfce7; border-radius: 50%; width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">??</div>
                    <span style="font-size: 0.8rem; font-weight: 700; color: #334155;">Sauveur</span>
                </div>
                <div class="badge-item" style="text-align: center; opacity: 0.15;">
                    <div style="font-size: 1.8rem; background: #f1f5f9; border-radius: 50%; width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;">??</div>
                    <span style="font-size: 0.8rem; font-weight: 700; color: #94a3b8;">Expert</span>
                </div>
            </div>

            <div class="impact-stats-list" style="margin-top: 3rem; display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                <div class="stat-row glass-card" style="display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 1.5rem;">
                    <div style="display: flex; align-items: center; gap: 12px; color: #334155;">
                        <span style="font-size: 1.2rem;">???</span>
                        <span style="font-weight: 600;">Équivalent repas</span>
                    </div>
                    <span style="font-weight: 800; font-size: 1.1rem; color: #1e293b;">34 repas</span>
                </div>
                <div class="stat-row glass-card" style="display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 1.5rem;">
                    <div style="display: flex; align-items: center; gap: 12px; color: #334155;">
                        <span style="font-size: 1.2rem;">??</span>
                        <span style="font-weight: 600;">Arbres sauvés</span>
                    </div>
                    <span style="font-weight: 800; font-size: 1.1rem; color: #1e293b;">2.4 arbres</span>
                </div>
            </div>
        </div>
`);
}

// Event Listeners
function setupEventListeners() {
    menuToggle.onclick = () => {
        sidebar.classList.toggle('hidden');
    };

    aiToggle.onclick = () => {
        toggleChat();
    };

    closeChat.onclick = () => {
        toggleChat(false);
    };

    document.querySelector('.notification-bell').onclick = () => {
        toggleNotif(true);
    };

    document.querySelector('.user-profile').onclick = () => {
        const roleName = state.role === 'admin' ? 'Commerçant' : 'Étudiant';
        alert(`?? Profil ${roleName} \nNom: ${state.role === 'admin' ? 'HyperFresh' : state.currentUser.name} \nStatut: Connecté`);
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

    setTimeout(() => {
        let response = "Bonjour ! Je suis l'IA de CuisineEnsemble. Comment puis-je vous aider aujourd'hui ? ??";
        const lowerText = text.toLowerCase();

        if (lowerText.includes('bonjour') || lowerText.includes('salut')) {
            response = "Salut ! Prêt à sauver des paniers aujourd'hui ? ??";
        } else if (lowerText.includes('étudiant')) {
            response = "Les étudiants adorent les offres de fin de journée. ?? Conseil : Proposez des paniers 'Surprise' après 18h, c'est ce qui marche le mieux !";
        } else if (lowerText.includes('panier') || lowerText.includes('stock')) {
            response = `Actuellement, vous avez ${state.baskets.filter(b => b.active).length} types de paniers en ligne.Le "Panier Fraîcheur" est très populaire! Vérifiez vos stocks.`;
        } else if (lowerText.includes('prix') || lowerText.includes('coût')) {
            response = "Pour attirer plus de monde, essayez de garder un prix autour de 3-4€. C'est le budget idéal pour un étudiant.";
        } else if (lowerText.includes('merci')) {
            response = "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. À bientôt ! ??";
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
    contentView.innerHTML = wrapResponsive(`
        <div class="clients-manager">
            <div class="section-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
                <h3>Gestion des Clients ??</h3>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <input type="text" placeholder="Rechercher un client..." style="padding: 0.7rem; border-radius: 10px; border: 1px solid #e2e8f0; width: 250px;" />
                    <button class="btn-primary" style="padding: 0.7rem 1.5rem; width: auto;" onclick="alert('Export en cours...')">Exporter CSV</button>
                </div>
            </div>
            
            <div class="responsive-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                <div class="glass-card" style="padding: 1.5rem; text-align: center; border-top: 4px solid var(--primary);">
                    <h4 style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Total Clients</h4>
                    <p style="font-size: 2rem; font-weight: 800; color: var(--primary);">${state.clients.length}</p>
                </div>
                <div class="glass-card" style="padding: 1.5rem; text-align: center; border-top: 4px solid var(--secondary);">
                    <h4 style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Économie Totale</h4>
                    <p style="font-size: 2rem; font-weight: 800; color: var(--secondary);">${state.clients.reduce((acc, c) => acc + c.totalSpent, 0).toFixed(2)}€</p>
                </div>
                <div class="glass-card" style="padding: 1.5rem; text-align: center; border-top: 4px solid #9333ea;">
                    <h4 style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">VIP</h4>
                    <p style="font-size: 2rem; font-weight: 800; color: #9333ea;">${state.clients.filter(c => c.status === 'VIP').length}</p>
                </div>
            </div>
            
            <div class="glass-card" style="overflow-x: auto; padding: 0;">
                <table class="data-table" style="width: 100%; border-collapse: collapse; min-width: 600px;">
                    <thead style="background: rgba(0,0,0,0.02);">
                        <tr>
                            <th style="padding: 1.2rem; text-align: left;">Client</th>
                            <th style="padding: 1.2rem; text-align: left;">Paniers</th>
                            <th style="padding: 1.2rem; text-align: left;">Total</th>
                            <th style="padding: 1.2rem; text-align: left;">Statut</th>
                            <th style="padding: 1.2rem; text-align: left;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${state.clients.map(client => `
                            <tr style="border-top: 1px solid rgba(0,0,0,0.05);">
                                <td style="padding: 1.2rem;">
                                    <div style="display: flex; align-items: center; gap: 12px;">
                                        <img src="${client.avatar}" style="width: 35px; height: 35px; border-radius: 50%;" />
                                        <div>
                                            <div style="font-weight: 600;">${client.name}</div>
                                            <div style="font-size: 0.8rem; color: var(--text-muted);">${client.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td style="padding: 1.2rem;">${client.basketsSaved}</td>
                                <td style="padding: 1.2rem; font-weight: 600;">${client.totalSpent.toFixed(2)}€</td>
                                <td style="padding: 1.2rem;">
                                    <span class="status-pill ${client.status === 'VIP' ? 'success' : (client.status === 'Actif' ? 'info' : 'warning')}">${client.status}</span>
                                </td>
                                <td style="padding: 1.2rem;">
                                    <button class="btn-icon" onclick="alert('Détails de ${client.name}')"><i class="fas fa-eye"></i></button>
                                    <button class="btn-icon" onclick="alert('Message à ${client.email}')"><i class="fas fa-envelope"></i></button>
                                </td>
                            </tr>
`).join('')}
                    </tbody>
                </table>
            </div>
        </div>
`);
}

function renderPromotions() {
    contentView.innerHTML = wrapResponsive(`
    <div class="promotions-manager">
            <h3 style="margin-bottom: 2rem;">Campagnes & Promotions ??</h3>
            
            <div class="responsive-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                ${state.promotions.map(promo => `
                    <div class="glass-card" style="padding: 2rem; border-left: 5px solid ${promo.status === 'Active' ? 'var(--secondary)' : '#94a3b8'};">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1.5rem;">
                            <div>
                                <h4 style="margin: 0 0 0.5rem 0; font-size: 1.2rem;">${promo.title}</h4>
                                <p style="color: var(--text-muted); font-size: 0.9rem;">${promo.desc}</p>
                            </div>
                            <span class="status-pill ${promo.status === 'Active' ? 'success' : 'warning'}">${promo.status}</span>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1.5rem; text-align: center; border-top: 1px solid rgba(0,0,0,0.05); padding-top: 1.5rem;">
                            <div>
                                <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 5px; text-transform: uppercase;">Utilisations</p>
                                <p style="font-size: 1.2rem; font-weight: 700;">${promo.usage}</p>
                            </div>
                            <div>
                                <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 5px; text-transform: uppercase;">Expire le</p>
                                <p style="font-size: 1rem; font-weight: 600;">${promo.expiry}</p>
                            </div>
                            <div style="display: flex; gap: 8px; align-items: center; justify-content: flex-end;">
                                <button class="btn-icon-small" onclick="alert('Modifier la promo')"><i class="fas fa-edit"></i></button>
                                <button class="btn-icon-small" style="color: #ef4444;" onclick="alert('Supprimer la promo')"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
`).join('')}
            </div>

            <div class="glass-card" style="padding: 2.5rem; margin-top: 2rem;">
                <h4 style="margin-bottom: 2rem; font-weight: 700; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-bullhorn" style="color: var(--primary);"></i> Créer une nouvelle campagne
                </h4>
                <form onsubmit="event.preventDefault(); alert('Campagne créée !');">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
                        <div class="form-group">
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 0.9rem;">Nom de la campagne</label>
                            <input type="text" placeholder="Ex: Promo Week-end" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0;" />
                        </div>
                        <div class="form-group">
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 0.9rem;">Canal de diffusion</label>
                            <select style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0; background: white;">
                                <option>Email Marketing</option>
                                <option>Notification Push</option>
                                <option>SMS Direct</option>
                                <option>Bannière in-app</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group" style="margin-bottom: 2rem;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 0.9rem;">Message publicitaire</label>
                        <textarea style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0; min-height: 120px; font-family: inherit;" placeholder="Rédigez votre message accrocheur ici..."></textarea>
                    </div>
                    <div style="display: flex; gap: 15px; align-items: center;">
                        <button class="btn-primary" style="width: auto; padding: 12px 35px;">Lancer la campagne ??</button>
                        <span style="font-size: 0.85rem; color: var(--text-muted);"><i class="fas fa-info-circle"></i> Cette action enverra le message à tous vos clients.</span>
                    </div>
                </form>
            </div>
        </div>
`);
}

function renderSettings() {
    contentView.innerHTML = wrapResponsive(`
    <div class="settings-page" style="max-width: 800px; margin: 0 auto;">
            <h3 style="margin-bottom: 2rem; font-weight: 700;">Paramètres du Magasin ??</h3>
            
            <div class="glass-card" style="padding: 2.5rem;">
                <form onsubmit="event.preventDefault(); alert('Paramètres enregistrés !');">
                    <h4 style="margin-bottom: 1.5rem; color: var(--primary); font-weight: 700;">Informations générales</h4>
                    
                    <div class="form-group" style="margin-bottom: 1.2rem;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 0.9rem;">Nom du magasin</label>
                        <input type="text" value="HyperFresh" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0;" />
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 1.2rem;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 0.9rem;">Adresse</label>
                        <input type="text" value="12 Rue de la Bastille, 75011 Paris" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0;" />
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 1.2rem;">
                        <div class="form-group">
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 0.9rem;">Téléphone</label>
                            <input type="tel" value="01 23 45 67 89" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0;" />
                        </div>
                        <div class="form-group">
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 0.9rem;">Email</label>
                            <input type="email" value="contact@hyperfresh.fr" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0;" />
                        </div>
                    </div>
                    
                    <h4 style="margin: 2.5rem 0 1.5rem; color: var(--primary); font-weight: 700;">Horaires & Retrait</h4>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem; margin-bottom: 1.2rem;">
                        <div class="form-group">
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 0.9rem;">Début retrait</label>
                            <input type="time" value="17:00" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0; background: white;" />
                        </div>
                        <div class="form-group">
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 0.9rem;">Fin retrait</label>
                            <input type="time" value="20:00" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0; background: white;" />
                        </div>
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 2rem;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 0.9rem;">Emplacement du retrait</label>
                        <input type="text" value="Comptoir principal" placeholder="Ex: Accueil, Rayon frais..." style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0;" />
                    </div>
                    
                    <div style="display: flex; gap: 15px; margin-top: 3rem; flex-wrap: wrap;">
                        <button type="submit" class="btn-primary" style="width: auto; padding: 12px 30px;">Enregistrer les modifications</button>
                        <button type="button" class="btn-primary" style="width: auto; padding: 12px 30px; background: transparent; border: 1px solid #e2e8f0; color: var(--text-muted);">Réinitialiser</button>
                    </div>
                </form>
            </div>
        </div>
`);
}

// ========== NOUVELLES INTERFACES ÉTUDIANT ==========

function renderFavorites() {
    contentView.innerHTML = `
    <div class="favorites-page">
            <h3 style="margin-bottom: 2rem;">Mes Magasins Favoris ??</h3>
            
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
                            <input type="checkbox" checked />
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
                            <input type="checkbox" checked />
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
            <div class="rewards-header glass-card" style="padding: 2.5rem 2rem; margin-bottom: 2rem; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; text-align: center; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                <h3 style="margin-bottom: 1rem; font-size: 2.2rem;">Mes Récompenses ??</h3>
                <div style="font-size: 3.5rem; font-weight: 800; margin-bottom: 0.5rem;">450</div>
                <p style="font-size: 1.2rem; opacity: 0.9; font-weight: 500;">Points JustEco</p>
                <div style="margin: 2rem auto; max-width: 300px;">
                    <div style="background: rgba(255,255,255,0.2); height: 12px; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.3);">
                        <div style="width: 75%; height: 100%; background: white; border-radius: 10px; box-shadow: 0 0 15px rgba(255,255,255,0.5);"></div>
                    </div>
                    <p style="margin-top: 1rem; font-size: 0.95rem; opacity: 0.95;">Plus que 50 pts pour le badge <strong>Expert</strong></p>
                </div>
            </div>
            
            <h4 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-gift" style="color: var(--secondary);"></i> Récompenses à débloquer
            </h4>
            
            <div class="rewards-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                <div class="reward-card glass-card" style="padding: 2rem 1.5rem; text-align: center; border-radius: 20px;">
                    <div style="font-size: 3.5rem; margin-bottom: 1rem;">???</div>
                    <h4 style="margin-bottom: 0.5rem;">Panier Gratuit</h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Utilisable dans n'importe quel magasin partenaire</p>
                    <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary); margin-bottom: 1.5rem;">500 pts</div>
                    <button class="btn-primary" style="width: 100%; background: #e2e8f0; color: #64748b;" disabled>Points insuffisants</button>
                </div>
                
                <div class="reward-card glass-card" style="padding: 2rem 1.5rem; text-align: center; border-radius: 20px;">
                    <div style="font-size: 3.5rem; margin-bottom: 1rem;">??</div>
                    <h4 style="margin-bottom: 0.5rem;">Bon de 5€</h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Réduction immédiate sur votre prochain panier</p>
                    <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary); margin-bottom: 1.5rem;">300 pts</div>
                    <button class="btn-primary" style="width: 100%;" onclick="alert('Bon de 5€ débloqué ! Retrouve-le dans ton profil.')">Débloquer</button>
                </div>
                
                <div class="reward-card glass-card" style="padding: 2rem 1.5rem; text-align: center; border-radius: 20px; border: 2px solid var(--secondary); background: #f0fdf4;">
                    <div style="font-size: 3.5rem; margin-bottom: 1rem;">??</div>
                    <h4 style="margin-bottom: 0.5rem;">Bonus Recyclage</h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Gagne des points en ramenant tes contenants</p>
                    <div style="font-size: 1.8rem; font-weight: 800; color: var(--secondary); margin-bottom: 1.5rem;">+50 pts</div>
                    <button class="btn-primary" style="width: 100%; background: var(--secondary);" onclick="navigateTo('recycling')">En savoir plus</button>
                </div>
            </div>

            <h4 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-info-circle" style="color: var(--primary);"></i> Comment gagner des points ?
            </h4>
            <div class="points-info" style="display: grid; gap: 1rem; margin-bottom: 3rem;">
                <div class="point-item glass-card" style="padding: 1.2rem; display: flex; align-items: center; gap: 1.5rem; border-radius: 15px;">
                    <div style="width: 50px; height: 50px; border-radius: 50%; background: #dcfce7; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">??</div>
                    <div style="flex: 1;">
                        <h5 style="margin-bottom: 0.2rem;">Sauver un panier</h5>
                        <p style="color: var(--text-muted); font-size: 0.85rem;">Gagne 10 points à chaque panier acheté</p>
                    </div>
                    <div style="font-size: 1.3rem; font-weight: 800; color: var(--secondary);">+10</div>
                </div>
                <div class="point-item glass-card" style="padding: 1.2rem; display: flex; align-items: center; gap: 1.5rem; border-radius: 15px;">
                    <div style="width: 50px; height: 50px; border-radius: 50%; background: #dbeafe; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">??</div>
                    <div style="flex: 1;">
                        <h5 style="margin-bottom: 0.2rem;">Recyclage en magasin</h5>
                        <p style="color: var(--text-muted); font-size: 0.85rem;">Bonus pour chaque contenant ramené</p>
                    </div>
                    <div style="font-size: 1.3rem; font-weight: 800; color: var(--secondary);">+20</div>
                </div>
                <div class="point-item glass-card" style="padding: 1.2rem; display: flex; align-items: center; gap: 1.5rem; border-radius: 15px;">
                    <div style="width: 50px; height: 50px; border-radius: 50%; background: #fef9c3; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">??</div>
                    <div style="flex: 1;">
                        <h5 style="margin-bottom: 0.2rem;">Parrainage</h5>
                        <p style="color: var(--text-muted); font-size: 0.85rem;">Invite tes amis à rejoindre CuisineEnsemble</p>
                    </div>
                    <div style="font-size: 1.3rem; font-weight: 800; color: var(--secondary);">+100</div>
                </div>
            </div>
    </div>`;
}

function renderRecyclingReturn() {
    contentView.innerHTML = `
    <div class="recycling-page">
            <div class="welcome-header glass-card" style="padding: 2.5rem 2rem; background: linear-gradient(135deg, #10b981, #34d399); color: white; border-radius: 24px; text-align: center; margin-bottom: 2rem;">
                <h3 style="font-size: 2.2rem; margin-bottom: 0.5rem;">Recyclage en magasin ??</h3>
                <p style="font-size: 1.1rem; opacity: 0.95;">Rapportez vos contenants et gagnez des points bonus !</p>
            </div>

            <div class="glass-card" style="padding: 2rem; margin-bottom: 2rem; border-radius: 20px;">
                <h4 style="margin-bottom: 1.5rem; color: var(--primary);">Objets acceptés et récompenses</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
                    <div style="padding: 20px; background: #f0fdf4; border-radius: 16px; text-align: center; border: 1px solid #86efac; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div style="font-size: 3rem; margin-bottom: 10px;">??</div>
                        <div style="font-weight: 700; font-size: 1.1rem;">Bols en verre</div>
                        <div style="color: var(--secondary); font-weight: 800; font-size: 1.2rem; margin-top: 5px;">+20 pts</div>
                    </div>
                    <div style="padding: 20px; background: #fff7ed; border-radius: 16px; text-align: center; border: 1px solid #ffedd5; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div style="font-size: 3rem; margin-bottom: 10px;">??</div>
                        <div style="font-weight: 700; font-size: 1.1rem;">Plastique Bio</div>
                        <div style="color: var(--secondary); font-weight: 800; font-size: 1.2rem; margin-top: 5px;">+10 pts</div>
                    </div>
                    <div style="padding: 20px; background: #eff6ff; border-radius: 16px; text-align: center; border: 1px solid #bfdbfe; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div style="font-size: 3rem; margin-bottom: 10px;">??</div>
                        <div style="font-weight: 700; font-size: 1.1rem;">Sacs Cabas</div>
                        <div style="color: var(--secondary); font-weight: 800; font-size: 1.2rem; margin-top: 5px;">+15 pts</div>
                    </div>
                </div>
            </div>

            <div class="instruction-card glass-card" style="padding: 2rem; border-radius: 20px; background: #f8fafc;">
                <h4 style="margin-bottom: 1.5rem; color: var(--primary);">Comment ça marche ?</h4>
                <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                    <div style="display: flex; gap: 15px; align-items: center;">
                        <div style="width: 35px; height: 35px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">1</div>
                        <p style="margin: 0;">Nettoyez soigneusement vos contenants vides.</p>
                    </div>
                    <div style="display: flex; gap: 15px; align-items: center;">
                        <div style="width: 35px; height: 35px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">2</div>
                        <p style="margin: 0;">Rapportez-les dans n'importe quel magasin partenaire.</p>
                    </div>
                    <div style="display: flex; gap: 15px; align-items: center;">
                        <div style="width: 35px; height: 35px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">3</div>
                        <p style="margin: 0;">Demandez au vendeur de scanner votre code QR de profil.</p>
                    </div>
                </div>
            </div>
            
            <button class="btn-primary" style="margin-top: 2rem; padding: 1.2rem;" onclick="navigateTo('profile')">
                <i class="fas fa-qrcode"></i> Afficher mon QR Code
            </button>
            <button class="btn-icon-muted" style="width: 100%; margin-top: 10px;" onclick="navigateTo('rewards')">Retour aux récompenses</button>
        </div>
`;
}

function renderStoresList() {
    const stores = [
        { name: 'HyperFresh bastille', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80', status: 'Ouvert', distance: '0.8 km', address: '12 Rue de la Cerisaie, 75004 Paris' },
        { name: 'Bio C Bon', image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=800&q=80', status: 'Ouvert', distance: '1.2 km', address: '45 Rue de Lyon, 75012 Paris' },
        { name: 'Paul Boulangerie', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', status: 'Ferme à 20h', distance: '0.5 km', address: '22 Boulevard Henri IV, 75004 Paris' },
        { name: 'Sushi Shop', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80', status: 'Ouvert', distance: '1.5 km', address: '15 Avenue Ledru-Rollin, 75012 Paris' },
        { name: 'Monoprix', image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80', status: 'Ouvert', distance: '2.1 km', address: '99 Rue de Rivoli, 75001 Paris' }
    ];

    contentView.innerHTML = `
    <div class="stores-page">
            <h3 style="margin-bottom: 2rem; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-store" style="color: var(--primary);"></i> Magasins Partenaires
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2rem;">
                ${stores.map(store => `
                    <div class="store-card glass-card" style="overflow: hidden; cursor: pointer; border-radius: 20px; transition: transform 0.3s; box-shadow: 0 4px 15px rgba(0,0,0,0.05);" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div style="position: relative;">
                            <img src="${store.image}" alt="${store.name}" style="width: 100%; height: 180px; object-fit: cover;" />
                            <div style="position: absolute; bottom: 10px; right: 10px; background: white; padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 0.8rem; color: var(--primary);">
                                <i class="fas fa-map-marker-alt"></i> ${store.distance}
                            </div>
                        </div>
                        <div style="padding: 1.5rem;">
                            <h4 style="margin-bottom: 0.5rem; font-size: 1.2rem;">${store.name}</h4>
                            <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 1rem;"><i class="fas fa-map-pin"></i> ${store.address}</p>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 700; background: ${store.status === 'Ouvert' ? '#dcfce7' : '#ffedd5'}; color: ${store.status === 'Ouvert' ? '#166534' : '#9a3412'};">
                                    <i class="fas fa-clock"></i> ${store.status}
                                </span>
                                <button class="btn-primary" style="width: auto; padding: 8px 15px; font-size: 0.85rem;" onclick="navigateTo('explorer')">Voir les offres</button>
                            </div>
                        </div>
                    </div>
`).join('')}
            </div>
        </div>
`;
}

function processPayment(resId) {
    const res = state.reservations.find(r => r.id === resId);
    if (!res) return;

    const basket = state.baskets.find(b => b.id === res.basketId);

    const paymentModalHtml = `
    <div id="payment-modal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 5000; backdrop-filter: blur(8px);">
        <div class="glass-card" style="padding: 2.5rem; width: 95%; max-width: 450px; background: white; border-radius: 28px; box-shadow: 0 25px 50px rgba(0,0,0,0.2);">
            <div style="text-align: center; margin-bottom: 2rem;">
                <div style="width: 70px; height: 70px; background: #f0fdf4; color: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 2rem;">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <h3 style="font-size: 1.8rem; color: var(--text-dark);">Paiement Sécurisé</h3>
            </div>

            <div style="margin-bottom: 2rem; padding: 1.2rem; background: #f1f5f9; border-radius: 16px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; color: var(--text-muted);">
                    <span>Récapitulatif :</span>
                    <span>${basket ? basket.title : 'Panier'}</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 1.4rem; font-weight: 800; color: var(--primary);">
                    <span>Total à payer :</span>
                    <span>${basket ? basket.priceNew.toFixed(2) : '0.00'}€</span>
                </div>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 8px; font-size: 0.9rem; font-weight: 600; color: var(--text-dark);">Numéro de carte</label>
                <div style="position: relative;">
                    <input type="text" placeholder="**** **** **** ****" value="4242 4242 4242 4242" style="width:100%; padding: 12px 12px 12px 45px; border: 2px solid #e2e8f0; border-radius: 12px; font-family: monospace; font-size: 1.1rem; outline: none;" />
                        <i class="fas fa-credit-card" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--text-muted);"></i>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
                <div>
                    <label style="display: block; margin-bottom: 8px; font-size: 0.9rem; font-weight: 600; color: var(--text-dark);">Expiration</label>
                    <input type="text" placeholder="MM/YY" value="12/26" style="width:100%; padding: 12px; border: 2px solid #e2e8f0; border-radius: 12px; text-align: center; font-weight: 600;" />
                </div>
                <div>
                    <label style="display: block; margin-bottom: 8px; font-size: 0.9rem; font-weight: 600; color: var(--text-dark);">CVC</label>
                    <input type="password" placeholder="***" value="123" style="width:100%; padding: 12px; border: 2px solid #e2e8f0; border-radius: 12px; text-align: center; font-weight: 600;" />
                </div>
            </div>

            <button class="btn-primary" style="padding: 1rem; font-size: 1.1rem; border-radius: 14px; box-shadow: 0 10px 20px rgba(26, 87, 98, 0.2);" onclick="completePayment('${resId}')">
                <i class="fas fa-lock"></i> Confirmer & Payer
            </button>
            <button class="btn-icon-muted" style="width: 100%; margin-top: 15px; background: none; border: none; color: var(--text-muted); cursor: pointer;" onclick="document.getElementById('payment-modal').remove()">Annuler la transaction</button>
        </div>
        </div>
`;
    document.body.insertAdjacentHTML('beforeend', paymentModalHtml);
}

function completePayment(resId) {
    const res = state.reservations.find(r => r.id === resId);
    if (res) {
        res.status = 'confirmé (payé)';
        document.getElementById('payment-modal').remove();
        alert('? Paiement confirmé ! Un reçu a été envoyé par email. Vous pouvez maintenant récupérer votre panier.');
        renderStudentReservations();
    }
}

function confirmPickup(resId) {
    const res = state.reservations.find(r => r.id === resId);
    if (res) {
        res.status = 'récupéré';
        alert(`Validation réussie pour la commande ${resId} !`);
        renderReservations();
    }
}

function renderFavorites() {
    contentView.innerHTML = `
    <div class="favorites-page">
            <h3 style="margin-bottom: 1.5rem;">Mes Magasins Favoris ??</h3>
            <div style="text-align: center; padding: 4rem 2rem; background: white; border-radius: 20px; box-shadow: var(--shadow);">
                <i class="fas fa-heart" style="font-size: 4rem; color: #fee2e2; margin-bottom: 1.5rem;"></i>
                <h4>Vous n'avez pas encore de favoris</h4>
                <p style="color: var(--text-muted); margin-top: 0.5rem;">Ajoutez des magasins en favoris pour les retrouver ici plus facilement.</p>
                <button class="btn-primary" style="margin-top: 2rem; width: auto; padding: 10px 25px;" onclick="navigateTo('explorer')">Explorer les magasins</button>
            </div>
        </div>
`;
}

function navigateToRecycling() {
    navigateTo('recycling');
}

// ========== FAQ & HELP ==========

function renderFAQ() {
    const faqData = [
        { q: "Comment réserver un panier ?", a: "Allez dans l'onglet 'Explorer', choisissez un panier et cliquez sur 'Réserver'. Votre QR code sera généré instantanément." },
        { q: "Quels sont les horaires de retrait ?", a: "Les horaires varient selon les magasins, mais généralement il s'agit de la dernière heure avant la fermeture." },
        { q: "Puis-je annuler une réservation ?", a: "Oui, jusqu'à 2 heures avant l'heure de retrait prévue." },
        { q: "Comment fonctionne le système de points ?", a: "Chaque panier sauvé vous rapporte des points. Vous gagnez aussi des bonus en recyclant vos contenants en magasin !" },
        { q: "Le paiement est-il sécurisé ?", a: "Oui, nous utilisons un cryptage de bout en bout pour toutes les transactions par carte bancaire." }
    ];

    contentView.innerHTML = wrapResponsive(`
    <div class="faq-container" style="max-width: 800px; margin: 0 auto; padding: 1rem;">
            <h3 style="margin-bottom: 2rem; font-weight: 700;">Aide & Questions Fréquentes ?</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${faqData.map((item, index) => `
                    <div class="glass-card" style="padding: 1.5rem; cursor: pointer; transition: 0.3s;" onclick="const ans = this.querySelector('.answer'); ans.style.display = ans.style.display === 'none' ? 'block' : 'none'; this.querySelector('i').classList.toggle('fa-chevron-down'); this.querySelector('i').classList.toggle('fa-chevron-up');">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <h4 style="color: var(--primary); margin: 0; font-size: 1rem;">${item.q}</h4>
                            <i class="fas fa-chevron-down" style="font-size: 0.8rem; color: var(--text-muted);"></i>
                        </div>
                        <p class="answer" style="display: none; margin-top: 1rem; color: var(--text-muted); line-height: 1.6; border-top: 1px solid #eee; padding-top: 1rem;">
                            ${item.a}
                        </p>
                    </div>
`).join('')}
            </div>
            
            <div class="glass-card" style="margin-top: 3rem; padding: 2.5rem; background: linear-gradient(135deg, var(--primary), #2c7a7b); color: white; text-align: center; border-radius: 30px;">
                <h4 style="margin-bottom: 0.5rem; font-size: 1.4rem;">Encore une question ?</h4>
                <p style="opacity: 0.9; margin-bottom: 2rem;">Notre support est disponible 7j/7 pour vous accompagner.</p>
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                    <button class="btn-primary" style="background: white; color: var(--primary); width: auto; padding: 0.8rem 2rem; border-radius: 50px; font-weight: 700;" onclick="toggleChat(true)">Chat en direct</button>
                    <button class="btn-primary" style="background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.3); width: auto; padding: 0.8rem 2rem; border-radius: 50px;" onclick="window.location.href='mailto:support@CuisineEnsemble.fr'">Par email</button>
                </div>
            </div>
        </div>
`);
}

// ========== REFERRAL FEATURE ==========

function renderReferral() {
    contentView.innerHTML = `
    <div class="referral-container" style="max-width: 800px; margin: 0 auto; padding: 1rem; text-align: center;">
            <div class="glass-card" style="padding: 3.5rem 2rem; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; border-radius: 30px; position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 10rem; opacity: 0.1; transform: rotate(15deg);">??</div>
                <div style="font-size: 4rem; margin-bottom: 1.5rem;">?</div>
                <h2 style="margin-bottom: 1rem; font-size: 1.8rem;">Offre 5€, Reçois 5€</h2>
                <p style="font-size: 1.1rem; opacity: 0.9; margin-bottom: 2.5rem; max-width: 500px; margin-left: auto; margin-right: auto;">Invite tes amis étudiants à rejoindre le mouvement. Tout le monde y gagne !</p>
                
                <div style="background: rgba(255,255,255,0.15); padding: 1.2rem; border-radius: 20px; border: 2px dashed rgba(255,255,255,0.4); display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; max-width: 400px; margin-left: auto; margin-right: auto; backdrop-filter: blur(5px);">
                    <span style="font-family: 'Outfit', sans-serif; font-size: 1.6rem; font-weight: 800; letter-spacing: 2px;">ALICE2026</span>
                    <button style="background: white; color: var(--primary); border: none; padding: 8px 20px; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.2s;" onclick="alert('Code copié !')">Copier</button>
                </div>
                
                <p style="font-size: 0.85rem; opacity: 0.7; margin-bottom: 2rem;">Ou partage via tes réseaux préférés :</p>
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button class="btn-icon" style="background: #25d366; color: white; width: 50px; height: 50px; border-radius: 50%; font-size: 1.4rem;"><i class="fab fa-whatsapp"></i></button>
                    <button class="btn-icon" style="background: #1da1f2; color: white; width: 50px; height: 50px; border-radius: 50%; font-size: 1.2rem;"><i class="fab fa-twitter"></i></button>
                    <button class="btn-icon" style="background: #e1306c; color: white; width: 50px; height: 50px; border-radius: 50%; font-size: 1.2rem;"><i class="fab fa-instagram"></i></button>
                </div>
            </div>
            
            <div style="margin-top: 3rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
                <div class="glass-card" style="padding: 2rem; border-radius: 24px;">
                    <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">??</div>
                    <h3 style="color: var(--primary); font-size: 1.6rem; font-weight: 800;">12</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem; font-weight: 500;">Amis parrainés</p>
                </div>
                <div class="glass-card" style="padding: 2rem; border-radius: 24px;">
                    <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">??</div>
                    <h3 style="color: var(--primary); font-size: 1.6rem; font-weight: 800;">60€</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem; font-weight: 500;">Économisés au total</p>
                </div>
            </div>
        </div>
`;
}

function toggleNotif(open) {
    const panel = document.getElementById('notification-panel');
    if (open) {
        panel.classList.add('open');
    } else {
        panel.classList.remove('open');
    }
}

function toggleChat(open) {
    if (open === undefined) {
        aiChatWindow.classList.toggle('hidden');
    } else if (open) {
        aiChatWindow.classList.remove('hidden');
    } else {
        aiChatWindow.classList.add('hidden');
    }
}

// ========== PAGE WRAPPER UTILITY ==========
function wrapResponsive(html) {
    return `<div class="responsive-container"> ${html}</div>`;
}

// ========== ABOUT SECTION ==========

function renderAbout() {
    contentView.innerHTML = wrapResponsive(`
    <div class="about-container" style="max-width: 900px; margin: 0 auto; padding: 1rem;">
            <div class="glass-card" style="padding: 4rem 2rem; text-align: center; background: linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80'); background-size: cover; border-radius: 40px; overflow: hidden; position: relative; box-shadow: 0 30px 60px rgba(0,0,0,0.1);">
                <div style="position: relative; z-index: 2;">
                    <div style="font-size: 5rem; margin-bottom: 2rem; animation: float 3s infinite ease-in-out;">??</div>
                    <h2 style="font-size: 3rem; font-weight: 800; color: var(--primary); margin-bottom: 1.5rem; letter-spacing: -1px;">Notre histoire</h2>
                    <p style="font-size: 1.4rem; color: #334155; line-height: 1.6; max-width: 700px; margin: 0 auto; font-weight: 500;">
                        Née d'une conviction simple : le gaspillage alimentaire n'est pas une fatalité. 
                        En 2026, nous avons lancé <span style="color: var(--secondary); font-weight: 800;">CuisineEnsemble</span> pour connecter ceux qui ont trop avec ceux qui n'ont pas assez.
                    </p>
                    
                    <div style="display: flex; gap: 3rem; justify-content: center; margin-top: 4rem; flex-wrap: wrap;">
                        <div style="text-align: center;">
                            <h3 style="font-size: 2.5rem; color: var(--primary); margin: 0;">2026</h3>
                            <p style="color: var(--text-muted); font-size: 0.9rem; font-weight: 600; text-transform: uppercase;">Lancement</p>
                        </div>
                        <div style="text-align: center;">
                            <h3 style="font-size: 2.5rem; color: var(--secondary); margin: 0;">50k</h3>
                            <p style="color: var(--text-muted); font-size: 0.9rem; font-weight: 600; text-transform: uppercase;">Repas sauvés</p>
                        </div>
                        <div style="text-align: center;">
                            <h3 style="font-size: 2.5rem; color: var(--primary); margin: 0;">120</h3>
                            <p style="color: var(--text-muted); font-size: 0.9rem; font-weight: 600; text-transform: uppercase;">Magasins actifs</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem;">
                <div class="glass-card" style="padding: 2.5rem; border-radius: 30px; border-top: 8px solid var(--secondary);">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">??</div>
                    <h4 style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--primary);">Notre Vision</h4>
                    <p style="color: var(--text-muted); line-height: 1.6; font-size: 0.95rem;">Un monde où aucun repas de qualité ne finit à la poubelle, et où chaque étudiant a accès à une alimentation saine à petit prix.</p>
                </div>
                <div class="glass-card" style="padding: 2.5rem; border-radius: 30px; border-top: 8px solid var(--primary);">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">??</div>
                    <h4 style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--primary);">Notre Engagement</h4>
                    <p style="color: var(--text-muted); line-height: 1.6; font-size: 0.95rem;">Créer un pont solidaire et technologique entre les commerçants locaux et la communauté étudiante.</p>
                </div>
            </div>
            
            <style>
                @keyframes float {
                    0%, 100% {transform: translateY(0);}
                    50% {transform: translateY(-20px);}}
            </style>
        </div>
`);
}

// Start the app
init();







