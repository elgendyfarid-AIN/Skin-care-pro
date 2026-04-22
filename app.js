// ==========================================
// ⚙️ محرك الموقع الأليت (V2) - نسخة مستقرة وخالية من الأخطاء
// ==========================================

let currentLang = 'ar';
let activeBrand = null;
let activeFamily = null;

// 1. اللوجو والتنقل
document.querySelector('.brand-logo').style.cursor = 'pointer';
document.querySelector('.brand-logo').addEventListener('click', () => renderBrands());

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

// 2. أزرار التحكم (الإضاءة واللغة والبحث)
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

const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    langToggle.textContent = currentLang === 'ar' ? 'EN' : 'عربي';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelector('[data-target="products-section"]').textContent = currentLang === 'ar' ? 'المنتجات' : 'Products';
    document.querySelector('[data-target="routines-section"]').textContent = currentLang === 'ar' ? 'الروتين والأنظمة' : 'Routines & Regimens';
    document.querySelector('[data-target="skin-types-section"]').textContent = currentLang === 'ar' ? 'أنواع البشرة' : 'Skin Types';
    document.getElementById('productSearch').placeholder = currentLang === 'ar' ? '🔍 ابحث عن منتج...' : '🔍 Search product...';

    if(activeBrand) {
        if(activeFamily) {
            const famName = brandsList.find(b=>b.id===activeBrand).families.find(f=>f.id===activeFamily).name[currentLang];
            renderProducts(activeBrand, activeFamily, famName);
        } else { renderFamilies(activeBrand); }
    } else { renderBrands(); }
});

const searchInput = document.getElementById('productSearch');
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if(query.length >= 2) filterProducts(query);
    else if (query.length === 0) {
        if(activeFamily) {
            const famName = brandsList.find(b=>b.id===activeBrand).families.find(f=>f.id===activeFamily).name[currentLang];
            renderProducts(activeBrand, activeFamily, famName);
        } else if(activeBrand) renderFamilies(activeBrand);
        else renderBrands();
    }
});

// 3. عرض البراندات والعائلات والمنتجات
const brandsGrid = document.getElementById('brandsGrid');
const familiesGrid = document.getElementById('familiesGrid');
const productsGrid = document.getElementById('productsGrid');

function renderBrands() {
    activeBrand = null; activeFamily = null;
    familiesGrid.style.display = 'none'; productsGrid.style.display = 'none';
    brandsGrid.style.display = 'flex'; brandsGrid.style.flexWrap = 'wrap'; brandsGrid.style.gap = '15px';
    brandsGrid.innerHTML = '';

    // نظام فحص أخطاء ملف الداتا
    if (typeof brandsList === 'undefined' || brandsList.length === 0) {
        brandsGrid.innerHTML = `<h3 style="color: #FF4D4D; width: 100%; text-align: center; padding: 2rem;">⚠️ خطأ: ملف البيانات (data.js) فارغ أو يحتوي على خطأ برمجي. يرجى التأكد من نسخه بالكامل.</h3>`;
        return;
    }

    brandsList.forEach(brand => {
        const btn = document.createElement('button');
        btn.className = 'control-btn brand-btn';
        btn.innerHTML = `<h2 style="padding: 1rem 2rem; color: var(--primary-navy);">${brand.name}</h2>`;
        btn.onclick = () => renderFamilies(brand.id);
        brandsGrid.appendChild(btn);
    });
}

function renderFamilies(brandId) {
    activeBrand = brandId; activeFamily = null;
    brandsGrid.style.display = 'none'; productsGrid.style.display = 'none';
    familiesGrid.style.display = 'flex'; familiesGrid.style.flexWrap = 'wrap'; familiesGrid.style.gap = '15px';
    
    const backText = currentLang === 'ar' ? '🔙 رجوع للبراندات' : '🔙 Back to Brands';
    const brandName = brandsList.find(b=>b.id===brandId).name;
    
    familiesGrid.innerHTML = `
        <div style="width: 100%; margin-bottom: 20px;">
            <button onclick="renderBrands()" class="control-btn" style="border-color: var(--accent-gold);">${backText}</button>
            <h1 style="color: var(--primary-navy); margin-top: 15px;">${brandName}</h1>
        </div>
    `;

    const brand = brandsList.find(b => b.id === brandId);
    if(brand && brand.families) {
        brand.families.forEach(family => {
            const btn = document.createElement('button');
            btn.className = 'control-btn';
            btn.style.padding = '1.2rem 2.5rem'; btn.style.fontSize = '1.1rem';
            btn.textContent = family.name[currentLang];
            btn.onclick = () => renderProducts(brandId, family.id, family.name[currentLang]);
            familiesGrid.appendChild(btn);
        });
    }
}

