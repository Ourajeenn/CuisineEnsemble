// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Intersection Observer for Counter Animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.impact-number');
            counters.forEach(counter => {
                if (counter.textContent === '0') {
                    animateCounter(counter);
                }
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const impactSection = document.querySelector('.impact-section');
if (impactSection) {
    counterObserver.observe(impactSection);
}

// Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll('.step-card, .testimonial-card, .benefit-item');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);

            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// Header Background on Scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
});

// ========== CARROUSEL DE PANIERS ==========
const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');

if (carouselTrack) {
    const cards = carouselTrack.querySelectorAll('.carousel-card');
    let currentIndex = 0;
    const cardsToShow = window.innerWidth > 1024 ? 3 : (window.innerWidth > 768 ? 2 : 1);
    const maxIndex = Math.max(0, cards.length - cardsToShow);

    // Créer les dots
    for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        const gap = 32; // 2rem
        const offset = currentIndex * (cardWidth + gap);
        carouselTrack.style.transform = `translateX(-${offset}px)`;

        // Update dots
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = Math.max(0, Math.min(index, maxIndex));
        updateCarousel();
    }

    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    // Auto-scroll toutes les 5 secondes
    setInterval(() => {
        currentIndex = (currentIndex + 1) % (maxIndex + 1);
        updateCarousel();
    }, 5000);

    // Responsive
    window.addEventListener('resize', () => {
        updateCarousel();
    });
}

// ========== CHATBOT IA INTERACTIF ==========
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');

// Base de connaissances du bot
const botKnowledge = {
    "comment ça marche": "C'est super simple ! 😊\n1️⃣ Repérez un panier près de chez vous.\n2️⃣ Réservez-le en un clic sur l'app.\n3️⃣ Passez le récupérer au magasin.\nVous sauvez de la bonne nourriture et votre portefeuille vous remercie ! 💸",
    "prix": "On parle de vraies économies ici ! 📉\nNos paniers sont vendus entre 3€ et 5€, soit jusqu'à -70% du prix d'origine. C'est le bon plan pour manger frais sans se ruiner.",
    "paniers": "Il y en a pour tous les goûts ! 😋\nDu panier **Fraîcheur** (fruits & légumes), au **Boulangerie** (pains & viennoiseries), en passant par le **Surprise**... Vous allez forcément trouver votre bonheur.",
    "où": "Partout autour de vous ! 🗺️\nNous avons plus de 45 partenaires : supermarchés, boulangeries de quartier, épiceries bio... Jetez un œil à la carte dans l'app pour trouver le plus proche.",
    "horaires": "Ça dépend de nos commerçants partenaires. 🕒\nGénéralement, c'est en fin de journée (17h-20h), juste avant la fermeture. L'heure exacte est toujours indiquée sur la fiche du panier.",
    "économies": "Tenez-vous bien... nos utilisateurs économisent en moyenne **100€ par mois** ! 😲\nDe quoi se faire plaisir ailleurs, tout en faisant un geste concret pour la planète.",
    "impact": "Vous êtes des héros ! 🦸\nEnsemble, on a déjà sauvé 2,450 paniers. Ça représente des tonnes de CO2 évitées. Chaque panier compte, merci de faire partie du mouvement !",
    "inscription": "C'est gratuit et ça prend 30 secondes chrono ! ⏱️\nCliquez sur 'Commencer', quelques infos de base, et hop, vous êtes prêt à sauver votre premier panier.",
    "paiement": "Tout est sécurisé. 🔒\nCarte bancaire, Apple Pay ou Google Pay, c'est vous qui choisissez au moment de la réservation.",
    "annulation": "Un imprévu ? Pas de souci. 😌\nVous pouvez annuler sans frais jusqu'à 2h avant la collecte. On est flexibles !"
};

function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chatbot-message');
    if (isUser) messageDiv.classList.add('user');
    else messageDiv.classList.add('bot');

    const avatar = document.createElement('div');
    avatar.classList.add('message-avatar');
    avatar.textContent = isUser ? '👤' : '🤖';

    const content = document.createElement('div');
    content.classList.add('message-content');

    const p = document.createElement('p');
    p.textContent = text;
    content.appendChild(p);

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();

    for (const [key, response] of Object.entries(botKnowledge)) {
        if (message.includes(key)) {
            return response;
        }
    }

    // Réponse par défaut
    return "Je ne suis pas sûr d'avoir tout saisi... 🤔\nMais je peux vous parler de : comment ça marche, nos prix fous, les types de paniers, ou même de notre impact écolo ! Qu'est-ce qui vous tente ?";
}

if (chatbotToggle) {
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.add('active');
    });
}

if (chatbotClose) {
    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
    });
}

if (chatbotSend) {
    chatbotSend.addEventListener('click', () => {
        const message = chatbotInput.value.trim();
        if (message) {
            addMessage(message, true);
            chatbotInput.value = '';

            // Simuler un délai de réponse
            setTimeout(() => {
                const response = getBotResponse(message);
                addMessage(response, false);
            }, 500);
        }
    });
}

if (chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            chatbotSend.click();
        }
    });
}

// Quick replies
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-reply')) {
        const question = e.target.getAttribute('data-question');
        addMessage(question, true);

        setTimeout(() => {
            const response = getBotResponse(question);
            addMessage(response, false);
        }, 500);
    }
});
