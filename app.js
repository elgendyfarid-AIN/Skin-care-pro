// ==========================================
// ⚙️ محرك الموقع المطور (App.js) - Elite Version
// ==========================================

let currentLang = 'ar';

// 1. تشغيل اللوجو للرجوع للرئيسية
const brandLogo = document.querySelector('.brand-logo');
brandLogo.style.cursor = 'pointer';
brandLogo.addEventListener('click', () => {
    renderBrands();
});

// 2. تشغيل أزرار التنقل (التابات)
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

// 3. تشغيل زر الإضاءة (Dark Mode)
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

// 4. تشغيل زر تغيير اللغة
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    langToggle.textContent = currentLang === 'ar' ? 'EN' : 'عربي';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // تحديث العناوين الثابتة في التابات
    document.querySelector('[data-target="products-section"]').textContent = currentLang === 'ar' ? 'المنتجات' : 'Products';
    document.querySelector('[data-target="routines-section"]').textContent = currentLang === 'ar' ? 'حالات البشرة والروتين' : 'Skin Conditions & Routines';
    document.querySelector('[data-target="skin-types-section"]').textContent = currentLang === 'ar' ? 'أنواع البشرة' : 'Skin Types';

    // العودة للرئيسية عند تغيير اللغة لضمان تحديث كل النصوص
    renderBrands(); 
});

// 5. التسلسل الهرمي (البراندات > العائلات > المنتجات)
const brandsGrid = document.getElementById('brandsGrid');
const familiesGrid = document.getElementById('familiesGrid');
const productsGrid = document.getElementById('productsGrid');

// عرض البراندات
function renderBrands() {
    familiesGrid.style.display = 'none';
    productsGrid.style.display = 'none';
    brandsGrid.style.display = 'flex';
    brandsGrid.style.flexWrap = 'wrap';
    brandsGrid.style.gap = '15px';
    brandsGrid.innerHTML = '';

    brandsList.forEach(brand => {
        const btn = document.createElement('button');
        btn.className = 'control-btn';
        btn.style.padding = '1.5rem 3rem';
        btn.style.fontSize = '1.3rem';
        btn.textContent = brand.name;
        btn.onclick = () => renderFamilies(brand.id);
        brandsGrid.appendChild(btn);
    });
}

// عرض العائلات داخل البراند
function renderFamilies(brandId) {
    brandsGrid.style.display = 'none';
    productsGrid.style.display = 'none';
    familiesGrid.style.display = 'flex';
    familiesGrid.style.flexWrap = 'wrap';
    familiesGrid.style.gap = '15px';
    
    const backText = currentLang === 'ar' ? '🔙 رجوع للبراندات' : '🔙 Back to Brands';
    familiesGrid.innerHTML = `
        <div style="width: 100%; margin-bottom: 20px;">
            <button onclick="renderBrands()" class="control-btn" style="border-color: var(--accent-gold);">${backText}</button>
        </div>
    `;

    const brand = brandsList.find(b => b.id === brandId);
    if(brand && brand.families) {
        brand.families.forEach(family => {
            const btn = document.createElement('button');
            btn.className = 'control-btn';
            btn.style.padding = '1rem 2rem';
            btn.style.fontSize = '1.1rem';
            btn.textContent = family.name[currentLang];
            btn.onclick = () => renderProducts(brandId, family.id, family.name[currentLang]);
            familiesGrid.appendChild(btn);
        });
    }
}

