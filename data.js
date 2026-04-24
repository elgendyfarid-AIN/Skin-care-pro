// ==========================================
// 🏥 Skin Care Pro - Clinical Database
// متوافق 100% مع واجهة (Dashboard Layout)
// ==========================================

const brandsList = [];
const casesList = [];
const skinTypesList = [];
const deepProductsList = [];
const glossaryDict = {};

// ==========================================
// 📚 القاموس الطبي (Glossary)
// ==========================================

glossaryDict['c_acnes'] = {
    title: { ar: 'بكتيريا C.acnes 🦠', en: 'C.acnes Bacteria 🦠' },
    desc: { 
        ar: 'البكتيريا الرئيسية المسببة لحب الشباب. تعيش داخل المسام وتتغذى على الإفرازات الدهنية، مما يسبب الالتهاب والاحمرار.', 
        en: 'The primary bacteria responsible for acne. It lives inside the pores and feeds on sebum, causing inflammation.' 
    }
};

glossaryDict['biofilms'] = {
    title: { ar: 'الأغشية الحيوية (Biofilms) 🛡️', en: 'Biofilms 🛡️' },
    desc: { 
        ar: 'درع واقي تبنيه البكتيريا حول نفسها لحماية نفسها من العلاجات والمضادات. تكسير هذا الدرع يعني القضاء على الحبوب من جذورها.', 
        en: 'A protective shield built by bacteria to defend against treatments. Breaking this shield eliminates breakouts from the root.' 
    }
};

glossaryDict['pih'] = {
    title: { ar: 'التصبغات (PIH) 🟤', en: 'PIH (Hyperpigmentation) 🟤' },
    desc: { 
        ar: 'البقع الداكنة أو البنية التي تتركها الحبة بعد أن تجف وتشفى، وتحدث نتيجة زيادة إنتاج الميلانين بسبب الالتهاب.', 
        en: 'Post-Inflammatory Hyperpigmentation: The dark or brown spots left behind after a pimple heals, caused by excess melanin production.' 
    }
};

glossaryDict['lha'] = {
    title: { ar: 'حمض LHA 🧪', en: 'LHA Acid 🧪' },
    desc: { 
        ar: 'مُقشر مشتق من حمض الساليسيليك، لكنه ألطف بكثير. يتميز بأنه "محب للدهون" فيخترق المسام ببطء لتنظيفها من الداخل دون تهيج.', 
        en: 'Lipo-Hydroxy Acid: A derivative of Salicylic Acid, but much gentler. Being lipophilic (fat-loving), it slowly penetrates and deeply cleanses pores without irritation.' 
    }
};

glossaryDict['keratolytic'] = {
    title: { ar: 'تحلل القرنية (Keratolytic) 🧹', en: 'Keratolytic Action 🧹' },
    desc: { 
        ar: 'عملية إذابة وتقشير الطبقة الخارجية الميتة من الجلد (الكيراتين)، مما يساعد في فتح المسام المسدودة وتنعيم ملمس البشرة.', 
        en: 'The process of dissolving and exfoliating the dead outer layer of the skin (keratin), which helps unclog pores and smooth skin texture.' 
    }
};

glossaryDict['aha_bha'] = {
    title: { ar: 'أحماض AHA و BHA 💧', en: 'AHA & BHA Acids 💧' },
    desc: { 
        ar: 'أحماض ألفا هيدروكسي (AHA) تقشر السطح وتوحد اللون، بينما أحماض بيتا هيدروكسي (BHA) تذوب في الدهون لتنظيف المسام من الداخل.', 
        en: 'Alpha Hydroxy Acids (AHA) exfoliate the surface and even tone, while Beta Hydroxy Acids (BHA) are oil-soluble to deep-clean pores.' 
    }
};

glossaryDict['microbiome_science'] = {
    title: { ar: 'علم الميكروبيوم 🧫', en: 'Microbiome Science 🧫' },
    desc: { 
        ar: 'توازن البكتيريا النافعة على سطح الجلد. الإخلال بهذا التوازن يؤدي إلى الالتهابات، حب الشباب، أو الإكزيما.', 
        en: 'The balance of beneficial bacteria on the skin surface. Disrupting this balance leads to inflammation, acne, or eczema.' 
    }
};

// ==========================================
// 🏢 العلامات التجارية والعائلات
// ==========================================

brandsList.push({
    id: 'laroche', name: 'La Roche-Posay',
    families: [
        { id: 'effaclar', name: { ar: 'إيفاكلار (للبشرة الدهنية وحب الشباب)', en: 'Effaclar (Oily & Acne-Prone)' } }
    ]
});

// ==========================================
// 🧪 المنتجات (Deep Products)
// ==========================================

// [1] EFFACLAR DUO (+)
deepProductsList.push({
    id: 'lrp_effaclar_duo', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار ديو (+)', en: 'Effaclar Duo (+)' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: '5.5 (متوازن مع الغلاف الحمضي)', en: '5.5 (Balanced with acid mantle)' },
        mechanism: { 
            ar: 'استهداف بكتيريا <span class="glossary-term" onclick="openGlossary(\'c_acnes\')">C.acnes</span> ومنع تكوين <span class="glossary-term" onclick="openGlossary(\'biofilms\')">الأغشية الحيوية</span>، مع تقشير دقيق لمنع انسداد المسام وتقليل <span class="glossary-term" onclick="openGlossary(\'pih\')">التصبغات (PIH)</span>.', 
            en: 'Targets <span class="glossary-term" onclick="openGlossary(\'c_acnes\')">C.acnes</span> bacteria and prevents the formation of <span class="glossary-term" onclick="openGlossary(\'biofilms\')">Biofilms</span>, with precise micro-exfoliation to prevent clogged pores and reduce <span class="glossary-term" onclick="openGlossary(\'pih\')">PIH</span>.' 
        },
        patient_benefit: { 
            ar: 'يعالج الحبوب النشطة من جذورها ويمنع ظهور حبوب جديدة، والأهم أنه يمنع تحول الحبة الحمراء إلى بقعة داكنة بعد جفافها.', 
            en: 'Treats active breakouts from the root, prevents new ones, and crucially stops red pimples from turning into dark marks after drying.' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: '4%', role: { ar: 'مضاد للالتهاب ويهدئ الاحمرار.', en: 'Anti-inflammatory, soothes redness.' } },
            { name: 'LHA', concentration: '0.3%', role: { ar: 'مقشر <span class="glossary-term" onclick="openGlossary(\'lha\')">LHA</span> يخترق المسام بلطف لتنظيفها.', en: 'A <span class="glossary-term" onclick="openGlossary(\'lha\')">LHA</span> exfoliator that gently penetrates and cleanses pores.' } },
            { name: 'Salicylic Acid', concentration: '0.5%', role: { ar: 'يعمل بخاصية <span class="glossary-term" onclick="openGlossary(\'keratolytic\')">تحلل القرنية</span> لتنظيف المسام.', en: 'Provides <span class="glossary-term" onclick="openGlossary(\'keratolytic\')">Keratolytic</span> action to deeply cleanse pores.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يُستخدم مرة واحدة مساءً (أو مرتين إذا تحملت البشرة)، لمدة لا تقل عن 4 أسابيع.', en: 'Use once daily PM (or twice if tolerated), for at least 4 weeks.' },
        step_in_routine: { ar: 'خطوة العلاج (بعد الغسول).', en: 'Treatment Step (After cleanser).' },
        application: { ar: 'توزع طبقة رقيقة على كامل الوجه، لا يستخدم كنقطة علاجية فقط.', en: 'Apply a thin layer over the entire face. Do not use as a spot treatment only.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات كيميائية قوية (AHA/BHA)', 'الريتينول'], en: ['Strong chemical exfoliants (AHA/BHA)', 'Retinol'] }, 
            best_mixed_with: { ar: ['غسول لطيف', 'مرمّمات الحاجز (Ceramides)'], en: ['Gentle cleansers', 'Barrier repair creams'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب الخفيف إلى المتوسط، الرؤوس السوداء، والآثار الحمراء بعد الحبوب.', en: 'Mild to moderate acne, blackheads, and post-acne red marks.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'قد يسبب وخزاً خفيفاً وجفافاً في الأسبوع الأول.', en: 'May cause mild tingling and dryness in the first week.' }
    }
});

