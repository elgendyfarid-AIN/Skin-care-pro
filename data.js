// ==========================================
// القوائم الأساسية للموقع (نسخة نظيفة ومجمعة للجلسات 1 إلى 5)
// ==========================================
const ingredientsDictionary = {};
const brandsList = [];
const productsList = [];
const casesList = [];
const imagesDB = {};

// 1. العلامات التجارية
brandsList.push({ id: 'laroche', name: 'La Roche-Posay', families: [{ id: 'effaclar', name: { ar: 'إيفاكلار', en: 'Effaclar' } }, { id: 'toleriane', name: { ar: 'توليان', en: 'Toleriane' } }, { id: 'anthelios', name: { ar: 'أنثيليوس', en: 'Anthelios' } }, { id: 'serums', name: { ar: 'السيرومات', en: 'Serums' } }] });
brandsList.push({ id: 'cerave', name: 'CeraVe', families: [{ id: 'cleansers', name: { ar: 'المنظفات', en: 'Cleansers' } }, { id: 'moisturizers', name: { ar: 'المرطبات', en: 'Moisturizers' } }, { id: 'blemish', name: { ar: 'التحكم في الحبوب', en: 'Blemish Control' } }] });
brandsList.push({ id: 'vichy', name: 'Vichy', families: [{ id: 'mineral', name: { ar: 'مينيرال 89', en: 'Minéral 89' } }, { id: 'normaderm', name: { ar: 'نورماديرم', en: 'Normaderm' } }] });
brandsList.push({ id: 'bioderma', name: 'Bioderma', families: [{ id: 'sensibio', name: { ar: 'سينسيبو', en: 'Sensibio' } }, { id: 'atoderm', name: { ar: 'أتوديرم', en: 'Atoderm' } }] });
brandsList.push({ id: 'avene', name: 'Avène', families: [{ id: 'cicalfate', name: { ar: 'سيكالفات', en: 'Cicalfate' } }, { id: 'cleanance', name: { ar: 'كلينانس', en: 'Cleanance' } }] });
brandsList.push({ id: 'ducray', name: 'Ducray', families: [{ id: 'keracnyl', name: { ar: 'كيراكنيل', en: 'Keracnyl' } }] });
brandsList.push({ id: 'eucerin', name: 'Eucerin', families: [{ id: 'even_pigment', name: { ar: 'إيفين بيجمنت', en: 'Even Pigment' } }, { id: 'dermopurifyer', name: { ar: 'ديرموبيوريفاير', en: 'DermoPurifyer' } }] });
brandsList.push({ id: 'novaclear', name: 'Novaclear', families: [{ id: 'gluta', name: { ar: 'جلوتا', en: 'Gluta' } }] });
brandsList.push({ id: 'sebamed', name: 'Sebamed', families: [{ id: 'clearface', name: { ar: 'كلير فيس', en: 'Clear Face' } }] });
brandsList.push({ id: 'theordinary', name: 'The Ordinary', families: [{ id: 'acids', name: { ar: 'الأحماض', en: 'Acids' } }, { id: 'vitamins', name: { ar: 'الفيتامينات', en: 'Vitamins' } }] });
brandsList.push({ id: 'cetaphil', name: 'Cetaphil', families: [{ id: 'daily_care', name: { ar: 'العناية اليومية', en: 'Daily Care' } }] });
brandsList.push({ id: 'cosrx', name: 'COSRX', families: [{ id: 'snail', name: { ar: 'مجموعة الحلزون', en: 'Snail Line' } }] });
brandsList.push({ id: 'joseon', name: 'Beauty of Joseon', families: [{ id: 'sun_care', name: { ar: 'واقيات الشمس', en: 'Sun Care' } }] });
brandsList.push({ id: 'somebymi', name: 'Some By Mi', families: [{ id: 'miracle', name: { ar: 'المعجزة 30 يوم', en: '30 Days Miracle' } }] });

