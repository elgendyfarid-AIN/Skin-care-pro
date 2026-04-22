// ==========================================
// ⚙️ محرك الموقع الأليت (UI/UX Engine)
// وظيفته: تشغيل الواجهة وعرض بياناتك المحفوظة بأمان
// ==========================================

let currentLang = 'ar';
let activeBrand = null;
let activeFamily = null;

// 1. التأكد من اتصال ملف البيانات (data.js)
window.onload = () => {
    if (typeof brandsList === 'undefined' || typeof deepProductsList === 'undefined') {
        document.getElementById('brandsGrid').innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: #ffeaa7; color: #d63031; border-radius: 12px; border: 1px solid #d63031;">
                <h3>⚠️ تنبيه برمجي: ملف البيانات (data.js) غير متصل.</h3>
                <p>يرجى التأكد من وجود ملف بياناتك الذي يحتوي على البلوكات الطبية في نفس المجلد.</p>
            </div>`;
    } else {
        renderBrands();
    }
};

// 2. أزرار التحكم العلوية (اللوجو، الإضاءة، اللغة)
document.querySelector('.brand-logo').addEventListener('click', () => {
    document.getElementById('productSearch').value = '';
    renderBrands();
});

document.getElementById('themeToggle').addEventListener('click', (e) => {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        e.target.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        e.target.textContent = '☀️';
    }
});

document.getElementById('langToggle').addEventListener('click', (e) => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    e.target.textContent = currentLang === 'ar' ? 'EN' : 'عربي';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // تحديث عناوين الأقسام الرئيسية
    document.querySelector('[data-target="products-section"]').textContent = currentLang === 'ar' ? 'المنتجات' : 'Products';
    document.querySelector('[data-target="routines-section"]').textContent = currentLang === 'ar' ? 'حالات البشرة والروتين' : 'Skin Conditions & Routines';
    document.querySelector('[data-target="skin-types-section"]').textContent = currentLang === 'ar' ? 'أنواع البشرة' : 'Skin Types';
    document.getElementById('productSearch').placeholder = currentLang === 'ar' ? '🔍 ابحث عن منتج أو مادة فعالة...' : '🔍 Search product or ingredient...';

    // إعادة رسم الشاشة الحالية باللغة الجديدة
    const searchQuery = document.getElementById('productSearch').value.toLowerCase();
    if(searchQuery.length > 0) {
        filterProducts(searchQuery);
    } else if(activeBrand && activeFamily) {
        const famName = brandsList.find(b=>b.id===activeBrand).families.find(f=>f.id===activeFamily).name[currentLang];
        renderProducts(activeBrand, activeFamily, famName);
    } else if(activeBrand) {
        renderFamilies(activeBrand);
    } else {
        renderBrands();
    }
});

// 3. التنقل بين الأقسام (التابات)
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

// 4. محرك البحث الذكي اللحظي
document.getElementById('productSearch').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if(query.length >= 2) {
        filterProducts(query);
    } else if (query.length === 0) {
        // العودة للشاشة السابقة عند مسح البحث
        if(activeFamily) {
            const famName = brandsList.find(b=>b.id===activeBrand).families.find(f=>f.id===activeFamily).name[currentLang];
            renderProducts(activeBrand, activeFamily, famName);
        } else if(activeBrand) {
            renderFamilies(activeBrand);
        } else {
            renderBrands();
        }
    }
});

// 5. دوال العرض المتسلسل (براندات > عائلات > منتجات)
const brandsGrid = document.getElementById('brandsGrid');
const familiesGrid = document.getElementById('familiesGrid');
const productsGrid = document.getElementById('productsGrid');

function renderBrands() {
    activeBrand = null; activeFamily = null;
    familiesGrid.style.display = 'none'; productsGrid.style.display = 'none';
    brandsGrid.style.display = 'grid'; brandsGrid.innerHTML = '';

    brandsList.forEach(brand => {
        const btn = document.createElement('div');
        btn.className = 'product-card';
        btn.style.alignItems = 'center'; btn.style.justifyContent = 'center'; btn.style.minHeight = '150px';
        btn.innerHTML = `<h2 style="color: var(--primary-navy); font-size: 1.8rem; text-align: center;">${brand.name}</h2>`;
        btn.onclick = () => renderFamilies(brand.id);
        brandsGrid.appendChild(btn);
    });
}

function renderFamilies(brandId) {
    activeBrand = brandId; activeFamily = null;
    brandsGrid.style.display = 'none'; productsGrid.style.display = 'none';
    familiesGrid.style.display = 'grid'; familiesGrid.innerHTML = '';
    
    const brandName = brandsList.find(b=>b.id===brandId).name;
    const backBtn = document.createElement('div');
    backBtn.style.gridColumn = '1 / -1';
    backBtn.innerHTML = `
        <button onclick="renderBrands()" class="control-btn">🔙 ${currentLang === 'ar' ? 'رجوع للبراندات' : 'Back to Brands'}</button>
        <h2 style="color: var(--accent-gold); margin-top: 20px; border-bottom: 2px solid var(--border-color); padding-bottom: 10px;">${brandName}</h2>
    `;
    familiesGrid.appendChild(backBtn);

    const brand = brandsList.find(b => b.id === brandId);
    if(brand && brand.families) {
        brand.families.forEach(family => {
            const btn = document.createElement('div');
            btn.className = 'product-card';
            btn.style.alignItems = 'center'; btn.style.justifyContent = 'center'; btn.style.minHeight = '120px';
            btn.innerHTML = `<h3 style="color: var(--primary-navy); font-size: 1.3rem; text-align: center;">${family.name[currentLang]}</h3>`;
            btn.onclick = () => renderProducts(brandId, family.id, family.name[currentLang]);
            familiesGrid.appendChild(btn);
        });
    }
}

function renderProducts(brandId, familyId, familyName) {
    activeBrand = brandId; activeFamily = familyId;
    familiesGrid.style.display = 'none'; brandsGrid.style.display = 'none';
    productsGrid.style.display = 'grid'; productsGrid.innerHTML = '';
    
    const header = document.createElement('div');
    header.style.gridColumn = '1 / -1';
    header.innerHTML = `
        <button onclick="renderFamilies('${brandId}')" class="control-btn">🔙 ${currentLang === 'ar' ? 'رجوع للعائلات' : 'Back to Families'}</button>
        <h2 style="color: var(--accent-gold); margin-top: 20px; border-bottom: 2px solid var(--border-color); padding-bottom: 10px;">${familyName}</h2>
    `;
    productsGrid.appendChild(header);

    const products = deepProductsList.filter(p => p.familyId === familyId);
    if(products.length === 0) {
        productsGrid.innerHTML += `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); margin-top: 2rem;">${currentLang === 'ar' ? 'لا توجد منتجات مسجلة في هذه العائلة حالياً.' : 'No products currently registered in this family.'}</p>`;
    } else {
        products.forEach(prod => createProductCard(prod));
    }
}

