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
