// ==========================================
// SkinCare Pro - Core Logic
// ==========================================

// 1. نظام إدارة السمة (Dark / Light Mode)
const themeToggleBtn = document.getElementById('themeToggle');
const bodyElement = document.body;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        if (bodyElement.classList.contains('theme-light')) {
            bodyElement.classList.replace('theme-light', 'theme-dark');
            localStorage.setItem('skinCareProTheme', 'theme-dark');
        } else {
            bodyElement.classList.replace('theme-dark', 'theme-light');
            localStorage.setItem('skinCareProTheme', 'theme-light');
        }
    });
}

// الاحتفاظ بإعدادات السمة عند إعادة التحميل
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('skinCareProTheme');
    if (savedTheme) {
        bodyElement.classList.remove('theme-light', 'theme-dark');
        bodyElement.classList.add(savedTheme);
    }
});

// 2. زر تغيير اللغة (مبدئي)
const langToggleBtn = document.getElementById('langToggle');
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        alert("سيتم تفعيل تبديل اللغة (عربي/إنجليزي) بعد ربط قاعدة البيانات.");
    });
}

// 3. محرك البحث الشامل
const searchInput = document.getElementById('globalSearch');
const searchBtn = document.querySelector('.search-btn');

function executeSearch() {
    const query = searchInput.value.trim();
    if(query) {
        alert(`جاري البحث عن: ${query} \n(سيتم ربطها بقاعدة بيانات بيوديرما وفيلورجا قريباً)`);
    }
}

if (searchInput && searchBtn) {
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') executeSearch();
    });
    searchBtn.addEventListener('click', executeSearch);
}

// 4. التحكم في زر التفاصيل الطبية (كمثال تفاعلي)
const detailButtons = document.querySelectorAll('.btn-primary');
detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        openGlossary("Sensibio H2O", "ماء ميسيلار لتنظيف البشرة الحساسة. لا يحتاج للشطف، يحافظ على الحاجز الجلدي (البيانات كاملة ستُجلب من الداتا).");
    });
});

// 5. التحكم في نافذة القاموس الطبي (Glossary Modal)
const modal = document.getElementById('glossaryModal');
const closeModalBtn = document.querySelector('.close-modal');

function openGlossary(termTitle, termDescription) {
    if (modal) {
        document.getElementById('modalTitle').textContent = termTitle;
        document.getElementById('modalDesc').textContent = termDescription;
        modal.classList.remove('hidden');
    }
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}

// إغلاق النافذة عند الضغط خارجها
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});
