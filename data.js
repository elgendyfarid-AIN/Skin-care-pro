// ==========================================
// 🏥 Skin Care Pro - Clinical Database
// النسخة السريرية المنقحة (V2.0) - خالية من الأخطاء
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
    name: { ar: 'سينسيبيو H2O ميسيلار', en: 'Sensibio H2O Micellar Water' }, image: "placeholder.png", potency: 1, 
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
    name: { ar: 'سينسيبيو جل موسان (غسول رغوي)', en: 'Sensibio Gel Moussant' }, image: "placeholder.png", potency: 1, 
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
    name: { ar: 'سينسيبيو ديفينسيف سيروم', en: 'Sensibio Defensive Serum' }, image: "placeholder.png", potency: 2, 
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
    name: { ar: 'سينسيبيو AR (علاج الاحمرار والوردية)', en: 'Sensibio AR Anti-Redness Cream' }, image: "placeholder.png", potency: 2, 
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
    name: { ar: 'سيبيوم H2O ميسيلار', en: 'Sebium H2O Micellar Water' }, image: "placeholder.png", potency: 1, 
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
    name: { ar: 'سيبيوم جل موسان (غسول منقي)', en: 'Sebium Gel Moussant' }, image: "placeholder.png", potency: 2, 
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
    name: { ar: 'سيبيوم بور ريفاينر (مصغر المسام)', en: 'Sebium Pore Refiner' }, image: "placeholder.png", potency: 2, 
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
    name: { ar: 'سيبيوم هيدرا (مرطب معوّض)', en: 'Sebium Hydra Compensating Care' }, image: "placeholder.png", potency: 1, 
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
