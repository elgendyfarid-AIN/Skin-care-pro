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
// ==========================================
// 💊 البلوك الخامس (Block 5): Bioderma - Pigmentbio Family
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['lumireveal'] = {
    title: { ar: 'تقنية LumiReveal™ 💡', en: 'LumiReveal™ Technology 💡' },
    desc: { 
        ar: 'تقنية مستوحاة من العلاجات المرجعية لطب الأمراض الجلدية (مثل خلطة كليجمان)، تعمل في جميع مراحل تكوين البقع البنية: الالتهاب، الإنتاج، وتجديد الخلايا لتفتيح البشرة بأمان.', 
        en: 'Technology inspired by leading dermatological treatments (like Kligman\'s trio), acting on all stages of dark spot formation: inflammation, production, and cell renewal.' 
    }
};

glossaryDict['hexylresorcinol'] = {
    title: { ar: 'هيكسيل ريزورسينول (Hexylresorcinol) ✨', en: 'Hexylresorcinol ✨' },
    desc: { 
        ar: 'مادة فعالة قوية جداً لتفتيح البشرة، أثبتت الدراسات السريرية أنها تتفوق على الهيدروكينون في الفعالية مع أمان تام وبدون تهيج، حيث تعمل على كبح إنتاج الميلانين.', 
        en: 'A very potent skin-brightening active. Clinical studies show it outperforms Hydroquinone in efficacy with complete safety and no irritation by inhibiting melanin production.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [17] Pigmentbio H2O
deepProductsList.push({
    id: 'bio_pigmentbio_h2o', brandId: 'bioderma', familyId: 'pigmentbio', brand: 'Bioderma',
    name: { ar: 'بيجمنت بيو H2O ميسيلار تفتيح', en: 'Pigmentbio H2O Brightening Micellar Water' }, image: "placeholder.png", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'ماء ميسيلار مخصص للبشرة التي تعاني من التصبغات. يجمع بين التنظيف اللطيف ومواد تفتيح نشطة تمنع ظهور البقع منذ خطوة التنظيف الأولى.', 
            en: 'Micellar water for pigmented skin. Combines gentle cleansing with active brightening ingredients to prevent dark spots from the first step.' 
        },
        patient_benefit: { 
            ar: 'ينظف الوجه والعين بلطف، يزيل المكياج، ويترك البشرة مشرقة ونضرة مع تهيئتها لامتصاص سيرومات التفتيح.', 
            en: 'Gently cleanses face and eyes, removes makeup, and leaves skin radiant while prepping it for brightening serums.' 
        },
        active_ingredients: [
            { name: 'Andrographolide + Azelaic Acid', concentration: { ar: 'مزيج مفتح', en: 'Brightening Blend' }, role: { ar: 'تثبيط إنتاج الميلانين أثناء التنظيف.', en: 'Inhibiting melanin production during cleansing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الخطوة الأولى (تنظيف).', en: 'Step 1 (Cleansing).' },
        application: { ar: 'بقطنة نظيفة، لا يشطف.', en: 'With a clean cotton pad, no rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['Pigmentbio C-Concentrate.'], en: ['Pigmentbio C-Concentrate.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الباهتة، البقع الداكنة، وعدم توحد لون البشرة.', en: 'Dull skin, dark spots, and uneven skin tone.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من العطور، مناسب للعيون الحساسة.', en: 'Fragrance-free, suitable for sensitive eyes.' }
    }
});

// [18] Pigmentbio C-Concentrate (The Hero Product)
deepProductsList.push({
    id: 'bio_pigmentbio_c_concentrate', brandId: 'bioderma', familyId: 'pigmentbio', brand: 'Bioderma',
    name: { ar: 'بيجمنت بيو C-كونسنتريت (سيروم التفتيح)', en: 'Pigmentbio C-Concentrate' }, image: "placeholder.png", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً (لضمان استقرار فيتامين C)', en: 'Slightly acidic (to stabilize Vit C)' },
        mechanism: { 
            ar: 'سيروم عالي التركيز يستخدم تقنية <span class="glossary-term" onclick="openGlossary(\'lumireveal\')">LumiReveal™</span> مع فيتامين C النقي الطازج وأحماض (AHA/BHA) لتقشير الخلايا المصبوغة وتجديد الجلد.', 
            en: 'High-concentration serum using <span class="glossary-term" onclick="openGlossary(\'lumireveal\')">LumiReveal™</span> technology with fresh pure Vit C and (AHA/BHA) acids to exfoliate pigmented cells.' 
        },
        patient_benefit: { 
            ar: 'علاج مكثف يقلل حجم وكثافة البقع الداكنة بنسبة كبيرة في 4 أسابيع، ويعيد النضارة الفورية للبشرة المجهدة.', 
            en: 'Intensive treatment significantly reducing spot size and intensity in 4 weeks, restoring instant radiance to stressed skin.' 
        },
        active_ingredients: [
            { name: 'Fresh Vitamin C (Ascorbyl Glucoside)', concentration: { ar: 'تركيز عالٍ', en: 'High Concentration' }, role: { ar: 'مضاد أكسدة وتفتيح فوري.', en: 'Antioxidant and instant brightening.' } },
            { name: 'Glycolic & Salicylic Acid', concentration: { ar: 'AHA/BHA', en: 'AHA/BHA' }, role: { ar: 'تقشير كيميائي لتجديد سطح الجلد.', en: 'Chemical peeling for skin resurfacing.' } },
            { name: 'Niacinamide (Vit B3)', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'تقوية الحاجز وتقليل الالتهاب.', en: 'Barrier strengthening and anti-inflammation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً (5 قطرات).', en: 'Once at night (5 drops).' },
        step_in_routine: { ar: 'سيروم علاجي ليلي.', en: 'Nightly treatment serum.' },
        application: { ar: 'يتم الضغط على العبوة لتحرير فيتامين C، يُرج جيداً، ثم يوضع على الوجه والرقبة.', en: 'Press the cap to release Vit C, shake well, then apply to face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['المقشرات القوية الأخرى في نفس الوقت.', 'الريتينول (إلا باستشارة طبيب).'], en: ['Other strong exfoliants.', 'Retinol (unless prescribed).'] }, 
            best_mixed_with: { ar: ['Pigmentbio Night Renewer.'], en: ['Pigmentbio Night Renewer.'] } 
        }
    },
    precautions: {
        indications: { ar: 'تصبغات الشمس، آثار الحبوب البنية، الكلف، والبهتان الشديد.', en: 'Sun spots, brown acne marks, melasma, and severe dullness.' },
        pregnancy_safe: true, sun_sensitivity: true, 
        notes: { ar: 'يُستخدم ككورس لمدة شهر إلى 3 أشهر. يجب استخدام واقي شمس قوي نهاراً.', en: 'Use as a course for 1-3 months. Must use high SPF during the day.' }
    }
});

// [19] Pigmentbio Night Renewer
deepProductsList.push({
    id: 'bio_pigmentbio_night', brandId: 'bioderma', familyId: 'pigmentbio', brand: 'Bioderma',
    name: { ar: 'بيجمنت بيو نايت رينيوير (كريم ليلي)', en: 'Pigmentbio Night Renewer' }, image: "placeholder.png", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعمل أثناء الليل على تحفيز إنتاج الكولاجين وتجديد الخلايا بفضل <span class="glossary-term" onclick="openGlossary(\'hexylresorcinol\')">Hexylresorcinol</span>، مما يساعد على محو التصبغات السطحية.', 
            en: 'Works overnight to stimulate collagen production and cell renewal via <span class="glossary-term" onclick="openGlossary(\'hexylresorcinol\')">Hexylresorcinol</span>, helping to erase surface pigmentation.' 
        },
        patient_benefit: { 
            ar: 'كريم ليلي بلمسة مائية يمنح البشرة امتلاءً ونعومة في الصباح، ويمنع ظهور بقع جديدة.', 
            en: 'Water-mask texture night cream that provides plumping and softness in the morning, preventing new spots.' 
        },
        active_ingredients: [
            { name: 'Hexylresorcinol', concentration: { ar: 'فعال جداً', en: 'Highly Active' }, role: { ar: 'تفتيح وتوحيد لون البشرة.', en: 'Brightening and evening skin tone.' } },
            { name: 'Firming Peptide', concentration: { ar: 'ببتيد مشد', en: 'Firming Peptide' }, role: { ar: 'تحفيز الكولاجين وزيادة مرونة الجلد.', en: 'Collagen stimulation and skin elasticity.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة مساءً.', en: 'Once at night.' },
        step_in_routine: { ar: 'الخطوة الأخيرة في الروتين المسائي.', en: 'Last step in the PM routine.' },
        application: { ar: 'يوضع على الوجه والرقبة بعد السيروم.', en: 'Apply to face and neck after serum.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['Pigmentbio C-Concentrate.'], en: ['Pigmentbio C-Concentrate.'] } 
        }
    },
    precautions: {
        indications: { ar: 'التصبغات، فقدان المرونة، والبشرة التي تحتاج لتجديد ليلي.', en: 'Pigmentation, loss of elasticity, and skin needing nightly renewal.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام خفيف ومنعش (Sleeping Mask effect).', en: 'Light, fresh texture (Sleeping Mask effect).' }
    }
});

// [20] Pigmentbio Sensitive Areas
deepProductsList.push({
    id: 'bio_pigmentbio_sensitive_areas', brandId: 'bioderma', familyId: 'pigmentbio', brand: 'Bioderma',
    name: { ar: 'بيجمنت بيو للمناطق الحساسة', en: 'Pigmentbio Sensitive Areas' }, image: "placeholder.png", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن جداً', en: 'Highly Balanced' },
        mechanism: { 
            ar: 'أول كريم طبي مصمم لعلاج التصبغات في المناطق الحساسة ومناطق الاحتكاك (الإبط، الفخذين، الركبتين). يهدئ الالتهاب الذي يعتبر المحفز الأول للسواد في هذه المناطق.', 
            en: '1st medical cream for pigmentation in sensitive and friction areas (underarms, bikini, knees). Soothes inflammation, the primary trigger for darkening in these zones.' 
        },
        patient_benefit: { 
            ar: 'يوحد لون المناطق الداكنة، يهدئ البشرة فوراً (حتى بعد الحلاقة أو الشمع)، ويمنع عودة السواد الناتج عن الاحتكاك.', 
            en: 'Evens out dark areas, instantly soothes skin (even post-shaving/waxing), and prevents friction-induced darkening.' 
        },
        active_ingredients: [
            { name: 'Golden Seaweed Extract (Laminaria)', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'إيقاف الالتهاب ومنع تصبغ الجلد.', en: 'Stopping inflammation and preventing skin pigmentation.' } },
            { name: 'Andrographolide + Lysine', concentration: { ar: 'مفتح آمن', en: 'Safe Brightener' }, role: { ar: 'تقليل إنتاج الميلانين في المناطق الحساسة.', en: 'Reducing melanin production in sensitive areas.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'عناية مخصصة للجسم.', en: 'Targeted body care.' },
        application: { ar: 'يوضع على المنطقة المصابة بعد تنظيفها. يمكن استخدامه بعد إزالة الشعر مباشرة.', en: 'Apply to the affected cleaned area. Can be used immediately after hair removal.' },
        layering: { 
            do_not_mix_with: { ar: ['المقشرات الكيميائية القوية في هذه المناطق دون إشراف.', en: ['Strong chemical peels in these areas without supervision.'] }, 
            best_mixed_with: { ar: ['Atoderm Shower Oil (للتنظيف اللطيف).'], en: ['Atoderm Shower Oil.'] } 
        }
    },
    precautions: {
        indications: { ar: 'اسوداد الإبطين، الفخذين، الركبتين، والأكواع.', en: 'Darkening of underarms, bikini area, knees, and elbows.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من العطور، ملمس غير لزج وغير دهني.', en: 'Fragrance-free, non-sticky, non-greasy texture.' }
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
    id: 'bio_cicabio_cream', brandId: 'bioderma', familyId: 'cicabio', brand: 'Bioderma',
    name: { ar: 'سيكابيو كريم (مرمم ومهدئ)', en: 'Cicabio Soothing Repairing Cream' }, image: "placeholder.png", potency: 2, 
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
    name: { ar: 'سيكابيو أرنيكا+ (لعلاج الكدمات)', en: 'Cicabio Arnica+ Cream' }, image: "placeholder.png", potency: 2, 
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
    name: { ar: 'نوديه DS+ (شامبو للقشرة الشديدة)', en: 'Node DS+ Anti-Dandruff Shampoo' }, image: "placeholder.png", potency: 3, 
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
    name: { ar: 'نوديه فلويد (شامبو يومي لطيف)', en: 'Node Fluid Non-Detergent Shampoo' }, image: "placeholder.png", potency: 1, 
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
    name: { ar: 'أبِسيديرم H2O (ماء تنظيف ميسيلار)', en: 'ABCDerm H2O Micellar Water' }, image: "placeholder.png", potency: 1, 
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
    name: { ar: 'أبِسيديرم موسان (جل استحمام رغوي)', en: 'ABCDerm Gel Moussant' }, image: "placeholder.png", potency: 1, 
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
    name: { ar: 'أبِسيديرم بيري-أورال (علاج حول الفم)', en: 'ABCDerm Péri-oral' }, image: "placeholder.png", potency: 2, 
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
    name: { ar: 'أبِسيديرم كولد كريم (مرطب شتوي مكثف)', en: 'ABCDerm Cold-Cream Face & Body' }, image: "placeholder.png", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'مستحلب ماء في زيت (W/O emulsion) يعتمد على شمع النحل وزيت اللوز الحلو، يشكل طبقة عازلة (Occlusive) لحماية بشرة الطفل من العوامل الجوية القاسية.', 
            en: 'A Water-in-Oil (W/O) emulsion based on Beeswax and Sweet Almond Oil, forming an occlusive shield to protect baby skin from harsh weather.' 
        },
        patient_benefit: { 
            ar: 'يغذي ويرطب بعمق، يزيل الإحساس بالشد وجفاف الشتاء القارس، ويحميه وجه وجسم الطفل من البرد والرياح.', 
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
// 🏢 4. LA ROCHE-POSAY (Brands & Families)
// ==========================================

brandsList.push({
    id: 'laroche', name: 'La Roche-Posay',
    families: [
        { id: 'effaclar', name: { ar: 'إيفاكلار (للبشرة الدهنية وحب الشباب)', en: 'Effaclar (Oily & Acne-Prone)' } },
        { id: 'lipikar', name: { ar: 'ليبيكار (للجفاف الشديد والإكزيما)', en: 'Lipikar (Dryness & Eczema)' } },
        { id: 'anthelios', name: { ar: 'أنثيليوس (للحماية من الشمس)', en: 'Anthelios (Sun Protection)' } },
        { id: 'cicaplast', name: { ar: 'سيكابلاست (للترميم والتهيج)', en: 'Cicaplast (Repair & Irritation)' } },
        { id: 'toleriane', name: { ar: 'توليريان (للبشرة الحساسة جداً)', en: 'Toleriane (Ultra-Sensitive Skin)' } },
        { id: 'lrp_serums', name: { ar: 'سيرومات لاروش العلاجية', en: 'Dermatological Serums' } }
    ]
});

// --- 1. إضافات القاموس الطبي (Glossary Additions - LRP) ---

glossaryDict['procerad'] = {
    title: { ar: 'سيراميد بروكراد (Procerad™) 🛡️', en: 'Procerad™ Ceramide 🛡️' },
    desc: { 
        ar: 'سيراميد حاصل على براءة اختراع يساعد في حماية البشرة من ظهور العلامات والبقع الحمراء أو البنية الناتجة عن حب الشباب، ويعمل كحاجز مضاد للالتهاب.', 
        en: 'A patented ceramide that helps protect skin against the appearance of red or brown post-acne marks and acts as an anti-inflammatory barrier.' 
    }
};

glossaryDict['phylobioma'] = {
    title: { ar: 'مادة فيلوبيوما (Phylobioma) 🔬', en: 'Phylobioma Active 🔬' },
    desc: { 
        ar: 'مادة نشطة مستوحاة من علم الميكروبيوم، تستهدف بشكل خاص سلالة بكتيريا (IA1) المسؤولة عن ظهور الحبوب وتفاقمها، لتصحيح العيوب من الجذور.', 
        en: 'An active ingredient inspired by microbiome science, specifically targeting the IA1 bacterial strain responsible for acne breakouts, correcting blemishes at the source.' 
    }
};

glossaryDict['aqua_posae'] = {
    title: { ar: 'أكوا بوزاي فيليفورميس 💧', en: 'Aqua Posae Filiformis 💧' },
    desc: { 
        ar: 'مكون حصري يزرع في مياه لاروش بوزيه الحرارية، يعمل على إعادة توازن ميكروبيوم الجلد واستعادة حاجز البشرة الطبيعي، وهو أساسي في علاج الإكزيما وحب الشباب.', 
        en: 'An exclusive ingredient grown in La Roche-Posay thermal water that rebalances the skin microbiome and restores the natural barrier.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) - Block 8: Effaclar Part 1 ---

// [29] Effaclar Duo+M
deepProductsList.push({
    id: 'lrp_effaclar_duo_m', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار دو+ M (علاج الحبوب الثلاثي)', en: 'Effaclar Duo+M Anti-Blemish Care' }, image: "placeholder.png", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'جيل-كريم متطور يدمج تقنية <span class="glossary-term" onclick="openGlossary(\'phylobioma\')">Phylobioma</span> لاستهداف البكتيريا، مع <span class="glossary-term" onclick="openGlossary(\'procerad\')">Procerad</span> لمنع العلامات، وحمض الساليسيليك لتقشير المسام.', 
            en: 'Advanced gel-cream integrating <span class="glossary-term" onclick="openGlossary(\'phylobioma\')">Phylobioma</span> to target bacteria, <span class="glossary-term" onclick="openGlossary(\'procerad\')">Procerad</span> to prevent marks, and Salicylic Acid to exfoliate pores.' 
        },
        patient_benefit: { 
            ar: 'يقلل الحبوب والبثور بشكل ملحوظ خلال 8 ساعات فقط. يوفر مفعولاً مضاداً للانتكاس (Anti-Relapse) ويمنع تكون الآثار البنية والحمراء بعد الشفاء.', 
            en: 'Visibly reduces spots and blemishes in just 8 hours. Provides anti-relapse efficacy and prevents red or brown post-acne marks.' 
        },
        active_ingredients: [
            { name: 'Phylobioma Active', concentration: { ar: 'براءة اختراع', en: 'Patented' }, role: { ar: 'تقليل نمو بكتيريا الحبوب بشكل انتقائي.', en: 'Selectively reducing acne bacteria growth.' } },
            { name: 'Niacinamide (Vitamin B3)', concentration: { ar: 'مهدئ مكثف', en: 'Intensive Soothing' }, role: { ar: 'تقليل الالتهاب والاحمرار الموضعي.', en: 'Reducing local inflammation and redness.' } },
            { name: 'LHA & Salicylic Acid', concentration: { ar: 'مقشرات دقيقة', en: 'Micro-exfoliants' }, role: { ar: 'فتح المسام المسدودة وتنعيم نسيج الجلد.', en: 'Unclogging pores and smoothing skin texture.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً.', en: 'Once to twice daily.' },
        step_in_routine: { ar: 'خطوة العلاج الأساسية (Treatment).', en: 'Core treatment step.' },
        application: { ar: 'يوزع على الوجه بالكامل بعد التنظيف. يمكن استخدامه كقاعدة للمكياج.', en: 'Apply to the entire face after cleansing. Excellent as a makeup base.' },
        layering: { 
            do_not_mix_with: { ar: ['علاجات حب الشباب الموضعية القوية الأخرى دون استشارة.'], en: ['Other strong topical acne treatments without advice.'] }, 
            best_mixed_with: { ar: ['Effaclar Gel (غسول).', 'Anthelios Oil Control (واقي شمس).'], en: ['Effaclar Gel.', 'Anthelios Oil Control.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية المعرضة للحبوب، الرؤوس السوداء، والآثار الناتجة عن حب الشباب.', en: 'Oily acne-prone skin, blackheads, and post-acne marks.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'غير مسبب لانسداد المسام. قد يسبب وخزاً بسيطاً في بداية الاستخدام بسبب الأحماض.', en: 'Non-comedogenic. May cause slight tingling initially due to acids.' }
    }
});

// [30] Effaclar Ultra Concentrated Serum
deepProductsList.push({
    id: 'lrp_effaclar_serum_ultra', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار سيروم التقشير المركز', en: 'Effaclar Ultra Concentrated Serum' }, image: "placeholder.png", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (لتحقيق أقصى فعالية)', en: 'Acidic (for max efficacy)' },
        mechanism: { 
            ar: 'مزيج ثلاثي من الأحماض (حمض الساليسيليك، حمض الجليكوليك، وحمض الـ LHA) مع النياسيناميد لتقشير البشرة وتجديد سطحها مع الحفاظ على الراحة.', 
            en: 'A tri-acid complex (Salicylic, Glycolic, LHA) with Niacinamide to exfoliate and resurface the skin while maintaining comfort.' 
        },
        patient_benefit: { 
            ar: 'يصفي البشرة من الرؤوس السوداء والعيوب المستعصية، يصقل نسيج الجلد، ويقلل مظهر المسام الواسعة والخطوط الرفيعة.', 
            en: 'Clears skin of blackheads and stubborn blemishes, refines skin texture, and reduces the appearance of enlarged pores and fine lines.' 
        },
        active_ingredients: [
            { name: '1.5% Salicylic Acid', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تنظيف المسام بعمق.', en: 'Deeply purging pores.' } },
            { name: '3.5% Glycolic Acid', concentration: { ar: 'مقشر AHA', en: 'AHA Exfoliant' }, role: { ar: 'تحسين نضارة البشرة وتجديد الخلايا.', en: 'Improving skin radiance and cell renewal.' } },
            { name: '0.45% LHA', concentration: { ar: 'مقشر لطيف', en: 'Gentle Exfoliant' }, role: { ar: 'تقشير دقيق لسطح البشرة بدون تهيج.', en: 'Micro-exfoliating skin surface without irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً (ضروري جداً).', en: 'Once daily in the PM (Crucial).' },
        step_in_routine: { ar: 'سيروم علاجي ليلي.', en: 'Nightly treatment serum.' },
        application: { ar: 'توضع بضع قطرات على الوجه مع تجنب منطقة العين. يُتبع بمرطب إذا لزم الأمر.', en: 'Apply a few drops to the face, avoiding the eye area. Follow with a moisturizer if needed.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول في نفس الوقت.', 'المقشرات الفيزيائية (السكرب).'], en: ['Retinol at the same time.', 'Physical scrubs.'] }, 
            best_mixed_with: { ar: ['Effaclar H Iso-Biome (لتهدئة البشرة).'], en: ['Effaclar H Iso-Biome.'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب عند البالغين، المسام المسدودة، ونسيج الجلد غير المنتظم.', en: 'Adult acne, clogged pores, and irregular skin texture.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'يجب استخدام واقي شمس SPF30+ على الأقل في الصباح التالي.', en: 'Must use at least SPF30+ the following morning.' }
    }
});

// [31] Effaclar Purifying Foaming Gel
deepProductsList.push({
    id: 'lrp_effaclar_gel_moussant', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار جل رغوي (غسول منقي)', en: 'Effaclar Purifying Foaming Gel' }, image: "placeholder.png", potency: 2, 
    pharmacology: {
        ph_level: { ar: '5.5 (متوازن)', en: '5.5 (Balanced)' },
        mechanism: { 
            ar: 'ينظف البشرة الدهنية بلطف باستخدام مواد منظفة مختارة للبشرة الحساسة، ويقلل الإفرازات الدهنية الزائدة بفضل الزنك.', 
            en: 'Gently cleanses oily skin with selected surfactants for sensitive skin, and reduces excess sebum with Zinc.' 
        },
        patient_benefit: { 
            ar: 'يترك البشرة نظيفة ومنتعشة تماماً دون التسبب في جفافها أو شعور الشد المزعج، ويقلل من ظهور الرؤوس السوداء.', 
            en: 'Leaves skin perfectly clean and fresh without drying or causing tightness, and reduces blackheads.' 
        },
        active_ingredients: [
            { name: 'Zinc PCA', concentration: { ar: 'منظم دهون', en: 'Sebum Regulator' }, role: { ar: 'تقليل إنتاج الزهم ومحاربة البكتيريا.', en: 'Reducing sebum production and fighting bacteria.' } },
            { name: 'LRP Thermal Spring Water', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'تخفيف الاحمرار والتهيج.', en: 'Soothing redness and irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الرطب).', en: 'Step 1 (Wet Cleansing).' },
        application: { ar: 'يُرغى بالماء الدافئ، يُدلك على الوجه، ثم يُشطف جيداً.', en: 'Lather with warm water, massage onto face, then rinse thoroughly.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['جميع علاجات مجموعة إيفاكلار.'], en: ['All Effaclar range treatments.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، المختلطة، والمعرضة للحبوب.', en: 'Oily, combination, and acne-prone skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من الصابون، الكحول، والبارابين.', en: 'Soap, alcohol, and paraben-free.' }
    }
});

// [32] Effaclar H Iso-Biome Moisturizer
deepProductsList.push({
    id: 'lrp_effaclar_h_isobiome', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار H آيزو-بيوم (مرطب معوض)', en: 'Effaclar H Iso-Biome Moisturizer' }, image: "placeholder.png", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'aqua_posae\')">Aqua Posae Filiformis</span> لتقوية الميكروبيوم، مع السيراميدات لترميم الحاجز المائي الدهني الذي تضرر بفعل الأدوية الجافة.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'aqua_posae\')">Aqua Posae Filiformis</span> to strengthen the microbiome, with Ceramides to repair the barrier damaged by drying treatments.' 
        },
        patient_benefit: { 
            ar: 'يوفر راحة فورية وترطيباً يدوم لـ 48 ساعة للبشرة الدهنية التي أصبحت جافة ومتهيجة جداً بسبب علاجات حب الشباب (مثل الروكوتان).', 
            en: 'Provides instant comfort and 48-hour hydration for oily skin that has become fragile and dry due to acne treatments (e.g., Accutane).' 
        },
        active_ingredients: [
            { name: 'Vitamin B5 (Panthenol)', concentration: { ar: 'مرمم', en: 'Repairing' }, role: { ar: 'تهدئة وتسريع التئام الجلد.', en: 'Soothing and accelerating skin healing.' } },
            { name: 'Niacinamide', concentration: { ar: 'مضاد للالتهاب', en: 'Anti-inflammatory' }, role: { ar: 'تقليل الاحمرار والتهيج والقشور.', en: 'Reducing redness, irritation, and flaking.' } },
            { name: 'Orellana Extract', concentration: { ar: 'موازن', en: 'Balancer' }, role: { ar: 'تنظيم إفراز الدهون مع الحفاظ على الترطيب.', en: 'Regulating sebum while maintaining hydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (أو حسب الحاجة).', en: 'Twice daily (or as needed).' },
        step_in_routine: { ar: 'خطوة الترطيب والترميم.', en: 'Hydration and repair step.' },
        application: { ar: 'يوضع على وجه نظيف ومجفف برفق.', en: 'Apply to a clean and gently dried face.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['علاجات حب الشباب المجففة (روكوتان، بنزويل بيروكسايد).'], en: ['Drying acne treatments (Accutane, Benzoyl Peroxide).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية الجافة جداً (Dehydrated Oily Skin)، والجلد المتضرر من أدوية الحبوب.', en: 'Dehydrated oily skin and skin fragile from medical acne treatments.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام غير دهني وغير لزج، لا يسبب الرؤوس السوداء.', en: 'Non-greasy, non-sticky, and non-comedogenic.' }
    }
});
// ==========================================
// 💊 البلوك التاسع (Block 9): LRP Effaclar (Part 2) & Lipikar (Part 1)
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['micro_peeling'] = {
    title: { ar: 'التقشير الدقيق (Micro-Peeling) 🧬', en: 'Micro-Peeling Action 🧬' },
    desc: { 
        ar: 'تقنية تعتمد على دمج أحماض تقشير قوية بتركيزات مدروسة للعمل على مستويين: سطح الجلد لفتح المسام، وداخل المسام لتفكيك الدهون المتصلبة، وهي مثالية لحبوب الجسم والوجه المستعصية.', 
        en: 'A technique combining potent exfoliating acids at precise concentrations to act on two levels: the skin surface to unclog pores, and inside the pores to break down hardened sebum.' 
    }
};

glossaryDict['microresyl'] = {
    title: { ar: 'مادة ميكروريزيل (Microresyl) 🛡️', en: 'Microresyl Active 🛡️' },
    desc: { 
        ar: 'مكون نشط يحد من قدرة البكتيريا الضارة على تكوين غشاء حيوي (Biofilm) يحميها، مما يساعد في إعادة التوازن الميكروبي للجلد ومنع التهابات الإكزيما المتكررة.', 
        en: 'An active ingredient that limits the ability of harmful bacteria to form a protective biofilm, helping rebalance the skin microbiome and prevent recurrent eczema flare-ups.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [33] Effaclar Micro-Peeling Purifying Gel
deepProductsList.push({
    id: 'lrp_effaclar_micro_peeling', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار جل التقشير الدقيق (للوجه والجسم)', en: 'Effaclar Micro-Peeling Purifying Gel' }, image: "placeholder.png", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly Acidic' },
        mechanism: { 
            ar: 'أقوى غسول في المجموعة؛ يستخدم <span class="glossary-term" onclick="openGlossary(\'micro_peeling\')">تقنية التقشير الدقيق</span> بتركيز 2% حمض الساليسيليك وLHA لفتح المسام المسدودة وتقليل عيوب البشرة الشديدة.', 
            en: 'The strongest cleanser in the range; uses <span class="glossary-term" onclick="openGlossary(\'micro_peeling\')">Micro-Peeling action</span> with 2% Salicylic Acid and LHA to unclog pores and reduce severe blemishes.' 
        },
        patient_benefit: { 
            ar: 'يعالج حب الشباب المستعصي في الوجه والجسم (مثل حبوب الظهر والكتف). يزيل الخلايا الميتة، ينعم نسيج الجلد الخشن، ويقلل مظهر الآثار بشكل دائم.', 
            en: 'Treats stubborn acne on the face and body (e.g., back and shoulder acne). Removes dead cells, smooths rough skin texture, and permanently fades marks.' 
        },
        active_ingredients: [
            { name: '2% Salicylic Acid', concentration: { ar: 'تركيز طبي عالي', en: 'High Clinical Conc.' }, role: { ar: 'فتح المسام المسدودة بعمق.', en: 'Deeply unclogging pores.' } },
            { name: 'LHA (Lipohydroxy Acid)', concentration: { ar: 'مقشر دقيق', en: 'Micro-exfoliant' }, role: { ar: 'تقشير ناعم ومكافحة البكتيريا.', en: 'Smooth exfoliation and antibacterial action.' } },
            { name: 'Zinc PCA', concentration: { ar: 'منظم دهون', en: 'Sebum Regulator' }, role: { ar: 'تنقية البشرة وتقليل الإفرازات.', en: 'Purifying skin and reducing secretions.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً (أو حسب تحمل البشرة).', en: 'Once daily (or based on skin tolerance).' },
        step_in_routine: { ar: 'التنظيف العلاجي المكثف.', en: 'Intensive therapeutic cleansing.' },
        application: { ar: 'يُرغى على يد مبللة، يُدلك على المناطق المصابة، يُترك لمدة دقيقة، ثم يُشطف جيداً.', en: 'Lather on wet hands, massage onto affected areas, leave for 1 minute, then rinse thoroughly.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات فيزيائية (سكراب) قوية.', 'الليفة الخشنة.'], en: ['Strong physical scrubs.', 'Harsh loofahs.'] }, 
            best_mixed_with: { ar: ['Effaclar Duo+M (للوجه).', 'Lipikar Baume AP+M (للجسم إذا حدث جفاف).'], en: ['Effaclar Duo+M (Face).', 'Lipikar Baume AP+M (Body if dryness occurs).'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب الشديد، حب الشباب في الجسم (Backne)، والرؤوس السوداء المستعصية.', en: 'Severe acne, body acne (Backne), and stubborn blackheads.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'في حالة حدوث جفاف شديد، يُنصح بتقليل الاستخدام لمرة كل يومين.', en: 'In case of excessive dryness, reduce usage to every other day.' }
    }
});

// [34] Lipikar Syndet AP+ (Cream Wash)
deepProductsList.push({
    id: 'lrp_lipikar_syndet', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار سينديت AP+ (غسول كريمي للإكزيما)', en: 'Lipikar Syndet AP+ Cream Wash' }, image: "placeholder.png", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (يحمي حاجز الجلد)', en: '5.5 (Protects skin barrier)' },
        mechanism: { 
            ar: 'غسول فائق اللطافة يعتمد على تقنية <span class="glossary-term" onclick="openGlossary(\'aqua_posae\')">Aqua Posae Filiformis</span> لإعادة توازن الميكروبيوم، مع قاعدة منظفة كريمية تعوض نقص الدهون.', 
            en: 'Ultra-gentle wash based on <span class="glossary-term" onclick="openGlossary(\'aqua_posae\')">Aqua Posae Filiformis</span> to rebalance the microbiome, with a creamy lipid-replenishing base.' 
        },
        patient_benefit: { 
            ar: 'يهدئ البشرة شديدة الجفاف والمصابة بالإكزيما فوراً أثناء الاستحمام، ويقلل بشكل كبير من الرغبة في الحك بعد الخروج.', 
            en: 'Instantly soothes very dry and eczema-prone skin during the shower, significantly reducing the urge to scratch afterwards.' 
        },
        active_ingredients: [
            { name: 'Shea Butter', concentration: { ar: '10%', en: '10%' }, role: { ar: 'استعادة الطبقة الدهنية الواقية للجلد.', en: 'Restoring the skin\'s protective lipid film.' } },
            { name: 'Niacinamide', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'تخفيف الحكة والالتهاب الموضعي.', en: 'Relieving local itching and inflammation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً (أثناء الاستحمام).', en: 'Daily (during shower).' },
        step_in_routine: { ar: 'التنظيف اللطيف للجسم والوجه.', en: 'Gentle body and face cleansing.' },
        application: { ar: 'يوضع على بشرة مبللة، يُدلك بلطف، ثم يُشطف. لا يسبب الدموع للرضع.', en: 'Apply to wet skin, massage gently, then rinse. Tear-free for infants.' },
        layering: { 
            do_not_mix_with: { ar: ['الصابون العادي (القاعدي).'], en: ['Traditional alkaline soap.'] }, 
            best_mixed_with: { ar: ['Lipikar Baume AP+M (بعد الاستحمام مباشرة).'], en: ['Lipikar Baume AP+M (immediately post-shower).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الإكزيما التأتبية (Atopic Dermatitis)، الجفاف الشديد، وبشرة حديثي الولادة.', en: 'Atopic Dermatitis, severe dryness, and newborn skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من العطور والبارابين والصابون. آمن تماماً للرضع من اليوم الأول.', en: 'Fragrance, paraben, and soap-free. Completely safe for infants from day one.' }
    }
});

// [35] Lipikar Baume AP+M
deepProductsList.push({
    id: 'lrp_lipikar_baume_apm', brandId: 'laroche', familyId: 'lipikar', brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار بوم AP+M (مرطب الإكزيما الثلاثي)', en: 'Lipikar Baume AP+M' }, image: "placeholder.png", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم تقنية AP+M (Aqua Posae + <span class="glossary-term" onclick="openGlossary(\'microresyl\')">Microresyl</span>) لإعادة توازن الميكروبيوم ومنع تكوين الغشاء البكتيري، مما يوقف دورة الحكة والالتهاب.', 
            en: 'Uses AP+M technology (Aqua Posae + <span class="glossary-term" onclick="openGlossary(\'microresyl\')">Microresyl</span>) to rebalance the microbiome and prevent bacterial biofilm, stopping the itch-scratch cycle.' 
        },
        patient_benefit: { 
            ar: 'يسكن الحكة فوراً، ويمنع انتكاسات الإكزيما لفترات طويلة. يمنح ترطيباً عميقاً يدوم لـ 48 ساعة للبشرة المتهيجة.', 
            en: 'Instantly soothes itching and prevents eczema relapses for long periods. Provides 48-hour deep hydration for irritated skin.' 
        },
        active_ingredients: [
            { name: 'AP+M Technology', concentration: { ar: 'براءة اختراع', en: 'Patented' }, role: { ar: 'توازن ميكروبيوم الجلد ومنع الالتهاب.', en: 'Balancing skin microbiome and preventing inflammation.' } },
            { name: 'Shea Butter', concentration: { ar: '20% تركيز عالي', en: '20% High Conc.' }, role: { ar: 'تغذية مكثفة وترميم الحاجز الجلدي.', en: 'Intense nourishment and skin barrier repair.' } },
            { name: 'Niacinamide', concentration: { ar: '4%', en: '4%' }, role: { ar: 'مضاد حكة ومهدئ قوي.', en: 'Anti-pruritic and potent soothing agent.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً (أو عند الحاجة).', en: 'Once daily (or as needed).' },
        step_in_routine: { ar: 'الترطيب العلاجي المكثف.', en: 'Intense therapeutic hydration.' },
        application: { ar: 'يوزع على المناطق الجافة جداً في الوجه والجسم بعد تنظيفها بغسول مناسب.', en: 'Distribute over very dry areas on face and body after proper cleansing.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['Lipikar Syndet AP+.'], en: ['Lipikar Syndet AP+.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الإكزيما التأتبية الشديدة، الحكة المزمنة، والجفاف المتشقق.', en: 'Severe atopic eczema, chronic itching, and cracked dryness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام غني جداً، يمتص بسرعة ولا يترك أثراً لزجاً على الملابس.', en: 'Very rich texture, absorbs quickly and leaves no sticky residue on clothes.' }
    }
});
