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
    name: { ar: 'أتوديرم إنتينسيف بوم (بلسم الإكزيما)', en: 'Atoderm Intensive Baume' }, image: "placeholder.png", potency: 3, 
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
    name: { ar: 'أتوديرم زيت الاستحمام', en: 'Atoderm Huile de Douche (Shower Oil)' }, image: "placeholder.png", potency: 1, 
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
    name: { ar: 'أتوديرم كريم ألترا (ترطيب يومي)', en: 'Atoderm Cream Ultra' }, image: "placeholder.png", potency: 1, 
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
    name: { ar: 'أتوديرم SOS بخاخ (مضاد للحكة)', en: 'Atoderm SOS Spray' }, image: "placeholder.png", potency: 2, 
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
    name: { ar: 'فوتوديرم أكوا فلويد SPF50+', en: 'Photoderm Aquafluide SPF50+' }, image: "placeholder.png", potency: 1, 
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
    name: { ar: 'فوتوديرم ماكس فلويد SPF 100', en: 'Photoderm MAX Fluid SPF 100' }, image: "placeholder.png", potency: 2, 
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
    name: { ar: 'فوتوديرم M (واقي الكلف والتصبغات)', en: 'Photoderm M Gel-Cream SPF 50+' }, image: "placeholder.png", potency: 2, 
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
    name: { ar: 'فوتوديرم سبوت إيدج SPF50+', en: 'Photoderm Spot-Age SPF 50+' }, image: "placeholder.png", potency: 2, 
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
