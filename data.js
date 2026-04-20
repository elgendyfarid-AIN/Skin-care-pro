// ==========================================
// القوائم الأساسية للموقع
// ==========================================
const ingredientsDictionary = {};
const brandsList = [];
const productsList = [];
const casesList = [];
const imagesDB = {};

// ==========================================
// 1. العلامات التجارية والعائلات (الجلسات 1 + 2 + 3)
// ==========================================

/* --- الجلسة 1 و 2 --- */
brandsList.push({ id: 'laroche', name: 'La Roche-Posay', families: [{ id: 'effaclar', name: { ar: 'إيفاكلار', en: 'Effaclar' } }, { id: 'toleriane', name: { ar: 'توليان', en: 'Toleriane' } }, { id: 'anthelios', name: { ar: 'أنثيليوس', en: 'Anthelios' } }, { id: 'serums', name: { ar: 'السيرومات', en: 'Serums' } }] });
brandsList.push({ id: 'cerave', name: 'CeraVe', families: [{ id: 'cleansers', name: { ar: 'المنظفات', en: 'Cleansers' } }, { id: 'moisturizers', name: { ar: 'المرطبات', en: 'Moisturizers' } }, { id: 'blemish', name: { ar: 'التحكم في الحبوب', en: 'Blemish Control' } }] });
brandsList.push({ id: 'vichy', name: 'Vichy', families: [{ id: 'mineral', name: { ar: 'مينيرال 89', en: 'Minéral 89' } }, { id: 'normaderm', name: { ar: 'نورماديرم', en: 'Normaderm' } }] });
brandsList.push({ id: 'bioderma', name: 'Bioderma', families: [{ id: 'sensibio', name: { ar: 'سينسيبو', en: 'Sensibio' } }, { id: 'atoderm', name: { ar: 'أتوديرم', en: 'Atoderm' } }] });
brandsList.push({ id: 'avene', name: 'Avène', families: [{ id: 'cicalfate', name: { ar: 'سيكالفات', en: 'Cicalfate' } }, { id: 'cleanance', name: { ar: 'كلينانس', en: 'Cleanance' } }] });
brandsList.push({ id: 'ducray', name: 'Ducray', families: [{ id: 'keracnyl', name: { ar: 'كيراكنيل', en: 'Keracnyl' } }] });

/* --- الجلسة 3 (الألمان والتفتيح) --- */
brandsList.push({
    id: 'eucerin', name: 'Eucerin',
    families: [
        { id: 'even_pigment', name: { ar: 'إيفين بيجمنت (للتصبغات)', en: 'Even Pigment Perfector' } },
        { id: 'dermopurifyer', name: { ar: 'ديرموبيوريفاير (لحب الشباب)', en: 'DermoPurifyer' } }
    ]
});
brandsList.push({
    id: 'novaclear', name: 'Novaclear',
    families: [
        { id: 'gluta', name: { ar: 'جلوتا (للتفتيح الفائق)', en: 'Gluta (Whitening)' } },
        { id: 'acne', name: { ar: 'أكني (للشوائب)', en: 'Acne (Blemishes)' } }
    ]
});
brandsList.push({
    id: 'sebamed', name: 'Sebamed',
    families: [
        { id: 'clearface', name: { ar: 'كلير فيس (pH 5.5)', en: 'Clear Face (pH 5.5)' } }
    ]
});

