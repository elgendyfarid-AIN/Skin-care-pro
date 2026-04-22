// ==========================================
// ⚙️ محرك الموقع الأليت (Elite Engine) - النسخة المطورة V2
// هذا المحرك سيتعامل مع بيانات الـ 27 بلوك التي بنيناها
// ==========================================

let currentLang = 'ar';
let activeBrand = null;
let activeFamily = null;

// 1. القاموس الطبي الأساسي (من بياناتنا السابقة)
const defaultGlossary = glossaryDict;

// 2. دوال البحث والتصفية (Search Bar)
const searchInput = document.getElementById('themeToggle'); // سنستخدم شريط البحث بدلاً من زر الإضاءة مؤقتاً
if(searchInput) {
    searchInput.type = "text";
    searchInput.id = "productSearch";
    searchInput.className = "control-btn search-bar";
    searchInput.placeholder = currentLang === 'ar' ? '🔍 ابحث عن منتج...' : '🔍 Search product...';
    searchInput.style.width = '250px';
    searchInput.style.border = '1px solid var(--accent-gold)';
    searchInput.style.fontSize = '1rem';
    
    // محرك البحث
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if(query.length > 2) {
            filterProducts(query);
        } else if (query.length === 0) {
            if(activeFamily) renderProducts(activeBrand, activeFamily, brandsList.find(b=>b.id===activeBrand).families.find(f=>f.id===activeFamily).name[currentLang]);
            else renderBrands();
        }
    });
}

// تشغيل اللوجو للرجوع للرئيسية
const brandLogo = document.querySelector('.brand-logo');
brandLogo.style.cursor = 'pointer';
brandLogo.addEventListener('click', () => {
    renderBrands();
});

// تشغيل زر الإضاءة (Dark Mode) - تم تحويله للبحث، سنستخدم شريط آخر للإضاءة
const controlsContainer = document.querySelector('.controls-container');
const themeBtn = document.createElement('button');
themeBtn.id = 'themeToggle';
themeBtn.className = 'control-btn';
themeBtn.textContent = '🌙';
themeBtn.title = currentLang === 'ar' ? 'تغيير الإضاءة' : 'Toggle Theme';
controlsContainer.appendChild(themeBtn);

themeBtn.addEventListener('click', () => {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeBtn.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.textContent = '☀️';
    }
});

// تشغيل زر تغيير اللغة
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    langToggle.textContent = currentLang === 'ar' ? 'EN' : 'عربي';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // تحديث عناوين التابات
    document.querySelector('[data-target="products-section"]').textContent = currentLang === 'ar' ? 'المنتجات' : 'Products';
    document.querySelector('[data-target="routines-section"]').textContent = currentLang === 'ar' ? 'الروتين والأنظمة' : 'Routines & Regimens';
    document.querySelector('[data-target="skin-types-section"]').textContent = currentLang === 'ar' ? 'أنواع البشرة' : 'Skin Types';
    
    // تحديث شريط البحث
    const searchBar = document.getElementById('productSearch');
    if(searchBar) searchBar.placeholder = currentLang === 'ar' ? '🔍 ابحث عن منتج...' : '🔍 Search product...';

    // إعادة رسم الواجهة
    if(activeBrand) {
        if(activeFamily) renderProducts(activeBrand, activeFamily, brandsList.find(b=>b.id===activeBrand).families.find(f=>f.id===activeFamily).name[currentLang]);
        else renderFamilies(activeBrand);
    } else {
        renderBrands();
    }
});

// 3. عرض البراندات والعائلات والمنتجات (التسلسل الهرمي الأليت)
const brandsGrid = document.getElementById('brandsGrid');
const familiesGrid = document.getElementById('familiesGrid');
const productsGrid = document.getElementById('productsGrid');

