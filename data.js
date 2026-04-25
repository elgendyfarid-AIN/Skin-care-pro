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
// [7] توليان ديرماليرجو كريم (Toleriane Dermallergo)
window.deepProductsList.push({
    id: 'lrp_toleriane_dermallergo', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'توليان ديرماليرجو كريم', en: 'Toleriane Dermallergo Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { 
            ar: 'متوازن بدقة (خالي تماماً من أي أحماض مقشرة لتجنب خدش الحاجز الحساس)', 
            en: 'Strictly balanced (Completely free of any exfoliating acids to avoid scratching the sensitive barrier)' 
        },
        mechanism: { 
            ar: 'يستهدف فرط حساسية الجلد مباشرة باستخدام الـ <span class="glossary-term" onclick="openGlossary(\'neurosensine\')">نيوروسينسين</span> لقطع إشارات الألم والحرارة، ويدعم <span class="glossary-term" onclick="openGlossary(\'microbiome_science\')">الميكروبيوم</span> لتقليل نوبات التحسس المستقبلية.', 
            en: 'Targets skin hyper-sensitivity directly using <span class="glossary-term" onclick="openGlossary(\'neurosensine\')">Neurosensine</span> to block pain/heat signals, and supports the <span class="glossary-term" onclick="openGlossary(\'microbiome_science\')">Microbiome</span> to reduce future allergy flare-ups.' 
        },
        patient_benefit: { 
            ar: 'يهدئ البشرة الملتهبة والمتحسسة في دقيقة واحدة، يوفر ترطيباً مستمراً لمدة 48 ساعة، ويطفئ الاحمرار والوخز تماماً.', 
            en: 'Soothes inflamed, allergic skin in 1 minute, provides continuous 48h hydration, and completely quenches redness and stinging.' 
        },
        active_ingredients: [
            { name: 'Neurosensine', concentration: 'Strong | قوي', role: { ar: 'تهدئة عصبية للجلد وتقليل الحكة والوخز.', en: 'Neurological skin soothing, reducing itching and stinging.' } },
            { name: 'Sphingobioma', concentration: 'Extract | مستخلص', role: { ar: 'دعم بكتيريا الجلد النافعة.', en: 'Supports beneficial skin bacteria.' } },
            { name: 'Shea Butter', concentration: 'Rich | غني', role: { ar: 'ترميم حاجز الدهون الطبيعي.', en: 'Restores the natural lipid barrier.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        expected_duration: { 
            ar: 'يهدئ البشرة خلال 60 ثانية. يُستخدم كعلاج يومي مستمر لمنع انتكاسات البشرة الوردية والحساسة.', 
            en: 'Soothes skin within 60 seconds. Used as continuous daily care to prevent rosacea and sensitive skin relapses.' 
        },
        step_in_routine: { ar: 'خطوة الترطيب الأساسية.', en: 'Main moisturizing step.' },
        routine_step_number: 3,
        application: { 
            ar: 'يوزع بلطف على الوجه والرقبة ومحيط العينين باستخدام <span class="glossary-term" onclick="alert(\'التربيت اللطيف (Patting): وضع الكريم عن طريق الطبطبة الخفيفة بدلاً من الفرك القوي لتجنب تهيج الأوعية الدموية الدقيقة.\')">التربيت اللطيف</span>.', 
            en: 'Gently distribute over face, neck, and eye contour using <span class="glossary-term" onclick="alert(\'Gentle Patting: Applying cream by light tapping instead of harsh rubbing to avoid irritating micro-capillaries.\')">Gentle Patting</span>.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['المنتجات التي تحتوي على عطور أو كحول (لتجنب انتكاس البشرة).'], en: ['Products containing fragrance or alcohol (to avoid skin relapse).'] }, 
            best_mixed_with: { ar: ['غسول توليان ديرمو-كلينزر.'], en: ['Toleriane Dermo-Cleanser.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الحساسية، المعرضة للحساسية (Allergy-prone)، البشرة التي لا تتحمل مستحضرات التجميل العادية.', en: 'Ultra-sensitive skin, allergy-prone skin, intolerant skin to standard cosmetics.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true, 
        notes: { 
            ar: 'عبوة المنتج معقمة 100% (Air-tight) ولا تسمح بدخول الهواء، مما يحمي التركيبة الخالية من المواد الحافظة من التلوث. ممتاز لترطيب الوجه للأطفال المعرضين للإكزيما.', 
            en: 'The packaging is 100% sterile (Air-tight), protecting the preservative-free formula from contamination. Excellent for moisturizing eczema-prone faces in children.' 
        }
    }
});

// [8] توليان غسول ديرمو-كلينزر الحليبي
window.deepProductsList.push({
    id: 'lrp_toleriane_cleanser', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'توليان غسول ديرمو-كلينزر حليبي', en: 'Toleriane Dermo-Cleanser' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { 
            ar: '5.5 (لطيف جداً ومناسب لدرجة حموضة الأغشية المخاطية للعين)', 
            en: '5.5 (Ultra-gentle and matches the pH of ocular mucous membranes)' 
        },
        mechanism: { 
            ar: 'ينظف البشرة ويزيل المكياج دون الحاجة للفرك أو استخدام مؤثرات سطحية قاسية (Surfactants)، مما يحافظ على حاجز الجلد سليمًا ويمنع الجفاف.', 
            en: 'Cleanses and removes makeup without rubbing or harsh surfactants, keeping the skin barrier intact and preventing dryness.' 
        },
        patient_benefit: { 
            ar: 'ينظف بلطف شديد بفضل قوامه الحليبي، يزيل مكياج الوجه والعين دون تهيج، ويترك البشرة رطبة ومريحة فوراً.', 
            en: 'Ultra-gentle cleansing with a milky texture, removes face and eye makeup without irritation, leaving skin hydrated and instantly comforted.' 
        },
        active_ingredients: [
            { name: 'Glycerin', concentration: 'High | عالي', role: { ar: 'يحافظ على رطوبة الجلد أثناء التنظيف.', en: 'Maintains skin hydration during cleansing.' } },
            { name: 'La Roche-Posay Thermal Water', concentration: 'Base | أساسي', role: { ar: 'تهدئة الجلد فوراً وتقليل الوخز.', en: 'Instantly soothes skin and reduces stinging.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        expected_duration: { 
            ar: 'استخدام يومي دائم للحفاظ على حاجز البشرة الحساسة من التدهور أثناء التنظيف.', 
            en: 'Continuous daily use to protect the sensitive skin barrier from degradation during cleansing.' 
        },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف اللطيف).', en: 'Step 1 (Gentle Cleansing).' },
        routine_step_number: 1,
        application: { 
            ar: 'يُدلك بأطراف الأصابع بحركات دائرية، ثم يُمسح برفق بقطنة <span class="glossary-term" onclick="alert(\'التنظيف الجاف (Waterless Cleansing): مسح الغسول بقطنة دون شطفه بالماء، وهي طريقة مثالية لمن يعانون من حساسية تجاه الكلور أو الأملاح في مياه الصنبور.\')">دون الحاجة للشطف بالماء</span> (أو يُشطف حسب الرغبة).', 
            en: 'Massage with fingertips in circular motions, then wipe gently with a cotton pad <span class="glossary-term" onclick="alert(\'Waterless Cleansing: Wiping the cleanser off without water, ideal for those sensitive to chlorine or hard minerals in tap water.\')">without rinsing</span> (or rinse if preferred).' 
        },
        layering: { 
            do_not_mix_with: { ar: ['فرش التنظيف الخشنة أو أجهزة التقشير الفيزيائي.'], en: ['Harsh physical cleansing brushes or physical exfoliators.'] }, 
            best_mixed_with: { ar: ['توليان ديرماليرجو كريم.'], en: ['Toleriane Dermallergo Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة التي لا تتحمل الغسول الرغوي، بعد الإجراءات التجميلية القاسية كالليزر، البشرة المعرضة للوردية والاحمرار.', en: 'Skin intolerant to foaming gels, post-harsh cosmetic procedures like laser, rosacea-prone skin.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true, 
        notes: { 
            ar: 'تركيبة آمنة جداً ومناسبة لتنظيف بشرة الأطفال الرقيقة. مريح جداً في السفر لعدم احتياجه لماء للشطف.', 
            en: 'Very safe formula suitable for cleansing delicate children\'s skin. Extremely convenient for travel as it requires no water to rinse.' 
        }
    }
});

// [9] أنثيليوس UVMune 400 (سائل غير مرئي)
window.deepProductsList.push({
    id: 'lrp_anthelios_uvmune', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay', 
    name: { ar: 'أنثيليوس UVMune 400 (سائل غير مرئي)', en: 'Anthelios UVMune 400 Invisible Fluid' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { 
            ar: 'متوازن (مستقر لضمان عدم تحلل فلاتر الحماية الكيميائية)', 
            en: 'Balanced (Stable to ensure no degradation of chemical UV filters)' 
        },
        mechanism: { 
            ar: 'يستخدم فلتر <span class="glossary-term" onclick="openGlossary(\'uvmune_400\')">ميكسوريل 400</span> الحصري للحماية من أشعة UVA الطويلة جداً التي تسبب التصبغات والتجاعيد العميقة، مع تقنية (Netlock) التي تثبت الفلاتر في غشاء غير مرئي ومقاوم للتعرق.', 
            en: 'Features the exclusive <span class="glossary-term" onclick="openGlossary(\'uvmune_400\')">Mexoryl 400</span> filter against ultra-long UVA causing pigmentation and deep wrinkles, with Netlock tech anchoring filters in a sweat-resistant invisible film.' 
        },
        patient_benefit: { 
            ar: 'أقوى واقي شمس سائل في تاريخ الشركة. حماية فائقة من التصبغات والشيخوخة المبكرة، مقاوم جداً للماء، ولا يترك أي أثر أبيض أو رمادي نهائياً.', 
            en: 'The most powerful fluid sunscreen in the brand\'s history. Ultimate protection against pigmentation and premature aging, highly water-resistant, with zero white/grey cast.' 
        },
        active_ingredients: [
            { name: 'Mexoryl 400', concentration: 'Patented | براءة اختراع', role: { ar: 'حماية من أعمق أشعة الشمس ضرراً وتدميراً للـ DNA.', en: 'Protection against the deepest, most DNA-damaging UV rays.' } },
            { name: 'Vitamin E', concentration: 'Antioxidant | مضاد أكسدة', role: { ar: 'حماية الخلايا من الإجهاد التأكسدي والشوارد الحرة.', en: 'Protects cells from oxidative stress and free radicals.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً، يُجدد كل ساعتين عند التعرض المباشر للشمس.', en: 'Daily, reapply every 2 hours under direct sun.' },
        expected_duration: { 
            ar: 'الحماية الفورية. الاستمرار عليه يمنع تكون التصبغات الجديدة ويحافظ على شباب الجلد.', 
            en: 'Instant protection. Continuous use prevents new pigmentation and preserves skin youth.' 
        },
        step_in_routine: { ar: 'آخر خطوة في الروتين الصباحي.', en: 'Last morning step.' },
        routine_step_number: 4,
        application: { 
            ar: 'يُرج جيداً جداً قبل الاستخدام لخلط الفلاتر. يطبق باستخدام قاعدة <span class="glossary-term" onclick="alert(\'قاعدة الإصبعين (Two-Finger Rule): استخدام كمية من الواقي الشمسي تعادل طول إصبعي السبابة والوسطى لضمان تغطية كاملة للوجه والرقبة بالـ SPF المكتوب على العبوة.\')">الإصبعين</span> لضمان الحماية الكاملة.', 
            en: 'Shake very well to mix filters. Apply using the <span class="glossary-term" onclick="alert(\'Two-Finger Rule: Applying an amount of sunscreen equal to the length of the index and middle fingers to ensure full SPF coverage for face and neck.\')">Two-Finger Rule</span> for complete protection.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['وضع زيوت ثقيلة تحته (قد تذيب فلاتر الحماية).'], en: ['Heavy oils underneath (may dissolve sun filters).'] }, 
            best_mixed_with: { ar: ['جميع سيرومات مضادات الأكسدة (فيتامين C).'], en: ['All antioxidant serums (Vitamin C).'] } 
        }
    },
    precautions: {
        indications: { ar: 'جميع أنواع البشرة، البشرة شديدة التحسس للشمس، والوقاية الحتمية من الكلف وتصبغات الحمل.', en: 'All skin types, sun-allergic skin, and mandatory prevention of melasma and pregnancy mask.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false, 
        notes: { 
            ar: 'آمن جداً لمحيط العين ولا يسبب الوخز أو تدميع العين (Anti-eye stinging). خالي من العطور لمنع التحسس الضوئي.', 
            en: 'Very safe for the eye contour and does not cause stinging or tearing (Anti-eye stinging). Fragrance-free to prevent photosensitivity.' 
        }
    }
});

// [10] سيكابلاست لشفاه (Cicaplast Levres)
window.deepProductsList.push({
    id: 'lrp_cicaplast_lips', brandId: 'laroche', familyId: 'cicaplast', brand: 'La Roche-Posay',
    name: { ar: 'سيكابلاست لشفاه (مرمم الشفاه)', en: 'Cicaplast Lips Barrier Repair' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { 
            ar: 'متوازن ولطيف جداً', 
            en: 'Balanced and ultra-gentle' 
        },
        mechanism: { 
            ar: 'يصنع طبقة عازلة (Film-forming) بتركيز 5% من البانثينول لترميم الشقوق العميقة، مع <span class="glossary-term" onclick="openGlossary(\'mp_lipids\')">ليبيدات MP</span> لإعادة ترطيب غشاء الشفاه الرقيق من الداخل.', 
            en: 'Creates a film-forming barrier with 5% Panthenol to repair deep cracks, and <span class="glossary-term" onclick="openGlossary(\'mp_lipids\')">MP-Lipids</span> to rehydrate the delicate lip membrane from within.' 
        },
        patient_benefit: { 
            ar: 'يعالج الشفاه المتشققة والنازفة فوراً، يمنع التهيج الناتج عن لعق الشفاه المتكرر أو الجو شديد البرودة، ويوفر طبقة حماية طويلة الأمد.', 
            en: 'Instantly heals cracked and bleeding lips, prevents irritation from frequent lip-licking or severe cold, and provides a long-lasting protective layer.' 
        },
        active_ingredients: [
            { name: 'Panthenol', concentration: '5%', role: { ar: 'تهدئة سريعة وترميم الشقوق المؤلمة.', en: 'Rapid soothing and repairing painful cracks.' } },
            { name: 'MP-Lipids', concentration: 'Active | فعال', role: { ar: 'إعادة بناء حاجز الشفاه الواقي.', en: 'Rebuilding the protective lip barrier.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'متكرر يومياً حسب الحاجة.', en: 'Multiple times daily as needed.' },
        expected_duration: { 
            ar: 'ترميم الشفاه المتشققة جداً خلال 48 ساعة. يمكن استخدامه بشكل دائم كعناية يومية.', 
            en: 'Repairs severely cracked lips within 48 hours. Can be used permanently as daily care.' 
        },
        step_in_routine: { ar: 'عناية موضعية.', en: 'Targeted care.' },
        routine_step_number: 3,
        application: { 
            ar: 'يوضع مباشرة على الشفاه، وهو مثالي لتطبيق <span class="glossary-term" onclick="openGlossary(\'slugging\')">حبس الترطيب (Lip Slugging)</span> ليلاً لضمان الاستيقاظ بشفاه ممتلئة وناعمة.', 
            en: 'Apply directly to lips. Ideal for <span class="glossary-term" onclick="openGlossary(\'slugging\')">Lip Slugging</span> at night to ensure waking up with plump, smooth lips.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['التقشير الفيزيائي القاسي للشفاه النازفة.'], en: ['Harsh physical lip scrubs on bleeding lips.'] }, 
            best_mixed_with: { ar: ['فوق مرطب خفيف (أثناء فترة الروكوتان).'], en: ['Over a light moisturizer (during Accutane).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الشفاه شديدة الجفاف والمتشققة، والشفاه المتضررة من علاجات حب الشباب الفموية القوية.', en: 'Severely dry and cracked lips, and lips damaged by strong oral acne treatments.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true, 
        notes: { 
            ar: 'قوام غير مرئي يمتص بسرعة ولا يترك أثراً دهنياً مزعجاً أو طبقة بيضاء. ممتاز للأطفال الذين يلعقون شفاههم باستمرار شتاءً.', 
            en: 'Invisible texture that absorbs quickly, leaving no annoying greasy residue or white cast. Excellent for children who constantly lick their lips in winter.' 
        }
    }
});

// [11] LA ROCHE POSAY LIPIKAR SYNDET AP+ CREAM WASH
window.deepProductsList.push({
    id: 'lrp_lipikar_syndet_ap', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار سينديت AP+ (كريم غسول مرمم)', en: 'Lipikar Syndet AP+ Cream Wash' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { 
            ar: 'فسيولوجي (خالٍ من الصابون القلوي الذي يدمر حاجز الجلد التأتبي)', 
            en: 'Physiological (Free of alkaline soap that destroys the atopic skin barrier)' 
        },
        mechanism: { 
            ar: 'قاعدة غسيل لطيفة للغاية تعمل بتقنية <span class="glossary-term" onclick="openGlossary(\'aqua_posae_filiformis\')">APF</span> لتهدئة تهيج الجلد وتقليل الرغبة الشديدة في الحك منذ الاستحمام الأول.', 
            en: 'Ultra-gentle cleansing base utilizing <span class="glossary-term" onclick="openGlossary(\'aqua_posae_filiformis\')">APF</span> to soothe skin irritation and reduce intense itching urge from the first shower.' 
        },
        patient_benefit: { 
            ar: 'ينظف دون تجريد الجلد من زيوته، يعيد بناء الحاجز الدهني فوراً أثناء الاستحمام، ويقلل من نوبات جفاف الجلد الشديدة.', 
            en: 'Cleanses without stripping oils, instantly rebuilds the lipid barrier during the shower, and reduces severe dryness flare-ups.' 
        },
        active_ingredients: [
            { name: 'Shea Butter', concentration: '10%', role: { ar: 'تعويض دهون البشرة وتغذيتها أثناء الغسيل.', en: 'Replenishing skin lipids and nourishing during wash.' } },
            { name: 'Niacinamide', concentration: 'Active | فعال', role: { ar: 'مضاد قوي للحكة والالتهاب.', en: 'Potent anti-pruritic and anti-inflammatory.' } },
            { name: 'Aqua Posae Filiformis', concentration: 'Patented | براءة اختراع', role: { ar: 'إعادة توازن بكتيريا الجلد النافعة لمنع الجفاف.', en: 'Rebalancing beneficial skin bacteria to prevent dryness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً أثناء الاستحمام.', en: 'Daily during bathing.' },
        expected_duration: { 
            ar: 'راحة من الحكة والشد فور الخروج من الاستحمام. الاستخدام الدائم يقلل من حدة نوبات الإكزيما.', 
            en: 'Relief from itching and tightness immediately after showering. Continuous use reduces the severity of eczema flare-ups.' 
        },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الطبي).', en: 'Step 1 (Medical Cleansing).' },
        routine_step_number: 1,
        application: { 
            ar: 'يدلك على بشرة مبللة (الوجه والجسم)، ثم يشطف جيداً بالماء. يجب تجنب استخدام الماء الشديد الحرارة.', 
            en: 'Massage onto wet skin (face and body), then rinse thoroughly. Extremely hot water must be avoided.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['الليفة الخشنة أو إسفنج الاستحمام (تزيد الإكزيما وتجرح الجلد).'], en: ['Harsh loofahs or bath sponges (worsens eczema and scratches skin).'] }, 
            best_mixed_with: { ar: ['ليبيكار بوم AP+M كمرطب فوري بعده.'], en: ['Lipikar Baume AP+M as an immediate post-shower moisturizer.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الجفاف، الإكزيما التأتبية، وقشرة الرأس لدى الرضع (Cradle cap).', en: 'Severe dryness, atopic eczema, and cradle cap in infants.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true, 
        notes: { 
            ar: 'تركيبة آمنة تماماً لحديثي الولادة والرضع. يمكن استخدامه لغسل فروة رأس الرضيع بلطف لتقليل القشرة الدهنية (قرف اللبن).', 
            en: 'Completely safe formula for newborns and infants. Can be gently used to wash a baby\'s scalp to reduce cradle cap.' 
        }
    }
});

// [12] LA ROCHE POSAY LIPIKAR LAIT UREA 5+ SHEA BUTTER
window.deepProductsList.push({
    id: 'lrp_lipikar_urea_5', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار ليت يوريا 5+ (لوشن منعم للبشرة الخشنة)', en: 'Lipikar Lait Urea 5+ Shea Butter' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { 
            ar: 'حمضي قليلاً (لتعزيز فعالية اليوريا كعامل مقشر لطيف للجلد الميت)', 
            en: 'Slightly acidic (To enhance the efficacy of Urea as a gentle exfoliator for dead skin)' 
        },
        mechanism: { 
            ar: 'يجمع بين 5% يوريا وعامل التقشير <span class="glossary-term" onclick="openGlossary(\'hepes\')">HEPES</span> لإذابة القشور وتنعيم الجلد الملمس بشكل فسيولوجي، مع زبدة الشيا لتعويض المرونة المفقودة.', 
            en: 'Combines 5% Urea and <span class="glossary-term" onclick="openGlossary(\'hepes\')">HEPES</span> to physiologically dissolve scales and smooth texture, with Shea Butter to restore elasticity.' 
        },
        patient_benefit: { 
            ar: 'يعالج بفعالية "جلد الوزة" (KP) والخشونة الشديدة الناتجة عن الجفاف، يزيل القشور فوراً، ويهدئ البشرة الحساسة.', 
            en: 'Effectively treats Keratosis Pilaris (KP) and severe roughness from dryness, instantly removes scales, and soothes sensitive skin.' 
        },
        active_ingredients: [
            { name: 'Urea', concentration: '5%', role: { ar: 'ترطيب عميق وتقشير القشور السطحية الخشنة.', en: 'Deep hydration and exfoliating rough surface scales.' } },
            { name: 'HEPES', concentration: 'Active | فعال', role: { ar: 'تنشيط عملية التقشير الفسيولوجي الطبيعي للجلد.', en: 'Activating the natural physiological skin exfoliation process.' } },
            { name: 'Allantoin', concentration: 'Soothing | مهدئ', role: { ar: 'تقليل تهيج البشرة الخشنة والملتهبة.', en: 'Reducing irritation in rough and inflamed skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        expected_duration: { 
            ar: 'يلاحظ تنعيم فوري للقشور. يستغرق من 2-4 أسابيع للتقليل الملحوظ من مشكلة "جلد الوزة" على الذراعين.', 
            en: 'Immediate smoothing of scales. Takes 2-4 weeks for a noticeable reduction in Keratosis Pilaris on arms.' 
        },
        step_in_routine: { ar: 'ترطيب وعلاج الجسم.', en: 'Body hydration and treatment.' },
        routine_step_number: 2,
        application: { 
            ar: 'يدلك على بشرة الجسم النظيفة، مع التركيز على المناطق الخشنة جداً (مثل الأكواع والأذرع والأرجل).', 
            en: 'Massage onto clean body skin, focusing heavily on very rough areas (like elbows, arms, and legs).' 
        },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات الأحماض القوية جداً (مثل الجليكوليك عالي التركيز) على نفس المنطقة لتجنب التحسس.'], en: ['Very strong acid exfoliants (like high-conc Glycolic) on the same area to avoid sensitization.'] }, 
            best_mixed_with: { ar: ['غسول ليبيكار سينديت لتنظيف لطيف.'], en: ['Lipikar Syndet wash for gentle cleansing.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الخشنة، جفاف الشيخوخة، والتقرن الشعري (جلد الوزة - KP).', en: 'Rough skin, senile dryness, and Keratosis Pilaris (KP).' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true, 
        notes: { 
            ar: 'لوشن مخصص للجسم فقط. ممتاز لكبار السن الذين يعانون من جفاف وتقشر جلدي شديد. لا يترك ملمساً دهنياً رغم قوته.', 
            en: 'Lotion intended for body use only. Excellent for the elderly suffering from severe skin dryness and flaking. Non-greasy despite its potency.' 
        }
    }
});

// [13] LA ROCHE POSAY LIPIKAR BAUME AP+M
window.deepProductsList.push({
    id: 'lrp_lipikar_baume_apm', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار بوم AP+M (بلسم ثلاثي المفعول)', en: 'Lipikar Baume AP+M' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { 
            ar: 'متوازن تماماً', 
            en: 'Perfectly balanced' 
        },
        mechanism: { 
            ar: 'يعمل بتقنية <span class="glossary-term" onclick="openGlossary(\'micro_m_tech\')">Micro-M</span> لإعادة توازن الميكروبيوم بالكامل، ومنع تكاثر البكتيريا العنقودية التي تزيد من نوبات التهيج الحادة للبشرة التأتبية.', 
            en: 'Utilizes <span class="glossary-term" onclick="openGlossary(\'micro_m_tech\')">Micro-M</span> technology to fully rebalance the microbiome, preventing Staph bacteria overgrowth that exacerbates acute atopic flare-ups.' 
        },
        patient_benefit: { 
            ar: 'تسكين فوري وقوي للحكة المزعجة، يوفر ترطيباً عميقاً يستمر لـ 48 ساعة، ويمنع عودة نوبات الإكزيما لفترات طويلة (Anti-relapse).', 
            en: 'Instant, powerful relief from severe itching, provides deep 48-hour hydration, and prevents eczema relapse for extended periods (Anti-relapse).' 
        },
        active_ingredients: [
            { name: 'Aqua Posae + Microresyl', concentration: 'AP+M Tech', role: { ar: 'منع تكوين الأغشية الحيوية للبكتيريا الضارة (Biofilms).', en: 'Preventing harmful bacterial biofilm formation.' } },
            { name: 'Shea Butter', concentration: '20%', role: { ar: 'ترميم عميق لحاجز الدهون وتعويض النقص الحاد.', en: 'Deep repair of the lipid barrier and compensating for severe depletion.' } },
            { name: 'Niacinamide', concentration: '4%', role: { ar: 'تهدئة عصبية للجلد وتقليل الالتهاب والألم.', en: 'Neurological skin soothing, reducing inflammation and pain.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً (على الوجه والجسم).', en: 'Once daily (face and body).' },
        expected_duration: { 
            ar: 'يوقف الرغبة في الحك فور تطبيقه. يستخدم بانتظام كعلاج وقائي لمنع عودة نوبات الجفاف العنيف.', 
            en: 'Stops the urge to scratch immediately upon application. Used regularly as preventive care to stop severe dryness flare-ups from returning.' 
        },
        step_in_routine: { ar: 'الترطيب العلاجي (مباشرة بعد الاستحمام).', en: 'Therapeutic hydration (immediately post-bath).' },
        routine_step_number: 2,
        application: { 
            ar: 'يُطبق على البشرة وهي رطبة قليلاً لضمان امتصاص أسرع وحبس أكبر قدر من الماء (قاعدة الثلاث دقائق بعد الاستحمام).', 
            en: 'Apply to slightly damp skin to ensure faster absorption and trap maximum water (the 3-minute post-shower rule).' 
        },
        layering: { 
            do_not_mix_with: { ar: ['المنتجات العطرية القوية.'], en: ['Strong fragranced products.'] }, 
            best_mixed_with: { ar: ['جميع علاجات الطبيب الموصوفة للإكزيما (كورتيزون موضعي).'], en: ['All physician-prescribed eczema treatments (topical cortisone).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الإكزيما التأتبية، الجفاف الشديد جداً والمؤلم، والمواليد ذوي البشرة شديدة التحسس.', en: 'Atopic eczema, extremely severe/painful dryness, and newborns with highly sensitive skin.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true, 
        notes: { 
            ar: 'آمن تماماً للرضع منذ اليوم الأول للولادة. قوامه الحديث يمتص بسرعة فائقة ولا يلتصق بالملابس رغم غناه بزبدة الشيا.', 
            en: 'Completely safe for infants from day one. Its modern texture absorbs ultra-fast and does not stick to clothes despite being rich in Shea Butter.' 
        }
    }
});

// [14] LA ROCHE POSAY TOLERIANE DERMALLERGO EYE CREAM
window.deepProductsList.push({
    id: 'lrp_toleriane_eye', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'توليريان ديرماليرجو للعين (كريم مهدئ)', en: 'Toleriane Dermallergo Eye Cream' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { 
            ar: 'فسيولوجي (مطابق تماماً لدرجة حموضة دموع العين لمنع أي حرقان)', 
            en: 'Physiological (Perfectly matches tear pH to prevent any stinging)' 
        },
        mechanism: { 
            ar: 'يستهدف تهيج جفن العين الرقيق والانتفاخات التحسسية باستخدام <span class="glossary-term" onclick="openGlossary(\'neurosensine\')">نيوروسينسين</span> لتهدئة النهايات العصبية السطحية.', 
            en: 'Targets delicate eyelid irritation and allergic puffiness using <span class="glossary-term" onclick="openGlossary(\'neurosensine\')">Neurosensine</span> to soothe superficial nerve endings.' 
        },
        patient_benefit: { 
            ar: 'راحة فورية من الحكة، الاحمرار، والوخز حول العين، مع توفير ترطيب مكثف ومهدئ يدوم طويلاً.', 
            en: 'Instant relief from itching, redness, and stinging around eyes, providing long-lasting intense soothing hydration.' 
        },
        active_ingredients: [
            { name: 'Sphingobioma', concentration: 'Bacterial Extract', role: { ar: 'تقوية بكتيريا الجلد النافعة لحماية محيط العين.', en: 'Strengthening beneficial skin bacteria to protect eye contour.' } },
            { name: 'Neurosensine', concentration: 'Active | فعال', role: { ar: 'تهدئة عصبية فورية وقوية.', en: 'Instant and potent neurological soothing.' } },
            { name: 'Niacinamide', concentration: 'Repairing | مرمم', role: { ar: 'تقليل احمرار والتهاب جفن العين.', en: 'Reducing eyelid redness and inflammation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        expected_duration: { 
            ar: 'يخفف التحسس والانتفاخ خلال دقائق. يستخدم يومياً لتقوية حاجز العين الرقيق.', 
            en: 'Relieves allergy and puffiness in minutes. Used daily to strengthen the delicate eye barrier.' 
        },
        step_in_routine: { ar: 'عناية محيط العين.', en: 'Eye contour care.' },
        routine_step_number: 2,
        application: { 
            ar: 'يطبق بلطف شديد باستخدام تقنية <span class="glossary-term" onclick="alert(\'التربيت (Dabbing): استخدام إصبع البنصر لتوزيع الكريم بطبطبة خفيفة جداً حول عظمة العين دون سحب أو فرك الجلد الرقيق.\')">التربيت (Dabbing)</span> دون أي فرك أو شد للجلد.', 
            en: 'Apply very gently using the <span class="glossary-term" onclick="alert(\'Dabbing Technique: Using the ring finger to lightly tap the cream around the orbital bone without pulling or rubbing the delicate skin.\')">Dabbing</span> technique, with zero rubbing or pulling.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول القوي تحت العين في نفس الوقت (لتجنب التحسس الشديد).'], en: ['Strong retinol under eyes simultaneously (to avoid severe sensitization).'] }, 
            best_mixed_with: { ar: ['توليريان غسول حليبي لتنظيف مكياج العين بأمان.'], en: ['Toleriane milky cleanser for safe eye makeup removal.'] } 
        }
    },
    precautions: {
        indications: { ar: 'محيط العين الحساس، الأكزيما والتهاب الجفن، والعيون المعرضة للحساسية الموسمية أو المكياج.', en: 'Sensitive eye contour, eyelid eczema/dermatitis, and eyes prone to seasonal or makeup allergies.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true, 
        notes: { 
            ar: 'يأتي في عبوة معقمة 100% (Ultra-hermetic) تمنع دخول الهواء والملوثات للحفاظ على النقاء التام للتركيبة. يوضع على الجفون العلوية والسفلية بأمان.', 
            en: 'Comes in a 100% Ultra-hermetic sterile packaging preventing air and contaminants, ensuring absolute formula purity. Safely applied to upper and lower eyelids.' 
        }
    }
});

// [15] ANTHELIOS AGE CORRECT SPF 50 (Invisible / Daily Light Cream)
window.deepProductsList.push({
    id: 'lrp_anthelios_age_correct_light', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس إيدج كوريكت (كريم تصحيح التجاعيد)', en: 'Anthelios Age Correct Daily Light Cream SPF 50' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { 
            ar: 'متوازن ليكون لطيفاً للاستخدام اليومي المستمر', 
            en: 'Balanced to be gentle for continuous daily use' 
        },
        mechanism: { 
            ar: 'يجمع بين الحماية القصوى وتقنية <span class="glossary-term" onclick="openGlossary(\'cellox_b3\')">CELLOX-B3</span> لتصحيح علامات التلف الضوئي والشيخوخة الناتجة عن الشمس، مدعوماً بحمض الهيالورونيك المجزأ لملء التجاعيد.', 
            en: 'Combines maximum protection with <span class="glossary-term" onclick="openGlossary(\'cellox_b3\')">CELLOX-B3</span> technology to correct photo-damage and sun-induced aging, supported by fragmented Hyaluronic Acid to plump wrinkles.' 
        },
        patient_benefit: { 
            ar: 'يقلل التجاعيد بنسبة 15% والبقع الداكنة بنسبة 26%، ويوفر ترطيباً عميقاً يدوم 24 ساعة بفضل ملمسه الخفيف وغير الدهني.', 
            en: 'Reduces wrinkles by 15% and dark spots by 26%, providing deep 24h hydration thanks to its lightweight, non-greasy texture.' 
        },
        active_ingredients: [
            { name: 'Fragmented Hyaluronic Acid', concentration: 'Concentrated | مركز', role: { ar: 'ملء الخطوط الدقيقة وترطيب عميق للطبقات الداخلية.', en: 'Plumping fine lines and deep hydration of inner layers.' } },
            { name: 'PHE-Resorcinol', concentration: 'Active | فعال', role: { ar: 'تفتيح البقع الداكنة وتوحيد لون البشرة بقوة.', en: 'Brightening dark spots and powerfully evening skin tone.' } },
            { name: 'Niacinamide', concentration: 'Soothing | مهدئ', role: { ar: 'تقليل الالتهاب المخفي وترميم الحاجز.', en: 'Reducing hidden inflammation and barrier repair.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً كل صباح.', en: 'Daily every morning.' },
        expected_duration: { 
            ar: 'حماية فورية. تظهر نتائج تصحيح التجاعيد والبقع بشكل ملحوظ بعد 4 أسابيع من الاستخدام اليومي.', 
            en: 'Instant protection. Wrinkle and spot correction results are noticeable after 4 weeks of daily use.' 
        },
        step_in_routine: { ar: 'الخطوة الأخيرة الصباحية (كواقي ومرطب معالج في آن واحد).', en: 'Final AM step (as both SPF and treatment moisturizer).' },
        routine_step_number: 4,
        application: { 
            ar: 'يوضع على كامل الوجه والرقبة بسخاء قبل التعرض للشمس لتوفير حماية وتصحيح شامل.', 
            en: 'Apply generously to the entire face and neck before sun exposure to provide comprehensive protection and correction.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['المنظفات أو المقشرات القاسية صباحاً لتجنب التحسس مع الفلاتر.'], en: ['Harsh cleansers or exfoliants in the AM to avoid sensitization with filters.'] }, 
            best_mixed_with: { ar: ['سيروم فيتامين C10 الصافي (يوضع تحته كدرع مضاد للأكسدة).'], en: ['Pure Vitamin C10 Serum (applied underneath as an antioxidant shield).'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد المبكرة، فقدان مرونة الجلد، البقع العمرية، والبهتان الناتج عن التعرض الطويل للشمس.', en: 'Premature wrinkles, loss of skin elasticity, age spots, and dullness from prolonged sun exposure.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false, 
        notes: { 
            ar: 'تم اختباره تحت إشراف أطباء الجلد والعيون. تركيبته ذكية (Non-comedogenic) لا تسد المسام أبداً رغم غناها بالمرطبات.', 
            en: 'Dermatologically and ophthalmologically tested. Its smart (Non-comedogenic) formula never clogs pores despite being rich in moisturizers.' 
        }
    }
});

// [16] ANTHELIOS AGE CORRECT SPF 50 TINTED
window.deepProductsList.push({
    id: 'lrp_anthelios_age_correct_tinted', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس إيدج كوريكت الملون (تغطية تجميلية)', en: 'Anthelios Age Correct Gel-Cream SPF 50 Tinted' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { 
            ar: 'متوازن', 
            en: 'Balanced' 
        },
        mechanism: { 
            ar: 'يحتوي على نفس فاعلية تصحيح التجاعيد مع إضافة <span class="glossary-term" onclick="alert(\'أصباغ معدنية (Mineral Pigments): توفر تغطية تجميلية وتعمل كدرع فيزيائي قوي يعكس الضوء المرئي الأزرق المسبب للكلف.\')">أصباغ معدنية</span> عالية التغطية تحجب الضوء المرئي المسبب للتصبغ، لتوفير مظهر متجانس فوراً.', 
            en: 'Same wrinkle-correcting efficacy with added <span class="glossary-term" onclick="alert(\'Mineral Pigments: Provide cosmetic coverage and act as a strong physical shield reflecting Blue Visible Light that causes melasma.\')">Mineral Pigments</span> that block visible light causing pigmentation, instantly providing a uniform look.' 
        },
        patient_benefit: { 
            ar: 'يوفر حماية وتصحيحاً يومياً للتجاعيد يغني تماماً عن استخدام كريم الأساس (Foundation)، مع لمسة نهائية طبيعية تخفي العيوب.', 
            en: 'Provides daily protection and wrinkle correction that completely replaces foundation, with a natural finish hiding imperfections.' 
        },
        active_ingredients: [
            { name: 'Mineral Iron Oxides', concentration: 'High | عالي', role: { ar: 'توفير التغطية وصد الضوء الأزرق الشاشات والشمس.', en: 'Providing coverage and blocking Blue Light from screens and sun.' } },
            { name: 'LHA', concentration: 'Exfoliating | مقشر', role: { ar: 'تنعيم نسيج الجلد السطحي لتحسين التغطية التجميلية.', en: 'Smoothing surface skin texture to improve cosmetic coverage.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً (يومياً).', en: 'Morning (Daily).' },
        expected_duration: { 
            ar: 'توحيد فوري للون. وتصحيح فعلي للتجاعيد والبقع يظهر بعد شهر من الاستخدام المتواصل.', 
            en: 'Instant tone evening. Actual correction of wrinkles and spots appears after a month of continuous use.' 
        },
        step_in_routine: { ar: 'خطوة الحماية والتغطية التجميلية معاً.', en: 'Protection and cosmetic coverage step combined.' },
        routine_step_number: 4,
        application: { 
            ar: 'يوزع بالتساوي بالتربيت السريع لتجنب <span class="glossary-term" onclick="alert(\'التكتل (Pilling): تجمع المنتج على شكل كرات صغيرة عند فركه بقوة أو وضعه فوق منتج زيتي غير ممتص.\')">التكتل (Pilling)</span> وللحصول على تغطية مثالية لا تشوبها شائبة.', 
            en: 'Distribute evenly with quick patting to avoid <span class="glossary-term" onclick="alert(\'Pilling: The product balling up when rubbed harshly or applied over an unabsorbed oily product.\')">Pilling</span> and to achieve a flawless coverage.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['كريمات الأساس الثقيلة جداً (سيجعل البشرة تبدو مكتومة).'], en: ['Very heavy foundations (will make the skin look cakey).'] }, 
            best_mixed_with: { ar: ['سيروم هيالو B5 للترطيب والنفخ.'], en: ['Hyalu B5 Serum for hydration and plumping.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة غير موحدة اللون، وجود علامات الشيخوخة، والاحتياج لتغطية خفيفة يومية تغني عن المكياج.', en: 'Uneven skin tone, aging signs, and the need for light daily coverage replacing makeup.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false, 
        notes: { 
            ar: 'لون التغطية (Tint) مصمم ليتكيف بشكل ممتاز مع درجات البشرة الحنطية والقمحية.', 
            en: 'The tint color is designed to adapt excellently to medium and olive skin tones.' 
        }
    }
});

// [17] ANTHELIOS UVMUNE 400 OIL CONTROL GEL-CREAM SPF 50+ (Clear)
window.deepProductsList.push({
    id: 'lrp_anthelios_uvmune_oil_control', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس يو في ميون 400 (للتحكم باللمعان)', en: 'Anthelios UVMune 400 Oil Control Gel-Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { 
            ar: 'متوازن ومستقر جداً', 
            en: 'Balanced and highly stable' 
        },
        mechanism: { 
            ar: 'يستخدم أقوى فلتر <span class="glossary-term" onclick="openGlossary(\'uvmune_400\')">Mexoryl 400</span> ضد الأشعة الطويلة جداً، مدمجاً بتقنية <span class="glossary-term" onclick="openGlossary(\'airlicium\')">Airlicium</span> الذكية للتحكم البيولوجي في الإفرازات واللمعان.', 
            en: 'Features the strongest <span class="glossary-term" onclick="openGlossary(\'uvmune_400\')">Mexoryl 400</span> filter against ultra-long UVA, combined with smart <span class="glossary-term" onclick="openGlossary(\'airlicium\')">Airlicium</span> for biological sebum and shine control.' 
        },
        patient_benefit: { 
            ar: 'حماية مطلقة بلمسة جافة (Dry-touch) تحافظ على البشرة مطفية لمدة 12 ساعة، لا يترك أي أثر دهني أو لمعة بيضاء، ومقاوم جداً للماء والعرق.', 
            en: 'Absolute protection with a 12h Dry-touch finish keeping skin matte, leaves no greasy or white cast, and is highly water/sweat resistant.' 
        },
        active_ingredients: [
            { name: 'Mexoryl 400', concentration: 'Patented | براءة اختراع', role: { ar: 'حماية درع من أعمق الأشعة الشمسية ضرراً.', en: 'Shield protection against the deepest damaging UV rays.' } },
            { name: 'Airlicium™', concentration: 'Sebo-control', role: { ar: 'امتصاص فوري وضخم لزيوت الوجه والعرق.', en: 'Instant and massive absorption of facial oil and sweat.' } },
            { name: 'Zinc PCA', concentration: 'Active | فعال', role: { ar: 'تنظيم إفراز الدهون من الغدد وتقليل البكتيريا.', en: 'Sebo-regulation from glands and bacteria reduction.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (يُجدد بانتظام عند التعرض المستمر).', en: 'Daily (Reapply regularly under continuous exposure).' },
        expected_duration: { 
            ar: 'مفعول "المات" (المطفي) يستمر لـ 12 ساعة متواصلة. حماية دائمة من أضرار الشمس وتوسع المسام الدهنية.', 
            en: 'Matte effect lasts for 12 continuous hours. Permanent protection from sun damage and oily pore enlargement.' 
        },
        step_in_routine: { ar: 'الخطوة الأخيرة الإلزامية للبشرة الدهنية.', en: 'Mandatory final step for oily skin.' },
        routine_step_number: 4,
        application: { 
            ar: 'يوضع بسخاء على الوجه. قوامه الجل-كريم الفريد يمتص في ثوانٍ ليترك البشرة جافة تماماً.', 
            en: 'Apply generously to face. Its unique gel-cream texture absorbs in seconds leaving skin completely dry.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['المرطبات الزيتية الكثيفة (تفسد مفعول المات وتسبب لمعاناً مزعجاً).'], en: ['Heavy oily moisturizers (disrupts matte effect and causes annoying shine).'] }, 
            best_mixed_with: { ar: ['مجموعة إيفاكلار بالكامل لتنظيم الإفرازات.'], en: ['Entire Effaclar range for sebum regulation.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية والمختلطة، المسام الواسعة، وحالات اللمعان الزائد تحت حرارة الشمس المرتفعة.', en: 'Oily and combination skin, enlarged pores, and excess shine under high sun heat.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false, 
        notes: { 
            ar: 'آمن جداً لمحيط العين ولا يسبب تدميع العين (Anti-eye stinging). تركيبة خالية من العطور لمنع التحسس في الجو الحار.', 
            en: 'Very safe for the eye contour without causing tearing (Anti-eye stinging). Fragrance-free formula to prevent sensitization in hot weather.' 
        }
    }
});

// [18] ANTHELIOS UVMUNE 400 OIL CONTROL TINTED SPF 50+
window.deepProductsList.push({
    id: 'lrp_anthelios_uvmune_oil_control_tinted', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس يو في ميون 400 الملون (للتحكم باللمعان)', en: 'Anthelios UVMune 400 Oil Control Tinted' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { 
            ar: 'متوازن', 
            en: 'Balanced' 
        },
        mechanism: { 
            ar: 'نفس نسخة الـ Oil Control الشفافة مع إضافة أصباغ معدنية توفر توحيداً فورياً للون البشرة، وحماية مضاعفة من التصبغات الناتجة عن الضوء المرئي واللون الأزرق.', 
            en: 'Same as clear Oil Control version with added mineral pigments for instant skin tone evening, and double protection against visible/blue light-induced pigmentation.' 
        },
        patient_benefit: { 
            ar: 'أقوى حماية في العالم للبشرة الدهنية مع تغطية طبيعية مطفية تمنع ظهور اللمعان والعيوب (كآثار الحبوب) طوال اليوم.', 
            en: 'World\'s strongest protection for oily skin with a natural matte coverage that prevents shine and blemishes (like acne marks) all day.' 
        },
        active_ingredients: [
            { name: 'Mexoryl 400', concentration: 'Patented | براءة اختراع', role: { ar: 'صد الأشعة فوق البنفسجية الطويلة جداً التي تصل للأدمة.', en: 'Blocking ultra-long UVA rays that reach the dermis.' } },
            { name: 'Iron Oxides', concentration: 'Tinted | ملون', role: { ar: 'حماية إضافية من الضوء الأزرق للشاشات وتوحيد لون الشوائب.', en: 'Additional Blue Light protection and unifying blemish tone.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً.', en: 'Morning.' },
        expected_duration: { 
            ar: 'تغطية ولون غير لامع يدومان طويلاً بفضل جزيئات إيرليسيوم التي تمتص الزهم بمجرد إفرازه.', 
            en: 'Coverage and matte finish last long thanks to Airlicium molecules absorbing sebum as soon as it\'s secreted.' 
        },
        step_in_routine: { ar: 'الخطوة الأخيرة (حماية قوية + تغطية للبشرة الدهنية).', en: 'Final step (Strong protection + oily skin coverage).' },
        routine_step_number: 4,
        application: { 
            ar: 'يوضع على وجه نظيف ويوزع بسرعة لتجنب جفافه وتكتله بفضل لمسته الجافة السريعة.', 
            en: 'Apply to clean face and distribute quickly to avoid drying and pilling due to its fast dry-touch finish.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['الزيوت أو المرطبات الثقيلة جداً.'], en: ['Heavy oils or moisturizers.'] }, 
            best_mixed_with: { ar: ['إيفاكلار مات مرطب كقاعدة تحته.'], en: ['Effaclar Mat moisturizer as a base underneath.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية والمختلطة التي تعاني من آثار الحبوب الحمراء والبنية واللمعان المزعج.', en: 'Oily/combination skin with red/brown post-acne marks and annoying shine.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false, 
        notes: { 
            ar: 'مقاوم جداً للتعرق المفرط. لا يترك أثراً دهنياً ويوفر تغطية تجميلية خفيفة تسمح للبشرة بالتنفس.', 
            en: 'Highly resistant to excessive sweating. Leaves no greasy film and provides a light cosmetic coverage allowing skin to breathe.' 
        }
    }
});
