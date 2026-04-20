// ==========================================
// القوائم الأساسية للموقع
// ==========================================
const ingredientsDictionary = {};
const brandsList = [];
const productsList = [];
const casesList = [];
const imagesDB = {};

// ==========================================
// 1. العلامات التجارية والعائلات (الجلسة 1 + 2)
// ==========================================

/* --- الجلسة الأولى --- */
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

/* --- الجلسة الثانية --- */
brandsList.push({
    id: 'bioderma', name: 'Bioderma',
    families: [
        { id: 'sensibio', name: { ar: 'سينسيبو (للبشرة الحساسة والوردية)', en: 'Sensibio (Sensitive/Rosacea)' } },
        { id: 'atoderm', name: { ar: 'أتوديرم (للجفاف والإكزيما)', en: 'Atoderm (Dryness/Eczema)' } },
        { id: 'cicabio', name: { ar: 'سيكابيو (للترميم والجروح)', en: 'Cicabio (Healing & Repair)' } }
    ]
});

brandsList.push({
    id: 'avene', name: 'Avène',
    families: [
        { id: 'cicalfate', name: { ar: 'سيكالفات (للترميم المتقدم)', en: 'Cicalfate (Advanced Repair)' } },
        { id: 'cleanance', name: { ar: 'كلينانس (لحب الشباب)', en: 'Cleanance (Acne Prone)' } },
        { id: 'thermal', name: { ar: 'المياه الحرارية', en: 'Thermal Spring Water' } }
    ]
});