// 2. المواد الفعالة
ingredientsDictionary["Zinc PCA"] = { name: { ar: "زنك بيكولينات", en: "Zinc PCA" }, desc: { ar: "ينظم الإفرازات الدهنية ويقاوم البكتيريا.", en: "Regulates sebum." } };
ingredientsDictionary["Salicylic Acid"] = { name: { ar: "حمض الساليسيليك", en: "Salicylic Acid" }, desc: { ar: "حمض مقشر ينظف المسام بعمق.", en: "Exfoliates pores." } };
ingredientsDictionary["Niacinamide"] = { name: { ar: "نياسيناميد", en: "Niacinamide" }, desc: { ar: "يهدئ الاحمرار ويقلل التصبغات.", en: "Reduces dark spots." } };
ingredientsDictionary["Ceramides"] = { name: { ar: "سيراميد", en: "Ceramides" }, desc: { ar: "يرمم حاجز البشرة.", en: "Restores barrier." } };
ingredientsDictionary["Hyaluronic Acid"] = { name: { ar: "حمض الهيالورونيك", en: "Hyaluronic Acid" }, desc: { ar: "يجذب الرطوبة للبشرة.", en: "Attracts moisture." } };
ingredientsDictionary["C-Restore"] = { name: { ar: "سي-ريستور", en: "C+-Restore" }, desc: { ar: "يسرع ترميم البشرة.", en: "Speeds up repair." } };
ingredientsDictionary["Thiamidol"] = { name: { ar: "ثياميدول", en: "Thiamidol" }, desc: { ar: "يعالج فرط التصبغ.", en: "Reduces hyperpigmentation." } };
ingredientsDictionary["AHA"] = { name: { ar: "أحماض AHA", en: "AHA" }, desc: { ar: "تقشر سطح البشرة.", en: "Exfoliates surface." } };
ingredientsDictionary["Snail Mucin"] = { name: { ar: "خلاصة الحلزون", en: "Snail Mucin" }, desc: { ar: "يرطب ويصلح حاجز البشرة.", en: "Hydrates and repairs." } };

// 3. المنتجات
productsList.push({ id: 'p_lrp_effaclar_gel', brandId: 'laroche', familyId: 'effaclar', name: { ar: "إيفاكلار جل غسول", en: "Effaclar Gel" }, description: { ar: "غسول للبشرة الدهنية.", en: "Oily skin cleanser." }, key_ingredients: [{ id: "Zinc PCA", pct: "0.2%" }], flags: { pregnancy_safe: true } });
productsList.push({ id: 'p_lrp_effaclar_duo', brandId: 'laroche', familyId: 'effaclar', name: { ar: "إيفاكلار ديو (+)", en: "Effaclar Duo (+)" }, description: { ar: "يعالج الحبوب.", en: "Treats acne." }, key_ingredients: [{ id: "Niacinamide", pct: "4%" }], flags: { pregnancy_safe: false } });
productsList.push({ id: 'p_cerave_hydrating', brandId: 'cerave', familyId: 'cleansers', name: { ar: "الغسول المرطب", en: "Hydrating Cleanser" }, description: { ar: "للبشرة الجافة.", en: "For dry skin." }, key_ingredients: [{ id: "Ceramides", pct: "" }], flags: { pregnancy_safe: true } });
productsList.push({ id: 'p_avene_cicalfate', brandId: 'avene', familyId: 'cicalfate', name: { ar: "سيكالفات بلس كريم", en: "Cicalfate+ Cream" }, description: { ar: "مرمم للبشرة.", en: "Skin repair." }, key_ingredients: [{ id: "C-Restore", pct: "" }], flags: { pregnancy_safe: true } });
productsList.push({ id: 'p_eucerin_dual', brandId: 'eucerin', familyId: 'even_pigment', name: { ar: "السيروم المزدوج", en: "Dual Serum" }, description: { ar: "للتصبغات.", en: "For dark spots." }, key_ingredients: [{ id: "Thiamidol", pct: "" }], flags: { pregnancy_safe: false } });
productsList.push({ id: 'p_to_niacinamide', brandId: 'theordinary', familyId: 'vitamins', name: { ar: "نياسيناميد 10%", en: "Niacinamide 10%" }, description: { ar: "يقلل المسام.", en: "Minimizes pores." }, key_ingredients: [{ id: "Niacinamide", pct: "10%" }], flags: { pregnancy_safe: true } });
productsList.push({ id: 'p_cosrx_snail', brandId: 'cosrx', familyId: 'snail', name: { ar: "خلاصة الحلزون 96", en: "Snail 96 Essence" }, description: { ar: "نضارة وترميم.", en: "Glow and repair." }, key_ingredients: [{ id: "Snail Mucin", pct: "96%" }], flags: { pregnancy_safe: true } });