// عرض المنتجات داخل العائلة
function renderProducts(brandId, familyId, familyName) {
    familiesGrid.style.display = 'none';
    productsGrid.style.display = 'grid';
    productsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
    productsGrid.style.gap = '20px';
    
    const backText = currentLang === 'ar' ? `🔙 رجوع لعائلات ${brandsList.find(b=>b.id===brandId).name}` : `🔙 Back to ${brandsList.find(b=>b.id===brandId).name} Families`;
    const mechText = currentLang === 'ar' ? 'آلية العمل:' : 'Mechanism of Action:';
    const moreText = currentLang === 'ar' ? 'عرض البطاقة الطبية الكاملة' : 'View Full Medical Card';

    productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; margin-bottom: 20px;">
            <button onclick="renderFamilies('${brandId}')" class="control-btn" style="border-color: var(--accent-gold);">${backText}</button>
            <h2 style="margin-top: 20px; color: var(--primary-navy);">${familyName}</h2>
        </div>
    `;

    const products = deepProductsList.filter(p => p.familyId === familyId);
    products.forEach(prod => {
        const card = document.createElement('div');
        card.style.border = '1px solid var(--border-color)';
        card.style.padding = '20px';
        card.style.borderRadius = '12px';
        card.style.backgroundColor = 'var(--surface-color)';
        card.style.cursor = 'pointer';
        card.style.transition = 'var(--transition-smooth)';
        
        // تأثير حركي عند المرور على الكارت
        card.onmouseover = () => card.style.transform = 'translateY(-5px)';
        card.onmouseout = () => card.style.transform = 'translateY(0)';
        
        card.onclick = () => openProductModal(prod.id);
        
        card.innerHTML = `
            <h3 style="color: var(--primary-navy); margin-bottom: 10px; border-bottom: 2px solid var(--accent-gold); padding-bottom: 10px;">${prod.name[currentLang]}</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 15px;"><strong>${mechText}</strong> ${prod.pharmacology.mechanism[currentLang]}</p>
            <button class="control-btn" style="width: 100%; background-color: var(--primary-navy); color: white;">${moreText}</button>
        `;
        productsGrid.appendChild(card);
    });
}

// 6. فتح نافذة البطاقة الطبية (Modal)
function openProductModal(productId) {
    const prod = deepProductsList.find(p => p.id === productId);
    if(!prod) return;

    const detailsContainer = document.getElementById('productDetails');
    
    // تجهيز النصوص حسب اللغة
    const t = {
        potency: currentLang === 'ar' ? 'القوة السريرية:' : 'Clinical Potency:',
        ph: currentLang === 'ar' ? 'درجة الحموضة (pH):' : 'pH Level:',
        mech: currentLang === 'ar' ? 'آلية العمل الدوائية:' : 'Pharmacological Mechanism:',
        benefit: currentLang === 'ar' ? 'فائدة المريض:' : 'Patient Benefit:',
        active: currentLang === 'ar' ? 'المكونات النشطة:' : 'Active Ingredients:',
        usage: currentLang === 'ar' ? 'الاستخدام السريري:' : 'Clinical Usage:',
        freq: currentLang === 'ar' ? 'التكرار:' : 'Frequency:',
        step: currentLang === 'ar' ? 'الخطوة:' : 'Step:',
        app: currentLang === 'ar' ? 'التطبيق:' : 'Application:',
        layering: currentLang === 'ar' ? 'التعارضات والتداخلات:' : 'Layering & Interactions:',
        dontMix: currentLang === 'ar' ? 'يُمنع الخلط مع:' : 'Do NOT mix with:',
        bestMix: currentLang === 'ar' ? 'الأفضل دمجه مع:' : 'Best mixed with:',
        precautions: currentLang === 'ar' ? 'الاحتياطات والتحذيرات:' : 'Precautions & Warnings:',
        indications: currentLang === 'ar' ? 'دواعي الاستعمال:' : 'Indications:',
        pregSafe: currentLang === 'ar' ? 'آمن للحمل:' : 'Pregnancy Safe:',
        sunSens: currentLang === 'ar' ? 'حساسية الشمس:' : 'Sun Sensitivity:',
        notes: currentLang === 'ar' ? 'ملاحظات إضافية:' : 'Additional Notes:',
        yes: currentLang === 'ar' ? 'نعم ✅' : 'Yes ✅',
        no: currentLang === 'ar' ? 'لا ❌' : 'No ❌',
    };

    let ingredientsHTML = '';
    prod.pharmacology.active_ingredients.forEach(ing => {
        ingredientsHTML += `<li><strong>${ing.name}</strong> (${ing.concentration[currentLang]}): ${ing.role[currentLang]}</li>`;
    });

    detailsContainer.innerHTML = `
        <h2 style="color: var(--primary-navy); border-bottom: 3px solid var(--accent-gold); padding-bottom: 10px; margin-bottom: 20px;">${prod.name[currentLang]}</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; background: rgba(212, 175, 55, 0.1); padding: 15px; border-radius: 8px;">
            <p><strong>${t.potency}</strong> ${prod.potency}/3</p>
            <p><strong>${t.ph}</strong> ${prod.pharmacology.ph_level[currentLang]}</p>
        </div>

        <h4 style="color: var(--accent-gold); margin-bottom: 5px;">${t.mech}</h4>
        <p style="margin-bottom: 15px; line-height: 1.8;">${prod.pharmacology.mechanism[currentLang]}</p>

        <h4 style="color: var(--accent-gold); margin-bottom: 5px;">${t.benefit}</h4>
        <p style="margin-bottom: 20px; line-height: 1.8;">${prod.pharmacology.patient_benefit[currentLang]}</p>

        <h4 style="color: var(--accent-gold); margin-bottom: 5px;">${t.active}</h4>
        <ul style="margin-bottom: 20px; padding-inline-start: 20px; line-height: 1.8;">
            ${ingredientsHTML}
        </ul>

        <h4 style="color: var(--accent-gold); margin-bottom: 5px;">${t.usage}</h4>
        <div style="background: var(--bg-color); padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid var(--border-color);">
            <p><strong>${t.freq}</strong> ${prod.clinical_usage.frequency[currentLang]}</p>
            <p><strong>${t.step}</strong> ${prod.clinical_usage.step_in_routine[currentLang]}</p>
            <p><strong>${t.app}</strong> ${prod.clinical_usage.application[currentLang]}</p>
        </div>

        <h4 style="color: var(--accent-gold); margin-bottom: 5px;">${t.layering}</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div style="background: rgba(255, 77, 77, 0.1); padding: 15px; border-radius: 8px; border-right: 4px solid #FF4D4D;">
                <strong>${t.dontMix}</strong>
                <ul style="margin-top: 10px; padding-inline-start: 20px;">
                    ${prod.clinical_usage.layering.do_not_mix_with[currentLang].map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            <div style="background: rgba(40, 167, 69, 0.1); padding: 15px; border-radius: 8px; border-right: 4px solid #28A745;">
                <strong>${t.bestMix}</strong>
                <ul style="margin-top: 10px; padding-inline-start: 20px;">
                    ${prod.clinical_usage.layering.best_mixed_with[currentLang].map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>

        <h4 style="color: var(--accent-gold); margin-bottom: 5px;">${t.precautions}</h4>
        <div style="background: var(--bg-color); padding: 15px; border-radius: 8px; border: 1px solid var(--border-color);">
            <p style="margin-bottom: 10px;"><strong>${t.indications}</strong> ${prod.precautions.indications[currentLang]}</p>
            <p style="margin-bottom: 10px;"><strong>${t.pregSafe}</strong> ${prod.precautions.pregnancy_safe ? t.yes : t.no}</p>
            <p style="margin-bottom: 10px;"><strong>${t.sunSens}</strong> ${prod.precautions.sun_sensitivity ? t.yes : t.no}</p>
            <p><strong>${t.notes}</strong> ${prod.precautions.notes[currentLang]}</p>
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

// 7. تشغيل نافذة القاموس الطبي التفاعلي
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