// ==========================================
// 2. المواد الفعالة
// ==========================================
ingredientsDictionary["Zinc PCA"] = { name: { ar: "زنك بيكولينات", en: "Zinc PCA" }, desc: { ar: "ينظم الإفرازات الدهنية ويقاوم البكتيريا.", en: "Regulates sebum and fights bacteria." } };
ingredientsDictionary["Salicylic Acid"] = { name: { ar: "حمض الساليسيليك", en: "Salicylic Acid" }, desc: { ar: "حمض مقشر ينظف المسام بعمق.", en: "Exfoliating acid that deep cleans pores." } };
ingredientsDictionary["Niacinamide"] = { name: { ar: "نياسيناميد", en: "Niacinamide" }, desc: { ar: "يهدئ الاحمرار ويقلل التصبغات.", en: "Soothes redness and reduces dark spots." } };
ingredientsDictionary["Ceramides"] = { name: { ar: "سيراميد", en: "Ceramides" }, desc: { ar: "دهون طبيعية ترمم حاجز البشرة.", en: "Lipids that restore the skin barrier." } };
ingredientsDictionary["Hyaluronic Acid"] = { name: { ar: "حمض الهيالورونيك", en: "Hyaluronic Acid" }, desc: { ar: "يجذب الرطوبة للبشرة.", en: "Attracts moisture to the skin." } };
ingredientsDictionary["Vichy Volcanic Water"] = { name: { ar: "مياه فيشي البركانية", en: "Volcanic Water" }, desc: { ar: "لتقوية دفاعات البشرة.", en: "Strengthens skin defenses." } };
ingredientsDictionary["Mexoryl 400"] = { name: { ar: "ميكسوريل 400", en: "Mexoryl 400" }, desc: { ar: "فلتر حماية متطور.", en: "Advanced UV filter." } };
ingredientsDictionary["C-Restore"] = { name: { ar: "سي-ريستور", en: "C+-Restore" }, desc: { ar: "مستخلص حيوي يسرع ترميم البشرة.", en: "Postbiotic active ingredient." } };
ingredientsDictionary["Comedoclastin"] = { name: { ar: "كوميدوكلاستين", en: "Comedoclastin" }, desc: { ar: "يمنع تكوّن الحبوب تحت الجلد.", en: "Prevents micro-comedones." } };

// جديد الجلسة الثالثة
ingredientsDictionary["Thiamidol"] = { name: { ar: "ثياميدول (براءة اختراع)", en: "Thiamidol" }, desc: { ar: "يعالج فرط التصبغ من جذوره ويمنع ظهوره مجدداً.", en: "Patented ingredient to reduce hyperpigmentation." } };
ingredientsDictionary["Glutathione"] = { name: { ar: "جلوتاثيون", en: "Glutathione" }, desc: { ar: "مضاد أكسدة قوي يفتح لون البشرة.", en: "Powerful antioxidant that brightens the skin." } };
ingredientsDictionary["Licochalcone A"] = { name: { ar: "ليكو كالكون A", en: "Licochalcone A" }, desc: { ar: "مستخلص جذور العرقسوس، مهدئ قوي للالتهابات.", en: "Licorice root extract, powerful anti-inflammatory." } };

// ==========================================
// 3. المنتجات 
// ==========================================
/* --- منتجات الجلسات السابقة (مختصرة في الكود للتنظيم) --- */
productsList.push({ id: 'p_lrp_effaclar_gel', brandId: 'laroche', familyId: 'effaclar', name: { ar: "إيفاكلار جل غسول رغوي", en: "Effaclar Gel" }, description: { ar: "غسول يومي للبشرة الدهنية.", en: "Daily cleanser for oily skin." }, how_to_use: { ar: "يُرغى بالماء ويوضع على الوجه.", en: "Lather and apply to face." }, cautions: { ar: "-", en: "-" }, key_ingredients: [{ id: "Zinc PCA", pct: "0.2%" }], flags: { pregnancy_safe: true } });
productsList.push({ id: 'p_lrp_effaclar_duo', brandId: 'laroche', familyId: 'effaclar', name: { ar: "إيفاكلار ديو (+)", en: "Effaclar Duo (+)" }, description: { ar: "يعالج الحبوب ويمنع العلامات.", en: "Treats acne." }, how_to_use: { ar: "يوضع على الوجه صباحاً و/أو مساءً.", en: "Apply AM/PM." }, cautions: { ar: "-", en: "-" }, key_ingredients: [{ id: "Niacinamide", pct: "4%" }, { id: "Salicylic Acid", pct: "0.5%" }], flags: { pregnancy_safe: false } });
productsList.push({ id: 'p_lrp_hyalu_b5', brandId: 'laroche', familyId: 'serums', name: { ar: "هيالو بي 5 سيروم", en: "Hyalu B5 Serum" }, description: { ar: "سيروم لترميم البشرة.", en: "Repairing serum." }, how_to_use: { ar: "3-4 قطرات.", en: "3-4 drops." }, cautions: { ar: "-", en: "-" }, key_ingredients: [{ id: "Hyaluronic Acid", pct: "" }], flags: { pregnancy_safe: true } });
productsList.push({ id: 'p_cerave_hydrating_cleanser', brandId: 'cerave', familyId: 'cleansers', name: { ar: "الغسول المرطب", en: "Hydrating Cleanser" }, description: { ar: "غسول غير رغوي للبشرة الجافة.", en: "Non-foaming cleanser." }, how_to_use: { ar: "يدلك على بشرة مبللة.", en: "Massage on wet skin." }, cautions: { ar: "-", en: "-" }, key_ingredients: [{ id: "Ceramides", pct: "" }], flags: { pregnancy_safe: true } });
productsList.push({ id: 'p_avene_cicalfate', brandId: 'avene', familyId: 'cicalfate', name: { ar: "سيكالفات بلس كريم", en: "Cicalfate+ Cream" }, description: { ar: "كريم الإسعافات الأولية للبشرة.", en: "First-aid cream." }, how_to_use: { ar: "مرتين يومياً.", en: "Twice daily." }, cautions: { ar: "-", en: "-" }, key_ingredients: [{ id: "C-Restore", pct: "" }, { id: "Zinc PCA", pct: "" }], flags: { pregnancy_safe: true } });