// 4. الحالات والروتينات
casesList.push({
    id: 'acne_basic',
    name: { ar: 'حب الشباب (الأساسي)', en: 'Acne (Basic)' },
    routine: [
        { stepTitle: { ar: 'الغسول المعالج', en: 'Treatment Cleanser' }, impact: 20, impactColor: '#dd6b20', productIds: ['p_lrp_effaclar_gel'] },
        { stepTitle: { ar: 'العلاج والترطيب', en: 'Treatment & Moisture' }, impact: 50, impactColor: '#e53e3e', productIds: ['p_lrp_effaclar_duo'] }
    ]
});
casesList.push({
    id: 'eczema_repair',
    name: { ar: 'الترميم والجروح', en: 'Skin Repair' },
    routine: [
        { stepTitle: { ar: 'غسول لطيف', en: 'Gentle Cleanser' }, impact: 20, impactColor: '#3182ce', productIds: ['p_cerave_hydrating'] },
        { stepTitle: { ar: 'الترميم العاجل', en: 'Urgent Repair' }, impact: 80, impactColor: '#e53e3e', productIds: ['p_avene_cicalfate'] }
    ]
});

// تعيين صور مؤقتة ملونة لضمان عدم توقف الموقع
productsList.forEach(p => {
    p.image = `https://placehold.co/300x300/f4f7f6/3182ce?text=${p.brandId}`;
});
casesList.forEach(c => {
    c.image = `https://placehold.co/800x220/3182ce/ffffff?text=${c.id}`;
});
// ==========================================
// --- إضافة الجلسة السادسة (البراندات التخصصية: ISDIN, Filorga, Uriage, Noreva) ---
// ==========================================

// 1. إضافة العلامات التجارية الجديدة
brandsList.push({
    id: 'isdin', name: 'ISDIN',
    families: [
        { id: 'fotoprotector', name: { ar: 'فوتوبروتكتور (واقيات الشمس)', en: 'Fotoprotector (Sun Care)' } },
        { id: 'isdinceutics', name: { ar: 'إيزدينسيوتيكس (للتجاعيد والنضارة)', en: 'Isdinceutics (Anti-Aging)' } }
    ]
});

brandsList.push({
    id: 'filorga', name: 'Filorga',
    families: [
        { id: 'time_filler', name: { ar: 'تايم فيلر (للتجاعيد)', en: 'Time-Filler' } },
        { id: 'ncef', name: { ar: 'مجموعة NCEF (للنضارة الفائقة)', en: 'NCEF Reverse' } }
    ]
});

brandsList.push({
    id: 'uriage', name: 'Uriage',
    families: [
        { id: 'bariederm', name: { ar: 'باريديرم (للترميم والعزل)', en: 'Bariéderm (Cica & Repair)' } },
        { id: 'hyseac', name: { ar: 'هيسياك (للبشرة الدهنية)', en: 'Hyséac (Oily Skin)' } }
    ]
});

brandsList.push({
    id: 'noreva', name: 'Noreva',
    families: [
        { id: 'trio_white', name: { ar: 'تريو وايت (للتصبغات المتقدمة)', en: 'Trio White XP' } }
    ]
});

