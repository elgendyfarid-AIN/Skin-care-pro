// ==========================================
// القوائم الأساسية للموقع
// ==========================================
const ingredientsDictionary = {};
const brandsList = [];
const productsList = [];
const casesList = [];
const imagesDB = {}; // مكتبة الصور المبسطة

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
// 3. المنتجات مع تفاصيل (طريقة الاستخدام والتحذيرات)
// ==========================================
productsList.push({
    id: 'p_effaclar_gel', brandId: 'laroche', familyId: 'effaclar',
    name: { ar: "إيفاكلار جل غسول رغوي", en: "Effaclar Foaming Gel" },
    description: { ar: "غسول يومي للبشرة الدهنية والمعرضة لحب الشباب، ينظف بلطف ولا يجفف البشرة.", en: "Daily cleanser for oily skin." },
    how_to_use: { ar: "يُرغى في اليدين مع قليل من الماء ويوضع على الوجه مع التدليك بلطف، ثم يُشطف جيداً.", en: "Lather in the hands with a little water and apply to the face, massaging gently. Rinse perfectly." },
    cautions: { ar: "تجنب منطقة محيط العينين. في حال ملامسة العينين، تُشطف فوراً بالماء.", en: "Avoid the eye contour area. In case of contact with eyes, rinse immediately." },
    key_ingredients: ["Zinc PCA", "Thermal Spring Water"],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_effaclar_micro', brandId: 'laroche', familyId: 'effaclar',
    name: { ar: "إيفاكلار جل مقشر دقيق", en: "Effaclar Micro-Peeling Gel" },
    description: { ar: "غسول بتركيز عالي من الأحماض، مخصص للحبوب الشديدة في الوجه والظهر.", en: "Concentrated acid cleanser for severe acne." },
    how_to_use: { ar: "يُستخدم مرة واحدة يومياً، يُدلك على بشرة مبللة ثم يُشطف.", en: "Use once daily. Massage onto wet skin, then rinse." },
    cautions: { ar: "قد يزيد من حساسية البشرة للشمس، يجب استخدام واقي شمس نهاراً.", en: "May increase sun sensitivity, use sunscreen during the day." },
    key_ingredients: ["Salicylic Acid", "LHA", "Zinc PCA"],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_effaclar_duo', brandId: 'laroche', familyId: 'effaclar',
    name: { ar: "إيفاكلار ديو (+) مرطب علاجي", en: "Effaclar Duo (+)" },
    description: { ar: "يعالج الحبوب الموجودة ويمنع ظهورها مرة أخرى ويقلل من آثارها.", en: "Treats existing acne and reduces marks." },
    how_to_use: { ar: "يوضع على الوجه بالكامل صباحاً و/أو مساءً بعد تنظيف البشرة.", en: "Apply to whole face morning and/or evening after cleansing." },
    cautions: { ar: "لا يُستخدم على جروح مفتوحة.", en: "Do not apply on broken skin." },
    key_ingredients: ["Salicylic Acid", "Niacinamide", "Procerad"],
    flags: { pregnancy_safe: false }
});

productsList.push({
    id: 'p_effaclar_serum', brandId: 'laroche', familyId: 'effaclar',
    name: { ar: "إيفاكلار سيروم فائق التركيز", en: "Effaclar Ultra Concentrated Serum" },
    description: { ar: "سيروم ليلي يجمع بين 3 أحماض مقشرة لعلاج المسام والرؤوس السوداء.", en: "Night serum with 3 acids to treat enlarged pores." },
    how_to_use: { ar: "يوضع مساءً على كامل الوجه بعد الغسول. يجب رج العبوة قبل الاستخدام.", en: "Apply in the evening to the whole face. Shake before use." },
    cautions: { ar: "تجنب محيط العينين. لا يُستخدم مع منتجات تقشير أخرى في نفس الوقت.", en: "Avoid eye contour. Do not use with other exfoliating products at the same time." },
    key_ingredients: ["Salicylic Acid", "Glycolic Acid", "LHA", "Niacinamide"],
    flags: { pregnancy_safe: false }
});

// ==========================================
// 4. الحالات والروتين العلاجي
// ==========================================
casesList.push({
    id: 'acne',
    name: { ar: 'حب الشباب', en: 'Acne' },
    routine: [
        { stepTitle: { ar: 'الخطوة 1: الغسول (اختر واحد)', en: 'Step 1: Cleanser' }, productIds: ['p_effaclar_gel', 'p_effaclar_micro'] },
        { stepTitle: { ar: 'الخطوة 2: العلاج المركز', en: 'Step 2: Targeted Treatment' }, productIds: ['p_effaclar_serum'] },
        { stepTitle: { ar: 'الخطوة 3: الترطيب العلاجي', en: 'Step 3: Treatment Moisturizer' }, productIds: ['p_effaclar_duo'] }
    ]
});

// ==========================================
// 5. مكتبة الصور المبسطة (اكتب اسم ملف الصورة المرفوعة فقط)
// ==========================================
// ملاحظة: ارفع الصورة على جت هب واكتب اسمها هنا بين علامتي التنصيص
imagesDB['p_effaclar_gel'] = "1.jpg";
imagesDB['p_effaclar_micro'] = "";
imagesDB['p_effaclar_duo'] = "";
imagesDB['p_effaclar_serum'] = "";

productsList.forEach(p => p.image = imagesDB[p.id] || "");
