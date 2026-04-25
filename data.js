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
// ==========================================
// 📚 قاموس المصطلحات والتقنيات - Bioderma
// ==========================================

window.glossaryDict = window.glossaryDict || {};

window.glossaryDict['daf_patent'] = { title: { ar: 'براءة اختراع D.A.F.™ 🛡️', en: 'D.A.F.™ Patent 🛡️' }, desc: { ar: 'تركيبة جلدية متقدمة ترفع عتبة تحمل البشرة وتعزز مناعتها ومقاومتها للعوامل البيئية القاسية.', en: 'Dermatological Advanced Formulation that raises the skin\'s tolerance threshold and boosts its immunity.' } };
window.glossaryDict['rosactiv'] = { title: { ar: 'براءة اختراع Rosactiv™ 🔴', en: 'Rosactiv™ Patent 🔴' }, desc: { ar: 'تقنية حصرية تستهدف العامل المسؤول عن توسع الأوعية الدموية (VEGF) لتقليل الاحمرار المستمر.', en: 'Exclusive tech targeting the factor responsible for vasodilation (VEGF) to reduce persistent redness.' } };
window.glossaryDict['defensive_tech'] = { title: { ar: 'تقنية Defensive 🧬', en: 'Defensive Technology 🧬' }, desc: { ar: 'تقنية بيولوجية تقوي آليات الدفاع الطبيعية للجلد ضد الإجهاد التأكسدي والالتهاب الحضري.', en: 'Biological technology strengthening skin\'s natural defense mechanisms against oxidative stress.' } };
window.glossaryDict['fluidactiv'] = { title: { ar: 'براءة اختراع Fluidactiv™ 💧', en: 'Fluidactiv™ Patent 💧' }, desc: { ar: 'تمنع أكسدة وتصلب الزهم (دهون البشرة)، مما يحافظ على سيولته ويمنع انسداد المسام نهائياً.', en: 'Prevents the oxidation and thickening of sebum, maintaining its fluidity and permanently stopping clogged pores.' } };
window.glossaryDict['agaric_acid'] = { title: { ar: 'حمض الأغاريك 🍄', en: 'Agaric Acid 🍄' }, desc: { ar: 'مستخلص فطر طبيعي يعمل كقابض قوي وفعال لشد جدار المسام المترهلة.', en: 'A natural mushroom extract acting as a potent astringent to tighten sagging pore walls.' } };
window.glossaryDict['isotretinoin_companion'] = { title: { ar: 'علاج مصاحب (Companion Care) 🤝', en: 'Companion Care 🤝' }, desc: { ar: 'مستحضر طبي مصمم خصيصاً لتعويض الجفاف العنيف وإصلاح الجلد أثناء استخدام أدوية الروكوتان القوية.', en: 'Medical product specifically designed to compensate for severe dryness and repair skin during Accutane use.' } };
window.glossaryDict['double_cleansing'] = { title: { ar: 'التنظيف المزدوج 🧼', en: 'Double Cleansing 🧼' }, desc: { ar: 'استخدام منظف مائي/ميسيلار كخطوة أولى لإذابة المكياج والواقي الشمسي، يليه غسول رغوي لتنظيف المسام العميقة.', en: 'Using micellar water first to dissolve makeup and SPF, followed by a foaming gel to deeply clean pores.' } };
window.glossaryDict['flash_mask'] = { title: { ar: 'ماسك الفلاش ⚡', en: 'Flash Mask ⚡' }, desc: { ar: 'ترك الغسول الرغوي اللطيف على الوجه لمدة دقيقة قبل الشطف لتفكيك الشوائب العميقة دون فرك ميكانيكي.', en: 'Leaving a gentle cleanser on the face for one minute before rinsing to dissolve deep impurities without rubbing.' } };
window.glossaryDict['cooling_effect'] = { title: { ar: 'تأثير التبريد ❄️', en: 'Cooling Effect ❄️' }, desc: { ar: 'خفض درجة حرارة الجلد موضعياً لتقليص الأوعية الدموية المتمددة وتقليل الاحمرار المرئي بشكل فوري.', en: 'Locally lowering skin temperature to constrict dilated blood vessels and instantly reduce visible redness.' } };
window.glossaryDict['biological_shield'] = { title: { ar: 'الدرع الحيوي 🛡️', en: 'Biological Shield 🛡️' }, desc: { ar: 'تقوية دفاعات الجلد الذاتية البيولوجية ضد الملوثات والمهيجات بدلاً من مجرد عزله بطبقة سطحية.', en: 'Strengthening the skin\'s biological defenses against pollutants rather than just superficially isolating it.' } };
window.glossaryDict['lipid_replenishment'] = { title: { ar: 'تعويض الليبيدات 🧈', en: 'Lipid Replenishment 🧈' }, desc: { ar: 'إمداد البشرة بالدهون الأساسية (السيراميد والأوميجا) التي تفتقر إليها لسد الفجوات في الحاجز الجلدي.', en: 'Supplying skin with essential lipids it lacks to fill gaps in the skin barrier.' } };
window.glossaryDict['low_friction_cleansing'] = { title: { ar: 'تنظيف احتكاكي منخفض 🪶', en: 'Low-Friction Cleansing 🪶' }, desc: { ar: 'إزالة الشوائب بفاعلية كيميائية آمنة دون الحاجة للفرك الفيزيائي الذي يخدش حاجز البشرة الحساسة.', en: 'Removing impurities safely without physical rubbing that scratches the sensitive skin barrier.' } };
window.glossaryDict['phasic_dissolution'] = { title: { ar: 'الإذابة المرحلية 🌊', en: 'Phasic Dissolution 🌊' }, desc: { ar: 'استخدام الطور الزيتي لتفكيك المكياج المقاوم للماء، ثم الطور المائي لإزالة البقايا دون ترك غشاء زيتي.', en: 'Using an oily phase to break down makeup, and an aqueous phase to remove residue without leaving an oil film.' } };
window.glossaryDict['microbial_astringent'] = { title: { ar: 'قابض مسام ميكروبي 🦠', en: 'Microbial Astringent 🦠' }, desc: { ar: 'تنظيف وتضييق المسام مع القضاء على بكتيريا الحبوب في خطوة واحدة دون استخدام كحول مجفف.', en: 'Cleansing and tightening pores while eliminating acne bacteria in one step without drying alcohol.' } };
window.glossaryDict['active_cleansing'] = { title: { ar: 'التنظيف النشط ⏳', en: 'Active Cleansing ⏳' }, desc: { ar: 'السماح لغسول البشرة الدهنية بالبقاء على الوجه لدقيقة لتفعيل عمل الزنك في تذويب الدهون قبل الشطف.', en: 'Allowing oily skin cleanser to sit for a minute to activate Zinc in dissolving sebum before rinsing.' } };
window.glossaryDict['therapeutic_blur'] = { title: { ar: 'خافي عيوب علاجي 🪄', en: 'Therapeutic Blur 🪄' }, desc: { ar: 'منتج يقلص المسام بصرياً بالمساحيق المطفية، وعلاجياً بالأحماض في نفس الوقت، ليكون قاعدة مكياج مثالية.', en: 'A product that visually shrinks pores with powders, and therapeutically with acids, acting as an ideal makeup base.' } };
window.glossaryDict['biomimetic_compensation'] = { title: { ar: 'التعويض الحيوي 🧬', en: 'Biomimetic Compensation 🧬' }, desc: { ar: 'إمداد البشرة الدهنية المجففة طبياً بسيراميدات مشابهة لدهونها الطبيعية لترميمها دون إثارة حبوب جديدة.', en: 'Supplying medically-dried oily skin with ceramides similar to its natural lipids to repair without breakouts.' } };
window.glossaryDict['sebo_genetic_regulation'] = { title: { ar: 'التنظيم الجيني للزهم ⚙️', en: 'Sebo-genetic Regulation ⚙️' }, desc: { ar: 'تقنية تعيد برمجة جودة الدهون المفرزة لتشبه دهون البشرة الصحية، مما يمنع تصلبها وانسداد المسام.', en: 'Technology reprogramming sebum quality to resemble healthy skin lipids, preventing hardening and pore clogging.' } };

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
// 🧪 5. المنتجات السريرية لـ Bioderma (من 1 إلى 12)
// ==========================================