// 2. إضافة مواد فعالة تخصصية جديدة
ingredientsDictionary["NCEF"] = { name: { ar: "مركب NCEF", en: "NCEF Complex" }, desc: { ar: "براءة اختراع من فيلورجا، مركب يحتوي على 50 مكون نشط (فيتامينات، أحماض أمينية، معادن) لتجديد الخلايا.", en: "Unique polyrevitalizing complex encapsulating 50 active ingredients." } };
ingredientsDictionary["DNA Repairsomes"] = { name: { ar: "إنزيمات إصلاح الـ DNA", en: "DNA Repairsomes" }, desc: { ar: "تقنية من إيزدين لإصلاح التلف الخلوي الناتج عن تراكم أشعة الشمس (الشيخوخة الضوئية).", en: "Repairs sun-induced cellular damage at the DNA level." } };
ingredientsDictionary["Peptides"] = { name: { ar: "البيبتيدات", en: "Peptides" }, desc: { ar: "أحماض أمينية تحفز إنتاج الكولاجين والإيلاستين لشد البشرة وتقليل التجاعيد.", en: "Stimulates collagen production for firmer skin." } };
ingredientsDictionary["Uriage Thermal Water"] = { name: { ar: "مياه يورياج الحرارية", en: "Uriage Thermal Water" }, desc: { ar: "مياه متساوية التوتر (Isotonic) ترطب، تهدئ، وتحمي حاجز البشرة بشكل طبيعي.", en: "Isotonic water that hydrates and soothes the skin." } };

// 3. إضافة المنتجات التخصصية
productsList.push({
    id: 'p_isdin_fusion_water', brandId: 'isdin', familyId: 'fotoprotector',
    name: { ar: "إيزدين فيوجن ووتر ماجيك SPF 50", en: "Fusion Water Magic SPF 50" },
    description: { ar: "واقي شمس مائي فائق الخفة، يمتص فوراً ولا يحرق العينين. (الأكثر مبيعاً)", en: "Ultra-light water-phased sunscreen, absorbs immediately, safe-eye tech." },
    how_to_use: { ar: "يوضع بسخاء على بشرة جافة أو مبللة قبل التعرض للشمس.", en: "Apply liberally on dry or wet skin before sun exposure." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Hyaluronic Acid", pct: "" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_isdin_age_repair', brandId: 'isdin', familyId: 'fotoprotector',
    name: { ar: "فوتو ألترا إيدج ريبير (مكافحة الشيخوخة)", en: "FotoUltra Age Repair Fusion Water" },
    description: { ar: "يحمي من الشمس، يصلح تلف الـ DNA، ويحفز الكولاجين لتقليل التجاعيد المرئية.", en: "Protects, repairs DNA damage, and reverses signs of photoaging." },
    how_to_use: { ar: "يطبق يومياً كخطوة أخيرة في الروتين.", en: "Apply daily as the last step." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "DNA Repairsomes", pct: "" }, { id: "Peptides", pct: "" }],
    flags: { pregnancy_safe: false } // يفضل استشارة الطبيب لوجود مواد مقاومة للشيخوخة متقدمة
});

productsList.push({
    id: 'p_filorga_time_filler', brandId: 'filorga', familyId: 'time_filler',
    name: { ar: "تايم فيلر 5XP كريم التجاعيد", en: "Time-Filler 5XP Cream" },
    description: { ar: "كريم مستوحى من تقنيات الطب التجميلي، يعالج 5 أنواع من التجاعيد (التعبيرية، العميقة، السطحية، الجفاف، الرقبة).", en: "Inspired by aesthetic medicine, targets 5 types of wrinkles." },
    how_to_use: { ar: "يوضع صباحاً ومساءً على الوجه والرقبة.", en: "Apply AM and PM to face and neck." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "NCEF", pct: "" }, { id: "Peptides", pct: "" }, { id: "Hyaluronic Acid", pct: "" }],
    flags: { pregnancy_safe: false }
});

