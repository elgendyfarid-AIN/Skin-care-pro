// ==========================================
// 🏥 Skin Care Pro - Clinical Database
// 🟦 Brand: La Roche-Posay (laroche_data.js)
// ==========================================

// تهيئة المصفوفات بطريقة تدعم وجود ملفات متعددة (Multiple Files Support)
window.brandsList = window.brandsList || [];
window.deepProductsList = window.deepProductsList || [];
window.glossaryDict = window.glossaryDict || {};

// ==========================================
// 📚 1. القاموس الطبي (Glossary) - La Roche-Posay
// ==========================================

window.glossaryDict['c_acnes'] = {
    title: { ar: 'بكتيريا C.acnes 🦠', en: 'C.acnes Bacteria 🦠' },
    desc: { 
        ar: 'البكتيريا الرئيسية المسببة لحب الشباب. تعيش داخل المسام وتتغذى على الإفرازات الدهنية، مما يسبب الالتهاب والاحمرار.', 
        en: 'The primary bacteria responsible for acne. It lives inside the pores and feeds on sebum, causing inflammation.' 
    }
};

window.glossaryDict['biofilms'] = {
    title: { ar: 'الأغشية الحيوية (Biofilms) 🛡️', en: 'Biofilms 🛡️' },
    desc: { 
        ar: 'درع واقي تبنيه البكتيريا حول نفسها لحماية نفسها من العلاجات والمضادات. تكسير هذا الدرع يعني القضاء على الحبوب من جذورها.', 
        en: 'A protective shield built by bacteria to defend against treatments. Breaking this shield eliminates breakouts from the root.' 
    }
};

window.glossaryDict['pih'] = {
    title: { ar: 'التصبغات (PIH) 🟤', en: 'PIH (Hyperpigmentation) 🟤' },
    desc: { 
        ar: 'البقع الداكنة أو البنية التي تتركها الحبة بعد أن تجف وتشفى، وتحدث نتيجة زيادة إنتاج الميلانين بسبب الالتهاب.', 
        en: 'Post-Inflammatory Hyperpigmentation: The dark or brown spots left behind after a pimple heals, caused by excess melanin production.' 
    }
};

window.glossaryDict['lha'] = {
    title: { ar: 'حمض LHA 🧪', en: 'LHA Acid 🧪' },
    desc: { 
        ar: 'مُقشر مشتق من حمض الساليسيليك، لكنه ألطف بكثير. يتميز بأنه "محب للدهون" فيخترق المسام ببطء لتنظيفها من الداخل دون تهيج.', 
        en: 'Lipo-Hydroxy Acid: A derivative of Salicylic Acid, but much gentler. Being lipophilic (fat-loving), it slowly penetrates and deeply cleanses pores without irritation.' 
    }
};

window.glossaryDict['keratolytic'] = {
    title: { ar: 'تحلل القرنية (Keratolytic) 🧹', en: 'Keratolytic Action 🧹' },
    desc: { 
        ar: 'عملية إذابة وتقشير الطبقة الخارجية الميتة من الجلد (الكيراتين)، مما يساعد في فتح المسام المسدودة وتنعيم ملمس البشرة.', 
        en: 'The process of dissolving and exfoliating the dead outer layer of the skin (keratin), which helps unclog pores and smooth skin texture.' 
    }
};

window.glossaryDict['aha_bha'] = {
    title: { ar: 'أحماض AHA و BHA 💧', en: 'AHA & BHA Acids 💧' },
    desc: { 
        ar: 'أحماض ألفا هيدروكسي (AHA) تقشر السطح وتوحد اللون، بينما أحماض بيتا هيدروكسي (BHA) تذوب في الدهون لتنظيف المسام من الداخل.', 
        en: 'Alpha Hydroxy Acids (AHA) exfoliate the surface and even tone, while Beta Hydroxy Acids (BHA) are oil-soluble to deep-clean pores.' 
    }
};

window.glossaryDict['microbiome_science'] = {
    title: { ar: 'علم الميكروبيوم 🧫', en: 'Microbiome Science 🧫' },
    desc: { 
        ar: 'توازن البكتيريا النافعة على سطح الجلد. الإخلال بهذا التوازن يؤدي إلى الالتهابات، حب الشباب، أو الإكزيما.', 
        en: 'The balance of beneficial bacteria on the skin surface. Disrupting this balance leads to inflammation, acne, or eczema.' 
    }
};

window.glossaryDict['madecassoside'] = {
    title: { ar: 'ماديكاسوسيد (Madecassoside) 🌿', en: 'Madecassoside 🌿' },
    desc: { 
        ar: 'مستخلص نقي من نبتة سرة الأرض (Centella Asiatica)، يُسرع من التئام الجلد، يهدئ الالتهابات، ويُحفز تجديد الخلايا بقوة.', 
        en: 'A pure extract from Centella Asiatica that accelerates skin healing, soothes inflammation, and powerfully stimulates cell renewal.' 
    }
};

window.glossaryDict['neurosensine'] = {
    title: { ar: 'نيوروسينسين (Neurosensine) 🧠', en: 'Neurosensine 🧠' },
    desc: { 
        ar: 'ببتيد مهدئ قوي جداً، يستهدف آليات تهيج الجلد مباشرة ليقلل من الإحساس بالحكة، الحرارة، والألم في البشرة شديدة الحساسية.', 
        en: 'A highly soothing peptide that targets skin irritation mechanisms directly to reduce sensations of itching, heat, and pain in ultra-sensitive skin.' 
    }
};

window.glossaryDict['aqua_posae_filiformis'] = {
    title: { ar: 'أكوا بوزاي فيليفورميس (APF) 🧫', en: 'Aqua Posae Filiformis 🧫' },
    desc: { 
        ar: 'مكون نشط حصري من لاروش بوزيه يُزرع في مياهها الحرارية، يعمل على إعادة توازن الميكروبيوم وتقوية حاجز البشرة لمنع نوبات الجفاف الشديد.', 
        en: 'An exclusive active ingredient grown in La Roche-Posay Thermal Water, rebalances the microbiome and strengthens the skin barrier to prevent severe dryness flare-ups.' 
    }
};

window.glossaryDict['micro_m_tech'] = {
    title: { ar: 'تقنية Micro-M 🛡️', en: 'Micro-M Technology 🛡️' },
    desc: { 
        ar: 'تقنية متطورة تساعد في منع تكوين الأغشية الحيوية (Biofilms) للبكتيريا الضارة على الجلد، مما يقلل بشكل كبير من الحكة والالتهاب في حالات الإكزيما.', 
        en: 'Advanced technology that helps prevent the formation of harmful bacterial biofilms on the skin, significantly reducing itching and inflammation in eczema.' 
    }
};

window.glossaryDict['hepes'] = {
    title: { ar: 'مادة HEPES 🧹', en: 'HEPES 🧹' },
    desc: { 
        ar: 'عامل تقشير فسيولوجي يعمل على إذابة الروابط بين الخلايا الميتة بلطف شديد، مما يساعد في تنعيم البشرة الخشنة والقشرية دون تهيج.', 
        en: 'A physiological exfoliating agent that gently dissolves bonds between dead cells, helping smooth rough and scaly skin without irritation.' 
    }
};

window.glossaryDict['cellox_b3'] = {
    title: { ar: 'تقنية CELLOX-B3 ✨', en: 'CELLOX-B3 TECH™ ✨' },
    desc: { 
        ar: 'ابتكار يدمج حماية واسعة الطيف من الشمس مع مواد نشطة (نياسيناميد وفينيل إيثيل ريزورسينول) للحد من تلف الخلايا الناتج عن الأشعة والملوثات، وتصحيح التصبغات بفعالية.', 
        en: 'Innovation combining broad-spectrum sun protection with actives (Niacinamide & PHE-Resorcinol) to limit cellular damage from UV/Pollution and effectively correct pigmentation.' 
    }
};

window.glossaryDict['airlicium'] = {
    title: { ar: 'جزيء إيرليسيوم (Airlicium) 🌬️', en: 'Airlicium™ 🌬️' },
    desc: { 
        ar: 'جزيء مجهري فائق الامتصاص يتكون من 99% هواء، يمكنه امتصاص كميات هائلة من الدهون والعرق واللمعان، مما يضمن بقاء البشرة مطفية (Matte) لمدة 12 ساعة.', 
        en: 'An ultra-absorbing micro-molecule consisting of 99% air, capable of absorbing massive amounts of sebum, sweat, and shine, ensuring 12h matte skin.' 
    }
};

window.glossaryDict['pure_vitamin_c'] = {
    title: { ar: 'فيتامين C النقي 🍊', en: 'Pure Vitamin C 🍊' },
    desc: { 
        ar: 'حمض الـ L-ascorbic بتركيز 10%، وهو الشكل الأكثر نشاطاً بيولوجياً لفيتامين سي. يعمل كمضاد أكسدة جبار، يحفز الكولاجين ويعيد النضارة الفورية للبشرة الباهتة.', 
        en: '10% L-ascorbic acid, the most biologically active form of Vitamin C. Acts as a potent antioxidant, stimulates collagen, and restores instant radiance.' 
    }
};

window.glossaryDict['gradual_retinol'] = {
    title: { ar: 'الريتينول ممتد المفعول ⏱️', en: 'Gradual Release Retinol ⏱️' },
    desc: { 
        ar: 'تقنية تطلق الريتينول في الجلد ببطء وتدريج، مما يسمح للبشرة الحساسة بتحمله دون حدوث تهيج أو احمرار عنيف، مع ضمان أقصى فعالية ضد التجاعيد.', 
        en: 'A technology that releases retinol into the skin slowly and steadily, allowing sensitive skin to tolerate it without irritation, ensuring maximum anti-wrinkle efficacy.' 
    }
};

window.glossaryDict['fragmented_hyaluronic'] = {
    title: { ar: 'حمض الهيالورونيك المجزأ 💧', en: 'Fragmented Hyaluronic Acid 💧' },
    desc: { 
        ar: 'جزيئات ذات أوزان جزيئية مختلفة؛ الجزيئات الكبيرة ترطب السطح، والمجزأة (الصغيرة) تخترق العمق لملء الخطوط الدقيقة وإعادة الحيوية (Plumping).', 
        en: 'Molecules with different molecular weights; large ones hydrate the surface, while fragmented (small) ones penetrate deep to plump fine lines.' 
    }
};

window.glossaryDict['melasyl'] = {
    title: { ar: 'مادة الميلازيل (Melasyl™) 🔬', en: 'Melasyl™ 🔬' },
    desc: { 
        ar: 'أحدث ابتكار من لوريال بعد 18 سنة من البحث. مادة متعددة براءات الاختراع تعمل على التقاط فائض الميلانين قبل أن يترك أثراً على الجلد، مما يمنع التصبغات قبل حدوثها.', 
        en: 'The latest multi-patented molecule from L\'Oreal. It catches excess melanin before it marks the skin, preventing hyperpigmentation at its earliest stage.' 
    }
};

window.glossaryDict['proadryn'] = {
    title: { ar: 'مركب بروادرين (Proadryn) 🛡️', en: 'Proadryn™ 🛡️' },
    desc: { 
        ar: 'مادة فعالة مهدئة تستخدم في منتجات الأطفال لتقوية الدفاعات الطبيعية للبشرة الرقيقة وحمايتها من العوامل الخارجية القاسية.', 
        en: 'A soothing active ingredient used in pediatric products to strengthen the natural defenses of delicate skin and protect it from harsh external factors.' 
    }
};

window.glossaryDict['phe_resorcinol'] = {
    title: { ar: 'فينيل إيثيل ريزورسينول (PHE) 🧪', en: 'PHE-Resorcinol 🧪' },
    desc: { 
        ar: 'مكون جبار لتفتيح البشرة، أثبتت الدراسات السريرية أنه أقوى بـ 100 مرة من حمض الكوجيك في تثبيط إنظيم التيروزيناز المسؤول عن إنتاج الميلانين.', 
        en: 'A powerful skin brightening ingredient, clinically proven to be 100 times more potent than Kojic Acid in inhibiting the tyrosinase enzyme responsible for melanin production.' 
    }
};

window.glossaryDict['green_tech_hyaluronic'] = {
    title: { ar: 'تكنولوجيا التخمير الحيوي 🌿', en: 'Bio-fermentation Tech 🌿' },
    desc: { 
        ar: 'تقنية "خضراء" تُستخدم لاستخراج حمض الهيالورونيك النقي من السكريات النباتية، مما يضمن درجة نقاء عالية جداً وامتصاصاً أفضل داخل طبقات الجلد.', 
        en: 'A "Green Technology" used to extract pure Hyaluronic Acid from plant sugars, ensuring ultra-high purity and better absorption within skin layers.' 
    }
};

window.glossaryDict['uvmune_400'] = {
    title: { ar: 'ميكسوريل 400 (Mexoryl 400) ☀️', en: 'Mexoryl 400 ☀️' },
    desc: { 
        ar: 'أحدث وأقوى فلتر شمسي في العالم من ابتكار لوريال، وهو الوحيد القادر على حجب أشعة UVA الطويلة جداً (حتى 400 نانومتر) التي تخترق الجلد بعمق وتسبب السرطانات والتجاعيد.', 
        en: 'The most advanced UV filter globally, capable of blocking ultra-long UVA rays (up to 400nm) that penetrate deep into the skin, causing DNA damage and premature aging.' 
    }
};

window.glossaryDict['mp_lipids'] = {
    title: { ar: 'ليبيدات MP (MP-Lipids) 🧬', en: 'MP-Lipids 🧬' },
    desc: { 
        ar: 'جيل جديد من الليبيدات القادرة على محاكاة دهون الجلد الطبيعية، لترميم حاجز البشرة المتهالك وإعادة بناء الغشاء الحامي للجلد من الداخل.', 
        en: 'A new generation of biomimetic lipids that repair the skin barrier and rebuild the protective film from within.' 
    }
};


// ==========================================
// 🏢 2. العلامات التجارية والعائلات لـ La Roche-Posay
// ==========================================

window.brandsList.push({
    id: 'laroche', name: 'La Roche-Posay',
    families: [
        { id: 'effaclar', name: { ar: 'إيفاكلار (للبشرة الدهنية وحب الشباب)', en: 'Effaclar (Oily & Acne-Prone)' } },
        { id: 'cicaplast', name: { ar: 'سيكابلاست (ترميم وحماية الحاجز)', en: 'Cicaplast (Barrier Repair)' } },
        { id: 'toleriane', name: { ar: 'توليان (للبشرة الحساسة والمتحسسة)', en: 'Toleriane (Sensitive & Allergy-Prone)' } },
        { id: 'lipikar', name: { ar: 'ليبيكار (للجفاف الشديد والإكزيما)', en: 'Lipikar (Severe Dryness & Eczema)' } },
        { id: 'anthelios', name: { ar: 'أنثيليوس (حماية فائقة من الشمس)', en: 'Anthelios (High Sun Protection)' } },
        { id: 'anti_aging', name: { ar: 'مضادات الشيخوخة والسيرومات', en: 'Anti-Aging & Serums' } },
        { id: 'physiological', name: { ar: 'المنظفات الفسيولوجية', en: 'Physiological Cleansers' } }
    ]
});


// ==========================================
// 🧪 3. المنتجات السريرية لـ La Roche-Posay (من 1 إلى 10)
// ==========================================

// [1] EFFACLAR DUO (+)
window.deepProductsList.push({
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
        routine_step_number: 2,
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
window.deepProductsList.push({
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
            { name: 'Zinc PCA', concentration: 'Active | فعال', role: { ar: 'ينظم إفراز الزهم وله خصائص مضادة للبكتيريا.', en: 'Regulates sebum production with antibacterial properties.' } },
            { name: 'Thermal Spring Water', concentration: 'Base | أساسي', role: { ar: 'مياه حرارية مهدئة ومضادة للتهيج.', en: 'Soothing and anti-irritating thermal water.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (Morning and Evening).' },
        step_in_routine: { ar: 'الخطوة 1 (التنظيف).', en: 'Step 1 (Cleansing).' },
        routine_step_number: 1,
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
window.deepProductsList.push({
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
        routine_step_number: 2,
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
window.deepProductsList.push({
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
            { name: 'Aqua Posae Filiformis', concentration: 'Active | فعال', role: { ar: 'إعادة توازن البكتيريا النافعة.', en: 'Rebalancing beneficial bacteria.' } },
            { name: 'Niacinamide + Panthenol', concentration: 'High | عالي', role: { ar: 'ترميم وتقليل الالتهاب.', en: 'Repair and inflammation reduction.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'الترطيب.', en: 'Moisturization.' },
        routine_step_number: 3,
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
window.deepProductsList.push({
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
            { name: 'Zinc PCA', concentration: 'Active | فعال', role: { ar: 'تقليل اللمعان والبكتيريا.', en: 'Reducing shine and bacteria.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً.', en: 'Once daily.' },
        step_in_routine: { ar: 'التنظيف العلاجي.', en: 'Therapeutic Cleansing.' },
        routine_step_number: 1,
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

// [6] سيكابلاست بوم بـ 5 بلس (Cicaplast Baume B5+)
window.deepProductsList.push({
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
        routine_step_number: 3,
        application: { ar: 'توضع طبقة سميكة على بشرة نظيفة وجافة. يمكن وضعه على الجسم، الوجه، والشفاه.', en: 'Apply a generous layer to clean, dry skin. Can be applied to body, face, and lips.' },
        layering: { 
            do_not_mix_with: { ar: ['يُمنع وضعه على الجروح المفتوحة التي تنزف بقوة.'], en: ['Do not apply on heavily bleeding, open wounds.'] }, 
            best_mixed_with: { ar: ['غسول لطيف', 'فوق الريتينول أو المقشرات لتقليل التهيج (الساندويتش).'], en: ['Gentle cleansers', 'Over retinol or exfoliants to reduce irritation (Sandwich method).'] } 
        }
    },
    precautions: {
        indications: { ar: 'بعد جلسات الليزر، التقشير الكيميائي، طفح الحفاض، التشققات الشتوية، الإكزيما الجافة.', en: 'Post-laser, chemical peels, diaper rash, winter cracks, dry eczema.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن تماماً للرضع والأطفال. لا يترك أثراً أبيض واضحاً بفضل النسخة المحدثة (+).', en: 'Completely safe for babies and children. Leaves no obvious white cast thanks to the new (+) formula.' }
    }
});

// [7] توليان ديرماليرجو كريم (Toleriane Dermallergo)
window.deepProductsList.push({
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
        routine_step_number: 3,
        application: { ar: 'يوزع بلطف على الوجه والرقبة ومحيط العينين.', en: 'Gently distribute over face, neck, and eye contour.' },
        layering: { 
            do_not_mix_with: { ar: ['المنتجات التي تحتوي على عطور أو كحول (لتجنب انتكاس البشرة).'], en: ['Products containing fragrance or alcohol (to avoid skin relapse).'] }, 
            best_mixed_with: { ar: ['غسول توليان ديرمو-كلينزر.'], en: ['Toleriane Dermo-Cleanser.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الحساسية، المعرضة للحساسية (Allergy-prone)، البشرة التي لا تتحمل مستحضرات التجميل العادية.', en: 'Ultra-sensitive skin, allergy-prone skin, intolerant skin to standard cosmetics.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'عبوة معقمة 100% (Air-tight) تمنع دخول الهواء والبكتيريا. 0% عطور وكحول.', en: '100% Air-tight sterile packaging to prevent air and bacteria entry. 0% fragrance and alcohol.' }
    }
});

// [8] توليان غسول ديرمو-كلينزر الحليبي
window.deepProductsList.push({
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
        routine_step_number: 1,
        application: { ar: 'يُدلك بأطراف الأصابع بحركات دائرية، ثم يُمسح برفق بقطنة دون الحاجة للشطف بالماء (أو يُشطف حسب الرغبة).', en: 'Massage with fingertips in circular motions, then wipe gently with a cotton pad without rinsing (or rinse if preferred).' },
        layering: { 
            do_not_mix_with: { ar: ['فرش التنظيف الخشنة.'], en: ['Harsh physical cleansing brushes.'] }, 
            best_mixed_with: { ar: ['توليان ديرماليرجو كريم.'], en: ['Toleriane Dermallergo Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة التي لا تتحمل الغسول الرغوي، بعد الإجراءات التجميلية القاسية، البشرة المعرضة للوردية والاحمرار.', en: 'Skin intolerant to foaming gels, post-harsh cosmetic procedures, rosacea-prone skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مريح جداً لأنه لا يحتاج إلى ماء للشطف (مفيد في حالات الحساسية من مياه الصنبور).', en: 'Very comforting as it does not require water to rinse (useful for tap water sensitivity).' }
    }
});

// [9] أنثيليوس UVMune 400 (سائل غير مرئي) - [تم تصحيح العائلة إلى anthelios]
window.deepProductsList.push({
    id: 'lrp_anthelios_uvmune', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay', 
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

// [10] سيكابلاست لشفاه (Cicaplast Levres)
window.deepProductsList.push({
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
// ==========================================
// 🧪 تابع المنتجات السريرية لـ La Roche-Posay (من 11 إلى 30)
// ==========================================

// [11] LA ROCHE POSAY LIPIKAR SYNDET AP+ CREAM WASH
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
        notes: { ar: 'آمن لحديثي الولادة (Pediatric safe).', en: 'Safe for newborns.' }
    }
});

// [12] LA ROCHE POSAY LIPIKAR LAIT UREA 5+ SHEA BUTTER
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

// [13] LA ROCHE POSAY LIPIKAR BAUME AP+M
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

// [14] LA ROCHE POSAY TOLERIANE DERMALLERGO EYE CREAM
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

// [15] ANTHELIOS AGE CORRECT SPF 50 (Invisible / Daily Light Cream)
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

// [16] ANTHELIOS AGE CORRECT SPF 50 TINTED
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

// [17] ANTHELIOS UVMUNE 400 OIL CONTROL GEL-CREAM SPF 50+ (Clear)
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

// [18] ANTHELIOS UVMUNE 400 OIL CONTROL TINTED SPF 50+
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

// [19] LA ROCHE POSAY VITAMIN C10 SERUM
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

// [20] LA ROCHE POSAY HYALU B5 SERUM
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

// [21] LA ROCHE POSAY RETINOL B3 SERUM
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

// [22] LA ROCHE POSAY PHYSIOLOGICAL FOAMING WATER
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

// [23] LA ROCHE POSAY MELA B3 SERUM (Anti-Dark Spots)
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

// [24] LA ROCHE POSAY EFFACLAR A.I. (Spot Treatment)
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

// [25] LA ROCHE POSAY EFFACLAR MAT (Anti-Shine Moisturizer)
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

// [26] LA ROCHE POSAY ANTHELIOS DERMO-PEDIATRICS MILK SPF 50+
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

// [27] LA ROCHE POSAY PIGMENTCLAR SERUM (Anti-Dark Spot)
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

// [28] LA ROCHE POSAY PIGMENTCLAR EYES
deepProductsList.push({
    id: 'lrp_pigmentclar_eyes', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay', 
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

// [29] LA ROCHE POSAY HYDRAPHASE HA (Rich / Light)
deepProductsList.push({
    id: 'lrp_hydraphase_ha', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay', 
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

// [30] LA ROCHE POSAY CICAPLAST MAINS (Repairing Hand Cream)
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
// ==========================================
// 🏢 4. العلامات التجارية والعائلات لـ Bioderma
// ==========================================

brandsList.push({
    id: 'bioderma', name: 'Bioderma',
    families: [
        { id: 'sensibio', name: { ar: 'سينسيبيو (للبشرة الحساسة والوردية)', en: 'Sensibio (Sensitive & Rosacea)' } },
        { id: 'sebium', name: { ar: 'سيبيوم (للبشرة الدهنية والمعرضة للحبوب)', en: 'Sebium (Oily & Acne-Prone)' } },
        { id: 'atoderm', name: { ar: 'أتوديرم (للجفاف الشديد والإكزيما)', en: 'Atoderm (Very Dry & Atopic Skin)' } },
        { id: 'photoderm', name: { ar: 'فوتوديرم (للحماية من الشمس)', en: 'Photoderm (Sun Protection)' } },
        { id: 'hydrabio', name: { ar: 'هيدرابيو (للبشرة الفاقدة للماء)', en: 'Hydrabio (Dehydrated Skin)' } },
        { id: 'pigmentbio', name: { ar: 'بيجمنت بيو (لعلاج التصبغات)', en: 'Pigmentbio (Hyperpigmentation)' } },
        { id: 'cicabio', name: { ar: 'سيكابيو (لترميم الجلد المتضرر)', en: 'Cicabio (Damaged Skin Repair)' } },
        { id: 'node', name: { ar: 'نوديه (للعناية بفروة الرأس والشعر)', en: 'Node (Hair & Scalp Care)' } },
        { id: 'abcderm', name: { ar: 'أبِسيديرم (لعناية الأطفال والرضع)', en: 'ABCDerm (Pediatric Care)' } }
    ]
});


// ==========================================
// 🧪 5. المنتجات السريرية لـ Bioderma (من 1 إلى 15)
// ==========================================

// [1] Bioderma Sensibio H2O Micellar Water
deepProductsList.push({
    id: 'bio_sensibio_h2o', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو H2O ميسيلار', en: 'Sensibio H2O Micellar Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (درجة حموضة فسيولوجية)', en: '5.5 (Physiological pH)' },
        mechanism: { 
            ar: 'تستخدم <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">تقنية الميسيلار</span> المعلقة في ماء عالي النقاء لتنظيف البشرة من 99% من المكياج والملوثات دون المساس بالطبقة الواقية.', 
            en: 'Utilizes <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">Micellar Technology</span> suspended in highly purified water to cleanse 99% of makeup and pollution without disrupting the barrier.' 
        },
        patient_benefit: { 
            ar: 'المنظف الطبي الأول عالمياً. يزيل مكياج الوجه والعين بمسحة واحدة دون الحاجة للشطف، ويهدئ البشرة فوراً.', 
            en: 'The #1 medical cleanser globally. Removes face and eye makeup in a single wipe without rinsing, instantly soothing the skin.' 
        },
        active_ingredients: [
            { name: 'PEG-6 Caprylic/Capric Glycerides', concentration: 'Active | فعال', role: { ar: 'التقاط الشوائب والمكياج بلطف فائق.', en: 'Ultra-gentle capturing of impurities and makeup.' } },
            { name: 'Cucumber Extract', concentration: 'Pure | نقي', role: { ar: 'تقليل الاحتقان وتهدئة البشرة فوراً.', en: 'Decongests and instantly soothes the skin.' } },
            { name: 'D.A.F.™ Patent', concentration: 'Patented | براءة اختراع', role: { ar: 'رفع سقف تحمل الجلد الحساس.', en: 'Raises the tolerance threshold of sensitive skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (صباحاً ومساءً).', en: 'As needed (AM & PM).' }, 
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الجاف).', en: 'Step 1 (Dry Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'يُبلل قطن نظيف، يُمسح الوجه والعينان بلطف. لا يتطلب الشطف بالماء.', en: 'Soak a cotton pad, gently wipe face and eyes. Requires no water rinsing.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف بقطن خشن.'], en: ['Harsh rubbing with rough cotton pads.'] }, 
            best_mixed_with: { ar: ['غسول سينسيبيو (لتنظيف مزدوج).'], en: ['Sensibio Gel Moussant (for Double Cleansing).'] } 
        }
    },
    precautions: { 
        indications: { ar: 'البشرة الحساسة، المتفاعلة، إزالة مكياج العيون.', en: 'Sensitive, reactive skin, eye makeup removal.' }, 
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من العطور والكحول.', en: 'Fragrance and alcohol-free.' } 
    }
});

// [2] Bioderma Sensibio Gel Moussant
deepProductsList.push({
    id: 'bio_sensibio_gel', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو جل موسان (غسول رغوي)', en: 'Sensibio Gel Moussant' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (متوازن)', en: '5.5 (Balanced)' },
        mechanism: { 
            ar: 'ينظف بلطف باستخدام مواد تحاكي دهون الجلد الطبيعية، مما يحافظ على ترطيب الجلد مدعوماً بـ <span class="glossary-term" onclick="openGlossary(\'daf_patent\')">D.A.F.™</span>.', 
            en: 'Cleanses gently using biomimetic surfactants, preserving skin hydration supported by <span class="glossary-term" onclick="openGlossary(\'daf_patent\')">D.A.F.™</span>.' 
        },
        patient_benefit: { 
            ar: 'يزيد من ترطيب البشرة بنسبة 77% بعد أسبوعين من الاستخدام، ويمنع الشعور بشد الوجه.', 
            en: 'Boosts skin hydration by 77% after 2 weeks, preventing tight feeling.' 
        },
        active_ingredients: [
            { name: 'Coco-Glucoside & Glyceryl Oleate', concentration: 'Active | فعال', role: { ar: 'تنظيف فعال مع تعويض الدهون المفقودة.', en: 'Effective cleansing with lipid-restoring action.' } },
            { name: 'Vitamin E', concentration: 'Antioxidant | مضاد أكسدة', role: { ar: 'حماية الخلايا من الإجهاد التأكسدي.', en: 'Protects cells from oxidative stress.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' }, 
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الرطب).', en: 'Step 1 (Wet Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'يُرغى على بشرة مبللة، يُدلك بلطف، ثم يُشطف جيداً.', en: 'Lather onto wet skin, massage gently, then rinse thoroughly.' },
        layering: { 
            do_not_mix_with: { ar: ['الماء الساخن جداً.'], en: ['Very hot water.'] }, 
            best_mixed_with: { ar: ['كريمات سينسيبيو للترطيب.'], en: ['Sensibio moisturizing creams.'] } 
        }
    },
    precautions: { 
        indications: { ar: 'البشرة الحساسة جداً التي تفضل قوام الرغوة.', en: 'Ultra-sensitive skin preferring foam textures.' }, 
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من الصابون والعطور.', en: 'Soap and fragrance-free.' } 
    }
});

// [3] Bioderma Sensibio AR
deepProductsList.push({
    id: 'bio_sensibio_ar', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو AR (كريم علاج الاحمرار)', en: 'Sensibio AR Anti-Redness Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستهدف الآلية البيولوجية للاحمرار من خلال براءة اختراع <span class="glossary-term" onclick="openGlossary(\'rosactiv\')">Rosactiv</span> لتقليل تمدد الأوعية الدموية.', 
            en: 'Targets the biological mechanism of redness via <span class="glossary-term" onclick="openGlossary(\'rosactiv\')">Rosactiv™</span> patent to reduce vasodilation.' 
        },
        patient_benefit: { 
            ar: 'يقلل من حدة احمرار الوجه المستمر ويخفف الإحساس بالحرارة والوخز.', 
            en: 'Reduces continuous facial redness intensity and relieves heat/stinging sensations.' 
        },
        active_ingredients: [
            { name: 'Enoxolone & Allantoin', concentration: 'Soothing | مهدئ', role: { ar: 'تسكين فوري للحرارة.', en: 'Instant relief from local heat.' } },
            { name: 'Rosactiv™ Complex', concentration: 'Patented | براءة اختراع', role: { ar: 'تثبيط عامل VEGF.', en: 'Inhibits VEGF factor.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً.', en: 'Once or twice daily.' }, 
        step_in_routine: { ar: 'خطوة العلاج والترطيب.', en: 'Treatment and hydration step.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على وجه نظيف مع التركيز على المناطق المحمرة.', en: 'Apply to a clean face, focusing on red areas.' },
        layering: { 
            do_not_mix_with: { ar: ['المنتجات التي تحتوي على كحول.', 'المقشرات الفيزيائية.'], en: ['Products containing alcohol.', 'Physical exfoliants.'] }, 
            best_mixed_with: { ar: ['واقي شمس للوردية (Photoderm AR).'], en: ['Photoderm AR sunscreen.'] } 
        }
    },
    precautions: { 
        indications: { ar: 'الوردية (Rosacea)، الاحمرار الدائم.', en: 'Rosacea, permanent redness.' }, 
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'أساس ممتاز للمكياج.', en: 'Excellent makeup base.' } 
    }
});

// [4] Bioderma Sensibio Defensive Active Soothing Cream
deepProductsList.push({
    id: 'bio_sensibio_defensive_normal', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو ديفينسيف (كريم مهدئ نشط)', en: 'Sensibio Defensive Active Soothing Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يعمل بتقنية <span class="glossary-term" onclick="openGlossary(\'defensive_tech\')">Defensive Technology</span> التي تقوي قدرة الجلد على الدفاع عن نفسه ضد الالتهاب الناتج عن البيئة.', 
            en: 'Acts via <span class="glossary-term" onclick="openGlossary(\'defensive_tech\')">Defensive Technology</span> that strengthens the skin\'s self-defense against environmental inflammation.' 
        },
        patient_benefit: { 
            ar: 'يهدئ الوخز والشد فوراً، يمنح ترطيباً لمدة 12 ساعة، ويجعل البشرة الحساسة أقل تفاعلية.', 
            en: 'Instantly soothes tingling and tightness, provides 12-hour hydration, and makes sensitive skin less reactive.' 
        },
        active_ingredients: [
            { name: 'Carnosine + Vitamin E', concentration: 'Antioxidants | مضادات أكسدة', role: { ar: 'حماية الخلايا من الشوارد الحرة.', en: 'Protecting cells from free radicals.' } },
            { name: 'Red Sage Polyphenols', concentration: 'Purifying | منقي', role: { ar: 'الحد من فرط تفاعل النهايات العصبية.', en: 'Limiting nerve fiber hyper-reactivity.' } },
            { name: 'Tetrapeptide-10', concentration: 'Active | فعال', role: { ar: 'تقوية وظيفة حاجز البشرة المادي.', en: 'Strengthening physical skin barrier function.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'خطوة الترطيب اليومي.', en: 'Daily hydration step.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على الوجه والرقبة بعد التنظيف.', en: 'Apply to face and neck after cleansing.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد تعارض.'], en: ['No contraindications.'] }, 
            best_mixed_with: { ar: ['سينسيبيو H2O.', 'واقي شمس.'], en: ['Sensibio H2O.', 'Sunscreen.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة والمتهيجة (العادية إلى المختلطة).', en: 'Sensitive and sensitized skin (Normal to Combination).' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام خفيف ومنعش، يمتص بسرعة فائقة.', en: 'Light and refreshing texture, absorbs very quickly.' }
    }
});

// [5] Bioderma Sensibio Defensive RICH Active Soothing Cream
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
            { name: 'Carnosine', concentration: 'Active | فعال', role: { ar: 'حماية الـ DNA الخلوي.', en: 'Protecting cellular DNA.' } },
            { name: 'Palmitoyl Tetrapeptide-10', concentration: 'Concentrated | مركز', role: { ar: 'ترميم الحاجز الجلدي.', en: 'Skin barrier repair.' } },
            { name: 'Rich Emollients', concentration: 'Nourishing | مغذي', role: { ar: 'توفير الراحة للبشرة الجافة.', en: 'Providing comfort for dry skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'خطوة الترطيب والتغذية.', en: 'Hydration and nourishment step.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على وجه نظيف وجاف.', en: 'Apply to clean, dry face.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سينسيبيو زيت التنظيف.'], en: ['Sensibio Cleansing Oil.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة الجافة إلى شديدة الجفاف.', en: 'Sensitive dry to very dry skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام غني كريمي ولكن لا يترك ملمس دهني مزعج.', en: 'Rich creamy texture but non-greasy finish.' }
    }
});

// [6] Bioderma Sensibio H2O Wipes
deepProductsList.push({
    id: 'bio_sensibio_wipes', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو H2O مناديل ميسيلار', en: 'Sensibio H2O Dermatological Wipes' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (درجة حموضة فسيولوجية)', en: '5.5 (Physiological pH)' },
        mechanism: { 
            ar: 'نفس فاعلية مياه الميسيلار معبأة في مناديل قابلة للتحلل. تستخدم <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">تقنية الميسيلار</span> للشوائب، والألانتوين لتهدئة الاحتكاك.', 
            en: 'Exact efficacy of micellar water in biodegradable wipes. Uses <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">Micellar Technology</span> for impurities, with Allantoin to soothe friction.' 
        },
        patient_benefit: { 
            ar: 'حل عملي وسريع للسفر. ينظف المكياج بلطف دون الحاجة للماء.', 
            en: 'Practical on-the-go solution. Gently removes makeup without water.' 
        },
        active_ingredients: [
            { name: 'Allantoin', concentration: 'Active | فعال', role: { ar: 'يهدئ الجلد ويمنع تهيج الاحتكاك.', en: 'Soothes skin and prevents friction irritation.' } },
            { name: 'Micellar Solution', concentration: 'Infused | مُشبع', role: { ar: 'تنظيف عميق ولطيف.', en: 'Deep and gentle cleansing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة.', en: 'As needed.' },
        step_in_routine: { ar: 'التنظيف السريع.', en: 'Quick cleansing.' },
        routine_step_number: 1,
        application: { ar: 'يُمسح الوجه والعينين برفق. لا يحتاج للشطف.', en: 'Gently wipe face and eyes. No rinsing needed.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف للعينين.'], en: ['Vigorous rubbing of the eyes.'] }, 
            best_mixed_with: { ar: ['استكمال الروتين الليلي.'], en: ['Following up with night routine.'] } 
        }
    },
    precautions: {
        indications: { ar: 'إزالة المكياج السريعة، السفر، البشرة الحساسة.', en: 'Quick makeup removal, travel, sensitive skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يجب إغلاق العبوة بإحكام لمنع الجفاف.', en: 'Must tightly close the pack to prevent drying.' }
    }
});

// [7] Bioderma Sensibio H2O Eye (Biphasic)
deepProductsList.push({
    id: 'bio_sensibio_h2o_eye', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو H2O آي (مزيل مكياج العين الثنائي)', en: 'Sensibio H2O Eye (Biphasic Micellar)' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي (مطابق لدموع العين)', en: 'Physiological (matches tears)' },
        mechanism: { 
            ar: 'محلول ثنائي الطور يجمع 70% ماء ميسيلار و 30% مرحلة زيتية لإذابة المكياج المقاوم للماء فوراً، مع تقوية الرموش ببرو-فيتامين B5.', 
            en: 'Biphasic formula combining 70% micellar water and 30% oily phase to instantly dissolve waterproof makeup, strengthening lashes with Pro-vitamin B5.' 
        },
        patient_benefit: { 
            ar: 'يزيل أصعب أنواع المكياج بمسحة واحدة، ويهدئ جفن العين الحساس.', 
            en: 'Removes the toughest makeup in one wipe, and soothes sensitive eyelids.' 
        },
        active_ingredients: [
            { name: 'Pro-vitamin B5', concentration: 'Nourishing | مغذي', role: { ar: 'ترطيب محيط العين وتقوية الرموش.', en: 'Hydrating eye contour and strengthening lashes.' } },
            { name: 'Fructooligosaccharides', concentration: 'Soothing | مهدئ', role: { ar: 'تقليل التهاب الجفون الحساسة.', en: 'Reducing sensitive eyelid inflammation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة.', en: 'As needed.' },
        step_in_routine: { ar: 'تنظيف العيون.', en: 'Eye Cleansing.' },
        routine_step_number: 1,
        application: { ar: 'تُرج العبوة، يُوضع على قطنة وتُثبت على العين لثوانٍ ثم تُمسح بلطف.', en: 'Shake, apply to cotton pad, hold over eyes for seconds, wipe gently.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف للرموش.'], en: ['Harsh rubbing of eyelashes.'] }, 
            best_mixed_with: { ar: ['كريمات محيط العين.'], en: ['Eye contour creams.'] } 
        }
    },
    precautions: {
        indications: { ar: 'العيون الحساسة، المكياج المقاوم للماء.', en: 'Sensitive eyes, waterproof makeup.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره من قبل أطباء العيون.', en: 'Ophthalmologically tested.' }
    }
});

// [8] Bioderma Sebium H2O Micellar Water
deepProductsList.push({
    id: 'bio_sebium_h2o', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم H2O (محلول ميسيلار منقي)', en: 'Sebium H2O Micellar Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (فسيولوجي)', en: '5.5 (Physiological)' },
        mechanism: { 
            ar: 'يجمع بين <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">تقنية الميسيلار</span> وبراءة اختراع <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv</span> لتنظيف المكياج وتنظيم جودة الدهون.', 
            en: 'Combines <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">Micellar Technology</span> and <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv patent</span> to cleanse makeup and regulate sebum.' 
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
            best_mixed_with: { ar: ['سيبيوم جل موسان.'], en: ['Sebium Gel Moussant.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، المختلطة، والمسام الواسعة.', en: 'Oily, combination skin, and enlarged pores.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يُستخدم لإزالة مكياج العين الحساسة.', en: 'Not for sensitive eye makeup removal.' }
    }
});

// [9] Bioderma Sebium Gel Moussant
deepProductsList.push({
    id: 'bio_sebium_gel', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم جل موسان (غسول منقي)', en: 'Sebium Gel Moussant' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: '5.5 (يحافظ على توازن البشرة)', en: '5.5 (Preserves skin balance)' },
        mechanism: { 
            ar: 'ينقي البشرة بلطف ويحد من إفراز الزهم بفضل الزنك والنحاس، مع منع انسداد المسام مستقبلياً بفضل <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv</span>.', 
            en: 'Gently purifies skin and limits sebum with Zinc and Copper, preventing future pore clogging via <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv</span>.' 
        },
        patient_benefit: { 
            ar: 'ينظف المسام بعمق دون التسبب في جفاف البشرة، ويترك البشرة صافية.', 
            en: 'Deeply cleanses pores without drying the skin, leaving it clear.' 
        },
        active_ingredients: [
            { name: 'Zinc Sulfate', concentration: 'Active | فعال', role: { ar: 'ينظم إفراز الدهون ومضاد للبكتيريا.', en: 'Sebo-regulating and antibacterial.' } },
            { name: 'Copper Sulfate', concentration: 'Active | فعال', role: { ar: 'ينقي البشرة (وهو المسؤول عن اللون الأزرق).', en: 'Purifies the skin (gives the blue color).' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'التنظيف الرطب.', en: 'Wet Cleansing.' },
        routine_step_number: 1,
        application: { ar: 'يُرغى على بشرة مبللة، يُدلك بلطف، ثم يُشطف جيداً.', en: 'Lather on wet skin, massage gently, rinse thoroughly.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف.'], en: ['Harsh rubbing.'] }, 
            best_mixed_with: { ar: ['سيبيوم بور ريفاينر.'], en: ['Sebium Pore Refiner.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، المختلطة، والمعرضة لحب الشباب.', en: 'Oily, combination, and acne-prone skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يمكن استخدامه كرغوة حلاقة آمنة للرجال.', en: 'Can be used as a safe shaving foam for men.' }
    }
});

// [10] Bioderma Sebium Pore Refiner
deepProductsList.push({
    id: 'bio_sebium_pore_refiner', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم بور ريفاينر (علاج المسام الواسعة)', en: 'Sebium Pore Refiner' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن (حامضي قليلاً للتقشير)', en: 'Balanced (Slightly acidic)' },
        mechanism: { 
            ar: 'يعمل <span class="glossary-term" onclick="openGlossary(\'agaric_acid\')">حمض الأغاريك</span> كقابض للمسام، وحمض الساليسيليك على تحسين الجلد، وتحافظ <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv</span> على نقاء المسام.', 
            en: '<span class="glossary-term" onclick="openGlossary(\'agaric_acid\')">Agaric Acid</span> acts as an astringent, Salicylic acid refines skin, and <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv</span> keeps pores clear.' 
        },
        patient_benefit: { 
            ar: 'يقلص المسام الواسعة فوراً، يعطي تأثيراً مطفياً يمنع اللمعان، وينعم البشرة.', 
            en: 'Instantly shrinks enlarged pores, provides a mattifying effect, and smooths skin.' 
        },
        active_ingredients: [
            { name: 'Agaric Acid', concentration: 'Intense | مكثف', role: { ar: 'قابض قوي لشد الجلد حول المسام.', en: 'Strong astringent to tighten skin around pores.' } },
            { name: 'Salicylic Acid (BHA)', concentration: 'Active | فعال', role: { ar: 'تقشير الخلايا حول المسام.', en: 'Exfoliates cells around pores.' } },
            { name: 'Mattifying Powders', concentration: 'High | عالي', role: { ar: 'امتصاص الدهون السطحية فوراً.', en: 'Instantly absorbs surface sebum.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'قبل المرطب اليومي (أو برايمر).', en: 'Before daily moisturizer (or primer).' },
        routine_step_number: 2,
        application: { ar: 'يوزع على T-Zone للبشرة المختلطة، أو كامل الوجه للدهنية.', en: 'Apply to T-Zone for combi skin, or entire face for oily skin.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات كيميائية أخرى بنفس الوقت.'], en: ['Other chemical exfoliants simultaneously.'] }, 
            best_mixed_with: { ar: ['أفضل قاعدة قبل المكياج.'], en: ['Best makeup primer base.'] } 
        }
    },
    precautions: {
        indications: { ar: 'المسام الواسعة، البشرة الخشنة، واللمعان الزائد.', en: 'Enlarged pores, rough skin, and excess shine.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'قوام خفيف يمتص في ثوانٍ.', en: 'Ultra-light texture absorbs in seconds.' }
    }
});

// [11] Bioderma Sebium Hydra
deepProductsList.push({
    id: 'bio_sebium_hydra', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم هيدرا (مرطب معوض)', en: 'Sebium Hydra Compensating Care' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يُعتبر <span class="glossary-term" onclick="openGlossary(\'isotretinoin_companion\')">علاج مصاحب</span> أساسي؛ تعيد السيراميدات بناء الحاجز، ويخفف الإينوكسولون من الاحمرار.', 
            en: 'An essential <span class="glossary-term" onclick="openGlossary(\'isotretinoin_companion\')">Companion Care</span>; Ceramides rebuild barrier, while Enoxolone soothes redness.' 
        },
        patient_benefit: { 
            ar: 'يرطب البشرة الدهنية المجففة بفعل أدوية حب الشباب بكثافة، ويزيل الإحساس بالشد.', 
            en: 'Intensely moisturizes dried-out oily skin from acne treatments, removing tight sensation.' 
        },
        active_ingredients: [
            { name: 'Ceramides + Xylitol', concentration: 'High | عالي', role: { ar: 'تعويض نقص الدهون والترطيب العميق.', en: 'Replenishing lipid deficiency and deep hydration.' } },
            { name: 'Enoxolone + Allantoin', concentration: 'Active | فعال', role: { ar: 'تهدئة الاحمرار والتهيج.', en: 'Soothing redness and irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً.', en: 'Once to twice daily.' },
        step_in_routine: { ar: 'الترطيب الأساسية.', en: 'Main moisturizing step.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك بلطف على وجه نظيف.', en: 'Massage gently onto clean face.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد تعارض.'], en: ['No contraindications.'] }, 
            best_mixed_with: { ar: ['أدوية الروكوتان.'], en: ['Accutane.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية المجففة بفعل العلاجات الطبية.', en: 'Oily skin dried by medical treatments.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مصمم ليرطب دون أن يسد المسام.', en: 'Moisturizes without clogging pores.' }
    }
});

// [12] Bioderma Sebium Global
deepProductsList.push({
    id: 'bio_sebium_global', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم جلوبال (علاج الحبوب المكثف)', en: 'Sebium Global' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly acidic' },
        mechanism: { 
            ar: 'بديل طبيعي للريتينول يعمل مع Fluidactiv لإعادة تكوين دهون صحية، مدمج مع AHA/BHA لإزالة الرؤوس السوداء.', 
            en: 'Natural retinol alternative working with Fluidactiv to reformulate healthy sebum, combined with AHA/BHA to eliminate blackheads.' 
        },
        patient_benefit: { 
            ar: 'علاج شامل للحبوب؛ يقلل البثور بنسبة 78%، يمنع الآثار، ويتحكم في اللمعان.', 
            en: 'Comprehensive acne treatment; reduces pimples by 78%, prevents marks, and controls shine.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid + Citric Acid', concentration: 'Dual Exfoliant | تقشير مزدوج', role: { ar: 'فتح المسام وتنعيم ملمس البشرة.', en: 'Unclogging pores and smoothing texture.' } },
            { name: 'Zinc Gluconate', concentration: 'Sebo-regulating | منظم دهون', role: { ar: 'تقليل اللمعان والالتهاب.', en: 'Reducing shine and inflammation.' } },
            { name: 'Enoxolone', concentration: 'Soothing | مهدئ', role: { ar: 'تسكين الاحمرار المصاحب للحبوب.', en: 'Soothing acne-related redness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'خطوة العلاج الأساسية.', en: 'Core treatment step.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على كامل الوجه بعد تنظيفه.', en: 'Apply to entire face after cleansing.' },
        layering: { 
            do_not_mix_with: { ar: ['الروكوتان الفموي (قد يسبب جفاف).'], en: ['Oral Accutane (may cause dryness).'] }, 
            best_mixed_with: { ar: ['واقي شمس نهاراً.'], en: ['Sunscreen in the AM.'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب المعتدل، الرؤوس السوداء، والمسام المسدودة.', en: 'Moderate acne, blackheads, and clogged pores.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'بديل ممتاز للعلاجات الطبية للحبوب البسيطة والمتوسطة.', en: 'Excellent medical alternative for mild to moderate acne.' }
    }
});

// [13] Bioderma Sebium Kerato+
deepProductsList.push({
    id: 'bio_sebium_kerato_plus', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم كيراتو بلس (علاج الحبوب عالي التحمل)', en: 'Sebium Kerato+' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي', en: 'Acidic' },
        mechanism: { 
            ar: 'تقشير مزدوج (1.8% حمض ساليسيليك + 10% حمض المالييك) لاختراق المسام بفعالية مع الحفاظ على ترطيب الجلد 8 ساعات.', 
            en: 'Double Keratolytic (1.8% Salicylic + 10% Malic Acid) to penetrate pores while maintaining 8h hydration.' 
        },
        patient_benefit: { 
            ar: 'يقلل الحبوب والآثار بنسبة 41% في يومين فقط، دون التسبب في جفاف أو تهيج للبشرة الحساسة.', 
            en: 'Reduces pimples and marks by 41% in 2 days, without causing dryness or irritation for sensitive skin.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid (BHA)', concentration: '1.8%', role: { ar: 'تنظيف المسام العميقة.', en: 'Deep pore cleansing.' } },
            { name: 'Malic Acid Ester (AHA)', concentration: '10%', role: { ar: 'تقشير سطحي لطيف وتنعيم الجلد.', en: 'Gentle surface exfoliation and smoothing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'خطوة العلاج السريع.', en: 'Fast treatment step.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على كامل الوجه أو موضعياً على البثور.', en: 'Apply to entire face or topically.' },
        layering: { 
            do_not_mix_with: { ar: ['أي مقشرات كيميائية قوية أخرى.'], en: ['Any other strong chemical exfoliants.'] }, 
            best_mixed_with: { ar: ['سيبيوم هيدرا.'], en: ['Sebium Hydra.'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب في بدايته، الآثار الحمراء والداكنة.', en: 'Early-stage acne, red and dark marks.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'آمن وفعال جداً للمراهقين.', en: 'Highly safe and effective for adolescents.' }
    }
});

// [14] Bioderma Sebium Gel Moussant Actif
deepProductsList.push({
    id: 'bio_sebium_gel_actif', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم جل موسان أكتيف (الغسول المركز)', en: 'Sebium Gel Moussant Actif' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (4.5)', en: 'Acidic (4.5)' },
        mechanism: { 
            ar: 'غسول علاجي مكثف يدمج (1% حمض الساليسيليك + 1.8% حمض الجليكوليك) لاختراق المسام وإذابة الدهون المتحجرة.', 
            en: 'Intensive cleanser combining (1% Salicylic + 1.8% Glycolic Acid) to penetrate pores and dissolve hardened sebum.' 
        },
        patient_benefit: { 
            ar: 'يقلل البثور 32% والرؤوس السوداء 17%، يترك المسام نظيفة دون التهيج المعتاد للمقشرات.', 
            en: 'Reduces pimples 32% and blackheads 17%, leaving pores clean without typical irritation.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid (BHA)', concentration: '1%', role: { ar: 'تنظيف المسام من الداخل.', en: 'Cleansing pores from within.' } },
            { name: 'Glycolic Acid (AHA)', concentration: '1.8%', role: { ar: 'تقشير سطحي لتنعيم الجلد.', en: 'Surface exfoliation to smooth skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً.', en: 'Once daily.' },
        step_in_routine: { ar: 'التنظيف العلاجي.', en: 'Therapeutic Cleansing.' },
        routine_step_number: 1,
        application: { ar: 'يُرغى، يُترك لمدة 30 ثانية لفعالية الأحماض، ثم يُشطف.', en: 'Lather, leave for 30 seconds for acid efficacy, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['علاجات الروكوتان الفموية.'], en: ['Oral Isotretinoin.'] }, 
            best_mixed_with: { ar: ['سيبيوم هيدرا.'], en: ['Sebium Hydra.'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب العنيد، المسام المسدودة بشدة، والبشرة الدهنية السميكة.', en: 'Stubborn acne, severely clogged pores, and thick oily skin.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'إذا حدث تهيج يُستخدم يوماً بعد يوم.', en: 'If irritation occurs, use every other day.' }
    }
});

// [15] Bioderma Atoderm Intensive Baume
deepProductsList.push({
    id: 'bio_atoderm_intensive_baume', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم إنتينسيف بوم (بلسم الإكزيما)', en: 'Atoderm Intensive Baume' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن للجلد التأتبي', en: 'Balanced for atopic skin' },
        mechanism: { 
            ar: 'يوقف الحكة بفضل جزيء PEA، ويعيد بناء حاجز البشرة بالليبيدات، بينما تمنع Skin Barrier Therapy الالتصاق البكتيري.', 
            en: 'Stops itching using PEA, rebuilds the skin barrier with lipids, and prevents bacterial adhesion via Skin Barrier Therapy.' 
        },
        patient_benefit: { 
            ar: 'يسكن الحكة الشديدة فوراً، يعالج الإكزيما التأتبية، ويطيل الفترات بين نوبات التهيج والجفاف.', 
            en: 'Instantly soothes severe itching, treats atopic eczema, and extends periods between flare-ups.' 
        },
        active_ingredients: [
            { name: 'PEA', concentration: 'Active | فعال', role: { ar: 'تسكين الحكة وتقليل الرغبة في الهرش.', en: 'Soothes itching and reduces urge to scratch.' } },
            { name: 'Lipigenium (Ceramides)', concentration: 'Intense | مكثف', role: { ar: 'إعادة بناء طبقة الدهون الواقية.', en: 'Rebuilds skin\'s protective lipid layer.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'ترطيب الجسم أو الوجه.', en: 'Body or face hydration.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك بلطف على بشرة نظيفة (يفضل بعد الاستحمام مباشرة).', en: 'Massage gently onto clean skin (preferably right after a shower).' },
        layering: { 
            do_not_mix_with: { ar: ['لا تعارض.'], en: ['No contraindications.'] }, 
            best_mixed_with: { ar: ['أتوديرم زيت الاستحمام.'], en: ['Atoderm Shower Oil.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الإكزيما التأتبية، الجفاف الشديد جداً، الحكة المستمرة.', en: 'Atopic eczema, extremely dry skin, persistent itching.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن تماماً لحديثي الولادة (باستثناء الخدج).', en: 'Completely safe for newborns (except premature infants).' }
    }
});
// ==========================================
// 🧪 تابع المنتجات السريرية لـ Bioderma (من 16 إلى 40)
// ==========================================

// [16] Bioderma Atoderm SOS Spray
deepProductsList.push({
    id: 'bio_atoderm_sos_spray', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم SOS بخاخ (مضاد للحكة)', en: 'Atoderm SOS Spray' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'skin_relief_tech\')">تقنية سكين ريليف</span> لتهدئة الأعصاب السطحية للجلد مع الإينوكسولون، مما يمنع إشارات الحكة من الوصول للدماغ.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'skin_relief_tech\')">Skin Relief Technology</span> to soothe superficial skin nerves alongside Enoxolone, blocking itch signals to the brain.' 
        },
        patient_benefit: { 
            ar: 'ابتكار طبي يوقف الحكة فوراً (خلال 60 ثانية) ويدوم مفعوله لـ 6 ساعات. يقلل من خدش الجلد وتفاقم الالتهاب.', 
            en: 'A medical innovation that stops itching instantly (within 60 seconds) with efficacy lasting 6 hours. Reduces scratching and inflammation aggravation.' 
        },
        active_ingredients: [
            { name: 'Skin Relief Technology™', concentration: 'Patented | براءة اختراع', role: { ar: 'إيقاف مسارات الحكة العصبية.', en: 'Blocks neurological itch pathways.' } },
            { name: 'Enoxolone', concentration: 'Fast Soothing | مهدئ سريع', role: { ar: 'مضاد للالتهاب وتقليل الاحمرار الموضعي.', en: 'Anti-inflammatory and reduces local redness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (كلما شعرت بالحكة).', en: 'As needed (whenever itching occurs).' },
        step_in_routine: { ar: 'علاج طوارئ موضعي.', en: 'Topical emergency treatment.' },
        routine_step_number: 3,
        application: { ar: 'يُرش على بعد 20 سم من الجلد. يُترك ليجف ولا يُدلك.', en: 'Spray 20 cm from the skin. Let it dry, do not rub.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['أتوديرم إنتينسيف بوم (كعلاج وقائي دائم).'], en: ['Atoderm Intensive Baume (as ongoing preventive care).'] } 
        }
    },
    precautions: {
        indications: { ar: 'نوبات الحكة المفاجئة، الإكزيما، جفاف الشتاء، ولدغات الحشرات الخفيفة.', en: 'Sudden itch flare-ups, eczema, winter dryness, and mild insect bites.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'بخاخ 360 درجة (يعمل في أي اتجاه). خالي من الكورتيزون.', en: '360-degree spray (works in any position). Cortisone-free.' }
    }
});

// [17] Bioderma Photoderm Aquafluide SPF 50+
deepProductsList.push({
    id: 'bio_photoderm_aquafluide', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم أكوا فلويد SPF50+', en: 'Photoderm Aquafluide SPF50+' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يوفر حماية قصوى وعريضة الطيف (Broad Spectrum) باستخدام فلاتر كيميائية آمنة، مدعومة بتقنية <span class="glossary-term" onclick="openGlossary(\'sun_active_defense\')">Sun Active Defense</span> للحماية البيولوجية الخلوية.', 
            en: 'Provides extreme, Broad Spectrum protection using safe chemical filters, reinforced by <span class="glossary-term" onclick="openGlossary(\'sun_active_defense\')">Sun Active Defense</span> technology for biological cellular protection.' 
        },
        patient_benefit: { 
            ar: 'واقي شمس بقوام مائي خفيف جداً (Ultra-light)، يُمتص فوراً ليترك لمسة جافة غير لامعة (Dry-touch) بدون أي أثر أبيض.', 
            en: 'Sunscreen with an ultra-light watery texture, absorbing instantly to leave a matte, dry-touch finish with zero white cast.' 
        },
        active_ingredients: [
            { name: 'UVA/UVB Advanced Filters', concentration: 'SPF 50+ / PA++++', role: { ar: 'حماية خارجية من حروق الشمس والشيخوخة الضوئية.', en: 'External protection against sunburn and photoaging.' } },
            { name: 'Mattifying Powders', concentration: '3 Powders | 3 مساحيق', role: { ar: 'امتصاص الزهم الزائد ومنع اللمعان.', en: 'Absorbs excess sebum and prevents shine.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (يُجدد كل ساعتين في الشمس المباشرة).', en: 'Daily (Reapply every 2 hours in direct sun).' },
        step_in_routine: { ar: 'الخطوة الأخيرة في روتين الصباح.', en: 'Last step in the AM routine.' },
        routine_step_number: 4,
        application: { ar: 'يُرج جيداً، ويوضع بسخاء على الوجه والرقبة قبل التعرض للشمس بـ 15 دقيقة.', en: 'Shake well, apply generously to face and neck 15 mins before sun exposure.' },
        layering: { 
            do_not_mix_with: { ar: ['الزيوت الثقيلة جداً قبله (قد تعيق تكوين غشاء الحماية).'], en: ['Very heavy oils underneath (may disrupt the protective film).'] }, 
            best_mixed_with: { ar: ['جميع مرطبات وسيرومات العناية اليومية.'], en: ['All daily care moisturizers and serums.'] } 
        }
    },
    precautions: {
        indications: { ar: 'جميع أنواع البشرة (بما فيها الحساسة، المختلطة والدهنية)، الوقاية اليومية.', en: 'All skin types (including sensitive, combination, and oily), daily prevention.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مقاوم للماء والعرق، تم اختباره تحت إشراف أطباء العيون (لا يسبب وخز للعين).', en: 'Water and sweat resistant, ophthalmologically tested (anti-eye stinging).' }
    }
});

// [18] Bioderma Photoderm MAX Fluid SPF 100
deepProductsList.push({
    id: 'bio_photoderm_max_100', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم ماكس فلويد SPF 100', en: 'Photoderm MAX Fluid SPF 100' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'أعلى تركيز من الفلاتر الواقية في مختبرات بيوديرما لضمان أقصى درجات الحماية ضد الأشعة فوق البنفسجية، مصمم للحالات السريرية التي تتطلب حظراً تاماً للشمس.', 
            en: 'The highest concentration of protective filters in Bioderma labs to ensure ultimate UV protection, designed for clinical cases requiring a total sun block.' 
        },
        patient_benefit: { 
            ar: 'يحمي البشرة شديدة الفاتحة أو البشرة التي خضعت لإجراءات تجميلية قاسية من التصبغ العميق والندبات الناتجة عن الشمس.', 
            en: 'Protects extremely fair skin or skin subjected to harsh cosmetic procedures from deep pigmentation and sun-induced scarring.' 
        },
        active_ingredients: [
            { name: 'Maximum UVA/UVB Filters', concentration: 'SPF 100', role: { ar: 'درع حماية مطلق ضد أشعة الشمس القاسية.', en: 'Absolute shield against extreme sun exposure.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (عند التعرض الشديد للشمس).', en: 'Daily (during intense sun exposure).' },
        step_in_routine: { ar: 'الخطوة الصباحية الأخيرة.', en: 'Last AM step.' },
        routine_step_number: 4,
        application: { ar: 'يُوزع بكثافة على الوجه والرقبة.', en: 'Distribute generously over face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريمات الترميم (Cicabio) بعد الليزر.'], en: ['Repair creams (Cicabio) post-laser.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة البياض (النمش السريع)، بعد التقشير الكيميائي، بعد جلسات الليزر العميقة.', en: 'Extremely fair skin (freckle-prone), post-chemical peels, post-deep laser sessions.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوامه أثقل قليلاً من الأكوا فلويد نظراً لارتفاع نسبة الفلاتر.', en: 'Texture is slightly heavier than Aquafluide due to the high filter ratio.' }
    }
});

// [19] Bioderma Photoderm M Gel-Cream SPF 50+
deepProductsList.push({
    id: 'bio_photoderm_m', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم M (واقي الكلف والتصبغات)', en: 'Photoderm M Gel-Cream SPF 50+' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'ابتكار طبي يدمج الفلاتر العالية مع <span class="glossary-term" onclick="openGlossary(\'iron_oxides_blue_light\')">أكاسيد الحديد</span> لمنع 66% من الضوء الأزرق، ويستخدم <span class="glossary-term" onclick="openGlossary(\'glabridin\')">الجلابريدين</span> لمنع تكون الميلانين.', 
            en: 'A medical innovation combining high filters with <span class="glossary-term" onclick="openGlossary(\'iron_oxides_blue_light\')">Iron Oxides</span> to block 66% of Blue Light, and uses <span class="glossary-term" onclick="openGlossary(\'glabridin\')">Glabridin</span> to inhibit melanin synthesis.' 
        },
        patient_benefit: { 
            ar: 'الواقي الأول عالمياً المصمم للوقاية من وعلاج "كلف الحمل" (Pregnancy Mask). يوحد لون البشرة ويمنع تكرار ظهور التصبغات.', 
            en: 'The 1st global sunscreen designed to prevent and treat "Pregnancy Mask" (Melasma). Evens skin tone and prevents pigmentation relapse.' 
        },
        active_ingredients: [
            { name: 'Iron Oxides', concentration: 'High Tinted | تركيز عالي ملون', role: { ar: 'صد الضوء الأزرق المرئي.', en: 'Blocks High-Energy Visible Blue Light.' } },
            { name: 'Glabridin', concentration: 'Active Inhibitor | مثبط نشط', role: { ar: 'تثبيط إنزيم التيروزيناز لتقليل البقع.', en: 'Tyrosinase inhibition to reduce dark spots.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (ضروري جداً).', en: 'Daily (Crucial).' },
        step_in_routine: { ar: 'الخطوة العلاجية/الوقائية الصباحية.', en: 'AM treatment/preventive step.' },
        routine_step_number: 4,
        application: { ar: 'يوضع على كامل الوجه. يتوفر بلونين (Light & Golden) ليتناسب مع لون البشرة.', en: 'Apply to entire face. Available in 2 shades (Light & Golden) to match skin tone.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات الأحماض القوية صباحاً (خطر تهيج مع الشمس).'], en: ['Strong acid exfoliants in the AM (risk of sun irritation).'] }, 
            best_mixed_with: { ar: ['سيرومات التفتيح المسائية (Pigmentbio C-Concentrate).'], en: ['PM brightening serums (Pigmentbio C-Concentrate).'] } 
        }
    },
    precautions: {
        indications: { ar: 'كلف الحمل (Melasma)، فرط التصبغ، البقع الداكنة، والوقاية من تفاقم التصبغ.', en: 'Pregnancy mask (Melasma), hyperpigmentation, dark spots, and preventing pigment relapse.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن تماماً ويوصى به بشدة للحوامل والظروف الهرمونية.', en: 'Completely safe and highly recommended during pregnancy and hormonal fluctuations.' }
    }
});

// [20] Bioderma Photoderm Spot-Age SPF 50+
deepProductsList.push({
    id: 'bio_photoderm_spot_age', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم سبوت إيدج SPF50+', en: 'Photoderm Spot-Age SPF 50+' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يجمع بين الفلاتر القوية وثلاثي مضاد للأكسدة والترميم (Vit C, Vit E, Centella Asiatica) لتقليل ضرر التأكسد الضوئي وتجديد الكولاجين.', 
            en: 'Combines potent filters with an antioxidant and repair trio (Vit C, Vit E, Centella Asiatica) to reduce photo-oxidative damage and regenerate collagen.' 
        },
        patient_benefit: { 
            ar: 'يحسن علامات الشيخوخة الضوئية (التجاعيد والبقع) بعد 28 يوماً، ويعتبر ممتازاً كعناية بعد الإجراءات التجميلية (الجلد بالليزر).', 
            en: 'Improves signs of photoaging (wrinkles & spots) after 28 days, and is excellent as post-procedure care (laser resurfacing).' 
        },
        active_ingredients: [
            { name: 'Vitamin C & E', concentration: 'Stabilized | مستقر', role: { ar: 'مضادات أكسدة قوية لتفتيح البشرة وحمايتها.', en: 'Strong antioxidants for brightening and protection.' } },
            { name: 'Centella Asiatica', concentration: 'Active | فعال', role: { ar: 'تجديد الخلايا وتحفيز الكولاجين.', en: 'Cell regeneration and collagen stimulation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً.', en: 'Daily.' },
        step_in_routine: { ar: 'واقي شمس علاجي.', en: 'Therapeutic sunscreen.' },
        routine_step_number: 4,
        application: { ar: 'يوزع على الوجه والرقبة وأيضاً ظهر اليدين.', en: 'Distribute over face, neck, and also the back of the hands.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['جميع علاجات مكافحة الشيخوخة.'], en: ['All anti-aging treatments.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الشيخوخة الضوئية (Photoaging)، البقع العمرية، التجاعيد، وما بعد الليزر السطحي.', en: 'Photoaging, age spots, wrinkles, and post-superficial laser.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام جل-كريم يمتص بسرعة، يوفر ترطيباً جيداً.', en: 'Gel-cream texture absorbs quickly, provides good hydration.' }
    }
});

// [21] Bioderma Hydrabio H2O Micellar Water
deepProductsList.push({
    id: 'bio_hydrabio_h2o', brandId: 'bioderma', familyId: 'hydrabio', brand: 'Bioderma',
    name: { ar: 'هيدرابيو H2O ميسيلار', en: 'Hydrabio H2O Micellar Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (درجة حموضة فسيولوجية)', en: '5.5 (Physiological pH)' },
        mechanism: { 
            ar: 'ينظف بلطف باستخدام <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">تقنية الميسيلار</span>، بينما تحفز براءة اختراع <span class="glossary-term" onclick="openGlossary(\'aquagenium\')">Aquagenium™</span> قنوات الماء الخلوية لمنع الجفاف الذي يصاحب عادة عملية إزالة المكياج.', 
            en: 'Gently cleanses using <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">Micellar Technology</span>, while the <span class="glossary-term" onclick="openGlossary(\'aquagenium\')">Aquagenium™</span> patent stimulates cellular water channels to prevent dehydration typically associated with makeup removal.' 
        },
        patient_benefit: { 
            ar: 'يزيل المكياج والشوائب ويترك البشرة الفاقدة للماء (Dehydrated) ناعمة، مرنة، ومشرقة دون الإحساس بالشد.', 
            en: 'Removes makeup and impurities, leaving dehydrated skin soft, supple, and radiant without a tight sensation.' 
        },
        active_ingredients: [
            { name: 'PEG-6 Caprylic/Capric Glycerides', concentration: 'Active Micelles | ميسيلار فعال', role: { ar: 'تنظيف عميق بدون تجريد دهون الجلد.', en: 'Deep cleansing without stripping skin lipids.' } },
            { name: 'Aquagenium™ Complex', concentration: 'Patented | براءة اختراع', role: { ar: 'تنشيط الترطيب الذاتي.', en: 'Activates self-hydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الجاف).', en: 'Step 1 (Dry Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'يُبلل قطن ويُمسح الوجه والعينان بلطف. لا يُشطف.', en: 'Soak a cotton pad and gently wipe face and eyes. Do not rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['هيدرابيو سيروم (لتعزيز مستويات الماء).'], en: ['Hydrabio Serum (to boost water levels).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الفاقدة للترطيب، الباهتة، والحساسة.', en: 'Dehydrated, dull, and sensitive skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مناسب لمكياج العيون والوجه.', en: 'Suitable for eye and face makeup.' }
    }
});

// [22] Bioderma Hydrabio Serum
deepProductsList.push({
    id: 'bio_hydrabio_serum', brandId: 'bioderma', familyId: 'hydrabio', brand: 'Bioderma',
    name: { ar: 'هيدرابيو سيروم (معزز الترطيب)', en: 'Hydrabio Serum (Hydration Booster)' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يوفر ترطيباً فورياً بحمض الهيالورونيك، بينما تقوم تقنية <span class="glossary-term" onclick="openGlossary(\'aquagenium\')">Aquagenium™</span> بإعادة تدريب الجلد على تنشيط قنوات الأكوابورين وحبس الرطوبة في طبقة الإيپيديرمس.', 
            en: 'Provides instant hydration with Hyaluronic Acid, while <span class="glossary-term" onclick="openGlossary(\'aquagenium\')">Aquagenium™</span> retrains the skin to activate aquaporins and lock moisture in the epidermis.' 
        },
        patient_benefit: { 
            ar: 'يزيد من ترطيب البشرة بنسبة تصل إلى 57% خلال 15 دقيقة، ويمنح إشراقة فورية، ويعالج الخطوط الدقيقة الناتجة عن الجفاف.', 
            en: 'Increases skin hydration by up to 57% within 15 minutes, delivers instant radiance, and treats dehydration-induced fine lines.' 
        },
        active_ingredients: [
            { name: 'Hyaluronic Acid', concentration: 'Concentrated | مركز', role: { ar: 'جذب وحبس الماء داخل طبقات الجلد السطحية.', en: 'Attracts and locks water within superficial skin layers.' } },
            { name: 'Xylitol & Glycerin', concentration: 'Hydrating | مرطبات', role: { ar: 'ترطيب مكثف وطويل الأمد.', en: 'Intense and long-lasting hydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'سيروم ما قبل الترطيب.', en: 'Pre-moisturizer serum.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على الوجه والرقبة بعد التطهير وقبل الكريم.', en: 'Apply to face and neck after cleansing and before cream.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['أساس (Primer) ممتاز للمكياج.', 'الريتينول (لتقليل جفافه).'], en: ['Excellent makeup primer.', 'Retinol (to buffer dryness).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الجفاف (Dehydrated)، الخطوط الرفيعة، والبهتان الناتج عن الضغط البيئي.', en: 'Severely dehydrated skin, fine lines, and dullness from environmental stress.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام جل ذوباني (Melting gel) منعش جداً.', en: 'Very refreshing melting gel texture.' }
    }
});

// [23] Bioderma Pigmentbio C-Concentrate
deepProductsList.push({
    id: 'bio_pigmentbio_c_concentrate', brandId: 'bioderma', familyId: 'pigmentbio', brand: 'Bioderma',
    name: { ar: 'بيجمنت بيو سي-كونسينتريت', en: 'Pigmentbio C-Concentrate' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (pH ~3.5-4.0 لفعالية التقشير)', en: 'Acidic (pH ~3.5-4.0 for exfoliation efficacy)' },
        mechanism: { 
            ar: 'تأثير تقشير كيميائي (Peeling) بواسطة 8% AHA/BHA لتجديد الخلايا، مدمج مع 2% <span class="glossary-term" onclick="openGlossary(\'vitamin_c_fresh\')">فيتامين C</span> وتقنية <span class="glossary-term" onclick="openGlossary(\'lumireveal\')">LumiReveal</span> لتثبيط التيروزيناز وتفكيك صبغة الميلانين.', 
            en: 'Chemical peeling effect via 8% AHA/BHA for cell renewal, combined with 2% <span class="glossary-term" onclick="openGlossary(\'vitamin_c_fresh\')">Fresh Vit C</span> and <span class="glossary-term" onclick="openGlossary(\'lumireveal\')">LumiReveal</span> to inhibit tyrosinase and break down melanin.' 
        },
        patient_benefit: { 
            ar: 'يقلل بشكل واضح حجم وحدة البقع الداكنة خلال 4 أسابيع، يوحد لون البشرة، ويمنح إشراقة وتنعيم لنسيج الجلد.', 
            en: 'Visibly reduces the size and intensity of dark spots in 4 weeks, evens skin tone, and provides radiance and texture smoothing.' 
        },
        active_ingredients: [
            { name: 'Fresh Ascorbic Acid (Vit C)', concentration: '2%', role: { ar: 'مضاد أكسدة وتفتيح وتثبيط للميلانين.', en: 'Antioxidant, brightening, and melanin inhibition.' } },
            { name: 'Glycolic & Salicylic Acid (AHA/BHA)', concentration: '8%', role: { ar: 'تقشير الخلايا السطحية المحملة بالتصبغ.', en: 'Exfoliates superficial pigment-loaded cells.' } },
            { name: 'Azelaic Acid Derivative', concentration: 'Active | فعال', role: { ar: 'مضاد لالتهاب التصبغات.', en: 'Anti-inflammatory for pigmentation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً (كورس علاجي لمدة شهر إلى 3 أشهر).', en: 'Once daily PM (1 to 3 months treatment course).' },
        step_in_routine: { ar: 'خطوة العلاج الليلي المكثف.', en: 'Intensive PM treatment step.' },
        routine_step_number: 2,
        application: { ar: 'تُضغط الكبسولة لتفعيل الفيتامين، تُرج جيداً، ثم توضع 5 قطرات على الوجه والرقبة.', en: 'Press canister to activate Vit C, shake well, apply 5 drops to face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول أو المقشرات الأخرى في نفس الليلة لتجنب تدمير حاجز الجلد.'], en: ['Retinol or other exfoliants on the same night to avoid barrier damage.'] }, 
            best_mixed_with: { ar: ['واقي شمس (إلزامي في الصباح).'], en: ['Sunscreen (Mandatory in the AM).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الكلف، النمش، التصبغات الناتجة عن الالتهاب (PIH)، والبقع العمرية.', en: 'Melasma, freckles, Post-Inflammatory Hyperpigmentation (PIH), and age spots.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'قد يسبب وخزاً طفيفاً طبيعياً في الأيام الأولى. غير مخصص للحوامل لوجود تركيز عالٍ من حمض الساليسيليك.', en: 'May cause normal mild tingling initially. Not recommended for pregnancy due to high BHA.' }
    }
});

// [24] Bioderma Pigmentbio Sensitive Areas
deepProductsList.push({
    id: 'bio_pigmentbio_sensitive_areas', brandId: 'bioderma', familyId: 'pigmentbio', brand: 'Bioderma',
    name: { ar: 'بيجمنت بيو للمناطق الحساسة', en: 'Pigmentbio Sensitive Areas' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يستهدف فرط التصبغ الناتج عن الاحتكاك (Friction) أو إزالة الشعر. يجمع تقنية <span class="glossary-term" onclick="openGlossary(\'lumireveal\')">LumiReveal</span> مع مستخلصات مهدئة لمنع الالتهاب المسبب للاسمرار.', 
            en: 'Targets hyperpigmentation caused by friction or hair removal. Combines <span class="glossary-term" onclick="openGlossary(\'lumireveal\')">LumiReveal</span> with soothing extracts to prevent inflammation-induced darkening.' 
        },
        patient_benefit: { 
            ar: 'يوحد لون المناطق الحساسة (الإبطين، بين الفخذين، الركب، والأكواع)، يهدئ الاحمرار فوراً بعد الحلاقة، ويوفر ترطيباً لـ 8 ساعات.', 
            en: 'Evens tone in sensitive areas (axillae, groin, knees, elbows), instantly soothes redness post-shaving, and provides 8h hydration.' 
        },
        active_ingredients: [
            { name: 'Andrographis Paniculata & Glabridin', concentration: 'Active | فعال', role: { ar: 'تهدئة الالتهاب الميكانيكي وتثبيط التصبغ.', en: 'Soothes mechanical inflammation and inhibits pigmentation.' } },
            { name: 'Glycerin & Shea Butter', concentration: 'Rich | غني', role: { ar: 'ترطيب عميق وتقليل الاحتكاك.', en: 'Deep hydration and friction reduction.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً.', en: 'Once to twice daily.' },
        step_in_routine: { ar: 'كريم علاجي للمناطق المستهدفة.', en: 'Treatment cream for targeted areas.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على المناطق المتضررة بعد تنظيفها وتجفيفها (يمكن استخدامه مباشرة بعد الحلاقة/الليزر).', en: 'Apply to affected areas after cleansing and drying (can be used directly post-shaving/laser).' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك الميكانيكي أو الملابس الضيقة (تزيد المشكلة).'], en: ['Mechanical rubbing or tight clothing (exacerbates the issue).'] }, 
            best_mixed_with: { ar: ['بيجمنت بيو كريم رغوي للتنظيف.'], en: ['Pigmentbio Foaming Cream for cleansing.'] } 
        }
    },
    precautions: {
        indications: { ar: 'اسمرار ثنيات الجلد (الإبطين، الفخذين)، فرط التصبغ الاحتكاكي، واسمرار المفاصل.', en: 'Darkening of skin folds (axillae, groin), frictional hyperpigmentation, and darkened joints.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من العطور. قوامه ناعم ولا يترك أثراً دهنياً أو لزجاً.', en: 'Fragrance-free. Smooth texture leaving no greasy or sticky residue.' }
    }
});

// [25] Bioderma Cicabio Cream
deepProductsList.push({
    id: 'bio_cicapio_cream', brandId: 'bioderma', familyId: 'cicabio', brand: 'Bioderma',
    name: { ar: 'سيكابيو كريم (مرمم ومهدئ)', en: 'Cicabio Soothing Repairing Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يعمل في كل مرحلة من مراحل إعادة بناء البشرة. يوفر النحاس والزنك بيئة معقمة، ويرمم مزيج (Resveratrol & Centella Asiatica) حاجز الجلد، بينما يسكن <span class="glossary-term" onclick="openGlossary(\'antalgicine\')">Antalgicine™</span> الألم.', 
            en: 'Acts at every stage of epidermal reconstruction. Copper/Zinc provide a sterile environment, Resveratrol & Centella Asiatica repair the skin barrier, while <span class="glossary-term" onclick="openGlossary(\'antalgicine\')">Antalgicine™</span> relieves pain.' 
        },
        patient_benefit: { 
            ar: 'يسرع التئام الجروح السطحية والخدوش، يخفف الإحساس بالانزعاج الموضعي فوراً، ويقلل من احتمالية تكون الندبات.', 
            en: 'Accelerates healing of superficial wounds and scratches, instantly relieves local discomfort, and reduces the likelihood of scarring.' 
        },
        active_ingredients: [
            { name: 'Antalgicine™', concentration: 'Patented | براءة اختراع', role: { ar: 'تسكين الألم وتقليل الحكة السطحية.', en: 'Pain relief and reduction of superficial itching.' } },
            { name: 'Centella Asiatica + Hyaluronic Acid', concentration: 'Active | فعال', role: { ar: 'ترميم وتكوين طبقة عازلة تتنفس (Breathable Film).', en: 'Repair and formation of a breathable insulating film.' } },
            { name: 'Zinc & Copper Sulfates', concentration: 'Purifying | منقي', role: { ar: 'منع التلوث البكتيري للجرح.', en: 'Prevention of bacterial infection in the wound.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً حتى التئام الجلد تماماً.', en: 'Twice daily until skin is fully repaired.' },
        step_in_routine: { ar: 'عناية موضعية علاجية.', en: 'Targeted therapeutic care.' },
        routine_step_number: 3,
        application: { ar: 'توضع طبقة سميكة على المنطقة المتضررة بعد تنظيفها وتجفيفها.', en: 'Apply a thick layer to the affected area after cleansing and drying.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات أو مواد نشطة قاسية على نفس المنطقة.'], en: ['Exfoliants or harsh actives on the same area.'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'الخدوش، الحروق السطحية، بعد الإجراءات الجلدية (الليزر، التقشير)، ولتهيج ما حول الفم.', en: 'Scratches, superficial burns, post-dermatological procedures (laser, peels), and peri-oral irritation.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يُستخدم على الجروح النازفة بشدة. لونه المائل للبني طبيعي.', en: 'Do not use on heavily bleeding wounds. Its brownish tint is natural.' }
    }
});

// [26] Bioderma Cicabio Arnica+
deepProductsList.push({
    id: 'bio_cicabio_arnica', brandId: 'bioderma', familyId: 'cicabio', brand: 'Bioderma',
    name: { ar: 'سيكابيو أرنيكا+ (لعلاج الكدمات)', en: 'Cicabio Arnica+ Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يدمج <span class="glossary-term" onclick="openGlossary(\'arnica_montana\')">خلاصة الأرنيكا</span> مع (Apigenin) لتعزيز التخلص من التجمعات الدموية تحت الجلد بسرعة، مدعوماً بالزنك و <span class="glossary-term" onclick="openGlossary(\'antalgicine\')">Antalgicine™</span> لتخفيف التورم والألم.', 
            en: 'Combines <span class="glossary-term" onclick="openGlossary(\'arnica_montana\')">Arnica extract</span> with Apigenin to promote rapid elimination of subcutaneous blood pooling, supported by Zinc and <span class="glossary-term" onclick="openGlossary(\'antalgicine\')">Antalgicine™</span> to reduce swelling and pain.' 
        },
        patient_benefit: { 
            ar: 'علاج سريري سريع للرضوض والكدمات. يقلل من حجم الزرقة والتورم، ويعتبر ممتازاً للوقاية والعلاج بعد حقن التجميل.', 
            en: 'Rapid clinical treatment for bumps and bruises. Reduces the size of ecchymosis and swelling, excellent for prevention and treatment post-cosmetic injections.' 
        },
        active_ingredients: [
            { name: 'Arnica Montana Extract', concentration: 'Pure Extract | مستخلص نقي', role: { ar: 'تسريع امتصاص الكدمات وتقليل التورم.', en: 'Accelerates bruise absorption and reduces swelling.' } },
            { name: 'Apigenin (Grapefruit Extract)', concentration: 'Active | فعال', role: { ar: 'تقليل نفاذية الأوعية الدموية لمنع تسرب الدم.', en: 'Decreases vascular permeability to prevent blood leakage.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً حتى اختفاء الكدمة.', en: 'Once to twice daily until the bruise disappears.' },
        step_in_routine: { ar: 'علاج موضعي مركز.', en: 'Intensive targeted treatment.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك برفق على الكدمة. (للإجراءات التجميلية: يمكن استخدامه وقائياً قبل الجلسة بـ 7 أيام).', en: 'Massage gently onto the bruise. (For cosmetic procedures: can be used preventively 7 days prior).' },
        layering: { 
            do_not_mix_with: { ar: ['الاستخدام على جروح مفتوحة أو بشرة مجروحة.'], en: ['Application on open wounds or broken skin.'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'الكدمات، التورمات، الرضوض، وما بعد حقن الفيلر/البوتوكس أو العمليات الجراحية الخفيفة.', en: 'Bruises, swelling, bumps, and post-filler/botox injections or minor surgeries.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'يُمنع استخدامه للحوامل، أو للمرضى الذين يعانون من حساسية تجاه زهرة العطاس.', en: 'Contraindicated for pregnant women, or patients with an allergy to Arnica.' }
    }
});

// [27] Bioderma Node DS+ Anti-Dandruff Shampoo
deepProductsList.push({
    id: 'bio_node_ds_plus', brandId: 'bioderma', familyId: 'node', brand: 'Bioderma',
    name: { ar: 'نوديه DS+ (شامبو للقشرة الشديدة)', en: 'Node DS+ Anti-Dandruff Shampoo' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن لفروة الرأس', en: 'Balanced for Scalp' },
        mechanism: { 
            ar: 'يستهدف القشرة المستعصية عبر براءة اختراع <span class="glossary-term" onclick="openGlossary(\'dsactive\')">DSactive™</span>، مع حمض الساليسيليك الفعال في إذابة القشور الكثيفة، والإكثيول لتهدئة الحكة العنيفة.', 
            en: 'Targets stubborn dandruff via the <span class="glossary-term" onclick="openGlossary(\'dsactive\')">DSactive™</span> patent, with Salicylic Acid to dissolve thick scales, and Icthyol to soothe intense itching.' 
        },
        patient_benefit: { 
            ar: 'يقضي على القشرة المرئية المستعصية بشكل دائم، يهدئ فروة الرأس الملتهبة فوراً، ويمنع عودة القشرة بفعالية طويلة الأمد.', 
            en: 'Permanently eliminates visible stubborn dandruff, instantly soothes inflamed scalps, and provides long-lasting relapse prevention.' 
        },
        active_ingredients: [
            { name: 'DSactive™ Patent', concentration: 'Patented | براءة اختراع', role: { ar: 'تثبيط فطر الملاسيزيا وتنظيم الزهم.', en: 'Inhibiting Malassezia fungus and regulating sebum.' } },
            { name: 'Salicylic Acid (BHA)', concentration: 'Strong Keratolytic | مقشر قوي', role: { ar: 'إزالة وتقشير طبقات القشرة السميكة.', en: 'Removing and exfoliating thick dandruff scales.' } },
            { name: 'Ichthyol', concentration: 'Active | فعال', role: { ar: 'مضاد للالتهاب وتقليل الرغبة في الحك.', en: 'Anti-inflammatory and reduces the urge to scratch.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'كورس مكثف: 3 مرات أسبوعياً (لـ 3 أسابيع). وقاية: 1-2 مرة أسبوعياً.', en: 'Intensive course: 3x/week (for 3 weeks). Maintenance: 1-2x/week.' },
        step_in_routine: { ar: 'علاج فروة الرأس.', en: 'Scalp treatment.' },
        routine_step_number: 1,
        application: { ar: 'يُرغى على فروة الرأس، يُترك لمدة 5 دقائق كاملة لتفعيل المواد، ثم يُشطف جيداً.', en: 'Lather on scalp, leave on for a full 5 minutes to activate ingredients, then rinse thoroughly.' },
        layering: { 
            do_not_mix_with: { ar: ['شامبوهات كيميائية قاسية أخرى في نفس الفترة.'], en: ['Other harsh chemical shampoos during the same period.'] }, 
            best_mixed_with: { ar: ['شامبو Node Fluid (للاستخدام في الأيام البينية كمنظف لطيف).'], en: ['Node Fluid Shampoo (for use on alternate days as a gentle cleanser).'] } 
        }
    },
    precautions: {
        indications: { ar: 'القشرة الدهنية الكثيفة، التهاب الجلد الدهني (Seborrheic Dermatitis)، الحكة الشديدة.', en: 'Thick oily dandruff, Seborrheic Dermatitis, and intense itching.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'غير مخصص للأطفال دون 3 سنوات (بسبب احتوائه على حمض الساليسيليك).', en: 'Not for children under 3 years old (due to Salicylic Acid content).' }
    }
});

// [28] Bioderma Node Fluid Shampoo
deepProductsList.push({
    id: 'bio_node_fluid', brandId: 'bioderma', familyId: 'node', brand: 'Bioderma',
    name: { ar: 'نوديه فلويد (شامبو يومي لطيف)', en: 'Node Fluid Non-Detergent Shampoo' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يستخدم مبدأ <span class="glossary-term" onclick="openGlossary(\'non_detergent\')">عدم التنظيف القاسي (N.O.D.E)</span>؛ حيث ينظف فروة الرأس والشعر بقاعدة نباتية أمفوتيرية تحافظ على الزيوت الطبيعية وتمنع التجريد.', 
            en: 'Uses the <span class="glossary-term" onclick="openGlossary(\'non_detergent\')">N.O.D.E Principle</span>; cleansing the scalp and hair with an amphoteric botanical base that preserves natural oils and prevents stripping.' 
        },
        patient_benefit: { 
            ar: 'ينظف الشعر بلطف بالغ، يمنحه لمعاناً ونعومة، ومثالي للاستخدام اليومي المستمر دون إرهاق فروة الرأس.', 
            en: 'Cleanses hair extremely gently, provides shine and softness, and is ideal for continuous daily use without stressing the scalp.' 
        },
        active_ingredients: [
            { name: 'Caprylyl/Capryl Glucoside', concentration: 'Ultra-mild | لطيف جداً', role: { ar: 'تنظيف فعال وآمن لدرجة دهون الفروة الطبيعية.', en: 'Effective and safe cleansing respecting natural scalp lipids.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (أو حسب الرغبة).', en: 'Daily (or as desired).' },
        step_in_routine: { ar: 'التنظيف الروتيني للشعر.', en: 'Routine hair cleansing.' },
        routine_step_number: 1,
        application: { ar: 'يُرغى بلطف على فروة مبللة، ثم يُشطف. يمكن تكرار العملية إذا لزم الأمر.', en: 'Lather gently on a wet scalp, then rinse. Process can be repeated if necessary.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['العلاجات الطبية للشعر (لاستخدامه كشامبو تبادلي مريح).'], en: ['Medical hair treatments (to be used as an alternate comforting shampoo).'] } 
        }
    },
    precautions: {
        indications: { ar: 'جميع أنواع الشعر، العناية اليومية، الشامبو التبادلي مع علاجات القشرة، والشعر المعالج كيميائياً.', en: 'All hair types, daily care, alternate shampoo with dandruff treatments, and chemically treated hair.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوامه سائل جداً (Fluid) بخلاف الشامبوهات التقليدية، ويرغي بشكل ممتاز. آمن للعائلة بالكامل.', en: 'Very liquid texture (Fluid) unlike traditional shampoos, yet lathers excellently. Safe for the whole family.' }
    }
});

// [29] Bioderma ABCDerm H2O Micellar Water
deepProductsList.push({
    id: 'bio_abcderm_h2o', brandId: 'bioderma', familyId: 'abcderm', brand: 'Bioderma',
    name: { ar: 'أبِسيديرم H2O (ماء تنظيف ميسيلار)', en: 'ABCDerm H2O Micellar Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً لجلد الرضع', en: 'Physiologically balanced for infant skin' },
        mechanism: { 
            ar: 'ينظف بشرة الرضيع بلطف باستخدام <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">تقنية الميسيلار</span> المبتكرة، مع احترام كامل للغشاء المائي الدهني للطفل وفقاً لـ <span class="glossary-term" onclick="openGlossary(\'abcderm_charter\')">ميثاق ABCDerm</span>.', 
            en: 'Gently cleanses baby skin using innovative <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">Micellar Technology</span>, fully respecting the infant hydrolipidic film according to the <span class="glossary-term" onclick="openGlossary(\'abcderm_charter\')">ABCDerm Commitment</span>.' 
        },
        patient_benefit: { 
            ar: 'ينظف منطقة الحفاض، الثنيات، والوجه واليدين بلطف فائق دون الحاجة للماء، يترك البشرة ناعمة وذات رائحة منعشة.', 
            en: 'Ultra-gently cleanses the diaper area, skin folds, face, and hands without water, leaving skin soft with a fresh scent.' 
        },
        active_ingredients: [
            { name: 'Mild Micelles', concentration: 'Ultra-mild | لطيف جداً', role: { ar: 'التقاط الأوساخ بلطف.', en: 'Gently captures dirt.' } },
            { name: 'Allantoin', concentration: 'Active | فعال', role: { ar: 'تهدئة بشرة الطفل وتنعيمها.', en: 'Soothes and softens baby skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (مع كل تغيير حفاض أو تنظيف).', en: 'As needed (with every diaper change or cleansing).' },
        step_in_routine: { ar: 'التنظيف اللطيف السريع.', en: 'Gentle quick cleansing.' },
        routine_step_number: 1,
        application: { ar: 'يُبلل قطن نظيف ويُمسح الجلد بلطف. لا يحتاج للشطف.', en: 'Soak a cotton pad and gently wipe the skin. No rinsing required.' },
        layering: { 
            do_not_mix_with: { ar: ['المناديل المعطرة تجارياً (تزيد التحسس).'], en: ['Commercially fragranced wipes (increases sensitivity).'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'العناية اليومية بنظافة الرضع وحديثي الولادة (الوجه، الجسم، ومنطقة الحفاض).', en: 'Daily hygiene care for infants and newborns (face, body, diaper area).' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن لحديثي الولادة (باستثناء الخدج). لا يحرق العينين.', en: 'Safe for newborns (except premature infants). Does not sting eyes.' }
    }
});

// [30] Bioderma ABCDerm Moussant
deepProductsList.push({
    id: 'bio_abcderm_moussant', brandId: 'bioderma', familyId: 'abcderm', brand: 'Bioderma',
    name: { ar: 'أبِسيديرم موسان (جل استحمام رغوي)', en: 'ABCDerm Gel Moussant' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically balanced' },
        mechanism: { 
            ar: 'جل استحمام خالي من الصابون، يعتمد على مواد سطحية منظفة لطيفة جداً لا تجرد البشرة من زيوتها، وتضمن تحملاً ممتازاً للجلد والعين.', 
            en: 'A soap-free shower gel based on ultra-mild cleansing surfactants that do not strip the skin of its oils, ensuring excellent skin and eye tolerance.' 
        },
        patient_benefit: { 
            ar: 'ينظف شعر وجسم الطفل بلطف، يحافظ على توازن البشرة، ولا يسبب الدموع أثناء الاستحمام.', 
            en: 'Gently cleanses baby\'s hair and body, maintains skin balance, and is tear-free during bath time.' 
        },
        active_ingredients: [
            { name: 'Gentle Surfactants', concentration: 'Safe | آمن', role: { ar: 'تنظيف رقيق للشعر والجسم.', en: 'Mild cleansing for hair and body.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً (أو حسب روتين استحمام الطفل).', en: 'Once daily (or per baby bath routine).' },
        step_in_routine: { ar: 'وقت الاستحمام (شعر وجسم).', en: 'Bath time (hair & body).' },
        routine_step_number: 1,
        application: { ar: 'يُرغى على بشرة وشعر الطفل المبلل، يُشطف جيداً ثم يُجفف برفق.', en: 'Lather onto wet baby skin and hair, rinse thoroughly, then dry gently.' },
        layering: { 
            do_not_mix_with: { ar: ['اللوف الإسفنجي الخشن لجلد الأطفال.'], en: ['Harsh sponge loofahs for baby skin.'] }, 
            best_mixed_with: { ar: ['لوشن أبِسيديرم المرطب (بعد الاستحمام).'], en: ['ABCDerm Hydratant lotion (post-bath).'] } 
        }
    },
    precautions: {
        indications: { ar: 'استحمام الرضع وحديثي الولادة ذوي البشرة العادية.', en: 'Bathing infants and newborns with normal skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يترك رائحة رقيقة جداً وآمنة للطفل.', en: 'Leaves a very delicate and safe baby scent.' }
    }
});

// [31] Bioderma ABCDerm Péri-oral
deepProductsList.push({
    id: 'bio_abcderm_perioral', brandId: 'bioderma', familyId: 'abcderm', brand: 'Bioderma',
    name: { ar: 'أبِسيديرم بيري-أورال (علاج حول الفم)', en: 'ABCDerm Péri-oral' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم براءة اختراع <span class="glossary-term" onclick="openGlossary(\'amylpriv_patent\')">Amylpriv™</span> لتحييد إنزيم الأميلاز في اللعاب، بينما يعمل النحاس والزنك على التطهير، والإينوكسولون على تخفيف الالتهاب.', 
            en: 'Uses the <span class="glossary-term" onclick="openGlossary(\'amylpriv_patent\')">Amylpriv™</span> patent to neutralize salivary amylase, while Copper/Zinc purify, and Enoxolone reduces inflammation.' 
        },
        patient_benefit: { 
            ar: 'يهدئ التسلخات والاحمرار حول فم الرضيع فوراً (خاصة وقت التسنين واستخدام اللهاية)، ويرمم حاجز البشرة التالف.', 
            en: 'Instantly soothes rashes and redness around the infant\'s mouth (especially during teething/pacifier use), and repairs the damaged barrier.' 
        },
        active_ingredients: [
            { name: 'Amylpriv™ Patent', concentration: 'Patented | براءة اختراع', role: { ar: 'إبطال مفعول اللعاب المهيج.', en: 'Neutralizes irritating saliva.' } },
            { name: 'Copper & Zinc', concentration: 'Purifying | منقي', role: { ar: 'تطهير المنطقة ومنع التلوث.', en: 'Purifies area and prevents infection.' } },
            { name: 'Enoxolone & Panthenol', concentration: 'Soothing | مهدئ', role: { ar: 'تهدئة الاحمرار وترميم الجلد.', en: 'Soothes redness and repairs skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '2 إلى 3 مرات يومياً.', en: '2 to 3 times daily.' },
        step_in_routine: { ar: 'علاج موضعي.', en: 'Targeted treatment.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على المنطقة المتهيجة حول الفم بعد تنظيفها وتجفيفها بعناية.', en: 'Apply to the irritated peri-oral area after careful cleansing and drying.' },
        layering: { 
            do_not_mix_with: { ar: ['التطبيق على جروح مفتوحة تنزف.'], en: ['Application on open bleeding wounds.'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'التهاب الجلد حول الفم بسبب اللعاب، التسنين، أو العض على اللهاية/الإصبع.', en: 'Peri-oral dermatitis due to saliva, teething, or thumb/pacifier sucking.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام عازل يشكل طبقة واقية. لونه المائل للأزرق الفاتح ناتج طبيعياً عن النحاس.', en: 'Insulating texture forms a protective film. Its slight blue tint is naturally derived from Copper.' }
    }
});

// [32] Bioderma ABCDerm Cold-Cream
deepProductsList.push({
    id: 'bio_abcderm_cold_cream', brandId: 'bioderma', familyId: 'abcderm', brand: 'Bioderma',
    name: { ar: 'أبِسيديرم كولد كريم (مرطب شتوي مكثف)', en: 'ABCDerm Cold-Cream Face & Body' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'مستحلب ماء في زيت (W/O emulsion) يعتمد على شمع النحل وزيت اللوز الحلو، يشكل طبقة عازلة (Occlusive) لحماية بشرة الطفل من العوامل الجوية القاسية.', 
            en: 'A Water-in-Oil (W/O) emulsion based on Beeswax and Sweet Almond Oil, forming an occlusive shield to protect baby skin from harsh weather.' 
        },
        patient_benefit: { 
            ar: 'يغذي ويرطب بعمق، يزيل الإحساس بالشد وجفاف الشتاء القارس، ويحمي وجه وجسم الطفل من البرد والرياح.', 
            en: 'Deeply nourishes and hydrates, removes the feeling of tightness from harsh winter dryness, and protects baby\'s face/body from cold and wind.' 
        },
        active_ingredients: [
            { name: 'Beeswax (Cera Alba)', concentration: 'Occlusive | عازل', role: { ar: 'تكوين درع حماية ضد البرد.', en: 'Forms a protective shield against cold.' } },
            { name: 'Sweet Almond Oil', concentration: 'Nourishing | مغذي', role: { ar: 'تنعيم الجلد وتوفير الأحماض الدهنية.', en: 'Softens skin and provides fatty acids.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً (وخاصة قبل الخروج في البرد).', en: 'Once or twice daily (especially before going out in the cold).' },
        step_in_routine: { ar: 'الترطيب المكثف والحماية.', en: 'Intensive hydration and protection.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على بشرة نظيفة وجافة (الوجه والجسم).', en: 'Apply to clean, dry skin (face and body).' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['غسول أبِسيديرم كولد كريم الرغوي.'], en: ['ABCDerm Cold-Cream Cleansing Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الجافة للرضع، حماية الوجه من طقس الشتاء البارد، والتشققات السطحية.', en: 'Dry infant skin, protecting the face from cold winter weather, and superficial chapping.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام غني جداً ولكن يمتص جيداً لتوفير راحة فورية.', en: 'Very rich texture but absorbs well to provide instant comfort.' }
    }
});

// [33] Bioderma Photoderm Cream SPF 50+
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
            { name: 'UVA/UVB Filters', concentration: 'High Protection | عالي الحماية', role: { ar: 'منع حروق الشمس وتلف الخلايا.', en: 'Preventing sunburn and cellular damage.' } },
            { name: 'Moisturizing Glycerin', concentration: 'Rich | غني', role: { ar: 'حبس الرطوبة داخل الجلد.', en: 'Locking moisture into the skin.' } },
            { name: 'Sun Active Defense', concentration: 'Patented | براءة اختراع', role: { ar: 'تقوية مناعة الجلد ضد الأكسدة.', en: 'Strengthening skin immunity against oxidation.' } }
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

// [34] Bioderma Photoderm MAX Fluid SPF 100 (Tinted Versions)
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
            { name: 'Max UV Filters', concentration: 'SPF 100', role: { ar: 'صد تام لأشعة UVA/UVB القوية.', en: 'Total block of strong UVA/UVB rays.' } },
            { name: 'Mineral Color Pigments', concentration: 'High Coverage | تغطية عالية', role: { ar: 'توحيد لون البشرة وإخفاء العيوب.', en: 'Evening skin tone and hiding blemishes.' } }
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

// [35] Bioderma Atoderm Gel Douche
deepProductsList.push({
    id: 'bio_atoderm_gel_douche', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم جل دوش (منظف يومي لطيف)', en: 'Atoderm Gel Douche' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (فسيولوجي)', en: '5.5 (Physiological)' },
        mechanism: { 
            ar: 'غسول رغوي خالي من الصابون يعتمد على (Skin Protect Complex) لتحفيز إنتاج حمض الهيالورونيك، مع تقنية النحاس التي تعطي اللون الأزرق وتطهر الجلد.', 
            en: 'Soap-free foaming gel utilizing Skin Protect Complex to stimulate Hyaluronic Acid production, with Copper Sulfate providing blue color and purifying the skin.' 
        },
        patient_benefit: { 
            ar: 'ينظف الوجه والجسم بلطف شديد، يحمي من جفاف المياه العسرة، ويترك البشرة ناعمة.', 
            en: 'Gently cleanses face and body, protects against hard water dryness, and leaves skin soft.' 
        },
        active_ingredients: [
            { name: 'Skin Protect Complex', concentration: 'Patented | براءة اختراع', role: { ar: 'تقوية حاجز الجلد وحبس الرطوبة.', en: 'Strengthening skin barrier and locking moisture.' } },
            { name: 'Copper Sulfate', concentration: 'Purifying | منقي', role: { ar: 'تطهير الجلد بلطف ومنع البكتيريا.', en: 'Gentle skin purification and preventing bacteria.' } }
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

// [36] Bioderma Sebium Kerato+ (High Tolerance Gel-Cream)
deepProductsList.push({
    id: 'bio_sebium_kerato_plus', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم كيراتو بلس (علاج الحبوب عالي التحمل)', en: 'Sebium Kerato+' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (لأقصى فعالية تقشير)', en: 'Acidic for maximum exfoliation' },
        mechanism: { 
            ar: 'يعتمد على تقنية التقشير المزدوج (1.8% حمض ساليسيليك + 10% حمض المالييك) لاختراق المسام بفعالية مع الحفاظ على راحة الجلد وترطيبه لمدة 8 ساعات.', 
            en: 'Relies on Double Keratolytic technology (1.8% Salicylic + 10% Malic Acid) to effectively penetrate pores while maintaining skin comfort and 8h hydration.' 
        },
        patient_benefit: { 
            ar: 'يقلل الحبوب والآثار بنسبة 41% في يومين فقط، دون تسبب في جفاف أو قشرة أو تهيج للبشرة الحساسة.', 
            en: 'Reduces pimples and marks by 41% in just 2 days, without causing dryness, flaking, or irritation for sensitive skin.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid (BHA)', concentration: '1.8%', role: { ar: 'تنظيف المسام العميقة.', en: 'Deep pore cleansing.' } },
            { name: 'Malic Acid Ester (AHA)', concentration: '10%', role: { ar: 'تقشير سطحي لطيف وتنعيم الجلد.', en: 'Gentle surface exfoliation and skin smoothing.' } },
            { name: 'Fluidactiv™ Patent', concentration: 'Patented | براءة اختراع', role: { ar: 'منع انسداد المسام مستقبلياً.', en: 'Preventing future pore clogging.' } }
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

// [37] Bioderma Pigmentbio Foaming Cream
deepProductsList.push({
    id: 'bio_pigmentbio_foaming_cream', brandId: 'bioderma', familyId: 'pigmentbio', brand: 'Bioderma',
    name: { ar: 'بيجمنت بيو كريم رغوي (غسول تفتيح)', en: 'Pigmentbio Foaming Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly Acidic' },
        mechanism: { 
            ar: 'يجمع بين التقشير الفيزيائي اللطيف والتقشير الكيميائي (AHA) لإزالة الخلايا المصبوغة فوراً، مع تفتيح البشرة بتقنية LumiReveal.', 
            en: 'Combines gentle physical exfoliation and chemical peeling (AHA) to remove pigmented cells instantly, while brightening skin via LumiReveal technology.' 
        },
        patient_benefit: { 
            ar: 'ينظف البشرة بعمق ويعطي إشراقة فورية، ويمنع ظهور البقع الجديدة، ويمكن استخدامه كقناع تفتيح مكثف.', 
            en: 'Deeply cleanses and provides instant radiance, prevents new spots, and can be used as an intensive brightening mask.' 
        },
        active_ingredients: [
            { name: 'Citric Acid + Cellulose Acetate', concentration: 'Dual Exfoliant | مقشر مزدوج', role: { ar: 'تجديد خلايا البشرة وإزالة التصبغ السطحي.', en: 'Renewing skin cells and removing surface pigmentation.' } },
            { name: 'Coco Glucoside & Glyceryl Oleate', concentration: 'Hydrating Cleanser | منظف مرطب', role: { ar: 'الحفاظ على رطوبة الجلد أثناء التقشير.', en: 'Preserving skin moisture during exfoliation.' } }
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

// [38] Bioderma Sebium Gel Moussant Actif
deepProductsList.push({
    id: 'bio_sebium_gel_actif', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم جل موسان أكتيف (الغسول المركز)', en: 'Sebium Gel Moussant Actif' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (4.5) لتقشير أعمق', en: 'Acidic (4.5) for deeper peeling' },
        mechanism: { 
            ar: 'غسول علاجي مكثف يدمج (1% حمض الساليسيليك + 1.8% حمض الجليكوليك) لاختراق المسام المسدودة وإذابة الدهون المتحجرة.', 
            en: 'Intensive therapeutic cleanser combining (1% Salicylic + 1.8% Glycolic Acid) to penetrate clogged pores, dissolve hardened sebum.' 
        },
        patient_benefit: { 
            ar: 'يقلل البثور بنسبة 32% والرؤوس السوداء بنسبة 17%، ويترك المسام نظيفة تماماً دون التسبب في التهيج المعتاد للمقشرات القوية.', 
            en: 'Reduces pimples by 32% and blackheads by 17%, leaving pores perfectly clean without the typical irritation of strong exfoliants.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid (BHA)', concentration: '1%', role: { ar: 'تنظيف المسام من الداخل.', en: 'Cleansing pores from within.' } },
            { name: 'Glycolic Acid (AHA)', concentration: '1.8%', role: { ar: 'تقشير سطحي لتنعيم الجلد.', en: 'Surface exfoliation to smooth skin.' } },
            { name: 'Zinc Gluconate', concentration: 'Sebo-regulator | منظم دهون', role: { ar: 'تقليل اللمعان الفوري.', en: 'Immediate shine reduction.' } }
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
            { name: 'Vitamin PP (Niacinamide)', concentration: 'Active | فعال', role: { ar: 'تحفيز بناء ليبيدات الجلد.', en: 'Stimulating skin lipid synthesis.' } },
            { name: 'Zinc & Copper Sulfates', concentration: 'Purifying | منقي', role: { ar: 'تطهير الجلد ومنع الانتكاسات البكتيرية.', en: 'Purifying skin and preventing bacterial relapses.' } }
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

// [40] Bioderma Cicabio Pommade
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
            { name: 'Antalgicine™ Patent', concentration: 'Patented | براءة اختراع', role: { ar: 'تسكين فوري للألم والوخز.', en: 'Instant relief from pain and stinging.' } },
            { name: 'Zinc & Copper Sulfates', concentration: 'Purifying | منقي', role: { ar: 'منع العدوى البكتيرية في الجروح العميقة.', en: 'Preventing bacterial infection in deep wounds.' } },
            { name: 'Hyaluronic Acid + Lipids', concentration: 'Concentrated | مركز', role: { ar: 'خلق بيئة رطبة لالتئام أسرع.', en: 'Creating a moist environment for faster healing.' } }
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
// 📦 بلوك رقم (17): تأسيس فيلورجا (Filorga) - البلوك الأول
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة العلامة التجارية (Filorga) وعائلاتها ---
brandsList.push({
    id: 'filorga', name: 'Filorga',
    families: [
        { id: 'ncef', name: { ar: 'NCEF (التجديد الخلوي الشامل)', en: 'NCEF (Global Cell Renewal)' } },
        { id: 'time_filler', name: { ar: 'تايم-فيلر (تصحيح التجاعيد المتقدم)', en: 'Time-Filler (Wrinkle Correction)' } },
        { id: 'hydra_hyal', name: { ar: 'هيدرا-هيال (ترطيب وامتلاء مكثف)', en: 'Hydra-Hyal (Intense Plumping & Hydration)' } },
        { id: 'age_purify', name: { ar: 'إيدج-بيوريفاي (مكافحة التجاعيد وحب الشباب)', en: 'Age-Purify (Anti-Aging & Blemish)' } },
        { id: 'optim_eyes', name: { ar: 'أوبتيم-آيز (عناية محيط العين)', en: 'Optim-Eyes (Eye Care)' } },
        { id: 'skin_unify', name: { ar: 'سكين-يونيفاي (تفتيح وتوحيد اللون)', en: 'Skin-Unify (Illuminating & Even Tone)' } },
        { id: 'global_repair', name: { ar: 'جلوبال-ريبير (التغذية ومكافحة الشيخوخة الشاملة)', en: 'Global-Repair (Advanced Anti-Aging)' } },
        { id: 'oxygen_glow', name: { ar: 'أكسجين-جلو (نضارة وإشراقة فورية)', en: 'Oxygen-Glow (Instant Radiance)' } },
        { id: 'skin_prep', name: { ar: 'سكين-بريب (المنظفات والتقشير)', en: 'Skin-Prep (Cleansers & Peeling)' } },
        { id: 'sun_care', name: { ar: 'العناية بالشمس (UV-Protect)', en: 'Sun Care (UV Protection)' } }
    ]
});

// --- 2. إضافة مصطلحات القاموس الطبي (Glossary) الخاصة بفيلورجا ---

glossaryDict['ncef_complex'] = {
    title: { ar: 'مركب NCEF 🧬', en: 'NCEF Complex 🧬' },
    desc: { 
        ar: 'مركب حصري من فيلورجا (New Cellular Encapsulated Factors) يحتوي على حمض الهيالورونيك و 50 مكوناً نشطاً (فيتامينات، أحماض أمينية، معادن، إنزيمات مساعدة، مضادات أكسدة) مستوحى من حقن الميزوثيرابي لتجديد جودة الجلد من العمق.', 
        en: 'Filorga\'s exclusive complex containing Hyaluronic Acid and 50 revitalizing ingredients (vitamins, amino acids, minerals, coenzymes, antioxidants) inspired by meso-injections to renew skin quality from within.' 
    }
};

glossaryDict['chronospheres'] = {
    title: { ar: 'الكرونوسفير (Chronospheres) 🔮', en: 'Chronospheres 🔮' },
    desc: { 
        ar: 'نواقل مجهرية متطورة تغلف مركب NCEF وتضمن اختراقه العميق وتوزيعه التدريجي داخل طبقات الجلد المختلفة وصولاً إلى الأدمة، لضمان امتصاص وفعالية تضاهي الحقن التجميلية.', 
        en: 'Microscopic vectors encapsulating the NCEF complex, ensuring deep penetration and gradual release into the skin layers down to the dermis, mimicking injection efficacy.' 
    }
};

glossaryDict['hyaluro_youth'] = {
    title: { ar: 'مركب هيالورو-يوث (Hyaluro-Youth CX) 💧', en: 'Hyaluro-Youth CX 💧' },
    desc: { 
        ar: 'مركب يجمع بين 3 مكونات مضادة للتجاعيد: حمض الهيالورونيك الممتلئ، ببتيد منعم للخطوط، وجليكوببتيد معزز لمرونة الجلد، لتنعيم التجاعيد بشكل فعال.', 
        en: 'A complex combining 3 anti-wrinkle ingredients: plumping HA, a smoothing peptide, and a plumping glycopeptide to effectively smooth wrinkles.' 
    }
};

glossaryDict['dermo_rescue'] = {
    title: { ar: 'مركب ديرما-ريسكيو (Dermo-Rescue CX) 🌿', en: 'Dermo-Rescue CX 🌿' },
    desc: { 
        ar: 'مركب يعالج عيوب البشرة يدمج: 5 أحماض تقشير دقيق (Micro-peeling)، زنك منظم للدهون، ومستخلص نباتي مضاد للالتهابات لتقليل المسام والرؤوس السوداء والحبوب.', 
        en: 'A blemish-treating complex combining: 5 micro-peeling acids, sebum-regulating Zinc, and an anti-inflammatory plant extract to reduce pores, blackheads, and spots.' 
    }
};

// --- 3. المنتجات العميقة (Deep Products) ---

// [1] FILORGA NCEF SHOT BOOSTER 15 ML
deepProductsList.push({
    id: 'fil_ncef_shot', brandId: 'filorga', familyId: 'ncef', brand: 'Filorga',
    name: { ar: 'NCEF شوت (معزز التجديد المركز)', en: 'NCEF-Shot Supreme Polyrevitalizing Concentrate' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'جرعة يومية تعادل حقنة ميزوثيرابي واحدة. يحتوي على تركيز فائق من <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">مركب NCEF</span> المنقول عبر <span class="glossary-term" onclick="openGlossary(\'chronospheres\')">الكرونوسفير</span> لتنشيط الخلايا المنهكة وتكوين كولاجين وإيلاستين جديد في 10 أيام.', 
            en: 'A daily dose equivalent to 1 meso-injection. Features a supreme concentration of <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF Complex</span> delivered via <span class="glossary-term" onclick="openGlossary(\'chronospheres\')">Chronospheres</span> to revitalize exhausted cells and build new collagen/elastin in 10 days.' 
        },
        patient_benefit: { 
            ar: 'علاج مكثف لمدة 10 أيام يغير جودة الجلد تماماً؛ يمنح إشراقة قوية، يشد البشرة، ويملأ الخطوط بشكل درامي وسريع. مثالي للتحضير للمناسبات.', 
            en: 'An intensive 10-day treatment that completely alters skin quality; provides intense radiance, firmness, and dramatic rapid plumping of lines. Ideal pre-event prep.' 
        },
        active_ingredients: [
            { name: 'NCEF (50 Ingredients + HA)', concentration: 'Supreme Dose | جرعة فائقة', role: { ar: 'تجديد الخلايا ومحاكاة الحقن التجميلي.', en: 'Cellular renewal mimicking aesthetic injections.' } },
            { name: 'Pseudoalteromonas Extract', concentration: 'Active | فعال', role: { ar: 'بروتين بحري يعزز تماسك الخلايا ويقوي الجلد.', en: 'Marine protein enhancing cellular adhesion and skin strength.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً) ككورس لمدة 10 أيام.', en: 'Twice daily (AM & PM) as a 10-day course.' },
        step_in_routine: { ar: 'الخطوة الأولى بعد الغسول (قبل أي سيروم أو كريم).', en: 'First step post-cleanser (before any serum or cream).' },
        routine_step_number: 2,
        application: { ar: 'تُسحب الجرعة المحددة بالقطارة (إلى العلامة الموضحة) وتوزع على الوجه والرقبة مع التدليك الخفيف.', en: 'Draw the exact dose with the pipette (to the line) and apply to face/neck with light massage.' },
        layering: { 
            do_not_mix_with: { ar: ['التقشير الكيميائي العنيف في نفس الكورس لتجنب الإرهاق الخلوي.'], en: ['Harsh chemical peeling during the course to avoid cellular exhaustion.'] }, 
            best_mixed_with: { ar: ['كريم NCEF-Reverse للحصول على نتيجة ميزوثيرابي متكاملة.'], en: ['NCEF-Reverse cream for a complete mesotherapy result.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة المنهكة، المجهدة، الباهتة، وتغير الفصول، التحضير لمناسبة مهمة.', en: 'Exhausted, stressed, dull skin, change of seasons, event preparation.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام مائي خفيف جداً يمتص في ثوانٍ دون ترك أثر.', en: 'Ultra-light watery texture absorbing in seconds without residue.' }
    }
});

// [2] FILORGA OXYGEN - GLOW CC CREAM SPF 30
deepProductsList.push({
    id: 'fil_oxygen_glow_cc', brandId: 'filorga', familyId: 'oxygen_glow', brand: 'Filorga',
    name: { ar: 'أكسجين-جلو سي سي كريم SPF 30', en: 'Oxygen-Glow CC Cream SPF 30' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يجمع بين (معزز الأكسجين، حمض الهيالورونيك، وإنزيم L-enzyme المزيل للسموم) لتنشيط إشراقة البشرة، مع أصباغ دقيقة التغليف تتكيف مع كل ألوان البشرة وفلاتر حماية من أشعة الشمس.', 
            en: 'Combines (oxygenation booster, HA, detoxifying L-enzyme) to boost skin radiance, with micro-encapsulated pigments that adapt to all skin tones and UV filters.' 
        },
        patient_benefit: { 
            ar: 'يوفر تغطية طبيعية فورية توحد لون البشرة، يزيل بهتان اللون المائل للرمادي، ويحمي من أشعة الشمس والتلوث البيئي.', 
            en: 'Provides instant natural coverage to even skin tone, removes grayish dullness, and protects from sun rays and environmental pollution.' 
        },
        active_ingredients: [
            { name: 'Nasturtium Extract', concentration: 'Active | فعال', role: { ar: 'تعزيز نقل الأكسجين للخلايا لنضارة طبيعية.', en: 'Boosting oxygen transport to cells for natural glow.' } },
            { name: 'Micro-encapsulated Pigments', concentration: 'Cosmetic', role: { ar: 'توحيد لون البشرة بشكل يتكيف مع لونها الأصلي.', en: 'Evening skin tone adapting to the original skin color.' } },
            { name: 'UV Filters', concentration: 'SPF 30', role: { ar: 'حماية من الأشعة فوق البنفسجية والشيخوخة الضوئية.', en: 'Protection against UV and photoaging.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (صباحاً).', en: 'Daily (AM).' },
        step_in_routine: { ar: 'الخطوة الأخيرة (كريم نهار / تغطية / واقي شمس).', en: 'Last step (Day cream / Coverage / SPF).' },
        routine_step_number: 4,
        application: { ar: 'يوزع بلطف على الوجه والرقبة للحصول على تغطية متساوية.', en: 'Distribute gently over face and neck for even coverage.' },
        layering: { 
            do_not_mix_with: { ar: ['كريمات الأساس الثقيلة جداً (تفقد مظهر النضارة الطبيعي).'], en: ['Very heavy foundations (loses the natural glow effect).'] }, 
            best_mixed_with: { ar: ['كريم أوبتيم-آيز لمحيط العين.'], en: ['Optim-Eyes cream for eye contour.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الباهتة، اللون غير الموحد، نقص الإشراقة، والحاجة لتغطية خفيفة مع حماية.', en: 'Dull skin, uneven tone, lack of radiance, and need for light coverage with protection.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يتميز بلون وردي خفيف يتغير ليطابق لون البشرة عند التدليك (Universal Shade).', en: 'Features a light pink tint that transforms to match skin tone upon massaging (Universal Shade).' }
    }
});

// [3] FILORGA SKIN PREP MICELLAR SOLUTION 400 ML
deepProductsList.push({
    id: 'fil_skin_prep_micellar', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سكين-بريب محلول ميسيلار', en: 'Skin Prep Micellar Solution' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي', en: 'Physiological' },
        mechanism: { 
            ar: 'محلول ميسيلار غني بمواد مرطبة ومهدئة (تريهالوز) يعمل كمنظف مضاد للشيخوخة، يزيل المكياج تماماً دون التأثير على التوازن المائي للجلد.', 
            en: 'Micellar solution enriched with hydrating and soothing actives (Trehalose) acting as an anti-aging cleanser, perfectly removing makeup without affecting the skin\'s water balance.' 
        },
        patient_benefit: { 
            ar: 'ينظف الوجه والعينين بعمق، يزيل المكياج المقاوم للماء، ويترك البشرة مرطبة وجاهزة لاستقبال العلاجات التجميلية.', 
            en: 'Deeply cleanses face and eyes, removes waterproof makeup, and leaves skin hydrated and prepped for cosmetic treatments.' 
        },
        active_ingredients: [
            { name: 'Micelles', concentration: 'Active | فعال', role: { ar: 'التقاط الشوائب والدهون بلطف.', en: 'Gently capturing impurities and sebum.' } },
            { name: 'Trehalose', concentration: 'Hydrating | مرطب', role: { ar: 'حماية الخلايا من الجفاف والاحتفاظ بالماء.', en: 'Protecting cells from dehydration and retaining water.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'الخطوة الأولى في تحضير البشرة.', en: 'First step in skin preparation.' },
        routine_step_number: 1,
        application: { ar: 'يُبلل قطن نظيف ويُمسح الوجه والعينين. لا يتطلب الشطف.', en: 'Soak a cotton pad and wipe face and eyes. No rinsing required.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف للعينين.'], en: ['Harsh rubbing of the eyes.'] }, 
            best_mixed_with: { ar: ['غسول فيلورجا الرغوي (للتنظيف المزدوج).'], en: ['Filorga Foam Cleanser (for double cleansing).'] } 
        }
    },
    precautions: {
        indications: { ar: 'إزالة المكياج، التنظيف اليومي لجميع أنواع البشرة، والتحضير للروتين المضاد للشيخوخة.', en: 'Makeup removal, daily cleansing for all skin types, prepping for anti-aging routine.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مُعزز بخصائص مرطبة تمنع إحساس الشد بعد التنظيف.', en: 'Enhanced with hydrating properties preventing tightness post-cleansing.' }
    }
});

// [4] FILORGA AGE PURIFY FLUID 50 ML
deepProductsList.push({
    id: 'fil_age_purify_fluid', brandId: 'filorga', familyId: 'age_purify', brand: 'Filorga',
    name: { ar: 'إيدج-بيوريفاي فلويد (سائل التجاعيد والحبوب)', en: 'Age-Purify Double Correction Fluid' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'علاج مزدوج يدمج <span class="glossary-term" onclick="openGlossary(\'hyaluro_youth\')">Hyaluro-Youth CX</span> لملء التجاعيد و <span class="glossary-term" onclick="openGlossary(\'dermo_rescue\')">Dermo-Rescue CX</span> الذي يضم 5 أحماض وزِنك لتقشير الخلايا الميتة وتنظيم الإفرازات الدهنية، مع حماية ضد التصاق البكتيريا.', 
            en: 'Dual treatment integrating <span class="glossary-term" onclick="openGlossary(\'hyaluro_youth\')">Hyaluro-Youth CX</span> to plump wrinkles and <span class="glossary-term" onclick="openGlossary(\'dermo_rescue\')">Dermo-Rescue CX</span> featuring 5 acids and Zinc to exfoliate dead cells and regulate sebum, with anti-bacterial adhesion protection.' 
        },
        patient_benefit: { 
            ar: 'يحل معضلة البالغين (تجاعيد + حبوب)؛ يشد البشرة ويملأ الخطوط بينما يعالج اللمعان، المسام الواسعة، والبثور النشطة.', 
            en: 'Solves the adult dilemma (Wrinkles + Blemishes); firms and plumps lines while treating shine, enlarged pores, and active breakouts.' 
        },
        active_ingredients: [
            { name: '5 Micro-peeling Acids (AHA/BHA/PHA)', concentration: 'Active | فعال', role: { ar: 'تجديد السطح وإزالة الانسدادات.', en: 'Surface renewal and removing clogs.' } },
            { name: 'Zinc + Exopolysaccharide', concentration: 'Purifying | منقي', role: { ar: 'تقليل الدهون ومنع التصاق بكتيريا حب الشباب.', en: 'Reducing sebum and preventing acne bacteria adhesion.' } },
            { name: 'Hyaluronic Acid + Peptides', concentration: 'Plumping | ممتلئ', role: { ar: 'محاربة التجاعيد وترميم الحجم.', en: 'Fighting wrinkles and restoring volume.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'كريم المعالجة والترطيب الأساسي.', en: 'Core treatment and hydration cream.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على كامل الوجه كمرطب يومي.', en: 'Apply to entire face as a daily moisturizer.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات إضافية في نفس الروتين (قد تسبب تهيج).'], en: ['Additional exfoliants in the same routine (may cause irritation).'] }, 
            best_mixed_with: { ar: ['سيروم Age-Purify Intensive.'], en: ['Age-Purify Intensive Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب المتأخر (Adult Acne)، التجاعيد الأولى، المسام الواسعة، واللمعان.', en: 'Adult acne, first wrinkles, enlarged pores, and shine.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'قوام (Fluid) مطفي خفيف جداً يمنع اللمعان طوال اليوم.', en: 'Ultra-light mattifying fluid texture preventing shine all day.' }
    }
});

// [5] FILORGA HYDRA HYAL CREAM 50 ML
deepProductsList.push({
    id: 'fil_hydra_hyal_cream', brandId: 'filorga', familyId: 'hydra_hyal', brand: 'Filorga',
    name: { ar: 'هيدرا-هيال كريم (مرطب هيالورونيك مكثف)', en: 'Hydra-Hyal Hydrating Plumping Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يحتوي على 5 أنواع من حمض الهيالورونيك (منخفض، متوسط، عالي الوزن الجزيئي، مغلف، ومتقاطع الروابط) لترطيب البشرة من السطح حتى أعمق الطبقات، مع مستخلص السوفورا جابونيكا لمكافحة شيخوخة الجلد.', 
            en: 'Contains 5 types of HA (low, medium, high molecular weight, encapsulated, cross-linked) to hydrate skin from surface to deepest layers, with Sophora Japonica extract for anti-aging.' 
        },
        patient_benefit: { 
            ar: 'يوفر ترطيباً عميقاً، يملأ (Plump) الخطوط الرفيعة الناتجة عن الجفاف، ويعيد الحجم والإشراقة للبشرة المترهلة.', 
            en: 'Provides deep hydration, plumps dehydration fine lines, and restores volume and radiance to sagging skin.' 
        },
        active_ingredients: [
            { name: '5 Types of Hyaluronic Acid', concentration: 'Intense | مكثف', role: { ar: 'ترطيب متعدد الطبقات ونفخ الخطوط.', en: 'Multi-layer hydration and line plumping.' } },
            { name: 'Sophora Japonica Extract', concentration: 'Antioxidant | مضاد أكسدة', role: { ar: 'حماية حمض الهيالورونيك الطبيعي من التكسر.', en: 'Protecting natural HA from degradation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'كريم الترطيب.', en: 'Hydrating cream.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك على الوجه والرقبة، يُفضل بعد سيروم هيدرا-هيال للحصول على أقصى فعالية.', en: 'Massage onto face and neck, preferably after Hydra-Hyal Serum for maximum efficacy.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد تعارض.'], en: ['No contraindications.'] }, 
            best_mixed_with: { ar: ['سيروم Hydra-Hyal.', 'أي مكونات نشطة قاسية للحد من جفافها.'], en: ['Hydra-Hyal Serum.', 'Any harsh actives to buffer their dryness.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الجفاف الشديد، الخطوط الرفيعة المرتبطة بنقص الماء، وفقدان الحجم الطبيعي.', en: 'Severe dehydration, water-loss fine lines, and loss of natural volume.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام كريمي ناعم منعش، مناسب للبشرة العادية إلى الجافة.', en: 'Refreshing smooth cream texture, suitable for normal to dry skin.' }
    }
});
// ==========================================
// 📦 بلوك رقم (18): فيلورجا (عناية محيط العين + العلاج الليلي)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة مصطلحات جديدة للقاموس (Glossary) ---

glossaryDict['express_recover'] = {
    title: { ar: 'مركب التعافي السريع 🌙', en: 'Express-Recover Complex 🌙' },
    desc: { 
        ar: 'مركب ليلي متطور يجمع بين معززات مرونة الجلد (Elastin booster) ومستخلصات نباتية مزيلة للسموم (Detoxifying)، يعمل أثناء النوم لمنع "تجاعيد الوسادة" وتورم الوجه الصباحي.', 
        en: 'An advanced night complex combining elastin boosters and detoxifying plant extracts, working during sleep to prevent "pillow wrinkles" and morning facial puffiness.' 
    }
};

glossaryDict['eye_impact_tech'] = {
    title: { ar: 'تقنية آي-إمباكت (Eye-Impact) 👁️', en: 'Eye-Impact Technology 👁️' },
    desc: { 
        ar: 'تقنية تستهدف مشاكل محيط العين الثلاثية؛ تستخدم مركب (Chrysin) لتقليل التصبغ الدموي (الهالات)، وببتيدات معززة للدورة اللمفاوية (للانتفاخات)، وحمض هيالورونيك (للتجاعيد).', 
        en: 'A technology targeting triple eye contour issues; uses Chrysin to reduce blood pigmentation (dark circles), lymphatic-boosting peptides (puffiness), and HA (wrinkles).' 
    }
};

// --- 2. المنتجات العميقة (Deep Products) ---

// [6] FILORGA TIME-FILLER NIGHT 5XP CREAM 50 ML
deepProductsList.push({
    id: 'fil_time_filler_night', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم-فيلر نايت 5XP (كريم التجاعيد الليلي)', en: 'Time-Filler Night 5XP Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يدمج التقنيات الخمسة لكريم النهار مع <span class="glossary-term" onclick="openGlossary(\'express_recover\')">مركب التعافي السريع</span>. يحفز تجديد الخلايا أثناء ذروة النشاط الليلي، ويمنع احتباس السوائل الذي يسبب انتفاخ الوجه وتجاعيد النوم.', 
            en: 'Integrates the 5 techniques of the day cream with the <span class="glossary-term" onclick="openGlossary(\'express_recover\')">Express-Recover Complex</span>. Stimulates cell renewal during peak night activity, preventing fluid retention that causes morning puffiness and sleep wrinkles.' 
        },
        patient_benefit: { 
            ar: 'يصحح جميع أنواع التجاعيد أثناء النوم، وتستيقظ المريضة بوجه مشدود، مرتاح، وخالٍ من خطوط الوسادة أو الانتفاخات الصباحية.', 
            en: 'Corrects all types of wrinkles during sleep. The patient wakes up with a tightened, rested face, free from pillow lines or morning puffiness.' 
        },
        active_ingredients: [
            { name: 'Hexapeptide + NCEF', concentration: 'Botox-like | يحاكي البوتوكس', role: { ar: 'إرخاء عضلات الوجه أثناء النوم لتقليل الخطوط.', en: 'Relaxing facial muscles during sleep to reduce lines.' } },
            { name: 'Passion Fruit Extract', concentration: 'Active | فعال', role: { ar: 'تحفيز التصريف اللمفاوي الليلي.', en: 'Stimulating nighttime lymphatic drainage.' } },
            { name: 'Gluconolactone (PHA)', concentration: 'Micro-peeling | تقشير دقيق', role: { ar: 'تجديد سطح الجلد وتنعيمه بلطف.', en: 'Surface renewal and gentle smoothing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily PM.' },
        step_in_routine: { ar: 'الخطوة الأخيرة في الروتين الليلي.', en: 'Last step in the night routine.' },
        routine_step_number: 4,
        application: { ar: 'يُدلك بلطف على كامل الوجه والرقبة بعد تنظيفهما وتطبيق السيروم.', en: 'Massage gently onto the entire face and neck after cleansing and serum application.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات قوية جداً (يحتوي بالفعل على مقشرات لطيفة).'], en: ['Very strong exfoliants (already contains mild exfoliants).'] }, 
            best_mixed_with: { ar: ['سيروم Time-Filler Intensive.', 'NCEF Shot.'], en: ['Time-Filler Intensive Serum.', 'NCEF Shot.'] } 
        }
    },
    precautions: {
        indications: { ar: 'تجاعيد النوم، تورم الوجه الصباحي، علامات الإرهاق، وجميع أنواع التجاعيد العميقة والسطحية.', en: 'Sleep wrinkles, morning facial puffiness, signs of fatigue, and all deep/surface wrinkles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام جل-كريم ناعم يغلف البشرة كقناع ليلي رقيق.', en: 'Smooth gel-cream texture enveloping the skin like a thin night mask.' }
    }
});

// [7] FILORGA TIME-FILLER EYES CREAM 15 ML
deepProductsList.push({
    id: 'fil_time_filler_eyes', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم-فيلر آيز (كريم تجاعيد العين والرموش)', en: 'Time-Filler Eyes Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً (مطابق للعين)', en: 'Physiologically Balanced (Eye-compatible)' },
        mechanism: { 
            ar: 'يستهدف تجاعيد العين بـ <span class="glossary-term" onclick="openGlossary(\'botox_like_peptide\')">ببتيدات البوتوكس</span>، ويعالج تجويف العين بحمض الهيالورونيك المغلف، بينما يشد الجفون العلوية بمستخلص شجرة الحرير، ويكثف الرموش بمادة (Matrikine).', 
            en: 'Targets eye wrinkles with <span class="glossary-term" onclick="openGlossary(\'botox_like_peptide\')">Botox-like peptides</span>, treats hollows with encapsulated HA, lifts upper eyelids via Silk Tree extract, and densifies lashes with Matrikine.' 
        },
        patient_benefit: { 
            ar: 'علاج شامل لمنطقة العين؛ يشد الجفون المترهلة، يملأ التجاعيد الغائرة، يقلل الهالات الداكنة، ويزيد من كثافة وطول الرموش.', 
            en: 'Global eye treatment; lifts sagging eyelids, plumps hollow wrinkles, reduces dark circles, and increases lash density and length.' 
        },
        active_ingredients: [
            { name: 'Tripeptide', concentration: 'Relaxing | مرخي عضلات', role: { ar: 'تنعيم تجاعيد قدم الغراب (حول العين).', en: 'Smoothing crow\'s feet wrinkles.' } },
            { name: 'Matrikine + Provitamin B5', concentration: 'Active | فعال', role: { ar: 'تحفيز نمو وتقوية بصيلات الرموش.', en: 'Stimulating growth and strengthening lash follicles.' } },
            { name: 'Silk Tree Extract', concentration: 'Lifting | شد', role: { ar: 'رفع الجفن العلوي المترهل.', en: 'Lifting the sagging upper eyelid.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'عناية محيط العين (قبل كريم الوجه).', en: 'Eye contour care (before face cream).' },
        routine_step_number: 2,
        application: { ar: 'يُربت بلطف حول العينين، وعلى الجفن العلوي، وحتى جذور الرموش.', en: 'Dab gently around the eyes, on the upper eyelid, and down to the lash roots.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف للعين.'], en: ['Harsh rubbing of the eye.'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'تجاعيد محيط العين، ترهل الجفون، تجاويف العين الغائرة، وضعف الرموش.', en: 'Eye contour wrinkles, sagging eyelids, hollow sunken eyes, and weak lashes.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره من قبل أطباء العيون. لا يسيل داخل العين.', en: 'Ophthalmologically tested. Does not migrate into the eye.' }
    }
});

// [8] FILORGA OPTIM EYES CREAM 15 ML
deepProductsList.push({
    id: 'fil_optim_eyes', brandId: 'filorga', familyId: 'optim_eyes', brand: 'Filorga',
    name: { ar: 'أوبتيم-آيز (كريم الهالات والانتفاخات)', en: 'Optim-Eyes Intensive Revitalizing 3-in-1' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي', en: 'Physiological' },
        mechanism: { 
            ar: 'يستخدم تقنية <span class="glossary-term" onclick="openGlossary(\'eye_impact_tech\')">Eye-Impact</span> مع مركب (Melano-Tracker) لإزالة التصبغات الدموية والميلانينية معاً، بالإضافة إلى ببتيدات تصريف السوائل لتقليل الانتفاخ، و NCEF للتنعيم.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'eye_impact_tech\')">Eye-Impact</span> technology with (Melano-Tracker) to eliminate both vascular and melanin pigmentation, plus fluid-draining peptides for puffiness, and NCEF for smoothing.' 
        },
        patient_benefit: { 
            ar: 'أفضل كريم مبيعاً للهالات في فرنسا. يمحو الهالات السوداء (بأنواعها)، يخفف الانتفاخات الصباحية فوراً، وينعش مظهر العين المتعبة.', 
            en: 'The best-selling dark circle cream in France. Erases dark circles (all types), instantly reduces morning puffiness, and refreshes tired eyes.' 
        },
        active_ingredients: [
            { name: 'Chrysin + N-hydroxysuccinimide', concentration: 'Active | فعال', role: { ar: 'إزالة التصبغ الدموي (الهالات الزرقاء/الحمراء).', en: 'Eliminating vascular pigmentation (blue/red circles).' } },
            { name: 'Hesperidin + Peptides', concentration: 'Draining | مصِرف', role: { ar: 'تصريف السوائل اللمفاوية وتقليل الأكياس تحت العين.', en: 'Draining lymphatic fluids and reducing under-eye bags.' } },
            { name: 'Hyaluronic Acid + NCEF', concentration: 'Revitalizing | مجدد', role: { ar: 'ترطيب عميق وتنعيم الخطوط.', en: 'Deep hydration and line smoothing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'عناية محيط العين.', en: 'Eye contour care.' },
        routine_step_number: 2,
        application: { ar: 'يُربت برفق من الزاوية الداخلية للعين إلى الخارج. (يُنصح بحفظه في الثلاجة لزيادة مفعول التبريد والشد).', en: 'Dab gently from the inner corner outwards. (Recommended to keep in the fridge for enhanced cooling/lifting effect).' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['غسول Optim-Eyes Lotion لإزالة المكياج.'], en: ['Optim-Eyes Lotion for makeup removal.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الهالات السوداء (الوعائية والمصبوغة)، الانتفاخات وأكياس العين، علامات الإرهاق الشديد والتعب.', en: 'Dark circles (vascular & pigmented), puffiness and eye bags, severe signs of fatigue.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام منعش ومرطب، يمتص بسرعة ولا يتعارض مع الكونسيلر.', en: 'Refreshing and hydrating texture, absorbs quickly and does not pill under concealer.' }
    }
});

// [9] FILORGA NCEF-REVERSE EYE CREAM 15 ML
deepProductsList.push({
    id: 'fil_ncef_reverse_eyes', brandId: 'filorga', familyId: 'ncef', brand: 'Filorga',
    name: { ar: 'NCEF-ريفرس آيز (كريم التجديد الشامل للعين)', en: 'NCEF-Reverse Eyes Supreme Multi-Correction' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يحتوي على أعلى تركيز من <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> مخصص للعين، مدمج بتقنية (Genius-Vector) لتوصيل 5 مكونات نشطة (HA، كولاجين، فيتامين C، إسسين، وكافيين) إلى عمق الأدمة.', 
            en: 'Contains the highest concentration of <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> formulated for the eyes, combined with Genius-Vector tech to deliver 5 actives (HA, Collagen, Vit C, Escin, Caffeine) deep into the dermis.' 
        },
        patient_benefit: { 
            ar: 'تصحيح شامل 5 في 1: يعالج التجاعيد، الهالات، الانتفاخات، الترهل، والبهتان في منتج واحد فائق الفعالية.', 
            en: 'Global 5-in-1 correction: treats wrinkles, dark circles, puffiness, sagging, and dullness in one supremely effective product.' 
        },
        active_ingredients: [
            { name: 'NCEF + Collagen', concentration: 'Supreme | فائق', role: { ar: 'إعادة بناء أنسجة محيط العين وشد الترهل.', en: 'Rebuilding eye contour tissues and lifting sagging.' } },
            { name: 'Caffeine + Escin', concentration: 'Active | فعال', role: { ar: 'تنشيط الدورة الدموية بقوة لإنهاء الهالات والانتفاخ.', en: 'Strongly stimulating circulation to end circles and puffiness.' } },
            { name: 'Vitamin C', concentration: 'Brightening | مفتح', role: { ar: 'إشراقة فورية ومحاربة التصبغ.', en: 'Instant radiance and fighting pigmentation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'علاج محيط العين المكثف.', en: 'Intensive eye contour treatment.' },
        routine_step_number: 2,
        application: { ar: 'يوضع يومياً حول العينين بالتربيت الخفيف حتى يمتص تماماً.', en: 'Apply daily around the eyes with light dabbing until fully absorbed.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول المركز لمحيط العين (لتجنب التحسس).'], en: ['Concentrated retinol for eye contour (to avoid sensitivity).'] }, 
            best_mixed_with: { ar: ['سيروم NCEF للوجه.'], en: ['NCEF Face Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'علامات الشيخوخة المتقدمة حول العين، الترهل، الهالات العنيدة، والتجاعيد المتعددة.', en: 'Advanced aging signs around eyes, sagging, stubborn dark circles, and multiple wrinkles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تركيبة غنية ومريحة، تعتبر الأقوى كعلاج شامل للعين في براند فيلورجا.', en: 'Rich and comforting formula, considered the most potent global eye treatment in Filorga.' }
    }
});

// [10] FILORGA GLOBAL REPAIR EYES & LIPS CREAM 15 ML
deepProductsList.push({
    id: 'fil_global_repair_eyes_lips', brandId: 'filorga', familyId: 'global_repair', brand: 'Filorga',
    name: { ar: 'جلوبال-ريبير للعين والشفاه (تغذية ومكافحة شيخوخة)', en: 'Global-Repair Eyes & Lips Multi-Revitalising Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستهدف المناطق الرقيقة المفتقرة للدهون (العين والشفايف). يدمج 3 مغذيات فائقة (سيراميد، أوميجا، فيتامينات) مع 50 مكون ميزوثيرابي، وخلاصة (Tuberose) لتنشيط الدورة الدموية المجهرية.', 
            en: 'Targets thin, lipid-depleted areas (eyes & lips). Combines 3 super-nutrients (Ceramides, Omegas, Vitamins) with 50 meso-ingredients, and Tuberose extract to activate micro-circulation.' 
        },
        patient_benefit: { 
            ar: 'يغذي بعمق البشرة الرقيقة والجافة، يمحو خطوط "الباركود" فوق الشفاه، ويشد محيط العين المترهل مع إعطاء حيوية فورية.', 
            en: 'Deeply nourishes thin, dry skin, erases "barcode" lines above lips, and lifts sagging eye contours with instant vitality.' 
        },
        active_ingredients: [
            { name: 'Ceramides + Omegas (3,6,9) + Vitamins', concentration: 'Super-Nutrients | مغذيات فائقة', role: { ar: 'ترميم الحاجز الدهني المفقود بقوة.', en: 'Powerfully restoring the lost lipid barrier.' } },
            { name: 'Tuberose Extract', concentration: 'Active | فعال', role: { ar: 'تجديد الخلايا وتقليل الهالات.', en: 'Cell renewal and reducing dark circles.' } },
            { name: 'Sesame Seed Extract', concentration: 'Smoothing | منعم', role: { ar: 'تنعيم خطوط محيط الشفاه (الباركود).', en: 'Smoothing peri-oral lines (barcode lines).' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'علاج العين والشفاه.', en: 'Eye and Lip treatment.' },
        routine_step_number: 2,
        application: { ar: 'يوضع بطبقة رقيقة حول العينين ومحيط الشفاه.', en: 'Apply a thin layer around the eyes and the lip contour.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم وكريم Global-Repair للوجه.'], en: ['Global-Repair Face Serum & Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الشيخوخة المتقدمة، الجفاف الشديد حول العين والشفايف، ترهل الأنسجة، والتجاعيد العميقة.', en: 'Advanced aging, severe dryness around eyes and lips, tissue sagging, and deep wrinkles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مثالي للبشرة الناضجة (Mature Skin) ولمن يعانون من جفاف مزمن في هذه المناطق.', en: 'Ideal for mature skin and those suffering from chronic dryness in these areas.' }
    }
});
// ==========================================
// 📦 بلوك رقم (19): فيلورجا (عناية الأكسجين + المنظفات والتقشير)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة مصطلحات جديدة للقاموس (Glossary) ---

glossaryDict['photoperfector_hd'] = {
    title: { ar: 'فوتو-بيرفيكتور (Photoperfector HD) ✨', en: 'Photoperfector HD ✨' },
    desc: { 
        ar: 'تقنية بصرية متطورة تعتمد على جزيئات لؤلؤية دقيقة تعكس الضوء بذكاء لتمويه العيوب والهالات فوراً، وإعطاء تأثير "الفلتر" الطبيعي للبشرة.', 
        en: 'An advanced optical technology using fine pearlescent particles that cleverly reflect light to instantly blur flaws and circles, giving a natural "filter" effect.' 
    }
};

glossaryDict['oxygen_releaser'] = {
    title: { ar: 'ناقلات الأكسجين (Oxygen Releaser) 🫧', en: 'Oxygen Releaser 🫧' },
    desc: { 
        ar: 'جزيئات ذكية تلتقط الأكسجين من الهواء وتضخه مباشرة داخل الخلايا المجهدة، مما يعيد تنشيط التنفس الخلوي ويمنح البشرة توهجاً فورياً وحيوية.', 
        en: 'Smart molecules that capture oxygen from the air and pump it directly into exhausted cells, reactivating cellular respiration for an instant glow and vitality.' 
    }
};

glossaryDict['aqua_mx'] = {
    title: { ar: 'تقنية أكوا-إم إكس (Aqua-MX) 💧', en: 'Aqua-MX Technology 💧' },
    desc: { 
        ar: 'مستشعر مائي (Water Sensor) يضمن ترطيباً فلاشياً سريعاً ودائماً، ويهيئ مسام البشرة لامتصاص السيرومات والكريمات العلاجية بفعالية مضاعفة.', 
        en: 'A water sensor technology ensuring rapid and lasting flash hydration, prepping skin pores to absorb therapeutic serums and creams with multiplied efficacy.' 
    }
};

// --- 2. المنتجات العميقة (Deep Products) ---

// [11] FILORGA OXYGEN GLOW EYES 15 ML
deepProductsList.push({
    id: 'fil_oxygen_glow_eyes', brandId: 'filorga', familyId: 'oxygen_glow', brand: 'Filorga',
    name: { ar: 'أكسجين-جلو آيز (كريم إشراقة العين)', en: 'Oxygen-Glow Eyes Super-Smoothing Radiance' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يدمج مركب (Super-Skin Boosting Factors) الذي يحتوي على معززات الأكسجين وحمض الهيالورونيك، مع تقنية <span class="glossary-term" onclick="openGlossary(\'photoperfector_hd\')">Photoperfector HD</span> وتيتراهيكسيل ديسيل أسكوربات (فيتامين C) لتفتيح محيط العين فوراً.', 
            en: 'Integrates (Super-Skin Boosting Factors) containing oxygen boosters and HA, with <span class="glossary-term" onclick="openGlossary(\'photoperfector_hd\')">Photoperfector HD</span> tech and Tetrahexyldecyl Ascorbate (Vit C) to instantly illuminate the eye contour.' 
        },
        patient_benefit: { 
            ar: 'يعالج العيون المتعبة والباهتة فوراً؛ يملأ الخطوط الدقيقة، يموّه الهالات السوداء بصرياً وعلاجياً، ويمنح نظرة منتعشة ومضيئة.', 
            en: 'Instantly treats tired, dull eyes; plumps fine lines, blurs dark circles optically and therapeutically, granting a refreshed, luminous look.' 
        },
        active_ingredients: [
            { name: 'Oxygen-Booster', concentration: 'Active | فعال', role: { ar: 'تنشيط الدورة الدموية الدقيقة حول العين.', en: 'Stimulating micro-circulation around the eye.' } },
            { name: 'Illuminating Micro-Pigments', concentration: 'Cosmetic | تجميلي', role: { ar: 'تفتيح بصري فوري للهالات (تأثير الكونسيلر).', en: 'Instant optical brightening of dark circles (concealer effect).' } },
            { name: 'L-Enzyme', concentration: 'Detoxifying | مزيل سموم', role: { ar: 'التخلص من الخلايا الميتة والسموم المتراكمة.', en: 'Eliminating dead cells and accumulated toxins.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'عناية محيط العين.', en: 'Eye contour care.' },
        routine_step_number: 2,
        application: { ar: 'يُربت برفق حول العين. يمكن استخدامه كـ (هايلايتر) فوق المكياج لزيادة الإضاءة.', en: 'Dab gently around the eyes. Can be used as a highlighter over makeup for extra glow.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم Oxygen-Glow للوجه.'], en: ['Oxygen-Glow Face Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'محيط العين الباهت، الهالات الوراثية والمكتسبة، الخطوط الدقيقة، وعلامات السهر.', en: 'Dull eye contour, genetic and acquired dark circles, fine lines, and signs of sleeplessness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره من قبل أطباء العيون. قوامه جل-كريم مضيء.', en: 'Ophthalmologically tested. Luminous gel-cream texture.' }
    }
});

// [12] FILORGA OXYGEN - PEEL LOTION 150 ML
deepProductsList.push({
    id: 'fil_oxygen_peel_lotion', brandId: 'filorga', familyId: 'oxygen_glow', brand: 'Filorga',
    name: { ar: 'أكسجين-بيل (لوشن التقشير الدقيق المجدد)', en: 'Oxygen-Peel Re-Oxygenating Micro-Peeling Lotion' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (للتقشير الفعال)', en: 'Acidic (for effective peeling)' },
        mechanism: { 
            ar: 'لوشن تقشير يومي يجمع كوكتيل من 6 أحماض (AHA/BHA/PHA) بتركيز 6% لتجديد سطح الجلد تدريجياً، مع نواقل <span class="glossary-term" onclick="openGlossary(\'oxygen_releaser\')">الأكسجين</span> وحمض الهيالورونيك لتفادي جفاف التقشير المعتاد.', 
            en: 'A daily peeling lotion combining a cocktail of 6 acids (AHA/BHA/PHA) at 6% to gradually renew the skin surface, with <span class="glossary-term" onclick="openGlossary(\'oxygen_releaser\')">Oxygen releasers</span> and HA to prevent typical peeling dryness.' 
        },
        patient_benefit: { 
            ar: 'يقلص المسام بشكل واضح، يمحو التصبغات السطحية والخطوط الدقيقة، ويعيد الأكسجة للبشرة المختنقة (من التدخين أو التلوث) لإشراقة صافية.', 
            en: 'Visibly shrinks pores, erases surface pigmentation and fine lines, and re-oxygenates suffocated skin (from smoking/pollution) for clear radiance.' 
        },
        active_ingredients: [
            { name: '6-Acid Micro-Peeling Cocktail', concentration: '6%', role: { ar: 'تقشير الخلايا الميتة وتنعيم نسيج الجلد.', en: 'Exfoliating dead cells and smoothing skin texture.' } },
            { name: 'Bio-active Oxygen Sensors', concentration: 'Active | فعال', role: { ar: 'ضخ الأكسجين في الخلايا المجهدة.', en: 'Pumping oxygen into exhausted cells.' } },
            { name: 'Hyaluronic Acid', concentration: 'Hydrating | مرطب', role: { ar: 'ترطيب فوري وملء الجلد بعد التقشير.', en: 'Instant hydration and plumping post-peel.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily PM.' },
        step_in_routine: { ar: 'التونر المقشر (بعد الغسول).', en: 'Exfoliating Toner (post-cleansing).' },
        routine_step_number: 2,
        application: { ar: 'يُضغط على قطنة ويُمسح بها الوجه والرقبة. لا يُشطف.', en: 'Press onto a cotton pad and wipe over face and neck. Do not rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول القوي أو مقشرات إضافية في نفس الليلة.'], en: ['Strong retinol or additional exfoliants on the same night.'] }, 
            best_mixed_with: { ar: ['واقي شمس (إلزامي في صباح اليوم التالي).', 'سيروم NCEF.'], en: ['Sunscreen (Mandatory next AM).', 'NCEF Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'المسام الواسعة، البشرة الباهتة (خاصة للمدخنين)، عدم توحد اللون، والخطوط السطحية.', en: 'Enlarged pores, dull skin (especially for smokers), uneven tone, and surface lines.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'استخدام عبوة بمضخة (Pump) علوية مبتكرة للاستخدام بيد واحدة.', en: 'Uses an innovative top-pump bottle for one-handed use.' }
    }
});

// [13] FILORGA FOAM CLEANSER 150 ML
deepProductsList.push({
    id: 'fil_foam_cleanser', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'فوم كلينزر (رغوة التنظيف وإزالة المكياج)', en: 'Foam Cleanser Anti-Aging Makeup Remover' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي', en: 'Physiological' },
        mechanism: { 
            ar: 'رغوة هوائية خفيفة غنية بحمض الهيالورونيك ومستخلص زنبق الماء (White Lily)، تزيل المكياج والأوساخ مع الحفاظ على الغلاف الحمضي للجلد وتوفير ترطيب مضاد للشيخوخة منذ خطوة التنظيف.', 
            en: 'Light airy foam rich in HA and White Lily extract, removing makeup and dirt while preserving the skin\'s acid mantle and providing anti-aging hydration right from the cleansing step.' 
        },
        patient_benefit: { 
            ar: 'ينظف البشرة بلطف بالغ دون تجفيفها، يزيل مكياج الوجه والعينين، ويترك البشرة ناعمة، مرنة، ومهيأة للروتين.', 
            en: 'Cleanses skin extremely gently without drying, removes face/eye makeup, and leaves skin soft, supple, and prepped for routine.' 
        },
        active_ingredients: [
            { name: 'High Weight Hyaluronic Acid', concentration: 'Active | فعال', role: { ar: 'ترطيب السطح ومنع جفاف المياه العسرة.', en: 'Surface hydration and preventing hard water dryness.' } },
            { name: 'White Lily Extract', concentration: 'Soothing | مهدئ', role: { ar: 'تهدئة الاحمرار وتلطيف البشرة الحساسة.', en: 'Soothing redness and calming sensitive skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الرطب).', en: 'Step 1 (Wet Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'تُضخ كمية في اليد وتُدلك على بشرة مبللة، ثم تُشطف بالماء.', en: 'Pump into hand, massage onto wet skin, then rinse with water.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك الميكانيكي العنيف.'], en: ['Harsh mechanical scrubbing.'] }, 
            best_mixed_with: { ar: ['NCEF-Essence Lotion.'], en: ['NCEF-Essence Lotion.'] } 
        }
    },
    precautions: {
        indications: { ar: 'التنظيف اليومي وإزالة المكياج لجميع أنواع البشرة (حتى الحساسة).', en: 'Daily cleansing and makeup removal for all skin types (even sensitive).' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من الصابون القاسي (Soap-free).', en: 'Harsh soap-free.' }
    }
});

// [14] FILORGA NCTF (NCEF) ESSENCE LOTION 150 ML
deepProductsList.push({
    id: 'fil_ncef_essence', brandId: 'filorga', familyId: 'ncef', brand: 'Filorga',
    name: { ar: 'NCEF-إسنس (لوشن التحضير والتجديد)', en: 'NCEF-Essence Supreme Multi-Correction Lotion' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم تقنية <span class="glossary-term" onclick="openGlossary(\'aqua_mx\')">Aqua-MX</span> لتوفير ترطيب فلاشي سريع، مع تركيز عالٍ من <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">مركب NCEF</span> لتهيئة المسام وتسهيل اختراق السيرومات والكريمات العلاجية اللاحقة.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'aqua_mx\')">Aqua-MX</span> technology for rapid flash hydration, with a high concentration of <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF complex</span> to prep pores and facilitate the penetration of subsequent therapeutic serums.' 
        },
        patient_benefit: { 
            ar: 'يضاعف فعالية الروتين التجميلي اللاحق، يروي البشرة الجافة فوراً، ويوفر حماية مضادة للتلوث والأكسدة.', 
            en: 'Multiplies the efficacy of the subsequent cosmetic routine, instantly quenches dry skin, and provides anti-pollution/antioxidant protection.' 
        },
        active_ingredients: [
            { name: 'Aqua-MX Technology', concentration: 'Patented | براءة اختراع', role: { ar: 'مستشعر ترطيب لتعزيز حبس الماء.', en: 'Hydration sensor to enhance water locking.' } },
            { name: 'NCEF Complex + Sage Extract', concentration: 'High | عالي', role: { ar: 'تجديد الخلايا وتقوية حاجز البشرة.', en: 'Cell renewal and strengthening skin barrier.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'خطوة التحضير (بعد الغسول وقبل السيروم).', en: 'Prepping step (post-cleanser & pre-serum).' },
        routine_step_number: 2,
        application: { ar: 'توضع قطرات في راحة اليد وتُربت مباشرة على وجه نظيف حتى الامتصاص (بدون قطنة).', en: 'Place drops in palm and dab directly onto clean face until absorbed (without cotton).' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم NCEF Intensive.'], en: ['NCEF Intensive Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة العطشى (Dehydrated)، الخطوط الرفيعة، التحضير لزيادة كفاءة العلاجات باهظة الثمن.', en: 'Thirsty (dehydrated) skin, fine lines, prepping to maximize efficacy of expensive treatments.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوامه مائي لزج (Essence) يشبه الروتين الآسيوي.', en: 'Viscous watery texture (Essence) similar to Asian routines.' }
    }
});

// [15] FILORGA SCRUB & MASK 55 ML
deepProductsList.push({
    id: 'fil_scrub_mask', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سكراب آند ماسك (قناع التقشير والأكسجين)', en: 'Scrub & Mask Reoxygenating Exfoliating Mask' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly Acidic' },
        mechanism: { 
            ar: 'علاج مزدوج: يبدأ بتقشير ميكانيكي بحبيبات البيرلايت وتقشير إنزيمي، ثم يتحول إلى رغوة نشطة تضخ <span class="glossary-term" onclick="openGlossary(\'oxygen_releaser\')">ناقلات الأكسجين</span> و NCEF لإنعاش الخلايا بعمق.', 
            en: 'Dual treatment: begins with mechanical Perlite exfoliation and enzymatic peeling, then transforms into an active foam pumping <span class="glossary-term" onclick="openGlossary(\'oxygen_releaser\')">Oxygen releasers</span> and NCEF to deeply refresh cells.' 
        },
        patient_benefit: { 
            ar: 'جلسة تنظيف عميق (Detox) منزلي في 10 دقائق؛ يزيل الجلد الميت، يقلص المسام، ويترك البشرة تتنفس بنضارة لؤلؤية ونعومة فائقة.', 
            en: 'A 10-minute at-home deep Detox session; removes dead skin, shrinks pores, and leaves skin breathing with pearlescent radiance and extreme softness.' 
        },
        active_ingredients: [
            { name: 'Perlite Spheres + Protease Enzyme', concentration: 'Dual Exfoliant | مقشر مزدوج', role: { ar: 'تقشير ميكانيكي وإنزيمي لطيف.', en: 'Mechanical and gentle enzymatic exfoliation.' } },
            { name: 'NCTF + Micro-bubbles System', concentration: 'Active | فعال', role: { ar: 'تنشيط الأكسجة الخلوية وتجديد النضارة.', en: 'Activating cellular oxygenation and renewing radiance.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين إلى ثلاث مرات أسبوعياً.', en: 'Two to three times a week.' },
        step_in_routine: { ar: 'عناية أسبوعية مكثفة (قناع وتقشير).', en: 'Intensive weekly care (Mask & Peel).' },
        routine_step_number: 2,
        application: { ar: 'يُدلك برفق على وجه نظيف (كـ سكراب)، يُترك ليتحول إلى رغوة (أكسجة)، وحين تختفي الرغوة يُشطف بالماء.', en: 'Massage gently on clean face (as a scrub), leave to turn into foam (oxygenation), and once foam disappears, rinse with water.' },
        layering: { 
            do_not_mix_with: { ar: ['فرش التقشير الكهربائية أثناء الاستخدام.'], en: ['Electric facial cleansing brushes during use.'] }, 
            best_mixed_with: { ar: ['الترطيب المكثف بكريم هيدرا-هيال بعده.'], en: ['Intense hydration with Hydra-Hyal cream post-use.'] } 
        }
    },
    precautions: {
        indications: { ar: 'المسام المسدودة، الرؤوس السوداء، البشرة الباهتة والمختنقة.', en: 'Clogged pores, blackheads, dull and suffocated skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'عبوة تعمل بالضغط (Airless) تحافظ على تركيبة الأكسجين من التلف.', en: 'Airless push-packaging preserves the oxygen formula from degradation.' }
    }
});
// ==========================================
// 📦 بلوك رقم (20): فيلورجا (السيرومات العلاجية المتقدمة)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة عائلة جديدة إن لم تكن موجودة و مصطلحات القاموس ---

// تحديث العائلات لإضافة عائلة LIFT (للشد) إن لم تكن مضافة مسبقاً
let filorgaBrand = brandsList.find(b => b.id === 'filorga');
if (filorgaBrand && !filorgaBrand.families.find(f => f.id === 'lift_structure')) {
    filorgaBrand.families.push({ id: 'lift_structure', name: { ar: 'ليفت-ستركتشر (شد البشرة المترهلة)', en: 'Lift-Structure (Firming & Lifting)' } });
}

glossaryDict['plasmatic_lifting'] = {
    title: { ar: 'عوامل الشد البلازمية 🧬', en: 'Plasmatic Lifting Factors 🧬' },
    desc: { 
        ar: 'مركب مستوحى من حقن البلازما الغنية (PRP)، يدمج عوامل خلوية، كولاجين دقيق، وحمض هيالورونيك لإعادة شد ملامح الوجه ونحتها بوضوح.', 
        en: 'A complex inspired by PRP injections, integrating cellular factors, micro-collagen, and HA to visibly tighten and sculpt facial features.' 
    }
};

glossaryDict['swirl_tech'] = {
    title: { ar: 'تقنية الدوامة المزدوجة (Swirl Tech) 🌀', en: 'Swirl Technology 🌀' },
    desc: { 
        ar: 'ابتكار يجمع بين تركيبتين مختلفتين (جل لشد البشرة وسائل لعلاج التجاعيد) في مضخة واحدة، يتم مزجهما لحظة الاستخدام لضمان أقصى فعالية للمواد النشطة.', 
        en: 'An innovation combining two distinct formulas (a stretch gel and an anti-wrinkle fluid) in one pump, mixed exactly upon application for maximum active efficacy.' 
    }
};

// --- 2. المنتجات العميقة (Deep Products) ---

// [16] FILORGA HYDRA-HYAL SERUM 30 ML
deepProductsList.push({
    id: 'fil_hydra_hyal_serum', brandId: 'filorga', familyId: 'hydra_hyal', brand: 'Filorga',
    name: { ar: 'هيدرا-هيال سيروم (مركز حمض الهيالورونيك)', en: 'Hydra-Hyal Intensive Hydrating Plumping Concentrate' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يحتوي على 4 أنواع من حمض الهيالورونيك (لترطيب سطحي وعميق) معزز بمستخلصين نباتيين يحفزان الإنتاج الطبيعي لحمض الهيالورونيك في طبقتي الأدمة والبشرة.', 
            en: 'Contains 4 types of Hyaluronic Acid (for surface and deep hydration) enhanced by 2 plant extracts that stimulate natural HA production in the dermis and epidermis.' 
        },
        patient_benefit: { 
            ar: 'يوفر جرعة يومية مكثفة تعادل الحقن التجميلي، يملأ (Plump) الخطوط الرفيعة فوراً، ويمنح البشرة الجافة مرونة وإشراقة تدوم طويلاً.', 
            en: 'Provides an intense daily dose equivalent to cosmetic injections, instantly plumps fine lines, and grants dry skin long-lasting suppleness and radiance.' 
        },
        active_ingredients: [
            { name: '4 Hyaluronic Acids', concentration: 'High Dose | جرعة عالية', role: { ar: 'نفخ التجاعيد وترطيب متعدد الطبقات.', en: 'Plumping wrinkles and multi-layer hydration.' } },
            { name: 'Ophiopogon Japonicus Extract', concentration: 'Active | فعال', role: { ar: 'تنشيط تصنيع الهيالورونيك الطبيعي.', en: 'Activating natural HA synthesis.' } },
            { name: 'NCEF Complex', concentration: 'Revitalizing | مجدد', role: { ar: 'تجديد الخلايا وتحسين جودة الجلد.', en: 'Cell renewal and improving skin quality.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'السيروم المرطب الأول.', en: 'First hydrating serum.' },
        routine_step_number: 2,
        application: { ar: 'توضع بضع قطرات على وجه ورقبة نظيفين قبل كريم العناية.', en: 'Apply a few drops to a clean face and neck before care cream.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم Hydra-Hyal.', 'كريم Time-Filler.'], en: ['Hydra-Hyal Cream.', 'Time-Filler Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الجفاف الشديد، البشرة الفاقدة للحيوية والامتلاء، والتجاعيد المبكرة الناتجة عن الجفاف.', en: 'Severe dehydration, skin lacking vitality and plumpness, and early dehydration wrinkles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام فريد يشبه الجل المائي، لا يترك أي أثر لزج.', en: 'Unique water-gel texture, leaves no sticky residue.' }
    }
});

// [17] FILORGA LIFT-DESIGNER SERUM 30 ML
deepProductsList.push({
    id: 'fil_lift_designer_serum', brandId: 'filorga', familyId: 'lift_structure', brand: 'Filorga',
    name: { ar: 'ليفت-ديزاينر (سيروم الشد الفائق)', en: 'Lift-Designer Ultra-Lifting Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعتمد على <span class="glossary-term" onclick="openGlossary(\'plasmatic_lifting\')">عوامل الشد البلازمية</span> لشد الأنسجة المترهلة بقوة، مع خلاصة الطحالب الدقيقة (Arabinoxylane) التي توفر تأثيراً ميكانيكياً لشد السطح فورياً.', 
            en: 'Relies on <span class="glossary-term" onclick="openGlossary(\'plasmatic_lifting\')">Plasmatic Lifting Factors</span> to powerfully tighten sagging tissues, with micro-algae extract (Arabinoxylane) providing an immediate mechanical surface lift.' 
        },
        patient_benefit: { 
            ar: 'ينحت ملامح الوجه (خاصة خط الفك والرقبة)، يرفع الجلد المترهل بشكل ملحوظ خلال 7 أيام، ويوفر شدة فورية (Lifting effect).', 
            en: 'Sculpts facial contours (especially jawline and neck), visibly lifts sagging skin within 7 days, and provides an immediate lifting effect.' 
        },
        active_ingredients: [
            { name: 'Plasmatic Lifting Factors', concentration: 'Concentrated | مركز', role: { ar: 'إعادة بناء الكولاجين والمرونة لشد الجلد.', en: 'Rebuilding collagen and elasticity to lift skin.' } },
            { name: 'Microalgae Extract', concentration: 'Tensor | شد فوري', role: { ar: 'تكوين شبكة غير مرئية لشد سطح البشرة.', en: 'Forming an invisible mesh to tighten the skin surface.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'سيروم الشد والمكافحة.', en: 'Lifting and anti-aging serum.' },
        routine_step_number: 2,
        application: { ar: 'يُدلك بحركات تصاعدية (من الأسفل للأعلى) على الوجه، خط الفك، والرقبة.', en: 'Massage with upward strokes (bottom to top) on face, jawline, and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['زيوت الوجه الثقيلة (تُضعف مفعول الشد الميكانيكي).'], en: ['Heavy face oils (weakens the mechanical lifting effect).'] }, 
            best_mixed_with: { ar: ['كريم Sleep & Lift الليلي.'], en: ['Sleep & Lift Night Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'ترهل الجلد، فقدان تحديد ملامح الوجه، وشيخوخة الرقبة وخط الفك.', en: 'Skin sagging, loss of facial contour definition, and aging of neck and jawline.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يأتي مع أداة تدليك دوارة (Roller) لتحفيز الدورة الدموية أثناء الاستخدام.', en: 'Comes with a roller applicator to stimulate blood circulation during use.' }
    }
});

// [18] FILORGA TIME-ZERO MULTI CORRECTION SERUM 30 ML
deepProductsList.push({
    id: 'fil_time_zero_serum', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم-زيرو (سيروم التصحيح المتعدد للتجاعيد)', en: 'Time-Zero Multi-Correction Wrinkles Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'swirl_tech\')">تقنية الدوامة المزدوجة</span> لمزج (جل لشد الأنسجة) مع (سائل لمعالجة التجاعيد العميقة والتعبيرية). يجمع حمض الهيالورونيك، ببتيدات البوتوكس، ومركب تقشير دقيق.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'swirl_tech\')">Swirl Technology</span> to mix (a stretch gel) with (a deep/expression wrinkle fluid). Combines HA, Botox-like peptides, and a micro-peeling complex.' 
        },
        patient_benefit: { 
            ar: 'علاج مكثف 4 في 1 لجميع أنواع التجاعيد (التعبيرية، العميقة، السطحية، والإرهاق). يعطي تأثيراً مشابهاً للميزوثيرابي وحقن الفيلر.', 
            en: 'Intensive 4-in-1 treatment for all wrinkle types (expression, deep, surface, fatigue). Provides an effect similar to mesotherapy and fillers.' 
        },
        active_ingredients: [
            { name: 'Botox-like Hexapeptide', concentration: 'Active | فعال', role: { ar: 'إرخاء الخطوط التعبيرية.', en: 'Relaxing expression lines.' } },
            { name: 'NCTF + Gluconolactone', concentration: 'Peeling-like | مقشر دقيق', role: { ar: 'تجديد السطح وتنعيم التجاعيد الدقيقة.', en: 'Surface renewal and smoothing fine wrinkles.' } },
            { name: 'Cross-linked HA', concentration: 'Filler-like | يحاكي الفيلر', role: { ar: 'ملء التجاعيد الغائرة من العمق.', en: 'Plumping deep sunken wrinkles from within.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'السيروم المعالج الرئيسي.', en: 'Main treatment serum.' },
        routine_step_number: 2,
        application: { ar: 'تُضغط المضخة لخروج المزيج، ويُدلك بلطف على كامل الوجه.', en: 'Press pump to release the mixture, massage gently over the entire face.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات كيميائية عنيفة.'], en: ['Harsh chemical peels.'] }, 
            best_mixed_with: { ar: ['كريم Time-Filler.'], en: ['Time-Filler Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد الظاهرة والمتعددة، الخطوط حول الفم والعين، والتجاعيد الناتجة عن تعابير الوجه.', en: 'Visible and multiple wrinkles, peri-oral/ocular lines, and expression-induced wrinkles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'منتج كلاسيكي قوي جداً من فيلورجا، يوفر شد وملء في خطوة واحدة.', en: 'A very potent classic Filorga product, providing lifting and plumping in one step.' }
    }
});

// [19] FILORGA PIGMENT-PERFECT SERUM 30 ML
deepProductsList.push({
    id: 'fil_pigment_perfect_serum', brandId: 'filorga', familyId: 'skin_unify', brand: 'Filorga',
    name: { ar: 'بيجمنت-بيرفكت (سيروم مصحح البقع الداكنة)', en: 'Pigment-Perfect Dark Spot Corrector Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستهدف التصبغات من خلال (خلاصة نبات الجنجل) لتنظيم تصنيع الميلانين، و (البابونج الذهبي) المضاد للأكسدة لمنع الأكسدة المسؤولة عن البقع العمرية، مع فيتامين C للتفتيح.', 
            en: 'Targets pigmentation via (Hop extract) to regulate melanin synthesis, and antioxidant (Golden Chamomile) to prevent oxidation responsible for age spots, with Vit C for brightening.' 
        },
        patient_benefit: { 
            ar: 'يخفف تدريجياً البقع الداكنة (كلف، آثار حبوب، بقع شمس)، يوحد لون البشرة، ويحمي من ظهور تصبغات جديدة.', 
            en: 'Gradually fades dark spots (melasma, acne marks, sun spots), evens skin tone, and protects against new pigmentation.' 
        },
        active_ingredients: [
            { name: 'Hop Extract (Humulus Lupulus)', concentration: 'Active | فعال', role: { ar: 'تثبيط إنتاج وتراكم الميلانين.', en: 'Inhibiting melanin production and accumulation.' } },
            { name: 'Vitamin C + NCEF', concentration: 'Illuminating | مفتح', role: { ar: 'تفتيح البشرة وتحفيز الكولاجين.', en: 'Brightening skin and stimulating collagen.' } },
            { name: 'Golden Chamomile Extract', concentration: 'Antioxidant | مضاد أكسدة', role: { ar: 'تهدئة الجلد ومنع الإجهاد التأكسدي.', en: 'Soothing skin and preventing oxidative stress.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'سيروم التفتيح.', en: 'Brightening serum.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على كامل الوجه والرقبة، أو موضعياً على البقع الداكنة.', en: 'Apply to entire face and neck, or topically on dark spots.' },
        layering: { 
            do_not_mix_with: { ar: ['التعرض للشمس بدون واقي (إلزامي).'], en: ['Sun exposure without SPF (Mandatory).'] }, 
            best_mixed_with: { ar: ['كريم UV-Defence SPF50+.', 'كريم Pigment-White.'], en: ['UV-Defence SPF50+.', 'Pigment-White Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البقع الداكنة المستعصية، التصبغات الهرمونية، لون البشرة غير المتجانس.', en: 'Stubborn dark spots, hormonal pigmentation, and uneven skin tone.' },
        pregnancy_safe: true, sun_sensitivity: true, 
        notes: { ar: 'قوام حليبي خفيف يمتص بسهولة ويصلح كقاعدة للمكياج.', en: 'Light milky texture that absorbs easily and acts as a makeup base.' }
    }
});

// [20] FILORGA MESO+ SERUM 30 ML
deepProductsList.push({
    id: 'fil_meso_plus_serum', brandId: 'filorga', familyId: 'ncef', brand: 'Filorga',
    name: { ar: 'ميزو+ (سيروم مكافحة الشيخوخة المطلق)', en: 'Meso+ Absolute Anti-Aging Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يجمع أفضل مكونات طب التجميل: الريتينول النقي لتنعيم السطح، حمض الهيالورونيك للامتلاء، وتركيز مضاعف من <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCTF/NCEF</span> لتجديد الأنسجة من العمق.', 
            en: 'Combines the best of aesthetic medicine: Pure Retinol for surface smoothing, HA for plumping, and a double concentration of <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCTF/NCEF</span> for deep tissue renewal.' 
        },
        patient_benefit: { 
            ar: 'يعيد بناء نسيج الجلد بالكامل، يمحو التجاعيد العميقة، ويعيد الحيوية المفقودة للبشرة المتعبة والمتقدمة في العمر.', 
            en: 'Completely rebuilds skin tissue, erases deep wrinkles, and restores lost vitality to tired, aging skin.' 
        },
        active_ingredients: [
            { name: 'Pure Retinol', concentration: 'Active | فعال', role: { ar: 'تحفيز تجدد الخلايا وتقشير دقيق.', en: 'Stimulating cell turnover and micro-exfoliation.' } },
            { name: 'NCTF Complex', concentration: 'Double Dose | جرعة مضاعفة', role: { ar: 'تغذية الخلايا بـ 50 مكوناً نشطاً.', en: 'Nourishing cells with 50 active ingredients.' } },
            { name: 'Cross-linked HA', concentration: 'Plumping | ممتلئ', role: { ar: 'ترطيب عميق طويل الأمد.', en: 'Deep long-lasting hydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً (بسبب الريتينول).', en: 'Once daily PM (due to retinol).' },
        step_in_routine: { ar: 'السيروم الليلي المجدد.', en: 'Nighttime renewing serum.' },
        routine_step_number: 2,
        application: { ar: 'توضع بضع قطرات على وجه نظيف وجاف قبل الكريم الليلي.', en: 'Apply a few drops to a clean, dry face before night cream.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات AHA/BHA في نفس الوقت.', 'فيتامين C الصافي.'], en: ['AHA/BHA peels simultaneously.', 'Pure Vitamin C.'] }, 
            best_mixed_with: { ar: ['كريم Sleep & Peel.', 'المرطبات الغنية (Ceramides).'], en: ['Sleep & Peel cream.', 'Rich moisturizers (Ceramides).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الشيخوخة المتقدمة، الجلد السميك المتجعد، بهتان البشرة الشديد.', en: 'Advanced aging, thick wrinkled skin, and severe skin dullness.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'يُمنع للحوامل بسبب وجود الريتينول. يجب استخدام واقي شمس صباحاً.', en: 'Contraindicated for pregnancy due to Retinol. Sunscreen is mandatory in the AM.' }
    }
});
// ==========================================
// 📦 بلوك رقم (21): فيلورجا (واقيات الشمس وعلاجات التوحيد والتفتيح)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة مصطلحات القاموس الجديدة ---

glossaryDict['photo_activated_tech'] = {
    title: { ar: 'تقنية التنشيط الضوئي ☀️', en: 'Photo-Activated Technology ☀️' },
    desc: { 
        ar: 'تقنية مبتكرة تُفعل مضادات الأكسدة القوية بمجرد تعرض البشرة لأشعة الشمس، لتوفير حماية بيولوجية عالية وحماية الكولاجين من التكسر أثناء التعرض للأشعة.', 
        en: 'An innovative technology that activates powerful antioxidants upon exposure to sunlight, providing high biological protection and shielding collagen from degradation during UV exposure.' 
    }
};

glossaryDict['cystoseira_extract'] = {
    title: { ar: 'مستخلص طحلب سيستوسيرا (Cystoseira) 🌊', en: 'Cystoseira Extract 🌊' },
    desc: { 
        ar: 'طحلب بحري قوي يُعرف باسم (طحلب قوس قزح)، يثبط إنزيم التيروزيناز ويمنع تنشيط الخلايا الصبغية، مما يجعله فعالاً جداً في توحيد لون البشرة وتقليل البقع.', 
        en: 'A potent marine algae known as (Rainbow Algae) that inhibits tyrosinase and prevents melanocyte activation, making it highly effective in evening skin tone and reducing spots.' 
    }
};

// --- 2. المنتجات العميقة (Deep Products) ---

// [21] FILORGA UV-BRONZE FACE SUN FLUID SPF 50+ 40 ML
deepProductsList.push({
    id: 'fil_uv_bronze_face', brandId: 'filorga', familyId: 'sun_care', brand: 'Filorga',
    name: { ar: 'يو في-برونز للوجه SPF 50+ (واقي شمس وتجاعيد)', en: 'UV-Bronze Face Sun Fluid SPF 50+ Anti-Aging' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يوفر حماية قصوى (UVA/UVB/IR) باستخدام فلاتر فيزيائية وكيميائية، مع <span class="glossary-term" onclick="openGlossary(\'photo_activated_tech\')">تقنية التنشيط الضوئي</span> التي تطلق مضادات أكسدة قوية تحت أشعة الشمس لحماية الـ DNA.', 
            en: 'Provides supreme protection (UVA/UVB/IR) using physical & chemical filters, with <span class="glossary-term" onclick="openGlossary(\'photo_activated_tech\')">Photo-Activated Tech</span> releasing potent antioxidants under sunlight to protect DNA.' 
        },
        patient_benefit: { 
            ar: 'واقي شمس مضاد للشيخوخة؛ يمنع التصبغات، يقلل التجاعيد الناتجة عن الشمس، ولا يترك ملمساً دهنياً أو لزجاً.', 
            en: 'Anti-aging sunscreen; prevents pigmentation, reduces sun-induced wrinkles, and leaves no greasy or sticky feel.' 
        },
        active_ingredients: [
            { name: 'Sulforaphane', concentration: 'Active | فعال', role: { ar: 'مكافحة التجاعيد وعلامات التقدم في السن.', en: 'Combating wrinkles and signs of aging.' } },
            { name: 'Vitamin PP (Niacinamide)', concentration: 'Soothing | مهدئ', role: { ar: 'منع البقع الداكنة وتوحيد اللون.', en: 'Preventing dark spots and evening tone.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً قبل التعرض للشمس ويُجدد بانتظام.', en: 'Daily before sun exposure and reapply regularly.' },
        step_in_routine: { ar: 'الخطوة الأخيرة (الحماية).', en: 'Final step (Protection).' },
        routine_step_number: 4,
        application: { ar: 'يُرج جيداً قبل الاستخدام، ويُوزع بسخاء على الوجه والرقبة.', en: 'Shake well before use, distribute generously over face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['الزيوت الثقيلة جداً (لتجنب تكسير الفلاتر).'], en: ['Very heavy oils (to avoid breaking down filters).'] }, 
            best_mixed_with: { ar: ['سيروم Pigment-Perfect أو Skin Unify.'], en: ['Pigment-Perfect or Skin Unify Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'جميع أنواع البشرة التي تحتاج حماية من التصبغات والتجاعيد الضوئية.', en: 'All skin types needing protection against pigmentation and photo-wrinkles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام سائل (Fluid) غير مرئي بلمسة نهائية غير لامعة (Matte).', en: 'Invisible fluid texture with a matte finish.' }
    }
});

// [22] FILORGA UV-DEFENCE ANTI AGING / DARK SPOTS SPF 50 + 40 ML
deepProductsList.push({
    id: 'fil_uv_defence_50', brandId: 'filorga', familyId: 'sun_care', brand: 'Filorga',
    name: { ar: 'يو في-ديفينس SPF 50+ (مكافحة التصبغات)', en: 'UV-Defence Anti-Aging & Dark Spots SPF 50+' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستهدف بشكل خاص البقع الداكنة والتجاعيد مع حماية عالية جداً من الأشعة. يدمج خلاصة (Hop) لتنظيم الميلانين، و NCTF لترميم الجلد المتضرر.', 
            en: 'Specifically targets dark spots and wrinkles with very high UV protection. Integrates Hop extract to regulate melanin, and NCTF to repair damaged skin.' 
        },
        patient_benefit: { 
            ar: 'الواقي المثالي بعد جلسات الليزر أو التقشير في العيادة. يمنع التصبغ الالتهابي (PIH) ويهدئ البشرة.', 
            en: 'The ideal sunscreen post-clinic laser or peeling sessions. Prevents Post-Inflammatory Hyperpigmentation (PIH) and soothes skin.' 
        },
        active_ingredients: [
            { name: 'Sun Filters + Vitamin E', concentration: 'SPF 50+', role: { ar: 'حماية شاملة ضد الأشعة والأكسدة.', en: 'Comprehensive protection against UV and oxidation.' } },
            { name: 'Hop Extract', concentration: 'Anti-Pigment | مضاد تصبغ', role: { ar: 'منع تكون البقع الداكنة وتقليل حجمها.', en: 'Preventing dark spots and reducing their size.' } },
            { name: 'Brown Algae Extract', concentration: 'Soothing | مهدئ', role: { ar: 'ترطيب عميق وتهدئة التهيج.', en: 'Deep hydration and soothing irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً في الصباح.', en: 'Daily in the AM.' },
        step_in_routine: { ar: 'الخطوة الأخيرة (واقي شمس علاجي).', en: 'Final step (Therapeutic sunscreen).' },
        routine_step_number: 4,
        application: { ar: 'يوضع على الوجه والرقبة وظهر اليدين.', en: 'Apply to face, neck, and back of the hands.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم Neocica (للعناية بعد الإجراءات).'], en: ['Neocica cream (for post-procedure care).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الوقاية من الكلف، آثار الحبوب الداكنة، والبشرة بعد الإجراءات الجلدية (الليزر/التقشير).', en: 'Melasma prevention, dark acne marks, and post-dermatological procedures (laser/peel).' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام ذوباني سهل التوزيع ولا يترك أثراً أبيض.', en: 'Melting texture easy to distribute with no white cast.' }
    }
});

// [23] FILORGA SKIN UNIFY INTENSIVE ILLUMINATING EVEN SKIN TONE SERUM 30 ML
deepProductsList.push({
    id: 'fil_skin_unify_serum', brandId: 'filorga', familyId: 'skin_unify', brand: 'Filorga',
    name: { ar: 'سكين-يونيفاي إنتينسيف (سيروم التوحيد والإشراقة)', en: 'Skin Unify Intensive Illuminating Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'مستوحى من 3 تقنيات طبية (الليزر، التقشير، والميديكال ستروبينج). يعتمد على فيتامين C، <span class="glossary-term" onclick="openGlossary(\'cystoseira_extract\')">طحلب سيستوسيرا</span>، والجبريدين لتقليل البقع، وحمض الهيالورونيك للإشراقة الممتلئة.', 
            en: 'Inspired by 3 medical techniques (Laser, Peeling, Medical Strobing). Relies on Vit C, <span class="glossary-term" onclick="openGlossary(\'cystoseira_extract\')">Cystoseira algae</span>, and Glabridin to reduce spots, and HA for plumping radiance.' 
        },
        patient_benefit: { 
            ar: 'يقلل بشكل جذري من التصبغات الداكنة، يوحد لون البشرة، ويعكس الضوء ليعطي تأثيراً مضيئاً يشبه إضاءة الاستوديو.', 
            en: 'Radically reduces dark pigmentation, evens skin tone, and reflects light to give a luminous, studio-lighting effect.' 
        },
        active_ingredients: [
            { name: 'Vitamin C + Glabridin', concentration: 'Core Actives | أساسي', role: { ar: 'تثبيط تصنيع الميلانين وتفتيح اللون.', en: 'Inhibiting melanin synthesis and brightening tone.' } },
            { name: 'Cystoseira Algae Extract', concentration: 'Active | فعال', role: { ar: 'منع انتقال الصبغة للخلايا السطحية.', en: 'Preventing pigment transfer to surface cells.' } },
            { name: 'Hyaluronic Acid', concentration: 'Plumping | ممتلئ', role: { ar: 'ترطيب عميق لعكس الضوء بنضارة.', en: 'Deep hydration to reflect light with radiance.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'سيروم التفتيح الأساسي.', en: 'Core brightening serum.' },
        routine_step_number: 2,
        application: { ar: 'يوزع على وجه ورقبة نظيفين. يُدلك بلطف لتنشيط المكونات.', en: 'Distribute on clean face and neck. Massage gently to activate ingredients.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات الأحماض القوية جداً (تجنباً للتحسس).'], en: ['Very strong acid exfoliants (to avoid sensitization).'] }, 
            best_mixed_with: { ar: ['كريم Skin Unify Cream.'], en: ['Skin Unify Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البقع الداكنة، عدم تجانس اللون، والبشرة الباهتة التي تفتقر للإضاءة.', en: 'Dark spots, uneven tone, and dull skin lacking luminosity.' },
        pregnancy_safe: true, sun_sensitivity: true, 
        notes: { ar: 'قوام سائل مع جزيئات لؤلؤية دقيقة تعكس الضوء.', en: 'Fluid texture with fine pearlescent particles that reflect light.' }
    }
});

// [24] FILORGA SKIN UNIFY ILLUMINATING EVEN SKIN TONE CREAM 50 ML
deepProductsList.push({
    id: 'fil_skin_unify_cream', brandId: 'filorga', familyId: 'skin_unify', brand: 'Filorga',
    name: { ar: 'سكين-يونيفاي كريم (كريم التوحيد والإشراقة)', en: 'Skin Unify Illuminating Even Tone Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يحتوي على نفس المكونات النشطة للسيروم (Vit C، عرق السوس، طحلب قوس قزح) ولكن في قاعدة كريمية مرطبة تعزز تماسك الجلد وتحبس المواد النشطة لفعالية ممتدة.', 
            en: 'Contains the same active ingredients as the serum (Vit C, Licorice, Rainbow Algae) but in a hydrating cream base that enhances skin cohesion and locks actives for extended efficacy.' 
        },
        patient_benefit: { 
            ar: 'يرطب البشرة بعمق، يمنع ظهور تصبغات جديدة، ويعطي لمسة نهائية ناعمة كالحرير ومضيئة.', 
            en: 'Deeply hydrates skin, prevents new pigmentation, and provides a silky, luminous finish.' 
        },
        active_ingredients: [
            { name: 'Core Brightening Complex', concentration: 'Active | فعال', role: { ar: 'تقليل البقع وتوحيد لون البشرة.', en: 'Reducing spots and evening skin tone.' } },
            { name: 'Optical Blurring Agents', concentration: 'Cosmetic | تجميلي', role: { ar: 'تمويه بصري للعيوب فور الاستخدام.', en: 'Optical blurring of flaws upon application.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'كريم الترطيب والتفتيح.', en: 'Hydrating and brightening cream.' },
        routine_step_number: 3,
        application: { ar: 'يوضع بعد السيروم على كامل الوجه والرقبة.', en: 'Apply after serum to the entire face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم Skin Unify Intensive.', 'واقي شمس في الصباح.'], en: ['Skin Unify Intensive Serum.', 'Sunscreen in the AM.'] } 
        }
    },
    precautions: {
        indications: { ar: 'اللون غير الموحد، البقع البنية، واحتياج البشرة للترطيب مع التفتيح.', en: 'Uneven tone, brown spots, and skin needing hydration with brightening.' },
        pregnancy_safe: true, sun_sensitivity: true, 
        notes: { ar: 'قوام كريمي غني ومريح، ممتاز كقاعدة للمكياج.', en: 'Rich and comforting cream texture, excellent as a makeup base.' }
    }
});

// [25] FILORGA SKIN UNIFY RADIANCE ILLUMINATING PERFECTING FLUID 15 ML
deepProductsList.push({
    id: 'fil_skin_unify_radiance', brandId: 'filorga', familyId: 'skin_unify', brand: 'Filorga',
    name: { ar: 'سكين-يونيفاي راديانس (سائل الإضاءة الموضعي)', en: 'Skin Unify Radiance Perfecting Fluid' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'مستحضر هجين (عناية + تجميل). يدمج فوائد التفتيح لمركب (Skin Unify) مع لآلئ دقيقة متقزحة (Iridescent pearls) تعمل كـ (Highlighter) سائل لتسليط الضوء على نقاط الجمال.', 
            en: 'Hybrid product (Care + Makeup). Integrates brightening benefits of (Skin Unify) complex with iridescent micro-pearls acting as a liquid Highlighter to accentuate beauty points.' 
        },
        patient_benefit: { 
            ar: 'يعالج التصبغات على المدى الطويل، ويوفر إضاءة فورية (Glow) للأماكن البارزة في الوجه مثل عظام الخد وقوس كيوبيد.', 
            en: 'Treats pigmentation long-term, and provides instant illumination (Glow) to prominent facial areas like cheekbones and Cupid\'s bow.' 
        },
        active_ingredients: [
            { name: 'Vitamin C + Licorice', concentration: 'Active | فعال', role: { ar: 'تفتيح علاجي مستمر.', en: 'Continuous therapeutic brightening.' } },
            { name: 'Iridescent Pearls', concentration: 'High | عالي', role: { ar: 'انعكاس ضوئي فوري.', en: 'Instant light reflection.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً (أو قبل المناسبات).', en: 'Morning (or before events).' },
        step_in_routine: { ar: 'اللمسة النهائية (فوق المكياج أو الكريم).', en: 'Final touch (over makeup or cream).' },
        routine_step_number: 4,
        application: { ar: 'يُربت على المناطق البارزة (عظام الخد، جسر الأنف، قوس الشفاه).', en: 'Dab onto prominent areas (cheekbones, nose bridge, lip bow).' },
        layering: { 
            do_not_mix_with: { ar: ['لا يُنصح بتوزيعه على كامل الوجه لتجنب اللمعان المفرط.'], en: ['Not recommended for full face to avoid excessive shine.'] }, 
            best_mixed_with: { ar: ['كريمات الأساس لزيادة نضارتها.'], en: ['Foundations to increase their radiance.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الباهتة، الرغبة في إضاءة تجميلية مع فائدة علاجية.', en: 'Dull skin, desire for cosmetic illumination with therapeutic benefit.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام سائل جداً. يأتي بأنبوبة دقيقة للاستخدام الموضعي.', en: 'Very fluid texture. Comes in a precision tube for localized application.' }
    }
});

// [26] FILORGA PIGMENT WHITE CREAM 50 ML
deepProductsList.push({
    id: 'fil_pigment_white_cream', brandId: 'filorga', familyId: 'skin_unify', brand: 'Filorga',
    name: { ar: 'بيجمنت-وايت كريم (كريم التفتيح متعدد المفعول)', en: 'Pigment-White Multi-Action Brightening Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستهدف 3 ألوان من التصبغات: البقع الداكنة (بواسطة الهيكسيل ريزورسينول وفيتامين سي)، الإحمرار (بواسطة فيتامين B3 ليخفف الالتهاب)، والبهتان الأصفر/الرمادي (عن طريق مستخلصات تقشير نباتية).', 
            en: 'Targets 3 color irregularities: Dark spots (via Hexylresorcinol & Vit C), Redness (via Vit B3 to reduce inflammation), and Yellow/Gray dullness (via plant exfoliating extracts).' 
        },
        patient_benefit: { 
            ar: 'يعيد بناء لون البشرة بالكامل ليكون نقياً وموحداً، يعالج آثار الحبوب الحمراء والبنية، ويوفر ترطيباً مكثفاً.', 
            en: 'Completely reconstructs skin tone to be pure and even, treats red and brown acne marks, and provides intense hydration.' 
        },
        active_ingredients: [
            { name: 'Hexylresorcinol + Vit C', concentration: 'High | عالي', role: { ar: 'تدمير البقع البنية ومنع التصبغ.', en: 'Destroying brown spots and preventing pigmentation.' } },
            { name: 'Vitamin B3 (Niacinamide)', concentration: 'Active | فعال', role: { ar: 'تسكين الاحمرار وتقوية الحاجز.', en: 'Soothing redness and strengthening barrier.' } },
            { name: 'NCTF Complex', concentration: 'Revitalizing | مجدد', role: { ar: 'تجديد جودة ونقاء البشرة.', en: 'Renewing skin quality and purity.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'كريم الترطيب العلاجي.', en: 'Therapeutic hydrating cream.' },
        routine_step_number: 3,
        application: { ar: 'يوزع على الوجه والرقبة بعد التنظيف والسيروم.', en: 'Distribute over face and neck after cleansing and serum.' },
        layering: { 
            do_not_mix_with: { ar: ['التعرض للشمس دون حماية قوية.'], en: ['Sun exposure without strong protection.'] }, 
            best_mixed_with: { ar: ['سيروم Pigment-Perfect.', 'واقي شمس UV-Defence.'], en: ['Pigment-Perfect Serum.', 'UV-Defence Sunscreen.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البقع المختلطة (حمراء وبنية)، الكلف، بهتان البشرة وعدم صفائها.', en: 'Mixed spots (red and brown), melasma, dull and unclear skin.' },
        pregnancy_safe: true, sun_sensitivity: true, 
        notes: { ar: 'تركيبة غنية ومريحة ومناسبة لتفتيح الوجه بأمان.', en: 'Rich, comforting formula suitable for safe facial brightening.' }
    }
});
// ==========================================
// 📦 بلوك رقم (22): فيلورجا (كريمات الترميم، التغذية الشاملة، والشد الليلي)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. المنتجات العميقة (Deep Products) ---

// [27] FILORGA NEOCICA REPAIR CREAM 40 ML (مع باقة العرض)
deepProductsList.push({
    id: 'fil_neocica_repair', brandId: 'filorga', familyId: 'global_repair', brand: 'Filorga',
    name: { ar: 'نيوسيكا (كريم الترميم المهدئ)', en: 'Neocica Universal Repair Care' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'مصمم خصيصاً للتعافي بعد الإجراءات التجميلية. يعتمد على ببتيد محفز للكولاجين مع السكر الرامنويدي (Rhamnose) لتهدئة الالتهاب فوراً وتسريع إعادة بناء البشرة المتضررة.', 
            en: 'Designed specifically for post-aesthetic recovery. Relies on a collagen-boosting peptide with Rhamnose sugar to instantly soothe inflammation and accelerate the rebuilding of damaged skin.' 
        },
        patient_benefit: { 
            ar: 'يهدئ حرقان الجلد وتهيجه فوراً، يسرع من شفاء الخدوش وجلسات الليزر/التقشير، ويمنع تكون الندبات.', 
            en: 'Instantly soothes skin burning and irritation, accelerates healing of scratches and laser/peel sessions, and prevents scarring.' 
        },
        active_ingredients: [
            { name: 'Rhamnose Complex', concentration: 'Active | فعال', role: { ar: 'تسكين الاحمرار وتقليل الالتهاب.', en: 'Soothing redness and reducing inflammation.' } },
            { name: 'Collagen Precursor Peptide', concentration: 'Repairing | مرمم', role: { ar: 'تحفيز بناء الأنسجة الجديدة.', en: 'Stimulating new tissue synthesis.' } },
            { name: 'Hyaluronic Acid + Aloe Vera', concentration: 'Soothing | مهدئ', role: { ar: 'ترطيب عميق وتبريد السطح.', en: 'Deep hydration and surface cooling.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '3 إلى 6 مرات يومياً على المنطقة المتضررة.', en: '3 to 6 times daily on the affected area.' },
        step_in_routine: { ar: 'علاج موضعي مكثف.', en: 'Intensive topical treatment.' },
        routine_step_number: 3,
        application: { ar: 'يُربت بلطف على المنطقة المعالجة (لا يُفرك بقوة) حتى يمتص تماماً.', en: 'Dab gently on the treated area (do not rub harshly) until fully absorbed.' },
        layering: { 
            do_not_mix_with: { ar: ['أي مقشرات أو ريتينول أو فيتامين سي خلال فترة التعافي.'], en: ['Any exfoliants, retinol, or Vit C during the recovery period.'] }, 
            best_mixed_with: { ar: ['واقي شمس UV-Defence.'], en: ['UV-Defence Sunscreen.'] } 
        }
    },
    precautions: {
        indications: { ar: 'بعد حقن الفيلر/البوتوكس، بعد الليزر، التقشير الكيميائي، حروق الشمس، والتهابات الحلاقة.', en: 'Post-filler/botox injections, post-laser, chemical peels, sunburns, and shaving rashes.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام "ضمادة" خفيف ومريح لا يترك أثراً دهنياً.', en: 'Comfortable "bandage" texture that leaves no greasy residue.' }
    }
});

// [28] FILORGA GLOBAL-REPAIR ADVANCED CREAM 50 ML
deepProductsList.push({
    id: 'fil_global_repair_advanced', brandId: 'filorga', familyId: 'global_repair', brand: 'Filorga',
    name: { ar: 'جلوبال-ريبير أدفانسد (كريم التغذية المتطورة)', en: 'Global-Repair Advanced Youth Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'كريم مضاد للشيخوخة الفائقة يعتمد على تركيبة (Intensive Repairing Factors) المكونة من 3 مغذيات (سيراميدات، أوميجا، فيتامينات) و مركب ببتيدي متطور يعمل على إصلاح طبقة الدهون وإعادة كثافة الجلد.', 
            en: 'Supreme anti-aging cream based on (Intensive Repairing Factors) consisting of 3 nutrients (Ceramides, Omegas, Vitamins) and an advanced peptide complex to repair the lipid layer and redensify skin.' 
        },
        patient_benefit: { 
            ar: 'يغذي البشرة الناضجة والجافة جداً، يصحح علامات التقدم بالسن الـ 10 (الجفاف، التجاعيد العميقة، الترهل، البهتان، تفاوت اللون).', 
            en: 'Nourishes mature and very dry skin, corrects the 10 signs of aging (dehydration, deep wrinkles, sagging, dullness, uneven tone).' 
        },
        active_ingredients: [
            { name: 'Ceramides + Omegas + Vitamins', concentration: 'High | عالي', role: { ar: 'ترميم الحاجز الجلدي وتغذية عميقة.', en: 'Skin barrier repair and deep nourishment.' } },
            { name: 'Peony Extract', concentration: 'Active | فعال', role: { ar: 'نحت ملامح الوجه واستعادة الحجم.', en: 'Sculpting facial contours and restoring volume.' } },
            { name: 'NCTF Complex', concentration: 'Revitalizing | مجدد', role: { ar: 'تجديد الخلايا الشامل.', en: 'Global cellular renewal.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'كريم العناية الفائقة.', en: 'Supreme care cream.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على الوجه والرقبة ككريم نهاري، أو يمكن وضع طبقة سميكة ليلاً كقناع نوم (Sleeping Mask).', en: 'Apply to face & neck as day cream, or apply a thick layer at night as a Sleeping Mask.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم Global-Repair Intensive.'], en: ['Global-Repair Intensive Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الناضجة جداً (فوق 50 عاماً)، الجفاف المزمن، وفقدان مرونة وكثافة الوجه.', en: 'Very mature skin (50+), chronic dryness, and loss of facial elasticity and density.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام غني جداً يذوب في الجلد ليتركه مخملياً.', en: 'Ultra-rich texture that melts into the skin leaving it velvety.' }
    }
});

// [29] FILORGA NCTF (NCEF) REVERSE MAT FLUID 50 ML
deepProductsList.push({
    id: 'fil_ncef_reverse_mat', brandId: 'filorga', familyId: 'ncef', brand: 'Filorga',
    name: { ar: 'NCEF-ريفرس مات فلويد (سائل التجديد المطفي)', en: 'NCEF-Reverse Mat Supreme Multi-Correction Fluid' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يقدم نفس قوة <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> وحمض الهيالورونيك الموجودة في كريم ريفرس العادي، ولكن بتركيبة معززة بمستخلص شجرة (Enantia chlorantha) لتقليص المسام والتحكم في الإفرازات الدهنية.', 
            en: 'Delivers the same <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> and HA power as the regular Reverse cream, but enriched with (Enantia chlorantha) extract to shrink pores and control sebum production.' 
        },
        patient_benefit: { 
            ar: 'يجدد خلايا البشرة ويعالج التجاعيد بقوة الميزوثيرابي، مع الحفاظ على مظهر مطفي (Matte) خالٍ من اللمعان طوال اليوم.', 
            en: 'Renews skin cells and treats wrinkles with mesotherapy power, while maintaining a shine-free, matte look all day.' 
        },
        active_ingredients: [
            { name: 'NCEF + HA + Collagen', concentration: 'High | عالي', role: { ar: 'تجديد، امتلاء، وشد.', en: 'Renewal, plumping, and firming.' } },
            { name: 'Enantia Chlorantha + Oleanolic Acid', concentration: 'Mattifying | مزيل لمعان', role: { ar: 'تقليص المسام وتخفيض الزهم.', en: 'Pore shrinking and sebum reduction.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'كريم معالج (سائل مطفي).', en: 'Treatment cream (Matte fluid).' },
        routine_step_number: 3,
        application: { ar: 'يُوزع على وجه نظيف، مثالي كأساس للمكياج للبشرة الدهنية.', en: 'Distribute on clean face, ideal as a makeup base for oily skin.' },
        layering: { 
            do_not_mix_with: { ar: ['الزيوت الإضافية.'], en: ['Additional oils.'] }, 
            best_mixed_with: { ar: ['سيروم Age-Purify.', 'NCEF Shot.'], en: ['Age-Purify Serum.', 'NCEF Shot.'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد، الترهل، البشرة المختلطة إلى الدهنية، والمسام الواسعة اللامعة.', en: 'Wrinkles, sagging, combination to oily skin, and shiny enlarged pores.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام سائل (Fluid) خفيف يمتص فوراً ليترك طبقة بودرية ناعمة.', en: 'Light fluid texture absorbs instantly to leave a soft powdery finish.' }
    }
});

// [30] FILORGA SLEEP & LIFT CREAM 50 ML
deepProductsList.push({
    id: 'fil_sleep_lift', brandId: 'filorga', familyId: 'lift_structure', brand: 'Filorga',
    name: { ar: 'سليب آند ليفت (كريم الشد الليلي)', en: 'Sleep & Lift Ultra-Lifting Night Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يجمع <span class="glossary-term" onclick="openGlossary(\'plasmatic_lifting\')">عوامل الشد البلازمية</span> مع حمضين أمينيين مستخلصين من الطحالب الدقيقة لاستعادة مرونة وكثافة الجلد (Skin recovery) خلال فترة التجديد الليلي.', 
            en: 'Combines <span class="glossary-term" onclick="openGlossary(\'plasmatic_lifting\')">Plasmatic Lifting Factors</span> with two amino acids extracted from microalgae to restore skin elasticity and density (Skin recovery) during nighttime regeneration.' 
        },
        patient_benefit: { 
            ar: 'يعمل أثناء النوم لرفع الأنسجة المترهلة وإعادة رسم ملامح الوجه، وتستيقظ المريضة ببشرة مشدودة وممتلئة.', 
            en: 'Works during sleep to lift sagging tissues and redraw facial contours, patient wakes up with visibly tightened and plumped skin.' 
        },
        active_ingredients: [
            { name: 'Plasmatic Lifting Factors', concentration: 'Core | أساسي', role: { ar: 'نحت الوجه ورفع الجلد.', en: 'Facial sculpting and skin lifting.' } },
            { name: 'Arginine + PCA (Microalgae)', concentration: 'Active | فعال', role: { ar: 'تعزيز استعادة الكولاجين الليلي.', en: 'Boosting nighttime collagen recovery.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily PM.' },
        step_in_routine: { ar: 'كريم الليل لشد البشرة.', en: 'Night lifting cream.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك بحركات تصاعدية على الوجه والرقبة.', en: 'Massage with upward strokes on face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم Lift-Designer.'], en: ['Lift-Designer Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'ترهل ملامح الوجه، فقدان الحجم، الرقبة المترهلة، والشيخوخة المتقدمة.', en: 'Sagging facial contours, volume loss, sagging neck, and advanced aging.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام بلسمي يغلف البشرة بتأثير الشد.', en: 'Balm-like texture enveloping skin with a tensor effect.' }
    }
});

// [31] FILORGA OXYGEN-GLOW CREAM 50 ML
deepProductsList.push({
    id: 'fil_oxygen_glow_cream', brandId: 'filorga', familyId: 'oxygen_glow', brand: 'Filorga',
    name: { ar: 'أكسجين-جلو كريم (كريم الإشراقة الفائقة)', en: 'Oxygen-Glow Super-Perfecting Radiance Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم مركب (Super-Skin Boosting Factors) المعتمد على الأكسجين وحمض الهيالورونيك، مع تقنية <span class="glossary-term" onclick="openGlossary(\'photoperfector_hd\')">Photoperfector HD</span>، بالإضافة إلى ببتيد لتصحيح لون البشرة.', 
            en: 'Uses (Super-Skin Boosting Factors) based on oxygen and HA, with <span class="glossary-term" onclick="openGlossary(\'photoperfector_hd\')">Photoperfector HD</span> tech, plus a color-control peptide.' 
        },
        patient_benefit: { 
            ar: 'تأثير السحر الفوري؛ يعطي البشرة إشراقة لؤلؤية طبيعية، يطمس العيوب البصرية، ويرطب بعمق دون أي لمعان دهني.', 
            en: 'Instant magic effect; gives the skin a natural pearlescent glow, optically blurs flaws, and hydrates deeply without greasy shine.' 
        },
        active_ingredients: [
            { name: 'Oxygen-Booster', concentration: 'Active | فعال', role: { ar: 'تنشيط تنفس الخلايا لإنهاء البهتان.', en: 'Activating cell respiration to end dullness.' } },
            { name: 'Color-Control Peptide', concentration: 'Color-correcting', role: { ar: 'تجديد خلايا البشرة وتوحيد لونها.', en: 'Skin cell renewal and evening tone.' } },
            { name: 'Illuminating Micro-particles', concentration: 'Cosmetic | تجميلي', role: { ar: 'توهج فوري وتأثير فلتر طبيعي.', en: 'Instant glow and natural filter effect.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'كريم مرطب منير للوجه.', en: 'Illuminating hydrating cream.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على كامل الوجه كخطوة أخيرة قبل المكياج أو منفرداً.', en: 'Apply to entire face as final step before makeup or alone.' },
        layering: { 
            do_not_mix_with: { ar: ['المرطبات الثقيلة (تخفي التأثير اللؤلؤي).'], en: ['Heavy moisturizers (hides the pearlescent effect).'] }, 
            best_mixed_with: { ar: ['Oxygen-Glow Eyes كريم العين.'], en: ['Oxygen-Glow Eyes cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الباهتة والمجهدة، عدم توحد السطح، والباحثات عن نضارة وتوهج فوري خالي من المكياج.', en: 'Dull stressed skin, uneven surface, and those seeking an instant makeup-free glow.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لون الكريم وردي لؤلؤي يعزز النضارة البصرية فوراً.', en: 'The cream has a pearlescent pink tint that instantly boosts visual radiance.' }
    }
});
// ==========================================
// 📦 بلوك رقم (23): فيلورجا (منظفات Skin Prep والماسكات العلاجية)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة مصطلحات القاموس الجديدة ---

glossaryDict['melatonin_cx'] = {
    title: { ar: 'مركب الميلاتونين (Melatonin-CX) 🌙', en: 'Melatonin-CX 🌙' },
    desc: { 
        ar: 'مركب قوي ينشط آليات تعافي الجلد الليلية ويحاكي تأثير هرمون النوم (الميلاتونين) على الخلايا، مما يضمن تجدداً عميقاً للبشرة المجهدة أثناء الليل.', 
        en: 'A potent complex that activates nighttime skin recovery mechanisms, mimicking the cellular effect of the sleep hormone (Melatonin), ensuring deep renewal of stressed skin overnight.' 
    }
};

glossaryDict['rhamnose_polysaccharide'] = {
    title: { ar: 'سكر الرامنوز (Rhamnose Polysaccharide) 🌿', en: 'Rhamnose Polysaccharide 🌿' },
    desc: { 
        ar: 'مكون نشط مهدئ بقوة، يخفف التهيج ويوحد لون البشرة فوراً، كما يحفز الخلايا الليفية لإنتاج الكولاجين.', 
        en: 'A powerfully soothing active ingredient that reduces irritation and instantly evens skin tone, while stimulating fibroblasts to produce collagen.' 
    }
};

// --- 2. المنتجات العميقة (Deep Products) ---

// [32] FILORGA AGE PURIFY CLEAN CLEANSING GEL 150 ML
deepProductsList.push({
    id: 'fil_age_purify_clean', brandId: 'filorga', familyId: 'age_purify', brand: 'Filorga',
    name: { ar: 'إيدج-بيوريفاي كلين (جل الغسول المنقي)', en: 'Age-Purify Clean Smoothing Purifying Cleansing Gel' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: '5.5 (يحترم الحاجز الجلدي)', en: '5.5 (Respects skin barrier)' },
        mechanism: { 
            ar: 'يجمع بين <span class="glossary-term" onclick="openGlossary(\'hyaluro_youth\')">Hyaluro-Youth CX</span> و <span class="glossary-term" onclick="openGlossary(\'dermo_rescue\')">Dermo-Rescue CX</span> في قاعدة تنظيف هلامية. يزيل الشوائب، يقشر الخلايا الميتة بأحماض الفواكه، وينظم الزهم بالزنك.', 
            en: 'Combines <span class="glossary-term" onclick="openGlossary(\'hyaluro_youth\')">Hyaluro-Youth CX</span> and <span class="glossary-term" onclick="openGlossary(\'dermo_rescue\')">Dermo-Rescue CX</span> in a gel cleansing base. Removes impurities, exfoliates dead cells with AHAs, and regulates sebum with Zinc.' 
        },
        patient_benefit: { 
            ar: 'ينظف البشرة المعرضة للحبوب من البالغين بلطف، يترك الجلد ناعماً وممتلئاً بدلاً من الشعور بالشد والجفاف.', 
            en: 'Gently cleanses adult blemish-prone skin, leaving it smooth and plump instead of feeling tight and dry.' 
        },
        active_ingredients: [
            { name: 'AHA + Zinc + Peptides', concentration: 'Active | فعال', role: { ar: 'تنظيف عميق، مكافحة تجاعيد وحبوب.', en: 'Deep cleansing, anti-wrinkle & anti-blemish.' } },
            { name: 'Polysaccharide Matrix', concentration: 'Protecting | حامي', role: { ar: 'منع التصاق البكتيريا المسببة للحبوب.', en: 'Preventing the adhesion of acne-causing bacteria.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'الخطوة الأولى (غسول علاجي).', en: 'First step (Therapeutic cleanser).' },
        routine_step_number: 1,
        application: { ar: 'يُرغى على بشرة مبللة، يُدلك بلطف، ثم يُشطف جيداً.', en: 'Lather on wet skin, massage gently, then rinse thoroughly.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك الميكانيكي القاسي.'], en: ['Harsh mechanical scrubbing.'] }, 
            best_mixed_with: { ar: ['سائل Age-Purify Fluid.'], en: ['Age-Purify Fluid.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة المختلطة والدهنية التي تعاني من حبوب متأخرة وتجاعيد في آن واحد.', en: 'Combination and oily skin suffering from late-onset acne and wrinkles simultaneously.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'قوام جل أخضر خفيف يتحول لرغوة ناعمة.', en: 'Light green gel texture transforming into a soft foam.' }
    }
});

// [33] FILORGA SKIN PREP PERFECTING CLEANSING OIL 150 ML
deepProductsList.push({
    id: 'fil_skin_prep_oil', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سكين-بريب (زيت التنظيف المثالي)', en: 'Skin Prep Perfecting Cleansing Oil' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي', en: 'Physiological' },
        mechanism: { 
            ar: 'زيت تنظيف غني بأوميجا 6. يعمل بمبدأ "الدهون تذيب الدهون"، فيفكك المكياج المقاوم للماء والدهون المتصلبة داخل المسام، ثم يستحلب بالماء ليُشطف تماماً دون ترك بقايا.', 
            en: 'Cleansing oil rich in Omega 6. Works on the "like dissolves like" principle, breaking down waterproof makeup and hardened sebum in pores, then emulsifies with water to rinse cleanly without residue.' 
        },
        patient_benefit: { 
            ar: 'يزيل أثقل أنواع المكياج (حتى مكياج العين المقاوم للماء) بلطف فائق، ويغذي الجلد ليتركه ناعماً كالحرير.', 
            en: 'Ultra-gently removes the heaviest makeup (even waterproof eye makeup), nourishing the skin to leave it silky smooth.' 
        },
        active_ingredients: [
            { name: 'Omega 6 (from Plant Oils)', concentration: 'Nourishing | مغذي', role: { ar: 'تذويب الشوائب وتقوية حاجز الجلد.', en: 'Dissolving impurities and strengthening skin barrier.' } },
            { name: 'Lipophilic Surfactants', concentration: 'Active | فعال', role: { ar: 'التحول إلى مستحلب حليبي عند ملامسة الماء.', en: 'Transforming into a milky emulsion upon contact with water.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مساءً (لإزالة المكياج وواقي الشمس).', en: 'Evening (to remove makeup and SPF).' },
        step_in_routine: { ar: 'الخطوة الأولى في التنظيف المزدوج.', en: 'First step in Double Cleansing.' },
        routine_step_number: 1,
        application: { ar: 'يُدلك على بشرة جافة، ثم يضاف قليل من الماء ليصبح حليبياً، ثم يُشطف.', en: 'Massage onto dry skin, add water to emulsify into milk, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['الماء قبل وضع الزيت (يجب وضعه على وجه جاف أولاً).'], en: ['Water before oil application (must be applied to a dry face first).'] }, 
            best_mixed_with: { ar: ['غسول رغوي بعده (Double Cleansing).'], en: ['Foam cleanser afterwards (Double Cleansing).'] } 
        }
    },
    precautions: {
        indications: { ar: 'إزالة المكياج الثقيل، تنظيف المسام بعمق لجميع أنواع البشرة (بما فيها الدهنية).', en: 'Heavy makeup removal, deep pore cleansing for all skin types (including oily).' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يسد المسام (Non-comedogenic).', en: 'Non-comedogenic.' }
    }
});

// [34] FILORGA SKIN PREP ENZYMATIC CLEANSING FOAM 150 ML
deepProductsList.push({
    id: 'fil_skin_prep_enzymatic_foam', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سكين-بريب (رغوة التنظيف الإنزيمية)', en: 'Skin Prep Enzymatic Cleansing Foam' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي', en: 'Physiological' },
        mechanism: { 
            ar: 'رغوة هوائية تحتوي على إنزيم الباباين (مستخلص البابايا) الذي يهضم البروتينات الميتة على سطح الجلد بلطف، مما يوفر تقشيراً بيولوجياً دقيقاً أثناء التنظيف اليومي.', 
            en: 'Airy foam containing Papain enzyme (Papaya extract) which gently digests dead surface proteins, providing a micro-biological exfoliation during daily cleansing.' 
        },
        patient_benefit: { 
            ar: 'ينظف ويقشر في خطوة واحدة، يعيد الإشراقة للبشرة الباهتة، ويحسن ملمس الجلد دون الحاجة للفرك.', 
            en: 'Cleanses and exfoliates in one step, restores radiance to dull skin, and refines skin texture without rubbing.' 
        },
        active_ingredients: [
            { name: 'Papain Enzyme', concentration: 'Exfoliating | مقشر', role: { ar: 'إذابة الروابط بين الخلايا الميتة.', en: 'Dissolving bonds between dead cells.' } },
            { name: 'Hyaluronic Acid', concentration: 'Hydrating | مرطب', role: { ar: 'ترطيب عميق لمنع جفاف التقشير.', en: 'Deep hydration to prevent peeling dryness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً (يُفضل مساءً).', en: 'Once daily (preferably PM).' },
        step_in_routine: { ar: 'الغسول المقشر.', en: 'Exfoliating cleanser.' },
        routine_step_number: 1,
        application: { ar: 'تُضخ الرغوة وتُدلك على وجه مبلل وتترك لثوانٍ ثم تُشطف.', en: 'Pump foam, massage onto wet face, leave for seconds, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات أحماض قوية جداً في نفس الوقت.'], en: ['Very strong acid exfoliants simultaneously.'] }, 
            best_mixed_with: { ar: ['زيت التنظيف قبله (للتنظيف المزدوج).'], en: ['Cleansing oil beforehand (for Double Cleansing).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الباهتة، الملمس الخشن، والبحث عن تجديد سطحي يومي لطيف.', en: 'Dull skin, rough texture, and seeking gentle daily surface renewal.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مناسب للبشرة الحساسة التي لا تتحمل أحماض الفواكه (AHA).', en: 'Suitable for sensitive skin intolerant to Fruit Acids (AHA).' }
    }
});

// [35] FILORGA SKIN PREP AHA CLEANSING GEL 150 ML
deepProductsList.push({
    id: 'fil_skin_prep_aha_gel', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سكين-بريب (جل التنظيف بأحماض AHA)', en: 'Skin Prep AHA Cleansing Gel' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (للتقشير)', en: 'Acidic (for peeling)' },
        mechanism: { 
            ar: 'غسول هلامي نشط يحتوي على مزيج من أحماض ألفا هيدروكسي (AHA) لخفض درجة حموضة السطح مؤقتاً، مما يؤدي إلى تقشير كيميائي يومي يحفز دوران الخلايا.', 
            en: 'Active gel cleanser containing an AHA blend to temporarily lower surface pH, triggering daily chemical exfoliation that accelerates cell turnover.' 
        },
        patient_benefit: { 
            ar: 'يصقل سطح البشرة، يوحد اللون، ويقلل من ظهور المسام الواسعة والتصبغات الخفيفة بمرور الوقت.', 
            en: 'Resurfaces the skin, evens tone, and reduces the appearance of enlarged pores and mild pigmentation over time.' 
        },
        active_ingredients: [
            { name: 'AHA Complex (Glycolic, Lactic, etc.)', concentration: 'Active | فعال', role: { ar: 'تقشير الخلايا الميتة وتجديد السطح.', en: 'Exfoliating dead cells and surface renewal.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily PM.' },
        step_in_routine: { ar: 'غسول تقشير نشط.', en: 'Active exfoliating cleanser.' },
        routine_step_number: 1,
        application: { ar: 'يُرغى على بشرة مبللة، يُترك دقيقة لتفعيل الأحماض ثم يُشطف.', en: 'Lather on wet skin, leave for 1 min to activate acids, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول المركز أو التونر الحمضي في نفس الليلة.'], en: ['Concentrated retinol or acid toners on the same night.'] }, 
            best_mixed_with: { ar: ['مرطبات غنية وواقي شمس في الصباح.'], en: ['Rich moisturizers and SPF in the morning.'] } 
        }
    },
    precautions: {
        indications: { ar: 'المسام الواسعة، البشرة السميكة، التصبغات السطحية، والخطوط الرفيعة.', en: 'Enlarged pores, thick skin, surface pigmentation, and fine lines.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'قد يسبب وخزاً طفيفاً يدل على فعالية الأحماض.', en: 'May cause mild tingling indicating acid activity.' }
    }
});

// [36] FILORGA MESO-MASK 50 ML
deepProductsList.push({
    id: 'fil_meso_mask', brandId: 'filorga', familyId: 'ncef', brand: 'Filorga',
    name: { ar: 'ميزو-ماسك (قناع النضارة والتنعيم)', en: 'Meso-Mask Smoothing Radiance Mask' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'أشهر قناع من فيلورجا. يغمر البشرة بمركب <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> مع الكولاجين والإيلاستين، مدعوماً بـ <span class="glossary-term" onclick="openGlossary(\'rhamnose_polysaccharide\')">سكر الرامنوز</span> لتهدئة الاحمرار وتفتيح البشرة فوراً.', 
            en: 'Filorga\'s most iconic mask. Drenches skin in <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span>, collagen, and elastin, supported by <span class="glossary-term" onclick="openGlossary(\'rhamnose_polysaccharide\')">Rhamnose polysaccharide</span> to instantly soothe redness and brighten.' 
        },
        patient_benefit: { 
            ar: 'تأثير سحري فوري؛ يمحو علامات الإرهاق، يملأ الخطوط، يهدئ البشرة، ويمنح الوجه إضاءة وصفاء لا مثيل له.', 
            en: 'Instant magic effect; erases signs of fatigue, plumps lines, soothes skin, and grants unparalleled facial luminosity and clarity.' 
        },
        active_ingredients: [
            { name: 'Rhamnose Polysaccharide', concentration: 'Soothing | مهدئ', role: { ar: 'توحيد اللون وتقليل التهيج.', en: 'Evening tone and reducing irritation.' } },
            { name: 'NCEF + Collagen + Elastin', concentration: 'High | عالي', role: { ar: 'تجديد الخلايا وشد البشرة المترهلة.', en: 'Cell renewal and tightening sagging skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين أسبوعياً.', en: 'Once to twice a week.' },
        step_in_routine: { ar: 'عناية أسبوعية مكثفة.', en: 'Intensive weekly care.' },
        routine_step_number: 2,
        application: { ar: 'توضع طبقة سخية على الوجه، الرقبة، ومحيط العين. يُترك 15-30 دقيقة ثم يُزال بقطن مبلل.', en: 'Apply a generous layer to face, neck, and eye contour. Leave for 15-30 mins, then remove with a damp cotton pad.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['التطبيق قبل المناسبات للحصول على تأثير فلاش (Flash effect).'], en: ['Application before events for a flash effect.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة المجهدة جداً، البهتان، الخطوط التعبيرية، والبحث عن نضارة فورية قبل المناسبات.', en: 'Highly stressed skin, dullness, expression lines, and seeking instant pre-event radiance.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام كريمي غني ومريح جداً. يمكن وضعه حول العين بأمان.', en: 'Rich and very comforting creamy texture. Safe to apply around the eyes.' }
    }
});

// [37] FILORGA NCEF NIGHT MASK 50 ML
deepProductsList.push({
    id: 'fil_ncef_night_mask', brandId: 'filorga', familyId: 'ncef', brand: 'Filorga',
    name: { ar: 'NCEF نايت ماسك (قناع النوم المجدد)', en: 'NCEF-Night Mask Supreme Multi-Correction' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'علاج ليلي فائق يدمج تركيز حقن الميزوثيرابي <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> مع مركب <span class="glossary-term" onclick="openGlossary(\'melatonin_cx\')">Melatonin-CX</span> الذي يسرع عمليات الترميم الليلي الخلوي، بالإضافة إلى حمض الهيالورونيك والكولاجين للامتلاء.', 
            en: 'Supreme night treatment integrating meso-injection <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> concentration with <span class="glossary-term" onclick="openGlossary(\'melatonin_cx\')">Melatonin-CX</span> complex that accelerates cellular night repair, plus HA and collagen for plumping.' 
        },
        patient_benefit: { 
            ar: 'يعوض نقص النوم (8 ساعات من النوم في قناع). تستيقظ المريضة ببشرة مشدودة، نضرة، مرتاحة تماماً، والتجاعيد أقل وضوحاً بشكل ملحوظ.', 
            en: 'Compensates for sleep deprivation (8 hours of sleep in a mask). Patient wakes up with tightened, radiant, fully rested skin, and visibly reduced wrinkles.' 
        },
        active_ingredients: [
            { name: 'Melatonin-CX', concentration: 'Recovery | تعافي', role: { ar: 'تنشيط هرمونات التعافي الليلي.', en: 'Activating nighttime recovery hormones.' } },
            { name: 'NCEF Complex', concentration: 'Supreme | فائق', role: { ar: 'تجديد الخلايا أثناء النوم.', en: 'Cell renewal during sleep.' } },
            { name: 'Red Indigo Extract', concentration: 'Detox', role: { ar: 'إزالة الإجهاد والسموم المتراكمة.', en: 'Eliminating stress and accumulated toxins.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً، أو 3 مرات أسبوعياً كعلاج مكثف.', en: 'Daily, or 3 times a week as an intensive treatment.' },
        step_in_routine: { ar: 'الخطوة الليلية الأخيرة (يترك حتى الصباح).', en: 'Last PM step (leave on until morning).' },
        routine_step_number: 4,
        application: { ar: 'توضع طبقة رقيقة على وجه نظيف (ومحيط العين). لا يشطف. يترك طوال الليل.', en: 'Apply a thin layer to clean face (and eye contour). Do not rinse. Leave on overnight.' },
        layering: { 
            do_not_mix_with: { ar: ['الكريمات الليلية الثقيلة الأخرى (استخدمه كبديل لها).'], en: ['Other heavy night creams (use as an alternative).' ] }, 
            best_mixed_with: { ar: ['سيروم NCEF Intensive قبله.'], en: ['NCEF Intensive Serum beforehand.'] } 
        }
    },
    precautions: {
        indications: { ar: 'ليالي السهر، الإرهاق الشديد، التجاعيد، والبهتان الصباحي.', en: 'Sleepless nights, severe fatigue, wrinkles, and morning dullness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام جل مغلف سريع الامتصاص، لا يلوث الوسادة.', en: 'Enveloping quick-absorbing gel texture, does not stain the pillow.' }
    }
});

// [38] FILORGA OXYGEN-GLOW MASK 75 ML
deepProductsList.push({
    id: 'fil_oxygen_glow_mask', brandId: 'filorga', familyId: 'oxygen_glow', brand: 'Filorga',
    name: { ar: 'أكسجين-جلو ماسك (قناع الإشراقة الفورية)', en: 'Oxygen-Glow Super-Perfecting Express Mask' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'قناع سريع المفعول يدمج مركب تعزيز الأكسجين مع حمض الهيالورونيك وإنزيم L مزيل للسموم، بالإضافة إلى مقشرات دقيقة نشطة (Gluconolactone) لتوحيد السطح فوراً.', 
            en: 'Express action mask integrating Oxygen booster complex with HA and detox L-enzyme, plus active micro-exfoliants (Gluconolactone) to instantly even the surface.' 
        },
        patient_benefit: { 
            ar: 'يعالج البشرة الباهتة والمتعبة في 10 دقائق فقط؛ يمنح توهجاً فورياً، يملأ الجلد، ويضيق المسام، لتبدو البشرة خالية من العيوب.', 
            en: 'Treats dull and tired skin in just 10 mins; grants an instant glow, plumps the skin, and tightens pores, for a flawless complexion.' 
        },
        active_ingredients: [
            { name: 'Super-Skin Boosting Factors', concentration: 'Active | فعال', role: { ar: 'ضخ الأكسجين والترطيب.', en: 'Pumping oxygen and hydration.' } },
            { name: 'Gluconolactone (PHA) + Papaya', concentration: 'Peeling | تقشير', role: { ar: 'إزالة الخلايا الميتة لنضارة فورية.', en: 'Removing dead cells for instant radiance.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '1 إلى 3 مرات أسبوعياً.', en: '1 to 3 times a week.' },
        step_in_routine: { ar: 'قناع فلاش للوجه.', en: 'Flash face mask.' },
        routine_step_number: 2,
        application: { ar: 'توضع طبقة سميكة على وجه نظيف. يُترك لمدة 10 دقائق ثم يُشطف بقطنة مبللة.', en: 'Apply a thick layer to clean face. Leave for 10 mins, then rinse with a damp cotton pad.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات عنيفة في نفس اليوم.'], en: ['Harsh exfoliants on the same day.'] }, 
            best_mixed_with: { ar: ['كريم Oxygen-Glow للوجه للحفاظ على النضارة.'], en: ['Oxygen-Glow Face Cream to lock in the radiance.'] } 
        }
    },
    precautions: {
        indications: { ar: 'بهتان البشرة، المسام الواسعة، الملمس الخشن، والحاجة لنضارة سريعة.', en: 'Dullness, enlarged pores, rough texture, and need for quick radiance.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لون وردي معدني يضفي إضاءة بصرية أثناء وبعد الاستخدام.', en: 'Metallic pink color imparts visual illumination during and after use.' }
    }
});

// [39] FILORGA AGE PURIFY MASK 75 ML
deepProductsList.push({
    id: 'fil_age_purify_mask', brandId: 'filorga', familyId: 'age_purify', brand: 'Filorga',
    name: { ar: 'إيدج-بيوريفاي ماسك (قناع التنقية والتجاعيد)', en: 'Age-Purify Double Correction Mask' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن (قاعدة طينية)', en: 'Balanced (Clay base)' },
        mechanism: { 
            ar: 'قناع من الطين الأبيض (Kaolin) مدعوم بمركبي (Hyaluro-Youth) للتجاعيد و (Dermo-Rescue) للحبوب. ينظف المسام بعمق ويمتص الدهون مع الحفاظ على امتلاء الجلد.', 
            en: 'White Clay (Kaolin) mask powered by (Hyaluro-Youth) for wrinkles and (Dermo-Rescue) for blemishes. Deeply cleanses pores and absorbs sebum while keeping skin plump.' 
        },
        patient_benefit: { 
            ar: 'يمتص اللمعان والدهون فوراً، ينظف الرؤوس السوداء ويصغر المسام، وفي نفس الوقت يشد البشرة ولا يسبب الجفاف القاسي المعتاد لماسكات الطين.', 
            en: 'Instantly absorbs shine and sebum, clears blackheads and shrinks pores, while firming the skin without the harsh dryness typical of clay masks.' 
        },
        active_ingredients: [
            { name: 'White Clay (Kaolin)', concentration: 'Purifying | منقي', role: { ar: 'امتصاص الزهم وإزالة سموم المسام.', en: 'Sebum absorption and pore detoxification.' } },
            { name: 'Micro-peeling Acids + Zinc', concentration: 'Active | فعال', role: { ar: 'علاج الحبوب وتنظيم الإفرازات.', en: 'Treating blemishes and regulating secretions.' } },
            { name: 'Hyaluronic Acid', concentration: 'Plumping | ممتلئ', role: { ar: 'منع الجفاف وملء الخطوط.', en: 'Preventing dryness and plumping lines.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين أسبوعياً.', en: 'Twice a week.' },
        step_in_routine: { ar: 'قناع أسبوعي منقي.', en: 'Weekly purifying mask.' },
        routine_step_number: 2,
        application: { ar: 'توضع طبقة سميكة على الوجه (خاصة منطقة T-Zone)، يُترك 10 دقائق ثم يُشطف جيداً.', en: 'Apply a thick layer to face (esp. T-Zone), leave 10 mins, then rinse thoroughly.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات كيميائية أو فيزيائية إضافية.'], en: ['Additional chemical or physical scrubs.'] }, 
            best_mixed_with: { ar: ['سائل Age-Purify Fluid للترطيب بعده.'], en: ['Age-Purify Fluid for hydration afterwards.'] } 
        }
    },
    precautions: {
        indications: { ar: 'المسام المسدودة، الرؤوس السوداء، اللمعان، وحب الشباب لدى البالغين مع وجود تجاعيد.', en: 'Clogged pores, blackheads, shine, and adult acne with existing wrinkles.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'قوام طيني كريمي أخضر لا ينشف بشكل متحجر على الوجه.', en: 'Green creamy clay texture that does not crack or dry rock-hard on the face.' }
    }
});
// ==========================================
// 📦 بلوك رقم (24): فيلورجا (الإصدارات الحديثة والماسكات الورقية)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة مصطلحات القاموس الجديدة ---

glossaryDict['aox_5_complex'] = {
    title: { ar: 'مركب مضادات الأكسدة الخماسي 🛡️', en: 'AOX 5 Complex 🛡️' },
    desc: { 
        ar: 'مزيج جبار من 5 مضادات أكسدة (أستازانثين، إرغوثيونين، فيتامين C، فيتامين E، وفيتامين B3) يحمي البشرة من الإجهاد التأكسدي اليومي ويمنع التدمير المبكر للكولاجين.', 
        en: 'A powerful blend of 5 antioxidants (Astaxanthin, Ergothioneine, Vit C, Vit E, and Vit B3) protecting the skin from daily oxidative stress and preventing premature collagen destruction.' 
    }
};

glossaryDict['neuropeptide_tech'] = {
    title: { ar: 'تقنية الببتيد العصبي (Neuropeptide) 💉', en: 'Neuropeptide Technology 💉' },
    desc: { 
        ar: 'ببتيدات متطورة صُممت لتقليد تأثير (توكسين البوتولينوم/البوتوكس) موضعياً، تعمل على استرخاء التشنجات العضلية الدقيقة المسببة للتجاعيد التعبيرية بدقة متناهية.', 
        en: 'Advanced peptides designed to topically mimic the effect of (Botulinum toxin/Botox), relaxing micro-muscle spasms that cause expression lines with pinpoint accuracy.' 
    }
};

// --- 2. المنتجات العميقة (Deep Products) ---

// [40] FILORGA TIME FILLER SHOT 15 ML
deepProductsList.push({
    id: 'fil_time_filler_shot', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم-فيلر شوت (حقنة التجاعيد التعبيرية)', en: 'Time-Filler Shot 5XP Expression Lines' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن للجلد', en: 'Skin Balanced' },
        mechanism: { 
            ar: 'سيروم موضعي شديد التركيز يعتمد على <span class="glossary-term" onclick="openGlossary(\'neuropeptide_tech\')">الببتيدات العصبية</span> لاسترخاء العضلات، مع سكريات نباتية لتشكيل غشاء يشد الجلد فوراً. يأتي بأداة تطبيق دقيقة (Zamac applicator) تشبه الحقنة لتدليك الخطوط وتبريدها.', 
            en: 'Highly concentrated topical serum relying on <span class="glossary-term" onclick="openGlossary(\'neuropeptide_tech\')">Neuropeptides</span> to relax muscles, with plant polysaccharides forming an instant tightening film. Comes with a syringe-like Zamac applicator to massage and cool lines.' 
        },
        patient_benefit: { 
            ar: 'يستهدف تجاعيد التعبير الخمسة بدقة (الجبهة، العبسة، قدم الغراب، حول الفم، والرقبة)، يفكك التشنج العضلي وينعم الخطوط خلال 7 أيام دون تجميد الملامح.', 
            en: 'Precisely targets the 5 expression lines (forehead, frown, crow\'s feet, upper lip, neck), relaxing muscle spasms and smoothing lines in 7 days without freezing features.' 
        },
        active_ingredients: [
            { name: 'Hexapeptide Complex', concentration: 'High Dose | جرعة عالية', role: { ar: 'إرخاء انقباضات العضلات التعبيرية.', en: 'Relaxing expression muscle contractions.' } },
            { name: 'Marine Ferment', concentration: 'Active | فعال', role: { ar: 'تحسين توتر العضلات ودعم الجلد.', en: 'Improving muscle tone and skin support.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'علاج موضعي قبل السيروم أو الكريم.', en: 'Topical treatment before serum or cream.' },
        routine_step_number: 2,
        application: { ar: 'يُطبق مباشرة على الخطوط التعبيرية باستخدام الرأس المعدني البارد، ثم يُدلك بالتربيت.', en: 'Apply directly to expression lines using the cooling metal tip, then dab to absorb.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم Time-Filler 5XP لنتيجة متكاملة.'], en: ['Time-Filler 5XP Cream for a complete result.'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد التعبيرية العميقة، خطوط الجبهة والعبسة الدائمة، كبديل أو داعم لحقن البوتوكس.', en: 'Deep expression wrinkles, permanent forehead/frown lines, as an alternative or complement to Botox injections.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يوضع على كامل الوجه، مخصص للاستخدام الموضعي فقط (Spot treatment).', en: 'Not for the entire face, intended for targeted spot treatment only.' }
    }
});

// [41] FILORGA NCEF REVITALIZE SERUM 30 ML
deepProductsList.push({
    id: 'fil_ncef_revitalize_serum', brandId: 'filorga', familyId: 'ncef', brand: 'Filorga',
    name: { ar: 'NCEF ريفيتالايز (سيروم التجديد الحيوي المتطور)', en: 'NCEF-Revitalize Polyrevitalizing Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'النسخة الأحدث والأكثر تطوراً. يدمج تركيزاً عالياً من <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> مع مركب إنزيمي يستهدف الخلايا المتشيخة (Senescent cells)، ليعيد تفعيل ديناميكية الجلد وتجديد الأنسجة بشكل شامل.', 
            en: 'The newest, most advanced version. Integrates a high concentration of <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> with an enzyme complex targeting senescent cells, reactivating skin dynamics and globally renewing tissues.' 
        },
        patient_benefit: { 
            ar: 'يوفر إشراقة وتماسكاً لا مثيل لهما، ينعم ملمس الجلد، ويوحد لونه، ويعالج علامات التقدم بالسن بشكل أسرع من الإصدارات السابقة.', 
            en: 'Provides unparalleled radiance and firmness, smooths skin texture, evens tone, and treats aging signs faster than previous editions.' 
        },
        active_ingredients: [
            { name: 'NCEF 10x Concentration', concentration: 'Supreme | فائق', role: { ar: 'تغذية الخلايا وإعادة بناء الأدمة.', en: 'Nourishing cells and rebuilding the dermis.' } },
            { name: 'Senolytic Enzyme Complex', concentration: 'Active | فعال', role: { ar: 'إزالة الخلايا الهرمة التي تسبب شيخوخة الأنسجة المحيطة.', en: 'Clearing aging cells that cause surrounding tissue aging.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'السيروم الأساسي لمكافحة الشيخوخة.', en: 'Core anti-aging serum.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على وجه ورقبة نظيفين قبل كريم العناية.', en: 'Apply to clean face and neck before care cream.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم NCEF-Revitalize.'], en: ['NCEF-Revitalize Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'شيخوخة الجلد المتقدمة، الإرهاق الخلوي، البهتان الشديد وضعف نسيج البشرة.', en: 'Advanced skin aging, cellular exhaustion, severe dullness, and poor skin texture.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تركيبة خفيفة جداً تذوب في الجلد لتعطي امتلاءً فورياً.', en: 'Ultra-light melting formula that gives an instant plumping effect.' }
    }
});

// [42] FILORGA NCEF REVITALIZE CREAM 50 ML
deepProductsList.push({
    id: 'fil_ncef_revitalize_cream', brandId: 'filorga', familyId: 'ncef', brand: 'Filorga',
    name: { ar: 'NCEF ريفيتالايز (كريم التجديد الحيوي المتطور)', en: 'NCEF-Revitalize Polyrevitalizing Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يكمل عمل السيروم؛ يغذي الجلد بعمق بفضل مزيج الزيوت النباتية ومركب <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> المعزز لتماسك الخلايا، ليعمل كدرع واقي ومجدد طوال اليوم.', 
            en: 'Complements the serum; deeply nourishes the skin via botanical oils and the <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> complex which boosts cell cohesion, acting as a protective and renewing shield all day.' 
        },
        patient_benefit: { 
            ar: 'يقوي حاجز الجلد، يوفر راحة فائقة للبشرة الجافة، ويشد الوجه ليمنح مظهراً شاباً ومتألقاً بفعالية مستمرة.', 
            en: 'Strengthens the skin barrier, provides ultimate comfort for dry skin, and firms the face for a youthful, radiant look with sustained efficacy.' 
        },
        active_ingredients: [
            { name: 'NCEF Complex', concentration: 'High | عالي', role: { ar: 'محاكاة التأثير المجدد للميزوثيرابي.', en: 'Mimicking the revitalizing effect of mesotherapy.' } },
            { name: '5 Botanical Oils + Ceramides', concentration: 'Nourishing | مغذي', role: { ar: 'ترميم حاجز الدهون ومنع جفاف الجلد.', en: 'Repairing the lipid barrier and preventing skin dehydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'كريم العناية اليومية المجدد.', en: 'Daily renewing care cream.' },
        routine_step_number: 3,
        application: { ar: 'يوزع بلطف على كامل الوجه والرقبة.', en: 'Distribute gently over the entire face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم NCEF Revitalize.'], en: ['NCEF Revitalize Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'فقدان الإشراقة، التجاعيد، الجفاف المصاحب لتقدم العمر، وضعف بنية الجلد.', en: 'Loss of radiance, wrinkles, age-related dryness, and poor skin structure.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام كريمي مريح ومثالي للبشرة العادية إلى الجافة.', en: 'Comforting creamy texture, ideal for normal to dry skin.' }
    }
});

// [43] FILORGA HYDRA-AOX [5] SERUM 30 ML
deepProductsList.push({
    id: 'fil_hydra_aox5_serum', brandId: 'filorga', familyId: 'hydra_hyal', brand: 'Filorga',
    name: { ar: 'هيدرا-AOX [5] (سيروم مضاد للأكسدة ومجدد)', en: 'Hydra-AOX [5] Intensive Antioxidant Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly Acidic' },
        mechanism: { 
            ar: 'سيروم وقائي وعلاجي يعتمد على <span class="glossary-term" onclick="openGlossary(\'aox_5_complex\')">مركب مضادات الأكسدة الخماسي</span> ليحيد 100% من الشوارد الحرة، مدعوماً بحمض الهيالورونيك منخفض الوزن الجزيئي لترطيب عميق.', 
            en: 'Preventive & therapeutic serum relying on <span class="glossary-term" onclick="openGlossary(\'aox_5_complex\')">AOX 5 Complex</span> to neutralize 100% of free radicals, backed by low molecular weight HA for deep hydration.' 
        },
        patient_benefit: { 
            ar: 'درع يومي متكامل؛ يحمي من الشيخوخة المبكرة (الناتجة عن التلوث والشمس)، يقلص المسام، يقلل الخطوط الرفيعة، ويفجر نضارة الوجه.', 
            en: 'Comprehensive daily shield; protects against premature aging (from pollution/sun), shrinks pores, reduces fine lines, and explodes facial radiance.' 
        },
        active_ingredients: [
            { name: 'Astaxanthin + Ergothioneine', concentration: 'Super AOX | مضادات فائقة', role: { ar: 'حماية خلوية مطلقة من الإجهاد التأكسدي.', en: 'Absolute cellular protection from oxidative stress.' } },
            { name: 'Vitamin C + E + B3 (Niacinamide)', concentration: 'Active | فعال', role: { ar: 'تفتيح، تهدئة، وتقوية حاجز الجلد.', en: 'Brightening, soothing, and barrier strengthening.' } },
            { name: 'Hyaluronic Acid', concentration: 'Hydrating | مرطب', role: { ar: 'ترطيب وملء السطح.', en: 'Hydrating and surface plumping.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة كل صباح.', en: 'Once every morning.' },
        step_in_routine: { ar: 'سيروم الحماية الصباحي (مضاد الأكسدة).', en: 'AM protection serum (Antioxidant).' },
        routine_step_number: 2,
        application: { ar: 'توضع بضع قطرات على وجه نظيف قبل المرطب وواقي الشمس.', en: 'Apply a few drops to a clean face before moisturizer and SPF.' },
        layering: { 
            do_not_mix_with: { ar: ['أحماض تقشير قوية في نفس الروتين الصباحي.', 'مقشرات الإنزيم.'], en: ['Strong peeling acids in the same AM routine.', 'Enzyme exfoliants.'] }, 
            best_mixed_with: { ar: ['واقي شمس (يعزز مفعول الحماية من الأشعة).'], en: ['Sunscreen (boosts UV protection efficacy).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الوقاية من الشيخوخة، البشرة المعرضة للتلوث الحضري، البهتان، والمسام الواسعة.', en: 'Aging prevention, urban pollution-exposed skin, dullness, and enlarged pores.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لونه البرتقالي الفاتح طبيعي بسبب مادة الأستازانثين.', en: 'Its light orange color is naturally derived from Astaxanthin.' }
    }
});

// [44] FILORGA SKIN PREP ENZYMATIC EXFOLIATING CREAM 75 ML
deepProductsList.push({
    id: 'fil_skin_prep_enzymatic_cream', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سكين-بريب (كريم التقشير الإنزيمي المزدوج)', en: 'Skin Prep Enzymatic Exfoliating Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن للتقشير', en: 'Balanced for peeling' },
        mechanism: { 
            ar: 'يقدم تقشيراً مزدوجاً: ميكانيكي (عن طريق جزيئات الرمل البركاني الدقيقة جداً) وإنزيمي (باستخدام إنزيم الباباين). يزيل الجلد الميت ويفكك الروابط البروتينية القديمة دون تخريش الجلد.', 
            en: 'Offers dual exfoliation: Mechanical (via ultra-fine volcanic sand particles) and Enzymatic (using Papain enzyme). Removes dead skin and breaks old protein bonds without scratching the skin.' 
        },
        patient_benefit: { 
            ar: 'يصقل نسيج البشرة فوراً لتصبح فائقة النعومة كبشرة الأطفال، يزيل الرؤوس السوداء السطحية، ويعيد الإشراقة الطبيعية.', 
            en: 'Instantly resurfaces skin texture to become baby-soft, removes superficial blackheads, and restores natural radiance.' 
        },
        active_ingredients: [
            { name: 'Volcanic Sand', concentration: 'Micro-particles | جزيئات دقيقة', role: { ar: 'سنفرة ميكانيكية لطيفة وآمنة.', en: 'Gentle and safe mechanical sanding.' } },
            { name: 'Papain Enzyme', concentration: 'Biological Exfoliant', role: { ar: 'إذابة الخلايا الميتة كيميائياً/بيولوجياً.', en: 'Chemically/biologically dissolving dead cells.' } },
            { name: 'Niacinamide', concentration: 'Soothing | مهدئ', role: { ar: 'منع التهيج المصاحب للتقشير.', en: 'Preventing peeling-associated irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين أسبوعياً.', en: 'Once or twice a week.' },
        step_in_routine: { ar: 'عناية أسبوعية للتقشير (بعد الغسول).', en: 'Weekly exfoliating care (post-cleansing).' },
        routine_step_number: 2,
        application: { ar: 'يوضع على وجه مبلل، يُدلك بحركات دائرية خفيفة لمدة دقيقة، يُترك دقيقتين إضافيتين للإنزيم، ثم يُشطف.', en: 'Apply to wet face, massage in light circular motions for 1 min, leave for 2 extra mins for enzymes, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف.', 'استخدامه مع مقشرات أحماض (AHA) في نفس الوقت.'], en: ['Harsh rubbing.', 'Using with AHA peels simultaneously.'] }, 
            best_mixed_with: { ar: ['الترطيب العميق بكريم Hydra-Hyal بعد الشطف.'], en: ['Deep hydration with Hydra-Hyal cream post-rinsing.'] } 
        }
    },
    precautions: {
        indications: { ar: 'تراكم الجلد الميت، الرؤوس السوداء السطحية، الملمس الخشن، واللون الباهت.', en: 'Dead skin accumulation, superficial blackheads, rough texture, and dull tone.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يُفضل تجنب منطقة محيط العين الدقيقة.', en: 'Best to avoid the delicate eye contour area.' }
    }
});

// [45] FILORGA UV CELLULAR PROTECT FACE SPF 50+ 40 ML
deepProductsList.push({
    id: 'fil_uv_cellular_face', brandId: 'filorga', familyId: 'sun_care', brand: 'Filorga',
    name: { ar: 'يو في سيلولار بروتيكت (واقي شمس للوجه)', en: 'UV Cellular Protect Face SPF 50+' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يوفر حماية خلوية متقدمة بفضل فلاتر (UVA/UVB) واسعة الطيف، معززة بفيتامين E ومضادات الأكسدة لمنع تدمير الخلايا (Photoaging) والحفاظ على مرونة الجلد في الشمس.', 
            en: 'Provides advanced cellular protection via broad-spectrum (UVA/UVB) filters, reinforced with Vit E and antioxidants to prevent photoaging and preserve skin elasticity in the sun.' 
        },
        patient_benefit: { 
            ar: 'يحمي من حروق الشمس وظهور البقع الداكنة، ويقاوم تجاعيد الشمس بقوام سائل غير لزج ولا يترك أثراً أبيض.', 
            en: 'Protects from sunburns and dark spots, resists sun wrinkles with a non-sticky fluid texture leaving zero white cast.' 
        },
        active_ingredients: [
            { name: 'UVA/UVB Sun Filters', concentration: 'SPF 50+', role: { ar: 'درع حماية خارجي عالي الكفاءة.', en: 'High-efficacy external protective shield.' } },
            { name: 'Vitamin E + Niacinamide', concentration: 'Active | فعال', role: { ar: 'مكافحة الشوارد الحرة وتهدئة الجلد.', en: 'Combating free radicals and soothing skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (يُجدد كل ساعتين في الشمس المباشرة).', en: 'Daily (Reapply every 2h in direct sun).' },
        step_in_routine: { ar: 'الخطوة الأخيرة (الصباح).', en: 'Last AM step.' },
        routine_step_number: 4,
        application: { ar: 'يُرج ويوضع بكمية وفيرة على الوجه والرقبة قبل التعرض للشمس.', en: 'Shake and apply a generous amount to face and neck before sun exposure.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم Hydra-AOX 5 قبله لمضاعفة الحماية المضادة للأكسدة.'], en: ['Hydra-AOX 5 Serum beforehand to double antioxidant protection.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الوقاية اليومية، البشرة الحساسة للشمس، والحماية بعد العلاجات التجميلية الخفيفة.', en: 'Daily prevention, sun-sensitive skin, and protection post-mild cosmetic treatments.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره من قبل أطباء الجلد. مقاوم للماء.', en: 'Dermatologically tested. Water-resistant.' }
    }
});

// [46] FILORGA UV CELLULAR PROTECT FACE & BODY SPF 50+ 125 ML
deepProductsList.push({
    id: 'fil_uv_cellular_body', brandId: 'filorga', familyId: 'sun_care', brand: 'Filorga',
    name: { ar: 'يو في سيلولار بروتيكت (لوشن للوجه والجسم)', en: 'UV Cellular Protect Face & Body SPF 50+' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'نسخة اقتصادية وذات قوام حليبي (Lotion) مخصصة لحماية مساحات أوسع. توفر نفس الحماية الخلوية لفلاتر الشمس ومضادات الأكسدة مع زيوت مرطبة تمنع جفاف الجسم.', 
            en: 'An economical, milky (Lotion) version designed for larger areas. Provides the same cellular sun filters and antioxidants with hydrating oils to prevent body dryness.' 
        },
        patient_benefit: { 
            ar: 'يوفر حماية عائلية ممتدة (للوجه والجسم)، يرطب الجلد المعرض لحرارة الشمس والمياه، ولا يترك طبقة دهنية مزعجة على الجسم.', 
            en: 'Provides extended family protection (face/body), hydrates skin exposed to sun heat/water, leaving no annoying greasy film on the body.' 
        },
        active_ingredients: [
            { name: 'Broad Spectrum Filters', concentration: 'SPF 50+', role: { ar: 'حماية شاملة من حروق الشمس.', en: 'Comprehensive protection from sunburns.' } },
            { name: 'Hyaluronic Acid + Plant Oils', concentration: 'Nourishing | مغذي', role: { ar: 'ترطيب عميق لجلد الجسم الجاف.', en: 'Deep hydration for dry body skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند التعرض للشمس (البحر، المسبح).', en: 'During sun exposure (beach, pool).' },
        step_in_routine: { ar: 'واقي شمس للجسم.', en: 'Body sunscreen.' },
        routine_step_number: 4,
        application: { ar: 'يُدلك على كامل مناطق الجسم المكشوفة، ويُجدد بعد السباحة أو التعرق.', en: 'Massage onto all exposed body areas, reapply after swimming or sweating.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'التعرض المباشر للشمس، المصايف، حماية الجسم واليدين.', en: 'Direct sun exposure, holidays, body and hands protection.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'سريع الامتصاص، لا يلتصق بالملابس أو الرمل.', en: 'Fast-absorbing, does not stick to clothes or sand.' }
    }
});

// [47] FILORGA LIFT-MASK (SHEET) 14 ML
deepProductsList.push({
    id: 'fil_sheet_lift_mask', brandId: 'filorga', familyId: 'lift_structure', brand: 'Filorga',
    name: { ar: 'ليفت-ماسك (الماسك الورقي للشد الفوري)', en: 'Lift-Mask Ultra-Lifting Sheet Mask' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعتمد على تقنية (Skin-Lifting Technology) وهي أنسجة من البيو-سيليلوز الدقيقة جداً (Bio-cellulose) تلتصق بالبشرة كـ "بشرة ثانية" لتوصيل <span class="glossary-term" onclick="openGlossary(\'plasmatic_lifting\')">عوامل الشد البلازمية</span> ومضادات الأكسدة مباشرة للخلايا.', 
            en: 'Relies on Skin-Lifting Technology: ultra-fine Bio-cellulose tissues that adhere like a "second skin" to deliver <span class="glossary-term" onclick="openGlossary(\'plasmatic_lifting\')">Plasmatic Lifting Factors</span> and antioxidants directly to cells.' 
        },
        patient_benefit: { 
            ar: 'تأثير (Lifting) فوري خلال 15 دقيقة؛ يشد ملامح الوجه المترهلة، يملأ البشرة، ويعطي إشراقة وتماسكاً مثالياً قبل المناسبات.', 
            en: 'Instant Lifting effect in 15 mins; tightens sagging facial contours, plumps the skin, and gives perfect firmness and radiance before events.' 
        },
        active_ingredients: [
            { name: 'Plasmatic Lifting Factors', concentration: 'Intense Dose | جرعة مكثفة', role: { ar: 'شد الجلد المترهل فورياً.', en: 'Instantly tightening sagging skin.' } },
            { name: 'Sophora Japonica Extract', concentration: 'Antioxidant | مضاد أكسدة', role: { ar: 'محاربة شيخوخة الخلايا وإعطاء نضارة.', en: 'Fighting cellular aging and granting glow.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '1 إلى 3 مرات أسبوعياً (أو قبل مناسبة).', en: '1 to 3 times a week (or pre-event).' },
        step_in_routine: { ar: 'قناع فلاش معالج.', en: 'Flash treatment mask.' },
        routine_step_number: 2,
        application: { ar: 'يُفتح القناع، يُزال الغلاف الشبكي، يوضع على الوجه ليطابق الملامح لمدة 15 دقيقة. لا يُشطف، وتُدلك البقايا لتمتص.', en: 'Unfold, remove mesh layer, fit to facial contours for 15 mins. Do not rinse, massage remaining serum into skin.' },
        layering: { 
            do_not_mix_with: { ar: ['غسل الوجه بعده (تفقد الفائدة).'], en: ['Washing face afterwards (loses the benefit).'] }, 
            best_mixed_with: { ar: ['تطبيق المكياج بعده مباشرة لنتيجة خيالية.'], en: ['Applying makeup directly after for a flawless result.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الترهل المفاجئ، التعب، المناسبات الهامة، وفقدان تحديد الوجه.', en: 'Sudden sagging, fatigue, important events, and loss of facial definition.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'الماسك مصمم من مواد طبيعية 100% قابلة للتحلل.', en: 'The mask is designed from 100% natural biodegradable material.' }
    }
});

// [48] FILORGA TIME-FILLER MASK (SHEET) 23 G
deepProductsList.push({
    id: 'fil_sheet_time_filler_mask', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم-فيلر ماسك (الماسك الورقي للتجاعيد)', en: 'Time-Filler Mask Super-Smoothing Sheet Mask' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'ماسك من الألياف السوداء (Black Fiber Tech) الغنية بالكربون النشط، مشبع بـ <span class="glossary-term" onclick="openGlossary(\'botox_like_peptide\')">ببتيدات الشد</span> والكولاجين لتقليل الخطوط وتقديم تأثير تجميلي لتنعيم سطح البشرة في 15 دقيقة.', 
            en: 'A Black Fiber Tech mask rich in active carbon, saturated with <span class="glossary-term" onclick="openGlossary(\'botox_like_peptide\')">Lifting Peptides</span> and Collagen to reduce lines and provide an aesthetic surface smoothing effect in 15 mins.' 
        },
        patient_benefit: { 
            ar: 'تأثير كي (Ironing effect) للتجاعيد السطحية والتعبيرية. يعطي نعومة، يملأ الوجه، ويزيل علامات الإجهاد والخطوط سريعاً.', 
            en: 'An "ironing effect" for surface and expression wrinkles. Grants smoothness, plumps the face, and rapidly erases signs of fatigue and lines.' 
        },
        active_ingredients: [
            { name: 'Natural Collagen + Hyaluronic Acid', concentration: 'High | عالي', role: { ar: 'ترطيب عميق ونفخ التجاعيد.', en: 'Deep hydration and plumping wrinkles.' } },
            { name: 'Cellular Renewing Peptides', concentration: 'Active | فعال', role: { ar: 'إرخاء الخطوط وتجديد البشرة.', en: 'Relaxing lines and renewing skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (قبل المناسبات).', en: 'As needed (pre-events).' },
        step_in_routine: { ar: 'عناية سريعة للتجاعيد.', en: 'Express wrinkle care.' },
        routine_step_number: 2,
        application: { ar: 'يوضع القناع الأسود على وجه نظيف ويترك 15 دقيقة. يُدلك السيروم المتبقي ولا يُشطف.', en: 'Apply the black mask to clean face and leave for 15 mins. Massage remaining serum, do not rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم Time-Filler لختم العلاج.'], en: ['Time-Filler Cream to seal the treatment.'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد الظاهرة، الخطوط الناتجة عن الجفاف والإرهاق، والحاجة لتنعيم فلاشي.', en: 'Visible wrinkles, dehydration/fatigue lines, and the need for flash smoothing.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مريح جداً ويمسك بملامح الوجه بإحكام (Second-skin effect).', en: 'Very comfortable and tightly grips facial contours (Second-skin effect).' }
    }
});

// [49] FILORGA HYDRA-FILLER MASK (SHEET) 20 ML
deepProductsList.push({
    id: 'fil_sheet_hydra_filler_mask', brandId: 'filorga', familyId: 'hydra_hyal', brand: 'Filorga',
    name: { ar: 'هيدرا-فيلر ماسك (الماسك الورقي للترطيب)', en: 'Hydra-Filler Mask Super-Moisturizing Sheet Mask' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يعتمد على تركيبة الصبار (Aloe Vera) لتلطيف الجلد مع حمض الهيالورونيك المغلف، مشبع في نسيج ورقي مبرد. يشكل حماماً مائياً (Water Bath) للخلايا العطشى في 15 دقيقة.', 
            en: 'Relies on an Aloe Vera formula to soothe skin with encapsulated HA, saturated in a cooling sheet tissue. Creates a (Water Bath) for thirsty cells in 15 mins.' 
        },
        patient_benefit: { 
            ar: 'إنعاش فوري للبشرة الجافة والباهتة. يعيد لها الامتلاء المائي، يهدئ الاحمرار (خاصة بعد التعرض للشمس)، ويوفر نضارة نديّة (Dewy look).', 
            en: 'Instant revival for dry, dull skin. Restores its watery plumpness, soothes redness (esp. after sun exposure), and provides a fresh Dewy look.' 
        },
        active_ingredients: [
            { name: 'Hyaluronic Acid', concentration: 'Intense | مكثف', role: { ar: 'ترطيب عميق وحبس للماء.', en: 'Deep hydration and water locking.' } },
            { name: 'Aloe Vera Extract', concentration: 'Soothing | مهدئ', role: { ar: 'تسكين الحرارة وتقليل التهيج.', en: 'Relieving heat and reducing irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين أسبوعياً (أو بعد التعرض للشمس/الإجهاد).', en: 'Twice a week (or post-sun/stress exposure).' },
        step_in_routine: { ar: 'ماسك الترطيب الطارئ.', en: 'Emergency hydration mask.' },
        routine_step_number: 2,
        application: { ar: 'يوضع القناع على وجه نظيف لمدة 15 دقيقة. تُدلك البقايا بلطف ولا يشطف بالماء.', en: 'Apply mask to clean face for 15 mins. Massage remnants gently and do not rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['حفظه في الثلاجة لزيادة التأثير المبرد والمهدئ.'], en: ['Store in fridge to boost the cooling/soothing effect.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الجفاف الشديد المفاجئ، حروق الشمس الخفيفة، الإرهاق، وقبل وضع المكياج لبشرة جافة.', en: 'Sudden severe dryness, mild sunburns, fatigue, and pre-makeup for dry skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يعتبر العلاج المائي الأسرع لإنقاذ البشرة.', en: 'Considered the fastest water-therapy to rescue the skin.' }
    }
});
// ==========================================
// 📦 بلوك رقم (25): فيلورجا (المكياج العلاجي، البرايمر، وعناية الرموش/الشفاه)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة عائلة جديدة (المكياج العلاجي) ومصطلحات القاموس ---

// تحديث العائلات لإضافة عائلة (Flash-Nude) للمكياج
let filorgaMakeupBrand = brandsList.find(b => b.id === 'filorga');
if (filorgaMakeupBrand && !filorgaMakeupBrand.families.find(f => f.id === 'flash_nude')) {
    filorgaMakeupBrand.families.push({ id: 'flash_nude', name: { ar: 'فلاش-نود (المكياج العلاجي والبرايمر)', en: 'Flash-Nude (Hybrid Makeup & Primers)' } });
}

glossaryDict['flash_nude_tech'] = {
    title: { ar: 'تقنية فلاش-نود (Flash-Nude Tech) 🎨', en: 'Flash-Nude Technology 🎨' },
    desc: { 
        ar: 'تقنية مكياج متطورة (Pro-perfection) تدمج صبغات دقيقة تندمج مع الجلد (Skin-fusing) مع مكونات نشطة لعلاج البشرة (حمض هيالورونيك ومفتح)، لمنح تأثير "بشرة عارية مثالية" دون الشعور بوجود طبقة مكياج.', 
        en: 'Advanced Pro-perfection makeup technology integrating skin-fusing micro-pigments with active skincare ingredients (HA & brighteners) for a flawless bare-skin effect without a mask-like feel.' 
    }
};

// --- 2. المنتجات العميقة (Deep Products) ---

// [50] FILORGA FLASH NUDE FLUID (00 & 01) 30 ML
deepProductsList.push({
    id: 'fil_flash_nude_fluid', brandId: 'filorga', familyId: 'flash_nude', brand: 'Filorga',
    name: { ar: 'فلاش-نود فلويد (كريم أساس علاجي SPF 30)', en: 'Flash-Nude Fluid Pro-Perfection Foundation SPF 30' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'مكياج هجين (Skincare + Makeup) يعمل بتقنية <span class="glossary-term" onclick="openGlossary(\'flash_nude_tech\')">Flash-Nude</span> لتغطية العيوب، بينما يعمل حمض الهيالورونيك والهيكسيل ريزورسينول كعلاج يومي لملء التجاعيد وتوحيد التصبغات، مع حماية من الشمس والفلورا البيئية.', 
            en: 'Hybrid makeup (Skincare + Makeup) using <span class="glossary-term" onclick="openGlossary(\'flash_nude_tech\')">Flash-Nude</span> tech to cover flaws, while HA and Hexylresorcinol provide daily treatment to plump wrinkles and even tone, with SPF and pollution protection.' 
        },
        patient_benefit: { 
            ar: 'يعطي تغطية قابلة للبناء (تأثير طبيعي إلى متوسط)، يصحح العيوب فوراً، ويعالج البشرة على المدى الطويل ليجعلها أكثر صفاءً خالية من المكياج.', 
            en: 'Provides buildable coverage (natural to medium effect), instantly corrects flaws, and treats the skin long-term to become clearer even bare.' 
        },
        active_ingredients: [
            { name: 'Skin-fusing Micro-pigments', concentration: 'Cosmetic | تجميلي', role: { ar: 'تغطية مثالية بدون تكتل.', en: 'Perfect coverage without caking.' } },
            { name: 'Hyaluronic Acid + Hexylresorcinol', concentration: 'Active | فعال', role: { ar: 'ملء الخطوط وتفتيح البقع الداكنة.', en: 'Plumping lines and brightening dark spots.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً كبديل لكريم الأساس.', en: 'Daily as a foundation substitute.' },
        step_in_routine: { ar: 'خطوة المكياج (اللمسة النهائية).', en: 'Makeup step (Final touch).' },
        routine_step_number: 4,
        application: { ar: 'يُرج جيداً، ثم يوزع بالأصابع أو بفرشاة المكياج. متوفر بدرجتين 00 (فاتح جداً) و 01 (فاتح/حنطي).', en: 'Shake well, apply with fingers or a brush. Available in shades 00 (very fair) and 01 (fair/medium).' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['بودرة Flash Nude للتثبيت.'], en: ['Flash Nude Powder to set.'] } 
        }
    },
    precautions: {
        indications: { ar: 'توحيد لون الوجه التجميلي، إخفاء العيوب مع توفير حماية وعلاج مضاد للشيخوخة.', en: 'Cosmetic tone evening, concealing flaws while providing SPF and anti-aging treatment.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تركيبة (Breathable) لا تسد المسام وتسمح بتنفس الجلد.', en: 'Breathable, non-comedogenic formula that lets skin breathe.' }
    }
});

// [51] FILORGA FLASH NUDE POWDER 6.2 G
deepProductsList.push({
    id: 'fil_flash_nude_powder', brandId: 'filorga', familyId: 'flash_nude', brand: 'Filorga',
    name: { ar: 'فلاش-نود بودرة (بودرة التثبيت والمثالية)', en: 'Flash-Nude Invisible Pro-Perfection Powder' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'N/A (بودرة)', en: 'N/A (Powder)' },
        mechanism: { 
            ar: 'بودرة غير مرئية (Invisible) مزودة بالسيليكا وعوامل طمس (Blurring agents) لامتصاص الزهم وتنعيم المسام، مع حمض الهيالورونيك لمنع تجفاف الجلد كما تفعل البودرة التقليدية.', 
            en: 'Invisible powder equipped with Silica and blurring agents to absorb sebum and smooth pores, infused with HA to prevent the skin-drying effect of traditional powders.' 
        },
        patient_benefit: { 
            ar: 'تثبت المكياج، تطفئ لمعان الوجه طوال اليوم دون أن تبرز التجاعيد، وتحمي البشرة من التلوث والأشعة الزرقاء بفضل مستخلص عباد الشمس.', 
            en: 'Sets makeup, mattifies the face all day without highlighting wrinkles, and protects skin from pollution and blue light via Sunflower extract.' 
        },
        active_ingredients: [
            { name: 'Silica + Perfecting Micro-powder', concentration: 'High | عالي', role: { ar: 'امتصاص اللمعان وإخفاء المسام.', en: 'Absorbing shine and blurring pores.' } },
            { name: 'Hyaluronic Acid', concentration: 'Hydrating | مرطب', role: { ar: 'ترطيب السطح ومنع التشقق.', en: 'Surface hydration and preventing caking.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً فوق المكياج، أو للروتوش.', en: 'Daily over makeup, or for touch-ups.' },
        step_in_routine: { ar: 'التثبيت (آخر خطوة).', en: 'Setting (Last step).' },
        routine_step_number: 4,
        application: { ar: 'تُطبق بالفرشاة المرفقة على كامل الوجه، مع التركيز على منطقة T-Zone.', en: 'Apply with the included brush over the entire face, focusing on the T-Zone.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم الأساس Flash Nude Fluid.'], en: ['Flash Nude Fluid foundation.'] } 
        }
    },
    precautions: {
        indications: { ar: 'اللمعان الزائد، تثبيت المكياج، والمسام الواسعة.', en: 'Excess shine, makeup setting, and enlarged pores.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لون موحد يناسب جميع درجات البشرة (Universal Shade).', en: 'Universal shade suitable for all skin tones.' }
    }
});

// [52] FILORGA PORE-EXPRESS 30 ML
deepProductsList.push({
    id: 'fil_pore_express', brandId: 'filorga', familyId: 'flash_nude', brand: 'Filorga', // يندرج تحت التحضير والبرايمر
    name: { ar: 'بور-إكسبريس (برايمر المسام واللمعان)', en: 'Pore-Express Regulating Primer' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'برايمر تنظيمي هجين؛ يقدم مفعولاً فورياً لتمويه المسام بفضل الممحيات البصرية (Optical Blur)، ومفعولاً علاجياً طويلاً الأمد لتقليل الإفرازات الدهنية باستخدام الزنك ومستخلص النباتات.', 
            en: 'Hybrid regulating primer; offers an instant pore-blurring effect via optical blurs, and long-term therapeutic action to reduce sebum using Zinc and plant extracts.' 
        },
        patient_benefit: { 
            ar: 'يخفي المسام الواسعة كالسحر فور تطبيقه، يمنع لمعان المكياج طوال اليوم، ويعالج حب الشباب الخفيف والرؤوس السوداء مع الاستخدام.', 
            en: 'Magically conceals enlarged pores upon application, prevents makeup shine all day, and treats mild acne and blackheads with use.' 
        },
        active_ingredients: [
            { name: 'Mineral Sebum Sensors', concentration: 'Mattifying | مطفي', role: { ar: 'امتصاص اللمعان فوراً.', en: 'Instantly absorbing shine.' } },
            { name: 'Zinc + Niacinamide', concentration: 'Active | فعال', role: { ar: 'تنظيم الزهم وعلاج المسام.', en: 'Regulating sebum and treating pores.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً صباحاً.', en: 'Daily in the AM.' },
        step_in_routine: { ar: 'البرايمر (بعد المرطب وقبل المكياج).', en: 'Primer (post-moisturizer & pre-makeup).' },
        routine_step_number: 3,
        application: { ar: 'يوضع على كامل الوجه أو المناطق التي تعاني من اللمعان والمسام (T-Zone).', en: 'Apply to the entire face or shine/pore-prone areas (T-Zone).' },
        layering: { 
            do_not_mix_with: { ar: ['المرطبات شديدة الكثافة قبله (قد تتسبب في تقشره).'], en: ['Very thick moisturizers underneath (may cause it to pill).'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'المسام الواسعة، البشرة الدهنية والمختلطة، وتجهيز البشرة لمكياج يدوم طويلاً.', en: 'Enlarged pores, oily/combi skin, and prepping skin for long-lasting makeup.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يعمل كفلتر شفاف. لا يغير لون البشرة.', en: 'Acts as a transparent filter. Does not alter skin tone.' }
    }
});

// [53] FILORGA TIME-FLASH ACTIVE PRIMER 30 ML
deepProductsList.push({
    id: 'fil_time_flash_primer', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم-فلاش (برايمر كي التجاعيد)', en: 'Time-Flash Express Smoothing Active Primer' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'برايمر مخصص للتجاعيد يجمع تقنية "الشد الثلاثي الأبعاد" (3D Lift) لتنعيم سطح الجلد بصرياً، مع <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> وببتيدات لتقليص التجاعيد بيولوجياً يوماً بعد يوم.', 
            en: 'Wrinkle-specific primer combining a "3D Lift" tech to visually smooth the skin surface, with <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> and peptides to biologically shrink wrinkles day by day.' 
        },
        patient_benefit: { 
            ar: 'يعمل كمكواة لـ (كي) الخطوط الدقيقة فور وضعه ليمنع ترسب المكياج بداخلها، بينما يعالج التجاعيد ويشد الوجه بشكل دائم.', 
            en: 'Acts as an "iron" to smooth fine lines instantly, preventing makeup from settling into them, while permanently treating wrinkles and lifting the face.' 
        },
        active_ingredients: [
            { name: '3D Optical Blur', concentration: 'Cosmetic | تجميلي', role: { ar: 'إخفاء التجاعيد فورياً بانعكاس الضوء.', en: 'Instantly hiding wrinkles via light reflection.' } },
            { name: 'Hexapeptide + Hyaluronic Acid', concentration: 'Active | فعال', role: { ar: 'نفخ الخطوط وإرخاء العضلات.', en: 'Plumping lines and relaxing muscles.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (صباحاً أو قبل المناسبات).', en: 'Daily (AM or pre-events).' },
        step_in_routine: { ar: 'البرايمر (بعد العناية وقبل المكياج).', en: 'Primer (post-care & pre-makeup).' },
        routine_step_number: 3,
        application: { ar: 'يُدلس بلطف على الوجه والرقبة. يمكن استخدامه منفرداً لتأثير شد فوري.', en: 'Smooth gently over face and neck. Can be used alone for an instant lifting effect.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم Time-Filler.'], en: ['Time-Filler Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد الظاهرة، تحضير البشرة للمكياج لمنع تخطيطه، وتنعيم سطح الجلد.', en: 'Visible wrinkles, prepping skin for makeup to prevent creasing, and surface smoothing.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام سيليكوني ناعم جداً يحسن ثبات المكياج.', en: 'Very smooth silicone-like texture that improves makeup hold.' }
    }
});

// [54] FILORGA OPTIM-EYES LOTION 110 ML
deepProductsList.push({
    id: 'fil_optim_eyes_lotion', brandId: 'filorga', familyId: 'optim_eyes', brand: 'Filorga',
    name: { ar: 'أوبتيم-آيز لوشن (سيروم إزالة مكياج العين)', en: 'Optim-Eyes Lotion Eye Makeup Remover Serum' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي (متوافق مع الدموع)', en: 'Physiological (Tear-compatible)' },
        mechanism: { 
            ar: 'ليس مجرد مزيل مكياج! هو محلول ثنائي الطور (Biphasic) يعتمد على مركب زيت-في-ماء لإذابة المكياج المقاوم للماء فوراً، مدمج مع ببتيدات وعوامل لتقوية الرموش وتخفيف الإرهاق.', 
            en: 'Not just a makeup remover! A biphasic (Oil-in-Water) solution that instantly dissolves waterproof makeup, combined with peptides and agents to strengthen lashes and relieve fatigue.' 
        },
        patient_benefit: { 
            ar: 'يزيل المكياج دون الحاجة لفرك الجفن الحساس، يرطب محيط العين لتخفيف علامات التعب، ويغذي الرموش ليقلل تساقطها.', 
            en: 'Removes makeup without rubbing the sensitive eyelid, hydrates the eye contour to reduce fatigue signs, and nourishes lashes to minimize fallout.' 
        },
        active_ingredients: [
            { name: 'Oleoclean Complex', concentration: 'Active | فعال', role: { ar: 'إذابة المكياج العنيد فوراً.', en: 'Instantly dissolving stubborn makeup.' } },
            { name: 'Stimulating Peptide', concentration: 'Fortifying | مقوي', role: { ar: 'تقوية بصيلات الرموش.', en: 'Strengthening lash follicles.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (مساءً).', en: 'Daily (PM).' },
        step_in_routine: { ar: 'إزالة المكياج.', en: 'Makeup removal.' },
        routine_step_number: 1,
        application: { ar: 'يُرج جيداً لخلط الطورين، يوضع على قطنة، يُترك على العين لثوانٍ ثم يُمسح بلطف.', en: 'Shake well to mix phases, apply to cotton pad, leave on eye for seconds, then wipe gently.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم Optim-Eyes أو Time-Filler Eyes بعده.'], en: ['Optim-Eyes or Time-Filler Eyes cream afterwards.'] } 
        }
    },
    precautions: {
        indications: { ar: 'المكياج المقاوم للماء، العيون المتعبة، الرموش الضعيفة.', en: 'Waterproof makeup, tired eyes, weak lashes.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يترك غشاء زيتي يزعج الرؤية كباقي المزيلات ثنائية الطور.', en: 'Does not leave an oily film that blurs vision like other biphasic removers.' }
    }
});

// [55] FILORGA OPTIM-EYES LASHES & BROWS 13 ML
deepProductsList.push({
    id: 'fil_optim_eyes_lashes', brandId: 'filorga', familyId: 'optim_eyes', brand: 'Filorga',
    name: { ar: 'أوبتيم-آيز للرموش والحواجب (مكثف مزدوج)', en: 'Optim-Eyes Lashes & Brows Double Formula' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'عبوة مزدوجة (Step 1 + Step 2). الخطوة 1: سيروم يحفز نمو الرموش والحواجب بمركب (KERA-EXTEND) وتقنية NCTF. الخطوة 2: برايمر يغلف الرموش ببروتينات وحمض هيالورونيك لزيادة سماكتها فوراً قبل المسكارا.', 
            en: 'Dual packaging (Step 1 + Step 2). Step 1: A growth-stimulating serum with (KERA-EXTEND) and NCTF. Step 2: A volumizing primer coating lashes with proteins and HA to instantly thicken them pre-mascara.' 
        },
        patient_benefit: { 
            ar: 'يوقف تساقط الرموش والحواجب، يسرع نموها لتصبح أطول وأكثر كثافة خلال 14 يوماً، ويعمل كأساس ممتاز لزيادة ثبات وحجم المسكارا.', 
            en: 'Stops lash/brow fallout, accelerates growth making them longer and denser in 14 days, and acts as an excellent base to enhance mascara volume and hold.' 
        },
        active_ingredients: [
            { name: 'KERA-EXTEND CX + NCTF', concentration: 'Growth | نمو', role: { ar: 'تنشيط البصيلات وزيادة الطول.', en: 'Activating follicles and increasing length.' } },
            { name: 'Carob Extract + Protein', concentration: 'Volumizing | تكثيف', role: { ar: 'تغليف الشعرة وزيادة سماكتها.', en: 'Coating the hair and increasing its thickness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'عناية الرموش والحواجب.', en: 'Lashes and brows care.' },
        routine_step_number: 2,
        application: { ar: 'الخطوة 1 (فرشاة رفيعة): تمرر على جذور الرموش والحواجب كالأيلاينر. الخطوة 2 (فرشاة ماسكارا): تُمشط بها الرموش/الحواجب من الجذور للأطراف.', en: 'Step 1 (fine brush): Apply to lash/brow roots like eyeliner. Step 2 (mascara brush): Coat lashes/brows from root to tip.' },
        layering: { 
            do_not_mix_with: { ar: ['الرموش الصناعية الدائمة (قد تذيب الصمغ).'], en: ['Permanent false lashes (may dissolve the glue).'] }, 
            best_mixed_with: { ar: ['المسكارا المعتادة (تُطبق فوق الخطوة 2).'], en: ['Regular mascara (applied over Step 2).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الرموش والحواجب الخفيفة، القصيرة، أو المتساقطة بسبب المكياج.', en: 'Sparse, short, or falling lashes/brows due to makeup.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يجب أن يكون محيط العين نظيفاً تماماً قبل الخطوة 1.', en: 'The eye contour must be perfectly clean before Step 1.' }
    }
});

// [56] FILORGA NUTRI-FILLER LIPS 4 G
deepProductsList.push({
    id: 'fil_nutri_filler_lips', brandId: 'filorga', familyId: 'global_repair', brand: 'Filorga', // يتبع للتغذية والترميم
    name: { ar: 'نوتري-فيلر ليبس (بلسم نفخ الشفاه)', en: 'Nutri-Filler Lips Nutri-Plumping Lip Balm' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'بلسم علاجي يدمج زيوت الأرجان والشيا لترميم الشفاه العميقة، مع ببتيد برو-كولاجين (Pro-collagen) لتنعيم ونفخ (Plump) الشفاه، ومركب نشط لتعزيز لون الشفاه الوردي الطبيعي.', 
            en: 'Therapeutic balm integrating Argan/Shea oils for deep repair, with a Pro-collagen peptide to smooth and plump the lips, and an active to revive natural pink lip color.' 
        },
        patient_benefit: { 
            ar: 'يعالج الشفاه شديدة التشقق، يمنح امتلاءً وحجماً جذاباً للشفاه الرقيقة، ويحيي لونها الوردي الباهت.', 
            en: 'Treats severely chapped lips, grants attractive volume and plumpness to thin lips, and revives their dull pink color.' 
        },
        active_ingredients: [
            { name: 'Pro-Collagen Peptide', concentration: 'Plumping | ممتلئ', role: { ar: 'نفخ الشفاه وتحديد محيطها.', en: 'Plumping lips and redefining their contour.' } },
            { name: 'Argan Oil + Shea Butter', concentration: 'Nourishing | مغذي', role: { ar: 'ترميم التشققات وحماية من الجفاف.', en: 'Repairing cracks and protecting from dryness.' } },
            { name: 'NCTF Complex', concentration: 'Revitalizing | مجدد', role: { ar: 'تجديد أنسجة الشفاه وتوحيد لونها.', en: 'Renewing lip tissue and evening their color.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة طوال اليوم.', en: 'As needed throughout the day.' },
        step_in_routine: { ar: 'العناية بالشفاه.', en: 'Lip care.' },
        routine_step_number: 3,
        application: { ar: 'يُطبق مباشرة على الشفاه باستخدام أداة السيليكون المرنة.', en: 'Apply directly to lips using the flexible silicone applicator.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['قبل أحمر الشفاه الجاف (Matte lipstick) كقاعدة ترطيب.'], en: ['Before Matte lipstick as a hydrating base.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الشفاه الجافة، المتشققة، الفاقدة للحجم الطبيعي، والبهتان.', en: 'Dry, chapped lips, loss of natural volume, and dullness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام زيتي-بلسمي (Balm-oil) لا يلتصق.', en: 'Balm-oil texture that does not stick.' }
    }
});
// ==========================================
// 📦 بلوك رقم (26): فيلورجا (الختام - العناية الليلية، فيتامين سي، والترطيب)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة مصطلحات القاموس الجديدة ---

glossaryDict['pure_vitamin_c_powder'] = {
    title: { ar: 'بودرة فيتامين C النقي 🍊', en: 'Pure Vitamin C Powder 🍊' },
    desc: { 
        ar: 'فيتامين سي (L-Ascorbic Acid) بتركيز 8%، محفوظ في غطاء عازل للضوء والهواء كبودرة جافة لضمان فعاليته 100%، ويتم خلطه بالسيروم لحظة الاستخدام فقط.', 
        en: '8% pure Vitamin C (L-Ascorbic Acid), preserved in a light/air-proof cap as a dry powder to ensure 100% efficacy, mixed with the serum only right before use.' 
    }
};

glossaryDict['aha_bha_peel'] = {
    title: { ar: 'التقشير بأحماض AHA/BHA 🧪', en: 'AHA/BHA Peeling 🧪' },
    desc: { 
        ar: 'مزيج من 6 أحماض (جليكوليك، ماليك، ساليسيليك، لاكتيك، أزيليك، بايروفيك) يوفر تقشيراً كيميائياً آمناً أثناء النوم لتجديد الخلايا وتقليل التصبغات.', 
        en: 'A blend of 6 acids (Glycolic, Malic, Salicylic, Lactic, Azelaic, Pyruvic) providing safe overnight chemical peeling to renew cells and reduce pigmentation.' 
    }
};

// --- 2. المنتجات العميقة (Deep Products) ---

// [57] FILORGA C-RECOVER CONCENTRATE 10 ML X 3 S
deepProductsList.push({
    id: 'fil_c_recover', brandId: 'filorga', familyId: 'skin_unify', brand: 'Filorga',
    name: { ar: 'سي-ريكوفر (مركز فيتامين C للنضارة)', en: 'C-Recover Radiance Boosting Concentrate' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly Acidic' },
        mechanism: { 
            ar: 'كورس علاجي مكثف يعتمد على <span class="glossary-term" onclick="openGlossary(\'pure_vitamin_c_powder\')">بودرة فيتامين C النقي 8%</span> التي يتم تفعيلها يدوياً مع سيروم غني بمركب NCTF والأحماض الأمينية، لتوفير أقوى جرعة مضادة للأكسدة.', 
            en: 'Intensive course relying on <span class="glossary-term" onclick="openGlossary(\'pure_vitamin_c_powder\')">8% Pure Vitamin C powder</span> activated manually with an NCTF/Amino acid-rich serum, delivering the strongest antioxidant dose.' 
        },
        patient_benefit: { 
            ar: 'علاج طارئ (لمدة 21 يوماً) يمحو الإرهاق الشديد، يوحد لون البشرة الباهتة، ويعيد لها توهجها الطبيعي فوراً.', 
            en: 'Emergency treatment (for 21 days) erasing severe fatigue, evening dull skin tone, and instantly restoring its natural glow.' 
        },
        active_ingredients: [
            { name: 'Pure L-Ascorbic Acid', concentration: '8%', role: { ar: 'تحفيز الكولاجين وتفتيح التصبغات.', en: 'Stimulating collagen and brightening pigmentation.' } },
            { name: 'NCTF + Hyaluronic Acid', concentration: 'Active | فعال', role: { ar: 'ترطيب عميق وتجديد الخلايا.', en: 'Deep hydration and cell renewal.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة صباحاً ككورس لمدة 21 يوماً.', en: 'Once daily AM as a 21-day course.' },
        step_in_routine: { ar: 'سيروم التفتيح والنضارة.', en: 'Brightening and radiance serum.' },
        routine_step_number: 2,
        application: { ar: 'يُضغط الغطاء لإسقاط البودرة، تُرَج العبوة جيداً، ثم تستخدم القطارة لتوزيع السيروم. (العبوة صالحة لـ 7 أيام بعد الخلط، تحفظ بالثلاجة).', en: 'Press cap to release powder, shake well, use dropper to apply. (Vial valid for 7 days post-mixing, keep refrigerated).' },
        layering: { 
            do_not_mix_with: { ar: ['أحماض تقشير قوية في نفس الوقت.'], en: ['Strong peeling acids simultaneously.'] }, 
            best_mixed_with: { ar: ['واقي شمس (إلزامي للوقاية من تأكسد الفيتامين).'], en: ['Sunscreen (Mandatory to prevent vitamin oxidation).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة المجهدة جداً، بهتان اللون، التعافي من المرض، والتغيرات الموسمية.', en: 'Highly stressed skin, dullness, post-illness recovery, and seasonal changes.' },
        pregnancy_safe: true, sun_sensitivity: true, 
        notes: { ar: 'العلبة تحتوي على 3 عبوات، كل عبوة تكفي لأسبوع.', en: 'Box contains 3 vials, each lasts for one week.' }
    }
});

// [58] FILORGA SLEEP AND PEEL NIGHT CREAM 40 ML
deepProductsList.push({
    id: 'fil_sleep_and_peel', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سليب آند بيل (كريم التقشير الليلي)', en: 'Sleep & Peel Resurfacing Night Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (4.5)', en: 'Acidic (4.5)' },
        mechanism: { 
            ar: 'يعمل كعلاج تجديد سطحي أثناء النوم باستخدام تقنية <span class="glossary-term" onclick="openGlossary(\'aha_bha_peel\')">التقشير بأحماض AHA/BHA</span> (بتركيز آمن)، مع الطحالب البنية لتهدئة الجلد وتجنب التهيج.', 
            en: 'Acts as a surface renewal treatment overnight using <span class="glossary-term" onclick="openGlossary(\'aha_bha_peel\')">AHA/BHA Peeling</span> tech (safe concentration), with brown algae to soothe skin and avoid irritation.' 
        },
        patient_benefit: { 
            ar: 'تأثير "الجلد الجديد" في الصباح؛ يصقل المسام، ينعم الملمس، يزيل الخلايا الميتة، ويمنح نضارة فائقة.', 
            en: '"New skin" effect in the morning; refines pores, smooths texture, removes dead cells, and grants supreme radiance.' 
        },
        active_ingredients: [
            { name: '6 Hydroxy Acids (AHA/BHA)', concentration: 'Active | فعال', role: { ar: 'تقشير الخلايا الميتة بأمان.', en: 'Exfoliating dead cells safely.' } },
            { name: 'Brown Algae Extract', concentration: 'Soothing | مهدئ', role: { ar: 'تهدئة الاحمرار وترميم الجلد.', en: 'Soothing redness and skin repair.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً (يُفضل يوماً بعد يوم للبشرة الحساسة).', en: 'Once daily PM (preferably every other day for sensitive skin).' },
        step_in_routine: { ar: 'كريم الليل المقشر.', en: 'Exfoliating night cream.' },
        routine_step_number: 3,
        application: { ar: 'يوزع على وجه نظيف. يترك طوال الليل ويُغسل في الصباح.', en: 'Distribute on clean face. Leave overnight and wash in the AM.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول أو سيرومات فيتامين سي في نفس الليلة.'], en: ['Retinol or Vit C serums on the same night.'] }, 
            best_mixed_with: { ar: ['مرطب عميق في الصباح التالي وواقي شمس.'], en: ['Deep moisturizer the next AM and Sunscreen.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الخشنة، المسام الواسعة، التصبغات الخفيفة، والخطوط السطحية.', en: 'Rough skin, enlarged pores, mild pigmentation, and surface lines.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'يُمنع وضعه حول محيط العين الحساس.', en: 'Avoid applying around the sensitive eye contour.' }
    }
});

// [59] FILORGA SLEEP-RECOVER BALM 50 ML
deepProductsList.push({
    id: 'fil_sleep_recover', brandId: 'filorga', familyId: 'ncef', brand: 'Filorga',
    name: { ar: 'سليب-ريكوفر (بلسم مكافحة الإرهاق الليلي)', en: 'Sleep-Recover Anti-Fatigue Night Balm' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'بلسم مرمم يجمع بين مركب (Silk Tree) الذي يمنع عملية الجلْكَزة (Glycation) المدمرة للكولاجين، وبين خلاصة الكستناء لتقليل الانتفاخ وتنشيط التصريف اللمفاوي أثناء النوم.', 
            en: 'Repairing balm combining (Silk Tree) complex which prevents collagen-destroying Glycation, and Chestnut extract to reduce puffiness and stimulate lymphatic drainage during sleep.' 
        },
        patient_benefit: { 
            ar: 'يمسح علامات قلة النوم والإرهاق؛ يقلل ملامح التعب العميقة، ويوفر بشرة مرتاحة ومشدودة في الصباح.', 
            en: 'Erases signs of sleep deprivation and fatigue; reduces deep tired features, providing rested and tightened skin in the morning.' 
        },
        active_ingredients: [
            { name: 'Silk Tree Extract', concentration: 'Active | فعال', role: { ar: 'حماية الأنسجة وتجديد الحيوية.', en: 'Tissue protection and vitality renewal.' } },
            { name: 'Horse Chestnut Extract', concentration: 'Decongestant | مزيل للاحتقان', role: { ar: 'تقليل تورم الوجه واحتباس السوائل.', en: 'Reducing facial puffiness and fluid retention.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily PM.' },
        step_in_routine: { ar: 'كريم الليل (المرمم).', en: 'Night cream (Repairing).' },
        routine_step_number: 3,
        application: { ar: 'يُدلك على الوجه والرقبة قبل النوم.', en: 'Massage onto face and neck before sleep.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم NCEF Intensive.'], en: ['NCEF Intensive Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'تعب الملامح، الهالات والانتفاخات الصباحية، والخطوط الناتجة عن التوتر.', en: 'Fatigued features, morning circles/puffiness, and stress-induced lines.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام "بلسم-جل" مغلف يوفر شعوراً بالراحة الفورية.', en: 'Enveloping "gel-balm" texture providing an instant feeling of comfort.' }
    }
});

// [60] FILORGA PERFECT+ SERUM 30 ML
deepProductsList.push({
    id: 'fil_perfect_plus_serum', brandId: 'filorga', familyId: 'age_purify', brand: 'Filorga',
    name: { ar: 'بيرفكت+ سيروم (سيروم البشرة المثالية)', en: 'Perfect+ Perfect Skin Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'سيروم شامل يدمج ببتيدات مقشرة لتنعيم الخطوط، مستخلصات نباتية قابضة لتصغير المسام، ومكونات بصرية لمعان فوري لتقديم مظهر (بشرة خالية من العيوب).', 
            en: 'Comprehensive serum integrating exfoliating peptides to smooth lines, astringent plant extracts to shrink pores, and optical agents for instant glow, providing a (flawless skin) look.' 
        },
        patient_benefit: { 
            ar: 'علاج 3 في 1: يقلل التجاعيد، يصغر المسام بشكل ملحوظ، ويوفر إشراقة وتوحيداً فورياً للون البشرة.', 
            en: '3-in-1 treatment: reduces wrinkles, visibly shrinks pores, and provides instant radiance and even skin tone.' 
        },
        active_ingredients: [
            { name: 'NCTF + Peptides', concentration: 'Active | فعال', role: { ar: 'تجديد الخلايا وإرخاء الخطوط.', en: 'Cell renewal and line relaxation.' } },
            { name: 'Astringent Active', concentration: 'Pore-Refiner | مصغر مسام', role: { ar: 'تقليل حجم المسام وتنظيم الزهم.', en: 'Reducing pore size and regulating sebum.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'سيروم التصحيح المتعدد.', en: 'Multi-correction serum.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على وجه نظيف قبل كريم العناية.', en: 'Apply to clean face before care cream.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم Time-Filler.'], en: ['Time-Filler Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'المسام الواسعة، التجاعيد الأولية، وعدم صفاء البشرة.', en: 'Enlarged pores, early wrinkles, and lack of skin clarity.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يُعتبر بديلاً قديماً فعالاً في تصحيح الملمس (غالباً ما تم تحديثه ضمن خط Age-Purify).', en: 'Considered an effective legacy texture corrector (often updated within Age-Purify line).' }
    }
});

// [61] FILORGA HYDRA-FILLER CREAM 50 ML
deepProductsList.push({
    id: 'fil_hydra_filler_cream', brandId: 'filorga', familyId: 'hydra_hyal', brand: 'Filorga',
    name: { ar: 'هيدرا-فيلر (كريم الترطيب المعزز للشباب)', en: 'Hydra-Filler Pro-Youth Boosting Moisturizer' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستغل قوة حمض الهيالورونيك عالي ومنخفض الوزن الجزيئي لترطيب السطح ونفخ الأدمة، بالإضافة لمركب يحفز إنتاج الكولاجين للوقاية من علامات التقدم بالسن.', 
            en: 'Harnesses the power of high & low molecular weight HA to hydrate the surface and plump the dermis, plus a collagen-boosting complex to prevent aging signs.' 
        },
        patient_benefit: { 
            ar: 'ترطيب عميق يدوم طويلاً، يخفي خطوط الجفاف الدقيقة، ويحافظ على مرونة وشباب البشرة.', 
            en: 'Deep long-lasting hydration, hides fine dehydration lines, and preserves skin elasticity and youthfulness.' 
        },
        active_ingredients: [
            { name: 'Extra-Pure Hyaluronic Acid', concentration: 'High | عالي', role: { ar: 'تخزين الماء كالإسفنجة في طبقات الجلد.', en: 'Storing water like a sponge in skin layers.' } },
            { name: 'Bio-active Extract', concentration: 'Pro-Youth | داعم للشباب', role: { ar: 'تقوية حاجز الدهون ومنع التبخر.', en: 'Strengthening lipid barrier and preventing evaporation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'كريم الترطيب اليومي.', en: 'Daily hydrating cream.' },
        routine_step_number: 3,
        application: { ar: 'يوزع بلطف على الوجه والرقبة.', en: 'Distribute gently over face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم Hydra-Hyal أو Meso+.'], en: ['Hydra-Hyal or Meso+ Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة العطشى، الخطوط الناتجة عن الجفاف، وكعناية وقائية أولى ضد التجاعيد.', en: 'Thirsty skin, dehydration lines, and as first preventive care against wrinkles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام جل-كريم غير دهني يوفر راحة فورية.', en: 'Non-greasy gel-cream texture providing instant comfort.' }
    }
});

// [62] FILORGA UNIVERSAL CREAM 100 ML
deepProductsList.push({
    id: 'fil_universal_cream', brandId: 'filorga', familyId: 'global_repair', brand: 'Filorga',
    name: { ar: 'يونيفرسال كريم (كريم العناية الشاملة)', en: 'Universal Cream Daily Multi-Purpose Treatment' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'كريم متعدد الاستخدامات يعتمد على اليوريا ومركب مهدئ لترميم حاجز البشرة المتضرر، مع الببتيدات لتحفيز الكولاجين وتوفير حماية للعائلة بأكملها.', 
            en: 'Multi-purpose cream based on Urea and a soothing complex to repair the damaged skin barrier, with peptides to stimulate collagen and provide protection for the whole family.' 
        },
        patient_benefit: { 
            ar: 'حل عملي شامل (للوجه والجسم)؛ يهدئ الاحمرار، يعالج الجفاف الشديد والتشققات، ويعتبر المنقذ السريع للبشرة المتهيجة.', 
            en: 'Comprehensive practical solution (face & body); soothes redness, treats severe dryness and cracks, acting as a quick rescue for irritated skin.' 
        },
        active_ingredients: [
            { name: 'Urea + Hyaluronic Acid', concentration: 'Hydrating | مرطب', role: { ar: 'ترطيب عميق وتقشير القشور السطحية.', en: 'Deep hydration and exfoliating surface scales.' } },
            { name: 'Polysaccharide', concentration: 'Soothing | مهدئ', role: { ar: 'تسكين الاحمرار والالتهاب.', en: 'Soothing redness and inflammation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (صباحاً ومساءً).', en: 'As needed (Morning and Evening).' },
        step_in_routine: { ar: 'ترطيب وعناية شاملة.', en: 'Hydration and global care.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على أي منطقة جافة أو متهيجة في الوجه والجسم.', en: 'Apply to any dry or irritated area on face and body.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['أي منتج علاجي كطبقة حماية نهائية.'], en: ['Any therapeutic product as a final protective layer.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الجفاف المفاجئ، حروق الشمس الخفيفة، تهيج ما بعد الحلاقة، والتشققات.', en: 'Sudden dryness, mild sunburns, post-shaving irritation, and chapping.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن لجميع أفراد الأسرة. قوام ذوباني غير دهني.', en: 'Safe for the whole family. Non-greasy melting texture.' }
    }
});

// [63] FILORGA NCEF REVITALIZE MASK - 1 SHEET 20 ML
deepProductsList.push({
    id: 'fil_ncef_revitalize_sheet_mask', brandId: 'filorga', familyId: 'ncef', brand: 'Filorga',
    name: { ar: 'NCEF ريفيتالايز ماسك (الماسك الورقي للتجديد الحيوي)', en: 'NCEF-Revitalize Polyrevitalizing Sheet Mask' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'ورقة ماسك مشبعة بالجيل الجديد من <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> والإنزيمات الحالّة للخلايا المتشيخة (Senolytic)، تلتصق بقوة لضخ المكونات بفعالية حقن الميزوثيرابي خلال 15 دقيقة.', 
            en: 'Sheet mask saturated with the new generation of <span class="glossary-term" onclick="openGlossary(\'ncef_complex\')">NCEF</span> and Senolytic enzymes, tightly adhering to pump ingredients with meso-injection efficacy in 15 mins.' 
        },
        patient_benefit: { 
            ar: 'تجديد فوري للخلايا؛ يمحو علامات الإرهاق القوية، يشد الوجه، ويوفر نضارة وحيوية فورية للبشرة المتقدمة في السن قبل المناسبات.', 
            en: 'Instant cell renewal; erases strong fatigue signs, firms the face, and provides instant vitality and glow for aging skin pre-events.' 
        },
        active_ingredients: [
            { name: 'NCEF Supreme Dose', concentration: 'High | عالي', role: { ar: 'تغذية الخلايا من العمق.', en: 'Nourishing cells from within.' } },
            { name: 'Senolytic Enzyme Complex', concentration: 'Active | فعال', role: { ar: 'إنعاش الخلايا المجهدة وتجديدها.', en: 'Reviving and renewing exhausted cells.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '1-2 مرات أسبوعياً، أو قبل المناسبات.', en: '1-2 times a week, or pre-events.' },
        step_in_routine: { ar: 'قناع فلاش معالج.', en: 'Flash treatment mask.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على الوجه ويُترك 15 دقيقة، ثم يُدلك السيروم المتبقي ولا يُغسل.', en: 'Apply to face, leave 15 mins, then massage remaining serum and do not wash.' },
        layering: { 
            do_not_mix_with: { ar: ['غسل الوجه فوراً بالماء.'], en: ['Washing face immediately with water.'] }, 
            best_mixed_with: { ar: ['سيروم وكريم NCEF Revitalize لاحقاً.'], en: ['NCEF Revitalize Serum and Cream afterwards.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الشيخوخة المتقدمة، الإرهاق الخلوي السريع، الاستعداد للمناسبات.', en: 'Advanced aging, rapid cellular exhaustion, event preparation.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مصنوع من ألياف دقيقة عالية الامتصاص لتأثير "البشرة الثانية".', en: 'Made from high-absorption micro-fibers for a "second skin" effect.' }
    }
});
// ==========================================
// 📦 بلوك رقم (27): تأسيس يوسيرين (Eucerin) - البلوك الأول
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة العلامة التجارية (Eucerin) وعائلاتها ---
brandsList.push({
    id: 'eucerin', name: 'Eucerin',
    families: [
        { id: 'even_pigment', name: { ar: 'إيفن بيجمنت (علاج التصبغات وتوحيد اللون)', en: 'Even Pigment Perfector (Hyperpigmentation)' } },
        { id: 'dermopurifyer', name: { ar: 'ديرمو بيوريفاير (لحب الشباب والبشرة الدهنية)', en: 'DermoPurifyer (Acne & Blemish-Prone)' } },
        { id: 'hyaluron_filler', name: { ar: 'هيالورون-فيلر (مكافحة التجاعيد والشيخوخة)', en: 'Hyaluron-Filler (Anti-Aging & Wrinkles)' } },
        { id: 'urea_repair', name: { ar: 'يوريا-ريبير (للجفاف الشديد والخشونة)', en: 'UreaRepair PLUS (Severe Dryness)' } },
        { id: 'aquaphor', name: { ar: 'أكوافور (ترميم وشفاء الجلد المتضرر)', en: 'Aquaphor (Skin Repair & Healing)' } },
        { id: 'atopicontrol', name: { ar: 'أتوبي-كونترول (للإكزيما والحكة)', en: 'AtopiControl (Atopic Dermatitis)' } },
        { id: 'aquaporin', name: { ar: 'أكوابورين (ترطيب عميق للبشرة الحساسة)', en: 'AQUAporin ACTIVE (Deep Hydration)' } },
        { id: 'sun_care', name: { ar: 'العناية بالشمس (حماية من الأشعة والضوء الأزرق)', en: 'Sun Protection (UV & HEVIS Care)' } },
        { id: 'ph5', name: { ar: 'بي إتش 5 (حماية البشرة الحساسة)', en: 'pH5 (Sensitive Skin Protection)' } },
        { id: 'dermato_clean', name: { ar: 'ديرماتو-كلين (تنظيف البشرة)', en: 'DermatoCLEAN (Cleansing)' } },
        { id: 'dermocapillaire', name: { ar: 'ديرمو-كابيلير (عناية فروة الرأس)', en: 'DermoCapillaire (Scalp Care)' } }
    ]
});

// --- 2. إضافة مصطلحات القاموس الطبي (Glossary) الخاصة بيوسيرين ---

glossaryDict['thiamidol'] = {
    title: { ar: 'الثياميدول (Thiamidol) 🔬', en: 'Thiamidol 🔬' },
    desc: { 
        ar: 'براءة اختراع حصرية ليوسيرين بعد 10 سنوات من البحث. مكون فعال يستهدف السبب الجذري لفرط التصبغ عن طريق تثبيط إنزيم التيروزيناز البشري، مما يقلل البقع الداكنة ويمنع ظهورها مجدداً بشكل فعال جداً.', 
        en: 'A patented exclusive Eucerin ingredient after 10 years of research. It targets the root cause of hyperpigmentation by inhibiting human tyrosinase, effectively reducing dark spots and preventing their reappearance.' 
    }
};

glossaryDict['licochalcone_a'] = {
    title: { ar: 'ليكوتشالكون A (Licochalcone A) 🌿', en: 'Licochalcone A 🌿' },
    desc: { 
        ar: 'مستخلص طبيعي من جذور عرق السوس، يعمل كمضاد قوي جداً للأكسدة والالتهابات. يهدئ تهيج الجلد بسرعة ويحيد الشوارد الحرة الناتجة عن الأشعة فوق البنفسجية والضوء المرئي عالي الطاقة (HEVIS).', 
        en: 'A natural extract from licorice root acting as a highly potent antioxidant and anti-inflammatory. It rapidly soothes irritation and neutralizes free radicals induced by UV and HEVIS light.' 
    }
};

glossaryDict['gluconoglycerol'] = {
    title: { ar: 'جلوكو-جليسرول (Gluco-Glycerol) 💧', en: 'Gluco-Glycerol 💧' },
    desc: { 
        ar: 'مكون نشط طبيعي يحفز إنشاء قنوات الأكوابورين (Aquaporin 3) في الجلد، وهي القنوات المسؤولة عن نقل الماء بين الخلايا، مما يضمن ترطيباً عميقاً من الداخل.', 
        en: 'A nature-identical active that stimulates the creation of Aquaporin 3 channels in the skin, responsible for water transport between cells, ensuring deep hydration from within.' 
    }
};

// --- 3. المنتجات العميقة (Deep Products) ---

// [1] EUCERIN ACTIVE LIP CARE BALM 4.8 G
deepProductsList.push({
    id: 'euc_active_lip_care', brandId: 'eucerin', familyId: 'ph5', brand: 'Eucerin',
    name: { ar: 'أكتيف ليب كير (مرطب الشفاه النشط)', en: 'Active Lip Care Balm 4.8g' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعتمد على ديكسبانثينول (Dexpanthenol) وفيتامين E لترميم الأغشية المخاطية للشفاه، مع تشكيل طبقة دهنية خفيفة تحمي من العوامل البيئية הקاسية.', 
            en: 'Relies on Dexpanthenol and Vitamin E to repair lip mucous membranes, forming a light lipid layer that protects against harsh environmental factors.' 
        },
        patient_benefit: { 
            ar: 'يرطب الشفاه الخشنة والمتشققة فوراً، يوفر حماية يومية ضد الجفاف، ويترك الشفاه ناعمة ومرنة.', 
            en: 'Instantly hydrates rough, chapped lips, provides daily protection against dryness, and leaves lips soft and supple.' 
        },
        active_ingredients: [
            { name: 'Dexpanthenol', concentration: 'Active | فعال', role: { ar: 'تحفيز تجديد الخلايا وتسكين التشققات.', en: 'Stimulating cell regeneration and soothing cracks.' } },
            { name: 'Vitamin E', concentration: 'Antioxidant | مضاد أكسدة', role: { ar: 'حماية الشفاه من الجذور الحرة والجفاف.', en: 'Protecting lips from free radicals and dryness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة طوال اليوم.', en: 'As needed throughout the day.' },
        step_in_routine: { ar: 'العناية بالشفاه.', en: 'Lip care.' },
        routine_step_number: 3,
        application: { ar: 'يُمرر على الشفاه الجافة مباشرة.', en: 'Glide directly onto dry lips.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'الشفاه الجافة، الخشنة، والعناية اليومية للوقاية من تشققات الشتاء.', en: 'Dry, rough lips, and daily care to prevent winter chapping.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يحتوي على عامل حماية SPF 15 (تأكد من العبوة، بعض الإصدارات تحتوي عليه).', en: 'Contains SPF 15 (check packaging, some versions include it).' }
    }
});

// [2] EUCERIN AQUAPHOR SOOTHING SKIN BALM 45 ML / 110 ML
deepProductsList.push({
    id: 'euc_aquaphor_balm', brandId: 'eucerin', familyId: 'aquaphor', brand: 'Eucerin',
    name: { ar: 'أكوافور (مرهم ترميم الجلد المتهيج)', en: 'Aquaphor Soothing Skin Balm' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'لا يوجد (خالٍ من الماء)', en: 'N/A (Water-free)' },
        mechanism: { 
            ar: 'مرهم خالٍ من الماء يخلق طبقة شبه منفذة (Semi-permeable) كحاجز واقٍ يسمح بمرور بخار الماء والأكسجين (يسمح للجلد بالتنفس)، مدعوم بالبانثينول والبيسابولول لتسريع تجديد الجلد.', 
            en: 'Water-free ointment creating a semi-permeable protective barrier allowing water vapor and oxygen to pass (lets skin breathe), supported by Panthenol and Bisabolol to speed skin regeneration.' 
        },
        patient_benefit: { 
            ar: 'يسرع بشكل سريري من التئام الجلد المتضرر، يهدئ الجفاف الشديد جداً، التشققات، وحروق الاحتكاك.', 
            en: 'Clinically accelerates the healing of damaged skin, soothes extreme dryness, cracks, and friction burns.' 
        },
        active_ingredients: [
            { name: 'Panthenol', concentration: 'Active | فعال', role: { ar: 'ترميم وتجديد حاجز الجلد.', en: 'Repairing and regenerating the skin barrier.' } },
            { name: 'Bisabolol', concentration: 'Soothing | مهدئ', role: { ar: 'مضاد للتهيج والالتهاب الموضعي.', en: 'Anti-irritant and local anti-inflammatory.' } },
            { name: 'Petrolatum Base', concentration: 'Occlusive | عازل', role: { ar: 'تشكيل حاجز تنفسي يحمي الجرح.', en: 'Forming a breathable barrier protecting the wound.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'حسب الحاجة على المناطق المتضررة.', en: 'As needed on affected areas.' },
        step_in_routine: { ar: 'علاج موضعي مكثف.', en: 'Intensive topical treatment.' },
        routine_step_number: 3,
        application: { ar: 'تُدفأ كمية صغيرة بين أطراف الأصابع وتُدلك بلطف على الجلد الجاف أو المتشقق.', en: 'Warm a small amount between fingertips and gently massage onto dry or cracked skin.' },
        layering: { 
            do_not_mix_with: { ar: ['الجروح المفتوحة النازفة بشدة أو الحروق من الدرجة الثالثة.', 'الالتهابات الفطرية.'], en: ['Heavily bleeding open wounds or 3rd-degree burns.', 'Fungal infections.'] }, 
            best_mixed_with: { ar: ['الـ "Slugging" فوق المرطبات الخفيفة ليلاً لحبس الرطوبة.'], en: ['"Slugging" over light moisturizers at night to lock in moisture.'] } 
        }
    },
    precautions: {
        indications: { ar: 'تشققات الكعبين، جفاف الركب والأكواع، بعد الإجراءات الجلدية السطحية (كالليزر)، وطفح الحفاض.', en: 'Cracked heels, dry knees/elbows, post-superficial dermatological procedures (like laser), and diaper rash.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن للرضع. لا يسبب انسداد المسام رغم قوامه الثقيل (Non-comedogenic).', en: 'Safe for babies. Non-comedogenic despite its heavy texture.' }
    }
});

// [3] EUCERIN AQUAPORIN ACTIVE CREAM NORMAL 50 ML
deepProductsList.push({
    id: 'euc_aquaporin_active_normal', brandId: 'eucerin', familyId: 'aquaporin', brand: 'Eucerin',
    name: { ar: 'أكوابورين أكتيف (كريم الترطيب للبشرة العادية)', en: 'AQUAporin ACTIVE Hydrating Cream (Normal/Combi)' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعتمد على تقنية <span class="glossary-term" onclick="openGlossary(\'gluconoglycerol\')">جلوكو-جليسرول</span> لتنشيط نظام الترطيب الذاتي للجلد عن طريق زيادة عدد "الأكوابورينات" (قنوات الماء)، مما يضمن توزيع الماء بالتساوي في جميع طبقات البشرة.', 
            en: 'Relies on <span class="glossary-term" onclick="openGlossary(\'gluconoglycerol\')">Gluco-Glycerol</span> technology to activate the skin\'s self-hydration system by increasing the number of "Aquaporins" (water channels), ensuring even water distribution.' 
        },
        patient_benefit: { 
            ar: 'يوفر ترطيباً عميقاً ومكثفاً يدوم لـ 24 ساعة، يزيل الإحساس بالشد، ويجعل البشرة العادية إلى المختلطة ناعمة ونضرة.', 
            en: 'Provides deep, intense 24h hydration, eliminates tightness, and leaves normal to combination skin smooth and radiant.' 
        },
        active_ingredients: [
            { name: 'Gluco-Glycerol', concentration: 'Active | فعال', role: { ar: 'تحفيز قنوات الماء الخلوية.', en: 'Stimulating cellular water channels.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'كريم الترطيب اليومي.', en: 'Daily hydrating cream.' },
        routine_step_number: 3,
        application: { ar: 'يوزع بلطف على الوجه والرقبة بعد التنظيف.', en: 'Distribute gently over face and neck after cleansing.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيرومات الترطيب أو التفتيح.'], en: ['Hydrating or brightening serums.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة العادية والمختلطة الفاقدة للماء (Dehydrated)، الحساسية والبهتان.', en: 'Dehydrated normal to combination skin, sensitivity, and dullness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام خفيف يمتص بسرعة فائقة. خالي من العطور.', en: 'Light texture absorbs very quickly. Fragrance-free.' }
    }
});

// [4] EUCERIN UREA REPAIR PLUS 10% LOTION 250 ML
deepProductsList.push({
    id: 'euc_urea_repair_10_lotion', brandId: 'eucerin', familyId: 'urea_repair', brand: 'Eucerin',
    name: { ar: 'يوريا-ريبير بلس 10% (لوشن الجسم للخشونة)', en: 'UreaRepair PLUS 10% Urea Lotion' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً (لتعزيز التقشير)', en: 'Slightly acidic (to enhance peeling)' },
        mechanism: { 
            ar: 'تركيبة علاجية مكثفة تحتوي على **10%** يوريا مع عوامل الترطيب الطبيعية (NMFs) لجذب الماء، وسيراميد لتقوية الحاجز الدهني، مما يمنع فقدان الرطوبة ويقشر الخلايا الميتة المتصلبة.', 
            en: 'Intensive therapeutic formula with **10%** Urea and Natural Moisturizing Factors (NMFs) to bind water, and Ceramides to strengthen the lipid barrier, preventing moisture loss and exfoliating hardened dead cells.' 
        },
        patient_benefit: { 
            ar: 'راحة فورية تدوم لـ 48 ساعة من الجفاف الشديد. يعالج الحكة، يزيل القشور الخشنة ("جلد الوزة")، ويعيد ليونة الجلد.', 
            en: 'Instant 48h relief from severe dryness. Treats itching, removes rough scales (Keratosis Pilaris), and restores skin suppleness.' 
        },
        active_ingredients: [
            { name: 'Urea', concentration: '10%', role: { ar: 'ترطيب عميق وتقشير كيراتيني للخشونة.', en: 'Deep hydration and keratolytic exfoliation for roughness.' } },
            { name: 'Ceramide NP', concentration: 'Repairing | مرمم', role: { ar: 'سد الفجوات في حاجز الجلد.', en: 'Filling gaps in the skin barrier.' } },
            { name: 'NMFs (Amino Acids, Lactic Acid)', concentration: 'Active | فعال', role: { ar: 'حبس الرطوبة داخل البشرة.', en: 'Trapping moisture inside the skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'علاج وترطيب الجسم.', en: 'Body treatment and hydration.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك على مناطق الجسم شديدة الجفاف والمتقشرة حتى يمتص.', en: 'Massage onto extremely dry and flaky body areas until absorbed.' },
        layering: { 
            do_not_mix_with: { ar: ['استخدامه على الجروح المفتوحة أو الالتهابات النشطة (قد يسبب لسعة قوية).'], en: ['Use on open wounds or active inflammation (may cause severe stinging).'] }, 
            best_mixed_with: { ar: ['غسول UreaRepair الاستحمامي.'], en: ['UreaRepair wash.' ] } 
        }
    },
    precautions: {
        indications: { ar: 'جفاف الجسم الشديد جداً، التقرن الشعري (جلد الوزة)، الصدفية، جفاف مرضى السكري، وجفاف الشيخوخة.', en: 'Extremely severe body dryness, Keratosis Pilaris, Psoriasis, Diabetic skin, and senile dryness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'أثبتت الدراسات فعاليته في تأخير نوبات الجفاف لمرضى السكري.', en: 'Clinically proven to delay dryness flare-ups in diabetic patients.' }
    }
});

// [5] EUCERIN EVEN PIGMENT HAND CREAM SPF 30 75 ML
deepProductsList.push({
    id: 'euc_even_pigment_hand', brandId: 'eucerin', familyId: 'even_pigment', brand: 'Eucerin',
    name: { ar: 'إيفن بيجمنت (كريم اليدين لعلاج البقع SPF 30)', en: 'Even Pigment Perfector Hand Cream SPF 30' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">الثياميدول</span> لتقليل إنتاج الميلانين في اليدين، مع فلاتر حماية UVA/UVB لمنع ظهور بقع التقدم في السن (Age spots) الناتجة عن التعرض المستمر للشمس.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">Thiamidol</span> to reduce melanin production on hands, with UVA/UVB filters to prevent age spots caused by continuous sun exposure.' 
        },
        patient_benefit: { 
            ar: 'يخفف البقع الداكنة على ظهر اليدين بوضوح خلال أسبوعين، يمنع ظهورها مجدداً، ويرطب الجلد بفعالية لتبدو اليدين أصغر سناً.', 
            en: 'Visibly reduces dark spots on the back of hands within 2 weeks, prevents their reappearance, and effectively moisturizes for younger-looking hands.' 
        },
        active_ingredients: [
            { name: 'Thiamidol', concentration: 'Patented | براءة اختراع', role: { ar: 'علاج التصبغات البنية وعلامات الشيخوخة.', en: 'Treating brown pigmentation and aging spots.' } },
            { name: 'UVA/UVB Filters', concentration: 'SPF 30', role: { ar: 'الحماية اليومية من الشمس.', en: 'Daily sun protection.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً، بحد أقصى 4 تطبيقات لمنتجات الثياميدول في اليوم.', en: 'Daily, max 4 applications of Thiamidol products per day.' },
        step_in_routine: { ar: 'عناية اليدين.', en: 'Hand care.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك على اليدين جيداً. يُجدد بعد غسل اليدين إذا كان التعرض للشمس مستمراً.', en: 'Massage well onto hands. Reapply after washing if sun exposure continues.' },
        layering: { 
            do_not_mix_with: { ar: ['تجاوز الحد الأقصى (4 مرات) لأي منتج يحتوي على ثياميدول يومياً.'], en: ['Exceeding the max limit (4 times) for any Thiamidol product daily.'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'البقع العمرية على اليدين، كلف اليدين، الجفاف، والوقاية من أضرار القيادة تحت الشمس.', en: 'Age spots on hands, hand melasma, dryness, and prevention of sun damage while driving.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'سريع الامتصاص، لا يترك ملمساً لزجاً على اليدين.', en: 'Fast-absorbing, leaves no sticky feeling on hands.' }
    }
});

// [6] EUCERIN EVEN PIGMENT PERFECTOR DUAL SERUM 30ML
deepProductsList.push({
    id: 'euc_even_pigment_dual_serum', brandId: 'eucerin', familyId: 'even_pigment', brand: 'Eucerin',
    name: { ar: 'إيفن بيجمنت (السيروم المزدوج للتفتيح)', en: 'Even Pigment Perfector Dual Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'سيروم مزدوج الحجرات؛ الحجرة الأولى تحتوي على <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">الثياميدول</span> المركز لعلاج التصبغات، والثانية تحتوي على حمض هيالورونيك مركز عالي ومنخفض الوزن الجزيئي لترطيب الأدمة والبشرة وتنعيم التجاعيد.', 
            en: 'Dual-chamber serum; the first chamber contains concentrated <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">Thiamidol</span> for pigmentation, the second contains high/low molecular weight HA to hydrate dermis/epidermis and smooth wrinkles.' 
        },
        patient_benefit: { 
            ar: 'العلاج الأقوى للكلف والتصبغات المستعصية. يقلل البقع بشكل جذري خلال أسبوعين، ويوفر نضارة، امتلاء، وتوحيد شامل للون الوجه.', 
            en: 'The most potent treatment for melasma and stubborn pigmentation. Radically reduces spots in 2 weeks, providing radiance, plumpness, and overall even tone.' 
        },
        active_ingredients: [
            { name: 'Thiamidol', concentration: 'High Dose | جرعة عالية', role: { ar: 'تثبيط التيروزيناز وتقليل الميلانين.', en: 'Tyrosinase inhibition and melanin reduction.' } },
            { name: 'Hyaluronic Acid', concentration: 'Concentrated | مركز', role: { ar: 'نفخ الخطوط الرفيعة وترطيب عميق.', en: 'Plumping fine lines and deep hydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً (صباحاً أو مساءً).', en: 'Once daily (AM or PM).' },
        step_in_routine: { ar: 'سيروم التفتيح الأساسي.', en: 'Core brightening serum.' },
        routine_step_number: 2,
        application: { ar: 'يُضغط على منتصف المضخة لخروج المزيجين معاً، يُخلط في راحة اليد ويُوزع على الوجه والرقبة.', en: 'Press the middle of the pump to release both formulas, mix in palm, and apply to face/neck.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات الأحماض العنيفة في نفس الوقت.'], en: ['Harsh acid exfoliants simultaneously.'] }, 
            best_mixed_with: { ar: ['كريم إيفن بيجمنت النهاري SPF30 (لنتائج مضاعفة).'], en: ['Even Pigment Day Cream SPF30 (for double results).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الكلف العنيد، تصبغات ما بعد الالتهاب، بقع الشمس، وعدم توحد لون البشرة.', en: 'Stubborn melasma, Post-Inflammatory Hyperpigmentation (PIH), sun spots, and uneven skin tone.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تذكر ألا تتجاوز 4 تطبيقات لمنتجات الثياميدول في اليوم الواحد.', en: 'Remember not to exceed 4 applications of Thiamidol products per day.' }
    }
});
// ==========================================
// 📦 بلوك رقم (28): يوسيرين (الواقيات الشمسية، التجاعيد، وحب الشباب)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة مصطلحات القاموس الجديدة ---

glossaryDict['hevis_light'] = {
    title: { ar: 'الضوء المرئي عالي الطاقة (HEVIS) ☀️', en: 'HEVIS Light ☀️' },
    desc: { 
        ar: 'الضوء المرئي عالي الطاقة الذي يولد شوارد حرة في الجلد، مما يؤدي إلى تكسير الكولاجين وظهور التصبغات المبكرة (Photoaging) بشكل مشابه أو حتى أقوى من أشعة الـ UVA.', 
        en: 'High-Energy Visible Light that generates free radicals in the skin, leading to collagen breakdown and premature pigmentation (Photoaging) similarly to or even stronger than UVA rays.' 
    }
};

glossaryDict['glycine_saponin'] = {
    title: { ar: 'جلايسين سابونين (Glycine Saponin) 🌱', en: 'Glycine Saponin 🌱' },
    desc: { 
        ar: 'مستخلص حيوي نشط من فول الصويا، يُعد من أقوى محفزات إنتاج حمض الهيالورونيك الطبيعي في الجلد؛ حيث أثبت سريرياً قدرته على زيادة إنتاجه بنسبة تصل إلى 256%.', 
        en: 'A bioactive extract from soya bean, considered one of the most effective stimulators of natural HA production in the skin; clinically proven to increase it by up to 256%.' 
    }
};

// --- 2. المنتجات العميقة (Deep Products) ---

// [7] EUCERIN EVEN PIGMENT PERFECTOR SUN FLUID SPF50 50 ML
deepProductsList.push({
    id: 'euc_even_pigment_sun_fluid', brandId: 'eucerin', familyId: 'even_pigment', brand: 'Eucerin',
    name: { ar: 'إيفن بيجمنت (واقي شمس سائل لعلاج التصبغات)', en: 'Even Pigment Perfector Sun Fluid SPF 50+' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يجمع بين تقنية الطيف المتقدمة (Advanced Spectral Tech) لحماية فائقة من UVA/UVB و <span class="glossary-term" onclick="openGlossary(\'hevis_light\')">الضوء المرئي (HEVIS)</span>، مع <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">الثياميدول</span> لمعالجة البقع الداكنة ومنع تكونها من جديد.', 
            en: 'Combines Advanced Spectral Tech for supreme UVA/UVB and <span class="glossary-term" onclick="openGlossary(\'hevis_light\')">HEVIS Light</span> protection, with <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">Thiamidol</span> to treat dark spots and prevent their reappearance.' 
        },
        patient_benefit: { 
            ar: 'واقي شمس وعلاج للتصبغات في خطوة واحدة. يمنع البقع الناتجة عن الشمس بفعالية، ويوفر تغطية سائلة خفيفة لا تسد المسام.', 
            en: 'Sunscreen and pigmentation treatment in one step. Effectively prevents sun-induced spots and provides light fluid coverage that does not clog pores.' 
        },
        active_ingredients: [
            { name: 'Thiamidol', concentration: 'Patented | براءة اختراع', role: { ar: 'تثبيط إنتاج الميلانين لعلاج الكلف.', en: 'Inhibiting melanin production to treat melasma.' } },
            { name: 'Licochalcone A', concentration: 'Antioxidant | مضاد أكسدة', role: { ar: 'تحييد الشوارد الحرة الناتجة عن ضوء HEVIS.', en: 'Neutralizing free radicals from HEVIS light.' } },
            { name: 'Glycyrrhetinic Acid', concentration: 'DNA Repair | مرمم للحمض', role: { ar: 'دعم آلية إصلاح الحمض النووي للجلد.', en: 'Supporting the skin\'s DNA repair mechanism.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (الخطوة الأخيرة صباحاً). أقصى استخدام لمنتجات الثياميدول 4 مرات يومياً.', en: 'Daily (last step AM). Max use of Thiamidol products is 4 times/day.' },
        step_in_routine: { ar: 'الحماية اليومية والعلاج.', en: 'Daily protection and treatment.' },
        routine_step_number: 4,
        application: { ar: 'يوزع بسخاء على الوجه والرقبة قبل التعرض للشمس ويُعاد تطبيقه بانتظام.', en: 'Apply generously to face and neck before sun exposure and reapply regularly.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم Even Pigment Dual Serum قبله لنتائج مضاعفة.'], en: ['Even Pigment Dual Serum beforehand for double results.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الوقاية من الكلف، بقع الشمس، التصبغات الهرمونية، وتوحيد لون البشرة تحت الشمس.', en: 'Prevention of melasma, sun spots, hormonal pigmentation, and evening tone under the sun.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'متوفر بنسخة شفافة (Fluid) ونسخة ملونة (Tinted). يمتص بسرعة فائقة.', en: 'Available in clear (Fluid) and Tinted versions. Absorbs very rapidly.' }
    }
});

// [8] EUCERIN HYALURON-FILLER NIGHT CREAM 50 ML
deepProductsList.push({
    id: 'euc_hyaluron_filler_night', brandId: 'eucerin', familyId: 'hyaluron_filler', brand: 'Eucerin',
    name: { ar: 'هيالورون-فيلر (كريم الليل المضاد للتجاعيد)', en: 'Hyaluron-Filler Night Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يملأ التجاعيد (Plumps) بفضل حمض الهيالورونيك عالي ومنخفض الوزن الجزيئي، يحفز إنتاجه الذاتي بـ <span class="glossary-term" onclick="openGlossary(\'glycine_saponin\')">الجلايسين سابونين</span>، ويدعم التجديد الخلوي الليلي عبر ديكسبانثينول.', 
            en: 'Plumps wrinkles via High/Low MW HA, stimulates its natural production via <span class="glossary-term" onclick="openGlossary(\'glycine_saponin\')">Glycine Saponin</span>, and supports nocturnal cell renewal via Dexpanthenol.' 
        },
        patient_benefit: { 
            ar: 'يملأ أعمق التجاعيد بشكل ملحوظ من الداخل للخارج أثناء النوم، ويستيقظ المريض ببشرة ناعمة ومسترخية وممتلئة.', 
            en: 'Visibly plumps the deepest wrinkles from the inside out during sleep, patient wakes up with smooth, rested, and plump skin.' 
        },
        active_ingredients: [
            { name: 'High & Low MW Hyaluronic Acid', concentration: 'Active | فعال', role: { ar: 'ترطيب السطح واختراق العمق لملء الخطوط.', en: 'Hydrating surface and penetrating deep to plump lines.' } },
            { name: 'Glycine Saponin', concentration: 'Stimulator | محفز', role: { ar: 'زيادة إفراز حمض الهيالورونيك في الجلد.', en: 'Increasing HA secretion in the skin.' } },
            { name: 'Dexpanthenol', concentration: 'Repairing | مرمم', role: { ar: 'تعزيز عملية التجدد الخلوي الليلي.', en: 'Enhancing nocturnal cellular regeneration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily PM.' },
        step_in_routine: { ar: 'الترطيب الليلي المعالج.', en: 'Night treatment hydration.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك على الوجه والرقبة بعد التنظيف (وتطبيق السيروم إن وُجد).', en: 'Massage onto face and neck after cleansing (and serum application if any).' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم Hyaluron-Filler Peeling & Serum.'], en: ['Hyaluron-Filler Peeling & Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد الظاهرة، الخطوط الرفيعة، فقدان حجم البشرة، والوقاية من الشيخوخة المبكرة.', en: 'Visible wrinkles, fine lines, loss of skin volume, and premature aging prevention.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يسد المسام (Non-comedogenic). يوفر ملمساً حريرياً غنياً.', en: 'Non-comedogenic. Provides a rich silky texture.' }
    }
});

// [9] EUCERIN REPAIR FOOT CREAM 10% UREA 100 ML
deepProductsList.push({
    id: 'euc_repair_foot_cream_10', brandId: 'eucerin', familyId: 'urea_repair', brand: 'Eucerin',
    name: { ar: 'يوريا-ريبير (كريم القدمين 10% يوريا)', en: 'UreaRepair PLUS 10% Urea Foot Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً (مقشر)', en: 'Slightly acidic (Exfoliating)' },
        mechanism: { 
            ar: 'يقدم ترطيباً مكثفاً وتقشيراً لطيفاً للطبقة القرنية المتصلبة باستخدام 10% يوريا، مع السيراميدات لإصلاح حاجز الجلد وعوامل الترطيب الطبيعية لتقليل فقدان الماء.', 
            en: 'Provides intense hydration and gentle exfoliation of the hardened stratum corneum using 10% Urea, with Ceramides to repair the barrier and NMFs to reduce water loss.' 
        },
        patient_benefit: { 
            ar: 'يرطب الأقدام شديدة الجفاف والمتشققة بشكل مكثف وفوري. يقلل من مسامير القدم والكالو، وينعم الكعبين بشكل ملحوظ.', 
            en: 'Intensely and instantly hydrates extremely dry, cracked feet. Reduces calluses and corns, and visibly smooths heels.' 
        },
        active_ingredients: [
            { name: 'Urea', concentration: '10%', role: { ar: 'إذابة الجلد الميت وحبس الرطوبة بعمق.', en: 'Dissolving dead skin and locking moisture deeply.' } },
            { name: 'Ceramides', concentration: 'Repairing | مرمم', role: { ar: 'منع تبخر الماء وتقوية الجلد.', en: 'Preventing water evaporation and strengthening skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً (أو كلما لزم الأمر).', en: 'Morning and Evening (or as needed).' },
        step_in_routine: { ar: 'عناية القدمين.', en: 'Foot care.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك بلطف على أقدام نظيفة وجافة، مع التركيز على الكعبين والمناطق المتصلبة.', en: 'Massage gently onto clean, dry feet, focusing on heels and hardened areas.' },
        layering: { 
            do_not_mix_with: { ar: ['وضعه على الجروح المفتوحة أو التشققات النازفة.', 'بين أصابع القدم لمنع الفطريات.'], en: ['Applying on open wounds or bleeding cracks.', 'Between toes to prevent fungal infections.'] }, 
            best_mixed_with: { ar: ['ارتداء جوارب قطنية ليلاً بعد التطبيق لنتائج أسرع.'], en: ['Wearing cotton socks at night post-application for faster results.'] } 
        }
    },
    precautions: {
        indications: { ar: 'تشققات الكعبين، القدم السكري (Diabetic foot)، مسامير القدم (Calluses)، والجفاف الشديد.', en: 'Cracked heels, Diabetic foot, Calluses, and severe dryness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن وفعال جداً لمرضى السكري لتجنب مضاعفات القدم السكري.', en: 'Highly safe and effective for diabetics to avoid diabetic foot complications.' }
    }
});

// [10] EUCERIN SUN CREAM SPF 50+ 50 ML
deepProductsList.push({
    id: 'euc_sun_cream_sensitive', brandId: 'eucerin', familyId: 'sun_care', brand: 'Eucerin',
    name: { ar: 'صن كريم (واقي شمس للبشرة الحساسة والجافة)', en: 'Sun Creme Sensitive Protect SPF 50+' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يوفر حماية خلوية ثلاثية الأبعاد بفضل (Advanced Spectral Tech)، وحماية مضادة للأكسدة عبر <span class="glossary-term" onclick="openGlossary(\'licochalcone_a\')">Licochalcone A</span>، مع حمض الجليسيريتينيك لدعم إصلاح الـ DNA.', 
            en: 'Provides 3D cellular protection via (Advanced Spectral Tech), antioxidant protection via <span class="glossary-term" onclick="openGlossary(\'licochalcone_a\')">Licochalcone A</span>, and Glycyrrhetinic Acid to support DNA repair.' 
        },
        patient_benefit: { 
            ar: 'يحمي البشرة الجافة والحساسة من حروق الشمس، يوفر ترطيباً عميقاً، ويهدئ الاحمرار والتهيج الناتج عن الأشعة.', 
            en: 'Protects dry/sensitive skin from sunburns, provides deep hydration, and soothes redness/irritation caused by rays.' 
        },
        active_ingredients: [
            { name: 'Broad-Spectrum UV Filters', concentration: 'SPF 50+', role: { ar: 'حماية شاملة ضد الأشعة فوق البنفسجية.', en: 'Comprehensive protection against UV rays.' } },
            { name: 'Licochalcone A + Glycyrrhetinic Acid', concentration: 'Active | فعال', role: { ar: 'مضاد أكسدة قوي وترميم جيني.', en: 'Strong antioxidant and genetic repair.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً عند التعرض للشمس.', en: 'Daily during sun exposure.' },
        step_in_routine: { ar: 'الخطوة الأخيرة (كريم حماية).', en: 'Final step (Protection cream).' },
        routine_step_number: 4,
        application: { ar: 'يوضع بسخاء قبل 20 دقيقة من التعرض للشمس، ويُجدد بعد السباحة أو التعرق.', en: 'Apply generously 20 mins before sun exposure, reapply after swimming/sweating.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['مرطبات البشرة الجافة (مثل Aquaporin).'], en: ['Dry skin moisturizers (like Aquaporin).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الجافة، البشرة الحساسة المعرضة للتهيج من الشمس، والتهاب الجلد التأتبي.', en: 'Dry skin, sensitive skin prone to sun irritation, and atopic dermatitis.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام كريمي غني لا يترك أثراً أبيض، مقاوم للماء.', en: 'Rich creamy texture leaving no white cast, water-resistant.' }
    }
});

// [11] EUCERIN SUN GEL-CREAM OIL CONTROL SPF 50+ 50 ML
deepProductsList.push({
    id: 'euc_sun_oil_control', brandId: 'eucerin', familyId: 'sun_care', brand: 'Eucerin',
    name: { ar: 'صن جل-كريم أويل كونترول (واقي شمس للبشرة الدهنية)', en: 'Sun Gel-Cream Dry Touch Oil Control SPF 50+' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يدمج الحماية الخلوية (UV/HEVIS) مع تقنية التحكم بالدهون (Oil Control Tech) المعتمدة على الكارنيتين (L-Carnitine) المنظم للزهم، وجزيئات دقيقة لامتصاص اللمعان فوراً.', 
            en: 'Integrates cellular protection (UV/HEVIS) with Oil Control Tech based on sebum-regulating L-Carnitine, and micro-particles to absorb shine instantly.' 
        },
        patient_benefit: { 
            ar: 'الواقي رقم 1 للبشرة الدهنية في العديد من العيادات. يعطي لمسة جافة جداً (Dry-touch)، يمنع اللمعان لـ 8 ساعات، ولا يسبب أو يزيد من حب الشباب.', 
            en: 'The #1 sunscreen for oily skin in many clinics. Provides an ultra dry-touch finish, prevents shine for 8h, and does not cause or worsen acne.' 
        },
        active_ingredients: [
            { name: 'L-Carnitine', concentration: 'Active | فعال', role: { ar: 'تقليل إفراز الزهم (الدهون) بيولوجياً.', en: 'Biologically reducing sebum secretion.' } },
            { name: 'Lipid-Absorbing Pigments', concentration: 'Mattifying | مطفي', role: { ar: 'تأثير مطفي يدوم طويلاً.', en: 'Long-lasting mattifying effect.' } },
            { name: 'Licochalcone A', concentration: 'Antioxidant | مضاد أكسدة', role: { ar: 'تهدئة التهابات حب الشباب الناتجة عن الشمس.', en: 'Soothing sun-induced acne inflammation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (صباحاً وتجديد).', en: 'Daily (AM and reapplication).' },
        step_in_routine: { ar: 'الخطوة الأخيرة للحماية.', en: 'Final step for protection.' },
        routine_step_number: 4,
        application: { ar: 'يوزع على وجه نظيف. يمتص في ثوانٍ ولا يحتاج لفرك.', en: 'Distribute on clean face. Absorbs in seconds, no rubbing needed.' },
        layering: { 
            do_not_mix_with: { ar: ['المرطبات الزيتية الكثيفة أسفله.', 'الطبقات السميكة من المكياج (قد يتقشر/Pilling).'], en: ['Heavy oily moisturizers underneath.', 'Thick layers of makeup (might cause pilling).'] }, 
            best_mixed_with: { ar: ['مجموعة DermoPurifyer.', 'أساس ممتاز للمكياج الخفيف.'], en: ['DermoPurifyer range.', 'Excellent base for light makeup.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، البشرة المعرضة لحب الشباب، المسام الواسعة، والبيئات الحارة الرطبة.', en: 'Oily skin, acne-prone skin, enlarged pores, and hot/humid environments.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تركيبة خالية تماماً من الزيوت (Oil-free)، لا تترك أثراً أبيض ولا تسد المسام.', en: 'Completely oil-free formula, leaves no white cast, non-comedogenic.' }
    }
});

// [12] EUCERIN SUN HYDRO PROTECT SPF 50+ ULTRA LIGHT FLUID 50 ML
deepProductsList.push({
    id: 'euc_sun_hydro_protect', brandId: 'eucerin', familyId: 'sun_care', brand: 'Eucerin',
    name: { ar: 'صن هيدرو بروتيكت (واقي شمس سائل مرطب)', en: 'Sun Hydro Protect Ultra Light Fluid SPF 50+' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يوفر حماية متقدمة من الأشعة (UV/HEVIS) مدعوماً بمركب (Hydro-Tech Complex) الذي يضم حمض الهيالورونيك وعوامل ترطيب طبيعية (NMFs) لإنعاش البشرة فوراً دون لزوجة.', 
            en: 'Provides advanced protection (UV/HEVIS) backed by (Hydro-Tech Complex) combining HA and Natural Moisturizing Factors (NMFs) to instantly refresh skin without stickiness.' 
        },
        patient_benefit: { 
            ar: 'يجمع بين الحماية العالية جداً والترطيب العميق بقوام "مائي" فائق الخفة، يعطي انتعاشاً للبشرة ولا يترك أي لمعان أو بقايا.', 
            en: 'Combines very high protection with deep hydration in an ultra-light "watery" texture, refreshing the skin with zero shine or residue.' 
        },
        active_ingredients: [
            { name: 'Advanced Spectral Tech', concentration: 'SPF 50+', role: { ar: 'حماية خلوية شاملة.', en: 'Comprehensive cellular protection.' } },
            { name: 'Hyaluronic Acid + NMFs', concentration: 'Hydro-Tech Complex', role: { ar: 'ترطيب فوري ومنع تبخر الماء.', en: 'Instant hydration and preventing water evaporation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً.', en: 'Daily.' },
        step_in_routine: { ar: 'الخطوة الأخيرة للحماية.', en: 'Final step for protection.' },
        routine_step_number: 4,
        application: { ar: 'تُرج العبوة جيداً، يُوزع بسخاء ويمتص فوراً.', en: 'Shake well, apply generously, absorbs instantly.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['روتين العناية اليومي لجميع أنواع البشرة.'], en: ['Daily care routine for all skin types.'] } 
        }
    },
    precautions: {
        indications: { ar: 'جميع أنواع البشرة (حتى الحساسة)، الأشخاص الذين يكرهون ملمس كريمات الشمس، والمناخ الرطب.', en: 'All skin types (even sensitive), people who dislike sunscreen textures, and humid climates.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يسبب العرق المفرط تحت الشمس (لا يكتم المسام).', en: 'Does not cause excessive sweating under the sun (does not suffocate pores).' }
    }
});

// [13] EUCERIN EVEN PIGMENT PERFECTOR DAILY BODY LOTION 250 ML
deepProductsList.push({
    id: 'euc_even_pigment_body', brandId: 'eucerin', familyId: 'even_pigment', brand: 'Eucerin',
    name: { ar: 'إيفن بيجمنت (لوشن تفتيح الجسم)', en: 'Even Pigment Perfector Daily Body Lotion' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'ينقل قوة <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">الثياميدول</span> المفتحة إلى الجسم بالكامل. يثبط إنتاج الميلانين الزائد، مع حمض الهيالورونيك لترطيب الجسم وتنعيم المناطق الخشنة الداكنة.', 
            en: 'Brings the brightening power of <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">Thiamidol</span> to the entire body. Inhibits excess melanin, with HA to hydrate and smooth rough dark areas.' 
        },
        patient_benefit: { 
            ar: 'يوحد لون الجسم، يقلل من اسمرار المناطق المعرضة للاحتكاك (كالركب والأكواع)، ويترك البشرة مرطبة ومشرقة.', 
            en: 'Evens body tone, reduces darkening in friction-prone areas (like knees & elbows), and leaves skin hydrated and radiant.' 
        },
        active_ingredients: [
            { name: 'Thiamidol', concentration: 'Patented | براءة اختراع', role: { ar: 'علاج التصبغات وتوحيد لون الجسم.', en: 'Treating pigmentation and evening body tone.' } },
            { name: 'Hyaluronic Acid', concentration: 'Hydrating | مرطب', role: { ar: 'ترطيب عميق للجسم.', en: 'Deep body hydration.' } },
            { name: 'Licochalcone A', concentration: 'Soothing | مهدئ', role: { ar: 'تخفيف الاحمرار والالتهاب.', en: 'Reducing redness and inflammation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'ترطيب وتفتيح الجسم.', en: 'Body hydration and brightening.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك بلطف على بشرة الجسم، مع التركيز على المناطق الداكنة.', en: 'Massage gently onto body skin, focusing on dark areas.' },
        layering: { 
            do_not_mix_with: { ar: ['استخدام منتجات الثياميدول أكثر من 4 مرات في اليوم.'], en: ['Using Thiamidol products more than 4 times a day.'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'اسمرار الجسم، عدم توحد لون الركب والأكواع، وتصبغات الجسم.', en: 'Body darkening, uneven knees and elbows, and body pigmentation.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'سريع الامتصاص ولا يترك أثراً دهنياً على الملابس.', en: 'Fast-absorbing and leaves no greasy residue on clothes.' }
    }
});

// [14] EUCERIN DERMOPURIFYER POST BLEMISH TRIPLE EFFECT SERUM 40 ML
deepProductsList.push({
    id: 'euc_dermopurifyer_triple_effect', brandId: 'eucerin', familyId: 'dermopurifyer', brand: 'Eucerin',
    name: { ar: 'ديرموبيوريفاير (سيروم التأثير الثلاثي لآثار الحبوب)', en: 'DermoPurifyer Post-Blemish Triple Effect Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly Acidic' },
        mechanism: { 
            ar: 'ابتكار مذهل يجمع <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">الثياميدول</span> (لعلاج التصبغ ما بعد الالتهاب PIH)، وحمض الساليسيليك (لعلاج الحبوب النشطة)، وتقنية التحكم بالزهم (للتحكم باللمعان).', 
            en: 'An amazing innovation combining <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">Thiamidol</span> (to treat PIH), Salicylic Acid (to treat active blemishes), and Sebum Control Tech (to control shine).' 
        },
        patient_benefit: { 
            ar: 'يضرب 3 عصافير بحجر: يمحو آثار الحبوب الداكنة القديمة، يقلل البثور النشطة، ويمنع لمعان البشرة المزعج.', 
            en: 'Kills 3 birds with one stone: erases old dark acne marks, reduces active blemishes, and prevents annoying skin shine.' 
        },
        active_ingredients: [
            { name: 'Thiamidol', concentration: 'Active | فعال', role: { ar: 'إزالة البقع الداكنة الناتجة عن حب الشباب.', en: 'Eliminating dark post-acne marks.' } },
            { name: 'Salicylic Acid (BHA)', concentration: 'Keratolytic | مقشر', role: { ar: 'فتح المسام وتقليل الحبوب النشطة.', en: 'Unclogging pores and reducing active blemishes.' } },
            { name: 'Licochalcone A', concentration: 'Soothing | مهدئ', role: { ar: 'تسكين الالتهاب المصاحب للحبوب.', en: 'Soothing acne-associated inflammation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'السيروم العلاجي المتكامل.', en: 'Comprehensive treatment serum.' },
        routine_step_number: 2,
        application: { ar: 'يوزع على كامل الوجه النظيف، مع تجنب محيط العينين.', en: 'Distribute over entire clean face, avoiding the eye contour.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول أو المقشرات القوية في نفس الوقت.', 'لا يُستخدم على حب الشباب الملتهب جداً أو المفتوح.'], en: ['Retinol or strong exfoliants simultaneously.', 'Do not use on highly inflamed or open acne.'] }, 
            best_mixed_with: { ar: ['غسول DermoPurifyer.', 'واقي شمس Oil Control أو DermoPurifyer Protective Fluid.'], en: ['DermoPurifyer Cleanser.', 'Oil Control SPF or DermoPurifyer Protective Fluid.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الآثار الداكنة لحب الشباب (PIH)، الحبوب المتكررة، البشرة الدهنية واللمعان.', en: 'Dark post-acne marks (PIH), recurring blemishes, oily skin and shine.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'أول سيروم يجمع بين علاج حب الشباب وتفتيح آثاره بأمان عالي (تقنية الثياميدول).', en: 'The first serum to combine acne treatment and safe mark brightening (Thiamidol tech).' }
    }
});
// ==========================================
// 📦 بلوك رقم (29): يوسيرين (المنظفات، حب الشباب، العناية المتخصصة)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة مصطلحات القاموس الجديدة ---

glossaryDict['decanediol'] = {
    title: { ar: 'ديكانديول (Decanediol) 🦠', en: 'Decanediol 🦠' },
    desc: { 
        ar: 'مكون نشط مرطب وله خصائص قوية جداً مضادة للبكتيريا، يستهدف بكتيريا (C. acnes) المسببة لحب الشباب بشكل مباشر لمنع انتشار البثور.', 
        en: 'A moisturizing active ingredient with highly potent antibacterial properties, directly targeting the acne-causing bacteria (C. acnes) to prevent blemish proliferation.' 
    }
};

glossaryDict['polidocanol'] = {
    title: { ar: 'بوليدوكانول (Polidocanol) 🛑', en: 'Polidocanol 🛑' },
    desc: { 
        ar: 'مادة طبية مهدئة تعمل كمخدر موضعي خفيف لتهدئة الجلد وفروة الرأس، مما يوقف الإحساس بالحكة فوراً ويمنع الرغبة في الهرش.', 
        en: 'A medical soothing agent acting as a mild topical anesthetic to calm the skin and scalp, instantly stopping the sensation of itchiness and the urge to scratch.' 
    }
};

// --- 2. المنتجات العميقة (Deep Products) ---

// [15] EUCERIN DERMOPURIFYER POST BLEMISH PROTECTIVE FLUID SPF 30 50 ML
deepProductsList.push({
    id: 'euc_dermopurifyer_protective_fluid', brandId: 'eucerin', familyId: 'dermopurifyer', brand: 'Eucerin',
    name: { ar: 'ديرموبيوريفاير (سائل الحماية من آثار الحبوب SPF 30)', en: 'DermoPurifyer Post-Blemish Protective Fluid SPF 30' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يجمع بين فلاتر SPF 30 لصد الأشعة المسببة لاسمرار آثار الحبوب (PIH)، وتقنية تنظيم الزهم (Sebum Regulating Tech) لتقليل اللمعان، و <span class="glossary-term" onclick="openGlossary(\'decanediol\')">ديكانديول</span> لمنع البكتيريا.', 
            en: 'Combines SPF 30 filters to block rays causing PIH darkening, Sebum Regulating Tech to reduce shine, and <span class="glossary-term" onclick="openGlossary(\'decanediol\')">Decanediol</span> to prevent bacteria.' 
        },
        patient_benefit: { 
            ar: 'الخطوة الصباحية المكملة لسيروم التأثير الثلاثي؛ يمنع اسمرار البقع تحت الشمس، يطفئ اللمعان، ويوفر حماية يومية للبشرة المعرضة للحبوب دون سد المسام.', 
            en: 'The AM complementary step to the Triple Effect Serum; prevents spot darkening under the sun, mattifies shine, and provides daily protection for blemish-prone skin without clogging pores.' 
        },
        active_ingredients: [
            { name: 'UVA/UVB Filters', concentration: 'SPF 30', role: { ar: 'منع تفاقم تصبغات ما بعد الالتهاب.', en: 'Preventing the aggravation of PIH.' } },
            { name: 'Licochalcone A', concentration: 'Antioxidant | مضاد أكسدة', role: { ar: 'تهدئة التهاب الحبوب النشطة.', en: 'Soothing active blemish inflammation.' } },
            { name: 'Decanediol', concentration: 'Antibacterial | مضاد بكتيريا', role: { ar: 'منع نمو بكتيريا حب الشباب.', en: 'Preventing acne bacteria growth.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (كل صباح).', en: 'Daily (Every morning).' },
        step_in_routine: { ar: 'الخطوة الأخيرة (عناية نهارية وحماية).', en: 'Final step (Day care and protection).' },
        routine_step_number: 4,
        application: { ar: 'يوزع على الوجه والرقبة. يمتص بسرعة ولا يترك أثراً.', en: 'Distribute over face and neck. Absorbs quickly leaving no trace.' },
        layering: { 
            do_not_mix_with: { ar: ['المرطبات الثقيلة جداً فوقه.'], en: ['Very heavy moisturizers on top of it.'] }, 
            best_mixed_with: { ar: ['سيروم DermoPurifyer Triple Effect (يُوضع قبله).'], en: ['DermoPurifyer Triple Effect Serum (applied beforehand).'] } 
        }
    },
    precautions: {
        indications: { ar: 'آثار حب الشباب، البشرة المعرضة للشوائب، اللمعان، والحماية اليومية من الشمس.', en: 'Post-acne marks, blemish-prone skin, shine, and daily sun protection.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام سائل غير دهني يحافظ على مظهر مطفي طوال اليوم.', en: 'Non-greasy fluid texture maintaining a matte look all day.' }
    }
});

// [16] EUCERIN DERMOPURIFYER TONER 200 ML
deepProductsList.push({
    id: 'euc_dermopurifyer_toner', brandId: 'eucerin', familyId: 'dermopurifyer', brand: 'Eucerin',
    name: { ar: 'ديرموبيوريفاير (تونر منقي للمسام)', en: 'DermoPurifyer Clearing Toner' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'حامضي (يحفز التقشير الخفيف)', en: 'Acidic (Stimulates mild peeling)' },
        mechanism: { 
            ar: 'تركيبة تحتوي على حمض اللاكتيك (Lactic Acid) بنسبة 2%، تعمل على فتح المسام المسدودة، تنظيف منطقة T-Zone بعمق، ومنع نمو البكتيريا دون التسبب في جفاف مفرط.', 
            en: 'Formula containing 2% Lactic Acid, works to unclog blocked pores, deeply clean the T-Zone, and prevent bacterial growth without causing excessive dryness.' 
        },
        patient_benefit: { 
            ar: 'يهيئ البشرة للعلاجات اللاحقة، يزيل أي بقايا للمكياج والغسول، يقلص المسام الواسعة، ويترك البشرة نظيفة ومنتعشة.', 
            en: 'Preps skin for subsequent treatments, removes any makeup/cleanser residue, shrinks enlarged pores, and leaves skin clean and refreshed.' 
        },
        active_ingredients: [
            { name: 'Lactic Acid (AHA)', concentration: '2%', role: { ar: 'تقشير سطحي لطيف وتطهير المسام.', en: 'Gentle surface exfoliation and pore purification.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'التونر (بعد الغسول وقبل السيروم).', en: 'Toner (Post-cleanser & Pre-serum).' },
        routine_step_number: 2,
        application: { ar: 'يُبلل قطن بالتونر ويُمسح به كامل الوجه والرقبة (مع التركيز على T-Zone). لا يُشطف.', en: 'Soak a cotton pad and wipe over entire face and neck (focusing on T-Zone). Do not rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['علاجات الروكوتان الفموية (لتجنب الجفاف).', 'أحماض تقشير قوية جداً.'], en: ['Oral Accutane treatments (to avoid dryness).', 'Very strong exfoliating acids.'] }, 
            best_mixed_with: { ar: ['غسول DermoPurifyer.'], en: ['DermoPurifyer Cleanser.'] } 
        }
    },
    precautions: {
        indications: { ar: 'المسام الواسعة والمسدودة، الرؤوس السوداء، والبشرة الدهنية.', en: 'Enlarged and clogged pores, blackheads, and oily skin.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'لا يُستخدم حول منطقة العين.', en: 'Do not use around the eye area.' }
    }
});

// [17] EUCERIN DERMOPURIFYER CLEANSER 200 ML
deepProductsList.push({
    id: 'euc_dermopurifyer_cleanser', brandId: 'eucerin', familyId: 'dermopurifyer', brand: 'Eucerin',
    name: { ar: 'ديرموبيوريفاير (جل غسول منقي)', en: 'DermoPurifyer Cleansing Gel' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'منظف خالٍ من الصابون يعتمد على 6% من المؤثرات السطحية المذبذبة (Ampho-Tensides) لإزالة الزهم الزائد بلطف، مع حمض الساليسيليك كمضاد للبكتيريا.', 
            en: 'Soap-free cleanser relying on 6% Ampho-Tensides to gently remove excess sebum, with Salicylic Acid acting as an antibacterial agent.' 
        },
        patient_benefit: { 
            ar: 'يزيل الأوساخ والمكياج والدهون بفعالية دون الإخلال بحاجز الجلد، ويترك البشرة نظيفة، منتعشة، وغير مشدودة.', 
            en: 'Effectively removes dirt, makeup, and sebum without disrupting the skin barrier, leaving skin clean, refreshed, and non-tight.' 
        },
        active_ingredients: [
            { name: 'Ampho-Tensides', concentration: '6%', role: { ar: 'تنظيف عميق ولطيف للدهون.', en: 'Deep and gentle sebum cleansing.' } },
            { name: 'Salicylic Acid', concentration: 'Active | فعال', role: { ar: 'تنقية المسام ومضاد بكتيري.', en: 'Pore purification and antibacterial.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف).', en: 'Step 1 (Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'يُرغى في اليدين مع قليل من الماء، يُدلك على الوجه ثم يُشطف بماء فاتر.', en: 'Lather in hands with a little water, massage onto face, then rinse with lukewarm water.' },
        layering: { 
            do_not_mix_with: { ar: ['فرش التنظيف الخشنة جداً على الحبوب الملتهبة.'], en: ['Very harsh cleansing brushes on inflamed acne.'] }, 
            best_mixed_with: { ar: ['جميع منتجات DermoPurifyer.'], en: ['All DermoPurifyer products.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة المعرضة لحب الشباب، اللمعان المفرط، والتنظيف اليومي للبشرة الدهنية.', en: 'Acne-prone skin, excessive shine, and daily cleansing for oily skin.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'آمن للاستخدام كغسول للجسم في حال وجود حبوب في الظهر أو الصدر.', en: 'Safe to use as a body wash for back or chest acne.' }
    }
});

// [18] EUCERIN INTIMATE CARE 250 ML
deepProductsList.push({
    id: 'euc_intimate_care', brandId: 'eucerin', familyId: 'ph5', brand: 'Eucerin',
    name: { ar: 'إنتميت كير (غسول العناية بالمناطق الحساسة)', en: 'Intimate Protect Gentle Cleansing Fluid' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '4.5 (يطابق الحموضة الطبيعية للمنطقة)', en: '4.5 (Matches natural intimate pH)' },
        mechanism: { 
            ar: 'يحتوي على حمض اللاكتيك (Lactic Acid) الطبيعي للمنطقة الحساسة للمحافظة على الفلورا المهبلية الدقيقة (Microflora)، بالإضافة للبيسابولول لتهدئة التهيج.', 
            en: 'Contains skin\'s own Lactic Acid to maintain the intimate microflora, plus Bisabolol to soothe irritation.' 
        },
        patient_benefit: { 
            ar: 'يحمي من العدوى، يهدئ التهيج والالتهابات، وينظف بلطف فائق ليمنح إحساساً بالراحة والانتعاش طوال اليوم.', 
            en: 'Protects against infections, soothes irritation and inflammation, and ultra-gently cleanses for a feeling of comfort and freshness all day.' 
        },
        active_ingredients: [
            { name: 'Lactic Acid', concentration: 'Physiological | فسيولوجي', role: { ar: 'الحفاظ على التوازن الحمضي الواقي.', en: 'Maintaining the protective acidic balance.' } },
            { name: 'Bisabolol', concentration: 'Soothing | مهدئ', role: { ar: 'تسكين الاحمرار والتهيج الموضعي.', en: 'Soothing redness and local irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (أثناء الاستحمام).', en: 'Daily (during shower).' },
        step_in_routine: { ar: 'العناية الشخصية.', en: 'Personal care.' },
        routine_step_number: 1,
        application: { ar: 'يُستخدم كجل استحمام خارجي للمنطقة الحساسة، ثم يُشطف جيداً بالماء.', en: 'Used as an external shower gel for the intimate area, then rinsed thoroughly with water.' },
        layering: { 
            do_not_mix_with: { ar: ['الصابون القلوي العادي (يدمر الفلورا الطبيعية).'], en: ['Standard alkaline soap (destroys natural flora).'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'العناية اليومية بالمناطق الحساسة، الحماية من الالتهابات، وخلال فترات التغير الهرموني.', en: 'Daily intimate care, protection against infections, and during hormonal fluctuations.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مختبر من قبل أطباء الأمراض النسائية والجلدية.', en: 'Gynecologically and dermatologically tested.' }
    }
});

// [19] EUCERIN ATOPICONTROL BODY CARE LOTION 250 ML
deepProductsList.push({
    id: 'euc_atopicontrol_lotion', brandId: 'eucerin', familyId: 'atopicontrol', brand: 'Eucerin',
    name: { ar: 'أتوبي-كونترول (لوشن العناية بالجسم للإكزيما)', en: 'AtopiControl Body Care Lotion' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'تركيبة غنية تعتمد على الأوميجا 6 (زيت زهرة الربيع المسائية وزيت بذور العنب) لترميم الحاجز الجلدي، مع <span class="glossary-term" onclick="openGlossary(\'licochalcone_a\')">ليكوکالكون A</span> لتهدئة الالتهاب وتقليل الحكة.', 
            en: 'Rich formula based on Omega 6 (Evening Primrose Oil & Grape Seed Oil) to repair the skin barrier, with <span class="glossary-term" onclick="openGlossary(\'licochalcone_a\')">Licochalcone A</span> to soothe inflammation and reduce itching.' 
        },
        patient_benefit: { 
            ar: 'يوفر ترطيباً عميقاً للجلد التأتبي والمتهيج، يقلل من خشونة الجلد ويخفف الإحساس بالحكة والشد لترتاح البشرة فوراً.', 
            en: 'Provides deep hydration for atopic and irritated skin, reduces skin roughness, and relieves itching and tightness for instant skin comfort.' 
        },
        active_ingredients: [
            { name: 'Omega-6 Fatty Acids', concentration: 'Rich | غني', role: { ar: 'تجديد وتقوية حاجز البشرة.', en: 'Renewing and strengthening the skin barrier.' } },
            { name: 'Licochalcone A', concentration: 'Soothing | مهدئ', role: { ar: 'تخفيف الاحمرار والالتهاب.', en: 'Relieving redness and inflammation.' } },
            { name: 'Ceramides', concentration: 'Active | فعال', role: { ar: 'منع تبخر الماء من الجلد.', en: 'Preventing water evaporation from the skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'الترطيب الأساسي للجسم.', en: 'Core body hydration.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك على كامل الجسم نظيفاً ومجففاً، خاصة المناطق المتهيجة.', en: 'Massage onto entire clean, dry body, especially irritated areas.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['زيت الاستحمام AtopiControl Bath & Shower Oil.'], en: ['AtopiControl Bath & Shower Oil.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الإكزيما التأتبية (Atopic Dermatitis)، الجفاف الشديد، الحكة، وخشونة الجلد.', en: 'Atopic Dermatitis, severe dryness, itching, and skin roughness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن للرضع فوق 3 أشهر. خالي من الكورتيزون والعطور.', en: 'Safe for babies over 3 months. Cortisone and fragrance-free.' }
    }
});

// [20] EUCERIN AQUAPHOR BODY OINTMENT SPRAY 250 ML
deepProductsList.push({
    id: 'euc_aquaphor_spray', brandId: 'eucerin', familyId: 'aquaphor', brand: 'Eucerin',
    name: { ar: 'أكوافور بخاخ (مرهم بخاخ للجسم)', en: 'Aquaphor Body Ointment Spray' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'N/A (خالٍ من الماء)', en: 'N/A (Water-free)' },
        mechanism: { 
            ar: 'ابتكار يجمع نفس فعالية مرهم أكوافور العلاجي للترميم (بانثينول + جلسرين + بيسابولول) في شكل بخاخ يعمل بـ 360 درجة، لسهولة الوصول وتغطية المساحات الكبيرة بسرعة.', 
            en: 'Innovation combining the same therapeutic repair efficacy of Aquaphor ointment (Panthenol + Glycerin + Bisabolol) in a 360-degree spray format, for easy reach and fast coverage of large areas.' 
        },
        patient_benefit: { 
            ar: 'يرمم ويهدئ البشرة شديدة الجفاف والمتهيجة على الفور. مثالي لمناطق الجسم الواسعة أو التي يصعب الوصول إليها (مثل الظهر أو الساقين).', 
            en: 'Instantly repairs and soothes severely dry, irritated skin. Ideal for large or hard-to-reach body areas (like back or legs).' 
        },
        active_ingredients: [
            { name: 'Panthenol', concentration: 'Active | فعال', role: { ar: 'تسريع تجديد الخلايا.', en: 'Accelerating cell regeneration.' } },
            { name: 'Glycerin', concentration: 'Hydrating | مرطب', role: { ar: 'جذب الماء للجلد وحبسه.', en: 'Attracting water to skin and locking it.' } },
            { name: 'Bisabolol', concentration: 'Soothing | مهدئ', role: { ar: 'تقليل التهيج.', en: 'Reducing irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة.', en: 'As needed.' },
        step_in_routine: { ar: 'علاج طارئ / ترطيب مكثف.', en: 'Emergency treatment / Intense hydration.' },
        routine_step_number: 3,
        application: { ar: 'يُرش على بعد 15 سم من الجلد بالتساوي، يُدلك بلطف إذا لزم الأمر.', en: 'Spray evenly 15cm away from the skin, massage gently if needed.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يُرش مباشرة على الوجه (يرش في اليد أولاً).'], en: ['Do not spray directly onto the face (spray into hands first).'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'الجفاف الشديد على مساحات واسعة من الجسم، خشونة الساقين والأذرع، وتهيج الاحتكاك.', en: 'Severe dryness on large body areas, rough legs and arms, and friction irritation.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'البخاخ يعمل حتى وهو مقلوب رأساً على عقب.', en: 'Spray works even when held upside down.' }
    }
});

// [21] EUCERIN DERMO CAPILLAIRE SHAMPOO DANDRUFF 250 ML
deepProductsList.push({
    id: 'euc_dermocapillaire_dandruff_gel', brandId: 'eucerin', familyId: 'dermocapillaire', brand: 'Eucerin',
    name: { ar: 'ديرمو-كابيلير (شامبو جل للقشرة الدهنية)', en: 'DermoCapillaire Anti-Dandruff Gel Shampoo' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن لفروة الرأس', en: 'Scalp-balanced' },
        mechanism: { 
            ar: 'يجمع بين (Climbazole و Piroctone Olamine) لاستهداف فطر الملاسيزيا المسبب للقشرة، مع <span class="glossary-term" onclick="openGlossary(\'polidocanol\')">البوليدوكانول</span> المهدئ لإيقاف حكة فروة الرأس المزعجة من أول غسلة.', 
            en: 'Combines (Climbazole and Piroctone Olamine) to target Malassezia fungus causing dandruff, with soothing <span class="glossary-term" onclick="openGlossary(\'polidocanol\')">Polidocanol</span> to stop annoying scalp itch from the 1st wash.' 
        },
        patient_benefit: { 
            ar: 'يزيل القشرة الدهنية (الصفراء/اللزجة) بفعالية، يمنع عودتها، وينظف الشعر وفروة الرأس ويتركهما منتعشين بلا حكة.', 
            en: 'Effectively removes oily (yellow/sticky) dandruff, prevents its relapse, and cleanses hair and scalp leaving them refreshed and itch-free.' 
        },
        active_ingredients: [
            { name: 'Climbazole & Piroctone Olamine', concentration: 'Active | فعال', role: { ar: 'مكافحة الفطريات والبكتيريا.', en: 'Combating fungi and bacteria.' } },
            { name: 'Polidocanol', concentration: 'Soothing | مهدئ', role: { ar: 'تسكين الحكة فوراً.', en: 'Instantly soothing itching.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '2-3 مرات أسبوعياً كعلاج. ثم مرة أسبوعياً للوقاية.', en: '2-3 times/week as treatment. Then once/week for maintenance.' },
        step_in_routine: { ar: 'علاج فروة الرأس.', en: 'Scalp treatment.' },
        routine_step_number: 1,
        application: { ar: 'يُدلك على فروة مبللة، يُترك لعدة دقائق لتفعيل المواد، ثم يُشطف.', en: 'Massage into wet scalp, leave for a few minutes to activate, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['شامبوهات قاسية أخرى.', 'الماء الساخن جداً.'], en: ['Other harsh shampoos.', 'Very hot water.'] }, 
            best_mixed_with: { ar: ['شامبو خفيف (pH5) في الأيام البينية.'], en: ['Mild shampoo (pH5) on alternate days.'] } 
        }
    },
    precautions: {
        indications: { ar: 'القشرة الدهنية (التي تلتصق بالفروة)، التهاب الجلد الدهني (Seborrheic Dermatitis)، وحكة الرأس.', en: 'Oily dandruff (sticking to the scalp), Seborrheic Dermatitis, and scalp itch.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'يحسن لمعان ونعومة الشعر ولا يسبب جفافه كباقي شامبوهات القشرة.', en: 'Improves hair shine and softness without drying it like other dandruff shampoos.' }
    }
});

// [22] EUCERIN DERMATO CLEAN MICELLAR FLUID 3 IN 1 200 ML
deepProductsList.push({
    id: 'euc_dermatoclean_micellar', brandId: 'eucerin', familyId: 'dermato_clean', brand: 'Eucerin',
    name: { ar: 'ديرماتو-كلين 3 في 1 (محلول ميسيلار منقي)', en: 'DermatoCLEAN 3 in 1 Micellar Cleansing Fluid' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي', en: 'Physiological' },
        mechanism: { 
            ar: 'يجمع مركب التنظيف اللطيف (APG Complex) مع <span class="glossary-term" onclick="openGlossary(\'gluconoglycerol\')">جلوكو-جليسرول</span> وحمض الهيالورونيك، ليزيل المكياج والأوساخ مع السماح للجلد بالتنفس (يعزز امتصاص الأكسجين بنسبة عالية).', 
            en: 'Combines a mild cleansing complex (APG) with <span class="glossary-term" onclick="openGlossary(\'gluconoglycerol\')">Gluco-Glycerol</span> and HA, removing makeup and dirt while allowing skin to breathe (significantly enhances oxygen uptake).' 
        },
        patient_benefit: { 
            ar: 'منظف وتونر ومزيل مكياج عين في خطوة واحدة. يترك البشرة نقية، مرطبة، وتتنفس بحرية استعداداً للمرطبات.', 
            en: 'Cleanser, toner, and eye makeup remover in one step. Leaves skin pure, hydrated, and breathing freely ready for moisturizers.' 
        },
        active_ingredients: [
            { name: 'APG Complex', concentration: 'Ultra-mild', role: { ar: 'تنظيف سطحي فعال دون تجريد الزيوت.', en: 'Effective surface cleansing without stripping oils.' } },
            { name: 'Hyaluronic Acid + Gluco-Glycerol', concentration: 'Hydrating | مرطب', role: { ar: 'ترطيب وحماية من الجفاف.', en: 'Hydrating and protecting from dryness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'الخطوة الأولى للتنظيف.', en: 'First cleansing step.' },
        routine_step_number: 1,
        application: { ar: 'يُبلل قطن نظيف ويمسح الوجه والعينين بلطف. لا يحتاج لشطف.', en: 'Soak a cotton pad and gently wipe face and eyes. No rinsing required.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك القاسي.'], en: ['Harsh rubbing.'] }, 
            best_mixed_with: { ar: ['جميع روتينات العناية اليومية من يوسيرين.'], en: ['All Eucerin daily care routines.'] } 
        }
    },
    precautions: {
        indications: { ar: 'التنظيف اليومي لجميع أنواع البشرة (بما فيها الحساسة)، وإزالة مكياج الوجه والعين.', en: 'Daily cleansing for all skin types (including sensitive), and face/eye makeup removal.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره من قبل أطباء العيون. يناسب مستخدمي العدسات اللاصقة.', en: 'Ophthalmologically tested. Suitable for contact lens wearers.' }
    }
});
// ==========================================
// 📦 بلوك رقم (30): يوسيرين (عائلة Hyaluron-Filler، Elasticity، والعناية بالعين)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. تحديث العائلات ومصطلحات القاموس الجديدة ---

let eucerinBrandUpdate3 = brandsList.find(b => b.id === 'eucerin');
if (eucerinBrandUpdate3) {
    if (!eucerinBrandUpdate3.families.find(f => f.id === 'elasticity')) {
        eucerinBrandUpdate3.families.push({ id: 'elasticity', name: { ar: 'إلاستيستي (لمرونة البشرة الناضجة)', en: 'Hyaluron-Filler + Elasticity' } });
    }
}

glossaryDict['arctiin'] = {
    title: { ar: 'الأركتين (Arctiin) 🌼', en: 'Arctiin 🌼' },
    desc: { 
        ar: 'مستخلص نشط طبيعياً من ثمرة الأرقطيون. أثبت سريرياً قدرته على تسريع عملية تجديد الكولاجين في خلايا الجلد، مما يجعله مثالياً لعلاج فقدان المرونة والترهل في البشرة الناضجة.', 
        en: 'A naturally active extract from the Burdock fruit. Clinically proven to accelerate collagen renewal in skin cells, making it ideal for treating loss of elasticity and sagging in mature skin.' 
    }
};

glossaryDict['aha_complex_eucerin'] = {
    title: { ar: 'مركب التقشير (AHA Complex) 🧪', en: 'AHA Peeling Complex 🧪' },
    desc: { 
        ar: 'مزيج مدروس من أحماض ألفا هيدروكسي (جليكوليك، لاكتيك، جلوكونولاكتون) يعمل على تقشير الجلد الميت بلطف أثناء الليل، لتعزيز إشراقة البشرة وتسهيل اختراق حمض الهيالورونيك.', 
        en: 'A carefully formulated blend of Alpha Hydroxy Acids (Glycolic, Lactic, Gluconolactone) that gently exfoliates dead skin overnight, enhancing radiance and facilitating HA penetration.' 
    }
};

// --- 2. المنتجات العميقة (Deep Products) ---

// [23] EUCERIN HYALURON-FILLER NIGHT PEELING & SERUM 30 ML
deepProductsList.push({
    id: 'euc_hyaluron_night_peeling', brandId: 'eucerin', familyId: 'hyaluron_filler', brand: 'Eucerin',
    name: { ar: 'هيالورون-فيلر (سيروم التقشير الليلي)', en: 'Hyaluron-Filler Night Peeling & Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly Acidic' },
        mechanism: { 
            ar: 'عبوة مزدوجة تدمج <span class="glossary-term" onclick="openGlossary(\'aha_complex_eucerin\')">مركب التقشير AHA</span> لتجديد الخلايا، مع جل حمض الهيالورونيك عالي ومنخفض الوزن الجزيئي وجلايسين سابونين لملء التجاعيد من الداخل.', 
            en: 'Dual-chamber integrating <span class="glossary-term" onclick="openGlossary(\'aha_complex_eucerin\')">AHA Peeling Complex</span> for cell renewal, with High/Low MW HA gel and Glycine Saponin to plump wrinkles from within.' 
        },
        patient_benefit: { 
            ar: 'يصقل ملمس البشرة، يضيق المسام، ويملأ أعمق التجاعيد أثناء النوم، ليمنح البشرة نعومة وإشراقة ملحوظة في الصباح.', 
            en: 'Refines skin texture, tightens pores, and plumps the deepest wrinkles overnight, granting noticeable smoothness and radiance in the AM.' 
        },
        active_ingredients: [
            { name: 'AHA Complex', concentration: 'Active | فعال', role: { ar: 'تقشير الخلايا الميتة وتجديد السطح.', en: 'Exfoliating dead cells and surface renewal.' } },
            { name: 'Hyaluronic Acid + Saponin', concentration: 'Plumping | ممتلئ', role: { ar: 'ترطيب عميق وتحفيز الهيالورونيك الذاتي.', en: 'Deep hydration and stimulating natural HA.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily PM.' },
        step_in_routine: { ar: 'سيروم علاجي ليلي مزدوج.', en: 'Dual night treatment serum.' },
        routine_step_number: 2,
        application: { ar: 'يُضغط في المنتصف لخروج المزيجين معاً، يُخلط باليد ويوزع على الوجه والرقبة.', en: 'Press the middle to release both formulas, mix in hand and apply to face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات كيميائية أو ريتينول قوي في نفس الليلة.'], en: ['Chemical peels or strong retinol on the same night.'] }, 
            best_mixed_with: { ar: ['كريم Hyaluron-Filler Night Cream.', 'واقي شمس إلزامي صباحاً.'], en: ['Hyaluron-Filler Night Cream.', 'Mandatory SPF in the AM.'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد العميقة، المسام الواسعة، الملمس الخشن، وفقدان النضارة.', en: 'Deep wrinkles, enlarged pores, rough texture, and loss of radiance.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'قد يسبب وخزاً طفيفاً يزول بسرعة.', en: 'May cause slight tingling that fades quickly.' }
    }
});

// [24] EUCERIN ELASTICITY + FILLER FACIAL OIL 30 ML
deepProductsList.push({
    id: 'euc_elasticity_filler_oil', brandId: 'eucerin', familyId: 'elasticity', brand: 'Eucerin',
    name: { ar: 'إلاستيستي + فيلر (زيت الوجه لمرونة البشرة)', en: 'Elasticity + Filler Facial Oil' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'زيت علاجي يغذي البشرة الناضجة. يحتوي على زيت الأرجان الغني بالليبيدات، وفيتامين E، ومستخلص (Milk Thistle) لتحسين مرونة الجلد ومكافحة التدهور التأكسدي.', 
            en: 'Therapeutic oil nourishing mature skin. Contains lipid-rich Argan Oil, Vitamin E, and Milk Thistle extract to improve skin elasticity and combat oxidative degradation.' 
        },
        patient_benefit: { 
            ar: 'يعيد بناء حاجز الدهون المفقود في البشرة المتقدمة في السن، يمنحها نعومة حريرية، ويحسن من تماسكها وإشراقتها فوراً.', 
            en: 'Rebuilds the lost lipid barrier in aging skin, grants silky smoothness, and instantly improves firmness and radiance.' 
        },
        active_ingredients: [
            { name: 'Argan Oil', concentration: 'Rich | غني', role: { ar: 'تغذية وتنعيم مكثف للجلد الجاف.', en: 'Intense nourishment and smoothing for dry skin.' } },
            { name: 'Milk Thistle Extract', concentration: 'Active | فعال', role: { ar: 'حماية الكولاجين من التكسر.', en: 'Protecting collagen from breakdown.' } },
            { name: 'Vitamin E', concentration: 'Antioxidant | مضاد أكسدة', role: { ar: 'محاربة الجذور الحرة والشيخوخة.', en: 'Fighting free radicals and aging.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً (أو حسب الحاجة للترطيب).', en: 'Morning and Evening (or as needed for hydration).' },
        step_in_routine: { ar: 'زيت علاجي مغذي.', en: 'Nourishing treatment oil.' },
        routine_step_number: 2,
        application: { ar: 'يمكن استخدامه قبل كريم العناية، أو خلط بضع قطرات منه مع كريم النهار/الليل لزيادة التغذية.', en: 'Can be used before care cream, or mix a few drops with day/night cream for extra nourishment.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم Hyaluron-Filler + Elasticity.'], en: ['Hyaluron-Filler + Elasticity Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الناضجة والجافة جداً، فقدان المرونة، البهتان الشديد المرتبط بالعمر.', en: 'Mature and very dry skin, loss of elasticity, and severe age-related dullness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يترك أثراً دهنياً ثقيلاً (Satin finish).', en: 'Leaves no heavy greasy residue (Satin finish).' }
    }
});

// [25] EUCERIN HYALURON-FILLER VIT C BOOSTER SERUM 3 X 8 ML
deepProductsList.push({
    id: 'euc_hyaluron_vitc_booster', brandId: 'eucerin', familyId: 'hyaluron_filler', brand: 'Eucerin',
    name: { ar: 'هيالورون-فيلر (معزز فيتامين سي 10%)', en: 'Hyaluron-Filler Vitamin C Booster 10%' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (لامتصاص الفيتامين)', en: 'Acidic (for vitamin absorption)' },
        mechanism: { 
            ar: 'بودرة فيتامين C نقي بتركيز 10% تُفعل لحظة الاستخدام، ممزوجة مع حمض الهيالورونيك ومضاد الأكسدة <span class="glossary-term" onclick="openGlossary(\'licochalcone_a\')">Licochalcone A</span> لتوفير حماية خلوية ونضارة فورية.', 
            en: '10% pure Vitamin C powder activated upon use, mixed with HA and the antioxidant <span class="glossary-term" onclick="openGlossary(\'licochalcone_a\')">Licochalcone A</span> to provide cellular protection and instant radiance.' 
        },
        patient_benefit: { 
            ar: 'يقوي دفاعات البشرة ضد التلوث والشمس، يعالج البهتان الشديد في 7 أيام فقط، ويؤخر ظهور التجاعيد.', 
            en: 'Strengthens skin defenses against pollution and sun, treats severe dullness in just 7 days, and delays the appearance of wrinkles.' 
        },
        active_ingredients: [
            { name: 'Pure L-Ascorbic Acid', concentration: '10%', role: { ar: 'تحفيز الكولاجين وتفتيح النضارة.', en: 'Stimulating collagen and brightening radiance.' } },
            { name: 'Licochalcone A + HA', concentration: 'Active | فعال', role: { ar: 'تهدئة، ترطيب، ومحاربة الشوارد الحرة.', en: 'Soothing, hydrating, and fighting free radicals.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة صباحاً.', en: 'Once daily AM.' },
        step_in_routine: { ar: 'سيروم النضارة المضاد للأكسدة.', en: 'Antioxidant radiance serum.' },
        routine_step_number: 2,
        application: { ar: 'تُضغط الكبسولة العلوية لتحرير البودرة، تُرَج جيداً، ثم توضع قطرات على الوجه. (صالحة لمدة 7-10 أيام من التفعيل).', en: 'Press top capsule to release powder, shake well, apply drops to face. (Valid for 7-10 days post-activation).' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات أو ريتينول في نفس اللحظة.'], en: ['Exfoliants or retinol at the same time.'] }, 
            best_mixed_with: { ar: ['واقي شمس Eucerin SPF50.'], en: ['Eucerin SPF50 Sunscreen.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الباهتة والمجهدة، التلوث، التجاعيد الأولية، وعدم تجانس اللون.', en: 'Dull stressed skin, pollution, early wrinkles, and uneven tone.' },
        pregnancy_safe: true, sun_sensitivity: true, 
        notes: { ar: 'العبوة مصممة لحماية الفيتامين من الأكسدة لضمان أقصى فعالية.', en: 'Packaging designed to protect the vitamin from oxidation ensuring max efficacy.' }
    }
});

// [26] EUCERIN HYALURON-FILLER MOISTURE BOOSTER (ULTRA LIGHT) 30 ML
deepProductsList.push({
    id: 'euc_hyaluron_moisture_booster', brandId: 'eucerin', familyId: 'hyaluron_filler', brand: 'Eucerin',
    name: { ar: 'هيالورون-فيلر (معزز الترطيب الفائق الخفة)', en: 'Hyaluron-Filler Moisture Booster (Ultra Light)' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'جل مائي منعش للغاية يجمع 3 أضعاف تركيز حمض الهيالورونيك (مقارنة بكريمات يوسيرين) مع الجلسرين، لضخ ترطيب فوري وطويل الأمد حتى 24 ساعة.', 
            en: 'Ultra-refreshing water gel combining 3x the concentration of HA (compared to Eucerin creams) with Glycerin, pumping instant and long-lasting hydration up to 24h.' 
        },
        patient_benefit: { 
            ar: 'ينعش البشرة العطشى فوراً، يملأ الخطوط الدقيقة (Plumping)، ويعطي مظهراً صحياً وندياً (Dewy) دون أي لزوجة.', 
            en: 'Instantly refreshes thirsty skin, plumps fine lines, and gives a healthy dewy look without any stickiness.' 
        },
        active_ingredients: [
            { name: 'Hyaluronic Acid', concentration: '3x Concentration', role: { ar: 'جذب الماء لطبقات الجلد العليا والعميقة.', en: 'Attracting water to upper and deep skin layers.' } },
            { name: 'Glycerin', concentration: 'Active | فعال', role: { ar: 'ترطيب وتنعيم سطح الجلد.', en: 'Hydrating and smoothing skin surface.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'سيروم الترطيب الأول.', en: 'First hydrating serum.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على وجه نظيف ومندى (Damp) قليلاً لتعزيز حبس الماء.', en: 'Apply to a clean, slightly damp face to enhance water locking.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['أساس ممتاز (Primer) للمكياج.', 'واقي شمس Hydro Protect.'], en: ['Excellent makeup primer.', 'Hydro Protect SPF.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الجفاف السطحي، الخطوط الرفيعة، البشرة المجهدة، ومحبي القوام المائي الخفيف جداً.', en: 'Surface dehydration, fine lines, stressed skin, and lovers of ultra-light watery textures.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يسد المسام (Non-comedogenic). ممتاز للبشرة المختلطة والدهنية التي ترفض الكريمات.', en: 'Non-comedogenic. Excellent for combi/oily skin that rejects creams.' }
    }
});

// [27] EUCERIN HYALURON RADIANCE-BOOST SPRAY 150 ML
deepProductsList.push({
    id: 'euc_hyaluron_spray', brandId: 'eucerin', familyId: 'hyaluron_filler', brand: 'Eucerin',
    name: { ar: 'هيالورون سبراي (بخاخ الترطيب والنضارة)', en: 'Hyaluron Radiance-Boost Spray' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'بخاخ منعش يدمج حمض الهيالورونيك مع <span class="glossary-term" onclick="openGlossary(\'gluconoglycerol\')">جلوكو-جليسرول</span> لتعزيز قنوات توزيع الماء في الخلايا وتوفير إشراقة فورية وتلطيف للجلد.', 
            en: 'Refreshing spray integrating HA with <span class="glossary-term" onclick="openGlossary(\'gluconoglycerol\')">Gluco-Glycerol</span> to boost water distribution channels in cells, providing instant radiance and skin soothing.' 
        },
        patient_benefit: { 
            ar: 'يبرد الجلد فوراً، يثبت المكياج، ويعيد الحيوية والترطيب للبشرة الجافة أو المجهدة في أي وقت من اليوم.', 
            en: 'Instantly cools the skin, sets makeup, and restores vitality and hydration to dry or stressed skin anytime during the day.' 
        },
        active_ingredients: [
            { name: 'Hyaluronic Acid', concentration: 'Active | فعال', role: { ar: 'ترطيب سطحي فوري.', en: 'Instant surface hydration.' } },
            { name: 'Gluco-Glycerol', concentration: 'Active | فعال', role: { ar: 'تنشيط الأكوابورينات لترطيب مستدام.', en: 'Activating aquaporins for sustained hydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة طوال اليوم.', en: 'As needed throughout the day.' },
        step_in_routine: { ar: 'ترطيب طارئ / تثبيت.', en: 'Emergency hydration / Setting.' },
        routine_step_number: 2,
        application: { ar: 'يُرش على الوجه من مسافة 20 سم. يترك ليجف لبضع ثوانٍ.', en: 'Spray onto face from 20cm away. Leave to dry for a few seconds.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['فوق المكياج لزيادة النضارة (Dewy effect).'], en: ['Over makeup to increase radiance (Dewy effect).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الحرارة، الجفاف المكتبي (التكييف)، الإرهاق، وإنعاش البشرة الحساسة.', en: 'Heat, office dryness (AC), fatigue, and refreshing sensitive skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من العطور. يوفر رذاذاً دقيقاً جداً (Fine mist).', en: 'Fragrance-free. Provides a very fine mist.' }
    }
});

// [28] EUCERIN EVEN PIGMENT PERFECTOR GENTLE CLEANSING FOAM 150 ML
deepProductsList.push({
    id: 'euc_even_pigment_foam', brandId: 'eucerin', familyId: 'even_pigment', brand: 'Eucerin',
    name: { ar: 'إيفن بيجمنت (رغوة التنظيف لتفتيح البشرة)', en: 'Even Pigment Perfector Gentle Cleansing Foam' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'رغوة تنظيف لطيفة غنية بمستخلصات مفتحة ومضادة للأكسدة، تهيئ البشرة وتزيد من نفاذية واستجابة الجلد لمادة (الثياميدول) العلاجية اللاحقة.', 
            en: 'Gentle cleansing foam rich in brightening and antioxidant extracts, prepping the skin and increasing its permeability and response to the subsequent (Thiamidol) treatment.' 
        },
        patient_benefit: { 
            ar: 'يزيل الشوائب والمكياج بلطف، ينير البشرة الباهتة، ويدعم روتين علاج الكلف والتصبغات.', 
            en: 'Gently removes impurities and makeup, illuminates dull skin, and supports the melasma and pigmentation treatment routine.' 
        },
        active_ingredients: [
            { name: 'Dioic Acid', concentration: 'Active | فعال', role: { ar: 'تنظيم الزهم وتقليل البقع.', en: 'Regulating sebum and reducing spots.' } },
            { name: 'Bisabolol', concentration: 'Soothing | مهدئ', role: { ar: 'منع التهيج أثناء التنظيف.', en: 'Preventing irritation during cleansing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف والتفتيح).', en: 'Step 1 (Cleansing & Brightening).' },
        routine_step_number: 1,
        application: { ar: 'تُضخ الرغوة، تُدلك على وجه مبلل برفق، ثم تُشطف.', en: 'Pump foam, massage gently onto wet face, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم Even Pigment Dual Serum.'], en: ['Even Pigment Dual Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة ذات اللون غير الموحد، البقع الداكنة، والتحضير لروتين التفتيح.', en: 'Uneven skin tone, dark spots, and prepping for brightening routine.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يحتوي على الثياميدول، ولكنه يعزز من تأثيره.', en: 'Does not contain Thiamidol, but enhances its effect.' }
    }
});

// [29] EUCERIN AQUAPORIN ACTIVE EYE CREAM 15 ML
deepProductsList.push({
    id: 'euc_aquaporin_eye', brandId: 'eucerin', familyId: 'aquaporin', brand: 'Eucerin',
    name: { ar: 'أكوابورين أكتيف (كريم ترطيب محيط العين)', en: 'AQUAporin ACTIVE Eye Cream' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي (متوافق مع الدموع)', en: 'Physiological (Tear-compatible)' },
        mechanism: { 
            ar: 'يستخدم تقنية <span class="glossary-term" onclick="openGlossary(\'gluconoglycerol\')">جلوكو-جليسرول</span> لترطيب منطقة العين المعرضة للجفاف بشدة، مدعوماً بخلاصة الجينسنج (Ginseng) لتنشيط الدورة الدموية وتقليل الانتفاخات.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'gluconoglycerol\')">Gluco-Glycerol</span> tech to hydrate the highly dryness-prone eye area, backed by Ginseng extract to stimulate circulation and reduce puffiness.' 
        },
        patient_benefit: { 
            ar: 'يوفر ترطيباً مكثفاً لـ 24 ساعة، يخفف الهالات السوداء المرتبطة بالإرهاق، ويبرد محيط العين فوراً بفضل الأداة المعدنية.', 
            en: 'Provides intense 24h hydration, relieves fatigue-related dark circles, and instantly cools the eye contour via the metal applicator.' 
        },
        active_ingredients: [
            { name: 'Gluco-Glycerol', concentration: 'Hydrating | مرطب', role: { ar: 'حبس الماء وتنشيط الأكوابورينات.', en: 'Locking water and activating aquaporins.' } },
            { name: 'Ginseng Extract', concentration: 'Energizing | منشط', role: { ar: 'تقليل الانتفاخات وعلامات التعب.', en: 'Reducing puffiness and fatigue signs.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'ترطيب محيط العين.', en: 'Eye contour hydration.' },
        routine_step_number: 2,
        application: { ar: 'يوزع بواسطة الرأس المعدني المبرد بلطف حول العينين.', en: 'Distribute gently around eyes using the cooling metal applicator.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'الجفاف الشديد حول العين، الخطوط الدقيقة الناتجة عن نقص الماء، والعيون المجهدة.', en: 'Severe dryness around eyes, dehydration fine lines, and fatigued eyes.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من العطور. آمن لمستخدمي العدسات اللاصقة.', en: 'Fragrance-free. Safe for contact lens wearers.' }
    }
});

// [30] EUCERIN HYALURON-FILLER EYE CREAM 15 ML
deepProductsList.push({
    id: 'euc_hyaluron_filler_eye', brandId: 'eucerin', familyId: 'hyaluron_filler', brand: 'Eucerin',
    name: { ar: 'هيالورون-فيلر (كريم تجاعيد محيط العين)', en: 'Hyaluron-Filler Eye Cream SPF 15' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يستهدف تجاعيد "قدم الغراب" (Crow\'s feet) بمزيج من حمض الهيالورونيك عالي ومنخفض الوزن الجزيئي و <span class="glossary-term" onclick="openGlossary(\'glycine_saponin\')">جلايسين سابونين</span> لملء الخطوط، مع فلاتر SPF 15 للوقاية.', 
            en: 'Targets "Crow\'s feet" wrinkles with a blend of High/Low MW HA and <span class="glossary-term" onclick="openGlossary(\'glycine_saponin\')">Glycine Saponin</span> to plump lines, with SPF 15 filters for prevention.' 
        },
        patient_benefit: { 
            ar: 'يملأ التجاعيد العميقة من الداخل للخارج بفعالية مثبتة، ويحمي المنطقة الرقيقة من الشيخوخة الضوئية المستقبلية.', 
            en: 'Plumps deep wrinkles from the inside out with proven efficacy, and protects the delicate area from future photoaging.' 
        },
        active_ingredients: [
            { name: 'HA + Saponin', concentration: 'Active | فعال', role: { ar: 'نفخ التجاعيد وتحفيز إنتاج الهيالورونيك.', en: 'Plumping wrinkles and stimulating HA production.' } },
            { name: 'UVA/UVB Filters', concentration: 'SPF 15', role: { ar: 'حماية من أشعة الشمس اليومية.', en: 'Daily sun protection.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً (لوجود عامل حماية).', en: 'Morning (due to SPF).' },
        step_in_routine: { ar: 'علاج تجاعيد العين وحمايتها.', en: 'Eye wrinkle treatment & protection.' },
        routine_step_number: 2,
        application: { ar: 'يُربت بلطف حول العينين باستخدام البنصر.', en: 'Dab gently around the eyes using the ring finger.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك القاسي.', 'استخدامه ليلاً (يُفضل استخدام مرطب بدون SPF ليلاً).'], en: ['Harsh rubbing.', 'Using it at night (better to use an SPF-free moisturizer at night).'] }, 
            best_mixed_with: { ar: ['سيروم Hyaluron-Filler للوجه.'], en: ['Hyaluron-Filler Face Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'تجاعيد محيط العين الظاهرة (Crow\'s feet)، فقدان الحجم، والحماية من شيخوخة الشمس.', en: 'Visible eye contour wrinkles (Crow\'s feet), volume loss, and protection from sun aging.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره طبياً. مناسب كقاعدة للكونسيلر.', en: 'Medically tested. Suitable as a concealer base.' }
    }
});
// ==========================================
// 📦 بلوك رقم (31): يوسيرين (علاج نوبات الإكزيما، pH5، وعلاجات التصبغات)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. إضافة مصطلحات القاموس الجديدة ---

glossaryDict['ph5_citrate_buffer'] = {
    title: { ar: 'نظام توازن pH5 (Citrate Buffer) 🛡️', en: 'pH5 Citrate Buffer 🛡️' },
    desc: { 
        ar: 'مركب يعتمد على حمض الستريك، يعمل على استعادة ودعم درجة الحموضة الطبيعية المثلى للجلد (pH 5)، مما ينشط الإنزيمات الطبيعية التي تحمي حاجز البشرة وتمنع التحسس.', 
        en: 'A Citric Acid-based complex that restores and supports the skin\'s optimal natural pH (pH 5), activating natural enzymes that protect the skin barrier and prevent sensitivity.' 
    }
};

glossaryDict['menthoxypropanediol'] = {
    title: { ar: 'منثوكسي بروبانيديول (Menthoxypropanediol) ❄️', en: 'Menthoxypropanediol ❄️' },
    desc: { 
        ar: 'مشتق من المنثول (النعناع) يعمل كمبرد فوري ومسكن حسي للجلد، يقطع إشارات الحكة ويخفف الرغبة الشديدة في الهرش أثناء نوبات الإكزيما.', 
        en: 'A menthol derivative acting as an instant cooling and sensory soothing agent for the skin, breaking the itch signals and relieving the severe urge to scratch during eczema flare-ups.' 
    }
};

// --- 2. المنتجات العميقة (Deep Products) ---

// [31] EUCERIN DERMOPURIFYER OIL CONTROL MATTIFYING FLUID 50 ML
deepProductsList.push({
    id: 'euc_dermopurifyer_mattifying', brandId: 'eucerin', familyId: 'dermopurifyer', brand: 'Eucerin',
    name: { ar: 'ديرموبيوريفاير (سائل مطفي للتحكم بالدهون)', en: 'DermoPurifyer Oil Control Mattifying Fluid' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يوفر تحكماً مزدوجاً: يعالج الحبوب بحمض الساليسيليك وليكوتشالكون A، ويتحكم باللمعان عبر جزيئات ممتصة للدهون تمنح تأثيراً مطفياً يدوم 8 ساعات.', 
            en: 'Provides dual control: treats blemishes with Salicylic Acid and Licochalcone A, and controls shine via sebum-absorbing particles granting an 8h mattifying effect.' 
        },
        patient_benefit: { 
            ar: 'يرطب البشرة الدهنية دون ترك طبقة دهنية، يهدئ الاحمرار، يمنع اللمعان المزعج طوال اليوم، ويقلل البثور بشكل ملحوظ.', 
            en: 'Hydrates oily skin without a greasy film, soothes redness, prevents annoying shine all day, and visibly reduces blemishes.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid', concentration: 'Active | فعال', role: { ar: 'مضاد للبكتيريا وتقشير داخل المسام.', en: 'Antibacterial and intra-pore exfoliation.' } },
            { name: 'Licochalcone A', concentration: 'Soothing | مهدئ', role: { ar: 'تخفيف التهابات حب الشباب.', en: 'Relieving acne inflammation.' } },
            { name: 'Mattifying Particles', concentration: 'Sebum Control | تحكم', role: { ar: 'امتصاص الدهون الفائضة فوراً.', en: 'Instantly absorbing excess sebum.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'مرطب يومي علاجي.', en: 'Daily therapeutic moisturizer.' },
        routine_step_number: 3,
        application: { ar: 'يوزع على الوجه بعد التنظيف (وتجنب منطقة العين).', en: 'Distribute over the face after cleansing (avoiding eye area).' },
        layering: { 
            do_not_mix_with: { ar: ['المرطبات الثقيلة الأخرى.'], en: ['Other heavy moisturizers.'] }, 
            best_mixed_with: { ar: ['واقي شمس Oil Control SPF50.'], en: ['Oil Control SPF50 Sunscreen.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة المعرضة للشوائب، الإفرازات الدهنية الزائدة، واللمعان المستمر.', en: 'Blemish-prone skin, excess sebum production, and continuous shine.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'ممتاز كقاعدة قبل المكياج للبشرة الدهنية.', en: 'Excellent as a makeup base for oily skin.' }
    }
});

// [32] EUCERIN ATOPICONTROL ACUTE CARE CREAM 40 ML
deepProductsList.push({
    id: 'euc_atopicontrol_acute', brandId: 'eucerin', familyId: 'atopicontrol', brand: 'Eucerin',
    name: { ar: 'أتوبي-كونترول (كريم العناية الحادة للإكزيما)', en: 'AtopiControl Acute Care Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'علاج طارئ يكسر حلقة "الحكة-الهرش" المفرغة. يعتمد على <span class="glossary-term" onclick="openGlossary(\'menthoxypropanediol\')">المنثوكسي بروبانيديول</span> للتبريد، الديكانديول كمضاد للبكتيريا، والليكوتشالكون A لتهدئة الالتهاب، مع السيراميد للترميم.', 
            en: 'Emergency care breaking the vicious "itch-scratch" cycle. Relies on <span class="glossary-term" onclick="openGlossary(\'menthoxypropanediol\')">Menthoxypropanediol</span> for cooling, Decanediol as antibacterial, Licochalcone A for inflammation, and Ceramides for repair.' 
        },
        patient_benefit: { 
            ar: 'تأثير يضاهي كريمات الكورتيزون الموضعية الخفيفة؛ يهدئ نوبات الإكزيما الحادة، يبرد الجلد لتقليل الحكة، ويحسن النوم بفضل تقليل الانزعاج ليلاً.', 
            en: 'Effect comparable to mild topical cortisone creams; soothes acute eczema flare-ups, cools skin to reduce itching, and improves sleep by reducing nighttime discomfort.' 
        },
        active_ingredients: [
            { name: 'Menthoxypropanediol', concentration: 'Cooling | مبرد', role: { ar: 'تسكين حسي فوري للحكة.', en: 'Instant sensory itch relief.' } },
            { name: 'Decanediol', concentration: 'Antibacterial | مضاد', role: { ar: 'منع تكاثر بكتيريا المكورات العنقودية.', en: 'Preventing Staph bacteria proliferation.' } },
            { name: 'Licochalcone A + Ceramides', concentration: 'Active | فعال', role: { ar: 'إيقاف الالتهاب وسد شقوق الحاجز الجلدي.', en: 'Stopping inflammation and sealing barrier cracks.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'كلما دعت الحاجة أثناء نوبات الإكزيما (Flare-ups).', en: 'As often as needed during eczema flare-ups.' },
        step_in_routine: { ar: 'علاج موضعي مكثف.', en: 'Intensive topical treatment.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك بلطف على المناطق المتهيجة والحمراء فقط.', en: 'Massage gently onto irritated and red areas only.' },
        layering: { 
            do_not_mix_with: { ar: ['الاستخدام على جروح مفتوحة جداً (قد يسبب لسعة مبردة).'], en: ['Applying on very open wounds (may cause a cooling sting).'] }, 
            best_mixed_with: { ar: ['لوشن AtopiControl (يُستخدم اللوشن لباقي الجسم).'], en: ['AtopiControl Lotion (use the lotion for the rest of the body).'] } 
        }
    },
    precautions: {
        indications: { ar: 'نوبات الإكزيما التأتبية الحادة (Flare-ups)، التهاب الجلد التماسي، والحكة العنيفة.', en: 'Acute Atopic Dermatitis flare-ups, contact dermatitis, and violent itching.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن للرضع فوق سن 3 أشهر. خالي من الكورتيزون.', en: 'Safe for babies over 3 months. Cortisone-free.' }
    }
});

// [33] EUCERIN UREA REPAIR PLUS REPLENISHING BODY WASH 400 ML
deepProductsList.push({
    id: 'euc_urea_repair_wash', brandId: 'eucerin', familyId: 'urea_repair', brand: 'Eucerin',
    name: { ar: 'يوريا-ريبير بلس 5% (غسول الجسم للخشونة)', en: 'UreaRepair PLUS 5% Urea Replenishing Body Wash' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي', en: 'Physiological' },
        mechanism: { 
            ar: 'غسول علاجي خالي من الصابون القاسي، يعتمد على منظفات لطيفة جداً مدمجة مع 5% يوريا وعوامل الترطيب الطبيعية (NMFs) لمنع جفاف الجلد أثناء الاستحمام.', 
            en: 'Therapeutic soap-free wash relying on ultra-mild surfactants combined with 5% Urea and NMFs to prevent skin dehydration during showering.' 
        },
        patient_benefit: { 
            ar: 'ينظف البشرة شديدة الجفاف بلطف، يمنع الحكة والشد بعد الاستحمام، ويحافظ على الزيوت الطبيعية للجلد.', 
            en: 'Gently cleanses extremely dry skin, prevents post-shower itching and tightness, and preserves natural skin oils.' 
        },
        active_ingredients: [
            { name: 'Urea 5%', concentration: 'Hydrating | مرطب', role: { ar: 'جذب الماء للطبقة القرنية أثناء الغسيل.', en: 'Attracting water to the stratum corneum during washing.' } },
            { name: 'NMFs', concentration: 'Active | فعال', role: { ar: 'دعم الترطيب الذاتي للجلد.', en: 'Supporting the skin\'s self-hydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً أثناء الاستحمام.', en: 'Daily during shower.' },
        step_in_routine: { ar: 'تنظيف الجسم (بديل الصابون).', en: 'Body cleansing (Soap alternative).' },
        routine_step_number: 1,
        application: { ar: 'توضع كمية على اليد، تُرغى بلطف على بشرة مبللة، ثم تُشطف جيداً.', en: 'Dispense into hand, lather gently on wet skin, then rinse thoroughly.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['لوشن UreaRepair Plus 10% بعد التجفيف.'], en: ['UreaRepair Plus 10% Lotion after drying.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الجفاف والمتقشرة، الصدفية، جفاف مرضى السكري، وجفاف كبار السن.', en: 'Extremely dry and flaky skin, psoriasis, diabetic skin, and senile dryness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مناسب للاستخدام اليومي المستمر ولطيف على الأغشية المخاطية.', en: 'Suitable for continuous daily use and gentle on mucous membranes.' }
    }
});

// [34] EUCERIN PH5 BODY LOTION 400 ML
deepProductsList.push({
    id: 'euc_ph5_lotion', brandId: 'eucerin', familyId: 'ph5', brand: 'Eucerin',
    name: { ar: 'بي إتش 5 (لوشن ترطيب الجسم للحساسية)', en: 'pH5 Light Lotion' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.0 (درجة الحموضة المثالية للجلد)', en: '5.0 (Optimal Skin pH)' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'ph5_citrate_buffer\')">نظام توازن pH5</span> جنباً إلى جنب مع الديكسبانثينول بنسبة 5% لتحفيز إنزيمات الجلد الطبيعية المسؤولة عن بناء الحاجز الواقي ومنع الملوثات والمحسسات من اختراق الجلد.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'ph5_citrate_buffer\')">pH5 Citrate Buffer</span> alongside 5% Dexpanthenol to stimulate natural skin enzymes responsible for building the protective barrier and preventing allergens from penetrating.' 
        },
        patient_benefit: { 
            ar: 'يقلل من حساسية الجلد وتفاعله مع العوامل الخارجية، يوفر ترطيباً طويل الأمد لمدة 24 ساعة، ويترك البشرة ناعمة ومرنة.', 
            en: 'Reduces skin sensitivity and reactivity to external factors, provides 24h long-lasting hydration, and leaves skin soft and resilient.' 
        },
        active_ingredients: [
            { name: 'Dexpanthenol (5%)', concentration: 'Active | فعال', role: { ar: 'ترميم وتجديد سطح البشرة.', en: 'Repairing and regenerating skin surface.' } },
            { name: 'pH5 Citrate Buffer', concentration: 'Balancing | معادل', role: { ar: 'تقوية المناعة الطبيعية للجلد.', en: 'Strengthening skin\'s natural immunity.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (يفضل بعد الاستحمام).', en: 'Daily (preferably post-shower).' },
        step_in_routine: { ar: 'ترطيب وحماية الجسم.', en: 'Body hydration and protection.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك بلطف على بشرة الجسم حتى يمتص بالكامل.', en: 'Massage gently onto body skin until fully absorbed.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['زيت استحمام pH5 Shower Oil.'], en: ['pH5 Shower Oil.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة، المعرضة للحساسية بسهولة، والعناية اليومية للجلد الرقيق.', en: 'Sensitive skin, easily allergy-prone skin, and daily care for delicate skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يوجد منه نسخة Light (سريعة الامتصاص) ونسخة Rich (مغذية أكثر). آمن للأطفال.', en: 'Available in Light (fast-absorbing) and Rich (more nourishing) versions. Safe for children.' }
    }
});

// [35] EUCERIN PH5 SHOWER OIL 400 ML
deepProductsList.push({
    id: 'euc_ph5_shower_oil', brandId: 'eucerin', familyId: 'ph5', brand: 'Eucerin',
    name: { ar: 'بي إتش 5 (زيت الاستحمام الواقي)', en: 'pH5 Shower Oil' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.0 (يحترم إنزيمات الجلد)', en: '5.0 (Respects skin enzymes)' },
        mechanism: { 
            ar: 'غسول زيتي غني بزيوت العناية الطبيعية (53٪) لتكوين درع دهني واقي أثناء الاستحمام، مع <span class="glossary-term" onclick="openGlossary(\'ph5_citrate_buffer\')">نظام توازن pH5</span> لمنع جفاف البشرة حتى مع الاستحمام المتكرر.', 
            en: 'Oil cleanser rich in natural caring oils (53%) to form a protective lipid shield during bathing, with <span class="glossary-term" onclick="openGlossary(\'ph5_citrate_buffer\')">pH5 Citrate Buffer</span> to prevent drying even with frequent showering.' 
        },
        patient_benefit: { 
            ar: 'ينظف بلطف شديد ويعوض نقص الدهون المفقودة بالماء، ويترك البشرة الحساسة ناعمة كالحرير دون الشعور بالشد.', 
            en: 'Ultra-gently cleanses and replenishes lipids lost to water, leaving sensitive skin silky soft without tightness.' 
        },
        active_ingredients: [
            { name: 'Natural Caring Oils (53%)', concentration: 'Rich | غني', role: { ar: 'ترطيب عميق وحماية الغلاف المائي الدهني.', en: 'Deep hydration and protecting the hydrolipidic film.' } },
            { name: 'pH5 Citrate Buffer', concentration: 'Balancing | معادل', role: { ar: 'الحفاظ على مرونة البشرة.', en: 'Maintaining skin resilience.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً أثناء الاستحمام.', en: 'Daily during shower.' },
        step_in_routine: { ar: 'تنظيف الجسم للبشرة الحساسة.', en: 'Body cleansing for sensitive skin.' },
        routine_step_number: 1,
        application: { ar: 'يُدلك على بشرة مبللة (سيتحول الزيت إلى مستحلب أبيض خفيف)، ثم يُشطف.', en: 'Massage onto wet skin (oil transforms into a light white emulsion), then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['اللوف الخشن.'], en: ['Harsh loofahs.'] }, 
            best_mixed_with: { ar: ['لوشن pH5 Body Lotion.'], en: ['pH5 Body Lotion.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة جداً، الجافة، حساسية ما بعد الاستحمام، والاستحمام المتكرر.', en: 'Highly sensitive skin, dry skin, post-shower allergies, and frequent showering.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يجب الحذر لأنه قد يجعل حوض الاستحمام زلقاً.', en: 'Caution: may make the bathtub slippery.' }
    }
});

// [36] EUCERIN UREA SMOOTHING FACE CREAM 5% 50 ML
deepProductsList.push({
    id: 'euc_urea_face_cream_5', brandId: 'eucerin', familyId: 'urea_repair', brand: 'Eucerin',
    name: { ar: 'يوريا-ريبير (كريم الوجه المنعم 5% يوريا)', en: 'UreaRepair Smoothing Face Cream 5% Urea' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'مرطب وجه علاجي خفيف وسريع الامتصاص، يعتمد على 5% يوريا مع اللاكتات (Lactate) لجذب الرطوبة وربطها بالطبقة القرنية للوجه، مع تقشير ميكروبيولوجي للقشور الجافة.', 
            en: 'Light, fast-absorbing therapeutic face moisturizer, relying on 5% Urea and Lactate to attract and bind moisture to the facial stratum corneum, with micro-exfoliation for dry flakes.' 
        },
        patient_benefit: { 
            ar: 'يرطب بشرة الوجه الجافة والمشدودة فوراً، يزيل القشور السطحية، ويعيد النعومة والراحة للوجه.', 
            en: 'Instantly hydrates dry, tight facial skin, removes surface flakes, and restores softness and comfort to the face.' 
        },
        active_ingredients: [
            { name: 'Urea 5%', concentration: 'Active | فعال', role: { ar: 'الترطيب العميق للوجه دون سد المسام.', en: 'Deep facial hydration without clogging pores.' } },
            { name: 'Lactate (Lactic Acid derivative)', concentration: 'NMF', role: { ar: 'تعزيز الاحتفاظ بالرطوبة وتنعيم السطح.', en: 'Enhancing moisture retention and surface smoothing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'ترطيب الوجه العلاجي.', en: 'Therapeutic face hydration.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك برفق على وجه وعنق نظيفين.', en: 'Massage gently onto clean face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['الوضع المباشر حول العينين.'], en: ['Direct application around the eyes.'] }, 
            best_mixed_with: { ar: ['أساس ممتاز للمكياج.', 'واقي شمس للوجه.'], en: ['Excellent makeup base.', 'Facial sunscreen.'] } 
        }
    },
    precautions: {
        indications: { ar: 'جفاف الوجه الشديد، القشور، الصدفية في الوجه، والجلد المشدود.', en: 'Severe facial dryness, flakes, facial psoriasis, and tight skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من العطور والملونات لتقليل فرص التحسس.', en: 'Fragrance and colorant-free to minimize allergy risks.' }
    }
});

// [37] EUCERIN EVEN PIGMENT PERFECTOR SPOT CORRECTOR 5 ML
deepProductsList.push({
    id: 'euc_even_pigment_spot', brandId: 'eucerin', familyId: 'even_pigment', brand: 'Eucerin',
    name: { ar: 'إيفن بيجمنت (مصحح البقع الموضعي)', en: 'Even Pigment Perfector Spot Corrector' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'علاج موضعي عالي الدقة، يحتوي على أعلى تركيز مسموح به من <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">الثياميدول</span>، يعمل مباشرة على البقعة الداكنة لتثبيط التيروزيناز وإيقاف إنتاج الميلانين في تلك المنطقة فقط.', 
            en: 'High-precision topical treatment, containing the highest permissible concentration of <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">Thiamidol</span>, acting directly on the dark spot to inhibit tyrosinase and stop melanin production only in that area.' 
        },
        patient_benefit: { 
            ar: 'يتلاشى البقع الداكنة الصغيرة (مثل آثار الحبوب أو النمش أو بقع العمر) بدقة متناهية وسرعة، ويمنع تحولها إلى تصبغات دائمة.', 
            en: 'Fades small dark spots (like acne marks, freckles, or age spots) with pinpoint accuracy and speed, preventing them from becoming permanent.' 
        },
        active_ingredients: [
            { name: 'Thiamidol', concentration: 'Max Concentration | تركيز أقصى', role: { ar: 'علاج جذري للبقعة المستهدفة.', en: 'Radical treatment for the targeted spot.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً (صباحاً أو مساءً).', en: 'Once daily (AM or PM).' },
        step_in_routine: { ar: 'علاج موضعي مركز.', en: 'Targeted intensive treatment.' },
        routine_step_number: 2,
        application: { ar: 'يُطبق مباشرة وحصرياً على البقعة الداكنة باستخدام الرأس الإسفنجي الدقيق.', en: 'Apply directly and exclusively to the dark spot using the precision sponge tip.' },
        layering: { 
            do_not_mix_with: { ar: ['توزيعه على كامل الوجه.'], en: ['Distributing over the entire face.'] }, 
            best_mixed_with: { ar: ['سيروم وكريم إيفن بيجمنت (مع مراعاة حد الـ 4 تطبيقات للثياميدول).'], en: ['Even Pigment Serum and Cream (minding the 4x Thiamidol limit).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البقع العمرية الفردية، آثار الحبوب الداكنة المحددة، والنمش المتفرق.', en: 'Individual age spots, specific dark acne marks, and scattered freckles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تصميم قلم (Pen) يضمن عدم تطبيق المادة المفتحة على الجلد الطبيعي المحيط بالبقعة.', en: 'Pen design ensures the brightening agent is not applied to normal skin surrounding the spot.' }
    }
});

// [38] EUCERIN EVEN PIGMENT PERFECTOR DAY CREAM SPF30 50 ML
deepProductsList.push({
    id: 'euc_even_pigment_day', brandId: 'eucerin', familyId: 'even_pigment', brand: 'Eucerin',
    name: { ar: 'إيفن بيجمنت (كريم النهار للتفتيح SPF 30)', en: 'Even Pigment Perfector Day Cream SPF 30' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يدمج <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">الثياميدول</span> مع فلاتر UVA/UVB لتوفير حماية نهارية مزدوجة: يعالج التصبغات الحالية ويمنع الشمس من تنشيط تصبغات جديدة.', 
            en: 'Integrates <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">Thiamidol</span> with UVA/UVB filters to provide dual daytime protection: treats existing pigmentation and prevents sun from activating new ones.' 
        },
        patient_benefit: { 
            ar: 'مرطب نهاري متكامل؛ يفتح الكلف والبقع، يوفر حماية من الشمس، ويعطي البشرة نضارة وتوحيداً تدريجياً للونها.', 
            en: 'Comprehensive day moisturizer; brightens melasma and spots, provides sun protection, and gives the skin radiance and gradual tone evening.' 
        },
        active_ingredients: [
            { name: 'Thiamidol', concentration: 'Active | فعال', role: { ar: 'تقليل إنتاج الميلانين نهاراً.', en: 'Reducing daytime melanin production.' } },
            { name: 'UVA/UVB Filters', concentration: 'SPF 30', role: { ar: 'الوقاية من شيخوخة وتصبغ الشمس.', en: 'Prevention of sun aging and pigmentation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً في الصباح.', en: 'Daily in the morning.' },
        step_in_routine: { ar: 'كريم نهار علاجي وحماية.', en: 'Therapeutic day cream and protection.' },
        routine_step_number: 4,
        application: { ar: 'يُدلك بلطف على وجه ورقبة نظيفين، متجنباً منطقة العين.', en: 'Massage gently onto clean face and neck, avoiding the eye area.' },
        layering: { 
            do_not_mix_with: { ar: ['تخطي الحد الأقصى لتطبيقات الثياميدول (4 مرات يومياً).'], en: ['Exceeding the max Thiamidol applications limit (4 times daily).'] }, 
            best_mixed_with: { ar: ['سيروم Even Pigment المزدوج (يوضع قبله).'], en: ['Even Pigment Dual Serum (applied beforehand).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الكلف، البقع الداكنة، اللون الباهت، والوقاية اليومية لذوي البشرة المعرضة للتصبغ.', en: 'Melasma, dark spots, dull tone, and daily prevention for pigmentation-prone skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قد لا يكفي كواقي شمس للتعرض المباشر الطويل (يحتاج لواقي أقوى فوقه).', en: 'May not be sufficient as SPF for long direct sun exposure (requires stronger SPF on top).' }
    }
});
// ==========================================
// 📦 بلوك رقم (32): يوسيرين (الشيخوخة المتقدمة، التفتيح الليلي، والمرطبات المصاحبة)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. تحديث العائلات ومصطلحات القاموس الجديدة ---

let eucerinBrandUpdate4 = brandsList.find(b => b.id === 'eucerin');
if (eucerinBrandUpdate4) {
    if (!eucerinBrandUpdate4.families.find(f => f.id === 'dermo_densifyer')) {
        eucerinBrandUpdate4.families.push({ id: 'dermo_densifyer', name: { ar: 'ديرمو-دينسيفاير (لزيادة كثافة البشرة)', en: 'DermoDensifyer (Redensifying)' } });
    }
}

glossaryDict['apiaceae_peptides'] = {
    title: { ar: 'ببتيدات الفصيلة الخيمية (Apiaceae Peptides) 🌱', en: 'Apiaceae Peptides 🌱' },
    desc: { 
        ar: 'ببتيدات نشطة مستخلصة من نباتات اليانسون، تعمل على تقوية الروابط بين ألياف الكولاجين والإيلاستين في طبقة الأدمة، مما يعيد بناء الأنسجة الضامة ويزيد من كثافة الجلد المترهل.', 
        en: 'Active peptides extracted from Anise plants that strengthen the connections between collagen and elastin fibers in the dermis, rebuilding connective tissue and redensifying sagging skin.' 
    }
};

glossaryDict['symsitive'] = {
    title: { ar: 'سيمسيتيف (SymSitive) 🛡️', en: 'SymSitive 🛡️' },
    desc: { 
        ar: 'مكون نشط سريع المفعول يعمل كمنظم لحساسية الجلد. يهدئ ألياف الأعصاب السطحية فوراً لتقليل الإحساس بالوخز، الحرقان، والشد في البشرة شديدة التفاعل.', 
        en: 'A fast-acting active ingredient acting as a skin sensitivity regulator. Instantly calms superficial nerve fibers to reduce stinging, burning, and tightness in highly reactive skin.' 
    }
};

// --- 2. المنتجات العميقة (Deep Products) ---

// [39] EUCERIN ANTI-AGE DERMO DENSIFYER DAY CREAM 50 ML
deepProductsList.push({
    id: 'euc_dermo_densifyer_day', brandId: 'eucerin', familyId: 'dermo_densifyer', brand: 'Eucerin',
    name: { ar: 'ديرمو-دينسيفاير (كريم النهار لكثافة البشرة)', en: 'Anti-Age Dermo Densifyer Day Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستهدف ترقق الجلد الناتج عن التغيرات الهرمونية بانقطاع الطمث. يدمج <span class="glossary-term" onclick="openGlossary(\'arctiin\')">الأركتين</span> لتسريع الكولاجين و <span class="glossary-term" onclick="openGlossary(\'apiaceae_peptides\')">ببتيدات Apiaceae</span> لتقوية الأنسجة الضامة، مع فلاتر SPF 15.', 
            en: 'Targets skin thinning caused by post-menopausal hormonal changes. Integrates <span class="glossary-term" onclick="openGlossary(\'arctiin\')">Arctiin</span> to accelerate collagen and <span class="glossary-term" onclick="openGlossary(\'apiaceae_peptides\')">Apiaceae Peptides</span> to strengthen connective tissues, with SPF 15.' 
        },
        patient_benefit: { 
            ar: 'يعيد بناء كثافة الجلد الرقيق والمتجعد، يحسن مرونته بشكل كبير، ويعطي الوجه مظهراً مشدوداً وأكثر سماكة وشباباً.', 
            en: 'Rebuilds density in thin, wrinkled skin, significantly improves elasticity, and gives the face a tighter, thicker, and more youthful appearance.' 
        },
        active_ingredients: [
            { name: 'Arctiin + Apiaceae Peptides', concentration: 'Active | فعال', role: { ar: 'زيادة سماكة الأدمة وتدعيم شبكة الكولاجين.', en: 'Increasing dermis thickness and supporting the collagen network.' } },
            { name: 'UVA/UVB Filters', concentration: 'SPF 15', role: { ar: 'منع تكسر الكولاجين الضوئي.', en: 'Preventing photo-collagen degradation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (كل صباح).', en: 'Daily (Every morning).' },
        step_in_routine: { ar: 'كريم النهار المعالج.', en: 'Therapeutic day cream.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك على الوجه والرقبة والصدر بحركات تصاعدية خفيفة.', en: 'Massage onto face, neck, and décolleté in light upward strokes.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم Hyaluron-Filler Elasticity 3D.'], en: ['Hyaluron-Filler Elasticity 3D Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'ترقق البشرة (Thinning skin)، فقدان الكثافة والمرونة، والتجاعيد العميقة المرتبطة بانقطاع الطمث.', en: 'Thinning skin, loss of density and elasticity, and deep post-menopausal wrinkles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام غني يمتص بسرعة، يعتبر درعاً ممتازاً للبشرة الهشة.', en: 'Rich texture that absorbs quickly, considered an excellent shield for fragile skin.' }
    }
});

// [40] EUCERIN ANTI-AGE DERMO DENSIFYER NIGHT CREAM 50 ML
deepProductsList.push({
    id: 'euc_dermo_densifyer_night', brandId: 'eucerin', familyId: 'dermo_densifyer', brand: 'Eucerin',
    name: { ar: 'ديرمو-دينسيفاير (كريم الليل لكثافة البشرة)', en: 'Anti-Age Dermo Densifyer Night Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يحتوي على نفس المركبات النشطة (Arctiin & Apiaceae Peptides) مع إضافة الديكسبانثينول (Dexpanthenol) لدعم عملية تجديد الخلايا والتعافي التي تحدث طبيعياً أثناء النوم.', 
            en: 'Contains the same active compounds (Arctiin & Apiaceae Peptides) with added Dexpanthenol to support the cell regeneration and recovery process that occurs naturally during sleep.' 
        },
        patient_benefit: { 
            ar: 'يغذي البشرة الناضجة ليلاً، يصلح حاجز الجلد التالف، وتستيقظ المريضة ببشرة أكثر راحة، تماسكاً، وكثافة.', 
            en: 'Nourishes mature skin at night, repairs the damaged skin barrier, and the patient wakes up with more comforted, firmer, and denser skin.' 
        },
        active_ingredients: [
            { name: 'Arctiin + Apiaceae Peptides', concentration: 'Core | أساسي', role: { ar: 'تسريع تجديد شبكة الكولاجين.', en: 'Accelerating collagen network renewal.' } },
            { name: 'Dexpanthenol', concentration: 'Repairing | مرمم', role: { ar: 'ترميم الأنسجة وزيادة الترطيب الليلي.', en: 'Tissue repair and increasing nocturnal hydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily PM.' },
        step_in_routine: { ar: 'كريم الليل المعالج.', en: 'Therapeutic night cream.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على وجه ورقبة نظيفين بعد السيروم.', en: 'Apply to clean face and neck after serum.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['زيت Elasticity + Filler Facial Oil لزيادة التغذية.'], en: ['Elasticity + Filler Facial Oil for extra nourishment.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الشيخوخة المتقدمة، الجلد الهش المفتقر للمرونة، واحتياجات التغذية الليلية.', en: 'Advanced aging, fragile skin lacking elasticity, and nocturnal nutritional needs.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره وتأكيد ملاءمته حتى للبشرة الحساسة جداً.', en: 'Tested and proven highly compatible even with very sensitive skin.' }
    }
});

// [41] EUCERIN EVEN PIGMENT PERFECTOR NIGHT CREAM 50 ML
deepProductsList.push({
    id: 'euc_even_pigment_night', brandId: 'eucerin', familyId: 'even_pigment', brand: 'Eucerin',
    name: { ar: 'إيفن بيجمنت (كريم الليل لتفتيح البشرة)', en: 'Even Pigment Perfector Night Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعمل أثناء الليل (ذروة تجدد الخلايا) مستخدماً <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">الثياميدول</span> لوقف إنتاج الميلانين، والديكسبانثينول لدعم الترميم الخلوي وتعزيز تجدد الجلد.', 
            en: 'Works overnight (peak cell renewal) using <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">Thiamidol</span> to halt melanin production, and Dexpanthenol to support cellular repair and enhance skin turnover.' 
        },
        patient_benefit: { 
            ar: 'يفتح البقع الداكنة بشكل تدريجي ومستدام أثناء النوم، يعيد إشراقة الوجه، ويصلح أضرار الأشعة التي حدثت نهاراً.', 
            en: 'Gradually and sustainably lightens dark spots during sleep, restores facial radiance, and repairs ray damage occurred during the day.' 
        },
        active_ingredients: [
            { name: 'Thiamidol', concentration: 'Active | فعال', role: { ar: 'علاج الكلف وتوحيد اللون من الجذور.', en: 'Treating melasma and evening tone from the roots.' } },
            { name: 'Dexpanthenol', concentration: 'Healing | شافي', role: { ar: 'تجديد خلايا البشرة أثناء النوم.', en: 'Renewing skin cells during sleep.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily PM.' },
        step_in_routine: { ar: 'كريم التفتيح الليلي.', en: 'Night brightening cream.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك بلطف على وجه ورقبة نظيفين. (تذكر ألا تتجاوز 4 تطبيقات للثياميدول يومياً).', en: 'Massage gently onto clean face and neck. (Remember not to exceed 4 Thiamidol applications/day).' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول عالي التركيز في نفس الوقت لتجنب التحسس.'], en: ['High concentration retinol simultaneously to avoid sensitivity.'] }, 
            best_mixed_with: { ar: ['سيروم Even Pigment Dual Serum (تُدهش النتائج عند دمجهما).'], en: ['Even Pigment Dual Serum (results are astonishing when combined).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الكلف، تصبغات ما بعد الالتهاب، بهتان البشرة، والنمش.', en: 'Melasma, post-inflammatory hyperpigmentation, dullness, and freckles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من المقشرات القاسية، مما يجعله آمناً للاستخدام اليومي المستمر.', en: 'Free of harsh exfoliants, making it safe for continuous daily use.' }
    }
});

// [42] EUCERIN SUN FLUID ANTI AGE SPF 50 50 ML
deepProductsList.push({
    id: 'euc_sun_anti_age_fluid', brandId: 'eucerin', familyId: 'sun_care', brand: 'Eucerin',
    name: { ar: 'صن فلويد أنتي-إيدج (واقي شمس سائل للتجاعيد)', en: 'Sun Fluid Photoaging Control SPF 50' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يحمي من التلف الخلوي بفضل (Advanced Spectral Technology)، ويعالج التجاعيد الموجودة باستخدام حمض الهيالورونيك عالي ومنخفض الوزن الجزيئي الذي يتغلغل لملء الخطوط.', 
            en: 'Protects against cellular damage via (Advanced Spectral Technology), and treats existing wrinkles using High & Low MW Hyaluronic Acid that penetrates to plump lines.' 
        },
        patient_benefit: { 
            ar: 'يمنع الشيخوخة الضوئية، يقلل التجاعيد العميقة بشكل ملحوظ، ويوفر حماية مكثفة بقوام سائل خفيف لا يترك أثراً.', 
            en: 'Prevents photoaging, visibly reduces deep wrinkles, and provides intense protection with a light fluid texture leaving no trace.' 
        },
        active_ingredients: [
            { name: 'Broad Spectrum Filters + Licochalcone A', concentration: 'SPF 50', role: { ar: 'حماية فائقة من UVA/UVB و HEVIS.', en: 'Supreme protection against UVA/UVB & HEVIS.' } },
            { name: 'Hyaluronic Acid', concentration: 'Dual Weight | وزن مزدوج', role: { ar: 'ترطيب عميق وتقليل عمق التجاعيد.', en: 'Deep hydration and reducing wrinkle depth.' } },
            { name: 'Glycyrrhetinic Acid', concentration: 'Repairing | مرمم', role: { ar: 'دعم إصلاح DNA الخلايا المتضررة.', en: 'Supporting DNA repair of damaged cells.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (تجديد كل ساعتين تحت الشمس).', en: 'Daily (reapply every 2h under sun).' },
        step_in_routine: { ar: 'حماية وعناية نهارية (الخطوة 4).', en: 'Day protection and care (Step 4).' },
        routine_step_number: 4,
        application: { ar: 'تُرج العبوة جيداً ويوزع السائل بسخاء على الوجه والرقبة.', en: 'Shake well and distribute fluid generously over face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['مجموعة Hyaluron-Filler كروتين مكافحة شيخوخة متكامل.'], en: ['Hyaluron-Filler range as a complete anti-aging routine.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الوقاية من التجاعيد، البشرة الناضجة، والحاجة لواقي شمس خفيف غير دهني.', en: 'Wrinkle prevention, mature skin, and need for a light non-greasy SPF.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يسد المسام ومناسب كقاعدة للمكياج.', en: 'Non-comedogenic and suitable as a makeup base.' }
    }
});

// [43] EUCERIN HYALURON FILLER ELASTICITY DAY CREAM SPF15 50 ML
deepProductsList.push({
    id: 'euc_elasticity_day_spf15', brandId: 'eucerin', familyId: 'elasticity', brand: 'Eucerin',
    name: { ar: 'هيالورون-فيلر إلاستيستي (كريم نهار لمرونة البشرة)', en: 'Hyaluron-Filler + Elasticity Day Cream SPF 15' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'صمم لتعزيز بنية البشرة؛ <span class="glossary-term" onclick="openGlossary(\'arctiin\')">الأركتين</span> يحفز الكولاجين، والسلبين المريمي (Silymarin) يحمي من تدهوره، وحمض الهيالورونيك يملأ التجاعيد. (الإصدارات الحديثة قد تحتوي على الثياميدول لبقع العمر).', 
            en: 'Designed to reinforce skin structure; <span class="glossary-term" onclick="openGlossary(\'arctiin\')">Arctiin</span> stimulates collagen, Silymarin protects against its degradation, and HA plumps wrinkles. (Newer versions may contain Thiamidol for age spots).' 
        },
        patient_benefit: { 
            ar: 'يحسن مرونة الجلد بشكل جذري، يملأ أعمق التجاعيد، يعزز إشراقة البشرة، ويحميها من التلف الضوئي اليومي بفضل SPF15.', 
            en: 'Radically improves skin elasticity, plumps deepest wrinkles, boosts skin radiance, and protects against daily photo-damage via SPF15.' 
        },
        active_ingredients: [
            { name: 'Arctiin + Silymarin', concentration: 'Firming Complex | مركب شد', role: { ar: 'زيادة متانة ومرونة الجلد.', en: 'Increasing skin firmness and elasticity.' } },
            { name: 'Hyaluronic Acid', concentration: 'High & Low MW', role: { ar: 'الترطيب العميق والنفخ.', en: 'Deep hydration and plumping.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً (يومياً).', en: 'Morning (Daily).' },
        step_in_routine: { ar: 'كريم النهار المعالج.', en: 'Therapeutic day cream.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك على الوجه والرقبة والصدر بحركات تصاعدية.', en: 'Massage onto face, neck, and décolleté in upward strokes.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم Elasticity 3D Serum.'], en: ['Elasticity 3D Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'فقدان مرونة الجلد، التجاعيد العميقة، جفاف البشرة الناضجة، والبهتان.', en: 'Loss of skin elasticity, deep wrinkles, mature skin dryness, and dullness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'ملمس ناعم كالحرير لا يسد المسام.', en: 'Silky smooth texture that does not clog pores.' }
    }
});

// [44] EUCERIN HYALURON FILLER ELASTICITY NIGHT CREAM 50 ML
deepProductsList.push({
    id: 'euc_elasticity_night', brandId: 'eucerin', familyId: 'elasticity', brand: 'Eucerin',
    name: { ar: 'هيالورون-فيلر إلاستيستي (كريم الليل لمرونة البشرة)', en: 'Hyaluron-Filler + Elasticity Night Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يغذي البشرة الناضجة ليلاً باستخدام (الأركتين والسيليمارين) لدعم الكولاجين، وحمض الهيالورونيك لملء الخطوط، مع زيت الأرجان (Argan Oil) الغني لترميم طبقة الليبيدات أثناء النوم.', 
            en: 'Nourishes mature skin at night using (Arctiin & Silymarin) to support collagen, HA to plump lines, with rich Argan Oil to repair the lipid layer during sleep.' 
        },
        patient_benefit: { 
            ar: 'يعمل طوال الليل لترميم الحاجز الجلدي، يشد البشرة المترهلة، ويعطي الوجه ملمساً ناعماً ومريحاً في الصباح.', 
            en: 'Works overnight to repair the skin barrier, tightens sagging skin, and gives the face a smooth, comfortable feel in the morning.' 
        },
        active_ingredients: [
            { name: 'Arctiin + Silymarin', concentration: 'Active | فعال', role: { ar: 'تجديد الكولاجين ومنع تكسره.', en: 'Renewing collagen and preventing breakdown.' } },
            { name: 'Argan Oil + Panthenol', concentration: 'Nourishing | مغذي', role: { ar: 'تعويض الدهون المفقودة ودعم التعافي الليلي.', en: 'Replenishing lost lipids and supporting night recovery.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily PM.' },
        step_in_routine: { ar: 'كريم الليل المعالج للشيخوخة.', en: 'Anti-aging night cream.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على وجه نظيف ومجفف كخطوة أخيرة في الروتين.', en: 'Apply to clean, dried face as the final routine step.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['زيت Elasticity + Filler Facial Oil (يمكن خلط قطرة معه).'], en: ['Elasticity + Filler Facial Oil (can mix a drop with it).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الترهل الشديد، البشرة الجافة والناضجة جداً، والتجاعيد العميقة المحفورة.', en: 'Severe sagging, very dry and mature skin, and deeply entrenched wrinkles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام غني جداً (Rich Balm) يعطي إحساساً بالتغليف والحماية.', en: 'Very rich balm texture giving a feeling of envelopment and protection.' }
    }
});

// [45] EUCERIN HYALURON FILLER WRINKLE DAY 50 ML
deepProductsList.push({
    id: 'euc_hyaluron_wrinkle_day', brandId: 'eucerin', familyId: 'hyaluron_filler', brand: 'Eucerin',
    name: { ar: 'هيالورون-فيلر (كريم النهار للتجاعيد)', en: 'Hyaluron-Filler Day Cream SPF 15' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'تركيبة ثلاثية المفعول (يملأ، يحفز، يحمي): يملأ التجاعيد بحمض الهيالورونيك، ويحفزه بـ <span class="glossary-term" onclick="openGlossary(\'glycine_saponin\')">الجلايسين سابونين</span>، ويحمي من تكسره بواسطة (Enoxolone) وفلاتر SPF 15.', 
            en: 'Triple-action formula (Plumps, Stimulates, Defends): plumps wrinkles with HA, stimulates it via <span class="glossary-term" onclick="openGlossary(\'glycine_saponin\')">Glycine Saponin</span>, and defends against degradation via Enoxolone and SPF 15.' 
        },
        patient_benefit: { 
            ar: 'يملأ التجاعيد الظاهرة والدقيقة بشكل ملحوظ، يحمي من شيخوخة الشمس، ويمنح البشرة ترطيباً ناعماً طوال اليوم.', 
            en: 'Visibly plumps fine and apparent wrinkles, protects against sun-aging, and grants skin smooth hydration all day.' 
        },
        active_ingredients: [
            { name: 'High & Low MW Hyaluronic Acid', concentration: 'Active | فعال', role: { ar: 'الترطيب السطحي والملء العميق.', en: 'Surface hydration and deep plumping.' } },
            { name: 'Glycine Saponin + Enoxolone', concentration: 'Protecting | حامي', role: { ar: 'تحفيز الهيالورونيك وتقليل تدهوره.', en: 'Stimulating HA and reducing its degradation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً (كل يوم).', en: 'Morning (Daily).' },
        step_in_routine: { ar: 'كريم النهار وحماية أساسية.', en: 'Day cream and basic protection.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك على الوجه والرقبة. متوفر بنسختين (للبشرة الجافة، وللبشرة العادية/المختلطة).', en: 'Massage onto face and neck. Available in two versions (for Dry skin, and for Normal/Combi skin).' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم Moisture Booster (لتكثيف الترطيب المائي).'], en: ['Moisture Booster Serum (to intensify water hydration).'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد الأولية، الخطوط الرفيعة، الجفاف، وبداية فقدان مرونة الجلد.', en: 'Initial wrinkles, fine lines, dryness, and early loss of skin elasticity.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مثالي لمن هم في أواخر العشرينات والثلاثينات لبدء روتين مكافحة الشيخوخة.', en: 'Ideal for those in their late 20s and 30s to start an anti-aging routine.' }
    }
});

// [46] EUCERIN DERMO PURIFYER HYDRATING CARE ADJUNCTIVE 50 ML
deepProductsList.push({
    id: 'euc_dermopurifyer_adjunctive', brandId: 'eucerin', familyId: 'dermopurifyer', brand: 'Eucerin',
    name: { ar: 'ديرموبيوريفاير (المرطب الملطف المصاحب للعلاج)', en: 'DermoPurifyer Adjunctive Soothing Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'صُمم خصيصاً كعلاج مصاحب لأدوية حب الشباب المجففة (مثل الروكوتان). يستخدم <span class="glossary-term" onclick="openGlossary(\'symsitive\')">سيمسيتيف</span> لتهدئة لسعات الجلد، السيراميد لترميم الحاجز، وليكوتشالكون A لتقليل الاحمرار العنيف.', 
            en: 'Designed specifically as an adjunctive care for drying acne meds (like Accutane). Uses <span class="glossary-term" onclick="openGlossary(\'symsitive\')">SymSitive</span> to calm skin stinging, Ceramides to repair the barrier, and Licochalcone A to reduce violent redness.' 
        },
        patient_benefit: { 
            ar: 'يخفف الآثار الجانبية للعلاجات الطبية القاسية؛ يزيل الجفاف الشديد، التقشر، الإحساس بالحرقان، ويعيد للجلد راحته ومرونته.', 
            en: 'Alleviates side effects of harsh medical treatments; removes severe dryness, flaking, burning sensation, and restores skin comfort and suppleness.' 
        },
        active_ingredients: [
            { name: 'Ceramides', concentration: 'Repairing | مرمم', role: { ar: 'إعادة بناء طبقة الدهون الواقية وتقليل التبخر.', en: 'Rebuilding the protective lipid layer and reducing evaporation.' } },
            { name: 'SymSitive + Licochalcone A', concentration: 'Soothing | مهدئ', role: { ar: 'تهدئة فورية لألياف الأعصاب والالتهاب.', en: 'Instant calming of nerve fibers and inflammation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً (أو كلما شعرت بالشد).', en: 'Morning and Evening (or whenever tightness is felt).' },
        step_in_routine: { ar: 'الترطيب التعويضي.', en: 'Compensatory hydration.' },
        routine_step_number: 3,
        application: { ar: 'يوزع بلطف تام على الوجه (لا يُفرك بقوة لأن البشرة تكون هشة جداً).', en: 'Distribute very gently on the face (do not rub hard as skin is extremely fragile).' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات أو أي منتجات تحتوي على أحماض أو كحول.'], en: ['Exfoliants or any products containing acids or alcohol.'] }, 
            best_mixed_with: { ar: ['أدوية الأيزوتريتينوين (Isotretinoin) الفموية.'], en: ['Oral Isotretinoin medications.'] } 
        }
    },
    precautions: {
        indications: { ar: 'جفاف البشرة الشديد والتهيج الناتج عن أدوية حب الشباب (الطبية).', en: 'Severe skin dryness and irritation induced by medical acne treatments.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يسد المسام ويتحكم بلمعان البشرة بشكل متوازن.', en: 'Non-comedogenic and controls skin shine in a balanced way.' }
    }
});
// ==========================================
// 📦 بلوك رقم (33): يوسيرين (الختام - Volume-Lift وتكملة العناية المتخصصة)
// متوافق 100% مع واجهة Dashboard Layout السريرية
// ==========================================

// --- 1. تحديث العائلات ومصطلحات القاموس الجديدة ---

let eucerinBrandUpdate5 = brandsList.find(b => b.id === 'eucerin');
if (eucerinBrandUpdate5) {
    if (!eucerinBrandUpdate5.families.find(f => f.id === 'volume_lift')) {
        eucerinBrandUpdate5.families.push({ id: 'volume_lift', name: { ar: 'فوليوم-ليفت (لاستعادة حجم وشد البشرة)', en: 'Volume-Lift (Restoring Volume & Contours)' } });
    }
}

glossaryDict['magnolol'] = {
    title: { ar: 'ماجنولول (Magnolol) 🌸', en: 'Magnolol 🌸' },
    desc: { 
        ar: 'مستخلص نشط من لحاء شجرة الماغنوليا. يعمل على تحفيز زيادة حجم وعدد الخلايا المكونة للحجم في طبقات الجلد العميقة، مما يعيد الامتلاء للمناطق الغائرة.', 
        en: 'An active extract from Magnolia bark. It stimulates the increase in size and number of volume-giving cells in the deep skin layers, restoring plumpness to sunken areas.' 
    }
};

glossaryDict['oligo_peptides_eucerin'] = {
    title: { ar: 'أوليجو ببتيدات (Oligo Peptides) 🧬', en: 'Oligo Peptides 🧬' },
    desc: { 
        ar: 'ببتيدات مستخلصة من اليانسون، تقوي شبكة الكولاجين وتحفز تجدده، مما يشد الجلد المترهل ويدعم هيكل الوجه.', 
        en: 'Peptides extracted from Anise that strengthen the collagen network and stimulate its renewal, firming sagging skin and supporting facial structure.' 
    }
};

// --- 2. المنتجات العميقة (Deep Products) ---

// [47] EUCERIN HYALURON-FILLER + VOLUME-LIFT DAY CREAM 50 ML
deepProductsList.push({
    id: 'euc_volume_lift_day', brandId: 'eucerin', familyId: 'volume_lift', brand: 'Eucerin',
    name: { ar: 'فوليوم-ليفت (كريم النهار لاستعادة الحجم)', en: 'Hyaluron-Filler + Volume-Lift Day Cream SPF 15' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستهدف الطبقات الثلاث للجلد المترهل: <span class="glossary-term" onclick="openGlossary(\'magnolol\')">الماجنولول</span> يزيد حجم الخلايا، و <span class="glossary-term" onclick="openGlossary(\'oligo_peptides_eucerin\')">الأوليجو ببتيدات</span> تدعم الكولاجين، وحمض الهيالورونيك يرطب السطح لتقليل التجاعيد، مع حماية SPF 15.', 
            en: 'Targets the 3 layers of sagging skin: <span class="glossary-term" onclick="openGlossary(\'magnolol\')">Magnolol</span> increases cell volume, <span class="glossary-term" onclick="openGlossary(\'oligo_peptides_eucerin\')">Oligo Peptides</span> support collagen, and HA hydrates the surface to reduce wrinkles, with SPF 15.' 
        },
        patient_benefit: { 
            ar: 'يعيد تعريف ملامح الوجه المترهلة (مثل الخدود)، يملأ التجاويف العميقة، ويشد البشرة بقوة لتبدو أصغر سناً.', 
            en: 'Redefines sagging facial contours (like cheeks), plumps deep hollows, and powerfully firms the skin for a younger look.' 
        },
        active_ingredients: [
            { name: 'Magnolol', concentration: 'Volumizing | مكثف للحجم', role: { ar: 'تكبير الخلايا لاستعادة امتلاء الوجه.', en: 'Enlarging cells to restore facial plumpness.' } },
            { name: 'Oligo Peptides', concentration: 'Firming | شد', role: { ar: 'تقوية الأنسجة الضامة.', en: 'Strengthening connective tissues.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً (كل يوم).', en: 'Morning (Daily).' },
        step_in_routine: { ar: 'كريم النهار المعالج.', en: 'Therapeutic day cream.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك بحركات تصاعدية ثابتة لتعزيز تأثير الشد.', en: 'Massage with firm upward strokes to enhance the lifting effect.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم Hyaluron-Filler Moisture Booster.'], en: ['Hyaluron-Filler Moisture Booster Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'فقدان الحجم في الخدود، ترهل ملامح الوجه، وتعمق خطوط الابتسامة.', en: 'Volume loss in cheeks, sagging facial contours, and deepening smile lines.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يتوفر بنسخة للبشرة الجافة وأخرى للعادية/المختلطة.', en: 'Available in versions for Dry skin and Normal/Combi skin.' }
    }
});

// [48] EUCERIN HYALURON-FILLER + VOLUME-LIFT NIGHT CREAM 50 ML
deepProductsList.push({
    id: 'euc_volume_lift_night', brandId: 'eucerin', familyId: 'volume_lift', brand: 'Eucerin',
    name: { ar: 'فوليوم-ليفت (كريم الليل لاستعادة الحجم)', en: 'Hyaluron-Filler + Volume-Lift Night Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يحتوي على (الماجنولول والأوليجو ببتيدات وحمض الهيالورونيك) مع إضافة الديكسبانثينول (Dexpanthenol) لتحفيز تجدد الخلايا والتعافي العميق أثناء النوم.', 
            en: 'Contains (Magnolol, Oligo Peptides, HA) with the addition of Dexpanthenol to stimulate cell renewal and deep recovery during sleep.' 
        },
        patient_benefit: { 
            ar: 'يعمل طوال الليل على ترميم الأنسجة المترهلة. تستيقظ المريضة بوجه ممتلئ، مشدود، ومرتاح.', 
            en: 'Works overnight to repair sagging tissues. Patient wakes up with a plump, firm, and rested face.' 
        },
        active_ingredients: [
            { name: 'Magnolol + Oligo Peptides', concentration: 'Active | فعال', role: { ar: 'إعادة الهيكلة والشد الليلي.', en: 'Nocturnal restructuring and lifting.' } },
            { name: 'Dexpanthenol', concentration: 'Regenerating | مجدد', role: { ar: 'دعم الإصلاح الخلوي.', en: 'Supporting cellular repair.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily PM.' },
        step_in_routine: { ar: 'كريم الليل المعالج.', en: 'Therapeutic night cream.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على وجه ورقبة نظيفين بعد السيروم.', en: 'Apply to clean face and neck after serum.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'الترهل الواضح، فقدان الكثافة الحجمية ليلاً، والبشرة الناضجة.', en: 'Visible sagging, nighttime volume loss, and mature skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مناسب لجميع أنواع البشرة. يغذي بفعالية دون سد المسام.', en: 'Suitable for all skin types. Nourishes effectively without clogging pores.' }
    }
});

// [49] EUCERIN DERMOPURIFYER SCRUB 100 ML
deepProductsList.push({
    id: 'euc_dermopurifyer_scrub', brandId: 'eucerin', familyId: 'dermopurifyer', brand: 'Eucerin',
    name: { ar: 'ديرموبيوريفاير (مقشر الوجه لحب الشباب)', en: 'DermoPurifyer Scrub' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي', en: 'Physiological' },
        mechanism: { 
            ar: 'مقشر ميكانيكي خالي من الزيوت يحتوي على حمض اللاكتيك (Lactic Acid) وجزيئات دقيقة تصقل السطح دون إيذاء الجلد، لتنظيف المسام وإزالة الرؤوس السوداء.', 
            en: 'Oil-free mechanical scrub containing Lactic Acid and micro-particles that refine the surface without damaging the skin, unclogging pores and removing blackheads.' 
        },
        patient_benefit: { 
            ar: 'يزيل الجلد الميت والشوائب العميقة، يقلل الرؤوس السوداء بشكل ملحوظ، ويحسن ملمس البشرة الدهنية.', 
            en: 'Removes dead skin and deep impurities, visibly reduces blackheads, and improves oily skin texture.' 
        },
        active_ingredients: [
            { name: 'Lactic Acid', concentration: 'Active | فعال', role: { ar: 'إذابة الروابط بين الخلايا الميتة.', en: 'Dissolving bonds between dead cells.' } },
            { name: 'Micro-Particles', concentration: 'Exfoliating | مقشر', role: { ar: 'إزالة الشوائب ميكانيكياً.', en: 'Mechanically removing impurities.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين أسبوعياً.', en: '1 to 2 times a week.' },
        step_in_routine: { ar: 'تنظيف أسبوعي عميق.', en: 'Weekly deep cleansing.' },
        routine_step_number: 1,
        application: { ar: 'يُدلك بلطف على وجه مبلل بحركات دائرية ثم يُشطف.', en: 'Massage gently on a wet face with circular motions, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك على الحبوب الملتهبة النشطة.', 'علاجات الروكوتان.'], en: ['Rubbing on active inflamed acne.', 'Accutane treatments.'] }, 
            best_mixed_with: { ar: ['تونر DermoPurifyer بعده لإغلاق المسام.'], en: ['DermoPurifyer Toner afterwards to close pores.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الرؤوس السوداء، المسام المسدودة، وتراكم الشوائب.', en: 'Blackheads, clogged pores, and impurity buildup.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'صُمم ليكون لطيفاً ولا يسبب خدوشاً دقيقة (Micro-tears).', en: 'Designed to be gentle and not cause micro-tears.' }
    }
});

// [50] EUCERIN ATOPICONTROL FACE CREAM 50 ML
deepProductsList.push({
    id: 'euc_atopicontrol_face', brandId: 'eucerin', familyId: 'atopicontrol', brand: 'Eucerin',
    name: { ar: 'أتوبي-كونترول (كريم الوجه للإكزيما)', en: 'AtopiControl Face Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'مصمم خصيصاً للوجه الرقيق. يدمج 12% من زيوت الأوميجا 6 مع <span class="glossary-term" onclick="openGlossary(\'licochalcone_a\')">ليكوتشالكون A</span> لتهدئة التهاب واحمرار الوجه الناتج عن الإكزيما وترميم حاجزه.', 
            en: 'Designed specifically for the delicate face. Integrates 12% Omega-6 oils with <span class="glossary-term" onclick="openGlossary(\'licochalcone_a\')">Licochalcone A</span> to soothe eczema-induced facial inflammation/redness and repair its barrier.' 
        },
        patient_benefit: { 
            ar: 'يوفر راحة فورية للوجه المشدود والمتقشر، يخفف الحكة والاحمرار، ويطيل فترة الهدوء بين النوبات.', 
            en: 'Provides instant comfort for tight, flaky faces, relieves itching and redness, and prolongs the calm period between flare-ups.' 
        },
        active_ingredients: [
            { name: 'Omega-6 (Evening Primrose Oil)', concentration: '12%', role: { ar: 'ترميم حاجز دهون الوجه.', en: 'Repairing facial lipid barrier.' } },
            { name: 'Licochalcone A', concentration: 'Soothing | مهدئ', role: { ar: 'إيقاف التهاب الوجه.', en: 'Stopping facial inflammation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'ترطيب الوجه الأساسي.', en: 'Core facial hydration.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك برفق على الوجه والرقبة بعد تنظيفهما.', en: 'Massage gently onto cleansed face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم Acute Care (أثناء النوبات الشديدة جداً).'], en: ['Acute Care Cream (during very severe flare-ups).'] } 
        }
    },
    precautions: {
        indications: { ar: 'إكزيما الوجه، الاحمرار الشديد، جفاف وتوسف الوجه، ومرضى التهاب الجلد التأتبي.', en: 'Facial eczema, severe redness, facial dryness/desquamation, and atopic dermatitis patients.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن للرضع والأطفال. يعمل كقاعدة ممتازة للمكياج للبشرة المريضة.', en: 'Safe for babies and children. Acts as an excellent makeup base for diseased skin.' }
    }
});
// ==========================================
// 📚 ملحق القاموس الطبي (Glossary) الإضافي - يوسيرين
// ==========================================

window.glossaryDict['glycyrrhetinic_acid'] = {
    title: { ar: 'حمض الجليسيريتينيك (Enoxolone) 🧬', en: 'Glycyrrhetinic Acid 🧬' },
    desc: { 
        ar: 'مستخلص نشط من جذور عرق السوس الصينية. يدعم ويعزز الآلية الطبيعية لإصلاح الحمض النووي (DNA) في خلايا الجلد التالفة جراء التعرض للأشعة فوق البنفسجية، مما يمنع الشيخوخة الضوئية.', 
        en: 'An active extract from Chinese licorice roots. It supports and enhances the skin\'s natural DNA repair mechanism for cells damaged by UV rays, preventing photoaging.' 
    }
};

window.glossaryDict['ampho_tensides'] = {
    title: { ar: 'مؤثرات سطحية مذبذبة (Ampho-Tensides) 🫧', en: 'Ampho-Tensides 🫧' },
    desc: { 
        ar: 'نظام تنظيف فائق اللطف وخالٍ من الصابون، يخفض التوتر السطحي للماء ليزيل الدهون والأوساخ بفعالية دون تجريد البشرة من زيوتها الطبيعية أو إحداث خلل في الحاجز الجلدي.', 
        en: 'An ultra-mild, soap-free cleansing system that lowers water surface tension to effectively remove sebum and dirt without stripping natural oils or disrupting the skin barrier.' 
    }
};

window.glossaryDict['l_carnitine_tech'] = {
    title: { ar: 'تقنية الكارنيتين (L-Carnitine Tech) ⚖️', en: 'L-Carnitine Technology ⚖️' },
    desc: { 
        ar: 'حمض أميني طبيعي يتم توظيفه في مستحضرات يوسيرين لتنظيم الإفرازات الدهنية بيولوجياً من داخل المسام، حيث يسرع من عملية استقلاب وحرق الأحماض الدهنية في الخلايا.', 
        en: 'A natural amino acid utilized in Eucerin formulas to biologically regulate sebum production from within the pores, by accelerating the metabolism and burning of fatty acids in cells.' 
    }
};

window.glossaryDict['ceramide_3'] = {
    title: { ar: 'سيراميد-3 (Ceramide-3) 🧱', en: 'Ceramide-3 🧱' },
    desc: { 
        ar: 'جزيئات دهنية متطابقة مع تلك الموجودة طبيعياً في الجلد (تمثل 50% من دهون البشرة). تعمل كالإسمنت الذي يربط خلايا الجلد ببعضها لسد التشققات ومنع تبخر الماء، وهي حجر الزاوية لعلاج الإكزيما.', 
        en: 'Lipid molecules identical to those naturally found in skin (representing 50% of skin lipids). Acts as the mortar binding skin cells together to seal cracks and prevent water evaporation, a cornerstone for eczema treatment.' 
    }
};

window.glossaryDict['dexpanthenol'] = {
    title: { ar: 'ديكسبانثينول (Pro-Vitamin B5) 🌿', en: 'Dexpanthenol (Pro-Vitamin B5) 🌿' },
    desc: { 
        ar: 'فيتامين نشط يتحول داخل الجلد إلى حمض البانتوثينيك. يحفز تجديد الخلايا الليفية وينشط عملية التئام الجروح والتعافي السريع للجلد المتهيج والمتقشر.', 
        en: 'An active vitamin that converts into Pantothenic acid in the skin. It stimulates fibroblast regeneration and activates wound healing and rapid recovery of irritated, flaky skin.' 
    }
};
