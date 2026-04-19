// القوائم الأساسية (لا تمسح هذا الجزء أبداً)
const productsList = [];
const ingredientsDictionary = {};

// ==========================================
// --- المنتج رقم 1: غسول إيفاكلار ---
// ==========================================
ingredientsDictionary["Zinc PCA"] = { 
    name: { ar: "زنك بيكولينات", en: "Zinc PCA" }, 
    desc: { ar: "مادة تنظم إفراز الدهون ولها خصائص مضادة للبكتيريا المسببة لحب الشباب.", en: "Regulates sebum production and has antibacterial properties." } 
};
ingredientsDictionary["Thermal Spring Water"] = { 
    name: { ar: "مياه الينابيع الحرارية", en: "Thermal Spring Water" }, 
    desc: { ar: "مياه طبيعية تهدئة تهيج البشرة وتخفف الاحمرار.", en: "Natural water that soothes skin irritation and reduces redness." } 
};

productsList.push({
    "brand": "La Roche-Posay",
    "name": {
        "ar": "إيفاكلار جل غسول رغوي",
        "en": "Effaclar Purifying Foaming Gel"
    },
    "description": {
        "ar": "غسول يومي للبشرة الدهنية والمعرضة لحب الشباب، ينظف بلطف ويقلل الإفرازات الدهنية دون تجفيف البشرة.",
        "en": "Daily cleanser for oily and acne-prone skin, gently cleanses and reduces sebum without over-drying."
    },
    "key_ingredients": ["Zinc PCA", "Thermal Spring Water"],
    "flags": {
        "pregnancy_safe": true
    }
});


// ==========================================
// --- تحديث قاموس المواد الفعالة الجديد ---
// ==========================================
ingredientsDictionary["Salicylic Acid"] = { 
    name: { ar: "حمض الساليسيليك", en: "Salicylic Acid" }, 
    desc: { ar: "حمض مقشر ينظف المسام بعمق ويزيل الرؤوس السوداء والشوائب.", en: "Exfoliating acid that deep cleans pores and removes blackheads." } 
};
ingredientsDictionary["Niacinamide"] = { 
    name: { ar: "نياسيناميد", en: "Niacinamide" }, 
    desc: { ar: "فيتامين B3 الذي يهدئ الاحمرار، يقلل التهاب البشرة، ويقوي حاجزها الطبيعي.", en: "Vitamin B3 that soothes redness, reduces inflammation, and strengthens the skin barrier." } 
};
ingredientsDictionary["Procerad"] = { 
    name: { ar: "بروسيراد", en: "Procerad" }, 
    desc: { ar: "مركب حصري يساعد في منع ظهور العلامات الحمراء أو البنية الناتجة عن حب الشباب.", en: "Exclusive ceramide that helps prevent red or brown marks left by acne." } 
};
ingredientsDictionary["LHA"] = { 
    name: { ar: "إل إتش إيه", en: "LHA" }, 
    desc: { ar: "مشتق من حمض الساليسيليك يقوم بتقشير سطح البشرة بنعومة فائقة دون تهيج.", en: "A derivative of salicylic acid that gently exfoliates the skin surface without irritation." } 
};
ingredientsDictionary["Glycolic Acid"] = { 
    name: { ar: "حمض الجليكوليك", en: "Glycolic Acid" }, 
    desc: { ar: "حمض الفواكه الذي يحسن ملمس البشرة ويزيد من نضارتها من خلال تقشير الخلايا الميتة.", en: "Alpha hydroxy acid that improves skin texture and radiance by exfoliating dead cells." } 
};

// ==========================================
// --- إضافة منتجات عائلة إيفاكلار ---
// ==========================================

// 1. كريم إيفاكلار ديو بلس
productsList.push({
    "brand": "La Roche-Posay",
    "name": { "ar": "إيفاكلار ديو (+) مرطب علاجي", "en": "Effaclar Duo (+) Anti-Acne Moisturizer" },
    "description": {
        "ar": "علاج متكامل للبشرة المعرضة للشوائب، يعالج الحبوب الموجودة ويمنع ظهورها مرة أخرى ويقلل من آثارها.",
        "en": "Comprehensive treatment for blemish-prone skin, treats existing acne, prevents breakouts, and reduces marks."
    },
    "key_ingredients": ["Salicylic Acid", "Niacinamide", "Procerad"],
    "flags": { "pregnancy_safe": false } // يحتوي على مشتقات قد لا تفضلها بعض الحوامل
});

// 2. غسول إيفاكلار ميكرو-بيلينج (للجسم والوجه)
productsList.push({
    "brand": "La Roche-Posay",
    "name": { "ar": "إيفاكلار جل مقشر دقيق", "en": "Effaclar Micro-Peeling Gel" },
    "description": {
        "ar": "غسول بتركيز عالي من الأحماض، مخصص للحبوب الشديدة في الوجه والظهر والصدر.",
        "en": "Concentrated acid cleanser for severe acne on the face, back, and chest."
    },
    "key_ingredients": ["Salicylic Acid", "LHA", "Zinc PCA"],
    "flags": { "pregnancy_safe": true }
});

// 3. سيروم إيفاكلار المركز
productsList.push({
    "brand": "La Roche-Posay",
    "name": { "ar": "إيفاكلار سيروم فائق التركيز", "en": "Effaclar Ultra Concentrated Serum" },
    "description": {
        "ar": "سيروم ليلي يجمع بين 3 أحماض مقشرة لعلاج المسام الواسعة، الرؤوس السوداء، وآثار الحبوب.",
        "en": "Night serum combining 3 exfoliating acids to treat enlarged pores, blackheads, and acne marks."
    },
    "key_ingredients": ["Salicylic Acid", "Glycolic Acid", "LHA", "Niacinamide"],
    "flags": { "pregnancy_safe": false }
});

// 4. مرطب إيفاكلار مات
productsList.push({
    "brand": "La Roche-Posay",
    "name": { "ar": "إيفاكلار مات مرطب مطفي", "en": "Effaclar Mat Moisturizer" },
    "description": {
        "ar": "مرطب ينظم إفراز الدهون ويصغر المسام، يعطي مظهراً مطفياً بدون لمعان لمدة طويلة.",
        "en": "Sebum-regulating moisturizer that shrinks pores and provides a long-lasting matte finish."
    },
    "key_ingredients": ["Zinc PCA"],
    "flags": { "pregnancy_safe": true }
});

