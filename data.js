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
