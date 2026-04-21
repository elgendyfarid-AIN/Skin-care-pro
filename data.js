// ==========================================
// 🏥 Skin Care Pro - Clinical Database
// النسخة السريرية المنقحة (V2.0) - خالية من الأخطاء اللغوية
// ==========================================

const brandsList = [];
const casesList = [];
const skinTypesList = [];
const deepProductsList = [];
const glossaryDict = {};

// ==========================================
// 📚 1. القاموس الطبي (Pharmacological Glossary)
// ==========================================

glossaryDict['micellar_tech'] = {
    title: { ar: 'تقنية الميسيلار (Micellar Technology) 🧼', en: 'Micellar Technology 🧼' },
    desc: { 
        ar: 'جزيئات منظفة مجهرية (Surfactants) تمتلك رأساً محباً للماء وذيلاً محباً للدهون، تتجمع بشكل كروي لتلتقط الشوائب والمكياج بلطف فائق دون الإخلال بطبقة الهيدروليبيديك للجلد.', 
        en: 'Microscopic cleansing molecules (Surfactants) with a hydrophilic head and a lipophilic tail. They form spheres to gently capture impurities and makeup without disrupting the skin\'s hydrolipidic film.' 
    }
};

glossaryDict['daf_patent'] = {
    title: { ar: 'براءة اختراع D.A.F 🛡️', en: 'D.A.F.™ Patent 🛡️' },
    desc: { 
        ar: 'مركب حصري (Dermatological Advanced Formulation) يحتوي على سكريات نشطة بيولوجياً لتقليل تفاعلية الجلد وزيادة عتبة تحمله للعوامل الخارجية المسببة للالتهاب.', 
        en: 'An exclusive complex (Dermatological Advanced Formulation) containing biologically active sugars to decrease skin reactivity and increase its tolerance threshold against external inflammatory triggers.' 
    }
};

glossaryDict['rosactiv'] = {
    title: { ar: 'براءة اختراع Rosactiv 🔴', en: 'Rosactiv™ Patent 🔴' },
    desc: { 
        ar: 'مركب بيولوجي يعمل مباشرة على العامل المسبب لتمدد وضعف الشعيرات الدموية (VEGF)، مما يمنع ويعالج الاحمرار الدائم في حالات الوردية.', 
        en: 'A biological complex that acts directly on the factor responsible for the dilation and weakening of skin capillaries (VEGF), preventing and treating permanent redness in rosacea.' 
    }
};

glossaryDict['defensive_tech'] = {
    title: { ar: 'تقنية ديفينسيف (Defensive Technology) 🧬', en: 'Defensive Technology™ 🧬' },
    desc: { 
        ar: 'تستهدف الالتهاب الناتج عن العوامل البيئية (Inflammaging). تحتوي على الكارنوزين (مضاد أكسدة)، ومستخلص المريمية الحمراء (مضاد للالتهاب)، وتترا ببتيد-10 (لتقوية الحاجز الجلدي).', 
        en: 'Targets environmentally-induced inflammation (Inflammaging). Contains Carnosine (antioxidant), Red Sage extract (anti-inflammatory), and Tetrapeptide-10 (barrier strengthening).' 
    }
};

// ==========================================
// 🏢 2. العلامات التجارية والعائلات (Brands & Families)
// ==========================================

brandsList.push({
    id: 'bioderma', name: 'Bioderma',
    families: [
        { id: 'sensibio', name: { ar: 'سينسيبيو (للبشرة الحساسة والوردية)', en: 'Sensibio (Sensitive & Rosacea-Prone)' } },
        { id: 'sebium', name: { ar: 'سيبيوم (للبشرة الدهنية والمعرضة للحبوب)', en: 'Sebium (Oily & Acne-Prone)' } },
        { id: 'atoderm', name: { ar: 'أتوديرم (للجفاف الشديد والإكزيما)', en: 'Atoderm (Very Dry & Atopic Skin)' } },
        { id: 'photoderm', name: { ar: 'فوتوديرم (للحماية من الشمس)', en: 'Photoderm (Sun Protection)' } },
        { id: 'pigmentbio', name: { ar: 'بيجمنت بيو (لعلاج التصبغات)', en: 'Pigmentbio (Hyperpigmentation)' } },
        { id: 'hydrabio', name: { ar: 'هيدرابيو (للبشرة الفاقدة للماء)', en: 'Hydrabio (Dehydrated Skin)' } },
        { id: 'abcderm', name: { ar: 'أبِسيديرم (لعناية الأطفال والرضع)', en: 'ABCDerm (Pediatric Care)' } },
        { id: 'node', name: { ar: 'نوديه (للعناية بفروة الرأس والشعر)', en: 'Node (Hair & Scalp Care)' } },
        { id: 'cicabio', name: { ar: 'سيكابيو (لترميم الجلد المتضرر)', en: 'Cicabio (Damaged Skin Repair)' } }
    ]
});

// ==========================================
// 💊 3. المنتجات السريرية (Clinical Products) - Block 1: Sensibio
// ==========================================