// [1] Bioderma Sensibio H2O Micellar Water
deepProductsList.push({
    id: 'bio_sensibio_h2o', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو H2O ميسيلار', en: 'Sensibio H2O Micellar Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (درجة حموضة فسيولوجية تحافظ على توازن الميكروبيوم وتمنع تهيج البشرة)', en: '5.5 (Physiological pH maintains microbiome balance and prevents irritation)' },
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
        expected_duration: { ar: 'تنظيف وتهدئة فورية. يقلل من تحسس البشرة على المدى الطويل مع الاستخدام اليومي.', en: 'Instant cleansing and soothing. Reduces skin sensitivity long-term with daily use.' },
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
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'يُعتبر الخطوة الأولى المثالية في <span class="glossary-term" onclick="openGlossary(\'double_cleansing\')">التنظيف المزدوج</span> المسائي، وهو آمن تماماً لتنظيف بشرة الأطفال الرضع من عمر يوم واحد لتجنب تهيج المياه القاسية.', en: 'The ideal first step in evening <span class="glossary-term" onclick="openGlossary(\'double_cleansing\')">Double Cleansing</span>, completely safe for cleansing newborns from day one to avoid hard water irritation.' } 
    }
});

// [2] Bioderma Sensibio Gel Moussant
deepProductsList.push({
    id: 'bio_sensibio_gel', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو جل موسان (غسول رغوي)', en: 'Sensibio Gel Moussant' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (متوازن ليحمي الطبقة الدهنية الطبيعية للجلد الحساس)', en: '5.5 (Balanced to protect the natural lipid layer of sensitive skin)' },
        mechanism: { 
            ar: 'ينظف بلطف باستخدام مواد تحاكي دهون الجلد الطبيعية، مما يحافظ على ترطيب الجلد مدعوماً بـ <span class="glossary-term" onclick="openGlossary(\'daf_patent\')">D.A.F.™</span>.', 
            en: 'Cleanses gently using biomimetic surfactants, preserving skin hydration supported by <span class="glossary-term" onclick="openGlossary(\'daf_patent\')">D.A.F.™</span>.' 
        },
        patient_benefit: { 
            ar: 'يزيد من ترطيب البشرة بنسبة 77% بعد أسبوعين من الاستخدام، ويمنع الشعور بشد الوجه.', 
            en: 'Boosts skin hydration by 77% after 2 weeks of use, preventing tight feeling.' 
        },
        active_ingredients: [
            { name: 'Coco-Glucoside & Glyceryl Oleate', concentration: 'Active | فعال', role: { ar: 'تنظيف فعال مع تعويض الدهون المفقودة.', en: 'Effective cleansing with lipid-restoring action.' } },
            { name: 'Vitamin E', concentration: 'Antioxidant | مضاد أكسدة', role: { ar: 'حماية الخلايا من الإجهاد التأكسدي.', en: 'Protects cells from oxidative stress.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' }, 
        expected_duration: { ar: 'ترطيب ونعومة فورية. يقلل التحسس ويعزز مناعة البشرة خلال أسبوعين.', en: 'Instant hydration and softness. Reduces sensitivity and boosts immunity in 2 weeks.' },
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
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'يمكن تركه على البشرة كـ <span class="glossary-term" onclick="openGlossary(\'flash_mask\')">ماسك فلاش</span> سريع لتهدئة الاحمرار بعد التعرض للشمس. خالي من الصابون ومناسب للأطفال (10+ سنوات).', en: 'Can be left on skin as a quick <span class="glossary-term" onclick="openGlossary(\'flash_mask\')">Flash Mask</span> to soothe post-sun redness. Soap-free, suitable for kids (10+ years).' } 
    }
});

// [3] Bioderma Sensibio AR
deepProductsList.push({
    id: 'bio_sensibio_ar', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو AR (كريم علاج الاحمرار)', en: 'Sensibio AR Anti-Redness Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن (لا يحفز النهايات العصبية المسؤولة عن تمدد الأوعية الدموية)', en: 'Balanced (Does not stimulate nerve endings responsible for vasodilation)' },
        mechanism: { 
            ar: 'يستهدف الآلية البيولوجية للاحمرار من خلال براءة اختراع <span class="glossary-term" onclick="openGlossary(\'rosactiv\')">Rosactiv™</span> لتقليل تمدد الأوعية الدموية.', 
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
        expected_duration: { ar: 'تسكين فوري. تقليل ملحوظ للاحمرار الدائم ونوبات الوردية خلال 4 أسابيع.', en: 'Instant soothing. Visible reduction in permanent redness and rosacea flare-ups within 4 weeks.' },
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
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'يترك <span class="glossary-term" onclick="openGlossary(\'cooling_effect\')">تأثير تبريد</span> فورياً يخمد فورات الوردية النشطة. يحتوي على لآلئ خضراء لتحييد الاحمرار بصرياً (مخصص للبالغين).', en: 'Leaves an instant <span class="glossary-term" onclick="openGlossary(\'cooling_effect\')">Cooling Effect</span> calming active rosacea. Contains green pearls to visually neutralize redness (Adults only).' } 
    }
});

// [4] Bioderma Sensibio Defensive Active Soothing Cream
deepProductsList.push({
    id: 'bio_sensibio_defensive_normal', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو ديفينسيف (كريم مهدئ نشط)', en: 'Sensibio Defensive Active Soothing Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً (لحماية آليات الدفاع الطبيعية للجلد)', en: 'Physiologically Balanced (To protect the skin\'s natural defense mechanisms)' },
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
        expected_duration: { ar: 'تهدئة فورية. تقليل تفاعل البشرة مع البيئة بشكل ملحوظ خلال 4 أسابيع.', en: 'Instant soothing. Visibly reduces skin reactivity to the environment in 4 weeks.' },
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
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'يعمل كـ <span class="glossary-term" onclick="openGlossary(\'biological_shield\')">درع حيوي</span> ضد الملوثات الحضرية بدلاً من مجرد عزل البشرة سطحياً. آمن للاستخدام للأطفال (3+ سنوات).', en: 'Acts as a <span class="glossary-term" onclick="openGlossary(\'biological_shield\')">Biological Shield</span> against urban pollutants rather than just superficially isolating it. Safe for children (3+ years).' }
    }
});

// [5] Bioderma Sensibio Defensive RICH Active Soothing Cream
deepProductsList.push({
    id: 'bio_sensibio_defensive_rich', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو ديفينسيف ريتش (كريم مهدئ مغذي)', en: 'Sensibio Defensive Rich Active Soothing Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن (يحافظ على استقرار الدهون المعوضة الفعالة)', en: 'Balanced (Maintains stability of replenishing active lipids)' },
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
        expected_duration: { ar: 'تغذية تدوم 24 ساعة. ترميم كامل لحاجز الجلد الدفاعي خلال شهر.', en: '24h nourishment. Full defense skin barrier repair in a month.' },
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
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'ممتاز لتطبيق مبدأ <span class="glossary-term" onclick="openGlossary(\'lipid_replenishment\')">تعويض الليبيدات</span> ليلاً للبشرات المتقشرة. مناسب للأطفال (3+ سنوات) والبالغين شتاءً.', en: 'Excellent for applying the <span class="glossary-term" onclick="openGlossary(\'lipid_replenishment\')">Lipid Replenishment</span> principle at night for flaking skin. Suitable for children (3+ years) and adults in winter.' }
    }
});

