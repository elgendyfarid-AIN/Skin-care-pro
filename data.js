const ingredientsDictionary = {};
const brandsList = [];
const productsList = [];
const casesList = [];
const imagesDB = {};

// ==========================================
// 1. العلامات التجارية (L'Oréal Active Cosmetics)
// ==========================================
brandsList.push({
    id: 'laroche', name: 'La Roche-Posay',
    families: [
        { id: 'effaclar', name: { ar: 'إيفاكلار (للبشرة الدهنية)', en: 'Effaclar (Oily Skin)' } },
        { id: 'toleriane', name: { ar: 'توليان (للبشرة الحساسة)', en: 'Toleriane (Sensitive Skin)' } },
        { id: 'anthelios', name: { ar: 'أنثيليوس (واقيات الشمس)', en: 'Anthelios (Sun Care)' } },
        { id: 'serums', name: { ar: 'السيرومات العلاجية', en: 'Treatment Serums' } }
    ]
});

brandsList.push({
    id: 'cerave', name: 'CeraVe',
    families: [
        { id: 'cleansers', name: { ar: 'منظفات البشرة', en: 'Cleansers' } },
        { id: 'moisturizers', name: { ar: 'مرطبات البشرة', en: 'Moisturizers' } },
        { id: 'blemish', name: { ar: 'مجموعة التحكم في الحبوب', en: 'Blemish Control' } }
    ]
});

brandsList.push({
    id: 'vichy', name: 'Vichy',
    families: [
        { id: 'mineral', name: { ar: 'مينيرال 89 (لتقوية الحاجز)', en: 'Minéral 89 (Barrier Repair)' } },
        { id: 'normaderm', name: { ar: 'نورماديرم (للبشرة المعرضة للحبوب)', en: 'Normaderm (Acne Prone)' } }
    ]
});

// ==========================================
// 2. المواد الفعالة 
// ==========================================
ingredientsDictionary["Zinc PCA"] = { name: { ar: "زنك بيكولينات", en: "Zinc PCA" }, desc: { ar: "ينظم الإفرازات الدهنية ويقاوم البكتيريا.", en: "Regulates sebum and fights bacteria." } };
ingredientsDictionary["Salicylic Acid"] = { name: { ar: "حمض الساليسيليك", en: "Salicylic Acid" }, desc: { ar: "حمض مقشر ينظف المسام بعمق.", en: "Exfoliating acid that deep cleans pores." } };
ingredientsDictionary["Niacinamide"] = { name: { ar: "نياسيناميد", en: "Niacinamide" }, desc: { ar: "يهدئ الاحمرار ويقلل التصبغات.", en: "Soothes redness and reduces dark spots." } };
ingredientsDictionary["Ceramides"] = { name: { ar: "سيراميد (1, 3, 6-II)", en: "Essential Ceramides" }, desc: { ar: "دهون طبيعية ترمم وتدعم حاجز البشرة.", en: "Lipids that restore the skin barrier." } };
ingredientsDictionary["Hyaluronic Acid"] = { name: { ar: "حمض الهيالورونيك", en: "Hyaluronic Acid" }, desc: { ar: "يجذب الرطوبة للبشرة ويملأ الخطوط.", en: "Attracts moisture and plumps skin." } };
ingredientsDictionary["Vichy Volcanic Water"] = { name: { ar: "مياه فيشي البركانية", en: "Volcanic Water" }, desc: { ar: "غنية بـ 15 معدن لتقوية دفاعات البشرة.", en: "Rich in 15 minerals to strengthen defenses." } };
ingredientsDictionary["Mexoryl 400"] = { name: { ar: "ميكسوريل 400", en: "Mexoryl 400" }, desc: { ar: "فلتر حماية متطور من الأشعة فوق البنفسجية الطويلة.", en: "Advanced UV filter." } };

// ==========================================
// 3. المنتجات (الجلسة الأولى)
// ==========================================

