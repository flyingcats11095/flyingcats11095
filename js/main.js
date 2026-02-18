// --- LANGUAGE CONFIG ---
let currentLang = 'tr';

function changeLanguage(lang) {
    currentLang = lang;
    
    // Toggle active buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Swap Text
    document.querySelectorAll('[data-tr]').forEach(el => {
        el.textContent = (lang === 'tr') ? el.dataset.tr : el.dataset.en;
    });
}

// --- TEAM FILTER (Fixes "Buttons not working") ---
function showTeamCategory(category) {
    // 1. Hide all grids
    const allGrids = document.querySelectorAll('.members-grid');
    allGrids.forEach(grid => {
        grid.style.display = 'none'; // Force hide
        grid.classList.remove('active');
    });

    // 2. Show target grid
    const target = document.getElementById(category);
    if(target) {
        target.style.display = 'grid'; // Force show
        setTimeout(() => target.classList.add('active'), 10); // Trigger animation
    }

    // 3. Update buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // Add active class to the button that was clicked
    // event.currentTarget is safe here as it's triggered by onclick
    if(event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// --- MOBILE MENU (Robust Fix) ---
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('mobile-active');
}

function closeMenu() {
    const nav = document.getElementById('navLinks');
    if(nav.classList.contains('mobile-active')) {
        nav.classList.remove('mobile-active');
    }
}

// --- SCROLL REVEAL ANIMATION ---
const reveals = document.querySelectorAll('.reveal');

function checkReveal() {
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);