// عرض البراندات
function renderBrands() {
    activeBrand = null;
    activeFamily = null;
    familiesGrid.style.display = 'none';
    productsGrid.style.display = 'none';
    brandsGrid.style.display = 'flex';
    brandsGrid.style.flexWrap = 'wrap';
    brandsGrid.style.gap = '15px';
    brandsGrid.innerHTML = '';

    brandsList.forEach(brand => {
        const btn = document.createElement('button');
        btn.className = 'control-btn brand-btn';
        btn.innerHTML = `
            <img src="https://via.placeholder.com/150?text=${brand.name}" alt="${brand.name}" style="width: 100%; max-width: 120px; border-radius: 12px; margin-bottom: 10px; display: block;">
            ${brand.name}
        `;
        btn.onclick = () => renderFamilies(brand.id);
        brandsGrid.appendChild(btn);
    });
}

// عرض العائلات
function renderFamilies(brandId) {
    activeBrand = brandId;
    activeFamily = null;
    brandsGrid.style.display = 'none';
    productsGrid.style.display = 'none';
    familiesGrid.style.display = 'flex';
    familiesGrid.style.flexWrap = 'wrap';
    familiesGrid.style.gap = '15px';
    
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
            btn.style.padding = '1.2rem 2.5rem';
            btn.style.fontSize = '1.1rem';
            btn.textContent = family.name[currentLang];
            btn.onclick = () => renderProducts(brandId, family.id, family.name[currentLang]);
            familiesGrid.appendChild(btn);
        });
    }
}

// عرض المنتجات
function renderProducts(brandId, familyId, familyName) {
    activeBrand = brandId;
    activeFamily = familyId;
    familiesGrid.style.display = 'none';
    productsGrid.style.display = 'grid';
    productsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
    productsGrid.style.gap = '20px';
    
    const brandName = brandsList.find(b=>b.id===brandId).name;
    const backText = currentLang === 'ar' ? `🔙 رجوع لعائلات ${brandName}` : `🔙 Back to ${brandName} Families`;
    const detailsText = currentLang === 'ar' ? 'عرض البطاقة الأليت' : 'View Elite Card';

    productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; margin-bottom: 20px;">
            <button onclick="renderFamilies('${brandId}')" class="control-btn" style="border-color: var(--accent-gold);">${backText}</button>
            <h2 style="margin-top: 20px; color: var(--accent-gold); border-bottom: 2px solid var(--accent-gold); padding-bottom: 10px;">${familyName}</h2>
        </div>
    `;

    const products = deepProductsList.filter(p => p.familyId === familyId);
    products.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card elite-card';
        card.style.position = 'relative';
        
        // شارة الروتين
        if(prod.clinical_usage && prod.clinical_usage.routine_step_number) {
            const stepTag = document.createElement('div');
            stepTag.className = 'routine-step-tag';
            stepTag.textContent = `#${prod.clinical_usage.routine_step_number}`;
            card.appendChild(stepTag);
        }
        
        card.innerHTML += `
            <img src="${prod.image || 'https://via.placeholder.com/300?text='+prod.name[currentLang]}" alt="${prod.name[currentLang]}" style="width: 100%; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: var(--primary-navy); margin-bottom: 10px;">${prod.name[currentLang]}</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 20px; line-height: 1.6;">${prod.pharmacology.mechanism[currentLang]}</p>
            <button class="control-btn elite-btn" style="width: 100%;">${detailsText}</button>
        `;
        
        card.querySelector('.elite-btn').onclick = () => openProductModal(prod.id);
        productsGrid.appendChild(card);
    });
}