// 6. فلترة المنتجات بناءً على البحث
function filterProducts(query) {
    brandsGrid.style.display = 'none'; familiesGrid.style.display = 'none';
    productsGrid.style.display = 'grid'; productsGrid.innerHTML = '';
    
    const header = document.createElement('div');
    header.style.gridColumn = '1 / -1';
    header.innerHTML = `
        <button onclick="document.getElementById('productSearch').value=''; renderBrands();" class="control-btn">🔙 ${currentLang === 'ar' ? 'إلغاء البحث' : 'Cancel Search'}</button>
        <h2 style="color: var(--primary-navy); margin-top: 20px;">${currentLang === 'ar' ? 'نتائج البحث' : 'Search Results'}</h2>
    `;
    productsGrid.appendChild(header);

    const filtered = deepProductsList.filter(p => {
        const nameText = p.name[currentLang] || "";
        const mechText = (p.pharmacology && p.pharmacology.mechanism) ? p.pharmacology.mechanism[currentLang] : "";
        let ingredientsText = "";
        if(p.pharmacology && p.pharmacology.active_ingredients) {
            ingredientsText = p.pharmacology.active_ingredients.map(i => i.name).join(" ");
        }
        
        const textToSearch = (nameText + " " + mechText + " " + ingredientsText).toLowerCase();
        return textToSearch.includes(query);
    });

    if(filtered.length === 0) {
        productsGrid.innerHTML += `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); margin-top: 2rem;">${currentLang === 'ar' ? 'لا توجد نتائج تطابق بحثك.' : 'No results match your search.'}</p>`;
    } else {
        filtered.forEach(prod => createProductCard(prod));
    }
}

