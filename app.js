// ==========================================
// ⚙️ محرك الموقع المطور (التسلسل التفاعلي)
// ==========================================

let currentLang = 'ar';
let activeBrand = null;
let activeFamily = null;

window.onload = () => {
    if (typeof brandsList === 'undefined' || typeof deepProductsList === 'undefined') {
        document.getElementById('brandsGrid').innerHTML = `<h3 style="text-align:center; color:red; width:100%;">⚠️ تأكد من وجود ملف data.js</h3>`;
    } else {
        renderBrands();
    }
};

const breadcrumb = document.getElementById('breadcrumb');
const brandsGrid = document.getElementById('brandsGrid');
const familiesGrid = document.getElementById('familiesGrid');
const productsGrid = document.getElementById('productsGrid');

// 1. اللوجو والتحكم
document.querySelector('.brand-logo').addEventListener('click', () => {
    document.getElementById('productSearch').value = '';
    renderBrands();
});

document.getElementById('themeToggle').addEventListener('click', (e) => {
    document.body.toggleAttribute('data-theme');
    e.target.textContent = document.body.hasAttribute('data-theme') ? '☀️' : '🌙';
});

document.getElementById('langToggle').addEventListener('click', (e) => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    e.target.textContent = currentLang === 'ar' ? 'EN' : 'عربي';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // تحديث النصوص الثابتة
    document.querySelector('[data-target="products-section"]').textContent = currentLang === 'ar' ? 'المنتجات' : 'Products';
    document.querySelector('[data-target="routines-section"]').textContent = currentLang === 'ar' ? 'حالات البشرة والروتين' : 'Skin Conditions & Routines';
    document.querySelector('[data-target="skin-types-section"]').textContent = currentLang === 'ar' ? 'أنواع البشرة' : 'Skin Types';
    document.getElementById('productSearch').placeholder = currentLang === 'ar' ? '🔍 ابحث عن منتج أو مادة...' : '🔍 Search product...';

    if(activeBrand && activeFamily) renderProducts(activeBrand, activeFamily, brandsList.find(b=>b.id===activeBrand).families.find(f=>f.id===activeFamily).name[currentLang]);
    else if(activeBrand) renderFamilies(activeBrand);
    else renderBrands();
});

// 2. إدارة التسلسل الهرمي التفاعلي (Navigation Logic)
function updateBreadcrumb(level, brandName = '', familyName = '') {
    const productsText = currentLang === 'ar' ? 'المنتجات' : 'Products';
    const brandsText = currentLang === 'ar' ? 'البراندات' : 'Brands';
    const sep = ' <span style="margin:0 5px; opacity:0.5;">/</span> ';

    if (level === 'brands') {
        breadcrumb.innerHTML = `<span class="breadcrumb-current">${productsText} ${sep} ${brandsText}</span>`;
    } 
    else if (level === 'families') {
        breadcrumb.innerHTML = `
            <span class="breadcrumb-link" onclick="renderBrands()" style="cursor:pointer; color:var(--primary-navy); text-decoration:underline;">${brandsText}</span> 
            ${sep} <span class="breadcrumb-current">${brandName}</span>
        `;
    } 
    else if (level === 'products') {
        breadcrumb.innerHTML = `
            <span class="breadcrumb-link" onclick="renderBrands()" style="cursor:pointer; color:var(--primary-navy); text-decoration:underline;">${brandsText}</span> 
            ${sep} <span class="breadcrumb-link" onclick="renderFamilies('${activeBrand}')" style="cursor:pointer; color:var(--primary-navy); text-decoration:underline;">${brandName}</span> 
            ${sep} <span class="breadcrumb-current">${familyName}</span>
        `;
    }
}

// 3. دوال العرض
window.renderBrands = function() {
    activeBrand = null; activeFamily = null;
    familiesGrid.style.display = 'none'; productsGrid.style.display = 'none';
    brandsGrid.style.display = 'grid'; brandsGrid.innerHTML = '';
    updateBreadcrumb('brands');

    brandsList.forEach(brand => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.cssText = 'cursor:pointer; align-items:center; justify-content:center; min-height:150px; text-align:center;';
        card.innerHTML = `<h2 style="color:var(--primary-navy);">${brand.name}</h2>`;
        card.onclick = () => renderFamilies(brand.id);
        brandsGrid.appendChild(card);
    });
};

window.renderFamilies = function(brandId) {
    activeBrand = brandId; activeFamily = null;
    brandsGrid.style.display = 'none'; productsGrid.style.display = 'none';
    familiesGrid.style.display = 'grid'; familiesGrid.innerHTML = '';
    
    const brand = brandsList.find(b => b.id === brandId);
    updateBreadcrumb('families', brand.name);

    brand.families.forEach(family => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.cssText = 'cursor:pointer; align-items:center; justify-content:center; min-height:120px; text-align:center;';
        card.innerHTML = `<h3 style="color:var(--primary-navy);">${family.name[currentLang]}</h3>`;
        card.onclick = () => renderProducts(brandId, family.id, family.name[currentLang]);
        familiesGrid.appendChild(card);
    });
};