// 4. فتح نافذة البطاقة الأليت المحدثة (Modal)
function openProductModal(productId) {
    const prod = deepProductsList.find(p => p.id === productId);
    if(!prod) return;

    const detailsContainer = document.getElementById('productDetails');
    
    // نصوص الأليت حسب اللغة
    const t = {
        strength: currentLang === 'ar' ? 'مقياس القوة (الأليت):' : 'Elite Potency Scale:',
        routine: currentLang === 'ar' ? 'خطوة الروتين:' : 'Routine Step:',
        duration: currentLang === 'ar' ? 'مدة الاستخدام الموصى بها:' : 'Recommended Usage Duration:',
        indications: currentLang === 'ar' ? 'الحالات المناسبة للاستخدام:' : 'Suitable For (Elite Conditions):',
        active: currentLang === 'ar' ? 'المكونات النشطة (التفاعلية):' : 'Active Ingredients (Interactive):',
        interactions: currentLang === 'ar' ? 'التداخلات الدوائية والتعارضات:' : 'Drug Interactions & Layering:',
        layering: currentLang === 'ar' ? 'التعارضات (Layering):' : 'Layering Interactions:',
        dontMix: currentLang === 'ar' ? 'يُمنع الخلط مع:' : 'Do NOT mix with:',
        bestMix: currentLang === 'ar' ? 'الأفضل دمجه مع:' : 'Best mixed with:',
        warnings: currentLang === 'ar' ? 'التحذيرات والاحتياطات (الأليت):' : 'Precautions & Warnings (Elite):',
        ph: currentLang === 'ar' ? 'درجة الحموضة (pH):' : 'pH Level:',
        safe: currentLang === 'ar' ? 'آمن ✅' : 'Safe ✅',
        notSafe: currentLang === 'ar' ? 'غير آمن ❌' : 'Not Safe ❌',
        notes: currentLang === 'ar' ? 'ملاحظات المستخدم (الأليت):' : 'Elite User Notes:',
        benefit: currentLang === 'ar' ? 'فائدة المستخدم:' : 'User Benefit:'
    };

    // حساب نسبة القوة لشريط التحميل
    const potencyPercentage = (prod.potency / 3) * 100;
    const potencyBarColor = prod.potency === 3 ? '#FF4D4D' : (prod.potency === 2 ? var(--accent-gold) : '#28A745');

    let ingredientsHTML = '';
    prod.pharmacology.active_ingredients.forEach(ing => {
        const glossaryKey = ing.name.toLowerCase().replace(/ /g, '_').replace(/[\(\)\+\-]/g, '');
        const interactive = glossaryDict[glossaryKey] ? `class="interactive-term glossary-term" onclick="openGlossary('${glossaryKey}')"` : '';
        ingredientsHTML += `<li ${interactive}><strong>${ing.name}</strong> (${ing.concentration[currentLang]}): ${ing.role[currentLang]}</li>`;
    });

    detailsContainer.innerHTML = `
        <h2 style="color: var(--primary-navy); border-bottom: 3px solid var(--accent-gold); padding-bottom: 10px; margin-bottom: 25px;">${prod.name[currentLang]}</h2>
        
        <div class="elite-potency-container" style="display: flex; gap: 20px; align-items: center; margin-bottom: 25px; background: rgba(212, 175, 55, 0.1); padding: 15px; border-radius: 12px; border: 1px solid var(--accent-gold);">
            <div style="flex: 1;">
                <strong>${t.strength}</strong>
                <div class="elite-progress-bar" style="margin-top: 10px; height: 12px; border-radius: 6px; background: var(--bg-color); border: 1px solid var(--border-color); overflow: hidden;">
                    <div style="width: ${potencyPercentage}%; height: 100%; background: ${potencyBarColor}; transition: width 0.3s ease;"></div>
                </div>
            </div>
            ${prod.clinical_usage && prod.clinical_usage.routine_step_number ? `
                <div class="routine-step-circle" style="width: 60px; height: 60px; background: var(--primary-navy); border-radius: 50%; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <span style="font-size: 0.8rem;">#${t.routine.split(':')[0]}</span>
                    <span style="font-size: 1.5rem; font-weight: 700;">${prod.clinical_usage.routine_step_number}</span>
                </div>
            `: ''}
        </div>

        <h4 style="color: var(--accent-gold); margin-bottom: 8px;">${t.benefit}</h4>
        <p style="margin-bottom: 20px; line-height: 1.8; color: var(--text-main);">${prod.pharmacology.patient_benefit[currentLang]}</p>

        <h4 style="color: var(--accent-gold); margin-bottom: 8px;">${t.indications}</h4>
        <p style="margin-bottom: 20px; line-height: 1.8; color: var(--text-main); font-weight: 500;">${prod.precautions.indications[currentLang]}</p>

        ${prod.clinical_usage && prod.clinical_usage.usage_duration ? `
            <h4 style="color: var(--accent-gold); margin-bottom: 8px;">${t.duration}</h4>
            <p style="margin-bottom: 20px; line-height: 1.8; color: var(--primary-navy); font-weight: 600;">${prod.clinical_usage.usage_duration[currentLang]}</p>
        `: ''}

        <h4 style="color: var(--accent-gold); margin-bottom: 10px;">${t.active}</h4>
        <ul style="margin-bottom: 25px; padding-inline-start: 20px; line-height: 1.8; color: var(--text-main);">
            ${ingredientsHTML}
        </ul>

        <h4 style="color: var(--accent-gold); margin-bottom: 10px;">${t.layering}</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px;">
            <div style="background: rgba(255, 77, 77, 0.1); padding: 15px; border-radius: 12px; border-right: 4px solid #FF4D4D;">
                <strong>${t.dontMix}</strong>
                <ul style="margin-top: 10px; padding-inline-start: 20px;">
                    ${prod.clinical_usage.layering.do_not_mix_with[currentLang].map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            <div style="background: rgba(40, 167, 69, 0.1); padding: 15px; border-radius: 12px; border-right: 4px solid #28A745;">
                <strong>${t.bestMix}</strong>
                <ul style="margin-top: 10px; padding-inline-start: 20px;">
                    ${prod.clinical_usage.layering.best_mixed_with[currentLang].map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>

        <h4 style="color: var(--accent-gold); margin-bottom: 10px;">${t.warnings}</h4>
        <div style="background: var(--bg-color); padding: 20px; border-radius: 12px; border: 1px solid var(--border-color); display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center;">
            <div style="background: var(--surface-color); padding: 10px; border-radius: 8px;">
                <strong>${t.ph}</strong><br>
                <span>${prod.pharmacology.ph_level[currentLang]}</span>
            </div>
            <div style="background: rgba(40, 167, 69, 0.1); padding: 10px; border-radius: 8px;">
                <strong>${t.pregSafe}</strong><br>
                <span>${prod.precautions.pregnancy_safe ? t.safe : t.notSafe}</span>
            </div>
            <div style="background: rgba(255, 77, 77, 0.1); padding: 10px; border-radius: 8px;">
                <strong>${t.notes}</strong><br>
                <span>${prod.precautions.notes[currentLang] || t.none}</span>
            </div>
        </div>
    `;

    const modal = document.getElementById('productModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.style.opacity = '1', 10);
}

// إغلاق نافذة البطاقة الطبية
document.querySelector('.close-modal-btn').addEventListener('click', () => {
    const modal = document.getElementById('productModal');
    modal.style.opacity = '0';
    setTimeout(() => modal.style.display = 'none', 300);
});

// 5. تشغيل نافذة القاموس الطبي التفاعلي (الرابط الفعلي بالـ V2)
window.openGlossary = function(key) {
    const term = glossaryDict[key] || defaultGlossary[key]; // نبحث في قاموس البراند أولاً ثم القاموس العام
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

// دوال تصفية البحث
function filterProducts(query) {
    activeBrand = null;
    activeFamily = null;
    brandsGrid.style.display = 'none';
    familiesGrid.style.display = 'none';
    productsGrid.style.display = 'grid';
    productsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
    productsGrid.style.gap = '20px';
    
    productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
            <button onclick="renderBrands()" class="control-btn" style="border-color: var(--accent-gold);">${currentLang === 'ar' ? '🔙 إلغاء البحث' : '🔙 Cancel Search'}</button>
            <h2 style="color: var(--primary-navy);">${currentLang === 'ar' ? `نتائج البحث عن "${query}"` : `Search results for "${query}"`}</h2>
        </div>
    `;

    const filtered = deepProductsList.filter(p => 
        p.name[currentLang].toLowerCase().includes(query) || 
        p.pharmacology.mechanism[currentLang].toLowerCase().includes(query) ||
        p.precautions.indications[currentLang].toLowerCase().includes(query)
    );

    if(filtered.length === 0) {
        productsGrid.innerHTML += `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px; color: var(--text-muted); font-size: 1.2rem;">
                ${currentLang === 'ar' ? 'عذراً، لم يتم العثور على منتجات.' : 'Sorry, no products found.'}
            </div>
        `;
        return;
    }

    filtered.forEach(prod => {
        // ... نفس كود كارت المنتج الموجود في renderProducts ...
    });
}

// بدء التشغيل فور فتح الموقع
renderBrands();