// [6] Bioderma Sensibio H2O Wipes
deepProductsList.push({
    id: 'bio_sensibio_wipes', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو H2O مناديل ميسيلار', en: 'Sensibio H2O Dermatological Wipes' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (لمنع تهيج الاحتكاك الميكانيكي على البشرة)', en: '5.5 (To prevent mechanical friction irritation on the skin)' },
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
        expected_duration: { ar: 'تنظيف وتهدئة فورية تدوم لساعات.', en: 'Instant cleansing and soothing lasting for hours.' },
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
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'توفر المناديل المشبعة بالميسيلار <span class="glossary-term" onclick="openGlossary(\'low_friction_cleansing\')">تنظيف احتكاكي منخفض</span> لا يخدش الحاجز الجلدي، ويجب إغلاق العبوة بإحكام لمنع الجفاف.', en: 'Micellar-infused wipes provide <span class="glossary-term" onclick="openGlossary(\'low_friction_cleansing\')">Low-Friction Cleansing</span> that won\'t scratch the skin barrier. Seal pack tightly to prevent drying.' }
    }
});

// [7] Bioderma Sensibio H2O Eye (Biphasic)
deepProductsList.push({
    id: 'bio_sensibio_h2o_eye', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو H2O آي (مزيل مكياج العين الثنائي)', en: 'Sensibio H2O Eye (Biphasic Micellar)' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي (مطابق لدموع العين تماماً لتجنب أي ضبابية أو حرقان)', en: 'Physiological (Matches tears perfectly to avoid any blurriness or stinging)' },
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
        expected_duration: { ar: 'إزالة فورية. تقوية ملحوظة للرموش خلال 4 أسابيع من الاستخدام.', en: 'Instant removal. Noticeable lash strengthening in 4 weeks of use.' },
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
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'يُثبت القطن لثوانٍ لتفعيل <span class="glossary-term" onclick="openGlossary(\'phasic_dissolution\')">الإذابة المرحلية</span> التي تفكك المكياج المقاوم للماء دون ترك غشاء زيتي يسبب ضبابية الرؤية.', en: 'Hold cotton for seconds to activate <span class="glossary-term" onclick="openGlossary(\'phasic_dissolution\')">Phasic Dissolution</span> breaking down waterproof makeup without leaving an oily film causing blurry vision.' }
    }
});

// [8] Bioderma Sebium H2O Micellar Water
deepProductsList.push({
    id: 'bio_sebium_h2o', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم H2O (محلول ميسيلار منقي)', en: 'Sebium H2O Micellar Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (يمنع الإنتاج الارتدادي للدهون الذي يحدث مع المنظفات القاسية)', en: '5.5 (Prevents rebound sebum production that occurs with harsh cleansers)' },
        mechanism: { 
            ar: 'يجمع بين تقنية الميسيلار وبراءة اختراع <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv</span> لتنظيف المكياج وتنظيم جودة الدهون.', 
            en: 'Combines Micellar Technology and <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv patent</span> to cleanse makeup and regulate sebum.' 
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
        expected_duration: { ar: 'إزالة فورية للمعان. تقليل إفراز الدهون بانتظام خلال 4 أسابيع.', en: 'Instant shine removal. Regulates sebum with 4 weeks regular use.' },
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
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'لا يحتاج لشطف ويعمل كـ <span class="glossary-term" onclick="openGlossary(\'microbial_astringent\')">قابض مسام ميكروبي</span> خلال اليوم لإزالة العرق والزيوت. مخصص للمراهقين (12+) والبالغين.', en: 'Needs no rinsing, acting as a <span class="glossary-term" onclick="openGlossary(\'microbial_astringent\')">Microbial Astringent</span> during the day to wipe sweat and oil. For teens (12+) and adults.' }
    }
});

// [9] Bioderma Sebium Gel Moussant
deepProductsList.push({
    id: 'bio_sebium_gel', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم جل موسان (غسول منقي)', en: 'Sebium Gel Moussant' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: '5.5 (يمنع تكاثر بكتيريا الحبوب التي تزدهر في الوسط القلوي)', en: '5.5 (Prevents acne bacteria proliferation which thrive in alkaline environments)' },
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
        expected_duration: { ar: 'تنظيف عميق فوري. تقليل ظهور البثور بنسبة ملحوظة خلال 3 أسابيع.', en: 'Instant deep cleanse. Reduces breakouts noticeably in 3 weeks.' },
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
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'يُفضل تطبيق مبدأ <span class="glossary-term" onclick="openGlossary(\'active_cleansing\')">التنظيف النشط</span> وتركه لدقيقة لتفعيل الزنك. اللون الأزرق طبيعي ناتج عن النحاس. للمراهقين والبالغين.', en: 'Best to apply <span class="glossary-term" onclick="openGlossary(\'active_cleansing\')">Active Cleansing</span> and leave for a minute to activate Zinc. Blue color is natural from Copper. For teens and adults.' }
    }
});

// [10] Bioderma Sebium Pore Refiner
deepProductsList.push({
    id: 'bio_sebium_pore_refiner', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم بور ريفاينر (علاج المسام الواسعة)', en: 'Sebium Pore Refiner' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن (حامضي قليلاً لتعزيز تفكيك الخلايا الميتة حول المسام)', en: 'Balanced (Slightly acidic to enhance dead cell breakdown around pores)' },
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
        expected_duration: { ar: 'تضييق بصري فوري للمسام. تحسن فعلي في حجم المسام بنسبة 50% خلال 8 أسابيع.', en: 'Instant visual pore tightening. Actual 50% improvement in pore size in 8 weeks.' },
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
        pregnancy_safe: false, sun_sensitivity: true, child_safe: false,
        notes: { ar: 'يُعتبر <span class="glossary-term" onclick="openGlossary(\'therapeutic_blur\')">خافي عيوب علاجي</span> سحري يضيق المسام ويمنع تغلغل الفاونديشن داخلها. مخصص للبالغين ذوي المسام الواسعة.', en: 'Acts as a magical <span class="glossary-term" onclick="openGlossary(\'therapeutic_blur\')">Therapeutic Blur</span> tightening pores and preventing foundation seepage. For adults with enlarged pores.' }
    }
});

// [11] Bioderma Sebium Hydra
deepProductsList.push({
    id: 'bio_sebium_hydra', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم هيدرا (مرطب معوض)', en: 'Sebium Hydra Compensating Care' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن (لإراحة البشرة المتهالكة من الأدوية القاسية)', en: 'Balanced (To comfort skin battered by harsh meds)' },
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
        expected_duration: { ar: 'يزيل الشد فوراً. يخفف التقشر والاحمرار بنسبة 90% خلال 14 يوماً من العلاج الطبي.', en: 'Instantly removes tightness. Reduces flaking and redness by 90% in 14 days of medical treatment.' },
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
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'يطبق مفهوم <span class="glossary-term" onclick="openGlossary(\'biomimetic_compensation\')">التعويض الحيوي</span> لإمداد البشرة بسيراميدات مشابهة لدهونها لترميمها دون إثارة حبوب جديدة.', en: 'Applies the <span class="glossary-term" onclick="openGlossary(\'biomimetic_compensation\')">Biomimetic Compensation</span> concept, supplying skin with ceramides similar to its lipids to repair without triggering breakouts.' }
    }
});

// [12] Bioderma Sebium Global
deepProductsList.push({
    id: 'bio_sebium_global', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم جلوبال (علاج الحبوب المكثف)', en: 'Sebium Global' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (لتمكين الأحماض من اختراق المسام وتذويبها)', en: 'Acidic (To enable acids to penetrate and dissolve pores)' },
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
        expected_duration: { ar: 'يجفف البثور النشطة في 48 ساعة. يصفي البشرة تماماً خلال 8-12 أسبوعاً.', en: 'Dries active pimples in 48h. Clears skin completely in 8-12 weeks.' },
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
        pregnancy_safe: false, sun_sensitivity: true, child_safe: false,
        notes: { ar: 'يعتمد على <span class="glossary-term" onclick="openGlossary(\'sebo_genetic_regulation\')">التنظيم الجيني للزهم</span> لمنع تصلب الدهون وانسداد المسام نهائياً. بديل طبي ممتاز للعلاجات الكيميائية.', en: 'Relies on <span class="glossary-term" onclick="openGlossary(\'sebo_genetic_regulation\')">Sebo-genetic Regulation</span> to permanently prevent sebum hardening and clogged pores. Excellent medical alternative to chemical treatments.' }
    }
});
// ==========================================
// 🧪 تابع المنتجات السريرية لـ Bioderma (من 13 إلى 25)
// ==========================================

