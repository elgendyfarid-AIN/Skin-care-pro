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

// --- إضافات التريكات الطبية للقاموس ---
window.glossaryDict['sandwich_tech'] = {
    title: { ar: 'تقنية الساندويتش 🥪', en: 'Sandwich Technique 🥪' },
    desc: { 
        ar: 'وضع طبقة من مرطب خفيف، ثم وضع المادة الفعالة القوية (كالمقشرات أو الريتينول)، ثم طبقة أخرى من المرطب، وذلك لتقليل الامتصاص السريع ومنع تهيج الحاجز الجلدي.', 
        en: 'Applying a light moisturizer, then the potent active ingredient (like exfoliants or retinol), followed by another layer of moisturizer to buffer rapid absorption and prevent irritation.' 
    }
};

window.glossaryDict['sixty_sec_rule'] = {
    title: { ar: 'قاعدة الـ 60 ثانية ⏱️', en: '60-Second Rule ⏱️' },
    desc: { 
        ar: 'تدليك الغسول العلاجي على البشرة لمدة 60 ثانية كاملة للسماح للمواد الفعالة (مثل الزنك أو حمض الساليسيليك) باختراق المسام والعمل بفعالية قبل شطفها بالماء.', 
        en: 'Massaging the therapeutic cleanser into the skin for a full 60 seconds to allow active ingredients (like Zinc or Salicylic acid) to penetrate pores and act effectively before rinsing.' 
    }
};

window.glossaryDict['skin_cycling'] = {
    title: { ar: 'تدوير العناية (Skin Cycling) 🔄', en: 'Skin Cycling 🔄' },
    desc: { 
        ar: 'جدول عناية مسائي يمتد لـ 4 أيام: ليلة للتقشير، ليلة للريتينول، وليلتين للترطيب والترميم فقط، لتجنب إرهاق الحاجز الجلدي.', 
        en: 'A 4-night PM skincare schedule: Exfoliation night, Retinol night, followed by two recovery (hydration) nights, to completely avoid compromising the skin barrier.' 
    }
};

window.glossaryDict['short_contact'] = {
    title: { ar: 'العلاج بالاتصال القصير ⏱️', en: 'Short Contact Therapy ⏱️' },
    desc: { 
        ar: 'وضع المادة الفعالة القوية (كالأحماض) على البشرة لبضع دقائق فقط ثم غسلها، للحصول على الفائدة وتجنب التهيج أو الحرق الكيميائي.', 
        en: 'Applying a potent active (like acids) to the skin for just a few minutes then washing it off, to reap the benefits while completely avoiding irritation or chemical burns.' 
    }
};