productsList.push({
    id: 'p_uriage_bariederm_cica', brandId: 'uriage', familyId: 'bariederm',
    name: { ar: "باريديرم سيكا كريم بالزنك", en: "Bariéderm Cica-Cream with Copper-Zinc" },
    description: { ar: "كريم عازل ومرمم مثالي للتهيجات اليومية، الجروح السطحية، وطفح الحفاضات.", en: "Repairing and insulating cream for everyday irritations." },
    how_to_use: { ar: "يوضع مرتين يومياً على بشرة نظيفة.", en: "Apply twice daily to clean skin." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Uriage Thermal Water", pct: "" }, { id: "Zinc PCA", pct: "" }], // الزنك والنحاس
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_noreva_trio_white_xp', brandId: 'noreva', familyId: 'trio_white',
    name: { ar: "تريو وايت إكس بي (علاج مكثف للتصبغات)", en: "Trio White XP Anti-Dark Spot" },
    description: { ar: "علاج مركز يستهدف فرط التصبغ (الكلف وتصبغات الشمس) ويمنع ظهور بقع جديدة.", en: "Intensive treatment targeting hyperpigmentation and dark spots." },
    how_to_use: { ar: "يوضع مساءً على البقع الداكنة أو كامل الوجه.", en: "Apply at night to dark spots or entire face." },
    cautions: { ar: "الاستخدام المنتظم لواقي الشمس نهاراً ضروري جداً.", en: "Strict sun protection is required during the day." },
    key_ingredients: [{ id: "Niacinamide", pct: "" }, { id: "AHA", pct: "" }],
    flags: { pregnancy_safe: false }
});

// 4. إضافة حالات / روتينات طبية متقدمة
casesList.push({
    id: 'anti_aging',
    name: { ar: 'مكافحة التجاعيد وشد البشرة (Anti-Aging)', en: 'Anti-Aging & Firming' },
    routine: [
        { stepTitle: { ar: 'الترطيب العميق وتهيئة البشرة', en: 'Deep Hydration & Prep' }, impact: 20, impactColor: '#3182ce', productIds: ['p_vichy_mineral_89', 'p_cosrx_snail_essence'] },
        { stepTitle: { ar: 'العلاج المركز للتجاعيد (البديل التجميلي)', en: 'Targeted Wrinkle Repair' }, impact: 50, impactColor: '#805ad5', productIds: ['p_filorga_time_filler'] },
        { stepTitle: { ar: 'إصلاح التلف الضوئي (نهاراً)', en: 'Photo-Damage Repair (Day)' }, impact: 30, impactColor: '#e53e3e', productIds: ['p_isdin_age_repair'] }
    ]
});

// 5. تحديث الصور المؤقتة للمنتجات الجديدة لتجنب العطل
const session6Images = {
    'p_isdin_fusion_water': "https://placehold.co/300x300/f4f7f6/dd6b20?text=ISDIN\nFusion+Water",
    'p_isdin_age_repair': "https://placehold.co/300x300/f4f7f6/dd6b20?text=ISDIN\nAge+Repair",
    'p_filorga_time_filler': "https://placehold.co/300x300/f4f7f6/000000?text=Filorga\nTime-Filler",
    'p_uriage_bariederm_cica': "https://placehold.co/300x300/f4f7f6/3182ce?text=Uriage\nCica+Cream",
    'p_noreva_trio_white_xp': "https://placehold.co/300x300/f4f7f6/a0aec0?text=Noreva\nTrio+White"
};

productsList.forEach(p => {
    if(session6Images[p.id]) p.image = session6Images[p.id];
});

// إضافة صورة مؤقتة لحالة مكافحة التجاعيد
casesList.forEach(c => {
    if(c.id === 'anti_aging') c.image = "https://placehold.co/800x220/805ad5/ffffff?text=Anti-Aging+Routine";
});