// [1] Sensibio H2O Micellar Water
deepProductsList.push({
    id: 'bio_sensibio_h2o', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو H2O ميسيلار', en: 'Sensibio H2O Micellar Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (درجة حموضة فسيولوجية)', en: '5.5 (Physiological pH)' },
        mechanism: { 
            ar: 'تستخدم <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">تقنية الميسيلار</span> المعلقة في ماء عالي النقاء (Pharmaceutical-grade water) لتنظيف البشرة من 99% من المكياج، الملوثات البيئية، والمعادن الثقيلة دون المساس بالطبقة الواقية.', 
            en: 'Utilizes <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">Micellar Technology</span> suspended in highly purified pharmaceutical-grade water to cleanse 99% of makeup, pollution, and heavy metals without disrupting the protective barrier.' 
        },
        patient_benefit: { 
            ar: 'المنظف الطبي الأول عالمياً. يزيل مكياج الوجه والعين بمسحة واحدة دون الحاجة للشطف، ويهدئ البشرة فوراً لتجنب الشعور بالشد.', 
            en: 'The #1 medical cleanser globally. Removes face and eye makeup in a single wipe without rinsing, instantly soothing the skin to prevent tightness.' 
        },
        active_ingredients: [
            { name: 'PEG-6 Caprylic/Capric Glycerides', concentration: { ar: 'ميسيلار فعال', en: 'Active Micelles' }, role: { ar: 'التقاط الشوائب والمكياج بلطف فائق.', en: 'Ultra-gentle capturing of impurities and makeup.' } },
            { name: 'Cucumis Sativus (Cucumber) Extract', concentration: { ar: 'مستخلص نقي', en: 'Pure Extract' }, role: { ar: 'تقليل الاحتقان وتهدئة البشرة فوراً.', en: 'Decongests and instantly soothes the skin.' } },
            { name: 'D.A.F.™ Patent', concentration: { ar: 'براءة اختراع', en: 'Patented Complex' }, role: { ar: 'رفع سقف تحمل الجلد الحساس.', en: 'Raises the tolerance threshold of sensitive skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (صباحاً ومساءً).', en: 'As needed (AM & PM).' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الجاف).', en: 'Step 1 (Dry Cleansing).' },
        application: { ar: 'يُبلل قطن نظيف، يُمسح الوجه والعينان بلطف. لا يتطلب الشطف بالماء.', en: 'Soak a cotton pad, gently wipe face and eyes. Requires no water rinsing.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف بقطن خشن.'], en: ['Harsh rubbing with rough cotton pads.'] }, 
            best_mixed_with: { ar: ['غسول سينسيبيو (لتنظيف مزدوج - Double Cleansing).'], en: ['Sensibio Gel Moussant (for Double Cleansing).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة، المتفاعلة، إزالة مكياج العيون، وتجنب مياه الصنبور القاسية.', en: 'Sensitive, reactive skin, eye makeup removal, and avoiding harsh tap water.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'متوفر بأحجام (100ml, 250ml, 500ml, 850ml). خالي من العطور والكحول.', en: 'Available in sizes (100ml, 250ml, 500ml, 850ml). Fragrance and alcohol-free.' }
    }
});

// [2] Sensibio Gel Moussant
deepProductsList.push({
    id: 'bio_sensibio_gel', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو جل موسان (غسول رغوي)', en: 'Sensibio Gel Moussant' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (متوازن)', en: '5.5 (Balanced)' },
        mechanism: { 
            ar: 'ينظف بلطف باستخدام مواد خافضة للتوتر السطحي تحاكي دهون الجلد الطبيعية (Biomimetic)، مما يحافظ على ترطيب الجلد مع تنقيته من الشوائب مدعوماً بـ <span class="glossary-term" onclick="openGlossary(\'daf_patent\')">D.A.F.™</span>.', 
            en: 'Cleanses gently using biomimetic surfactants that mimic natural skin lipids, preserving skin hydration while purifying it, supported by <span class="glossary-term" onclick="openGlossary(\'daf_patent\')">D.A.F.™</span>.' 
        },
        patient_benefit: { 
            ar: 'غسول رغوي مريح يزيد من ترطيب البشرة بنسبة 77% بعد أسبوعين من الاستخدام، ويمنع الشعور المزعج بشد الوجه بعد الغسيل.', 
            en: 'A comforting foaming gel that boosts skin hydration by 77% after 2 weeks of use, preventing the uncomfortable tight feeling after washing.' 
        },
        active_ingredients: [
            { name: 'Coco-Glucoside & Glyceryl Oleate', concentration: { ar: 'مركبات نشطة', en: 'Active Compounds' }, role: { ar: 'تنظيف فعال مع تعويض الدهون المفقودة (Lipid-restoring).', en: 'Effective cleansing with lipid-restoring action.' } },
            { name: 'Tocopherol (Vitamin E)', concentration: { ar: 'مضاد أكسدة', en: 'Antioxidant' }, role: { ar: 'حماية الخلايا من الإجهاد التأكسدي.', en: 'Protects cells from oxidative stress.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الرطب).', en: 'Step 1 (Wet Cleansing).' },
        application: { ar: 'يُرغى على بشرة مبللة، يُدلك بلطف، ثم يُشطف جيداً بالماء.', en: 'Lather onto wet skin, massage gently, then rinse thoroughly with water.' },
        layering: { 
            do_not_mix_with: { ar: ['الماء الساخن جداً (يزيد من تهيج البشرة الحساسة).'], en: ['Very hot water (increases irritation for sensitive skin).'] }, 
            best_mixed_with: { ar: ['كريمات سينسيبيو للترطيب.'], en: ['Sensibio moisturizing creams.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة جداً التي تفضل قوام الرغوة، البشرة المعرضة للاحمرار.', en: 'Ultra-sensitive skin preferring foam textures, redness-prone skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من الصابون والعطور. متوفر بأحجام (200ml, 500ml).', en: 'Soap and fragrance-free. Available in sizes (200ml, 500ml).' }
    }
});

// [3] Sensibio Defensive Serum
deepProductsList.push({
    id: 'bio_sensibio_defensive_serum', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو ديفينسيف سيروم', en: 'Sensibio Defensive Serum' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعالج الشيخوخة الناتجة عن الالتهاب المزمن (Inflammaging) باستخدام <span class="glossary-term" onclick="openGlossary(\'defensive_tech\')">تقنية ديفينسيف</span>، مع حمض الهيالورونيك لترطيب وملء الخطوط الدقيقة.', 
            en: 'Treats aging caused by chronic inflammation (Inflammaging) using <span class="glossary-term" onclick="openGlossary(\'defensive_tech\')">Defensive Technology</span>, combined with Hyaluronic Acid to hydrate and plump fine lines.' 
        },
        patient_benefit: { 
            ar: 'يهدئ البشرة فوراً، يعالج التجاعيد المبكرة الناتجة عن تحسس الجلد المستمر، ويعطي إشراقة وترطيب يدوم 24 ساعة.', 
            en: 'Instantly soothes skin, treats premature wrinkles caused by constant skin reactivity, and provides a 24h radiant, hydrated glow.' 
        },
        active_ingredients: [
            { name: 'Tetrapeptide-10', concentration: { ar: 'ببتيد فعال', en: 'Active Peptide' }, role: { ar: 'يقوي حاجز البشرة المادي بفعالية عالية.', en: 'Highly effective in strengthening the physical skin barrier.' } },
            { name: 'Red Sage Extract', concentration: { ar: 'مستخلص نقي', en: 'Pure Extract' }, role: { ar: 'يحد من الاستجابة الالتهابية العصبية للجلد.', en: 'Limits the skin\'s neuro-inflammatory response.' } },
            { name: 'Hyaluronic Acid', concentration: { ar: 'مركز', en: 'Concentrated' }, role: { ar: 'ترطيب عميق وتقليل الخطوط الدقيقة.', en: 'Deep hydration and fine line reduction.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'سيروم علاجي (قبل الكريم المرطب).', en: 'Treatment serum (before moisturizer).' },
        application: { ar: 'توضع بضع قطرات على الوجه والرقبة، يُدلك بلطف حتى يُمتص.', en: 'Apply a few drops to face and neck, massage gently until absorbed.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات الأحماض القوية جداً في نفس الروتين.'], en: ['Very strong acid exfoliants in the same routine.'] }, 
            best_mixed_with: { ar: ['كريم سينسيبيو ديفينسيف (لتعزيز النتائج).'], en: ['Sensibio Defensive Cream (to boost results).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة التي بدأت تظهر عليها علامات تقدم السن، البهتان، والجفاف.', en: 'Sensitive skin showing early signs of aging, dullness, and dehydration.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام خفيف وسريع الامتصاص. لا يسبب انسداد المسام.', en: 'Light, fast-absorbing texture. Non-comedogenic.' }
    }
});

// [4] Sensibio AR Anti-Redness Cream
deepProductsList.push({
    id: 'bio_sensibio_ar', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو AR (علاج الاحمرار والوردية)', en: 'Sensibio AR Anti-Redness Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستهدف الآلية البيولوجية للاحمرار من خلال براءة اختراع <span class="glossary-term" onclick="openGlossary(\'rosactiv\')">Rosactiv</span> لتقليل تمدد وضعف الأوعية الدموية، مع ترطيب غني بالكانولا.', 
            en: 'Targets the biological mechanism of redness via <span class="glossary-term" onclick="openGlossary(\'rosactiv\')">Rosactiv™</span> patent to reduce vasodilation and vessel weakening, with rich Canola hydration.' 
        },
        patient_benefit: { 
            ar: 'علاج سريري يقلل من حدة احمرار الوجه المستمر، يخفف الإحساس بالحرارة والوخز، ويمنع ظهور الشعيرات الدموية الواضحة.', 
            en: 'A clinical treatment that reduces continuous facial redness intensity, relieves heat/stinging sensations, and prevents visible capillaries.' 
        },
        active_ingredients: [
            { name: 'Enoxolone & Allantoin', concentration: { ar: 'مركبات مهدئة', en: 'Soothing Compounds' }, role: { ar: 'تسكين فوري للحرارة والالتهاب الموضعي.', en: 'Instant relief from local heat and inflammation.' } },
            { name: 'Rosactiv™ Complex', concentration: { ar: 'براءة اختراع', en: 'Patented Complex' }, role: { ar: 'تثبيط عامل VEGF المسبب لتمدد الأوعية.', en: 'Inhibits VEGF factor causing vasodilation.' } },
            { name: 'Canola Oil', concentration: { ar: 'غني', en: 'Rich' }, role: { ar: 'تغذية وتقوية حاجز الجلد ضد المؤثرات الخارجية.', en: 'Nourishes and strengthens skin barrier against external stressors.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'خطوة العلاج والترطيب.', en: 'Treatment and hydration step.' },
        application: { ar: 'يوضع على وجه نظيف، مع التركيز على المناطق المحمرة (الخدين، الأنف).', en: 'Apply to a clean face, focusing on red areas (cheeks, nose).' },
        layering: { 
            do_not_mix_with: { ar: ['المنتجات التي تحتوي على كحول أو عطور.', 'المقشرات الفيزيائية.'], en: ['Products containing alcohol or fragrance.', 'Physical exfoliants.'] }, 
            best_mixed_with: { ar: ['واقي شمس مخصص للوردية (Photoderm AR).'], en: ['Rosacea-specific sunscreen (Photoderm AR).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الوردية (Rosacea)، الاحمرار الدائم، ترقق الجلد وظهور الأوعية الدموية.', en: 'Rosacea, permanent redness, skin thinning and visible blood vessels.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'أساس ممتاز للمكياج، يمتص بسرعة بدون أثر دهني.', en: 'Excellent makeup base, absorbs quickly with no greasy finish.' }
    }
});
// ==========================================
// 💊 البلوك الثاني (Block 2): Bioderma - Sebium Family
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['fluidactiv'] = {
    title: { ar: 'براءة اختراع Fluidactiv 🟢', en: 'Fluidactiv™ Patent 🟢' },
    desc: { 
        ar: 'تقنية حصرية تعمل بيولوجياً على تنظيم جودة الإفرازات الدهنية (الزهم) لمنعها من التخثر والأكسدة، مما يمنع انسداد المسام وتكون الرؤوس السوداء والبيضاء من المنبع.', 
        en: 'An exclusive technology that biologically regulates sebum quality, preventing it from thickening and oxidizing, thereby stopping pore clogging and the formation of comedones at the source.' 
    }
};

glossaryDict['agaric_acid'] = {
    title: { ar: 'حمض الأغاريك (Agaric Acid) 🍄', en: 'Agaric Acid 🍄' },
    desc: { 
        ar: 'مستخلص نباتي يعمل كقابض قوي (Astringent) للأنسجة. يقوم بشد الجلد حول المسام وتقليص حجمها بشكل فوري وملحوظ، مع تقليل الإفرازات الدهنية السطحية.', 
        en: 'A plant extract acting as a powerful astringent. It tightens the skin around pores, visibly reducing their size instantly, while limiting surface sebum secretion.' 
    }
};

glossaryDict['isotretinoin_companion'] = {
    title: { ar: 'علاج مصاحب للروكوتان 💊', en: 'Isotretinoin Companion Care 💊' },
    desc: { 
        ar: 'رعاية طبية مصممة خصيصاً لتعويض الجفاف الشديد، ترقق الجلد، والالتهاب الناتج عن علاجات حب الشباب الفموية القوية (مثل الأيزوتريتينوين/روكوتان).', 
        en: 'Medical care specifically formulated to compensate for the severe dryness, skin thinning, and inflammation caused by strong oral acne treatments (like Isotretinoin/Accutane).' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [5] Sebium H2O Micellar Water
deepProductsList.push({
    id: 'bio_sebium_h2o', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم H2O ميسيلار', en: 'Sebium H2O Micellar Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (درجة حموضة فسيولوجية)', en: '5.5 (Physiological pH)' },
        mechanism: { 
            ar: 'يجمع بين <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">تقنية الميسيلار</span> لتنظيف الشوائب والمكياج، وبراءة اختراع <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv™</span> لتنظيم جودة الزهم بيولوجياً ومنع انسداد المسام.', 
            en: 'Combines <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">Micellar Technology</span> to cleanse impurities and makeup, with the <span class="glossary-term" onclick="openGlossary(\'fluidactiv\')">Fluidactiv™</span> patent to biologically regulate sebum quality and prevent clogged pores.' 
        },
        patient_benefit: { 
            ar: 'ينظف البشرة الدهنية بعمق دون التسبب في جفافها، يزيل اللمعان الزائد فوراً، ويترك البشرة منتعشة ونقية.', 
            en: 'Deeply cleanses oily skin without drying it out, instantly removes excess shine, and leaves the skin refreshed and purified.' 
        },
        active_ingredients: [
            { name: 'Zinc Gluconate', concentration: { ar: 'منقي فعال', en: 'Active Purifier' }, role: { ar: 'تنقية البشرة وتنظيم إفراز الدهون.', en: 'Purifying the skin and regulating sebum secretion.' } },
            { name: 'Copper Sulfate', concentration: { ar: 'مضاد بكتيري', en: 'Antibacterial' }, role: { ar: 'يحد من تكاثر البكتيريا المسببة للحبوب (ويعطي المحلول لونه الأزرق الطبيعي).', en: 'Limits the proliferation of acne-causing bacteria (giving the solution its natural blue tint).' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الجاف/إزالة المكياج).', en: 'Step 1 (Dry Cleansing/Makeup Removal).' },
        application: { ar: 'يُبلل قطن نظيف، يُمسح الوجه برفق. لا يتطلب الشطف بالماء.', en: 'Soak a cotton pad, gently wipe the face. Requires no water rinsing.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك القاسي للجلد النشط بحب الشباب.'], en: ['Harsh rubbing on active acne-prone skin.'] }, 
            best_mixed_with: { ar: ['سيبيوم جل موسان (للتنظيف المزدوج).'], en: ['Sebium Gel Moussant (for Double Cleansing).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة المختلطة إلى الدهنية، المسام الواسعة، واللمعان الزائد.', en: 'Combination to oily skin, enlarged pores, and excess shine.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يُنصح باستخدامه لإزالة مكياج العيون شديدة الحساسية (يُفضل استخدام Sensibio H2O للعين).', en: 'Not recommended for highly sensitive eye makeup removal (prefer Sensibio H2O for eyes).' }
    }
});

// [6] Sebium Gel Moussant
deepProductsList.push({
    id: 'bio_sebium_gel', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم جل موسان (غسول منقي)', en: 'Sebium Gel Moussant' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: '5.5 (متوازن لعدم تحفيز الدهون)', en: '5.5 (Balanced to prevent sebum rebound)' },
        mechanism: { 
            ar: 'ينظف وينقي البشرة بلطف بفضل كبريتات الزنك والنحاس، ويحد من إفراز الزهم، مع الحفاظ على درجة الحموضة الفسيولوجية لتجنب تأثير الارتداد الدهني (Rebound Effect).', 
            en: 'Gently cleanses and purifies the skin with Zinc and Copper sulfates, limits sebum secretion, while maintaining physiological pH to avoid the rebound effect.' 
        },
        patient_benefit: { 
            ar: 'يقلل من الشوائب واللمعان بنسبة كبيرة، ينظف المسام بعمق دون تجفيف الجلد، ويمكن استخدامه كرغوة حلاقة آمنة للرجال.', 
            en: 'Significantly reduces blemishes and shine, deep-cleans pores without drying the skin, and can be used as a safe shaving foam for men.' 
        },
        active_ingredients: [
            { name: 'Zinc Sulfate', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تنظيم الزهم ومضاد للالتهاب.', en: 'Sebo-regulating and anti-inflammatory.' } },
            { name: 'Copper Sulfate', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'مضاد للبكتيريا ومنقي.', en: 'Antibacterial and purifying.' } },
            { name: 'Fluidactiv™ Patent', concentration: { ar: 'براءة اختراع', en: 'Patented Complex' }, role: { ar: 'منع أكسدة وتصلب دهون المسام.', en: 'Prevents oxidation and hardening of pore sebum.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الرطب).', en: 'Step 1 (Wet Cleansing).' },
        application: { ar: 'يُرغى على بشرة مبللة، يُدلك بلطف، ثم يُشطف جيداً بالماء ويُجفف برفق.', en: 'Lather onto wet skin, massage gently, then rinse thoroughly and pat dry.' },
        layering: { 
            do_not_mix_with: { ar: ['أجهزة التنظيف الخشنة على الحبوب الملتهبة.'], en: ['Harsh cleansing devices on inflamed acne.'] }, 
            best_mixed_with: { ar: ['علاجات سيبيوم الموضعية (Sebium Global / Pore Refiner).'], en: ['Sebium topical treatments (Global / Pore Refiner).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، المختلطة، وحب الشباب الخفيف إلى المتوسط.', en: 'Oily, combination skin, and mild to moderate acne.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من الصابون (Soap-free). يضمن تحمل جيد للجلد والعينين.', en: 'Soap-free. Ensures good skin and ocular tolerance.' }
    }
});

// [7] Sebium Pore Refiner
deepProductsList.push({
    id: 'bio_sebium_pore_refiner', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم بور ريفاينر (مصغر المسام)', en: 'Sebium Pore Refiner' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً (لتعزيز التقشير)', en: 'Slightly acidic (to boost exfoliation)' },
        mechanism: { 
            ar: 'يعمل <span class="glossary-term" onclick="openGlossary(\'agaric_acid\')">حمض الأغاريك</span> كقابض فوري للمسام، بينما يعمل حمض الساليسيليك على تحسين نسيج الجلد كيميائياً، وتمنع تقنية Fluidactiv™ انسداد المسام مستقبلياً.', 
            en: '<span class="glossary-term" onclick="openGlossary(\'agaric_acid\')">Agaric Acid</span> acts as an instant pore astringent, Salicylic Acid chemically refines skin texture, and Fluidactiv™ prevents future clogging.' 
        },
        patient_benefit: { 
            ar: 'يقلص حجم المسام بشكل فوري وواضح، يعطي تأثيراً مطفياً (Matte) يمنع اللمعان طوال اليوم، وينعم ملمس البشرة الخشن.', 
            en: 'Instantly and visibly shrinks pore size, provides an all-day matte effect preventing shine, and smooths rough skin texture.' 
        },
        active_ingredients: [
            { name: 'Agaric Acid', concentration: { ar: 'قابض مكثف', en: 'Intense Astringent' }, role: { ar: 'شد الجلد حول المسام لتقليل قطرها.', en: 'Tightens the skin around pores to reduce their diameter.' } },
            { name: 'Salicylic Acid (BHA)', concentration: { ar: 'مقشر دقيق', en: 'Micro-exfoliant' }, role: { ar: 'إزالة الخلايا الميتة المتراكمة على سطح المسام.', en: 'Removes dead cells accumulated on the pore surface.' } },
            { name: 'Mattifying Powders', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'امتصاص الدهون السطحية فوراً.', en: 'Instantly absorbs surface sebum.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'قبل المرطب اليومي أو كبرايمر للمكياج.', en: 'Before daily moisturizer or as a makeup primer.' },
        application: { ar: 'يوزع على منطقة T-Zone للبشرة المختلطة، أو كامل الوجه للبشرة الدهنية.', en: 'Apply to the T-Zone for combination skin, or entire face for oily skin.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات كيميائية قوية أخرى في نفس الوقت (لتجنب الجفاف).'], en: ['Other strong chemical exfoliants simultaneously (to avoid dryness).'] }, 
            best_mixed_with: { ar: ['أساس (Primer) ممتاز تحت المكياج لثبات أطول.'], en: ['Excellent makeup primer base for longer hold.'] } 
        }
    },
    precautions: {
        indications: { ar: 'المسام الواسعة والظاهرة، البشرة الخشنة، واللمعان الزائد.', en: 'Enlarged/visible pores, rough skin texture, and excess shine.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'قوام خفيف جداً يمتص في ثوانٍ ويترك لمسة مخملية (Velvet finish).', en: 'Ultra-light texture absorbs in seconds, leaving a velvet finish.' }
    }
});

// [8] Sebium Hydra
deepProductsList.push({
    id: 'bio_sebium_hydra', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم هيدرا (مرطب معوّض)', en: 'Sebium Hydra Compensating Care' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يُعد <span class="glossary-term" onclick="openGlossary(\'isotretinoin_companion\')">علاجاً مصاحباً</span>؛ تعيد السيراميدات بناء الحاجز لتقليل فقدان الماء، يخفف الإينوكسولون الاحمرار، وتضمن Fluidactiv™ عدم سد المسام.', 
            en: 'Acts as a <span class="glossary-term" onclick="openGlossary(\'isotretinoin_companion\')">Companion Care</span>; Ceramides rebuild the barrier to reduce water loss, Enoxolone soothes redness, and Fluidactiv™ ensures non-comedogenicity.' 
        },
        patient_benefit: { 
            ar: 'يرطب البشرة الدهنية المجهدة والمجففة بفعل أدوية حب الشباب بكثافة، ويزيل الإحساس المؤلم بالشد والقشور.', 
            en: 'Intensely moisturizes stressed, dried-out oily skin from acne treatments, removing the painful tight sensation and flakiness.' 
        },
        active_ingredients: [
            { name: 'Ceramides + Xylitol', concentration: { ar: 'ترميم مكثف', en: 'Intense Repair' }, role: { ar: 'تعويض نقص الدهون والترطيب العميق.', en: 'Replenishing lipid deficiency and deep hydration.' } },
            { name: 'Enoxolone + Allantoin', concentration: { ar: 'مهدئ قوي', en: 'Potent Soothing' }, role: { ar: 'تهدئة الاحمرار والتهيج الناتج عن الجفاف الشديد.', en: 'Soothing redness and irritation caused by severe dryness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً (وكلما لزم الأمر).', en: 'Once to twice daily (and whenever necessary).' },
        step_in_routine: { ar: 'خطوة الترطيب الأساسية.', en: 'Main moisturizing step.' },
        application: { ar: 'يُدلك بلطف على وجه نظيف ومجفف.', en: 'Massage gently onto a clean, dried face.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد تعارض مسجل.'], en: ['No recorded contraindications.'] }, 
            best_mixed_with: { ar: ['أدوية الأيزوتريتينوين الفموية (الروكوتان)، والمقشرات القاسية.'], en: ['Oral Isotretinoin drugs (Accutane), and harsh exfoliants.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية المجففة بفعل العلاجات الطبية، الجفاف الشديد والتقشر المرتبط بعلاج حب الشباب.', en: 'Oily skin dried by medical treatments, severe dryness and flaking linked to acne therapies.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تركيبة غنية ولكن غير مسببة للرؤوس السوداء (Non-comedogenic).', en: 'Rich formula but non-comedogenic.' }
    }
});
// ==========================================
// 💊 البلوك الثالث (Block 3): Bioderma - Atoderm Family
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['skin_barrier_therapy'] = {
    title: { ar: 'براءة اختراع Skin Barrier Therapy 🛡️', en: 'Skin Barrier Therapy™ Patent 🛡️' },
    desc: { 
        ar: 'تقنية حصرية تحد بيولوجياً من التصاق وتكاثر بكتيريا (المكورات العنقودية الذهبية - Staph aureus) على سطح الجلد، والتي تعتبر المسبب الرئيسي لتفاقم الإكزيما والتهاب البشرة شديدة الجفاف.', 
        en: 'An exclusive technology that biologically limits the adhesion and proliferation of Staphylococcus aureus, the primary bacteria responsible for aggravating eczema and severely dry skin.' 
    }
};

glossaryDict['lipigenium'] = {
    title: { ar: 'مركب ليبيجينيوم (Lipigenium) 💧', en: 'Lipigenium™ Complex 💧' },
    desc: { 
        ar: 'مركب حيوي يحاكي تركيبة دهون البشرة (يحتوي على سيراميدات وكوليسترول وأحماض دهنية حرة). يعمل على إعادة بناء حاجز الجلد التالف بشكل طبيعي ودائم.', 
        en: 'A biomimetic lipid complex (containing ceramides, cholesterol, and free fatty acids). It naturally and durably reconstructs the damaged skin barrier.' 
    }
};

glossaryDict['skin_relief_tech'] = {
    title: { ar: 'تقنية سكين ريليف (Skin Relief) ⏱️', en: 'Skin Relief Technology™ ⏱️' },
    desc: { 
        ar: 'تقنية متطورة تجمع بين مستخلصات نباتية (Ambora & Green Tea) لغلق مسارات الحكة العصبية، مما يوقف الرغبة في الهرش خلال 60 ثانية ولمدة تصل إلى 6 ساعات.', 
        en: 'An advanced technology combining plant extracts (Ambora & Green Tea) to block neurological itch pathways, stopping the urge to scratch within 60 seconds for up to 6 hours.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [9] Atoderm Intensive Baume
deepProductsList.push({
    id: 'bio_atoderm_intensive_baume', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم إنتينسيف بوم (بلسم الإكزيما)', en: 'Atoderm Intensive Baume' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن ليناسب الجلد التأتبي', en: 'Balanced for atopic skin' },
        mechanism: { 
            ar: 'يوقف الحكة فوراً بفضل جزيء (PEA)، ويعيد بناء حاجز البشرة بمركب <span class="glossary-term" onclick="openGlossary(\'lipigenium\')">Lipigenium™</span>، بينما تمنع <span class="glossary-term" onclick="openGlossary(\'skin_barrier_therapy\')">Skin Barrier Therapy™</span> الالتصاق البكتيري المسبب للانتكاسات.', 
            en: 'Instantly stops itching with PEA, rebuilds the skin barrier using <span class="glossary-term" onclick="openGlossary(\'lipigenium\')">Lipigenium™</span>, while <span class="glossary-term" onclick="openGlossary(\'skin_barrier_therapy\')">Skin Barrier Therapy™</span> prevents bacterial adhesion causing relapses.' 
        },
        patient_benefit: { 
            ar: 'يسكن الحكة الشديدة، يعالج الإكزيما التأتبية، يقلل من الحاجة لاستخدام الكورتيزون الموضعي، ويطيل الفترات بين نوبات التهيج.', 
            en: 'Soothes severe itching, treats atopic eczema, reduces the need for topical corticosteroids, and prolongs the periods between flare-ups.' 
        },
        active_ingredients: [
            { name: 'PEA (Palmitoylethanolamide)', concentration: { ar: 'مضاد حكة فعال', en: 'Active Anti-pruritic' }, role: { ar: 'تسكين الحكة وتقليل الرغبة في الهرش.', en: 'Soothes itching and reduces the urge to scratch.' } },
            { name: 'Lipigenium™ Complex', concentration: { ar: 'ترميم مكثف', en: 'Intense Repair' }, role: { ar: 'إعادة بناء طبقة الدهون الواقية للجلد.', en: 'Rebuilds the skin\'s protective lipid layer.' } },
            { name: 'Skin Barrier Therapy™', concentration: { ar: 'براءة اختراع', en: 'Patented Complex' }, role: { ar: 'يمنع التصاق بكتيريا المكورات العنقودية.', en: 'Prevents Staphylococcus adhesion.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً.', en: 'Once to twice daily.' },
        step_in_routine: { ar: 'الخطوة الأساسية لترطيب الوجه أو الجسم.', en: 'Main step for face or body hydration.' },
        application: { ar: 'يُدلك بلطف على بشرة نظيفة (يُفضل بعد الاستحمام مباشرة لحبس الرطوبة).', en: 'Massage gently onto clean skin (preferably right after a shower to lock in moisture).' },
        layering: { 
            do_not_mix_with: { ar: ['الاستحمام بماء شديد السخونة (يزيد من جفاف الجلد).'], en: ['Very hot showers (increases skin dryness).'] }, 
            best_mixed_with: { ar: ['أتوديرم زيت الاستحمام (Atoderm Shower Oil).'], en: ['Atoderm Shower Oil.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الإكزيما التأتبية، الجفاف الشديد جداً، الحكة المستمرة، وتقشر الجلد.', en: 'Atopic eczema, extremely dry skin, persistent itching, and skin flaking.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن تماماً لحديثي الولادة (باستثناء الخدج). خالي من العطور.', en: 'Completely safe for newborns (except premature infants). Fragrance-free.' }
    }
});

// [10] Atoderm Shower Oil
deepProductsList.push({
    id: 'bio_atoderm_shower_oil', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم زيت الاستحمام', en: 'Atoderm Huile de Douche (Shower Oil)' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (يحترم الغلاف الحمضي)', en: '5.5 (Respects the acid mantle)' },
        mechanism: { 
            ar: 'ينظف بلطف فائق ويغذي الجلد بفضل الدهون الحيوية النباتية التي تخفف الإحساس بالشد، مدعوماً بـ <span class="glossary-term" onclick="openGlossary(\'skin_barrier_therapy\')">Skin Barrier Therapy™</span> لمنع التهيج.', 
            en: 'Ultra-gentle cleansing and nourishment via plant biolipids that relieve tightness, supported by <span class="glossary-term" onclick="openGlossary(\'skin_barrier_therapy\')">Skin Barrier Therapy™</span> to prevent irritation.' 
        },
        patient_benefit: { 
            ar: 'يوفر ترطيباً يدوم لـ 24 ساعة بمجرد الخروج من الاستحمام، يمنع جفاف الماء العسر، ويترك طبقة حريرية واقية دون ملمس دهني.', 
            en: 'Provides 24-hour hydration right out of the shower, prevents hard water dryness, and leaves a silky protective film without a greasy feel.' 
        },
        active_ingredients: [
            { name: 'Vegetal Biolipids (Coconut/Sunflower)', concentration: { ar: '33%', en: '33%' }, role: { ar: 'تخفيف الإحساس بالشد فوراً وزيادة تحمل الجلد.', en: 'Instantly relieves tightness and increases skin tolerance.' } },
            { name: 'Niacinamide (Vitamin B3)', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تحفيز بناء السيراميد في الجلد.', en: 'Stimulates ceramide synthesis in the skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (أثناء الاستحمام).', en: 'Daily (during shower).' },
        step_in_routine: { ar: 'خطوة التنظيف (بديل للصابون).', en: 'Cleansing step (alternative to soap).' },
        application: { ar: 'يُرغى على بشرة مبللة، ثم يُشطف ويُجفف الجلد بالتربيت الخفيف دون فرك.', en: 'Lather on wet skin, rinse, and pat dry gently without rubbing.' },
        layering: { 
            do_not_mix_with: { ar: ['اللوف الخشن لتجنب تجريح الجلد الحساس.'], en: ['Harsh loofahs to avoid scratching sensitive skin.'] }, 
            best_mixed_with: { ar: ['بلسم أتوديرم إنتينسيف بوم.'], en: ['Atoderm Intensive Baume.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الجافة جداً، الإكزيما، الحساسية من صابون الاستحمام، وحكة الشتاء.', en: 'Very dry skin, eczema, shower soap sensitivity, and winter itch.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يسبب انزلاق في حوض الاستحمام. يمكن استخدامه للوجه والجسم.', en: 'Does not make the bathtub slippery. Can be used for face and body.' }
    }
});

// [11] Atoderm Cream Ultra
deepProductsList.push({
    id: 'bio_atoderm_cream', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم كريم ألترا (ترطيب يومي)', en: 'Atoderm Cream Ultra' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعمل مركب (Skin Protect Complex) على تحفيز إنتاج حمض الهيالورونيك الطبيعي في الجلد، مع تعويض الليبيدات (أوميجا 3، 6، 9) لتقوية الحاجز الواقي.', 
            en: 'Skin Protect Complex stimulates natural Hyaluronic Acid production while replenishing lipids (Omegas 3, 6, 9) to strengthen the protective barrier.' 
        },
        patient_benefit: { 
            ar: 'ترطيب فوري وعميق يدوم 24 ساعة، يجعل البشرة ناعمة ومرنة من أول استخدام. مثالي للعناية اليومية لجميع أفراد العائلة.', 
            en: 'Instant, deep 24-hour hydration, making skin soft and supple from the first use. Ideal for daily family care.' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: { ar: 'معزز حاجز', en: 'Barrier Booster' }, role: { ar: 'تحفيز بناء السيراميدات الطبيعية.', en: 'Stimulates natural ceramide synthesis.' } },
            { name: 'Omegas 3, 6, 9', concentration: { ar: 'مغذي', en: 'Nourishing' }, role: { ar: 'تغذية عميقة ومنع تبخر الماء من الجلد.', en: 'Deep nourishment and prevents trans-epidermal water loss.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'ترطيب الجسم والوجه.', en: 'Body and face hydration.' },
        application: { ar: 'يوضع على بشرة نظيفة وجافة.', en: 'Apply to clean, dry skin.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['غسول أتوديرم جل دوش (Atoderm Gel Douche).'], en: ['Atoderm Gel Douche.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة العادية إلى الجافة، العناية اليومية بعد الاستحمام.', en: 'Normal to dry skin, daily post-shower care.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'سريع الامتصاص، لا يترك أثراً دهنياً، ومناسب لجميع الأعمار.', en: 'Fast-absorbing, non-greasy, and suitable for all ages.' }
    }
});

// [12] Atoderm SOS Spray
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
            { name: 'Skin Relief Technology™', concentration: { ar: 'براءة اختراع', en: 'Patented Complex' }, role: { ar: 'إيقاف مسارات الحكة العصبية.', en: 'Blocks neurological itch pathways.' } },
            { name: 'Enoxolone', concentration: { ar: 'مهدئ سريع', en: 'Fast Soothing' }, role: { ar: 'مضاد للالتهاب وتقليل الاحمرار الموضعي.', en: 'Anti-inflammatory and reduces local redness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (كلما شعرت بالحكة).', en: 'As needed (whenever itching occurs).' },
        step_in_routine: { ar: 'علاج طوارئ موضعي.', en: 'Topical emergency treatment.' },
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
// ==========================================
// 💊 البلوك الرابع (Block 4): Bioderma - Photoderm Family
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['sun_active_defense'] = {
    title: { ar: 'تقنية Sun Active Defense ☀️', en: 'Sun Active Defense™ Technology ☀️' },
    desc: { 
        ar: 'حماية معززة ضد أشعة UVA بنسبة 74%، وتنشيط للدفاعات المناعية الطبيعية للجلد بنسبة 26%، لحماية الحمض النووي الخلوي (DNA) من التلف والإجهاد التأكسدي.', 
        en: 'Enhanced UVA protection by 74%, and activation of the skin\'s natural immune defenses by 26%, to protect cellular DNA from damage and oxidative stress.' 
    }
};

glossaryDict['iron_oxides_blue_light'] = {
    title: { ar: 'أكاسيد الحديد (Iron Oxides) 🛡️', en: 'Iron Oxides 🛡️' },
    desc: { 
        ar: 'مركبات معدنية ملونة تعتبر، حسب أحدث دراسات الـ AAD، الدرع الوحيد الفعال لمنع اختراق "الضوء المرئي عالي الطاقة" (Blue Light) الذي يُعد المحفز الأقوى لظهور الكلف (Melasma).', 
        en: 'Tinted mineral compounds that, according to recent AAD studies, are the only effective shield against High-Energy Visible (HEV) Blue Light, the strongest trigger for Melasma.' 
    }
};

glossaryDict['glabridin'] = {
    title: { ar: 'جلابريدين (Glabridin) 🌱', en: 'Glabridin 🌱' },
    desc: { 
        ar: 'المكون النشط الرئيسي في مستخلص جذور العرقسوس، يعمل كمثبط قوي لإنزيم التيروزيناز (Tyrosinase Inhibitor) لإيقاف إنتاج الميلانين بأمان تام.', 
        en: 'The main active component in licorice root extract, acting as a potent Tyrosinase Inhibitor to safely halt melanin production.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [13] Photoderm Aquafluide SPF 50+
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
            { name: 'UVA/UVB Advanced Filters', concentration: { ar: 'SPF 50+ / PA++++', en: 'SPF 50+ / PA++++' }, role: { ar: 'حماية خارجية من حروق الشمس والشيخوخة الضوئية.', en: 'External protection against sunburn and photoaging.' } },
            { name: 'Mattifying Powders', concentration: { ar: '3 مساحيق', en: '3 Powders' }, role: { ar: 'امتصاص الزهم الزائد ومنع اللمعان.', en: 'Absorbs excess sebum and prevents shine.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (يُجدد كل ساعتين في الشمس المباشرة).', en: 'Daily (Reapply every 2 hours in direct sun).' },
        step_in_routine: { ar: 'الخطوة الأخيرة في روتين الصباح.', en: 'Last step in the AM routine.' },
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

// [14] Photoderm MAX Fluid SPF 100
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
            { name: 'Maximum UVA/UVB Filters', concentration: { ar: 'SPF 100', en: 'SPF 100' }, role: { ar: 'درع حماية مطلق ضد أشعة الشمس القاسية.', en: 'Absolute shield against extreme sun exposure.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (عند التعرض الشديد للشمس).', en: 'Daily (during intense sun exposure).' },
        step_in_routine: { ar: 'الخطوة الصباحية الأخيرة.', en: 'Last AM step.' },
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

// [15] Photoderm M Gel-Cream SPF 50+ (Melasma Care)
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
            { name: 'Iron Oxides', concentration: { ar: 'تركيز عالي ملون', en: 'High Tinted Concentration' }, role: { ar: 'صد الضوء الأزرق المرئي.', en: 'Blocks High-Energy Visible Blue Light.' } },
            { name: 'Glabridin', concentration: { ar: 'مثبط نشط', en: 'Active Inhibitor' }, role: { ar: 'تثبيط إنزيم التيروزيناز لتقليل البقع.', en: 'Tyrosinase inhibition to reduce dark spots.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (ضروري جداً).', en: 'Daily (Crucial).' },
        step_in_routine: { ar: 'الخطوة العلاجية/الوقائية الصباحية.', en: 'AM treatment/preventive step.' },
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

// [16] Photoderm Spot-Age SPF 50+
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
            { name: 'Vitamin C & E', concentration: { ar: 'مستقر', en: 'Stabilized' }, role: { ar: 'مضادات أكسدة قوية لتفتيح البشرة وحمايتها.', en: 'Strong antioxidants for brightening and protection.' } },
            { name: 'Centella Asiatica', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تجديد الخلايا وتحفيز الكولاجين.', en: 'Cell regeneration and collagen stimulation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً.', en: 'Daily.' },
        step_in_routine: { ar: 'واقي شمس علاجي.', en: 'Therapeutic sunscreen.' },
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
// ==========================================
// 💊 البلوك الخامس (Block 5): Bioderma - Hydrabio & Pigmentbio
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['aquagenium'] = {
    title: { ar: 'براءة اختراع Aquagenium 🌊', en: 'Aquagenium™ Patent 🌊' },
    desc: { 
        ar: 'تقنية تعتمد على مستخلص بذور التفاح والنياسيناميد. تعمل بيولوجياً على تحفيز إنتاج "الأكوابورينات" (Aquaporins) - وهي قنوات نقل الماء داخل الخلايا - مما يعيد للجلد قدرته الطبيعية على الترطيب العميق.', 
        en: 'A technology based on Apple seed extract and Niacinamide. It biologically stimulates the production of Aquaporins (cellular water channels), restoring the skin\'s natural capacity for deep hydration.' 
    }
};

glossaryDict['lumireveal'] = {
    title: { ar: 'تقنية LumiReveal ✨', en: 'LumiReveal™ Technology ✨' },
    desc: { 
        ar: 'مركب مستوحى من علاجات أطباء الجلد (Kligman’s Trio). يدمج مواد فعالة (Azelaic Acid + Andrographolide + Epidermactiv) لاستهداف مراحل تكون الميلانين الثلاث: تقليل الإنتاج، منع الانتقال، وتسريع إزالة الخلايا المصبوغة.', 
        en: 'A complex inspired by dermatological treatments (Kligman’s Trio). It combines actives (Azelaic Acid + Andrographolide + Epidermactiv) to target 3 stages of melanogenesis: reducing production, preventing transfer, and accelerating the elimination of pigmented cells.' 
    }
};

glossaryDict['vitamin_c_fresh'] = {
    title: { ar: 'فيتامين C الطازج 🍋', en: 'Fresh Vitamin C 🍋' },
    desc: { 
        ar: 'حمض الأسكوربيك النقي بنسبة 2%، يتم حفظه بمعزل في كبسولة خاصة لحمايته من الأكسدة (Oxidation). لا يتم تحريره وتفعيله إلا عند الضغط على العبوة في أول استخدام لضمان أعلى فعالية سريرية.', 
        en: '2% Pure Ascorbic Acid, isolated in a special canister to protect it from oxidation. It is only released and activated upon pressing the cap during the first use, ensuring maximum clinical efficacy.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [17] Hydrabio H2O Micellar Water
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
            { name: 'PEG-6 Caprylic/Capric Glycerides', concentration: { ar: 'ميسيلار فعال', en: 'Active Micelles' }, role: { ar: 'تنظيف عميق بدون تجريد دهون الجلد.', en: 'Deep cleansing without stripping skin lipids.' } },
            { name: 'Aquagenium™ Complex', concentration: { ar: 'براءة اختراع', en: 'Patented Complex' }, role: { ar: 'تنشيط الترطيب الذاتي.', en: 'Activates self-hydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الجاف).', en: 'Step 1 (Dry Cleansing).' },
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

// [18] Hydrabio Serum
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
            { name: 'Hyaluronic Acid', concentration: { ar: 'مركز', en: 'Concentrated' }, role: { ar: 'جذب وحبس الماء داخل طبقات الجلد السطحية.', en: 'Attracts and locks water within superficial skin layers.' } },
            { name: 'Xylitol & Glycerin', concentration: { ar: 'مركبات مرطبة', en: 'Hydrating Compounds' }, role: { ar: 'ترطيب مكثف وطويل الأمد.', en: 'Intense and long-lasting hydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'سيروم ما قبل الترطيب.', en: 'Pre-moisturizer serum.' },
        application: { ar: 'يوضع على الوجه والرقبة بعد التطهير وقبل الكريم.', en: 'Apply to face and neck after cleansing and before cream.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['أساس (Primer) ممتاز للمكياج.', 'الريتينول (لتقليل جفافه).'], en: ['Excellent makeup primer.', 'Retinol (to buffer dryness).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الجفاف (Dehydrated)، الخطوط الرفيعة، والبهتان الناتج عن الضغط البيئي (تكييف الهواء، التلوث).', en: 'Severely dehydrated skin, fine lines, and dullness from environmental stress (AC, pollution).' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام جل ذوباني (Melting gel) منعش جداً.', en: 'Very refreshing melting gel texture.' }
    }
});

// [19] Pigmentbio C-Concentrate
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
            { name: 'Fresh Ascorbic Acid (Vit C)', concentration: { ar: '2%', en: '2%' }, role: { ar: 'مضاد أكسدة وتفتيح وتثبيط للميلانين.', en: 'Antioxidant, brightening, and melanin inhibition.' } },
            { name: 'Glycolic & Salicylic Acid (AHA/BHA)', concentration: { ar: '8%', en: '8%' }, role: { ar: 'تقشير الخلايا السطحية المحملة بالتصبغ.', en: 'Exfoliates superficial pigment-loaded cells.' } },
            { name: 'Azelaic Acid Derivative', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'مضاد لالتهاب التصبغات.', en: 'Anti-inflammatory for pigmentation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً (كورس علاجي لمدة شهر إلى 3 أشهر).', en: 'Once daily PM (1 to 3 months treatment course).' },
        step_in_routine: { ar: 'خطوة العلاج الليلي المكثف.', en: 'Intensive PM treatment step.' },
        application: { ar: 'تُضغط الكبسولة لتفعيل الفيتامين، تُرج جيداً، ثم توضع 5 قطرات على الوجه والرقبة.', en: 'Press canister to activate Vit C, shake well, apply 5 drops to face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول أو المقشرات الأخرى في نفس الليلة لتجنب تدمير حاجز الجلد.'], en: ['Retinol or other exfoliants on the same night to avoid barrier damage.'] }, 
            best_mixed_with: { ar: ['واقي شمس (إلزامي في الصباح).'], en: ['Sunscreen (Mandatory in the AM).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الكلف، النمش، التصبغات الناتجة عن الالتهاب (PIH)، والبقع العمرية.', en: 'Melasma, freckles, Post-Inflammatory Hyperpigmentation (PIH), and age spots.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'قد يسبب وخزاً طفيفاً طبيعياً في الأيام الأولى. غير مخصص للحوامل لوجود تركيز عالٍ من حمض الساليسيليك مع مواد نشطة أخرى.', en: 'May cause normal mild tingling initially. Not recommended for pregnancy due to high BHA and active combinations.' }
    }
});

// [20] Pigmentbio Sensitive Areas
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
            { name: 'Andrographis Paniculata & Glabridin', concentration: { ar: 'مركبات نشطة', en: 'Active Compounds' }, role: { ar: 'تهدئة الالتهاب الميكانيكي وتثبيط التصبغ.', en: 'Soothes mechanical inflammation and inhibits pigmentation.' } },
            { name: 'Glycerin & Shea Butter', concentration: { ar: 'غني', en: 'Rich' }, role: { ar: 'ترطيب عميق وتقليل الاحتكاك.', en: 'Deep hydration and friction reduction.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً.', en: 'Once to twice daily.' },
        step_in_routine: { ar: 'كريم علاجي للمناطق المستهدفة.', en: 'Treatment cream for targeted areas.' },
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
// ==========================================
// 💊 البلوك السادس (Block 6): Bioderma - Cicabio & Node
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['antalgicine'] = {
    title: { ar: 'براءة اختراع Antalgicine ⚡', en: 'Antalgicine™ Patent ⚡' },
    desc: { 
        ar: 'تقنية حيوية مستوحاة من مسكنات الألم الطبيعية في الجسم (Endorphins). تعمل على تنظيم التفاعلات العصبية الموضعية لتخفيف الإحساس بالألم، الوخز، والرغبة في الهرش فوراً.', 
        en: 'A biological technology inspired by the body\'s natural painkillers (Endorphins). It regulates local neurological reactivity to instantly relieve pain, stinging, and the urge to scratch.' 
    }
};

glossaryDict['arnica_montana'] = {
    title: { ar: 'خلاصة زهرة العطاس (Arnica Montana) 🌼', en: 'Arnica Montana Extract 🌼' },
    desc: { 
        ar: 'مستخلص نباتي ذو فعالية سريرية مثبتة في تسريع امتصاص التجمعات الدموية تحت الجلد وتقليل التورم (Edema)، ويُستخدم طبياً لعلاج الكدمات والرضوض.', 
        en: 'A plant extract with proven clinical efficacy in accelerating the absorption of subcutaneous blood pooling and reducing swelling (Edema), medically used for bruises and contusions.' 
    }
};

glossaryDict['dsactive'] = {
    title: { ar: 'براءة اختراع DSactive 🦠', en: 'DSactive™ Patent 🦠' },
    desc: { 
        ar: 'مركب ذو فعالية مزدوجة: يحد بيولوجياً من تكاثر خميرة (Malassezia) المسؤولة عن القشرة، ويقلل من إفراز الزهم الذي تتغذى عليه هذه الخميرة لمنع الانتكاسات.', 
        en: 'A dual-action complex: biologically limits the proliferation of Malassezia yeast (responsible for dandruff) and reduces sebum secretion, which the yeast feeds on, to prevent relapses.' 
    }
};

glossaryDict['non_detergent'] = {
    title: { ar: 'مبدأ عدم التنظيف القاسي (N.O.D.E.) 🧴', en: 'N.O.D.E. Principle 🧴' },
    desc: { 
        ar: 'أول ابتكار من بيوديرما (عام 1977). يعتمد على قاعدة تنظيف خالية تماماً من المنظفات القاسية (Detergents) لتنظيف الشعر مع الحفاظ الكامل على الغلاف الهيدروليبيدي لفروة الرأس.', 
        en: 'Bioderma\'s first innovation (1977). Based on a completely Non-Detergent cleansing base to clean hair while fully preserving the scalp\'s hydrolipidic film.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [21] Cicabio Cream
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
            { name: 'Antalgicine™', concentration: { ar: 'براءة اختراع', en: 'Patented Complex' }, role: { ar: 'تسكين الألم وتقليل الحكة السطحية.', en: 'Pain relief and reduction of superficial itching.' } },
            { name: 'Centella Asiatica + Hyaluronic Acid', concentration: { ar: 'مركبات نشطة', en: 'Active Compounds' }, role: { ar: 'ترميم وتكوين طبقة عازلة تتنفس (Breathable Film).', en: 'Repair and formation of a breathable insulating film.' } },
            { name: 'Zinc & Copper Sulfates', concentration: { ar: 'عوامل منقية', en: 'Purifying Agents' }, role: { ar: 'منع التلوث البكتيري للجرح.', en: 'Prevention of bacterial infection in the wound.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً حتى التئام الجلد تماماً.', en: 'Twice daily until skin is fully repaired.' },
        step_in_routine: { ar: 'عناية موضعية علاجية.', en: 'Targeted therapeutic care.' },
        application: { ar: 'توضع طبقة سميكة على المنطقة المتضررة بعد تنظيفها وتجفيفها.', en: 'Apply a thick layer to the affected area after cleansing and drying.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات أو مواد نشطة قاسية على نفس المنطقة.'], en: ['Exfoliants or harsh actives on the same area.'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'الخدوش، الحروق السطحية، بعد الإجراءات الجلدية (الليزر، التقشير)، ولتهيج ما حول الفم.', en: 'Scratches, superficial burns, post-dermatological procedures (laser, peels), and peri-oral irritation.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يُستخدم على الجروح النازفة بشدة. لونه المائل للبني طبيعي ناتج عن المواد الفعالة.', en: 'Do not use on heavily bleeding wounds. Its brownish tint is natural, derived from the active ingredients.' }
    }
});

// [22] Cicabio Arnica+
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
            { name: 'Arnica Montana Extract', concentration: { ar: 'مستخلص نقي', en: 'Pure Extract' }, role: { ar: 'تسريع امتصاص الكدمات وتقليل التورم.', en: 'Accelerates bruise absorption and reduces swelling.' } },
            { name: 'Apigenin (Grapefruit Extract)', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تقليل نفاذية الأوعية الدموية لمنع تسرب الدم.', en: 'Decreases vascular permeability to prevent blood leakage.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً حتى اختفاء الكدمة.', en: 'Once to twice daily until the bruise disappears.' },
        step_in_routine: { ar: 'علاج موضعي مركز.', en: 'Intensive targeted treatment.' },
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

// [23] Node DS+ Anti-Dandruff Shampoo
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
            { name: 'DSactive™ Patent', concentration: { ar: 'براءة اختراع', en: 'Patented Complex' }, role: { ar: 'تثبيط فطر الملاسيزيا وتنظيم الزهم.', en: 'Inhibiting Malassezia fungus and regulating sebum.' } },
            { name: 'Salicylic Acid (BHA)', concentration: { ar: 'مقشر قوي', en: 'Strong Keratolytic' }, role: { ar: 'إزالة وتقشير طبقات القشرة السميكة.', en: 'Removing and exfoliating thick dandruff scales.' } },
            { name: 'Ichthyol (Sodium Shale Oil Sulfonate)', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'مضاد للالتهاب وتقليل الرغبة في الحك.', en: 'Anti-inflammatory and reduces the urge to scratch.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'كورس مكثف: 3 مرات أسبوعياً (لـ 3 أسابيع). وقاية: 1-2 مرة أسبوعياً.', en: 'Intensive course: 3x/week (for 3 weeks). Maintenance: 1-2x/week.' },
        step_in_routine: { ar: 'علاج فروة الرأس.', en: 'Scalp treatment.' },
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

// [24] Node Fluid Shampoo
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
            { name: 'Gentle Cleansing Base (Caprylyl/Capryl Glucoside)', concentration: { ar: 'لطيف جداً', en: 'Ultra-mild' }, role: { ar: 'تنظيف فعال وآمن لدرجة دهون الفروة الطبيعية.', en: 'Effective and safe cleansing respecting natural scalp lipids.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (أو حسب الرغبة).', en: 'Daily (or as desired).' },
        step_in_routine: { ar: 'التنظيف الروتيني للشعر.', en: 'Routine hair cleansing.' },
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
// ==========================================
// 💊 البلوك السابع (Block 7): Bioderma - ABCDerm Family
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['abcderm_charter'] = {
    title: { ar: 'ميثاق ABCDerm الطبي 👶', en: 'ABCDerm Dermatological Commitment 👶' },
    desc: { 
        ar: 'تعهد طبي صارم من بيوديرما بتقديم منتجات عالية الأمان والتحمل للأطفال. خالية من البارابين، الألوان، الزيوت العطرية، ومصممة بجرعات دقيقة لتناسب بشرة الرضع الرقيقة.', 
        en: 'Bioderma\'s strict medical commitment to high safety and tolerance for babies. Free from parabens, colorants, and essential oils, formulated with precise dosages for delicate infant skin.' 
    }
};

glossaryDict['amylpriv_patent'] = {
    title: { ar: 'براءة اختراع Amylpriv 💧', en: 'Amylpriv™ Patent 💧' },
    desc: { 
        ar: 'تقنية بيولوجية فريدة تعمل على تحييد إنزيم (الأميلاز - Amylase) الموجود في لعاب الطفل، والذي يُعد السبب الرئيسي لالتهاب وتسلخ الجلد حول الفم أثناء فترة التسنين.', 
        en: 'A unique biological technology that neutralizes the Amylase enzyme found in baby saliva, which is the primary cause of peri-oral skin irritation and rashes during teething.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [25] ABCDerm H2O Micellar Water
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
            { name: 'Mild Micelles', concentration: { ar: 'لطيف جداً', en: 'Ultra-mild' }, role: { ar: 'التقاط الأوساخ بلطف.', en: 'Gently captures dirt.' } },
            { name: 'Allantoin', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تهدئة بشرة الطفل وتنعيمها.', en: 'Soothes and softens baby skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (مع كل تغيير حفاض أو تنظيف).', en: 'As needed (with every diaper change or cleansing).' },
        step_in_routine: { ar: 'التنظيف اللطيف السريع.', en: 'Gentle quick cleansing.' },
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

// [26] ABCDerm Moussant
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
            { name: 'Gentle Surfactants', concentration: { ar: 'آمن', en: 'Safe' }, role: { ar: 'تنظيف رقيق للشعر والجسم.', en: 'Mild cleansing for hair and body.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً (أو حسب روتين استحمام الطفل).', en: 'Once daily (or per baby bath routine).' },
        step_in_routine: { ar: 'وقت الاستحمام (شعر وجسم).', en: 'Bath time (hair & body).' },
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

// [27] ABCDerm Péri-oral
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
            { name: 'Amylpriv™ Patent', concentration: { ar: 'براءة اختراع', en: 'Patented Complex' }, role: { ar: 'إبطال مفعول اللعاب المهيج.', en: 'Neutralizes irritating saliva.' } },
            { name: 'Copper & Zinc', concentration: { ar: 'منقي', en: 'Purifying' }, role: { ar: 'تطهير المنطقة ومنع التلوث.', en: 'Purifies area and prevents infection.' } },
            { name: 'Enoxolone & Panthenol', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'تهدئة الاحمرار وترميم الجلد.', en: 'Soothes redness and repairs skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '2 إلى 3 مرات يومياً.', en: '2 to 3 times daily.' },
        step_in_routine: { ar: 'علاج موضعي.', en: 'Targeted treatment.' },
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

// [28] ABCDerm Cold-Cream
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
            { name: 'Beeswax (Cera Alba)', concentration: { ar: 'عازل', en: 'Occlusive' }, role: { ar: 'تكوين درع حماية ضد البرد.', en: 'Forms a protective shield against cold.' } },
            { name: 'Sweet Almond Oil', concentration: { ar: 'مغذي', en: 'Nourishing' }, role: { ar: 'تنعيم الجلد وتوفير الأحماض الدهنية.', en: 'Softens skin and provides fatty acids.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً (وخاصة قبل الخروج في البرد).', en: 'Once or twice daily (especially before going out in the cold).' },
        step_in_routine: { ar: 'الترطيب المكثف والحماية.', en: 'Intensive hydration and protection.' },
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
// ==========================================
// 💊 البلوك الثامن (Block 8): La Roche-Posay - Effaclar Family
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['phylobioma'] = {
    title: { ar: 'فيلوبيوم (Phylobioma) 🔬', en: 'Phylobioma™ Active 🔬' },
    desc: { 
        ar: 'مادة فعالة مبتكرة من أبحاث الميكروبيوم، تستهدف بشكل حصري سلالة (Phylotype IA1) من بكتيريا C.acnes، وهي السلالة الأكثر ارتباطاً بالالتهاب وحب الشباب، لتقليل الإفرازات الدهنية وتهدئة الجلد بيولوجياً.', 
        en: 'An innovative active from microbiome research that specifically targets the Phylotype IA1 of C. acnes bacteria (the strain most linked to inflammation and acne), reducing sebum and soothing the skin biologically.' 
    }
};

glossaryDict['procerad'] = {
    title: { ar: 'بروسيراد (Procerad) 🛡️', en: 'Procerad™ 🛡️' },
    desc: { 
        ar: 'سيراميد مبتكر وحصري يعمل كمضاد للالتهاب (Anti-inflammatory Ceramide)، يمنع تكون البقع الحمراء والبنية (PIH) التي تظهر بعد شفاء حب الشباب.', 
        en: 'An exclusive, patented anti-inflammatory ceramide that prevents the formation of red and brown marks (Post-Inflammatory Hyperpigmentation) left after acne heals.' 
    }
};

glossaryDict['zinc_pca'] = {
    title: { ar: 'زنك بي سي إيه (Zinc PCA) 🧪', en: 'Zinc PCA 🧪' },
    desc: { 
        ar: 'ملح الزنك لحمض البيروليدون كربوكسيليك. يجمع بين الخصائص القوية المنظمة للدهون والمضادة للبكتيريا (الزنك) مع خصائص الترطيب الفسيولوجي (PCA) لمنع جفاف البشرة.', 
        en: 'The zinc salt of pyrrolidone carboxylic acid. It combines the strong sebo-regulating and antibacterial properties of Zinc with the physiological hydration of PCA to prevent skin drying.' 
    }
};

// --- 2. تأسيس العلامة التجارية (Brand Initialization) ---

brandsList.push({
    id: 'laroche', name: 'La Roche-Posay',
    families: [
        { id: 'effaclar', name: { ar: 'إيفاكلار (للبشرة الدهنية وحب الشباب)', en: 'Effaclar (Oily & Acne-Prone Skin)' } },
        { id: 'lipikar', name: { ar: 'ليبيكار (للجفاف الشديد والإكزيما)', en: 'Lipikar (Severe Dryness & Atopy)' } },
        { id: 'anthelios', name: { ar: 'أنثيليوس (الحماية من الشمس)', en: 'Anthelios (Sun Protection)' } },
        { id: 'toleriane', name: { ar: 'توليان (للبشرة شديدة الحساسية)', en: 'Toleriane (Ultra-Sensitive Skin)' } },
        { id: 'cicaplast', name: { ar: 'سيكابلاست (الترميم والعناية بالجروح)', en: 'Cicaplast (Barrier Repair & SOS)' } },
        { id: 'mela_b3', name: { ar: 'ميلا بي 3 / بيجمنتكلار (للتصبغات)', en: 'Mela B3 / Pigmentclar (Hyperpigmentation)' } },
        { id: 'serums', name: { ar: 'السيرومات العلاجية (مكافحة الشيخوخة)', en: 'Dermatological Serums (Anti-Aging)' } },
        { id: 'hydraphase', name: { ar: 'هيدرافاز (ترطيب بحمض الهيالورونيك)', en: 'Hydraphase (Hyaluronic Hydration)' } }
    ]
});

// --- 3. المنتجات السريرية (Clinical Products) ---

// [29] Effaclar Duo+M
deepProductsList.push({
    id: 'lrp_effaclar_duo_m', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار ديو+M (علاج شامل للحبوب)', en: 'Effaclar Duo+M Anti-Blemish Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: '5.5 (متوازن)', en: '5.5 (Balanced)' },
        mechanism: { 
            ar: 'يستهدف الميكروبيوم بشكل دقيق عبر <span class="glossary-term" onclick="openGlossary(\'phylobioma\')">الفيلوبيوم</span> لتثبيط بكتيريا حب الشباب، بينما يمنع <span class="glossary-term" onclick="openGlossary(\'procerad\')">البروسيراد</span> التصبغات، ويقوم حمض LHA بتقشير كيراتيني دقيق للمسام.', 
            en: 'Precisely targets the microbiome via <span class="glossary-term" onclick="openGlossary(\'phylobioma\')">Phylobioma</span> to inhibit acne bacteria, while <span class="glossary-term" onclick="openGlossary(\'procerad\')">Procerad</span> prevents pigmentation, and LHA provides micro-keratolytic pore exfoliation.' 
        },
        patient_benefit: { 
            ar: 'علاج سريري يظهر فعالية مرئية خلال 8 ساعات. يعالج الحبوب النشطة، الرؤوس السوداء، ويمنع ظهور علامات التصبغ الحمراء أو البنية.', 
            en: 'A clinical treatment showing visible efficacy within 8 hours. Clears active breakouts, blackheads, and prevents the appearance of red or brown post-acne marks.' 
        },
        active_ingredients: [
            { name: 'Phylobioma + Procerad', concentration: { ar: 'مكونات حصرية', en: 'Exclusive Actives' }, role: { ar: 'مضاد بكتيري دقيق ومنع لتصبغات ما بعد الالتهاب.', en: 'Targeted antibacterial and prevention of PIH marks.' } },
            { name: 'Niacinamide', concentration: { ar: 'عالي', en: 'High' }, role: { ar: 'تخفيف الاحمرار والالتهاب فوراً.', en: 'Reduces redness and inflammation instantly.' } },
            { name: 'LHA & Salicylic Acid', concentration: { ar: 'مقشر دقيق', en: 'Micro-exfoliant' }, role: { ar: 'تنظيف المسام المسدودة ببطء دون تهيج.', en: 'Unclogs blocked pores slowly without irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'الخطوة العلاجية (بعد الغسول وقبل واقي الشمس).', en: 'Treatment step (post-cleanse, pre-SPF).' },
        application: { ar: 'يوزع على كامل الوجه، مع تجنب محيط العينين. ممتاز كقاعدة للمكياج.', en: 'Apply to the entire face, avoiding the eye contour. Excellent makeup base.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينويدات أو المقشرات القوية جداً (يزيد من خطر التهيج).'], en: ['Retinoids or very strong exfoliants (increases irritation risk).'] }, 
            best_mixed_with: { ar: ['غسول إيفاكلار الرغوي.'], en: ['Effaclar Purifying Foaming Gel.'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب المعتدل إلى الشديد، الرؤوس السوداء، والبقع الناتجة عن الحبوب.', en: 'Moderate to severe acne, blackheads, and post-acne marks.' },
        pregnancy_safe: true, sun_sensitivity: true, 
        notes: { ar: 'يعتبر الـ BHA الموضعي بتركيز أقل من 2% آمناً للحوامل (وفقاً للـ ACOG)، ولكن يُفضل دائماً استشارة الطبيب. يتطلب واقي شمس نهاراً.', en: 'Topical BHA <2% is generally considered safe during pregnancy (per ACOG), but OBGYN consultation is advised. Requires daytime SPF.' }
    }
});

// [30] Effaclar Purifying Foaming Gel
deepProductsList.push({
    id: 'lrp_effaclar_gel', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار الغسول الرغوي المنقي', en: 'Effaclar Purifying Foaming Gel' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (يحافظ على الغلاف الحمضي)', en: '5.5 (Maintains the acid mantle)' },
        mechanism: { 
            ar: 'ينظف الشوائب والزهم الزائد بفضل مواد خافضة للتوتر السطحي لطيفة جداً، ويدمج <span class="glossary-term" onclick="openGlossary(\'zinc_pca\')">الزنك PCA</span> لتنقية الجلد دون التسبب في الجفاف الارتدادي.', 
            en: 'Cleanses impurities and excess sebum using ultra-mild surfactants, and incorporates <span class="glossary-term" onclick="openGlossary(\'zinc_pca\')">Zinc PCA</span> to purify the skin without causing rebound dryness.' 
        },
        patient_benefit: { 
            ar: 'يترك البشرة الدهنية نظيفة تماماً، منتعشة، ومطفأة اللمعان، مع الحفاظ على توازن الرطوبة لتجنب الشعور بالشد.', 
            en: 'Leaves oily skin perfectly clean, refreshed, and mattified, while maintaining moisture balance to avoid tightness.' 
        },
        active_ingredients: [
            { name: 'Zinc PCA', concentration: { ar: 'منقي فعال', en: 'Active Purifier' }, role: { ar: 'تقليل الإفرازات الدهنية بفعالية مع الحفاظ على الترطيب.', en: 'Effectively reduces sebum secretion while maintaining hydration.' } },
            { name: 'La Roche-Posay Thermal Spring Water', concentration: { ar: 'أساسي', en: 'Base' }, role: { ar: 'تهدئة الجلد ومقاومة التهيج.', en: 'Soothes the skin and resists irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف).', en: 'Step 1 (Cleansing).' },
        application: { ar: 'تُرغى كمية صغيرة مع الماء في اليدين، تُدلك بلطف على الوجه ثم تُشطف جيداً.', en: 'Lather a small amount with water in hands, massage gently onto face, then rinse thoroughly.' },
        layering: { 
            do_not_mix_with: { ar: ['أجهزة التنظيف بالفرشاة الخشنة.'], en: ['Harsh physical cleansing brushes.'] }, 
            best_mixed_with: { ar: ['إيفاكلار مات أو ديو+M.'], en: ['Effaclar Mat or Duo+M.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، البشرة الحساسة المعرضة للحبوب.', en: 'Oily skin, sensitive acne-prone skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من الصابون، الكحول، والأصباغ (Soap-free).', en: 'Soap, alcohol, and colorant-free.' }
    }
});

// [31] Effaclar Micro-Peeling Purifying Gel
deepProductsList.push({
    id: 'lrp_effaclar_micro_peeling', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار غسول المايكرو-بيلينج (تقشير دقيق)', en: 'Effaclar Micro-Peeling Purifying Gel' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (لضمان فعالية التقشير)', en: 'Acidic (to ensure peeling efficacy)' },
        mechanism: { 
            ar: 'غسول علاجي مكثف يجمع بين تركيز عالٍ من حمض الساليسيليك وحمض LHA لإحداث تقشير كيميائي عميق داخل المسام، وفتح الانسدادات الشديدة، وتقليل الالتهاب عبر الزنك.', 
            en: 'An intensive therapeutic cleanser combining a high concentration of Salicylic Acid and LHA for deep intra-pore chemical peeling, unclogging severe blockages, and reducing inflammation via Zinc.' 
        },
        patient_benefit: { 
            ar: 'نتائج ممتازة على حب الشباب الشديد والمتكيس في الوجه، ومثالي جداً لعلاج حبوب الظهر والصدر (Bacne). يقلل من العلامات البنية بشكل ملحوظ.', 
            en: 'Excellent results on severe/cystic facial acne, and highly ideal for back and chest acne (Bacne). Visibly reduces brown marks.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid (BHA)', concentration: { ar: '2%', en: '2%' }, role: { ar: 'إذابة الدهون العميقة وتقشير المسام.', en: 'Dissolving deep sebum and exfoliating pores.' } },
            { name: 'LHA (Lipo-Hydroxy Acid)', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تقشير سطحي دقيق لتنعيم الجلد.', en: 'Micro-surface exfoliation for skin smoothing.' } },
            { name: 'Zinc', concentration: { ar: '0.2%', en: '0.2%' }, role: { ar: 'مضاد قوي للبكتيريا.', en: 'Strong antibacterial.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً (يُفضل مساءً).', en: 'Once daily (preferably PM).' },
        step_in_routine: { ar: 'تنظيف علاجي مكثف (للوجه والجسم).', en: 'Intensive therapeutic cleansing (Face & Body).' },
        application: { ar: 'يُرغى على بشرة مبللة، يُترك لمدة دقيقة واحدة لتعمل الأحماض، ثم يُشطف. ممتاز للاستحمام لمناطق الظهر والصدر.', en: 'Lather on wet skin, leave for 1 minute for acids to work, then rinse. Excellent in the shower for back/chest.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات كيميائية أو فيزيائية أخرى في نفس الروتين.'], en: ['Other chemical or physical exfoliants in the same routine.'] }, 
            best_mixed_with: { ar: ['مرطبات خفيفة (مثل Effaclar Mat).'], en: ['Light moisturizers (e.g., Effaclar Mat).'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب الشديد، الحبوب تحت الجلد، حبوب الظهر والصدر، والبقع العنيدة.', en: 'Severe acne, cystic acne, body/back acne, and stubborn marks.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'نظراً لارتفاع نسبة الـ BHA والتقشير، يُنصح بتجنبه للحوامل. يجب ترطيب الجلد جيداً بعده.', en: 'Due to high BHA and peeling action, it is advised to avoid during pregnancy. Must moisturize well afterwards.' }
    }
});

// [32] Effaclar Ultra Concentrated Serum
deepProductsList.push({
    id: 'lrp_effaclar_serum', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار السيروم فائق التركيز (سيروم التقشير)', en: 'Effaclar Ultra Concentrated Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (~3.5-4.0)', en: 'Acidic (~3.5-4.0)' },
        mechanism: { 
            ar: 'مركب حمضي ثلاثي (Tri-Acid Complex) يعمل على مستويات مختلفة: الـ Salicylic يطهر المسام، الـ Glycolic يجدد السطح ويحفز الكولاجين، والـ LHA يقشر بلطف. مع النياسيناميد لتعويض التهيج.', 
            en: 'A Tri-Acid Complex acting on multiple levels: Salicylic unplugs pores, Glycolic resurfaces and stimulates collagen, and LHA gently exfoliates. Combined with Niacinamide to offset irritation.' 
        },
        patient_benefit: { 
            ar: 'العلاج الأقوى لحب الشباب لدى البالغين (Adult Acne). يقلل البثور، يصغر المسام الواسعة، يعالج التصبغات العميقة، ويحسن التجاعيد الدقيقة.', 
            en: 'The ultimate treatment for Adult Acne. Reduces blemishes, shrinks enlarged pores, treats deep pigmentation, and improves fine lines.' 
        },
        active_ingredients: [
            { name: 'Tri-Acid Complex (Glycolic 3.5%, Salicylic 1.5%, LHA 0.45%)', concentration: { ar: '5.45%', en: '5.45%' }, role: { ar: 'تقشير كيميائي متكامل للسطح والمسام.', en: 'Complete chemical exfoliation for surface and pores.' } },
            { name: 'Niacinamide', concentration: { ar: '2%', en: '2%' }, role: { ar: 'تخفيف حدة الأحماض وتهدئة حاجز الجلد.', en: 'Buffers the acids and soothes the skin barrier.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً (يُفضل البدء بالتدريج: يوم بعد يوم).', en: 'Once daily PM (Best to start gradually: every other night).' },
        step_in_routine: { ar: 'سيروم العلاج الليلي.', en: 'PM treatment serum.' },
        application: { ar: 'توضع 3-4 قطرات على وجه نظيف ومجفف تماماً (تجنب محيط العين). يُترك ليمتص قبل وضع المرطب.', en: 'Apply 3-4 drops to a clean, completely dry face (avoid eye contour). Let absorb before moisturizer.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول، فيتامين C النقي، أو أي مقشرات أخرى.'], en: ['Retinol, Pure Vitamin C, or any other exfoliants.'] }, 
            best_mixed_with: { ar: ['المرطبات المرممة (Cicaplast Baume B5+) باستخدام <span class="glossary-term" onclick="openGlossary(\'sandwich_method\')">تقنية الساندويتش</span>.'], en: ['Repairing moisturizers (Cicaplast Baume B5+) using the <span class="glossary-term" onclick="openGlossary(\'sandwich_method\')">Sandwich Method</span>.'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب للبالغين، المسام المتضخمة، الندبات العميقة، والنسيج الجلدي الخشن.', en: 'Adult acne, enlarged pores, deep acne marks, and rough skin texture.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'شديد القوة، قد يسبب إحساساً بالوخز الخفيف. واقي الشمس في اليوم التالي إلزامي جداً.', en: 'Highly potent, may cause a slight tingling sensation. Next-day sunscreen is strictly mandatory.' }
    }
});
// ==========================================
// 💊 البلوك التاسع (Block 9): La Roche-Posay - Effaclar (Part 2)
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['sebulyse'] = {
    title: { ar: 'تقنية سيبوليز (Sebulyse) 🔬', en: 'Sebulyse™ Technology 🔬' },
    desc: { 
        ar: 'مادة فعالة مثبتة سريرياً تفوق قدرة الزنك في تثبيط إنتاج الزهم. تعمل على تنظيم الإفرازات الدهنية من المنبع (الغدد الدهنية) وتقليص قطر المسام الواسعة بشكل ملحوظ.', 
        en: 'A clinically proven active ingredient that outperforms Zinc in sebum inhibition. It regulates sebum production at the source (sebaceous glands) and visibly tightens enlarged pores.' 
    }
};

glossaryDict['aqua_posae_filiformis'] = {
    title: { ar: 'أكوا بوزاي فيليفورميس (APF) 🧫', en: 'Aqua Posae Filiformis (APF) 🧫' },
    desc: { 
        ar: 'مستخلص بكتيري حيوي (Postbiotic) يُزرع في مياه لاروش بوزيه الحرارية. يعمل على استعادة توازن الميكروبيوم الجلدي وتقوية الحاجز الواقي، مما يقلل من نوبات الجفاف والالتهاب الشديد.', 
        en: 'A postbiotic bacterial extract grown in La Roche-Posay Thermal Spring Water. It restores the skin microbiome balance and strengthens the protective barrier, reducing flares of severe dryness and inflammation.' 
    }
};

glossaryDict['orellana_extract'] = {
    title: { ar: 'خلاصة الأوريانا (Orellana Extract) 🌱', en: 'Bixa Orellana Extract 🌱' },
    desc: { 
        ar: 'مستخلص نباتي يعمل على تقليل فرط التقرن (Hyperkeratinization) وتخفيف الإفرازات الدهنية المتراكمة، مع استهداف البكتيريا المسببة لحب الشباب في البشرة الضعيفة والمجففة بفعل الأدوية.', 
        en: 'A plant extract that reduces hyperkeratinization and accumulated sebum, targeting acne-causing bacteria in skin weakened and dried out by medical treatments.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [33] Effaclar Mat
deepProductsList.push({
    id: 'lrp_effaclar_mat', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار مات (مرطب قابض للمسام)', en: 'Effaclar Mat Sebo-Regulating Moisturizer' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يستخدم تقنية <span class="glossary-term" onclick="openGlossary(\'sebulyse\')">Sebulyse™</span> لتنظيم الزهم من الجذور، مع كرات دقيقة ماصة للدهون (Micro-sponges) لضمان تأثير مطفئ للمعان فوراً، وحمض LHA لتقشير سطحي دقيق يمنع انسداد المسام.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'sebulyse\')">Sebulyse™</span> technology to regulate sebum at the source, with micro-sponges for an instant matte effect, and LHA for gentle surface exfoliation to prevent clogged pores.' 
        },
        patient_benefit: { 
            ar: 'يرطب البشرة الدهنية دون ترك أي أثر دهني، يقلص حجم المسام الواسعة بشكل دائم، ويتحكم في اللمعان لمدة تصل إلى 8 ساعات.', 
            en: 'Hydrates oily skin without greasy residue, durably shrinks enlarged pores, and controls shine for up to 8 hours.' 
        },
        active_ingredients: [
            { name: 'Sebulyse™', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تثبيط إنتاج الدهون وتصغير المسام.', en: 'Sebum inhibition and pore tightening.' } },
            { name: 'Micro-absorbent Powders', concentration: { ar: 'مكثف', en: 'Intense' }, role: { ar: 'امتصاص العرق والدهون السطحية فوراً.', en: 'Instantly absorbs surface sweat and sebum.' } },
            { name: 'LHA', concentration: { ar: 'مقشر دقيق', en: 'Micro-exfoliant' }, role: { ar: 'تنعيم ملمس البشرة الخشن.', en: 'Smooths rough skin texture.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'خطوة الترطيب الأساسية.', en: 'Main moisturizing step.' },
        application: { ar: 'يوزع على الوجه بالكامل. يُعتبر قاعدة (Primer) ممتازة قبل المكياج لضمان ثباته.', en: 'Apply to the entire face. Serves as an excellent makeup primer to ensure long wear.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['غسول إيفاكلار الرغوي.'], en: ['Effaclar Purifying Foaming Gel.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، المسام الواسعة، اللمعان الزائد خاصة في منطقة T-Zone.', en: 'Oily skin, enlarged pores, excess shine especially in the T-Zone.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من الزيوت (Oil-free) ولا يسبب ظهور الرؤوس السوداء (Non-comedogenic).', en: 'Oil-free and non-comedogenic.' }
    }
});

// [34] Effaclar H Iso-Biome Cream
deepProductsList.push({
    id: 'lrp_effaclar_h_cream', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار إتش إيزو-بيوم (كريم ترميم)', en: 'Effaclar H Iso-Biome Soothing Moisturizer' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعتمد على علم الميكروبيوم؛ يدمج <span class="glossary-term" onclick="openGlossary(\'aqua_posae_filiformis\')">Aqua Posae Filiformis</span> و <span class="glossary-term" onclick="openGlossary(\'orellana_extract\')">خلاصة الأوريانا</span> لإعادة التوازن البكتيري للجلد المجفف، مع تركيز عالٍ من البانثينول لترميم الحاجز التالف.', 
            en: 'Microbiome-science driven; combines <span class="glossary-term" onclick="openGlossary(\'aqua_posae_filiformis\')">Aqua Posae Filiformis</span> and <span class="glossary-term" onclick="openGlossary(\'orellana_extract\')">Orellana Extract</span> to rebalance the bacterial flora of over-dried skin, with high Panthenol to repair the damaged barrier.' 
        },
        patient_benefit: { 
            ar: 'يعوض الجفاف الشديد الناتج عن علاجات حب الشباب القوية (مثل الروكوتان)، يقلل الاحمرار والتقشر، ويوفر راحة فورية تدوم 48 ساعة.', 
            en: 'Compensates for severe dryness caused by strong acne treatments (like Isotretinoin), reduces redness and flaking, and provides instant comfort lasting 48 hours.' 
        },
        active_ingredients: [
            { name: 'Panthenol (Vitamin B5)', concentration: { ar: 'مرمم أساسي', en: 'Core Restorer' }, role: { ar: 'تهدئة عميقة وتسريع التئام الجلد.', en: 'Deep soothing and accelerating skin healing.' } },
            { name: 'Squalane & Niacinamide', concentration: { ar: 'مركبات غنية', en: 'Rich Compounds' }, role: { ar: 'إعادة بناء طبقة الدهون وتقليل الالتهاب.', en: 'Rebuilding the lipid layer and reducing inflammation.' } },
            { name: 'Microbiome Technology', concentration: { ar: 'براءة اختراع', en: 'Patented Complex' }, role: { ar: 'دعم البكتيريا النافعة.', en: 'Supports beneficial skin bacteria.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (أو حسب الحاجة).', en: 'Twice daily (or as needed).' },
        step_in_routine: { ar: 'الترطيب العلاجي.', en: 'Therapeutic moisturizing.' },
        application: { ar: 'يوزع بلطف على بشرة نظيفة ومجففة.', en: 'Distribute gently onto clean, dried skin.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات الأحماض (أثناء كورس الروكوتان).'], en: ['Acid exfoliants (during Accutane course).'] }, 
            best_mixed_with: { ar: ['دواء الأيزوتريتينوين (الروكوتان) الفموي.', 'غسول إيفاكلار H إيزو-بيوم.'], en: ['Oral Isotretinoin (Accutane) medication.', 'Effaclar H Iso-Biome Cleanser.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الجفاف الطبي، تقشر الجلد، والاحمرار المصاحب لعلاجات حب الشباب المجففة.', en: 'Medical dryness, skin flaking, and redness associated with drying acne treatments.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'ملمس ناعم جداً غير دهني وغير لزج.', en: 'Ultra-fine, non-greasy, and non-sticky texture.' }
    }
});

// [35] Effaclar H Iso-Biome Cleansing Cream
deepProductsList.push({
    id: 'lrp_effaclar_h_cleanser', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار إتش إيزو-بيوم (كريم منظف)', en: 'Effaclar H Iso-Biome Cleansing Cream' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'قاعدة تنظيف خالية تماماً من الصابون والمنظفات القاسية (Surfactants)، تعتمد على قوام كريمي مضاد للاحتكاك (Anti-friction)، غني بزبدة الشيا والنياسيناميد لتنظيف البشرة الضعيفة دون المساس بحاجزها.', 
            en: 'A completely soap-free and harsh-surfactant-free cleansing base, relying on an anti-friction cream texture rich in Shea Butter and Niacinamide to cleanse weakened skin without compromising its barrier.' 
        },
        patient_benefit: { 
            ar: 'ينظف وينقي البشرة بلطف بالغ دون التسبب في ألم، تهيج، أو إحساس بالشد للمرضى الخاضعين لعلاجات مجففة كالأيزوتريتينوين.', 
            en: 'Ultra-gently cleanses and purifies the skin without causing pain, irritation, or tightness for patients undergoing drying treatments like Isotretinoin.' 
        },
        active_ingredients: [
            { name: 'Shea Butter', concentration: { ar: 'غني', en: 'Rich' }, role: { ar: 'تغذية وتكوين طبقة حامية أثناء الغسيل.', en: 'Nourishing and forming a protective film during washing.' } },
            { name: 'Niacinamide + Zinc PCA', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تهدئة الالتهاب وتنظيم بكتيريا حب الشباب بلطف.', en: 'Soothing inflammation and gently regulating acne bacteria.' } },
            { name: 'Orellana Extract', concentration: { ar: 'مستخلص', en: 'Extract' }, role: { ar: 'دعم الميكروبيوم الجلدي.', en: 'Supporting the skin microbiome.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'التنظيف اللطيف.', en: 'Gentle cleansing.' },
        application: { ar: 'تُمزج كمية قليلة مع الماء لتكوين رغوة كريمية، تُدلك على الوجه بلطف شديد، تُشطف، ويُجفف الوجه بالتربيت (المناديل) وليس الفرك.', en: 'Mix a small amount with water to form a creamy lather, massage onto the face very gently, rinse, and pat dry (using tissues), no rubbing.' },
        layering: { 
            do_not_mix_with: { ar: ['الماء الساخن، أجهزة الفرك الميكانيكية.'], en: ['Hot water, mechanical scrubbing devices.'] }, 
            best_mixed_with: { ar: ['كريم إيفاكلار إتش إيزو-بيوم للترطيب.'], en: ['Effaclar H Iso-Biome Moisturizer.'] } 
        }
    },
    precautions: {
        indications: { ar: 'تنظيف البشرة المعالجة طبياً بالروكوتان، البشرة المعرضة لحب الشباب شديدة التحسس والجفاف.', en: 'Cleansing skin medically treated with Accutane, highly sensitive and dried-out acne-prone skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يمكن استخدامه للوجه والجسم معاً.', en: 'Can be used for both face and body.' }
    }
});

// [36] Effaclar A.I.
deepProductsList.push({
    id: 'lrp_effaclar_ai', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار A.I. (علاج موضعي للحبوب)', en: 'Effaclar A.I. Targeted Breakout Corrector' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly Acidic' },
        mechanism: { 
            ar: 'علاج طوارئ موضعي (Spot Treatment). يقوم النياسيناميد بإيقاف تطور الحبة (الالتهاب)، بينما يقتل (Piroctone Olamine) البكتيريا المتجمعة، ويقوم الـ LHA بتقشير الجلد لتصريف الصديد المتراكم.', 
            en: 'A targeted spot treatment. Niacinamide halts the evolution of the breakout (inflammation), Piroctone Olamine kills clustered bacteria, and LHA exfoliates the skin to drain accumulated pus.' 
        },
        patient_benefit: { 
            ar: 'يُجهض الحبوب المفاجئة والملتهبة، يسرع من امتصاصها واختفائها في وقت قياسي (غالباً خلال 48 ساعة)، ويمنع ترك ندبة داكنة مكانها.', 
            en: 'Aborts sudden and inflamed breakouts, accelerates their reabsorption and disappearance in record time (often within 48h), and prevents residual dark marks.' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: { ar: 'تركيز عالي', en: 'High Concentration' }, role: { ar: 'وقف تفاقم الالتهاب الموضعي.', en: 'Halts the exacerbation of local inflammation.' } },
            { name: 'Piroctone Olamine & Glycacil', concentration: { ar: 'مضاد بكتيري', en: 'Antibacterial' }, role: { ar: 'تطهير عميق للشوائب داخل الحبة.', en: 'Deep purification of impurities inside the blemish.' } },
            { name: 'LHA', concentration: { ar: 'مقشر دقيق', en: 'Micro-exfoliant' }, role: { ar: 'تحفيز التجديد الخلوي لفتح رأس الحبة.', en: 'Stimulating cellular renewal to open the comedone.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '2 إلى 3 مرات يومياً على الحبة نفسها.', en: '2 to 3 times daily on the blemish itself.' },
        step_in_routine: { ar: 'الخطوة الأخيرة (أو حسب الحاجة).', en: 'Last step (or as needed).' },
        application: { ar: 'يوضع موضعياً فقط (Spot-on) على البثرة الملتهبة بعد تنظيف البشرة.', en: 'Apply strictly as a spot-on treatment on the inflamed blemish after cleansing.' },
        layering: { 
            do_not_mix_with: { ar: ['دهانه على كامل الوجه (مخصص للحبوب فقط).'], en: ['Applying to the entire face (strictly for spots).'] }, 
            best_mixed_with: { ar: ['جميع روتين إيفاكلار (الغسول، ديو+M).'], en: ['The entire Effaclar routine (Cleanser, Duo+M).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البثور المفاجئة، الحبوب الملتهبة (Papules & Pustules)، وعلاج الطوارئ قبل المناسبات.', en: 'Sudden breakouts, inflamed pimples (Papules & Pustules), and pre-event emergency treatment.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن موضعياً للحوامل. يمكن وضع المكياج فوقه بمجرد جفافه.', en: 'Locally safe during pregnancy. Makeup can be applied over it once dry.' }
    }
});
// ==========================================
// 💊 البلوك العاشر (Block 10): LRP Effaclar (Final) & Lipikar (Part 1)
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['ap_plus_m'] = {
    title: { ar: 'براءة اختراع AP+M 🛡️', en: 'AP+M Technology 🛡️' },
    desc: { 
        ar: 'مركب يجمع بين (Aqua Posae Filiformis) لإعادة توازن الميكروبيوم، و(Microresyl) الذي يمنع بكتيريا المكورات العنقودية من تكوين غشاء حيوي (Biofilm) لحماية نفسها، مما يوقف انتكاسات الإكزيما من جذورها.', 
        en: 'A complex combining Aqua Posae Filiformis to rebalance the microbiome, and Microresyl which prevents Staph bacteria from forming a protective biofilm, thereby stopping eczema relapses at the root.' 
    }
};

glossaryDict['urea_keratolytic'] = {
    title: { ar: 'اليوريا المُقشرة (Urea + HEPES) 💧', en: 'Keratolytic Urea 💧' },
    desc: { 
        ar: 'اليوريا بتركيز 5% تعمل كمرطب جاذب للماء، ومقشر لطيف (Keratolytic) لإذابة الكيراتين المتراكم. دمجها مع مركب HEPES يسرع من تجديد الخلايا وتنعيم الجلد الخشن أو المصاب بجلد الوزة (Keratosis Pilaris).', 
        en: '5% Urea acts as a humectant and a gentle keratolytic to dissolve accumulated keratin. Combined with HEPES, it accelerates cell renewal, smoothing rough or Keratosis Pilaris-prone skin.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [37] Effaclar Micellar Water Ultra
deepProductsList.push({
    id: 'lrp_effaclar_micellar', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار ميسيلار ووتر ألترا', en: 'Effaclar Micellar Water Ultra' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (متوازن)', en: '5.5 (Balanced)' },
        mechanism: { 
            ar: 'تستخدم جزيئات الميسيلار المدمجة مع الجلسرين لإزالة 99% من المكياج والشوائب دون فرك، مع الزنك لتنقية المسام من الزهم المتبقي.', 
            en: 'Uses micellar molecules combined with Glycerin to remove 99% of makeup and impurities without rubbing, plus Zinc to purify pores from residual sebum.' 
        },
        patient_benefit: { 
            ar: 'تنظيف سريع وفعال للمكياج والدهون، يترك البشرة غير لامعة ولا يسبب جفافاً أو تهيجاً.', 
            en: 'Fast, effective makeup and sebum removal, leaves skin matte without causing dryness or irritation.' 
        },
        active_ingredients: [
            { name: 'Zinc PCA', concentration: { ar: '1%', en: '1%' }, role: { ar: 'منقي ومضاد للمعان.', en: 'Purifying and anti-shine.' } },
            { name: 'Glycerin', concentration: { ar: 'مرطب', en: 'Hydrating' }, role: { ar: 'منع الاحتكاك وتسهيل انزلاق القطن.', en: 'Prevents friction and allows cotton pad to glide.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (لإزالة المكياج أو تنظيف سريع).', en: 'As needed (for makeup removal or quick cleanse).' },
        step_in_routine: { ar: 'التنظيف الجاف.', en: 'Dry cleansing.' },
        application: { ar: 'يمسح به الوجه باستخدام قطنة. لا يتطلب الشطف.', en: 'Wipe face using a cotton pad. Does not require rinsing.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية الحساسة، إزالة مكياج الوجه والعين.', en: 'Sensitive oily skin, face and eye makeup removal.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره على العيون الحساسة.', en: 'Tested on sensitive eyes.' }
    }
});

// [38] Effaclar Duo+ SPF 30
deepProductsList.push({
    id: 'lrp_effaclar_duo_spf', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار ديو+ (مع واقي شمس SPF30)', en: 'Effaclar Duo+ SPF 30' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يجمع بين فعالية ديو+ في علاج الحبوب والتقشير بالـ LHA والبروسيراد، مع نظام فلاتر XL-Protect لحماية التصبغات الحمراء/البنية من التحول لندبات دائمة بسبب أشعة الشمس.', 
            en: 'Combines Duo+ efficacy in treating breakouts with LHA and Procerad, plus XL-Protect filter system to protect red/brown marks from becoming permanent sun scars.' 
        },
        patient_benefit: { 
            ar: 'علاج نهاري متكامل للحبوب، يحمي من الأشعة فوق البنفسجية والتلوث اللذين يفاقمان حب الشباب.', 
            en: 'Complete daytime acne treatment, protects against UV and pollution which exacerbate breakouts.' 
        },
        active_ingredients: [
            { name: 'XL-Protect Filters', concentration: { ar: 'SPF 30', en: 'SPF 30' }, role: { ar: 'حماية من أشعة UVA/UVB.', en: 'UVA/UVB protection.' } },
            { name: 'Procerad + Niacinamide', concentration: { ar: 'مركبات نشطة', en: 'Active Compounds' }, role: { ar: 'منع تصبغات ما بعد الالتهاب.', en: 'Prevention of Post-Inflammatory Hyperpigmentation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (في الصباح).', en: 'Daily (AM).' },
        step_in_routine: { ar: 'الخطوة النهارية (علاج + حماية).', en: 'Daytime step (Treatment + Protection).' },
        application: { ar: 'يوزع على كامل الوجه قبل التعرض للشمس.', en: 'Apply to entire face before sun exposure.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات ليلية تُترك للنهار.'], en: ['Night exfoliants left for the day.'] }, 
            best_mixed_with: { ar: ['ديو+M أو سيروم إيفاكلار (للاستخدام المسائي).'], en: ['Duo+M or Effaclar Serum (for PM use).'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب، البقع الداكنة، والوقاية من التصبغ الضوئي للندبات.', en: 'Acne, dark spots, and photo-pigmentation prevention of scars.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يغني عن واقي الشمس المتخصص في حالات التعرض الطويل للشاطئ.', en: 'Does not replace a dedicated sunscreen for prolonged beach exposure.' }
    }
});

// [39] Effaclar Sebo-Controlling Mask
deepProductsList.push({
    id: 'lrp_effaclar_mask', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار ماسك للتحكم في الزهم', en: 'Effaclar Sebo-Controlling Mask' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'ماسك طيني منقي يعتمد على مزيج من طين الكاولين والأرجيلا لامتصاص الزهم الزائد والشوائب من عمق المسام، بينما يمنع البانثينول (B5) حدوث جفاف ارتدادي.', 
            en: 'A purifying clay mask based on Kaolin and Argilla clays to absorb excess sebum and impurities from deep within pores, while Panthenol (B5) prevents rebound dryness.' 
        },
        patient_benefit: { 
            ar: 'يفتح المسام المسدودة فوراً، يزيل اللمعان، وينعم نسيج الجلد دون إثارة حساسية البشرة.', 
            en: 'Instantly unclogs pores, eliminates shine, and smooths skin texture without triggering sensitivity.' 
        },
        active_ingredients: [
            { name: 'Kaolin + Argilla', concentration: { ar: 'أطيان طبيعية', en: 'Natural Clays' }, role: { ar: 'امتصاص فائق للدهون كالمغناطيس.', en: 'High absorption of sebum like a magnet.' } },
            { name: 'Panthenol', concentration: { ar: '5%', en: '5%' }, role: { ar: 'تهدئة عميقة ومنع التهيج.', en: 'Deep soothing and irritation prevention.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '1 إلى 2 مرة أسبوعياً.', en: '1 to 2 times a week.' },
        step_in_routine: { ar: 'عناية أسبوعية مكثفة.', en: 'Intensive weekly care.' },
        application: { ar: 'توضع طبقة رقيقة على الوجه وتُترك لمدة 5 دقائق فقط، ثم تشطف بالماء.', en: 'Apply a thin layer to the face, leave for strictly 5 minutes, then rinse with water.' },
        layering: { 
            do_not_mix_with: { ar: ['تركه لفترة طويلة حتى يجف تماماً ويتشقق (يسبب جفاف قاسي).'], en: ['Leaving it on until completely dry and cracking (causes severe dryness).'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية جداً، المسام المسدودة، واللمعان الزائد.', en: 'Very oily skin, clogged pores, and excess shine.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام كريمي لا يتحجر بسرعة كباقي الماسكات الطينية.', en: 'Creamy texture that does not calcify quickly like other clay masks.' }
    }
});

// [40] Effaclar Duo+M Patch
deepProductsList.push({
    id: 'lrp_effaclar_patch', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار ديو+M (لصقات الحبوب)', en: 'Effaclar Duo+M Blemish Patches' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'غير مائي', en: 'Water-free' },
        mechanism: { 
            ar: 'لصقات هيدروكولويد (Hydrocolloid) طبية، تشكل بيئة معزولة مفرغة من الهواء لامتصاص الإفرازات والصديد من الحبة، مع حمايتها من التلوث الميكانيكي واللمس.', 
            en: 'Medical Hydrocolloid patches forming an isolated, air-tight environment to absorb exudate and pus from the blemish, protecting it from mechanical pollution and picking.' 
        },
        patient_benefit: { 
            ar: 'تصطاد الصديد وتقلل حجم الحبة المزعجة في ليلة واحدة، وتمنع ترك ندبات بسبب العبث بالحبوب.', 
            en: 'Traps pus and flattens bothersome pimples overnight, preventing scarring caused by picking at breakouts.' 
        },
        active_ingredients: [
            { name: 'Hydrocolloid Technology', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'امتصاص السوائل وتشكيل غلاف واقي.', en: 'Absorbing fluids and forming a protective barrier.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'تُترك طوال الليل (أو لمدة 8 ساعات).', en: 'Leave on overnight (or for 8 hours).' },
        step_in_routine: { ar: 'علاج موضعي سريع.', en: 'Targeted spot treatment.' },
        application: { ar: 'توضع اللصقة على الحبة بعد تنظيفها وتجفيفها تماماً (بدون وضع كريمات تحتها).', en: 'Apply the patch to the blemish after complete cleansing and drying (no creams underneath).' },
        layering: { 
            do_not_mix_with: { ar: ['وضع كريم أو سيروم أسفل اللصقة (يمنع التصاقها).'], en: ['Applying cream or serum under the patch (prevents adhesion).'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'الحبوب البيضاء البارزة (Pustules) والتي لها رأس سطحي.', en: 'White, surfaced pimples (Pustules) with a visible head.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'شفافة وغير مرئية تقريباً.', en: 'Transparent and almost invisible.' }
    }
});

// [41] Lipikar Baume AP+M
deepProductsList.push({
    id: 'lrp_lipikar_baume_apm', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار بوم AP+M (بلسم الإكزيما)', en: 'Lipikar Baume AP+M' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'ابتكار يعتمد على براءة اختراع <span class="glossary-term" onclick="openGlossary(\'ap_plus_m\')">AP+M</span> لإعادة توازان الميكروبيوم الجلدي، مع 4% نياسيناميد لوقف الحكة، و20% زبدة الشيا لترميم حاجز البشرة بشدة.', 
            en: 'Innovation based on <span class="glossary-term" onclick="openGlossary(\'ap_plus_m\')">AP+M</span> patent to rebalance skin microbiome, with 4% Niacinamide to halt itching, and 20% Shea Butter to intensely repair the skin barrier.' 
        },
        patient_benefit: { 
            ar: 'يهدئ الجلد التأتبي فوراً، يقاوم الرغبة في الحك، ويطيل الفترات بين نوبات التهيج الشديدة (Anti-relapse).', 
            en: 'Instantly soothes atopic skin, fights the urge to scratch, and prolongs the periods between severe flare-ups (Anti-relapse efficacy).' 
        },
        active_ingredients: [
            { name: 'Aqua Posae + Microresyl', concentration: { ar: 'براءة اختراع', en: 'Patented Complex' }, role: { ar: 'منع تكوين الغشاء الحيوي للبكتيريا الضارة.', en: 'Prevents biofilm formation by harmful bacteria.' } },
            { name: 'Niacinamide', concentration: { ar: '4%', en: '4%' }, role: { ar: 'تهدئة الحكة وإصلاح الحاجز.', en: 'Soothes itching and repairs the barrier.' } },
            { name: 'Shea Butter', concentration: { ar: '20%', en: '20%' }, role: { ar: 'تغذية عميقة جداً.', en: 'Ultra-deep nourishment.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً.', en: 'Once daily.' },
        step_in_routine: { ar: 'ترطيب عميق (للوجه والجسم).', en: 'Deep hydration (Face & Body).' },
        application: { ar: 'يوضع على بشرة نظيفة (يُفضل بعد الاستحمام بغسول Lipikar Syndet).', en: 'Apply to clean skin (preferably after cleansing with Lipikar Syndet).' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'الإكزيما التأتبية، الجفاف الشديد جداً، والحكة المزمنة لحديثي الولادة والأطفال والبالغين.', en: 'Atopic eczema, extremely severe dryness, and chronic itching for newborns, children, and adults.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن لمرضى الأورام (Oncology Safe) للتخفيف من جفاف الجلد بسبب العلاج.', en: 'Oncology Safe to alleviate skin dryness caused by treatments.' }
    }
});

// [42] Lipikar Syndet AP+
deepProductsList.push({
    id: 'lrp_lipikar_syndet', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار سينديت AP+ (كريم غسول)', en: 'Lipikar Syndet AP+ Cream Wash' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'منظف كريمي يعتمد على قاعدة (Syndet) خالية من الصابون، غني بزبدة الشيا والنياسيناميد ومركب AP+ الفعال في استعادة الدهون أثناء الاستحمام وتهدئة التهيج.', 
            en: 'Creamy cleanser based on a soap-free (Syndet) base, rich in Shea Butter, Niacinamide, and AP+ complex effective in lipid-replenishing during bathing and soothing irritation.' 
        },
        patient_benefit: { 
            ar: 'ينظف البشرة الجافة بلطف فائق، يقلل من جفاف الاستحمام، ويخفف الرغبة في الحك فور الخروج من الماء.', 
            en: 'Ultra-gently cleanses dry skin, reduces shower-induced dryness, and alleviates the urge to scratch immediately after bathing.' 
        },
        active_ingredients: [
            { name: 'Aqua Posae Filiformis', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'دعم الميكروبيوم أثناء التنظيف.', en: 'Supports the microbiome during cleansing.' } },
            { name: 'Niacinamide + Shea Butter', concentration: { ar: 'مهدئ ومغذي', en: 'Soothing & Nourishing' }, role: { ar: 'حماية طبقة الهيدروليبيديك.', en: 'Protects the hydrolipidic film.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (أثناء الاستحمام).', en: 'Daily (during bath/shower).' },
        step_in_routine: { ar: 'التنظيف الأساسي.', en: 'Core cleansing.' },
        application: { ar: 'توضع كمية على بشرة مبللة، تُدلك بلطف ثم تُشطف. لا يسبب حرقة للعين.', en: 'Apply to wet skin, massage gently then rinse. Does not sting eyes.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['بلسم ليبيكار AP+M (بعد الاستحمام مباشرة).'], en: ['Lipikar Baume AP+M (immediately after bathing).'] } 
        }
    },
    precautions: {
        indications: { ar: 'تنظيف الإكزيما التأتبية، قرفصاء الرأس (Cradle cap) للرضع، والجفاف الشديد.', en: 'Cleansing atopic eczema, infant cradle cap, and severe dryness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مناسب لحديثي الولادة. خالي من العطور والصابون.', en: 'Suitable for newborns. Fragrance and soap free.' }
    }
});

// [43] Lipikar Lait Urea 5+
deepProductsList.push({
    id: 'lrp_lipikar_urea', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار لوشن يوريا 5+ (مقشر ومرطب)', en: 'Lipikar Lait Urea 5+ Soothing Lotion' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly Acidic' },
        mechanism: { 
            ar: 'يعمل بآلية مزدوجة: تقشير كيراتيني عبر <span class="glossary-term" onclick="openGlossary(\'urea_keratolytic\')">اليوريا 5% ومركب HEPES</span> للتخلص من الحراشف والجلد الخشن، وترطيب عميق عبر زبدة الشيا لمنع فقدان الماء.', 
            en: 'Dual mechanism: Keratolytic exfoliation via <span class="glossary-term" onclick="openGlossary(\'urea_keratolytic\')">5% Urea & HEPES</span> to eliminate scales and rough skin, and deep hydration via Shea Butter to prevent water loss.' 
        },
        patient_benefit: { 
            ar: 'ينعم البشرة الخشنة، يعالج مشكلة (جلد الوزة) أو التقرن الشعري، ويهدئ جفاف الشيخوخة وتقشر الجلد.', 
            en: 'Smooths rough skin, treats Keratosis Pilaris (Strawberry legs), and soothes senile dryness and skin flaking.' 
        },
        active_ingredients: [
            { name: 'Urea', concentration: { ar: '5%', en: '5%' }, role: { ar: 'ترطيب جاذب للماء وإذابة الكيراتين.', en: 'Water-binding hydration and keratin dissolution.' } },
            { name: 'HEPES', concentration: { ar: 'مقشر لطيف', en: 'Gentle Exfoliant' }, role: { ar: 'تسهيل إزالة الخلايا الميتة.', en: 'Facilitates dead cell desquamation.' } },
            { name: 'Allantoin', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'تقليل التهيج الناتج عن الجفاف.', en: 'Reduces dryness-induced irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'ترطيب علاجي للجسم.', en: 'Therapeutic body hydration.' },
        application: { ar: 'يُدلك على بشرة الجسم، مع التركيز على المناطق الخشنة (الذراعين، المرفقين، الساقين).', en: 'Massage onto body skin, focusing on rough areas (arms, elbows, legs).' },
        layering: { 
            do_not_mix_with: { ar: ['الاستخدام على الوجه أو الجروح المفتوحة.'], en: ['Application on the face or open wounds.'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'التقرن الشعري (Keratosis Pilaris)، جفاف الجلد الشديد عند كبار السن، البقع الخشنة.', en: 'Keratosis Pilaris, severe senile xerosis, and rough patches.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مخصص للجسم فقط. أثبت فعالية ملحوظة على مرضى السكري.', en: 'For body use only. Clinically proven effective on diabetic patients.' }
    }
});
// ==========================================
// 💊 البلوك الحادي عشر (Block 11): LRP Lipikar (Final) & Anthelios (Part 1)
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['mexoryl_400'] = {
    title: { ar: 'ميكسوريل 400 (Mexoryl 400) ☀️', en: 'Mexoryl 400 Filter ☀️' },
    desc: { 
        ar: 'فلتر شمسي ثوري وحصري من لوريال، وهو الفلتر الوحيد والأكثر كفاءة عالمياً في حجب أشعة (UVA الطويلة جداً 380-400nm) والتي تخترق الجلد بعمق وتسبب الشيخوخة، الكلف، والتلف الخلوي (DNA Damage).', 
        en: 'A revolutionary and exclusive solar filter by L\'Oréal. It is the only and most efficient filter globally to block Ultra-Long UVA rays (380-400nm) which penetrate deep into the skin causing aging, melasma, and DNA damage.' 
    }
};

glossaryDict['netlock_tech'] = {
    title: { ar: 'تكنولوجيا نيت-لوك (Netlock Technology) 🛡️', en: 'Netlock Technology 🛡️' },
    desc: { 
        ar: 'تقنية تغلف فلاتر الشمس داخل قطرات دقيقة جداً من الجل. هذا يخلق شبكة قوية ومستقرة على الجلد تمنع هجرة المنتج للعينين (لا يسبب حرقة)، وتوفر مقاومة استثنائية للماء، العرق، والرمال.', 
        en: 'A technology that encapsulates sun filters within micro-gel droplets. This creates a strong, stable network on the skin preventing product migration into the eyes (anti-stinging) and providing exceptional resistance to water, sweat, and sand.' 
    }
};

glossaryDict['ce_act_complex'] = {
    title: { ar: 'مركب CE-ACT (لمكافحة الشيخوخة) 🧬', en: 'CE-ACT Complex 🧬' },
    desc: { 
        ar: 'مركب ثلاثي يتكون من (حمض الهيالورونيك المجزأ، النياسيناميد، وLHA). يستهدف علامات الشيخوخة الضوئية، يصحح التجاعيد، ويوحد لون البشرة المصبوغة بسبب الشمس.', 
        en: 'A tripartite complex consisting of Fragmented Hyaluronic Acid, Niacinamide, and LHA. It targets photo-aging signs, corrects wrinkles, and evens out sun-pigmented skin tone.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [44] Lipikar Baby Shower Gel (Gel Lavant)
deepProductsList.push({
    id: 'lrp_lipikar_gel_lavant', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار جل لافانت (غسول العائلة والأطفال)', en: 'Lipikar Gel Lavant (Baby Shower Gel)' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (درجة حموضة فسيولوجية)', en: '5.5 (Physiological pH)' },
        mechanism: { 
            ar: 'قاعدة تنظيف فائقة اللطافة تعتمد على النياسيناميد وزبدة الشيا لاستعادة الدهون الطبيعية للجلد أثناء الاستحمام. خالية من الصابون والبارابين لحماية الغلاف المائي الدهني.', 
            en: 'An ultra-mild cleansing base relying on Niacinamide and Shea Butter to restore natural skin lipids during bathing. Soap and paraben-free to protect the hydrolipidic film.' 
        },
        patient_benefit: { 
            ar: 'ينظف بلطف شديد دون ألم في العينين. يهدئ الحكة والجلد المشدود، ومثالي لجميع أفراد الأسرة (الرضع، الأطفال، البالغين).', 
            en: 'Cleanses very gently without stinging the eyes. Soothes itching and tight skin, ideal for the entire family (infants, children, adults).' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: { ar: 'مهدئ فعال', en: 'Active Soothing' }, role: { ar: 'تخفيف الاحمرار وتقوية حاجز البشرة.', en: 'Reduces redness and strengthens the skin barrier.' } },
            { name: 'Shea Butter', concentration: { ar: 'مغذي', en: 'Nourishing' }, role: { ar: 'توفير الأحماض الدهنية الأساسية لمنع الجفاف.', en: 'Provides essential fatty acids to prevent dryness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (للشعر والجسم).', en: 'Daily (for hair and body).' },
        step_in_routine: { ar: 'وقت الاستحمام.', en: 'Bath time.' },
        application: { ar: 'يوزع على البشرة المبللة، يُرغى بلطف ثم يُشطف. آمن لتنظيف فروة رأس الرضع وللمناطق الحساسة.', en: 'Apply to wet skin, lather gently, then rinse. Safe for infant scalps and intimate areas.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['أي مرطب من عائلة ليبيكار.', 'Any Lipikar moisturizer.'] } 
        }
    },
    precautions: {
        indications: { ar: 'بشرة الرضع العادية إلى الجافة، فروة الرأس، والنظافة اليومية للعائلة.', en: 'Normal to dry infant skin, scalp, and daily family hygiene.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'متوفر بحجم عائلي 750 مل (اقتصادي جداً).', en: 'Available in a 750ml family size (highly economical).' }
    }
});

// [45] Anthelios UVMune 400 Invisible / Tinted Fluid SPF50+
deepProductsList.push({
    id: 'lrp_anthelios_uvmune_fluid', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس UVMune 400 فلويد (مخفي / ملون)', en: 'Anthelios UVMune 400 Invisible / Tinted Fluid SPF50+' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم أحدث فلتر في العالم <span class="glossary-term" onclick="openGlossary(\'mexoryl_400\')">Mexoryl 400</span> لحجب أطول أشعة UVA، ومغلف بـ <span class="glossary-term" onclick="openGlossary(\'netlock_tech\')">Netlock Technology</span> لضمان ثبات الفلاتر وعدم دخولها في العين أو إزالتها بالعرق.', 
            en: 'Utilizes the world\'s newest filter <span class="glossary-term" onclick="openGlossary(\'mexoryl_400\')">Mexoryl 400</span> to block ultra-long UVA, encapsulated in <span class="glossary-term" onclick="openGlossary(\'netlock_tech\')">Netlock Technology</span> to ensure filter stability, anti-eye stinging, and sweat resistance.' 
        },
        patient_benefit: { 
            ar: 'الوقاية الأقوى ضد الكلف والتجاعيد. قوام سائل جداً لا يترك أثراً أبيض (متوفر بنسخة ملونة لتوحيد اللون).', 
            en: 'The strongest prevention against melasma and wrinkles. Ultra-liquid texture leaving no white cast (available in tinted for evening out skin tone).' 
        },
        active_ingredients: [
            { name: 'Mexoryl 400 + Broad Spectrum Filters', concentration: { ar: 'SPF 50+ / PA++++', en: 'SPF 50+ / PA++++' }, role: { ar: 'حماية خلوية عميقة.', en: 'Deep cellular protection.' } },
            { name: 'Glycerin', concentration: { ar: 'مرطب', en: 'Hydrating' }, role: { ar: 'الحفاظ على ترطيب السطح دون التسبب في لمعان.', en: 'Maintains surface hydration without causing shine.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً.', en: 'Daily.' },
        step_in_routine: { ar: 'آخر خطوة قبل المكياج.', en: 'Last step before makeup.' },
        application: { ar: 'يُرج بقوة شديدة قبل الاستخدام (لخلط تكنولوجيا Netlock)، ثم يوضع بسخاء على الوجه.', en: 'Shake vigorously before use (to mix Netlock tech), then apply generously to the face.' },
        layering: { 
            do_not_mix_with: { ar: ['الزيوت الثقيلة جداً.', 'Very heavy oils.'] }, 
            best_mixed_with: { ar: ['سيرومات فيتامين سي (Vitamin C) لتعزيز الحماية بمضادات الأكسدة.', 'Vitamin C serums to boost antioxidant protection.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة العادية، المختلطة، والحساسة. للوقاية القصوى من التصبغات.', en: 'Normal, combination, and sensitive skin. For ultimate pigmentation prevention.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مقاوم للماء والرمل بشدة. لا يسد المسام.', en: 'Highly water and sand resistant. Non-comedogenic.' }
    }
});

// [46] Anthelios UVMune 400 Oil Control (Fluid / Gel-Cream) SPF50+
deepProductsList.push({
    id: 'lrp_anthelios_uvmune_oil_control', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس UVMune 400 أويل كنترول', en: 'Anthelios UVMune 400 Oil Control (Fluid/Gel-Cream)' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يجمع بين الفلتر المتطور <span class="glossary-term" onclick="openGlossary(\'mexoryl_400\')">Mexoryl 400</span> وتكنولوجيا (Airlicium™) التي تتكون من جزيئات دقيقة تمتص ما يصل إلى 100 ضعف وزنها من الزهم والعرق، لمنع اللمعان طوال اليوم.', 
            en: 'Combines the advanced <span class="glossary-term" onclick="openGlossary(\'mexoryl_400\')">Mexoryl 400</span> filter with Airlicium™ technology (micro-particles that absorb up to 100x their weight in sebum and sweat) to prevent shine all day.' 
        },
        patient_benefit: { 
            ar: 'تأثير مطفئ (Matte) يدوم لـ 12 ساعة، ملمس جاف فوراً (Dry touch)، وحماية قصوى دون التسبب في ظهور حبوب جديدة.', 
            en: '12-hour matte effect, instant dry touch, and maximum protection without triggering new breakouts.' 
        },
        active_ingredients: [
            { name: 'Airlicium™', concentration: { ar: 'بودرة ماصة', en: 'Absorbent Powder' }, role: { ar: 'امتصاص الزهم والعرق بشكل مستمر.', en: 'Continuous absorption of sebum and sweat.' } },
            { name: 'Mexoryl 400', concentration: { ar: 'SPF 50+', en: 'SPF 50+' }, role: { ar: 'حماية من الـ UVA الطويلة.', en: 'Ultra-long UVA protection.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً.', en: 'Daily.' },
        step_in_routine: { ar: 'الخطوة الأخيرة نهاراً.', en: 'Last AM step.' },
        application: { ar: 'يوزع على الوجه (يُرج الفلويد جيداً). مناسب جداً كقاعدة مكياج للبشرة الدهنية.', en: 'Distribute over the face (shake the fluid well). Excellent makeup base for oily skin.' },
        layering: { 
            do_not_mix_with: { ar: ['الكريمات الغنية والمرطبات الثقيلة (ستلغي تأثير الـ Matte).', 'Rich creams and heavy moisturizers (will cancel the Matte effect).'] }, 
            best_mixed_with: { ar: ['غسول إيفاكلار وسيرومات المعالجة الخفيفة.', 'Effaclar cleanser and light treatment serums.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، المعرضة للحبوب، واللمعان الشديد في الصيف.', en: 'Oily, acne-prone skin, and severe shine in summer.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'متوفر بقوامين: سائل (Fluid) وجل-كريم (Gel-Cream)، وكلاهما متوفر بنسخة ملونة (Tinted).', en: 'Available in 2 textures: Fluid and Gel-Cream, both available in Tinted versions.' }
    }
});

// [47] Anthelios Age Correct SPF50
deepProductsList.push({
    id: 'lrp_anthelios_age_correct', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس إيدج كوريكت (مضاد للشيخوخة)', en: 'Anthelios Age Correct SPF50 (Light / Tinted)' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'منتج هجين (واقي وعلاج). يحجب أشعة الشمس المسببة للتجاعيد، ويستخدم <span class="glossary-term" onclick="openGlossary(\'ce_act_complex\')">مركب CE-ACT</span> لاختراق الطبقات العميقة وملء التجاعيد وتقشير التصبغات الميتة.', 
            en: 'A hybrid product (Protection + Treatment). Blocks wrinkle-causing UV rays, and uses the <span class="glossary-term" onclick="openGlossary(\'ce_act_complex\')">CE-ACT Complex</span> to penetrate deep layers, plump wrinkles, and exfoliate dead pigmentation.' 
        },
        patient_benefit: { 
            ar: 'يقلل التجاعيد بنسبة 15% والبقع الداكنة بنسبة 26% خلال 4 أسابيع، ويرطب البشرة بعمق لمدة 24 ساعة.', 
            en: 'Reduces wrinkles by 15% and dark spots by 26% in 4 weeks, and deeply hydrates for 24 hours.' 
        },
        active_ingredients: [
            { name: 'Fragmented Hyaluronic Acid', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'ملء الخطوط الدقيقة وترطيب عميق.', en: 'Plumping fine lines and deep hydration.' } },
            { name: 'Niacinamide + PHE-Resorcinol', concentration: { ar: 'مكثف', en: 'Intense' }, role: { ar: 'تثبيط الميلانين وتفتيح التصبغات.', en: 'Inhibiting melanin and brightening pigmentation.' } },
            { name: 'LHA', concentration: { ar: 'مقشر دقيق', en: 'Micro-exfoliant' }, role: { ar: 'تجديد السطح.', en: 'Surface renewal.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة يومياً في الصباح.', en: 'Once daily in the morning.' },
        step_in_routine: { ar: 'كريم نهاري شامل (واقي + مرطب + علاج).', en: 'All-in-one day cream (SPF + Moisturizer + Treatment).' },
        application: { ar: 'يوضع على كامل الوجه والرقبة. يغني عن المرطب الصباحي لأغلب أنواع البشرة.', en: 'Apply to entire face and neck. Replaces AM moisturizer for most skin types.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول نهاراً.', 'Retinol during the day.'] }, 
            best_mixed_with: { ar: ['سيروم Hyalu B5 المسائي.', 'Hyalu B5 Serum in the PM.'] } 
        }
    },
    precautions: {
        indications: { ar: 'علامات تقدم السن، التجاعيد الدقيقة، البقع العمرية، والبهتان.', en: 'Signs of aging, fine wrinkles, age spots, and dullness.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'متوفر بنسخة يومية خفيفة (Daily Light Cream) ونسخة جل-كريم ملونة.', en: 'Available as a Daily Light Cream and a Tinted Gel-Cream.' }
    }
});
// ==========================================
// 💊 البلوك الثاني عشر (Block 12): LRP Anthelios (Final)
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['baicalin_antioxidant'] = {
    title: { ar: 'بايكالين (Baicalin) 🌿', en: 'Baicalin Antioxidant 🌿' },
    desc: { 
        ar: 'مضاد أكسدة بيولوجي قوي مستخلص من جذور (Scutellaria baicalensis). أثبتت الدراسات قدرته الفائقة على تحييد الجذور الحرة الناتجة عن الأشعة فوق البنفسجية الطويلة (UVA) وحماية الخلايا من التلف التأكسدي.', 
        en: 'A potent biological antioxidant extracted from Scutellaria baicalensis roots. Studies prove its superior ability to neutralize free radicals generated by UVA rays, protecting cells from oxidative damage.' 
    }
};

glossaryDict['pediatric_sun_charter'] = {
    title: { ar: 'ميثاق حماية الأطفال (Dermo-Pediatrics) 👶', en: 'Dermo-Pediatrics Charter 👶' },
    desc: { 
        ar: 'معايير صياغة صارمة من لاروش بوزيه لبشرة الأطفال غير المكتملة. تعتمد على تقليل عدد الفلاتر الكيميائية وزيادة تركيزها مع استخدام زبدة الشيا، لضمان أعلى مقاومة للماء (Water Resistant) بدون عطور أو بارابين.', 
        en: 'Strict formulation criteria by La Roche-Posay for immature children\'s skin. It relies on reducing the number of chemical filters while optimizing their concentration with Shea Butter, ensuring very high water resistance without fragrance or parabens.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [48] Anthelios UVMune 400 Hydrating Cream SPF 50+
deepProductsList.push({
    id: 'lrp_anthelios_uvmune_hydrating', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس UVMune 400 كريم مرطب', en: 'Anthelios UVMune 400 Hydrating Cream SPF 50+' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يوفر حماية قصوى باستخدام فلتر <span class="glossary-term" onclick="openGlossary(\'mexoryl_400\')">Mexoryl 400</span>، داخل قوام كريمي غني بالجلسرين والمياه الحرارية لتوفير ترطيب مكثف يستمر لـ 24 ساعة ومنع تبخر الماء السطحي.', 
            en: 'Provides ultimate protection using the <span class="glossary-term" onclick="openGlossary(\'mexoryl_400\')">Mexoryl 400</span> filter, within a creamy texture rich in Glycerin and Thermal Spring Water to provide intense 24h hydration and prevent transepidermal water loss.' 
        },
        patient_benefit: { 
            ar: 'يحمي البشرة الجافة والحساسة جداً من الشمس والشيخوخة، ويزيل الإحساس بالشد والتقشر طوال فترة التعرض للشمس.', 
            en: 'Protects very dry and sensitive skin from sun and aging, eliminating tightness and flaking throughout sun exposure.' 
        },
        active_ingredients: [
            { name: 'Mexoryl 400 + Netlock', concentration: { ar: 'SPF 50+', en: 'SPF 50+' }, role: { ar: 'حماية من أشعة UVA الطويلة جداً ومقاومة للماء.', en: 'Ultra-long UVA protection and water resistance.' } },
            { name: 'Glycerin', concentration: { ar: 'غني', en: 'Rich' }, role: { ar: 'ترطيب عميق وتنعيم الجلد.', en: 'Deep hydration and skin softening.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (تُكرر كل ساعتين عند التعرض المباشر).', en: 'Daily (reapply every 2 hours during direct exposure).' },
        step_in_routine: { ar: 'الخطوة النهارية الأخيرة.', en: 'Last daytime step.' },
        application: { ar: 'يوزع على الوجه والرقبة. قوام كريمي يذوب في البشرة بدون أثر أبيض.', en: 'Apply to face and neck. Creamy texture melts into the skin with no white cast.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم حمض الهيالورونيك (للبشرة شديدة الجفاف).'], en: ['Hyaluronic Acid serum (for extremely dry skin).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الجافة إلى الجافة جداً، البشرة الحساسة، وجفاف ما حول العينين.', en: 'Dry to very dry skin, sensitive skin, and peri-ocular dryness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن جداً حول العين (لا يسبب حرقان).', en: 'Very safe around the eyes (anti-stinging).' }
    }
});

// [49] Anthelios Anti-Shine Invisible Fresh Mist SPF 50+
deepProductsList.push({
    id: 'lrp_anthelios_mist', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس بخاخ منعش مضاد للمعان (XL Mist)', en: 'Anthelios Anti-Shine Invisible Fresh Mist SPF 50+' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'تكنولوجيا التوزيع الدقيق (Micro-diffusion) تنشر فلاتر الشمس كضباب خفيف جداً لا يلامس اليدين، مع جزيئات (Airlicium) لامتصاص الزهم وإطفاء اللمعان فوراً.', 
            en: 'Micro-diffusion technology disperses sun filters as an ultra-fine mist without hand contact, featuring Airlicium particles to absorb sebum and instantly mattify.' 
        },
        patient_benefit: { 
            ar: 'الحل الأمثل لتجديد واقي الشمس كل ساعتين دون إفساد المكياج أو الحاجة للمس الوجه بالأيدي، يعطي انتعاشاً وتأثيراً مطفأً.', 
            en: 'The perfect solution for reapplying sunscreen every 2 hours without ruining makeup or touching the face, providing freshness and a matte effect.' 
        },
        active_ingredients: [
            { name: 'Broad Spectrum Filters', concentration: { ar: 'SPF 50', en: 'SPF 50' }, role: { ar: 'حماية من أشعة الشمس.', en: 'Sun protection.' } },
            { name: 'Airlicium™', concentration: { ar: 'جزيئات ذكية', en: 'Smart Particles' }, role: { ar: 'التحكم في العرق واللمعان السطحي.', en: 'Controls sweat and surface shine.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (لتجديد الحماية خلال اليوم).', en: 'As needed (for reapplication during the day).' },
        step_in_routine: { ar: 'تجديد الحماية نهاراً.', en: 'Daytime reapplication.' },
        application: { ar: 'يُرج جيداً. يُرش على بعد 15 سم من الوجه بشكل بحركة (Z) والعيون مغلقة. لا يُدلك باليد.', en: 'Shake well. Spray 15cm from the face in a Z-motion with eyes closed. Do not rub.' },
        layering: { 
            do_not_mix_with: { ar: ['الرش المباشر داخل العين أو الاستنشاق.'], en: ['Direct spraying into eyes or inhalation.'] }, 
            best_mixed_with: { ar: ['مثالي فوق المكياج بالكامل.'], en: ['Ideal completely over makeup.'] } 
        }
    },
    precautions: {
        indications: { ar: 'جميع أنواع البشرة، البشرة المتهيجة من حرارة الشمس، وتجديد الواقي للمحجبات وفوق المكياج.', en: 'All skin types, heat-irritated skin, and sunscreen reapplication over makeup or for Hijabis.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'سريع الجفاف في 3 ثوانٍ.', en: 'Dries quickly in 3 seconds.' }
    }
});

// [50] Anthelios Dermo-Pediatrics / Baby Sun Lines
deepProductsList.push({
    id: 'lrp_anthelios_pediatrics', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس ديرمو-بيدياتريكس (واقي أطفال/رضع)', en: 'Anthelios Dermo-Pediatrics / Baby Lotion SPF 50+' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن ليناسب الأطفال', en: 'Balanced for pediatric skin' },
        mechanism: { 
            ar: 'صُمم وفقاً لـ <span class="glossary-term" onclick="openGlossary(\'pediatric_sun_charter\')">ميثاق حماية الأطفال</span>؛ يوفر حماية واسعة الطيف ومستقرة ضوئياً، مع زبدة الشيا لترميم الحاجز الجلدي الرقيق للأطفال الذي يكون أكثر عرضة لأضرار الأشعة فوق البنفسجية.', 
            en: 'Formulated per the <span class="glossary-term" onclick="openGlossary(\'pediatric_sun_charter\')">Dermo-Pediatrics Charter</span>; provides broad-spectrum, photo-stable protection, with Shea Butter to repair children\'s delicate skin barrier, which is more vulnerable to UV damage.' 
        },
        patient_benefit: { 
            ar: 'يحمي بشرة الأطفال (والرضع في الإصدار الخاص Baby) من حروق الشمس وتلف الخلايا المستقبلي، شديد المقاومة للماء، الرمل، والعرق.', 
            en: 'Protects children\'s skin (and infants in the Baby version) from sunburns and future cellular damage, highly resistant to water, sand, and sweat.' 
        },
        active_ingredients: [
            { name: 'Optimized Filter System', concentration: { ar: 'SPF 50+', en: 'SPF 50+' }, role: { ar: 'حماية متقدمة ومستقرة للأطفال.', en: 'Advanced, stable pediatric protection.' } },
            { name: 'Shea Butter', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تغذية وحماية الغلاف الدهني.', en: 'Nourishes and protects the lipid film.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'قبل التعرض للشمس ويُجدد باستمرار.', en: 'Before sun exposure and reapply frequently.' },
        step_in_routine: { ar: 'حماية الجسم والوجه.', en: 'Face and body protection.' },
        application: { ar: 'يوضع بسخاء على بشرة الطفل. (إصدار Baby يُستخدم للمناطق غير المغطاة للرضع تحت 3 سنوات في الظل).', en: 'Apply generously to child\'s skin. (Baby version used on uncovered areas of infants under 3 years in the shade).' },
        layering: { 
            do_not_mix_with: { ar: ['التعرض المباشر والطويل للشمس للرضع (ممنوع طبياً).'], en: ['Direct, prolonged sun exposure for infants (medically prohibited).'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'بشرة الأطفال الحساسة، بشرة الرضع المعرضة للتبقع التأتبي (في إصدار Baby Lotion).', en: 'Sensitive children\'s skin, atopic-prone infant skin (in Baby Lotion version).' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من العطور. متوفر كلوشن وبخاخ (Spray).', en: 'Fragrance-free. Available as lotion and spray.' }
    }
});

// [51] Anthelios UVMune 400 Anti-Dark Spot Fluid SPF 50+
deepProductsList.push({
    id: 'lrp_anthelios_anti_dark_spot', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس UVMune 400 مضاد للتصبغات', en: 'Anthelios UVMune 400 Anti-Dark Spot Fluid SPF 50+' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يدمج قوة فلتر <span class="glossary-term" onclick="openGlossary(\'mexoryl_400\')">Mexoryl 400</span> المضاد للكلف، مع (Procerad) لمنع التصبغات الالتهابية، والنياسيناميد لتوحيد لون البشرة وتقليل نقل الميلانين للخلايا السطحية.', 
            en: 'Integrates the power of the anti-melasma <span class="glossary-term" onclick="openGlossary(\'mexoryl_400\')">Mexoryl 400</span> filter with Procerad to prevent inflammatory pigmentation, and Niacinamide to even skin tone and reduce melanin transfer to surface cells.' 
        },
        patient_benefit: { 
            ar: 'علاج وقائي ويومي يمنع البقع الداكنة الجديدة، ويساعد في تفتيح التصبغات الموجودة (الكلف والنمش) مع توفير حماية غير مرئية.', 
            en: 'Preventive daily care that blocks new dark spots and helps brighten existing pigmentation (Melasma & freckles) while providing invisible protection.' 
        },
        active_ingredients: [
            { name: 'Procerad + Niacinamide', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'مضاد للالتهاب وعلاج للتصبغ.', en: 'Anti-inflammatory and pigmentation treatment.' } },
            { name: 'Mexoryl 400', concentration: { ar: 'SPF 50+', en: 'SPF 50+' }, role: { ar: 'حجب الأشعة المحفزة للميلانين.', en: 'Blocks melanin-stimulating rays.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (صباحاً).', en: 'Daily (AM).' },
        step_in_routine: { ar: 'علاج ووقاية نهارية.', en: 'Daytime treatment and prevention.' },
        application: { ar: 'يُرج جيداً قبل الاستخدام، يوضع بسخاء على الوجه والرقبة.', en: 'Shake well before use, apply generously to face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم نياسيناميد 10 مسائياً.', 'Niacinamide 10 Serum in the PM.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة المعرضة لفرط التصبغ، الكلف المرتبط بالحمل، وعلامات ما بعد الالتهاب.', en: 'Hyperpigmentation-prone skin, pregnancy-related melasma, and post-inflammatory marks.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره سريرياً على التصبغات.', en: 'Clinically tested on pigmentations.' }
    }
});
// ==========================================
// 💊 البلوك الثالث عشر (Block 13): La Roche-Posay - Dermatological Serums
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['ha_dual_weight'] = {
    title: { ar: 'حمض الهيالورونيك المزدوج 💧', en: 'Dual-Weight Hyaluronic Acid 💧' },
    desc: { 
        ar: 'دمج بين جزيئات ذات وزن جزيئي عالي (لترطيب السطح وتنعيمه فوراً) وجزيئات ذات وزن جزيئي منخفض (لاختراق طبقة الإيپيديرمس وملء التجاعيد الدقيقة من الداخل وتحفيز الكولاجين).', 
        en: 'A combination of high molecular weight HA (to instantly hydrate and smooth the surface) and low molecular weight HA (to penetrate the epidermis, plump fine lines from within, and stimulate collagen).' 
    }
};

glossaryDict['gradual_retinol'] = {
    title: { ar: 'الريتينول المتدرج (Gradual Release) 🧬', en: 'Gradual Release Retinol 🧬' },
    desc: { 
        ar: 'تقنية تدمج بين الريتينول النقي (للفعالية الفورية) والريتينول بطيء التحرر. هذا يضمن إيصال الجرعة التصحيحية تدريجياً للجلد لتجنب التهيج والاحمرار المعتاد المرتبط بمشتقات فيتامين أ.', 
        en: 'A technology combining Pure Retinol (for instant efficacy) and Gradual Release Retinol. This ensures the corrective dose is delivered progressively to the skin, avoiding the usual irritation and redness associated with Vitamin A derivatives.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [52] Hyalu B5 Serum
deepProductsList.push({
    id: 'lrp_hyalu_b5', brandId: 'laroche', familyId: 'serums', brand: 'La Roche-Posay',
    name: { ar: 'هيالو B5 سيروم (ترطيب وملء)', en: 'Hyalu B5 Serum' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'ha_dual_weight\')">حمض الهيالورونيك المزدوج</span> لملء التجاعيد، مع تركيز عالٍ من فيتامين B5 لترميم حاجز الجلد التالف، وماديكاسوسيد لتعزيز التجديد الخلوي.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'ha_dual_weight\')">Dual-Weight Hyaluronic Acid</span> to plump wrinkles, with a high concentration of Vitamin B5 to repair the damaged skin barrier, and Madecassoside to boost cellular renewal.' 
        },
        patient_benefit: { 
            ar: 'يعيد حجم وامتلاء البشرة (Plumping effect) خلال 4 ساعات، يقلل التجاعيد بشكل ملحوظ، ويعالج جفاف وبهتان البشرة المجهدة.', 
            en: 'Restores skin volume and plumping effect within 4 hours, visibly reduces wrinkles, and treats dryness and dullness of stressed skin.' 
        },
        active_ingredients: [
            { name: 'Dual Hyaluronic Acid', concentration: { ar: 'ترطيب عميق', en: 'Deep Hydration' }, role: { ar: 'ملء الخطوط الدقيقة وجذب الماء.', en: 'Plumping fine lines and binding water.' } },
            { name: 'Vitamin B5 (Panthenol)', concentration: { ar: '5%', en: '5%' }, role: { ar: 'ترميم الغلاف المائي الدهني.', en: 'Repairing the hydrolipidic film.' } },
            { name: 'Madecassoside', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تحفيز الكولاجين وتهدئة الجلد.', en: 'Stimulating collagen and soothing the skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'السيروم الأساسي للترطيب.', en: 'Core hydrating serum.' },
        application: { ar: 'توضع 3-4 قطرات على وجه ورقبة رطبين قليلاً (Damp skin) لتعزيز حبس الماء.', en: 'Apply 3-4 drops to a slightly damp face and neck to enhance water locking.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['جميع السيرومات النشطة (مثل الريتينول وفيتامين سي) لتقليل تهيجها.', 'All active serums (like Retinol & Vit C) to buffer their irritation.'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد، فقدان الحجم والمرونة، البشرة المجهدة، وما بعد الإجراءات التجميلية السطحية.', en: 'Wrinkles, loss of volume and elasticity, tired skin, and post-superficial aesthetic procedures.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام جل مائي سميك (Aqua-gel).', en: 'Thick aqua-gel texture.' }
    }
});

// [53] Retinol B3 Serum
deepProductsList.push({
    id: 'lrp_retinol_b3', brandId: 'laroche', familyId: 'serums', brand: 'La Roche-Posay',
    name: { ar: 'ريتينول B3 سيروم (مكافحة الشيخوخة)', en: 'Retinol B3 Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن لتقليل التهيج', en: 'Balanced to minimize irritation' },
        mechanism: { 
            ar: 'يستهدف الشيخوخة العميقة بفضل <span class="glossary-term" onclick="openGlossary(\'gradual_retinol\')">الريتينول المتدرج</span> لتحفيز الكولاجين بأمان، بينما يقوم النياسيناميد (Vit B3) بتهدئة الالتهاب المصاحب للتقشير وحماية حاجز الجلد.', 
            en: 'Targets deep aging via <span class="glossary-term" onclick="openGlossary(\'gradual_retinol\')">Gradual Release Retinol</span> to safely stimulate collagen, while Niacinamide (Vit B3) soothes peeling-induced inflammation and protects the skin barrier.' 
        },
        patient_benefit: { 
            ar: 'يصحح التجاعيد العميقة، يوحد لون البشرة، يقلل من التصبغات الضوئية، ومصمم خصيصاً ليكون محتملاً للبشرة الحساسة.', 
            en: 'Corrects deep wrinkles, evens skin tone, reduces photo-pigmentation, and is specifically formulated to be tolerated by sensitive skin.' 
        },
        active_ingredients: [
            { name: 'Pure + Gradual Retinol', concentration: { ar: '0.3%', en: '0.3%' }, role: { ar: 'تسريع التجديد الخلوي وتنعيم التجاعيد.', en: 'Accelerating cellular turnover and smoothing wrinkles.' } },
            { name: 'Niacinamide (Vitamin B3)', concentration: { ar: '2%', en: '2%' }, role: { ar: 'تعويض التهيج وبناء السيراميد.', en: 'Compensating irritation and synthesizing ceramides.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مساءً فقط (يُفضل البدء بـ 3 ليالٍ أسبوعياً ثم زيادتها).', en: 'PM only (Best to start 3 nights/week then increase).' },
        step_in_routine: { ar: 'السيروم العلاجي الليلي.', en: 'PM therapeutic serum.' },
        application: { ar: 'توضع 3 قطرات على وجه جاف تماماً بعد الغسول.', en: 'Apply 3 drops to a completely dry face after cleansing.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات الأحماض (AHA/BHA) أو فيتامين سي في نفس الروتين.', 'Acid exfoliants (AHA/BHA) or Vit C in the same routine.'] }, 
            best_mixed_with: { ar: ['مرطب غني (مثل Lipikar أو Toleriane) وواقي شمس إلزامي نهاراً.', 'Rich moisturizer (like Lipikar or Toleriane) and mandatory daytime SPF.'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد العميقة، الشيخوخة المبكرة، التصبغات، وعدم تجانس نسيج الجلد.', en: 'Deep wrinkles, premature aging, pigmentation, and uneven skin texture.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'ممنوع تماماً أثناء الحمل والرضاعة. يتأكسد بالضوء (يحفظ في مكان مظلم).', en: 'Strictly contraindicated during pregnancy and lactation. Oxidizes with light (store in a dark place).' }
    }
});

// [54] Pure Vitamin C10 Serum
deepProductsList.push({
    id: 'lrp_vitamin_c10', brandId: 'laroche', familyId: 'serums', brand: 'La Roche-Posay',
    name: { ar: 'فيتامين C10 سيروم (للنضارة)', en: 'Pure Vitamin C10 Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً (~5.5 للتحمل)', en: 'Slightly acidic (~5.5 for tolerance)' },
        mechanism: { 
            ar: 'يوفر 10% من حمض الأسكوربيك النقي كمضاد أكسدة فائق، مقترن بحمض الساليسيليك لتقشير الخلايا الميتة السطحية لتسهيل اختراق الفيتامين، والنيوروسينسين لمنع التحسس.', 
            en: 'Delivers 10% Pure Ascorbic Acid as a super antioxidant, paired with Salicylic Acid to exfoliate surface dead cells to facilitate vitamin penetration, and Neurosensine to prevent sensitization.' 
        },
        patient_benefit: { 
            ar: 'يمنح إشراقة فورية وتوهجاً للبشرة الباهتة، يحمي من أضرار التلوث والشمس، ويحسن مرونة الجلد.', 
            en: 'Provides instant radiance and glow to dull skin, protects from pollution and sun damage, and improves skin elasticity.' 
        },
        active_ingredients: [
            { name: 'Pure Vitamin C (Ascorbic Acid)', concentration: { ar: '10%', en: '10%' }, role: { ar: 'تحييد الجذور الحرة وتحفيز الكولاجين.', en: 'Neutralizing free radicals and stimulating collagen.' } },
            { name: 'Salicylic Acid', concentration: { ar: 'مقشر', en: 'Exfoliant' }, role: { ar: 'تنعيم السطح وتوحيد اللون.', en: 'Smoothing the surface and evening tone.' } },
            { name: 'Neurosensine', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'إلغاء التفاعل التحسسي للجلد.', en: 'Canceling the skin\'s allergic reactivity.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة يومياً في الصباح.', en: 'Once daily in the AM.' },
        step_in_routine: { ar: 'سيروم مضاد للأكسدة (الصباح).', en: 'Antioxidant serum (AM).' },
        application: { ar: 'يوضع على الوجه والرقبة قبل واقي الشمس. لونه المائل للبرتقالي الفاتح طبيعي.', en: 'Apply to face and neck before sunscreen. Its light orange tint is natural.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول أو مقشرات الأحماض القوية في نفس الوقت.', 'Retinol or strong acid exfoliants at the same time.'] }, 
            best_mixed_with: { ar: ['واقي الشمس (Anthelios) لتعزيز الحماية ضد التأكسد الضوئي.', 'Sunscreen (Anthelios) to boost protection against photo-oxidation.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الباهتة، الإرهاق، التجاعيد الخفيفة، والوقاية اليومية من المؤثرات البيئية.', en: 'Dull skin, fatigue, fine wrinkles, and daily prevention of environmental stressors.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'حمض الساليسيليك هنا بتركيز منخفض جداً ويُعتبر آمناً طبياً للحوامل.', en: 'Salicylic Acid here is at a very low concentration and is medically considered safe for pregnancy.' }
    }
});

// [55] Niacinamide 10 Serum
deepProductsList.push({
    id: 'lrp_niacinamide_10', brandId: 'laroche', familyId: 'serums', brand: 'La Roche-Posay',
    name: { ar: 'نياسيناميد 10 سيروم (للتصبغات)', en: 'Niacinamide 10 Serum' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعالج البقع الداكنة من المنشأ؛ تركيز 10% يمنع انتقال صبغة الميلانين إلى سطح الجلد، بينما يعمل الـ (PHE-Resorcinol) على تفتيح التصبغات الموجودة، ويرمم حاجز البشرة المتضرر.', 
            en: 'Treats dark spots at the origin; 10% concentration prevents melanin transfer to the skin surface, while PHE-Resorcinol brightens existing pigmentation, and repairs the damaged skin barrier.' 
        },
        patient_benefit: { 
            ar: 'يخفف البقع البنية، علامات حب الشباب، ويوحد لون البشرة المتبقع بفعالية وأمان تام حتى للبشرة الحساسة.', 
            en: 'Fades brown spots, acne marks, and evens out patchy skin tone effectively and safely, even for sensitive skin.' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: { ar: '10%', en: '10%' }, role: { ar: 'تثبيط نقل الميلانين ومضاد قوي للالتهاب.', en: 'Inhibiting melanin transfer and strong anti-inflammatory.' } },
            { name: 'PHE-Resorcinol', concentration: { ar: 'مفتح', en: 'Brightener' }, role: { ar: 'تقليل البقع الداكنة بشكل ملحوظ.', en: 'Visibly reducing dark spots.' } },
            { name: 'Hyaluronic Acid', concentration: { ar: 'مرطب', en: 'Hydrating' }, role: { ar: 'دعم ترطيب ونضارة الجلد.', en: 'Supporting skin hydration and radiance.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'السيروم العلاجي للتفتيح.', en: 'Therapeutic brightening serum.' },
        application: { ar: 'توضع 3-4 قطرات على الوجه، الرقبة، واليدين إذا لزم الأمر.', en: 'Apply 3-4 drops to the face, neck, and hands if necessary.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['جميع المكونات (آمن جداً للدمج مع الريتينول لتقليل التهابه).', 'All ingredients (very safe to mix with Retinol to buffer its inflammation).'] } 
        }
    },
    precautions: {
        indications: { ar: 'التصبغات، الكلف، آثار الحبوب، البشرة الباهتة وتفاوت لون البشرة.', en: 'Pigmentation, melasma, acne marks, dull skin, and uneven skin tone.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام حليبي خفيف.', en: 'Light milky texture.' }
    }
});

// [56] Hyalu B5 Eye Serum
deepProductsList.push({
    id: 'lrp_hyalu_b5_eye', brandId: 'laroche', familyId: 'serums', brand: 'La Roche-Posay',
    name: { ar: 'هيالو B5 سيروم محيط العين', en: 'Hyalu B5 Eye Serum' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن للعين', en: 'Balanced for Eye Contour' },
        mechanism: { 
            ar: 'يجمع حمض الهيالورونيك المزدوج لملء التجاعيد الرقيقة، مع فيتامين B5 لترميم الجلد الرقيق حول العين، والكافيين لتنشيط الدورة الدموية الدقيقة وتقليل الهالات.', 
            en: 'Combines dual HA to plump fine lines, Vitamin B5 to repair the thin skin around the eye, and Caffeine to stimulate micro-circulation and reduce dark circles.' 
        },
        patient_benefit: { 
            ar: 'يرطب محيط العين فوراً، يقلل الانتفاخات (Bags) والهالات السوداء، ويخفي خطوط الجفاف الدقيقة بفضل الروليت المعدني المبرد.', 
            en: 'Instantly hydrates the eye contour, reduces bags and dark circles, and hides fine dehydration lines thanks to the cooling metal roller.' 
        },
        active_ingredients: [
            { name: 'Hyaluronic Acid + B5', concentration: { ar: 'ترطيب وملء', en: 'Hydration & Plumping' }, role: { ar: 'تنعيم وتجديد محيط العين.', en: 'Smoothing and replenishing the eye contour.' } },
            { name: 'Caffeine', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تصريف السوائل المحتبسة وتخفيف الهالات.', en: 'Draining retained fluids and lightening dark circles.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'عناية محيط العين.', en: 'Eye contour care.' },
        application: { ar: 'يُدلك باستخدام الكرة المعدنية (Roller) من الداخل للخارج لتنشيط التصريف اللمفاوي.', en: 'Massage using the metal roller from the inside out to stimulate lymphatic drainage.' },
        layering: { 
            do_not_mix_with: { ar: ['دخول المنتج داخل العين.', 'Product entering the eye.'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد الدقيقة، الهالات، والانتفاخات الصباحية حول العين.', en: 'Fine wrinkles, dark circles, and morning puffiness around the eyes.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره من قبل أطباء العيون.', en: 'Ophthalmologically tested.' }
    }
});
// ==========================================
// 💊 البلوك الرابع عشر (Block 14): La Roche-Posay - Cicaplast Family
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['tribioma'] = {
    title: { ar: 'تريبيوما (Tribioma) 🦠', en: 'Tribioma™ Prebiotic Complex 🦠' },
    desc: { 
        ar: 'مركب بريبيوتيك حصري من لاروش بوزيه. يعمل على إعادة التوازن لميكروبيوم البشرة المتضررة والمجروحة، مما يمنع انتشار البكتيريا الممرضة ويوفر بيئة مثالية لالتئام الجلد بسرعة وبدون ندبات واضحة.', 
        en: 'An exclusive prebiotic complex by La Roche-Posay. It rebalances the microbiome of damaged and wounded skin, preventing the spread of pathogenic bacteria and providing an optimal environment for fast, scar-free healing.' 
    }
};

glossaryDict['mp_lipids'] = {
    title: { ar: 'ليبيدات MP (MP-Lipids) 🧬', en: 'MP-Lipids 🧬' },
    desc: { 
        ar: 'جيل جديد من الدهون التي تحاكي التركيب البيولوجي للجلد. تحفز إنتاج عوامل الترطيب الطبيعية والبروتينات الضرورية لإعادة بناء حاجز الحماية من الداخل.', 
        en: 'A new generation of biomimetic lipids. They stimulate the production of natural moisturizing factors and essential proteins to rebuild the protective barrier from within.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [57] Cicaplast Baume B5+
deepProductsList.push({
    id: 'lrp_cicaplast_baume_b5_plus', brandId: 'laroche', familyId: 'cicaplast', brand: 'La Roche-Posay',
    name: { ar: 'سيكابلاست بوم B5+ (بلسم مرمم مكثف)', en: 'Cicaplast Baume B5+ Ultra-Repairing Balm' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يوفر بيئة مثالية لالتئام الجلد عبر 3 محاور: النحاس/الزنك لتعقيم الجرح، <span class="glossary-term" onclick="openGlossary(\'tribioma\')">تريبيوما</span> لضبط الميكروبيوم، والبانثينول (5%) لتهدئة الألم وترميم الحاجز فوراً.', 
            en: 'Provides an optimal healing environment via 3 axes: Copper/Zinc for sanitization, <span class="glossary-term" onclick="openGlossary(\'tribioma\')">Tribioma</span> to balance the microbiome, and Panthenol (5%) to soothe pain and instantly repair the barrier.' 
        },
        patient_benefit: { 
            ar: 'بلسم طوارئ متعدد الاستخدامات. يعالج التسلخات، الحروق السطحية، تشققات الجلد، والجفاف العنيف، ويمنع تكون العلامات.', 
            en: 'A multi-purpose SOS rescue balm. Treats diaper rash, superficial burns, skin cracks, and severe dryness, preventing mark formation.' 
        },
        active_ingredients: [
            { name: 'Panthenol (Vitamin B5)', concentration: { ar: '5%', en: '5%' }, role: { ar: 'تسكين فوري للألم وتسريع الالتئام.', en: 'Instant pain relief and accelerating healing.' } },
            { name: 'Madecassoside + Tribioma', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تجديد الخلايا وضبط بكتيريا الجلد.', en: 'Cell renewal and skin bacteria regulation.' } },
            { name: 'Zinc & Copper & Manganese', concentration: { ar: 'منقي', en: 'Purifying' }, role: { ar: 'مضاد للبكتيريا المسببة للعدوى.', en: 'Anti-bacterial to prevent infection.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (أو حسب الحاجة).', en: 'Twice daily (or as needed).' },
        step_in_routine: { ar: 'الترطيب العلاجي أو العناية الموضعية.', en: 'Therapeutic hydration or targeted care.' },
        application: { ar: 'توضع طبقة سخية على الجلد النظيف والجاف. يمكن وضعه على الجسم، الوجه، والشفاه.', en: 'Apply a generous layer to clean, dry skin. Can be applied to body, face, and lips.' },
        layering: { 
            do_not_mix_with: { ar: ['تطبيقه على جروح مفتوحة تنزف بشدة.'], en: ['Applying on heavily bleeding, open wounds.'] }, 
            best_mixed_with: { ar: ['الريتينول أو المقشرات (باستخدام تقنية الساندويتش لتخفيف التهيج).'], en: ['Retinol or exfoliants (using the sandwich method to buffer irritation).'] } 
        }
    },
    precautions: {
        indications: { ar: 'تسلخات الحفاض، الليزر، التقشير الكيميائي، الحروق السطحية، ولدغات الحشرات.', en: 'Diaper rash, post-laser/peels, superficial burns, and insect bites.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن تماماً للرضع والأطفال. متوفر بأحجام 40 مل و 100 مل.', en: 'Completely safe for babies and children. Available in 40ml and 100ml sizes.' }
    }
});

// [58] Cicaplast Baume B5+ SPF 50
deepProductsList.push({
    id: 'lrp_cicaplast_baume_spf50', brandId: 'laroche', familyId: 'cicaplast', brand: 'La Roche-Posay',
    name: { ar: 'سيكابلاست بوم B5+ مع واقي شمس SPF 50', en: 'Cicaplast Baume B5+ SPF 50' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يجمع قوة الترميم في سيكابلاست مع فلاتر حماية عالية (SPF50) ومركب (Procerad) لمنع التصبغ (Hyperpigmentation) الذي يصيب الندبات والجروح عند تعرضها للأشعة فوق البنفسجية.', 
            en: 'Combines Cicaplast\'s repairing power with high UV filters (SPF50) and Procerad to prevent hyperpigmentation of scars and wounds when exposed to UV rays.' 
        },
        patient_benefit: { 
            ar: 'يرمم الجلد التالف ويحميه في نفس الوقت من تكون الندبات الداكنة أو البقع الحمراء والبنية الدائمة.', 
            en: 'Repairs damaged skin while simultaneously protecting it from forming permanent dark scars or red/brown marks.' 
        },
        active_ingredients: [
            { name: 'Broad Spectrum Filters', concentration: { ar: 'SPF 50', en: 'SPF 50' }, role: { ar: 'درع حماية ضد التصبغ الضوئي.', en: 'Shield against photo-pigmentation.' } },
            { name: 'Procerad', concentration: { ar: 'سيراميد مهدئ', en: 'Soothing Ceramide' }, role: { ar: 'منع علامات ما بعد الالتهاب.', en: 'Preventing Post-Inflammatory marks.' } },
            { name: 'Panthenol (B5)', concentration: { ar: '5%', en: '5%' }, role: { ar: 'ترميم وتسكين.', en: 'Repairing and soothing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'نهاراً (ويُجدد عند الحاجة).', en: 'Daytime (reapply as needed).' },
        step_in_routine: { ar: 'علاج وحماية نهارية للندبات.', en: 'Daytime scar treatment & protection.' },
        application: { ar: 'يوضع على المنطقة المعرضة للشمس (الوشم، الندبات، الخدوش) قبل الخروج.', en: 'Apply to the sun-exposed area (tattoos, scars, scratches) before going out.' },
        layering: { 
            do_not_mix_with: { ar: ['الاستخدام الليلي (يحتوي على فلاتر شمس).'], en: ['Nighttime use (contains sun filters).'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'الندبات الحديثة، الوشم (Tattoos)، ما بعد العمليات الجراحية، والإجراءات التجميلية عند الخروج نهاراً.', en: 'Fresh scars, tattoos, post-surgery, and aesthetic procedures when going out in the daytime.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يوضع على الجروح غير الملتئمة.', en: 'Do not apply to unhealed wounds.' }
    }
});

// [59] Cicaplast Gel B5
deepProductsList.push({
    id: 'lrp_cicaplast_gel_b5', brandId: 'laroche', familyId: 'cicaplast', brand: 'La Roche-Posay',
    name: { ar: 'سيكابلاست جل B5 (مسرع التئام ومُدلك)', en: 'Cicaplast Gel B5 Pro-Recovery' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'قوام سيليكوني غير مرئي يسمح بتدليك الندبات (Pro-massage texture). يسرع تجديد الخلايا بفضل الهيالورونيك والبانثينول، ويشكل غشاء يسمح بتنفس الجلد ويحميه من التلوث.', 
            en: 'An invisible silicone texture that allows scar massaging (Pro-massage). Accelerates cell renewal via HA and Panthenol, forming a breathable film to protect from pollution.' 
        },
        patient_benefit: { 
            ar: 'مثالي لتسطيح الندبات المرتفعة بعد الغرز الجراحية، يلطف الجلد بشدة بعد الليزر والتقشير دون ترك طبقة بيضاء مرئية.', 
            en: 'Ideal for flattening raised scars post-stitches, intensely soothes post-laser/peels without leaving a visible white cast.' 
        },
        active_ingredients: [
            { name: 'Silicone + Hyaluronic Acid', concentration: { ar: 'عازل مرطب', en: 'Hydrating Isolator' }, role: { ar: 'تسهيل تدليك الندبة وتحسين مظهرها.', en: 'Facilitating scar massage and improving its appearance.' } },
            { name: 'Panthenol + Madecassoside', concentration: { ar: '5%', en: '5%' }, role: { ar: 'إصلاح البشرة وتسكين الشد.', en: 'Epidermal repair and soothing tightness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'العلاج الموضعي (مساج للندبة).', en: 'Targeted treatment (Scar massage).' },
        application: { ar: 'بعد إزالة الغرز الجراحية: يُدلك الجل برفق للمساعدة في تسطيح الندبة.', en: 'Post-stitches removal: massage the gel gently to help flatten the scar.' },
        layering: { 
            do_not_mix_with: { ar: ['وضعه على جرح لا يزال ينزف أو غير مغلق بالكامل.'], en: ['Applying on a bleeding or not fully closed wound.'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'ما بعد الغرز الجراحية، الليزر السطحي، والندبات المرتفعة (للوجه والشفاه).', en: 'Post-stitches, superficial laser, and raised scars (for face and lips).' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام شفاف وغير دبق (Invisible & Non-sticky).', en: 'Invisible and non-sticky texture.' }
    }
});

// [60] Cicaplast Levres (Lips)
deepProductsList.push({
    id: 'lrp_cicaplast_lips', brandId: 'laroche', familyId: 'cicaplast', brand: 'La Roche-Posay',
    name: { ar: 'سيكابلاست للشفاه (حاجز مرمم)', en: 'Cicaplast Lips Barrier Repairing Balm' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يخلق حاجزاً غشائياً (Film-forming) لعزل الشفاه عن اللعاب والعوامل القاسية، ويرمم الغشاء المخاطي من الداخل باستخدام <span class="glossary-term" onclick="openGlossary(\'mp_lipids\')">ليبيدات MP</span> والبانثينول.', 
            en: 'Creates a film-forming barrier to isolate lips from saliva and harsh agents, and repairs the mucosa from within using <span class="glossary-term" onclick="openGlossary(\'mp_lipids\')">MP-Lipids</span> and Panthenol.' 
        },
        patient_benefit: { 
            ar: 'يعالج الشقوق العميقة ونزيف الشفاه المرتبط بعلاجات حب الشباب المفرطة، ويوفر راحة فورية.', 
            en: 'Heals deep cracks and bleeding lips associated with extreme acne treatments, providing instant comfort.' 
        },
        active_ingredients: [
            { name: 'Panthenol', concentration: { ar: '5%', en: '5%' }, role: { ar: 'تهدئة التشققات المؤلمة.', en: 'Soothing painful cracks.' } },
            { name: 'MP-Lipids', concentration: { ar: 'مرمم عميق', en: 'Deep Restorer' }, role: { ar: 'إعادة بناء الحاجز الطبيعي للشفاه.', en: 'Rebuilding the natural lip barrier.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'كلما لزم الأمر.', en: 'As often as necessary.' },
        step_in_routine: { ar: 'عناية يومية بالشفاه.', en: 'Daily lip care.' },
        application: { ar: 'يطبق مباشرة على الشفاه ومحيطها.', en: 'Apply directly to lips and contours.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['أدوية الروكوتان (كعلاج مصاحب أساسي).'], en: ['Accutane medication (as essential companion care).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الشفاه شديدة الجفاف، المتشققة، وحول الفم المتهيج.', en: 'Severely dry, chapped lips, and irritated peri-oral area.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من العطور، غير مرئي ومناسب للأطفال.', en: 'Fragrance-free, invisible, and suitable for children.' }
    }
});

// [61] Cicaplast Mains (Hands)
deepProductsList.push({
    id: 'lrp_cicaplast_mains', brandId: 'laroche', familyId: 'cicaplast', brand: 'La Roche-Posay',
    name: { ar: 'سيكابلاست لليدين (كريم مرمم)', en: 'Cicaplast Mains Barrier Repairing Hand Cream' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'تركيبة غنية جداً بالجلسرين والنياسيناميد لتشكيل حاجز غير مرئي مضاد للاحتكاك ومقاوم للغسيل المتكرر، لعلاج تلف بشرة اليدين الناتج عن المواد الكيميائية والعمل اليدوي.', 
            en: 'A formula ultra-rich in Glycerin and Niacinamide forming an invisible anti-friction barrier resistant to frequent washing, treating hand damage from chemicals and manual labor.' 
        },
        patient_benefit: { 
            ar: 'يصلح الأيدي المجهدة والمتشققة، يمتص بسرعة فائقة دون أن يترك ملمساً دهنياً يعيق العمل.', 
            en: 'Repairs overworked and cracked hands, absorbing ultra-fast without leaving a greasy residue that hinders work.' 
        },
        active_ingredients: [
            { name: 'Glycerin', concentration: { ar: '30%', en: '30%' }, role: { ar: 'طبقة عازلة فائقة الترطيب.', en: 'Ultra-hydrating occlusive layer.' } },
            { name: 'Niacinamide', concentration: { ar: '4%', en: '4%' }, role: { ar: 'تخفيف التهاب واحمرار الأيدي.', en: 'Reducing hand inflammation and redness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (خاصة بعد غسل اليدين).', en: 'As needed (especially after hand washing).' },
        step_in_routine: { ar: 'عناية الأيدي المتضررة.', en: 'Damaged hand care.' },
        application: { ar: 'يُدلك على اليدين حتى يمتص. يمكن استئناف العمل فوراً.', en: 'Massage onto hands until absorbed. Work can be resumed immediately.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'الأيدي شديدة الجفاف، التالفة، المهن التي تتطلب غسيل متكرر، وإكزيما اليدين.', en: 'Severely dry, damaged hands, professions requiring frequent washing, and hand eczema.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مقاوم للاحتكاك والغسيل المتكرر.', en: 'Friction and frequent-wash resistant.' }
    }
});