// [13] Bioderma Sebium Kerato+
window.deepProductsList.push({
    id: 'bio_sebium_kerato_plus', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم كيراتو بلس (علاج الحبوب عالي التحمل)', en: 'Sebium Kerato+' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (لضمان فعالية أحماض الساليسيليك والمالييك في التقشير السطحي والعميق بفاعلية تامة)', en: 'Acidic (To ensure the efficacy of Salicylic and Malic acids in surface and deep exfoliation)' },
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
        expected_duration: { ar: 'تقليل ملحوظ للحبوب والآثار بنسبة 41% خلال 48 ساعة فقط. يُستخدم حتى اختفاء الشوائب تماماً.', en: 'Visible reduction of pimples and marks by 41% in just 48 hours. Use until blemishes clear completely.' },
        step_in_routine: { ar: 'خطوة العلاج السريع.', en: 'Fast treatment step.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على كامل الوجه أو موضعياً على البثور بتطبيق <b class="glossary-term" onclick="alert(\'تقنية التقشير المزدوج (Double Keratolytic): دمج أحماض AHA و BHA بأحجام جزيئية مختلفة للعمل على سطح الجلد وداخل عمق المسام في نفس الوقت لتسريع النتيجة.\')">تقنية التقشير المزدوج</b>.', en: 'Apply to entire face or topically applying the <b class="glossary-term" onclick="alert(\'Double Keratolytic: Combining AHA and BHA with different molecular sizes to work on the skin surface and deep inside pores simultaneously for faster results.\')">Double Keratolytic</b> technique.' },
        layering: { 
            do_not_mix_with: { ar: ['أي مقشرات كيميائية قوية أخرى.'], en: ['Any other strong chemical exfoliants.'] }, 
            best_mixed_with: { ar: ['سيبيوم هيدرا.'], en: ['Sebium Hydra.'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب في بدايته، الآثار الحمراء والداكنة.', en: 'Early-stage acne, red and dark marks.' },
        pregnancy_safe: false, sun_sensitivity: true, child_safe: false,
        notes: { ar: 'آمن وفعال جداً للمراهقين (12+ سنة) والبالغين. لا يستخدم للأطفال.', en: 'Highly safe and effective for adolescents (12+ years) and adults. Not for children.' }
    }
});

// [14] Bioderma Sebium Gel Moussant Actif
window.deepProductsList.push({
    id: 'bio_sebium_gel_actif', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم جل موسان أكتيف (الغسول المركز)', en: 'Sebium Gel Moussant Actif' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (4.5) (يسمح للأحماض باختراق المسام وتذويب الكيراتين المتصلب بكفاءة عالية)', en: 'Acidic (4.5) (Allows acids to penetrate pores and dissolve hardened keratin highly efficiently)' },
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
        expected_duration: { ar: 'ينظف بعمق فوراً. يقلل البثور والرؤوس السوداء بشكل واضح خلال 4 أسابيع من الاستخدام.', en: 'Deeply cleanses instantly. Visibly reduces pimples and blackheads within 4 weeks of use.' },
        step_in_routine: { ar: 'التنظيف العلاجي.', en: 'Therapeutic Cleansing.' },
        routine_step_number: 1,
        application: { ar: 'يُرغى، يُترك لمدة 30 ثانية لفعالية الأحماض كطريقة <b class="glossary-term" onclick="alert(\'العلاج بالاتصال القصير (Short Contact Therapy): ترك الغسول النشط لدقيقة يسمح للأحماض باختراق المسام دون الحاجة للبقاء فترة طويلة تسبب التهيج.\')">العلاج بالاتصال القصير</b>، ثم يُشطف.', en: 'Lather, leave for 30 seconds for acid efficacy as <b class="glossary-term" onclick="alert(\'Short Contact Therapy: Leaving the active cleanser for a minute allows acids to penetrate pores without needing long, irritating leave-on times.\')">Short Contact Therapy</b>, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['علاجات الروكوتان الفموية.'], en: ['Oral Isotretinoin.'] }, 
            best_mixed_with: { ar: ['سيبيوم هيدرا.'], en: ['Sebium Hydra.'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب العنيد، المسام المسدودة بشدة، والبشرة الدهنية السميكة.', en: 'Stubborn acne, severely clogged pores, and thick oily skin.' },
        pregnancy_safe: false, sun_sensitivity: true, child_safe: false,
        notes: { ar: 'إذا حدث تهيج يُستخدم يوماً بعد يوم. مخصص للمراهقين (12+ سنة) والبالغين.', en: 'If irritation occurs, use every other day. For teens (12+ years) and adults.' }
    }
});

// [15] Bioderma Atoderm Intensive Baume
window.deepProductsList.push({
    id: 'bio_atoderm_intensive_baume', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم إنتينسيف بوم (بلسم الإكزيما)', en: 'Atoderm Intensive Baume' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن (يحاكي الجلد الطبيعي لدعم التئام حاجز البشرة التأتبي الضعيف)', en: 'Balanced (Mimics normal skin to support the healing of the weak atopic skin barrier)' },
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
        expected_duration: { ar: 'يسكن الحكة فوراً. يباعد بين نوبات الإكزيما بشكل كبير مع الاستخدام اليومي المستمر لـ 6 أسابيع.', en: 'Soothes itching instantly. Significantly spaces out eczema flare-ups with continuous daily use for 6 weeks.' },
        step_in_routine: { ar: 'ترطيب الجسم أو الوجه.', en: 'Body or face hydration.' },
        routine_step_number: 3,
        application: { ar: 'يُدلك بلطف على بشرة نظيفة بتطبيق <b class="glossary-term" onclick="alert(\'قاعدة الثلاث دقائق (3-Minute Rule): وضع المرطب خلال 3 دقائق بعد الاستحمام والمسام مفتوحة لحبس الرطوبة داخل الجلد بفعالية قصوى.\')">قاعدة الثلاث دقائق</b> بعد الاستحمام.', en: 'Massage gently onto clean skin applying the <b class="glossary-term" onclick="alert(\'3-Minute Rule: Applying moisturizer within 3 minutes post-shower while pores are open to trap moisture inside the skin with maximum efficacy.\')">3-Minute Rule</b> post-shower.' },
        layering: { 
            do_not_mix_with: { ar: ['لا تعارض.'], en: ['No contraindications.'] }, 
            best_mixed_with: { ar: ['أتوديرم زيت الاستحمام.'], en: ['Atoderm Shower Oil.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الإكزيما التأتبية، الجفاف الشديد جداً، الحكة المستمرة.', en: 'Atopic eczema, extremely dry skin, persistent itching.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'آمن تماماً لحديثي الولادة من اليوم الأول (باستثناء الخدج). يمتص بسرعة ولا يترك طبقة لزجة.', en: 'Completely safe for newborns from day one (except premature infants). Absorbs quickly and leaves no sticky film.' }
    }
});

// [16] Bioderma Atoderm SOS Spray
window.deepProductsList.push({
    id: 'bio_atoderm_sos_spray', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم SOS بخاخ (مضاد للحكة)', en: 'Atoderm SOS Spray' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن (لا يهيج الجلد المتشقق أو المخدوش بسبب الحكة الشديدة والهرش العنيف)', en: 'Balanced (Does not irritate cracked or scratched skin due to severe itching and scratching)' },
        mechanism: { 
            ar: 'يستخدم تقنية سكين ريليف لتهدئة الأعصاب السطحية للجلد مع الإينوكسولون، مما يمنع إشارات الحكة من الوصول للدماغ.', 
            en: 'Uses Skin Relief Technology to soothe superficial skin nerves alongside Enoxolone, blocking itch signals to the brain.' 
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
        expected_duration: { ar: 'يوقف الحكة في 60 ثانية ويدوم مفعوله لـ 6 ساعات متواصلة.', en: 'Stops itching in 60 seconds and lasts for 6 continuous hours.' },
        step_in_routine: { ar: 'علاج طوارئ موضعي.', en: 'Topical emergency treatment.' },
        routine_step_number: 3,
        application: { ar: 'يُرش على بعد 20 سم من الجلد لتفعيل <b class="glossary-term" onclick="alert(\'التهدئة العصبية (Neurological Soothing): استهداف مسارات الألم والحكة في الأعصاب السطحية مباشرة بدلاً من مجرد ترطيب الجلد سطحياً.\')">التهدئة العصبية</b>. يُترك ليجف ولا يُدلك.', en: 'Spray 20 cm from the skin to activate <b class="glossary-term" onclick="alert(\'Neurological Soothing: Directly targeting pain and itch pathways in superficial nerves rather than just superficially moisturizing the skin.\')">Neurological Soothing</b>. Let dry, do not rub.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['أتوديرم إنتينسيف بوم (كعلاج وقائي دائم).'], en: ['Atoderm Intensive Baume (as ongoing preventive care).'] } 
        }
    },
    precautions: {
        indications: { ar: 'نوبات الحكة المفاجئة، الإكزيما، جفاف الشتاء، ولدغات الحشرات الخفيفة.', en: 'Sudden itch flare-ups, eczema, winter dryness, and mild insect bites.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'بخاخ 360 درجة يعمل في أي اتجاه. خالي من الكورتيزون تماماً وآمن لحديثي الولادة والأطفال.', en: '360-degree spray works in any position. Completely cortisone-free and safe for newborns and children.' }
    }
});

// [17] Bioderma Photoderm Aquafluide SPF 50+
window.deepProductsList.push({
    id: 'bio_photoderm_aquafluide', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم أكوا فلويد SPF50+', en: 'Photoderm Aquafluide SPF50+' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً (ملائم تماماً للاستخدام اليومي المستمر دون التسبب بتحسس)', en: 'Physiologically Balanced (Perfectly suited for continuous daily use without causing sensitization)' },
        mechanism: { 
            ar: 'يوفر حماية قصوى وعريضة الطيف باستخدام فلاتر كيميائية آمنة، مدعومة بتقنية Sun Active Defense للحماية البيولوجية الخلوية.', 
            en: 'Provides extreme, Broad Spectrum protection using safe chemical filters, reinforced by Sun Active Defense technology for biological cellular protection.' 
        },
        patient_benefit: { 
            ar: 'واقي شمس بقوام مائي خفيف جداً، يُمتص فوراً ليترك لمسة جافة غير لامعة بدون أي أثر أبيض.', 
            en: 'Sunscreen with an ultra-light watery texture, absorbing instantly to leave a matte, dry-touch finish with zero white cast.' 
        },
        active_ingredients: [
            { name: 'UVA/UVB Advanced Filters', concentration: 'SPF 50+ / PA++++', role: { ar: 'حماية خارجية من حروق الشمس والشيخوخة الضوئية.', en: 'External protection against sunburn and photoaging.' } },
            { name: 'Mattifying Powders', concentration: '3 Powders | 3 مساحيق', role: { ar: 'امتصاص الزهم الزائد ومنع اللمعان.', en: 'Absorbs excess sebum and prevents shine.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (يُجدد كل ساعتين في الشمس المباشرة).', en: 'Daily (Reapply every 2 hours in direct sun).' },
        expected_duration: { ar: 'حماية ممتدة المفعول. يمنع تكون التصبغات والشيخوخة الضوئية مع الاستخدام اليومي الدائم.', en: 'Extended protection. Prevents pigmentation and photoaging with permanent daily use.' },
        step_in_routine: { ar: 'الخطوة الأخيرة في روتين الصباح.', en: 'Last step in the AM routine.' },
        routine_step_number: 4,
        application: { ar: 'يُرج جيداً، ويوضع بسخاء على الوجه والرقبة تطبيقاً لـ <b class="glossary-term" onclick="alert(\'قاعدة الإصبعين (Two-Finger Rule): وضع كمية واقي شمس بحجم إصبعين لضمان الحصول على الحماية المكتوبة على العبوة بشكل كامل.\')">قاعدة الإصبعين</b> قبل التعرض للشمس.', en: 'Shake well, apply generously to face and neck applying the <b class="glossary-term" onclick="alert(\'Two-Finger Rule: Applying an amount of sunscreen equal to two fingers to ensure getting the full protection stated on the packaging.\')">Two-Finger Rule</b> before sun exposure.' },
        layering: { 
            do_not_mix_with: { ar: ['الزيوت الثقيلة جداً قبله (قد تعيق تكوين غشاء الحماية).'], en: ['Very heavy oils underneath (may disrupt the protective film).'] }, 
            best_mixed_with: { ar: ['جميع مرطبات وسيرومات العناية اليومية.'], en: ['All daily care moisturizers and serums.'] } 
        }
    },
    precautions: {
        indications: { ar: 'جميع أنواع البشرة (بما فيها الحساسة، المختلطة والدهنية)، الوقاية اليومية.', en: 'All skin types (including sensitive, combination, and oily), daily prevention.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'مقاوم للماء والعرق، تم اختباره تحت إشراف أطباء العيون. مخصص للبالغين والمراهقين (12+ سنة).', en: 'Water and sweat resistant, ophthalmologically tested. Dedicated for adults and teens (12+ years).' }
    }
});

// [18] Bioderma Photoderm MAX Fluid SPF 100
window.deepProductsList.push({
    id: 'bio_photoderm_max_100', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم ماكس فلويد SPF 100', en: 'Photoderm MAX Fluid SPF 100' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن (للحفاظ على استقرار التركيز العالي جداً لفلاتر الحماية الكيميائية)', en: 'Balanced (To maintain the stability of the extremely high concentration of chemical UV filters)' },
        mechanism: { 
            ar: 'أعلى تركيز من الفلاتر الواقية في مختبرات بيوديرما لضمان أقصى درجات الحماية ضد الأشعة فوق البنفسجية، مصمم للحالات السريرية.', 
            en: 'The highest concentration of protective filters in Bioderma labs to ensure ultimate UV protection, designed for clinical cases.' 
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
        expected_duration: { ar: 'حماية قصوى فورية للندبات والجلد المعالج بالليزر تمنع التصبغ الدائم (يستخدم طوال فترة تعافي الجلد).', en: 'Instant maximum protection for scars and laser-treated skin preventing permanent pigmentation (used throughout skin recovery).' },
        step_in_routine: { ar: 'الخطوة الصباحية الأخيرة.', en: 'Last AM step.' },
        routine_step_number: 4,
        application: { ar: 'يُوزع بكثافة على الوجه والرقبة لتكوين <b class="glossary-term" onclick="alert(\'الدرع الواقي التام (Total Sun Block): تغطية فيزيائية وكيميائية كثيفة مخصصة لمنع التصبغ الدائم للندبات الحديثة بعد العمليات الجراحية والليزر.\')">الدرع الواقي التام</b>.', en: 'Distribute generously over face and neck to form a <b class="glossary-term" onclick="alert(\'Total Sun Block: Dense physical and chemical coverage dedicated to preventing permanent pigmentation of fresh scars post-surgery and laser.\')">Total Sun Block</b>.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريمات الترميم (Cicabio) بعد الليزر.'], en: ['Repair creams (Cicabio) post-laser.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة البياض (النمش السريع)، بعد التقشير الكيميائي، بعد جلسات الليزر العميقة.', en: 'Extremely fair skin (freckle-prone), post-chemical peels, post-deep laser sessions.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'قوامه أثقل قليلاً من الأكوا فلويد نظراً لارتفاع نسبة الفلاتر. مخصص للبالغين (18+ سنة).', en: 'Texture is slightly heavier than Aquafluide due to the high filter ratio. For adults (18+ years).' }
    }
});

// [19] Bioderma Photoderm M Gel-Cream SPF 50+
window.deepProductsList.push({
    id: 'bio_photoderm_m', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم M (واقي الكلف والتصبغات)', en: 'Photoderm M Gel-Cream SPF 50+' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن (يضمن توزيعاً متجانساً للأصباغ المعدنية وراحة للبشرة)', en: 'Balanced (Ensures uniform distribution of mineral pigments and skin comfort)' },
        mechanism: { 
            ar: 'ابتكار طبي يدمج الفلاتر العالية مع أكاسيد الحديد لمنع 66% من الضوء الأزرق، ويستخدم الجلابريدين لمنع تكون الميلانين.', 
            en: 'A medical innovation combining high filters with Iron Oxides to block 66% of Blue Light, and uses Glabridin to inhibit melanin synthesis.' 
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
        expected_duration: { ar: 'تغطية فورية للكلف. يقلل التصبغات العميقة ويمنع تفاقمها تماماً خلال 8 أسابيع من الاستمرار.', en: 'Instant melasma coverage. Reduces deep pigmentation and prevents exacerbation completely in 8 weeks.' },
        step_in_routine: { ar: 'الخطوة العلاجية/الوقائية الصباحية.', en: 'AM treatment/preventive step.' },
        routine_step_number: 4,
        application: { ar: 'يوضع على كامل الوجه لتوفير <b class="glossary-term" onclick="alert(\'الحماية من الضوء المرئي (Visible Light Protection): استخدام أكاسيد الحديد لصد الضوء الأزرق المنبعث من الشاشات والشمس والذي يحفز الكلف المفرط.\')">الحماية من الضوء المرئي</b>. يتوفر بلونين ليتناسب مع البشرة.', en: 'Apply to entire face to provide <b class="glossary-term" onclick="alert(\'Visible Light Protection: Using Iron Oxides to block blue light emitted from screens and the sun which intensely stimulates melasma.\')">Visible Light Protection</b>. Available in 2 shades.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات الأحماض القوية صباحاً (خطر تهيج مع الشمس).'], en: ['Strong acid exfoliants in the AM (risk of sun irritation).'] }, 
            best_mixed_with: { ar: ['سيرومات التفتيح المسائية (Pigmentbio C-Concentrate).'], en: ['PM brightening serums (Pigmentbio C-Concentrate).'] } 
        }
    },
    precautions: {
        indications: { ar: 'كلف الحمل (Melasma)، فرط التصبغ، البقع الداكنة، والوقاية من تفاقم التصبغ.', en: 'Pregnancy mask (Melasma), hyperpigmentation, dark spots, and preventing pigment relapse.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'آمن تماماً ويوصى به بشدة للحوامل والظروف الهرمونية (للبالغين 18+).', en: 'Completely safe and highly recommended during pregnancy and hormonal fluctuations (Adults 18+).' }
    }
});

// [20] Bioderma Photoderm Spot-Age SPF 50+
window.deepProductsList.push({
    id: 'bio_photoderm_spot_age', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم سبوت إيدج SPF50+', en: 'Photoderm Spot-Age SPF 50+' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن (يجمع بين استقرار الفلاتر وفعالية فيتامين C في تركيبة واحدة آمنة)', en: 'Balanced (Combines filter stability and Vitamin C efficacy in one safe formula)' },
        mechanism: { 
            ar: 'يجمع بين الفلاتر القوية وثلاثي مضاد للأكسدة والترميم (Vit C, Vit E, Centella Asiatica) لتقليل ضرر التأكسد الضوئي وتجديد الكولاجين.', 
            en: 'Combines potent filters with an antioxidant and repair trio (Vit C, Vit E, Centella Asiatica) to reduce photo-oxidative damage and regenerate collagen.' 
        },
        patient_benefit: { 
            ar: 'يحسن علامات الشيخوخة الضوئية (التجاعيد والبقع) بعد 28 يوماً، ويعتبر ممتازاً كعناية بعد الإجراءات التجميلية.', 
            en: 'Improves signs of photoaging (wrinkles & spots) after 28 days, and is excellent as post-procedure care.' 
        },
        active_ingredients: [
            { name: 'Vitamin C & E', concentration: 'Stabilized | مستقر', role: { ar: 'مضادات أكسدة قوية لتفتيح البشرة وحمايتها.', en: 'Strong antioxidants for brightening and protection.' } },
            { name: 'Centella Asiatica', concentration: 'Active | فعال', role: { ar: 'تجديد الخلايا وتحفيز الكولاجين.', en: 'Cell regeneration and collagen stimulation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً.', en: 'Daily.' },
        expected_duration: { ar: 'حماية فورية. يحسن علامات الشيخوخة الضوئية ومرونة الجلد بشكل ملحوظ بعد 28 يوماً من الاستخدام.', en: 'Instant protection. Visibly improves signs of photoaging and skin elasticity after 28 days of use.' },
        step_in_routine: { ar: 'واقي شمس علاجي.', en: 'Therapeutic sunscreen.' },
        routine_step_number: 4,
        application: { ar: 'يوزع على الوجه والرقبة وأيضاً ظهر اليدين لتوفير <b class="glossary-term" onclick="alert(\'مضادات الأكسدة الموضعية (Topical Antioxidants): تحييد الشوارد الحرة الناتجة عن الأشعة فوق البنفسجية لمنع تدمير الكولاجين وظهور التجاعيد.\')">مضادات الأكسدة الموضعية</b>.', en: 'Distribute over face, neck, and back of hands to provide <b class="glossary-term" onclick="alert(\'Topical Antioxidants: Neutralizing free radicals generated by UV rays to prevent collagen destruction and wrinkle formation.\')">Topical Antioxidants</b>.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['جميع علاجات مكافحة الشيخوخة.'], en: ['All anti-aging treatments.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الشيخوخة الضوئية (Photoaging)، البقع العمرية، التجاعيد، وما بعد الليزر السطحي.', en: 'Photoaging, age spots, wrinkles, and post-superficial laser.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'قوام جل-كريم يمتص بسرعة ويوفر ترطيباً ممتازاً. مخصص للبالغين.', en: 'Gel-cream texture absorbs quickly, provides excellent hydration. For adults.' }
    }
});

// [21] Bioderma Hydrabio H2O Micellar Water
window.deepProductsList.push({
    id: 'bio_hydrabio_h2o', brandId: 'bioderma', familyId: 'hydrabio', brand: 'Bioderma',
    name: { ar: 'هيدرابيو H2O ميسيلار', en: 'Hydrabio H2O Micellar Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (درجة حموضة فسيولوجية تمنع تجريد البشرة الفاقدة للماء من رطوبتها المتبقية)', en: '5.5 (Physiological pH prevents stripping dehydrated skin of its remaining moisture)' },
        mechanism: { 
            ar: 'ينظف بلطف باستخدام تقنية الميسيلار، بينما تحفز براءة اختراع Aquagenium™ قنوات الماء الخلوية لمنع الجفاف المصاحب للتنظيف.', 
            en: 'Gently cleanses using Micellar Technology, while the Aquagenium™ patent stimulates cellular water channels to prevent dehydration.' 
        },
        patient_benefit: { 
            ar: 'يزيل المكياج والشوائب ويترك البشرة الفاقدة للماء ناعمة، مرنة، ومشرقة دون الإحساس بالشد.', 
            en: 'Removes makeup and impurities, leaving dehydrated skin soft, supple, and radiant without a tight sensation.' 
        },
        active_ingredients: [
            { name: 'PEG-6 Caprylic/Capric Glycerides', concentration: 'Active Micelles | ميسيلار فعال', role: { ar: 'تنظيف عميق بدون تجريد دهون الجلد.', en: 'Deep cleansing without stripping skin lipids.' } },
            { name: 'Aquagenium™ Complex', concentration: 'Patented | براءة اختراع', role: { ar: 'تنشيط الترطيب الذاتي.', en: 'Activates self-hydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        expected_duration: { ar: 'تنظيف وترطيب فوري. يعيد نضارة البشرة الباهتة بشكل دائم مع الاستخدام اليومي.', en: 'Instant cleansing and hydration. Permanently restores dull skin\'s radiance with daily use.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الجاف).', en: 'Step 1 (Dry Cleansing).' },
        routine_step_number: 1,
        application: { ar: 'يُبلل قطن ويُمسح الوجه. يعتمد على تنشيط <b class="glossary-term" onclick="alert(\'الأكوابورين (Aquaporins): قنوات مائية دقيقة داخل الخلايا يتم تنشيطها لضمان توزيع الرطوبة ذاتياً بين طبقات الجلد.\')">الأكوابورين</b>. لا يُشطف.', en: 'Soak a cotton pad and wipe face. Relies on activating <b class="glossary-term" onclick="alert(\'Aquaporins: Microscopic water channels inside cells that are activated to ensure self-distribution of moisture between skin layers.\')">Aquaporins</b>. Do not rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['هيدرابيو سيروم (لتعزيز مستويات الماء).'], en: ['Hydrabio Serum (to boost water levels).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الفاقدة للترطيب، الباهتة، والحساسة.', en: 'Dehydrated, dull, and sensitive skin.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'مناسب لمكياج العيون والوجه للبالغين والمراهقين (12+ سنة).', en: 'Suitable for eye and face makeup for adults and teens (12+ years).' }
    }
});

// [22] Bioderma Hydrabio Serum
window.deepProductsList.push({
    id: 'bio_hydrabio_serum', brandId: 'bioderma', familyId: 'hydrabio', brand: 'Bioderma',
    name: { ar: 'هيدرابيو سيروم (معزز الترطيب)', en: 'Hydrabio Serum (Hydration Booster)' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن (يسهل امتصاص حمض الهيالورونيك السريع لداخل الأدمة دون لزوجة)', en: 'Balanced (Facilitates rapid Hyaluronic Acid absorption into the dermis without stickiness)' },
        mechanism: { 
            ar: 'يوفر ترطيباً فورياً بحمض الهيالورونيك، بينما تقوم تقنية Aquagenium™ بإعادة تدريب الجلد على تنشيط قنوات الأكوابورين وحبس الرطوبة.', 
            en: 'Provides instant hydration with Hyaluronic Acid, while Aquagenium™ retrains the skin to activate aquaporins and lock moisture.' 
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
        expected_duration: { ar: 'ترطيب وامتلاء فوري خلال 15 دقيقة. يعالج خطوط الجفاف الدقيقة بشكل دائم مع الاستمرار.', en: 'Instant hydration and plumping within 15 mins. Permanently treats dehydration lines continuously.' },
        step_in_routine: { ar: 'سيروم ما قبل الترطيب.', en: 'Pre-moisturizer serum.' },
        routine_step_number: 2,
        application: { ar: 'يوضع على الوجه والرقبة بعد التطهير وقبل الكريم ليعمل كـ <b class="glossary-term" onclick="alert(\'مغناطيس الرطوبة (Moisture Magnet): جذب جزيئات الماء من البيئة المحيطة أو المنتجات السابقة وحبسها داخل طبقات الجلد لملء الخطوط.\')">مغناطيس للرطوبة</b>.', en: 'Apply to face and neck after cleansing and before cream to act as a <b class="glossary-term" onclick="alert(\'Moisture Magnet: Attracting water molecules from the surrounding environment or previous products and locking them inside skin layers to plump lines.\')">Moisture Magnet</b>.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['الريتينول (لتقليل جفافه).'], en: ['Retinol (to buffer dryness).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الجفاف (Dehydrated)، الخطوط الرفيعة، والبهتان الناتج عن الضغط البيئي.', en: 'Severely dehydrated skin, fine lines, and dullness from environmental stress.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'قوام جل ذوباني منعش جداً. مخصص للمراهقين (12+ سنة) والبالغين كأساس ممتاز للمكياج.', en: 'Very refreshing melting gel texture. For teens (12+) and adults, acting as an excellent makeup primer.' }
    }
});

// [23] Bioderma Pigmentbio C-Concentrate
window.deepProductsList.push({
    id: 'bio_pigmentbio_c_concentrate', brandId: 'bioderma', familyId: 'pigmentbio', brand: 'Bioderma',
    name: { ar: 'بيجمنت بيو سي-كونسينتريت', en: 'Pigmentbio C-Concentrate' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (pH ~3.5-4.0 لتفعيل التقشير الكيميائي وتأمين استقرار فيتامين C النقي)', en: 'Acidic (pH ~3.5-4.0 to activate chemical peeling and stabilize pure Vitamin C)' },
        mechanism: { 
            ar: 'تأثير تقشير كيميائي بواسطة 8% AHA/BHA لتجديد الخلايا، مدمج مع 2% فيتامين C الطازج وتقنية LumiReveal لتثبيط التيروزيناز.', 
            en: 'Chemical peeling effect via 8% AHA/BHA for cell renewal, combined with 2% Fresh Vit C and LumiReveal to inhibit tyrosinase.' 
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
        expected_duration: { ar: 'يقلل حجم وحدة البقع الداكنة بشكل ملحوظ خلال 4 أسابيع من الكورس العلاجي الصارم.', en: 'Visibly reduces the size and intensity of dark spots within 4 weeks of the strict treatment course.' },
        step_in_routine: { ar: 'خطوة العلاج الليلي المكثف.', en: 'Intensive PM treatment step.' },
        routine_step_number: 2,
        application: { ar: 'تُضغط الكبسولة لتفعيل الفيتامين لضمان <b class="glossary-term" onclick="alert(\'تثبيط التيروزيناز (Tyrosinase Inhibition): إيقاف الإنزيم الأساسي المسؤول عن تصنيع صبغة الميلانين من جذوره لضمان عدم تكون بقع جديدة.\')">تثبيط التيروزيناز</b> القوي، تُرج، وتوضع 5 قطرات.', en: 'Press canister to activate Vit C ensuring strong <b class="glossary-term" onclick="alert(\'Tyrosinase Inhibition: Stopping the core enzyme responsible for melanin synthesis at its roots to guarantee no new spots form.\')">Tyrosinase Inhibition</b>, shake, apply 5 drops.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول أو المقشرات الأخرى في نفس الليلة لتجنب تدمير حاجز الجلد.'], en: ['Retinol or other exfoliants on the same night to avoid barrier damage.'] }, 
            best_mixed_with: { ar: ['واقي شمس (إلزامي في الصباح).'], en: ['Sunscreen (Mandatory in the AM).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الكلف، النمش، التصبغات الناتجة عن الالتهاب (PIH)، والبقع العمرية.', en: 'Melasma, freckles, Post-Inflammatory Hyperpigmentation (PIH), and age spots.' },
        pregnancy_safe: false, sun_sensitivity: true, child_safe: false,
        notes: { ar: 'قد يسبب وخزاً طفيفاً طبيعياً. غير مخصص للحوامل. مخصص للبالغين 18+ فقط.', en: 'May cause normal mild tingling. Not for pregnant women. Dedicated for adults 18+ only.' }
    }
});

// [24] Bioderma Pigmentbio Sensitive Areas
window.deepProductsList.push({
    id: 'bio_pigmentbio_sensitive_areas', brandId: 'bioderma', familyId: 'pigmentbio', brand: 'Bioderma',
    name: { ar: 'بيجمنت بيو للمناطق الحساسة', en: 'Pigmentbio Sensitive Areas' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً (ضروري جداً لتجنب تهيج المناطق الحساسة وثنيات الجلد)', en: 'Physiologically Balanced (Crucial to avoid irritating sensitive areas and skin folds)' },
        mechanism: { 
            ar: 'يستهدف فرط التصبغ الناتج عن الاحتكاك أو إزالة الشعر. يجمع تقنية LumiReveal مع مستخلصات مهدئة لمنع الالتهاب المسبب للاسمرار.', 
            en: 'Targets hyperpigmentation caused by friction or hair removal. Combines LumiReveal with soothing extracts to prevent inflammation-induced darkening.' 
        },
        patient_benefit: { 
            ar: 'يوحد لون المناطق الحساسة (الإبطين، الركب، والأكواع)، يهدئ الاحمرار فوراً بعد الحلاقة، ويوفر ترطيباً لـ 8 ساعات.', 
            en: 'Evens tone in sensitive areas (axillae, knees, elbows), instantly soothes redness post-shaving, and provides 8h hydration.' 
        },
        active_ingredients: [
            { name: 'Andrographis Paniculata & Glabridin', concentration: 'Active | فعال', role: { ar: 'تهدئة الالتهاب الميكانيكي وتثبيط التصبغ.', en: 'Soothes mechanical inflammation and inhibits pigmentation.' } },
            { name: 'Glycerin & Shea Butter', concentration: 'Rich | غني', role: { ar: 'ترطيب عميق وتقليل الاحتكاك.', en: 'Deep hydration and friction reduction.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً.', en: 'Once to twice daily.' },
        expected_duration: { ar: 'يهدئ الاحمرار فوراً بعد الحلاقة. يوحد اللون تدريجياً وبشكل ملحوظ خلال 4 إلى 8 أسابيع من الاستمرار.', en: 'Instantly soothes redness post-shaving. Gradually evens tone noticeably in 4 to 8 weeks of continuation.' },
        step_in_routine: { ar: 'كريم علاجي للمناطق المستهدفة.', en: 'Treatment cream for targeted areas.' },
        routine_step_number: 3,
        application: { ar: 'يوضع على المناطق المتضررة لعكس آثار <b class="glossary-term" onclick="alert(\'الاحتكاك الميكانيكي (Mechanical Friction): التهاب الجلد المستمر غير المرئي الناتج عن احتكاك ثنيات الجلد أو الملابس الضيقة والذي يتحول تدريجياً إلى تصبغ داكن.\')">الاحتكاك الميكانيكي</b> (يمكن استخدامه مباشرة بعد الليزر).', en: 'Apply to affected areas to reverse <b class="glossary-term" onclick="alert(\'Mechanical Friction: Continuous invisible skin inflammation caused by rubbing of skin folds or tight clothing, gradually turning into dark pigmentation.\')">Mechanical Friction</b> effects (can be used directly post-laser).' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك الميكانيكي أو الملابس الضيقة (تزيد المشكلة).'], en: ['Mechanical rubbing or tight clothing (exacerbates the issue).'] }, 
            best_mixed_with: { ar: ['بيجمنت بيو كريم رغوي للتنظيف.'], en: ['Pigmentbio Foaming Cream for cleansing.'] } 
        }
    },
    precautions: {
        indications: { ar: 'اسمرار ثنيات الجلد (الإبطين، الفخذين)، فرط التصبغ الاحتكاكي، واسمرار المفاصل.', en: 'Darkening of skin folds (axillae, groin), frictional hyperpigmentation, and darkened joints.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: false,
        notes: { ar: 'خالي من العطور. قوامه ناعم ولا يترك أثراً دهنياً أو لزجاً. مخصص للبالغين 18+.', en: 'Fragrance-free. Smooth texture leaving no greasy or sticky residue. Dedicated for adults 18+.' }
    }
});

// [25] Bioderma Cicabio Cream
window.deepProductsList.push({
    id: 'bio_cicapio_cream', brandId: 'bioderma', familyId: 'cicabio', brand: 'Bioderma',
    name: { ar: 'سيكابيو كريم (مرمم ومهدئ)', en: 'Cicabio Soothing Repairing Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً (لا يسبب أي حرقان عند وضعه على الجروح المفتوحة أو الخدوش السطحية)', en: 'Physiologically Balanced (Causes no stinging when applied to open wounds or superficial scratches)' },
        mechanism: { 
            ar: 'يوفر النحاس والزنك بيئة معقمة، ويرمم مزيج (Resveratrol & Centella Asiatica) حاجز الجلد، بينما يسكن Antalgicine™ الألم.', 
            en: 'Copper/Zinc provide a sterile environment, Resveratrol & Centella Asiatica repair the skin barrier, while Antalgicine™ relieves pain.' 
        },
        patient_benefit: { 
            ar: 'يسرع التئام الجروح السطحية والخدوش، يخفف الإحساس بالانزعاج الموضعي فوراً، ويقلل من احتمالية تكون الندبات.', 
            en: 'Accelerates healing of superficial wounds and scratches, instantly relieves local discomfort, and reduces the likelihood of scarring.' 
        },
        active_ingredients: [
            { name: 'Antalgicine™', concentration: 'Patented | براءة اختراع', role: { ar: 'تسكين الألم وتقليل الحكة السطحية.', en: 'Pain relief and reduction of superficial itching.' } },
            { name: 'Centella Asiatica + Hyaluronic Acid', concentration: 'Active | فعال', role: { ar: 'ترميم وتكوين طبقة عازلة تتنفس.', en: 'Repair and formation of a breathable insulating film.' } },
            { name: 'Zinc & Copper Sulfates', concentration: 'Purifying | منقي', role: { ar: 'منع التلوث البكتيري للجرح.', en: 'Prevention of bacterial infection in the wound.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً حتى التئام الجلد تماماً.', en: 'Twice daily until skin is fully repaired.' },
        expected_duration: { ar: 'يخفف الألم والانزعاج فوراً. يسرع عملية التئام الجلد بالكامل وبلا ندبات خلال 4 إلى 7 أيام.', en: 'Relieves pain and discomfort instantly. Accelerates full, scarless skin healing within 4 to 7 days.' },
        step_in_routine: { ar: 'عناية موضعية علاجية.', en: 'Targeted therapeutic care.' },
        routine_step_number: 3,
        application: { ar: 'توضع طبقة سميكة على المنطقة المتضررة لتعمل كـ <b class="glossary-term" onclick="alert(\'الضمادة السائلة (Liquid Bandage): تكوين غشاء رقيق يسمح بتنفس الجلد ويحميه من البكتيريا لضمان التئام الجرح بشكل نظيف وبلا ندبات.\')">الضمادة السائلة</b>.', en: 'Apply a thick layer to the affected area to act as a <b class="glossary-term" onclick="alert(\'Liquid Bandage: Forming a thin film that allows the skin to breathe while protecting it from bacteria, ensuring clean, scarless wound healing.\')">Liquid Bandage</b>.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات أو مواد نشطة قاسية على نفس المنطقة.'], en: ['Exfoliants or harsh actives on the same area.'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'الخدوش، الحروق السطحية، بعد الإجراءات الجلدية (الليزر، التقشير)، ولتهيج ما حول الفم.', en: 'Scratches, superficial burns, post-dermatological procedures (laser, peels), and peri-oral irritation.' },
        pregnancy_safe: true, sun_sensitivity: false, child_safe: true,
        notes: { ar: 'آمن تماماً للرضع من اليوم الأول للولادة. لا يُستخدم على الجروح النازفة بشدة. لونه المائل للبني طبيعي جداً.', en: 'Completely safe for infants from day one. Do not use on heavily bleeding wounds. Its brownish tint is perfectly natural.' }
    }
});
