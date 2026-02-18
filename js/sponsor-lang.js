// Get language from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get('lang');
let currentLang = urlLang || 'tr';

// Change language function
function changeLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-tr][data-en]').forEach(element => {
        const trText = element.getAttribute('data-tr');
        const enText = element.getAttribute('data-en');
        
        if (lang === 'tr') {
            element.innerHTML = trText;
        } else {
            element.innerHTML = enText;
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
window.addEventListener('DOMContentLoaded', () => {
    if (currentLang !== 'tr') {
        changeLanguage(currentLang);
    }
});