function renderProducts(brandId, familyId, familyName) {
    activeBrand = brandId; activeFamily = familyId;
    familiesGrid.style.display = 'none';
    productsGrid.style.display = 'grid';
    productsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
    productsGrid.style.gap = '20px';
    
    const brandName = brandsList.find(b=>b.id===brandId).name;
    const backText = currentLang === 'ar' ? `🔙 رجوع لعائلات ${brandName}` : `🔙 Back to Families`;
    
    productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; margin-bottom: 20px;">
            <button onclick="renderFamilies('${brandId}')" class="control-btn" style="border-color: var(--accent-gold);">${backText}</button>
            <h2 style="margin-top: 20px; color: var(--accent-gold); border-bottom: 2px solid var(--accent-gold); padding-bottom: 10px;">${familyName}</h2>
        </div>
    `;

    deepProductsList.filter(p => p.familyId === familyId).forEach(prod => createProductCard(prod));
}

function filterProducts(query) {
    activeBrand = null; activeFamily = null;
    brandsGrid.style.display = 'none'; familiesGrid.style.display = 'none';
    productsGrid.style.display = 'grid';
    productsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
    productsGrid.style.gap = '20px';
    
    productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; margin-bottom: 20px;">
            <button onclick="renderBrands()" class="control-btn" style="border-color: var(--accent-gold);">${currentLang === 'ar' ? '🔙 إلغاء البحث' : '🔙 Cancel'}</button>
            <h2 style="margin-top: 20px; color: var(--primary-navy);">${currentLang === 'ar' ? 'نتائج البحث' : 'Search Results'}</h2>
        </div>
    `;

    const filtered = deepProductsList.filter(p => 
        p.name[currentLang].toLowerCase().includes(query) || 
        p.pharmacology.mechanism[currentLang].toLowerCase().includes(query)
    );

    if(filtered.length === 0) productsGrid.innerHTML += `<p style="grid-column: 1/-1; text-align: center;">${currentLang === 'ar' ? 'لا توجد نتائج.' : 'No results found.'}</p>`;
    else filtered.forEach(prod => createProductCard(prod));
}

function createProductCard(prod) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.position = 'relative';
    card.style.border = '1px solid var(--border-color)';
    card.style.padding = '20px';
    card.style.borderRadius = '12px';
    card.style.backgroundColor = 'var(--surface-color)';
    
    if(prod.clinical_usage && prod.clinical_usage.routine_step_number) {
        card.innerHTML += `<div style="position: absolute; top: 10px; right: 10px; background: var(--accent-gold); color: white; padding: 5px 10px; border-radius: 8px; font-weight: bold;">#${prod.clinical_usage.routine_step_number}</div>`;
    }
    
    card.innerHTML += `
        <h3 style="color: var(--primary-navy); margin-bottom: 10px; margin-top: 15px;">${prod.name[currentLang]}</h3>
        <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 20px; line-height: 1.6;">${prod.pharmacology.mechanism[currentLang]}</p>
        <button class="control-btn" style="width: 100%; background: var(--primary-navy); color: white;" onclick="openProductModal('${prod.id}')">${currentLang === 'ar' ? 'عرض البطاقة' : 'View Card'}</button>
    `;
    productsGrid.appendChild(card);
}