window.glossaryDict['slugging'] = {
    title: { ar: 'حبس الترطيب (Slugging) 🐌', en: 'Slugging 🐌' },
    desc: { 
        ar: 'وضع طبقة سميكة من مرهم عازل (مثل سيكابلاست أو فازلين) كخطوة أخيرة في روتين المساء لحبس الرطوبة ومنع تبخر الماء، وتسريع عملية التئام الجلد أثناء النوم.', 
        en: 'Applying a thick layer of an occlusive ointment as the final step in the PM routine to lock in moisture, prevent water loss, and accelerate healing overnight.' 
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
// 🧪 3. المنتجات السريرية لـ La Roche-Posay (من 1 إلى 6)
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
            ar: 'لا يعالج الحبة فحسب، بل يمنع تكونها من الأساس. يقطع دورة حياة الحبة الحمراء ويمنعها من التحول إلى بقعة بنية عنيدة بعد جفافها.', 
            en: 'Does not just treat the pimple, it prevents its formation. Stops red pimples from turning into stubborn brown marks.' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: '4%', role: { ar: 'مضاد للالتهاب ويهدئ الاحمرار.', en: 'Anti-inflammatory, soothes redness.' } },
            { name: 'LHA', concentration: '0.3%', role: { ar: 'مقشر <span class="glossary-term" onclick="openGlossary(\'lha\')">LHA</span> يخترق المسام بلطف لتنظيفها.', en: 'A <span class="glossary-term" onclick="openGlossary(\'lha\')">LHA</span> exfoliator that gently penetrates and cleanses pores.' } },
            { name: 'Salicylic Acid', concentration: '0.5%', role: { ar: 'يعمل بخاصية <span class="glossary-term" onclick="openGlossary(\'keratolytic\')">تحلل القرنية</span> لتنظيف المسام.', en: 'Provides <span class="glossary-term" onclick="openGlossary(\'keratolytic\')">Keratolytic</span> action to deeply cleanse pores.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يُستخدم مرة واحدة مساءً (أو مرتين إذا تحملت البشرة).', en: 'Use once daily PM (or twice if tolerated).' },
        expected_duration: { ar: 'كورس متواصل لا يقل عن 4 أسابيع لتنظيف المسام وتقليل التصبغات بشكل ملموس.', en: 'A continuous course of at least 4 weeks to clear pores and visibly reduce pigmentation.' },
        step_in_routine: { ar: 'خطوة العلاج (بعد الغسول).', en: 'Treatment Step (After cleanser).' },
        routine_step_number: 2,
        application: { ar: 'توزع طبقة رقيقة على كامل الوجه، لا يستخدم كنقطة علاجية فقط لضمان تنظيف المسام الخفية.', en: 'Apply a thin layer over the entire face. Do not use as a spot treatment only.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات كيميائية قوية (AHA/BHA)', 'الريتينول'], en: ['Strong chemical exfoliants (AHA/BHA)', 'Retinol'] }, 
            best_mixed_with: { ar: ['غسول لطيف', 'مرمّمات الحاجز (Ceramides)'], en: ['Gentle cleansers', 'Barrier repair creams'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب الخفيف إلى المتوسط، الرؤوس السوداء، والآثار الحمراء بعد الحبوب.', en: 'Mild to moderate acne, blackheads, and post-acne red marks.' },
        pregnancy_safe: false, sun_sensitivity: true, child_safe: false, 
        notes: { ar: 'لتجنب الجفاف والوخز في الأيام الأولى، استخدمي <span class="glossary-term" onclick="openGlossary(\'sandwich_tech\')">تقنية الساندويتش</span> مع مرطب خالي من الزيوت.', en: 'To avoid initial dryness and tingling, use the <span class="glossary-term" onclick="openGlossary(\'sandwich_tech\')">Sandwich Technique</span> with an oil-free moisturizer.' }
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
            ar: 'يترك البشرة نظيفة تماماً وينظم إفراز الدهون دون أن يترك شعوراً بشد البشرة المزعج الذي يدمر الحاجز الجلدي.', 
            en: 'Leaves skin perfectly clean and regulates sebum without a tight feeling that damages the skin barrier.' 
        },
        active_ingredients: [
            { name: 'Zinc PCA', concentration: 'Active | فعال', role: { ar: 'ينظم إفراز الزهم وله خصائص مضادة للبكتيريا.', en: 'Regulates sebum production with antibacterial properties.' } },
            { name: 'Thermal Spring Water', concentration: 'Base | أساسي', role: { ar: 'مياه حرارية مهدئة ومضادة للتهيج.', en: 'Soothing and anti-irritating thermal water.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (Morning and Evening).' },
        expected_duration: { ar: 'يمكن الاستمرار عليه كجزء من الروتين اليومي.', en: 'Can be continued as part of the daily routine.' },
        step_in_routine: { ar: 'الخطوة 1 (التنظيف).', en: 'Step 1 (Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'يُرغى بماء فاتر ويُدلك بلطف مطبقاً <span class="glossary-term" onclick="openGlossary(\'sixty_sec_rule\')">قاعدة الـ 60 ثانية</span>، ثم يُشطف بماء بارد لغلق المسام.', en: 'Lather with lukewarm water and massage gently applying the <span class="glossary-term" onclick="openGlossary(\'sixty_sec_rule\')">60-Second Rule</span>, then rinse with cool water to close pores.' },
        layering: { 
            do_not_mix_with: { ar: ['فرش التنظيف القاسية (تُهيج الغدد الدهنية).'], en: ['Harsh cleansing brushes (irritates sebaceous glands).'] }, 
            best_mixed_with: { ar: ['إيفاكلار ديو (+)', 'مضادات الأكسدة نهاراً'], en: ['Effaclar Duo (+)', 'Daytime Antioxidants'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، المعرضة لحب الشباب، واللمعان الزائد.', en: 'Oily, acne-prone skin, and excess shine.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false, 
        notes: { ar: 'المبالغة في غسل البشرة الدهنية لأكثر من مرتين يومياً يؤدي إلى نتيجة عكسية؛ حيث تُفرز الغدد دهوناً مضاعفة لتعويض الجفاف.', en: 'Over-washing oily skin more than twice a day backfires; glands produce double the sebum to compensate for dryness.' }
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
            ar: 'يستهدف حب الشباب لدى البالغين الذي يترك تصبغات وتجاعيد دقيقة معاً. يوفر تأثيراً مشابهاً للتقشير الكيميائي الخفيف.', 
            en: 'Targets adult acne which leaves pigmentation and fine wrinkles together. Provides an effect similar to a light chemical peel.' 
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
        expected_duration: { ar: 'كورس علاج من 4 إلى 8 أسابيع لتخفيف التصبغات وتحسين الملمس.', en: 'Treatment course of 4 to 8 weeks to fade pigmentation and improve texture.' },
        step_in_routine: { ar: 'خطوة السيروم (قبل المرطب).', en: 'Serum step (Before moisturizer).' },
        routine_step_number: 2,
        application: { ar: 'توضع قطرات على الوجه مع تجنب محيط العينين. يُفضل إدخاله ضمن روتين <span class="glossary-term" onclick="openGlossary(\'skin_cycling\')">تدوير العناية</span> في ليالي التقشير.', en: 'Apply drops to the face avoiding the eye contour. Best introduced within a <span class="glossary-term" onclick="openGlossary(\'skin_cycling\')">Skin Cycling</span> routine on exfoliation nights.' },
        layering: { 
            do_not_mix_with: { ar: ['أي مقشرات أخرى', 'الريتينول', 'فيتامين سي النقي'], en: ['Any other exfoliants', 'Retinol', 'Pure Vitamin C'] }, 
            best_mixed_with: { ar: ['مرطب إيفاكلار إتش (للتوازن)', 'واقي شمس (إجباري)'], en: ['Effaclar H moisturizer (for balance)', 'SPF (Mandatory)'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب لدى البالغين، المسام الواسعة، التصبغات العنيدة.', en: 'Adult acne, enlarged pores, persistent pigmentation.' },
        pregnancy_safe: false, sun_sensitivity: true, child_safe: false, 
        notes: { ar: 'إذا كانت البشرة حساسة جداً للأحماض، طبقي السيروم لمدة 15 دقيقة ثم اغسليه معتمداً على <span class="glossary-term" onclick="openGlossary(\'short_contact\')">العلاج بالاتصال القصير</span>.', en: 'If the skin is highly acid-sensitive, apply the serum for 15 minutes then wash it off, relying on <span class="glossary-term" onclick="openGlossary(\'short_contact\')">Short Contact Therapy</span>.' }
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
            ar: 'راحة فورية من الجفاف والتشقق الشديد الناتج عن أدوية الحبوب (مثل الأيزوتريتينوين الفموي) دون التسبب في سد المسام.', 
            en: 'Instant relief from severe dryness and cracking caused by oral acne meds (like Isotretinoin) without clogging pores.' 
        },
        active_ingredients: [
            { name: 'Aqua Posae Filiformis', concentration: 'Active | فعال', role: { ar: 'إعادة توازن البكتيريا النافعة.', en: 'Rebalancing beneficial bacteria.' } },
            { name: 'Niacinamide + Panthenol', concentration: 'High | عالي', role: { ar: 'ترميم وتقليل الالتهاب.', en: 'Repair and inflammation reduction.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        expected_duration: { ar: 'يستمر استخدامه طوال فترة أدوية حب الشباب المجففة.', en: 'Continues throughout the duration of drying acne medications.' },
        step_in_routine: { ar: 'الترطيب.', en: 'Moisturization.' },
        routine_step_number: 3,
        application: { ar: 'يوضع بلطف على بشرة نظيفة. يعمل كقاعدة ممتازة لتقنية <span class="glossary-term" onclick="openGlossary(\'slugging\')">حبس الترطيب</span> الخفيف فوق العلاجات القوية.', en: 'Apply gently to clean skin. Works as an excellent base for light <span class="glossary-term" onclick="openGlossary(\'slugging\')">Slugging</span> over strong treatments.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد تعارضات خطيرة.'], en: ['No severe interactions.'] }, 
            best_mixed_with: { ar: ['أدوية حب الشباب الموصوفة كمعوض للجفاف.'], en: ['Prescription acne meds to compensate for dryness.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة المعرضة للحبوب والتي أضعفتها العلاجات المجففة.', en: 'Acne-prone skin weakened by drying treatments.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false, 
        notes: { ar: 'بالرغم من قوامه المرطب الغني جداً لعلاج الجفاف، إلا أن تركيبته مصممة خصيصاً لكي لا تسد المسام أو تحفز ظهور حبوب جديدة إطلاقاً.', en: 'Despite its very rich moisturizing texture for dryness, its formula is specifically designed not to clog pores or trigger new breakouts at all.' }
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
            ar: 'يستهدف بفعالية حب الشباب الشديد على الوجه والجسم (الظهر والصدر)، ويساهم في تقليل آثار الحبوب المتبقية بشكل ملحوظ.', 
            en: 'Effectively targets severe acne on face and body (back/chest), contributing to a noticeable reduction in residual acne marks.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid (BHA)', concentration: '2%', role: { ar: 'فتح المسام وتقشير عميق.', en: 'Unclogging pores and deep exfoliation.' } },
            { name: 'LHA', concentration: '0.05%', role: { ar: 'تقشير سطحي ناعم.', en: 'Gentle surface exfoliation.' } },
            { name: 'Zinc PCA', concentration: 'Active | فعال', role: { ar: 'تقليل اللمعان والبكتيريا.', en: 'Reducing shine and bacteria.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً.', en: 'Once daily.' },
        expected_duration: { ar: 'يُستخدم من 4 إلى 8 أسابيع لتخفيف حبوب الجسم بشكل كبير.', en: 'Use for 4 to 8 weeks to significantly reduce body acne.' },
        step_in_routine: { ar: 'التنظيف العلاجي.', en: 'Therapeutic Cleansing.' },
        routine_step_number: 1,
        application: { ar: 'يترك على مناطق حبوب الجسم لمدة دقيقتين قبل الشطف لتطبيق مفهوم <span class="glossary-term" onclick="openGlossary(\'short_contact\')">العلاج بالاتصال القصير</span>.', en: 'Leave on body acne areas for 2 minutes before rinsing to apply the <span class="glossary-term" onclick="openGlossary(\'short_contact\')">Short Contact Therapy</span> concept.' },
        layering: { 
            do_not_mix_with: { ar: ['أحماض تقشير إضافية قوية.'], en: ['Additional strong peeling acids.'] }, 
            best_mixed_with: { ar: ['إيفاكلار ديو (+)', 'مرطبات خفيفة.'], en: ['Effaclar Duo (+)', 'Light moisturizers.'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب الشديد، حبوب الظهر والصدر.', en: 'Severe acne, back and chest acne.' },
        pregnancy_safe: false, sun_sensitivity: true, child_safe: false, 
        notes: { ar: 'ممتاز للاستخدام المباشر في الاستحمام بعد التمارين الرياضية الكثيفة لمنع تكدس العرق والدهون المسببة لحبوب الجسم (Bacne).', en: 'Excellent for immediate shower use after intense workouts to prevent the buildup of sweat and sebum that causes body acne (Bacne).' }
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
            ar: 'بمثابة ضمادة سائلة متعددة الأغراض. يعالج الجفاف الشديد، التشققات، الحروق السطحية، وتهيج الليزر في أيام معدودة.', 
            en: 'Acts as a multi-purpose liquid bandage. Treats severe dryness, cracks, superficial burns, and laser irritation in days.' 
        },
        active_ingredients: [
            { name: 'Panthenol (B5)', concentration: '5%', role: { ar: 'ترطيب عميق وتهدئة فورية للحكة.', en: 'Deep hydration and instant itch relief.' } },
            { name: 'Madecassoside', concentration: 'Active | فعال', role: { ar: 'تسريع التئام الجروح وتجديد الخلايا.', en: 'Accelerates wound healing and cell renewal.' } },
            { name: 'Zinc & Manganese', concentration: 'Active | فعال', role: { ar: 'مضاد للبكتيريا لمنع تلوث المنطقة المتضررة.', en: 'Antibacterial to prevent infection of the damaged area.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً، أو عند الحاجة.', en: 'Twice daily, or as needed.' },
        expected_duration: { ar: 'من 3 إلى 7 أيام لترميم الجلد التالف بالكامل.', en: '3 to 7 days to fully repair damaged skin.' },
        step_in_routine: { ar: 'الخطوة الأخيرة (للترميم الموضعي أو كمرطب ليلي).', en: 'Final step (for targeted repair or as night cream).' },
        routine_step_number: 3,
        application: { ar: 'توضع طبقة سميكة. يُعتبر مثالياً كطبقة عازلة في الخطوة الأخيرة ليلاً لتطبيق مبدأ <span class="glossary-term" onclick="openGlossary(\'slugging\')">حبس الترطيب (Slugging)</span>.', en: 'Apply a thick layer. Ideal as an occlusive layer in the final night step to apply the <span class="glossary-term" onclick="openGlossary(\'slugging\')">Slugging</span> concept.' },
        layering: { 
            do_not_mix_with: { ar: ['يُمنع وضعه على الجروح المفتوحة التي تنزف بقوة.'], en: ['Do not apply on heavily bleeding, open wounds.'] }, 
            best_mixed_with: { ar: ['غسول لطيف', 'فوق الريتينول أو المقشرات لتقليل التهيج.'], en: ['Gentle cleansers', 'Over retinol or exfoliants to reduce irritation.'] } 
        }
    },
    precautions: {
        indications: { ar: 'بعد جلسات الليزر، التقشير الكيميائي، طفح الحفاض، التشققات الشتوية، الإكزيما الجافة.', en: 'Post-laser, chemical peels, diaper rash, winter cracks, dry eczema.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true, 
        notes: { ar: 'آمن تماماً للأطفال والرضع (من اليوم الأول للولادة). الإصدار الجديد (+) يمتص أسرع ولا يترك طبقة بيضاء مزعجة.', en: 'Completely safe for babies and children (from day one). The new (+) version absorbs faster and leaves no annoying white cast.' }
    }
});
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
        en: 'A pure extract from Centella Asiatica that accelerates skin healing, so soothe inflammation, and powerfully stimulates cell renewal.' 
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

// --- التريكات وتقنيات التطبيق الخاصة ---
window.glossaryDict['patting_tech'] = {
    title: { ar: 'التربيت اللطيف (Patting) ✋', en: 'Gentle Patting ✋' },
    desc: { 
        ar: 'وضع الكريم عن طريق الطبطبة الخفيفة بأطراف الأصابع بدلاً من الفرك القوي، لتجنب إثارة الأوعية الدموية الدقيقة وتهيج البشرة الحساسة.', 
        en: 'Applying cream by light tapping with fingertips instead of harsh rubbing, to avoid irritating micro-capillaries in sensitive skin.' 
    }
};

window.glossaryDict['waterless_cleansing'] = {
    title: { ar: 'التنظيف الجاف (Waterless Cleansing) 💧', en: 'Waterless Cleansing 💧' },
    desc: { 
        ar: 'مسح الغسول بقطنة برفق دون شطفه بالماء، وهي طريقة مثالية لمن يعانون من حساسية تجاه الكلور أو الأملاح القاسية الموجودة في مياه الصنبور.', 
        en: 'Wiping the cleanser off gently with a cotton pad without rinsing, ideal for those sensitive to chlorine or hard minerals in tap water.' 
    }
};

window.glossaryDict['two_finger_rule'] = {
    title: { ar: 'قاعدة الإصبعين (Two-Finger Rule) ✌️', en: 'Two-Finger Rule ✌️' },
    desc: { 
        ar: 'استخدام كمية من الواقي الشمسي تعادل طول إصبعي السبابة والوسطى معاً، لضمان الحصول على التغطية الكاملة وعامل الحماية (SPF) المكتوب على العبوة.', 
        en: 'Applying an amount of sunscreen equal to the length of the index and middle fingers combined, ensuring full SPF coverage as stated on the bottle.' 
    }
};

window.glossaryDict['lip_slugging'] = {
    title: { ar: 'حبس الترطيب للشفاه (Lip Slugging) 👄', en: 'Lip Slugging 👄' },
    desc: { 
        ar: 'وضع طبقة سميكة من مرهم عازل ومجدد على الشفاه كخطوة أخيرة قبل النوم، لحبس الرطوبة بداخلها وتسريع التئام التشققات العميقة طوال الليل.', 
        en: 'Applying a thick layer of an occlusive ointment on the lips as a final bedtime step to lock in moisture and accelerate the healing of deep cracks overnight.' 
    }
};

window.glossaryDict['three_min_rule'] = {
    title: { ar: 'قاعدة الثلاث دقائق (3-Minute Rule) ⏱️', en: '3-Minute Rule ⏱️' },
    desc: { 
        ar: 'وضع المرطب العلاجي خلال أول 3 دقائق بعد الخروج من الاستحمام والجلد لا يزال رطباً بالماء، لحبس أكبر قدر من الرطوبة داخل طبقات البشرة وتخفيف الإكزيما.', 
        en: 'Applying the therapeutic moisturizer within the first 3 minutes after showering while the skin is still damp, to trap maximum water inside the skin layers.' 
    }
};

window.glossaryDict['pilling'] = {
    title: { ar: 'التكتل (Pilling) 🔴', en: 'Pilling 🔴' },
    desc: { 
        ar: 'تجمع المنتج على شكل كرات أو قشور صغيرة عند فركه بقوة على البشرة، أو عند وضعه فوق منتج زيتي لم يتم امتصاصه بالكامل.', 
        en: 'The product balling up into tiny flakes when rubbed harshly on the skin, or when applied over an unabsorbed oily product.' 
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
// 🧪 3. المنتجات السريرية لـ La Roche-Posay (من 7 إلى 18)
// ==========================================

// [7] توليان ديرماليرجو كريم (Toleriane Dermallergo)
window.deepProductsList.push({
    id: 'lrp_toleriane_dermallergo', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'توليان ديرماليرجو كريم', en: 'Toleriane Dermallergo Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن بدقة (خالٍ من أي أحماض لتجنب خدش وتخريش الحاجز الجلدي الحساس)', en: 'Strictly balanced (Free of any acids to avoid scratching the sensitive skin barrier)' },
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
        expected_duration: { ar: 'يهدئ الاحمرار والوخز خلال 60 ثانية. يُستخدم بانتظام لمنع انتكاسات البشرة الحساسة.', en: 'Soothes redness and stinging within 60 seconds. Used regularly to prevent sensitive skin relapses.' },
        step_in_routine: { ar: 'خطوة الترطيب الأساسية.', en: 'Main moisturizing step.' },
        routine_step_number: 3,
        application: { ar: 'يوزع بلطف على الوجه والرقبة ومحيط العينين باستخدام <span class="glossary-term" onclick="openGlossary(\'patting_tech\')">التربيت اللطيف</span> لضمان عدم إثارة الاحمرار.', en: 'Gently distribute over face, neck, and eye contour using <span class="glossary-term" onclick="openGlossary(\'patting_tech\')">Gentle Patting</span> to ensure redness is not triggered.' },
        layering: { 
            do_not_mix_with: { ar: ['المنتجات التي تحتوي على عطور أو كحول (لتجنب انتكاس البشرة).'], en: ['Products containing fragrance or alcohol (to avoid skin relapse).'] }, 
            best_mixed_with: { ar: ['غسول توليان ديرمو-كلينزر.'], en: ['Toleriane Dermo-Cleanser.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الحساسية، المعرضة للحساسية (Allergy-prone)، البشرة التي لا تتحمل مستحضرات التجميل العادية.', en: 'Ultra-sensitive skin, allergy-prone skin, intolerant skin to standard cosmetics.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'عبوة معقمة 100% تمنع دخول الهواء والبكتيريا. آمن تماماً للاستخدام للأطفال من عمر سنتين لترطيب الوجه المتحسس.', en: '100% sterile packaging prevents air and bacteria entry. Completely safe for children from 2 years old for sensitive facial hydration.' }
    }
});

// [8] توليان غسول ديرمو-كلينزر الحليبي
window.deepProductsList.push({
    id: 'lrp_toleriane_cleanser', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'توليان غسول ديرمو-كلينزر حليبي', en: 'Toleriane Dermo-Cleanser' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (لطيف جداً ومطابق لدرجة حموضة الأغشية المخاطية للعين)', en: '5.5 (Ultra-gentle and matches the pH of ocular mucous membranes)' },
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
        expected_duration: { ar: 'استخدام يومي دائم للحفاظ على الحاجز من التدهور أثناء التنظيف.', en: 'Continuous daily use to preserve the barrier from degradation during cleansing.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف اللطيف).', en: 'Step 1 (Gentle Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'يُدلك بأطراف الأصابع بحركات دائرية، ثم يُمسح برفق بقطنة تطبيقاً لمبدأ <span class="glossary-term" onclick="openGlossary(\'waterless_cleansing\')">التنظيف الجاف</span> (أو يُشطف بالماء حسب الرغبة).', en: 'Massage with fingertips in circular motions, then wipe gently with a cotton pad applying the <span class="glossary-term" onclick="openGlossary(\'waterless_cleansing\')">Waterless Cleansing</span> concept (or rinse if preferred).' },
        layering: { 
            do_not_mix_with: { ar: ['فرش التنظيف الخشنة.'], en: ['Harsh physical cleansing brushes.'] }, 
            best_mixed_with: { ar: ['توليان ديرماليرجو كريم.'], en: ['Toleriane Dermallergo Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة التي لا تتحمل الغسول الرغوي، بعد الإجراءات التجميلية القاسية، البشرة المعرضة للوردية والاحمرار.', en: 'Skin intolerant to foaming gels, post-harsh cosmetic procedures, rosacea-prone skin.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'مريح جداً لأنه لا يحتاج إلى ماء للشطف (مفيد في حالات الحساسية من مياه الصنبور). آمن للاستخدام لحديثي الولادة والرضع.', en: 'Very comforting as it does not require water to rinse (useful for tap water sensitivity). Safe for use on newborns and infants.' }
    }
});

// [9] أنثيليوس UVMune 400 (سائل غير مرئي)
window.deepProductsList.push({
    id: 'lrp_anthelios_uvmune', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay', 
    name: { ar: 'أنثيليوس UVMune 400 (سائل غير مرئي)', en: 'Anthelios UVMune 400 Invisible Fluid' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن (مستقر لضمان عدم تحلل وتكسر فلاتر الحماية الكيميائية)', en: 'Balanced (Stable to ensure no degradation of chemical UV filters)' },
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
        expected_duration: { ar: 'حماية فورية من الحروق. الاستمرار اليومي يمنع ظهور التصبغات والشيخوخة المبكرة.', en: 'Instant burn protection. Daily continuation prevents pigmentation and premature aging.' },
        step_in_routine: { ar: 'آخر خطوة صباحية.', en: 'Last morning step.' },
        routine_step_number: 4,
        application: { ar: 'يُرج جيداً ويوضع على الوجه ومحيط العين مع الحرص على تطبيق <span class="glossary-term" onclick="openGlossary(\'two_finger_rule\')">قاعدة الإصبعين</span> لضمان الحماية الكاملة.', en: 'Shake well and apply to face and eye area, ensuring application of the <span class="glossary-term" onclick="openGlossary(\'two_finger_rule\')">Two-Finger Rule</span> for full protection.' },
        layering: { 
            do_not_mix_with: { ar: ['الزيوت الثقيلة تحته (قد تذيب فلاتر الحماية).'], en: ['Heavy oils underneath (may dissolve sun filters).'] }, 
            best_mixed_with: { ar: ['جميع السيرومات العلاجية.'], en: ['All treatment serums.'] } 
        }
    },
    precautions: {
        indications: { ar: 'جميع أنواع البشرة، البشرة شديدة التحسس للشمس، والوقاية من الكلف.', en: 'All skin types, sun-allergic skin, and melasma prevention.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'لا يسبب وخز العينين إطلاقاً (Anti-eye stinging). خالي من العطور. مناسب للبالغين والمراهقين (12+ سنة).', en: 'Absolutely no eye stinging. Fragrance-free. Suitable for adults and teenagers (12+ years).' }
    }
});

// [10] سيكابلاست لشفاه (Cicaplast Levres)
window.deepProductsList.push({
    id: 'lrp_cicaplast_lips', brandId: 'laroche', familyId: 'cicaplast', brand: 'La Roche-Posay',
    name: { ar: 'سيكابلاست لشفاه (مرمم الشفاه)', en: 'Cicaplast Lips Barrier Repair' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن ولطيف جداً', en: 'Balanced and ultra-gentle' },
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
        expected_duration: { ar: 'ترميم التشققات العميقة والنازفة خلال 48 ساعة من الاستخدام.', en: 'Repairs deep and bleeding cracks within 48 hours of use.' },
        step_in_routine: { ar: 'عناية موضعية.', en: 'Targeted care.' },
        routine_step_number: 3,
        application: { ar: 'يوضع مباشرة على الشفاه، ويعتبر مثالياً للقيام بخطوة <span class="glossary-term" onclick="openGlossary(\'lip_slugging\')">حبس الترطيب للشفاه</span> قبل النوم مباشرة.', en: 'Apply directly to lips, considered ideal for performing <span class="glossary-term" onclick="openGlossary(\'lip_slugging\')">Lip Slugging</span> right before sleep.' },
        layering: { 
            do_not_mix_with: { ar: ['التقشير القاسي للشفاه.'], en: ['Harsh lip scrubs.'] }, 
            best_mixed_with: { ar: ['علاجات الروكوتان.'], en: ['Accutane treatments.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الشفاه شديدة الجفاف والمتشققة.', en: 'Severely dry and cracked lips.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'قوام غير مرئي ولا يترك أثر دهني مزعج. آمن تماماً للأطفال والرضع الذين يعانون من تشقق الشفاه بسبب الجو البارد.', en: 'Invisible texture with no annoying greasy residue. Completely safe for infants and children with cold-induced cracked lips.' }
    }
});

// ==========================================
// 🧪 تابع المنتجات السريرية لـ La Roche-Posay (من 11 إلى 18)
// ==========================================

// [11] LA ROCHE POSAY LIPIKAR SYNDET AP+ CREAM WASH
window.deepProductsList.push({
    id: 'lrp_lipikar_syndet_ap', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار سينديت AP+ (كريم غسول مرمم)', en: 'Lipikar Syndet AP+ Cream Wash' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي (خالٍ من الصابون القلوي الذي يدمر الحاجز التأتبي الضعيف)', en: 'Physiological (Free of alkaline soap that destroys the weak atopic barrier)' },
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
        expected_duration: { ar: 'يقلل الحكة والجفاف فور الخروج من الاستحمام. يُستخدم بشكل دائم لمنع تدهور البشرة.', en: 'Reduces itch and dryness immediately after bathing. Use continuously to prevent skin degradation.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الطبي).', en: 'Step 1 (Medical Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'يدلك على بشرة مبللة (الوجه والجسم)، ثم يشطف جيداً بالماء الفاتر.', en: 'Massage onto wet skin (face and body), then rinse thoroughly with lukewarm water.' },
        layering: { 
            do_not_mix_with: { ar: ['الليفة الخشنة (تزيد الإكزيما).'], en: ['Harsh loofahs (worsens eczema).'] }, 
            best_mixed_with: { ar: ['ليبيكار بوم AP+M.'], en: ['Lipikar Baume AP+M.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الجفاف، الإكزيما التأتبية، وقشرة الرأس لدى الرضع.', en: 'Severe dryness, atopic eczema, and cradle cap in infants.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'آمن لحديثي الولادة (من اليوم الأول). يُستخدم بنجاح لغسل فروة رأس الرضيع برفق لتقليل القشرة الدهنية (قرف اللبن).', en: 'Safe for newborns (from day 1). Successfully used to gently wash baby\'s scalp to reduce cradle cap.' }
    }
});

// [12] LA ROCHE POSAY LIPIKAR LAIT UREA 5+ SHEA BUTTER
window.deepProductsList.push({
    id: 'lrp_lipikar_urea_5', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار ليت يوريا 5+ (لوشن منعم للبشرة الخشنة)', en: 'Lipikar Lait Urea 5+ Shea Butter' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'حمضي قليلاً (لتعزيز فعالية اليوريا في تقشير الكيراتين المتصلب)', en: 'Slightly acidic (To enhance Urea efficacy in exfoliating hardened keratin)' },
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
        expected_duration: { ar: 'تنعيم فوري. يقلل مشكلة جلد الوزة (KP) بشكل ملحوظ خلال 2-4 أسابيع.', en: 'Instant smoothing. Visibly reduces Keratosis Pilaris (KP) within 2-4 weeks.' },
        step_in_routine: { ar: 'ترطيب وعلاج الجسم.', en: 'Body hydration and treatment.' },
        routine_step_number: 2,
        application: { ar: 'يدلك على بشرة الجسم النظيفة، مع التركيز المكثف على المناطق الخشنة (الأذرع والأرجل).', en: 'Massage onto clean body skin, focusing heavily on rough areas (arms and legs).' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات الأحماض القوية جداً على نفس المنطقة (لمنع التحسس).'], en: ['Very strong acid exfoliants on the same area (to prevent sensitization).'] }, 
            best_mixed_with: { ar: ['غسول ليبيكار سينديت.'], en: ['Lipikar Syndet wash.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الخشنة، جفاف الشيخوخة، والتقرن الشعري (جلد الوزة).', en: 'Rough skin, senile dryness, and Keratosis Pilaris.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'لا يترك ملمساً دهنياً. مخصص للجسم فقط ومناسب للبالغين وكبار السن الذين يعانون من جفاف وتوسف شديد.', en: 'Non-greasy. For body use only, suitable for adults and elderly suffering from severe dryness and scaling.' }
    }
});

// [13] LA ROCHE POSAY LIPIKAR BAUME AP+M
window.deepProductsList.push({
    id: 'lrp_lipikar_baume_apm', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار بوم AP+M (بلسم ثلاثي المفعول)', en: 'Lipikar Baume AP+M' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن تماماً', en: 'Perfectly balanced' },
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
        expected_duration: { ar: 'يوقف الحكة فوراً. الاستخدام المستمر يباعد بشكل كبير بين نوبات الجفاف العنيف.', en: 'Stops itching instantly. Continuous use significantly spaces out severe dryness flare-ups.' },
        step_in_routine: { ar: 'الترطيب العلاجي (بعد الاستحمام).', en: 'Therapeutic hydration (post-bath).' },
        routine_step_number: 2,
        application: { ar: 'يوضع على البشرة وهي رطبة قليلاً تطبيقاً لـ <span class="glossary-term" onclick="openGlossary(\'three_min_rule\')">قاعدة الثلاث دقائق</span> لضمان امتصاص أسرع وحبس أكبر للماء.', en: 'Apply to slightly damp skin applying the <span class="glossary-term" onclick="openGlossary(\'three_min_rule\')">3-Minute Rule</span> to ensure faster absorption and trap more water.' },
        layering: { 
            do_not_mix_with: { ar: ['المنتجات العطرية القوية.'], en: ['Strong fragranced products.'] }, 
            best_mixed_with: { ar: ['جميع علاجات الطبيب للإكزيما.'], en: ['All physician-prescribed eczema treatments.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الإكزيما التأتبية، الجفاف الشديد جداً، والمواليد ذوي البشرة المتحسسة.', en: 'Atopic eczema, extreme dryness, and newborns with sensitive skin.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'آمن لحديثي الولادة من اليوم الأول. يُمتص بسرعة فائقة ولا يلتصق بالملابس رغم قوامه الغني.', en: 'Safe for newborns from day one. Absorbs ultra-fast and does not stick to clothes despite its rich texture.' }
    }
});

// [14] LA ROCHE POSAY TOLERIANE DERMALLERGO EYE CREAM
window.deepProductsList.push({
    id: 'lrp_toleriane_eye', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'توليريان ديرماليرجو للعين (كريم مهدئ)', en: 'Toleriane Dermallergo Eye Cream' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي (مطابق للدموع تماماً لمنع أي حرقان)', en: 'Physiological (Perfectly matches tears to prevent any stinging)' },
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
        expected_duration: { ar: 'يهدئ التحسس خلال دقائق معدودة. يستخدم يومياً كعناية وقائية لمحيط العين الحساس.', en: 'Soothes allergy in minutes. Used daily as preventive care for sensitive eye contours.' },
        step_in_routine: { ar: 'عناية محيط العين.', en: 'Eye contour care.' },
        routine_step_number: 2,
        application: { ar: 'يطبق بلطف شديد بـ <span class="glossary-term" onclick="openGlossary(\'patting_tech\')">التربيت اللطيف</span> حول عظمة العين دون فرك أو شد.', en: 'Apply very gently with <span class="glossary-term" onclick="openGlossary(\'patting_tech\')">Gentle Patting</span> around the orbital bone without rubbing or pulling.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول القوي تحت العين في نفس الوقت.'], en: ['Strong retinol under eyes simultaneously.'] }, 
            best_mixed_with: { ar: ['توليريان غسول حليبي.'], en: ['Toleriane milky cleanser.'] } 
        }
    },
    precautions: {
        indications: { ar: 'محيط العين الحساس، الأكزيما حول العين، والعيون المعرضة للحساسية الموسمية.', en: 'Sensitive eye contour, peri-ocular eczema, and seasonal allergy-prone eyes.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'عبوة معقمة 100% (Ultra-hermetic) تمنع دخول الملوثات. آمن للاستخدام لتهدئة جفون الأطفال (كالأكزيما الجفنية).', en: '100% Ultra-hermetic sterile packaging prevents contaminants. Safe to use for soothing children\'s eyelids (like eyelid eczema).' }
    }
});

// [15] ANTHELIOS AGE CORRECT SPF 50 (Invisible / Daily Light Cream)
window.deepProductsList.push({
    id: 'lrp_anthelios_age_correct_light', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس إيدج كوريكت (كريم تصحيح التجاعيد)', en: 'Anthelios Age Correct Daily Light Cream SPF 50' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن ليكون مريحاً للاستخدام اليومي المستمر', en: 'Balanced to be comfortable for continuous daily use' },
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
        expected_duration: { ar: 'حماية فورية من الشمس. النتائج الملموسة لتصحيح التجاعيد والبقع تظهر بعد 4 أسابيع.', en: 'Instant sun protection. Tangible results for wrinkle and spot correction appear after 4 weeks.' },
        step_in_routine: { ar: 'الخطوة الأخيرة (كواقي ومرطب معالج).', en: 'Final step (as SPF and treatment moisturizer).' },
        routine_step_number: 4,
        application: { ar: 'يوضع على كامل الوجه والرقبة قبل التعرض للشمس مع تطبيق <span class="glossary-term" onclick="openGlossary(\'two_finger_rule\')">قاعدة الإصبعين</span>.', en: 'Apply to entire face and neck before sun exposure applying the <span class="glossary-term" onclick="openGlossary(\'two_finger_rule\')">Two-Finger Rule</span>.' },
        layering: { 
            do_not_mix_with: { ar: ['المنظفات القاسية (لتجنب التحسس).'], en: ['Harsh cleansers (to avoid sensitization).'] }, 
            best_mixed_with: { ar: ['سيروم فيتامين C10 (تحته).', 'سيروم ريتينول B3 (مساءً).'], en: ['Vitamin C10 Serum (underneath).', 'Retinol B3 Serum (PM).'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد، فقدان المرونة، البقع العمرية، والبهتان الناتج عن الشمس.', en: 'Wrinkles, loss of elasticity, age spots, and sun-induced dullness.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'مناسب للبالغين فقط لاحتوائه على مواد مصححة لعلامات تقدم السن. تم اختباره طبياً ولا يسد المسام.', en: 'Suitable for adults only as it contains anti-aging correcting agents. Medically tested and non-comedogenic.' }
    }
});

// [16] ANTHELIOS AGE CORRECT SPF 50 TINTED
window.deepProductsList.push({
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
        expected_duration: { ar: 'توحيد فوري وعملي للون. يعمل على تصحيح التجاعيد بعمق خلال 4 أسابيع من الاستمرار.', en: 'Instant practical tone evening. Deeply corrects wrinkles within 4 weeks of continuation.' },
        step_in_routine: { ar: 'خطوة الحماية والتغطية.', en: 'Protection and coverage step.' },
        routine_step_number: 4,
        application: { ar: 'يوزع بالتساوي بالتربيت السريع لتجنب <span class="glossary-term" onclick="openGlossary(\'pilling\')">التكتل (Pilling)</span> وللحصول على لمسة طبيعية.', en: 'Distribute evenly with quick patting to avoid <span class="glossary-term" onclick="openGlossary(\'pilling\')">Pilling</span> and achieve a natural finish.' },
        layering: { 
            do_not_mix_with: { ar: ['كريمات الأساس الثقيلة جداً (تسبب مظهراً مكتوماً).'], en: ['Very heavy foundations (causes a cakey look).'] }, 
            best_mixed_with: { ar: ['هيالو B5 سيروم للترطيب والنفخ.'], en: ['Hyalu B5 Serum for hydration and plumping.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة غير موحدة اللون، علامات الشيخوخة، والاحتياج لتغطية خفيفة تغني عن المكياج.', en: 'Uneven skin tone, aging signs, and need for light coverage replacing makeup.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'مناسب للبالغين والمراهقين (18+). يتكيف لونه بشكل ممتاز مع درجات البشرة الحنطية والقمحية.', en: 'Suitable for adults and teens (18+). Its tint adapts excellently to medium and olive skin tones.' }
    }
});

// [17] ANTHELIOS UVMUNE 400 OIL CONTROL GEL-CREAM SPF 50+ (Clear)
window.deepProductsList.push({
    id: 'lrp_anthelios_uvmune_oil_control', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس يو في ميون 400 (للتحكم باللمعان)', en: 'Anthelios UVMune 400 Oil Control Gel-Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن ومستقر جداً', en: 'Balanced and highly stable' },
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
        expected_duration: { ar: 'مفعول مطفي ومتحكم بالدهون يستمر لـ 12 ساعة. حماية دائمة من توسع المسام.', en: 'Matte and oil-control effect lasts 12 hours. Permanent protection from pore enlargement.' },
        step_in_routine: { ar: 'الخطوة الأخيرة للبشرة الدهنية.', en: 'Final step for oily skin.' },
        routine_step_number: 4,
        application: { ar: 'يوضع بسخاء على الوجه باستخدام <span class="glossary-term" onclick="openGlossary(\'two_finger_rule\')">قاعدة الإصبعين</span>. قوامه الجل يمتص في ثوانٍ.', en: 'Apply generously to face using the <span class="glossary-term" onclick="openGlossary(\'two_finger_rule\')">Two-Finger Rule</span>. Gel texture absorbs in seconds.' },
        layering: { 
            do_not_mix_with: { ar: ['المرطبات الزيتية الكثيفة (تفسد مفعول المات).'], en: ['Heavy oily moisturizers (disrupts matte effect).'] }, 
            best_mixed_with: { ar: ['مجموعة إيفاكلار بالكامل لتنظيم الإفرازات.'], en: ['Entire Effaclar range for sebum regulation.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية والمختلطة، المسام الواسعة، واللمعان الزائد تحت الشمس.', en: 'Oily and combination skin, enlarged pores, and excess shine under sun.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'مناسب للمراهقين والبالغين (12+ سنة). لا يسبب وخز العينين (Anti-eye stinging) وخالي من العطور.', en: 'Suitable for teens and adults (12+ years). Anti-eye stinging and completely fragrance-free.' }
    }
});

// [18] ANTHELIOS UVMUNE 400 OIL CONTROL TINTED SPF 50+
window.deepProductsList.push({
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
        expected_duration: { ar: 'تغطية غير لامعة تدوم طويلاً بفضل جزيئات إيرليسيوم التي تمتص الزهم فور إفرازه.', en: 'Long-lasting matte coverage thanks to Airlicium molecules absorbing sebum instantly.' },
        step_in_routine: { ar: 'الخطوة الأخيرة (حماية + تغطية دهنية).', en: 'Final step (Protection + oily coverage).' },
        routine_step_number: 4,
        application: { ar: 'يوضع على وجه نظيف ويوزع بسرعة لتجنب <span class="glossary-term" onclick="openGlossary(\'pilling\')">التكتل</span> بفضل سرعة جفافه.', en: 'Apply to clean face and distribute quickly to avoid <span class="glossary-term" onclick="openGlossary(\'pilling\')">Pilling</span> due to its fast dry-touch finish.' },
        layering: { 
            do_not_mix_with: { ar: ['الزيوت الثقيلة.'], en: ['Heavy oils.'] }, 
            best_mixed_with: { ar: ['إيفاكلار مات مرطب كقاعدة تحته.'], en: ['Effaclar Mat moisturizer as a base underneath.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية التي تعاني من آثار الحبوب واللمعان المزعج.', en: 'Oily skin with post-acne marks and annoying shine.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'مناسب للمراهقين والبالغين ذوي البشرة الدهنية. مقاوم للتعرق المفرط ولا يترك أثراً دهنياً.', en: 'Suitable for teens and adults with oily skin. Resistant to excessive sweating and leaves no greasy film.' }
    }
});
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

window.glossaryDict['oxidation'] = {
    title: { ar: 'الأكسدة (Oxidation) 🍂', en: 'Oxidation 🍂' },
    desc: { ar: 'تفاعل المادة الفعالة (مثل فيتامين C) مع الهواء والضوء، مما يفقدها فاعليتها تدريجياً ويحول لونها للداكن.', en: 'Reaction of active ingredients (like Vit C) with air and light, gradually losing efficacy and turning dark.' }
};

window.glossaryDict['moisture_magnet'] = {
    title: { ar: 'مغناطيس الرطوبة 🧲', en: 'Moisture Magnet 🧲' },
    desc: { ar: 'قدرة حمض الهيالورونيك على جذب جزيئات الماء من الجو أو من سطح البشرة المبللة وحبسها داخل الخلايا لملء الخطوط.', en: 'The ability of Hyaluronic Acid to attract water from the environment or damp skin and lock it inside cells to plump lines.' }
};

window.glossaryDict['micellar_tech'] = {
    title: { ar: 'تقنية الميسيلار 🫧', en: 'Micellar Technology 🫧' },
    desc: { ar: 'جزيئات ذكية تعمل كالمغناطيس لالتقاط الأوساخ والدهون والمكياج وإزالتها بلطف من المسام دون الحاجة للفرك القاسي.', en: 'Smart molecules acting like magnets to capture dirt, oil, and makeup gently without harsh rubbing.' }
};

window.glossaryDict['melanin_trapper'] = {
    title: { ar: 'مصيدة الميلانين 🕸️', en: 'Melanin Trapper 🕸️' },
    desc: { ar: 'آلية التقاط طلائع صبغة الميلانين قبل أن تكتمل وتظهر على سطح الجلد كبقعة داكنة، مما يمنع التصبغ من جذوره.', en: 'Mechanism that intercepts melanin precursors before they fully form and appear as dark spots on the skin.' }
};

window.glossaryDict['spot_treatment'] = {
    title: { ar: 'العلاج النقطي 🎯', en: 'Spot Treatment 🎯' },
    desc: { ar: 'تطبيق كمية صغيرة جداً من العلاج المركز على الحبة أو البقعة فقط لتجنب جفاف وتهيج باقي مناطق الوجه السليمة.', en: 'Applying a very small amount of concentrated treatment only on the pimple or spot to avoid drying the rest of the face.' }
};

window.glossaryDict['primer_effect'] = {
    title: { ar: 'تأثير البرايمر (Primer Effect) 🎨', en: 'Primer Effect 🎨' },
    desc: { ar: 'تنعيم سطح الجلد وإطفاء اللمعان لتهيئة البشرة كقاعدة مثالية تزيد من ثبات المكياج طوال اليوم.', en: 'Smoothing skin surface and mattifying to prep it as an ideal base, increasing makeup longevity.' }
};

window.glossaryDict['anti_relapse'] = {
    title: { ar: 'مضاد للانتكاس (Anti-Relapse) 🛡️', en: 'Anti-Relapse 🛡️' },
    desc: { ar: 'استمرار فعالية العلاج لأسابيع بعد التوقف عن استخدامه، مما يمنع عودة المشكلة (كالحبوب أو التصبغات) بسرعة.', en: 'Continuous efficacy of a treatment for weeks after discontinuation, preventing quick relapse of the issue.' }
};

window.glossaryDict['lymphatic_drainage'] = {
    title: { ar: 'تصريف ليمفاوي 💆‍♀️', en: 'Lymphatic Drainage 💆‍♀️' },
    desc: { ar: 'مساج خفيف لتصريف السوائل المحتبسة تحت الجلد وتنشيط الدورة الدموية، مما يقلل الانتفاخات الصباحية والهالات الزرقاء بفعالية.', en: 'Light massage to drain trapped subcutaneous fluids and stimulate circulation, effectively reducing morning puffiness and blue dark circles.' }
};

window.glossaryDict['glove_effect'] = {
    title: { ar: 'تأثير القفاز (Glove Effect) 🧤', en: 'Glove Effect 🧤' },
    desc: { ar: 'تشكيل طبقة عازلة غير مرئية على اليدين تحميها من الجفاف والماء والاحتكاك وكأنك ترتدي قفازاً واقياً.', en: 'Forming an invisible occlusive layer on hands protecting from dryness, water, and friction as if wearing a protective glove.' }
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
// 🧪 3. المنتجات السريرية لـ La Roche-Posay (من 19 إلى 30)
// ==========================================

// [19] LA ROCHE POSAY VITAMIN C10 SERUM
window.deepProductsList.push({
    id: 'lrp_vitamin_c10', brandId: 'laroche', familyId: 'anti_aging', brand: 'La Roche-Posay',
    name: { ar: 'فيتامين C10 سيروم (للنضارة والتفتيح)', en: 'Vitamin C10 Pure Vitamin C Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: '5.5 (درجة حموضة فسيولوجية تضمن فعالية فيتامين سي دون التسبب بتهيج مفرط للبشرة الحساسة)', en: '5.5 (Physiological pH ensuring Vitamin C efficacy without over-irritating sensitive skin)' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'pure_vitamin_c\')">فيتامين C النقي</span> بنسبة 10% لإعادة النضارة، مدمجاً مع حمض الساليسيليك لتقشير السطح بلطف، ومادة Neurosensine لضمان التحمل الكامل.', 
            en: 'Uses 10% <span class="glossary-term" onclick="openGlossary(\'pure_vitamin_c\')">Pure Vitamin C</span> for radiance, combined with Salicylic Acid for gentle exfoliation, and Neurosensine for full tolerance.' 
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
        expected_duration: { ar: 'إشراقة فورية. توحيد ملحوظ للون وتقليل للخطوط الدقيقة خلال 8 أسابيع من الاستخدام اليومي.', en: 'Instant radiance. Visible tone evening and fine line reduction within 8 weeks of daily use.' },
        step_in_routine: { ar: 'سيروم مضاد للأكسدة (بعد الغسول).', en: 'Antioxidant serum (post-cleansing).' },
        routine_step_number: 2,
        application: { ar: 'توضع 3-4 قطرات على الوجه والرقبة مع تجنب منطقة العين تماماً.', en: 'Apply 3-4 drops to face and neck, avoiding the eye area entirely.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول في نفس اللحظة.', 'المقشرات القوية.'], en: ['Retinol simultaneously.', 'Strong exfoliants.'] }, 
            best_mixed_with: { ar: ['واقي شمس (إجباري بعده).', 'هيالو B5 سيروم.'], en: ['Sunscreen (Mandatory after).', 'Hyalu B5 Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الباهتة، عدم توحد اللون، وظهور التجاعيد الأولى.', en: 'Dull skin, uneven tone, and first wrinkles.' },
        pregnancy_safe: true, sun_sensitivity: true, child_safe: false,
        notes: { ar: 'للحفاظ على فعالية فيتامين سي لأطول فترة، يُحفظ في الثلاجة لتأخير عملية <b class="glossary-term" onclick="openGlossary(\'oxidation\')">الأكسدة</b> التي تحوله للون الداكن.', en: 'To preserve Vitamin C efficacy, keep refrigerated to delay the <b class="glossary-term" onclick="openGlossary(\'oxidation\')">Oxidation</b> process that turns it dark.' }
    }
});

// [20] LA ROCHE POSAY HYALU B5 SERUM
window.deepProductsList.push({
    id: 'lrp_hyalu_b5', brandId: 'laroche', familyId: 'anti_aging', brand: 'La Roche-Posay',
    name: { ar: 'هيالو B5 سيروم (لترميم وامتلاء البشرة)', en: 'Hyalu B5 Serum' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: '5.5 (متوازن ليناسب حتى البشرات المتهالكة بعد الإجراءات التجميلية)', en: '5.5 (Balanced to suit even compromised skin post-aesthetic procedures)' },
        mechanism: { 
            ar: 'تركيبة فريدة تجمع بين نوعين من <span class="glossary-term" onclick="openGlossary(\'fragmented_hyaluronic\')">حمض الهيالورونيك</span> لترطيب السطح والعمق، مع فيتامين B5 لترميم حاجز الجلد التالف.', 
            en: 'Unique formula combining two types of <span class="glossary-term" onclick="openGlossary(\'fragmented_hyaluronic\')">Hyaluronic Acid</span> for surface and deep hydration, with Vitamin B5 to repair damaged skin barrier.' 
        },
        patient_benefit: { 
            ar: 'يعيد امتلاء البشرة في 4 ساعات فقط، يقلل التجاعيد بشكل ملحوظ، ويسرع عملية ترميم الجلد بعد الجلسات التجميلية.', 
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
        expected_duration: { ar: 'امتلاء فوري خلال 4 ساعات. ترميم كامل للحاجز الجلدي وتخفيف واضح للتجاعيد خلال 4 أسابيع.', en: 'Instant plumping in 4 hours. Full barrier repair and visible wrinkle reduction in 4 weeks.' },
        step_in_routine: { ar: 'سيروم الترطيب والترميم.', en: 'Hydrating and repairing serum.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على بشرة مبللة لتعمل جزيئات الهيالورونيك كـ <b class="glossary-term" onclick="openGlossary(\'moisture_magnet\')">مغناطيس للرطوبة</b> يسحب الماء لداخل الخلايا.', en: 'Apply to damp skin allowing Hyaluronic molecules to act as a <b class="glossary-term" onclick="openGlossary(\'moisture_magnet\')">Moisture Magnet</b> pulling water into cells.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد تعارض.'], en: ['No contraindications.'] }, 
            best_mixed_with: { ar: ['جميع علاجات مكافحة الشيخوخة.'], en: ['All anti-aging treatments.'] } 
        }
    },
    precautions: {
        indications: { ar: 'فقدان مرونة الجلد، الجفاف الشديد، الخطوط الرفيعة، وما بعد الفيلر.', en: 'Loss of elasticity, severe dryness, fine lines, and post-filler.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'قوام جل مائي منعش جداً. مصمم لعلامات الشيخوخة لدى البالغين وآمن لجميع أنواع البشرة.', en: 'Refreshing water-gel texture. Designed for adult aging signs and safe for all skin types.' }
    }
});

// [21] LA ROCHE POSAY RETINOL B3 SERUM
window.deepProductsList.push({
    id: 'lrp_retinol_b3', brandId: 'laroche', familyId: 'anti_aging', brand: 'La Roche-Posay',
    name: { ar: 'ريتينول B3 سيروم (لتجديد البشرة)', en: 'Retinol B3 Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: '5.5 (فسيولوجي لمنع مضاعفة التهيج المصاحب لاستخدام الريتينول)', en: '5.5 (Physiological to prevent compounding retinol-associated irritation)' },
        mechanism: { 
            ar: 'يجمع بين الريتينول النقي و <span class="glossary-term" onclick="openGlossary(\'gradual_retinol\')">الريتينول ممتد المفعول</span> لضمان تجديد الخلايا دون تهيج، مع فيتامين B3 (نياسيناميد) لترميم الحاجز المادي.', 
            en: 'Combines pure retinol and <span class="glossary-term" onclick="openGlossary(\'gradual_retinol\')">Gradual Release Retinol</span> for cell renewal without irritation, with Vit B3 (Niacinamide) to repair the physical barrier.' 
        },
        patient_benefit: { 
            ar: 'علاج قوي للتجاعيد العميقة، يوحد لون البشرة المصبوغة، ويعطي مظهراً ناعماً وصحياً للبشرة الحساسة.', 
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
        expected_duration: { ar: 'تجديد خلوي ملحوظ خلال 4 أسابيع، وعلاج عميق للتجاعيد وتوحيد اللون خلال 8 إلى 12 أسبوعاً.', en: 'Visible cell renewal in 4 weeks, and deep wrinkle/tone correction in 8 to 12 weeks.' },
        step_in_routine: { ar: 'خطوة العلاج الليلي المكثف.', en: 'Intensive PM treatment step.' },
        routine_step_number: 2,
        application: { ar: 'يوضع 3 قطرات على وجه نظيف وجاف تماماً. يُفضل تطبيقه ضمن جدول <b class="glossary-term" onclick="openGlossary(\'skin_cycling\')">تدوير العناية</b> لتجنب إرهاق الحاجز الجلدي.', en: 'Apply 3 drops to clean, completely dry face. Best applied within a <b class="glossary-term" onclick="openGlossary(\'skin_cycling\')">Skin Cycling</b> schedule to avoid barrier fatigue.' },
        layering: { 
            do_not_mix_with: { ar: ['أحماض التقشير (AHA/BHA) في نفس الليلة.', 'فيتامين C الصافي.'], en: ['Exfoliating acids (AHA/BHA) on the same night.', 'Pure Vitamin C.'] }, 
            best_mixed_with: { ar: ['مرطب سيكابلاست (لعمل تقنية الساندويتش).', 'واقي شمس (إلزامي صباحاً).'], en: ['Cicaplast moisturizer (for Sandwich method).', 'Sunscreen (Mandatory AM).'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد العميقة، تضرر البشرة من الشمس، والبقع الناتجة عن العمر.', en: 'Deep wrinkles, photo-damaged skin, and age spots.' },
        pregnancy_safe: false, sun_sensitivity: true, child_safe: false,
        notes: { ar: 'يُمنع استخدامه للحوامل والمرضعات تماماً (مخصص للبالغين).', en: 'Strictly contraindicated for pregnancy and breastfeeding (adults only).' }
    }
});

// [22] LA ROCHE POSAY PHYSIOLOGICAL FOAMING WATER
window.deepProductsList.push({
    id: 'lrp_physio_foaming', brandId: 'laroche', familyId: 'physiological', brand: 'La Roche-Posay',
    name: { ar: 'الرغوة الفسيولوجية المنظفة (المنظف اللطيف)', en: 'Physiological Foaming Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (مطابق تماماً للجلد للحفاظ على زيوته الطبيعية ومنع الجفاف)', en: '5.5 (Perfectly matches skin to retain natural oils and prevent dryness)' },
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
        expected_duration: { ar: 'تنظيف يومي مستمر يحافظ على مرونة الجلد ويمنع تحسسه المستقبلي.', en: 'Continuous daily cleansing that preserves skin elasticity and prevents future sensitization.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف اللطيف).', en: 'Step 1 (Gentle Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'تُترك الرغوة على الوجه لمدة 30 ثانية لتفكيك المكياج بـ <b class="glossary-term" onclick="openGlossary(\'micellar_tech\')">تقنية الميسيلار</b> دون الحاجة للفرك، ثم تُشطف.', en: 'Leave foam on face for 30 seconds to dissolve makeup via <b class="glossary-term" onclick="openGlossary(\'micellar_tech\')">Micellar Tech</b> without rubbing, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف.'], en: ['Harsh scrubbing.'] }, 
            best_mixed_with: { ar: ['جميع مرطبات لاروش بوزيه.'], en: ['All La Roche-Posay moisturizers.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة، العادية، والمختلطة.', en: 'Sensitive, normal, and combination skin.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'خالي من الصابون، الكحول، والبارابين. آمن تماماً لتنظيف بشرة الأطفال والبالغين على حد سواء.', en: 'Soap, alcohol, and paraben-free. Completely safe for cleansing both children and adults.' }
    }
});

// [23] LA ROCHE POSAY MELA B3 SERUM (Anti-Dark Spots)
window.deepProductsList.push({
    id: 'lrp_mela_b3_serum', brandId: 'laroche', familyId: 'anti_aging', brand: 'La Roche-Posay',
    name: { ar: 'ميلا B3 سيروم (علاج التصبغات المكثف)', en: 'Mela B3 Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: '5.5 (متوازن لضمان اختراق المواد المفتحة دون المساس بسلامة الحاجز الجلدي)', en: '5.5 (Balanced to ensure brightening agents penetrate without compromising the barrier)' },
        mechanism: { 
            ar: 'يستخدم تقنية <span class="glossary-term" onclick="openGlossary(\'melasyl\')">Melasyl™</span> الحصرية مع 10% نياسيناميد لاستهداف التصبغات في كل مرحلة، من المنبع وحتى السطح، مع تجديد الخلايا.', 
            en: 'Features exclusive <span class="glossary-term" onclick="openGlossary(\'melasyl\')">Melasyl™</span> with 10% Niacinamide to target pigmentation at every stage, from source to surface, with cell renewal.' 
        },
        patient_benefit: { 
            ar: 'تفتيح للبقع الداكنة المستعصية بنسبة 98% وتوحيد شامل للون البشرة.', 
            en: '98% reduction in stubborn dark spots and comprehensive skin tone evening.' 
        },
        active_ingredients: [
            { name: 'Melasyl™', concentration: 'Patented | براءة اختراع', role: { ar: 'حبس الميلانين الزائد ومنع التصبغ.', en: 'Intercepting excess melanin and preventing spots.' } },
            { name: 'Niacinamide (Vitamin B3)', concentration: '10%', role: { ar: 'تقليل الالتهاب وتفتيح اللون.', en: 'Reducing inflammation and brightening tone.' } },
            { name: 'LHA', concentration: 'Exfoliating | مقشر', role: { ar: 'تنعيم نسيج الجلد السطحي.', en: 'Smoothing surface skin texture.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        expected_duration: { ar: 'تفتيح ملحوظ للبقع خلال أسبوع واحد، وتوحيد كامل للون البشرة مع الاستمرار لمدة شهرين.', en: 'Visible spot brightening in 1 week, and full tone evening with 2 months of continuous use.' },
        step_in_routine: { ar: 'سيروم علاجي للتفتيح.', en: 'Treatment brightening serum.' },
        routine_step_number: 2,
        application: { ar: 'توضع 3-4 قطرات على الوجه والرقبة. يعمل كـ <b class="glossary-term" onclick="openGlossary(\'melanin_trapper\')">مصيدة للميلانين</b> مما يجعله وقائياً ممتازاً قبل التعرض للشمس (تحت الواقي).', en: 'Apply 3-4 drops to face and neck. Acts as a <b class="glossary-term" onclick="openGlossary(\'melanin_trapper\')">Melanin Trapper</b> making it an excellent preventive measure before sun exposure (under SPF).' },
        layering: { 
            do_not_mix_with: { ar: ['المنظفات القوية جداً.'], en: ['Very harsh cleansers.'] }, 
            best_mixed_with: { ar: ['واقي شمس Mela B3 SPF30.', 'هيالو B5 سيروم.'], en: ['Mela B3 SPF30 sunscreen.', 'Hyalu B5 Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البقع الداكنة العنيدة، الكلف، آثار الحبوب الداكنة، واللون غير الموحد.', en: 'Stubborn dark spots, melasma, post-acne marks, and uneven skin tone.' },
        pregnancy_safe: true, sun_sensitivity: true, child_safe: false,
        notes: { ar: 'مناسب لجميع درجات ألوان البشرة (بما فيها البشرة السمراء المائلة للتصبغ السريع).', en: 'Suitable for all skin tones (including dark skin prone to rapid pigmentation).' }
    }
});

// [24] LA ROCHE POSAY EFFACLAR A.I. (Spot Treatment)
window.deepProductsList.push({
    id: 'lrp_effaclar_ai', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار A.I. (مصحح الحبوب الموضعي)', en: 'Effaclar A.I. Breakout Corrector' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً (لتفكيك الروابط الكيراتينية فوق الحبة مباشرة)', en: 'Slightly Acidic (To break keratin bonds directly over the pimple)' },
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
        expected_duration: { ar: 'يخفف التهاب الحبة خلال 24 ساعة، ويخفيها تماماً خلال 3 إلى 5 أيام دون ترك أثر.', en: 'Reduces pimple inflammation in 24h, completely clears it in 3 to 5 days without a mark.' },
        step_in_routine: { ar: 'علاج موضعي (آخر خطوة بعد المرطب).', en: 'Targeted spot treatment (last step after moisturizer).' },
        routine_step_number: 3,
        application: { ar: 'يوضع بطريقة <b class="glossary-term" onclick="openGlossary(\'spot_treatment\')">العلاج النقطي</b> مرتين يومياً على الحبة الملتهبة فقط.', en: 'Apply as a <b class="glossary-term" onclick="openGlossary(\'spot_treatment\')">Spot Treatment</b> twice daily strictly on the inflamed pimple.' },
        layering: { 
            do_not_mix_with: { ar: ['توزيعه على كامل الوجه (يسبب جفاف شديد).'], en: ['Applying over the entire face (causes severe dryness).'] }, 
            best_mixed_with: { ar: ['إيفاكلار ديو (+).'], en: ['Effaclar Duo (+).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الحبوب الفردية، الحبوب الملتهبة الكبيرة، وبدايات ظهور البثور.', en: 'Individual breakouts, large inflamed pimples, and early-stage blemishes.' },
        pregnancy_safe: false, sun_sensitivity: true, child_safe: false,
        notes: { ar: 'يمكن استخدامه بأمان تحت المكياج لتقليص الحبة نهاراً.', en: 'Can be safely used under makeup to shrink the pimple during the day.' }
    }
});

// [25] LA ROCHE POSAY EFFACLAR MAT (Anti-Shine Moisturizer)
window.deepProductsList.push({
    id: 'lrp_effaclar_mat', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار مات (مرطب مطفي للمسام)', en: 'Effaclar Mat Anti-Shine Face Moisturiser' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: '5.5 (فسيولوجي لمنع إرسال إشارات جفاف تعويضية للغدد الدهنية)', en: '5.5 (Physiological to prevent sending compensatory dryness signals to sebaceous glands)' },
        mechanism: { 
            ar: 'يعمل بتقنية (Sebulyse) التي تستهدف إنتاج الزهم من المصدر بفعالية أقوى من الزنك، مدمجة بكرات مجهرية لامتصاص اللمعان فوراً.', 
            en: 'Utilizes Sebulyse technology targeting sebum production at the source more effectively than Zinc, combined with microspheres for instant shine absorption.' 
        },
        patient_benefit: { 
            ar: 'يقلل اللمعان لمدة 8 ساعات، يقلص حجم المسام الواسعة بشكل ملحوظ، ويوفر قاعدة جافة ومثالية.', 
            en: 'Reduces shine for 8 hours, visibly shrinks enlarged pores, and provides a dry, ideal base.' 
        },
        active_ingredients: [
            { name: 'Sebulyse', concentration: 'Active | فعال', role: { ar: 'تثبيط إنتاج الدهون الزائدة.', en: 'Inhibiting excess sebum production.' } },
            { name: 'Perlite', concentration: 'High | عالي', role: { ar: 'امتصاص العرق والدهون السطحية.', en: 'Absorbing sweat and surface sebum.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        expected_duration: { ar: 'تأثير مطفي يدوم 8 ساعات. تقليص ملحوظ لحجم المسام بعد 4 أسابيع من الاستخدام المنتظم.', en: 'Matte effect lasts 8 hours. Visible reduction in pore size after 4 weeks of regular use.' },
        step_in_routine: { ar: 'مرطب يومي للبشرة الدهنية.', en: 'Daily moisturizer for oily skin.' },
        routine_step_number: 3,
        application: { ar: 'يعمل بامتياز كمرطب ويزود بـ <b class="glossary-term" onclick="openGlossary(\'primer_effect\')">تأثير البرايمر</b> بفضل كرات البيرلايت، مما يثبت المكياج طوال اليوم.', en: 'Works excellently as a moisturizer providing a <b class="glossary-term" onclick="openGlossary(\'primer_effect\')">Primer Effect</b> thanks to Perlite spheres, locking makeup all day.' },
        layering: { 
            do_not_mix_with: { ar: ['المرطبات الثقيلة.'], en: ['Heavy moisturizers.'] }, 
            best_mixed_with: { ar: ['أنثيليوس يو في ميون Oil Control.'], en: ['Anthelios UVMune Oil Control.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة اللمعان، المسام الواسعة، والبشرة الدهنية الحساسة.', en: 'Oily skin with excess shine, enlarged pores, and sensitive oily skin.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'خالٍ من الزيوت (Oil-free) بلمسة نهائية بودرية (Powdery finish).', en: 'Oil-free with a powdery finish.' }
    }
});

// [26] LA ROCHE POSAY ANTHELIOS DERMO-PEDIATRICS MILK SPF 50+
window.deepProductsList.push({
    id: 'lrp_anthelios_kids_milk', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس ديرمو-بيدياتريكس (حليب الأطفال)', en: 'Anthelios Dermo-Pediatrics Invisible Kids Milk SPF50+' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن ومطابق لجلد الأطفال الرقيق', en: 'Balanced and matches delicate kid\'s skin' },
        mechanism: { 
            ar: 'حماية معززة ضد أشعة UVA/UVB باستخدام فلاتر Netlock التي تخلق شبكة واقية قوية جداً وغير مرئية، مع ترطيب غني لجلد الطفل.', 
            en: 'Enhanced UVA/UVB protection using Netlock filters that create an ultra-strong invisible shield, with rich hydration for infant skin.' 
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
        expected_duration: { ar: 'حماية فورية ممتدة المفعول. الاستمرار عليه يحمي مخزون الخلايا الجذعية للطفل من التلف الدائم.', en: 'Instant extended protection. Continuous use protects the child\'s stem cell reservoir from permanent damage.' },
        step_in_routine: { ar: 'حماية شمس للأطفال.', en: 'Sun protection for kids.' },
        routine_step_number: 4,
        application: { ar: 'يجب تطبيقه قبل التعرض للشمس بـ 20 دقيقة وتغليف كامل الجلد باستخدام <b class="glossary-term" onclick="openGlossary(\'two_finger_rule\')">قاعدة الإصبعين</b>.', en: 'Must be applied 20 mins before sun exposure, coating the skin using the <b class="glossary-term" onclick="openGlossary(\'two_finger_rule\')">Two-Finger Rule</b>.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم سيكابلاست (بعد الشمس إذا حدث احمرار).'], en: ['Cicaplast Baume (after sun if redness occurs).'] } 
        }
    },
    precautions: {
        indications: { ar: 'بشرة الرضع والأطفال الحساسة، والبشرة المعرضة للتحسس من الشمس.', en: 'Sensitive infant/children skin and sun-allergic skin.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'آمن للأطفال والرضع بداية من عمر 6 أشهر. خالي من العطور والبارابين.', en: 'Safe for children and infants starting from 6 months old. Fragrance and paraben-free.' }
    }
});

// [27] LA ROCHE POSAY PIGMENTCLAR SERUM (Anti-Dark Spot)
window.deepProductsList.push({
    id: 'lrp_pigmentclar_serum', brandId: 'laroche', familyId: 'anti_aging', brand: 'La Roche-Posay',
    name: { ar: 'بيجمنتكلار سيروم (مصحح التصبغات)', en: 'Pigmentclar Anti-Dark Spot Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: '5.5 (لتقشير لطيف دون التسبب بالتهاب ارتدادي يزيد التصبغ)', en: '5.5 (For gentle exfoliation without causing rebound inflammation that worsens pigmentation)' },
        mechanism: { 
            ar: 'يوفر فعالية طويلة الأمد ضد التصبغات بفضل مركب (PHE-Resorcinol + Ginkgo + Ferulic Acid)، الذي يثبط الميلانين ويقشر البقع السطحية بلطف بفضل LHA.', 
            en: 'Provides long-lasting efficacy against spots via (PHE-Resorcinol + Ginkgo + Ferulic Acid) complex, inhibiting melanin and gently exfoliating surface spots with LHA.' 
        },
        patient_benefit: { 
            ar: 'يوحد لون البشرة بشكل واضح، ويضمن عدم عودة البقع بسرعة حتى بعد إيقاف الاستخدام.', 
            en: 'Visibly evens skin tone and ensures dark spots do not return quickly even after discontinuation.' 
        },
        active_ingredients: [
            { name: 'PHE-Resorcinol', concentration: 'Concentrated | مركز', role: { ar: 'تثبيط قوي لإنتاج الصبغة.', en: 'Potent pigment production inhibition.' } },
            { name: 'LHA', concentration: 'Micro-exfoliant', role: { ar: 'إزالة الخلايا المصبوغة السطحية.', en: 'Removing superficial pigmented cells.' } },
            { name: 'Ferulic Acid', concentration: 'Antioxidant', role: { ar: 'حماية الخلايا من الإجهاد التأكسدي.', en: 'Protecting cells from oxidative stress.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily PM.' },
        expected_duration: { ar: 'تفتيح تدريجي يبدأ بعد 4 أسابيع، مع استمرار مفعول التفتيح لـ 3 أسابيع إضافية بعد التوقف.', en: 'Gradual brightening starts after 4 weeks, with brightening effect persisting for 3 extra weeks post-discontinuation.' },
        step_in_routine: { ar: 'سيروم علاجي للتصبغات.', en: 'Brightening treatment serum.' },
        routine_step_number: 2,
        application: { ar: 'يعتمد على التأثير <b class="glossary-term" onclick="openGlossary(\'anti_relapse\')">المضاد للانتكاس</b>، حيث يُطبق على الوجه والرقبة لمنع عودة البقع.', en: 'Relies on the <b class="glossary-term" onclick="openGlossary(\'anti_relapse\')">Anti-Relapse</b> effect; apply to face and neck to prevent spots from returning.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول القوي (لتجنب التهيج).'], en: ['Strong Retinol (to avoid irritation).'] }, 
            best_mixed_with: { ar: ['واقي شمس (إلزامي صباحاً).', 'ميلا B3 (لنتائج أقوى).'], en: ['Sunscreen (Mandatory AM).', 'Mela B3 (for enhanced results).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البقع الداكنة، اللون الباهت، وعدم تجانس نسيج البشرة.', en: 'Dark spots, dull complexion, and uneven skin texture.' },
        pregnancy_safe: true, sun_sensitivity: true, child_safe: false,
        notes: { ar: 'قوام سائل منعش وخفيف جداً. مناسب للبالغين.', en: 'Very light and refreshing fluid texture. Suitable for adults.' }
    }
});

// [28] LA ROCHE POSAY PIGMENTCLAR EYES
window.deepProductsList.push({
    id: 'lrp_pigmentclar_eyes', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay', 
    name: { ar: 'بيجمنتكلار للعين (علاج الهالات السوداء)', en: 'Pigmentclar Eyes Dark Circle Corrector' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي (مطابق لدرجة حموضة الدموع لتجنب أي وخز أو حرقان)', en: 'Physiological (Matches tear pH to avoid any stinging or burning)' },
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
        expected_duration: { ar: 'تفتيح بصري فوري للعين. تخفيف فعلي للهالات البنية والزرقاء بعد 4 أسابيع من الاستخدام.', en: 'Instant visual eye brightening. Actual reduction of brown and blue circles after 4 weeks of use.' },
        step_in_routine: { ar: 'عناية محيط العين.', en: 'Eye contour care.' },
        routine_step_number: 2,
        application: { ar: 'استخدمي الأداة المعدنية المبردة لعمل <b class="glossary-term" onclick="openGlossary(\'lymphatic_drainage\')">تصريف ليمفاوي</b> من الداخل للخارج لتخفيف احتقان وتورم الصباح.', en: 'Use the cooling metal applicator to perform <b class="glossary-term" onclick="openGlossary(\'lymphatic_drainage\')">Lymphatic Drainage</b> from inner to outer corner to ease morning puffiness.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['واقي شمس أنثيليوس المخصص للعين.'], en: ['Anthelios eye-safe sunscreen.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الهالات السوداء البنية والزرقاء، العيون المتعبة، والبهتان تحت العين.', en: 'Brown and blue dark circles, tired eyes, and under-eye dullness.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'خالي من العطور والبارابين. آمن تماماً لمستخدمي العدسات اللاصقة.', en: 'Fragrance and paraben-free. Completely safe for contact lens wearers.' }
    }
});

// [29] LA ROCHE POSAY HYDRAPHASE HA (Rich / Light)
window.deepProductsList.push({
    id: 'lrp_hydraphase_ha', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay', 
    name: { ar: 'هيدرافاز HA (مرطب الهيالورونيك المكثف)', en: 'Hydraphase HA Intensive Moisturizer' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (يحافظ على البنية الجزيئية لحمض الهيالورونيك ويسهل امتصاصه)', en: '5.5 (Preserves the molecular structure of Hyaluronic Acid and facilitates its absorption)' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'green_tech_hyaluronic\')">حمض الهيالورونيك النقي</span> لغمر الخلايا بالماء، مع الحفاظ على الترطيب لمدة 72 ساعة بفضل تكنولوجيا الروابط الجزيئية.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'green_tech_hyaluronic\')">Pure Hyaluronic Acid</span> to drench cells with water, maintaining hydration for 72h via molecular bond technology.' 
        },
        patient_benefit: { 
            ar: 'إشراقة فورية للبشرة الفاقدة للحيوية، يملأ الخطوط الناتجة عن الجفاف، ويعطي ملمساً مخملياً ناعماً.', 
            en: 'Instant radiance for tired skin, plumps dehydration lines, and provides a soft velvety texture.' 
        },
        active_ingredients: [
            { name: 'Pure Hyaluronic Acid', concentration: 'High | عالي', role: { ar: 'حبس الرطوبة الفائق لملء الخطوط.', en: 'Extreme moisture retention to plump lines.' } },
            { name: 'Thermal Spring Water', concentration: 'Base', role: { ar: 'تهدئة وتلطيف الجلد.', en: 'Soothing and calming the skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        expected_duration: { ar: 'غمر فوري بالرطوبة يدوم 72 ساعة متواصلة. تحسن دائم في مرونة الجلد مع الاستخدام المستمر.', en: 'Instant moisture drench lasting 72 continuous hours. Permanent improvement in skin elasticity with ongoing use.' },
        step_in_routine: { ar: 'خطوة الترطيب الأساسية.', en: 'Main hydration step.' },
        routine_step_number: 3,
        application: { ar: 'تُطبق التركيبة على بشرة مندّاة (Damp) لتعمل كـ <b class="glossary-term" onclick="openGlossary(\'moisture_magnet\')">مغناطيس للرطوبة</b> يسحب الماء للداخل.', en: 'Apply formula to damp skin to act as a <b class="glossary-term" onclick="openGlossary(\'moisture_magnet\')">Moisture Magnet</b> pulling water inward.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم هيالو B5.'], en: ['Hyalu B5 Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الفاقدة للماء (Dehydrated)، البشرة الباهتة، والخطوط الرفيعة.', en: 'Dehydrated skin, dull complexion, and fine lines.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'عبوة بمضخة هوائية (Pump) تحافظ على نقاء التركيبة. يتوفر بقوام (Rich) للبشرة الجافة و (Light) للمختلطة.', en: 'Airless pump bottle preserves formula purity. Available in (Rich) for dry and (Light) for combination skin.' }
    }
});

// [30] LA ROCHE POSAY CICAPLAST MAINS (Repairing Hand Cream)
window.deepProductsList.push({
    id: 'lrp_cicaplast_mains', brandId: 'laroche', familyId: 'cicaplast', brand: 'La Roche-Posay',
    name: { ar: 'سيكابلاست لليدين (حماية وترميم)', en: 'Cicaplast Mains (Hand Cream)' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: '5.5 (يعيد بناء الغلاف الحمضي لليدين المدمر بسبب الغسيل المتكرر والكحول)', en: '5.5 (Rebuilds the acid mantle of hands destroyed by frequent washing and alcohol)' },
        mechanism: { 
            ar: 'يخلق حاجزاً واقياً غير مرئي بتركيز 4% نياسيناميد و 30% جليسرين، مما يسمح بمزاولة العمل اليدوي فور الاستخدام.', 
            en: 'Creates an invisible protective barrier with 4% Niacinamide and 30% Glycerin, allowing manual work immediately after use.' 
        },
        patient_benefit: { 
            ar: 'يهدئ الأيدي المتضررة والمجهدة من العمل، يرمم التشققات فوراً، ومقاوم للغسل المتكرر.', 
            en: 'Soothes damaged, overworked hands, instantly repairs cracks, and is resistant to frequent washing.' 
        },
        active_ingredients: [
            { name: 'Glycerin', concentration: '30%', role: { ar: 'حماية وتغليف الجلد لمنع فقدان الماء.', en: 'Protecting and coating skin to prevent water loss.' } },
            { name: 'Niacinamide', concentration: '4%', role: { ar: 'تقليل الالتهاب وتسريع الترميم.', en: 'Reducing inflammation and accelerating repair.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (متكرر طوال اليوم).', en: 'As needed (frequently throughout the day).' },
        expected_duration: { ar: 'راحة فورية وتهدئة للتشققات المؤلمة. يعالج جفاف اليدين العميق تماماً خلال 7 أيام.', en: 'Instant relief and soothing for painful cracks. Completely treats deep hand dryness within 7 days.' },
        step_in_routine: { ar: 'عناية باليدين.', en: 'Hand care.' },
        routine_step_number: 3,
        application: { ar: 'يترك تأثيراً شبيهاً بـ <b class="glossary-term" onclick="openGlossary(\'glove_effect\')">تأثير القفاز</b>، مما يسمح بمزاولة الأعمال اليدوية فوراً دون أن يُفقد.', en: 'Leaves an effect similar to the <b class="glossary-term" onclick="openGlossary(\'glove_effect\')">Glove Effect</b>, allowing manual work immediately without rubbing off.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'الأيدي المتشققة، جفاف الأطباء (غسيل متكرر)، والأكزيما اليدوية.', en: 'Cracked hands, medical professional dryness (frequent washing), and hand eczema.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'ملمس غير دهني وغير لزج تماماً. آمن لاستخدامه لترطيب أيدي الأطفال المعرضة للجفاف.', en: 'Completely non-greasy and non-sticky. Safe to use for moisturizing children\'s dryness-prone hands.' }
    }
});
