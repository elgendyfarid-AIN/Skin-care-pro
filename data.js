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
// ==========================================
// --- إضافة الجلسة السابعة (البراندات الإقليمية والمحلية) ---
// ==========================================

// 1. إضافة العلامات التجارية الجديدة
brandsList.push({
    id: 'beesline', name: 'Beesline',
    families: [
        { id: 'whitening', name: { ar: 'التفتيح والعناية', en: 'Whitening Care' } },
        { id: 'deodorant', name: { ar: 'مزيلات العرق', en: 'Deodorants' } }
    ]
});

brandsList.push({
    id: 'biooil', name: 'Bio-Oil',
    families: [
        { id: 'body_care', name: { ar: 'العناية بالجسم والندبات', en: 'Body & Scar Care' } }
    ]
});

brandsList.push({
    id: 'maxon', name: 'Maxon',
    families: [
        { id: 'sun_care', name: { ar: 'واقيات الشمس', en: 'Sun Care' } },
        { id: 'hair_care', name: { ar: 'العناية بالشعر', en: 'Hair Care' } }
    ]
});

brandsList.push({
    id: 'himalaya', name: 'Himalaya',
    families: [
        { id: 'purifying', name: { ar: 'مجموعة النيم (للنقاء)', en: 'Purifying Neem' } }
    ]
});

// 2. إضافة مواد فعالة جديدة
ingredientsDictionary["Beeswax"] = { name: { ar: "شمع النحل", en: "Beeswax" }, desc: { ar: "يرطب ويهدئ البشرة ويشكل طبقة واقية طبيعية.", en: "Hydrates, soothes, and forms a natural protective barrier." } };
ingredientsDictionary["Lumiskin"] = { name: { ar: "لوميسكين", en: "Lumiskin" }, desc: { ar: "مادة فعالة قوية في تفتيح التصبغات وتوحيد لون البشرة.", en: "Powerful active for brightening and evening skin tone." } };
ingredientsDictionary["PurCellin Oil"] = { name: { ar: "زيت بورسيلين", en: "PurCellin Oil" }, desc: { ar: "يقلل من كثافة تركيبة الزيت ليجعله سريع الامتصاص وفعال في علاج الندبات.", en: "Makes the oil lightweight, fast-absorbing, and targets scars." } };
ingredientsDictionary["Neem"] = { name: { ar: "خلاصة النيم", en: "Neem Extract" }, desc: { ar: "مضاد بكتيري قوي ومنقي طبيعي يساعد في التخلص من الحبوب.", en: "Antibacterial and natural purifier for acne." } };