// 4. النافذة المنبثقة للبطاقة والقاموس
function openProductModal(productId) {
    const prod = deepProductsList.find(p => p.id === productId);
    if(!prod) return;
    
    const detailsContainer = document.getElementById('productDetails');
    const potencyPercentage = (prod.potency / 3) * 100;
    const potencyBarColor = prod.potency === 3 ? '#FF4D4D' : (prod.potency === 2 ? '#D4AF37' : '#28A745');

    let ingredientsHTML = '';
    prod.pharmacology.active_ingredients.forEach(ing => {
        const glossaryKey = ing.name.toLowerCase().replace(/ /g, '_').replace(/[\(\)\+\-]/g, '');
        const interactive = glossaryDict[glossaryKey] ? `style="cursor:pointer; color:var(--accent-gold); text-decoration:underline dashed;" onclick="openGlossary('${glossaryKey}')"` : '';
        ingredientsHTML += `<li ${interactive}><strong>${ing.name}</strong> (${ing.concentration[currentLang]}): ${ing.role[currentLang]}</li>`;
    });

    detailsContainer.innerHTML = `
        <h2 style="color: var(--primary-navy); border-bottom: 3px solid var(--accent-gold); padding-bottom: 10px; margin-bottom: 25px;">${prod.name[currentLang]}</h2>
        
        <div style="margin-bottom: 25px; background: rgba(212, 175, 55, 0.1); padding: 15px; border-radius: 12px; border: 1px solid var(--accent-gold);">
            <strong>${currentLang === 'ar' ? 'مقياس القوة:' : 'Potency Scale:'}</strong>
            <div style="margin-top: 10px; height: 12px; border-radius: 6px; background: var(--bg-color); border: 1px solid var(--border-color); overflow: hidden;">
                <div style="width: ${potencyPercentage}%; height: 100%; background: ${potencyBarColor};"></div>
            </div>
        </div>

        <h4 style="color: var(--accent-gold); margin-bottom: 8px;">${currentLang === 'ar' ? 'فائدة المستخدم:' : 'User Benefit:'}</h4>
        <p style="margin-bottom: 20px;">${prod.pharmacology.patient_benefit[currentLang]}</p>

        <h4 style="color: var(--accent-gold); margin-bottom: 8px;">${currentLang === 'ar' ? 'دواعي الاستخدام:' : 'Indications:'}</h4>
        <p style="margin-bottom: 20px; font-weight: bold;">${prod.precautions.indications[currentLang]}</p>

        <h4 style="color: var(--accent-gold); margin-bottom: 10px;">${currentLang === 'ar' ? 'المكونات النشطة:' : 'Active Ingredients:'}</h4>
        <ul style="margin-bottom: 25px; padding-inline-start: 20px;">${ingredientsHTML}</ul>

        <h4 style="color: var(--accent-gold); margin-bottom: 10px;">${currentLang === 'ar' ? 'التعارضات:' : 'Layering:'}</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px;">
            <div style="background: rgba(255, 77, 77, 0.1); padding: 15px; border-radius: 12px; border-right: 4px solid #FF4D4D;">
                <strong>${currentLang === 'ar' ? 'يُمنع الخلط مع:' : 'Do NOT mix with:'}</strong>
                <ul style="margin-top: 10px; padding-inline-start: 20px;">${prod.clinical_usage.layering.do_not_mix_with[currentLang].map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
            <div style="background: rgba(40, 167, 69, 0.1); padding: 15px; border-radius: 12px; border-right: 4px solid #28A745;">
                <strong>${currentLang === 'ar' ? 'الأفضل دمجه مع:' : 'Best mixed with:'}</strong>
                <ul style="margin-top: 10px; padding-inline-start: 20px;">${prod.clinical_usage.layering.best_mixed_with[currentLang].map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
        </div>
    `;

    const modal = document.getElementById('productModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.style.opacity = '1', 10);
}

document.querySelector('.close-modal-btn').addEventListener('click', () => {
    const modal = document.getElementById('productModal');
    modal.style.opacity = '0';
    setTimeout(() => modal.style.display = 'none', 300);
});

window.openGlossary = function(key) {
    const term = glossaryDict[key];
    if(!term) return;
    document.getElementById('glossaryTitle').textContent = term.title[currentLang];
    document.getElementById('glossaryDesc').innerHTML = term.desc[currentLang];
    
    const modal = document.getElementById('glossaryModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.style.opacity = '1', 10);
};

document.querySelector('.close-glossary-btn').addEventListener('click', () => {
    const modal = document.getElementById('glossaryModal');
    modal.style.opacity = '0';
    setTimeout(() => modal.style.display = 'none', 300);
});

// بدء التشغيل
setTimeout(() => renderBrands(), 100);