window.renderProducts = function(brandId, familyId, familyName) {
    activeBrand = brandId; activeFamily = familyId;
    familiesGrid.style.display = 'none'; brandsGrid.style.display = 'none';
    productsGrid.style.display = 'grid'; productsGrid.innerHTML = '';
    
    const brandName = brandsList.find(b=>b.id===brandId).name;
    updateBreadcrumb('products', brandName, familyName);

    const products = deepProductsList.filter(p => p.familyId === familyId);
    products.forEach(prod => createProductCard(prod));
};

function createProductCard(prod) {
    const card = document.createElement('div');
    card.className = 'product-card';
    if(prod.clinical_usage?.routine_step_number) {
        card.innerHTML += `<div class="routine-step-badge">${currentLang === 'ar' ? 'خطوة' : 'Step'} ${prod.clinical_usage.routine_step_number}</div>`;
    }
    let shortMech = prod.pharmacology.mechanism[currentLang].substring(0, 100) + "...";
    card.innerHTML += `
        <div>
            <h3 class="card-title">${prod.name[currentLang]}</h3>
            <p style="font-size:0.9rem; color:var(--text-muted);">${shortMech}</p>
        </div>
        <button class="control-btn view-card-btn" onclick="openProductModal('${prod.id}')">${currentLang === 'ar' ? 'عرض البطاقة الطبية' : 'View Medical Card'}</button>
    `;
    productsGrid.appendChild(card);
}

// 4. البحث والنافذة المنبثقة
document.getElementById('productSearch').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if(query.length >= 2) filterProducts(query);
    else if (query.length === 0) renderBrands();
});

function filterProducts(query) {
    brandsGrid.style.display = 'none'; familiesGrid.style.display = 'none';
    productsGrid.style.display = 'grid'; productsGrid.innerHTML = '';
    breadcrumb.innerHTML = `<span class="breadcrumb-current">${currentLang === 'ar' ? 'نتائج البحث' : 'Search Results'}</span>`;

    deepProductsList.filter(p => {
        const searchPool = (p.name[currentLang] + " " + p.pharmacology.mechanism[currentLang]).toLowerCase();
        return searchPool.includes(query);
    }).forEach(prod => createProductCard(prod));
}

window.openProductModal = function(productId) {
    const prod = deepProductsList.find(p => p.id === productId);
    if(!prod) return;
    const detailsContainer = document.getElementById('productDetails');
    const potencyPercentage = (prod.potency / 3) * 100;
    const potencyColor = prod.potency === 3 ? '#E53E3E' : (prod.potency === 2 ? '#D69E2E' : '#38A169');

    let ingredientsHTML = '';
    prod.pharmacology.active_ingredients.forEach(ing => {
        const glossaryKey = ing.name.toLowerCase().replace(/ /g, '_').replace(/[\(\)\+\-]/g, '');
        const interactive = glossaryDict[glossaryKey] ? `class="interactive-term" onclick="openGlossary('${glossaryKey}')"` : '';
        ingredientsHTML += `<li><span ${interactive}>${ing.name}</span>: ${ing.role[currentLang]}</li>`;
    });

    detailsContainer.innerHTML = `
        <h2 style="color:var(--primary-navy); border-bottom:2px solid var(--border-color); padding-bottom:15px; margin-bottom:20px;">${prod.name[currentLang]}</h2>
        <div style="margin-bottom:20px;">
            <strong>${currentLang === 'ar' ? 'مقياس القوة:' : 'Potency Scale:'}</strong>
            <div style="height:8px; border-radius:4px; background:#CBD5E0; margin-top:5px; overflow:hidden;">
                <div style="width:${potencyPercentage}%; height:100%; background:${potencyColor};"></div>
            </div>
        </div>
        <p><strong>${currentLang === 'ar' ? 'دواعي الاستعمال:' : 'Indications:'}</strong> ${prod.precautions.indications[currentLang]}</p>
        <p style="margin-top:10px;">${prod.pharmacology.patient_benefit[currentLang]}</p>
        <h4 style="margin-top:20px; color:var(--accent-gold);">${currentLang === 'ar' ? 'المكونات:' : 'Ingredients:'}</h4>
        <ul>${ingredientsHTML}</ul>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-top:20px;">
            <div style="background:#FFF5F5; padding:10px; border-radius:8px; border-right:4px solid #E53E3E;"><strong>🚫 ${currentLang === 'ar' ? 'يمنع مع:' : 'No Mix:'}</strong><ul>${prod.clinical_usage.layering.do_not_mix_with[currentLang].map(i=>`<li>${i}</li>`).join('')}</ul></div>
            <div style="background:#F0FFF4; padding:10px; border-radius:8px; border-right:4px solid #38A169;"><strong>✅ ${currentLang === 'ar' ? 'أفضل مع:' : 'Best Mix:'}</strong><ul>${prod.clinical_usage.layering.best_mixed_with[currentLang].map(i=>`<li>${i}</li>`).join('')}</ul></div>
        </div>
    `;
    const modal = document.getElementById('productModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.style.opacity = '1', 10);
};

document.querySelector('.close-modal-btn').onclick = () => {
    const modal = document.getElementById('productModal');
    modal.style.opacity = '0';
    setTimeout(() => modal.style.display = 'none', 300);
};
