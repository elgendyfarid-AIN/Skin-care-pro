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