// 3. إضافة المنتجات
productsList.push({
    id: 'p_beesline_deo', brandId: 'beesline', familyId: 'deodorant',
    name: { ar: "رول أون تفتيح وتأخير نمو الشعر", en: "Whitening Roll-On Deodorant" },
    description: { ar: "مزيل عرق آمن ومفتح لمنطقة الإبط، يؤخر نمو الشعر. (من الأكثر مبيعاً)", en: "Safe whitening deodorant, delays hair growth." },
    how_to_use: { ar: "يوضع يومياً على بشرة نظيفة وجافة.", en: "Apply daily on clean, dry skin." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Beeswax", pct: "" }, { id: "Lumiskin", pct: "" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_beesline_sens_zone', brandId: 'beesline', familyId: 'whitening',
    name: { ar: "كريم تفتيح المناطق الحساسة", en: "Whitening Sensitive Zone Cream" },
    description: { ar: "كريم طبيعي لتفتيح وتجديد شباب المناطق الحساسة بأمان.", en: "Natural cream to safely brighten sensitive zones." },
    how_to_use: { ar: "يدلك بلطف مرتين يومياً حتى يمتص تماماً.", en: "Massage gently twice daily until absorbed." },
    cautions: { ar: "للاستخدام الخارجي فقط.", en: "For external use only." },
    key_ingredients: [{ id: "Beeswax", pct: "" }, { id: "Lumiskin", pct: "" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_biooil_skincare', brandId: 'biooil', familyId: 'body_care',
    name: { ar: "زيت العناية بالبشرة (بايو أويل)", en: "Skincare Oil" },
    description: { ar: "الزيت رقم 1 عالمياً لتحسين مظهر الندبات، علامات التمدد للحوامل، وعدم توحد لون البشرة.", en: "World's #1 scar and stretch mark oil." },
    how_to_use: { ar: "يدلك بحركات دائرية على المنطقة المطلوبة مرتين يومياً لمدة 3 أشهر على الأقل.", en: "Massage circularly twice daily for at least 3 months." },
    cautions: { ar: "لا يوضع على جروح مفتوحة.", en: "Do not apply on broken skin." },
    key_ingredients: [{ id: "PurCellin Oil", pct: "" }],
    flags: { pregnancy_safe: true } // مشهور جداً وآمن للحوامل
});

productsList.push({
    id: 'p_maxon_max100', brandId: 'maxon', familyId: 'sun_care',
    name: { ar: "واقي شمس ماكس 100", en: "Max100 Sunscreen Cream" },
    description: { ar: "حماية قصوى من الشمس، طبي بامتياز ومناسب للبشرة الحساسة وللأجواء الحارة في الخليج.", en: "Maximum sun protection, suitable for sensitive skin and hot climates." },
    how_to_use: { ar: "يوضع بسخاء قبل التعرض للشمس بنصف ساعة.", en: "Apply generously 30 mins before sun exposure." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_himalaya_neem_wash', brandId: 'himalaya', familyId: 'purifying',
    name: { ar: "غسول النيم لتنقية الوجه", en: "Purifying Neem Face Wash" },
    description: { ar: "غسول يومي خالٍ من الصابون، يمنع الحبوب وينقي البشرة (بديل طبيعي واقتصادي ممتاز).", en: "Soap-free daily wash, prevents pimples naturally." },
    how_to_use: { ar: "يدلك على وجه مبلل ثم يشطف.", en: "Massage on wet face and rinse." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Neem", pct: "" }],
    flags: { pregnancy_safe: true }
});

// 4. إضافة حالات / روتينات طبية جديدة
casesList.push({
    id: 'body_care_stretch',
    name: { ar: 'العناية بالجسم (علامات التمدد والتفتيح)', en: 'Body Care (Stretch Marks & Whitening)' },
    routine: [
        { stepTitle: { ar: 'تفتيح وتوحيد لون الجسم', en: 'Body & Sensitive Zone Whitening' }, impact: 40, impactColor: '#e53e3e', productIds: ['p_beesline_sens_zone', 'p_beesline_deo'] },
        { stepTitle: { ar: 'علاج الندبات وعلامات التمدد', en: 'Scar & Stretch Mark Treatment' }, impact: 60, impactColor: '#dd6b20', productIds: ['p_biooil_skincare'] }
    ]
});

// 5. تحديث الصور المؤقتة للمنتجات الجديدة لتجنب العطل
const session7Images = {
    'p_beesline_deo': "https://placehold.co/300x300/f4f7f6/dd6b20?text=Beesline\nRoll-On",
    'p_beesline_sens_zone': "https://placehold.co/300x300/f4f7f6/dd6b20?text=Beesline\nSens+Zone",
    'p_biooil_skincare': "https://placehold.co/300x300/f4f7f6/e53e3e?text=Bio-Oil\nSkincare",
    'p_maxon_max100': "https://placehold.co/300x300/f4f7f6/3182ce?text=Maxon\nMax100",
    'p_himalaya_neem_wash': "https://placehold.co/300x300/f4f7f6/38a169?text=Himalaya\nNeem"
};

productsList.forEach(p => {
    if(session7Images[p.id]) p.image = session7Images[p.id];
});

casesList.forEach(c => {
    if(c.id === 'body_care_stretch') c.image = "https://placehold.co/800x220/dd6b20/ffffff?text=Body+Care+Routine";
});
// ==========================================
// --- إضافة الجلسة الثامنة (العناية بالشعر وفروة الرأس) ---
// ==========================================

// 1. تحديث العلامات التجارية الموجودة مسبقاً (إضافة عائلات الشعر لفيشي ودوكراي)
let vichyBrand = brandsList.find(b => b.id === 'vichy');
if(vichyBrand) {
    vichyBrand.families.push({ id: 'dercos', name: { ar: 'ديركوس (للعناية بالشعر)', en: 'Dercos (Hair Care)' } });
}

let ducrayBrand = brandsList.find(b => b.id === 'ducray');
if(ducrayBrand) {
    ducrayBrand.families.push({ id: 'anaphase', name: { ar: 'أنافاز (لتساقط الشعر)', en: 'Anaphase (Hair Loss)' } });
    ducrayBrand.families.push({ id: 'kelual', name: { ar: 'كيلوال دي إس (للقشرة)', en: 'Kelual DS (Anti-Dandruff)' } });
}

// 2. إضافة مواد فعالة تخصصية للشعر
ingredientsDictionary["Aminexil"] = { name: { ar: "أمينيكسيل 1.5%", en: "Aminexil 1.5%" }, desc: { ar: "براءة اختراع لوريال: يمنع تصلب الكولاجين حول بصيلة الشعر مما يثبت الشعرة في الجذور ويمنع تساقطها.", en: "Prevents collagen stiffening around the hair root, anchoring it firmly." } };
ingredientsDictionary["Selenium Disulfide"] = { name: { ar: "سلينيوم دايسلفايد", en: "Selenium Disulfide" }, desc: { ar: "مضاد للفطريات يقضي على قشرة الرأس المستعصية ويهدئ الحكة والالتهاب.", en: "Antifungal active that eliminates stubborn dandruff and soothes itching." } };
ingredientsDictionary["Monolaurin"] = { name: { ar: "مونولورين", en: "Monolaurin" }, desc: { ar: "يبطئ تساقط الشعر ويطيل دورة حياة الشعرة.", en: "Slows down hair loss and prolongs the hair life cycle." } };
ingredientsDictionary["Ciclopirox Olamine"] = { name: { ar: "سيكلوبيروكس أولامين", en: "Ciclopirox Olamine" }, desc: { ar: "مضاد للفطريات قوي جداً لعلاج التهاب الجلد الدهني الشديد.", en: "Potent antifungal for severe seborrheic dermatitis." } };

// 3. إضافة منتجات الشعر
productsList.push({
    id: 'p_vichy_dercos_energy', brandId: 'vichy', familyId: 'dercos',
    name: { ar: "شامبو ديركوس إنيرجي المقوي", en: "Dercos Energy+ Stimulating Shampoo" },
    description: { ar: "شامبو مقوي يرافق علاجات تساقط الشعر (الأمبولات واللوشن)، يعيد الحيوية والقوة للشعر الضعيف.", en: "Stimulating shampoo complementing hair loss treatments." },
    how_to_use: { ar: "يُدلك على فروة الرأس المبللة ويترك دقيقة ثم يشطف. مناسب للاستخدام اليومي.", en: "Massage on wet scalp, leave for 1 min, rinse. Suitable for daily use." },
    cautions: { ar: "تجنب ملامسة العينين.", en: "Avoid contact with eyes." },
    key_ingredients: [{ id: "Aminexil", pct: "" }, { id: "Niacinamide", pct: "" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_vichy_dercos_aminexil', brandId: 'vichy', familyId: 'dercos',
    name: { ar: "أمبولات أمينيكسيل كلينيكال 5", en: "Dercos Aminexil Clinical 5" },
    description: { ar: "علاج مكثف لتساقط الشعر يعالج الأسباب الخمسة للتساقط (توجد نسخة للرجال ونسخة للنساء).", en: "Intensive anti-hair loss treatment targeting 5 root causes." },
    how_to_use: { ar: "أمبولة واحدة يومياً أو 3 مرات أسبوعياً على فروة نظيفة، يُدلك ولا يُشطف.", en: "1 vial daily or 3x/week on clean scalp, massage, do not rinse." },
    cautions: { ar: "للاستعمال الخارجي فقط على الفروة.", en: "For external use only on the scalp." },
    key_ingredients: [{ id: "Aminexil", pct: "1.5%" }, { id: "Vichy Volcanic Water", pct: "" }],
    flags: { pregnancy_safe: false } // يفضل استشارة طبيب النساء في الحمل
});

productsList.push({
    id: 'p_vichy_dercos_dandruff', brandId: 'vichy', familyId: 'dercos',
    name: { ar: "شامبو ديركوس المضاد للقشرة", en: "Dercos Anti-Dandruff Shampoo" },
    description: { ar: "شامبو علاجي أيقوني يقضي على 100% من القشرة المرئية من الاستخدام الأول ويمنع عودتها لـ 6 أسابيع.", en: "Eliminates 100% visible dandruff from first use and provides 6-week anti-relapse." },
    how_to_use: { ar: "يُترك على الفروة لمدة دقيقتين ثم يشطف، يُستخدم 2-3 مرات أسبوعياً كعلاج، ومرة كوقاية.", en: "Leave on scalp for 2 mins, rinse. Use 2-3x/week for treatment." },
    cautions: { ar: "لا يستخدم للأطفال أقل من 12 سنة. تجنب ملامسة العين (يحتوي على السلينيوم).", en: "Not for children under 12. Avoid eye contact." },
    key_ingredients: [{ id: "Selenium Disulfide", pct: "1%" }, { id: "Salicylic Acid", pct: "1%" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_ducray_anaphase', brandId: 'ducray', familyId: 'anaphase',
    name: { ar: "شامبو أنافاز بلس لتساقط الشعر", en: "Anaphase+ Anti-Hair Loss Shampoo" },
    description: { ar: "شامبو طبي يهيئ فروة الرأس لاستقبال بخاخات التساقط ويضيف حجماً وكثافة للشعر الخفيف.", en: "Prepares scalp for hair loss treatments and adds volume." },
    how_to_use: { ar: "يُغسل الشعر، ثم يعاد وضعه ويدلك لمدة 3 دقائق ليحفز الدورة الدموية ثم يشطف.", en: "Wash hair, reapply, massage for 3 mins to stimulate microcirculation, rinse." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Monolaurin", pct: "" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_ducray_kelual_ds', brandId: 'ducray', familyId: 'kelual',
    name: { ar: "شامبو كيلوال دي إس", en: "Kelual DS Treatment Shampoo" },
    description: { ar: "علاج متقدم وفعال جداً للقشرة الشديدة المصحوبة بحكة واحمرار وقشور دهنية (التهاب الجلد الدهني).", en: "Advanced treatment for severe dandruff with itching and redness." },
    how_to_use: { ar: "يُدلك ويُترك لمدة 3 دقائق ثم يشطف. 3 مرات أسبوعياً لمدة أسبوعين للعلاج المكثف.", en: "Leave for 3 mins, rinse. 3x/week for 2 weeks." },
    cautions: { ar: "قد يسبب جفافاً طفيفاً لأطراف الشعر، يُفضل استخدام بلسم مرطب على الأطراف فقط.", en: "May dry hair lengths slightly, use conditioner on ends only." },
    key_ingredients: [{ id: "Ciclopirox Olamine", pct: "1.5%" }, { id: "Zinc PCA", pct: "" }],
    flags: { pregnancy_safe: true }
});

// 4. إضافة حالات / روتينات طبية خاصة بالشعر
casesList.push({
    id: 'hair_loss',
    name: { ar: 'تساقط الشعر وضعف البصيلات', en: 'Hair Loss & Thinning' },
    routine: [
        { stepTitle: { ar: 'الشامبو المحفز والمقوي (للتهيئة)', en: 'Stimulating Shampoo (Prep)' }, impact: 20, impactColor: '#3182ce', productIds: ['p_vichy_dercos_energy', 'p_ducray_anaphase'] },
        { stepTitle: { ar: 'العلاج المكثف لتثبيت البصيلة', en: 'Intensive Root Anchoring' }, impact: 80, impactColor: '#e53e3e', productIds: ['p_vichy_dercos_aminexil'] }
    ]
});

casesList.push({
    id: 'dandruff_seborrheic',
    name: { ar: 'قشرة الرأس والتهاب الفروة', en: 'Dandruff & Seborrheic Dermatitis' },
    routine: [
        { stepTitle: { ar: 'الشامبو العلاجي (مضاد الفطريات)', en: 'Treatment Shampoo (Anti-Fungal)' }, impact: 100, impactColor: '#dd6b20', productIds: ['p_vichy_dercos_dandruff', 'p_ducray_kelual_ds'] }
    ]
});

// 5. تحديث الصور المؤقتة (Placeholders) للمنتجات والحالات الجديدة
const session8Images = {
    'p_vichy_dercos_energy': "https://placehold.co/300x300/f4f7f6/e53e3e?text=Vichy\nDercos+Energy",
    'p_vichy_dercos_aminexil': "https://placehold.co/300x300/f4f7f6/e53e3e?text=Vichy\nAminexil",
    'p_vichy_dercos_dandruff': "https://placehold.co/300x300/f4f7f6/38a169?text=Vichy\nDercos+Dandruff",
    'p_ducray_anaphase': "https://placehold.co/300x300/f4f7f6/dd6b20?text=Ducray\nAnaphase+",
    'p_ducray_kelual_ds': "https://placehold.co/300x300/f4f7f6/a0aec0?text=Ducray\nKelual+DS"
};

productsList.forEach(p => {
    if(session8Images[p.id]) p.image = session8Images[p.id];
});

casesList.forEach(c => {
    if(c.id === 'hair_loss') c.image = "https://placehold.co/800x220/e53e3e/ffffff?text=Hair+Loss+Treatment";
    if(c.id === 'dandruff_seborrheic') c.image = "https://placehold.co/800x220/38a169/ffffff?text=Anti-Dandruff+Treatment";
});
// ==========================================
// --- إضافة الجلسة التاسعة (تفعيل أنواع البشرة Skin Types) ---
// ==========================================

const skinTypesList = [];

skinTypesList.push({
    id: 'oily_skin',
    name: { ar: 'البشرة الدهنية والمختلطة', en: 'Oily & Combination Skin' },
    image: 'https://placehold.co/800x220/38a169/ffffff?text=Oily+Skin+Routine',
    routine: [
        { stepTitle: { ar: 'التنظيف وإزالة الدهون', en: 'Cleansing & Sebum Control' }, impact: 25, impactColor: '#38a169', productIds: ['p_lrp_effaclar_gel', 'p_eucerin_dermopurifyer_gel', 'p_sebamed_clearface_foam'] },
        { stepTitle: { ar: 'الترطيب الخفيف والتحكم بالمسام', en: 'Light Hydration & Pore Control' }, impact: 45, impactColor: '#3182ce', productIds: ['p_to_niacinamide', 'p_vichy_normaderm_phyto', 'p_cosrx_snail_essence'] },
        { stepTitle: { ar: 'الوقاية السائلة (بدون لمعان)', en: 'Fluid Sun Protection (Matte)' }, impact: 30, impactColor: '#dd6b20', productIds: ['p_isdin_fusion_water', 'p_lrp_uvmune_fluid'] }
    ]
});

skinTypesList.push({
    id: 'dry_skin',
    name: { ar: 'البشرة الجافة والعادية', en: 'Dry & Normal Skin' },
    image: 'https://placehold.co/800x220/3182ce/ffffff?text=Dry+Skin+Routine',
    routine: [
        { stepTitle: { ar: 'التنظيف اللطيف (بدون رغوة قاسية)', en: 'Gentle Cleansing' }, impact: 20, impactColor: '#3182ce', productIds: ['p_cerave_hydrating_cleanser', 'p_cetaphil_gentle_cleanser'] },
        { stepTitle: { ar: 'الترطيب العميق والمكثف', en: 'Deep & Intense Hydration' }, impact: 55, impactColor: '#e53e3e', productIds: ['p_vichy_mineral_89', 'p_cerave_moisturizing_cream', 'p_bioderma_atoderm_baume'] },
        { stepTitle: { ar: 'الوقاية والتغذية', en: 'Protection & Nourishment' }, impact: 25, impactColor: '#dd6b20', productIds: ['p_joseon_relief_sun', 'p_maxon_max100'] }
    ]
});

skinTypesList.push({
    id: 'sensitive_skin',
    name: { ar: 'البشرة الحساسة والمتهيجة', en: 'Sensitive & Irritated Skin' },
    image: 'https://placehold.co/800x220/e53e3e/ffffff?text=Sensitive+Skin+Routine',
    routine: [
        { stepTitle: { ar: 'تنظيف ملطف (ماء ميسيلار)', en: 'Soothing Cleansing' }, impact: 30, impactColor: '#3182ce', productIds: ['p_bioderma_sensibio_h2o'] },
        { stepTitle: { ar: 'ترميم حاجز البشرة المتهالك', en: 'Skin Barrier Repair' }, impact: 50, impactColor: '#dd6b20', productIds: ['p_uriage_bariederm_cica', 'p_avene_cicalfate'] },
        { stepTitle: { ar: 'وقاية معدنية ولطيفة', en: 'Gentle Protection' }, impact: 20, impactColor: '#38a169', productIds: ['p_isdin_fusion_water'] }
    ]
});
// ==========================================
// --- إضافة الجلسة العاشرة (الرتوش النهائية: العناية بالعين والشفاه) ---
// ==========================================

// 1. تحديث عائلات بعض البراندات لإضافة منتجات العيون والشفاه
let ceraveBrand10 = brandsList.find(b => b.id === 'cerave');
if(ceraveBrand10) ceraveBrand10.families.push({ id: 'eye_care', name: { ar: 'العناية بمحيط العين', en: 'Eye Care' } });

let eucerinBrand10 = brandsList.find(b => b.id === 'eucerin');
if(eucerinBrand10) eucerinBrand10.families.push({ id: 'aquaphor', name: { ar: 'أكوافور (للترميم)', en: 'Aquaphor' } });

// 2. إضافة مواد فعالة جديدة
ingredientsDictionary["Panthenol"] = { name: { ar: "بانثينول (فيتامين B5)", en: "Panthenol" }, desc: { ar: "يلطف ويرمم التشققات الشديدة ويدعم التئام الجلد بسرعة.", en: "Soothes, repairs severe cracks, and supports skin healing." } };
ingredientsDictionary["Marine Extracts"] = { name: { ar: "مستخلصات بحرية", en: "Marine Extracts" }, desc: { ar: "تخفف الهالات السوداء والانتفاخات حول العين وتنشط الدورة الدموية.", en: "Reduces dark circles and puffiness around the eyes." } };

// 3. إضافة المنتجات
productsList.push({
    id: 'p_cerave_eye_repair', brandId: 'cerave', familyId: 'eye_care',
    name: { ar: "كريم ترميم محيط العين", en: "Eye Repair Cream" },
    description: { ar: "يخفف الهالات السوداء والانتفاخات ويرمم حاجز البشرة الرقيق حول العين.", en: "Reduces dark circles and puffiness, restores eye skin barrier." },
    how_to_use: { ar: "توضع نقاط صغيرة حول العين وتدلك بلطف حتى الامتصاص التام.", en: "Apply in small dots around eyes, smooth until absorbed." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Ceramides", pct: "" }, { id: "Hyaluronic Acid", pct: "" }, { id: "Marine Extracts", pct: "" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_eucerin_aquaphor_lip', brandId: 'eucerin', familyId: 'aquaphor',
    name: { ar: "مرمم الشفاه أكوافور", en: "Aquaphor SOS Lip Repair" },
    description: { ar: "علاج إسعافي للشفاه الجافة جداً والمتشققة، يمنح راحة فورية خلال 60 ثانية.", en: "SOS care for dry, cracked lips. Relief in 60 seconds." },
    how_to_use: { ar: "يوضع على الشفاه عند الحاجة وبشكل متكرر.", en: "Apply to lips as frequently as needed." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Panthenol", pct: "" }],
    flags: { pregnancy_safe: true }
});

// 4. إضافة روتين (العناية بمحيط العين والشفاه)
casesList.push({
    id: 'eye_lip_care',
    name: { ar: 'العناية بالعين والشفاه (الهالات والتشققات)', en: 'Eye & Lip Care (Dark Circles & Cracks)' },
    image: 'https://placehold.co/800x220/805ad5/ffffff?text=Eye+%26+Lip+Care',
    routine: [
        { stepTitle: { ar: 'علاج الهالات والانتفاخات (العين)', en: 'Dark Circles & Puffiness (Eyes)' }, impact: 60, impactColor: '#3182ce', productIds: ['p_cerave_eye_repair'] },
        { stepTitle: { ar: 'الترميم العاجل للتشققات (الشفاه)', en: 'SOS Crack Repair (Lips)' }, impact: 40, impactColor: '#e53e3e', productIds: ['p_eucerin_aquaphor_lip'] }
    ]
});

// 5. إضافة الصور المؤقتة (Placeholders)
productsList.forEach(p => {
    if(p.id === 'p_cerave_eye_repair') p.image = "https://placehold.co/300x300/f4f7f6/3182ce?text=CeraVe\nEye+Repair";
    if(p.id === 'p_eucerin_aquaphor_lip') p.image = "https://placehold.co/300x300/f4f7f6/e53e3e?text=Eucerin\nAquaphor+Lip";
});