brandsList.push({
    id: 'ducray', name: 'Ducray',
    families: [
        { id: 'keracnyl', name: { ar: 'كيراكنيل (للحبوب والبقع)', en: 'Keracnyl (Acne & Spots)' } },
        { id: 'dexyane', name: { ar: 'ديكسيان (للإكزيما)', en: 'Dexyane (Eczema)' } }
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
// جديد الجلسة الثانية
ingredientsDictionary["C-Restore"] = { name: { ar: "سي-ريستور", en: "C+-Restore" }, desc: { ar: "مستخلص حيوي من مياه أفين يسرع ترميم البشرة 4 مرات أسرع.", en: "Postbiotic active ingredient to speed up repair." } };
ingredientsDictionary["Comedoclastin"] = { name: { ar: "كوميدوكلاستين", en: "Comedoclastin" }, desc: { ar: "مستخلص من بذور شوك الحليب يمنع تكوّن الحبوب تحت الجلد.", en: "Plant extract that prevents micro-comedones." } };
ingredientsDictionary["Myrtacine"] = { name: { ar: "ميرتاسين", en: "Myrtacine" }, desc: { ar: "مضاد بكتيري يدمر الغشاء الحيوي لبكتيريا حب الشباب.", en: "Breaks down C.acnes biofilm." } };
ingredientsDictionary["Sensibio DAF"] = { name: { ar: "براءة اختراع D.A.F", en: "D.A.F Patent" }, desc: { ar: "ترفع مستوى تحمل البشرة لحمايتها من التحسس.", en: "Increases the skin's tolerance threshold." } };

// ==========================================
// 3. المنتجات 
// ==========================================
/* --- منتجات الجلسة الأولى --- */
productsList.push({ id: 'p_lrp_effaclar_gel', brandId: 'laroche', familyId: 'effaclar', name: { ar: "إيفاكلار جل غسول رغوي", en: "Effaclar Purifying Foaming Gel" }, description: { ar: "غسول يومي للبشرة الدهنية.", en: "Daily cleanser for oily skin." }, how_to_use: { ar: "يُرغى بالماء ويوضع على الوجه ثم يُشطف.", en: "Lather with water, apply to face, rinse." }, cautions: { ar: "تجنب محيط العينين.", en: "Avoid eye contour." }, key_ingredients: [{ id: "Zinc PCA", pct: "0.2%" }], flags: { pregnancy_safe: true } });
productsList.push({ id: 'p_lrp_effaclar_duo', brandId: 'laroche', familyId: 'effaclar', name: { ar: "إيفاكلار ديو (+) مرطب علاجي", en: "Effaclar Duo (+)" }, description: { ar: "يعالج الحبوب ويمنع العلامات.", en: "Treats acne and prevents marks." }, how_to_use: { ar: "يوضع على كامل الوجه صباحاً و/أو مساءً.", en: "Apply to whole face AM and/or PM." }, cautions: { ar: "لا يستخدم على جروح مفتوحة.", en: "Do not apply on broken skin." }, key_ingredients: [{ id: "Niacinamide", pct: "4%" }, { id: "Salicylic Acid", pct: "0.5%" }], flags: { pregnancy_safe: false } });
productsList.push({ id: 'p_lrp_hyalu_b5', brandId: 'laroche', familyId: 'serums', name: { ar: "هيالو بي 5 سيروم", en: "Hyalu B5 Serum" }, description: { ar: "سيروم لترميم البشرة وعلاج الجفاف.", en: "Anti-wrinkle repairing serum." }, how_to_use: { ar: "3-4 قطرات على الوجه والرقبة صباحاً ومساءً.", en: "3-4 drops on face and neck AM/PM." }, cautions: { ar: "-", en: "-" }, key_ingredients: [{ id: "Hyaluronic Acid", pct: "" }], flags: { pregnancy_safe: true } });
productsList.push({ id: 'p_lrp_uvmune_fluid', brandId: 'laroche', familyId: 'anthelios', name: { ar: "أنثيليوس يو في ميون 400 سائل خفي", en: "Anthelios UVmune 400 Fluid" }, description: { ar: "واقي شمس سائل بقوام خفيف SPF50+.", en: "Ultra-light fluid sunscreen SPF50+." }, how_to_use: { ar: "يُرج جيداً، يوضع قبل التعرض للشمس ويُجدد.", en: "Shake well, apply before sun exposure." }, cautions: { ar: "تجنب ملامسة العين.", en: "Avoid eye contact." }, key_ingredients: [{ id: "Mexoryl 400", pct: "" }], flags: { pregnancy_safe: true } });
productsList.push({ id: 'p_cerave_hydrating_cleanser', brandId: 'cerave', familyId: 'cleansers', name: { ar: "الغسول المرطب", en: "Hydrating Cleanser" }, description: { ar: "غسول غير رغوي للبشرة العادية إلى الجافة.", en: "Non-foaming cleanser for normal to dry skin." }, how_to_use: { ar: "يدلك على بشرة مبللة ثم يشطف.", en: "Massage on wet skin, then rinse." }, cautions: { ar: "-", en: "-" }, key_ingredients: [{ id: "Ceramides", pct: "" }, { id: "Hyaluronic Acid", pct: "" }], flags: { pregnancy_safe: true } });
productsList.push({ id: 'p_cerave_blemish_cleanser', brandId: 'cerave', familyId: 'blemish', name: { ar: "غسول التحكم في الشوائب (حب الشباب)", en: "Blemish Control Cleanser" }, description: { ar: "غسول رغوي بحمض الساليسيليك.", en: "Salicylic acid cleanser for blemish-prone skin." }, how_to_use: { ar: "يستخدم يومياً على بشرة مبللة.", en: "Use daily on wet skin." }, cautions: { ar: "استخدم واقي شمس.", en: "Use sunscreen." }, key_ingredients: [{ id: "Salicylic Acid", pct: "2%" }, { id: "Ceramides", pct: "" }, { id: "Niacinamide", pct: "" }], flags: { pregnancy_safe: true } });
productsList.push({ id: 'p_cerave_moisturizing_cream', brandId: 'cerave', familyId: 'moisturizers', name: { ar: "كريم الترطيب", en: "Moisturising Cream" }, description: { ar: "كريم غني لترطيب الوجه والجسم.", en: "Rich cream for dry to very dry skin." }, how_to_use: { ar: "يوضع بسخاء عند الحاجة.", en: "Apply liberally as often as needed." }, cautions: { ar: "-", en: "-" }, key_ingredients: [{ id: "Ceramides", pct: "" }, { id: "Hyaluronic Acid", pct: "" }], flags: { pregnancy_safe: true } });
productsList.push({ id: 'p_vichy_mineral_89', brandId: 'vichy', familyId: 'mineral', name: { ar: "مينيرال 89 بوستر مقوي", en: "Minéral 89 Fortifying Booster" }, description: { ar: "سيروم يومي يقوي حاجز البشرة ويرطبها.", en: "Daily booster to strengthen skin barrier." }, how_to_use: { ar: "قطرتين على بشرة نظيفة كأول خطوة.", en: "Apply 2 drops after cleansing as step 1." }, cautions: { ar: "-", en: "-" }, key_ingredients: [{ id: "Vichy Volcanic Water", pct: "89%" }, { id: "Hyaluronic Acid", pct: "" }], flags: { pregnancy_safe: true } });

/* --- منتجات الجلسة الثانية (الجديدة) --- */
productsList.push({
    id: 'p_bioderma_sensibio_h2o', brandId: 'bioderma', familyId: 'sensibio',
    name: { ar: "ماء ميسيلار سينسيبو إتش تو أو", en: "Sensibio H2O Micellar Water" },
    description: { ar: "مزيل مكياج ومنظف أيقوني للبشرة الحساسة، لا يحتاج للغسيل بالماء.", en: "Iconic micellar water for sensitive skin, no-rinse." },
    how_to_use: { ar: "يبلل قطن بالمنتج ويمسح الوجه والعينين بلطف.", en: "Soak a cotton pad and gently cleanse face and eyes." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Sensibio DAF", pct: "" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_bioderma_atoderm_baume', brandId: 'bioderma', familyId: 'atoderm',
    name: { ar: "أتوديرم إنتينسيف بوم", en: "Atoderm Intensive Baume" },
    description: { ar: "بلسم فائق الترطيب يعالج الحكة ويهدئ نوبات الإكزيما للكبار والأطفال.", en: "Ultra-soothing balm that stops itching and eczema flare-ups." },
    how_to_use: { ar: "يوضع مرة أو مرتين يومياً على بشرة نظيفة.", en: "Apply once or twice a day to cleansed skin." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Ceramides", pct: "" }, { id: "Zinc PCA", pct: "" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_avene_cicalfate', brandId: 'avene', familyId: 'cicalfate',
    name: { ar: "سيكالفات بلس كريم مرمم", en: "Cicalfate+ Restorative Protective Cream" },
    description: { ar: "كريم الإسعافات الأولية للبشرة! يعالج الحروق السطحية، التهابات الليزر، والخدوش.", en: "First-aid cream! Repairs superficial burns, post-laser, and scratches." },
    how_to_use: { ar: "يوضع مرتين يومياً على المنطقة المتضررة النظيفة والجافة.", en: "Apply twice a day to clean, dry affected area." },
    cautions: { ar: "لا يستخدم على الجروح النازفة.", en: "Do not apply on oozing wounds." },
    key_ingredients: [{ id: "C-Restore", pct: "" }, { id: "Zinc PCA", pct: "" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_avene_comedomed', brandId: 'avene', familyId: 'cleanance',
    name: { ar: "كلينانس كوميدوميد", en: "Cleanance Comedomed" },
    description: { ar: "علاج ثوري لحب الشباب، يمنع تكون الحبوب تحت الجلد من جذورها.", en: "Revolutionary acne treatment, prevents invisible micro-comedones." },
    how_to_use: { ar: "يوضع صباحاً ومساءً على كامل الوجه.", en: "Apply morning and evening to the face." },
    cautions: { ar: "رائحته قوية في البداية (طبيعي بسبب التركيبة) وتختفي سريعاً.", en: "Strong initial scent is normal and fades quickly." },
    key_ingredients: [{ id: "Comedoclastin", pct: "25%" }],
    flags: { pregnancy_safe: false }
});

productsList.push({
    id: 'p_ducray_keracnyl_pp', brandId: 'ducray', familyId: 'keracnyl',
    name: { ar: "كيراكنيل بي بي بلس", en: "Keracnyl PP+ Cream" },
    description: { ar: "كريم مهدئ لحب الشباب الملتهب، ممتاز كعلاج مصاحب لأدوية الروأكيوتان.", en: "Soothing anti-blemish cream, ideal with oral acne treatments (Isotretinoin)." },
    how_to_use: { ar: "يوضع مرتين يومياً.", en: "Apply twice daily." },
    cautions: { ar: "-", en: "-" },
    key_ingredients: [{ id: "Myrtacine", pct: "" }, { id: "Niacinamide", pct: "" }],
    flags: { pregnancy_safe: false }
});

// ==========================================
// 4. الحالات والروتينات العلاجية
// ==========================================
casesList.push({
    id: 'acne_basic',
    name: { ar: 'حب الشباب (الروتين الأساسي)', en: 'Acne (Basic Routine)' },
    routine: [
        { stepTitle: { ar: 'الغسول المعالج', en: 'Treatment Cleanser' }, impact: 20, impactColor: '#dd6b20', productIds: ['p_cerave_blemish_cleanser', 'p_lrp_effaclar_gel'] },
        { stepTitle: { ar: 'العلاج المركز', en: 'Targeted Treatment' }, impact: 50, impactColor: '#e53e3e', productIds: ['p_lrp_effaclar_duo', 'p_avene_comedomed', 'p_ducray_keracnyl_pp'] },
        { stepTitle: { ar: 'الوقاية (نهاراً)', en: 'Protection (Day)' }, impact: 30, impactColor: '#38a169', productIds: ['p_lrp_uvmune_fluid'] }
    ]
});

// جديد الجلسة الثانية
casesList.push({
    id: 'rosacea_sensitive',
    name: { ar: 'الوردية والبشرة شديدة التحسس', en: 'Rosacea & Highly Sensitive Skin' },
    routine: [
        { stepTitle: { ar: 'تنظيف بدون ماء (لتجنب التهيج)', en: 'No-Rinse Cleansing' }, impact: 30, impactColor: '#3182ce', productIds: ['p_bioderma_sensibio_h2o'] },
        { stepTitle: { ar: 'تقوية حاجز البشرة', en: 'Barrier Strengthening' }, impact: 40, impactColor: '#e53e3e', productIds: ['p_vichy_mineral_89'] },
        { stepTitle: { ar: 'ترطيب مهدئ للاحمرار', en: 'Soothing Moisturizer' }, impact: 30, impactColor: '#38a169', productIds: ['p_cerave_moisturizing_cream'] } // سيتم استبداله مستقبلا بـ Sensibio AR
    ]
});

casesList.push({
    id: 'eczema_repair',
    name: { ar: 'الإكزيما والجفاف الشديد والحروق', en: 'Eczema, Severe Dryness & Burns' },
    routine: [
        { stepTitle: { ar: 'غسول خالي من الصابون', en: 'Soap-Free Cleanser' }, impact: 20, impactColor: '#3182ce', productIds: ['p_cerave_hydrating_cleanser'] },
        { stepTitle: { ar: 'الترميم العاجل (للجروح والالتهابات)', en: 'Urgent SOS Repair' }, impact: 40, impactColor: '#e53e3e', productIds: ['p_avene_cicalfate'] },
        { stepTitle: { ar: 'بلسم منع الحكة (للإكزيما)', en: 'Anti-Itch Balm (Eczema)' }, impact: 40, impactColor: '#dd6b20', productIds: ['p_bioderma_atoderm_baume'] }
    ]
});

// ==========================================
// 5. مكتبة الصور (Smart URLs)
// ==========================================
imagesDB['p_lrp_effaclar_gel'] = "https://placehold.co/300x300/ffffff/3182ce?text=La+Roche\nEffaclar+Gel";
imagesDB['p_lrp_effaclar_duo'] = "https://placehold.co/300x300/ffffff/3182ce?text=La+Roche\nEffaclar+Duo+";
imagesDB['p_lrp_hyalu_b5'] = "https://placehold.co/300x300/ffffff/3182ce?text=La+Roche\nHyalu+B5";
imagesDB['p_lrp_uvmune_fluid'] = "https://placehold.co/300x300/ffffff/e53e3e?text=La+Roche\nAnthelios+UVmune";

imagesDB['p_cerave_hydrating_cleanser'] = "https://placehold.co/300x300/ffffff/38a169?text=CeraVe\nHydrating+Cleanser";
imagesDB['p_cerave_blemish_cleanser'] = "https://placehold.co/300x300/ffffff/3182ce?text=CeraVe\nBlemish+Cleanser";
imagesDB['p_cerave_moisturizing_cream'] = "https://placehold.co/300x300/ffffff/3182ce?text=CeraVe\nMoisturising+Cream";

imagesDB['p_vichy_mineral_89'] = "https://placehold.co/300x300/ffffff/805ad5?text=Vichy\nMineral+89";
imagesDB['p_vichy_normaderm_phyto'] = "https://placehold.co/300x300/ffffff/38a169?text=Vichy\nNormaderm+Phyto";

// صور الجلسة الثانية
imagesDB['p_bioderma_sensibio_h2o'] = "https://placehold.co/300x300/ffffff/e53e3e?text=Bioderma\nSensibio+H2O";
imagesDB['p_bioderma_atoderm_baume'] = "https://placehold.co/300x300/ffffff/3182ce?text=Bioderma\nAtoderm+Baume";
imagesDB['p_avene_cicalfate'] = "https://placehold.co/300x300/ffffff/3182ce?text=Avene\nCicalfate+";
imagesDB['p_avene_comedomed'] = "https://placehold.co/300x300/ffffff/38a169?text=Avene\nComedomed";
imagesDB['p_ducray_keracnyl_pp'] = "https://placehold.co/300x300/ffffff/38a169?text=Ducray\nKeracnyl+PP+";

productsList.forEach(p => p.image = imagesDB[p.id] || "https://placehold.co/300x300/ffffff/a0aec0?text=Product\nImage");
