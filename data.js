// ==========================================
// القوائم الأساسية للموقع
// ==========================================
const ingredientsDictionary = {};
const brandsList = [];
const productsList = [];
const casesList = [];
const imagesDB = {};

// ==========================================
// 1. العلامات التجارية والعائلات
// ==========================================
brandsList.push({
    id: 'laroche',
    name: 'La Roche-Posay',
    families: [
        { id: 'effaclar', name: { ar: 'عائلة إيفاكلار (للبشرة الدهنية وحب الشباب)', en: 'Effaclar (Oily & Acne-Prone)' } },
        { id: 'anthelios', name: { ar: 'عائلة أنثيليوس (واقيات الشمس)', en: 'Anthelios (Sun Protection)' } }
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
ingredientsDictionary["Mexoryl 400"] = { name: { ar: "ميكسوريل 400", en: "Mexoryl 400" }, desc: { ar: "فلتر حماية متطور يحمي من أطول موجات الأشعة فوق البنفسجية الضارة.", en: "Advanced UV filter protecting against the most insidious UV rays." } };
ingredientsDictionary["Airlicium"] = { name: { ar: "إيرليسيوم", en: "Airlicium" }, desc: { ar: "جزيئات دقيقة تمتص الدهون الزائدة والعرق لتعطي مظهراً غير لامع.", en: "Micro-particles that absorb excess sebum and sweat for a matte finish." } };

// ==========================================
// 3. المنتجات 
// ==========================================
productsList.push({
    id: 'p_effaclar_gel', brandId: 'laroche', familyId: 'effaclar',
    name: { ar: "إيفاكلار جل غسول رغوي", en: "Effaclar Foaming Gel" },
    description: { ar: "غسول يومي للبشرة الدهنية والمعرضة لحب الشباب، ينظف بلطف ولا يجفف البشرة.", en: "Daily cleanser for oily skin." },
    how_to_use: { ar: "يُرغى في اليدين مع قليل من الماء ويوضع على الوجه مع التدليك بلطف، ثم يُشطف جيداً.", en: "Lather in the hands with a little water and apply to the face." },
    cautions: { ar: "تجنب منطقة محيط العينين.", en: "Avoid the eye contour area." },
    key_ingredients: [{ id: "Zinc PCA", pct: "0.2%" }, { id: "Thermal Spring Water", pct: "" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_effaclar_micro', brandId: 'laroche', familyId: 'effaclar',
    name: { ar: "إيفاكلار جل مقشر دقيق", en: "Effaclar Micro-Peeling Gel" },
    description: { ar: "غسول بتركيز عالي من الأحماض، مخصص للحبوب الشديدة في الوجه والظهر.", en: "Concentrated acid cleanser for severe acne." },
    how_to_use: { ar: "يُستخدم مرة واحدة يومياً، يُدلك على بشرة مبللة ثم يُشطف.", en: "Use once daily. Massage onto wet skin, then rinse." },
    cautions: { ar: "يجب استخدام واقي شمس نهاراً.", en: "Use sunscreen during the day." },
    key_ingredients: [{ id: "Salicylic Acid", pct: "2%" }, { id: "LHA", pct: "0.05%" }, { id: "Zinc PCA", pct: "0.2%" }],
    flags: { pregnancy_safe: true }
});

productsList.push({
    id: 'p_effaclar_duo', brandId: 'laroche', familyId: 'effaclar',
    name: { ar: "إيفاكلار ديو (+) مرطب علاجي", en: "Effaclar Duo (+)" },
    description: { ar: "يعالج الحبوب الموجودة ويمنع ظهورها مرة أخرى ويقلل من آثارها.", en: "Treats existing acne and reduces marks." },
    how_to_use: { ar: "يوضع على الوجه بالكامل صباحاً و/أو مساءً بعد تنظيف البشرة.", en: "Apply to whole face morning and/or evening." },
    cautions: { ar: "لا يُستخدم على جروح مفتوحة.", en: "Do not apply on broken skin." },
    key_ingredients: [{ id: "Niacinamide", pct: "4%" }, { id: "Salicylic Acid", pct: "0.5%" }, { id: "Procerad", pct: "" }],
    flags: { pregnancy_safe: false }
});

productsList.push({
    id: 'p_effaclar_serum', brandId: 'laroche', familyId: 'effaclar',
    name: { ar: "إيفاكلار سيروم فائق التركيز", en: "Effaclar Ultra Concentrated Serum" },
    description: { ar: "سيروم ليلي يجمع بين 3 أحماض مقشرة لعلاج المسام والرؤوس السوداء.", en: "Night serum with 3 acids to treat enlarged pores." },
    how_to_use: { ar: "يوضع مساءً على كامل الوجه بعد الغسول.", en: "Apply in the evening to the whole face." },
    cautions: { ar: "تجنب محيط العينين. لا يُستخدم مع منتجات تقشير أخرى.", en: "Avoid eye contour. Do not use with other exfoliating products." },
    key_ingredients: [{ id: "Glycolic Acid", pct: "3.5%" }, { id: "Niacinamide", pct: "2%" }, { id: "Salicylic Acid", pct: "1.5%" }, { id: "LHA", pct: "0.45%" }],
    flags: { pregnancy_safe: false }
});

// منتج جديد: واقي الشمس
productsList.push({
    id: 'p_anthelios_oil_control', brandId: 'laroche', familyId: 'anthelios',
    name: { ar: "أنثيليوس يو في ميون 400 للتحكم في الدهون", en: "Anthelios UVmune 400 Oil Control" },
    description: { ar: "واقي شمس سائل وخفيف للبشرة الدهنية، يحمي من أطول موجات الأشعة فوق البنفسجية ويتحكم في اللمعان.", en: "Fluid sunscreen for oily skin, offers high protection and controls shine." },
    how_to_use: { ar: "يوضع بسخاء قبل التعرض للشمس بـ 20 دقيقة، ويُجدد كل ساعتين خاصة بعد التعرق أو السباحة.", en: "Apply generously 20 mins before sun exposure. Reapply every 2 hours." },
    cautions: { ar: "يُرج جيداً قبل الاستخدام. تجنب ملامسة العينين.", en: "Shake well before use. Avoid eye contact." },
    key_ingredients: [{ id: "Mexoryl 400", pct: "" }, { id: "Airlicium", pct: "" }, { id: "Zinc PCA", pct: "" }],
    flags: { pregnancy_safe: true }
});

// ==========================================
// 4. الحالات والروتين العلاجي (تمت إضافة خطوة الوقاية)
// ==========================================
casesList.push({
    id: 'acne',
    name: { ar: 'حب الشباب', en: 'Acne' },
    routine: [
        { stepTitle: { ar: 'الخطوة 1: الغسول (اختر واحد)', en: 'Step 1: Cleanser' }, productIds: ['p_effaclar_gel', 'p_effaclar_micro'] },
        { stepTitle: { ar: 'الخطوة 2: العلاج المركز', en: 'Step 2: Targeted Treatment' }, productIds: ['p_effaclar_serum'] },
        { stepTitle: { ar: 'الخطوة 3: الترطيب العلاجي', en: 'Step 3: Treatment Moisturizer' }, productIds: ['p_effaclar_duo'] },
        { stepTitle: { ar: 'الخطوة 4: الوقاية والحماية (نهاراً)', en: 'Step 4: Prevention & Protection (Day)' }, productIds: ['p_anthelios_oil_control'] }
    ]
});

// ==========================================
// 5. مكتبة الصور 
// ==========================================
imagesDB['p_effaclar_gel'] = "1.jpg";
imagesDB['p_effaclar_micro'] = "";
imagesDB['p_effaclar_duo'] = "";
imagesDB['p_effaclar_serum'] = "";
imagesDB['p_anthelios_oil_control'] = "";

productsList.forEach(p => p.image = imagesDB[p.id] || "");
