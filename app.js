// ==========================================
// ⚙️ محرك الموقع (المدير) - App.js
// ==========================================

let currentLang = 'ar';

// 1. تشغيل أزرار التنقل (التابات)
const tabs = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.content-section');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.style.display = 'none');
        tab.classList.add('active');
        document.getElementById(tab.dataset.target).style.display = 'block';
    });
});

// 2. تشغيل زر الإضاءة (Dark Mode)
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

// 3. تشغيل زر تغيير اللغة (عربي / إنجليزي)
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    langToggle.textContent = currentLang === 'ar' ? 'EN' : 'عربي';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    renderBrands(); // إعادة رسم المنتجات باللغة الجديدة
});

// 4. عرض البراندات والمنتجات من المخزن
const brandsGrid = document.getElementById('brandsGrid');
const productsGrid = document.getElementById('productsGrid');

function renderBrands() {
    brandsGrid.innerHTML = '';
    productsGrid.style.display = 'none';
    brandsGrid.style.display = 'flex';
    brandsGrid.style.flexWrap = 'wrap';
    brandsGrid.style.gap = '15px';

    brandsList.forEach(brand => {
        const btn = document.createElement('button');
        btn.className = 'control-btn';
        btn.style.padding = '1rem 2rem';
        btn.style.fontSize = '1.2rem';
        btn.textContent = brand.name;
        btn.onclick = () => renderProducts(brand.id);
        brandsGrid.appendChild(btn);
    });
}

function renderProducts(brandId) {
    brandsGrid.style.display = 'none';
    productsGrid.style.display = 'grid';
    productsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
    productsGrid.style.gap = '20px';
    
    // زر الرجوع
    productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; margin-bottom: 20px;">
            <button onclick="renderBrands()" class="control-btn">🔙 رجوع للبراندات</button>
        </div>
    `;

    const products = deepProductsList.filter(p => p.brandId === brandId);
    products.forEach(prod => {
        const card = document.createElement('div');
        card.style.border = '1px solid var(--border-color)';
        card.style.padding = '20px';
        card.style.borderRadius = '12px';
        card.style.backgroundColor = 'var(--surface-color)';
        
        card.innerHTML = `
            <h3 style="color: var(--primary-navy); margin-bottom: 10px;">${prod.name[currentLang]}</h3>
            <p><strong>آلية العمل:</strong> ${prod.pharmacology.mechanism[currentLang]}</p>
        `;
        productsGrid.appendChild(card);
    });
}

// 5. تشغيل نافذة القاموس الطبي التفاعلي
window.openGlossary = function(key) {
    const term = glossaryDict[key];
    if(!term) return;
    document.getElementById('glossaryTitle').textContent = term.title[currentLang];
    document.getElementById('glossaryDesc').innerHTML = term.desc[currentLang];
    
    const modal = document.getElementById('glossaryModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.style.opacity = '1', 10);
};

// إغلاق نافذة القاموس
document.querySelector('.close-glossary-btn').addEventListener('click', () => {
    const modal = document.getElementById('glossaryModal');
    modal.style.opacity = '0';
    setTimeout(() => modal.style.display = 'none', 300);
});

// بدء التشغيل فور فتح الموقع
renderBrands();