// 7. إنشاء البطاقة الخارجية للمنتج
function createProductCard(prod) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openProductModal(prod.id); // البطاقة كلها قابلة للضغط
    
    // شارة خطوة الروتين (إذا كانت متوفرة)
    if(prod.clinical_usage && prod.clinical_usage.routine_step_number) {
        card.innerHTML += `<div class="routine-step-badge">Step ${prod.clinical_usage.routine_step_number}</div>`;
    }
    
    let shortMech = "";
    if(prod.pharmacology && prod.pharmacology.mechanism && prod.pharmacology.mechanism[currentLang]) {
        shortMech = prod.pharmacology.mechanism[currentLang].substring(0, 90) + "...";
    }

    card.innerHTML += `
        <div>
            <h3 class="card-title">${prod.name[currentLang]}</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">${shortMech}</p>
        </div>
        <button class="control-btn view-card-btn">${currentLang === 'ar' ? 'عرض البطاقة الأليت' : 'View Elite Card'}</button>
    `;
    productsGrid.appendChild(card);
}

// 8. فتح النافذة المنبثقة للبطاقة الطبية التفصيلية (دون المساس بالبيانات)
window.openProductModal = function(productId) {
    const prod = deepProductsList.find(p => p.id === productId);
    if(!prod) return;
    
    const detailsContainer = document.getElementById('productDetails');
    const potencyPercentage = (prod.potency / 3) * 100;
    const potencyColor = prod.potency === 3 ? '#FF4D4D' : (prod.potency === 2 ? 'var(--accent-gold)' : '#28A745');

    // تجهيز المكونات النشطة وربطها بالقاموس إذا أمكن
    let ingredientsHTML = '';
    if(prod.pharmacology && prod.pharmacology.active_ingredients) {
        prod.pharmacology.active_ingredients.forEach(ing => {
            const glossaryKey = ing.name.toLowerCase().replace(/ /g, '_').replace(/[\(\)\+\-]/g, '');
            const interactive = (typeof glossaryDict !== 'undefined' && glossaryDict[glossaryKey]) ? `class="interactive-term" onclick="openGlossary('${glossaryKey}')"` : '';
            ingredientsHTML += `<li style="margin-bottom: 10px;"><span ${interactive}>${ing.name}</span> (${ing.concentration[currentLang]}): <span style="color: var(--text-muted);">${ing.role[currentLang]}</span></li>`;
        });
    }

    // تجهيز التعارضات
    let dontMixHTML = '';
    let bestMixHTML = '';
    if(prod.clinical_usage && prod.clinical_usage.layering) {
        dontMixHTML = prod.clinical_usage.layering.do_not_mix_with[currentLang].map(i => `<li style="margin-bottom: 5px;">${i}</li>`).join('');
        bestMixHTML = prod.clinical_usage.layering.best_mixed_with[currentLang].map(i => `<li style="margin-bottom: 5px;">${i}</li>`).join('');
    }

    detailsContainer.innerHTML = `
        <h2 style="color: var(--primary-navy); border-bottom: 2px solid var(--border-color); padding-bottom: 15px; margin-bottom: 25px; font-size: 1.6rem; padding-right: 20px;">
            ${prod.name[currentLang]}
        </h2>
        
        <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap;">
            <div style="flex: 1; background: var(--bg-color); padding: 15px; border-radius: 12px; border: 1px solid var(--border-color);">
                <strong style="color: var(--primary-navy);">${currentLang === 'ar' ? 'مقياس القوة (Potency):' : 'Potency Scale:'}</strong>
                <div style="margin-top: 10px; height: 10px; border-radius: 5px; background: #e0e0e0; overflow: hidden;">
                    <div style="width: ${potencyPercentage}%; height: 100%; background: ${potencyColor};"></div>
                </div>
            </div>
            <div style="background: var(--bg-color); padding: 15px; border-radius: 12px; border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; min-width: 150px;">
                <strong style="color: var(--primary-navy); margin-inline-end: 10px;">pH:</strong> ${(prod.pharmacology && prod.pharmacology.ph_level) ? prod.pharmacology.ph_level[currentLang] : '-'}
            </div>
        </div>

        <h4 style="color: var(--accent-gold); margin-bottom: 10px;">${currentLang === 'ar' ? 'دواعي الاستخدام والفوائد:' : 'Indications & Benefits:'}</h4>
        <p style="margin-bottom: 10px; font-weight: 600; color: var(--primary-navy);">${(prod.precautions && prod.precautions.indications) ? prod.precautions.indications[currentLang] : ''}</p>
        <p style="margin-bottom: 25px; color: var(--text-muted); line-height: 1.8;">${(prod.pharmacology && prod.pharmacology.patient_benefit) ? prod.pharmacology.patient_benefit[currentLang] : ''}</p>

        <h4 style="color: var(--accent-gold); margin-bottom: 10px;">${currentLang === 'ar' ? 'المكونات النشطة:' : 'Active Ingredients:'}</h4>
        <ul style="margin-bottom: 25px; padding-inline-start: 20px; line-height: 1.6;">${ingredientsHTML}</ul>

        <h4 style="color: var(--accent-gold); margin-bottom: 15px;">${currentLang === 'ar' ? 'التداخلات الدوائية (Layering):' : 'Drug Interactions (Layering):'}</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-bottom: 25px;">
            <div style="background: rgba(255, 77, 77, 0.05); padding: 15px; border-radius: 12px; border-right: 4px solid #FF4D4D; border-left: ${currentLang === 'en' ? '4px solid #FF4D4D' : 'none'}; border-right: ${currentLang === 'en' ? 'none' : '4px solid #FF4D4D'};">
                <strong style="color: #FF4D4D;">🚫 ${currentLang === 'ar' ? 'يُمنع الخلط مع:' : 'Do NOT mix with:'}</strong>
                <ul style="margin-top: 10px; padding-inline-start: 20px; color: var(--text-muted);">
                    ${dontMixHTML}
                </ul>
            </div>
            <div style="background: rgba(40, 167, 69, 0.05); padding: 15px; border-radius: 12px; border-right: 4px solid #28A745; border-left: ${currentLang === 'en' ? '4px solid #28A745' : 'none'}; border-right: ${currentLang === 'en' ? 'none' : '4px solid #28A745'};">
                <strong style="color: #28A745;">✅ ${currentLang === 'ar' ? 'الأفضل دمجه مع:' : 'Best mixed with:'}</strong>
                <ul style="margin-top: 10px; padding-inline-start: 20px; color: var(--text-muted);">
                    ${bestMixHTML}
                </ul>
            </div>
        </div>
        
        <div style="background: var(--bg-color); padding: 15px; border-radius: 12px; border: 1px dashed var(--border-color); display: flex; justify-content: space-around; text-align: center; flex-wrap: wrap; gap: 10px;">
            <div>
                <strong style="color: var(--primary-navy); display: block; margin-bottom: 5px;">${currentLang === 'ar' ? 'آمن للحوامل' : 'Pregnancy Safe'}</strong>
                <span>${(prod.precautions && prod.precautions.pregnancy_safe) ? '🤰 نعم ✅' : '⛔ لا ❌'}</span>
            </div>
            <div>
                <strong style="color: var(--primary-navy); display: block; margin-bottom: 5px;">${currentLang === 'ar' ? 'حساسية شمس' : 'Sun Sensitivity'}</strong>
                <span>${(prod.precautions && prod.precautions.sun_sensitivity) ? '☀️ نعم (يتطلب واقي)' : '🛡️ لا يوجد'}</span>
            </div>
        </div>
    `;

    const modal = document.getElementById('productModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.style.opacity = '1', 10);
    document.body.style.overflow = 'hidden'; // إيقاف تحريك الشاشة الخلفية
};

document.querySelector('.close-modal-btn').addEventListener('click', () => {
    const modal = document.getElementById('productModal');
    modal.style.opacity = '0';
    setTimeout(() => { 
        modal.style.display = 'none'; 
        document.body.style.overflow = 'auto'; 
    }, 300);
});

// 9. فتح نافذة القاموس الطبي
window.openGlossary = function(key) {
    if(typeof glossaryDict === 'undefined') return;
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
