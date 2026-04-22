// ==========================================
// 🏢 1. BIODERMA (Brands & Families)
// ==========================================

brandsList.push({
    id: 'bioderma', name: 'Bioderma',
    families: [
        { id: 'sensibio', name: { ar: 'سينسيبيو (للبشرة الحساسة والوردية)', en: 'Sensibio (Sensitive & Rosacea-Prone)' } },
        { id: 'photoderm', name: { ar: 'فوتوديرم (للحماية من الشمس)', en: 'Photoderm (Sun Protection)' } },
        { id: 'atoderm', name: { ar: 'أتوديرم (للجفاف الشديد والإكزيما)', en: 'Atoderm (Very Dry & Atopic Skin)' } },
        { id: 'sebium', name: { ar: 'سيبيوم (للبشرة الدهنية والمعرضة للحبوب)', en: 'Sebium (Oily & Acne-Prone)' } }
    ]
});

// [1] Sensibio H2O Micellar Water (All Sizes)
deepProductsList.push({
    id: 'bio_sensibio_h2o', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو H2O ميسيلار', en: 'Sensibio H2O Micellar Water' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'تستخدم تقنية الميسيلار المعلقة في ماء عالي النقاء لتنظيف البشرة من 99% من المكياج والملوثات والمعادن الثقيلة دون الإخلال بطبقة الهيدروليبيديك.', 
            en: 'Utilizes Micellar Technology in pharmaceutical-grade water to cleanse 99% of makeup, pollutants, and heavy metals without disrupting the hydrolipidic film.' 
        },
        patient_benefit: { ar: 'يهدئ البشرة فوراً لتجنب الشعور بالشد والتهيج.', en: 'Instantly soothes skin to prevent tightness and irritation.' },
        active_ingredients: [
            { name: 'PEG-6 Caprylic/Capric Glycerides', concentration: { ar: 'ميسيلار فعال', en: 'Active Micelles' }, role: { ar: 'التقاط الشوائب', en: 'Capturing impurities' } },
            { name: 'Cucumber Extract', concentration: { ar: 'نقي', en: 'Pure' }, role: { ar: 'تقليل الاحتقان', en: 'Decongesting' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الخطوة الأولى (تنظيف).', en: 'Step 1 (Cleanse).' },
        application: { ar: 'بقطنة، لا يتطلب الشطف.', en: 'Via cotton pad, no rinse required.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف بقطن غير طبي.'], en: ['Harsh rubbing with non-medical cotton.'] }, 
            best_mixed_with: { ar: ['Sensibio Defensive Cream.'], en: ['Sensibio Defensive Cream.'] } 
        }
    },
    precautions: { indications: { ar: 'البشرة الحساسة والمتهيجة.', en: 'Sensitive and irritated skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [2] Sensibio H2O Eye
deepProductsList.push({
    id: 'bio_sensibio_h2o_eye', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو H2O للعين (مزيل مكياج ثنائي الطور)', en: 'Sensibio H2O Eye Biphase Micellar' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { ar: 'تركيبة ثنائية الطور (30% دهون / 70% ماء ميسيلار) معززة بالبروفيتامين B5 لتنظيف المكياج المقاوم للماء وتقوية الرموش.', en: 'Biphase formula (30% lipophilic / 70% micellar water) enriched with Provitamin B5 to cleanse waterproof makeup and strengthen lashes.' },
        patient_benefit: { ar: 'يزيل المكياج العنيد بدون فرك ويرطب محيط العين.', en: 'Removes stubborn makeup without rubbing and hydrates eye contour.' },
        active_ingredients: [{ name: 'Provitamin B5 (Panthenol)', concentration: { ar: 'عالي', en: 'High' }, role: { ar: 'ترميم وتقوية الرموش.', en: 'Lash repair and strengthening.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'مساءً أو عند الحاجة.', en: 'Evening or as needed.' },
        step_in_routine: { ar: 'تنظيف محيط العين.', en: 'Eye contour cleansing.' },
        application: { ar: 'يرج جيداً قبل الاستخدام.', en: 'Shake well before use.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: { indications: { ar: 'العيون الحساسة والمكياج المقاوم للماء.', en: 'Sensitive eyes and waterproof makeup.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [3] Sensibio Defensive Active Soothing Cream
deepProductsList.push({
    id: 'bio_sensibio_defensive', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو ديفينسيف (كريم مهدئ نشط)', en: 'Sensibio Defensive Active Soothing Cream' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { ar: 'يستخدم تقنية (Defensive Technology) التي تعمل على الأسباب البيولوجية للالتهاب (عبر الكارنوزين ومستخلص المريمية الحمراء).', en: 'Uses Defensive Technology acting on biological causes of inflammation (via Carnosine and Red Sage extract).' },
        patient_benefit: { ar: 'يقوي حاجز البشرة الحساسة ضد العوامل البيئية ويوقف الوخز والحرارة.', en: 'Strengthens sensitive skin barrier against environmental aggressors and stops stinging/heat.' },
        active_ingredients: [{ name: 'Tetrapeptide-10', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تقوية حاجز البشرة.', en: 'Barrier strengthening.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'خطوة الترطيب الأساسية.', en: 'Core hydration step.' },
        application: { ar: 'على الوجه والرقبة.', en: 'On face and neck.' },
        layering: { do_not_mix_with: { ar: ['المقشرات الكيميائية القوية.'], en: ['Strong chemical exfoliants.'] }, best_mixed_with: { ar: ['Sensibio H2O.'], en: ['Sensibio H2O.'] } }
    },
    precautions: { indications: { ar: 'البشرة الحساسة والمكتسبة للحساسية.', en: 'Sensitive and sensitized skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [4] Sensibio Defensive Rich Active Soothing Cream
deepProductsList.push({
    id: 'bio_sensibio_defensive_rich', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو ديفينسيف ريتش (كريم غني)', en: 'Sensibio Defensive Rich Active Soothing Cream' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { ar: 'نفس تقنية ديفينسيف ولكن بقوام غني بالدهون لتعويض النقص الشديد في الطبقة الدهنية.', en: 'Same Defensive Technology but with a lipid-rich texture to compensate for severe lipid deficiency.' },
        patient_benefit: { ar: 'ترطيب عميق وتغذية للبشرة الحساسة الجافة جداً.', en: 'Deep hydration and nourishment for very dry sensitive skin.' },
        active_ingredients: [{ name: 'Glycerin + Squalane', concentration: { ar: 'مرتفع', en: 'High' }, role: { ar: 'حبس الرطوبة وتغذية.', en: 'Moisture lock and nourishment.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'خطوة الترطيب الأساسية.', en: 'Core hydration step.' },
        application: { ar: 'على الوجه والرقبة.', en: 'On face and neck.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: { indications: { ar: 'البشرة الحساسة الجافة إلى شديدة الجفاف.', en: 'Dry to very dry sensitive skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [5] Photoderm Aquafluid SPF 50+ (Invisible)
deepProductsList.push({
    id: 'bio_photoderm_aquafluid', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم أكوافلويد واقي شمس شفاف', en: 'Photoderm Aquafluid SPF 50+ Invisible' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { ar: 'براءة اختراع Sun Active Defense لتعزيز الحماية البيولوجية الذاتية للجلد ضد الأشعة فوق البنفسجية UVA.', en: 'Sun Active Defense patent to boost skin biological self-defense against UVA rays.' },
        patient_benefit: { ar: 'قوام مائي خفيف جداً (Dry touch) لا يترك أثراً دهنياً أو علامات بيضاء.', en: 'Ultra-light water-like texture (Dry touch) leaving no oily finish or white marks.' },
        active_ingredients: [{ name: 'UVA/UVB Filters', concentration: { ar: 'عالي (SPF 50+)', en: 'High (SPF 50+)' }, role: { ar: 'حماية كيميائية ضوئية.', en: 'Photochemical protection.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'قبل التعرض للشمس ويجدد كل ساعتين.', en: 'Before sun exposure, reapply every 2 hours.' },
        step_in_routine: { ar: 'الخطوة الأخيرة نهاراً.', en: 'Last step in morning routine.' },
        application: { ar: 'يوزع بسخاء على الوجه والرقبة.', en: 'Apply generously to face and neck.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['Hydrabio Serum (قبل الواقي).'], en: ['Hydrabio Serum (Before SPF).'] } }
    },
    precautions: { indications: { ar: 'البشرة العادية إلى المختلطة.', en: 'Normal to combination skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [6] Photoderm MAX Fluid SPF 100
deepProductsList.push({
    id: 'bio_photoderm_max_fluid_100', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم ماكس فلويد SPF 100', en: 'Photoderm MAX Fluid SPF 100 (Invisible/Light)' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { ar: 'يوفر أعلى حماية ممكنة (SPF 100) بفضل فلاتر متطورة وتقنية Cellular Bioprotection لحماية الحمض النووي للخلايا.', en: 'Provides maximum possible protection (SPF 100) via advanced filters and Cellular Bioprotection technology to protect cellular DNA.' },
        patient_benefit: { ar: 'يمنع الحروق الشديدة وتلف الخلايا في حالات التعرض القاسي للشمس.', en: 'Prevents severe sunburns and cellular damage under extreme sun exposure.' },
        active_ingredients: [{ name: 'Cellular Bioprotection', concentration: { ar: 'براءة اختراع', en: 'Patent' }, role: { ar: 'حماية المناعة الخلوية.', en: 'Cellular immunity protection.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'قبل التعرض للشمس.', en: 'Before sun exposure.' },
        step_in_routine: { ar: 'الخطوة الأخيرة نهاراً.', en: 'Last step in morning routine.' },
        application: { ar: 'يرج جيداً قبل الاستخدام.', en: 'Shake well before use.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: { indications: { ar: 'البشرة الفاتحة جداً، والحساسية الشديدة للشمس.', en: 'Very fair skin, and extreme sun intolerance.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [7] Photoderm M Gel-Cream SPF 50+
deepProductsList.push({
    id: 'bio_photoderm_m', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم M جل-كريم (لعلاج الكلف)', en: 'Photoderm M Gel-Cream SPF 50+ (Light/Golden)' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { ar: 'يحتوي على أعلى تركيز من أكاسيد الحديد لامتصاص الضوء الأزرق (Blue Light) المسبب الرئيسي للكلف.', en: 'Contains the highest concentration of iron oxides to absorb Blue Light, the main trigger for melasma.' },
        patient_benefit: { ar: 'يمنع ويقلل تصبغات الحمل والكلف ويوحد لون البشرة تغطية عالية.', en: 'Prevents and reduces pregnancy mask/melasma and evens skin tone with high coverage.' },
        active_ingredients: [{ name: 'Iron Oxides + Glabridin', concentration: { ar: 'عالي', en: 'High' }, role: { ar: 'تثبيط التصبغ والحماية من الضوء الأزرق.', en: 'Pigment inhibition and blue light protection.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'نهاراً.', en: 'Morning.' },
        step_in_routine: { ar: 'واقي شمس وتغطية.', en: 'SPF and coverage.' },
        application: { ar: 'يوزع بالتساوي.', en: 'Apply evenly.' },
        layering: { do_not_mix_with: { ar: ['كريمات أساس ثقيلة (لمنع التكتل).'], en: ['Heavy foundations (to prevent pilling).'] }, best_mixed_with: { ar: ['Pigmentbio C-Concentrate (مساءً).'], en: ['Pigmentbio C-Concentrate (PM).'] } }
    },
    precautions: { indications: { ar: 'الكلف، تصبغات الحمل، والهايبربيجمنتيشن.', en: 'Melasma, pregnancy mask, and hyperpigmentation.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [8] Atoderm Intensive Baume (من الصورة المرفقة)
deepProductsList.push({
    id: 'bio_atoderm_intensive_baume', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم إنتينسيف بوم (للإكزيما)', en: 'Atoderm Intensive Baume' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { ar: 'يحتوي على مركب (Lipigenium) لإعادة بناء الحاجز الجلدي، ومادة (PEA) التي توقف الرغبة في الهرش فوراً.', en: 'Contains Lipigenium complex to rebuild the skin barrier, and PEA to instantly stop the urge to scratch.' },
        patient_benefit: { ar: 'يريح البشرة شديدة الجفاف والمصابة بالإكزيما ويقلل فترات الانتكاس.', en: 'Soothes very dry, atopic skin and reduces flare-up phases.' },
        active_ingredients: [{ name: 'PEA (Palmitoylethanolamide)', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'مضاد للحكة والالتهاب.', en: 'Anti-itch and anti-inflammatory.' } }]
    },
    clinical_usage: {
        frequency: { ar: '1-2 مرة يومياً.', en: '1-2 times daily.' },
        step_in_routine: { ar: 'ترطيب علاجي مكثف.', en: 'Intensive therapeutic hydration.' },
        application: { ar: 'على بشرة نظيفة (يفضل بعد الاستحمام).', en: 'On clean skin (preferably after shower).' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['Atoderm Intensive Gel Moussant.'], en: ['Atoderm Intensive Gel Moussant.'] } }
    },
    precautions: { indications: { ar: 'الإكزيما التأتبية والجفاف الشديد للحكة.', en: 'Atopic eczema and severe itching dryness.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [9] Atoderm Creme Ultra
deepProductsList.push({
    id: 'bio_atoderm_creme_ultra', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم كريم ألترا (ترطيب يومي)', en: 'Atoderm Cream Ultra' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { ar: 'يستخدم مركب Skin Protect لزيادة إنتاج حمض الهيالورونيك والسيراميد طبيعياً في الجلد.', en: 'Uses Skin Protect complex to naturally boost hyaluronic acid and ceramide production in the skin.' },
        patient_benefit: { ar: 'ترطيب يومي يدوم 24 ساعة ويقوي الجلد لجميع أفراد الأسرة.', en: 'Daily 24-hour hydration and skin strengthening for the whole family.' },
        active_ingredients: [{ name: 'Niacinamide + Omegas 3,6,9', concentration: { ar: 'مغذي', en: 'Nourishing' }, role: { ar: 'ترميم وإمداد بالدهون.', en: 'Repair and lipid replenishment.' } }]
    },
    clinical_usage: {
        frequency: { ar: '1-2 مرة يومياً.', en: '1-2 times daily.' },
        step_in_routine: { ar: 'ترطيب الوجه والجسم.', en: 'Face and body hydration.' },
        application: { ar: 'على بشرة جافة.', en: 'On dry skin.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['Atoderm Huile de douche.'], en: ['Atoderm Huile de douche.'] } }
    },
    precautions: { indications: { ar: 'البشرة العادية إلى الجافة.', en: 'Normal to dry skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});
// ==========================================
// 🏢 2. LA ROCHE-POSAY (Brands & Families)
// ==========================================

brandsList.push({
    id: 'laroche', name: 'La Roche-Posay',
    families: [
        { id: 'effaclar', name: { ar: 'إيفاكلار (للبشرة الدهنية وحب الشباب)', en: 'Effaclar (Oily & Acne-Prone)' } },
        { id: 'lipikar', name: { ar: 'ليبيكار (للجفاف الشديد والإكزيما)', en: 'Lipikar (Dryness & Eczema)' } },
        { id: 'anthelios', name: { ar: 'أنثيليوس (للحماية من الشمس)', en: 'Anthelios (Sun Protection)' } },
        { id: 'serums', name: { ar: 'السيرومات العلاجية (نضارة وتجاعيد)', en: 'Dermatological Serums' } },
        { id: 'cicaplast', name: { ar: 'سيكابلاست (للترميم والتهيج)', en: 'Cicaplast (Repair & Irritation)' } },
        { id: 'toleriane', name: { ar: 'توليريان (للبشرة الحساسة جداً)', en: 'Toleriane (Sensitive Skin)' } }
    ]
});

// [10] Effaclar H Iso-Biome Moisturizer
deepProductsList.push({
    id: 'lrp_effaclar_h_isobiome', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار H آيزو-بيوم (مرطب الروكوتان)', en: 'Effaclar H Iso-Biome Cream' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { ar: 'يعوض نقص الدهون ويوازن الميكروبيوم بفضل Orellana Extract وفيتامين B5 لمواجهة جفاف الأدوية.', en: 'Compensates lipids and balances microbiome via Orellana Extract and Vit B5 to counter drug-induced dryness.' },
        patient_benefit: { ar: 'يرطب البشرة الدهنية التي تعرضت للجفاف الشديد والتقشر بسبب علاجات حب الشباب القوية.', en: 'Hydrates oily skin severely dried and peeling due to strong acne treatments.' },
        active_ingredients: [{ name: 'Orellana Extract + B5', concentration: { ar: 'مرمم', en: 'Repairing' }, role: { ar: 'دعم الميكروبيوم والترميم.', en: 'Microbiome support and repair.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'ترطيب علاجي.', en: 'Therapeutic moisturizer.' },
        application: { ar: 'على وجه نظيف.', en: 'On clean face.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['Effaclar H Cleansing Cream.'], en: ['Effaclar H Cleansing Cream.'] } }
    },
    precautions: { indications: { ar: 'الجفاف الناتج عن أدوية الحبوب (الروكوتان).', en: 'Acne drug-induced dryness (Isotretinoin).' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [11] Effaclar Purifying Foaming Gel
deepProductsList.push({
    id: 'lrp_effaclar_gel', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار جل رغوي نقي', en: 'Effaclar Purifying Foaming Gel' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { ar: 'ينظف البشرة بلطف من الدهون والشوائب باستخدام عوامل تنظيف مختارة للبشرة الحساسة مع Zinc PCA.', en: 'Gently cleanses skin from sebum and impurities using cleansing agents selected for sensitive skin with Zinc PCA.' },
        patient_benefit: { ar: 'يقلل الإفرازات الدهنية دون التسبب في جفاف البشرة.', en: 'Reduces sebum production without over-drying the skin.' },
        active_ingredients: [{ name: 'Zinc PCA', concentration: { ar: 'منظم', en: 'Regulating' }, role: { ar: 'تنظيم الزهم ومضاد للبكتيريا.', en: 'Sebum regulation and antibacterial.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'تنظيف الوجه.', en: 'Face cleansing.' },
        application: { ar: 'يرغى بالماء ثم يشطف.', en: 'Lather with water then rinse.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['Effaclar Duo+M.'], en: ['Effaclar Duo+M.'] } }
    },
    precautions: { indications: { ar: 'البشرة الدهنية والمعرضة للحبوب.', en: 'Oily and acne-prone skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [12] Effaclar Micro-Peeling Purifying Gel
deepProductsList.push({
    id: 'lrp_effaclar_micro_peeling', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار جل التقشير الدقيق (للوجه والجسم)', en: 'Effaclar Micro-Peeling Purifying Gel' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { ar: 'يقشر الجلد كيميائياً بفضل 2% حمض الساليسيليك وLHA لفتح المسام المسدودة بعمق.', en: 'Chemically exfoliates skin via 2% Salicylic Acid and LHA to deeply unclog pores.' },
        patient_benefit: { ar: 'يعالج الحبوب المستعصية في الوجه والجسم (مثل حبوب الظهر) ويقلل آثارها.', en: 'Treats stubborn acne on face and body (e.g., back acne) and reduces marks.' },
        active_ingredients: [{ name: '2% Salicylic Acid + LHA', concentration: { ar: 'عالي', en: 'High' }, role: { ar: 'تقشير كيميائي عميق.', en: 'Deep chemical exfoliation.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'مرة يومياً.', en: 'Once daily.' },
        step_in_routine: { ar: 'تنظيف علاجي.', en: 'Therapeutic cleansing.' },
        application: { ar: 'يدلك بلطف ويترك دقيقة قبل الشطف.', en: 'Massage gently, leave for a minute before rinsing.' },
        layering: { do_not_mix_with: { ar: ['المقشرات الفيزيائية القاسية.'], en: ['Harsh physical exfoliants.'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: { indications: { ar: 'حب الشباب الشديد وحبوب الجسم.', en: 'Severe acne and body acne.' }, pregnancy_safe: false, sun_sensitivity: true }
});

// [13] Effaclar Ultra Concentrated Serum
deepProductsList.push({
    id: 'lrp_effaclar_serum', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار سيروم التقشير المركز', en: 'Effaclar Ultra Concentrated Serum' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { ar: 'مزيج ثلاثي الأحماض (AHA + BHA + LHA) مع النياسيناميد لتقشير الخلايا الميتة وتهدئة الالتهاب.', en: 'Tri-acid complex (AHA + BHA + LHA) with Niacinamide to exfoliate dead cells and soothe inflammation.' },
        patient_benefit: { ar: 'يصفي البشرة من الحبوب، الرؤوس السوداء، والمسام الواسعة خلال أسابيع.', en: 'Clears skin from acne, blackheads, and enlarged pores within weeks.' },
        active_ingredients: [{ name: 'Glycolic + Salicylic + LHA', concentration: { ar: 'مكثف', en: 'Intense' }, role: { ar: 'تجديد الخلايا.', en: 'Cell renewal.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once at night.' },
        step_in_routine: { ar: 'سيروم علاجي.', en: 'Therapeutic serum.' },
        application: { ar: 'تجنب محيط العين.', en: 'Avoid eye contour.' },
        layering: { do_not_mix_with: { ar: ['الريتينول، فيتامين C.'], en: ['Retinol, Vitamin C.'] }, best_mixed_with: { ar: ['Effaclar H (للترطيب بعدها).'], en: ['Effaclar H (for hydration after).'] } }
    },
    precautions: { indications: { ar: 'حب الشباب للبالغين والمسام الواسعة.', en: 'Adult acne and enlarged pores.' }, pregnancy_safe: false, sun_sensitivity: true }
});

// [14] Effaclar Duo+M
deepProductsList.push({
    id: 'lrp_effaclar_duo_plus_m', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار دو+ M (علاج الحبوب)', en: 'Effaclar Duo+M' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { ar: 'مدعم بعلم الميكروبيوم (Phylobioma) لاستهداف السلالات البكتيرية المسببة لحب الشباب بشكل مباشر.', en: 'Powered by microbiome science (Phylobioma) to specifically target acne-causing bacterial strains.' },
        patient_benefit: { ar: 'يقلل الحبوب والبثور والآثار (حمراء/بنية) بنتائج ملحوظة خلال 8 ساعات.', en: 'Reduces spots, blemishes, and marks (red/brown) with visible results in 8 hours.' },
        active_ingredients: [{ name: 'Phylobioma + Procerad', concentration: { ar: 'براءة اختراع', en: 'Patent' }, role: { ar: 'مضاد بكتيري وعلامات.', en: 'Antibacterial and anti-marks.' } }]
    },
    clinical_usage: {
        frequency: { ar: '1-2 مرة يومياً.', en: '1-2 times daily.' },
        step_in_routine: { ar: 'علاج موضعي أو كامل الوجه.', en: 'Spot or full-face treatment.' },
        application: { ar: 'على مناطق الحبوب.', en: 'On blemish areas.' },
        layering: { do_not_mix_with: { ar: ['المقشرات القوية في نفس الوقت.'], en: ['Strong exfoliants at the same time.'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: { indications: { ar: 'الرؤوس السوداء، الحبوب، والآثار.', en: 'Blackheads, acne, and marks.' }, pregnancy_safe: false, sun_sensitivity: false }
});

// [15] Lipikar Syndet AP+
deepProductsList.push({
    id: 'lrp_lipikar_syndet', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار سينديت AP+ (غسول للإكزيما)', en: 'Lipikar Syndet AP+ Cream Wash' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { ar: 'غسول خالي من الصابون غني بزبدة الشيا والنياسيناميد ومركب Aqua Posae Filiformis لتهدئة تهيج الجلد أثناء الاستحمام.', en: 'Soap-free wash rich in Shea Butter, Niacinamide, and Aqua Posae Filiformis to soothe skin irritation during showers.' },
        patient_benefit: { ar: 'ينظف بلطف فائق ويقلل الجفاف الشديد والرغبة في الحكة من أول استحمام.', en: 'Ultra-gentle cleansing that reduces severe dryness and urge to scratch from the first shower.' },
        active_ingredients: [{ name: 'Niacinamide + Shea Butter', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'استعادة الحاجز الجلدي.', en: 'Skin barrier restoration.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً أثناء الاستحمام.', en: 'Daily during shower.' },
        step_in_routine: { ar: 'تنظيف الجسم/الوجه.', en: 'Body/face cleansing.' },
        application: { ar: 'يرغى بلطف ويشطف.', en: 'Lather gently and rinse.' },
        layering: { do_not_mix_with: { ar: ['اللوف الخشن.'], en: ['Harsh loofahs.'] }, best_mixed_with: { ar: ['Lipikar Baume AP+M.'], en: ['Lipikar Baume AP+M.'] } }
    },
    precautions: { indications: { ar: 'الإكزيما، الجفاف الشديد، وبشرة الأطفال/الرضع.', en: 'Eczema, severe dryness, and baby/infant skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [16] Lipikar Baume AP+M
deepProductsList.push({
    id: 'lrp_lipikar_baume_apm', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار بوم AP+M (بلسم الإكزيما)', en: 'Lipikar Baume AP+M' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { ar: 'يحتوي على تقنية AP+M الحصرية التي تعيد التوازن لميكروبيوم الجلد وتوقف دورة الحكة والالتهاب.', en: 'Contains exclusive AP+M technology that rebalances the skin microbiome and stops the itch-scratch cycle.' },
        patient_benefit: { ar: 'يسكن الحكة فوراً ويمنع الانتكاسات ونوبات الإكزيما لفترات طويلة.', en: 'Instantly soothes itching and spaces out eczema flare-ups.' },
        active_ingredients: [{ name: 'Aqua Posae + Microresyl', concentration: { ar: 'براءة اختراع', en: 'Patent' }, role: { ar: 'توازن الميكروبيوم.', en: 'Microbiome balance.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'مرة يومياً.', en: 'Once daily.' },
        step_in_routine: { ar: 'ترطيب عميق.', en: 'Deep hydration.' },
        application: { ar: 'على بشرة نظيفة وجافة.', en: 'On clean, dry skin.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['Lipikar Syndet AP+.'], en: ['Lipikar Syndet AP+.'] } }
    },
    precautions: { indications: { ar: 'البشرة المعرضة للإكزيما والتحسس الشديد.', en: 'Eczema-prone and severely sensitive skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [17] Lipikar Lait Urea 5%
deepProductsList.push({
    id: 'lrp_lipikar_urea', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار لوشن يوريا 5% (لخشونة الجلد)', en: 'Lipikar Lait Urea 5+ Shea Butter' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { ar: 'يجمع بين 5% يوريا (مقشر لطيف للجلد الخشن) وزبدة الشيا لترميم الحاجز وتقليل التقرن.', en: 'Combines 5% Urea (gentle exfoliant for rough skin) and Shea Butter to repair the barrier and reduce keratosis.' },
        patient_benefit: { ar: 'ينعم الجلد المتقشر والخشن (مثل جلد الوزة) ويهدئ الاحمرار.', en: 'Smooths flaky, rough skin (e.g., Keratosis Pilaris) and soothes redness.' },
        active_ingredients: [{ name: '5% Urea + HEPES', concentration: { ar: 'عالي', en: 'High' }, role: { ar: 'تقشير وترطيب مزدوج.', en: 'Dual exfoliation and hydration.' } }]
    },
    clinical_usage: {
        frequency: { ar: '1-2 مرة يومياً.', en: '1-2 times daily.' },
        step_in_routine: { ar: 'لوشن للجسم.', en: 'Body lotion.' },
        application: { ar: 'على الجسم مع التركيز على المناطق الخشنة.', en: 'On body, focusing on rough areas.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: { indications: { ar: 'الجلد المتقشر، الخشونة، وجلد الوزة.', en: 'Flaky skin, roughness, and Keratosis Pilaris.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [18] Anthelios UVMUNE 400 Oil Control (Invisible / Tinted)
deepProductsList.push({
    id: 'lrp_anthelios_uvmune_oil_control', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس UVMUNE 400 جل-كريم (تحكم بالدهون)', en: 'Anthelios UVMUNE 400 Oil Control Gel-Cream SPF 50+' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { ar: 'يحتوي على فلتر Mexoryl 400 الحصري للحماية من أطول أشعة UVA، مع جزيئات دقيقة لامتصاص الزهم.', en: 'Contains exclusive Mexoryl 400 filter protecting against ultra-long UVA rays, with micro-particulates to absorb sebum.' },
        patient_benefit: { ar: 'حماية فائقة لا تسد المسام، وتأثير مطفأ (Matte) يدوم 12 ساعة.', en: 'Ultimate protection that is non-comedogenic, with a 12-hour matte effect.' },
        active_ingredients: [{ name: 'Mexoryl 400 + Airlicium', concentration: { ar: 'براءة اختراع', en: 'Patent' }, role: { ar: 'حماية قصوى وامتصاص دهون.', en: 'Max protection and sebum absorption.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'قبل التعرض للشمس ويجدد.', en: 'Before sun exposure and reapply.' },
        step_in_routine: { ar: 'الخطوة الأخيرة نهاراً.', en: 'Last step morning.' },
        application: { ar: 'متوفر بنسخة شفافة ونسخة ملونة (Tinted).', en: 'Available in Invisible and Tinted versions.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: { indications: { ar: 'البشرة الدهنية والمختلطة.', en: 'Oily and combination skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [19] Anthelios UVMUNE 400 Invisible Fluid
deepProductsList.push({
    id: 'lrp_anthelios_uvmune_fluid', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس UVMUNE 400 فلويد سائل', en: 'Anthelios UVMUNE 400 Invisible Fluid SPF 50+' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { ar: 'فلتر Mexoryl 400 في قوام سائل جداً وخفيف، مقاوم للماء والعرق والرمل.', en: 'Mexoryl 400 filter in an ultra-light fluid texture, resistant to water, sweat, and sand.' },
        patient_benefit: { ar: 'حماية غير مرئية تماماً ومناسبة للعين الحساسة.', en: 'Completely invisible protection, safe for sensitive eyes.' },
        active_ingredients: [{ name: 'Mexoryl 400', concentration: { ar: 'براءة اختراع', en: 'Patent' }, role: { ar: 'حماية من أشعة UVA الطويلة.', en: 'Protection from ultra-long UVA.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'تجديد كل ساعتين.', en: 'Reapply every 2 hours.' },
        step_in_routine: { ar: 'واقي شمس.', en: 'Sunscreen.' },
        application: { ar: 'يرج جيداً قبل الاستخدام.', en: 'Shake well before use.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: { indications: { ar: 'البشرة العادية، الحساسة، ولجميع الأنواع.', en: 'Normal, sensitive, and all skin types.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [20] Anthelios Age Correct (Invisible / Tinted)
deepProductsList.push({
    id: 'lrp_anthelios_age_correct', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس إيدج كوريكت (مضاد للتجاعيد والتصبغ)', en: 'Anthelios Age Correct SPF 50 (Invisible/Tinted)' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { ar: 'حماية من الشمس مدمجة بعلاج يومي يحتوي على حمض الهيالورونيك المجزأ، النياسيناميد، و PHE-Resorcinol.', en: 'Sun protection integrated with daily skincare containing fragmented Hyaluronic Acid, Niacinamide, and PHE-Resorcinol.' },
        patient_benefit: { ar: 'يقلل التجاعيد بنسبة 15% والبقع الداكنة بنسبة 26% خلال 4 أسابيع.', en: 'Reduces wrinkles by 15% and dark spots by 26% in 4 weeks.' },
        active_ingredients: [{ name: 'HA + Niacinamide + PHE-Resorcinol', concentration: { ar: 'مرتفع', en: 'High' }, role: { ar: 'تصحيح علامات تقدم السن.', en: 'Anti-aging correction.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'كل صباح.', en: 'Every morning.' },
        step_in_routine: { ar: 'عناية نهارية + واقي شمس.', en: 'Day care + SPF.' },
        application: { ar: 'متوفر بنسخة شفافة وملونة.', en: 'Available in clear and tinted.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['Pure Vitamin C10 Serum (قبله).'], en: ['Pure Vitamin C10 Serum (before).'] } }
    },
    precautions: { indications: { ar: 'التجاعيد، التصبغات، وفقدان المرونة.', en: 'Wrinkles, hyperpigmentation, and loss of elasticity.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [21] Anthelios Dermo-Pediatrics Milk
deepProductsList.push({
    id: 'lrp_anthelios_pediatrics', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس لوشن للأطفال', en: 'Anthelios Dermo-Pediatrics Milk SPF 50+' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { ar: 'تركيبة مبسطة لتناسب بشرة الأطفال الرقيقة، شديدة المقاومة للماء والرمل.', en: 'Minimalist formula tailored for delicate children skin, highly water and sand resistant.' },
        patient_benefit: { ar: 'يحمي بشرة الأطفال من حروق الشمس دون التسبب في تهيج.', en: 'Protects children skin from sunburns without causing irritation.' },
        active_ingredients: [{ name: 'XL-Protect Filters', concentration: { ar: 'آمن للأطفال', en: 'Pediatric safe' }, role: { ar: 'حماية واسعة الطيف.', en: 'Broad spectrum protection.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'قبل التعرض للشمس.', en: 'Before sun exposure.' },
        step_in_routine: { ar: 'حماية للجسم والوجه.', en: 'Body and face protection.' },
        application: { ar: 'يوزع بسخاء.', en: 'Apply generously.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: { indications: { ar: 'بشرة الأطفال (من عمر 6 أشهر وأكثر).', en: 'Children skin (6 months and older).' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [22] Toleriane Dermallergo Eye
deepProductsList.push({
    id: 'lrp_toleriane_eye', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'توليريان ديرماليرجو كريم العين', en: 'Toleriane Dermallergo Eye Cream' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { ar: 'يحتوي على Neurosensine لتهدئة الأعصاب الجلدية، و Sphingobioma لدعم ميكروبيوم البشرة في عبوة معقمة تمنع التلوث.', en: 'Contains Neurosensine to soothe skin nerves, and Sphingobioma to support microbiome in a sterile, anti-contamination pump.' },
        patient_benefit: { ar: 'يوقف الحكة، الاحمرار، والانتفاخات التحسسية حول العين فوراً.', en: 'Instantly stops itching, redness, and allergic puffiness around eyes.' },
        active_ingredients: [{ name: 'Neurosensine + Niacinamide', concentration: { ar: 'مهدئ عصبي', en: 'Neuro-soothing' }, role: { ar: 'تسكين فوري.', en: 'Instant relief.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'كريم محيط العين.', en: 'Eye contour cream.' },
        application: { ar: 'بالتربيت اللطيف جداً.', en: 'Very gentle patting.' },
        layering: { do_not_mix_with: { ar: ['أي منتج عطري حول العين.'], en: ['Any fragranced product around eyes.'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: { indications: { ar: 'العيون الحساسة والمصابة بالإكزيما أو الحساسية.', en: 'Sensitive eyes, eczema, or allergy-prone.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [23] Pure Vitamin C10 Serum
deepProductsList.push({
    id: 'lrp_vit_c10_serum', brandId: 'laroche', familyId: 'serums', brand: 'La Roche-Posay',
    name: { ar: 'بيور فيتامين C10 سيروم', en: 'Pure Vitamin C10 Serum' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { ar: '10% فيتامين سي نقي بأس هيدروجيني فسيولوجي مدمج مع حمض الساليسيليك للتقشير اللطيف.', en: '10% Pure Vitamin C at physiological pH combined with Salicylic Acid for gentle exfoliation.' },
        patient_benefit: { ar: 'يمنح نضارة فورية، يوحد اللون، ويقلل التجاعيد الرقيقة ومناسب للبشرة الحساسة.', en: 'Grants instant radiance, evens tone, reduces fine lines, and is suitable for sensitive skin.' },
        active_ingredients: [{ name: '10% L-Ascorbic Acid', concentration: { ar: '10%', en: '10%' }, role: { ar: 'مضاد أكسدة وكولاجين.', en: 'Antioxidant & Collagen.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'مرة صباحاً.', en: 'Once morning.' },
        step_in_routine: { ar: 'السيروم الصباحي.', en: 'Morning serum.' },
        application: { ar: 'على الوجه والرقبة.', en: 'On face and neck.' },
        layering: { do_not_mix_with: { ar: ['المقشرات، الريتينول (في نفس الوقت).'], en: ['Exfoliants, Retinol (at same time).'] }, best_mixed_with: { ar: ['Anthelios Age Correct.'], en: ['Anthelios Age Correct.'] } }
    },
    precautions: { indications: { ar: 'البهتان، التصبغات الخفيفة، والتجاعيد.', en: 'Dullness, mild hyperpigmentation, and wrinkles.' }, pregnancy_safe: true, sun_sensitivity: true }
});

// [24] Hyalu B5 Serum
deepProductsList.push({
    id: 'lrp_hyalu_b5_serum', brandId: 'laroche', familyId: 'serums', brand: 'La Roche-Posay',
    name: { ar: 'هيالو B5 سيروم (للامتلاء والترميم)', en: 'Hyalu B5 Serum' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { ar: 'يجمع بين نوعين من حمض الهيالورونيك (لترطيب سطحي وعميق) وفيتامين B5 لترميم حاجز الجلد.', en: 'Combines two types of Hyaluronic Acid (surface and deep hydration) and Vitamin B5 to repair the skin barrier.' },
        patient_benefit: { ar: 'يعيد امتلاء البشرة (Plumping effect) ويصلح الجلد المجهد.', en: 'Restores skin volume (Plumping effect) and repairs tired skin.' },
        active_ingredients: [{ name: 'Hyaluronic Acid + Vit B5', concentration: { ar: 'مركز', en: 'Concentrated' }, role: { ar: 'ترطيب عميق وترميم.', en: 'Deep hydration and repair.' } }]
    },
    clinical_usage: {
        frequency: { ar: '1-2 مرة يومياً.', en: '1-2 times daily.' },
        step_in_routine: { ar: 'سيروم مرطب.', en: 'Hydrating serum.' },
        application: { ar: 'على بشرة مندية قليلاً.', en: 'On slightly damp skin.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['Retinol B3 (يستخدم قبله للترطيب).'], en: ['Retinol B3 (used before for hydration).'] } }
    },
    precautions: { indications: { ar: 'فقدان الحجم، الجفاف، والبهتان.', en: 'Volume loss, dehydration, and dullness.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [25] Retinol B3 Serum
deepProductsList.push({
    id: 'lrp_retinol_b3_serum', brandId: 'laroche', familyId: 'serums', brand: 'La Roche-Posay',
    name: { ar: 'ريتينول B3 سيروم (للتجاعيد العميقة)', en: 'Retinol B3 Serum' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { ar: 'ريتينول نقي ومتدرج الإطلاق مصمم خصيصاً للبشرة الحساسة، مدعم بـ فيتامين B3 (نياسيناميد) لتقليل التهيج.', en: 'Pure and gradual-release Retinol formulated for sensitive skin, boosted with Vitamin B3 (Niacinamide) to reduce irritation.' },
        patient_benefit: { ar: 'يعالج التجاعيد العميقة والتصبغات دون التسبب في احمرار أو تقشر شديد.', en: 'Treats deep wrinkles and photoaging without causing severe redness or peeling.' },
        active_ingredients: [{ name: 'Retinol + Niacinamide', concentration: { ar: '0.3%', en: '0.3%' }, role: { ar: 'تجديد الخلايا.', en: 'Cell turnover.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'مرة مساءً.', en: 'Once at night.' },
        step_in_routine: { ar: 'سيروم مسائي.', en: 'Night serum.' },
        application: { ar: 'تدريجياً (مرتين أسبوعياً ثم يزاد).', en: 'Gradually (twice a week then increase).' },
        layering: { do_not_mix_with: { ar: ['أحماض التقشير (AHA/BHA).'], en: ['Exfoliating acids (AHA/BHA).'] }, best_mixed_with: { ar: ['Cicaplast Baume B5+ (بعده).'], en: ['Cicaplast Baume B5+ (after).'] } }
    },
    precautions: { indications: { ar: 'التجاعيد العميقة وشيخوخة الجلد الضوئية.', en: 'Deep wrinkles and photoaging.' }, pregnancy_safe: false, sun_sensitivity: true }
});

// [26] Mela B3 Serum (من الصورة)
deepProductsList.push({
    id: 'lrp_mela_b3_serum', brandId: 'laroche', familyId: 'serums', brand: 'La Roche-Posay',
    name: { ar: 'ميلا B3 سيروم (علاج التصبغات المتطور)', en: 'Mela B3 Serum' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { ar: 'يستخدم جزيء Melasyl™ المبتكر الذي يعترض مسار الميلانين قبل ظهوره على الجلد، مع 10% نياسيناميد.', en: 'Uses innovative Melasyl™ molecule that intercepts melanin precursors before they mark the skin, plus 10% Niacinamide.' },
        patient_benefit: { ar: 'يمحو البقع الداكنة العنيدة، الكلف، وآثار الحبوب ويمنع عودتها.', en: 'Erases stubborn dark spots, melasma, and post-acne marks, preventing their return.' },
        active_ingredients: [{ name: 'Melasyl™ + 10% Niacinamide', concentration: { ar: 'براءة اختراع', en: 'Patent' }, role: { ar: 'تفكيك التصبغات ومنعها.', en: 'Depigmentation and prevention.' } }]
    },
    clinical_usage: {
        frequency: { ar: '1-2 مرة يومياً.', en: '1-2 times daily.' },
        step_in_routine: { ar: 'سيروم علاجي.', en: 'Therapeutic serum.' },
        application: { ar: 'على مناطق التصبغ أو كامل الوجه.', en: 'On pigmented areas or full face.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['Anthelios Pigment Correct.'], en: ['Anthelios Pigment Correct.'] } }
    },
    precautions: { indications: { ar: 'التصبغات العنيدة، آثار الحبوب، والكلف.', en: 'Stubborn dark spots, post-acne marks, and melasma.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [27] Niacinamide 10 Serum
deepProductsList.push({
    id: 'lrp_niacinamide_10_serum', brandId: 'laroche', familyId: 'serums', brand: 'La Roche-Posay',
    name: { ar: 'نياسيناميد 10 سيروم', en: 'Niacinamide 10 Serum' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { ar: 'تركيز 10% من النياسيناميد لتقليل الالتهاب ومنع انتقال الميلانين، بالإضافة إلى PHE-Resorcinol.', en: '10% Niacinamide concentration to reduce inflammation and block melanin transfer, plus PHE-Resorcinol.' },
        patient_benefit: { ar: 'يوحد لون البشرة ويرمم الحاجز الجلدي.', en: 'Evens skin tone and repairs the skin barrier.' },
        active_ingredients: [{ name: '10% Niacinamide', concentration: { ar: '10%', en: '10%' }, role: { ar: 'مضاد التهاب وتصبغ.', en: 'Anti-inflammatory & anti-pigment.' } }]
    },
    clinical_usage: {
        frequency: { ar: '1-2 مرة يومياً.', en: '1-2 times daily.' },
        step_in_routine: { ar: 'سيروم يومي.', en: 'Daily serum.' },
        application: { ar: 'تجنب محيط العين.', en: 'Avoid eye contour.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: { indications: { ar: 'اللون الباهت، التصبغات، وضعف الحاجز الجلدي.', en: 'Dull tone, spots, and weak skin barrier.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [28] Cicaplast Baume B5+ (من الصورة)
deepProductsList.push({
    id: 'lrp_cicaplast_baume_b5', brandId: 'laroche', familyId: 'cicaplast', brand: 'La Roche-Posay',
    name: { ar: 'سيكابلاست بوم B5+ (المرمم الشامل)', en: 'Cicaplast Baume B5+ Ultra-Repairing' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { ar: 'يجمع بين 5% بانثينول (لتهدئة فورية)، وماديكاسوسيد (لتسريع الالتئام)، ومركب Tribioma لدعم بكتيريا الجلد النافعة.', en: 'Combines 5% Panthenol (instant soothing), Madecassoside (healing acceleration), and Tribioma to support beneficial skin flora.' },
        patient_benefit: { ar: 'يرمم الجلد المتضرر، الحروق السطحية، والتهابات الحفاضات من اليوم الأول.', en: 'Repairs damaged skin, superficial burns, and diaper rash from day 1.' },
        active_ingredients: [{ name: 'Panthenol + Madecassoside', concentration: { ar: '5%', en: '5%' }, role: { ar: 'التئام الأنسجة.', en: 'Tissue healing.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً أو عند الحاجة.', en: 'Twice daily or as needed.' },
        step_in_routine: { ar: 'علاج موضعي.', en: 'Spot treatment.' },
        application: { ar: 'على منطقة نظيفة وجافة.', en: 'On clean, dry area.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: { indications: { ar: 'التهيج، الجروح السطحية، تقشير العيادات، والليزر.', en: 'Irritation, minor wounds, post-peeling, and laser.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [29] Physiological Cleansing Micellar Foaming Water
deepProductsList.push({
    id: 'lrp_physio_foaming_water', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'الغسول الرغوي الميسيلار الفسيولوجي', en: 'Physiological Cleansing Micellar Foaming Water' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { ar: 'رغوة خالية من الصابون تستخدم بوليمرات ميسيلار لتنظيف المكياج والشوائب مع احترام درجة حموضة الجلد.', en: 'Soap-free foam using micellar polymers to cleanse makeup and impurities while respecting skin pH.' },
        patient_benefit: { ar: 'تنظيف عميق ولطيف جداً للبشرة الحساسة دون فرك.', en: 'Deep and ultra-gentle cleansing for sensitive skin without rubbing.' },
        active_ingredients: [{ name: 'Micellar Polymers', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'التقاط الشوائب بلطف.', en: 'Gentle impurity capture.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'غسول يومي.', en: 'Daily wash.' },
        application: { ar: 'يدلك على الوجه ويشطف.', en: 'Massage on face and rinse.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['Toleriane Dermallergo.'], en: ['Toleriane Dermallergo.'] } }
    },
    precautions: { indications: { ar: 'البشرة الحساسة جداً والعادية.', en: 'Ultra-sensitive and normal skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});