/* --- منتجات الجلسة 3 (Eucerin, Novaclear, Sebamed) --- */
productsList.push({
    id: 'p_eucerin_even_pigment_dual', brandId: 'eucerin', familyId: 'even_pigment',
    name: { ar: "السيروم المزدوج إيفين بيجمنت", en: "Even Pigment Dual Serum" },
    description: { ar: "سيروم مزدوج الفعالية يعالج التصبغات العميقة ويرطب البشرة، تظهر نتائجه خلال أسبوعين.", en: "Dual-action serum reduces dark spots and renews skin look." },
    how_to_use: { ar: "يوضع مرة واحدة يومياً (صباحاً أو مساءً) على الوجه والرقبة.", en: "Apply once a day (AM or PM) to face and neck." },
    cautions: { ar: "منتجات الثياميدول لا تستخدم أكثر من 4 مرات يومياً كحد أقصى للروتين الكامل.", en: "Max 4 applications of Thiamidol per day." },
    key_ingredients: [{ id: "Thiamidol", pct: "" }, { id: "Hyaluronic Acid", pct: "" }],
    flags: { pregnancy_safe: false }
});

productsList.push({
    id: 'p_eucerin_dermopurifyer_gel', brandId: 'eucerin', familyId: 'dermopurifyer',
    name: { ar: "جل التنظيف ديرموبيوريفاير", en: "DermoPurifyer Cleansing Gel" },
    description: { ar: "غسول خالي من الصابون والعطور للبشرة المعرضة للحبوب.", en: "Soap-free, fragrance-free gel for blemish-prone skin." },
    how_to_use: { ar: "يستخدم صباحاً ومساءً.", en: "Use morning and evening." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Salicylic Acid", pct: "6% Amp" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_novaclear_gluta_serum', brandId: 'novaclear', familyId: 'gluta',
    name: { ar: "سيروم جلوتا وايت بلس", en: "Gluta White Plus Serum" },
    description: { ar: "سيروم تفتيح مكثف يعمل على توحيد لون البشرة وتقليل البقع الداكنة والتصبغات.", en: "Intense whitening serum evens skin tone." },
    how_to_use: { ar: "يوضع مرتين يومياً قبل الكريم المرطب.", en: "Apply twice a day before moisturizer." },
    cautions: { ar: "يجب استخدام واقي شمس.", en: "Must use sunscreen." },
    key_ingredients: [{ id: "Glutathione", pct: "" }, { id: "Niacinamide", pct: "" }],
    flags: { pregnancy_safe: true } // الجلوتاثيون الموضعي عادة آمن، يمكن تعديله برأيك الطبي
});

productsList.push({
    id: 'p_sebamed_clearface_foam', brandId: 'sebamed', familyId: 'clearface',
    name: { ar: "رغوة التنظيف كلير فيس", en: "Clear Face Cleansing Foam" },
    description: { ar: "رغوة لطيفة تنظف المسام وتحافظ على الغلاف الحمضي للبشرة (pH 5.5).", en: "Gentle foam, protects skin's acid mantle (pH 5.5)." },
    how_to_use: { ar: "تدلك الرغوة وتترك لمدة 3 دقائق لتتفاعل البكتيريا ثم تشطف.", en: "Leave foam on for 3 mins then rinse." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [],
    flags: { pregnancy_safe: true }
});

// ==========================================
// 4. الحالات والروتينات العلاجية
// ==========================================
casesList.push({
    id: 'acne_basic',
    name: { ar: 'حب الشباب (الروتين الأساسي)', en: 'Acne (Basic Routine)' },
    routine: [
        { stepTitle: { ar: 'الغسول المعالج', en: 'Treatment Cleanser' }, impact: 20, impactColor: '#dd6b20', productIds: ['p_lrp_effaclar_gel', 'p_eucerin_dermopurifyer_gel', 'p_sebamed_clearface_foam'] },
        { stepTitle: { ar: 'العلاج والترطيب', en: 'Treatment & Moisture' }, impact: 50, impactColor: '#e53e3e', productIds: ['p_lrp_effaclar_duo'] }
    ]
});

casesList.push({
    id: 'eczema_repair',
    name: { ar: 'الترميم والجروح السطحية', en: 'Skin Repair & Wounds' },
    routine: [
        { stepTitle: { ar: 'غسول لطيف', en: 'Gentle Cleanser' }, impact: 20, impactColor: '#3182ce', productIds: ['p_cerave_hydrating_cleanser'] },
        { stepTitle: { ar: 'الترميم العاجل', en: 'Urgent SOS Repair' }, impact: 80, impactColor: '#e53e3e', productIds: ['p_avene_cicalfate'] }
    ]
});

// جديد الجلسة الثالثة (التصبغات)
casesList.push({
    id: 'hyperpigmentation',
    name: { ar: 'الكلف وتصبغات البشرة', en: 'Hyperpigmentation & Dark Spots' },
    routine: [
        { stepTitle: { ar: 'غسول توحيد اللون', en: 'Brightening Cleanser' }, impact: 15, impactColor: '#3182ce', productIds: ['p_cerave_hydrating_cleanser'] }, // سيتم إضافة غسولات تفتيح لاحقاً
        { stepTitle: { ar: 'سيروم التفتيح العميق', en: 'Deep Brightening Serum' }, impact: 60, impactColor: '#e53e3e', productIds: ['p_eucerin_even_pigment_dual', 'p_novaclear_gluta_serum'] },
        { stepTitle: { ar: 'واقي شمس (إجباري)', en: 'Sun Protection (Mandatory)' }, impact: 25, impactColor: '#38a169', productIds: [] } // سيتم ربط واقيات الشمس لاحقاً
    ]
});

// ==========================================
// 5. مكتبة الصور (Smart URLs)
// ==========================================
imagesDB['p_lrp_effaclar_gel'] = "https://placehold.co/300x300/ffffff/3182ce?text=La+Roche\nEffaclar+Gel";
imagesDB['p_lrp_effaclar_duo'] = "https://placehold.co/300x300/ffffff/3182ce?text=La+Roche\nEffaclar+Duo";
imagesDB['p_lrp_hyalu_b5'] = "https://placehold.co/300x300/ffffff/3182ce?text=La+Roche\nHyalu+B5";
imagesDB['p_cerave_hydrating_cleanser'] = "https://placehold.co/300x300/ffffff/38a169?text=CeraVe\nHydrating+Cleanser";
imagesDB['p_avene_cicalfate'] = "https://placehold.co/300x300/ffffff/3182ce?text=Avene\nCicalfate+";

// صور الجلسة الثالثة
imagesDB['p_eucerin_even_pigment_dual'] = "https://placehold.co/300x300/ffffff/e53e3e?text=Eucerin\nEven+Pigment+Dual";
imagesDB['p_eucerin_dermopurifyer_gel'] = "https://placehold.co/300x300/ffffff/38a169?text=Eucerin\nDermoPurifyer+Gel";
imagesDB['p_novaclear_gluta_serum'] = "https://placehold.co/300x300/ffffff/e53e3e?text=Novaclear\nGluta+Serum";
imagesDB['p_sebamed_clearface_foam'] = "https://placehold.co/300x300/ffffff/38a169?text=Sebamed\nClear+Face+Foam";

productsList.forEach(p => p.image = imagesDB[p.id] || "https://placehold.co/300x300/ffffff/a0aec0?text=Product\nImage");