// [2] EFFACLAR PURIFYING FOAMING GEL
deepProductsList.push({
    id: 'lrp_effaclar_gel', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار جل غسول رغوي منقي', en: 'Effaclar Purifying Foaming Gel' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: '5.5 (يحترم الغلاف الحمضي)', en: '5.5 (Respects acid mantle)' },
        mechanism: { 
            ar: 'ينظف البشرة بلطف بفضل عوامل التنظيف المختارة للبشرة الحساسة، ويزيل الشوائب والزهم الزائد بفضل الزنك.', 
            en: 'Gently cleanses the skin with agents selected for sensitive skin. Eliminates impurities and excess sebum with Zinc.' 
        },
        patient_benefit: { 
            ar: 'يترك البشرة نظيفة تماماً دون الشعور بالشد أو الجفاف، ويقلل من لمعان البشرة الدهنية تدريجياً.', 
            en: 'Leaves skin perfectly clean without a tight feeling, and gradually reduces oily shine.' 
        },
        active_ingredients: [
            { name: 'Zinc PCA', concentration: 'Active', role: { ar: 'ينظم إفراز الزهم وله خصائص مضادة للبكتيريا.', en: 'Regulates sebum production with antibacterial properties.' } },
            { name: 'Thermal Spring Water', concentration: 'Base', role: { ar: 'مياه حرارية مهدئة ومضادة للتهيج.', en: 'Soothing and anti-irritating thermal water.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (Morning and Evening).' },
        step_in_routine: { ar: 'الخطوة 1 (التنظيف).', en: 'Step 1 (Cleansing).' },
        application: { ar: 'يُرغى مع قليل من الماء ويُدلك بلطف على الوجه، ثم يُشطف.', en: 'Lather with water, gently massage onto face, and rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['فرش التنظيف القاسية (تُهيج الغدد الدهنية).'], en: ['Harsh cleansing brushes (irritates sebaceous glands).'] }, 
            best_mixed_with: { ar: ['إيفاكلار ديو (+)', 'مضادات الأكسدة نهاراً'], en: ['Effaclar Duo (+)', 'Daytime Antioxidants'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، المعرضة لحب الشباب، واللمعان الزائد.', en: 'Oily, acne-prone skin, and excess shine.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من الكحول والأصباغ.', en: 'Alcohol and dye-free.' }
    }
});

// [3] EFFACLAR ULTRA CONCENTRATED SERUM
deepProductsList.push({
    id: 'lrp_effaclar_serum', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار سيروم التقشير المركز', en: 'Effaclar Ultra Concentrated Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي للتقشير', en: 'Acidic for exfoliation' },
        mechanism: { 
            ar: 'مركب ثلاثي الأحماض <span class="glossary-term" onclick="openGlossary(\'aha_bha\')">(AHA/BHA/LHA)</span> يعمل بآلية تآزرية لتقشير الخلايا الميتة السطحية وفتح المسام العميقة.', 
            en: 'A tri-acid complex <span class="glossary-term" onclick="openGlossary(\'aha_bha\')">(AHA/BHA/LHA)</span> works synergistically to exfoliate surface dead cells and unclog deep pores.' 
        },
        patient_benefit: { 
            ar: 'مُصمم لحب الشباب عند البالغين. يقلل حجم المسام، ويمحو العلامات الداكنة والخطوط الدقيقة.', 
            en: 'Formulated for adult acne. Reduces pore size, erases dark marks and fine lines.' 
        },
        active_ingredients: [
            { name: 'Glycolic Acid (AHA)', concentration: '3.5%', role: { ar: 'تقشير سطحي وتخفيف العلامات.', en: 'Surface exfoliation and fading marks.' } },
            { name: 'Salicylic Acid (BHA)', concentration: '1.5%', role: { ar: 'تنظيف المسام العميقة.', en: 'Cleanses deep pores.' } },
            { name: 'LHA', concentration: '0.45%', role: { ar: 'تقشير دقيق ولطيف.', en: 'Micro and gentle exfoliation.' } },
            { name: 'Niacinamide', concentration: '2%', role: { ar: 'تهدئة البشرة وتقوية الحاجز.', en: 'Soothes skin and strengthens barrier.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً (مساءً فقط).', en: 'Once daily (PM only).' },
        step_in_routine: { ar: 'خطوة السيروم (قبل المرطب).', en: 'Serum step (Before moisturizer).' },
        application: { ar: 'توضع 3-4 قطرات على الوجه مع تجنب محيط العينين تماماً.', en: 'Apply 3-4 drops to the face, strictly avoiding the eye contour.' },
        layering: { 
            do_not_mix_with: { ar: ['أي مقشرات أخرى', 'الريتينول', 'فيتامين سي النقي'], en: ['Any other exfoliants', 'Retinol', 'Pure Vitamin C'] }, 
            best_mixed_with: { ar: ['مرطب إيفاكلار إتش (للتوازن)', 'واقي شمس (إجباري)'], en: ['Effaclar H moisturizer (for balance)', 'SPF (Mandatory)'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب لدى البالغين، المسام الواسعة، التصبغات العنيدة.', en: 'Adult acne, enlarged pores, persistent pigmentation.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'قوي جداً. يُنصح بإدخاله بالتدريج لروتينك.', en: 'Very strong. Recommend gradual introduction into routine.' }
    }
});

// [4] EFFACLAR H ISO-BIOME CREAM
deepProductsList.push({
    id: 'lrp_effaclar_h_isobiome', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار H إيزو-بايوم (كريم مرطب معوض)', en: 'Effaclar H Iso-Biome Care Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: '5.5', en: '5.5' },
        mechanism: { 
            ar: 'يرمم الحاجز الجلدي ويستعيد توازن <span class="glossary-term" onclick="openGlossary(\'microbiome_science\')">الميكروبيوم</span> الذي تدمر بسبب علاجات حب الشباب المجففة.', 
            en: 'Repairs the skin barrier and restores <span class="glossary-term" onclick="openGlossary(\'microbiome_science\')">Microbiome</span> balance compromised by drying acne treatments.' 
        },
        patient_benefit: { 
            ar: 'راحة فورية من الجفاف والتشقق الناتج عن أدوية الحبوب (مثل الأيزوتريتينوين) دون سد المسام.', 
            en: 'Instant relief from severe dryness and cracking caused by acne meds (like Isotretinoin) without clogging pores.' 
        },
        active_ingredients: [
            { name: 'Aqua Posae Filiformis', concentration: 'Active', role: { ar: 'إعادة توازن البكتيريا النافعة.', en: 'Rebalancing beneficial bacteria.' } },
            { name: 'Niacinamide + Panthenol', concentration: 'High', role: { ar: 'ترميم وتقليل الالتهاب.', en: 'Repair and inflammation reduction.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'الترطيب.', en: 'Moisturization.' },
        application: { ar: 'يوضع بلطف على بشرة نظيفة.', en: 'Apply gently to clean skin.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد تعارضات خطيرة.'], en: ['No severe interactions.'] }, 
            best_mixed_with: { ar: ['أدوية حب الشباب الموصوفة كمعوض للجفاف.'], en: ['Prescription acne meds to compensate for dryness.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة المعرضة للحبوب والتي أضعفتها العلاجات المجففة.', en: 'Acne-prone skin weakened by drying treatments.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تركيبة غير دهنية وغير زؤانية.', en: 'Non-greasy and non-comedogenic formula.' }
    }
});

// [5] EFFACLAR MICRO-PEELING PURIFYING GEL
deepProductsList.push({
    id: 'lrp_effaclar_micro_peeling', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار مايكرو-بيلينج (غسول مقشر دقيق)', en: 'Effaclar Micro-Peeling Purifying Gel' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي', en: 'Physiological' },
        mechanism: { 
            ar: 'قوة تقشير مزدوجة تجمع بين حمض الساليسيليك (2%) و LHA لاختراق المسام وتنظيفها من الدهون المتصلبة.', 
            en: 'Dual exfoliating power combining 2% Salicylic Acid and LHA to penetrate pores and clear hardened sebum.' 
        },
        patient_benefit: { 
            ar: 'يستهدف حب الشباب الشديد على الوجه والجسم (الظهر والصدر)، ويقلل من آثار الحبوب المتبقية.', 
            en: 'Targets severe acne on face and body (back/chest), and reduces residual acne marks.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid (BHA)', concentration: '2%', role: { ar: 'فتح المسام وتقشير عميق.', en: 'Unclogging pores and deep exfoliation.' } },
            { name: 'LHA', concentration: '0.05%', role: { ar: 'تقشير سطحي ناعم.', en: 'Gentle surface exfoliation.' } },
            { name: 'Zinc PCA', concentration: 'Active', role: { ar: 'تقليل اللمعان والبكتيريا.', en: 'Reducing shine and bacteria.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً.', en: 'Once daily.' },
        step_in_routine: { ar: 'التنظيف العلاجي.', en: 'Therapeutic Cleansing.' },
        application: { ar: 'يُرغى على بشرة مبللة (وجه وجسم)، يُدلك بلطف، ثم يُشطف جيداً.', en: 'Lather on wet skin (face & body), massage gently, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['أحماض تقشير إضافية قوية.'], en: ['Additional strong peeling acids.'] }, 
            best_mixed_with: { ar: ['إيفاكلار ديو (+)', 'مرطبات خفيفة.'], en: ['Effaclar Duo (+)', 'Light moisturizers.'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب الشديد، حبوب الظهر والصدر.', en: 'Severe acne, back and chest acne.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'مثالي للاستحمام لعلاج حبوب الجسم.', en: 'Ideal for showering to treat body acne.' }
    }
});
// ==========================================
// 📦 بلوك رقم (2): استكمال لاروش بوزيه (سيكابلاست وتوليان)
// تم التدقيق البرمجي (V3.0)
// ==========================================

// --- 1. تحديث العلامات التجارية (إضافة العائلات الجديدة) ---
let larocheBrandUpdate = brandsList.find(b => b.id === 'laroche');
if (larocheBrandUpdate) {
    if (!larocheBrandUpdate.families.find(f => f.id === 'cicaplast')) {
        larocheBrandUpdate.families.push({ id: 'cicaplast', name: { ar: 'سيكابلاست (ترميم وحماية الحاجز)', en: 'Cicaplast (Barrier Repair)' } });
    }
    if (!larocheBrandUpdate.families.find(f => f.id === 'toleriane')) {
        larocheBrandUpdate.families.push({ id: 'toleriane', name: { ar: 'توليان (للبشرة الحساسة والمتحسسة)', en: 'Toleriane (Sensitive & Allergy-Prone)' } });
    }
}

// --- 2. إضافة مصطلحات جديدة للقاموس ---
glossaryDict['madecassoside'] = {
    title: { ar: 'ماديكاسوسيد (Madecassoside) 🌿', en: 'Madecassoside 🌿' },
    desc: { 
        ar: 'مستخلص نقي من نبتة سرة الأرض (Centella Asiatica)، يُسرع من التئام الجلد، يهدئ الالتهابات، ويُحفز تجديد الخلايا بقوة.', 
        en: 'A pure extract from Centella Asiatica that accelerates skin healing, soothes inflammation, and powerfully stimulates cell renewal.' 
    }
};

glossaryDict['microbiome_science'] = {
    title: { ar: 'علم الميكروبيوم ⚖️', en: 'Microbiome Science ⚖️' },
    desc: { 
        ar: 'توازن البكتيريا النافعة على سطح الجلد. الجلد الصحي يحتاج إلى ميكروبيوم متوازن لصد العدوى البكتيرية الضارة وتسريع الترميم.', 
        en: 'The balance of good bacteria on the skin surface. Healthy skin needs a balanced microbiome to repel harmful infections and speed up repair.' 
    }
};

glossaryDict['neurosensine'] = {
    title: { ar: 'نيوروسينسين (Neurosensine) 🧠', en: 'Neurosensine 🧠' },
    desc: { 
        ar: 'ببتيد مهدئ قوي جداً، يستهدف آليات تهيج الجلد مباشرة ليقلل من الإحساس بالحكة، الحرارة، والألم في البشرة شديدة الحساسية.', 
        en: 'A highly soothing peptide that targets skin irritation mechanisms directly to reduce sensations of itching, heat, and pain in ultra-sensitive skin.' 
    }
};

// --- 3. المنتجات العميقة الجديدة ---

// [4] سيكابلاست بوم بـ 5 بلس (Cicaplast Baume B5+)
deepProductsList.push({
    id: 'lrp_cicaplast_baume', brandId: 'laroche', familyId: 'cicaplast', brand: 'La Roche-Posay',
    name: { ar: 'سيكابلاست بوم بـ 5 (+)', en: 'Cicaplast Baume B5 (+)' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يوفر بيئة مثالية لالتئام الجلد بفضل الـ <span class="glossary-term" onclick="openGlossary(\'madecassoside\')">ماديكاسوسيد</span>، مع إعادة توازن <span class="glossary-term" onclick="openGlossary(\'microbiome_science\')">الميكروبيوم</span> بمركب (Tribioma) الحصري لضمان عدم ترك ندبات.', 
            en: 'Provides an optimal environment for skin healing using <span class="glossary-term" onclick="openGlossary(\'madecassoside\')">Madecassoside</span>, while rebalancing the <span class="glossary-term" onclick="openGlossary(\'microbiome_science\')">Microbiome</span> with Tribioma to prevent scarring.' 
        },
        patient_benefit: { 
            ar: 'بلسم إنقاذ متعدد الأغراض. يعالج الجفاف الشديد، التشققات، الحروق السطحية، والتهابات الحفاض، ويوفر طبقة عازلة غير لزجة.', 
            en: 'Multi-purpose rescue balm. Treats severe dryness, cracks, superficial burns, and diaper rash, providing a non-sticky protective barrier.' 
        },
        active_ingredients: [
            { name: 'Panthenol (B5)', concentration: '5%', role: { ar: 'ترطيب عميق وتهدئة فورية للحكة.', en: 'Deep hydration and instant itch relief.' } },
            { name: 'Madecassoside', concentration: 'Active | فعال', role: { ar: 'تسريع التئام الجروح وتجديد الخلايا.', en: 'Accelerates wound healing and cell renewal.' } },
            { name: 'Zinc & Manganese', concentration: 'Active | فعال', role: { ar: 'مضاد للبكتيريا لمنع تلوث المنطقة المتضررة.', en: 'Antibacterial to prevent infection of the damaged area.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً، أو عند الحاجة.', en: 'Twice daily, or as needed.' },
        step_in_routine: { ar: 'الخطوة الأخيرة (للترميم الموضعي أو كمرطب ليلي).', en: 'Final step (for targeted repair or as night cream).' },
        application: { ar: 'توضع طبقة سميكة على بشرة نظيفة وجافة. يمكن وضعه على الجسم، الوجه، والشفاه.', en: 'Apply a generous layer to clean, dry skin. Can be applied to body, face, and lips.' },
        layering: { do_not_mix_with: { ar: ['يُمنع وضعه على الجروح المفتوحة التي تنزف بقوة.'], en: ['Do not apply on heavily bleeding, open wounds.'] }, best_mixed_with: { ar: ['غسول لطيف', 'فوق الريتينول أو المقشرات لتقليل التهيج (الساندويتش).'], en: ['Gentle cleansers', 'Over retinol or exfoliants to reduce irritation (Sandwich method).'] } }
    },
    precautions: {
        indications: { ar: 'بعد جلسات الليزر، التقشير الكيميائي، طفح الحفاض، التشققات الشتوية، الإكزيما الجافة.', en: 'Post-laser, chemical peels, diaper rash, winter cracks, dry eczema.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن تماماً للرضع والأطفال. لا يترك أثراً أبيض واضحاً بفضل النسخة المحدثة (+).', en: 'Completely safe for babies and children. Leaves no obvious white cast thanks to the new (+) formula.' }
    }
});

// [5] توليان ديرماليرجو كريم (Toleriane Dermallergo)
deepProductsList.push({
    id: 'lrp_toleriane_dermallergo', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'توليان ديرماليرجو كريم', en: 'Toleriane Dermallergo Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن بدقة', en: 'Strictly balanced' },
        mechanism: { 
            ar: 'يستهدف فرط حساسية الجلد مباشرة باستخدام الـ <span class="glossary-term" onclick="openGlossary(\'neurosensine\')">نيوروسينسين</span> لقطع إشارات الألم والحرارة، ويدعم <span class="glossary-term" onclick="openGlossary(\'microbiome_science\')">الميكروبيوم</span> لتقليل نوبات التحسس المستقبلية.', 
            en: 'Targets skin hyper-sensitivity directly using <span class="glossary-term" onclick="openGlossary(\'neurosensine\')">Neurosensine</span> to block pain/heat signals, and supports the <span class="glossary-term" onclick="openGlossary(\'microbiome_science\')">Microbiome</span> to reduce future allergy flare-ups.' 
        },
        patient_benefit: { 
            ar: 'يهدئ البشرة الملتهبة والمتحسسة في دقيقة واحدة، يوفر ترطيباً لمدة 48 ساعة، ويقلل من احمرار الجلد المستمر.', 
            en: 'Soothes inflamed, allergic skin in 1 minute, provides 48h hydration, and reduces persistent skin redness.' 
        },
        active_ingredients: [
            { name: 'Neurosensine', concentration: 'Strong | قوي', role: { ar: 'تهدئة عصبية للجلد وتقليل الحكة والوخز.', en: 'Neurological skin soothing, reducing itching and stinging.' } },
            { name: 'Sphingobioma', concentration: 'Extract | مستخلص', role: { ar: 'دعم بكتيريا الجلد النافعة.', en: 'Supports beneficial skin bacteria.' } },
            { name: 'Shea Butter', concentration: 'Rich | غني', role: { ar: 'ترميم حاجز الدهون الطبيعي.', en: 'Restores the natural lipid barrier.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'خطوة الترطيب الأساسية.', en: 'Main moisturizing step.' },
        application: { ar: 'يوزع بلطف على الوجه والرقبة ومحيط العينين.', en: 'Gently distribute over face, neck, and eye contour.' },
        layering: { do_not_mix_with: { ar: ['المنتجات التي تحتوي على عطور أو كحول (لتجنب انتكاس البشرة).'], en: ['Products containing fragrance or alcohol (to avoid skin relapse).'] }, best_mixed_with: { ar: ['غسول توليان ديرمو-كلينزر.'], en: ['Toleriane Dermo-Cleanser.'] } }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الحساسية، المعرضة للحساسية (Allergy-prone)، البشرة التي لا تتحمل مستحضرات التجميل العادية.', en: 'Ultra-sensitive skin, allergy-prone skin, intolerant skin to standard cosmetics.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'عبوة معقمة 100% (Air-tight) تمنع دخول الهواء والبكتيريا. 0% عطور وكحول.', en: '100% Air-tight sterile packaging to prevent air and bacteria entry. 0% fragrance and alcohol.' }
    }
});

// [6] توليان غسول ديرمو-كلينزر الحليبي
deepProductsList.push({
    id: 'lrp_toleriane_cleanser', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'توليان غسول ديرمو-كلينزر حليبي', en: 'Toleriane Dermo-Cleanser' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (لطيف جداً)', en: '5.5 (Ultra-gentle)' },
        mechanism: { 
            ar: 'ينظف البشرة ويزيل المكياج دون الحاجة للفرك أو استخدام مؤثرات سطحية قاسية، مما يحافظ على حاجز الجلد سليمًا ويمنع الجفاف.', 
            en: 'Cleanses and removes makeup without rubbing or harsh surfactants, keeping the skin barrier intact and preventing dryness.' 
        },
        patient_benefit: { 
            ar: 'ينظف بلطف شديد بفضل قوامه الحليبي، يزيل مكياج الوجه والعين دون تهيج، ويترك البشرة رطبة ومرتاحة.', 
            en: 'Ultra-gentle cleansing with a milky texture, removes face and eye makeup without irritation, leaving skin hydrated and comforted.' 
        },
        active_ingredients: [
            { name: 'Glycerin', concentration: 'High | عالي', role: { ar: 'يحافظ على رطوبة الجلد أثناء التنظيف.', en: 'Maintains skin hydration during cleansing.' } },
            { name: 'La Roche-Posay Thermal Water', concentration: 'Base | أساسي', role: { ar: 'تهدئة الجلد فوراً.', en: 'Instantly soothes the skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف اللطيف).', en: 'Step 1 (Gentle Cleansing).' },
        application: { ar: 'يُدلك بأطراف الأصابع بحركات دائرية، ثم يُمسح برفق بقطنة دون الحاجة للشطف بالماء (أو يُشطف حسب الرغبة).', en: 'Massage with fingertips in circular motions, then wipe gently with a cotton pad without rinsing (or rinse if preferred).' },
        layering: { do_not_mix_with: { ar: ['فرش التنظيف الخشنة.'], en: ['Harsh physical cleansing brushes.'] }, best_mixed_with: { ar: ['توليان ديرماليرجو كريم.'], en: ['Toleriane Dermallergo Cream.'] } }
    },
    precautions: {
        indications: { ar: 'البشرة التي لا تتحمل الغسول الرغوي، بعد الإجراءات التجميلية القاسية، البشرة المعرضة للوردية والاحمرار.', en: 'Skin intolerant to foaming gels, post-harsh cosmetic procedures, rosacea-prone skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مريح جداً لأنه لا يحتاج إلى ماء للشطف (مفيد في حالات الحساسية من مياه الصنبور).', en: 'Very comforting as it does not require water to rinse (useful for tap water sensitivity).' }
    }
});
// ==========================================
// 📦 بلوك رقم (3): بيوديرما (عائلة Sensibio الوردية)
// تم التدقيق البرمجي والتوافق الثنائي (V3.0)
// ==========================================

// --- 1. إضافة العلامة التجارية وعائلاتها ---
brandsList.push({
    id: 'bioderma', name: 'Bioderma',
    families: [
        { id: 'sensibio', name: { ar: 'سينسيبيو (للبشرة الحساسة والوردية)', en: 'Sensibio (Sensitive & Rosacea)' } }
    ]
});

// --- 2. تحديث القاموس بمصطلحات بيوديرما التقنية ---
glossaryDict['micellar_tech'] = {
    title: { ar: 'تقنية الميسيلار 🧼', en: 'Micellar Technology 🧼' },
    desc: { 
        ar: 'جزيئات منظفة مجهرية لها رأس يحب الماء وذيل يحب الدهون. تعمل كمغناطيس يلتقط الأوساخ والمكياج والملوثات من المسام دون الحاجة للفرك أو الشطف، مما يحافظ على غشاء البشرة.', 
        en: 'Microscopic cleansing molecules with water-loving heads and oil-loving tails. They act like magnets to lift dirt, makeup, and pollutants from pores without rubbing or rinsing.' 
    }
};

glossaryDict['daf_patent'] = {
    title: { ar: 'براءة اختراع D.A.F 🛡️', en: 'D.A.F. Patent 🛡️' },
    desc: { 
        ar: 'مركب حصري من السكريات المتعددة (Dermatological Advanced Formulation) يرفع من سقف تحمل الجلد للعوامل الخارجية ويقلل من ردود الفعل التحسسية.', 
        en: 'A patented complex of polysaccharides that raises the skin\'s tolerance threshold against external stressors and reduces allergic reactions.' 
    }
};

glossaryDict['rosactiv'] = {
    title: { ar: 'براءة اختراع Rosactiv 🔴', en: 'Rosactiv™ Patent 🔴' },
    desc: { 
        ar: 'تقنية تستهدف العامل الرئيسي المسؤول عن اتساع الأوعية الدموية الدقيقة في الجلد، مما يقلل الاحمرار بشكل دائم ويمنع ظهور الشعيرات الدموية الواضحة.', 
        en: 'A technology targeting the primary factor responsible for micro-vessel dilation, permanently reducing redness and preventing visible capillaries.' 
    }
};

// --- 3. المنتجات العميقة (Deep Products) ---

// [7] بيوديرما سينسيبيو H2O
deepProductsList.push({
    id: 'bio_sensibio_h2o', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو H2O (ماء ميسيلار)', en: 'Sensibio H2O Micellar Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (فسيولوجي مطابق للدموع)', en: '5.5 (Physiological pH)' },
        mechanism: { 
            ar: 'يعتمد على <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">تقنية الميسيلار</span> لتنظيف الملوثات (99%) والمعادن الثقيلة (78%)، مع الحفاظ على الغلاف الحمضي للبشرة بفضل تركيبته المائية النقية.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">Micellar Technology</span> to capture 99% of pollutants and 78% of heavy metals, preserving the acid mantle with highly purified water.' 
        },
        patient_benefit: { 
            ar: 'المنظف رقم 1 عالمياً. يزيل المكياج (حتى المقاوم للماء) والشوائب في ثوانٍ دون الحاجة للشطف، ويترك البشرة هادئة ومنتعشة فوراً.', 
            en: 'The world\'s #1 cleanser. Removes makeup (even waterproof) and impurities in seconds without rinsing, leaving skin instantly soothed.' 
        },
        active_ingredients: [
            { name: 'Cucumber Extract', concentration: 'Pure | نقي', role: { ar: 'تهدئة وتلطيف الجلد المتهيج.', en: 'Soothes and calms irritated skin.' } },
            { name: 'Highly Purified Water', concentration: 'Pharma | فارموسيتيكال', role: { ar: 'مياه خالية من الشوائب تمنع أي رد فعل تحسسي.', en: 'Pure water preventing any allergic reaction.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (لإزالة المكياج أو تنظيف البشرة).', en: 'As needed (makeup removal or cleansing).' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الجاف).', en: 'Step 1 (Dry cleansing).' },
        routine_step_number: 1,
        application: { ar: 'يُبلل قطن نظيف بالمحلول ويُمسح به الوجه والعين بلطف. لا يحتاج للشطف بالماء.', en: 'Soak a cotton pad and gently wipe face and eyes. No rinsing required.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف بقطن خشن.'], en: ['Harsh rubbing with rough cotton.'] }, 
            best_mixed_with: { ar: ['جميع منتجات البشرة الحساسة.'], en: ['All sensitive skin products.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة، المتهيجة من مياه الصنبور، وإزالة مكياج العين.', en: 'Sensitive skin, tap water irritation, eye makeup removal.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن جداً لمحيط العينين. خالي من الكحول والعطور.', en: 'Safe for eye area. Alcohol and fragrance-free.' }
    }
});

// [8] بيوديرما سينسيبيو جل غسول رغوي
deepProductsList.push({
    id: 'bio_sensibio_gel', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو جل موسان (غسول رغوي)', en: 'Sensibio Gel Moussant' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (متوازن)', en: '5.5 (Balanced)' },
        mechanism: { 
            ar: 'يجمع بين قوة التنظيف ولطف الترطيب بفضل جزيئات (Coco-Glucoside)، مع براءة اختراع <span class="glossary-term" onclick="openGlossary(\'daf_patent\')">D.A.F</span> لتقليل الحساسية.', 
            en: 'Combines cleansing power with hydration using (Coco-Glucoside), enhanced by <span class="glossary-term" onclick="openGlossary(\'daf_patent\')">D.A.F. patent</span> to lower sensitivity.' 
        },
        patient_benefit: { 
            ar: 'غسول رغوي يعطي إحساساً بالترطيب (+77%)، يهدئ التهيج فوراً، ويترك البشرة ناعمة ومرتاحة.', 
            en: 'Foaming gel that boosts hydration (+77%), instantly soothes irritation, leaving skin soft and comfortable.' 
        },
        active_ingredients: [
            { name: 'Coco-Glucoside', concentration: 'Active | فعال', role: { ar: 'منظف يحاكي الدهون الطبيعية للجلد.', en: 'Cleansing agent mimicking natural skin lipids.' } },
            { name: 'Glyceryl Oleate', concentration: 'Hydrating | مرطب', role: { ar: 'يعيد بناء طبقة الدهون المفقودة أثناء الغسل.', en: 'Replenishes lipids lost during cleansing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الرطب).', en: 'Step 1 (Wet Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'يُدلك على بشرة مبللة حتى يرغي، ثم يُشطف جيداً.', en: 'Massage onto wet skin until it lathers, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['الماء الساخن جداً (يزيد التهيج).'], en: ['Very hot water (increases irritation).'] }, 
            best_mixed_with: { ar: ['سينسيبيو كريم.'], en: ['Sensibio Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة التي تفضل ملمس الرغوة، والبشرة المعرضة للاحمرار.', en: 'Sensitive skin preferring foam, and redness-prone skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من الصابون والعطور.', en: 'Soap and fragrance-free.' }
    }
});

// [9] بيوديرما سينسيبيو AR
deepProductsList.push({
    id: 'bio_sensibio_ar', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو AR (كريم علاج الاحمرار)', en: 'Sensibio AR (Anti-Redness Care)' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستهدف العامل البيولوجي للاحمرار (VEGF) من خلال براءة اختراع <span class="glossary-term" onclick="openGlossary(\'rosactiv\')">Rosactiv</span> لتهدئة البشرة بعمق.', 
            en: 'Targets the biological factor of redness (VEGF) via <span class="glossary-term" onclick="openGlossary(\'rosactiv\')">Rosactiv patent</span> to deeply soothe the skin.' 
        },
        patient_benefit: { 
            ar: 'يقلل من حدة احمرار الوجه بشكل ملحوظ، يمنع نوبات الحرارة والوخز، ويوفر ترطيباً مريحاً.', 
            en: 'Visibly reduces facial redness intensity, prevents heat/stinging, and provides comforting hydration.' 
        },
        active_ingredients: [
            { name: 'Enoxolone & Allantoin', concentration: 'Concentrated | مركز', role: { ar: 'تهدئة فورية للالتهاب والحرارة.', en: 'Instant soothing of inflammation and heat.' } },
            { name: 'Canola & Glycerin', concentration: 'Nourishing | مغذي', role: { ar: 'تقوية حاجز البشرة وترطيبها.', en: 'Strengthening skin barrier and hydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'خطوة العلاج والترطيب.', en: 'Treatment and hydration step.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على وجه نظيف، مع التركيز على المناطق المحمرة.', en: 'Apply to clean face, focusing on red areas.' },
        layering: { 
            do_not_mix_with: { ar: ['المقشرات الحامضية القوية.'], en: ['Strong acidic exfoliants.'] }, 
            best_mixed_with: { ar: ['سينسيبيو H2O', 'واقي شمس فوتوديرم AR.'], en: ['Sensibio H2O', 'Photoderm AR sunscreen.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة المعرضة للوردية (Rosacea)، الاحمرار، والشعيرات الدموية الظاهرة.', en: 'Rosacea-prone skin, redness, and visible capillaries.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام ممتاز كأساس للمكياج لإخفاء الاحمرار.', en: 'Excellent makeup base for hiding redness.' }
    }
});
// ==========================================
// 📦 بلوك رقم (4): بيوديرما (عائلة Sebium للبشرة الدهنية)
// تم التدقيق البرمجي والتوافق الثنائي (V3.0)
// ==========================================

// --- 1. تحديث العلامات التجارية (إضافة عائلة سيبيوم) ---
let biodermaBrandUpdate = brandsList.find(b => b.id === 'bioderma');
if (biodermaBrandUpdate) {
    if (!biodermaBrandUpdate.families.find(f => f.id === 'sebium')) {
        biodermaBrandUpdate.families.push({ id: 'sebium', name: { ar: 'سيبيوم (للبشرة الدهنية والمختلطة)', en: 'Sebium (Oily & Combination Skin)' } });
    }
}

// --- 2. إضافة مصطلحات جديدة للقاموس ---
glossaryDict['fluidactiv'] = {
    title: { ar: 'براءة اختراع Fluidactiv 🟢', en: 'Fluidactiv™ Patent 🟢' },
    desc: { 
        ar: 'تقنية حصرية من بيوديرما تعمل بيولوجياً على تنظيم جودة الدهون (الزهم) لمنعها من التخثر والأكسدة، مما يمنع انسداد المسام وتكون الرؤوس السوداء من المنبع.', 
        en: 'Bioderma\'s exclusive technology that biologically regulates sebum quality, preventing it from thickening and oxidizing, which stops pore clogging and blackheads at the source.' 
    }
};

glossaryDict['agaric_acid'] = {
    title: { ar: 'حمض الأغاريك (Agaric Acid) 🍄', en: 'Agaric Acid 🍄' },
    desc: { 
        ar: 'مستخلص نباتي يعمل كقابض قوي (Astringent) للأنسجة. يقوم بشد الجلد حول المسام وتقليص حجمها بشكل فوري وملحوظ.', 
        en: 'A plant extract that acts as a powerful astringent. It tightens the skin around pores, visibly and instantly reducing their size.' 
    }
};

glossaryDict['isotretinoin_companion'] = {
    title: { ar: 'علاج مصاحب (Companion Care) 💊', en: 'Companion Care 💊' },
    desc: { 
        ar: 'منتجات مصممة خصيصاً لترافق العلاجات الطبية القاسية (مثل أدوية الروكوتان)، لتعويض الآثار الجانبية كالتقشر والجفاف الشديد دون التأثير على فعالية الدواء.', 
        en: 'Products specifically designed to accompany harsh medical treatments (like Roaccutane), compensating for side effects like severe flaking and dryness without affecting the drug\'s efficacy.' 
    }
};

glossaryDict['tewl'] = {
    title: { ar: 'تبخر الماء عبر الجلد (TEWL) 💧', en: 'TEWL (Trans-Epidermal Water Loss) 💧' },
    desc: { 
        ar: 'العملية التي يفقد بها الجلد رطوبته ويتبخر الماء منه نحو الهواء. تقليل الـ TEWL يعني تقوية حاجز الجلد وحبس الرطوبة في الداخل.', 
        en: 'The process where the skin loses moisture as water evaporates into the air. Reducing TEWL means strengthening the skin barrier and trapping moisture inside.' 
    }
};

// --- 3. المنتجات العميقة الجديدة ---

// [10] بيوديرما سيبيوم جل غسول
deepProductsList.push({
    id: 'bio_sebium_gel', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم جل موسان (غسول منقي)', en: 'Sebium Gel Moussant' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: '5.5 (يحافظ على توازن البشرة)', en: '5.5 (Preserves skin balance)' },
        mechanism: { 
            ar: 'ينقي البشرة بلطف ويحد من إفراز الزهم بفضل كبريتات الزنك والنحاس، مع منع انسداد المسام مستقبلياً بفضل براءة اختراع <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv</span>.', 
            en: 'Gently purifies the skin and limits sebum secretion with Zinc and Copper sulfates, preventing future pore clogging via the <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv</span> patent.' 
        },
        patient_benefit: { 
            ar: 'ينظف المسام بعمق دون التسبب في جفاف البشرة (لا يحتوي على صابون)، ويترك البشرة صافية ويتحكم في لمعانها طوال اليوم.', 
            en: 'Deeply cleanses pores without drying the skin (soap-free), leaving it clear and controlling shine throughout the day.' 
        },
        active_ingredients: [
            { name: 'Zinc Sulfate', concentration: 'Active | فعال', role: { ar: 'ينظم إفراز الدهون ومضاد للبكتيريا.', en: 'Sebo-regulating and antibacterial.' } },
            { name: 'Copper Sulfate', concentration: 'Active | فعال', role: { ar: 'ينقي البشرة (وهو المسؤول عن اللون الأزرق للغسول).', en: 'Purifies the skin (gives the gel its blue color).' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الرطب).', en: 'Step 1 (Wet Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'يُرغى على بشرة مبللة، يُدلك بلطف، ثم يُشطف جيداً بالماء ويُجفف برفق.', en: 'Lather on wet skin, massage gently, rinse thoroughly with water, and dry gently.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف للبشرة بالمنشفة بعد الغسيل.'], en: ['Harsh rubbing with a towel after washing.'] }, 
            best_mixed_with: { ar: ['سيبيوم بور ريفاينر', 'سيبيوم جلوبال.'], en: ['Sebium Pore Refiner', 'Sebium Global.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، المختلطة، والمعرضة لحب الشباب.', en: 'Oily, combination, and acne-prone skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يمكن استخدامه أيضاً كرغوة حلاقة آمنة للرجال أصحاب البشرة الدهنية المعرضة للحبوب.', en: 'Can also be used as a safe shaving foam for men with oily, acne-prone skin.' }
    }
});

// [11] بيوديرما سيبيوم بور ريفاينر
deepProductsList.push({
    id: 'bio_sebium_pore_refiner', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم بور ريفاينر (علاج المسام الواسعة)', en: 'Sebium Pore Refiner' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن (حامضي قليلاً للتقشير)', en: 'Balanced (Slightly acidic for exfoliation)' },
        mechanism: { 
            ar: 'يعمل <span class="glossary-term" onclick="openGlossary(\'agaric_acid\')">حمض الأغاريك</span> كقابض فوري للمسام، بينما يعمل حمض الساليسيليك على تحسين نسيج الجلد، وتحافظ تقنية <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv</span> على نقاء المسام.', 
            en: '<span class="glossary-term" onclick="openGlossary(\'agaric_acid\')">Agaric Acid</span> acts as an instant astringent, Salicylic acid refines skin texture, and <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv</span> keeps pores clear.' 
        },
        patient_benefit: { 
            ar: 'يقلص حجم المسام الواسعة بشكل فوري وواضح، يعطي تأثيراً مطفياً (Matte) يمنع اللمعان، وينعم ملمس البشرة الخشن.', 
            en: 'Instantly and visibly shrinks enlarged pores, provides a mattifying effect preventing shine, and smooths rough skin texture.' 
        },
        active_ingredients: [
            { name: 'Agaric Acid', concentration: 'Intense | مكثف', role: { ar: 'قابض قوي لشد الجلد حول المسام.', en: 'Strong astringent to tighten skin around pores.' } },
            { name: 'Salicylic Acid (BHA)', concentration: 'Active | فعال', role: { ar: 'تقشير الخلايا الميتة المتراكمة حول المسام.', en: 'Exfoliates dead cells accumulated around pores.' } },
            { name: 'Mattifying Powders', concentration: 'High | عالي', role: { ar: 'امتصاص الدهون السطحية فوراً.', en: 'Instantly absorbs surface sebum.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'قبل المرطب اليومي (أو يستخدم كبرايمر للمكياج).', en: 'Before daily moisturizer (or used as a makeup primer).' },
        routine_step_number: 2,
        application: { ar: 'يوزع على منطقة T-Zone (الأنف والجبهة والذقن) للبشرة المختلطة، أو كامل الوجه للبشرة الدهنية.', en: 'Apply to the T-Zone (nose, forehead, chin) for combi skin, or entire face for oily skin.' },
        layering: { 
            do_not_mix_with: { ar: ['تجنب وضعه فوق مقشرات كيميائية أخرى في نفس الوقت لمنع الجفاف.'], en: ['Avoid applying over other chemical exfoliants simultaneously to prevent dryness.'] }, 
            best_mixed_with: { ar: ['يعد أفضل قاعدة (برايمر) قبل المكياج للبشرة الدهنية.'], en: ['Considered the best makeup primer base for oily skin.'] } 
        }
    },
    precautions: {
        indications: { ar: 'المسام الواسعة والظاهرة، البشرة الخشنة غير المتساوية، واللمعان الزائد.', en: 'Enlarged and visible pores, rough uneven skin texture, and excess shine.' },
        pregnancy_safe: false, // يحتوي على BHA
        sun_sensitivity: true, 
        notes: { ar: 'قوامه خفيف جداً يمتص في ثوانٍ ويترك لمسة مخملية سحرية على الجلد.', en: 'Ultra-light texture absorbs in seconds leaving a magical velvety finish on the skin.' }
    }
});

// [12] بيوديرما سيبيوم هيدرا
deepProductsList.push({
    id: 'bio_sebium_hydra', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم هيدرا (مرطب معوض)', en: 'Sebium Hydra Compensating Care' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يُعتبر <span class="glossary-term" onclick="openGlossary(\'isotretinoin_companion\')">علاج مصاحب</span> أساسي؛ حيث تعيد السيراميدات بناء الحاجز الواقي للجلد لتقليل <span class="glossary-term" onclick="openGlossary(\'tewl\')">TEWL</span>، بينما يخفف الإينوكسولون من الاحمرار.', 
            en: 'An essential <span class="glossary-term" onclick="openGlossary(\'isotretinoin_companion\')">Companion Care</span>; Ceramides rebuild the protective barrier to reduce <span class="glossary-term" onclick="openGlossary(\'tewl\')">TEWL</span>, while Enoxolone soothes redness.' 
        },
        patient_benefit: { 
            ar: 'يرطب البشرة الدهنية المجهدة والمجففة بفعل أدوية حب الشباب بكثافة، ويزيل الإحساس المؤلم بالشد والقشور.', 
            en: 'Intensely moisturizes stressed, dried-out oily skin from acne treatments, removing the painful tight sensation and flakiness.' 
        },
        active_ingredients: [
            { name: 'Ceramides + Xylitol', concentration: 'High | عالي', role: { ar: 'تعويض نقص الدهون والترطيب العميق.', en: 'Replenishing lipid deficiency and deep hydration.' } },
            { name: 'Enoxolone + Allantoin', concentration: 'Active | فعال', role: { ar: 'تهدئة الاحمرار والتهيج الناتج عن الجفاف.', en: 'Soothing redness and irritation caused by dryness.' } },
            { name: 'Fluidactiv™', concentration: 'Base | أساسي', role: { ar: 'يضمن عدم تسبب هذا الترطيب الكثيف في سد المسام.', en: 'Ensures this intense hydration does not clog pores.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً (وكلما لزم الأمر).', en: 'Once to twice daily (and whenever necessary).' },
        step_in_routine: { ar: 'خطوة الترطيب الأساسية.', en: 'Main moisturizing step.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك بلطف على وجه نظيف ومجفف.', en: 'Massage gently onto clean, dried face.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد تعارض.'], en: ['No contraindications.'] }, 
            best_mixed_with: { ar: ['أدوية الأيزوتريتينوين (الروكوتان)، والمقشرات الموضعية القوية.'], en: ['Isotretinoin drugs (Roaccutane), and strong topical exfoliants.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية المجففة بفعل العلاجات الطبية، الجفاف الشديد، الاحمرار والتقشر.', en: 'Oily skin dried by medical treatments, severe dryness, redness, and flaking.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مصمم ليرطب بكثافة دون أن يسد المسام (Non-comedogenic).', en: 'Designed to moisturize intensely without clogging pores (Non-comedogenic).' }
    }
});
// ==========================================
// 📦 بلوك رقم (5): بيوديرما (أتوديرم للإكزيما + فوتوديرم للحماية)
// تم التدقيق البرمجي والتوافق الثنائي (V3.0)
// ==========================================

// --- 1. تحديث العلامات التجارية (إضافة عائلات أتوديرم وفوتوديرم) ---
let biodermaBrandUpdate2 = brandsList.find(b => b.id === 'bioderma');
if (biodermaBrandUpdate2) {
    if (!biodermaBrandUpdate2.families.find(f => f.id === 'atoderm')) {
        biodermaBrandUpdate2.families.push({ id: 'atoderm', name: { ar: 'أتوديرم (للجفاف الشديد والإكزيما)', en: 'Atoderm (Dry to Atopic Skin)' } });
    }
    if (!biodermaBrandUpdate2.families.find(f => f.id === 'photoderm')) {
        biodermaBrandUpdate2.families.push({ id: 'photoderm', name: { ar: 'فوتوديرم (الحماية من الشمس)', en: 'Photoderm (Sun Care)' } });
    }
}

// --- 2. إضافة مصطلحات جديدة للقاموس ---
glossaryDict['skin_barrier_therapy'] = {
    title: { ar: 'براءة اختراع Skin Barrier Therapy 🛡️', en: 'Skin Barrier Therapy™ Patent 🛡️' },
    desc: { 
        ar: 'تقنية حصرية تمنع بكتيريا (المكورات العنقودية الذهبية - Staph aureus) من الالتصاق بالجلد والتكاثر عليه، مما يمنع تفاقم الإكزيما والالتهاب.', 
        en: 'An exclusive technology that prevents (Staphylococcus aureus) bacteria from adhering to and multiplying on the skin, preventing eczema aggravation.' 
    }
};

glossaryDict['cellular_bioprotection'] = {
    title: { ar: 'حماية خلوية بيولوجية (Cellular Bioprotection) 🧬', en: 'Cellular Bioprotection™ 🧬' },
    desc: { 
        ar: 'براءة اختراع تحمي الحمض النووي (DNA) للخلايا من التلف، وتنشط أجهزة الدفاع الطبيعية للجلد ضد أضرار أشعة الشمس والشيخوخة المبكرة.', 
        en: 'A patent that protects cellular DNA from damage and activates the skin\'s natural defenses against sun damage and premature aging.' 
    }
};

glossaryDict['pea_molecule'] = {
    title: { ar: 'جزيء PEA (بالميتويليثانولاميد) 🛑', en: 'PEA (Palmitoylethanolamide) 🛑' },
    desc: { 
        ar: 'مركب بيولوجي نشط يعمل كمسكن موضعي مضاد للحكة، يوقف الإحساس بالرغبة في الهرش فوراً.', 
        en: 'A biologically active compound acting as a topical anti-pruritic (anti-itch), instantly stopping the urge to scratch.' 
    }
};

// --- 3. المنتجات العميقة الجديدة ---

// [13] بيوديرما أتوديرم إنتينسيف بوم (بلسم الإكزيما)
deepProductsList.push({
    id: 'bio_atoderm_intensive_baume', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم إنتينسيف بوم (بلسم مكثف)', en: 'Atoderm Intensive Baume' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن للجلد التأتبي', en: 'Balanced for atopic skin' },
        mechanism: { 
            ar: 'يوقف الحكة بفضل <span class="glossary-term" onclick="openGlossary(\'pea_molecule\')">جزيء PEA</span>، ويعيد بناء حاجز البشرة بالليبيدات (Lipigenium)، بينما تمنع <span class="glossary-term" onclick="openGlossary(\'skin_barrier_therapy\')">Skin Barrier Therapy</span> الالتصاق البكتيري.', 
            en: 'Stops itching using the <span class="glossary-term" onclick="openGlossary(\'pea_molecule\')">PEA molecule</span>, rebuilds the skin barrier with lipids (Lipigenium), and prevents bacterial adhesion via <span class="glossary-term" onclick="openGlossary(\'skin_barrier_therapy\')">Skin Barrier Therapy</span>.' 
        },
        patient_benefit: { 
            ar: 'يسكن الحكة الشديدة فوراً، يعالج الإكزيما التأتبية، ويطيل الفترات بين نوبات التهيج والجفاف بشكل ملحوظ.', 
            en: 'Instantly soothes severe itching, treats atopic eczema, and significantly extends the periods between flare-ups and severe dryness.' 
        },
        active_ingredients: [
            { name: 'PEA', concentration: 'Active | فعال', role: { ar: 'تسكين الحكة وتقليل الرغبة في الهرش.', en: 'Soothes itching and reduces the urge to scratch.' } },
            { name: 'Lipigenium (Ceramides)', concentration: 'Intense | مكثف', role: { ar: 'إعادة بناء طبقة الدهون الواقية للجلد.', en: 'Rebuilds the skin\'s protective lipid layer.' } },
            { name: 'Sunflower Seed Oil', concentration: 'Rich | غني', role: { ar: 'ترطيب عميق وتغذية.', en: 'Deep hydration and nourishment.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'الخطوة الأساسية لترطيب الجسم أو الوجه.', en: 'Main step for body or face hydration.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك بلطف على بشرة نظيفة (يفضل بعد الاستحمام مباشرة لحبس الرطوبة). يُستخدم للوجه والجسم.', en: 'Massage gently onto clean skin (preferably right after a shower to lock in moisture). For face and body.' },
        layering: { 
            do_not_mix_with: { ar: ['لا تعارض.'], en: ['No contraindications.'] }, 
            best_mixed_with: { ar: ['أتوديرم زيت الاستحمام.', 'الكورتيزون الموضعي (يقلل الاعتماد عليه).'], en: ['Atoderm Shower Oil.', 'Topical corticosteroids (reduces reliance on them).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الإكزيما التأتبية، الجفاف الشديد جداً، الحكة المستمرة، تقشر الجلد.', en: 'Atopic eczema, extremely dry skin, persistent itching, skin flaking.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن تماماً لحديثي الولادة (باستثناء الخدج). خالي من العطور وقوامه غير لزج رغم كثافته.', en: 'Completely safe for newborns (except premature infants). Fragrance-free and non-sticky despite its richness.' }
    }
});

// [14] بيوديرما أتوديرم زيت الاستحمام
deepProductsList.push({
    id: 'bio_atoderm_shower_oil', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم زيت الاستحمام', en: 'Atoderm Huile de Douche (Shower Oil)' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (يحترم الغلاف الحمضي)', en: '5.5 (Respects the acid mantle)' },
        mechanism: { 
            ar: 'ينظف بلطف فائق ويغذي الجلد بفضل الدهون الحيوية النباتية التي تخفف الإحساس بالشد، مدعوماً بـ <span class="glossary-term" onclick="openGlossary(\'skin_barrier_therapy\')">Skin Barrier Therapy</span> لمنع التهيج البيولوجي.', 
            en: 'Ultra-gentle cleansing and nourishment via plant biolipids that relieve tightness, supported by <span class="glossary-term" onclick="openGlossary(\'skin_barrier_therapy\')">Skin Barrier Therapy</span> to prevent biological irritation.' 
        },
        patient_benefit: { 
            ar: 'يوفر ترطيباً يدوم لـ 24 ساعة بمجرد الخروج من الاستحمام، يمنع جفاف الماء العسر، ويترك طبقة حريرية واقية.', 
            en: 'Provides 24-hour hydration right out of the shower, prevents hard water dryness, and leaves a silky protective film.' 
        },
        active_ingredients: [
            { name: 'Vegetal Biolipids (Coconut/Sunflower)', concentration: '33%', role: { ar: 'تخفيف الإحساس بالشد فوراً وزيادة تحمل الجلد.', en: 'Instantly relieves tightness and increases skin tolerance.' } },
            { name: 'Niacinamide', concentration: 'Active | فعال', role: { ar: 'تحفيز بناء السيراميد في الجلد.', en: 'Stimulates ceramide synthesis in the skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (أثناء الاستحمام).', en: 'Daily (during shower).' },
        step_in_routine: { ar: 'خطوة التنظيف (بديل للصابون أو الشاور جل).', en: 'Cleansing step (alternative to soap/shower gel).' },
        routine_step_number: 1,
        application: { ar: 'يُرغى على بشرة مبللة (الوجه والجسم)، ثم يُشطف ويُجفف الجلد بالتربيت الخفيف.', en: 'Lather on wet skin (face and body), rinse, and pat dry gently.' },
        layering: { 
            do_not_mix_with: { ar: ['اللوف الخشن لتجنب تجريح الجلد الحساس.'], en: ['Harsh loofahs to avoid scratching sensitive skin.'] }, 
            best_mixed_with: { ar: ['بلسم أتوديرم إنتينسيف.'], en: ['Atoderm Intensive Baume.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الجافة إلى الجافة جداً، الإكزيما، الحساسية من صابون الاستحمام، وحكة الشتاء.', en: 'Dry to very dry skin, eczema, sensitivity to shower soaps, and winter itch.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يترك ملمساً دهنياً (قوامه زيتي يتحول لمستحلب حليبي مع الماء). لا يسبب انزلاق في حوض الاستحمام.', en: 'Leaves no greasy feel (oil turns into milky emulsion with water). Does not make the bathtub slippery.' }
    }
});

// [15] بيوديرما فوتوديرم أكوا فلويد
deepProductsList.push({
    id: 'bio_photoderm_aquafluide', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم أكوا فلويد SPF50+ (واقي شمس)', en: 'Photoderm Aquafluide SPF50+' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يوفر حماية قصوى من أشعة UVA/UVB باستخدام فلاتر آمنة، بالإضافة إلى حماية بيولوجية داخلية براءة اختراع <span class="glossary-term" onclick="openGlossary(\'cellular_bioprotection\')">الحماية الخلوية</span>.', 
            en: 'Provides extreme UVA/UVB protection using safe filters, plus internal biological protection via the <span class="glossary-term" onclick="openGlossary(\'cellular_bioprotection\')">Cellular Bioprotection</span> patent.' 
        },
        patient_benefit: { 
            ar: 'حماية ممتازة من التصبغات وحروق الشمس، بقوام مائي خفيف جداً يعطي لمسة جافة (Dry-touch) بدون أي لمعان أو أثر أبيض.', 
            en: 'Excellent protection against pigmentation and sunburns, with an ultra-light watery texture providing a dry-touch finish, no shine, and no white cast.' 
        },
        active_ingredients: [
            { name: 'UVA/UVB Filters', concentration: 'SPF 50+', role: { ar: 'درع واقي لامتصاص وعكس الأشعة.', en: 'Protective shield to absorb and reflect rays.' } },
            { name: 'Cellular Bioprotection™ Complex', concentration: 'Patented | براءة اختراع', role: { ar: 'يحمي مناعة الجلد وحمضه النووي.', en: 'Protects skin immunity and cellular DNA.' } },
            { name: 'Mattifying Powders', concentration: '3 Powders | 3 مساحيق', role: { ar: 'منع اللمعان المتأخر وإعطاء اللمسة الجافة.', en: 'Prevents delayed shine and provides a dry touch.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً، يُعاد كل ساعتين في الشمس المباشرة.', en: 'Daily, reapply every 2 hours in direct sun.' },
        step_in_routine: { ar: 'آخر خطوة في روتين العناية الصباحي.', en: 'Last step in morning skincare routine.' },
        routine_step_number: 4,
        application: { ar: 'تُرج العبوة جيداً، ويوضع بسخاء على الوجه والرقبة قبل التعرض للشمس بـ 20 دقيقة.', en: 'Shake well, apply generously to face and neck 20 mins before sun exposure.' },
        layering: { 
            do_not_mix_with: { ar: ['الزيوت الثقيلة تحته حتى لا تعيق امتصاصه.'], en: ['Heavy oils underneath to prevent absorption block.'] }, 
            best_mixed_with: { ar: ['أساس ممتاز للمكياج.'], en: ['Excellent makeup base.'] } 
        }
    },
    precautions: {
        indications: { ar: 'جميع أنواع البشرة، خاصة المختلطة والدهنية الحساسة التي تبحث عن حماية لا تسد المسام.', en: 'All skin types, especially sensitive combination/oily skin seeking non-comedogenic protection.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مقاوم للماء والعرق (Water/Sweat resistant). لا يسبب وخز للعينين.', en: 'Water and sweat resistant. Does not sting the eyes.' }
    }
});
// ==========================================
// 📦 بلوك رقم (6): استكمال نواقص بيوديرما + نواقص لاروش بوزيه
// تم التدقيق البرمجي والتوافق الثنائي (V3.0)
// ==========================================

// --- 1. تحديث القاموس بمصطلحات سريرية جديدة ---
glossaryDict['uvmune_400'] = {
    title: { ar: 'ميكسوريل 400 (Mexoryl 400) ☀️', en: 'Mexoryl 400 ☀️' },
    desc: { 
        ar: 'أحدث وأقوى فلتر شمسي في العالم من ابتكار لوريال، وهو الوحيد القادر على حجب أشعة UVA الطويلة جداً (حتى 400 نانومتر) التي تخترق الجلد بعمق وتسبب السرطانات والتجاعيد.', 
        en: 'The most advanced UV filter globally, capable of blocking ultra-long UVA rays (up to 400nm) that penetrate deep into the skin, causing DNA damage and premature aging.' 
    }
};

glossaryDict['mp_lipids'] = {
    title: { ar: 'ليبيدات MP (MP-Lipids) 🧬', en: 'MP-Lipids 🧬' },
    desc: { 
        ar: 'جيل جديد من الليبيدات القادرة على محاكاة دهون الجلد الطبيعية، لترميم حاجز البشرة المتهالك وإعادة بناء الغشاء الحامي للجلد من الداخل.', 
        en: 'A new generation of biomimetic lipids that repair the skin barrier and rebuild the protective film from within.' 
    }
};

// --- 2. المنتجات العميقة (نواقص بيوديرما) ---

// [16] بيوديرما أتوديرم مرطب الشفاه (الستيك)
deepProductsList.push({
    id: 'bio_atoderm_lip_stick', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم مرطب شفاه (ستيك)', en: 'Atoderm Lèvres Lip Stick' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن للغشاء المخاطي', en: 'Balanced for mucosa' },
        mechanism: { 
            ar: 'يعمل على إعادة بناء الغشاء المخاطي للشفاه المتشققة وتكوين طبقة عازلة (Occlusive) تحمي من العوامل الخارجية بفضل مزيج زبدة الشيا وشمع النحل.', 
            en: 'Rebuilds the cracked labial mucosa and forms an occlusive barrier to protect against external factors, using Shea Butter and Beeswax.' 
        },
        patient_benefit: { 
            ar: 'يرطب الشفاه الجافة يومياً، يمنع التشققات الناتجة عن البرد أو الجفاف، ويترك الشفاه ناعمة ومرنة.', 
            en: 'Daily hydration for dry lips, prevents cracks caused by cold or dryness, and leaves lips soft and supple.' 
        },
        active_ingredients: [
            { name: 'Shea Butter', concentration: 'Rich | غني', role: { ar: 'تغذية وترميم التشققات.', en: 'Nourishes and repairs cracks.' } },
            { name: 'Beeswax (Cera Alba)', concentration: 'Base | أساسي', role: { ar: 'يصنع طبقة واقية تمنع تبخر الماء.', en: 'Creates a protective layer preventing moisture loss.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'متكرر (كلما دعت الحاجة).', en: 'Frequently (as needed).' },
        step_in_routine: { ar: 'عناية يومية.', en: 'Daily care.' },
        routine_step_number: 3,
        application: { ar: 'يُمرر على الشفاه مباشرة.', en: 'Glide directly onto lips.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد تعارض.'], en: ['No contraindications.'] }, 
            best_mixed_with: { ar: ['جميع منتجات الترطيب.'], en: ['All hydrating products.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الشفاه الجافة، العناية اليومية في فصل الشتاء.', en: 'Dry lips, daily winter care.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'نكهة توت العليق (Raspberry) خفيفة جداً. ممتاز كقاعدة قبل أحمر الشفاه.', en: 'Very light raspberry flavor. Excellent as a base before lipstick.' }
    }
});

// [17] بيوديرما سينسيبيو H2O مناديل مبللة
deepProductsList.push({
    id: 'bio_sensibio_wipes', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو H2O مناديل ميسيلار', en: 'Sensibio H2O Dermatological Wipes' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (درجة حموضة فسيولوجية)', en: '5.5 (Physiological pH)' },
        mechanism: { 
            ar: 'نفس فاعلية مياه الميسيلار معبأة في مناديل قابلة للتحلل البيولوجي. تستخدم <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">تقنية الميسيلار</span> لالتقاط الشوائب، مع الألانتوين لتهدئة الاحتكاك الميكانيكي للمنديل.', 
            en: 'The exact efficacy of micellar water in biodegradable wipes. Uses <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">Micellar Technology</span> to capture impurities, with Allantoin to soothe mechanical friction from wiping.' 
        },
        patient_benefit: { 
            ar: 'حل عملي وسريع للسفر أو النادي. ينظف المكياج والشوائب بلطف دون الحاجة للماء، ويحترم البشرة الحساسة.', 
            en: 'Practical on-the-go solution for travel or gym. Gently removes makeup and impurities without water, respecting sensitive skin.' 
        },
        active_ingredients: [
            { name: 'Allantoin', concentration: 'Active | فعال', role: { ar: 'يهدئ الجلد ويمنع تهيج الاحتكاك.', en: 'Soothes skin and prevents friction irritation.' } },
            { name: 'Micellar Solution', concentration: 'Infused | مُشبع', role: { ar: 'تنظيف عميق ولطيف.', en: 'Deep and gentle cleansing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (لإزالة المكياج السريع).', en: 'As needed (for quick makeup removal).' },
        step_in_routine: { ar: 'التنظيف السريع/خارج المنزل.', en: 'Quick cleansing/on-the-go.' },
        routine_step_number: 1,
        application: { ar: 'يُمسح الوجه والعينين برفق. لا يحتاج للشطف.', en: 'Gently wipe face and eyes. No rinsing needed.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف للعينين.'], en: ['Vigorous rubbing of the eyes.'] }, 
            best_mixed_with: { ar: ['استكمال الروتين الليلي فوراً بعدها.'], en: ['Following up with night routine immediately.'] } 
        }
    },
    precautions: {
        indications: { ar: 'إزالة المكياج السريعة، السفر، البشرة الحساسة التي تحتاج لتنظيف خارج المنزل.', en: 'Quick makeup removal, travel, sensitive skin needing cleansing on the go.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'المناديل ناعمة جداً ومصنوعة من ألياف لطيفة على الجلد. يجب إغلاق العبوة بإحكام لمنع الجفاف.', en: 'Very soft wipes made of skin-friendly fibers. Must tightly close the pack to prevent drying.' }
    }
});

// --- 3. المنتجات العميقة (نواقص لاروش بوزيه) ---

// [18] لاروش بوزيه - إيفاكلار إتش إيزو-بيوم (تعديل: تم تضمينه مسبقاً في بلوك 1، لن نكرره هنا لتجنب التكرار في قاعدة البيانات)

// [19] لاروش بوزيه - أنثيليوس UVMune 400 (سائل غير مرئي)
deepProductsList.push({
    id: 'lrp_anthelios_uvmune', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay', // يتبع عائلة الحماية
    name: { ar: 'أنثيليوس UVMune 400 (سائل غير مرئي)', en: 'Anthelios UVMune 400 Invisible Fluid' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم فلتر <span class="glossary-term" onclick="openGlossary(\'uvmune_400\')">ميكسوريل 400</span> الحصري للحماية من أشعة UVA الطويلة جداً، مع تقنية (Netlock) التي تثبت الفلاتر في غشاء غير مرئي على الجلد.', 
            en: 'Features the exclusive <span class="glossary-term" onclick="openGlossary(\'uvmune_400\')">Mexoryl 400</span> filter against ultra-long UVA, with Netlock technology that anchors filters in an invisible film.' 
        },
        patient_benefit: { 
            ar: 'أقوى واقي شمس في تاريخ الشركة. حماية فائقة من التصبغات والشيخوخة، مقاوم للماء والعرق، ولا يترك أي أثر أبيض نهائياً.', 
            en: 'The most powerful sunscreen in the brand\'s history. Ultimate protection against pigmentation and aging, water/sweat resistant, and zero white cast.' 
        },
        active_ingredients: [
            { name: 'Mexoryl 400', concentration: 'Patented | براءة اختراع', role: { ar: 'حماية من أعمق أشعة الشمس ضرراً.', en: 'Protection against the deepest, most damaging UV rays.' } },
            { name: 'Vitamin E', concentration: 'Antioxidant | مضاد أكسدة', role: { ar: 'حماية الخلايا من الشوارد الحرة.', en: 'Protects cells from free radicals.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً، يُجدد كل ساعتين.', en: 'Daily, reapply every 2 hours.' },
        step_in_routine: { ar: 'آخر خطوة صباحية.', en: 'Last morning step.' },
        routine_step_number: 4,
        application: { ar: 'يُرج جيداً ويوضع على الوجه ومحيط العين.', en: 'Shake well and apply to face and eye area.' },
        layering: { 
            do_not_mix_with: { ar: ['الزيوت الثقيلة تحته.'], en: ['Heavy oils underneath.'] }, 
            best_mixed_with: { ar: ['جميع السيرومات العلاجية.'], en: ['All treatment serums.'] } 
        }
    },
    precautions: {
        indications: { ar: 'جميع أنواع البشرة، البشرة شديدة التحسس للشمس، والوقاية من الكلف.', en: 'All skin types, sun-allergic skin, and melasma prevention.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يسبب وخز العينين (Anti-eye stinging). خالي من العطور.', en: 'Anti-eye stinging. Fragrance-free.' }
    }
});

// [20] لاروش بوزيه - سيكابلاست لشفاه (Cicaplast Levres)
deepProductsList.push({
    id: 'lrp_cicaplast_lips', brandId: 'laroche', familyId: 'cicaplast', brand: 'La Roche-Posay',
    name: { ar: 'سيكابلاست لشفاه (مرمم الشفاه)', en: 'Cicaplast Lips Barrier Repair' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يصنع طبقة عازلة (Film-forming) بتركيز 5% من البانثينول لترميم الشقوق، مع <span class="glossary-term" onclick="openGlossary(\'mp_lipids\')">ليبيدات MP</span> لإعادة ترطيب غشاء الشفاه من الداخل.', 
            en: 'Creates a film-forming barrier with 5% Panthenol to repair cracks, and <span class="glossary-term" onclick="openGlossary(\'mp_lipids\')">MP-Lipids</span> to rehydrate the lip membrane from within.' 
        },
        patient_benefit: { 
            ar: 'يعالج الشفاه المتشققة والنازفة فوراً، يمنع التهيج الناتج عن لعق الشفاه أو البرد، ويوفر حماية طويلة الأمد.', 
            en: 'Instantly heals cracked and bleeding lips, prevents irritation from lip-licking or cold, and provides long-lasting protection.' 
        },
        active_ingredients: [
            { name: 'Panthenol', concentration: '5%', role: { ar: 'تهدئة وترميم سريع.', en: 'Soothing and fast repair.' } },
            { name: 'MP-Lipids', concentration: 'Active | فعال', role: { ar: 'إعادة بناء حاجز الشفاه.', en: 'Rebuilding the lip barrier.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'متكرر يومياً.', en: 'Multiple times daily.' },
        step_in_routine: { ar: 'عناية موضعية.', en: 'Targeted care.' },
        routine_step_number: 3,
        application: { ar: 'يوضع مباشرة على الشفاه.', en: 'Apply directly to lips.' },
        layering: { 
            do_not_mix_with: { ar: ['التقشير القاسي للشفاه.'], en: ['Harsh lip scrubs.'] }, 
            best_mixed_with: { ar: ['علاجات الروكوتان.'], en: ['Accutane treatments.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الشفاه شديدة الجفاف والمتشققة.', en: 'Severely dry and cracked lips.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام غير مرئي ولا يترك أثر دهني مزعج.', en: 'Invisible texture with no annoying greasy residue.' }
    }
});

// [21] بيوديرما - سيبيوم H2O (الميسيلار الأخضر)
deepProductsList.push({
    id: 'bio_sebium_h2o', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم H2O (محلول ميسيلار منقي)', en: 'Sebium H2O Micellar Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (فسيولوجي)', en: '5.5 (Physiological)' },
        mechanism: { 
            ar: 'يجمع بين <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">تقنية الميسيلار</span> وبراءة اختراع <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv</span> لتنظيف المكياج وتنظيم جودة الدهون في وقت واحد.', 
            en: 'Combines <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">Micellar Technology</span> and <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv patent</span> to cleanse makeup and regulate sebum quality simultaneously.' 
        },
        patient_benefit: { 
            ar: 'ينظف البشرة الدهنية بعمق دون تجفيفها، يزيل اللمعان فوراً، ويمنع انسداد المسام.', 
            en: 'Deeply cleanses oily skin without drying, instantly removes shine, and prevents clogged pores.' 
        },
        active_ingredients: [
            { name: 'Zinc Gluconate', concentration: 'Active | فعال', role: { ar: 'تنقية البشرة وتنظيم الدهون.', en: 'Purifying skin and regulating sebum.' } },
            { name: 'Copper Sulfate', concentration: 'Active | فعال', role: { ar: 'مضاد للبكتيريا ومنظف.', en: 'Antibacterial and cleansing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'الخطوة الأولى (تنظيف).', en: 'Step 1 (Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'يُبلل قطن ويُمسح الوجه. لا يحتاج لشطف.', en: 'Soak cotton pad and wipe face. No rinsing needed.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف.'], en: ['Harsh rubbing.'] }, 
            best_mixed_with: { ar: ['مجموعة سيبيوم بالكامل.'], en: ['Entire Sebium range.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، المختلطة، والمسام الواسعة.', en: 'Oily, combination skin, and enlarged pores.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يُستخدم لإزالة مكياج العين الحساسة (يُفضل استخدام النسخة الوردية للعين).', en: 'Not for sensitive eye makeup removal (use the Pink version for eyes).' }
    }
});

// [22] بيوديرما - أتوديرم كريم (الترطيب اليومي للعائلة)
deepProductsList.push({
    id: 'bio_atoderm_cream', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم كريم (مرطب مغذي فائق)', en: 'Atoderm Cream Ultra' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعمل مركب (Skin Protect Complex) على تحفيز إنتاج حمض الهيالورونيك الطبيعي في الجلد، مع تعويض الليبيدات لتقوية الحاجز الواقي.', 
            en: 'Skin Protect Complex stimulates natural Hyaluronic Acid production while replenishing lipids to strengthen the protective barrier.' 
        },
        patient_benefit: { 
            ar: 'ترطيب فوري وعميق يدوم 24 ساعة، يجعل البشرة ناعمة ومرنة من أول استخدام، ومثالي لجميع أفراد العائلة.', 
            en: 'Instant, deep 24-hour hydration, making skin soft and supple from the first use, ideal for the whole family.' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: 'Active | فعال', role: { ar: 'تحفيز بناء السيراميدات الطبيعية.', en: 'Stimulating natural ceramide synthesis.' } },
            { name: 'Glycerin & Vaseline', concentration: 'Rich | غني', role: { ar: 'حبس الرطوبة ومنع الجفاف.', en: 'Locking in moisture and preventing dryness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'ترطيب الجسم والوجه.', en: 'Body and face hydration.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على بشرة نظيفة (يفضل وهي رطبة قليلاً).', en: 'Apply to clean skin (preferably slightly damp).' },
        layering: { 
            do_not_mix_with: { ar: ['المرطبات القاسية التي تحتوي على عطور قوية.'], en: ['Harsh moisturizers with strong fragrances.'] }, 
            best_mixed_with: { ar: ['أتوديرم جل دوش.'], en: ['Atoderm Gel Douche.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الجافة، الجافة جداً، والعناية اليومية لجميع الأعمار.', en: 'Dry, very dry skin, and daily care for all ages.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يتوفر بأحجام كبيرة (500 مل) وهو اقتصادي جداً للعائلات.', en: 'Available in large sizes (500ml), very economical for families.' }
    }
});
// ==========================================
// 📦 بلوك رقم (7): بيوديرما (Hydrabio للترطيب + Pigmentbio للتفتيح)
// تم التدقيق البرمجي والتوافق الثنائي (V3.0)
// ==========================================

// --- 1. تحديث العلامات التجارية (إضافة عائلات هيدرابيو وبيجمنت بيو) ---
let biodermaBrandFull = brandsList.find(b => b.id === 'bioderma');
if (biodermaBrandFull) {
    if (!biodermaBrandFull.families.find(f => f.id === 'hydrabio')) {
        biodermaBrandFull.families.push({ id: 'hydrabio', name: { ar: 'هيدرابيو (للبشرة الفاقدة للحيوية والترطيب)', en: 'Hydrabio (Dehydrated Sensitive Skin)' } });
    }
    if (!biodermaBrandFull.families.find(f => f.id === 'pigmentbio')) {
        biodermaBrandFull.families.push({ id: 'pigmentbio', name: { ar: 'بيجمنت بيو (لعلاج التصبغات وتفتيح البشرة)', en: 'Pigmentbio (Hyperpigmentation)' } });
    }
}

// --- 2. إضافة مصطلحات جديدة للقاموس ---
glossaryDict['aquagenium'] = {
    title: { ar: 'براءة اختراع Aquagenium 🌊', en: 'Aquagenium™ Patent 🌊' },
    desc: { 
        ar: 'تقنية تحفز الجلد على إعادة بناء قدراته الترطيبية الطبيعية من خلال تنشيط "الأكوابورينات" (قنوات نقل الماء داخل الخلايا)، وحبس الماء في طبقات الجلد السطحية.', 
        en: 'A technology that teaches the skin to biologically relaunch its natural hydration capacities by stimulating aquaporins (water channels) and retaining water.' 
    }
};

glossaryDict['lumireveal'] = {
    title: { ar: 'تقنية LumiReveal ✨', en: 'LumiReveal™ Technology ✨' },
    desc: { 
        ar: 'ابتكار مستوحى من العلاجات الرائدة في طب الجلدية، يعمل على ثلاث مراحل: تقليل إنتاج الميلانين، منع انتقاله للخلايا السطحية، وتسريع تجديد الخلايا المصبوغة.', 
        en: 'A technology inspired by leading dermatological treatments that reduces melanin production, prevents its transfer, and accelerates cell renewal to eliminate spots.' 
    }
};

glossaryDict['vitamin_c_fresh'] = {
    title: { ar: 'فيتامين C الطازج 🍋', en: 'Fresh Vitamin C 🍋' },
    desc: { 
        ar: 'فيتامين سي نقي يتم عزله في كبسولة خاصة داخل العبوة للحفاظ على استقراره وقوته من الأكسدة، ولا يتم تفعيله إلا عند أول استخدام لضمان أقصى فعالية للتفتيح.', 
        en: 'Pure Vitamin C isolated in a special canister to prevent oxidation, activated only upon first use to ensure maximum brightening potency.' 
    }
};

// --- 3. المنتجات العميقة الجديدة ---

// [23] بيوديرما هيدرابيو سيروم (مرطب قوي)
deepProductsList.push({
    id: 'bio_hydrabio_serum', brandId: 'bioderma', familyId: 'hydrabio', brand: 'Bioderma',
    name: { ar: 'هيدرابيو سيروم (مركز الترطيب)', en: 'Hydrabio Serum (Hydration Booster)' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعيد تعليم البشرة كيف ترطب نفسها بفضل براءة اختراع <span class="glossary-term" onclick="openGlossary(\'aquagenium\')">Aquagenium</span>، حيث يرفع مستويات الأكسجين والماء داخل الخلايا فوراً.', 
            en: 'Re-teaches the skin to hydrate itself via <span class="glossary-term" onclick="openGlossary(\'aquagenium\')">Aquagenium</span> patent, instantly boosting oxygen and water levels in cells.' 
        },
        patient_benefit: { 
            ar: 'يعطي البشرة نضارة فورية (إشراقة بنسبة 57% زيادة) ويرطبها بعمق، مما يزيل بهتان البشرة الناتج عن الجفاف.', 
            en: 'Provides instant radiance (+57% glow) and deep hydration, eliminating skin dullness caused by dehydration.' 
        },
        active_ingredients: [
            { name: 'Hyaluronic Acid', concentration: 'Pure | نقي', role: { ar: 'جذب وحبس الماء داخل الجلد.', en: 'Attracting and locking water into the skin.' } },
            { name: 'Xylitol & Glycerin', concentration: 'Active | فعال', role: { ar: 'ترطيب طويل الأمد وتقوية الحاجز الجلدي.', en: 'Long-lasting hydration and barrier strengthening.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'سيروم ترطيب (قبل الكريم).', en: 'Hydrating serum (before cream).' },
        routine_step_number: 2,
        application: { ar: 'يوضع على الوجه والرقبة بعد التطهير.', en: 'Apply to face and neck after cleansing.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد.'], en: ['None.'] }, 
            best_mixed_with: { ar: ['هيدرابيو ميسيلار ووتر', 'هيدرابيو كريم.'], en: ['Hydrabio Micellar Water', 'Hydrabio Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الجفاف، الباهتة، والبشرة التي تعاني من ضغوط البيئة (تكييف، تلوث).', en: 'Severely dehydrated skin, dull complexion, and skin stressed by environment (AC, pollution).' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام (جل) خفيف جداً، ممتاز كقاعدة للمكياج.', en: 'Ultra-light gel texture, excellent makeup base.' }
    }
});

// [24] بيوديرما بيجمنت بيو C-Concentrate (سيروم التفتيح المركز)
deepProductsList.push({
    id: 'bio_pigmentbio_c_concentrate', brandId: 'bioderma', familyId: 'pigmentbio', brand: 'Bioderma',
    name: { ar: 'بيجمنت بيو سي-كونسينتريت (مركز فيتامين سي)', en: 'Pigmentbio C-Concentrate' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً (لتعزيز امتصاص فيتامين سي)', en: 'Slightly acidic (to boost Vit C absorption)' },
        mechanism: { 
            ar: 'يجمع بين تقنية <span class="glossary-term" onclick="openGlossary(\'lumireveal\')">LumiReveal</span> و <span class="glossary-term" onclick="openGlossary(\'vitamin_c_fresh\')">فيتامين C الطازج</span> بتركيز 2% لإزالة البقع ومنع ظهورها، مع أحماض AHA/BHA للتقشير اللطيف.', 
            en: 'Combines <span class="glossary-term" onclick="openGlossary(\'lumireveal\')">LumiReveal</span> technology and 2% <span class="glossary-term" onclick="openGlossary(\'vitamin_c_fresh\')">Fresh Vitamin C</span> to eliminate spots, with AHA/BHA for mild exfoliation.' 
        },
        patient_benefit: { 
            ar: 'تفتيح مكثف وتوحيد لون البشرة خلال شهر واحد، مع تحسين ملمس الجلد وإعطائه نضارة ملحوظة.', 
            en: 'Intense brightening and skin tone evening in 1 month, improving skin texture and providing noticeable glow.' 
        },
        active_ingredients: [
            { name: 'Fresh Vitamin C', concentration: '2%', role: { ar: 'تفتيح البقع ومنع الأكسدة.', en: 'Lightening spots and anti-oxidation.' } },
            { name: 'Glycolic & Salicylic Acid', concentration: '8%', role: { ar: 'تقشير كيميائي لطيف لتجديد الخلايا.', en: 'Mild chemical peel for cell renewal.' } },
            { name: 'Niacinamide', concentration: 'Active | فعال', role: { ar: 'تقوية الحاجز وتهدئة الجلد.', en: 'Barrier strengthening and soothing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مساءً فقط، لمدة شهر واحد (كورس علاجي).', en: 'PM only, for 1 month (treatment course).' },
        step_in_routine: { ar: 'خطوة العلاج الليلي.', en: 'Night treatment step.' },
        routine_step_number: 2,
        application: { ar: 'توضع 5 قطرات على الوجه والرقبة. يجب الضغط على الكبسولة لتفعيل فيتامين سي عند أول استخدام.', en: 'Apply 5 drops to face and neck. Press the canister to activate Vitamin C on first use.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول أو المقشرات القوية الأخرى في نفس الوقت.'], en: ['Retinol or other strong exfoliants simultaneously.'] }, 
            best_mixed_with: { ar: ['واقي شمس في الصباح (إلزامي).'], en: ['Sunscreen in the morning (Mandatory).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البقع الداكنة، الكلف، النمش، وبهتان لون البشرة.', en: 'Dark spots, melasma, freckles, and dull skin tone.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'قد يسبب وخزاً طفيفاً في البداية. يجب استبدال الغطاء بقطارة الاستخدام المرفقة.', en: 'May cause slight tingling initially. Replace cap with the provided dropper.' }
    }
});

// [25] بيوديرما بيجمنت بيو للمناطق الحساسة (Pigmentbio Sensitive Areas)
deepProductsList.push({
    id: 'bio_pigmentbio_sensitive_areas', brandId: 'bioderma', familyId: 'pigmentbio', brand: 'Bioderma',
    name: { ar: 'بيجمنت بيو للمناطق الحساسة الاحتكاكية', en: 'Pigmentbio Sensitive Areas' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'أول مرطب مصمم خصيصاً للمناطق المعرضة للاحتكاك (الإبط، الفخذين). يهدئ الالتهاب فوراً بفضل خلاصة (Andrographis paniculata) ويفتح اللون بتقنية <span class="glossary-term" onclick="openGlossary(\'lumireveal\')">LumiReveal</span>.', 
            en: 'The 1st care specifically designed for friction areas (axillae, groin). Instantly soothes inflammation via Andrographis paniculata and brightens via <span class="glossary-term" onclick="openGlossary(\'lumireveal\')">LumiReveal</span>.' 
        },
        patient_benefit: { 
            ar: 'يقلل الاحمرار والاسمرار الناتج عن الاحتكاك في المناطق الحساسة، ويرطبها لمدة 8 ساعات، ويمكن استخدامه مباشرة بعد الحلاقة أو الليزر.', 
            en: 'Reduces redness and darkening caused by friction in sensitive areas, hydrates for 8 hours, and can be used post-shaving or laser.' 
        },
        active_ingredients: [
            { name: 'Azelaic Acid derivative', concentration: 'Active | فعال', role: { ar: 'تفتيح آمن وفعال للمناطق الحساسة.', en: 'Safe and effective brightening for sensitive areas.' } },
            { name: 'LumiReveal™ Complex', concentration: 'Patented | براءة اختراع', role: { ar: 'علاج التصبغات من المنبع.', en: 'Treating pigmentation at the source.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'مرطب علاجي للمناطق الحساسة.', en: 'Treatment moisturizer for sensitive areas.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على المناطق المتضررة بعد تنظيفها.', en: 'Apply to affected areas after cleansing.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['بيجمنت بيو كريم رغوي (Pigmentbio Foaming Cream).'], en: ['Pigmentbio Foaming Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'اسمرار الإبطين، بين الفخذين، الركبتين، والأكواع.', en: 'Darkening of axillae, inner thighs, knees, and elbows.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من العطور. قوامه غير لزج ولا يترك أثراً دهنياً.', en: 'Fragrance-free. Non-sticky and non-greasy texture.' }
    }
});
// ==========================================
// 📦 بلوك رقم (8): بيوديرما (Sensibio Defensive + Photoderm M)
// متوافق 100% مع واجهة Dashboard Layout
// ==========================================

// --- 1. المنتجات العميقة الجديدة ---

// [27] Bioderma Sensibio Defensive Active Soothing Cream
deepProductsList.push({
    id: 'bio_sensibio_defensive_normal', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو ديفينسيف (كريم مهدئ نشط)', en: 'Sensibio Defensive Active Soothing Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يعمل بتقنية <span class="glossary-term" onclick="openGlossary(\'defensive_tech\')">Defensive Technology</span> التي تقوي قدرة الجلد على الدفاع عن نفسه ضد الالتهاب الناتج عن البيئة (البرد، التلوث) والأكسدة.', 
            en: 'Acts via <span class="glossary-term" onclick="openGlossary(\'defensive_tech\')">Defensive Technology</span> that strengthens the skin\'s self-defense against environmental inflammation and oxidative stress.' 
        },
        patient_benefit: { 
            ar: 'يهدئ الوخز والشد فوراً، يمنح ترطيباً لمدة 12 ساعة، ويجعل البشرة الحساسة أقل تفاعلية مع الوقت.', 
            en: 'Instantly soothes tingling and tightness, provides 12-hour hydration, and makes sensitive skin less reactive over time.' 
        },
        active_ingredients: [
            { name: 'Carnosine + Vitamin E', concentration: { ar: 'مضادات أكسدة', en: 'Antioxidants' }, role: { ar: 'حماية الخلايا من الشوارد الحرة.', en: 'Protecting cells from free radicals.' } },
            { name: 'Red Sage Polyphenols', concentration: { ar: 'منقي', en: 'Purifying' }, role: { ar: 'الحد من فرط تفاعل النهايات العصبية.', en: 'Limiting nerve fiber hyper-reactivity.' } },
            { name: 'Tetrapeptide-10', concentration: { ar: 'ببتيد فعال', en: 'Active Peptide' }, role: { ar: 'تقوية وظيفة حاجز البشرة المادي.', en: 'Strengthening the physical skin barrier function.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'خطوة الترطيب اليومي.', en: 'Daily hydration step.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على الوجه والرقبة بعد التنظيف.', en: 'Apply to face and neck after cleansing.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد تعارض.'], en: ['No contraindications.'] }, 
            best_mixed_with: { ar: ['سينسيبيو H2O.', 'واقي شمس فوتوديرم.'], en: ['Sensibio H2O.', 'Photoderm Sunscreen.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة والمتهيجة (العادية إلى المختلطة).', en: 'Sensitive and sensitized skin (Normal to Combination).' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام خفيف ومنعش، يمتص بسرعة فائقة.', en: 'Light and refreshing texture, absorbs very quickly.' }
    }
});

// [28] Bioderma Sensibio Defensive RICH Active Soothing Cream
deepProductsList.push({
    id: 'bio_sensibio_defensive_rich', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو ديفينسيف ريتش (كريم مهدئ مغذي)', en: 'Sensibio Defensive Rich Active Soothing Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'نفس تقنية <span class="glossary-term" onclick="openGlossary(\'defensive_tech\')">Defensive</span> ولكن بقاعدة غنية بالليبيدات لتعويض نقص الدهون في البشرة الجافة.', 
            en: 'Same <span class="glossary-term" onclick="openGlossary(\'defensive_tech\')">Defensive</span> technology but with a lipid-rich base to compensate for lipid deficiency in dry skin.' 
        },
        patient_benefit: { 
            ar: 'تغذية عميقة وراحة فورية من الجفاف والتحسس، مع حماية الحاجز الجلدي من المؤثرات الخارجية.', 
            en: 'Deep nourishment and instant relief from dryness and sensitivity, protecting the skin barrier from external aggressors.' 
        },
        active_ingredients: [
            { name: 'Carnosine', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'حماية الـ DNA الخلوي.', en: 'Protecting cellular DNA.' } },
            { name: 'Palmitoyl Tetrapeptide-10', concentration: { ar: 'مركز', en: 'Concentrated' }, role: { ar: 'ترميم الحاجز الجلدي.', en: 'Skin barrier repair.' } },
            { name: 'Rich Emollients', concentration: { ar: 'مغذي', en: 'Nourishing' }, role: { ar: 'توفير الراحة للبشرة الجافة.', en: 'Providing comfort for dry skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'خطوة الترطيب والتغذية.', en: 'Hydration and nourishment step.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على وجه نظيف وجاف.', en: 'Apply to clean, dry face.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سينسيبيو زيت التنظيف (Cleansing Oil).'], en: ['Sensibio Cleansing Oil.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة الجافة إلى شديدة الجفاف.', en: 'Sensitive dry to very dry skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام غني كريمي ولكن لا يترك ملمس دهني مزعج.', en: 'Rich creamy texture but non-greasy finish.' }
    }
});

// [29] Bioderma Photoderm M Gel-Cream SPF 50+ (Light/Golden Shades)
deepProductsList.push({
    id: 'bio_photoderm_m', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم M (واقي شمس لعلاج الكلف)', en: 'Photoderm M Gel-Cream SPF 50+' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'ابتكار طبي يجمع بين الحماية من الشمس و <span class="glossary-term" onclick="openGlossary(\'iron_oxides_blue_light\')">أكاسيد الحديد</span> بنسبة عالية لمنع 66% من الضوء الأزرق المسبب للكلف، مع <span class="glossary-term" onclick="openGlossary(\'glabridin\')">الجلابريدين</span> لتفتيح البقع.', 
            en: 'Medical innovation combining sun protection with high concentration of <span class="glossary-term" onclick="openGlossary(\'iron_oxides_blue_light\')">Iron Oxides</span> to block 66% of blue light causing melasma, with <span class="glossary-term" onclick="openGlossary(\'glabridin\')">Glabridin</span> to brighten spots.' 
        },
        patient_benefit: { 
            ar: 'يمنع ظهور الكلف الجديد ويقلل من فرصة عودة التصبغات القديمة، ويوفر تغطية تجميلية مطفية توحد لون البشرة.', 
            en: 'Prevents new melasma and reduces relapse of old pigmentation, providing matte cosmetic coverage that evens skin tone.' 
        },
        active_ingredients: [
            { name: 'Iron Oxides', concentration: { ar: 'تركيز عالي ملون', en: 'High Tinted Concentration' }, role: { ar: 'حجب الضوء الأزرق المرئي.', en: 'Blocking visible Blue Light.' } },
            { name: 'Glabridin', concentration: { ar: 'نشط', en: 'Active' }, role: { ar: 'تثبيط إنتاج الميلانين.', en: 'Inhibiting melanin production.' } },
            { name: 'Sun Active Defense', concentration: { ar: 'براءة اختراع', en: 'Patented' }, role: { ar: 'حماية بيولوجية للحمض النووي.', en: 'Biological DNA protection.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (ضروري)، ويُجدد كل ساعتين.', en: 'Daily (Crucial), reapply every 2 hours.' },
        step_in_routine: { ar: 'الخطوة الصباحية العلاجية والوقائية.', en: 'AM treatment and prevention step.' },
        routine_step_number: 4,
        application: { ar: 'يوزع بالتساوي على الوجه. يتوفر بدرجة Light و Golden.', en: 'Apply evenly to face. Available in Light and Golden shades.' },
        layering: { 
            do_not_mix_with: { ar: ['تخفيفه بالمرطبات (يقلل كفاءة حجب الضوء الأزرق).'], en: ['Diluting with moisturizers (reduces blue light blocking efficiency).'] }, 
            best_mixed_with: { ar: ['مجموعة Pigmentbio للتفتيح.'], en: ['Pigmentbio brightening range.'] } 
        }
    },
    precautions: {
        indications: { ar: 'كلف الحمل، فرط التصبغ الهرموني، والوقاية من بقع الشمس.', en: 'Pregnancy mask, hormonal hyperpigmentation, and sun spot prevention.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مقاوم للماء والعرق، قوام جل-كريم غير لامع.', en: 'Water and sweat resistant, matte gel-cream texture.' }
    }
});
// ==========================================
// 📦 بلوك رقم (9): بيوديرما (Photoderm Cream + Max Fluid Colors)
// متوافق 100% مع واجهة Dashboard Layout
// ==========================================

// --- المنتجات العميقة الجديدة ---

// [31] Bioderma Photoderm Cream SPF 50+ (Invisible / Light)
deepProductsList.push({
    id: 'bio_photoderm_cream_spf50', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم كريم SPF 50+ (شفاف / ملون)', en: 'Photoderm Cream SPF 50+ (Invisible / Light)' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يوفر حماية فائقة للبشرة الجافة بفضل تقنية <span class="glossary-term" onclick="openGlossary(\'sun_active_defense\')">Sun Active Defense</span>، مع قاعدة كريمية توفر ترطيباً يدوم 8 ساعات وتمنع الجفاف الناتج عن الشمس.', 
            en: 'Provides superior protection for dry skin using <span class="glossary-term" onclick="openGlossary(\'sun_active_defense\')">Sun Active Defense</span>, with a creamy base that delivers 8-hour hydration and prevents sun-induced dryness.' 
        },
        patient_benefit: { 
            ar: 'يجمع بين الحماية القصوى والراحة المغذية للبشرة الجافة، لا يترك أثراً دهنياً، ويعطي مظهر نضر وصحي (Glowy finish).', 
            en: 'Combines maximum protection with nourishing comfort for dry skin, leaves no greasy residue, and provides a healthy, glowy finish.' 
        },
        active_ingredients: [
            { name: 'UVA/UVB Filters', concentration: { ar: 'عالي الحماية', en: 'High Protection' }, role: { ar: 'منع حروق الشمس وتلف الخلايا.', en: 'Preventing sunburn and cellular damage.' } },
            { name: 'Moisturizing Glycerin', concentration: { ar: 'غني', en: 'Rich' }, role: { ar: 'حبس الرطوبة داخل الجلد.', en: 'Locking moisture into the skin.' } },
            { name: 'Sun Active Defense', concentration: { ar: 'براءة اختراع', en: 'Patented' }, role: { ar: 'تقوية مناعة الجلد ضد الأكسدة.', en: 'Strengthening skin immunity against oxidation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً قبل الشمس.', en: 'Daily before sun exposure.' },
        step_in_routine: { ar: 'الخطوة الأخيرة (للبشرة الجافة).', en: 'Final step (for dry skin).' },
        routine_step_number: 4,
        application: { ar: 'يوضع بسخاء على الوجه والرقبة. متوفر بنسخة شفافة ونسخة ملونة (Light).', en: 'Apply generously to face and neck. Available in Invisible and Light tinted versions.' },
        layering: { 
            do_not_mix_with: { ar: ['المنظفات القاسية قبل الاستخدام.'], en: ['Harsh cleansers before application.'] }, 
            best_mixed_with: { ar: ['سيروم هيدرابيو (لبشرة شديدة النضارة).'], en: ['Hydrabio Serum (for extra radiance).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الجافة، الجافة جداً، والبشرة الحساسة التي تحتاج لترطيب مع الحماية.', en: 'Dry, very dry skin, and sensitive skin needing hydration with protection.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مقاوم للماء والعرق، ولا يسبب وخز العينين.', en: 'Water and sweat resistant, anti-eye stinging.' }
    }
});

// [32] Bioderma Photoderm MAX Fluid SPF 100 (Light / Very Light Versions)
deepProductsList.push({
    id: 'bio_photoderm_max_fluid_tinted', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم ماكس فلويد SPF 100 (ملون)', en: 'Photoderm MAX Fluid SPF 100 (Tinted)' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'أقصى حماية فيزيائية وكيميائية ممكنة ضد الشمس، مدمجة مع صبغات معدنية توفر تغطية كاملة للعيوب وتعمل كحاجز إضافي ضد الأشعة المرئية.', 
            en: 'Maximum possible physical and chemical sun protection, combined with mineral pigments providing full coverage for imperfections and an extra barrier against visible light.' 
        },
        patient_benefit: { 
            ar: 'يوفر حماية مطلقة للحالات السريرية (بعد الليزر) مع توحيد فوري ولون طبيعي يغني عن كريم الأساس.', 
            en: 'Provides absolute protection for clinical cases (post-laser) with instant evening of skin tone, replacing foundation.' 
        },
        active_ingredients: [
            { name: 'Max UV Filters', concentration: { ar: 'SPF 100', en: 'SPF 100' }, role: { ar: 'صد تام لأشعة UVA/UVB القوية.', en: 'Total block of strong UVA/UVB rays.' } },
            { name: 'Mineral Color Pigments', concentration: { ar: 'تغطية عالية', en: 'High Coverage' }, role: { ar: 'توحيد لون البشرة وإخفاء العيوب.', en: 'Evening skin tone and hiding blemishes.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً عند التعرض المباشر.', en: 'Daily during direct exposure.' },
        step_in_routine: { ar: 'خطوة الحماية القصوى والتغطية.', en: 'Ultimate protection and coverage step.' },
        routine_step_number: 4,
        application: { ar: 'يوزع جيداً على الوجه. متاح بدرجات (Light) و (Very Light).', en: 'Distribute well on face. Available in Light and Very Light shades.' },
        layering: { 
            do_not_mix_with: { ar: ['طبقات كثيفة من المكياج (لتجنب التكتل).'], en: ['Heavy layers of makeup (to avoid pilling).'] }, 
            best_mixed_with: { ar: ['كريمات سيكابيو المرممة.'], en: ['Cicabio repairing creams.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الحساسية، بعد العمليات التجميلية، والنمش الكثيف.', en: 'Extreme sun sensitivity, post-procedure skin, and heavy freckles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يجب اختيار الدرجة (Very Light) للبشرة شديدة البياض لتجنب مظهر القناع.', en: 'Choose (Very Light) for very fair skin to avoid a mask-like look.' }
    }
});
// ==========================================
// 📦 بلوك رقم (10): بيوديرما (المنظفات المتخصصة + علاجات Sebium المتقدمة)
// متوافق 100% مع واجهة Dashboard Layout
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['bakuchiol_patent'] = {
    title: { ar: 'براءة اختراع Bakuchiol 🌿', en: 'Bakuchiol Patent 🌿' },
    desc: { 
        ar: 'بديل طبيعي للريتينول، يعمل مع تقنية Fluidactiv لإعادة تدريب البشرة على إنتاج دهون صحية غير قابلة للأكسدة، مما يمنع ظهور الحبوب من جذورها.', 
        en: 'A natural retinol alternative that works with Fluidactiv technology to retrain the skin to produce healthy, non-oxidized sebum, preventing acne at the source.' 
    }
};

glossaryDict['keratolytic_salicylic'] = {
    title: { ar: 'التقشير المزدوج (Double Keratolytic) 🧪', en: 'Double Keratolytic 🧪' },
    desc: { 
        ar: 'دمج بين حمض الساليسيليك (BHA) لتنظيف المسام من الداخل، وحمض المالييك (AHA) لتقشير السطح وتنعيم الجلد، بتركيز يضمن الفعالية دون تهيج.', 
        en: 'A combination of Salicylic Acid (BHA) to clean pores from within, and Malic Acid (AHA) to exfoliate the surface and smooth skin, at a concentration ensuring efficacy without irritation.' 
    }
};

// --- 2. المنتجات العميقة الجديدة ---

// [33] Bioderma Sensibio H2O Eye (Micellar Biphasic)
deepProductsList.push({
    id: 'bio_sensibio_h2o_eye', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو H2O آي (مزيل مكياج العين الثنائي)', en: 'Sensibio H2O Eye (Biphasic Micellar)' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي (مطابق لدموع العين)', en: 'Physiological (matches tears)' },
        mechanism: { 
            ar: 'محلول ثنائي الطور (Biphasic) يجمع بين 70% ماء ميسيلار لتنظيف الشوائب و 30% مرحلة زيتية لإذابة المكياج المقاوم للماء (Waterproof) فوراً، مع تقوية الرموش بفضل برو-فيتامين B5.', 
            en: 'Biphasic formula combining 70% micellar water and 30% oily phase to instantly dissolve waterproof makeup, while strengthening lashes with Pro-vitamin B5.' 
        },
        patient_benefit: { 
            ar: 'يزيل أصعب أنواع المكياج والروج الثابت بمسحة واحدة، يهدئ جفن العين الحساس، ولا يترك أي غشاء دهني مشوش للرؤية.', 
            en: 'Removes the toughest waterproof makeup and long-wear lipstick in one wipe, soothes sensitive eyelids, and leaves no blurry oily film.' 
        },
        active_ingredients: [
            { name: 'Pro-vitamin B5 (Panthenol)', concentration: { ar: 'مغذي', en: 'Nourishing' }, role: { ar: 'ترطيب محيط العين وتقوية الرموش.', en: 'Hydrating eye contour and strengthening lashes.' } },
            { name: 'Fructooligosaccharides', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'تقليل التهاب الجفون الحساسة.', en: 'Reducing sensitive eyelid inflammation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (لإزالة المكياج).', en: 'As needed (for makeup removal).' },
        step_in_routine: { ar: 'الخطوة الأولى (تنظيف العيون والشفاه).', en: 'Step 1 (Eye & Lip Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'تُرج العبوة جيداً لخلط الطورين، يُوضع على قطنة وتُثبت على العين لثوانٍ ثم تُمسح بلطف.', en: 'Shake well to mix phases, apply to cotton pad, hold over eyes for seconds, then wipe gently.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف للرموش.'], en: ['Harsh rubbing of eyelashes.'] }, 
            best_mixed_with: { ar: ['جميع كريمات محيط العين.'], en: ['All eye contour creams.'] } 
        }
    },
    precautions: {
        indications: { ar: 'العيون الحساسة، مستخدمي العدسات اللاصقة، والمكياج المقاوم للماء.', en: 'Sensitive eyes, contact lens wearers, and waterproof makeup.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره من قبل أطباء العيون. خالي من العطور.', en: 'Ophthalmologically tested. Fragrance-free.' }
    }
});

// [34] Bioderma Atoderm Gel Douche (The Blue One)
deepProductsList.push({
    id: 'bio_atoderm_gel_douche', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم جل دوش (منظف يومي لطيف)', en: 'Atoderm Gel Douche' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (فسيولوجي)', en: '5.5 (Physiological)' },
        mechanism: { 
            ar: 'غسول رغوي خالي من الصابون يعتمد على (Skin Protect Complex) لتحفيز إنتاج حمض الهيالورونيك، مع تقنية النحاس (Copper Sulfate) التي تعطي اللون الأزرق الطبيعي وتطهر الجلد.', 
            en: 'Soap-free foaming gel utilizing Skin Protect Complex to stimulate Hyaluronic Acid production, with Copper Sulfate providing its natural blue color and purifying the skin.' 
        },
        patient_benefit: { 
            ar: 'ينظف الوجه والجسم بلطف شديد، يحمي من جفاف المياه العسرة، ويترك البشرة ناعمة ومرنة بعد الاستحمام.', 
            en: 'Gently cleanses face and body, protects against hard water dryness, and leaves skin soft and supple post-shower.' 
        },
        active_ingredients: [
            { name: 'Skin Protect Complex', concentration: { ar: 'براءة اختراع', en: 'Patented' }, role: { ar: 'تقوية حاجز الجلد وحبس الرطوبة.', en: 'Strengthening skin barrier and locking moisture.' } },
            { name: 'Copper Sulfate', concentration: { ar: 'منقي', en: 'Purifying' }, role: { ar: 'تطهير الجلد بلطف ومنع البكتيريا.', en: 'Gentle skin purification and preventing bacteria.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (أثناء الاستحمام).', en: 'Daily (during shower).' },
        step_in_routine: { ar: 'خطوة التنظيف اليومية (بديل الصابون).', en: 'Daily cleansing step (soap alternative).' },
        routine_step_number: 1,
        application: { ar: 'يُرغى على بشرة مبللة ثم يُشطف جيداً.', en: 'Lather on wet skin then rinse thoroughly.' },
        layering: { 
            do_not_mix_with: { ar: ['اللوف الخشن جداً.'], en: ['Very harsh loofahs.'] }, 
            best_mixed_with: { ar: ['أتوديرم كريم ألترا (للترطيب بعد التجفيف).'], en: ['Atoderm Cream Ultra (for post-shower hydration).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الجافة، الحساسة، والعناية اليومية لجميع أفراد العائلة.', en: 'Dry, sensitive skin, and daily care for the whole family.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن للرضع والأطفال والبالغين. رائحة منعشة خفيفة.', en: 'Safe for babies, children, and adults. Light fresh scent.' }
    }
});

// [35] Bioderma Sebium Global (Intensive Purifying Care)
deepProductsList.push({
    id: 'bio_sebium_global', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم جلوبال (علاج الحبوب المكثف)', en: 'Sebium Global' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً (4.5 - 5.0)', en: 'Slightly acidic' },
        mechanism: { 
            ar: 'يستخدم تقنية <span class="glossary-term" onclick="openGlossary(\'bakuchiol_patent\')">Bakuchiol</span> مع Fluidactiv لإعادة تكوين دهون صحية، مدمج مع أحماض AHA/BHA لإزالة الرؤوس السوداء والالتهاب.', 
            en: 'Utilizes <span class="glossary-term" onclick="openGlossary(\'bakuchiol_patent\')">Bakuchiol</span> technology and Fluidactiv to reformulate healthy sebum, combined with AHA/BHA to eliminate blackheads and inflammation.' 
        },
        patient_benefit: { 
            ar: 'علاج شامل للحبوب النشطة؛ يقلل البثور بنسبة 78%، يمنع تكون آثار الحبوب، ويتحكم في لمعان البشرة.', 
            en: 'Comprehensive acne treatment; reduces pimples by 78%, prevents post-acne marks, and controls shine.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid + Citric Acid', concentration: { ar: 'تقشير مزدوج', en: 'Dual Exfoliation' }, role: { ar: 'فتح المسام وتنعيم ملمس البشرة.', en: 'Unclogging pores and smoothing skin texture.' } },
            { name: 'Zinc Gluconate', concentration: { ar: 'منظم دهون', en: 'Sebo-regulating' }, role: { ar: 'تقليل اللمعان والالتهاب.', en: 'Reducing shine and inflammation.' } },
            { name: 'Enoxolone', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'تسكين الاحمرار المصاحب للحبوب.', en: 'Soothing acne-related redness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'خطوة العلاج الأساسية.', en: 'Core treatment step.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على كامل الوجه بعد تنظيفه بغسول سيبيوم.', en: 'Apply to entire face after cleansing with Sebium gel.' },
        layering: { 
            do_not_mix_with: { ar: ['علاجات الروكوتان الفموية (قد يسبب جفاف مفرط).'], en: ['Oral Accutane treatments (may cause excessive dryness).'] }, 
            best_mixed_with: { ar: ['واقي شمس فوتوديرم نهاراً.'], en: ['Photoderm sunscreen in the AM.'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب المعتدل، الرؤوس السوداء والبيضاء، والمسام المسدودة.', en: 'Moderate acne, blackheads, whiteheads, and clogged pores.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'يعد بديلاً ممتازاً للعلاجات الطبية في حالات الحبوب البسيطة والمتوسطة.', en: 'Excellent medical alternative for mild to moderate acne.' }
    }
});

// [36] Bioderma Sebium Kerato+ (High Tolerance Gel-Cream)
deepProductsList.push({
    id: 'bio_sebium_kerato_plus', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم كيراتو بلس (علاج الحبوب عالي التحمل)', en: 'Sebium Kerato+' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (لأقصى فعالية تقشير)', en: 'Acidic for maximum exfoliation' },
        mechanism: { 
            ar: 'يعتمد على تقنية <span class="glossary-term" onclick="openGlossary(\'keratolytic_salicylic\')">التقشير المزدوج</span> (1.8% حمض ساليسيليك + 10% حمض المالييك) لاختراق المسام بفعالية مع الحفاظ على راحة الجلد وترطيبه لمدة 8 ساعات.', 
            en: 'Relies on <span class="glossary-term" onclick="openGlossary(\'keratolytic_salicylic\')">Double Keratolytic</span> technology (1.8% Salicylic + 10% Malic Acid) to effectively penetrate pores while maintaining skin comfort and 8h hydration.' 
        },
        patient_benefit: { 
            ar: 'يقلل الحبوب والآثار بنسبة 41% في يومين فقط، دون تسبب في جفاف أو قشرة أو تهيج للبشرة الحساسة.', 
            en: 'Reduces pimples and marks by 41% in just 2 days, without causing dryness, flaking, or irritation for sensitive skin.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid (BHA)', concentration: { ar: '1.8%', en: '1.8%' }, role: { ar: 'تنظيف المسام العميقة.', en: 'Deep pore cleansing.' } },
            { name: 'Malic Acid Ester (AHA)', concentration: { ar: '10%', en: '10%' }, role: { ar: 'تقشير سطحي لطيف وتنعيم الجلد.', en: 'Gentle surface exfoliation and skin smoothing.' } },
            { name: 'Fluidactiv™ Patent', concentration: { ar: 'براءة اختراع', en: 'Patented' }, role: { ar: 'منع انسداد المسام مستقبلياً.', en: 'Preventing future pore clogging.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'خطوة العلاج السريع واللطيف.', en: 'Fast and gentle treatment step.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على كامل الوجه أو موضعياً على البثور.', en: 'Apply to entire face or topically on blemishes.' },
        layering: { 
            do_not_mix_with: { ar: ['أي مقشرات كيميائية قوية أخرى في نفس الوقت.'], en: ['Any other strong chemical exfoliants simultaneously.'] }, 
            best_mixed_with: { ar: ['سيبيوم هيدرا (إذا كانت البشرة تميل للجفاف).'], en: ['Sebium Hydra (if skin tends to dry).'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب في بدايته، الآثار الحمراء والداكنة، والبشرة الدهنية الحساسة.', en: 'Early-stage acne, red and dark marks, and sensitive oily skin.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'آمن وفعال جداً للمراهقين (Adolescents). قوام جل-كريم غير لزج.', en: 'Highly safe and effective for adolescents. Non-sticky gel-cream texture.' }
    }
});
// ==========================================
// 📦 بلوك رقم (11): ختام براند بيوديرما (المنظفات النشطة والترميم المكثف)
// متوافق 100% مع واجهة Dashboard Layout
// ==========================================

// --- المنتجات العميقة الجديدة ---

// [37] Bioderma Pigmentbio Foaming Cream
deepProductsList.push({
    id: 'bio_pigmentbio_foaming_cream', brandId: 'bioderma', familyId: 'pigmentbio', brand: 'Bioderma',
    name: { ar: 'بيجمنت بيو كريم رغوي (غسول تفتيح)', en: 'Pigmentbio Foaming Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly Acidic' },
        mechanism: { 
            ar: 'يجمع بين التقشير الفيزيائي اللطيف (Micro-beads) والتقشير الكيميائي (AHA) لإزالة الخلايا المصبوغة فوراً، مع تفتيح البشرة بتقنية LumiReveal أثناء التنظيف.', 
            en: 'Combines gentle physical exfoliation (Micro-beads) and chemical peeling (AHA) to remove pigmented cells instantly, while brightening skin via LumiReveal technology during cleansing.' 
        },
        patient_benefit: { 
            ar: 'ينظف البشرة بعمق ويعطي إشراقة فورية، ويمنع ظهور البقع الجديدة، ويمكن استخدامه كقناع (Mask) لتفتيح مكثف مرة أسبوعياً.', 
            en: 'Deeply cleanses and provides instant radiance, prevents new spots, and can be used as a mask for intensive brightening once a week.' 
        },
        active_ingredients: [
            { name: 'Citric Acid + Cellulose Acetate', concentration: { ar: 'مقشر مزدوج', en: 'Dual Exfoliant' }, role: { ar: 'تجديد خلايا البشرة وإزالة التصبغ السطحي.', en: 'Renewing skin cells and removing surface pigmentation.' } },
            { name: 'Coco Glucoside & Glyceryl Oleate', concentration: { ar: 'منظف مرطب', en: 'Hydrating Cleanser' }, role: { ar: 'الحفاظ على رطوبة الجلد أثناء التقشير.', en: 'Preserving skin moisture during exfoliation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (صباحاً أو مساءً).', en: 'Daily (AM or PM).' },
        step_in_routine: { ar: 'خطوة التنظيف والتفتيح.', en: 'Cleansing and brightening step.' },
        routine_step_number: 1,
        application: { ar: 'يُوضع على بشرة مبللة، يُدلك حتى يرغي، ثم يُشطف. كقناع: يُترك لمدة 5 دقائق ثم يُشطف.', en: 'Apply to wet skin, massage to lather, then rinse. As a mask: leave for 5 mins then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['اللوف الخشن (التقشير كافٍ).'], en: ['Harsh loofahs (exfoliation is sufficient).'] }, 
            best_mixed_with: { ar: ['بيجمنت بيو سي-كونسينتريت.'], en: ['Pigmentbio C-Concentrate.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الباهتة، التصبغات، وعدم توحد لون الوجه والجسم.', en: 'Dull skin, pigmentation, and uneven face and body tone.' },
        pregnancy_safe: true, sun_sensitivity: true, 
        notes: { ar: 'آمن للمناطق الحساسة الخارجية. خالي من الصابون.', en: 'Safe for external sensitive areas. Soap-free.' }
    }
});

// [38] Bioderma Sebium Gel Moussant Actif (Intense Exfoliating Cleanser)
deepProductsList.push({
    id: 'bio_sebium_gel_actif', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم جل موسان أكتيف (الغسول المركز)', en: 'Sebium Gel Moussant Actif' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (4.5) لتقشير أعمق', en: 'Acidic (4.5) for deeper peeling' },
        mechanism: { 
            ar: 'غسول علاجي مكثف يدمج (1% حمض الساليسيليك + 1.8% حمض الجليكوليك) لاختراق المسام المسدودة وإذابة الدهون المتحجرة ومنع تكون الرؤوس السوداء.', 
            en: 'Intensive therapeutic cleanser combining (1% Salicylic + 1.8% Glycolic Acid) to penetrate clogged pores, dissolve hardened sebum, and prevent blackheads.' 
        },
        patient_benefit: { 
            ar: 'يقلل البثور بنسبة 32% والرؤوس السوداء بنسبة 17%، ويترك المسام نظيفة تماماً دون التسبب في التهيج المعتاد للمقشرات القوية.', 
            en: 'Reduces pimples by 32% and blackheads by 17%, leaving pores perfectly clean without the typical irritation of strong exfoliants.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid (BHA)', concentration: { ar: '1%', en: '1%' }, role: { ar: 'تنظيف المسام من الداخل.', en: 'Cleansing pores from within.' } },
            { name: 'Glycolic Acid (AHA)', concentration: { ar: '1.8%', en: '1.8%' }, role: { ar: 'تقشير سطحي لتنعيم الجلد.', en: 'Surface exfoliation to smooth skin.' } },
            { name: 'Zinc Gluconate', concentration: { ar: 'منظم دهون', en: 'Sebo-regulator' }, role: { ar: 'تقليل اللمعان الفوري.', en: 'Immediate shine reduction.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً (أو حسب تحمل البشرة).', en: 'Once daily (or as tolerated).' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف العلاجي).', en: 'Step 1 (Therapeutic Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'يُرغى بلطف على البشرة، يُترك لمدة 30 ثانية لفعالية الأحماض، ثم يُشطف جيداً.', en: 'Lather gently, leave for 30 seconds for acid efficacy, then rinse thoroughly.' },
        layering: { 
            do_not_mix_with: { ar: ['علاجات الروكوتان الفموية (خطر جفاف شديد).'], en: ['Oral Isotretinoin (risk of severe dryness).'] }, 
            best_mixed_with: { ar: ['سيبيوم هيدرا (لترميم الحاجز).'], en: ['Sebium Hydra (for barrier repair).'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب العنيد، المسام المسدودة بشدة، والبشرة الدهنية السميكة.', en: 'Stubborn acne, severely clogged pores, and thick oily skin.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'إذا حدث تهيج أو تقشر مفرط، يُستخدم يوماً بعد يوم.', en: 'If irritation or excessive peeling occurs, use every other day.' }
    }
});

// [39] Bioderma Atoderm Intensive Gel Moussant
deepProductsList.push({
    id: 'bio_atoderm_intensive_gel', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم إنتينسيف جل موسان (للبشرة التأتبية)', en: 'Atoderm Intensive Gel Moussant' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (فسيولوجي)', en: '5.5 (Physiological)' },
        mechanism: { 
            ar: 'منظف مهدئ بتركيبة مضادة للحكة، يمنع انتشار البكتيريا المهيجة بفضل كبريتات الزنك والنحاس، مع الحفاظ على التوازن الحيوي للبشرة شديدة الجفاف.', 
            en: 'Soothing cleanser with an anti-itch formula, preventing the proliferation of irritating bacteria via Zinc and Copper sulfates, while preserving the biological balance of very dry skin.' 
        },
        patient_benefit: { 
            ar: 'يقلل الرغبة في الحك فوراً بعد الاستحمام، ويخفف الإحساس بالانزعاج، ويقوي الحاجز الجلدي الطبيعي.', 
            en: 'Reduces the urge to scratch immediately after bathing, eases discomfort, and strengthens the natural skin barrier.' 
        },
        active_ingredients: [
            { name: 'Vitamin PP (Niacinamide)', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تحفيز بناء ليبيدات الجلد.', en: 'Stimulating skin lipid synthesis.' } },
            { name: 'Zinc & Copper Sulfates', concentration: { ar: 'منقي', en: 'Purifying' }, role: { ar: 'تطهير الجلد ومنع الانتكاسات البكتيرية.', en: 'Purifying skin and preventing bacterial relapses.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (أثناء الاستحمام).', en: 'Daily (during shower).' },
        step_in_routine: { ar: 'خطوة التنظيف الأساسية للإكزيما.', en: 'Core cleansing step for eczema.' },
        routine_step_number: 1,
        application: { ar: 'يُرغى على بشرة مبللة، يُشطف برفق، ويُجفف الجلد بالتربيت.', en: 'Lather on wet skin, rinse gently, and pat dry.' },
        layering: { 
            do_not_mix_with: { ar: ['المنظفات المعطرة.'], en: ['Fragranced cleansers.'] }, 
            best_mixed_with: { ar: ['أتوديرم إنتينسيف بوم (فوراً بعد التجفيف).'], en: ['Atoderm Intensive Baume (immediately after drying).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الإكزيما التأتبية، الجفاف الشديد، ونوبات الحكة الجلدية.', en: 'Atopic eczema, severe dryness, and itching flare-ups.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من الصابون والعطور والبارابين. آمن لحديثي الولادة.', en: 'Soap, fragrance, and paraben-free. Safe for newborns.' }
    }
});

// [40] Bioderma Cicabio Pommade (Insulating Repairing Ointment)
deepProductsList.push({
    id: 'bio_cicabio_pommade', brandId: 'bioderma', familyId: 'cicabio', brand: 'Bioderma',
    name: { ar: 'سيكابيو بوماد (المرهم المرمم)', en: 'Cicabio Pommade' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يوفر "ضمادة سائلة" (Liquid Bandage) تحمي الجرح بعمق. يعيد بناء البشرة في كل مرحلة، ويسكن الألم بـ Antalgicine، ويخلق غشاءً عازلاً مغذياً يسمح للجلد بالتنفس.', 
            en: 'Provides a "liquid bandage" for deep wound protection. Reconstructs skin at every stage, relieves pain via Antalgicine, and creates an insulating, nourishing breathable film.' 
        },
        patient_benefit: { 
            ar: 'علاج مثالي للتلف الجلدي العميق؛ يسرع الالتئام، يغذي البشرة بكثافة، ويمنع الحكة أثناء تكوين الجلد الجديد.', 
            en: 'Ideal treatment for deep skin damage; accelerates healing, intensely nourishes, and prevents itching during new skin formation.' 
        },
        active_ingredients: [
            { name: 'Antalgicine™ Patent', concentration: { ar: 'براءة اختراع', en: 'Patented' }, role: { ar: 'تسكين فوري للألم والوخز.', en: 'Instant relief from pain and stinging.' } },
            { name: 'Zinc & Copper Sulfates', concentration: { ar: 'منقي', en: 'Purifying' }, role: { ar: 'منع العدوى البكتيرية في الجروح العميقة.', en: 'Preventing bacterial infection in deep wounds.' } },
            { name: 'Hyaluronic Acid + Lipids', concentration: { ar: 'مركز', en: 'Concentrated' }, role: { ar: 'خلق بيئة رطبة لالتئام أسرع.', en: 'Creating a moist environment for faster healing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً حتى تمام الشفاء.', en: 'Twice daily until fully healed.' },
        step_in_routine: { ar: 'علاج ترميم موضعي مكثف.', en: 'Intensive targeted repair treatment.' },
        routine_step_number: 3,
        application: { ar: 'توضع طبقة سميكة على المنطقة المتضررة النظيفة والجافة.', en: 'Apply a thick layer to the clean, dry affected area.' },
        layering: { 
            do_not_mix_with: { ar: ['الاستخدام على جروح مفتوحة تنزف.'], en: ['Use on open bleeding wounds.'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'التشققات الكبيرة، القروح غير النازفة، بعد العمليات الجراحية البسيطة، والحروق العميقة.', en: 'Major cracking, non-bleeding sores, post-minor surgery, and deep burns.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام "مرهم" ثقيل جداً يوفر حماية قصوى. لونه طبيعي.', en: 'Very heavy "ointment" texture for maximum protection. Natural color.' }
    }
});
// ==========================================
// 📦 بلوك رقم (12): لاروش بوزيه (عائلة Lipikar + Toleriane Eye)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. تحديث العلامات التجارية (إضافة عائلات لاروش الجديدة) ---
let lrpBrandUpdate = brandsList.find(b => b.id === 'laroche');
if (lrpBrandUpdate) {
    if (!lrpBrandUpdate.families.find(f => f.id === 'lipikar')) {
        lrpBrandUpdate.families.push({ id: 'lipikar', name: { ar: 'ليبيكار (للجفاف الشديد والإكزيما)', en: 'Lipikar (Severe Dryness & Eczema)' } });
    }
    if (!lrpBrandUpdate.families.find(f => f.id === 'anthelios')) {
        lrpBrandUpdate.families.push({ id: 'anthelios', name: { ar: 'أنثيليوس (حماية فائقة من الشمس)', en: 'Anthelios (High Sun Protection)' } });
    }
    if (!lrpBrandUpdate.families.find(f => f.id === 'anti_aging')) {
        lrpBrandUpdate.families.push({ id: 'anti_aging', name: { ar: 'مضادات الشيخوخة والسيرومات', en: 'Anti-Aging & Serums' } });
    }
}

// --- 2. إضافة مصطلحات جديدة للقاموس (Glossary) ---
glossaryDict['aqua_posae_filiformis'] = {
    title: { ar: 'أكوا بوزاي فيليفورميس (APF) 🧫', en: 'Aqua Posae Filiformis 🧫' },
    desc: { 
        ar: 'مكون نشط حصري من لاروش بوزيه يُزرع في مياهها الحرارية، يعمل على إعادة توازن الميكروبيوم وتقوية حاجز البشرة لمنع نوبات الجفاف الشديد.', 
        en: 'An exclusive active ingredient grown in La Roche-Posay Thermal Water, rebalances the microbiome and strengthens the skin barrier to prevent severe dryness flare-ups.' 
    }
};

glossaryDict['micro_m_tech'] = {
    title: { ar: 'تقنية Micro-M 🛡️', en: 'Micro-M Technology 🛡️' },
    desc: { 
        ar: 'تقنية متطورة تساعد في منع تكوين الأغشية الحيوية (Biofilms) للبكتيريا الضارة على الجلد، مما يقلل بشكل كبير من الحكة والالتهاب في حالات الإكزيما.', 
        en: 'Advanced technology that helps prevent the formation of harmful bacterial biofilms on the skin, significantly reducing itching and inflammation in eczema.' 
    }
};

glossaryDict['hepes'] = {
    title: { ar: 'مادة HEPES 🧹', en: 'HEPES 🧹' },
    desc: { 
        ar: 'عامل تقشير فسيولوجي يعمل على إذابة الروابط بين الخلايا الميتة بلطف شديد، مما يساعد في تنعيم البشرة الخشنة والقشرية دون تهيج.', 
        en: 'A physiological exfoliating agent that gently dissolves bonds between dead cells, helping smooth rough and scaly skin without irritation.' 
    }
};

// --- 3. المنتجات العميقة الجديدة ---

// [27] LA ROCHE POSAY LIPIKAR SYNDET AP+ CREAM WASH
deepProductsList.push({
    id: 'lrp_lipikar_syndet_ap', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار سينديت AP+ (كريم غسول مرمم)', en: 'Lipikar Syndet AP+ Cream Wash' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي (خالٍ من الصابون)', en: 'Physiological (Soap-free)' },
        mechanism: { 
            ar: 'قاعدة غسيل لطيفة للغاية تعمل بتقنية <span class="glossary-term" onclick="openGlossary(\'aqua_posae_filiformis\')">APF</span> لتهدئة تهيج الجلد وتقليل الرغبة في الحك منذ الاستحمام الأول.', 
            en: 'Ultra-gentle cleansing base utilizing <span class="glossary-term" onclick="openGlossary(\'aqua_posae_filiformis\')">APF</span> to soothe skin irritation and reduce itching urge from the first shower.' 
        },
        patient_benefit: { 
            ar: 'ينظف دون تجريد الجلد من زيوته، يعيد بناء الحاجز الدهني فوراً، ويقلل من نوبات جفاف الجلد الشديدة.', 
            en: 'Cleanses without stripping oils, instantly rebuilds the lipid barrier, and reduces severe dryness flare-ups.' 
        },
        active_ingredients: [
            { name: 'Shea Butter', concentration: '10%', role: { ar: 'تعويض دهون البشرة وتغذيتها.', en: 'Replenishing skin lipids and nourishing.' } },
            { name: 'Niacinamide', concentration: 'Active | فعال', role: { ar: 'مضاد للحكة والالتهاب.', en: 'Anti-pruritic and anti-inflammatory.' } },
            { name: 'Aqua Posae Filiformis', concentration: 'Patented | براءة اختراع', role: { ar: 'إعادة توازن بكتيريا الجلد النافعة.', en: 'Rebalancing beneficial skin bacteria.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً أثناء الاستحمام.', en: 'Daily during bathing.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الطبي).', en: 'Step 1 (Medical Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'يدلك على بشرة مبللة (الوجه والجسم)، ثم يشطف جيداً بالماء.', en: 'Massage onto wet skin (face and body), then rinse thoroughly.' },
        layering: { 
            do_not_mix_with: { ar: ['الليفة الخشنة (تزيد الإكزيما).'], en: ['Harsh loofahs (worsens eczema).'] }, 
            best_mixed_with: { ar: ['ليبيكار بوم AP+M.'], en: ['Lipikar Baume AP+M.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الجفاف، الإكزيما التأتبية، وقشرة الرأس لدى الرضع.', en: 'Severe dryness, atopic eczema, and cradle cap in infants.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن لحديثي الولادة (Pediatric safe). متوفر بحجم 200 مل وعبوة إعادة تعبئة 400 مل.', en: 'Safe for newborns. Available in 200ml and 400ml refill.' }
    }
});

// [28] LA ROCHE POSAY LIPIKAR LAIT UREA 5+ SHEA BUTTER
deepProductsList.push({
    id: 'lrp_lipikar_urea_5', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار ليت يوريا 5+ (لوشن منعم للبشرة الخشنة)', en: 'Lipikar Lait Urea 5+ Shea Butter' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'حمضي قليلاً (لتعزيز التقشير)', en: 'Slightly acidic' },
        mechanism: { 
            ar: 'يجمع بين 5% يوريا وعامل التقشير <span class="glossary-term" onclick="openGlossary(\'hepes\')">HEPES</span> لإذابة القشور وتنعيم الجلد، مع زبدة الشيا لتعويض المرونة المفقودة.', 
            en: 'Combines 5% Urea and <span class="glossary-term" onclick="openGlossary(\'hepes\')">HEPES</span> to dissolve scales and smooth skin, with Shea Butter to restore elasticity.' 
        },
        patient_benefit: { 
            ar: 'يعالج "جلد الوزة" (KP) والخشونة الناتجة عن الجفاف، يزيل القشور فوراً، ويهدئ البشرة الحساسة.', 
            en: 'Treats Keratosis Pilaris (KP) and dryness-induced roughness, instantly removes scales, and soothes sensitive skin.' 
        },
        active_ingredients: [
            { name: 'Urea', concentration: '5%', role: { ar: 'ترطيب عميق وتقشير القشور السطحية.', en: 'Deep hydration and exfoliating surface scales.' } },
            { name: 'HEPES', concentration: 'Active | فعال', role: { ar: 'تنشيط التقشير الفسيولوجي الطبيعي.', en: 'Activating natural physiological exfoliation.' } },
            { name: 'Allantoin', concentration: 'Soothing | مهدئ', role: { ar: 'تقليل تهيج البشرة الخشنة.', en: 'Reducing irritation in rough skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'ترطيب وعلاج الجسم.', en: 'Body hydration and treatment.' },
        routine_step_number: 2,
        application: { ar: 'يدلك على بشرة الجسم النظيفة، مع التركيز على المناطق الخشنة (الأذرع والأرجل).', en: 'Massage onto clean body skin, focusing on rough areas (arms and legs).' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات الأحماض القوية جداً على نفس المنطقة.'], en: ['Very strong acid exfoliants on the same area.'] }, 
            best_mixed_with: { ar: ['غسول ليبيكار سينديت.'], en: ['Lipikar Syndet wash.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الخشنة، جفاف الشيخوخة، والتقرن الشعري (جلد الوزة).', en: 'Rough skin, senile dryness, and Keratosis Pilaris.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يترك ملمساً دهنياً رغم قوته. مخصص للجسم فقط.', en: 'Non-greasy despite its potency. For body use only.' }
    }
});

// [29] LA ROCHE POSAY LIPIKAR BAUME AP+M
deepProductsList.push({
    id: 'lrp_lipikar_baume_apm', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار بوم AP+M (بلسم ثلاثي المفعول)', en: 'Lipikar Baume AP+M' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعمل بتقنية <span class="glossary-term" onclick="openGlossary(\'micro_m_tech\')">Micro-M</span> لإعادة توازن الميكروبيوم بالكامل وتقليل نوبات التهيج الحادة للبشرة التأتبية.', 
            en: 'Utilizes <span class="glossary-term" onclick="openGlossary(\'micro_m_tech\')">Micro-M</span> technology to fully rebalance the microbiome and reduce acute atopic skin flare-ups.' 
        },
        patient_benefit: { 
            ar: 'تسكين فوري للحكة، يوفر ترطيباً لمدة 48 ساعة، ويمنع عودة نوبات الإكزيما لفترات طويلة.', 
            en: 'Instant itch relief, provides 48-hour hydration, and prevents eczema relapse for long periods.' 
        },
        active_ingredients: [
            { name: 'Aqua Posae + Microresyl', concentration: 'AP+M Tech', role: { ar: 'منع تكوين الأغشية الحيوية للبكتيريا الضارة.', en: 'Preventing harmful bacterial biofilm formation.' } },
            { name: 'Shea Butter', concentration: '20%', role: { ar: 'ترميم عميق لحاجز الدهون.', en: 'Deep repair of the lipid barrier.' } },
            { name: 'Niacinamide', concentration: '4%', role: { ar: 'تهدئة عصبية للجلد وتقليل الالتهاب.', en: 'Neurological skin soothing and inflammation reduction.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً (على الوجه والجسم).', en: 'Once daily (face and body).' },
        step_in_routine: { ar: 'الترطيب العلاجي (بعد الاستحمام).', en: 'Therapeutic hydration (post-bath).' },
        routine_step_number: 2,
        application: { ar: 'يوضع على البشرة وهي رطبة قليلاً لامتصاص أسرع.', en: 'Apply to slightly damp skin for faster absorption.' },
        layering: { 
            do_not_mix_with: { ar: ['المنتجات العطرية القوية.'], en: ['Strong fragranced products.'] }, 
            best_mixed_with: { ar: ['جميع علاجات الطبيب للإكزيما.'], en: ['All physician-prescribed eczema treatments.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الإكزيما التأتبية، الجفاف الشديد جداً، والمواليد ذوي البشرة المتحسسة.', en: 'Atopic eczema, extreme dryness, and newborns with sensitive skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يُمتص بسرعة ولا يلتصق بالملابس.', en: 'Quickly absorbed and does not stick to clothes.' }
    }
});

// [30] LA ROCHE POSAY TOLERIANE DERMALLERGO EYE CREAM
deepProductsList.push({
    id: 'lrp_toleriane_eye', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'توليريان ديرماليرجو للعين (كريم مهدئ)', en: 'Toleriane Dermallergo Eye Cream' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي (مطابق للدموع)', en: 'Physiological (Tear-compatible)' },
        mechanism: { 
            ar: 'يستهدف تهيج جفن العين والانتفاخات التحسسية باستخدام <span class="glossary-term" onclick="openGlossary(\'neurosensine\')">نيوروسينسين</span> لتهدئة الأعصاب السطحية.', 
            en: 'Targets eyelid irritation and allergic puffiness using <span class="glossary-term" onclick="openGlossary(\'neurosensine\')">Neurosensine</span> to soothe superficial nerves.' 
        },
        patient_benefit: { 
            ar: 'راحة فورية من الحكة والاحمرار والوخز حول العين، وترطيب مكثف يدوم طويلاً.', 
            en: 'Instant relief from itching, redness, and stinging around eyes, with long-lasting intense hydration.' 
        },
        active_ingredients: [
            { name: 'Sphingobioma', concentration: 'Bacterial Extract', role: { ar: 'تقوية بكتيريا الجلد النافعة حول العين.', en: 'Strengthening beneficial skin bacteria around eyes.' } },
            { name: 'Neurosensine', concentration: 'Active | فعال', role: { ar: 'تهدئة عصبية فورية لمحيط العين.', en: 'Instant neurological soothing for eye contour.' } },
            { name: 'Niacinamide', concentration: 'Repairing | مرمم', role: { ar: 'تقليل احمرار جفن العين.', en: 'Reducing eyelid redness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'عناية محيط العين.', en: 'Eye contour care.' },
        routine_step_number: 2,
        application: { ar: 'يطبق بلطف شديد بالتربيت (Dabbing) دون فرك.', en: 'Apply gently with dabbing, no rubbing.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول القوي تحت العين في نفس الوقت.'], en: ['Strong retinol under eyes simultaneously.'] }, 
            best_mixed_with: { ar: ['توليريان غسول حليبي.'], en: ['Toleriane milky cleanser.'] } 
        }
    },
    precautions: {
        indications: { ar: 'محيط العين الحساس، الأكزيما حول العين، والعيون المعرضة للحساسية الموسمية.', en: 'Sensitive eye contour, peri-ocular eczema, and seasonal allergy-prone eyes.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'عبوة معقمة 100% (Ultra-hermetic) تمنع دخول الملوثات.', en: '100% Ultra-hermetic sterile packaging prevents contaminants.' }
    }
});
// ==========================================
// 📦 بلوك رقم (13): لاروش بوزيه (Anthelios Age Correct + Oil Control)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة مصطلحات جديدة للقاموس (Glossary) ---
glossaryDict['cellox_b3'] = {
    title: { ar: 'تقنية CELLOX-B3 ✨', en: 'CELLOX-B3 TECH™ ✨' },
    desc: { 
        ar: 'ابتكار يدمج حماية واسعة الطيف من الشمس مع مواد نشطة (نياسيناميد وفينيل إيثيل ريزورسينول) للحد من تلف الخلايا الناتج عن الأشعة والملوثات، وتصحيح التصبغات بفعالية.', 
        en: 'Innovation combining broad-spectrum sun protection with actives (Niacinamide & PHE-Resorcinol) to limit cellular damage from UV/Pollution and effectively correct pigmentation.' 
    }
};

glossaryDict['airlicium'] = {
    title: { ar: 'جزيء إيرليسيوم (Airlicium) 🌬️', en: 'Airlicium™ 🌬️' },
    desc: { 
        ar: 'جزيء مجهري فائق الامتصاص يتكون من 99% هواء، يمكنه امتصاص كميات هائلة من الدهون والعرق واللمعان، مما يضمن بقاء البشرة مطفية (Matte) لمدة 12 ساعة.', 
        en: 'An ultra-absorbing micro-molecule consisting of 99% air, capable of absorbing massive amounts of sebum, sweat, and shine, ensuring 12h matte skin.' 
    }
};

// --- 2. المنتجات العميقة الجديدة ---

// [41] ANTHELIOS AGE CORRECT SPF 50 (Invisible / Daily Light Cream)
deepProductsList.push({
    id: 'lrp_anthelios_age_correct_light', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس إيدج كوريكت (كريم تصحيح التجاعيد)', en: 'Anthelios Age Correct Daily Light Cream SPF 50' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يجمع بين الحماية القصوى وتقنية <span class="glossary-term" onclick="openGlossary(\'cellox_b3\')">CELLOX-B3</span> لتصحيح علامات الشيخوخة الناتجة عن الشمس (Photodamage)، مدعوماً بحمض الهيالورونيك المجزأ لملء التجاعيد.', 
            en: 'Combines maximum protection with <span class="glossary-term" onclick="openGlossary(\'cellox_b3\')">CELLOX-B3</span> technology to correct sun-induced aging (Photodamage), supported by fragmented Hyaluronic Acid to plump wrinkles.' 
        },
        patient_benefit: { 
            ar: 'يقلل التجاعيد بنسبة 15% والبقع الداكنة بنسبة 26% خلال 4 أسابيع، ويوفر ترطيباً يدوم 24 ساعة بملمس خفيف غير دهني.', 
            en: 'Reduces wrinkles by 15% and dark spots by 26% within 4 weeks, providing 24h hydration with a lightweight non-greasy texture.' 
        },
        active_ingredients: [
            { name: 'Fragmented Hyaluronic Acid', concentration: 'Concentrated | مركز', role: { ar: 'ملء الخطوط الدقيقة وترطيب عميق.', en: 'Plumping fine lines and deep hydration.' } },
            { name: 'PHE-Resorcinol', concentration: 'Active | فعال', role: { ar: 'تفتيح البقع الداكنة وتوحيد اللون.', en: 'Brightening dark spots and evening tone.' } },
            { name: 'Niacinamide', concentration: 'Soothing | مهدئ', role: { ar: 'تقليل الالتهاب وترميم الحاجز.', en: 'Reducing inflammation and barrier repair.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً كل صباح.', en: 'Daily every morning.' },
        step_in_routine: { ar: 'الخطوة الأخيرة (كواقي ومرطب معالج).', en: 'Final step (as SPF and treatment moisturizer).' },
        routine_step_number: 4,
        application: { ar: 'يوضع على كامل الوجه والرقبة قبل التعرض للشمس.', en: 'Apply to entire face and neck before sun exposure.' },
        layering: { 
            do_not_mix_with: { ar: ['المنظفات القاسية.'], en: ['Harsh cleansers.'] }, 
            best_mixed_with: { ar: ['سيروم فيتامين C10 (تحته).', 'سيروم ريتينول B3 (مساءً).'], en: ['Vitamin C10 Serum (underneath).', 'Retinol B3 Serum (PM).'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد، فقدان المرونة، البقع العمرية، والبهتان الناتج عن الشمس.', en: 'Wrinkles, loss of elasticity, age spots, and sun-induced dullness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره تحت إشراف أطباء الجلد والعيون. لا يسد المسام.', en: 'Dermatologically and ophthalmologically tested. Non-comedogenic.' }
    }
});

// [42] ANTHELIOS AGE CORRECT SPF 50 TINTED
deepProductsList.push({
    id: 'lrp_anthelios_age_correct_tinted', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس إيدج كوريكت الملون (تغطية تجميلية)', en: 'Anthelios Age Correct Gel-Cream SPF 50 Tinted' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'نفس فاعلية تصحيح التجاعيد مع إضافة أصباغ معدنية عالية التغطية تحجب الضوء المرئي المسبب للتصبغ، وتوفر مظهراً متجانساً فورياً.', 
            en: 'Same wrinkle-correcting efficacy with added high-coverage mineral pigments that block visible light causing pigmentation, providing an instant uniform look.' 
        },
        patient_benefit: { 
            ar: 'حماية وتصحيح يومي للتجاعيد يغني عن كريم الأساس، مع لمسة نهائية طبيعية تخفي العيوب فوراً.', 
            en: 'Daily protection and wrinkle correction replacing foundation, with a natural finish that instantly hides imperfections.' 
        },
        active_ingredients: [
            { name: 'Mineral Iron Oxides', concentration: 'High | عالي', role: { ar: 'توفير التغطية وصد الضوء الأزرق.', en: 'Providing coverage and blocking Blue Light.' } },
            { name: 'LHA', concentration: 'Exfoliating | مقشر', role: { ar: 'تنعيم نسيج الجلد السطحي.', en: 'Smoothing surface skin texture.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً (يومياً).', en: 'Morning (Daily).' },
        step_in_routine: { ar: 'خطوة الحماية والتغطية.', en: 'Protection and coverage step.' },
        routine_step_number: 4,
        application: { ar: 'يوزع بالتساوي بالتربيت لتجنب التكتل.', en: 'Distribute evenly with patting to avoid pilling.' },
        layering: { 
            do_not_mix_with: { ar: ['كريمات الأساس الثقيلة جداً.'], en: ['Very heavy foundations.'] }, 
            best_mixed_with: { ar: ['هيالو B5 سيروم.'], en: ['Hyalu B5 Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة غير موحدة اللون، علامات الشيخوخة، والاحتياج لتغطية خفيفة.', en: 'Uneven skin tone, aging signs, and need for light coverage.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مناسب لدرجات البشرة الحنطية والقمحية.', en: 'Suitable for medium and olive skin tones.' }
    }
});

// [43] ANTHELIOS UVMUNE 400 OIL CONTROL GEL-CREAM SPF 50+ (Clear)
deepProductsList.push({
    id: 'lrp_anthelios_uvmune_oil_control', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس يو في ميون 400 (للتحكم باللمعان)', en: 'Anthelios UVMune 400 Oil Control Gel-Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم أقوى فلتر <span class="glossary-term" onclick="openGlossary(\'uvmune_400\')">Mexoryl 400</span> ضد الأشعة الطويلة جداً، مدمجاً بتقنية <span class="glossary-term" onclick="openGlossary(\'airlicium\')">Airlicium</span> للتحكم البيولوجي في إفراز الدهون واللمعان.', 
            en: 'Features the strongest <span class="glossary-term" onclick="openGlossary(\'uvmune_400\')">Mexoryl 400</span> filter against ultra-long UVA, combined with <span class="glossary-term" onclick="openGlossary(\'airlicium\')">Airlicium</span> for biological sebum and shine control.' 
        },
        patient_benefit: { 
            ar: 'حماية مطلقة بلمسة جافة (Dry-touch) تدوم 12 ساعة، لا يترك أي أثر دهني أو أبيض، ومقاوم جداً للماء والعرق.', 
            en: 'Absolute protection with a 12h Dry-touch finish, leaves no greasy or white residue, and is highly water/sweat resistant.' 
        },
        active_ingredients: [
            { name: 'Mexoryl 400', concentration: 'Patented | براءة اختراع', role: { ar: 'حماية من أعمق الأشعة الشمسية ضرراً.', en: 'Protection against the deepest damaging UV rays.' } },
            { name: 'Airlicium™', concentration: 'Sebo-control', role: { ar: 'امتصاص فوري للزيوت والعرق.', en: 'Instant absorption of oil and sweat.' } },
            { name: 'Zinc PCA', concentration: 'Active | فعال', role: { ar: 'تنظيم إفراز الدهون وتقليل البكتيريا.', en: 'Sebo-regulation and bacteria reduction.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (يُجدد بانتظام).', en: 'Daily (Reapply regularly).' },
        step_in_routine: { ar: 'الخطوة الأخيرة للبشرة الدهنية.', en: 'Final step for oily skin.' },
        routine_step_number: 4,
        application: { ar: 'يوضع بسخاء على الوجه. قوامه الجل يمتص في ثوانٍ.', en: 'Apply generously to face. Gel texture absorbs in seconds.' },
        layering: { 
            do_not_mix_with: { ar: ['المرطبات الزيتية الكثيفة (تفسد مفعول المات).'], en: ['Heavy oily moisturizers (disrupts matte effect).'] }, 
            best_mixed_with: { ar: ['مجموعة إيفاكلار بالكامل.'], en: ['Entire Effaclar range.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية والمختلطة، المسام الواسعة، واللمعان الزائد تحت الشمس.', en: 'Oily and combination skin, enlarged pores, and excess shine under sun.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يسبب وخز العينين (Anti-eye stinging). خالي من العطور.', en: 'Anti-eye stinging. Fragrance-free.' }
    }
});

// [44] ANTHELIOS UVMUNE 400 OIL CONTROL TINTED SPF 50+
deepProductsList.push({
    id: 'lrp_anthelios_uvmune_oil_control_tinted', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس يو في ميون 400 الملون (للتحكم باللمعان)', en: 'Anthelios UVMune 400 Oil Control Tinted' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'نفس نسخة الـ Oil Control الشفافة مع إضافة أصباغ معدنية توفر توحيداً فورياً للون البشرة وحماية مضاعفة من التصبغات الناتجة عن الضوء المرئي.', 
            en: 'Same as clear Oil Control version with added mineral pigments for instant skin tone evening and double protection against visible light-induced pigmentation.' 
        },
        patient_benefit: { 
            ar: 'أقوى حماية في العالم للبشرة الدهنية مع تغطية طبيعية مطفية تمنع ظهور اللمعان والعيوب طوال اليوم.', 
            en: 'World\'s strongest protection for oily skin with a natural matte coverage that prevents shine and blemishes all day.' 
        },
        active_ingredients: [
            { name: 'Mexoryl 400', concentration: 'Patented | براءة اختراع', role: { ar: 'صد الأشعة فوق البنفسجية الطويلة جداً.', en: 'Blocking ultra-long UVA rays.' } },
            { name: 'Iron Oxides', concentration: 'Tinted | ملون', role: { ar: 'حماية من الضوء الأزرق وتوحيد اللون.', en: 'Blue Light protection and tone unifying.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً.', en: 'Morning.' },
        step_in_routine: { ar: 'الخطوة الأخيرة (حماية + تغطية دهنية).', en: 'Final step (Protection + oily coverage).' },
        routine_step_number: 4,
        application: { ar: 'يوضع على وجه نظيف ويوزع بسرعة.', en: 'Apply to clean face and distribute quickly.' },
        layering: { 
            do_not_mix_with: { ar: ['الزيوت الثقيلة.'], en: ['Heavy oils.'] }, 
            best_mixed_with: { ar: ['إيفاكلار مات مرطب.'], en: ['Effaclar Mat moisturizer.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية التي تعاني من آثار الحبوب واللمعان المزعج.', en: 'Oily skin with post-acne marks and annoying shine.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مقاوم للتعرق المفرط. لا يترك أثراً دهنياً.', en: 'Resistant to excessive sweating. Leaves no greasy film.' }
    }
});
// ==========================================
// 📦 بلوك رقم (14): لاروش بوزيه (السيرومات العلاجية + المنظف الفسيولوجي)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة مصطلحات جديدة للقاموس (Glossary) ---
glossaryDict['pure_vitamin_c'] = {
    title: { ar: 'فيتامين C النقي 🍊', en: 'Pure Vitamin C 🍊' },
    desc: { 
        ar: 'حمض الـ L-ascorbic بتركيز 10%، وهو الشكل الأكثر نشاطاً بيولوجياً لفيتامين سي. يعمل كمضاد أكسدة جبار، يحفز الكولاجين ويعيد النضارة الفورية للبشرة الباهتة.', 
        en: '10% L-ascorbic acid, the most biologically active form of Vitamin C. Acts as a potent antioxidant, stimulates collagen, and restores instant radiance.' 
    }
};

glossaryDict['gradual_retinol'] = {
    title: { ar: 'الريتينول ممتد المفعول ⏱️', en: 'Gradual Release Retinol ⏱️' },
    desc: { 
        ar: 'تقنية تطلق الريتينول في الجلد ببطء وتدريج، مما يسمح للبشرة الحساسة بتحمله دون حدوث تهيج أو احمرار عنيف، مع ضمان أقصى فعالية ضد التجاعيد.', 
        en: 'A technology that releases retinol into the skin slowly and steadily, allowing sensitive skin to tolerate it without irritation, ensuring maximum anti-wrinkle efficacy.' 
    }
};

glossaryDict['fragmented_hyaluronic'] = {
    title: { ar: 'حمض الهيالورونيك المجزأ 💧', en: 'Fragmented Hyaluronic Acid 💧' },
    desc: { 
        ar: 'جزيئات ذات أوزان جزيئية مختلفة؛ الجزيئات الكبيرة ترطب السطح، والمجزأة (الصغيرة) تخترق العمق لملء الخطوط الدقيقة وإعادة الحيوية (Plumping).', 
        en: 'Molecules with different molecular weights; large ones hydrate the surface, while fragmented (small) ones penetrate deep to plump fine lines.' 
    }
};

// --- 2. المنتجات العميقة الجديدة ---

// [45] LA ROCHE POSAY VITAMIN C10 SERUM
deepProductsList.push({
    id: 'lrp_vitamin_c10', brandId: 'laroche', familyId: 'anti_aging', brand: 'La Roche-Posay',
    name: { ar: 'فيتامين C10 سيروم (للنضارة والتفتيح)', en: 'Vitamin C10 Pure Vitamin C Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: '5.5 (درجة حموضة فسيولوجية)', en: '5.5 (Physiological pH)' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'pure_vitamin_c\')">فيتامين C النقي</span> بنسبة 10% لإعادة النضارة، مدمجاً مع حمض الساليسيليك لتقشير السطح بلطف، ومادة Neurosensine لضمان التحمل الكامل للبشرة الحساسة.', 
            en: 'Uses 10% <span class="glossary-term" onclick="openGlossary(\'pure_vitamin_c\')">Pure Vitamin C</span> for radiance, combined with Salicylic Acid for gentle exfoliation, and Neurosensine to ensure high tolerance for sensitive skin.' 
        },
        patient_benefit: { 
            ar: 'تفتيح فوري بنسبة 71% من أول استخدام، يحسن ملمس الجلد، ويقلل من ظهور الخطوط الدقيقة بفضل خصائصه المضادة للأكسدة.', 
            en: 'Instant 71% radiance from 1st use, improves skin texture, and reduces fine lines via potent antioxidant properties.' 
        },
        active_ingredients: [
            { name: 'Pure Vitamin C', concentration: '10%', role: { ar: 'مضاد أكسدة وتفتيح وتصحيح العيوب.', en: 'Antioxidant, brightening, and correcting imperfections.' } },
            { name: 'Salicylic Acid', concentration: 'Micro-exfoliant', role: { ar: 'فتح المسام وتنعيم سطح الجلد.', en: 'Unclogging pores and smoothing skin surface.' } },
            { name: 'Neurosensine', concentration: 'Active | فعال', role: { ar: 'تهدئة عصبية للجلد ومنع التحسس.', en: 'Neurological soothing and preventing sensitivity.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة كل صباح.', en: 'Once every morning.' },
        step_in_routine: { ar: 'سيروم مضاد للأكسدة (بعد الغسول).', en: 'Antioxidant serum (post-cleansing).' },
        routine_step_number: 2,
        application: { ar: 'توضع 3-4 قطرات على الوجه والرقبة مع تجنب منطقة العين.', en: 'Apply 3-4 drops to face and neck, avoiding the eye area.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول في نفس اللحظة.', 'المقشرات القوية.'], en: ['Retinol simultaneously.', 'Strong exfoliants.'] }, 
            best_mixed_with: { ar: ['واقي شمس (إجباري بعده).', 'هيالو B5 سيروم.'], en: ['Sunscreen (Mandatory after).', 'Hyalu B5 Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الباهتة، عدم توحد اللون، وظهور التجاعيد الأولى.', en: 'Dull skin, uneven tone, and first wrinkles.' },
        pregnancy_safe: true, sun_sensitivity: true, 
        notes: { ar: 'يتحول لونه للأصفر الغامق بمرور الوقت بسبب الأكسدة (لا يؤثر على الفعالية حتى حد معين).', en: 'May turn dark yellow over time due to oxidation (does not affect efficacy up to a certain point).' }
    }
});

// [46] LA ROCHE POSAY HYALU B5 SERUM
deepProductsList.push({
    id: 'lrp_hyalu_b5', brandId: 'laroche', familyId: 'anti_aging', brand: 'La Roche-Posay',
    name: { ar: 'هيالو B5 سيروم (لترميم وامتلاء البشرة)', en: 'Hyalu B5 Serum' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'تركيبة فريدة تجمع بين نوعين من <span class="glossary-term" onclick="openGlossary(\'fragmented_hyaluronic\')">حمض الهيالورونيك</span> لترطيب السطح والعمق، مع فيتامين B5 لترميم حاجز الجلد التالف.', 
            en: 'Unique formula combining two types of <span class="glossary-term" onclick="openGlossary(\'fragmented_hyaluronic\')">Hyaluronic Acid</span> for surface and deep hydration, with Vitamin B5 to repair damaged skin barrier.' 
        },
        patient_benefit: { 
            ar: 'يعيد امتلاء البشرة (Plumping) في 4 ساعات فقط، يقلل التجاعيد بشكل ملحوظ، ويسرع عملية ترميم الجلد بعد الجلسات التجميلية.', 
            en: 'Re-plumps skin in just 4 hours, visibly reduces wrinkles, and accelerates skin repair post-cosmetic procedures.' 
        },
        active_ingredients: [
            { name: 'Hyaluronic Acid Duo', concentration: 'Pure | نقي', role: { ar: 'ترطيب مزدوج السطح والعمق.', en: 'Dual surface and deep hydration.' } },
            { name: 'Vitamin B5 (Panthenol)', concentration: '5%', role: { ar: 'ترميم حاجز البشرة وتهدئتها.', en: 'Repairing skin barrier and soothing.' } },
            { name: 'Madecassoside', concentration: 'Active | فعال', role: { ar: 'تحفيز الكولاجين وتسريع التئام الأنسجة.', en: 'Stimulating collagen and accelerating tissue healing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'سيروم الترطيب والترميم.', en: 'Hydrating and repairing serum.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على بشرة رطبة قليلاً لزيادة الفعالية.', en: 'Apply to slightly damp skin for enhanced efficacy.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد تعارض.'], en: ['No contraindications.'] }, 
            best_mixed_with: { ar: ['جميع علاجات مكافحة الشيخوخة.'], en: ['All anti-aging treatments.'] } 
        }
    },
    precautions: {
        indications: { ar: 'فقدان مرونة الجلد، الجفاف الشديد، الخطوط الرفيعة، وما بعد الفيلر.', en: 'Loss of elasticity, severe dryness, fine lines, and post-filler.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام جل مائي منعش جداً. آمن لجميع أنواع البشرة.', en: 'Refreshing water-gel texture. Safe for all skin types.' }
    }
});

// [47] LA ROCHE POSAY RETINOL B3 SERUM
deepProductsList.push({
    id: 'lrp_retinol_b3', brandId: 'laroche', familyId: 'anti_aging', brand: 'La Roche-Posay',
    name: { ar: 'ريتينول B3 سيروم (لتجديد البشرة)', en: 'Retinol B3 Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي', en: 'Physiological' },
        mechanism: { 
            ar: 'يجمع بين الريتينول النقي و <span class="glossary-term" onclick="openGlossary(\'gradual_retinol\')">الريتينول ممتد المفعول</span> لضمان تجديد الخلايا دون تهيج، مع فيتامين B3 (نياسيناميد) لترميم الحاجز المادي.', 
            en: 'Combines pure retinol and <span class="glossary-term" onclick="openGlossary(\'gradual_retinol\')">Gradual Release Retinol</span> for cell renewal without irritation, with Vit B3 (Niacinamide) to repair the physical barrier.' 
        },
        patient_benefit: { 
            ar: 'علاج قوي للتجاعيد العميقة، يوحد لون البشرة المصبوغة، ويعطي مظهر ناعم وصحي للبشرة الحساسة.', 
            en: 'Potent treatment for deep wrinkles, evens pigmented skin tone, and provides a smooth, healthy look for sensitive skin.' 
        },
        active_ingredients: [
            { name: 'Retinol (Pure + Gradual)', concentration: '0.3%', role: { ar: 'تجديد الخلايا ومكافحة التجاعيد.', en: 'Cell renewal and anti-wrinkle.' } },
            { name: 'Vitamin B3 (Niacinamide)', concentration: 'Active | فعال', role: { ar: 'تقوية حاجز الجلد وتقليل الاحمرار.', en: 'Strengthening skin barrier and reducing redness.' } },
            { name: 'Glycerin', concentration: 'Hydrating | مرطب', role: { ar: 'منع الجفاف المصاحب للريتينول.', en: 'Preventing retinol-associated dryness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً فقط (بالتدريج).', en: 'Once daily PM only (gradually).' },
        step_in_routine: { ar: 'خطوة العلاج الليلي المكثف.', en: 'Intensive PM treatment step.' },
        routine_step_number: 2,
        application: { ar: 'يوضع 3 قطرات على وجه نظيف جاف. ابدأ بمرتين أسبوعياً.', en: 'Apply 3 drops to clean dry face. Start with twice weekly.' },
        layering: { 
            do_not_mix_with: { ar: ['أحماض التقشير (AHA/BHA) في نفس الليلة.', 'فيتامين C الصافي.'], en: ['Exfoliating acids (AHA/BHA) on the same night.', 'Pure Vitamin C.'] }, 
            best_mixed_with: { ar: ['مرطب سيكابلاست (تقنية الساندويتش).', 'واقي شمس (إلزامي صباحاً).'], en: ['Cicabio moisturizer (Sandwich method).', 'Sunscreen (Mandatory AM).'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد العميقة، تضرر البشرة من الشمس، والبقع الناتجة عن العمر.', en: 'Deep wrinkles, photo-damaged skin, and age spots.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'يُمنع استخدامه للحوامل والمرضعات تماماً.', en: 'Strictly contraindicated for pregnancy and breastfeeding.' }
    }
});

// [48] LA ROCHE POSAY PHYSIOLOGICAL FOAMING WATER
deepProductsList.push({
    id: 'lrp_physio_foaming', brandId: 'laroche', familyId: 'physiological', brand: 'La Roche-Posay',
    name: { ar: 'الرغوة الفسيولوجية المنظفة (المنظف اللطيف)', en: 'Physiological Foaming Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (مطابق تماماً للجلد)', en: '5.5 (Perfectly matches skin)' },
        mechanism: { 
            ar: 'رغوة خفيفة للغاية تعتمد على مياه لاروش بوزيه الحرارية لتنظيف البشرة الحساسة، مع الحفاظ على التوازن الفسيولوجي ومنع التهيج.', 
            en: 'Ultra-light foam based on La Roche-Posay Thermal Water to cleanse sensitive skin, maintaining physiological balance and preventing irritation.' 
        },
        patient_benefit: { 
            ar: 'تنظف المكياج والشوائب بنعومة فائقة، وتترك البشرة الحساسة مرتاحة، منتعشة، وغير مشدودة.', 
            en: 'Gently cleanses makeup and impurities, leaving sensitive skin comforted, refreshed, and non-tight.' 
        },
        active_ingredients: [
            { name: 'Thermal Spring Water', concentration: 'Base | أساسي', role: { ar: 'تهدئة الجلد ومقاومة الأكسدة.', en: 'Soothing skin and anti-oxidation.' } },
            { name: 'Micellar Surfactants', concentration: 'Ultra-mild', role: { ar: 'التقاط الأوساخ دون تجريد الجلد.', en: 'Capturing dirt without stripping skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف اللطيف).', en: 'Step 1 (Gentle Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'توضع الرغوة على كامل الوجه المبلل، تُدلك بلطف، ثم تُشطف بالماء.', en: 'Apply foam to wet face, massage gently, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف.'], en: ['Harsh scrubbing.'] }, 
            best_mixed_with: { ar: ['جميع مرطبات لاروش بوزيه.'], en: ['All La Roche-Posay moisturizers.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة، العادية، والمختلطة.', en: 'Sensitive, normal, and combination skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من الصابون، الكحول، والبارابين.', en: 'Soap, alcohol, and paraben-free.' }
    }
});
// ==========================================
// 📦 بلوك رقم (15): لاروش بوزيه (Mela B3 + Effaclar Treatments + Pediatrics)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة مصطلحات جديدة للقاموس (Glossary) ---
glossaryDict['melasyl'] = {
    title: { ar: 'مادة الميلازيل (Melasyl™) 🔬', en: 'Melasyl™ 🔬' },
    desc: { 
        ar: 'أحدث ابتكار من لوريال بعد 18 سنة من البحث. مادة متعددة براءات الاختراع تعمل على التقاط فائض الميلانين قبل أن يترك أثراً على الجلد، مما يمنع التصبغات قبل حدوثها.', 
        en: 'The latest multi-patented molecule from L\'Oreal. It catches excess melanin before it marks the skin, preventing hyperpigmentation at its earliest stage.' 
    }
};

glossaryDict['proadryn'] = {
    title: { ar: 'مركب بروادرين (Proadryn) 🛡️', en: 'Proadryn™ 🛡️' },
    desc: { 
        ar: 'مادة فعالة مهدئة تستخدم في منتجات الأطفال لتقوية الدفاعات الطبيعية للبشرة الرقيقة وحمايتها من العوامل الخارجية القاسية.', 
        en: 'A soothing active ingredient used in pediatric products to strengthen the natural defenses of delicate skin and protect it from harsh external factors.' 
    }
};

// --- 2. المنتجات العميقة الجديدة ---

// [49] LA ROCHE POSAY MELA B3 SERUM (Anti-Dark Spots)
deepProductsList.push({
    id: 'lrp_mela_b3_serum', brandId: 'laroche', familyId: 'anti_aging', brand: 'La Roche-Posay',
    name: { ar: 'ميلا B3 سيروم (علاج التصبغات المكثف)', en: 'Mela B3 Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم تقنية <span class="glossary-term" onclick="openGlossary(\'melasyl\')">Melasyl™</span> الحصرية مع 10% نياسيناميد لاستهداف التصبغات في كل مرحلة، من المنبع وحتى السطح، مع تجديد الخلايا بفضل مادة HEPES.', 
            en: 'Features exclusive <span class="glossary-term" onclick="openGlossary(\'melasyl\')">Melasyl™</span> with 10% Niacinamide to target pigmentation at every stage, while HEPES promotes cell renewal.' 
        },
        patient_benefit: { 
            ar: 'نتائج سريرية مثبتة خلال أسبوع واحد فقط؛ تفتيح للبقع الداكنة المستعصية بنسبة 98% وتوحيد شامل للون البشرة.', 
            en: 'Clinically proven results in 1 week; 98% reduction in stubborn dark spots and comprehensive skin tone evening.' 
        },
        active_ingredients: [
            { name: 'Melasyl™', concentration: 'Patented | براءة اختراع', role: { ar: 'حبس الميلانين الزائد ومنع التصبغ.', en: 'Intercepting excess melanin and preventing spots.' } },
            { name: 'Niacinamide (Vitamin B3)', concentration: '10%', role: { ar: 'تقليل الالتهاب وتفتيح اللون.', en: 'Reducing inflammation and brightening tone.' } },
            { name: 'LHA', concentration: 'Exfoliating | مقشر', role: { ar: 'تنعيم نسيج الجلد السطحي.', en: 'Smoothing surface skin texture.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'سيروم علاجي للتفتيح.', en: 'Treatment brightening serum.' },
        routine_step_number: 2,
        application: { ar: 'توضع 3-4 قطرات على الوجه والرقبة واليدين.', en: 'Apply 3-4 drops to face, neck, and hands.' },
        layering: { 
            do_not_mix_with: { ar: ['المنظفات القوية جداً.'], en: ['Very harsh cleansers.'] }, 
            best_mixed_with: { ar: ['واقي شمس Mela B3 SPF30.', 'هيالو B5 سيروم.'], en: ['Mela B3 SPF30 sunscreen.', 'Hyalu B5 Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البقع الداكنة العنيدة، الكلف، آثار الحبوب الداكنة، واللون غير الموحد.', en: 'Stubborn dark spots, melasma, post-acne marks, and uneven skin tone.' },
        pregnancy_safe: true, sun_sensitivity: true, 
        notes: { ar: 'مناسب لجميع درجات ألوان البشرة (بما فيها البشرة السمراء).', en: 'Suitable for all skin tones (including dark skin).' }
    }
});

// [50] LA ROCHE POSAY EFFACLAR A.I. (Spot Treatment)
deepProductsList.push({
    id: 'lrp_effaclar_ai', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار A.I. (مصحح الحبوب الموضعي)', en: 'Effaclar A.I. Breakout Corrector' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly Acidic' },
        mechanism: { 
            ar: 'علاج موضعي مركز يستهدف البكتيريا المسببة للحبوب ويقشر الانسداد فوراً باستخدام LHA، مع Piromtone Olamine لتعقيم المنطقة وتجنب الآثار.', 
            en: 'Concentrated spot treatment targeting acne bacteria and unclogging pores instantly with LHA, using Piroctone Olamine to sanitize and prevent marks.' 
        },
        patient_benefit: { 
            ar: 'يسرع اختفاء الحبة الحمراء الملتهبة ويمنع ترك ندبة أو بقعة داكنة مكانها.', 
            en: 'Accelerates the disappearance of inflamed red pimples and prevents scarring or dark spots.' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: 'High | عالي', role: { ar: 'تهدئة الاحمرار وإيقاف الالتهاب.', en: 'Soothing redness and halting inflammation.' } },
            { name: 'LHA', concentration: 'Keratolytic | مقشر', role: { ar: 'إزالة القشور الميتة فوق الحبة.', en: 'Removing dead scales over the pimple.' } },
            { name: 'Piroctone Olamine', concentration: 'Antimicrobial', role: { ar: 'مكافحة العدوى البكتيرية.', en: 'Combating bacterial infection.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (حتى تختفي الحبوب).', en: 'As needed (until breakouts disappear).' },
        step_in_routine: { ar: 'علاج موضعي (آخر خطوة بعد المرطب).', en: 'Targeted spot treatment (last step after moisturizer).' },
        routine_step_number: 3,
        application: { ar: 'يوضع موضعياً فقط على الحبة نفسها بلمسة بسيطة.', en: 'Apply topically only on the pimple itself with a light touch.' },
        layering: { 
            do_not_mix_with: { ar: ['توزيعه على كامل الوجه (قد يسبب جفاف).'], en: ['Applying over the entire face (may cause dryness).'] }, 
            best_mixed_with: { ar: ['إيفاكلار ديو (+).'], en: ['Effaclar Duo (+).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الحبوب الفردية، الحبوب الملتهبة الكبيرة، وبدايات ظهور البثور.', en: 'Individual breakouts, large inflamed pimples, and early-stage blemishes.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'يمكن استخدامه تحت المكياج.', en: 'Can be used under makeup.' }
    }
});

// [51] LA ROCHE POSAY EFFACLAR MAT (Anti-Shine Moisturizer)
deepProductsList.push({
    id: 'lrp_effaclar_mat', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار مات (مرطب مطفي للمسام)', en: 'Effaclar Mat Anti-Shine Face Moisturiser' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: '5.5', en: '5.5' },
        mechanism: { 
            ar: 'يعمل بتقنية (Sebulyse) التي تستهدف إنتاج الزهم من المصدر بفعالية أقوى من الزنك، مدمجة بكرات مجهرية لامتصاص اللمعان فوراً.', 
            en: 'Utilizes Sebulyse technology targeting sebum production at the source more effectively than Zinc, combined with microspheres for instant shine absorption.' 
        },
        patient_benefit: { 
            ar: 'يقلل اللمعان لمدة 8 ساعات، يقلص حجم المسام الواسعة بشكل ملحوظ، ويوفر قاعدة جافة ومثالية للمكياج.', 
            en: 'Reduces shine for 8 hours, visibly shrinks enlarged pores, and provides a dry, ideal makeup base.' 
        },
        active_ingredients: [
            { name: 'Sebulyse', concentration: 'Active | فعال', role: { ar: 'تثبيط إنتاج الدهون الزائدة.', en: 'Inhibiting excess sebum production.' } },
            { name: 'Perlite', concentration: 'High | عالي', role: { ar: 'امتصاص العرق والدهون السطحية.', en: 'Absorbing sweat and surface sebum.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'مرطب يومي للبشرة الدهنية.', en: 'Daily moisturizer for oily skin.' },
        routine_step_number: 3,
        application: { ar: 'يوزع على كامل الوجه مع تجنب محيط العين.', en: 'Distribute over the entire face, avoiding the eye contour.' },
        layering: { 
            do_not_mix_with: { ar: ['المرطبات الثقيلة.'], en: ['Heavy moisturizers.'] }, 
            best_mixed_with: { ar: ['أنثيليوس يو في ميون Oil Control.'], en: ['Anthelios UVMune Oil Control.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة اللمعان، المسام الواسعة، والبشرة الدهنية الحساسة.', en: 'Oily skin with excess shine, enlarged pores, and sensitive oily skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالٍ من الزيوت (Oil-free) بلمسة نهائية بودرية.', en: 'Oil-free with a powdery finish.' }
    }
});

// [52] LA ROCHE POSAY ANTHELIOS DERMO-PEDIATRICS MILK SPF 50+
deepProductsList.push({
    id: 'lrp_anthelios_kids_milk', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس ديرمو-بيدياتريكس (حليب الأطفال)', en: 'Anthelios Dermo-Pediatrics Invisible Kids Milk SPF50+' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن لجلد الطفل', en: 'Balanced for kid\'s skin' },
        mechanism: { 
            ar: 'حماية معززة ضد أشعة UVA/UVB باستخدام فلاتر Netlock التي تخلق شبكة واقية قوية جداً وغير مرئية، مع ترطيب غني لجلد الطفل الرقيق.', 
            en: 'Enhanced UVA/UVB protection using Netlock filters that create an ultra-strong invisible shield, with rich hydration for delicate infant skin.' 
        },
        patient_benefit: { 
            ar: 'أمان تام لبشرة الأطفال؛ مقاوم جداً للماء والعرق والرمال، ولا يسبب أي تحسس.', 
            en: 'Complete safety for children\'s skin; highly resistant to water, sweat, and sand, causing zero irritation.' 
        },
        active_ingredients: [
            { name: 'Netlock Technology', concentration: 'Patented | براءة اختراع', role: { ar: 'تثبيت الفلاتر في غشاء واقٍ غير مرئي.', en: 'Anchoring filters in an invisible protective film.' } },
            { name: 'Shea Butter', concentration: 'Nourishing | مغذي', role: { ar: 'ترطيب وحماية حاجز جلد الطفل.', en: 'Hydrating and protecting baby\'s skin barrier.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'قبل التعرض للشمس ويُجدد كل ساعتين.', en: 'Before sun exposure, reapply every 2 hours.' },
        step_in_routine: { ar: 'حماية شمس للأطفال.', en: 'Sun protection for kids.' },
        routine_step_number: 4,
        application: { ar: 'يوزع على الوجه والجسم. قوامه حليبي يمتص دون أثر أبيض.', en: 'Distribute over face and body. Milky texture absorbs without white cast.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم سيكابلاست (بعد الشمس إذا حدث احمرار).'], en: ['Cicaplast Baume (after sun if redness occurs).'] } 
        }
    },
    precautions: {
        indications: { ar: 'بشرة الرضع والأطفال الحساسة، والبشرة المعرضة للتحسس من الشمس.', en: 'Sensitive infant/children skin and sun-allergic skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من العطور والبارابين. تم اختباره تحت إشراف أطباء الأطفال والجلدية.', en: 'Fragrance and paraben-free. Pediatric and dermatologically tested.' }
    }
});
// ==========================================
// 📦 بلوك رقم (16): لاروش بوزيه (Pigmentclar + Hydraphase + Cicaplast Hands)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة مصطلحات جديدة للقاموس (Glossary) ---
glossaryDict['phe_resorcinol'] = {
    title: { ar: 'فينيل إيثيل ريزورسينول (PHE) 🧪', en: 'PHE-Resorcinol 🧪' },
    desc: { 
        ar: 'مكون جبار لتفتيح البشرة، أثبتت الدراسات السريرية أنه أقوى بـ 100 مرة من حمض الكوجيك في تثبيط إنظيم التيروزيناز المسؤول عن إنتاج الميلانين.', 
        en: 'A powerful skin brightening ingredient, clinically proven to be 100 times more potent than Kojic Acid in inhibiting the tyrosinase enzyme responsible for melanin production.' 
    }
};

glossaryDict['green_tech_hyaluronic'] = {
    title: { ar: 'تكنولوجيا التخمير الحيوي 🌿', en: 'Bio-fermentation Tech 🌿' },
    desc: { 
        ar: 'تقنية "خضراء" تُستخدم لاستخراج حمض الهيالورونيك النقي من السكريات النباتية، مما يضمن درجة نقاء عالية جداً وامتصاصاً أفضل داخل طبقات الجلد.', 
        en: 'A "Green Technology" used to extract pure Hyaluronic Acid from plant sugars, ensuring ultra-high purity and better absorption within skin layers.' 
    }
};

// --- 2. المنتجات العميقة الجديدة ---

// [53] LA ROCHE POSAY PIGMENTCLAR SERUM (Anti-Dark Spot)
deepProductsList.push({
    id: 'lrp_pigmentclar_serum', brandId: 'laroche', familyId: 'anti_aging', brand: 'La Roche-Posay',
    name: { ar: 'بيجمنتكلار سيروم (مصحح التصبغات)', en: 'Pigmentclar Anti-Dark Spot Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يوفر فعالية طويلة الأمد ضد التصبغات بفضل مركب (PHE-Resorcinol + Ginkgo + Ferulic Acid)، الذي يثبط الميلانين ويقشر البقع السطحية بلطف بفضل LHA.', 
            en: 'Provides long-lasting efficacy against spots via (PHE-Resorcinol + Ginkgo + Ferulic Acid) complex, inhibiting melanin and gently exfoliating surface spots with LHA.' 
        },
        patient_benefit: { 
            ar: 'يوحد لون البشرة بشكل واضح، ويحافظ على النتائج لمدة تصل إلى 3 أسابيع بعد التوقف عن الاستخدام، مما يضمن عدم عودة البقع بسرعة.', 
            en: 'Visibly evens skin tone and maintains results for up to 3 weeks after discontinuation, preventing quick relapse of dark spots.' 
        },
        active_ingredients: [
            { name: 'PHE-Resorcinol', concentration: 'Concentrated | مركز', role: { ar: 'تثبيط قوي لإنتاج الصبغة.', en: 'Potent pigment production inhibition.' } },
            { name: 'LHA', concentration: 'Micro-exfoliant', role: { ar: 'إزالة الخلايا المصبوغة السطحية.', en: 'Removing superficial pigmented cells.' } },
            { name: 'Ferulic Acid', concentration: 'Antioxidant', role: { ar: 'حماية الخلايا من الإجهاد التأكسدي.', en: 'Protecting cells from oxidative stress.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily PM.' },
        step_in_routine: { ar: 'سيروم علاجي للتصبغات.', en: 'Brightening treatment serum.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على كامل الوجه والرقبة.', en: 'Apply to entire face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول القوي (لتجنب التهيج).'], en: ['Strong Retinol (to avoid irritation).'] }, 
            best_mixed_with: { ar: ['واقي شمس (إلزامي صباحاً).', 'ميلا B3 (لنتائج أقوى).'], en: ['Sunscreen (Mandatory AM).', 'Mela B3 (for enhanced results).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البقع الداكنة، اللون الباهت، وعدم تجانس نسيج البشرة.', en: 'Dark spots, dull complexion, and uneven skin texture.' },
        pregnancy_safe: true, sun_sensitivity: true, 
        notes: { ar: 'قوام سائل منعش وخفيف جداً.', en: 'Very light and refreshing fluid texture.' }
    }
});

// [54] LA ROCHE POSAY PIGMENTCLAR EYES
deepProductsList.push({
    id: 'lrp_pigmentclar_eyes', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay', // يتبع عناية العين
    name: { ar: 'بيجمنتكلار للعين (علاج الهالات السوداء)', en: 'Pigmentclar Eyes Dark Circle Corrector' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي', en: 'Physiological' },
        mechanism: { 
            ar: 'يستهدف نوعي الهالات؛ (البنية) بتقليل الميلانين بـ PHE-Resorcinol، و(الزرقاء) بتحسين الدورة الدموية الدقيقة بفضل الكافيين، مع أداة تدليك معدنية مبردة.', 
            en: 'Targets both types of circles; (Brown) by reducing melanin via PHE-Resorcinol, and (Blue) by improving micro-circulation via Caffeine, with a cooling metal applicator.' 
        },
        patient_benefit: { 
            ar: 'يقلل مظهر الهالات السوداء بشكل ملحوظ، ويفتح محيط العين، ويخفف الانتفاخات الصباحية.', 
            en: 'Visibly reduces dark circles, brightens the eye contour, and eases morning puffiness.' 
        },
        active_ingredients: [
            { name: 'Caffeine', concentration: 'Active | فعال', role: { ar: 'تنشيط الدورة الدموية وتقليل الاحتقان.', en: 'Stimulating circulation and decongesting.' } },
            { name: 'Light-reflecting pigments', concentration: 'Cosmetic', role: { ar: 'تفتيح فوري بصري لمحيط العين.', en: 'Instant visual brightening of eye contour.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'عناية محيط العين.', en: 'Eye contour care.' },
        routine_step_number: 2,
        application: { ar: 'استخدم الأداة المعدنية لتوزيع الكريم من الداخل للخارج.', en: 'Use the metal applicator to spread cream from inner to outer corner.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['واقي شمس أنثيليوس المخصص للعين.'], en: ['Anthelios eye-safe sunscreen.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الهالات السوداء البنية والزرقاء، العيون المتعبة، والبهتان تحت العين.', en: 'Brown and blue dark circles, tired eyes, and under-eye dullness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من العطور والبارابين. آمن لمستخدمي العدسات.', en: 'Fragrance and paraben-free. Safe for lens wearers.' }
    }
});

// [55] LA ROCHE POSAY HYDRAPHASE HA (Rich / Light)
deepProductsList.push({
    id: 'lrp_hydraphase_ha', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay', // تتبع الترطيب
    name: { ar: 'هيدرافاز HA (مرطب الهيالورونيك المكثف)', en: 'Hydraphase HA Intensive Moisturizer' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5', en: '5.5' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'green_tech_hyaluronic\')">حمض الهيالورونيك النقي</span> لغمر الخلايا بالماء، مع الحفاظ على الترطيب لمدة 72 ساعة بفضل تكنولوجيا الروابط الجزيئية.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'green_tech_hyaluronic\')">Pure Hyaluronic Acid</span> to drench cells with water, maintaining hydration for 72h via molecular bond technology.' 
        },
        patient_benefit: { 
            ar: 'إشراقة فورية للبشرة الفاقدة للحيوية، يملأ الخطوط الناتجة عن الجفاف، ويعطي ملمس مخملي ناعم.', 
            en: 'Instant radiance for tired skin, plumps dehydration lines, and provides a soft velvety texture.' 
        },
        active_ingredients: [
            { name: 'Pure Hyaluronic Acid', concentration: 'High | عالي', role: { ar: 'حبس الرطوبة الفائق.', en: 'Extreme moisture retention.' } },
            { name: 'Thermal Spring Water', concentration: 'Base', role: { ar: 'تهدئة وتلطيف الجلد.', en: 'Soothing and calming the skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'خطوة الترطيب الأساسية.', en: 'Main hydration step.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على وجه نظيف. يتوفر بقوام (Rich) للجافة و (Light) للمختلطة.', en: 'Apply to clean face. Available in (Rich) for dry and (Light) for combination skin.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم هيالو B5.'], en: ['Hyalu B5 Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الفاقدة للماء (Dehydrated)، البشرة الباهتة، والخطوط الرفيعة.', en: 'Dehydrated skin, dull complexion, and fine lines.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'عبوة بمضخة (Pump) تحافظ على نقاء التركيبة.', en: 'Pump bottle preserves formula purity.' }
    }
});

// [56] LA ROCHE POSAY CICAPLAST MAINS (Repairing Hand Cream)
deepProductsList.push({
    id: 'lrp_cicaplast_mains', brandId: 'laroche', familyId: 'cicaplast', brand: 'La Roche-Posay',
    name: { ar: 'سيكابلاست لليدين (حماية وترميم)', en: 'Cicaplast Mains (Hand Cream)' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يخلق حاجزاً واقياً غير مرئي (Glove-like effect) بتركيز 4% نياسيناميد و 30% جليسرين، مما يسمح بمزاولة العمل اليدوي فور الاستخدام.', 
            en: 'Creates an invisible protective barrier (Glove-like effect) with 4% Niacinamide and 30% Glycerin, allowing manual work immediately after use.' 
        },
        patient_benefit: { 
            ar: 'يهدئ الأيدي المتضررة والمجهدة من العمل، يرمم التشققات فوراً، ومقاوم للغسل المتكرر.', 
            en: 'Soothes damaged, overworked hands, instantly repairs cracks, and is resistant to frequent washing.' 
        },
        active_ingredients: [
            { name: 'Glycerin', concentration: '30%', role: { ar: 'حماية وتغليف الجلد لمنع الجفاف.', en: 'Protecting and coating skin to prevent dryness.' } },
            { name: 'Niacinamide', concentration: '4%', role: { ar: 'تقليل الالتهاب وتسريع الترميم.', en: 'Reducing inflammation and accelerating repair.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (متكرر).', en: 'As needed (frequent).' },
        step_in_routine: { ar: 'عناية باليدين.', en: 'Hand care.' },
        routine_step_number: 3,
        application: { ar: 'يدلك على اليدين حتى الامتصاص.', en: 'Massage onto hands until absorbed.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'الأيدي المتشققة، جفاف الأطباء (غسيل متكرر)، والأكزيما اليدوية.', en: 'Cracked hands, medical professional dryness (frequent washing), and hand eczema.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'ملمس غير دهني وغير لزج تماماً. سريع الامتصاص.', en: 'Completely non-greasy and non-sticky. Fast absorbing.' }
    }
});
