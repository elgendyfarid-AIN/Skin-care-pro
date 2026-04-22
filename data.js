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
