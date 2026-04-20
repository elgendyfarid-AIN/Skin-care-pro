// ==========================================
// القوائم الأساسية للموقع
// ==========================================
const ingredientsDictionary = {};
const brandsList = [];
const productsList = [];
const casesList = [];

// ==========================================
// 1. العلامات التجارية والعائلات
// ==========================================
brandsList.push({
    id: 'laroche',
    name: 'La Roche-Posay',
    families: [
        { id: 'effaclar', name: { ar: 'عائلة إيفاكلار (للبشرة الدهنية وحب الشباب)', en: 'Effaclar (Oily & Acne-Prone)' } }
    ]
});

// ==========================================
// 2. المواد الفعالة
// ==========================================
ingredientsDictionary["Zinc PCA"] = { name: { ar: "زنك بيكولينات", en: "Zinc PCA" }, desc: { ar: "ينظم الإفرازات الدهنية ويقاوم البكتيريا.", en: "Regulates sebum and fights bacteria." } };
ingredientsDictionary["Thermal Spring Water"] = { name: { ar: "مياه الينابيع الحرارية", en: "Thermal Spring Water" }, desc: { ar: "تهدئ تهيج البشرة وتخفف الاحمرار.", en: "Soothes skin irritation and reduces redness." } };
ingredientsDictionary["Salicylic Acid"] = { name: { ar: "حمض الساليسيليك", en: "Salicylic Acid" }, desc: { ar: "حمض مقشر ينظف المسام بعمق ويزيل الرؤوس السوداء.", en: "Exfoliating acid that deep cleans pores." } };
ingredientsDictionary["Niacinamide"] = { name: { ar: "نياسيناميد", en: "Niacinamide" }, desc: { ar: "يهدئ الاحمرار ويقلل التهاب البشرة.", en: "Soothes redness and reduces inflammation." } };
ingredientsDictionary["Procerad"] = { name: { ar: "بروسيراد", en: "Procerad" }, desc: { ar: "يمنع ظهور العلامات الحمراء أو البنية الناتجة عن الحبوب.", en: "Helps prevent red or brown marks left by acne." } };
ingredientsDictionary["LHA"] = { name: { ar: "إل إتش إيه", en: "LHA" }, desc: { ar: "يقشر سطح البشرة بنعومة فائقة.", en: "Gently exfoliates the skin surface." } };
ingredientsDictionary["Glycolic Acid"] = { name: { ar: "حمض الجليكوليك", en: "Glycolic Acid" }, desc: { ar: "يحسن ملمس البشرة ويزيد نضارتها.", en: "Improves skin texture and radiance." } };

// ==========================================
// 3. المنتجات (مع كود صورة شفاف مؤقت)
// ==========================================
const dummyImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

// 1. الغسول العادي
productsList.push({
    id: 'p_effaclar_gel', brandId: 'laroche', familyId: 'effaclar',
    name: { ar: "إيفاكلار جل غسول رغوي", en: "Effaclar Foaming Gel" },
    description: { ar: "غسول يومي للبشرة الدهنية والمعرضة لحب الشباب، ينظف بلطف ولا يجفف البشرة.", en: "Daily cleanser for oily skin, gently cleanses without over-drying." },
    key_ingredients: ["Zinc PCA", "Thermal Spring Water"],
    flags: { pregnancy_safe: true }, image: dummyImg
});

// 2. الغسول المقشر
productsList.push({
    id: 'p_effaclar_micro', brandId: 'laroche', familyId: 'effaclar',
    name: { ar: "إيفاكلار جل مقشر دقيق", en: "Effaclar Micro-Peeling Gel" },
    description: { ar: "غسول بتركيز عالي من الأحماض، مخصص للحبوب الشديدة في الوجه والظهر.", en: "Concentrated acid cleanser for severe acne on face and back." },
    key_ingredients: ["Salicylic Acid", "LHA", "Zinc PCA"],
    flags: { pregnancy_safe: true }, image: dummyImg
});

// 3. كريم ديو بلس
productsList.push({
    id: 'p_effaclar_duo', brandId: 'laroche', familyId: 'effaclar',
    name: { ar: "إيفاكلار ديو (+) مرطب علاجي", en: "Effaclar Duo (+)" },
    description: { ar: "يعالج الحبوب الموجودة ويمنع ظهورها مرة أخرى ويقلل من آثارها.", en: "Treats existing acne, prevents breakouts, and reduces marks." },
    key_ingredients: ["Salicylic Acid", "Niacinamide", "Procerad"],
    flags: { pregnancy_safe: false }, image: dummyImg
});

// 4. سيروم إيفاكلار
productsList.push({
    id: 'p_effaclar_serum', brandId: 'laroche', familyId: 'effaclar',
    name: { ar: "إيفاكلار سيروم فائق التركيز", en: "Effaclar Ultra Concentrated Serum" },
    description: { ar: "سيروم ليلي يجمع بين 3 أحماض مقشرة لعلاج المسام والرؤوس السوداء.", en: "Night serum with 3 acids to treat enlarged pores and blackheads." },
    key_ingredients: ["Salicylic Acid", "Glycolic Acid", "LHA", "Niacinamide"],
    flags: { pregnancy_safe: false }, image: dummyImg
});

// ==========================================
// 4. الحالات والروتين العلاجي
// ==========================================
casesList.push({
    id: 'acne',
    name: { ar: 'حب الشباب', en: 'Acne' },
    routine: [
        { 
            stepTitle: { ar: 'الخطوة 1: الغسول (اختر واحد)', en: 'Step 1: Cleanser (Choose one)' }, 
            productIds: ['p_effaclar_gel', 'p_effaclar_micro'] 
        },
        { 
            stepTitle: { ar: 'الخطوة 2: العلاج المركز', en: 'Step 2: Targeted Treatment' }, 
            productIds: ['p_effaclar_serum'] 
        },
        { 
            stepTitle: { ar: 'الخطوة 3: الترطيب العلاجي', en: 'Step 3: Treatment Moisturizer' }, 
            productIds: ['p_effaclar_duo'] 
        }
    ]
});
