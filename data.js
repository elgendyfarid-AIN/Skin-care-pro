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

// ==========================================
// --- إضافة الجلسة الرابعة (الأمريكان: The Ordinary و Cetaphil) ---
// ==========================================

// 1. إضافة العلامات التجارية الجديدة
brandsList.push({
    id: 'theordinary', name: 'The Ordinary',
    families: [
        { id: 'acids', name: { ar: 'الأحماض والمقشرات', en: 'Acids & Peels' } },
        { id: 'vitamins', name: { ar: 'الفيتامينات والمعادن', en: 'Vitamins & Minerals' } }
    ]
});

brandsList.push({
    id: 'cetaphil', name: 'Cetaphil',
    families: [
        { id: 'daily_care', name: { ar: 'العناية اليومية', en: 'Daily Care' } }
    ]
});

// 2. إضافة مواد فعالة جديدة
ingredientsDictionary["AHA"] = { name: { ar: "أحماض ألفا هيدروكسي (AHA)", en: "AHA" }, desc: { ar: "تقشر سطح البشرة الخارجي لتحسين النضارة وتوحيد اللون.", en: "Exfoliates the topmost surface of the skin." } };
ingredientsDictionary["BHA"] = { name: { ar: "أحماض بيتا هيدروكسي (BHA)", en: "BHA" }, desc: { ar: "تتغلغل داخل المسام لتنظيفها من الدهون المتراكمة وتمنع الاحتقان.", en: "Clears pore congestion and excess sebum." } };