/* --- La Roche-Posay --- */
productsList.push({
    id: 'p_lrp_effaclar_gel', brandId: 'laroche', familyId: 'effaclar',
    name: { ar: "إيفاكلار جل غسول رغوي", en: "Effaclar Purifying Foaming Gel" },
    description: { ar: "غسول يومي للبشرة الدهنية والمعرضة لحب الشباب.", en: "Daily cleanser for oily skin." },
    how_to_use: { ar: "يُرغى بالماء ويوضع على الوجه ثم يُشطف.", en: "Lather with water, apply to face, rinse." },
    cautions: { ar: "تجنب محيط العينين.", en: "Avoid eye contour." },
    key_ingredients: [{ id: "Zinc PCA", pct: "0.2%" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_lrp_effaclar_duo', brandId: 'laroche', familyId: 'effaclar',
    name: { ar: "إيفاكلار ديو (+) مرطب علاجي", en: "Effaclar Duo (+)" },
    description: { ar: "يعالج الحبوب ويمنع العلامات الحمراء والبنية.", en: "Treats acne and prevents marks." },
    how_to_use: { ar: "يوضع على كامل الوجه صباحاً و/أو مساءً.", en: "Apply to whole face AM and/or PM." },
    cautions: { ar: "لا يستخدم على جروح مفتوحة.", en: "Do not apply on broken skin." },
    key_ingredients: [{ id: "Niacinamide", pct: "4%" }, { id: "Salicylic Acid", pct: "0.5%" }],
    flags: { pregnancy_safe: false }
});

productsList.push({
    id: 'p_lrp_hyalu_b5', brandId: 'laroche', familyId: 'serums',
    name: { ar: "هيالو بي 5 سيروم", en: "Hyalu B5 Serum" },
    description: { ar: "سيروم لترميم البشرة وعلاج الجفاف والخطوط الدقيقة.", en: "Anti-wrinkle repairing serum." },
    how_to_use: { ar: "3-4 قطرات على الوجه والرقبة صباحاً ومساءً.", en: "3-4 drops on face and neck AM/PM." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Hyaluronic Acid", pct: "" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_lrp_uvmune_fluid', brandId: 'laroche', familyId: 'anthelios',
    name: { ar: "أنثيليوس يو في ميون 400 سائل خفي", en: "Anthelios UVmune 400 Invisible Fluid" },
    description: { ar: "واقي شمس سائل بقوام خفيف جداً حماية SPF50+.", en: "Ultra-light fluid sunscreen SPF50+." },
    how_to_use: { ar: "يُرج جيداً، يوضع قبل التعرض للشمس ويُجدد.", en: "Shake well, apply before sun exposure." },
    cautions: { ar: "تجنب ملامسة العين.", en: "Avoid eye contact." },
    key_ingredients: [{ id: "Mexoryl 400", pct: "" }],
    flags: { pregnancy_safe: true }
});

/* --- CeraVe --- */
productsList.push({
    id: 'p_cerave_hydrating_cleanser', brandId: 'cerave', familyId: 'cleansers',
    name: { ar: "الغسول المرطب", en: "Hydrating Cleanser" },
    description: { ar: "غسول غير رغوي للبشرة العادية إلى الجافة، لا يدمر حاجز البشرة.", en: "Non-foaming cleanser for normal to dry skin." },
    how_to_use: { ar: "يدلك على بشرة مبللة ثم يشطف.", en: "Massage on wet skin, then rinse." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Ceramides", pct: "" }, { id: "Hyaluronic Acid", pct: "" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_cerave_blemish_cleanser', brandId: 'cerave', familyId: 'blemish',
    name: { ar: "غسول التحكم في الشوائب (حب الشباب)", en: "Blemish Control Cleanser" },
    description: { ar: "غسول رغوي بحمض الساليسيليك للبشرة المعرضة للحبوب.", en: "Salicylic acid cleanser for blemish-prone skin." },
    how_to_use: { ar: "يستخدم يومياً على بشرة مبللة.", en: "Use daily on wet skin." },
    cautions: { ar: "استخدم واقي شمس.", en: "Use sunscreen." },
    key_ingredients: [{ id: "Salicylic Acid", pct: "2%" }, { id: "Ceramides", pct: "" }, { id: "Niacinamide", pct: "" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_cerave_moisturizing_cream', brandId: 'cerave', familyId: 'moisturizers',
    name: { ar: "كريم الترطيب", en: "Moisturising Cream" },
    description: { ar: "كريم غني لترطيب الوجه والجسم للبشرة الجافة جداً.", en: "Rich cream for dry to very dry skin." },
    how_to_use: { ar: "يوضع بسخاء عند الحاجة.", en: "Apply liberally as often as needed." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Ceramides", pct: "" }, { id: "Hyaluronic Acid", pct: "" }],
    flags: { pregnancy_safe: true }
});

/* --- Vichy --- */
productsList.push({
    id: 'p_vichy_mineral_89', brandId: 'vichy', familyId: 'mineral',
    name: { ar: "مينيرال 89 بوستر مقوي", en: "Minéral 89 Fortifying Booster" },
    description: { ar: "سيروم يومي يقوي حاجز البشرة ويرطبها.", en: "Daily booster to strengthen skin barrier." },
    how_to_use: { ar: "قطرتين على بشرة نظيفة قبل أي منتج آخر.", en: "Apply 2 drops after cleansing as step 1." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Vichy Volcanic Water", pct: "89%" }, { id: "Hyaluronic Acid", pct: "" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_vichy_normaderm_phyto', brandId: 'vichy', familyId: 'normaderm',
    name: { ar: "نورماديرم فايتوسوليوشن", en: "Normaderm Phytosolution" },
    description: { ar: "مرطب يومي يعالج الحبوب ويزيل اللمعان.", en: "Daily moisturizer for acne-prone skin." },
    how_to_use: { ar: "يوضع صباحاً ومساءً.", en: "Apply morning and evening." },
    cautions: { ar: "تجنب محيط العينين.", en: "Avoid eye area." },
    key_ingredients: [{ id: "Salicylic Acid", pct: "2%" }, { id: "Hyaluronic Acid", pct: "0.2%" }],
    flags: { pregnancy_safe: true }
});


// ==========================================
// 4. الحالات والروتينات العلاجية
// ==========================================
casesList.push({
    id: 'acne_basic',
    name: { ar: 'حب الشباب (الروتين الأساسي)', en: 'Acne (Basic Routine)' },
    routine: [
        { stepTitle: { ar: 'الغسول المعالج', en: 'Treatment Cleanser' }, impact: 20, impactColor: '#dd6b20', productIds: ['p_cerave_blemish_cleanser', 'p_lrp_effaclar_gel'] },
        { stepTitle: { ar: 'العلاج والترطيب', en: 'Treatment & Moisture' }, impact: 50, impactColor: '#e53e3e', productIds: ['p_lrp_effaclar_duo', 'p_vichy_normaderm_phyto'] },
        { stepTitle: { ar: 'الوقاية (نهاراً)', en: 'Protection (Day)' }, impact: 30, impactColor: '#38a169', productIds: ['p_lrp_uvmune_fluid'] }
    ]
});

casesList.push({
    id: 'barrier_repair',
    name: { ar: 'ترميم حاجز البشرة المتضرر', en: 'Skin Barrier Repair' },
    routine: [
        { stepTitle: { ar: 'غسول لطيف', en: 'Gentle Cleanser' }, impact: 20, impactColor: '#3182ce', productIds: ['p_cerave_hydrating_cleanser'] },
        { stepTitle: { ar: 'الترطيب العميق والترميم', en: 'Deep Hydration' }, impact: 60, impactColor: '#e53e3e', productIds: ['p_vichy_mineral_89', 'p_lrp_hyalu_b5', 'p_cerave_moisturizing_cream'] }
    ]
});

// ==========================================
// 5. مكتبة الصور (Smart Placeholders - روابط جاهزة ومباشرة)
// ==========================================
// هذه الروابط تولد صور احترافية تحمل اسم المنتج مباشرة لضمان عدم وجود روابط مكسورة
imagesDB['p_lrp_effaclar_gel'] = "https://placehold.co/300x300/ffffff/3182ce?text=La+Roche\nEffaclar+Gel";
imagesDB['p_lrp_effaclar_duo'] = "https://placehold.co/300x300/ffffff/3182ce?text=La+Roche\nEffaclar+Duo+";
imagesDB['p_lrp_hyalu_b5'] = "https://placehold.co/300x300/ffffff/3182ce?text=La+Roche\nHyalu+B5";
imagesDB['p_lrp_uvmune_fluid'] = "https://placehold.co/300x300/ffffff/e53e3e?text=La+Roche\nAnthelios+UVmune";

imagesDB['p_cerave_hydrating_cleanser'] = "https://placehold.co/300x300/ffffff/38a169?text=CeraVe\nHydrating+Cleanser";
imagesDB['p_cerave_blemish_cleanser'] = "https://placehold.co/300x300/ffffff/3182ce?text=CeraVe\nBlemish+Cleanser";
imagesDB['p_cerave_moisturizing_cream'] = "https://placehold.co/300x300/ffffff/3182ce?text=CeraVe\nMoisturising+Cream";

imagesDB['p_vichy_mineral_89'] = "https://placehold.co/300x300/ffffff/805ad5?text=Vichy\nMineral+89";
imagesDB['p_vichy_normaderm_phyto'] = "https://placehold.co/300x300/ffffff/38a169?text=Vichy\nNormaderm+Phyto";

productsList.forEach(p => p.image = imagesDB[p.id] || "https://placehold.co/300x300/ffffff/a0aec0?text=Product\nImage");