// 3. إضافة المنتجات الجديدة
productsList.push({
    id: 'p_to_niacinamide', brandId: 'theordinary', familyId: 'vitamins',
    name: { ar: "سيروم نياسيناميد 10% + زنك 1%", en: "Niacinamide 10% + Zinc 1%" },
    description: { ar: "سيروم لتنظيم الإفرازات الدهنية، تصغير المسام الواسعة، وتقليل التصبغات والشوائب.", en: "Reduces blemishes, regulates sebum, and minimizes pores." },
    how_to_use: { ar: "قطرات قليلة على الوجه صباحاً ومساءً قبل الكريمات الثقيلة.", en: "Apply to entire face morning and evening before heavier creams." },
    cautions: { ar: "لا يُستخدم في نفس الوقت مع فيتامين سي النقي.", en: "Do not use with pure Vitamin C at the same time." },
    key_ingredients: [{ id: "Niacinamide", pct: "10%" }, { id: "Zinc PCA", pct: "1%" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_to_peeling', brandId: 'theordinary', familyId: 'acids',
    name: { ar: "محلول التقشير الأحمر (AHA 30% + BHA 2%)", en: "AHA 30% + BHA 2% Peeling Solution" },
    description: { ar: "مقشر أسبوعي قوي جداً لتجديد البشرة وعلاج التصبغات والندبات السطحية.", en: "10-minute exfoliating facial, improves skin texture and radiance." },
    how_to_use: { ar: "يُستخدم مساءً فقط على بشرة جافة. يترك 10 دقائق كحد أقصى ثم يُشطف بالماء الفاتر.", en: "Use PM only on dry skin. Leave on for max 10 mins, then rinse." },
    cautions: { ar: "للمحترفين فقط. لا يستخدم على بشرة ملتهبة أو حساسة. إجباري استخدام واقي شمس نهاراً.", en: "For experienced users only. Sunscreen is mandatory." },
    key_ingredients: [{ id: "AHA", pct: "30%" }, { id: "BHA", pct: "2%" }],
    flags: { pregnancy_safe: false }
});

productsList.push({
    id: 'p_cetaphil_gentle_cleanser', brandId: 'cetaphil', familyId: 'daily_care',
    name: { ar: "غسول سيتافيل اللطيف", en: "Gentle Skin Cleanser" },
    description: { ar: "غسول كريمي لا يرغي، ينظف البشرة الحساسة والجافة دون تجريدها من زيوتها الطبيعية.", en: "Creamy, non-foaming cleanser for dry and sensitive skin." },
    how_to_use: { ar: "يُدلك على الوجه، ويمكن إزالته بمنديل قطني أو شطفه بالماء.", en: "Massage onto face, remove with cotton pad or rinse with water." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Niacinamide", pct: "" }], // التركيبة الجديدة لسيتافيل تحتوي على نياسيناميد
    flags: { pregnancy_safe: true }
});

// 4. إضافة حالة مرضية / روتين جديد
casesList.push({
    id: 'enlarged_pores',
    name: { ar: 'المسام الواسعة والبهتان (النضارة)', en: 'Enlarged Pores & Dullness' },
    routine: [
        { stepTitle: { ar: 'التنظيف اللطيف', en: 'Gentle Cleansing' }, impact: 15, impactColor: '#3182ce', productIds: ['p_cetaphil_gentle_cleanser'] },
        { stepTitle: { ar: 'تنظيم الدهون وتصغير المسام (يومياً)', en: 'Pore Minimizing (Daily)' }, impact: 40, impactColor: '#dd6b20', productIds: ['p_to_niacinamide'] },
        { stepTitle: { ar: 'التقشير العميق (مرة أسبوعياً مساءً)', en: 'Deep Peeling (Weekly PM)' }, impact: 45, impactColor: '#e53e3e', productIds: ['p_to_peeling'] }
    ]
});

// 5. إضافة صور المنتجات الجديدة وتحديث الروابط
imagesDB['p_to_niacinamide'] = "https://placehold.co/300x300/ffffff/000000?text=The+Ordinary\nNiacinamide";
imagesDB['p_to_peeling'] = "https://placehold.co/300x300/ffffff/e53e3e?text=The+Ordinary\nAHA+BHA+Peel";
imagesDB['p_cetaphil_gentle_cleanser'] = "https://placehold.co/300x300/ffffff/38a169?text=Cetaphil\nGentle+Cleanser";

productsList.forEach(p => p.image = imagesDB[p.id] || "https://placehold.co/300x300/ffffff/a0aec0?text=Product\nImage");

// ==========================================
// --- إضافة الجلسة الخامسة (الروتين الكوري K-Beauty) ---
// ==========================================

// 1. إضافة العلامات التجارية الجديدة
brandsList.push({
    id: 'cosrx', name: 'COSRX',
    families: [
        { id: 'snail', name: { ar: 'مجموعة الحلزون (للترميم)', en: 'Snail Line (Repair)' } }
    ]
});

brandsList.push({
    id: 'joseon', name: 'Beauty of Joseon',
    families: [
        { id: 'sun_care', name: { ar: 'الحماية من الشمس', en: 'Sun Care' } },
        { id: 'glow_serums', name: { ar: 'سيرومات النضارة', en: 'Glow Serums' } }
    ]
});

brandsList.push({
    id: 'somebymi', name: 'Some By Mi',
    families: [
        { id: 'miracle', name: { ar: 'مجموعة المعجزة 30 يوم', en: '30 Days Miracle' } }
    ]
});

// 2. إضافة مواد فعالة كورية جديدة
ingredientsDictionary["Snail Mucin"] = { name: { ar: "خلاصة الحلزون", en: "Snail Secretion Filtrate" }, desc: { ar: "يرطب بعمق، يهدئ التهيج، ويصلح حاجز البشرة المتضرر.", en: "Deeply hydrates, soothes, and repairs the skin barrier." } };
ingredientsDictionary["Rice Extract"] = { name: { ar: "مستخلص الأرز والبروبيوتيك", en: "Rice + Probiotics" }, desc: { ar: "يغذي البشرة ويمنحها تفتيحاً وإشراقة طبيعية.", en: "Nourishes and brightens the skin naturally." } };
ingredientsDictionary["PHA"] = { name: { ar: "أحماض PHA (لطيفة)", en: "PHA" }, desc: { ar: "مقشر لطيف جداً يحافظ على رطوبة البشرة، مناسب للبشرة الحساسة.", en: "Very gentle exfoliant that retains moisture." } };

// 3. إضافة المنتجات الكورية
productsList.push({
    id: 'p_cosrx_snail_essence', brandId: 'cosrx', familyId: 'snail',
    name: { ar: "خلاصة الحلزون 96 المتقدمة", en: "Advanced Snail 96 Mucin Power Essence" },
    description: { ar: "إيسنس خفيف يتغلغل في البشرة لترطيبها وإعطائها نضارة (Glass Skin) وعلاج الندبات.", en: "Lightweight essence for deep hydration and glass skin glow." },
    how_to_use: { ar: "بعد الغسول والتونر، توضع كمية مناسبة ويُطبطب على الوجه بلطف حتى يمتص.", en: "Apply after toner, pat gently until absorbed." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Snail Mucin", pct: "96%" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_joseon_relief_sun', brandId: 'joseon', familyId: 'sun_care',
    name: { ar: "واقي الشمس بالأرز والبروبيوتيك", en: "Relief Sun: Rice + Probiotics" },
    description: { ar: "واقي شمس كوري بقوام كريمي خفيف جداً، لا يترك أثراً أبيض ويمنح إشراقة صحية.", en: "Lightweight creamy sunscreen, no white cast, gives a healthy glow." },
    how_to_use: { ar: "في الخطوة الأخيرة من الروتين الصباحي، يوضع بسخاء على الوجه والرقبة.", en: "Apply generously as the last step of AM routine." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Rice Extract", pct: "30%" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_somebymi_miracle_toner', brandId: 'somebymi', familyId: 'miracle',
    name: { ar: "تونر المعجزة بالأحماض (30 يوم)", en: "AHA BHA PHA 30 Days Miracle Toner" },
    description: { ar: "تونر يومي يقشر بلطف، يعالج حب الشباب، وينظف المسام لصفاء البشرة خلال 30 يوماً.", en: "Daily exfoliating toner to treat acne and clear pores in 30 days." },
    how_to_use: { ar: "يُمسح به الوجه باستخدام قطنة بعد الغسول يومياً.", en: "Swipe over face with a cotton pad after cleansing daily." },
    cautions: { ar: "يحتوي على زيوت شجرة الشاي والنعناع، قد لا يناسب البشرة شديدة التحسس.", en: "Contains tea tree and peppermint oils, may not suit highly sensitive skin." },
    key_ingredients: [{ id: "AHA", pct: "" }, { id: "BHA", pct: "" }, { id: "PHA", pct: "" }],
    flags: { pregnancy_safe: false }
});

// 4. إضافة روتين "النضارة الكورية"
casesList.push({
    id: 'glass_skin',
    name: { ar: 'النضارة الزجاجية والترميم (الروتين الكوري)', en: 'Glass Skin & Glow (K-Beauty Routine)' },
    routine: [
        { stepTitle: { ar: 'تجهيز وتنقية المسام', en: 'Pore Prep & Clear' }, impact: 20, impactColor: '#3182ce', productIds: ['p_somebymi_miracle_toner'] },
        { stepTitle: { ar: 'ترميم وتغذية عميقة (خلاصة الحلزون)', en: 'Deep Nourishment (Snail Mucin)' }, impact: 50, impactColor: '#e53e3e', productIds: ['p_cosrx_snail_essence'] },
        { stepTitle: { ar: 'الحماية والإشراقة الكورية', en: 'Protection & Glow' }, impact: 30, impactColor: '#38a169', productIds: ['p_joseon_relief_sun'] }
    ]
});

// 5. إضافة صور المنتجات الكورية
imagesDB['p_cosrx_snail_essence'] = "https://placehold.co/300x300/ffffff/000000?text=COSRX\nSnail+Essence";
imagesDB['p_joseon_relief_sun'] = "https://placehold.co/300x300/ffffff/dd6b20?text=Beauty+of+Joseon\nRelief+Sun";
imagesDB['p_somebymi_miracle_toner'] = "https://placehold.co/300x300/ffffff/38a169?text=Some+By+Mi\nMiracle+Toner";

// تحديث الصور للمنتجات الجديدة (هذا السطر يضمن تفعيل الصور دائماً في الإضافات الجديدة)
productsList.forEach(p => p.image = imagesDB[p.id] || p.image || "https://placehold.co/300x300/ffffff/a0aec0?text=Product\nImage");
