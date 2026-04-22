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
// 🔧 دوال مساعدة (Helper Functions)
// ==========================================

/**
 * فتح القاموس الطبي
 * @param {string} termId - معرف المصطلح الطبي
 */
function openGlossary(termId) {
    const term = glossaryDict[termId];
    if (term) {
        console.log('Glossary Term:', term.title);
    } else {
        console.warn(`Glossary term "${termId}" not found`);
    }
}

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
// ==========================================
// 💊 البلوك الخامس عشر (Block 15): LRP Toleriane, Hydraphase & Thermal Water
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['sphingobioma'] = {
    title: { ar: 'سفينجوبيوم (Sphingobioma) 🧫', en: 'Sphingobioma™ Extract 🧫' },
    desc: { 
        ar: 'مستخلص بكتيري حيوي فريد، يُستخرج من المياه الحرارية للاروش بوزيه. يعمل بشكل حصري على تعويض النقص في وظائف الميكروبيوم للبشرة شديدة التحسس، مما يقلل من الاستجابة التحسسية للجلد المسببة للاحمرار والألم.', 
        en: 'A unique probiotic extract derived from La Roche-Posay Thermal Spring Water. It exclusively compensates for microbiome dysfunctions in allergy-prone skin, effectively down-regulating the skin\'s allergic response that causes redness and pain.' 
    }
};

glossaryDict['neurosensine'] = {
    title: { ar: 'نيوروسينسين (Neurosensine) 🧠', en: 'Neurosensine™ 🧠' },
    desc: { 
        ar: 'ببتيد (Dipeptide) مهدئ ذو فعالية جبارة. يستهدف الآليات العصبية المسببة للالتهاب في الجلد عن طريق تثبيط إفراز نواقل الألم (مثل المادة P)، مما يوقف الإحساس بالوخز والحكة في أقل من دقيقة.', 
        en: 'A powerfully soothing dipeptide. It targets the neuro-inflammatory mechanisms in the skin by inhibiting the release of pain transmitters (like Substance P), stopping stinging and itching sensations in under a minute.' 
    }
};

glossaryDict['green_tech_ha'] = {
    title: { ar: 'حمض الهيالورونيك بالتكنولوجيا الخضراء 🌱', en: 'Green Technology Hyaluronic Acid 🌱' },
    desc: { 
        ar: 'حمض هيالورونيك نقي 100% ومستخلص من مصادر طبيعية (تخمر القمح) باستخدام تقنيات صديقة للبيئة. يمتلك قدرة فائقة على اختراق الروابط الخلوية (Cellular Junctions) لضمان احتباس الماء لفترات طويلة.', 
        en: '100% pure Hyaluronic Acid derived from natural sources (wheat fermentation) using eco-friendly green technology. It possesses a superior ability to penetrate cellular junctions, ensuring prolonged water retention.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [62] Toleriane Dermallergo Fluid
deepProductsList.push({
    id: 'lrp_toleriane_dermallergo_fluid', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'توليان ديرماليرجو فلويد', en: 'Toleriane Dermallergo Fluid' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن بدقة', en: 'Strictly Balanced' },
        mechanism: { 
            ar: 'مرطب يومي يعتمد على ابتكار الميكروبيوم. يدمج <span class="glossary-term" onclick="openGlossary(\'sphingobioma\')">السفينجوبيوم</span> لاستعادة التوازن البكتيري، مع <span class="glossary-term" onclick="openGlossary(\'neurosensine\')">النيوروسينسين</span> لغلق مسارات الألم التحسسي، في عبوة معقمة كلياً (Ultra-Hermetic).', 
            en: 'A daily moisturizer powered by microbiome science. Combines <span class="glossary-term" onclick="openGlossary(\'sphingobioma\')">Sphingobioma</span> to restore bacterial balance, with <span class="glossary-term" onclick="openGlossary(\'neurosensine\')">Neurosensine</span> to block allergic pain pathways, housed in an Ultra-Hermetic sterile packaging.' 
        },
        patient_benefit: { 
            ar: 'يهدئ البشرة المتحسسة والمتهيجة في دقيقة واحدة، يوفر ترطيباً لـ 48 ساعة، ويصلح الحاجز الجلدي في ساعة واحدة ليقلل الانتكاسات.', 
            en: 'Soothes allergic and irritated skin in 1 minute, provides 48h hydration, and repairs the skin barrier in 1 hour to reduce relapses.' 
        },
        active_ingredients: [
            { name: 'Neurosensine', concentration: { ar: 'مركب عصبي', en: 'Neuro-complex' }, role: { ar: 'تسكين فوري للحكة والحرارة.', en: 'Instant relief from itching and heat.' } },
            { name: 'Sphingobioma', concentration: { ar: 'مستخلص نشط', en: 'Active Extract' }, role: { ar: 'تقوية استجابة الميكروبيوم للتحسس.', en: 'Strengthens microbiome response to allergens.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'مرطب علاجي.', en: 'Therapeutic moisturizer.' },
        application: { ar: 'يوزع على الوجه ومحيط العينين والرقبة. قوامه سائل (Fluid) مناسب للبشرة المختلطة إلى الدهنية.', en: 'Apply to face, eye contour, and neck. Fluid texture ideal for combination to oily skin.' },
        layering: { 
            do_not_mix_with: { ar: ['أي منتج يحتوي على كحول أو عطور.', 'Any product containing alcohol or fragrances.'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الحساسية، المعرضة للحساسية المفرطة (Allergy-prone)، الاحمرار والوخز المستمر.', en: 'Ultra-sensitive skin, allergy-prone skin, constant redness and stinging.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من الكحول والعطور بنسبة 0%. تم اختباره طبياً.', en: '0% alcohol and fragrance. Clinically tested.' }
    }
});

// [63] Toleriane Dermallergo Eye Cream
deepProductsList.push({
    id: 'lrp_toleriane_dermallergo_eye', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'توليان ديرماليرجو كريم العين', en: 'Toleriane Dermallergo Eye Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن لمحيط العين', en: 'Balanced for Eye Contour' },
        mechanism: { 
            ar: 'يستهدف التهاب الجلد الرقيق حول العين. يجمع <span class="glossary-term" onclick="openGlossary(\'neurosensine\')">النيوروسينسين</span> لتسكين الحكة، النياسيناميد لتقليل الانتفاخات، ومركب <span class="glossary-term" onclick="openGlossary(\'sphingobioma\')">السفينجوبيوم</span> لتقوية دفاعات الجلد حول العين.', 
            en: 'Targets inflammation of the delicate peri-ocular skin. Combines <span class="glossary-term" onclick="openGlossary(\'neurosensine\')">Neurosensine</span> to soothe itching, Niacinamide to reduce puffiness, and <span class="glossary-term" onclick="openGlossary(\'sphingobioma\')">Sphingobioma</span> to fortify eye skin defenses.' 
        },
        patient_benefit: { 
            ar: 'يخفف احمرار وحكة محيط العين فوراً (حتى الناتجة عن إكزيما الجفون والمكياج)، ويرطب بعمق.', 
            en: 'Instantly relieves redness and itching around the eyes (even from eyelid eczema and makeup), and deeply hydrates.' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'مضاد للالتهاب وتقليل الانتفاخ السوائلي.', en: 'Anti-inflammatory and reduces fluid puffiness.' } },
            { name: 'Neurosensine + Sphingobioma', concentration: { ar: 'مركب التسكين', en: 'Soothing Complex' }, role: { ar: 'إيقاف التحسس العصبي والمناعي.', en: 'Halts neural and immune sensitization.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'علاج محيط العين.', en: 'Eye contour treatment.' },
        application: { ar: 'يُربت بلطف على محيط العين والجفون دون فرك.', en: 'Pat gently onto the eye contour and eyelids without rubbing.' },
        layering: { 
            do_not_mix_with: { ar: ['مكياج عيون ثقيل ومقاوم للماء في فترات التهيج.', 'Heavy waterproof eye makeup during flare-ups.'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'حساسية محيط العين، إكزيما الجفون، الانتفاخات المصاحبة للالتهاب، والاحمرار.', en: 'Eye contour sensitivity, eyelid eczema, inflammation-induced puffiness, and redness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره تحت إشراف أطباء العيون والجلدية.', en: 'Ophthalmologically and dermatologically tested.' }
    }
});

// [64] Toleriane Sensitive Cream
deepProductsList.push({
    id: 'lrp_toleriane_sensitive', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'توليان سينسيتيف كريم', en: 'Toleriane Sensitive Cream' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'عناية مرطبة تعتمد على (Prebiotics) لترميم وتغذية الميكروبيوم الجلدي (الحاجز غير المرئي). غني بالسيراميد لحماية الجلد والجلسرين لترطيب يدوم 48 ساعة.', 
            en: 'Prebiotic hydrating care to repair and nourish the skin microbiome (the invisible barrier). Rich in Ceramide to protect the skin and Glycerin for 48h hydration.' 
        },
        patient_benefit: { 
            ar: 'يهدئ الشعور بالشد، الوخز، والجفاف. تركيبة آمنة جداً لدرجة أنها تناسب الرضع.', 
            en: 'Soothes tightness, tingling, and dryness. A formula so safe it is suitable for babies.' 
        },
        active_ingredients: [
            { name: 'Ceramide NP', concentration: { ar: 'مرمم', en: 'Restorer' }, role: { ar: 'إصلاح الحاجز المادي للبشرة.', en: 'Repairs the physical skin barrier.' } },
            { name: 'LRP Prebiotic Thermal Water', concentration: { ar: '73%', en: '73%' }, role: { ar: 'دعم نمو البكتيريا النافعة وتهدئة الجلد.', en: 'Supports beneficial bacteria growth and soothes skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الترطيب اليومي.', en: 'Daily moisturizer.' },
        application: { ar: 'يوضع على الوجه والرقبة.', en: 'Apply to face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['جميع روتينات العناية.', 'All skincare routines.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة العادية إلى المختلطة الحساسة، الجفاف العرضي، واحمرار الأطفال والرضع.', en: 'Normal to combination sensitive skin, occasional dryness, and infant redness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من الكحول والعطور.', en: 'Alcohol and fragrance free.' }
    }
});

// [65] Hydraphase HA Light
deepProductsList.push({
    id: 'lrp_hydraphase_ha_light', brandId: 'laroche', familyId: 'hydraphase', brand: 'La Roche-Posay',
    name: { ar: 'هيدرافاز HA لايت (مرطب 72 ساعة)', en: 'Hydraphase HA Light' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'green_tech_ha\')">حمض الهيالورونيك الطبيعي</span> لضخ الماء في الجلد، مع مياه لاروش الحرارية لتقوية الروابط الخلوية، مما يمنع تسرب الماء ويوفر ترطيباً مكثفاً لـ 72 ساعة.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'green_tech_ha\')">Natural HA</span> to infuse the skin with water, alongside LRP Thermal Water to reinforce cellular junctions, preventing water leakage and delivering intense 72h hydration.' 
        },
        patient_benefit: { 
            ar: 'يملأ خطوط الجفاف الدقيقة، يمنح البشرة إشراقة ونضارة ملحوظة، ويتركها ممتلئة (Plumped) دون ترك أثر دهني.', 
            en: 'Plumps fine dehydration lines, gives the skin a noticeable radiant glow, and leaves it plumped without a greasy finish.' 
        },
        active_ingredients: [
            { name: 'Pure Hyaluronic Acid', concentration: { ar: 'مركز', en: 'Concentrated' }, role: { ar: 'حبس الرطوبة وملء الجلد.', en: 'Locking moisture and plumping the skin.' } },
            { name: 'Thermal Spring Water', concentration: { ar: 'أساسي', en: 'Base' }, role: { ar: 'تهدئة مضادة للأكسدة وتقوية الحاجز.', en: 'Antioxidant soothing and barrier strengthening.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الترطيب.', en: 'Moisturizing.' },
        application: { ar: 'يوزع على الوجه والرقبة بعد تنظيفهما.', en: 'Distribute over face and neck after cleansing.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيروم الهيالورونيك (لأقصى درجات الترطيب).', 'Hyaluronic Acid Serum (for maximum hydration).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة العادية إلى المختلطة المجهدة، الباهتة، والفاقدة للماء (Dehydrated).', en: 'Normal to combination tired, dull, and dehydrated skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام سائل منعش وخفيف (Light).', en: 'Refreshing and light fluid texture.' }
    }
});

// [66] Hydraphase HA Rich
deepProductsList.push({
    id: 'lrp_hydraphase_ha_rich', brandId: 'laroche', familyId: 'hydraphase', brand: 'La Roche-Posay',
    name: { ar: 'هيدرافاز HA ريتش (كريم غني)', en: 'Hydraphase HA Rich' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'نسخة مطورة من ترطيب الهيدرافاز (الهيالورونيك والمياه الحرارية)، مضاف إليها نسبة عالية من زبدة الشيا (Shea Butter) لتعويض نقص الدهون في حاجز البشرة بجانب نقص الماء.', 
            en: 'An upgraded version of Hydraphase hydration (HA and Thermal Water), enriched with a high percentage of Shea Butter to compensate for lipid deficiency in the skin barrier alongside water deficiency.' 
        },
        patient_benefit: { 
            ar: 'يوفر راحة فورية للبشرة الجافة المتقشرة، يعالج الخشونة، ويحافظ على الجلد رطباً ومرناً لـ 72 ساعة.', 
            en: 'Provides instant comfort for dry, flaking skin, treats roughness, and keeps the skin hydrated and supple for 72 hours.' 
        },
        active_ingredients: [
            { name: 'Pure Hyaluronic Acid', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'ترطيب هيدروليكي مكثف.', en: 'Intense hydraulic hydration.' } },
            { name: 'Shea Butter + Glycerin', concentration: { ar: 'مغذي غني', en: 'Rich Nourishing' }, role: { ar: 'عزل وحماية الجلد وتوفير الأحماض الدهنية.', en: 'Skin occlusion, protection, and fatty acid supply.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الترطيب العميق.', en: 'Deep moisturizing.' },
        application: { ar: 'يوضع على وجه ورقبة جافين.', en: 'Apply to a dry face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['-'], en: ['-'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الجافة إلى الجافة جداً المفتقرة للماء والدهون.', en: 'Dry to very dry skin lacking both water and lipids.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام كريمي غني ومغذي (Rich).', en: 'Rich and nourishing creamy texture.' }
    }
});

// [67] Thermal Spring Water
deepProductsList.push({
    id: 'lrp_thermal_spring_water', brandId: 'laroche', familyId: 'toleriane', brand: 'La Roche-Posay',
    name: { ar: 'مياه لاروش بوزيه الحرارية (سبراي مهدئ)', en: 'La Roche-Posay Thermal Spring Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '7.0 (معتدل طبيعياً)', en: '7.0 (Naturally Neutral)' },
        mechanism: { 
            ar: 'مياه علاجية مستخرجة من قلب فرنسا، غنية بشكل استثنائي بـ (السلينيوم - Selenium) وهو مضاد أكسدة حيوي يقاوم الجذور الحرة بشكل طبيعي، بالإضافة لخصائص (Prebiotic) تدعم الميكروبيوم.', 
            en: 'Therapeutic water extracted from the heart of France, exceptionally rich in Selenium, a vital antioxidant that naturally neutralizes free radicals, along with prebiotic properties supporting the microbiome.' 
        },
        patient_benefit: { 
            ar: 'يهدئ حروق الشمس، الاحمرار، تهيج ما بعد الحلاقة، ويُنعش البشرة الحساسة في أي وقت خلال اليوم.', 
            en: 'Soothes sunburns, redness, post-shave irritation, and refreshes sensitive skin anytime during the day.' 
        },
        active_ingredients: [
            { name: 'Selenium & Trace Elements', concentration: { ar: 'طبيعي 100%', en: '100% Natural' }, role: { ar: 'مضاد أكسدة وتسكين التهيج.', en: 'Antioxidant and soothing irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'في أي وقت وعند الحاجة.', en: 'Anytime as needed.' },
        step_in_routine: { ar: 'تونر مهدئ / منعش يومي.', en: 'Soothing toner / Daily refresher.' },
        application: { ar: 'يُرش على الجلد ويُترك لمدة 2-3 دقائق، ثم تُجفف الزيادة برفق بقطنة.', en: 'Spray on skin and leave for 2-3 minutes, then gently pat off excess with a cotton pad.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['يُستخدم لترطيب الوجه قبل وضع سيروم الهيالورونيك.', 'Use to dampen the face before applying Hyaluronic Acid serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'جميع أنواع البشرة، الحساسية، الإكزيما، ما بعد الليزر، وحروق الشمس.', en: 'All skin types, allergies, eczema, post-laser, and sunburns.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن للرضع. لا تُرَج العبوة قبل الاستخدام.', en: 'Safe for babies. Do not shake the can before use.' }
    }
});
// ==========================================
// 💊 البلوك السادس عشر (Block 16): La Roche-Posay - Mela B3 & Pigmentclar (Final LRP)
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['melasyl'] = {
    title: { ar: 'ميلاسيل (Melasyl) 💎', en: 'Melasyl™ Molecule 💎' },
    desc: { 
        ar: 'جزيء ثوري وبراءة اختراع جديدة كلياً من لوريال (بعد 18 عاماً من الأبحاث). يختلف عن كل المفتحات السابقة؛ فهو يعمل كـ "صائد" (Interceptor) للميلانين، حيث يعترض السلائف المكونة للميلانين قبل أن تتحول إلى صبغة وتظهر على الجلد.', 
        en: 'A revolutionary molecule and completely new patent by L\'Oréal (after 18 years of research). It differs from previous brighteners; it acts as a melanin "Interceptor," trapping melanin precursors before they convert into pigment and mark the skin.' 
    }
};

glossaryDict['phe_resorcinol'] = {
    title: { ar: 'بي إتش إي - ريزورسينول (PhE-Resorcinol) ✨', en: 'PhE-Resorcinol ✨' },
    desc: { 
        ar: 'مكون تفتيح نشط أقوى بـ 100 مرة من فيتامين C وأقوى بـ 10 مرات من حمض الكوجيك في تثبيط إنزيم التيروزيناز، مما يساعد في تفكيك البقع الداكنة المستعصية بفعالية شديدة.', 
        en: 'An active brightening ingredient 100x more potent than Vitamin C and 10x more potent than Kojic Acid in inhibiting the tyrosinase enzyme, effectively breaking down stubborn dark spots.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [68] Mela B3 Anti Dark Spots Serum
deepProductsList.push({
    id: 'lrp_mela_b3_serum', brandId: 'laroche', familyId: 'mela_b3', brand: 'La Roche-Posay',
    name: { ar: 'ميلا B3 سيروم (مضاد للتصبغات)', en: 'Mela B3 Anti-Dark Spots Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يجمع بين جزيء <span class="glossary-term" onclick="openGlossary(\'melasyl\')">ميلاسيل</span> الذي يعترض الميلانين قبل ظهوره، مع 10% نياسيناميد لتهدئة الالتهاب، وريتينيل بالميتات لتسريع تجديد الخلايا المصبوغة السطحية.', 
            en: 'Combines the <span class="glossary-term" onclick="openGlossary(\'melasyl\')">Melasyl</span> molecule which intercepts melanin before it marks, with 10% Niacinamide to soothe inflammation, and Retinyl Palmitate to accelerate the renewal of superficial pigmented cells.' 
        },
        patient_benefit: { 
            ar: 'أقوى سيروم تصحيحي للتصبغات من لاروش. يعالج الكلف العنيد، بقع الشمس، وعلامات حب الشباب، ويوفر نتائج ملحوظة وفعالة لجميع ألوان البشرة دون التسبب في التهاب.', 
            en: 'LRP\'s strongest corrective serum for pigmentation. Treats stubborn melasma, sun spots, and acne marks, providing visible, effective results for all skin tones without causing inflammation.' 
        },
        active_ingredients: [
            { name: 'Melasyl™', concentration: { ar: 'براءة اختراع', en: 'Patented' }, role: { ar: 'اصطياد سلائف الميلانين.', en: 'Trapping melanin precursors.' } },
            { name: 'Niacinamide', concentration: { ar: '10%', en: '10%' }, role: { ar: 'مضاد التهاب ومنع انتقال الصبغة.', en: 'Anti-inflammatory and blocking pigment transfer.' } },
            { name: 'Retinyl Palmitate', concentration: { ar: 'مجدد خلوي', en: 'Cellular Renewer' }, role: { ar: 'تقشير خفيف ومكافحة التجاعيد.', en: 'Mild exfoliation and anti-aging.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'السيروم العلاجي الأساسي.', en: 'Core therapeutic serum.' },
        application: { ar: 'توضع 3-4 قطرات على الوجه والرقبة، ويُدلك برفق.', en: 'Apply 3-4 drops to face and neck, massage gently.' },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات كيميائية قوية أخرى في نفس الوقت لتجنب إجهاد الحاجز.'], en: ['Other strong chemical exfoliants simultaneously to avoid barrier stress.'] }, 
            best_mixed_with: { ar: ['واقي شمس (Mela B3 SPF30 أو Anthelios) نهاراً إلزامي.', 'Sunscreen (Mela B3 SPF30 or Anthelios) daytime is mandatory.'] } 
        }
    },
    precautions: {
        indications: { ar: 'التصبغات العنيدة، آثار حب الشباب الداكنة، الكلف، وعدم تجانس لون البشرة.', en: 'Stubborn pigmentation, dark acne marks, melasma, and uneven skin tone.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'يُمنع للحوامل لاحتوائه على مشتقات الريتينول (Retinyl Palmitate). لون السيروم الخوخي طبيعي.', en: 'Contraindicated for pregnancy due to Retinyl Palmitate. The peach color of the serum is natural.' }
    }
});

// [69] Mela B3 Cream SPF 30
deepProductsList.push({
    id: 'lrp_mela_b3_spf30', brandId: 'laroche', familyId: 'mela_b3', brand: 'La Roche-Posay',
    name: { ar: 'ميلا B3 كريم يومي (مع SPF30)', en: 'Mela B3 Anti-Dark Spots Cream SPF 30' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'كريم هجين يدمج علاج التصبغات عبر <span class="glossary-term" onclick="openGlossary(\'melasyl\')">ميلاسيل</span> والنياسيناميد، مع فلاتر حماية من أشعة UVA/UVB لمنع تنشيط التيروزيناز مجدداً بفعل الشمس.', 
            en: 'A hybrid cream combining pigmentation treatment via <span class="glossary-term" onclick="openGlossary(\'melasyl\')">Melasyl</span> and Niacinamide, with UVA/UVB filters to prevent sun-induced tyrosinase reactivation.' 
        },
        patient_benefit: { 
            ar: 'يوفر حماية يومية ويصحح البقع الداكنة في خطوة واحدة، يمنع الانتكاسات (Relapse) المزعجة للتصبغات عند التعرض العادي للشمس.', 
            en: 'Provides daily protection and corrects dark spots in one step, preventing bothersome pigmentation relapses upon normal sun exposure.' 
        },
        active_ingredients: [
            { name: 'Melasyl™ + Niacinamide (5%)', concentration: { ar: 'مركب تفتيح', en: 'Brightening Complex' }, role: { ar: 'تفكيك البقع ومنع تكوينها.', en: 'Breaking down spots and preventing formation.' } },
            { name: 'Broad Spectrum Filters', concentration: { ar: 'SPF 30', en: 'SPF 30' }, role: { ar: 'درع حماية ضد التصبغ الضوئي.', en: 'Shield against photo-pigmentation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة صباحاً.', en: 'Once daily in the AM.' },
        step_in_routine: { ar: 'الترطيب النهاري والحماية.', en: 'Daytime moisturizing and protection.' },
        application: { ar: 'يوضع على الوجه والرقبة وظهر اليدين.', en: 'Apply to face, neck, and back of the hands.' },
        layering: { 
            do_not_mix_with: { ar: ['الاستخدام الليلي (يحتوي على واقي شمس).'], en: ['Nighttime use (contains sunscreen).'] }, 
            best_mixed_with: { ar: ['سيروم ميلا B3 كخطوة سابقة لتعزيز النتائج.'], en: ['Mela B3 Serum as a preceding step to boost results.'] } 
        }
    },
    precautions: {
        indications: { ar: 'العناية النهارية للبشرة المتبقعة، الوقاية من التصبغات الضوئية وعلامات الشيخوخة.', en: 'Daytime care for pigmented skin, prevention of photo-pigmentation and aging signs.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام مخملي ممتاز كقاعدة للمكياج.', en: 'Velvety texture, excellent as a makeup base.' }
    }
});

// [70] Mela B3 Micro-Peeling Gel
deepProductsList.push({
    id: 'lrp_mela_b3_peeling_gel', brandId: 'laroche', familyId: 'mela_b3', brand: 'La Roche-Posay',
    name: { ar: 'ميلا B3 غسول المايكرو-بيلينج', en: 'Mela B3 Micro-Peeling Cleansing Gel' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly Acidic' },
        mechanism: { 
            ar: 'غسول علاجي ينقي البشرة كيميائياً باستخدام أحماض (PHA) اللطيفة للتقشير السطحي الدقيق، لتهيئة الجلد لاستقبال جزيء <span class="glossary-term" onclick="openGlossary(\'melasyl\')">ميلاسيل</span> المفتح بفعالية أكبر.', 
            en: 'A therapeutic cleanser that chemically purifies the skin using gentle (PHA) acids for micro-surface exfoliation, prepping the skin to absorb the <span class="glossary-term" onclick="openGlossary(\'melasyl\')">Melasyl</span> brightening molecule more effectively.' 
        },
        patient_benefit: { 
            ar: 'ينظف الشوائب، يسرع تجديد الخلايا الباهتة، ويوفر تفتيحاً تدريجياً ولطيفاً مع كل غسلة دون إيذاء حاجز البشرة الحساسة.', 
            en: 'Cleanses impurities, accelerates the renewal of dull cells, and provides a gradual, gentle brightening with every wash without harming the sensitive skin barrier.' 
        },
        active_ingredients: [
            { name: 'PHA (Polyhydroxy Acid)', concentration: { ar: 'مقشر دقيق آمن', en: 'Safe Micro-exfoliant' }, role: { ar: 'تقشير الخلايا الميتة المليئة بالميلانين بلطف.', en: 'Gently exfoliating melanin-filled dead cells.' } },
            { name: 'Melasyl™ + Niacinamide', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'استهداف التصبغ من خطوة الغسيل.', en: 'Targeting pigmentation from the cleansing step.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (أو مرة مساءً للبشرة شديدة الحساسية).', en: 'Twice daily (or once PM for highly sensitive skin).' },
        step_in_routine: { ar: 'التنظيف العلاجي الأول.', en: 'First therapeutic cleansing step.' },
        application: { ar: 'يُرغى على وجه مبلل، يُدلك بلطف للتقشير، ثم يُشطف.', en: 'Lather on wet face, massage gently for exfoliation, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['فرش التنظيف الخشنة.'], en: ['Harsh cleansing brushes.'] }, 
            best_mixed_with: { ar: ['روتين ميلا B3 بالكامل.'], en: ['The entire Mela B3 routine.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الباهتة، المعرضة للتصبغات، النسيج الجلدي الخشن.', en: 'Dull skin, pigmentation-prone, and rough skin texture.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'الـ PHA آمن جداً ولطيف مقارنة بالـ AHA التقليدي.', en: 'PHA is highly safe and gentle compared to traditional AHAs.' }
    }
});

// [71] Pigmentclar Cream Cleanser
deepProductsList.push({
    id: 'lrp_pigmentclar_cleanser', brandId: 'laroche', familyId: 'mela_b3', brand: 'La Roche-Posay',
    name: { ar: 'بيجمنتكلار غسول كريمي للتفتيح', en: 'Pigmentclar Brightening Cream Cleanser' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'غسول كريمي غني، يحتوي على حمض الساليسيليك دقيق التقشير (LHA) لتنعيم سطح الجلد وإزالة الملوثات المجهرية التي تسبب الإجهاد التأكسدي والبهتان.', 
            en: 'A rich creamy cleanser containing micro-exfoliating LHA to smooth the skin surface and remove microscopic pollutants that cause oxidative stress and dullness.' 
        },
        patient_benefit: { 
            ar: 'يحول الرغوة إلى قوام كريمي ناعم، ينظف بعمق دون تجفيف، ويعيد النضارة الفورية للوجه المجهد.', 
            en: 'Transforms into a soft, creamy foam, cleanses deeply without drying, and instantly restores radiance to a tired face.' 
        },
        active_ingredients: [
            { name: 'LHA (Lipo-Hydroxy Acid)', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'إزالة الخلايا السطحية الداكنة.', en: 'Removing dark superficial cells.' } },
            { name: 'Glycerin', concentration: { ar: 'مرطب', en: 'Hydrating' }, role: { ar: 'حماية البشرة من الجفاف أثناء الغسيل.', en: 'Protecting skin from drying out during washing.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'التنظيف.', en: 'Cleansing.' },
        application: { ar: 'يُمزج بالماء في اليدين حتى يُرغى، يُدلك على الوجه ثم يُشطف.', en: 'Mix with water in hands to lather, massage onto face, then rinse.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['سيرومات التفتيح وفيتامين سي.', 'Brightening and Vitamin C serums.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الباهتة، المفتقرة للإشراقة، وعدم توحد لون السطح.', en: 'Dull skin lacking radiance, and uneven surface tone.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام كريمي رغوي لطيف (Foaming Cream).', en: 'Gentle foaming cream texture.' }
    }
});

// [72] Pigmentclar Eye Cream
deepProductsList.push({
    id: 'lrp_pigmentclar_eye', brandId: 'laroche', familyId: 'mela_b3', brand: 'La Roche-Posay',
    name: { ar: 'بيجمنتكلار كريم العين (للهالات)', en: 'Pigmentclar Dark Circle Eye Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن للعين', en: 'Balanced for Eye Contour' },
        mechanism: { 
            ar: 'علاج مزدوج للهالات: يستهدف الهالات الزرقاء (ضعف الدورة الدموية) بالكافيين، ويستهدف الهالات البنية (فرط التصبغ) بمركب <span class="glossary-term" onclick="openGlossary(\'phe_resorcinol\')">PhE-Resorcinol</span> الفعال، مع أصباغ عاكسة للضوء لإضاءة فورية.', 
            en: 'Dual dark circle treatment: targets Blue circles (poor microcirculation) with Caffeine, and Brown circles (hyperpigmentation) with <span class="glossary-term" onclick="openGlossary(\'phe_resorcinol\')">PhE-Resorcinol</span>, featuring light-reflecting pigments for instant illumination.' 
        },
        patient_benefit: { 
            ar: 'يصحح الهالات الداكنة حول العين بنوعيها (الوعائية والتصبغية)، ينير منطقة العين فوراً باستخدام المطبق المعدني البارد، ويقلل التعب.', 
            en: 'Corrects both types of dark circles (vascular and pigmented), instantly illuminates the eye area using the cooling metal applicator, and reduces fatigue.' 
        },
        active_ingredients: [
            { name: 'PhE-Resorcinol', concentration: { ar: 'مفتح قوي', en: 'Strong Brightener' }, role: { ar: 'تفكيك الميلانين المتراكم حول العين.', en: 'Breaking down melanin accumulated around the eyes.' } },
            { name: 'Caffeine', concentration: { ar: 'منشط', en: 'Stimulant' }, role: { ar: 'تنشيط الأوعية الدموية الدقيقة وتخفيف الاحتقان.', en: 'Stimulating micro-vessels and reducing congestion.' } },
            { name: 'Light-Reflecting Pigments', concentration: { ar: 'تجميلي', en: 'Cosmetic' }, role: { ar: 'تفتيح بصري فوري.', en: 'Instant optical brightening.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'علاج الهالات.', en: 'Dark circle treatment.' },
        application: { ar: 'يُضغط برفق لإخراج الكريم، ثم يُدلك بالمطبق المعدني المبرد من الداخل للخارج.', en: 'Press gently to release cream, massage with the cooling metal applicator from inside out.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['خافي العيوب (Concealer) ليعمل كقاعدة ممتازة.', 'Concealer, acts as an excellent base.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الهالات السوداء البنية (الوراثية/التصبغية) والهالات الزرقاء (السهر/الإرهاق).', en: 'Brown dark circles (genetic/pigmented) and Blue dark circles (fatigue/lack of sleep).' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن للعيون الحساسة ولمرتدي العدسات اللاصقة.', en: 'Safe for sensitive eyes and contact lens wearers.' }
    }
});
// ==========================================
// 💊 البلوك الثامن عشر (Block 18): Bioderma - Final Clean-up
// ==========================================

glossaryDict['kerato_tech'] = {
    title: { ar: 'تقنية كيراتو+ (Kerato+ Technology) 🧪', en: 'Kerato+ Technology 🧪' },
    desc: { 
        ar: 'دمج بين حمض الساليسيليك (2%) وإستر حمض الماليك (AHA)، لضمان تقشير الحبوب بعمق المسام مع الحفاظ على درجة حموضة الجلد ومنع التهيج، مما يجعلها مثالية للحبوب الملتهبة.', 
        en: 'A combination of Salicylic Acid (2%) and Malic Acid Ester (AHA), ensuring deep pore exfoliation while maintaining skin pH and preventing irritation, making it ideal for inflamed blemishes.' 
    }
};

glossaryDict['xdefense_tech'] = {
    title: { ar: 'تقنية XDefense 🛡️', en: 'XDefense Technology 🛡️' },
    desc: { 
        ar: 'درع حماية متعدد المستويات يحمي الجلد من الملوثات البيئية الدقيقة، الإجهاد التأكسدي، والأشعة فوق البنفسجية العميقة، مصمم خصيصاً للمناطق ذات التلوث العالي والشمس القوية.', 
        en: 'A multi-level protective shield that guards skin against environmental micro-pollutants, oxidative stress, and deep UV rays, specifically designed for high-pollution and high-sun areas.' 
    }
};

// [76] Sebium Hydra Cleanser
deepProductsList.push({
    id: 'bio_sebium_hydra_cleanser', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم هيدرا كلينزر (منظف مرمم)', en: 'Sebium Hydra Cleanser' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'غسول زيتي-كريمي (Soothing Cleansing Oil-in-Cream) مخصص للبشرة التي تعاني من الجفاف الشديد والضعف الناتج عن علاج الروكوتان، يعيد بناء الدهون المفقودة فوراً.', 
            en: 'A soothing cleansing oil-in-cream formulated for skin suffering from extreme dryness and weakness due to Accutane, instantly replenishing lost lipids.' 
        },
        active_ingredients: [
            { name: 'Biomimetic Lipids', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'ترميم حاجز الجلد أثناء التنظيف.', en: 'Repairing skin barrier during cleansing.' } }
        ]
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' }, step_in_routine: { ar: 'التنظيف اللطيف.', en: 'Gentle cleansing.' } },
    precautions: { indications: { ar: 'البشرة الدهنية المجففة طبياً.', en: 'Medically dehydrated oily skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [77] Sebium Kerato+
deepProductsList.push({
    id: 'bio_sebium_kerato', brandId: 'bioderma', familyId: 'sebium', brand: 'Bioderma',
    name: { ar: 'سيبيوم كيراتو+ (جل كريم للحبوب)', en: 'Sebium Kerato+ Gel-Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (للتقشير)', en: 'Acidic (for peeling)' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'kerato_tech\')">تقنية كيراتو+</span> للقضاء على الحبوب والعلامات الناتجة عنها دون تجفيف الجلد، مع تنظيم الزهم ببراءة اختراع Fluidactiv.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'kerato_tech\')">Kerato+ Technology</span> to eliminate blemishes and marks without drying the skin, while regulating sebum with Fluidactiv patent.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid + Malic Acid Ester', concentration: { ar: '1.8% + 10%', en: '1.8% + 10%' }, role: { ar: 'تقشير فائق الفعالية والتحمل.', en: 'High efficacy and high tolerance peeling.' } }
        ]
    },
    clinical_usage: { frequency: { ar: 'مرة إلى مرتين يومياً.', en: 'Once to twice daily.' }, step_in_routine: { ar: 'علاج الحبوب والبقع.', en: 'Blemish and mark treatment.' } },
    precautions: { indications: { ar: 'حب الشباب، الرؤوس السوداء، وآثار الحبوب.', en: 'Acne, blackheads, and post-acne marks.' }, pregnancy_safe: false, sun_sensitivity: true }
});

// [78] Sensibio Eye+ (Anti-Fatigue)
deepProductsList.push({
    id: 'bio_sensibio_eye_plus', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو Eye+ (عناية الهالات والإرهاق)', en: 'Sensibio Eye+ Anti-Fatigue Eye Care' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'يستهدف الاحتقان حول العين، يقلل الانتفاخات والهالات السوداء الناتجة عن الإرهاق، ويهدئ التحسس فوراً.', 
            en: 'Targets peri-ocular congestion, reduces puffiness and dark circles due to fatigue, and instantly soothes sensitivity.' 
        },
        active_ingredients: [
            { name: 'Caffeine', concentration: { ar: 'منشط', en: 'Stimulant' }, role: { ar: 'تخفيف انتفاخ تحت العين.', en: 'Reducing under-eye puffiness.' } }
        ]
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' }, step_in_routine: { ar: 'عناية العين.', en: 'Eye care.' } },
    precautions: { indications: { ar: 'الهالات، الانتفاخات، وتعب العين.', en: 'Dark circles, puffiness, and eye fatigue.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [79] Hydrabio Hyalu+ Serum
deepProductsList.push({
    id: 'bio_hydrabio_hyalu_plus', brandId: 'bioderma', familyId: 'hydrabio', brand: 'Bioderma',
    name: { ar: 'هيدرابيو هيالو+ سيروم', en: 'Hydrabio Hyalu+ Serum' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'سيروم عالي التركيز يجمع حمض الهيالورونيك بوزنين جزيئيين مع النياسيناميد، لملء التجاعيد الناتجة عن الجفاف وتقوية الدفاعات الذاتية للجلد.', 
            en: 'Concentrated serum combining dual-weight HA with Niacinamide, to plump dehydration wrinkles and strengthen skin self-defenses.' 
        },
        active_ingredients: [
            { name: 'High & Low Molecular HA', concentration: { ar: 'مكثف', en: 'Intense' }, role: { ar: 'ترطيب وملء فوري.', en: 'Instant hydration and plumping.' } }
        ]
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' }, step_in_routine: { ar: 'سيروم الترطيب المتقدم.', en: 'Advanced hydration serum.' } },
    precautions: { indications: { ar: 'فقدان المرونة، التجاعيد، والجفاف الشديد.', en: 'Loss of elasticity, wrinkles, and severe dehydration.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [80] Photoderm XDefense (Invisible / Tinted)
deepProductsList.push({
    id: 'bio_photoderm_xdefense', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم XDefense (واقي فائق)', en: 'Photoderm XDefense SPF 50+ (Invisible/Tinted)' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'xdefense_tech\')">تقنية XDefense</span> للحماية من الأشعة فوق البنفسجية والتلوث في نفس الوقت، مع توفير تغطية لونية (في النسخ الملونة 01-04).', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'xdefense_tech\')">XDefense Technology</span> to protect against UV and pollution simultaneously, with tinted coverage (in versions 01-04).' 
        }
    },
    clinical_usage: { frequency: { ar: 'يومياً صباحاً.', en: 'Daily AM.' }, step_in_routine: { ar: 'الحماية القصوى.', en: 'Ultimate protection.' } },
    precautions: { indications: { ar: 'الوقاية من التصبغات في البيئات الملوثة.', en: 'Pigmentation prevention in polluted environments.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [81] Cicabio Cleansing Balm
deepProductsList.push({
    id: 'bio_cicabio_cleansing_balm', brandId: 'bioderma', familyId: 'cicabio', brand: 'Bioderma',
    name: { ar: 'سيكابيو بلسم منظف مهدئ', en: 'Cicabio Soothing Cleansing Balm' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'بلسم منظف يحمي الجلد المتضرر أثناء الغسيل، يسكن الحكة والوخز بفضل الـ Antalgicine ويحافظ على تعقيم المنطقة بالزنك.', 
            en: 'Cleansing balm protecting damaged skin during washing, soothing itching and stinging via Antalgicine and maintaining area sterilization with Zinc.' 
        }
    },
    clinical_usage: { frequency: { ar: 'عند الحاجة.', en: 'As needed.' }, step_in_routine: { ar: 'تنظيف الجلد المتضرر.', en: 'Cleansing damaged skin.' } },
    precautions: { indications: { ar: 'الجروح السطحية، ما بعد الليزر، والجلد المتهيج.', en: 'Superficial wounds, post-laser, and irritated skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});
// ==========================================
// 💊 البلوك السابع عشر (Block 17): La Roche-Posay - Final Clean-up
// ==========================================

glossaryDict['pure_vitamin_c12'] = {
    title: { ar: 'فيتامين C12 النقي 🍋', en: 'Pure Vitamin C12 🍋' },
    desc: { 
        ar: 'أعلى تركيز من فيتامين C النقي (حمض الأسكوربيك) بنسبة 12%، مضاف إليه فيتامين E والنياروسينسين. يوفر حماية مضاعفة من الأكسدة ويعيد النضارة المفقودة للبشرة الباهتة بفعالية تفوق النسخ السابقة.', 
        en: 'The highest concentration of pure Vitamin C (L-Ascorbic Acid) at 12%, enriched with Vitamin E and Neurosensine. Provides double antioxidant protection and restores radiance to dull skin more effectively than previous versions.' 
    }
};

// [73] Physiological Foaming Water
deepProductsList.push({
    id: 'lrp_physiological_foam', brandId: 'laroche', familyId: 'serums', brand: 'La Roche-Posay',
    name: { ar: 'الغسول الرغوي الفسيولوجي', en: 'Physiological Foaming Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (متوازن فسيولوجياً)', en: '5.5 (Physiologically Balanced)' },
        mechanism: { 
            ar: 'رغوة غنية تنظف البشرة الحساسة بلطف فائق، تعتمد على مواد تنظيف مختارة بعناية لضمان أعلى مستويات التحمل، مع مياه لاروش الحرارية المهدئة.', 
            en: 'Rich foam that ultra-gently cleanses sensitive skin, using carefully selected cleansing agents to ensure maximum tolerance, combined with soothing LRP Thermal Water.' 
        },
        patient_benefit: { 
            ar: 'ينظف الشوائب والمكياج بلطف، يحافظ على توازن البشرة الفسيولوجي، ويترك الوجه ناعماً ومرتاحاً تماماً دون أي تحسس.', 
            en: 'Gently cleanses impurities and makeup, maintains skin\'s physiological balance, and leaves the face soft and perfectly comfortable without irritation.' 
        },
        active_ingredients: [
            { name: 'Thermal Spring Water', concentration: { ar: 'مهدئ طبيعي', en: 'Natural Soother' }, role: { ar: 'تقليل التهيج ومضاد للأكسدة.', en: 'Reduces irritation and acts as an antioxidant.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف).', en: 'Step 1 (Cleansing).' },
        application: { ar: 'يوضع على الوجه المبلل، يُدلك، ثم يُشطف بالماء.', en: 'Apply to wet face, massage, then rinse with water.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة، تنظيف الوجه اليومي.', en: 'Sensitive skin, daily facial cleansing.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من الصابون، الكحول، والبارابين.', en: 'Soap, alcohol, and paraben free.' }
    }
});

// [74] Pure Vitamin C12 Serum
deepProductsList.push({
    id: 'lrp_vitamin_c12', brandId: 'laroche', familyId: 'serums', brand: 'La Roche-Posay',
    name: { ar: 'فيتامين C12 سيروم فائق التركيز', en: 'Pure Vitamin C12 Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (لأقصى امتصاص)', en: 'Acidic (for maximum absorption)' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'pure_vitamin_c12\')">فيتامين C12 النقي</span> بنسبة 12% لتحفيز إنتاج الكولاجين وتحييد الجذور الحرة، مع حمض الساليسيليك لتنعيم السطح.', 
            en: 'Uses 12% <span class="glossary-term" onclick="openGlossary(\'pure_vitamin_c12\')">Pure Vitamin C</span> to stimulate collagen and neutralize free radicals, with Salicylic Acid to smooth the surface.' 
        },
        patient_benefit: { 
            ar: 'تفتيح فائق وتصحيح للتجاعيد العميقة، يعطي إشراقة فورية وتوحيداً للون البشرة المجهدة.', 
            en: 'Superior brightening and correction of deep wrinkles, providing instant radiance and evening out stressed skin tone.' 
        },
        active_ingredients: [
            { name: 'Pure Vitamin C', concentration: { ar: '12%', en: '12%' }, role: { ar: 'مضاد أكسدة قوي جداً وتفتيح.', en: 'Very potent antioxidant and brightening.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة صباحاً.', en: 'Once daily (AM).' },
        step_in_routine: { ar: 'سيروم علاجي نهاراً.', en: 'AM treatment serum.' },
        application: { ar: 'توضع 3 قطرات قبل واقي الشمس. تجنب ملامسة العين.', en: 'Apply 3 drops before sunscreen. Avoid eye contact.' },
        layering: { do_not_mix_with: { ar: ['الريتينول في نفس الوقت.'], en: ['Retinol simultaneously.'] }, best_mixed_with: { ar: ['Anthelios Sunscreens.'] } }
    },
    precautions: {
        indications: { ar: 'التجاعيد العميقة، فقدان النضارة، والبقع الداكنة.', en: 'Deep wrinkles, loss of radiance, and dark spots.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'يُغلق الغطاء جيداً لمنع الأكسدة.', en: 'Seal cap tightly to prevent oxidation.' }
    }
});

// [75] Anthelios Hydrating Lotion 250ml / Pediatrics Spray
deepProductsList.push({
    id: 'lrp_anthelios_lotion_250', brandId: 'laroche', familyId: 'anthelios', brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس لوشن مرطب للجسم SPF 50+', en: 'Anthelios Hydrating Lotion SPF 50+ (250ml)' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'لوشن للجسم والوجه يوفر حماية واسعة الطيف ومقاومة عالية جداً للماء، غني بالجلسرين لترميم رطوبة الجلد المفقودة بسبب الشمس.', 
            en: 'Body and face lotion providing broad-spectrum protection and very high water resistance, rich in Glycerin to restore skin moisture lost due to sun.' 
        },
        active_ingredients: [
            { name: 'Mexoryl XL', concentration: { ar: 'SPF 50+', en: 'SPF 50+' }, role: { ar: 'حماية مستقرة ضد UVA/UVB.', en: 'Stable UVA/UVB protection.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'قبل التعرض للشمس.', en: 'Before sun exposure.' },
        step_in_routine: { ar: 'حماية الجسم.', en: 'Body protection.' },
        application: { ar: 'يوزع بسخاء على المناطق المعرضة للشمس في الجسم والوجه.', en: 'Distribute generously over sun-exposed areas of the body and face.' }
    },
    precautions: { indications: { ar: 'البشرة الحساسة والجافة، حماية الجسم.', en: 'Sensitive and dry skin, body protection.' }, pregnancy_safe: true, sun_sensitivity: false }
});
// ==========================================
// 💊 البلوك التاسع عشر (Block 19): FILORGA - Brand Init & NCEF Family
// ==========================================

// --- 1. تأسيس العلامة التجارية (Brand Initialization) ---

brandsList.push({
    id: 'filorga', name: 'Filorga',
    families: [
        { id: 'ncef_nctf', name: { ar: 'إن سي إي إف (الميزوثيرابي والتجديد الشامل)', en: 'NCEF / NCTF (Polyrevitalization & Mesotherapy)' } },
        { id: 'time_filler', name: { ar: 'تايم فيلر (بديل الفيلر والبوتوكس للتجاعيد)', en: 'Time-Filler (Botox & Filler-like Anti-Wrinkle)' } },
        { id: 'hydra_hyal', name: { ar: 'هيدرا هيال (الترطيب والنفخ بالهيالورونيك)', en: 'Hydra-Hyal (Hyaluronic Plumping & Hydration)' } },
        { id: 'global_repair', name: { ar: 'جلوبال ريبير (مكافحة الشيخوخة المتقدمة والتغذية)', en: 'Global-Repair (Advanced Anti-Aging & Devitalized Skin)' } },
        { id: 'optim_eyes', name: { ar: 'أوبتيم آيز (محيط العين والإرهاق)', en: 'Optim-Eyes (Eye Contour & Fatigue)' } },
        { id: 'age_purify', name: { ar: 'إيدج بيوريفاي (الشيخوخة وحب الشباب للبالغين)', en: 'Age-Purify (Adult Blemishes & Anti-Aging)' } },
        { id: 'oxygen_glow', name: { ar: 'أوكسجين جلو (النضارة وتصحيح العيوب الفوري)', en: 'Oxygen-Glow (Radiance & Instant Perfecting)' } },
        { id: 'skin_unify', name: { ar: 'سكين يونيفاي / بيجمنت (توحيد اللون والتصبغات)', en: 'Skin-Unify / Pigment (Even Skin Tone & Dark Spots)' } },
        { id: 'lift_designer', name: { ar: 'ليفت ديزاينر (الشد البلازمي ورفع الترهلات)', en: 'Lift / Sleep & Lift (Plasmatic Firming & Lifting)' } },
        { id: 'skin_prep', name: { ar: 'سكين بريب / كلينزر (التقشير والتحضير)', en: 'Skin Prep / Cleansers (Cleansing & Exfoliation)' } },
        { id: 'sun_care', name: { ar: 'العناية الشمسية (حماية مع مكافحة الشيخوخة)', en: 'UV-Protect / Bronze (Anti-Aging Sun Care)' } }
    ]
});

// --- 2. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['ncef_tech'] = {
    title: { ar: 'مركب NCEF المجدد 💉', en: 'NCEF Polyrevitalizing Complex 💉' },
    desc: { 
        ar: 'مركب حصري (New Cellular Encapsulated Factors) مستوحى من حقن الميزوثيرابي. يحتوي على 50 مكوناً نشطاً (فيتامينات، أحماض أمينية، معادن، إنزيمات مساعدة، ومضادات أكسدة) وحمض الهيالورونيك، لإعادة بناء جودة الجلد من الداخل وتحفيز التجدد الخلوي الشامل.', 
        en: 'An exclusive complex (New Cellular Encapsulated Factors) inspired by mesotherapy injections. Contains 50 active ingredients (vitamins, amino acids, minerals, coenzymes, antioxidants) and Hyaluronic Acid, to rebuild skin quality from within and stimulate global cellular renewal.' 
    }
};

glossaryDict['chronospheres'] = {
    title: { ar: 'النواقل الكرونوسفيرية 🧬', en: 'Chronospheres Delivery System 🧬' },
    desc: { 
        ar: 'تقنية كبسلة مجهرية (Micro-encapsulation) متعددة الطبقات. تسمح للمكونات النشطة وحمض الهيالورونيك باختراق طبقات الجلد العميقة (Transdermal Delivery) بشكل تدريجي ومستهدف دون الحاجة للحقن بالإبر.', 
        en: 'A multi-layer microscopic encapsulation technology. It allows active ingredients and Hyaluronic Acid to penetrate deep skin layers (Transdermal Delivery) progressively and in a targeted manner, without the need for needle injections.' 
    }
};

glossaryDict['melatonin_cx'] = {
    title: { ar: 'مركب ميلاتونين-CX 🌙', en: 'Melatonin-CX Complex 🌙' },
    desc: { 
        ar: 'مستخلص نباتي يعمل كمنشط بيولوجي يحاكي عمل هرمون النوم (الميلاتونين) في الجلد. يُحفز آليات الإصلاح الليلي للخلايا ويقلل من علامات الإرهاق والضغط التأكسدي المتراكم نهاراً.', 
        en: 'A plant extract acting as a biological stimulator that mimics the sleep hormone (Melatonin) in the skin. It triggers nocturnal cellular repair mechanisms and reduces signs of fatigue and daytime oxidative stress.' 
    }
};

// --- 3. المنتجات السريرية (Clinical Products) ---

// [82] NCEF-SHOT Booster
deepProductsList.push({
    id: 'fil_ncef_shot', brandId: 'filorga', familyId: 'ncef_nctf', brand: 'Filorga',
    name: { ar: 'إن سي إي إف شوت (أمبولة التجديد المكثف)', en: 'NCEF-SHOT Supreme Polyrevitalizing Concentrate' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن للامتصاص العميق', en: 'Balanced for deep absorption' },
        mechanism: { 
            ar: 'جرعة يومية مكثفة تعادل حقنة ميزوثيرابي كاملة (1 Meso-Injection). يوصل مركب <span class="glossary-term" onclick="openGlossary(\'ncef_tech\')">NCEF</span> بتركيز غير مسبوق لتنشيط الخلايا الليفية (Fibroblasts) المعززة ببروتينات بحرية لتحفيز الكولاجين والإيلاستين بشدة.', 
            en: 'An intensive daily dose equivalent to 1 full Meso-Injection. Delivers the <span class="glossary-term" onclick="openGlossary(\'ncef_tech\')">NCEF</span> complex at an unprecedented concentration to activate Fibroblasts, enhanced by marine proteins to strongly stimulate collagen and elastin.' 
        },
        patient_benefit: { 
            ar: 'علاج طوارئ لمدة 10 أيام. يجدد جودة البشرة، يشد الترهلات، يمحو علامات الإرهاق، ويمنح نضارة مشعة (Radiance) كأنك خرجت للتو من عيادة التجميل.', 
            en: 'A 10-day SOS treatment. Regenerates skin quality, firms sagging, erases fatigue signs, and provides a radiant glow as if stepping out of an aesthetic clinic.' 
        },
        active_ingredients: [
            { name: 'NCEF Complex (Highest Concentration)', concentration: { ar: '50 مكون نشط', en: '50 Actives' }, role: { ar: 'تجديد خلوي فائق وتغذية شاملة.', en: 'Supreme cellular renewal and global nourishment.' } },
            { name: 'Pseudoalteromonas Ferment Extract', concentration: { ar: 'بروتين بحري', en: 'Marine Protein' }, role: { ar: 'تقوية الروابط الخلوية وشد الجلد.', en: 'Strengthening cellular junctions and skin firming.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (كورس لمدة 10 أيام متصلة فقط).', en: 'Twice daily (10-day continuous course only).' },
        step_in_routine: { ar: 'الخطوة الأولى بعد الغسول (أول سيروم).', en: 'First step post-cleansing (First serum).' },
        application: { ar: 'تُسحب الجرعة المحددة بالماصة (0.75ml)، وتوزع على الوجه والرقبة باستخدام راحة اليد لتسخين المنتج.', en: 'Draw the exact dose with the pipette (0.75ml), distribute over face and neck using palms to warm the product.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريم NCEF-Reverse لختم الترطيب.', 'NCEF-Reverse Cream to seal in hydration.'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد العميقة، فقدان المرونة الشديد، البشرة المجهدة جداً (قبل المناسبات أو مع تغير الفصول).', en: 'Deep wrinkles, severe loss of firmness, highly stressed skin (pre-events or season changes).' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'قوام مائي خفيف جداً يمتص في ثوانٍ.', en: 'Ultra-light watery texture absorbing in seconds.' }
    }
});

// [83] NCEF-REVERSE Cream
deepProductsList.push({
    id: 'fil_ncef_reverse_cream', brandId: 'filorga', familyId: 'ncef_nctf', brand: 'Filorga',
    name: { ar: 'إن سي إي إف ريفيرس كريم (مجدد للشباب)', en: 'NCEF-REVERSE Supreme Multi-Correction Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يغذي البشرة بمركب <span class="glossary-term" onclick="openGlossary(\'ncef_tech\')">NCEF</span> المنقول عبر <span class="glossary-term" onclick="openGlossary(\'chronospheres\')">الكرونوسفير</span>، مصحوباً بمحفزات هيالورونيك وكولاجين وفيتامينات (A, H, E) مدمجة في قاعدة غنية بزبدة الشيا.', 
            en: 'Nourishes the skin with the <span class="glossary-term" onclick="openGlossary(\'ncef_tech\')">NCEF</span> complex delivered via <span class="glossary-term" onclick="openGlossary(\'chronospheres\')">Chronospheres</span>, accompanied by HA/Collagen boosters and Vitamins (A, H, E) embedded in a rich Shea Butter base.' 
        },
        patient_benefit: { 
            ar: 'كريم متكامل لمكافحة الشيخوخة، يعالج التجاعيد، يعيد الحجم والمرونة (Firmness)، ويمنح تغذية مكثفة للبشرة الجافة والمفتقرة للحيوية.', 
            en: 'Complete anti-aging cream; treats wrinkles, restores volume and firmness, and provides intense nourishment for dry, devitalized skin.' 
        },
        active_ingredients: [
            { name: 'NCEF + Hyaluronic Acid', concentration: { ar: 'عالي', en: 'High' }, role: { ar: 'تجديد الجودة وملء الخطوط.', en: 'Renewing skin quality and plumping lines.' } },
            { name: 'Vitamins (A, H, E) + Shea Butter', concentration: { ar: 'مركب تغذية', en: 'Nourishing Complex' }, role: { ar: 'ترميم الحاجز الجلدي وتنعيم الملمس الخشن.', en: 'Repairing the skin barrier and smoothing rough texture.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'كريم الترطيب العلاجي.', en: 'Therapeutic moisturizing cream.' },
        application: { ar: 'يوضع على وجه ورقبة جافين بعد السيروم.', en: 'Apply to a dry face and neck post-serum.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['سيروم NCEF-Intensive.', 'NCEF-Intensive Serum.'] } }
    },
    precautions: {
        indications: { ar: 'البشرة العادية إلى الجافة، التجاعيد، فقدان الشد، والبهتان.', en: 'Normal to dry skin, wrinkles, loss of firmness, and dullness.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'يحتوي على الريتينيل (مشتق فيتامين أ) لذا يُمنع للحوامل.', en: 'Contains Retinyl (Vitamin A derivative), contraindicated for pregnancy.' }
    }
});

// [84] NCTF-REVERSE MAT Fluid (NCEF-Reverse Mat)
deepProductsList.push({
    id: 'fil_nctf_reverse_mat', brandId: 'filorga', familyId: 'ncef_nctf', brand: 'Filorga',
    name: { ar: 'إن سي إي إف ريفيرس مات (فلويد مطفئ)', en: 'NCTF-REVERSE MAT Supreme Multi-Correction Fluid' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'النسخة الخفيفة (Matte) من كريم NCEF. تحتوي على نفس قوة الميزوثيرابي <span class="glossary-term" onclick="openGlossary(\'ncef_tech\')">NCEF</span>، مضافاً إليها مستخلص شجرة (Enantia chlorantha) وحمض الأوليانوليك لتقليص المسام وتقليل الإفرازات الدهنية بشكل دائم.', 
            en: 'The light, Matte version of the NCEF cream. Contains the same <span class="glossary-term" onclick="openGlossary(\'ncef_tech\')">NCEF</span> mesotherapy power, enhanced with Enantia chlorantha extract and Oleanolic Acid to shrink pores and durably reduce sebum secretion.' 
        },
        patient_benefit: { 
            ar: 'يعالج التجاعيد ويشد البشرة الدهنية والمختلطة دون التسبب في لمعان أو انسداد للمسام، مع تأثير قابض يقلل حجم المسام الواسعة.', 
            en: 'Treats wrinkles and firms oily/combination skin without causing shine or clogged pores, with an astringent effect reducing enlarged pore size.' 
        },
        active_ingredients: [
            { name: 'NCEF Complex', concentration: { ar: 'متعدد الفيتامينات', en: 'Multi-vitamin' }, role: { ar: 'التجديد الشامل للجلد.', en: 'Global skin renewal.' } },
            { name: 'Enantia Chlorantha + Oleanolic Acid', concentration: { ar: 'مضاد للمعان', en: 'Anti-shine' }, role: { ar: 'تنظيم الزهم وإطفاء لمعة الـ T-Zone.', en: 'Sebum regulation and mattifying the T-Zone.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الترطيب النهاري/الليلي.', en: 'Day/Night moisturizing.' },
        application: { ar: 'يوزع على الوجه والرقبة. ممتاز كأساس للمكياج (Primer).', en: 'Distribute over face and neck. Excellent as a makeup primer.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'البشرة المختلطة إلى الدهنية المتقدمة في السن، المسام الواسعة مع التجاعيد.', en: 'Aging combination to oily skin, enlarged pores with wrinkles.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'قوام فلويد (سائل) سريع الجفاف (Dry-touch).', en: 'Fast-drying fluid texture (Dry-touch).' }
    }
});

// [85] NCEF-INTENSIVE Serum
deepProductsList.push({
    id: 'fil_ncef_intensive_serum', brandId: 'filorga', familyId: 'ncef_nctf', brand: 'Filorga',
    name: { ar: 'إن سي إي إف إنتينسيف سيروم', en: 'NCEF-INTENSIVE Supreme Multi-Correction Serum' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن للامتصاص السريع', en: 'Balanced for rapid absorption' },
        mechanism: { 
            ar: 'سيروم عالي النفاذية يستخدم مركب <span class="glossary-term" onclick="openGlossary(\'ncef_tech\')">NCEF</span> بالتآزر مع فيتامين C المغلف (Encapsulated) وحمض (DNA) النباتي لتعزيز الإشراقة وتحفيز الكولاجين بمعدل أسرع من الكريمات.', 
            en: 'A highly permeable serum using the <span class="glossary-term" onclick="openGlossary(\'ncef_tech\')">NCEF</span> complex in synergy with encapsulated Vitamin C and botanical DNA to boost radiance and stimulate collagen at a faster rate than creams.' 
        },
        patient_benefit: { 
            ar: 'سيروم مجدد يعزز فعالية أي كريم يوضع فوقه، يصحح التجاعيد بعمق، ويوحد لون البشرة لتبدو أكثر شباباً وإشراقاً.', 
            en: 'A regenerating serum that boosts the efficacy of any subsequent cream, deeply corrects wrinkles, and evens skin tone for a more youthful, radiant look.' 
        },
        active_ingredients: [
            { name: 'NCEF + Encapsulated Vitamin C', concentration: { ar: 'مركب نشط', en: 'Active Complex' }, role: { ar: 'تحفيز الكولاجين وتفتيح البشرة.', en: 'Collagen stimulation and skin brightening.' } },
            { name: 'Wheat DNA Extract', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'حماية إيلاستين الجلد من التكسر.', en: 'Protecting skin elastin from degradation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'السيروم اليومي الأساسي.', en: 'Core daily serum.' },
        application: { ar: 'يوضع على وجه نظيف قبل الكريم. قوامه المائي-الهلامي يجعله مثالياً للدمج.', en: 'Apply to a clean face before cream. Its aqueous-gel texture makes it ideal for layering.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['كريم NCEF-Reverse.', 'NCEF-Reverse Cream.'] } }
    },
    precautions: {
        indications: { ar: 'جميع أنواع البشرة، علامات الشيخوخة المبكرة والمتقدمة، البشرة الباهتة والمجهدة.', en: 'All skin types, early and advanced aging signs, dull and tired skin.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'يمتص فوراً ولا يترك أي لزوجة.', en: 'Absorbs instantly leaving no stickiness.' }
    }
});

// [86] NCEF-REVERSE EYE Cream
deepProductsList.push({
    id: 'fil_ncef_reverse_eye', brandId: 'filorga', familyId: 'ncef_nctf', brand: 'Filorga',
    name: { ar: 'إن سي إي إف ريفيرس كريم العين', en: 'NCEF-REVERSE EYES Supreme Multi-Correction' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن للعين', en: 'Balanced for Eye Contour' },
        mechanism: { 
            ar: 'ينقل قوة <span class="glossary-term" onclick="openGlossary(\'ncef_tech\')">NCEF</span> لمحيط العين مدعوماً بتقنية (Genius-Vector Technology) التي تضمن الإطلاق البطيء للمواد الفعالة (الهيالورونيك، الكولاجين، فيتامين C، والأسين) لفك احتقان الأوعية الدموية وشد الجفون.', 
            en: 'Delivers the power of <span class="glossary-term" onclick="openGlossary(\'ncef_tech\')">NCEF</span> to the eye contour, backed by Genius-Vector Technology ensuring slow release of actives (HA, Collagen, Vit C, Escin) to decongest blood vessels and firm eyelids.' 
        },
        patient_benefit: { 
            ar: 'علاج خماسي الأبعاد لمحيط العين: يقلل التجاعيد، الهالات السوداء، الانتفاخات، يرفع ترهل الجفن العلوي، ويمنح إشراقة فورية.', 
            en: '5D eye contour treatment: reduces wrinkles, dark circles, puffiness, lifts sagging upper eyelids, and provides instant radiance.' 
        },
        active_ingredients: [
            { name: 'NCEF + 5 Active Ingredients', concentration: { ar: 'مركز', en: 'Concentrated' }, role: { ar: 'إعادة الهيكلة الشاملة لمحيط العين.', en: 'Global restructuring of the eye contour.' } },
            { name: 'Escin & Caffeine', concentration: { ar: 'مصرف', en: 'Draining' }, role: { ar: 'تنشيط الدورة الدموية وتقليل الهالات/الانتفاخ.', en: 'Stimulating microcirculation and reducing dark circles/puffiness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'عناية العين الشاملة.', en: 'Comprehensive eye care.' },
        application: { ar: 'يُربت بلطف على محيط العين والجفن العلوي حتى يمتص بالكامل.', en: 'Pat gently onto the eye contour and upper eyelid until fully absorbed.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'تجاعيد العين العميقة، الهالات المتصلبة، ترهل الجفون، وعلامات التعب الشديدة.', en: 'Deep eye wrinkles, established dark circles, sagging eyelids, and severe fatigue signs.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'قوام سريع الامتصاص يسمح بوضع المكياج فوراً.', en: 'Fast-absorbing texture allows immediate makeup application.' }
    }
});

// [87] NCEF-NIGHT MASK
deepProductsList.push({
    id: 'fil_ncef_night_mask', brandId: 'filorga', familyId: 'ncef_nctf', brand: 'Filorga',
    name: { ar: 'إن سي إي إف ماسك ليلي (مجدد للخلايا)', en: 'NCEF-NIGHT MASK Supreme Multi-Correction' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'ماسك يترك على الوجه طوال الليل. يستخدم <span class="glossary-term" onclick="openGlossary(\'melatonin_cx\')">مركب الميلاتونين-CX</span> لتحفيز التعافي الليلي، بينما يعالج <span class="glossary-term" onclick="openGlossary(\'ncef_tech\')">NCEF</span> وحمض الهيالورونيك التجاعيد ويفكك السموم المتراكمة (Detox).', 
            en: 'A leave-on overnight mask. Uses <span class="glossary-term" onclick="openGlossary(\'melatonin_cx\')">Melatonin-CX Complex</span> to trigger nocturnal recovery, while <span class="glossary-term" onclick="openGlossary(\'ncef_tech\')">NCEF</span> and HA treat wrinkles and detoxify accumulated skin toxins.' 
        },
        patient_benefit: { 
            ar: 'بشرة ممتلئة، مرتاحة، ومشرقة في صباح اليوم التالي كأنك نمت لـ 8 ساعات كاملة (Sleep in a Jar). يعالج الإرهاق المستمر.', 
            en: 'Plumped, rested, and radiant skin the next morning as if you slept a full 8 hours ("Sleep in a Jar"). Treats chronic fatigue.' 
        },
        active_ingredients: [
            { name: 'Melatonin-CX Complex', concentration: { ar: 'منشط ليلي', en: 'Nocturnal Activator' }, role: { ar: 'محاكاة تأثير النوم العميق على الجلد.', en: 'Mimics the effect of deep sleep on the skin.' } },
            { name: 'Red Indigo Extract', concentration: { ar: 'مضاد إجهاد', en: 'Anti-stress' }, role: { ar: 'التخلص من السموم والإجهاد التأكسدي.', en: 'Detoxifying and reducing oxidative stress.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '2 إلى 3 مرات أسبوعياً كبديل لكريم الليل.', en: '2 to 3 times a week replacing the night cream.' },
        step_in_routine: { ar: 'العناية الليلية (الخطوة الأخيرة).', en: 'Night care (Last step).' },
        application: { ar: 'توضع طبقة رقيقة وتُترك طوال الليل (لا يغسل).', en: 'Apply a thin layer and leave on overnight (Do not rinse).' },
        layering: { do_not_mix_with: { ar: ['مقشرات قوية جداً قبل الماسك مباشرة.', 'Very strong exfoliants immediately prior to the mask.'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'ليالي السهر، الإرهاق الشديد، البشرة المجهدة والباهتة، وتجاعيد الإجهاد.', en: 'Sleepless nights, severe fatigue, stressed and dull skin, and fatigue wrinkles.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'قوام جل-ماسك يذوب في البشرة ولا يلطخ الوسادة.', en: 'Gel-mask texture melts into the skin and does not stain the pillow.' }
    }
});
// ==========================================
// 💊 البلوك العشرين (Block 20): FILORGA - Time-Filler Family (5XP)
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['5xp_tech'] = {
    title: { ar: 'تقنية 5XP لمعالجة التجاعيد 🖐️', en: '5XP Anti-Wrinkle Technology 🖐️' },
    desc: { 
        ar: 'تقنية تستهدف 5 أنواع من التجاعيد: التعبيرية (تحاكي البوتوكس)، العميقة (تحاكي الفيلر)، السطحية (تحاكي التقشير)، الجفاف (تحاكي حقن الميزوثيرابي)، وتجاعيد الرقبة (تحاكي خيوط الشد).', 
        en: 'A technology targeting 5 types of wrinkles: Expression (Botox-like), Deep (Filler-like), Surface (Peeling-like), Dehydration (Meso-like), and Neck wrinkles (Thread-lift like).' 
    }
};

glossaryDict['botox_like_peptide'] = {
    title: { ar: 'ببتيد محاكي للبوتوكس 💉', en: 'Botox-Like Hexapeptide 💉' },
    desc: { 
        ar: 'ببتيد عصبي (Hexapeptide) يعمل على إرخاء العضلات الدقيقة تحت الجلد دون تجميد تعابير الوجه، مما يقلل بشكل ملحوظ من تقلصات التجاعيد التعبيرية (الجبهة، العبوس، حول العين).', 
        en: 'A neuro-peptide (Hexapeptide) that relaxes micro-muscles under the skin without freezing facial expressions, visibly reducing the contractions of expression lines (forehead, frown lines, crow\'s feet).' 
    }
};

glossaryDict['sea_fennel'] = {
    title: { ar: 'مستخلص الشمر البحري 🌿', en: 'Sea Fennel Extract 🌿' },
    desc: { 
        ar: 'مكون نباتي نشط يحاكي مفعول التقشير الكيميائي (Peeling-like effect). يسرع من تجديد الخلايا لتنعيم التجاعيد السطحية والخطوط الدقيقة جداً المتراكمة على طبقة الإيپيديرمس.', 
        en: 'An active botanical ingredient mimicking a chemical peel effect (Peeling-like). Accelerates cellular turnover to smooth surface wrinkles and micro-lines accumulated on the epidermis.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [88] Time-Filler 5XP Correction Cream
deepProductsList.push({
    id: 'fil_time_filler_5xp_cream', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم فيلر 5XP كريم (للتجاعيد 5 في 1)', en: 'Time-Filler 5XP Correction Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'5xp_tech\')">تقنية 5XP</span> الشاملة؛ حيث يرخي <span class="glossary-term" onclick="openGlossary(\'botox_like_peptide\')">الببتيد العصبي</span> تعابير الوجه، ويملأ الهيالورونيك المغلف التجاعيد العميقة، ويقشر <span class="glossary-term" onclick="openGlossary(\'sea_fennel\')">الشمر البحري</span> السطح، بينما يشد مستخلص زهرة الكنغر تجاعيد الرقبة.', 
            en: 'Uses comprehensive <span class="glossary-term" onclick="openGlossary(\'5xp_tech\')">5XP Technology</span>; <span class="glossary-term" onclick="openGlossary(\'botox_like_peptide\')">Neuro-peptide</span> relaxes expressions, encapsulated HA plumps deep wrinkles, <span class="glossary-term" onclick="openGlossary(\'sea_fennel\')">Sea Fennel</span> peels the surface, while Kangaroo Paw flower extract firms neck folds.' 
        },
        patient_benefit: { 
            ar: 'كريم يومي يقلل حجم وعمق التجاعيد بشكل ملحوظ خلال شهر واحد، مصمم ليحل محل أو يطيل مفعول حقن التجميل للوجه والرقبة.', 
            en: 'A daily cream that visibly reduces the volume and depth of wrinkles within 1 month, designed to replace or prolong the effects of aesthetic injections for face and neck.' 
        },
        active_ingredients: [
            { name: 'Tripeptide + Hyaluronic Acid', concentration: { ar: 'مركز', en: 'Concentrated' }, role: { ar: 'ملء التجاعيد العميقة (تأثير الفيلر).', en: 'Plumping deep wrinkles (Filler effect).' } },
            { name: 'NCEF + Imperata Cylindrica', concentration: { ar: 'عالي', en: 'High' }, role: { ar: 'ترطيب عميق لتجاعيد الجفاف.', en: 'Deep hydration for dehydration lines.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً (صباحاً و/أو مساءً).', en: 'Once to twice daily (AM and/or PM).' },
        step_in_routine: { ar: 'كريم العلاج الأساسي.', en: 'Core treatment cream.' },
        application: { ar: 'يوزع على كامل الوجه والرقبة. قوامه كريمي غني يناسب البشرة العادية إلى الجافة.', en: 'Distribute over entire face and neck. Rich creamy texture suits normal to dry skin.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['سيروم Time-Filler Intensive.', 'Time-Filler Intensive Serum.'] } }
    },
    precautions: {
        indications: { ar: 'البشرة العادية للجافة، جميع أنواع التجاعيد (تعبيرية، عميقة، سطحية، جفاف، رقبة).', en: 'Normal to dry skin, all wrinkle types (expression, deep, surface, dehydration, neck).' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'يمنع للحوامل كإجراء احترازي لتعدد الببتيدات ومستخلصات التجديد الخلوي.', en: 'Contraindicated for pregnancy as a precaution due to multiple peptides and cellular renewal extracts.' }
    }
});

// [89] Time-Filler 5XP Gel-Cream
deepProductsList.push({
    id: 'fil_time_filler_5xp_gel', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم فيلر 5XP جل-كريم (مطفئ للمعان)', en: 'Time-Filler 5XP Correction Gel-Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يحتوي على نفس القوة التصحيحية المذهلة لـ <span class="glossary-term" onclick="openGlossary(\'5xp_tech\')">تقنية 5XP</span>، ولكن مدمج في قوام هلامي غني بالزنك (Zinc) لتقليص المسام وامتصاص الزهم.', 
            en: 'Contains the same incredible corrective power of <span class="glossary-term" onclick="openGlossary(\'5xp_tech\')">5XP Technology</span>, but embedded in a gel texture rich in Zinc to shrink pores and absorb sebum.' 
        },
        patient_benefit: { 
            ar: 'يعالج التجاعيد الـ 5 للوجه والرقبة مع توفير تأثير مطفئ (Matte) طويل الأمد، مثالي للبشرة التي تعاني من التجاعيد واللمعان معاً.', 
            en: 'Treats the 5 types of face/neck wrinkles while providing a long-lasting Matte effect, ideal for skin suffering from both wrinkles and shine.' 
        },
        active_ingredients: [
            { name: '5XP Anti-Wrinkle Complex', concentration: { ar: 'شامل', en: 'Comprehensive' }, role: { ar: 'علاج جميع أنواع التجاعيد.', en: 'Treats all wrinkle types.' } },
            { name: 'Zinc PCA', concentration: { ar: 'منظم للدهون', en: 'Sebo-regulator' }, role: { ar: 'التحكم في اللمعان وتقليص المسام الواسعة.', en: 'Controlling shine and shrinking enlarged pores.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً.', en: 'Once to twice daily.' },
        step_in_routine: { ar: 'كريم العلاج والترطيب (مات).', en: 'Treatment and hydration cream (Matte).' },
        application: { ar: 'يوضع على الوجه والرقبة. قوامه الجل سريع الامتصاص ممتاز كأساس للمكياج.', en: 'Apply to face and neck. Fast-absorbing gel texture is excellent as a makeup primer.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'البشرة المختلطة إلى الدهنية، المسام الواسعة المقترنة بعلامات تقدم السن.', en: 'Combination to oily skin, enlarged pores coupled with aging signs.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'لا يترك أي أثر دهني (Oil-free finish).', en: 'Leaves no greasy finish (Oil-free finish).' }
    }
});

// [90] Time-Filler Intensive 5XP Serum
deepProductsList.push({
    id: 'fil_time_filler_intensive', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم فيلر إنتينسيف 5XP سيروم', en: 'Time-Filler Intensive 5XP Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن لاختراق أسرع', en: 'Balanced for faster penetration' },
        mechanism: { 
            ar: 'تركيبة فائقة الخفة تعزز <span class="glossary-term" onclick="openGlossary(\'5xp_tech\')">تقنية 5XP</span> بإضافة بولي سكاريد (Polysaccharides) عالي الوزن الجزيئي، مما يخلق طبقة مرنة تشد الجلد (Tensor Effect) فور تطبيق السيروم.', 
            en: 'An ultra-light formula enhancing <span class="glossary-term" onclick="openGlossary(\'5xp_tech\')">5XP Technology</span> by adding high molecular weight Polysaccharides, creating an elastic film that instantly tightens the skin (Tensor Effect) upon application.' 
        },
        patient_benefit: { 
            ar: 'تأثير شد وتنعيم فوري لسطح الجلد، يحضر البشرة ويمهدها بشكل مثالي لزيادة فعالية كريم Time-Filler.', 
            en: 'Instant lifting and smoothing effect on the skin surface, perfectly prepping the skin to maximize the efficacy of the Time-Filler cream.' 
        },
        active_ingredients: [
            { name: 'Hexapeptide + Sea Fennel', concentration: { ar: 'مركز', en: 'Concentrated' }, role: { ar: 'إرخاء العضلات وتقشير السطح.', en: 'Muscle relaxation and surface peeling.' } },
            { name: 'Tensor Polysaccharides', concentration: { ar: 'سريع المفعول', en: 'Fast-acting' }, role: { ar: 'شد ميكانيكي فوري لشبكة الجلد.', en: 'Instant mechanical tightening of the skin mesh.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'سيروم ما قبل الكريم.', en: 'Pre-cream serum.' },
        application: { ar: 'توضع بضع قطرات على وجه ورقبة نظيفين. يُدلك من الأسفل للأعلى (حركات شد).', en: 'Apply a few drops to a clean face and neck. Massage upwards (lifting motions).' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['أي كريم من عائلة Time-Filler.', 'Any cream from the Time-Filler family.'] } }
    },
    precautions: {
        indications: { ar: 'التجاعيد المتعددة، ترهل الجلد، الحاجة لنتائج سريعة قبل المناسبات.', en: 'Multiple wrinkles, skin sagging, need for rapid results before events.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'قوام سائل يتشربه الجلد في ثوانٍ معدودة.', en: 'Fluid texture absorbed by the skin in mere seconds.' }
    }
});

// [91] Time-Filler Eyes 5XP Cream
deepProductsList.push({
    id: 'fil_time_filler_eyes_5xp', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم فيلر 5XP كريم العين', en: 'Time-Filler Eyes 5XP Correction Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن لمحيط العين', en: 'Balanced for Eye Contour' },
        mechanism: { 
            ar: 'يُطوع <span class="glossary-term" onclick="openGlossary(\'5xp_tech\')">تقنية 5XP</span> لمنطقة العين؛ يستخدم ببتيدات لإرخاء أقدام الغراب (Crow\'s feet)، خلايا جذعية للأوركيد لرفع ترهل الجفن العلوي، ومستخلص شجرة الحرير لتنشيط الدورة الدموية الدقيقة وتخفيف الهالات.', 
            en: 'Adapts <span class="glossary-term" onclick="openGlossary(\'5xp_tech\')">5XP Technology</span> for the eye area; uses peptides to relax Crow\'s feet, Orchid stem cells to lift sagging upper eyelids, and Silk Tree extract to stimulate microcirculation and reduce dark circles.' 
        },
        patient_benefit: { 
            ar: 'عناية تشبه المشرط الجراحي (Blepharoplasty-like). يشد الجفن العلوي المتدلي، يكثف الرموش بفضل البانثينول، ويخفي الهالات وتجاعيد الضحك.', 
            en: 'Blepharoplasty-like care. Lifts drooping upper eyelids, densifies eyelashes thanks to Panthenol, and conceals dark circles and laugh lines.' 
        },
        active_ingredients: [
            { name: 'Orchid Stem Cells', concentration: { ar: 'شاد بيولوجي', en: 'Biological Lifter' }, role: { ar: 'تحفيز ألياف الكولاجين لرفع الجفن العلوي.', en: 'Stimulating collagen fibers to lift the upper eyelid.' } },
            { name: 'Matrikine Peptides + Panthenol', concentration: { ar: 'مقوي', en: 'Fortifier' }, role: { ar: 'تكثيف جذور الرموش وعلاج الهالات.', en: 'Densifying eyelash roots and treating dark circles.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'علاج محيط العين والرموش.', en: 'Eye contour and eyelash treatment.' },
        application: { ar: 'يُربت بلطف على محيط العين، الجفن العلوي، وجذور الرموش.', en: 'Pat gently onto the eye contour, upper eyelid, and eyelash roots.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'تجاعيد العين (Crow\'s feet)، الجفون المترهلة، الهالات، والرموش الضعيفة.', en: 'Crow\'s feet, sagging eyelids, dark circles, and weak eyelashes.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره من قبل أطباء العيون.', en: 'Ophthalmologically tested.' }
    }
});

// [92] Time-Filler Shot (Expression Lines)
deepProductsList.push({
    id: 'fil_time_filler_shot', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم فيلر شوت (للتجاعيد التعبيرية)', en: 'Time-Filler Shot Targeted Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'سيروم موضعي دقيق يحاكي حقن البوتوكس. يحتوي على تركيز فائق من <span class="glossary-term" onclick="openGlossary(\'botox_like_peptide\')">Neuropeptides</span> المدمجة مع مستخلصات بحرية لإرخاء تقلص العضلات بقوة في مناطق محددة (الجبين، بين الحاجبين).', 
            en: 'A precise targeted serum mimicking Botox injections. Contains a supreme concentration of <span class="glossary-term" onclick="openGlossary(\'botox_like_peptide\')">Neuropeptides</span> combined with marine extracts to strongly relax muscle contractions in specific areas (forehead, glabellar lines).' 
        },
        patient_benefit: { 
            ar: 'بديل تجميلي مباشر لـ (البوتوكس) للأشخاص الذين لا يفضلون الحقن، يخفف تجاعيد العبوس والجبين بشكل دراماتيكي دون شلل التعبير.', 
            en: 'A direct cosmetic alternative to Botox for those who avoid injections, dramatically reducing frown and forehead lines without freezing expressions.' 
        },
        active_ingredients: [
            { name: 'Highly Concentrated Neuropeptides', concentration: { ar: '60% من المركب', en: '60% of Complex' }, role: { ar: 'إيقاف الإشارات العصبية المسببة لتقلص العضلة.', en: 'Blocking nerve signals causing muscle contraction.' } },
            { name: 'Marine Ferment', concentration: { ar: 'محفز', en: 'Stimulator' }, role: { ar: 'دعم مرونة الجلد السطحية.', en: 'Supporting superficial skin elasticity.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'علاج موضعي قبل السيروم.', en: 'Targeted spot treatment before serum.' },
        application: { ar: 'يُطبق بواسطة أداة التوزيع الدقيقة (Applicator) مباشرة على التجاعيد التعبيرية فقط، ويُدلك بأطراف الأصابع.', en: 'Apply using the precision applicator directly onto expression lines ONLY, and massage with fingertips.' },
        layering: { do_not_mix_with: { ar: ['تطبيقه على كامل الوجه.', 'Applying to the entire face.'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'خطوط الجبهة، تجاعيد العبوس (الـ 11)، وتجاعيد الضحك حول العين والشفاه.', en: 'Forehead lines, frown lines (the 11s), and laugh lines around eyes and lips.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'مُصمم بعبوة تشبه الحقنة الطبية (Syringe-like) لتطبيق بالغ الدقة.', en: 'Designed in a syringe-like packaging for ultra-precise application.' }
    }
});
// ==========================================
// 💊 البلوك الحادي والعشرين (Block 21): FILORGA - Hydra-Hyal & Global-Repair
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['ha_5_types'] = {
    title: { ar: 'مركب الهيالورونيك الخماسي 💧', en: '5-Type Hyaluronic Acid Complex 💧' },
    desc: { 
        ar: 'تقنية تجميلية تدمج 5 أنواع من حمض الهيالورونيك (متقاطع الروابط "Cross-linked" كالفيلر، مغلف، منخفض، متوسط، وعالي الوزن الجزيئي) لضمان ترطيب سطحي فوري، وملء عميق للتجاعيد يمتد لساعات طويلة.', 
        en: 'A cosmetic technology combining 5 types of Hyaluronic Acid (cross-linked like filler, encapsulated, low, medium, and high molecular weight) to ensure instant surface hydration and deep, long-lasting wrinkle plumping.' 
    }
};

glossaryDict['intensive_repairing_factors'] = {
    title: { ar: 'عوامل الترميم المكثفة (IRF) 🧬', en: 'Intensive Repairing Factors (IRF) 🧬' },
    desc: { 
        ar: 'مركب يجمع بين 3 مغذيات فائقة (سيراميدات، أوميجا، وفيتامينات) لإعادة بناء حاجز البشرة، مع 50 مكوناً من الميزوثيرابي، و 4 معززات خلوية لاستهداف كل علامات الشيخوخة (التجاعيد، الترهل، البهتان، والبقع).', 
        en: 'A complex combining 3 super-nutrients (Ceramides, Omegas, Vitamins) to rebuild the skin barrier, along with 50 meso-ingredients and 4 cellular boosters to target all signs of aging (wrinkles, sagging, dullness, and spots).' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [93] Hydra-Hyal Serum
deepProductsList.push({
    id: 'fil_hydra_hyal_serum', brandId: 'filorga', familyId: 'hydra_hyal', brand: 'Filorga',
    name: { ar: 'هيدرا-هيال سيروم (ممتلئ ومرطب)', en: 'Hydra-Hyal Hydrating Plumping Serum' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن للامتصاص', en: 'Balanced for Absorption' },
        mechanism: { 
            ar: 'يضخ <span class="glossary-term" onclick="openGlossary(\'ha_5_types\')">مركب الهيالورونيك الخماسي</span> بكثافة داخل خلايا الإيپيديرمس، معززاً بمستخلص زهرة الصفيراء اليابانية (Sophora Japonica) المضاد للأكسدة لحماية حمض الهيالورونيك الطبيعي في الجلد من التكسر.', 
            en: 'Infuses the <span class="glossary-term" onclick="openGlossary(\'ha_5_types\')">5-Type HA Complex</span> densely into epidermal cells, enhanced with Sophora Japonica extract (antioxidant) to protect the skin\'s natural HA from degradation.' 
        },
        patient_benefit: { 
            ar: 'ينفخ البشرة فوراً (Plump effect)، يمحو خطوط الجفاف الدقيقة، ويمنح الوجه توهجاً وامتلاءً يشبه تأثير جلسات النضارة.', 
            en: 'Instantly plumps the skin, erases fine dehydration lines, and gives the face a radiant, voluminous glow akin to skin-booster sessions.' 
        },
        active_ingredients: [
            { name: '5 Types of Hyaluronic Acid', concentration: { ar: 'تركيز مكثف', en: 'Intense Concentration' }, role: { ar: 'ترطيب متعدد الطبقات وزيادة الحجم.', en: 'Multi-layer hydration and volume boosting.' } },
            { name: 'Sophora Japonica Extract', concentration: { ar: 'مضاد أكسدة', en: 'Antioxidant' }, role: { ar: 'تثبيط إنزيم الهيالورونيداز المكسر للهيالورونيك.', en: 'Inhibiting Hyaluronidase enzyme.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'سيروم الترطيب الأساسي.', en: 'Core hydrating serum.' },
        application: { ar: 'يوضع على وجه ورقبة رطبين قليلاً. قوامه هلامي يمتص بسرعة.', en: 'Apply to slightly damp face and neck. Gel-like texture absorbs quickly.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['كريم Hydra-Hyal لحبس الرطوبة.', 'Hydra-Hyal Cream to lock in moisture.'] } }
    },
    precautions: {
        indications: { ar: 'جفاف البشرة الشديد، خطوط الجفاف، فقدان الامتلاء، والبشرة الباهتة.', en: 'Severe skin dehydration, dehydration lines, loss of plumpness, and dull skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن وفعال جداً لجميع الأعمار.', en: 'Highly safe and effective for all ages.' }
    }
});

// [94] Hydra-Hyal Cream
deepProductsList.push({
    id: 'fil_hydra_hyal_cream', brandId: 'filorga', familyId: 'hydra_hyal', brand: 'Filorga',
    name: { ar: 'هيدرا-هيال كريم (مرطب ومجدد)', en: 'Hydra-Hyal Hydrating Plumping Cream' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يغلف <span class="glossary-term" onclick="openGlossary(\'ha_5_types\')">مركب الهيالورونيك الخماسي</span> في قاعدة كريمية غنية، مدمجاً مع مركب مطري (Emollient) وزيوت نباتية لإصلاح حاجز الجلد ومنع التبخر المائي.', 
            en: 'Encapsulates the <span class="glossary-term" onclick="openGlossary(\'ha_5_types\')">5-Type HA Complex</span> in a rich creamy base, combined with an emollient complex and botanical oils to repair the skin barrier and prevent transepidermal water loss.' 
        },
        patient_benefit: { 
            ar: 'يمنح راحة فورية للبشرة الجافة، يحافظ على مستوى الترطيب طوال اليوم، ويعزز النعومة والمرونة.', 
            en: 'Provides instant comfort for dry skin, maintains hydration levels all day, and boosts softness and suppleness.' 
        },
        active_ingredients: [
            { name: '5 Types of HA', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'ترطيب مستدام.', en: 'Sustainable hydration.' } },
            { name: 'Bionymph Plant Extract', concentration: { ar: 'مجدد', en: 'Regenerating' }, role: { ar: 'تحفيز الآليات الطبيعية لترطيب البشرة.', en: 'Stimulating natural skin hydration mechanisms.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'كريم الترطيب.', en: 'Moisturizing cream.' },
        application: { ar: 'يوزع على الوجه والرقبة بعد السيروم.', en: 'Distribute over face and neck post-serum.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'البشرة العادية إلى الجافة، الجفاف العرضي، والخطوط الدقيقة.', en: 'Normal to dry skin, occasional dehydration, and fine lines.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'متوفر بنسخة (Matte) للبشرة المختلطة.', en: 'Available in a Matte version for combination skin.' }
    }
});

// [95] Global-Repair Intensive Serum
deepProductsList.push({
    id: 'fil_global_repair_serum', brandId: 'filorga', familyId: 'global_repair', brand: 'Filorga',
    name: { ar: 'جلوبال ريبير إنتينسيف (سيروم التغذية والشد)', en: 'Global-Repair Intensive Multi-Revitalising Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'سيروم عالي التركيز يعتمد على <span class="glossary-term" onclick="openGlossary(\'intensive_repairing_factors\')">عوامل الترميم المكثفة (IRF)</span>، مدمجاً مع الريتينول المحفز للكولاجين والجليكوجين الذي يوفر طاقة خلوية (ATP) لإيقاظ الخلايا الشائخة.', 
            en: 'A highly concentrated serum based on <span class="glossary-term" onclick="openGlossary(\'intensive_repairing_factors\')">Intensive Repairing Factors (IRF)</span>, combined with collagen-boosting Retinol and Glycogen which provides cellular energy (ATP) to awaken senescent cells.' 
        },
        patient_benefit: { 
            ar: 'يستهدف جميع علامات الشيخوخة المتقدمة: يشد الوجه، يحدد ملامح الفك، يمحو التجاعيد، ويوحد اللون لبشرة أكثر حيوية وشباباً.', 
            en: 'Targets all advanced signs of aging: lifts the face, reshapes the jawline, erases wrinkles, and evens tone for a more vital, youthful complexion.' 
        },
        active_ingredients: [
            { name: 'Ceramides + Omegas + Vitamins', concentration: { ar: 'مغذيات فائقة', en: 'Super-nutrients' }, role: { ar: 'تغذية الجلد المتهالك وإعادة الحيوية.', en: 'Nourishing devitalized skin and restoring vitality.' } },
            { name: 'Retinol + Glycogen', concentration: { ar: 'محفزات عميقة', en: 'Deep Stimulators' }, role: { ar: 'تجديد الخلايا ومنحها الطاقة.', en: 'Cellular renewal and energy provision.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (يمكن خلطه ليلاً مع الكريم).', en: 'Twice daily (can be mixed with cream at night).' },
        step_in_routine: { ar: 'سيروم مكافحة الشيخوخة المتقدم.', en: 'Advanced anti-aging serum.' },
        application: { ar: 'يوضع على وجه ورقبة نظيفين. (ليلاً: يُمكن مزج قطرات منه مع كريم Global-Repair لماسك تغذية مكثف).', en: 'Apply to clean face and neck. (PM: drops can be mixed with Global-Repair cream for an intense nourishing mask).' },
        layering: { do_not_mix_with: { ar: ['مقشرات الأحماض القوية جداً.', 'Very strong acid exfoliants.'] }, best_mixed_with: { ar: ['كريم Global Repair.', 'Global Repair Cream.'] } }
    },
    precautions: {
        indications: { ar: 'البشرة المتهالكة جداً (Devitalized)، الشيخوخة المتقدمة، الترهل العميق والجفاف الشديد.', en: 'Devitalized skin, advanced aging, deep sagging, and severe dryness.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'يُمنع للحوامل لاحتوائه على الريتينول.', en: 'Contraindicated for pregnancy due to Retinol.' }
    }
});

// [96] Global-Repair Advanced Cream
deepProductsList.push({
    id: 'fil_global_repair_cream', brandId: 'filorga', familyId: 'global_repair', brand: 'Filorga',
    name: { ar: 'جلوبال ريبير أدفانسد كريم', en: 'Global-Repair Advanced Youth Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'كريم غني وذوباني يحتوي على <span class="glossary-term" onclick="openGlossary(\'intensive_repairing_factors\')">عوامل الترميم المكثفة (IRF)</span>، مدعماً بببتيدات تصحيحية (Peptides) ومستخلص الفاوانيا (Peony Extract) لإعادة تحديد ملامح الوجه واستعادة كثافة الجلد (Redensifying).', 
            en: 'A rich, melting cream containing <span class="glossary-term" onclick="openGlossary(\'intensive_repairing_factors\')">Intensive Repairing Factors (IRF)</span>, fortified with corrective Peptides and Peony Extract to redefine facial contours and redensify the skin.' 
        },
        patient_benefit: { 
            ar: 'يوفر راحة فورية للبشرة المفتقرة للتغذية، يحسن مظهر التجاعيد العميقة، ويشد ترهلات الرقبة والوجه بفعالية سريرية.', 
            en: 'Provides instant comfort to undernourished skin, improves the look of deep wrinkles, and effectively firms neck and face sagging.' 
        },
        active_ingredients: [
            { name: 'Intensive Repairing Factors (IRF)', concentration: { ar: 'شامل', en: 'Comprehensive' }, role: { ar: 'تغذية وعلاج شامل للشيخوخة.', en: 'Nourishment and global anti-aging treatment.' } },
            { name: 'Peony Extract', concentration: { ar: 'مكثف', en: 'Densifying' }, role: { ar: 'نحت ملامح الوجه واستعادة الدهون المفقودة.', en: 'Sculpting facial contours and restoring lost fat.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'كريم العناية المركزة.', en: 'Intensive care cream.' },
        application: { ar: 'يوزع على الوجه والرقبة ككريم نهاري، وكماسك ليلي (بطبقة أكثر سمكاً).', en: 'Distribute over face and neck as a day cream, and as a night mask (with a thicker layer).' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'الشيخوخة المتقدمة، ترقق الجلد، وفقدان الحيوية.', en: 'Advanced aging, skin thinning, and loss of vitality.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'قوام غني جداً (Rich texture) لا يترك أثراً لزجاً.', en: 'Very rich texture leaving no sticky residue.' }
    }
});

// [97] Global-Repair Eyes & Lips
deepProductsList.push({
    id: 'fil_global_repair_eyes_lips', brandId: 'filorga', familyId: 'global_repair', brand: 'Filorga',
    name: { ar: 'جلوبال ريبير للعين والشفاه', en: 'Global-Repair Eyes & Lips Multi-Revitalising' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن للعين', en: 'Balanced for Eye Contour' },
        mechanism: { 
            ar: 'صُمم خصيصاً للمناطق الرقيقة. يدمج <span class="glossary-term" onclick="openGlossary(\'intensive_repairing_factors\')">IRF</span> مع مستخلص مسك الروم (Tuberose) لتنشيط الدورة الدموية الدقيقة حول العين، ومستخلص بذور السمسم (Sesame Seed) لنفخ محيط الشفاه.', 
            en: 'Specifically designed for delicate areas. Integrates <span class="glossary-term" onclick="openGlossary(\'intensive_repairing_factors\')">IRF</span> with Tuberose extract to stimulate microcirculation around the eyes, and Sesame Seed extract to plump the lip contour.' 
        },
        patient_benefit: { 
            ar: 'علاج 2 في 1: يزيل الهالات والانتفاخات العميقة حول العين، ويملأ تجاعيد الضحك (الباركود) حول الشفاه بقوة.', 
            en: '2-in-1 treatment: removes deep dark circles and puffiness around the eyes, and strongly plumps laugh lines (barcode lines) around the lips.' 
        },
        active_ingredients: [
            { name: 'Tuberose Extract', concentration: { ar: 'منشط', en: 'Stimulant' }, role: { ar: 'علاج الهالات وتجويف العين.', en: 'Treating dark circles and eye hollows.' } },
            { name: 'Sesame Seed Extract', concentration: { ar: 'محفز دهون', en: 'Lipid-booster' }, role: { ar: 'تنعيم ونفخ خطوط الشفاه العمودية.', en: 'Smoothing and plumping vertical lip lines.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'علاج العين والشفاه.', en: 'Eye & Lip treatment.' },
        application: { ar: 'يطبق بلطف حول محيط العين، وحول محيط الشفاه (وليس بداخلها).', en: 'Apply gently around the eye contour, and around the lip contour (not inside).' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'الشيخوخة المتقدمة حول العين، خطوط الشفاه العمودية (Smoker lines)، والهالات العنيدة.', en: 'Advanced aging around eyes, vertical lip lines (Smoker lines), and stubborn dark circles.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'قوام مخملي يذوب فوراً.', en: 'Velvety melting texture.' }
    }
});
// ==========================================
// 💊 البلوك الثاني والعشرين (Block 22): FILORGA - Optim-Eyes & Age-Purify
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['eye_impact_complex'] = {
    title: { ar: 'مركب آي-إمباكت 👁️', en: 'Eye-Impact Complex 👁️' },
    desc: { 
        ar: 'تكنولوجيا متقدمة لمحيط العين تجمع بين (الكريسين) لتقليل التصبغات والهالات الملونة، (الببتيدات) لتقليل حجم الانتفاخات وتصريف السوائل، و(حمض الهيالورونيك) لملء التجاعيد وتنعيم الخطوط.', 
        en: 'Advanced eye contour technology combining (Chrysin) to reduce pigmented dark circles, (Peptides) to reduce puffiness volume and drain fluids, and (Hyaluronic Acid) to plump wrinkles and smooth lines.' 
    }
};

glossaryDict['hyaluro_youth_cx'] = {
    title: { ar: 'هيالورو-يوث CX 💧', en: 'Hyaluro-Youth CX 💧' },
    desc: { 
        ar: 'مركب مكافحة شيخوخة مستوحى من الحقن. يجمع بين حمض الهيالورونيك الممتلئ، ببتيد منعم (Smoothing Peptide)، وجليكوببتيد (Glycopeptide) لملء التجاعيد وإعادة الحجم المفقود للبشرة.', 
        en: 'An injection-inspired anti-aging complex. Combines plumping Hyaluronic Acid, a Smoothing Peptide, and a Glycopeptide to plump wrinkles and restore lost skin volume.' 
    }
};

glossaryDict['dermo_rescue_cx'] = {
    title: { ar: 'ديرمو-ريسكيو CX 🌿', en: 'Dermo-Rescue CX 🌿' },
    desc: { 
        ar: 'مركب علاجي لحب الشباب مستوحى من جلسات التقشير (Peeling). يحتوي على 5 أحماض تقشير دقيقة، زنك لتنظيم الإفرازات الدهنية، ومستخلص نباتي لتنقية المسام وتخفيف الالتهابات.', 
        en: 'An acne treatment complex inspired by Peeling sessions. Contains 5 micro-peeling acids, Zinc for sebum regulation, and a botanical extract to purify pores and reduce inflammation.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [98] Optim-Eyes Cream
deepProductsList.push({
    id: 'fil_optim_eyes_cream', brandId: 'filorga', familyId: 'optim_eyes', brand: 'Filorga',
    name: { ar: 'أوبتيم-آيز كريم (لمحيط العين)', en: 'Optim-Eyes 3-in-1 Eye Contour Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن للعين', en: 'Balanced for Eye Contour' },
        mechanism: { 
            ar: 'يستهدف علامات الإرهاق الثلاثية باستخدام <span class="glossary-term" onclick="openGlossary(\'eye_impact_complex\')">مركب Eye-Impact</span>، مدعوماً بتقنية (Melaton-Eyes) التي تحفز بروتين (Revinage) لإنعاش الخلايا المجهدة حول العين ومنع ظهور علامات نقص النوم.', 
            en: 'Targets triple fatigue signs using the <span class="glossary-term" onclick="openGlossary(\'eye_impact_complex\')">Eye-Impact Complex</span>, supported by Melaton-Eyes technology which stimulates the Revinage protein to revive exhausted cells around the eyes and prevent sleep-deprivation marks.' 
        },
        patient_benefit: { 
            ar: 'الكريم الأول في فرنسا لمحيط العين. يمحو الهالات السوداء، يخفف الانتفاخات، وينعم خطوط الجفاف بشكل مكثف لتبدو العين مرتاحة (Fresh look).', 
            en: 'France\'s #1 eye contour cream. Erases dark circles, reduces puffiness, and intensely smooths dehydration lines for a fresh, rested look.' 
        },
        active_ingredients: [
            { name: 'Chrysin + Peptides', concentration: { ar: 'مكثف', en: 'Intense' }, role: { ar: 'تصريف السوائل وتفكيك صبغة الدم المتراكمة.', en: 'Draining fluids and breaking down accumulated blood pigments.' } },
            { name: 'Melaton-Eyes Peptide', concentration: { ar: 'منعش', en: 'Reviving' }, role: { ar: 'إزالة الإرهاق الخلوي المتراكم.', en: 'Eliminating accumulated cellular fatigue.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'عناية العين 360 درجة.', en: '360° Eye care.' },
        application: { ar: 'يُربت بلطف على محيط العين. (يُنصح بحفظه في الثلاجة لزيادة تأثير الشد بالبرودة - Cryo-effect).', en: 'Pat gently onto the eye contour. (Recommended to keep in the fridge to enhance the cryo-lifting effect).' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'الهالات السوداء المزدوجة، الانتفاخات الصباحية، وتجاعيد الإجهاد.', en: 'Dual dark circles, morning puffiness, and fatigue wrinkles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام جل-كريم يذوب فوراً ولا يفسد المكياج.', en: 'Melting gel-cream texture that doesn\'t ruin makeup.' }
    }
});

// [99] Optim-Eyes Lotion (Make-up Remover Serum)
deepProductsList.push({
    id: 'fil_optim_eyes_lotion', brandId: 'filorga', familyId: 'optim_eyes', brand: 'Filorga',
    name: { ar: 'أوبتيم-آيز لوشن (مزيل مكياج وسيروم)', en: 'Optim-Eyes Lotion Eye Makeup Remover Serum' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن للدموع', en: 'Tear-balanced' },
        mechanism: { 
            ar: 'تركيبة ثلاثية الطور (Tri-phase). الطور الزيتي يذيب المكياج المقاوم للماء فوراً، بينما يعمل الطور المائي كسيروم يحتوي على ببتيدات محفزة لنمو الرموش لتقويتها ومنع تساقطها.', 
            en: 'Tri-phase formula. The oleo-phase instantly dissolves waterproof makeup, while the aqueous phase acts as a serum containing lash-stimulating peptides to fortify and prevent fallout.' 
        },
        patient_benefit: { 
            ar: 'ليس مجرد مزيل مكياج، بل سيروم علاجي ينظف العين بلطف فائق، يرطب المحيط، ويطيل ويكثف الرموش مع الاستخدام المستمر.', 
            en: 'Not just a makeup remover, but a therapeutic serum that ultra-gently cleanses the eyes, hydrates the contour, and lengthens/densifies lashes with continuous use.' 
        },
        active_ingredients: [
            { name: 'Oleo-Clean Complex', concentration: { ar: 'منظف', en: 'Cleanser' }, role: { ar: 'إزالة مكياج العيون المقاوم للماء.', en: 'Waterproof eye makeup removal.' } },
            { name: 'Stimulating Peptides', concentration: { ar: 'مقوي', en: 'Fortifier' }, role: { ar: 'تقوية بصيلات الرموش.', en: 'Fortifying eyelash follicles.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مساءً لإزالة المكياج.', en: 'PM for makeup removal.' },
        step_in_routine: { ar: 'تنظيف العين / تقوية الرموش.', en: 'Eye cleansing / Lash fortifying.' },
        application: { ar: 'يُرج جيداً قبل الاستخدام لخلط الأطوار، يُوضع على قطنة ويُمسح بها محيط العين والرموش بلطف.', en: 'Shake well before use to mix phases, apply to a cotton pad and gently wipe the eye contour and lashes.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'تنظيف العيون الحساسة، المكياج العنيد، وضعف وتساقط الرموش.', en: 'Sensitive eye cleansing, stubborn makeup, and weak/falling eyelashes.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يترك غشاوة دهنية على العين.', en: 'Leaves no greasy film on the eyes.' }
    }
});

// [100] Age-Purify Fluid
deepProductsList.push({
    id: 'fil_age_purify_fluid', brandId: 'filorga', familyId: 'age_purify', brand: 'Filorga',
    name: { ar: 'إيدج-بيوريفاي فلويد (للحبوب والتجاعيد)', en: 'Age-Purify Double Correction Fluid' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly Acidic' },
        mechanism: { 
            ar: 'يجمع ببراعة بين <span class="glossary-term" onclick="openGlossary(\'hyaluro_youth_cx\')">هيالورو-يوث CX</span> لملء التجاعيد وشد الجلد، وبين <span class="glossary-term" onclick="openGlossary(\'dermo_rescue_cx\')">ديرمو-ريسكيو CX</span> الذي يفرز أحماض (AHA/BHA/PHA) والزنك للقضاء على بكتيريا حب الشباب وتضييق المسام.', 
            en: 'Masterfully combines <span class="glossary-term" onclick="openGlossary(\'hyaluro_youth_cx\')">Hyaluro-Youth CX</span> to plump wrinkles and firm skin, with <span class="glossary-term" onclick="openGlossary(\'dermo_rescue_cx\')">Dermo-Rescue CX</span> which releases acids (AHA/BHA/PHA) and Zinc to eradicate acne bacteria and shrink pores.' 
        },
        patient_benefit: { 
            ar: 'يحل معضلة البالغين: يعالج حبوب الشباب واللمعان دون التسبب في جفاف، وفي نفس الوقت يقلل التجاعيد العميقة ليمنح بشرة صافية ومشدودة.', 
            en: 'Solves the adult dilemma: treats acne and shine without causing dryness, while simultaneously reducing deep wrinkles for a clear, firm complexion.' 
        },
        active_ingredients: [
            { name: '5 Micro-Peeling Acids + Zinc', concentration: { ar: 'عالي', en: 'High' }, role: { ar: 'تطهير المسام وتقشير الخلايا الميتة.', en: 'Purifying pores and exfoliating dead cells.' } },
            { name: 'Hyaluronic Acid + Peptides', concentration: { ar: 'مرمم', en: 'Restorer' }, role: { ar: 'مكافحة الشيخوخة والترطيب.', en: 'Anti-aging and hydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الترطيب والعلاج المزدوج.', en: 'Hydration and dual treatment.' },
        application: { ar: 'يوضع على وجه ورقبة نظيفين. يوفر درعاً مضاداً للتلوث (Anti-pollution shield).', en: 'Apply to a clean face and neck. Provides an anti-pollution shield.' },
        layering: { do_not_mix_with: { ar: ['مقشرات الأحماض الخارجية القوية.', 'Strong external acid exfoliants.'] }, best_mixed_with: { ar: ['غسول Age-Purify Clean.', 'Age-Purify Clean Cleansing Gel.'] } }
    },
    precautions: {
        indications: { ar: 'حب شباب البالغين (Adult Acne)، المسام الواسعة، الرؤوس السوداء، مقترنة بالتجاعيد والخطوط.', en: 'Adult acne, enlarged pores, blackheads, coupled with wrinkles and lines.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'قوام فلويد غير دهني (Mattifying). يُمنع للحوامل بسبب تعدد الأحماض.', en: 'Non-greasy fluid texture (Mattifying). Contraindicated for pregnancy due to multiple acids.' }
    }
});

// [101] Age-Purify Intensive Serum
deepProductsList.push({
    id: 'fil_age_purify_serum', brandId: 'filorga', familyId: 'age_purify', brand: 'Filorga',
    name: { ar: 'إيدج-بيوريفاي إنتينسيف سيروم', en: 'Age-Purify Intensive Double Correction Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (للتقشير والنفاذية)', en: 'Acidic (for peeling & permeability)' },
        mechanism: { 
            ar: 'النسخة المركزة من تكنولوجيا الإصلاح المزدوج. يعمل كعلاج صدمة (Shock treatment)؛ حيث تخترق الأحماض الخمسة لعمق المسام لإذابة الزهم المتحجر، بينما تقوم الببتيدات بإعادة هيكلة مصفوفة الكولاجين.', 
            en: 'The concentrated version of the dual-repair technology. Acts as a shock treatment; the 5 acids penetrate deep into pores to dissolve hardened sebum, while peptides restructure the collagen matrix.' 
        },
        patient_benefit: { 
            ar: 'يوازن البشرة الدهنية المتقدمة في السن بشكل دراماتيكي، يقلل الالتهاب والبثور بسرعة، ويصقل نسيج الجلد ليكون أكثر نعومة وتجانساً.', 
            en: 'Dramatically rebalances aging oily skin, rapidly reduces inflammation and blemishes, and refines skin texture to be smoother and more even.' 
        },
        active_ingredients: [
            { name: 'Dermo-Rescue CX', concentration: { ar: 'تركيز أقصى', en: 'Maximum Concentration' }, role: { ar: 'علاج حبوب البالغين القاسية.', en: 'Treating severe adult acne.' } },
            { name: 'Hyaluro-Youth CX', concentration: { ar: 'مكثف', en: 'Intense' }, role: { ar: 'شد الجلد وملء خطوط التعبير.', en: 'Firming skin and plumping expression lines.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (أو مرة مساءً حسب تحمل البشرة).', en: 'Twice daily (or once PM depending on tolerance).' },
        step_in_routine: { ar: 'سيروم العلاج المركز.', en: 'Intensive treatment serum.' },
        application: { ar: 'توضع بضع قطرات على الوجه بالكامل وتُدلك بلطف. يترك ليمتص قبل الفلويد.', en: 'Apply a few drops to the entire face and massage gently. Let absorb before fluid.' },
        layering: { do_not_mix_with: { ar: ['الريتينول (في نفس الليلة).', 'Retinol (on the same night).'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'البثور المتكيسة للبالغين، اللمعان المزمن، البشرة السميكة المتجعدة.', en: 'Adult cystic blemishes, chronic shine, and thick wrinkled skin.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'خفيف جداً ولا يترك طبقة لزجة. واقي الشمس نهاراً إلزامي.', en: 'Ultra-light and leaves no sticky film. Daytime SPF is mandatory.' }
    }
});

// [102] Age-Purify Clean Cleansing Gel
deepProductsList.push({
    id: 'fil_age_purify_clean', brandId: 'filorga', familyId: 'age_purify', brand: 'Filorga',
    name: { ar: 'إيدج-بيوريفاي كلين (غسول منقي ومجدد)', en: 'Age-Purify Clean Smoothing Purifying Gel' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن لعدم التجريد', en: 'Balanced to prevent stripping' },
        mechanism: { 
            ar: 'غسول ذو مصفوفة ثلاثية الأبعاد (3D Matrix). يزيل الشوائب وجزيئات التلوث، ويحتوي على مزيج خفيف من (Hyaluro-Youth CX) للترطيب أثناء الغسيل، ومستخلصات الزنك لتنقية المسام وتقليل البكتيريا.', 
            en: 'A 3D Matrix cleanser. Removes impurities and pollution particles, containing a light blend of (Hyaluro-Youth CX) for hydration during washing, and Zinc extracts to purify pores and reduce bacteria.' 
        },
        patient_benefit: { 
            ar: 'يترك البشرة نظيفة، مشدودة، ومريحة جداً. لا يسبب الإحساس بالشد الجاف المعتاد من غسولات حب الشباب.', 
            en: 'Leaves the skin clean, taut, and highly comfortable. Does not cause the usual dry tightness associated with acne cleansers.' 
        },
        active_ingredients: [
            { name: 'Polysaccharides', concentration: { ar: 'منظف عميق', en: 'Deep Cleanser' }, role: { ar: 'إزالة الملوثات الدقيقة من السطح.', en: 'Removing micro-pollutants from the surface.' } },
            { name: 'Zinc + Smoothing Actives', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تنظيم الإفرازات وبدء عملية مقاومة الشيخوخة.', en: 'Regulating secretions and initiating anti-aging.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف).', en: 'Step 1 (Cleansing).' },
        application: { ar: 'يُدلك على بشرة مبللة حتى يتحول إلى رغوة دقيقة، ثم يُشطف بالماء.', en: 'Massage onto wet skin until it transforms into a fine foam, then rinse with water.' },
        layering: { do_not_mix_with: { ar: ['أجهزة التنظيف العنيفة.', 'Harsh cleansing devices.'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'غسيل البشرة الدهنية للبالغين، المعرضة للتجاعيد.', en: 'Cleansing adult oily skin, prone to wrinkles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'رغوة خفيفة جداً تترك البشرة غير لامعة.', en: 'Very light foam leaving the skin matte.' }
    }
});
// ==========================================
// 💊 البلوك الثالث والعشرين (Block 23): FILORGA - Oxygen-Glow Family
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['super_skin_boosting_factors'] = {
    title: { ar: 'معززات البشرة الفائقة 🚀', en: 'Super-Skin Boosting Factors 🚀' },
    desc: { 
        ar: 'مركب حصري يجمع بين 3 عناصر: (معزز الأكسجين) المستخلص من زهرة الكبوسين لتحفيز التنفس الخلوي، (حمض الهيالورونيك) للنفخ والترطيب، و(إنزيم L) لإزالة السموم. يعمل هذا الثلاثي على تنشيط البشرة الباهتة فوراً.', 
        en: 'An exclusive complex combining 3 elements: an Oxygen-booster extracted from Nasturtium to stimulate cellular respiration, Hyaluronic Acid for plumping, and L-Enzyme for detoxification. This trio instantly revitalizes dull skin.' 
    }
};

glossaryDict['photoperfector_hd'] = {
    title: { ar: 'تكنولوجيا فوتو-بيرفيكتور 📸', en: 'Photoperfector HD Technology 📸' },
    desc: { 
        ar: 'جزيئات ضوئية دقيقة جداً (Optical Illuminators) مدمجة في تركيبة المنتجات. تعمل على تشتيت الضوء عند سقوطه على البشرة لتمويه عيوب السطح، المسام الواسعة، والخطوط الدقيقة بصرياً، كأنك تستخدم "فلتر" تجميلي.', 
        en: 'Microscopic optical illuminators embedded in the formula. They scatter incoming light to visually blur surface imperfections, enlarged pores, and fine lines, acting like a real-life cosmetic "filter".' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [103] Oxygen-Glow Cream
deepProductsList.push({
    id: 'fil_oxygen_glow_cream', brandId: 'filorga', familyId: 'oxygen_glow', brand: 'Filorga',
    name: { ar: 'أوكسجين-جلو كريم (للنضارة الفائقة)', en: 'Oxygen-Glow Super-Perfecting Radiance Cream' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'ينقل <span class="glossary-term" onclick="openGlossary(\'super_skin_boosting_factors\')">معززات البشرة الفائقة</span> لضخ الأكسجين في الخلايا وإزالة السموم المتراكمة (Detox)، بينما تعمل تكنولوجيا <span class="glossary-term" onclick="openGlossary(\'photoperfector_hd\')">فوتو-بيرفيكتور HD</span> على إخفاء العيوب بصرياً وتوحيد السطح ميكانيكياً باستخدام ببتيد معزز للون.', 
            en: 'Delivers <span class="glossary-term" onclick="openGlossary(\'super_skin_boosting_factors\')">Super-Skin Boosting Factors</span> to oxygenate cells and detoxify, while <span class="glossary-term" onclick="openGlossary(\'photoperfector_hd\')">Photoperfector HD</span> technology visually blurs flaws and mechanically evens the surface using a color-control peptide.' 
        },
        patient_benefit: { 
            ar: 'يمنح البشرة إشراقة وردية فورية، يرطب وينفخ، ويخفي المسام والعيوب الخفيفة، مما يجعله بديلاً رائعاً أو أساساً (Primer) ممتازاً قبل المكياج.', 
            en: 'Grants an instant rosy radiance, hydrates and plumps, and conceals pores and slight imperfections, making it a superb alternative or Primer before makeup.' 
        },
        active_ingredients: [
            { name: 'Nasturtium Extract + HA', concentration: { ar: 'منشط تنفسي', en: 'Respiratory Activator' }, role: { ar: 'ضخ الأكسجين ونفخ الجلد.', en: 'Oxygenating and plumping the skin.' } },
            { name: 'Optical Illuminators', concentration: { ar: 'لؤلؤي دقيق', en: 'Micro-pearlescent' }, role: { ar: 'إضاءة وتمويه العيوب بصرياً.', en: 'Illuminating and visually blurring flaws.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'كريم الترطيب والإشراق.', en: 'Moisturizing and radiance cream.' },
        application: { ar: 'يوزع على كامل الوجه والرقبة. قوام كريمي بلون وردي فاتح يندمج مع جميع ألوان البشرة.', en: 'Distribute over entire face and neck. A light pink creamy texture that blends with all skin tones.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'البشرة الباهتة، الإرهاق، لون البشرة غير المتجانس، والمسام الظاهرة.', en: 'Dull skin, fatigue, uneven skin tone, and visible pores.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تأثير تجميلي علاجي فوري (Flash effect).', en: 'Instant cosmetic and therapeutic flash effect.' }
    }
});

// [104] Oxygen-Glow Eyes
deepProductsList.push({
    id: 'fil_oxygen_glow_eyes', brandId: 'filorga', familyId: 'oxygen_glow', brand: 'Filorga',
    name: { ar: 'أوكسجين-جلو للعين (نضارة وتمويه الهالات)', en: 'Oxygen-Glow Super-Smoothing Radiance Eye Care' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن للعين', en: 'Balanced for Eye Contour' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'super_skin_boosting_factors\')">معززات الأكسجين والهيالورونيك</span> لإنعاش الخلايا حول العين، مدعوماً بجزيئات لؤلؤية دقيقة تعكس الضوء لتقليل عتامة الهالات السوداء بصرياً، ومستخلص الجريب فروت لتقليل التصبغ.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'super_skin_boosting_factors\')">Oxygen and HA boosters</span> to revive peri-ocular cells, backed by micro-pearlescent particles to reflect light and visually reduce dark circle opacity, and Grapefruit extract to reduce pigmentation.' 
        },
        patient_benefit: { 
            ar: 'يضيء محيط العين المظلم فوراً، يملأ خطوط الجفاف الدقيقة، ويمنح نظرة مرتاحة (Awake look) حتى بعد ليالي السهر.', 
            en: 'Instantly illuminates the dark eye contour, plumps fine dehydration lines, and grants an awake look even after sleepless nights.' 
        },
        active_ingredients: [
            { name: 'L-Enzyme + Hyaluronic Acid', concentration: { ar: 'مزيل سموم', en: 'Detoxifier' }, role: { ar: 'تخليص الخلايا من السموم وترطيب مكثف.', en: 'Detoxifying cells and intense hydration.' } },
            { name: 'HD Photoperfectors', concentration: { ar: 'مضيء', en: 'Illuminator' }, role: { ar: 'تمويه بصري سريع للهالات.', en: 'Quick optical blurring of dark circles.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'عناية العين المضيئة.', en: 'Illuminating eye care.' },
        application: { ar: 'يُربت بلطف حول العينين. يمكن وضعه فوق المكياج خلال اليوم لتجديد الإضاءة (Touch-up).', en: 'Pat gently around the eyes. Can be applied over makeup during the day for a touch-up.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['كونسيلر الهالات لتعزيز الإضاءة.', 'Dark circle concealer to boost illumination.'] } }
    },
    precautions: {
        indications: { ar: 'العيون المتعبة، الهالات الداكنة، خطوط الجفاف، والنظرة الباهتة.', en: 'Tired eyes, dark circles, dehydration lines, and a dull gaze.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تم اختباره من قبل أطباء العيون.', en: 'Ophthalmologically tested.' }
    }
});

// [105] Oxygen-Glow Mask
deepProductsList.push({
    id: 'fil_oxygen_glow_mask', brandId: 'filorga', familyId: 'oxygen_glow', brand: 'Filorga',
    name: { ar: 'أوكسجين-جلو ماسك (إكسبريس النضارة 10 دقائق)', en: 'Oxygen-Glow Super-Perfecting Express Mask' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'ماسك طوارئ مركز. يدمج <span class="glossary-term" onclick="openGlossary(\'super_skin_boosting_factors\')">عوامل تعزيز الأكسجين</span> مع ثلاثي تقشير دقيق (Gluconolactone، خلاصة الجريب فروت، والبابايا) لتسريع التخلص من الخلايا الميتة المتراكمة التي تسبب بهتان البشرة.', 
            en: 'An SOS concentrated mask. Combines <span class="glossary-term" onclick="openGlossary(\'super_skin_boosting_factors\')">Oxygen-boosting factors</span> with a micro-peeling trio (Gluconolactone, Grapefruit, and Papaya extracts) to accelerate the removal of accumulated dead cells causing dullness.' 
        },
        patient_benefit: { 
            ar: 'في 10 دقائق فقط: يمحو الإرهاق، يقشر السطح بلطف شديد لزيادة النعومة، ويضخ إشراقة فورية ومبهرة للبشرة استعداداً للمناسبات.', 
            en: 'In just 10 minutes: erases fatigue, ultra-gently peels the surface for increased smoothness, and infuses an instant, dazzling radiance to the skin pre-events.' 
        },
        active_ingredients: [
            { name: 'Gluconolactone (PHA) + Papain', concentration: { ar: 'مقشر إنزيمي', en: 'Enzymatic Exfoliant' }, role: { ar: 'إزالة الخلايا الميتة بأمان.', en: 'Safely removing dead cells.' } },
            { name: 'Nasturtium Extract', concentration: { ar: 'منشط', en: 'Activator' }, role: { ar: 'تعزيز الأكسجة الخلوية السريعة.', en: 'Boosting rapid cellular oxygenation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '1 إلى 3 مرات أسبوعياً.', en: '1 to 3 times a week.' },
        step_in_routine: { ar: 'ماسك علاجي وتجميلي سريع.', en: 'Express therapeutic/cosmetic mask.' },
        application: { ar: 'توضع طبقة كثيفة على بشرة نظيفة وجافة (وجه وعنق). يُترك لمدة 10 دقائق ثم يمسح بقطنة مبللة.', en: 'Apply a thick layer to clean, dry skin (face & neck). Leave for 10 minutes then wipe off with a damp cotton pad.' },
        layering: { do_not_mix_with: { ar: ['مقشرات قوية جداً قبله.', 'Very strong exfoliants prior.'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'تحضير البشرة للمناسبات، البشرة المختنقة من التلوث، والبهتان الشديد.', en: 'Pre-event skin prep, pollution-asphyxiated skin, and severe dullness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام معدني وردي لامع.', en: 'Metallic pink shiny texture.' }
    }
});

// [106] Oxygen-Glow Clean
deepProductsList.push({
    id: 'fil_oxygen_glow_clean', brandId: 'filorga', familyId: 'oxygen_glow', brand: 'Filorga',
    name: { ar: 'أوكسجين-جلو كلين (منظف ومزيل مكياج)', en: 'Oxygen-Glow Clean Super Cleanser' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'غسول هلامي يذوب ليصبح منظفاً عميقاً. يحتوي على عوامل تنظيف لطيفة تزيل المكياج والتلوث، مع عوامل ترطيب و <span class="glossary-term" onclick="openGlossary(\'super_skin_boosting_factors\')">نياسيناميد</span> لحماية حاجز البشرة من التجريد المائي.', 
            en: 'A jelly cleanser that melts into a deep wash. Contains mild cleansing agents removing makeup and pollution, with hydrating factors and Niacinamide to protect the skin barrier from stripping.' 
        },
        patient_benefit: { 
            ar: 'خطوة واحدة للوجه والعين. ينظف وينقي ويزيل المكياج (حتى المقاوم للماء) دون ترك البشرة مشدودة أو جافة.', 
            en: 'One step for face and eyes. Cleanses, purifies, and removes makeup (even waterproof) without leaving the skin tight or dry.' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'تلطيف الجلد أثناء الغسيل.', en: 'Soothing skin during washing.' } },
            { name: 'Oxygenating Agents', concentration: { ar: 'منقي', en: 'Purifying' }, role: { ar: 'إزالة السموم الملوثة.', en: 'Removing polluting toxins.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'التنظيف الأساسي.', en: 'Core cleansing.' },
        application: { ar: 'يُدلك على بشرة جافة أو مبللة حتى يتحول لزيت/رغوة خفيفة، يُدلك على الوجه والعين ثم يُشطف.', en: 'Massage onto dry or wet skin until it turns into a light oil/foam, massage over face and eyes then rinse.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'التنظيف اليومي، إزالة المكياج، والبشرة المعرضة للبيئات الملوثة.', en: 'Daily cleansing, makeup removal, and skin exposed to polluted environments.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن على العيون.', en: 'Safe for eyes.' }
    }
});

// [107] Oxygen-Glow CC Cream SPF 30
deepProductsList.push({
    id: 'fil_oxygen_glow_cc', brandId: 'filorga', familyId: 'oxygen_glow', brand: 'Filorga',
    name: { ar: 'أوكسجين-جلو CC كريم (واقي شمس مصحح)', en: 'Oxygen-Glow CC Cream SPF 30' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يجمع بين ثلاثية فيلورجا (الأكسجين، الهيالورونيك، وإنزيم الديتوكس) مع فلاتر حماية من الأشعة فوق البنفسجية والضوء الأزرق، وأصباغ دقيقة متكيفة (Micro-pigments) تتغير لتتناسب مع لون البشرة الفعلي بمجرد التدليك.', 
            en: 'Combines Filorga\'s trio (Oxygen, HA, Detox L-Enzyme) with UV and Blue Light filters, and adaptive micro-pigments that morph to match the actual skin tone upon massaging.' 
        },
        patient_benefit: { 
            ar: 'عناية هجينة توفر حماية حضرية (شمس وتلوث)، توحد لون البشرة بظل وردي عالمي (Universal pink tint)، وتمنح إشراقة طبيعية خالية من العيوب.', 
            en: 'Hybrid care providing urban protection (sun & pollution), evens skin tone with a universal pink tint, and grants a natural flawless glow.' 
        },
        active_ingredients: [
            { name: 'UVA/UVB Filters + Blue Light Shield', concentration: { ar: 'SPF 30 / PA+++', en: 'SPF 30 / PA+++' }, role: { ar: 'حماية من الشيخوخة الضوئية.', en: 'Protection against photo-aging.' } },
            { name: 'Adaptive Micro-Pigments', concentration: { ar: 'تجميلي', en: 'Cosmetic' }, role: { ar: 'تصحيح وتوحيد لون البشرة.', en: 'Correcting and evening skin tone.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً.', en: 'Morning.' },
        step_in_routine: { ar: 'الخطوة النهارية (حماية وتجميل).', en: 'Daytime step (Protection & Cosmetic).' },
        application: { ar: 'يوضع على كامل الوجه والرقبة. يُدلك بلطف لتفعيل كبسولات اللون حتى تندمج مع البشرة.', en: 'Apply to entire face and neck. Massage gently to activate color capsules to blend with the skin.' },
        layering: { do_not_mix_with: { ar: ['الاستخدام الليلي.', 'Nighttime use.'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'الحماية اليومية، عدم تجانس اللون، والبشرة الباهتة.', en: 'Daily protection, uneven tone, and dull skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لون موحد يناسب معظم درجات البشرة.', en: 'Universal shade suitable for most skin tones.' }
    }
});
// ==========================================
// 💊 البلوك الرابع والعشرين (Block 24): FILORGA - Skin-Unify & Pigment
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['laser_peel_strobing'] = {
    title: { ar: 'المركب الثلاثي (ليزر - بيلينج - ستروبينج) ✨', en: 'Triple Aesthetic Complex (Laser-Peel-Strobing) ✨' },
    desc: { 
        ar: 'تقنية ثلاثية مستوحاة من العيادات: محاكاة الليزر (فيتامين C، الجلابريدين، ومستخلص الطحالب لتقليل بقع الميلانين)، محاكاة التقشير (عامل تجديد سطحي)، ومحاكاة الستروبينج الطبي (حمض هيالورونيك لضخ الامتلاء والضوء).', 
        en: 'A clinic-inspired triple technique: Laser-like (Vit C, Glabridin, Algae extract to reduce melanin spots), Peeling-like (resurfacing active), and Medical Strobing-like (Hyaluronic acid to pump volume and light).' 
    }
};

glossaryDict['hexylresorcinol_cx'] = {
    title: { ar: 'هيكسيل-ريزورسينول (Hexylresorcinol) 🧬', en: 'Hexylresorcinol 🧬' },
    desc: { 
        ar: 'مركب تفتيح قوي جداً، يُعتبر بديلاً تجميلياً آمناً للهيدروكينون. يعمل على التثبيط المباشر لإنزيم التيروزيناز لمنع تكون بقع داكنة جديدة وتفكيك البقع العنيدة والمستقرة.', 
        en: 'A highly potent brightening compound, considered a safe cosmetic alternative to Hydroquinone. It directly inhibits the Tyrosinase enzyme to prevent new dark spots and dismantle stubborn, established spots.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [108] Skin-Unify Intensive Serum
deepProductsList.push({
    id: 'fil_skin_unify_intensive', brandId: 'filorga', familyId: 'skin_unify', brand: 'Filorga',
    name: { ar: 'سكين يونيفاي إنتينسيف سيروم (للتصبغات)', en: 'Skin-Unify Intensive Illuminating Even Skin Tone Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن للامتصاص', en: 'Balanced for Absorption' },
        mechanism: { 
            ar: 'سيروم علاجي يستهدف التصبغات عبر <span class="glossary-term" onclick="openGlossary(\'laser_peel_strobing\')">المركب الثلاثي (ليزر-تقشير-إضاءة)</span>. يحتوي على ببتيد إضافي مضاد للأكسدة لحماية البشرة من الجذور الحرة التي تحفز التصبغ المخفي.', 
            en: 'A therapeutic serum targeting pigmentation via the <span class="glossary-term" onclick="openGlossary(\'laser_peel_strobing\')">Triple Aesthetic Complex (Laser-Peel-Strobing)</span>. Contains an additional antioxidant peptide to protect the skin from free radicals that trigger hidden pigmentation.' 
        },
        patient_benefit: { 
            ar: 'يقلل من كثافة وحجم البقع الداكنة بشكل دراماتيكي، يوحد لون البشرة، ويعيد الإشراقة المفقودة للوجه الباهت بشدة.', 
            en: 'Dramatically reduces the intensity and size of dark spots, evens skin tone, and restores lost radiance to severely dull faces.' 
        },
        active_ingredients: [
            { name: 'Vitamin C + Glabridin + Algae', concentration: { ar: 'مكثف (ليزر)', en: 'Intense (Laser-like)' }, role: { ar: 'تثبيط تصنيع الميلانين.', en: 'Inhibiting melanin synthesis.' } },
            { name: 'Resurfacing Active + HA', concentration: { ar: 'مجدد', en: 'Renewer' }, role: { ar: 'تقشير الخلايا الداكنة ونفخ الجلد.', en: 'Exfoliating dark cells and plumping skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'السيروم العلاجي الأساسي.', en: 'Core therapeutic serum.' },
        application: { ar: 'توضع بضع قطرات على الوجه والرقبة. يجب استخدام واقي شمس نهاراً.', en: 'Apply a few drops to face and neck. Daytime SPF is mandatory.' },
        layering: { do_not_mix_with: { ar: ['مقشرات الأحماض (AHA/BHA) لتجنب التحسس.', 'Acid exfoliants (AHA/BHA) to avoid sensitization.'] }, best_mixed_with: { ar: ['كريم Skin-Unify لختم العلاج.', 'Skin-Unify Cream to seal the treatment.'] } }
    },
    precautions: {
        indications: { ar: 'البقع الداكنة المستعصية، الكلف، آثار الحبوب الداكنة، واللون غير الموحد.', en: 'Stubborn dark spots, melasma, dark acne marks, and uneven tone.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'يحتوي على مواد تقشير وتفتيح قوية، يُمنع للحوامل.', en: 'Contains strong peeling and brightening agents, contraindicated for pregnancy.' }
    }
});

// [109] Skin-Unify Cream
deepProductsList.push({
    id: 'fil_skin_unify_cream', brandId: 'filorga', familyId: 'skin_unify', brand: 'Filorga',
    name: { ar: 'سكين يونيفاي كريم (توحيد اللون والإضاءة)', en: 'Skin-Unify Illuminating Even Skin Tone Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'كريم يعتمد على تكنولوجيا <span class="glossary-term" onclick="openGlossary(\'laser_peel_strobing\')">الليزر والتقشير والستروبينج</span>، مدمجاً في تركيبة ناعمة تحتوي على جزيئات لؤلؤية بصرية (Optical Blurring) لإعطاء تأثير إضاءة فورية وتجانس في السطح.', 
            en: 'A cream based on the <span class="glossary-term" onclick="openGlossary(\'laser_peel_strobing\')">Laser, Peel, and Strobing</span> technology, embedded in a smooth formula containing optical pearlescent particles (Blurring) to provide an instant illuminating effect and surface evenness.' 
        },
        patient_benefit: { 
            ar: 'يرطب البشرة، يعالج البقع الداكنة بشكل تدريجي ومستدام، ويمنح توهجاً فورياً يغني عن استخدام كريمات الأساس الخفيفة.', 
            en: 'Hydrates the skin, treats dark spots progressively and sustainably, and grants an instant glow that replaces the need for light foundations.' 
        },
        active_ingredients: [
            { name: 'Core Illuminating Complex', concentration: { ar: 'عالي', en: 'High' }, role: { ar: 'تفتيح شامل للوجه والرقبة.', en: 'Global brightening for face and neck.' } },
            { name: 'Optical Soft-Focus Agents', concentration: { ar: 'تجميلي', en: 'Cosmetic' }, role: { ar: 'إخفاء بصري فوري للتصبغات.', en: 'Instant optical blurring of pigmentation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الترطيب وعلاج التصبغ.', en: 'Moisturizing and pigmentation treatment.' },
        application: { ar: 'يوزع على الوجه والرقبة بعد السيروم.', en: 'Distribute over face and neck post-serum.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'البشرة الباهتة، التصبغات العمرية والضوئية، وافتقار الوجه للإشراقة.', en: 'Dull skin, age/photo-pigmentation, and lack of facial radiance.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'قوام ذوباني يترك لمسة مخملية مضيئة.', en: 'Melting texture leaving a luminous velvety finish.' }
    }
});

// [110] Skin-Unify Radiance Fluid
deepProductsList.push({
    id: 'fil_skin_unify_radiance', brandId: 'filorga', familyId: 'skin_unify', brand: 'Filorga',
    name: { ar: 'سكين يونيفاي راديانس (فلويد الإضاءة)', en: 'Skin-Unify Radiance Illuminating Perfecting Fluid' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'علاج موضعي هجين (Skincare + Highlighter). يحتوي على التركيبة الأساسية للتفتيح، ولكنه مشبع بجزيئات لؤلؤية دقيقة تعكس الضوء الساقط لعمل (Medical Strobing) على المناطق البارزة من الوجه.', 
            en: 'A hybrid targeted treatment (Skincare + Highlighter). Contains the core brightening formula but is saturated with micro-pearlescent particles that reflect light for a (Medical Strobing) effect on the prominent areas of the face.' 
        },
        patient_benefit: { 
            ar: 'يُستخدم كـ "هايلايتر طبي" سائل. يعطي إضاءة مبهرة وفورية لعظام الخد والأنف، بينما يعالج التصبغات تحت الجلد على المدى الطويل.', 
            en: 'Used as a liquid "Medical Highlighter". Gives an instant, dazzling illumination to cheekbones and nose, while treating subcutaneous pigmentation long-term.' 
        },
        active_ingredients: [
            { name: 'Mother-of-Pearl Particles', concentration: { ar: 'مكثف', en: 'Intense' }, role: { ar: 'إضاءة طبيعية ساطعة (Strobing).', en: 'Bright natural illumination (Strobing).' } },
            { name: 'Hyaluronic Acid', concentration: { ar: 'مرطب', en: 'Hydrating' }, role: { ar: 'نفخ المناطق البارزة.', en: 'Plumping prominent areas.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة (صباحاً أو قبل المناسبات).', en: 'As needed (AM or pre-events).' },
        step_in_routine: { ar: 'الخطوة الأخيرة (فوق المكياج أو الكريم).', en: 'Last step (over makeup or cream).' },
        application: { ar: 'يطبق موضعياً على المناطق المراد إضاءتها (عظام الخد، قوس كيوبيد، جسر الأنف) ويُدمج بالتربيت.', en: 'Apply locally to areas to be highlighted (cheekbones, Cupid\'s bow, nose bridge) and blend by patting.' },
        layering: { do_not_mix_with: { ar: ['تطبيقه على كامل الوجه (سيجعل الوجه لامعاً جداً).', 'Applying to entire face (will make the face excessively shiny).'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'إبراز ملامح الوجه، التمويه البصري، وعلاج التصبغات الموضعية.', en: 'Highlighting facial features, optical blurring, and targeted pigmentation treatment.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'عبوة بحجم 15 مل بقطارة للتحكم الدقيق في الإضاءة.', en: '15ml bottle with a dropper for precise illumination control.' }
    }
});

// [111] Pigment-Perfect Serum
deepProductsList.push({
    id: 'fil_pigment_perfect_serum', brandId: 'filorga', familyId: 'skin_unify', brand: 'Filorga',
    name: { ar: 'بيجمنت بيرفكت سيروم (للتبقع)', en: 'Pigment-Perfect Dark Spot Corrector Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'الجيل الكلاسيكي القوي. يستخدم خلاصة نبتة الجنجل (Hop Extract) لتنظيم تصنيع الميلانين، والبابونج الذهبي (Golden Chamomile) كمضاد قوي للالتهاب ومهدئ للإجهاد التأكسدي المسبب للتصبغ.', 
            en: 'The strong classic generation. Uses Hop Extract to regulate melanogenesis, and Golden Chamomile as a potent anti-inflammatory and soothing agent for oxidative stress causing pigmentation.' 
        },
        patient_benefit: { 
            ar: 'يصحح التصبغات الموجودة ويمنع ظهور البقع الجديدة الناتجة عن الشمس أو تقدم العمر، ويوحد السحنة بشكل فعال.', 
            en: 'Corrects existing pigmentation and prevents new spots caused by sun or aging, effectively evening out the complexion.' 
        },
        active_ingredients: [
            { name: 'Hop Extract', concentration: { ar: 'عالي', en: 'High' }, role: { ar: 'تثبيط نشاط التيروزيناز بقوة.', en: 'Strongly inhibiting Tyrosinase activity.' } },
            { name: 'Vitamin C (Plant-derived)', concentration: { ar: 'مستقر', en: 'Stable' }, role: { ar: 'تفتيح اللون البني.', en: 'Brightening brown discoloration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'السيروم المعالج.', en: 'Treatment serum.' },
        application: { ar: 'يوضع قبل الكريم اليومي أو كريم الحماية من الشمس.', en: 'Apply before daily cream or sunscreen.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['Pigment White Cream.', 'Pigment White Cream.'] } }
    },
    precautions: {
        indications: { ar: 'بقع العمر، بقع الشمس، الكلف، والتصبغات الناتجة عن الالتهاب.', en: 'Age spots, sun spots, melasma, and post-inflammatory pigmentation.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'تركيبة فعالة، تتطلب استمرارية (لا تقل عن 8 أسابيع) لملاحظة الفرق.', en: 'Effective formula, requires consistency (at least 8 weeks) to notice a difference.' }
    }
});

// [112] Pigment-White Cream
deepProductsList.push({
    id: 'fil_pigment_white_cream', brandId: 'filorga', familyId: 'skin_unify', brand: 'Filorga',
    name: { ar: 'بيجمنت وايت كريم (تفتيح ثلاثي الأبعاد)', en: 'Pigment-White 360° Multi-Revitalising Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعالج التصبغات بثلاثة أبعاد: تفتيح البقع (بواسطة <span class="glossary-term" onclick="openGlossary(\'hexylresorcinol_cx\')">هيكسيل-ريزورسينول</span> وخلاصة البرقوق)، تصحيح اصفرار البشرة (بواسطة الببتيدات المضادة للجلوزة Anti-glycation)، وإزالة الاحمرار السطحي (بفيتامين B3).', 
            en: 'Treats pigmentation in 3 dimensions: lightening spots (via <span class="glossary-term" onclick="openGlossary(\'hexylresorcinol_cx\')">Hexylresorcinol</span> and Plum extract), correcting yellowing (via Anti-glycation peptides), and removing surface redness (via Vitamin B3).' 
        },
        patient_benefit: { 
            ar: 'تأثير 360 درجة لصفاء البشرة. لا يفتح البقع فقط، بل يزيل الاصفرار والاحمرار، ليترك البشرة بيضاء، صافية، وموحدة.', 
            en: '360° effect for skin clarity. It doesn\'t just lighten spots, but removes yellowness and redness, leaving the skin white, clear, and even.' 
        },
        active_ingredients: [
            { name: 'Hexylresorcinol', concentration: { ar: 'عالي', en: 'High' }, role: { ar: 'بديل آمن للهيدروكينون للتفتيح العميق.', en: 'Safe Hydroquinone alternative for deep brightening.' } },
            { name: 'Niacinamide + Anti-Glycation Peptides', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'مكافحة الاصفرار والاحمرار.', en: 'Combating yellowing and redness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'كريم التفتيح.', en: 'Brightening cream.' },
        application: { ar: 'يوضع على كامل الوجه والرقبة. قوام غني يمتص ليترك لمسة غير لامعة.', en: 'Apply to entire face and neck. Rich texture absorbs leaving a matte finish.' },
        layering: { do_not_mix_with: { ar: ['التعرض للشمس دون واقي قوي (SPF50+).', 'Sun exposure without strong SPF50+ protection.'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'الكلف العنيد، البقع الداكنة، اصفرار البشرة بسبب تقدم العمر، والاحمرار.', en: 'Stubborn melasma, dark spots, age-related yellowing, and redness.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'ممنوع للحوامل لاحتوائه على الريزورسينول ومواد تفتيح قوية.', en: 'Contraindicated for pregnancy due to Resorcinol and strong brightening agents.' }
    }
});
// ==========================================
// 💊 البلوك الخامس والعشرين (Block 25): FILORGA - Lift Family (PRP-Inspired)
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['plasmatic_lifting_factors'] = {
    title: { ar: 'عوامل الشد البلازمية 🩸', en: 'Plasmatic Lifting Factors 🩸' },
    desc: { 
        ar: 'مركب حصري مستوحى من حقن البلازما (PRP). يجمع بين (عوامل خلوية مستخلصة من الكركم لتعزيز تجدد الخلايا)، (كولاجين بحري لتعويض الفقد الهيكلي)، و(حمض الهيالورونيك منخفض الوزن الجزيئي لملء الأنسجة). يعمل هذا الثلاثي على شد الجلد المترهل وإعادة نحت ملامح الوجه.', 
        en: 'An exclusive complex inspired by Platelet-Rich Plasma (PRP) injections. Combines (Cellular factors from Curcuma to boost cell renewal), (Marine Collagen to compensate for structural loss), and (Low molecular weight HA to plump tissues). This trio tightens sagging skin and resculpts facial contours.' 
    }
};

glossaryDict['bio_cellulose_tech'] = {
    title: { ar: 'تقنية السليولوز الحيوي 🧬', en: 'Bio-Cellulose Technology 🧬' },
    desc: { 
        ar: 'ألياف حيوية دقيقة جداً (تُستخدم في الطب لعلاج الحروق العميقة). تلتصق بالوجه كجلد ثانٍ (Second Skin) لتضمن اختراقاً فائقاً للمواد الفعالة في وقت قياسي وبفعالية تضاهي الجلسات السريرية.', 
        en: 'Ultra-fine biological fibers (used medically to treat deep burns). Adheres to the face like a second skin, ensuring supreme penetration of active ingredients in record time with clinical-grade efficacy.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [113] Lift-Designer Serum
deepProductsList.push({
    id: 'fil_lift_designer_serum', brandId: 'filorga', familyId: 'lift_designer', brand: 'Filorga',
    name: { ar: 'ليفت-ديزاينر سيروم (لشد الترهلات)', en: 'Lift-Designer Ultra-Lifting Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن للامتصاص', en: 'Balanced for Absorption' },
        mechanism: { 
            ar: 'يضخ <span class="glossary-term" onclick="openGlossary(\'plasmatic_lifting_factors\')">عوامل الشد البلازمية</span> بعمق، مقترنة بمستخلصين نباتيين (Arabinoxylan & Microalgae) لشد الأنسجة ميكانيكياً وبيولوجياً، مزود بأداة تطبيق دوارة (Roller) لتنشيط التصريف اللمفاوي وتحفيز أنسجة الرقبة والفك.', 
            en: 'Infuses <span class="glossary-term" onclick="openGlossary(\'plasmatic_lifting_factors\')">Plasmatic Lifting Factors</span> deeply, paired with two botanical extracts (Arabinoxylan & Microalgae) for mechanical and biological tissue tightening. Features a roller applicator to stimulate lymphatic drainage and activate neck/jawline tissues.' 
        },
        patient_benefit: { 
            ar: 'تأثير شد فوري (Lifting effect) يدوم طوال اليوم. يحدد ملامح الوجه السفلية (Jawline)، يرفع الخدود، ويشد تجاعيد الرقبة المترهلة.', 
            en: 'Instant lifting effect that lasts all day. Reshapes the lower facial contours (Jawline), lifts the cheeks, and tightens sagging neck wrinkles.' 
        },
        active_ingredients: [
            { name: 'Plasmatic Lifting Factors (Collagen + HA + Cellular Factors)', concentration: { ar: 'تركيز فائق', en: 'Ultra-concentrated' }, role: { ar: 'محاكاة حقن البلازما لشد الجلد.', en: 'Mimicking PRP injections to firm the skin.' } },
            { name: 'Microalgae Extract', concentration: { ar: 'شاد بيولوجي', en: 'Biological Lifter' }, role: { ar: 'خلق شبكة شد غير مرئية على سطح الجلد.', en: 'Creating an invisible lifting mesh on the skin surface.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'سيروم الشد الأساسي.', en: 'Core lifting serum.' },
        application: { ar: 'يُطبق باستخدام الرولر المدمج على الرقبة، الفك، والخدين بحركات تصاعدية (Lifting massage).', en: 'Apply using the built-in roller on the neck, jawline, and cheeks with upward lifting massage.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['كريم Sleep & Lift المسائي.', 'Sleep & Lift cream in the PM.'] } }
    },
    precautions: {
        indications: { ar: 'فقدان الكثافة، الترهل الواضح (خاصة النصف السفلي من الوجه والرقبة)، وشيخوخة الجلد.', en: 'Loss of volume, visible sagging (especially lower face and neck), and aging skin.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'الرولر المصنوع من المعدن يبرد الجلد ويزيد من فعالية الشد الميكانيكي.', en: 'The metal roller cools the skin and enhances mechanical lifting efficacy.' }
    }
});

// [114] Sleep & Lift Night Cream
deepProductsList.push({
    id: 'fil_sleep_lift_cream', brandId: 'filorga', familyId: 'lift_designer', brand: 'Filorga',
    name: { ar: 'سليب أند ليفت كريم (شد ليلي مكثف)', en: 'Sleep & Lift Ultra-Lifting Night Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستغل فترة تجدد الخلايا ليلاً؛ حيث يدمج <span class="glossary-term" onclick="openGlossary(\'plasmatic_lifting_factors\')">عوامل الشد البلازمية</span> مع حمض أميني مزدوج (Amino acid duo) يستهدف استعادة مرونة الجلد ومنع تكسر بروتينات الكولاجين والإيلاستين أثناء النوم.', 
            en: 'Exploits the nocturnal cell renewal period; merges <span class="glossary-term" onclick="openGlossary(\'plasmatic_lifting_factors\')">Plasmatic Lifting Factors</span> with an Amino acid duo targeting skin elasticity restoration and preventing the breakdown of collagen/elastin proteins during sleep.' 
        },
        patient_benefit: { 
            ar: 'يعيد نحت الوجه ليلاً. تستيقظين ببشرة مشدودة، ممتلئة، وملامح وجه أكثر تحديداً وكثافة (Redensified).', 
            en: 'Resculpts the face overnight. You wake up with firm, plump skin and more defined, redensified facial contours.' 
        },
        active_ingredients: [
            { name: 'Plasmatic Lifting Factors', concentration: { ar: 'إصلاح ليلي', en: 'Night Repair' }, role: { ar: 'شد وإعادة الحجم المفقود.', en: 'Firming and restoring lost volume.' } },
            { name: 'Redensifying Amino Acids', concentration: { ar: 'مكثف', en: 'Densifying' }, role: { ar: 'استعادة الخصائص الميكانيكية للجلد (المرونة والارتداد).', en: 'Restoring mechanical skin properties (elasticity & bounce).' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily (PM).' },
        step_in_routine: { ar: 'كريم الليل العلاجي.', en: 'Therapeutic night cream.' },
        application: { ar: 'يوزع على وجه ورقبة نظيفين بعد السيروم. يُدلك بحركات شد لأعلى.', en: 'Distribute over clean face and neck post-serum. Massage with upward lifting motions.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'الترهل الليلي، الخطوط العميقة، فقدان بنية الوجه (Facial Structure) المتقدم.', en: 'Nocturnal sagging, deep lines, and advanced loss of facial structure.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'قوام بلسمي غني يغلف البشرة.', en: 'Rich balmy texture that envelopes the skin.' }
    }
});

// [115] Lift-Mask
deepProductsList.push({
    id: 'fil_lift_mask', brandId: 'filorga', familyId: 'lift_designer', brand: 'Filorga',
    name: { ar: 'ليفت-ماسك (ماسك الشد السريع)', en: 'Lift-Mask Ultra-Lifting Mask' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'ماسك ورقي يعتمد على <span class="glossary-term" onclick="openGlossary(\'bio_cellulose_tech\')">تقنية السليولوز الحيوي</span> ليعمل كـ "بقعة تسريب" (Patch-effect). يغمر الجلد بـ <span class="glossary-term" onclick="openGlossary(\'plasmatic_lifting_factors\')">عوامل الشد البلازمية</span> ومضادات الأكسدة القوية (Sophora Japonica) في 15 دقيقة فقط.', 
            en: 'A sheet mask utilizing <span class="glossary-term" onclick="openGlossary(\'bio_cellulose_tech\')">Bio-Cellulose Technology</span> to act as a delivery patch. Floods the skin with <span class="glossary-term" onclick="openGlossary(\'plasmatic_lifting_factors\')">Plasmatic Lifting Factors</span> and strong antioxidants (Sophora Japonica) in just 15 minutes.' 
        },
        patient_benefit: { 
            ar: 'تأثير (تجميلي-طبي) طارئ. يشد الوجه، ينفخ الخطوط، ويمنح نضارة مبهرة في ربع ساعة، مما يجعله التحضير المثالي قبل المناسبات الهامة.', 
            en: 'An SOS (Medico-Cosmetic) effect. Lifts the face, plumps lines, and delivers dazzling radiance in 15 minutes, making it the ultimate prep before major events.' 
        },
        active_ingredients: [
            { name: 'Cellular Factors + Collagen + HA', concentration: { ar: 'جرعة مكثفة', en: 'Intensive Dose' }, role: { ar: 'محاكاة الشد العيادي الفوري.', en: 'Mimicking instant clinical lifting.' } },
            { name: 'Sophora Japonica Extract', concentration: { ar: 'مضاد للشيخوخة', en: 'Anti-aging' }, role: { ar: 'حماية الخلايا وتفتيح السحنة.', en: 'Protecting cells and brightening the complexion.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '1 إلى 3 مرات أسبوعياً (أو قبل المناسبات).', en: '1 to 3 times a week (or pre-events).' },
        step_in_routine: { ar: 'عناية طوارئ لشد الوجه.', en: 'SOS lifting care.' },
        application: { ar: 'يُفتح الماسك، تُزال الشبكة الواقية، يوضع السليولوز على وجه نظيف لمدة 15 دقيقة. يُنزع الماسك ويُدلك السيروم المتبقي حتى يمتص (لا يُغسل).', en: 'Unfold mask, remove protective mesh, place bio-cellulose on clean face for 15 mins. Remove mask and massage remaining serum until absorbed (Do not rinse).' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'الترهل المفاجئ، الإرهاق الشديد، والتحضير للمناسبات الكبرى.', en: 'Sudden sagging, severe fatigue, and prep for major events.' },
        pregnancy_safe: false, sun_sensitivity: false, 
        notes: { ar: 'تأثير (Second Skin) يجعله مريحاً ومطابقاً لملامح الوجه.', en: 'Second Skin effect makes it comfortable and perfectly conforming to facial contours.' }
    }
});
// ==========================================
// 💊 البلوك السادس والعشرين (Block 26): FILORGA - Skin Prep & Cleansers
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['enzymatic_peel'] = {
    title: { ar: 'التقشير الإنزيمي (Enzymatic Peel) 🧪', en: 'Enzymatic Exfoliation 🧪' },
    desc: { 
        ar: 'تقنية تعتمد على إنزيم البابايين (Papain) لتفكيك الروابط بين الخلايا الميتة بلطف شديد دون الحاجة لفرك ميكانيكي، مما يسمح بتجديد السطح وتفتيح البشرة الحساسة بأمان.', 
        en: 'A technique using Papain enzyme to break down bonds between dead cells very gently without mechanical scrubbing, allowing surface renewal and brightening for sensitive skin safely.' 
    }
};

glossaryDict['cleansing_oil_tech'] = {
    title: { ar: 'تكنولوجيا الزيت المنظف 💧', en: 'Cleansing Oil Technology 💧' },
    desc: { 
        ar: 'تعتمد على مبدأ "المذيب يذيب شبيهه"؛ حيث تلتصق الزيوت النباتية بالدهون السطحية والمكياج المقاوم للماء لإزالتها كلياً، ثم تتحول لحليب عند ملامسة الماء لتُشطف دون ترك أثر دهني.', 
        en: 'Based on the "like dissolves like" principle; botanical oils adhere to surface lipids and waterproof makeup to remove them entirely, then emulsify into a milk upon contact with water for residue-free rinsing.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [116] Skin Prep Micellar Solution
deepProductsList.push({
    id: 'fil_skin_prep_micellar', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سكين بريب ميسيلار (محلول منظف)', en: 'Skin Prep Micellar Solution' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'محلول ميسيلار غني بالهيالورونيك والجلسرين. يزيل المكياج والشوائب والملوثات المجهرية مع الحفاظ على ترطيب الجلد ومنع تهيج الحاجز الواقي.', 
            en: 'Micellar solution enriched with Hyaluronic Acid and Glycerin. Removes makeup, impurities, and micro-pollutants while preserving skin hydration and preventing barrier irritation.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الجاف).', en: 'Step 1 (Dry Cleansing).' },
        application: { ar: 'يمسح الوجه والعين بقطنة مبللة بالمحلول. لا يحتاج للشطف.', en: 'Wipe face and eyes with a soaked cotton pad. No rinsing required.' }
    },
    precautions: { indications: { ar: 'جميع أنواع البشرة، إزالة المكياج اليومي.', en: 'All skin types, daily makeup removal.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [117] Skin Prep Enzymatic Cleansing Foam
deepProductsList.push({
    id: 'fil_skin_prep_foam', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سكين بريب رغوة التقشير الإنزيمي', en: 'Skin Prep Enzymatic Cleansing Foam' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'رغوة ذكية تستخدم <span class="glossary-term" onclick="openGlossary(\'enzymatic_peel\')">التقشير الإنزيمي</span> لتنظيف المسام بعمق وإزالة الخلايا الباهتة، مما يحسن ملمس الجلد فوراً ويهيئه للسيرومات.', 
            en: 'Smart foam using <span class="glossary-term" onclick="openGlossary(\'enzymatic_peel\')">Enzymatic Exfoliation</span> to deep-clean pores and remove dull cells, instantly improving skin texture and prepping it for serums.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً.', en: 'Once or twice daily.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف المائي).', en: 'Step 1 (Wet Cleansing).' },
        application: { ar: 'يُدلك على وجه مبلل لمدة 30 ثانية لتفعيل الإنزيمات ثم يُشطف جيداً.', en: 'Massage onto wet face for 30 seconds to activate enzymes then rinse thoroughly.' }
    },
    precautions: { indications: { ar: 'البشرة الباهتة، المسام الواسعة، والنسيج الخشن.', en: 'Dull skin, enlarged pores, and rough texture.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [118] Skin Prep AHA Cleansing Gel
deepProductsList.push({
    id: 'fil_skin_prep_aha_gel', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سكين بريب جل منظف بالأحماض', en: 'Skin Prep AHA Cleansing Gel' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { 
            ar: 'يجمع بين 3 أحماض (Mandelic, Citric, Glycolic) لعمل تقشير كيميائي سطحي أثناء الغسيل، مما يقلل اللمعان ويصفي الحبوب الصغيرة والرؤوس السوداء.', 
            en: 'Combines 3 acids (Mandelic, Citric, Glycolic) for surface chemical peeling during washing, reducing shine and clearing minor breakouts and blackheads.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً (أو مرتين للبشرة الدهنية جداً).', en: 'Once daily PM (or twice for very oily skin).' },
        application: { ar: 'يُرغى على الوجه ويُشطف. تجنب منطقة العين.', en: 'Lather on face and rinse. Avoid eye area.' }
    },
    precautions: { indications: { ar: 'البشرة المختلطة إلى الدهنية، والمعرضة للحبوب.', en: 'Combination to oily, acne-prone skin.' }, pregnancy_safe: false, sun_sensitivity: true }
});

// [119] Skin Prep Perfecting Cleansing Oil
deepProductsList.push({
    id: 'fil_skin_prep_oil', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سكين بريب الزيت المنظف المثالي', en: 'Skin Prep Perfecting Cleansing Oil' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'cleansing_oil_tech\')">تكنولوجيا الزيت</span> المعتمدة على الأوميجا 6 لإذابة أثقل أنواع المكياج وواقيات الشمس الفيزيائية بلمسة واحدة دون تجفيف الجلد.', 
            en: 'Utilizes <span class="glossary-term" onclick="openGlossary(\'cleansing_oil_tech\')">Oil Technology</span> based on Omega-6 to dissolve the heaviest makeup and physical sunscreens in one touch without drying the skin.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'مساءً (كخطوة أولى في التنظيف المزدوج).', en: 'PM (Step 1 in double cleansing).' },
        application: { ar: 'يُدلك على بشرة جافة، ثم يوضع القليل من الماء ليتحول لحليب، ثم يُشطف.', en: 'Massage onto dry skin, add a bit of water to emulsify into milk, then rinse.' }
    },
    precautions: { indications: { ar: 'إزالة المكياج المقاوم للماء وواقي الشمس.', en: 'Removing waterproof makeup and sunscreen.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [120] Skin Prep Enzymatic Exfoliating Cream (75ml)
deepProductsList.push({
    id: 'fil_skin_prep_exfoliant', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سكين بريب كريم التقشير الإنزيمي المكثف', en: 'Skin Prep Enzymatic Exfoliating Cream' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { 
            ar: 'علاج تقشير أسبوعي يدمج الإنزيمات مع الرمل البركاني الدقيق لعمل تقشير مزدوج (كيميائي وميكانيكي) لإعادة تسطيح الجلد بالكامل.', 
            en: 'Weekly peeling treatment merging enzymes with volcanic micro-sand for dual exfoliation (chemical & mechanical) to fully resurface the skin.' 
        }
    },
    clinical_usage: {
        frequency: { ar: '1-2 مرة أسبوعياً.', en: '1-2 times a week.' },
        application: { ar: 'يوضع على وجه مبلل، يُدلك بحركات دائرية لمدة دقيقة، ثم يُترك لدقيقتين إضافيتين لتنشيط الإنزيمات ويُشطف.', en: 'Apply to wet face, massage in circles for 1 min, leave for 2 extra mins for enzyme activation, then rinse.' }
    },
    precautions: { indications: { ar: 'الجلد السميك، الرؤوس السوداء، والبهتان الشديد.', en: 'Thick skin, blackheads, and severe dullness.' }, pregnancy_safe: true, sun_sensitivity: true }
});

// [121] Foam Cleanser (Classic 150ml)
deepProductsList.push({
    id: 'fil_classic_foam', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'فوم كلينزر (الغسول الرغوي الكلاسيكي)', en: 'Foam Cleanser' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'غسول رغوي غني جداً بحمض الهيالورونيك، ينظف ويرطب في آن واحد. مثالي للبشرة التي تبحث عن شعور النظافة مع الامتلاء.', 
            en: 'Foaming cleanser very rich in Hyaluronic Acid, cleansing and hydrating simultaneously. Ideal for skin seeking a clean yet plump feeling.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' } },
    precautions: { indications: { ar: 'جميع أنواع البشرة، خاصة الجافة والحساسة.', en: 'All skin types, especially dry and sensitive.' }, pregnancy_safe: true, sun_sensitivity: false }
});
// ==========================================
// 💊 البلوك السابع والعشرين (Block 27): FILORGA - Sun Care & Meso Treatments
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['photo_activated_tech'] = {
    title: { ar: 'تكنولوجيا التفعيل الضوئي ☀️', en: 'Photo-Activated Technology ☀️' },
    desc: { 
        ar: 'تكنولوجيا ذكية جداً في واقيات شمس فيلورجا. تستخدم حرارة الشمس والأشعة فوق البنفسجية نفسها لتفعيل إنزيمات بيولوجية ومضادات أكسدة داخل الكريم، مما يجعل حماية البشرة ومقاومتها للشيخوخة تزداد كلما زادت قوة الشمس.', 
        en: 'A highly smart technology in Filorga sunscreens. It uses the sun\'s heat and UV rays to activate biological enzymes and antioxidants within the cream, meaning the skin\'s protection and anti-aging defense increase as the sun gets stronger.' 
    }
};

glossaryDict['rhamnose_polysaccharide'] = {
    title: { ar: 'بولي سكاريد الرامنوز 🧬', en: 'Rhamnose Polysaccharide 🧬' },
    desc: { 
        ar: 'سكر معقد نشط بيولوجياً. يعمل كمهدئ فائق للالتهابات والاحمرار، وفي نفس الوقت يحفز إنتاج الكولاجين والإيلاستين، وهو السر وراء فعالية الـ (Meso-Mask) في تصفية البشرة المجهدة فوراً.', 
        en: 'A biologically active complex sugar. It acts as a supreme soother for inflammation and redness, while simultaneously stimulating collagen and elastin production. It is the secret behind the Meso-Mask\'s efficacy in instantly clearing stressed skin.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [122] UV-DEFENCE Anti-Aging / Dark Spots SPF 50+
deepProductsList.push({
    id: 'fil_uv_defence', brandId: 'filorga', familyId: 'sun_care', brand: 'Filorga',
    name: { ar: 'يو في ديفينس (واقي شمس للتجاعيد والتصبغات)', en: 'UV-DEFENCE Anti-Aging / Dark Spots SPF 50+' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يجمع بين فلاتر شمسية فائقة الفعالية، مع مستخلص نبتة الجنجل (Hop Extract) لمنع التصبغات الضوئية، وحمض الهيالورونيك ومركب NCEF لترميم التجاعيد أثناء التعرض للشمس.', 
            en: 'Combines ultra-effective sun filters with Hop Extract to prevent photo-pigmentation, and Hyaluronic Acid with NCEF complex to repair wrinkles during sun exposure.' 
        },
        patient_benefit: { 
            ar: 'يوفر حماية يومية عالية جداً، يمنع ظهور البقع البنية ويقلل الموجود منها، ويحافظ على امتلاء البشرة.', 
            en: 'Provides very high daily protection, prevents the appearance of brown spots while reducing existing ones, and maintains skin plumpness.' 
        },
        active_ingredients: [
            { name: 'UVA/UVB Filters + Vitamin E', concentration: { ar: 'SPF 50+', en: 'SPF 50+' }, role: { ar: 'حماية خلوية من الجذور الحرة.', en: 'Cellular protection from free radicals.' } },
            { name: 'Hop Extract + NCEF', concentration: { ar: 'مركب علاجي', en: 'Therapeutic Complex' }, role: { ar: 'مكافحة التصبغات والشيخوخة.', en: 'Anti-pigmentation and anti-aging.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً قبل التعرض للشمس.', en: 'Daily before sun exposure.' },
        step_in_routine: { ar: 'الخطوة النهارية الأخيرة.', en: 'Last daytime step.' },
        application: { ar: 'يوضع بسخاء على الوجه والرقبة، ويُجدد كل ساعتين عند التعرض المباشر.', en: 'Apply generously to face and neck, reapply every 2 hours during direct exposure.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['سيرومات التفتيح (مثل Pigment Perfect).', 'Brightening serums (like Pigment Perfect).'] } }
    },
    precautions: {
        indications: { ar: 'الوقاية بعد الليزر والتقشير، الحماية اليومية للبشرة المتبقعة والمتقدمة في السن.', en: 'Post-laser/peel prevention, daily protection for pigmented and aging skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام ذوباني لا يترك أثراً دهنياً.', en: 'Melting texture that leaves no greasy residue.' }
    }
});

// [123] UV-BRONZE Face Sun Fluid SPF 50+
deepProductsList.push({
    id: 'fil_uv_bronze_face', brandId: 'filorga', familyId: 'sun_care', brand: 'Filorga',
    name: { ar: 'يو في برونز للوجه (فلويد مضاد للشيخوخة)', en: 'UV-BRONZE Face Anti-Aging Sun Fluid SPF 50+' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'photo_activated_tech\')">تكنولوجيا التفعيل الضوئي</span> لتعزيز الحماية تحت أشعة الشمس القوية. غني بمركب السولفورافان (Sulforaphane) لشد التجاعيد، وفيتامين PP لعلاج البقع.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'photo_activated_tech\')">Photo-Activated Technology</span> to boost protection under intense sun. Rich in Sulforaphane to firm wrinkles, and Vitamin PP to treat spots.' 
        },
        patient_benefit: { 
            ar: 'درع حماية قوي جداً مصمم للشواطئ والأيام شديدة الحرارة. يحمي الوجه، يسمح باكتساب سمرة صحية (Tan) دون تلف، ويشد الجلد.', 
            en: 'A very strong protective shield designed for beaches and extreme heat. Protects the face, allows a healthy tan without damage, and firms the skin.' 
        },
        active_ingredients: [
            { name: 'Photo-Activated Technology', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تفعيل مضادات الأكسدة بالحرارة.', en: 'Activating antioxidants via heat.' } },
            { name: 'Sulforaphane + Vitamin PP', concentration: { ar: 'علاجي', en: 'Therapeutic' }, role: { ar: 'تنعيم التجاعيد ومنع البقع.', en: 'Smoothing wrinkles and preventing spots.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'عند التعرض القوي للشمس (شاطئ/سباحة).', en: 'During intense sun exposure (beach/swimming).' },
        application: { ar: 'يُرج جيداً، ثم يوضع بكثافة على الوجه.', en: 'Shake well, then apply generously to the face.' }
    },
    precautions: { indications: { ar: 'التعرض الشديد للشمس، البشرة الناضجة.', en: 'Intense sun exposure, mature skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [124] UV Cellular Protect Face SPF 50+
deepProductsList.push({
    id: 'fil_uv_cellular_face', brandId: 'filorga', familyId: 'sun_care', brand: 'Filorga',
    name: { ar: 'يو في سيلولار بروتيكت للوجه SPF 50+', en: 'UV Cellular Protect Face SPF 50+' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'أحدث أجيال الحماية من فيلورجا. يغلف الخلايا بدرع حماية ضد الـ UVA/UVB والأشعة تحت الحمراء، معزز بفيتامين E والنياسيناميد لدعم الحاجز الجلدي وتلطيفه.', 
            en: 'Filorga\'s newest generation of protection. Envelops cells in a shield against UVA/UVB and IR rays, boosted with Vitamin E and Niacinamide to support and soothe the skin barrier.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'يومياً صباحاً.', en: 'Daily AM.' },
        application: { ar: 'يوضع على كامل الوجه والرقبة قبل الخروج.', en: 'Apply to entire face and neck before going out.' }
    },
    precautions: { indications: { ar: 'الحماية اليومية الشاملة لجميع أنواع البشرة.', en: 'Comprehensive daily protection for all skin types.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [125] UV Cellular Protect Face & Body SPF 50+ (125ml)
deepProductsList.push({
    id: 'fil_uv_cellular_body', brandId: 'filorga', familyId: 'sun_care', brand: 'Filorga',
    name: { ar: 'يو في سيلولار بروتيكت (لوشن الوجه والجسم)', en: 'UV Cellular Protect Face & Body SPF 50+ 125ml' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'نسخة اقتصادية خفيفة الوزن للوجه والجسم. توفر حماية خلوية مكثفة مع ترطيب عميق يمنع جفاف الجلد وتقشره بعد التعرض للشمس.', 
            en: 'A lightweight, economical version for face and body. Provides intense cellular protection with deep hydration preventing post-sun skin dryness and flaking.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'عند الحاجة للتعرض للشمس.', en: 'When needed for sun exposure.' },
        application: { ar: 'يوزع بسخاء على الجسم والوجه.', en: 'Distribute generously over body and face.' }
    },
    precautions: { indications: { ar: 'حماية الجسم والوجه لجميع أفراد الأسرة.', en: 'Face and body protection for the whole family.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [126] MESO-MASK
deepProductsList.push({
    id: 'fil_meso_mask', brandId: 'filorga', familyId: 'ncef_nctf', brand: 'Filorga',
    name: { ar: 'ميزو-ماسك (ماسك النضارة والتنعيم الساحر)', en: 'MESO-MASK Smoothing Radiance Mask' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'الماسك الأيقوني. يحتوي على <span class="glossary-term" onclick="openGlossary(\'rhamnose_polysaccharide\')">بولي سكاريد الرامنوز</span> لتهدئة التهيج وتوحيد اللون، مدمجاً مع الكولاجين والإيلاستين ومركب (NCEF) لنفخ التجاعيد وإعادة بناء الأنسجة المجهدة.', 
            en: 'The iconic mask. Contains <span class="glossary-term" onclick="openGlossary(\'rhamnose_polysaccharide\')">Rhamnose Polysaccharide</span> to soothe irritation and even tone, combined with Collagen, Elastin, and (NCEF) to plump wrinkles and rebuild stressed tissues.' 
        },
        patient_benefit: { 
            ar: 'يصفي البشرة، يمحو علامات التعب، يهدئ الاحمرار فوراً، ويمنح الوجه إشراقة ونعومة حريرية (تأثير الفلتر الفوري).', 
            en: 'Clears the skin, erases fatigue signs, instantly soothes redness, and grants the face a silky smooth radiance (Instant filter effect).' 
        },
        active_ingredients: [
            { name: 'Collagen + Elastin', concentration: { ar: 'مكثف', en: 'Intense' }, role: { ar: 'إعادة الحجم والمرونة.', en: 'Restoring volume and elasticity.' } },
            { name: 'Rhamnose + NCEF', concentration: { ar: 'مهدئ ومجدد', en: 'Soothing & Renewing' }, role: { ar: 'إزالة الاحمرار وتحفيز النضارة.', en: 'Removing redness and stimulating radiance.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '1 إلى 2 مرة أسبوعياً.', en: '1 to 2 times a week.' },
        step_in_routine: { ar: 'عناية أسبوعية مكثفة.', en: 'Intensive weekly care.' },
        application: { ar: 'توضع طبقة كثيفة على الوجه، الرقبة، ومحيط العين. يُترك لمدة 15-30 دقيقة ثم يُزال بقطنة مبللة.', en: 'Apply a thick layer to face, neck, and eye contour. Leave for 15-30 minutes then remove with a damp cotton pad.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['استخدامه قبل المناسبات مباشرة.', 'Using it immediately before events.'] } }
    },
    precautions: {
        indications: { ar: 'البشرة المجهدة، الحمراء، الباهتة، وتجاعيد الإرهاق.', en: 'Stressed, red, dull skin, and fatigue wrinkles.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام كريمي أبيض غني جداً.', en: 'Very rich white creamy texture.' }
    }
});

// [127] MESO + Serum
deepProductsList.push({
    id: 'fil_meso_plus_serum', brandId: 'filorga', familyId: 'ncef_nctf', brand: 'Filorga',
    name: { ar: 'ميزو+ سيروم (مجدد الشباب المطلق)', en: 'MESO+ Absolute Anti-Aging Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'سيروم التجديد الشامل. يجمع بين مركب (NCEF) بتركيز عالٍ مع مشتقات الريتينول (Retinol-like active) وحمض الهيالورونيك لتجديد مصفوفة الجلد بالكامل.', 
            en: 'Global renewal serum. Combines highly concentrated (NCEF) with Retinol-like derivatives and HA to completely renew the skin matrix.' 
        },
        patient_benefit: { 
            ar: 'يستهدف جميع علامات الشيخوخة (التجاعيد، الترهل، البقع) بقوة الميزوثيرابي الموضعي.', 
            en: 'Targets all signs of aging (wrinkles, sagging, spots) with the power of topical mesotherapy.' 
        },
        active_ingredients: [
            { name: 'NCEF + Retinol Derivative', concentration: { ar: 'تجديد عميق', en: 'Deep Renewal' }, role: { ar: 'تقشير دقيق وبناء كولاجين.', en: 'Micro-exfoliation and collagen building.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة مساءً.', en: 'Once daily (PM).' },
        application: { ar: 'يوضع على وجه نظيف قبل كريم الليل.', en: 'Apply to a clean face before night cream.' }
    },
    precautions: { indications: { ar: 'الشيخوخة الشاملة، التجاعيد، وفقدان النضارة.', en: 'Global aging, wrinkles, and loss of radiance.' }, pregnancy_safe: false, sun_sensitivity: true }
});
// ==========================================
// 💊 البلوك الثامن والعشرين (Block 28): FILORGA - Repair, Peeling & Scrubs
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['oxygen_bubble_tech'] = {
    title: { ar: 'تكنولوجيا فقاعات الأكسجين 🫧', en: 'Oxygenating Bubble Technology 🫧' },
    desc: { 
        ar: 'تكنولوجيا متطورة في ماسكات فيلورجا. يتحول الكريم عند ملامسته للجلد إلى رغوة دقيقة نشطة (Micro-bubbles) تلتقط الأكسجين من الهواء وتضخه مباشرة داخل المسام لتنشيط الخلايا المختنقة وتسهيل التنظيف العميق.', 
        en: 'Advanced technology in Filorga masks. Upon contact with the skin, the cream transforms into an active micro-bubble foam that captures oxygen from the air and infuses it directly into pores to stimulate asphyxiated cells and facilitate deep cleansing.' 
    }
};

glossaryDict['aha_bha_complex'] = {
    title: { ar: 'مركب الأحماض المجدد 🧪', en: 'AHA/BHA Resurfacing Complex 🧪' },
    desc: { 
        ar: 'مزيج مدروس سريرياً من 6 أنواع من أحماض التقشير (الجليكوليك، اللاكتيك، الساليسيليك، البيروفيك، الأزيليك، والماليك). يعمل بأحجام جزيئية مختلفة لتقشير جميع طبقات الجلد السطحية بأمان ومحو التصبغات والتجاعيد.', 
        en: 'A clinically studied blend of 6 peeling acids (Glycolic, Lactic, Salicylic, Pyruvic, Azelaic, Malic). Works with different molecular sizes to safely exfoliate all superficial skin layers, erasing pigmentation and wrinkles.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [128] Neocica Repairing Cream
deepProductsList.push({
    id: 'fil_neocica', brandId: 'filorga', familyId: 'global_repair', brand: 'Filorga',
    name: { ar: 'نيوسيكا (كريم الترميم والتهدئة)', en: 'Neocica Universal Repairing Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'مستوحى من التئام الجروح. يحتوي على ببتيد معزز للكولاجين مع مركب (Rhamnose) المهدئ وحمض الهيالورونيك، لترميم الأنسجة التالفة بشدة وتقليل الاحمرار والتهيج.', 
            en: 'Inspired by wound healing. Contains a collagen-boosting peptide with soothing Rhamnose complex and HA, to repair severely damaged tissues and reduce redness and irritation.' 
        },
        patient_benefit: { 
            ar: 'كريم "الطوارئ" الجلدي. يلطف البشرة المتهيجة بعد الإجراءات التجميلية (الليزر، الحقن، التقشير)، يعالج حروق الشمس السطحية والتشققات.', 
            en: 'The dermatological "SOS" cream. Soothes irritated skin post-aesthetic procedures (laser, injections, peels), treats superficial sunburns and chapping.' 
        },
        active_ingredients: [
            { name: 'Soothing Peptides + Rhamnose', concentration: { ar: 'علاجي', en: 'Therapeutic' }, role: { ar: 'تسكين الألم وتقليل الاحمرار.', en: 'Pain relief and redness reduction.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '3 إلى 6 مرات يومياً على المنطقة المصابة.', en: '3 to 6 times daily on the affected area.' },
        application: { ar: 'يُطبق بلطف على الجلد المتضرر (غير النازف).', en: 'Apply gently to damaged (non-bleeding) skin.' }
    },
    precautions: { indications: { ar: 'ما بعد الليزر، الحقن، حروق الشمس، والتهيج الشديد.', en: 'Post-laser, injections, sunburns, and severe irritation.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [129] Universal Cream
deepProductsList.push({
    id: 'fil_universal_cream', brandId: 'filorga', familyId: 'hydra_hyal', brand: 'Filorga',
    name: { ar: 'يونيفرسال كريم (العناية العائلية الشاملة)', en: 'Universal Cream Daily Multi-Purpose' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'تركيبة غنية تعتمد على مركب (NCEF) والهيالورونيك، مدمجة مع اليوريا (Urea) وبولي سكاريد مهدئ، لحماية ترطيب البشرة وإصلاح الحاجز لجميع أفراد الأسرة.', 
            en: 'A rich formula based on (NCEF) and HA, combined with Urea and a soothing polysaccharide, to protect skin hydration and repair the barrier for the whole family.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً أو عند الحاجة.', en: 'Twice daily or as needed.' },
        application: { ar: 'يوزع على الوجه والجسم.', en: 'Distribute over face and body.' }
    },
    precautions: { indications: { ar: 'للوجه والجسم، الجفاف العرضي، واعتداءات الطقس.', en: 'For face and body, occasional dryness, and weather aggressions.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [130] C-Recover Concentrate
deepProductsList.push({
    id: 'fil_c_recover', brandId: 'filorga', familyId: 'optim_eyes', brand: 'Filorga',
    name: { ar: 'سي-ريكوفر (أمبولات فيتامين C النقي)', en: 'C-Recover Radiance Boosting Concentrate' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (للامتصاص)', en: 'Acidic (for absorption)' },
        mechanism: { 
            ar: 'تحتوي على مسحوق فيتامين C نقي (8%) معزول في الغطاء للحفاظ على فعاليته، يُخلط عند الاستخدام الأول مع سيروم NCEF لإنتاج جرعة مضادة للأكسدة جبارة تحفز الكولاجين وتفتح التصبغات.', 
            en: 'Contains pure Vitamin C powder (8%) isolated in the cap to preserve potency, mixed at first use with NCEF serum to produce a massive antioxidant dose that stimulates collagen and lightens pigmentation.' 
        },
        patient_benefit: { 
            ar: 'كورس علاجي لمدة 21 يوماً (3 أمبولات). يمحو الإرهاق تماماً، يعطي توهجاً فورياً، ويحسن مرونة الجلد المترهل.', 
            en: 'A 21-day therapeutic course (3 ampoules). Erases fatigue completely, gives an instant glow, and improves sagging skin elasticity.' 
        },
        active_ingredients: [
            { name: 'Pure Vitamin C (Ascorbic Acid)', concentration: { ar: '8% نقي', en: '8% Pure' }, role: { ar: 'تحييد الجذور الحرة وتفتيح البشرة.', en: 'Neutralizing free radicals and brightening skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً (يُفضل صباحاً).', en: 'Once daily (preferably AM).' },
        step_in_routine: { ar: 'الخطوة الأولى بعد الغسول.', en: 'First step post-cleansing.' },
        application: { ar: 'يُضغط الغطاء لإطلاق الفيتامين، يُرج جيداً، ثم تُطبق بضع قطرات. (تُحفظ الأمبولة في الثلاجة بعد الفتح وتُستهلك خلال 7 أيام).', en: 'Press cap to release Vitamin, shake well, apply a few drops. (Keep ampoule in fridge after opening and consume within 7 days).' }
    },
    precautions: { indications: { ar: 'الإرهاق الشديد، البشرة الباهتة، التحضير لمناسبة مهمة.', en: 'Severe fatigue, dull skin, prep for an important event.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [131] Sleep & Peel Night Cream
deepProductsList.push({
    id: 'fil_sleep_peel', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سليب أند بيل (كريم التقشير الليلي)', en: 'Sleep & Peel Resurfacing Night Cream' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { 
            ar: 'كريم ليلي يعتمد على <span class="glossary-term" onclick="openGlossary(\'aha_bha_complex\')">مركب الأحماض المجدد</span> بتركيز 4.5%، مدعوم بخلاصة الطحالب البنية المهدئة ليسمح بالتقشير الدقيق (Micro-peeling) طوال الليل دون تهيج.', 
            en: 'A night cream based on the <span class="glossary-term" onclick="openGlossary(\'aha_bha_complex\')">AHA/BHA Resurfacing Complex</span> at 4.5%, backed by soothing brown algae extract to allow micro-peeling overnight without irritation.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'مساءً (يومياً أو يوم بعد يوم للبشرة الحساسة).', en: 'PM (daily or every other day for sensitive skin).' },
        application: { ar: 'يوضع على وجه نظيف ويترك طوال الليل. واقي الشمس في الصباح إلزامي.', en: 'Apply to a clean face and leave overnight. AM sunscreen is mandatory.' }
    },
    precautions: { indications: { ar: 'التجاعيد السطحية، التصبغات، والنسيج الخشن.', en: 'Surface wrinkles, pigmentation, and rough texture.' }, pregnancy_safe: false, sun_sensitivity: true }
});

// [132] Scrub & Mask
deepProductsList.push({
    id: 'fil_scrub_mask', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سكرب أند ماسك (التقشير والأكسجة)', en: 'Scrub & Mask Reoxygenating Exfoliating Mask' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'عملية مزدوجة: المرحلة الأولى تقشير ميكانيكي (كرات البيرلايت) وكيميائي لتقشير الجلد، والمرحلة الثانية تفعيل <span class="glossary-term" onclick="openGlossary(\'oxygen_bubble_tech\')">فقاعات الأكسجين</span> لضخ الحياة في المسام.', 
            en: 'Dual action: Step 1 is mechanical (Perlite spheres) and chemical exfoliation to peel the skin, Step 2 activates <span class="glossary-term" onclick="openGlossary(\'oxygen_bubble_tech\')">Oxygen bubbles</span> to breathe life into pores.' 
        }
    },
    clinical_usage: {
        frequency: { ar: '1-3 مرات أسبوعياً.', en: '1-3 times a week.' },
        application: { ar: 'يُدلك على الوجه (المرحلة 1)، يُترك لتتكون الرغوة الفوارة (المرحلة 2) حتى تختفي، ثم يُشطف.', en: 'Massage on face (Step 1), leave for the effervescent foam to form (Step 2) until it disappears, then rinse.' }
    },
    precautions: { indications: { ar: 'الرؤوس السوداء، المسام الواسعة، واختناق البشرة.', en: 'Blackheads, enlarged pores, and skin asphyxiation.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [133] Scrub & Detox
deepProductsList.push({
    id: 'fil_scrub_detox', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سكرب أند ديتوكس (تنقية بالرغوة السوداء)', en: 'Scrub & Detox Intense Purity Foam' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'يعتمد على الفحم النشط الدقيق (Activated Charcoal) و بولي فينيل الباشن فروت لإزالة السموم العميقة وتفكيك الملوثات الحضرية، مع تأثير تقشير ميكانيكي بحجر الخفاف.', 
            en: 'Relies on Activated Charcoal and Passion fruit polyphenols to deeply detoxify and dismantle urban pollutants, with mechanical peeling via Pumice stone.' 
        }
    },
    clinical_usage: {
        frequency: { ar: '1-2 مرة أسبوعياً.', en: '1-2 times a week.' },
        application: { ar: 'يُدلك على وجه رطب، يُترك لـ 5 دقائق ثم يُشطف بالماء الدافئ.', en: 'Massage onto damp face, leave for 5 mins then rinse with warm water.' }
    },
    precautions: { indications: { ar: 'البشرة المعرضة للتلوث، والمسام المسدودة بالدهون.', en: 'Pollution-exposed skin, and sebum-clogged pores.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [134] Time-Zero Serum
deepProductsList.push({
    id: 'fil_time_zero', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم زيرو سيروم (مزدوج لتجاعيد العمر)', en: 'Time-Zero Multi-Correction Wrinkles Serum' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { 
            ar: 'عبوة مزدوجة الغرف تضخ سيرومين معاً: سيروم (الشد) الغني بالببتيدات لإرخاء التجاعيد، وسيروم (الامتلاء) الغني بالهيالورونيك وNCEF. يتم خلطهما وقت الضغط لفعالية قصوى.', 
            en: 'Dual-chamber packaging dispensing two serums together: a (Lifting) serum rich in peptides to relax wrinkles, and a (Plumping) serum rich in HA and NCEF. Mixed upon pressing for maximum efficacy.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        application: { ar: 'تُدمج المضخة في اليد ويُوزع على الوجه والرقبة.', en: 'Blend the pump output in hand and distribute over face and neck.' }
    },
    precautions: { indications: { ar: 'كافة أنواع التجاعيد العميقة والسطحية والتعبيرية.', en: 'All types of deep, surface, and expression wrinkles.' }, pregnancy_safe: false, sun_sensitivity: false }
});
// ==========================================
// 💊 البلوك التاسع والعشرين (Block 29): FILORGA - Makeup, NCEF-Revitalize & Final Additions
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['flash_nude_tech'] = {
    title: { ar: 'تقنية فلاش-نود (التغطية القابلة للبناء) 🎨', en: 'Flash-Nude Adjustable Coverage 🎨' },
    desc: { 
        ar: 'تقنية مكياج علاجي سائل (Fluid-to-powder). تحتوي على أصباغ دقيقة تتكيف مع لون البشرة (Skin-fusion) وتسمح بتعديل درجة التغطية من خفيفة إلى كاملة دون إحداث تأثير القناع (Mask-effect)، مع ضخ الهيالورونيك لنفخ التجاعيد أثناء وضع المكياج.', 
        en: 'A therapeutic fluid-to-powder makeup technology. Contains micro-pigments that fuse with the skin allowing adjustable coverage from sheer to full without a mask-effect, while infusing HA to plump wrinkles during makeup wear.' 
    }
};

glossaryDict['hydra_aox_complex'] = {
    title: { ar: 'مركب هيدرا-أوكس 5 🛡️', en: 'Hydra-AOX [5] Complex 🛡️' },
    desc: { 
        ar: 'مزيج مكثف من 5 مضادات أكسدة قوية (أستازانتين، إرغوثيونين، فيتامين C، فيتامين E، وفيتامين B3) مع حمض الهيالورونيك. مصمم لتحييد 100% من الإجهاد التأكسدي اليومي ومنع الشيخوخة المبكرة.', 
        en: 'An intense blend of 5 powerful antioxidants (Astaxanthin, Ergothioneine, Vit C, Vit E, Vit B3) with HA. Designed to neutralize 100% of daily oxidative stress and prevent premature aging.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [135] Flash-Nude Fluid SPF 30 (00 & 01)
deepProductsList.push({
    id: 'fil_flash_nude_fluid', brandId: 'filorga', familyId: 'oxygen_glow', brand: 'Filorga',
    name: { ar: 'فلاش-نود فلويد (مكياج علاجي SPF30)', en: 'Flash-Nude Pro-Perfection Tinted Fluid SPF 30' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'مكياج سائل يعتمد على <span class="glossary-term" onclick="openGlossary(\'flash_nude_tech\')">تقنية فلاش-نود</span>. يخفي العيوب فوراً ويوفر حماية (UVA/UVB/Niacinamide) لمنع التلوث من إتلاف الجلد، مع الهيالورونيك لترطيب عميق.', 
            en: 'Liquid makeup based on <span class="glossary-term" onclick="openGlossary(\'flash_nude_tech\')">Flash-Nude Technology</span>. Instantly conceals flaws and provides (UVA/UVB/Niacinamide) protection to prevent pollution damage, with HA for deep hydration.' 
        },
        patient_benefit: { 
            ar: 'يوحد لون البشرة بتغطية طبيعية جداً تتنفس، يحمي من أضرار الشمس، وينعم سطح الجلد بفضل مكوناته العلاجية.', 
            en: 'Evens skin tone with a highly natural, breathable coverage, protects from sun damage, and smooths the skin surface thanks to its therapeutic ingredients.' 
        },
        active_ingredients: [
            { name: 'Skin-Fusion Micro-pigments', concentration: { ar: 'تجميلي', en: 'Cosmetic' }, role: { ar: 'تغطية العيوب وتوحيد اللون.', en: 'Covering flaws and evening tone.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً (أو عند وضع المكياج).', en: 'AM (or when applying makeup).' },
        step_in_routine: { ar: 'الخطوة الأخيرة للنهار.', en: 'Last daytime step.' },
        application: { ar: 'يُرج جيداً، يوزع باليد أو بالفرشاة. يمكن وضع طبقة أخرى لزيادة التغطية.', en: 'Shake well, distribute with fingers or brush. Can be layered for more coverage.' }
    },
    precautions: { indications: { ar: 'بديل لكريم الأساس، توحيد اللون، وإخفاء العيوب اليومية.', en: 'Foundation alternative, tone evening, and daily flaw concealment.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [136] Flash-Nude Powder
deepProductsList.push({
    id: 'fil_flash_nude_powder', brandId: 'filorga', familyId: 'oxygen_glow', brand: 'Filorga',
    name: { ar: 'فلاش-نود بودرة (شفافة لتثبيت المكياج)', en: 'Flash-Nude Invisible Pro-Perfection Powder' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'بودرة شفافة لا تترك أثراً أبيض، غنية بحمض الهيالورونيك والسيليكا لتثبيت المكياج، إطفاء اللمعان، وتمويه المسام بصرياً دون تجفيف البشرة.', 
            en: 'Invisible powder leaving no white cast, rich in HA and Silica to set makeup, mattify shine, and visually blur pores without drying the skin.' 
        }
    },
    clinical_usage: { frequency: { ar: 'عند الحاجة.', en: 'As needed.' }, application: { ar: 'تُوزع بالفرشاة على الوجه لتثبيت المكياج أو إزالة اللمعان.', en: 'Apply with a brush over the face to set makeup or remove shine.' } },
    precautions: { indications: { ar: 'اللمعان الزائد، تثبيت المكياج، وتنعيم ملمس الجلد.', en: 'Excess shine, makeup setting, and smoothing skin texture.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [137] Time-Flash Active Primer
deepProductsList.push({
    id: 'fil_time_flash_primer', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم-فلاش برايمر (لتنعيم التجاعيد)', en: 'Time-Flash Express Smoothing Active Primer' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'برايمر (أساس مكياج) علاجي. يحتوي على تقنية (Lift & Blur) لشد الجلد وملء التجاعيد فوراً، بالإضافة إلى ببتيدات (NCTF) لمعالجة التجاعيد على المدى الطويل.', 
            en: 'A therapeutic primer. Contains (Lift & Blur) technology to instantly tighten skin and plump wrinkles, plus (NCTF) peptides to treat wrinkles long-term.' 
        }
    },
    clinical_usage: { frequency: { ar: 'قبل المكياج.', en: 'Before makeup.' }, application: { ar: 'يوضع بعد كريم العناية اليومي وقبل المكياج.', en: 'Apply after daily care cream and before makeup.' } },
    precautions: { indications: { ar: 'تجهيز البشرة للمكياج، التجاعيد الظاهرة، والمسام.', en: 'Prepping skin for makeup, visible wrinkles, and pores.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [138] Pore Express Regulating Primer
deepProductsList.push({
    id: 'fil_pore_express', brandId: 'filorga', familyId: 'age_purify', brand: 'Filorga',
    name: { ar: 'بور إكسبريس (برايمر منظم للمسام)', en: 'Pore Express Regulating Primer' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'برايمر مخصص للبشرة الدهنية. يستخدم إنزيمات قابضة للزهم ومواد بصرية مموهة لتقليص المسام وإلغاء اللمعان فوراً، مع حماية ضد التلوث لمنع الرؤوس السوداء.', 
            en: 'A primer for oily skin. Uses sebum-astringent enzymes and optical blurrers to instantly shrink pores and cancel shine, with anti-pollution protection to prevent blackheads.' 
        }
    },
    clinical_usage: { frequency: { ar: 'قبل المكياج.', en: 'Before makeup.' } },
    precautions: { indications: { ar: 'المسام الواسعة، اللمعان الشديد، وضعف ثبات المكياج.', en: 'Enlarged pores, severe shine, and poor makeup longevity.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [139] Hydra-AOX [5] Serum
deepProductsList.push({
    id: 'fil_hydra_aox5_serum', brandId: 'filorga', familyId: 'hydra_hyal', brand: 'Filorga',
    name: { ar: 'هيدرا-أوكس 5 سيروم (مضاد الأكسدة)', en: 'Hydra-AOX [5] Intensive Antioxidant Serum' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { 
            ar: 'سيروم نضارة مركز يعتمد على <span class="glossary-term" onclick="openGlossary(\'hydra_aox_complex\')">مركب هيدرا-أوكس 5</span>، يصحح العلامات الخمس للشيخوخة المبكرة (الجفاف، البهتان، الخطوط، المسام، وعدم تجانس اللون).', 
            en: 'Concentrated radiance serum relying on <span class="glossary-term" onclick="openGlossary(\'hydra_aox_complex\')">Hydra-AOX [5] Complex</span>, correcting the 5 signs of premature aging (dehydration, dullness, lines, pores, uneven tone).' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' }, application: { ar: 'يوضع على وجه نظيف. لونه البرتقالي طبيعي بفضل الأستازانتين.', en: 'Apply to clean face. Orange color is natural due to Astaxanthin.' } },
    precautions: { indications: { ar: 'الوقاية من الشيخوخة، الإرهاق، وحياة المدن الملوثة.', en: 'Aging prevention, fatigue, and polluted city life.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [140] NCEF-Revitalize Serum
deepProductsList.push({
    id: 'fil_ncef_revitalize_serum', brandId: 'filorga', familyId: 'ncef_nctf', brand: 'Filorga',
    name: { ar: 'إن سي إي إف ريفيتالايز سيروم (الجديد)', en: 'NCEF-Revitalize Supreme Polyrevitalising Serum' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { 
            ar: 'الجيل الأحدث من عائلة NCEF. تركيبة مركزة تعزز طاقة الخلايا وتسرع من عملية التعافي البيولوجي للجلد المنهك من الضغوطات والتلوث السريع.', 
            en: 'The newest generation of the NCEF family. A concentrated formula that boosts cell energy and accelerates biological recovery for skin exhausted by stress and rapid pollution.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' } },
    precautions: { indications: { ar: 'الإرهاق المزمن، فقدان المرونة، بهتان البشرة السريع.', en: 'Chronic fatigue, loss of elasticity, rapid skin dullness.' }, pregnancy_safe: false, sun_sensitivity: false }
});

// [141] NCEF-Revitalize Cream
deepProductsList.push({
    id: 'fil_ncef_revitalize_cream', brandId: 'filorga', familyId: 'ncef_nctf', brand: 'Filorga',
    name: { ar: 'إن سي إي إف ريفيتالايز كريم', en: 'NCEF-Revitalize Supreme Polyrevitalising Cream' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'كريم مكمل للسيروم، يحتوي على أحدث نواقل الميزوثيرابي لإعادة هيكلة حاجز البشرة وتغذيتها بعمق مع إعطاء تأثير نضارة ولمعان صحي فوري.', 
            en: 'Complementary cream to the serum, containing the latest meso-carriers to restructure the skin barrier and deeply nourish it while providing an instant healthy, radiant glow.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' } },
    precautions: { indications: { ar: 'تجاعيد التعب، جفاف البشرة المتقدمة في السن.', en: 'Fatigue wrinkles, dryness of aging skin.' }, pregnancy_safe: false, sun_sensitivity: false }
});

// [142] Optim-Eyes Lashes & Brows
deepProductsList.push({
    id: 'fil_optim_eyes_lashes', brandId: 'filorga', familyId: 'optim_eyes', brand: 'Filorga',
    name: { ar: 'أوبتيم-آيز للرموش والحواجب (مقوي مكثف)', en: 'Optim-Eyes Lashes & Brows Booster' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'علاج مزدوج. الخطوة 1 (سيروم تحفيز): يوضع على الجذور لإطالة وتكثيف الشعيرات عبر مركب KERA-EXTEND. الخطوة 2 (تغليف): يوضع بفرشاة الماسكارا لتغذية الشعر وتقويته.', 
            en: 'Dual treatment. Step 1 (Stimulating Serum): applied to roots to lengthen and densify via KERA-EXTEND complex. Step 2 (Coating Care): applied with a mascara brush to nourish and strengthen.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' }, application: { ar: 'يوضع السيروم على الجذور أولاً، ثم تُمشط الرموش والحواجب بفرشاة التغليف.', en: 'Apply serum to roots first, then brush lashes and brows with the coating brush.' } },
    precautions: { indications: { ar: 'الرموش القصيرة والضعيفة، الحواجب الخفيفة.', en: 'Short/weak eyelashes, sparse eyebrows.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [143] Nutri-Filler Lips
deepProductsList.push({
    id: 'fil_nutri_filler_lips', brandId: 'filorga', familyId: 'global_repair', brand: 'Filorga',
    name: { ar: 'نوتري-فيلر ليبس (مرطب ونافخ الشفاه)', en: 'Nutri-Filler Lips Nutri-Plumping Balm' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'بلسم زيتي مغذي. يحتوي على ببتيد محفز للكولاجين وNCTF لنفخ الشفاه وتنعيم الخطوط، مع زيت زبدة الشيا للترميم، ومكون منشط لتعزيز اللون الوردي الطبيعي للشفاه.', 
            en: 'Nourishing oil-balm. Contains a collagen-boosting peptide and NCTF to plump lips and smooth lines, Shea oil for repair, and a revitalizing active to enhance the natural rosy lip color.' 
        }
    },
    clinical_usage: { frequency: { ar: 'عند الحاجة.', en: 'As needed.' }, application: { ar: 'يُطبق على الشفاه باستخدام أداة السيليكون.', en: 'Apply to lips using the silicone applicator.' } },
    precautions: { indications: { ar: 'الشفاه الجافة، الرقيقة، والباهتة.', en: 'Dry, thin, and pale lips.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [144] Scrub & Peel Body Exfoliating Cream
deepProductsList.push({
    id: 'fil_scrub_peel_body', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'سكرب أند بيل (مقشر الجسم المجدد)', en: 'Scrub & Peel Resurfacing Exfoliating Cream' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'مقشر للجسم يعمل بخطوتين: 1. تقشير ميكانيكي وكيميائي (أحماض). 2. يتحول لغسول حليبي مرطب عند الشطف، ليترك بشرة الجسم ناعمة ومشرقة كالحرير.', 
            en: 'Body scrub with 2 steps: 1. Mechanical & chemical peeling (acids). 2. Transforms into a hydrating milk upon rinsing, leaving body skin silky smooth and radiant.' 
        }
    },
    clinical_usage: { frequency: { ar: '1-2 مرة أسبوعياً أثناء الاستحمام.', en: '1-2 times a week during shower.' } },
    precautions: { indications: { ar: 'الجسم الخشن، جلد الوزة، وجفاف الجلد.', en: 'Rough body skin, strawberry legs, and dry skin.' }, pregnancy_safe: false, sun_sensitivity: true }
});
// ==========================================
// 💊 البلوك الثلاثين (Block 30): Final Missing Products Sweep (LRP & Filorga)
// ==========================================

// --- 1. La Roche-Posay (النواقص) ---

// [145] Effaclar Micro-Peeling Purifying Gel
deepProductsList.push({
    id: 'lrp_effaclar_micro_peeling', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار مايكرو-بيلينج (غسول التقشير)', en: 'Effaclar Micro-Peeling Purifying Gel' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { 
            ar: 'أقوى غسول في عائلة إيفاكلار. يحتوي على (2% حمض الساليسيليك + LHA) لتقشير الخلايا الميتة وفتح المسام المسدودة بعمق، مع الزنك لتقليل إفراز الدهون.', 
            en: 'The strongest cleanser in the Effaclar family. Contains (2% Salicylic Acid + LHA) to exfoliate dead cells and unclog deep pores, with Zinc to reduce sebum.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرة يومياً.', en: 'Once daily.' }, application: { ar: 'للوجه والجسم (ممتاز لحبوب الظهر والصدر).', en: 'For face and body (excellent for back and chest acne).' } },
    precautions: { indications: { ar: 'حب الشباب الشديد، حبوب الجسم، وآثار الحبوب الداكنة.', en: 'Severe acne, body acne, and dark acne marks.' }, pregnancy_safe: false, sun_sensitivity: true }
});


// --- 2. FILORGA (النواقص) ---

// [146] Time-Filler Night Cream
deepProductsList.push({
    id: 'fil_time_filler_night', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم-فيلر نايت (كريم التجاعيد الليلي)', en: 'Time-Filler Night Multi-Correction Wrinkles' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { 
            ar: 'يجمع تكنولوجيا 5XP مع مركب (Express-Recover) الذي يقلل من انتفاخ الوجه الصباحي وتجاعيد الوسادة التي تظهر أثناء النوم (Sleep lines).', 
            en: 'Combines 5XP technology with an (Express-Recover) complex that reduces morning facial puffiness and pillow lines that form during sleep.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مساءً.', en: 'PM.' } },
    precautions: { indications: { ar: 'التجاعيد وعلامات النوم الصباحية.', en: 'Wrinkles and morning sleep marks.' }, pregnancy_safe: false, sun_sensitivity: false }
});

// [147] Hydra-Filler Mask
deepProductsList.push({
    id: 'fil_hydra_filler_mask', brandId: 'filorga', familyId: 'hydra_hyal', brand: 'Filorga',
    name: { ar: 'هيدرا-فيلر ماسك (شيت الترطيب)', en: 'Hydra-Filler Mask Super-Moisturizing' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'ماسك ورقي غني بحمض الهيالورونيك وخلاصة الصبار (Aloe Vera) لتوفير حمام ترطيب فوري واستعادة نضارة البشرة الجافة في 15 دقيقة.', 
            en: 'Sheet mask rich in HA and Aloe Vera to provide an instant hydration bath and restore radiance to dry skin in 15 minutes.' 
        }
    },
    clinical_usage: { frequency: { ar: 'عند الحاجة.', en: 'As needed.' } },
    precautions: { indications: { ar: 'الجفاف الشديد والبهتان.', en: 'Severe dehydration and dullness.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [148] Time-Filler Mask
deepProductsList.push({
    id: 'fil_time_filler_mask', brandId: 'filorga', familyId: 'time_filler', brand: 'Filorga',
    name: { ar: 'تايم-فيلر ماسك (شيت التجاعيد)', en: 'Time-Filler Mask Super-Smoothing' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'ماسك ورقي أسود (Black fiber) مشبع بالكولاجين البحري وشد السكريات لتنعيم التجاعيد فوراً وشد ملامح الوجه.', 
            en: 'Black fiber sheet mask saturated with Marine Collagen and lifting sugars to instantly smooth wrinkles and firm facial contours.' 
        }
    },
    clinical_usage: { frequency: { ar: 'قبل المناسبات.', en: 'Pre-events.' } },
    precautions: { indications: { ar: 'التجاعيد التعبيرية وترهل الجلد السريع.', en: 'Expression lines and rapid skin sagging.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [149] Oxygen-Peel Lotion
deepProductsList.push({
    id: 'fil_oxygen_peel', brandId: 'filorga', familyId: 'oxygen_glow', brand: 'Filorga',
    name: { ar: 'أوكسجين-بيل لوشن (تونر التقشير الدقيق)', en: 'Oxygen-Peel Re-Oxygenating Micro-Peeling Lotion' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'تونر يومي يحتوي على 6 أحماض دقيقة التقشير بنسبة تركيز 6%، مقترن بحمض الهيالورونيك ومستشعر للأكسجين لضخ الهواء في المسام المخنوقة.', 
            en: 'Daily toner containing 6 micro-peeling acids at 6%, paired with HA and an oxygen-captor to pump air into asphyxiated pores.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مساءً.', en: 'PM.' }, application: { ar: 'يمسح به الوجه باستخدام قطنة بعد الغسول.', en: 'Wipe face with a cotton pad post-cleansing.' } },
    precautions: { indications: { ar: 'الرؤوس السوداء، المسام الواسعة، والجلد الباهت.', en: 'Blackheads, enlarged pores, and dull skin.' }, pregnancy_safe: false, sun_sensitivity: true }
});

// [150] NCTF-Essence Supreme Regenerating Lotion
deepProductsList.push({
    id: 'fil_nctf_essence', brandId: 'filorga', familyId: 'ncef_nctf', brand: 'Filorga',
    name: { ar: 'إن سي تي إف إيسنس (لوشن التحضير)', en: 'NCTF-Essence Supreme Regenerating Lotion' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'لوشن مائي مرطب (Primer-like) يعتمد على تقنية (AQUA-MX) للاحتفاظ بالماء، مع مركب NCTF لتهيئة البشرة لامتصاص السيرومات بكفاءة أعلى.', 
            en: 'Hydrating watery lotion (Primer-like) relying on (AQUA-MX) technology to bind water, with NCTF complex to prep skin for higher serum absorption.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' }, application: { ar: 'يوضع باليد على الوجه بعد الغسول وقبل السيروم.', en: 'Apply with hands to face after cleansing and before serum.' } },
    precautions: { indications: { ar: 'الجفاف، تجهيز البشرة لروتين مكافحة الشيخوخة.', en: 'Dehydration, prepping skin for anti-aging routine.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [151] Sleep Recover Balm
deepProductsList.push({
    id: 'fil_sleep_recover', brandId: 'filorga', familyId: 'optim_eyes', brand: 'Filorga',
    name: { ar: 'سليب ريكوفر بلسم (مضاد للإرهاق الليلي)', en: 'Sleep Recover Anti-Fatigue Night Balm' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'يستهدف علامات الإرهاق. يحتوي على مستخلص شجرة الحرير لإزالة سموم الخلايا ليلاً وتقليل الهالات وعلامات التعب التي تظهر في الصباح.', 
            en: 'Targets fatigue signs. Contains Silk Tree extract to detoxify cells overnight and reduce dark circles and morning fatigue marks.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مساءً.', en: 'PM.' } },
    precautions: { indications: { ar: 'الإرهاق، السهر، بهتان البشرة الصباحي.', en: 'Fatigue, sleeplessness, and morning dullness.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [152] Hydra-Filler Cream (Classic Edition)
deepProductsList.push({
    id: 'fil_hydra_filler_cream_old', brandId: 'filorga', familyId: 'hydra_hyal', brand: 'Filorga',
    name: { ar: 'هيدرا-فيلر كريم (الإصدار الكلاسيكي)', en: 'Hydra-Filler Pro-Youth Boosting Moisturizer' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'الإصدار الذي سبق (Hydra-Hyal). يركز على حمض الهيالورونيك وببتيدات محفزة لإنتاج الكولاجين لمنع ظهور علامات الجفاف والشيخوخة المبكرة.', 
            en: 'The predecessor to (Hydra-Hyal). Focuses on HA and collagen-boosting peptides to prevent signs of dehydration and premature aging.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' } },
    precautions: { indications: { ar: 'الجفاف الشديد والخطوط الدقيقة.', en: 'Severe dehydration and fine lines.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [153] Age-Purify Mask
deepProductsList.push({
    id: 'fil_age_purify_mask', brandId: 'filorga', familyId: 'age_purify', brand: 'Filorga',
    name: { ar: 'إيدج-بيوريفاي ماسك (الطين المنقي)', en: 'Age-Purify Mask Double Correction' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'ماسك طيني يعتمد على طين الماستيك (Mastic) لسحب الدهون من المسام العميقة، مع تكنولوجيا الإصلاح المزدوج (حبوب + تجاعيد).', 
            en: 'A clay mask relying on Mastic clay to draw sebum from deep pores, combined with the double correction technology (blemishes + wrinkles).' 
        }
    },
    clinical_usage: { frequency: { ar: '1-2 مرة أسبوعياً.', en: '1-2 times a week.' }, application: { ar: 'يوضع لمدة 10 دقائق ثم يشطف.', en: 'Leave for 10 minutes then rinse.' } },
    precautions: { indications: { ar: 'المسام المسدودة، اللمعان، وحبوب البالغين.', en: 'Clogged pores, shine, and adult acne.' }, pregnancy_safe: false, sun_sensitivity: false }
});

// [154] Perfect+ Serum
deepProductsList.push({
    id: 'fil_perfect_plus_serum', brandId: 'filorga', familyId: 'oxygen_glow', brand: 'Filorga',
    name: { ar: 'بيرفكت بلس سيروم (مصحح البشرة)', en: 'Perfect+ Perfecting Serum' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'سيروم يجمع بين شد المسام، إطفاء اللمعان، وتقشير خفيف لتحسين نسيج الجلد العام (Skin texture) وإعطاء مظهر متجانس ومثالي.', 
            en: 'A serum combining pore-tightening, mattifying, and mild exfoliation to improve overall skin texture and give an even, perfect appearance.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' } },
    precautions: { indications: { ar: 'النسيج غير المتجانس، المسام، واللمعان.', en: 'Uneven texture, pores, and shine.' }, pregnancy_safe: false, sun_sensitivity: true }
});

// [155] NCEF-Revitalize Mask
deepProductsList.push({
    id: 'fil_ncef_revitalize_mask', brandId: 'filorga', familyId: 'ncef_nctf', brand: 'Filorga',
    name: { ar: 'إن سي إي إف ريفيتالايز ماسك', en: 'NCEF-Revitalize Mask - 1 Sheet' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'أحدث ماسك ورقي من فيلورجا. مشبع بسيروم (Revitalize) المركز بـ NCEF لنفخ البشرة وإعادة الحياة للخلايا المنهكة في جلسة واحدة.', 
            en: 'Filorga\'s newest sheet mask. Saturated with the (Revitalize) serum concentrated with NCEF to plump the skin and bring exhausted cells back to life in one session.' 
        }
    },
    clinical_usage: { frequency: { ar: 'عند الحاجة للإشراق السريع.', en: 'As needed for quick radiance.' } },
    precautions: { indications: { ar: 'التعب الشديد والتحضير السريع للمناسبات.', en: 'Severe fatigue and quick prep for events.' }, pregnancy_safe: true, sun_sensitivity: false }
});
// ==========================================
// 💊 البلوك الحادي والثلاثين (Block 31): The Absolute Final Sweep (LRP & Filorga)
// ==========================================

// --- 1. La Roche-Posay (النواقص المؤكدة) ---

// [156] Effaclar Ultra Concentrated Serum
deepProductsList.push({
    id: 'lrp_effaclar_ultra_serum', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار سيروم فائق التركيز (للتقشير)', en: 'Effaclar Ultra Concentrated Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (للتقشير)', en: 'Acidic (for peeling)' },
        mechanism: { 
            ar: 'مركب تقشير ثلاثي الأحماض: حمض الساليسيليك (لفتح المسام)، LHA (لتقشير السطح الدقيق)، وحمض الجليكوليك (لتجديد الخلايا وتقليل العلامات)، مدعوماً بالنياسيناميد لتهدئة الجلد ومنع التهيج الارتدادي.', 
            en: 'Triple-acid peeling complex: Salicylic Acid (unclogs pores), LHA (micro-exfoliates surface), and Glycolic Acid (renews cells and reduces marks), backed by Niacinamide to soothe skin and prevent rebound irritation.' 
        },
        patient_benefit: { 
            ar: 'يستهدف حب شباب البالغين بقوة. يزيل الرؤوس السوداء، يصغر المسام، ويمحو آثار الحبوب الداكنة مع توفير تأثير مضاد للشيخوخة (Anti-aging) بفضل حمض الجليكوليك.', 
            en: 'Strongly targets adult acne. Eradicates blackheads, shrinks pores, and fades dark acne marks while providing an anti-aging effect thanks to Glycolic Acid.' 
        },
        active_ingredients: [
            { name: 'Tri-Acid Complex (AHA/BHA/LHA)', concentration: { ar: 'تقشير كيميائي', en: 'Chemical Peeling' }, role: { ar: 'تجديد كامل لنسيج البشرة المليء بالعيوب.', en: 'Total resurfacing of blemish-prone skin texture.' } },
            { name: 'Niacinamide', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'تقليل احمرار حب الشباب.', en: 'Reducing acne redness.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily (PM).' },
        step_in_routine: { ar: 'السيروم المعالج الليلي.', en: 'PM Treatment Serum.' },
        application: { ar: 'توضع بضع قطرات على وجه نظيف وجاف. واقي الشمس في الصباح إلزامي.', en: 'Apply a few drops to a clean, dry face. AM sunscreen is mandatory.' },
        layering: { do_not_mix_with: { ar: ['الريتينول أو مقشرات أخرى في نفس الليلة.', 'Retinol or other exfoliants on the same night.'] }, best_mixed_with: { ar: ['مرطب Toleriane أو Effaclar H Iso-Biome.', 'Toleriane or Effaclar H Iso-Biome moisturizer.'] } }
    },
    precautions: {
        indications: { ar: 'حبوب البالغين، المسام الواسعة المستعصية، النسيج الخشن، والآثار المتبقية.', en: 'Adult acne, stubborn enlarged pores, rough texture, and residual marks.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'قوام سائل لا يترك ملمساً دبقاً.', en: 'Fluid texture leaving no sticky residue.' }
    }
});


// --- 2. FILORGA (النواقص المؤكدة) ---

// [157] Anti-Ageing Micellar Solution
deepProductsList.push({
    id: 'fil_anti_aging_micellar', brandId: 'filorga', familyId: 'skin_prep', brand: 'Filorga',
    name: { ar: 'محلول ميسيلار المكافح للشيخوخة', en: 'Anti-Ageing Micellar Solution' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'منظف ميسيلار كلاسيكي من فيلورجا، مصمم خصيصاً ليجمع بين إزالة المكياج والعناية بمكافحة الشيخوخة. غني بمكونات مرطبة ومهدئة وعوامل مضادة للشيخوخة تحافظ على شباب الجلد.', 
            en: 'Filorga\'s classic micellar cleanser, specifically designed to combine makeup removal with anti-aging care. Enriched with hydrating, soothing ingredients and anti-aging agents that preserve skin youthfulness.' 
        },
        patient_benefit: { 
            ar: 'ينظف بلطف فائق، لا يحتاج لشطف، ويترك البشرة رطبة ومستعدة لاستقبال سيرومات مكافحة الشيخوخة دون إحداث جفاف أو شد.', 
            en: 'Ultra-gently cleanses, requires no rinsing, and leaves skin hydrated and prepped for anti-aging serums without causing dryness or tightness.' 
        },
        active_ingredients: [
            { name: 'Micelles', concentration: { ar: 'منظف دقيق', en: 'Micro-cleanser' }, role: { ar: 'التقاط الشوائب والمكياج كالمغناطيس.', en: 'Capturing impurities and makeup like a magnet.' } },
            { name: 'Hydrating & Anti-aging Actives', concentration: { ar: 'وقائي', en: 'Preventive' }, role: { ar: 'حماية الجلد من الجفاف المرتبط بالشيخوخة.', en: 'Protecting skin from age-related dehydration.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        application: { ar: 'يُمسح به الوجه والعين باستخدام قطنة. لا يُشطف.', en: 'Wipe face and eyes using a cotton pad. Do not rinse.' }
    },
    precautions: {
        indications: { ar: 'إزالة المكياج اليومي للبشرة المتقدمة في السن والباحثة عن الترطيب.', en: 'Daily makeup removal for aging skin seeking hydration.' },
        pregnancy_safe: true, sun_sensitivity: false
    }
});
// ==========================================
// 💊 البلوك الثاني والثلاثين (Block 32): AVENE - Brand Init & Cleanance Family
// ==========================================

// --- 1. تأسيس العلامة التجارية (Brand Initialization) ---

brandsList.push({
    id: 'avene', name: 'Eau Thermale Avène',
    families: [
        { id: 'cleanance', name: { ar: 'كلينانس (حب الشباب والبشرة الدهنية)', en: 'Cleanance (Acne & Oily Skin)' } },
        { id: 'cicalfate', name: { ar: 'سيكالفات (ترميم الجروح والندبات)', en: 'Cicalfate (Wound & Scar Repair)' } },
        { id: 'xeracalm', name: { ar: 'زيراكالم (الإكزيما والجفاف الشديد)', en: 'XeraCalm A.D / Nutrition (Eczema & Severe Dryness)' } },
        { id: 'tolerance', name: { ar: 'توليرانس / سكين ريكفري (البشرة شديدة التحسس)', en: 'Tolerance / Skin Recovery (Hypersensitive Skin)' } },
        { id: 'hydrance', name: { ar: 'هيدرانس (الترطيب العميق)', en: 'Hydrance (Deep Hydration)' } },
        { id: 'anti_aging', name: { ar: 'مكافحة الشيخوخة (هيالورون / أوكسيتيف / فيزيوليفت)', en: 'Anti-Aging (Hyaluron Activ B3 / A-Oxitive / Physiolift)' } },
        { id: 'antirougeurs', name: { ar: 'أنتيروجير (الوردية والاحمرار)', en: 'Antirougeurs (Rosacea & Redness)' } },
        { id: 'body_essentials', name: { ar: 'العناية الأساسية والجسم (تريزيرا / كولد كريم)', en: 'Body & Essentials (TriXera / Cold Cream / Cleansers)' } },
        { id: 'sun_care', name: { ar: 'العناية الشمسية (فوتوبروتكت / إنتينس)', en: 'Sun Care (Sunscreens & Intense Protect)' } }
    ]
});

// --- 2. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['aqua_dolomiae'] = {
    title: { ar: 'أكوا دولوميا (Aqua Dolomiae) 🧫', en: 'Aqua Dolomiae Microflora 🧫' },
    desc: { 
        ar: 'بكتيريا دقيقة حصرية (Postbiotic) تعيش فقط في مياه أفين الحرارية العميقة. تفرز مواد نشطة بيولوجياً تعمل على تقليل الحكة، تهدئة الالتهاب فوراً، وتقوية الحاجز المناعي للجلد.', 
        en: 'An exclusive microflora (Postbiotic) surviving only in deep Avene Thermal Spring Water. It secretes bioactive substances that reduce itching, instantly soothe inflammation, and strengthen the skin\'s immune barrier.' 
    }
};

glossaryDict['comedoclastin'] = {
    title: { ar: 'كوميدوكلاستين (Comedoclastin™) 🌿', en: 'Comedoclastin™ 🌿' },
    desc: { 
        ar: 'مستخلص نباتي حاصل على براءة اختراع من بذور (شوك الحليب - Milk Thistle). يعمل بآلية فريدة لتنظيم إنتاج الزهم وضرب "المايكرو-كوميدون" (Microcomedone) وهو الجذر الخفي غير المرئي الذي تتكون منه حبة الشباب، مما يمنع ظهور الحبوب من الأساس.', 
        en: 'A patented botanical extract from Milk Thistle seeds. Works with a unique mechanism to regulate sebum and target the "Microcomedone" (the invisible hidden root of a pimple), preventing breakouts from forming in the first place.' 
    }
};

glossaryDict['glycoleol'] = {
    title: { ar: 'جليكوليول (Glycoleol) 💧', en: 'Glycoleol 💧' },
    desc: { 
        ar: 'مركب دهني ذكي. يندمج مع الجلد ليوفر ترطيباً عميقاً وإطلاقاً مستمراً للأحماض الدهنية الأساسية (اللينوليك) لترميم حاجز البشرة المجففة بشدة بفعل أدوية الروكوتان، دون إحداث تأثير زؤاني (Comedogenic).', 
        en: 'A smart lipidic complex. Integrates with the skin to provide deep hydration and a continuous release of essential fatty acids (Linoleic) to repair the barrier of skin severely dried by Accutane, without being comedogenic.' 
    }
};

// --- 3. المنتجات السريرية (Clinical Products) ---

// [158] Cleanance Cleansing Gel (200ml / 400ml / Tube)
deepProductsList.push({
    id: 'avene_cleanance_gel', brandId: 'avene', familyId: 'cleanance', brand: 'Bioderma', // Note: Fixing brand strictly to Avene below
    brand: 'Avene',
    name: { ar: 'كلينانس جل (غسول البشرة الدهنية)', en: 'Cleanance Cleansing Gel' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'قاعدة تنظيف خالية من الصابون تعتمد على مركب <span class="glossary-term" onclick="openGlossary(\'comedoclastin\')">كوميدوكلاستين</span> لتنظيم الإفرازات الدهنية، ومياه أفين الحرارية لتهدئة الجلد الملتهب أثناء الغسيل.', 
            en: 'A soap-free cleansing base relying on <span class="glossary-term" onclick="openGlossary(\'comedoclastin\')">Comedoclastin</span> to regulate sebum production, and Avene Thermal Water to soothe inflamed skin during washing.' 
        },
        patient_benefit: { 
            ar: 'ينظف بلطف فائق، يزيل اللمعان والشوائب دون تجريد البشرة من ترطيبها الطبيعي، ويقلل من ظهور الحبوب مع الاستخدام المستمر.', 
            en: 'Ultra-gently cleanses, removes shine and impurities without stripping the skin of its natural moisture, and reduces breakouts with continuous use.' 
        },
        active_ingredients: [
            { name: 'Comedoclastin™', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تنظيم الزهم من الجذور.', en: 'Regulating sebum from the roots.' } },
            { name: 'Avene Thermal Spring Water', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'تقليل تهيج الحبوب.', en: 'Reducing blemish irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'التنظيف (الخطوة الأولى).', en: 'Cleansing (First step).' },
        application: { ar: 'يُرغى على وجه مبلل، يُدلك بلطف، ثم يُشطف جيداً.', en: 'Lather on wet face, massage gently, then rinse thoroughly.' },
        layering: { do_not_mix_with: { ar: ['الماء الساخن جداً (يحفز إفراز الدهون).', 'Very hot water (stimulates sebum).'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، المختلطة، والمعرضة لحب الشباب.', en: 'Oily, combination, and acne-prone skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مناسب للوجه والجسم (كالظهر والصدر). يتوفر بأحجام وعروض متعددة.', en: 'Suitable for face and body (like back & chest). Available in multiple sizes and offers.' }
    }
});

// [159] Cleanance Comedomed Concentrate
deepProductsList.push({
    id: 'avene_cleanance_comedomed', brandId: 'avene', familyId: 'cleanance', brand: 'Avene',
    name: { ar: 'كلينانس كوميدوميد (علاج الحبوب المركز)', en: 'Cleanance Comedomed Anti-Blemishes Concentrate' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'علاج ثوري يعتمد على تركيز عالي جداً (25%) من <span class="glossary-term" onclick="openGlossary(\'comedoclastin\')">الكوميدوكلاستين</span>. لا يعالج الحبوب الظاهرة فقط، بل يخترق المسام لكسر حلقة تكوين "المايكرو-كوميدون" (المرحلة غير المرئية للحبة).', 
            en: 'A revolutionary treatment relying on a very high concentration (25%) of <span class="glossary-term" onclick="openGlossary(\'comedoclastin\')">Comedoclastin</span>. It doesn\'t just treat visible blemishes, but penetrates pores to break the cycle of "Microcomedone" formation (the invisible stage of a pimple).' 
        },
        patient_benefit: { 
            ar: 'يقلل الحبوب والرؤوس السوداء خلال 7 أيام فقط، ويحد بشكل كبير من انتكاسات حب الشباب (Anti-relapse).', 
            en: 'Reduces pimples and blackheads in just 7 days, and significantly limits acne relapses.' 
        },
        active_ingredients: [
            { name: 'Comedoclastin™', concentration: { ar: '25%', en: '25%' }, role: { ar: 'إجهاض الحبوب قبل ظهورها.', en: 'Aborting pimples before they appear.' } },
            { name: 'Avene Thermal Water', concentration: { ar: '67.5%', en: '67.5%' }, role: { ar: 'تسكين الالتهاب العميق.', en: 'Soothing deep inflammation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (AM & PM).' },
        step_in_routine: { ar: 'العلاج الأساسي للحبوب.', en: 'Core blemish treatment.' },
        application: { ar: 'يوضع على كامل الوجه بعد تنظيفه. رائحته النفاذة (بسبب المستخلص النباتي) تختفي سريعاً.', en: 'Apply to the entire face after cleansing. Its strong scent (due to the plant extract) disappears quickly.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['يمكن استخدامه بمفرده أو مع العلاجات الدوائية (ما عدا الروكوتان الفموي).', 'Can be used alone or alongside medical treatments (except oral Isotretinoin).'] } }
    },
    precautions: {
        indications: { ar: 'حب الشباب الخفيف إلى المتوسط، الرؤوس السوداء، والميل لتكون الحبوب.', en: 'Mild to moderate acne, blackheads, and blemish-prone tendencies.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام مائي خفيف جداً، يُمتص فوراً ولا يترك أثراً.', en: 'Ultra-light watery texture, absorbs instantly leaving no trace.' }
    }
});

// [160] Cleanance Comedomed Peeling (Spot Treatment)
deepProductsList.push({
    id: 'avene_cleanance_comedomed_peeling', brandId: 'avene', familyId: 'cleanance', brand: 'Avene',
    name: { ar: 'كلينانس كوميدوميد بيلينج (علاج موضعي مكثف)', en: 'Cleanance Comedomed Peeling Intensive Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي قليلاً', en: 'Slightly Acidic' },
        mechanism: { 
            ar: 'علاج موضعي سريع (SOS). يدمج الكوميدوكلاستين مع (حمض الجليكوليك 6%) لتقشير الخلايا الميتة المتراكمة على الحبة، و(Retinoid Booster) لتسريع التخلص من الالتهاب والصديد.', 
            en: 'An SOS targeted treatment. Integrates Comedoclastin with (6% Glycolic Acid) to exfoliate dead cells accumulated on the blemish, and a (Retinoid Booster) to accelerate the removal of inflammation and pus.' 
        },
        patient_benefit: { 
            ar: 'يقلص حجم الحبوب الملتهبة الكبيرة والاحمرار الموضعي بشكل ملحوظ في اليوم الأول من الاستخدام، ويمنع تكون أثر داكن.', 
            en: 'Visibly reduces the size of large inflamed blemishes and localized redness on the first day of use, preventing dark mark formation.' 
        },
        active_ingredients: [
            { name: 'Glycolic Acid', concentration: { ar: '6%', en: '6%' }, role: { ar: 'تقشير فوري لفتح رأس الحبة.', en: 'Instant peeling to open the comedone head.' } },
            { name: 'Comedoclastin + Retinoid Derivative', concentration: { ar: 'مكثف', en: 'Intense' }, role: { ar: 'مهاجمة البكتيريا وتجديد الجلد.', en: 'Attacking bacteria and renewing skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '1 إلى 3 مرات يومياً.', en: '1 to 3 times daily.' },
        step_in_routine: { ar: 'علاج موضعي (Spot Treatment).', en: 'Spot Treatment.' },
        application: { ar: 'يوضع مباشرة على الحبة الملتهبة فقط (وليس كامل الوجه) حتى تختفي.', en: 'Apply directly onto the inflamed blemish ONLY (not the whole face) until it disappears.' },
        layering: { do_not_mix_with: { ar: ['توزيعه على كامل الوجه.', 'Distributing over the entire face.'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'البثور المفاجئة، الحبوب الكبيرة الملتهبة، وعلاج الطوارئ.', en: 'Sudden breakouts, large inflamed pimples, and SOS treatment.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'لا يوضع على الجروح المفتوحة أو الحبوب المفقوعة.', en: 'Do not apply to open wounds or popped pimples.' }
    }
});

// [161] Cleanance AHA Exfoliating Serum
deepProductsList.push({
    id: 'avene_cleanance_aha_serum', brandId: 'avene', familyId: 'cleanance', brand: 'Avene',
    name: { ar: 'كلينانس AHA سيروم التقشير (لآثار الحبوب)', en: 'Cleanance AHA Exfoliating Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'حامضي (~4.0)', en: 'Acidic (~4.0)' },
        mechanism: { 
            ar: 'سيروم تقشير كيميائي بتركيز أحماض (AHA/BHA) مبتكر يصل فعلياً وتأثيره إلى تقشير العيادات. يحتوي على حمض اللاكتيك والساكسينيك لتقشير وتنعيم النسيج وإزالة التصبغات المتبقية من حب الشباب.', 
            en: 'A chemical peeling serum with an innovative (AHA/BHA) concentration whose efficacy rivals clinical peels. Contains Lactic and Succinic acids to exfoliate, smooth texture, and remove residual acne pigmentation.' 
        },
        patient_benefit: { 
            ar: 'يصقل ملمس البشرة الخشن، يصغر المسام الواسعة بشكل دائم، ويفتح آثار الحبوب البنية والحمراء بفعالية وسرعة.', 
            en: 'Refines rough skin texture, durably shrinks enlarged pores, and quickly brightens brown and red acne marks.' 
        },
        active_ingredients: [
            { name: 'Lactic Acid (AHA) + Succinic Acid', concentration: { ar: '5% + 3%', en: '5% + 3%' }, role: { ar: 'تجديد الخلايا وتقشير التصبغات.', en: 'Cell renewal and exfoliating pigmentation.' } },
            { name: 'Glutamic Acid', concentration: { ar: 'منظم', en: 'Regulator' }, role: { ar: 'تنظيم الإفرازات الدهنية.', en: 'Regulating sebum secretion.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً (يُفضل مساءً).', en: 'Once daily (preferably PM).' },
        step_in_routine: { ar: 'سيروم التقشير الليلي.', en: 'Night peeling serum.' },
        application: { ar: 'يوضع على وجه ورقبة نظيفين وجافين تماماً. واقي الشمس في الصباح أمر حتمي.', en: 'Apply to completely clean and dry face and neck. AM sunscreen is imperative.' },
        layering: { do_not_mix_with: { ar: ['الريتينول أو المقشرات الفيزيائية.', 'Retinol or physical scrubs.'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'آثار حب الشباب، المسام الواسعة، الملمس الخشن، واللون غير الموحد.', en: 'Acne marks, enlarged pores, rough texture, and uneven tone.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'تركيبة خفيفة وسريعة الامتصاص بنسبة 100%.', en: '100% lightweight and fast-absorbing formula.' }
    }
});

// [162] Cleanance Hydra Cream
deepProductsList.push({
    id: 'avene_cleanance_hydra_cream', brandId: 'avene', familyId: 'cleanance', brand: 'Avene',
    name: { ar: 'كلينانس هيدرا كريم (مرطب الروكوتان)', en: 'Cleanance Hydra Soothing Cream' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'كريم مخصص للتعويض عن جفاف الأدوية. يحتوي على <span class="glossary-term" onclick="openGlossary(\'glycoleol\')">الجليكوليول</span> لتغذية البشرة بالدهون الأساسية دون سد المسام، وديكستران سلفات لتخفيف الاحمرار والالتهاب الشديد.', 
            en: 'A cream dedicated to compensating for medical dryness. Contains <span class="glossary-term" onclick="openGlossary(\'glycoleol\')">Glycoleol</span> to nourish the skin with essential lipids without clogging pores, and Dextran Sulfate to reduce severe redness and inflammation.' 
        },
        patient_benefit: { 
            ar: 'يرمم حاجز البشرة المتضرر من علاجات حب الشباب القوية (مثل الأيزوتريتينوين/الروكوتان)، يخفف التقشر، ويوفر راحة فورية تدوم طويلاً.', 
            en: 'Repairs the skin barrier damaged by harsh acne treatments (like Isotretinoin/Accutane), reduces flaking, and provides long-lasting instant comfort.' 
        },
        active_ingredients: [
            { name: 'Glycoleol', concentration: { ar: 'مغذي', en: 'Nourishing' }, role: { ar: 'إعادة بناء الحاجز الدهني المائي.', en: 'Rebuilding the hydrolipidic barrier.' } },
            { name: 'Dextran Sulfate', concentration: { ar: 'مهدئ للأوعية', en: 'Vascular Soother' }, role: { ar: 'تخفيف الاحمرار والتهيج.', en: 'Reducing redness and irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (أو حسب الحاجة).', en: 'Twice daily (or as needed).' },
        step_in_routine: { ar: 'الترطيب العلاجي.', en: 'Therapeutic moisturizing.' },
        application: { ar: 'يوزع بلطف على الوجه. يمكن استخدامه كأساس ناعم للمكياج لإخفاء قشور الوجه.', en: 'Distribute gently over face. Can be used as a soft makeup base to hide facial flakes.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'البشرة المعالجة بالروكوتان أو المقشرات القوية، الجفاف الشديد والتقشر المرتبط بعلاج الحبوب.', en: 'Skin treated with Accutane or strong peels, severe dryness and flaking related to acne treatment.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'غير زؤاني (Non-comedogenic) رغم قوامه المغذي.', en: 'Non-comedogenic despite its nourishing texture.' }
    }
});

// [163] Cleanance Mattifying Aqua-Gel
deepProductsList.push({
    id: 'avene_cleanance_aqua_gel', brandId: 'avene', familyId: 'cleanance', brand: 'Avene',
    name: { ar: 'كلينانس أكوا-جل مطفئ للمعان', en: 'Cleanance Mattifying Aqua-Gel' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'مرطب هلامي مائي (Aqua-Gel) منعش. يحتوي على المونولورين (Monolaurin) لتقليل الإفرازات الدهنية، وبروفيتامين E كمضاد للأكسدة لمنع أكسدة الدهون السطحية (والتي تسبب الرؤوس السوداء).', 
            en: 'A refreshing watery gel moisturizer. Contains Monolaurin to reduce sebum production, and Pro-Vitamin E as an antioxidant to prevent surface lipid oxidation (which causes blackheads).' 
        },
        patient_benefit: { 
            ar: 'يرطب البشرة الدهنية ترطيباً خفيفاً جداً دون إثقالها، يعطي لمسة نهائية غير لامعة (Matte) تدوم طويلاً، ويصغر المسام.', 
            en: 'Ultra-lightly hydrates oily skin without weighing it down, provides a long-lasting Matte finish, and shrinks pores.' 
        },
        active_ingredients: [
            { name: 'Monolaurin', concentration: { ar: 'منظم دهون', en: 'Sebo-regulator' }, role: { ar: 'تثبيط إنتاج الزهم الزائد.', en: 'Inhibiting excess sebum production.' } },
            { name: 'Pre-Tocopheryl (Vit E)', concentration: { ar: 'مضاد أكسدة', en: 'Antioxidant' }, role: { ar: 'منع أكسدة الزهم وتكون الشوائب.', en: 'Preventing sebum oxidation and impurity formation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الترطيب اليومي.', en: 'Daily moisturizing.' },
        application: { ar: 'يوضع على الوجه والرقبة. قوام ممتاز كـ (برايمر) قبل المكياج للبشرة الدهنية.', en: 'Apply to face and neck. Excellent texture as a makeup primer for oily skin.' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، اللمعان الزائد، والمسام الواسعة في الأجواء الحارة.', en: 'Oily skin, excess shine, and enlarged pores in hot climates.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام مائي خفيف ومنعش جداً.', en: 'Very light and refreshing watery texture.' }
    }
});

// [164] Cleanance Detox Mask
deepProductsList.push({
    id: 'avene_cleanance_detox_mask', brandId: 'avene', familyId: 'cleanance', brand: 'Avene',
    name: { ar: 'كلينانس ديتوكس ماسك', en: 'Cleanance Detox Mask' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'ماسك طيني منقي يعتمد على طين (الكاولين) لامتصاص الزهم العميق والشوائب، مقترن بالبيرلايت (Perlite) للتقشير اللطيف، لتنقية المسام المخنوقة بالسموم وتصغير حجمها.', 
            en: 'A purifying clay mask relying on (Kaolin) clay to absorb deep sebum and impurities, paired with Perlite for gentle exfoliation, to purify toxin-asphyxiated pores and shrink their size.' 
        }
    },
    clinical_usage: {
        frequency: { ar: '1-2 مرة أسبوعياً.', en: '1-2 times a week.' },
        step_in_routine: { ar: 'عناية أسبوعية منقية.', en: 'Weekly purifying care.' },
        application: { ar: 'يوضع لمدة 5 دقائق فقط، يُدلك بلطف بالماء للتقشير ثم يُشطف جيداً.', en: 'Leave for only 5 minutes, massage gently with water to exfoliate, then rinse well.' }
    },
    precautions: { indications: { ar: 'المسام المسدودة، الرؤوس السوداء، واللمعان الشديد.', en: 'Clogged pores, blackheads, and severe shine.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [165] Cleanance Micellar Water
deepProductsList.push({
    id: 'avene_cleanance_micellar', brandId: 'avene', familyId: 'cleanance', brand: 'Avene',
    name: { ar: 'كلينانس ميسيلار וوٹر (مزيل مكياج)', en: 'Cleanance Micellar Water' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'محلول ميسيلار ينظف ويزيل المكياج (الوجه والعين) للبشرة الدهنية. يحتوي على الكوميدوكلاستين لتنظيم الزهم، مما يترك البشرة نظيفة وغير لامعة دون فرك.', 
            en: 'Micellar solution that cleanses and removes makeup (face and eyes) for oily skin. Contains Comedoclastin to regulate sebum, leaving skin clean and matte without rubbing.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'AM & PM.' },
        application: { ar: 'يُمسح به الوجه والعين باستخدام قطنة. لا يتطلب الشطف.', en: 'Wipe face and eyes using a cotton pad. Does not require rinsing.' }
    },
    precautions: { indications: { ar: 'تنظيف البشرة الدهنية وإزالة المكياج.', en: 'Cleansing oily skin and makeup removal.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [166] Cleanance Sunscreen SPF 50+
deepProductsList.push({
    id: 'avene_cleanance_sunscreen', brandId: 'avene', familyId: 'sun_care', brand: 'Avene',
    name: { ar: 'كلينانس واقي شمس مطفئ SPF 50+', en: 'Cleanance Sunscreen SPF 50+' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'واقي شمس واسع الطيف مزود بمركب (TriAsorB) للحماية من الأشعة فوق البنفسجية والضوء الأزرق، بالإضافة إلى المونولورين لتنظيم إفراز الدهون وتوفير حماية مضادة للمعان.', 
            en: 'Broad-spectrum sunscreen equipped with (TriAsorB) complex for UV and Blue Light protection, plus Monolaurin to regulate sebum secretion and provide anti-shine protection.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'يومياً قبل الخروج.', en: 'Daily before going out.' },
        application: { ar: 'يوضع بسخاء على الوجه والرقبة. قوام جاف الملمس (Dry touch).', en: 'Apply generously to face and neck. Dry touch texture.' }
    },
    precautions: { indications: { ar: 'البشرة الدهنية وحب الشباب لتجنب التصبغات بعد الالتهاب.', en: 'Oily and acne skin to prevent post-inflammatory hyperpigmentation.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [167] TriAcnéal Expert / Cleanance Expert Emulsion
deepProductsList.push({
    id: 'avene_triacneal_expert', brandId: 'avene', familyId: 'cleanance', brand: 'Avene',
    name: { ar: 'ترياكنيل إكسبيرت (لعلامات الحبوب والعمر)', en: 'TriAcnéal Expert / Cleanance Expert Emulsion' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'مستحلب كلاسيكي متخصص لـ (حبوب البالغين). يدمج مقشرات لتقليل الشوائب مع مركب (Diolényl) المضاد للبكتيريا و(Retinaldehyde) لتنعيم التجاعيد وتفتيح ندبات حب الشباب القديمة.', 
            en: 'A classic emulsion specialized for (Adult Acne). Integrates exfoliants to reduce blemishes with anti-bacterial (Diolényl) and (Retinaldehyde) to smooth wrinkles and lighten old acne scars.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'مساءً فقط.', en: 'PM only.' },
        application: { ar: 'يوضع على وجه جاف تماماً. قد يسبب وخزاً خفيفاً في البداية.', en: 'Apply to a completely dry face. May cause slight tingling initially.' }
    },
    precautions: { indications: { ar: 'حبوب البالغين، آثار حب الشباب الداكنة، والخطوط الدقيقة.', en: 'Adult acne, dark acne marks, and fine lines.' }, pregnancy_safe: false, sun_sensitivity: true }
});
// ==========================================
// 💊 البلوك الثالث والثلاثين (Block 33): AVENE - Cicalfate & XeraCalm Families
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['c_restore'] = {
    title: { ar: 'سي بلس-ريستور [C+-Restore] 🦠', en: '[C+-Restore]™ Postbiotic 🦠' },
    desc: { 
        ar: 'أول مكون نشط للترميم الحيوي (Postbiotic) مشتق من بكتيريا المياه الحرارية لأفين. يعمل على تسريع عملية إصلاح البشرة (Epidermal repair) بمعدل 4 أضعاف، مع تعزيز الالتئام النظيف دون ندبات.', 
        en: 'The first postbiotic repairing active ingredient derived from Avene Thermal Spring Water bacteria. Accelerates epidermal repair by 4 times, promoting clean healing without scarring.' 
    }
};

glossaryDict['i_modulia'] = {
    title: { ar: 'إي-موديوليا [I-Modulia] 🧬', en: '[I-Modulia]® Complex 🧬' },
    desc: { 
        ar: 'مركب تكنولوجي حيوي مستخلص من مياه أفين الحرارية. يستهدف تحديداً الآليات العصبية للحكة، حيث يقلل الرغبة في الحك فوراً، ويهدئ الاحمرار، ويحفز الدفاعات المناعية الفطرية للجلد (Defensins).', 
        en: 'A biotechnological complex extracted from Avene Thermal Water. Specifically targets the neural mechanisms of itching, instantly reducing the urge to scratch, soothing redness, and stimulating the skin\'s innate immune defenses (Defensins).' 
    }
};

glossaryDict['cer_omega'] = {
    title: { ar: 'سير-أوميجا (Cer-Omega) 💧', en: 'Cer-Omega Lipids 💧' },
    desc: { 
        ar: 'مزيج من الدهون المشابهة بيولوجياً للجلد (سيراميدات وأوميجا 6). يغذي الجلد شديد الجفاف بعمق ويرمم الغلاف المائي الدهني التالف لمنع تسرب الرطوبة.', 
        en: 'A blend of skin-biomimetic lipids (Ceramides and Omega-6). Deeply nourishes severely dry skin and repairs the damaged hydrolipidic film to prevent moisture loss.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [168] Cicalfate+ Restorative Protective Cream
deepProductsList.push({
    id: 'avene_cicalfate_plus_cream', brandId: 'avene', familyId: 'cicalfate', brand: 'Avene',
    name: { ar: 'سيكالفات+ كريم (مرمم وحامي للجروح)', en: 'Cicalfate+ Restorative Protective Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يوفر بيئة التئام مثالية. يستخدم <span class="glossary-term" onclick="openGlossary(\'c_restore\')">[C+-Restore]</span> لتسريع تجدد الخلايا، مع مركب (النحاس/الزنك) لتعقيم بيئة الجرح ومنع التكاثر البكتيري، ومياه أفين لتهدئة الألم.', 
            en: 'Provides an optimal healing environment. Uses <span class="glossary-term" onclick="openGlossary(\'c_restore\')">[C+-Restore]</span> to accelerate cell renewal, with a (Copper/Zinc) complex to sanitize the wound environment and prevent bacterial proliferation, and Avene Water to soothe pain.' 
        },
        patient_benefit: { 
            ar: 'كريم طوارئ لجميع أفراد الأسرة. يعالج الجروح السطحية، الحروق الخفيفة، تسلخات الحفاض، والتشققات، ويوفر غطاءً عازلاً (Dressing effect) لحماية الجلد أثناء الالتئام.', 
            en: 'SOS cream for the whole family. Treats superficial wounds, minor burns, diaper rash, and chapping, providing an isolating "dressing effect" to protect skin during healing.' 
        },
        active_ingredients: [
            { name: '[C+-Restore]™', concentration: { ar: 'مرمم حيوي', en: 'Bio-restorer' }, role: { ar: 'تسريع الالتئام الجلدي 4 أضعاف.', en: 'Accelerating epidermal healing 4x.' } },
            { name: 'Copper-Zinc Sulfate', concentration: { ar: 'معقم', en: 'Sanitizer' }, role: { ar: 'منع العدوى البكتيرية الثانوية.', en: 'Preventing secondary bacterial infection.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '1 إلى 2 مرة يومياً.', en: '1 to 2 times daily.' },
        step_in_routine: { ar: 'علاج موضعي.', en: 'Targeted treatment.' },
        application: { ar: 'يوضع بسخاء على المنطقة المتضررة النظيفة والجافة.', en: 'Apply generously to the clean, dry affected area.' },
        layering: { do_not_mix_with: { ar: ['تطبيقه على الجروح النازفة بشدة.', 'Applying on heavily bleeding wounds.'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'الجروح، الحروق، الليزر السطحي، الإكزيما المتقشرة، وتسلخات الرضع.', en: 'Wounds, burns, superficial laser, flaking eczema, and infant diaper rash.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'آمن للرضع من اليوم الأول.', en: 'Safe for infants from day one.' }
    }
});

// [169] Cicalfate+ Scar Gel
deepProductsList.push({
    id: 'avene_cicalfate_scar_gel', brandId: 'avene', familyId: 'cicalfate', brand: 'Avene',
    name: { ar: 'سيكالفات+ جل الندبات (مُدلك للندبات)', en: 'Cicalfate+ Scar Gel' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'قوام سيليكوني مخصص لتدليك الندبات. يحتوي على دايميثيكون وحمض الهيالورونيك لخلق غشاء شبه نفاذ يحافظ على الترطيب ويساعد في تسطيح الندبات المرتفعة، بجانب <span class="glossary-term" onclick="openGlossary(\'c_restore\')">[C+-Restore]</span> لتحسين المظهر.', 
            en: 'A silicone texture designed for scar massage. Contains Dimethicone and HA to create a semi-permeable film that retains moisture and helps flatten raised scars, alongside <span class="glossary-term" onclick="openGlossary(\'c_restore\')">[C+-Restore]</span> to improve appearance.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        application: { ar: 'يُدلك على الندبة المغلقة (بعد إزالة الغرز) لمدة 3-5 دقائق لتفكيك الألياف القاسية.', en: 'Massage onto the closed scar (post-stitches) for 3-5 minutes to break down rigid fibers.' }
    },
    precautions: { indications: { ar: 'الندبات الجراحية الحديثة (أقل من 6 أشهر)، ندبات الحروق والعمليات.', en: 'Fresh surgical scars (under 6 months), burn and operation scars.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [170] Cicalfate+ Absorbing Soothing Spray / Drying Lotion
deepProductsList.push({
    id: 'avene_cicalfate_spray', brandId: 'avene', familyId: 'cicalfate', brand: 'Avene',
    name: { ar: 'سيكالفات بخاخ / لوشن (مجفف للالتهابات النازفة)', en: 'Cicalfate+ Absorbing Soothing Spray / Lotion' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'تركيبة غنية بالبودرة الماصة (Absorbent Powders) والنحاس والزنك. صُممت خصيصاً لتجفيف الإفرازات في طيات الجلد (Maceration) ومناطق الالتهاب الرطبة لمنع التعفن البكتيري.', 
            en: 'Formula rich in Absorbent Powders, Copper, and Zinc. Specifically designed to dry out exudates in skin folds (Maceration) and moist inflamed areas to prevent bacterial putrefaction.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        application: { ar: 'يُرج جيداً قبل الاستخدام، ثم يُرش/يُطبق على المنطقة الرطبة أو المفرزة.', en: 'Shake well before use, then spray/apply onto the moist or weeping area.' }
    },
    precautions: { indications: { ar: 'الجدري (Chickenpox)، طيات الجلد (الثنايا)، تسلخات الرضع المفرزة، والجروح النازفة الخفيفة.', en: 'Chickenpox, skin folds, weeping diaper rash, and mildly weeping wounds.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [171] Cicalfate Lips Restorative Lip Balm
deepProductsList.push({
    id: 'avene_cicalfate_lips', brandId: 'avene', familyId: 'cicalfate', brand: 'Avene',
    name: { ar: 'سيكالفات للشفاه (بلسم مرمم ومقاوم للماء)', en: 'Cicalfate Lips Restorative Balm' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'بلسم (Water-in-Oil) يوفر تغطية عازلة تدوم طويلاً حتى مع الأكل والشرب. يحتوي على زيوت نباتية و <span class="glossary-term" onclick="openGlossary(\'c_restore\')">سوكرالفات</span> لترميم تشققات الشفاه وحول الفم.', 
            en: 'A (Water-in-Oil) balm providing long-lasting occlusive coverage even through eating and drinking. Contains botanical oils and Sucralfate to repair chapped lips and the peri-oral area.' 
        }
    },
    clinical_usage: { frequency: { ar: 'عند الحاجة.', en: 'As needed.' } },
    precautions: { indications: { ar: 'تشققات الشفاه الشديدة، الجفاف الناتج عن الروكوتان، والتهاب زوايا الفم.', en: 'Severe chapped lips, Accutane-induced dryness, and angular cheilitis.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [172] Cicalfate+ Skin Repair Emulsion (Post-Procedure)
deepProductsList.push({
    id: 'avene_cicalfate_emulsion', brandId: 'avene', familyId: 'cicalfate', brand: 'Avene',
    name: { ar: 'سيكالفات+ مستحلب الترميم (لما بعد الإجراءات)', en: 'Cicalfate+ Post-Procedure Skin Repair Emulsion' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'نسخة خفيفة جداً من كريم سيكالفات. مصممة لتهدئة الحرارة والاحمرار فوراً بعد الإجراءات التجميلية السطحية (كالتقشير الكيميائي والليزر) دون سد المسام أو التسبب في لمعان.', 
            en: 'A very light version of Cicalfate cream. Designed to instantly soothe heat and redness post-superficial aesthetic procedures (like chemical peels and lasers) without clogging pores or causing shine.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' } },
    precautions: { indications: { ar: 'ما بعد الليزر، التقشير الكيميائي، والوشم (Tattoos).', en: 'Post-laser, chemical peels, and tattoos.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [173] Cicalfate+ Cream SPF 50+
deepProductsList.push({
    id: 'avene_cicalfate_spf50', brandId: 'avene', familyId: 'cicalfate', brand: 'Avene',
    name: { ar: 'سيكالفات+ كريم حماية (بواقي شمس SPF50)', en: 'Cicalfate+ Cream SPF 50+' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'يدمج قوة الترميم مع فلاتر حماية من الأشعة فوق البنفسجية واسعة الطيف. يمنع التصبغ المفرط للندبات والجروح (Hyperpigmentation) عند تعرضها للشمس أثناء فترة الالتئام.', 
            en: 'Merges restorative power with broad-spectrum UV filters. Prevents hyperpigmentation of scars and wounds when exposed to the sun during the healing phase.' 
        }
    },
    clinical_usage: { frequency: { ar: 'صباحاً (ويُجدد عند التعرض للشمس).', en: 'AM (reapply upon sun exposure).' } },
    precautions: { indications: { ar: 'حماية الندبات الحديثة والإجراءات التجميلية من الشمس.', en: 'Protecting fresh scars and aesthetic procedures from the sun.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [174] Cicalfate+ Intensive Skin Recovery Serum
deepProductsList.push({
    id: 'avene_cicalfate_recovery_serum', brandId: 'avene', familyId: 'cicalfate', brand: 'Avene',
    name: { ar: 'سيكالفات+ سيروم التعافي المكثف', en: 'Cicalfate+ Intensive Skin Recovery Serum' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'سيروم عالي التركيز بحمض الهيالورونيك ومياه أفين الحرارية وفيتامين B5. يرمم حاجز البشرة المتضرر خلال 24 ساعة ويرطب بعمق لتهدئة التهيج والتحسس المزمن.', 
            en: 'A highly concentrated serum with HA, Avene Water, and Vit B5. Repairs the damaged skin barrier within 24 hours and deeply hydrates to soothe chronic irritation and sensitivity.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' } },
    precautions: { indications: { ar: 'البشرة شديدة التحسس، الجفاف الحاد، وتضرر حاجز البشرة (Barrier damage).', en: 'Highly sensitive skin, acute dehydration, and barrier damage.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [175] XeraCalm A.D Lipid-Replenishing Cream
deepProductsList.push({
    id: 'avene_xeracalm_ad_cream', brandId: 'avene', familyId: 'xeracalm', brand: 'Avene',
    name: { ar: 'زيراكالم A.D كريم (للإكزيما والحكة)', en: 'XeraCalm A.D Lipid-Replenishing Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'علاج متخصص للإكزيما. يعتمد على مركب <span class="glossary-term" onclick="openGlossary(\'i_modulia\')">[I-Modulia]</span> لوقف الحكة فوراً، ومركب <span class="glossary-term" onclick="openGlossary(\'cer_omega\')">Cer-Omega</span> لتعويض النقص الشديد في دهون الجلد. مصمم بتقنية (Cosmetics Sterile) ليكون خالياً تماماً من المواد الحافظة.', 
            en: 'Specialized eczema treatment. Relies on <span class="glossary-term" onclick="openGlossary(\'i_modulia\')">[I-Modulia]</span> to instantly stop itching, and <span class="glossary-term" onclick="openGlossary(\'cer_omega\')">Cer-Omega</span> to replenish severe lipid deficiency. Formulated with Sterile Cosmetics technology to be 100% preservative-free.' 
        },
        patient_benefit: { 
            ar: 'يقلل الحكة بنسبة 97% خلال أيام، يطيل الفترات بين نوبات التهيج الشديدة (Anti-relapse)، ويعيد بناء حاجز البشرة التأتبية للرضع والأطفال والبالغين.', 
            en: 'Reduces itching by 97% within days, prolongs intervals between severe flare-ups (Anti-relapse), and rebuilds the atopic skin barrier for infants, children, and adults.' 
        },
        active_ingredients: [
            { name: '[I-Modulia]®', concentration: { ar: 'مضاد حكة', en: 'Anti-itching' }, role: { ar: 'وقف مسارات الحكة العصبية.', en: 'Stopping neural itch pathways.' } },
            { name: 'Cer-Omega', concentration: { ar: 'مغذي', en: 'Nourishing' }, role: { ar: 'ترميم الحاجز ومنع فقدان الماء.', en: 'Barrier repair and preventing water loss.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '1-2 مرة يومياً.', en: '1-2 times daily.' },
        step_in_routine: { ar: 'ترطيب علاجي للإكزيما.', en: 'Therapeutic moisturizing for eczema.' },
        application: { ar: 'يوضع على المناطق الجافة والمصابة بالحكة (الوجه والجسم).', en: 'Apply to dry and itchy areas (face and body).' },
        layering: { do_not_mix_with: { ar: ['-'], en: ['-'] }, best_mixed_with: { ar: ['XeraCalm A.D Cleansing Oil.', 'XeraCalm A.D Cleansing Oil.'] } }
    },
    precautions: {
        indications: { ar: 'الإكزيما (التهاب الجلد التأتبي)، الحكة الشديدة، والجفاف المزمن لجميع الأعمار.', en: 'Eczema (Atopic Dermatitis), severe itching, and chronic dryness for all ages.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'عبوة معقمة لا تسمح بدخول الهواء أو البكتيريا.', en: 'Sterile pump preventing air and bacteria from entering.' }
    }
});

// [176] XeraCalm A.D Lipid-Replenishing Cleansing Oil
deepProductsList.push({
    id: 'avene_xeracalm_ad_oil', brandId: 'avene', familyId: 'xeracalm', brand: 'Avene',
    name: { ar: 'زيراكالم A.D زيت منظف (للاستحمام)', en: 'XeraCalm A.D Lipid-Replenishing Cleansing Oil' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'غسول زيتي خالٍ من الصابون، مصمم خصيصاً للاستحمام أثناء نوبات الإكزيما (Flare-ups). يحتوي على I-Modulia لتخفيف حكة الماء الساخن، ويترك طبقة دهنية حامية على الجلد.', 
            en: 'A soap-free cleansing oil, specifically designed for bathing during eczema flare-ups. Contains I-Modulia to soothe hot-water itching, leaving a protective lipid film on the skin.' 
        }
    },
    clinical_usage: { frequency: { ar: 'أثناء الاستحمام.', en: 'During bath/shower.' }, application: { ar: 'يُرغى في اليدين ويوضع على البشرة المبللة، أو تُضاف بضع قطرات لماء الاستحمام.', en: 'Lather in hands and apply to wet skin, or add a few drops to bathwater.' } },
    precautions: { indications: { ar: 'استحمام مرضى الإكزيما لتجنب جفاف الماء العادي.', en: 'Bathing eczema patients to avoid regular water dryness.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [177] XeraCalm Nutrition Cleansing Gel
deepProductsList.push({
    id: 'avene_xeracalm_nutrition_gel', brandId: 'avene', familyId: 'xeracalm', brand: 'Avene',
    name: { ar: 'زيراكالم نوتريشن جل منظف', en: 'XeraCalm Nutrition Cleansing Gel' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'غسول يومي للعائلة (بديلاً لـ Trixera القديم). ينظف بلطف فائق ويحتوي على زيت الحرشف المريمي (Milk Thistle Oil) لتعزيز السيراميد الطبيعي وترطيب الجلد الجاف.', 
            en: 'Daily family wash (replacing the old Trixera). Ultra-gently cleanses and contains Milk Thistle Oil to boost natural ceramides and hydrate dry skin.' 
        }
    },
    clinical_usage: { frequency: { ar: 'يومياً للاستحمام.', en: 'Daily for shower.' } },
    precautions: { indications: { ar: 'البشرة الجافة والعادية للعائلة (الوجه والجسم).', en: 'Normal to dry family skin (Face & Body).' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [178] XeraCalm Nutrition Shower Cream
deepProductsList.push({
    id: 'avene_xeracalm_nutrition_cream_wash', brandId: 'avene', familyId: 'xeracalm', brand: 'Avene',
    name: { ar: 'زيراكالم نوتريشن كريم استحمام', en: 'XeraCalm Nutrition Shower Cream' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'نسخة أكثر دسامة من الجل. قوام كريمي غني بالدهون الفائقة (Super-fatting agents) لتنظيف البشرة شديدة الجفاف والمتقشرة دون الإخلال بغلافها الدهني.', 
            en: 'A creamier version of the gel. Rich creamy texture with super-fatting agents to cleanse severely dry, flaking skin without disrupting its lipid mantle.' 
        }
    },
    clinical_usage: { frequency: { ar: 'يومياً للاستحمام.', en: 'Daily for shower.' } },
    precautions: { indications: { ar: 'البشرة شديدة الجفاف والمشدودة.', en: 'Severely dry and tight skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [179] XeraCalm Nutrition Moisturizing Balm
deepProductsList.push({
    id: 'avene_xeracalm_nutrition_balm', brandId: 'avene', familyId: 'xeracalm', brand: 'Avene',
    name: { ar: 'زيراكالم نوتريشن بلسم مرطب', en: 'XeraCalm Nutrition Moisturizing Balm' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'مرطب يومي غني للعائلة يوفر تغذية تدوم لـ 48 ساعة بفضل مستخلصات النياكيناميد والزيوت النباتية التي تعيد بناء حاجز الجلد وتمنع جفاف الشتاء.', 
            en: 'A rich daily family moisturizer providing 48h nourishment thanks to Niacinamide and botanical oils that rebuild the skin barrier and prevent winter dryness.' 
        }
    },
    clinical_usage: { frequency: { ar: '1-2 مرة يومياً.', en: '1-2 times daily.' }, application: { ar: 'للوجه والجسم.', en: 'For face and body.' } },
    precautions: { indications: { ar: 'العناية اليومية بالبشرة شديدة الجفاف لجميع الأعمار.', en: 'Daily care for severely dry skin for all ages.' }, pregnancy_safe: true, sun_sensitivity: false }
});
// ==========================================
// 💊 البلوك الرابع والثلاثين (Block 34): AVENE - Tolerance, Hydrance & Thermal Water
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['sterile_cosmetics'] = {
    title: { ar: 'تكنولوجيا التعقيم (Sterile Cosmetics) 🛡️', en: 'Sterile Cosmetics Technology 🛡️' },
    desc: { 
        ar: 'نظام تغليف مغلق تماماً (D.E.F.I) حاصل على براءة اختراع. يمنع دخول الهواء والبكتيريا إلى الأنبوب، مما يسمح لأفين بابتكار تركيبات علاجية خالية بنسبة 0% من المواد الحافظة، البارابين، والعطور، لتكون آمنة تماماً للبشرة شديدة التحسس.', 
        en: 'A patented completely closed packaging system (D.E.F.I). It prevents air and bacteria from entering the tube, allowing Avene to create therapeutic formulas that are 100% free of preservatives, parabens, and fragrances, ensuring total safety for hypersensitive skin.' 
    }
};

glossaryDict['d_sensinose'] = {
    title: { ar: 'دي-سينسينوز (D-Sensinose™) 🧠', en: 'D-Sensinose™ Postbiotic 🧠' },
    desc: { 
        ar: 'مستخلص ما بعد حيوي (Postbiotic) من مياه أفين الحرارية. يعمل بشكل فوري على إغلاق مسارات الألم التحسسي في الأعصاب الجلدية، مما يهدئ نوبات الاحمرار والوخز في 30 ثانية فقط.', 
        en: 'A postbiotic extract from Avene Thermal Water. It acts instantly to block allergic pain pathways in cutaneous nerves, calming flare-ups of redness and stinging in just 30 seconds.' 
    }
};

glossaryDict['cohederm'] = {
    title: { ar: 'مركب كوهيديرم (Cohederm™) 💧', en: 'Cohederm™ Complex 💧' },
    desc: { 
        ar: 'مركب دهني ثلاثي مبتكر. يعمل كـ "إسفنجة دقيقة" تعيد بناء الخزانات المائية الطبيعية داخل الإيپيديرمس، وتحبس مياه أفين الحرارية بداخلها لترطيب طويل الأمد.', 
        en: 'An innovative lipidic trio. Acts as a "micro-sponge" that rebuilds natural water reservoirs within the epidermis, trapping Avene Thermal Water inside for long-lasting hydration.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [180] Tolerance Control Soothing Skin Recovery Cream
deepProductsList.push({
    id: 'avene_tolerance_control', brandId: 'avene', familyId: 'tolerance', brand: 'Avene',
    name: { ar: 'توليرانس كنترول كريم (للتحسس المفرط)', en: 'Tolerance Control Soothing Skin Recovery Cream' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'مصمم للبشرة التفاعلية. يستخدم <span class="glossary-term" onclick="openGlossary(\'d_sensinose\')">D-Sensinose</span> للسيطرة الفورية على التفاعلات التحسسية المفرطة، مع حماية <span class="glossary-term" onclick="openGlossary(\'sterile_cosmetics\')">العبوة المعقمة</span> لمنع أي تلوث خارجي يثير الجلد.', 
            en: 'Designed for reactive skin. Uses <span class="glossary-term" onclick="openGlossary(\'d_sensinose\')">D-Sensinose</span> to instantly control hypersensitive reactions, protected by <span class="glossary-term" onclick="openGlossary(\'sterile_cosmetics\')">Sterile Cosmetics</span> packaging to prevent any external contamination that could trigger the skin.' 
        },
        patient_benefit: { 
            ar: 'يهدئ الوخز، الحرقان، والشد خلال 30 ثانية، ويصلح الحاجز الجلدي المتضرر خلال 48 ساعة.', 
            en: 'Soothes stinging, burning, and tightness within 30 seconds, and repairs the damaged skin barrier within 48 hours.' 
        },
        active_ingredients: [
            { name: 'D-Sensinose™', concentration: { ar: 'فعال عصبياً', en: 'Neuro-active' }, role: { ar: 'تسكين الألم والالتهاب فوراً.', en: 'Instant pain and inflammation relief.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'كريم الترطيب العلاجي.', en: 'Therapeutic moisturizing cream.' },
        application: { ar: 'يوضع على الوجه والرقبة ومحيط العين. يمتص بسرعة.', en: 'Apply to face, neck, and eye contour. Absorbs quickly.' },
        layering: { do_not_mix_with: { ar: ['أي منتج يحتوي على عطور في نفس الروتين.', 'Any fragrance-containing product in the same routine.'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'البشرة التفاعلية، غير المتسامحة (Intolerant)، والتحسس لمستحضرات التجميل.', en: 'Reactive, intolerant skin, and cosmetic allergies.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'تركيبة 0% مواد حافظة بفضل العبوة المعقمة.', en: '0% preservatives formula thanks to sterile packaging.' }
    }
});

// [181] Tolerance Hydra-10 Cream / Fluid
deepProductsList.push({
    id: 'avene_tolerance_hydra10', brandId: 'avene', familyId: 'tolerance', brand: 'Avene',
    name: { ar: 'توليرانس هيدرا-10 (كريم/فلويد ترطيب 48 ساعة)', en: 'Tolerance Hydra-10 Hydrating Cream / Fluid' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'أول مرطب طبيعي 100% عالي التوافق. يحتوي على 10 مكونات فقط مستوحاة من تركيب الجلد (Biomimetic)، مدعم بحمض الهيالورونيك عالي الوزن الجزيئي لترطيب يدوم 48 ساعة في <span class="glossary-term" onclick="openGlossary(\'sterile_cosmetics\')">عبوة معقمة</span>.', 
            en: 'The first 100% natural, high-tolerance moisturizer. Contains only 10 biomimetic ingredients, boosted with high molecular weight HA for 48h hydration in <span class="glossary-term" onclick="openGlossary(\'sterile_cosmetics\')">Sterile Packaging</span>.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' }, application: { ar: 'الفلويد (للبشرة المختلطة/الدهنية)، والكريم (للبشرة الجافة).', en: 'Fluid (for combo/oily skin), Cream (for dry skin).' } },
    precautions: { indications: { ar: 'الترطيب اليومي الآمن للحوامل، الأطفال، والبشرة الحساسة.', en: 'Safe daily hydration for pregnant women, children, and sensitive skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [182] Tolerance Extremely Gentle Cleansing Lotion
deepProductsList.push({
    id: 'avene_tolerance_cleanser', brandId: 'avene', familyId: 'tolerance', brand: 'Avene',
    name: { ar: 'توليرانس لوشن منظف فائق اللطف', en: 'Tolerance Extremely Gentle Cleanser' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'منظف ومزيل مكياج لا يحتاج للشطف. يحتوي على مواد تنظيف فائقة اللطف تحترم ميكروبيوم البشرة الهش، مع نسبة عالية من مياه أفين لتهدئة الجلد.', 
            en: 'A no-rinse cleanser and makeup remover. Contains ultra-gentle cleansing agents that respect the fragile skin microbiome, with a high percentage of Avene water to soothe.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' }, application: { ar: 'يطبق ويُدلك بأطراف الأصابع، ثم يُمسح بلطف بقطنة دون شطف بالماء.', en: 'Apply and massage with fingertips, then wipe off gently with a cotton pad without rinsing.' } },
    precautions: { indications: { ar: 'تنظيف البشرة التفاعلية التي تتهيج من ماء الصنبور.', en: 'Cleansing reactive skin irritated by tap water.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [183] Hydrance Boost Concentrated Hydrating Serum
deepProductsList.push({
    id: 'avene_hydrance_boost_serum', brandId: 'avene', familyId: 'hydrance', brand: 'Avene',
    name: { ar: 'هيدرانس بوست سيروم (الترطيب المركز)', en: 'Hydrance Boost Concentrated Hydrating Serum' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'سيروم מائي يحتوي على حمض الهيالورونيك (1.5%) والنياسيناميد مع مركب <span class="glossary-term" onclick="openGlossary(\'cohederm\')">الكوهيديرم</span> لإعادة شحن خلايا الجلد بالماء الحراري المهدئ وتقوية حاجز الجلد ضد الجفاف.', 
            en: 'An aqueous serum containing HA (1.5%) and Niacinamide with the <span class="glossary-term" onclick="openGlossary(\'cohederm\')">Cohederm</span> complex to recharge skin cells with soothing thermal water and fortify the barrier against dehydration.' 
        },
        patient_benefit: { 
            ar: 'يعزز مستويات الترطيب بنسبة 132%، يملأ خطوط الجفاف الدقيقة، ويترك البشرة مرنة ومضيئة لمدة 48 ساعة.', 
            en: 'Boosts hydration levels by 132%, plumps fine dehydration lines, and leaves the skin supple and radiant for 48 hours.' 
        },
        active_ingredients: [
            { name: 'Hyaluronic Acid + Niacinamide', concentration: { ar: 'مركز', en: 'Concentrated' }, role: { ar: 'جذب الماء وتقوية الحاجز.', en: 'Binding water and strengthening barrier.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'سيروم الترطيب (قبل الكريم).', en: 'Hydrating serum (Before cream).' },
        application: { ar: 'توضع بضع قطرات على وجه ورقبة رطبين قليلاً لتعزيز حبس الماء.', en: 'Apply a few drops to slightly damp face and neck to boost water retention.' }
    },
    precautions: { indications: { ar: 'الجفاف الشديد، البشرة المجهدة والباهتة.', en: 'Severe dehydration, tired and dull skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [184] Hydrance Aqua-Gel
deepProductsList.push({
    id: 'avene_hydrance_aqua_gel', brandId: 'avene', familyId: 'hydrance', brand: 'Avene',
    name: { ar: 'هيدرانس أكوا-جل (مرطب متعدد الاستخدامات)', en: 'Hydrance Aqua-Gel Hydrating Cream-in-Gel' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'عناية شاملة 3 في 1 (كريم نهار، ماسك ليلي، وعناية للعين). يعتمد على <span class="glossary-term" onclick="openGlossary(\'cohederm\')">الكوهيديرم</span> مع خصائص الديتوكس (Dextran Sulfate) لحماية البشرة من الإجهاد التأكسدي والملوثات البيئية.', 
            en: '3-in-1 comprehensive care (Day cream, Night mask, Eye care). Relies on <span class="glossary-term" onclick="openGlossary(\'cohederm\')">Cohederm</span> with detoxifying properties (Dextran Sulfate) to protect skin from oxidative stress and environmental pollutants.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' }, application: { ar: 'يُستخدم كمرطب خفيف نهاراً، وبطبقة كثيفة ليلاً كماسك للوجه والعين.', en: 'Use as a light moisturizer daily, and as a thick layer at night as a face/eye mask.' } },
    precautions: { indications: { ar: 'ترطيب عملي وسريع لجميع أنواع البشرة الحساسة.', en: 'Practical, quick hydration for all sensitive skin types.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [185] Hydrance UV Light / Rich Hydrating Cream SPF 30
deepProductsList.push({
    id: 'avene_hydrance_uv', brandId: 'avene', familyId: 'hydrance', brand: 'Avene',
    name: { ar: 'هيدرانس كريم ترطيب مع واقي شمس SPF30 (لايت/ريتش)', en: 'Hydrance UV Light / Rich Hydrating Cream SPF 30' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'يوفر ترطيباً مستمراً بواسطة مركب الكوهيديرم، مدمجاً مع نظام حماية شمسي فعال ضد الأشعة فوق البنفسجية لتجنب جفاف البشرة الناتج عن الشمس. متوفر بنسخة (Light) للمختلطة، و (Rich) للجافة.', 
            en: 'Provides continuous hydration via Cohederm, combined with an effective UV protection system to avoid sun-induced skin dehydration. Available in (Light) for combination, and (Rich) for dry skin.' 
        }
    },
    clinical_usage: { frequency: { ar: 'صباحاً.', en: 'AM.' } },
    precautions: { indications: { ar: 'الترطيب النهاري والحماية من الشيخوخة الضوئية.', en: 'Daytime hydration and photo-aging protection.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [186] Thermal Spring Water
deepProductsList.push({
    id: 'avene_thermal_water', brandId: 'avene', familyId: 'body_essentials', brand: 'Avene',
    name: { ar: 'مياه أفين الحرارية (البخاخ المهدئ)', en: 'Avene Thermal Spring Water Spray' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '7.5 (معتدل يميل للقلوية)', en: '7.5 (Neutral tending alkaline)' },
        mechanism: { 
            ar: 'مياه علاجية طبيعية تُعبأ من النبع مباشرة. تتميز بتركيبة معدنية فريدة غنية بالسيليكات، معززة ببكتيريا <span class="glossary-term" onclick="openGlossary(\'aqua_dolomiae\')">أكوا دولوميا</span> التي تمنحها خصائص مهدئة، مضادة للتهيج، ومضادة للالتهاب لا مثيل لها.', 
            en: 'Natural therapeutic water bottled directly at the source. Characterized by a unique mineral composition rich in silicates, enhanced with <span class="glossary-term" onclick="openGlossary(\'aqua_dolomiae\')">Aqua Dolomiae</span> microflora granting it unparalleled soothing, anti-irritating, and anti-inflammatory properties.' 
        },
        patient_benefit: { 
            ar: 'الخطوة الأساسية لتهدئة البشرة: بعد حروق الشمس، إزالة الشعر، الليزر، الطفح الجلدي، أو كمثبت للمكياج.', 
            en: 'The essential step to soothe skin: post-sunburn, hair removal, laser, rashes, or as a makeup setter.' 
        },
        active_ingredients: [
            { name: 'Pure Thermal Spring Water', concentration: { ar: '100%', en: '100%' }, role: { ar: 'تهدئة فورية وإصلاح نسيجي.', en: 'Instant soothing and tissue repair.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'حسب الحاجة.', en: 'As needed.' },
        application: { ar: 'يُرش على مسافة 20 سم، يُترك لعدة دقائق، ثم يُجفف برفق. (مهم: لا ترج العبوة قبل الاستخدام).', en: 'Spray from 20cm, leave for a few minutes, then pat dry. (Important: Do not shake before use).' }
    },
    precautions: { indications: { ar: 'جميع أنواع التهيج، الحساسية، والترطيب المنعش.', en: 'All types of irritation, allergies, and refreshing hydration.' }, pregnancy_safe: true, sun_sensitivity: false }
});
// ==========================================
// 💊 البلوك الخامس والثلاثين (Block 35): AVENE - Anti-Aging Families
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['retinaldehyde'] = {
    title: { ar: 'ريتينالديهيد (Retinaldehyde) 🧬', en: 'Retinaldehyde (Retinal) 🧬' },
    desc: { 
        ar: 'مقدمة مباشرة لحمض الريتينويك (فيتامين أ النشط). يعتبر أقوى وأسرع من الريتينول العادي بـ 11 مرة، وأقل تهيجاً للبشرة. يحفز إنتاج الكولاجين بقوة ويسرع التجديد الخلوي لتقليل التجاعيد العميقة.', 
        en: 'A direct precursor to Retinoic Acid (active Vitamin A). Considered 11 times stronger and faster than regular Retinol, yet less irritating. Powerfully stimulates collagen production and accelerates cellular turnover to reduce deep wrinkles.' 
    }
};

glossaryDict['niacinamide_6'] = {
    title: { ar: 'نياسيناميد 6% (Niacinamide 6%) 🛡️', en: 'Niacinamide 6% 🛡️' },
    desc: { 
        ar: 'تركيز دقيق أثبتت أبحاث أفين أنه الأمثل لتأخير شيخوخة الخلايا (Cellular Senescence). يعمل على إطالة عمر الخلية، وتقليل التصبغات، وتحفيز بناء السيراميد في الجلد.', 
        en: 'A precise concentration clinically proven by Avene to be optimal for delaying Cellular Senescence. It prolongs cell lifespan, reduces pigmentation, and stimulates ceramide synthesis in the skin.' 
    }
};

glossaryDict['vitamin_cg'] = {
    title: { ar: 'فيتامين سي جي (Vitamin CG) 🍋', en: 'Ascorbyl Glucoside (Vitamin CG) 🍋' },
    desc: { 
        ar: 'شكل مستقر للغاية من فيتامين C. يتحرر تدريجياً داخل الجلد ليتحول إلى فيتامين C نقي، مما يوفر حماية مضادة للأكسدة طويلة الأمد، وتفتيحاً مستمراً دون أن يتأكسد في العبوة.', 
        en: 'A highly stable form of Vitamin C. It releases gradually within the skin to convert into pure Vitamin C, providing long-lasting antioxidant protection and continuous brightening without oxidizing in the bottle.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [187] Hyaluron Activ B3 Cell Renewal Cream
deepProductsList.push({
    id: 'avene_hyaluron_activ_b3_cream', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'هيالورون أكتيف B3 كريم تجديد الخلايا', en: 'Hyaluron Activ B3 Cell Renewal Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستهدف جذور شيخوخة الخلايا. يجمع <span class="glossary-term" onclick="openGlossary(\'niacinamide_6\')">النياسيناميد بتركيز 6%</span> مع حمض الهيالورونيك النقي لتحفيز انقسام الخلايا وإطالة عمرها الافتراضي، مما يمنح تأثيراً مالئاً للتجاعيد.', 
            en: 'Targets the root cause of cellular aging. Combines <span class="glossary-term" onclick="openGlossary(\'niacinamide_6\')">6% Niacinamide</span> with pure HA to stimulate cell division and prolong lifespan, granting a wrinkle-plumping effect.' 
        },
        patient_benefit: { 
            ar: 'يصحح التجاعيد، يشد الجلد فوراً، ويعطي الوجه إشراقة وحيوية. يعتبر قاعدة ممتازة للمكياج.', 
            en: 'Corrects wrinkles, instantly firms the skin, and gives the face radiance and vitality. Serves as an excellent makeup base.' 
        },
        active_ingredients: [
            { name: 'Niacinamide (6%) + Hyaluronic Acid', concentration: { ar: 'تجديد فائق', en: 'Supreme Renewal' }, role: { ar: 'إطالة عمر الخلايا ونفخ الجلد.', en: 'Prolonging cell life and plumping skin.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' },
        application: { ar: 'يوضع على وجه ورقبة نظيفين بمفرده أو بعد السيروم.', en: 'Apply to clean face and neck alone or post-serum.' }
    },
    precautions: { indications: { ar: 'الشيخوخة المبكرة، التجاعيد، والبهتان.', en: 'Premature aging, wrinkles, and dullness.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [188] Hyaluron Activ B3 Multi-Intensive Night Cream
deepProductsList.push({
    id: 'avene_hyaluron_activ_b3_night', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'هيالورون أكتيف B3 كريم الليل المكثف', en: 'Hyaluron Activ B3 Multi-Intensive Night Cream' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { 
            ar: 'كريم ليلي مجدد. يحتوي على تركيبة B3 بالإضافة إلى <span class="glossary-term" onclick="openGlossary(\'retinaldehyde\')">الريتينال (Retinal)</span> لتسريع التجديد الخلوي أثناء النوم بشكل دراماتيكي، ومستخلص هاريتيكا (Haritaki) لتعزيز الكولاجين.', 
            en: 'Regenerating night cream. Contains the B3 formula plus <span class="glossary-term" onclick="openGlossary(\'retinaldehyde\')">Retinal</span> to dramatically accelerate cell renewal during sleep, and Haritaki extract to boost collagen.' 
        }
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً.', en: 'Once daily (PM).' },
        application: { ar: 'يوضع على الوجه والرقبة. إذا حدث وخز، يُستخدم يوم بعد يوم في البداية.', en: 'Apply to face and neck. If tingling occurs, use every other day initially.' }
    },
    precautions: { indications: { ar: 'التجاعيد العميقة والترهل الليلي.', en: 'Deep wrinkles and nocturnal sagging.' }, pregnancy_safe: false, sun_sensitivity: true }
});

// [189] Hyaluron Activ B3 Plumping Serum
deepProductsList.push({
    id: 'avene_hyaluron_activ_b3_serum', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'هيالورون أكتيف B3 سيروم (للنفخ)', en: 'Hyaluron Activ B3 Concentrated Plumping Serum' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { 
            ar: 'سيروم عالي التركيز (يحتوي على مكونين نشطين فقط بتركيز عالٍ: النياسيناميد 6% والهيالورونيك 1.5%). يوفر تأثيراً مباشراً في شد ونفخ التجاعيد دون إضافات كيميائية غير ضرورية.', 
            en: 'Highly concentrated serum (contains only 2 highly concentrated actives: 6% Niacinamide & 1.5% HA). Provides an immediate firming and plumping effect without unnecessary chemical additives.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' }, application: { ar: 'توضع قطرتان على الوجه ومحيط العين.', en: 'Apply 2 drops to the face and eye contour.' } },
    precautions: { indications: { ar: 'فقدان الامتلاء السريع، خطوط الجفاف، والتجاعيد.', en: 'Rapid loss of plumpness, dehydration lines, and wrinkles.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [190] Hyaluron Activ B3 Eye Cream
deepProductsList.push({
    id: 'avene_hyaluron_activ_b3_eye', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'هيالورون أكتيف B3 كريم العين', en: 'Hyaluron Activ B3 Triple Correction Eye Cream' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'تصحيح ثلاثي الأبعاد للعين. يدمج النياسيناميد، الهيالورونيك، الديكستران سلفات (للتورم)، ومستخلص هاريتيكا لملء التجاعيد، وتقليل الهالات والانتفاخات.', 
            en: '3D eye correction. Merges Niacinamide, HA, Dextran Sulfate (for puffiness), and Haritaki extract to plump wrinkles, and reduce dark circles and bags.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' } },
    precautions: { indications: { ar: 'تجاعيد محيط العين، الهالات، والانتفاخات.', en: 'Eye contour wrinkles, dark circles, and puffiness.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [191] Vitamin Activ CG Serum
deepProductsList.push({
    id: 'avene_vitamin_activ_cg_serum', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'فيتامين أكتيف CG سيروم (للنضارة)', en: 'Vitamin Activ CG Radiance Corrector Serum' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { 
            ar: 'سيروم التفتيح ومكافحة الأكسدة. يستخدم <span class="glossary-term" onclick="openGlossary(\'vitamin_cg\')">فيتامين CG</span> بنسبة 1.8% (يعادل 20% من فيتامين سي العادي)، مع النياسيناميد 3% والباكوشيول (بديل الريتينول الطبيعي) لتوحيد اللون وتحفيز الكولاجين.', 
            en: 'Brightening and antioxidant serum. Uses <span class="glossary-term" onclick="openGlossary(\'vitamin_cg\')">Vitamin CG</span> at 1.8% (equivalent to 20% pure Vit C), with 3% Niacinamide and Bakuchiol (natural Retinol alternative) to even tone and boost collagen.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرة أو مرتين يومياً.', en: 'Once or twice daily.' } },
    precautions: { indications: { ar: 'البقع الداكنة، البهتان الشديد، والخطوط الدقيقة.', en: 'Dark spots, severe dullness, and fine lines.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [192] Vitamin Activ CG Radiance Intensive Cream
deepProductsList.push({
    id: 'avene_vitamin_activ_cg_cream', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'فيتامين أكتيف CG كريم الإشراق المكثف', en: 'Vitamin Activ CG Radiance Intensive Cream' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'كريم نهار/ليل مكمل للسيروم. يحول فيتامين CG ببطء داخل الجلد للحفاظ على حاجز مضاد للأكسدة طوال اليوم، ويرطب بقوة لإعادة الضوء للبشرة المتعبة.', 
            en: 'Day/night cream complementing the serum. Slowly converts Vitamin CG within the skin to maintain an antioxidant barrier all day, and strongly hydrates to bring light back to tired skin.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' } },
    precautions: { indications: { ar: 'البشرة الفاقدة للحيوية وعدم تجانس اللون.', en: 'Devitalized skin and uneven tone.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [193] A-Oxitive Serum
deepProductsList.push({
    id: 'avene_a_oxitive_serum', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'أوكسيتيف سيروم (مضاد الأكسدة)', en: 'A-Oxitive Antioxidant Defense Serum' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'درع وقائي للجلد. يعتمد على مركب (Pro-Vitamin C & E) المستقر ليحيد الجذور الحرة المسببة لشيخوخة الجلد، مدعوماً بـ GP4G كمصدر للطاقة الخلوية.', 
            en: 'A protective skin shield. Relies on stable (Pro-Vitamin C & E) complex to neutralize free radicals causing skin aging, backed by GP4G as a cellular energy source.' 
        }
    },
    clinical_usage: { frequency: { ar: 'صباحاً و/أو مساءً.', en: 'AM and/or PM.' } },
    precautions: { indications: { ar: 'الوقاية من الشيخوخة الأولى، الإجهاد التأكسدي، والتلوث.', en: 'First aging prevention, oxidative stress, and pollution.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [194] A-Oxitive Day Cream
deepProductsList.push({
    id: 'avene_a_oxitive_day', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'أوكسيتيف كريم النهار المائي', en: 'A-Oxitive Day Smoothing Water-Cream' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'كريم مائي خفيف جداً يغلف البشرة بحماية مضادة للتلوث ومضادة للأكسدة، مدعم بلؤلؤ دقيق لتمويه العيوب وإعطاء لمعة صحية (Glow).', 
            en: 'Very light water-cream enveloping the skin in anti-pollution and antioxidant protection, boosted with micro-pearls to blur flaws and give a healthy glow.' 
        }
    },
    clinical_usage: { frequency: { ar: 'صباحاً.', en: 'AM.' } },
    precautions: { indications: { ar: 'حماية نهارية للخطوط الأولى والبهتان.', en: 'Daytime protection for first lines and dullness.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [195] A-Oxitive Night Cream
deepProductsList.push({
    id: 'avene_a_oxitive_night', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'أوكسيتيف كريم التقشير الليلي', en: 'A-Oxitive Night Peeling Cream' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { 
            ar: 'يحتوي على <span class="glossary-term" onclick="openGlossary(\'retinaldehyde\')">الريتينال</span> وبروفيتامين E لعمل تقشير دقيق وتجديد كولاجين مكثف ليلاً دون تهيج، ليمنح تأثير مساوٍ لـ 3 جلسات تقشير كيميائي بعد 8 أسابيع.', 
            en: 'Contains <span class="glossary-term" onclick="openGlossary(\'retinaldehyde\')">Retinal</span> and Pro-Vitamin E to perform micro-peeling and intense collagen renewal at night without irritation, giving an effect equivalent to 3 chemical peels after 8 weeks.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مساءً.', en: 'PM.' } },
    precautions: { indications: { ar: 'الخطوط الدقيقة، النسيج غير المتساوي، والوقاية من التجاعيد.', en: 'Fine lines, uneven texture, and wrinkle prevention.' }, pregnancy_safe: false, sun_sensitivity: true }
});

// [196] A-Oxitive Eye Cream
deepProductsList.push({
    id: 'avene_a_oxitive_eye', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'أوكسيتيف كريم العين المنعم', en: 'A-Oxitive Smoothing Eye Contour Cream' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'يستخدم تركيزاً لطيفاً من <span class="glossary-term" onclick="openGlossary(\'retinaldehyde\')">الريتينال</span> مع مياه أفين الحرارية لتنعيم خطوط الضحك حول العين بأمان، وزيادة إشراقة المنطقة المظلمة.', 
            en: 'Uses a gentle concentration of <span class="glossary-term" onclick="openGlossary(\'retinaldehyde\')">Retinal</span> with Avene Thermal Water to safely smooth laugh lines around eyes, and increase the radiance of the dark area.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مساءً.', en: 'PM.' } },
    precautions: { indications: { ar: 'الخطوط الأولى حول العين والبهتان.', en: 'First lines around the eye and dullness.' }, pregnancy_safe: false, sun_sensitivity: true }
});

// [197] Physiolift Day Cream
deepProductsList.push({
    id: 'avene_physiolift_day', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'فيزيوليفت كريم النهار المنعم', en: 'Physiolift Smoothing Day Cream' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'يعتمد على الـ (Ascofilline) لإعادة شحن الكولاجين، والهيالورونيك أحادي القسيمات (Mono-oligomers) لملء التجاعيد الملحوظة بقوة.', 
            en: 'Relies on (Ascofilline) to recharge collagen, and Hyaluronic Mono-oligomers to strongly plump visible wrinkles.' 
        }
    },
    clinical_usage: { frequency: { ar: 'صباحاً.', en: 'AM.' } },
    precautions: { indications: { ar: 'التجاعيد الظاهرة والعميقة، فقدان الشد للبشرة الجافة.', en: 'Visible/deep wrinkles, loss of firmness for dry skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [198] Physiolift Night Balm
deepProductsList.push({
    id: 'avene_physiolift_night', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'فيزيوليفت بلسم الليل المجدد', en: 'Physiolift Smoothing Regenerating Night Balm' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { 
            ar: 'يدمج <span class="glossary-term" onclick="openGlossary(\'retinaldehyde\')">الريتينال</span> مع Ascofilline والهيالورونيك لشد الجلد المترهل وإزالة التجاعيد العميقة، مع الهسبريدين لتخفيف انتفاخات الوجه الليلي.', 
            en: 'Merges <span class="glossary-term" onclick="openGlossary(\'retinaldehyde\')">Retinal</span> with Ascofilline and HA to firm sagging skin and remove deep wrinkles, with Hesperidin to reduce nocturnal facial puffiness.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مساءً.', en: 'PM.' } },
    precautions: { indications: { ar: 'التجاعيد العميقة والترهل.', en: 'Deep wrinkles and sagging.' }, pregnancy_safe: false, sun_sensitivity: true }
});

// [199] Physiolift Eye Contour
deepProductsList.push({
    id: 'avene_physiolift_eye', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'فيزيوليفت كريم محيط العين', en: 'Physiolift Eye Contour Cream' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'يملأ التجاعيد العنيدة حول العين، يرفع الجفون قليلاً، ويستخدم ديكستران سلفات لتصريف الانتفاخات القوية التي تأتي مع التقدم في العمر.', 
            en: 'Plumps stubborn eye contour wrinkles, slightly lifts eyelids, and uses Dextran Sulfate to drain severe puffiness associated with aging.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مساءً.', en: 'PM.' } },
    precautions: { indications: { ar: 'تجاعيد العين العميقة، الجيوب (الانتفاخات) المستمرة.', en: 'Deep eye wrinkles, persistent bags (puffiness).' }, pregnancy_safe: false, sun_sensitivity: false }
});

// [200] Physiolift Wrinkle Filler
deepProductsList.push({
    id: 'avene_physiolift_filler', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'فيزيوليفت فيلر (حاقن التجاعيد الموضعي)', en: 'Physiolift Wrinkle Filler' }, image: "", potency: 3, 
    pharmacology: {
        mechanism: { 
            ar: 'علاج موضعي مركز جداً لخطوط التعبير العميقة (كخطوط الابتسامة والجبهة). يعمل كـ "حاقن هيالورونيك" بفضل التركيز العالي للمواد الفعالة في قلم دقيق التوزيع.', 
            en: 'A highly concentrated spot treatment for deep expression lines (like smile and forehead lines). Acts as an "HA injector" thanks to high active concentrations in a precision applicator pen.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مساءً.', en: 'PM.' }, application: { ar: 'يطبق مباشرة داخل التجعد الدقيق ويُدلك.', en: 'Apply directly inside the deep wrinkle and massage.' } },
    precautions: { indications: { ar: 'التجاعيد التعبيرية العميقة جداً.', en: 'Very deep expression lines.' }, pregnancy_safe: false, sun_sensitivity: false }
});

// [201] DermAbsolu Day Cream
deepProductsList.push({
    id: 'avene_dermabsolu_day', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'ديرمأبسولو كريم النهار المجدد للكثافة', en: 'DermAbsolu Day Redensifying Cream' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'يستهدف الترهل في سن اليأس (Menopause). يحتوي على بولي فينول الفانيليا لدعم حمض الهيالورونيك، وسيتينول (Sytenol) لإعادة هيكلة الخلايا، وزيت الجوجوبا لتغذية البشرة المترققة.', 
            en: 'Targets menopausal sagging. Contains Vanilla Polyphenols to support HA, Sytenol to restructure cells, and Jojoba oil to nourish thinning skin.' 
        }
    },
    clinical_usage: { frequency: { ar: 'صباحاً.', en: 'AM.' } },
    precautions: { indications: { ar: 'فقدان الكثافة الشديد، ترهل الجلد في السن المتقدم (50+).', en: 'Severe density loss, advanced skin sagging (50+).' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [202] DermAbsolu Night Balm
deepProductsList.push({
    id: 'avene_dermabsolu_night', brandId: 'avene', familyId: 'anti_aging', brand: 'Avene',
    name: { ar: 'ديرمأبسولو بلسم الليل المريح', en: 'DermAbsolu Night Comforting Balm' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'بلسم ليلي غني يعمل على إعادة نحت ملامح الوجه وتغذية الجلد المتقدم في العمر بفضل السيتينول وزبدة الشيا، ليعطي مظهراً ممتلئاً ومريحاً في الصباح.', 
            en: 'A rich night balm that resculpts facial contours and nourishes aging skin thanks to Sytenol and Shea butter, providing a plumped, comfortable look in the morning.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مساءً.', en: 'PM.' } },
    precautions: { indications: { ar: 'البشرة الناضجة والمترهلة جداً.', en: 'Very mature and sagging skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});
// ==========================================
// 💊 البلوك السادس والثلاثين (Block 36): AVENE - Sun Care & Antirougeurs
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['triasorb'] = {
    title: { ar: 'فلتر تري-أزورب (TriAsorB™) ☀️', en: 'TriAsorB™ Filter ☀️' },
    desc: { 
        ar: 'أول فلتر شمسي عضوي حاصل على براءة اختراع من بيير فابر (Pierre Fabre). يمتص ويعكس الأشعة فوق البنفسجية (UVA/UVB) بالإضافة إلى (الضوء الأزرق عالي الطاقة HEV) المُنبعث من الشمس والشاشات والذي ثبت أنه المسبب الأكبر للكلف والتصبغات العميقة.', 
        en: 'The first organic sun filter patented by Pierre Fabre. Absorbs and reflects UVA/UVB rays as well as High-Energy Visible (HEV) Blue Light emitted from the sun and screens, which is proven to be a major cause of melasma and deep pigmentation.' 
    }
};

glossaryDict['ruscus_extract'] = {
    title: { ar: 'مستخلص الروسكوس (Ruscus) 🌿', en: 'Ruscus Extract 🌿' },
    desc: { 
        ar: 'مستخلص نباتي غني بمادة السابونين. يعمل كمقوي للأوعية الدموية (Venotonic)، حيث يحسن الدورة الدموية الدقيقة في الوجه ويقلص تمدد الشعيرات الدموية المسببة لاحمرار الجلد المزمن (الوردية).', 
        en: 'A botanical extract rich in Saponins. Acts as a Venotonic, improving facial microcirculation and shrinking dilated capillaries that cause chronic skin redness (Rosacea).' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [203] Intense Protect Fluid SPF 50+ (150ml)
deepProductsList.push({
    id: 'avene_intense_protect', brandId: 'avene', familyId: 'sun_care', brand: 'Avene',
    name: { ar: 'إنتينس بروتيكت فلويد SPF 50+ (لأقسى الظروف)', en: 'Intense Protect Fluid SPF 50+' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'أقوى حماية بيئية من أفين. يعتمد على فلتر <span class="glossary-term" onclick="openGlossary(\'triasorb\')">TriAsorB</span>. مصمم خصيصاً ليتحمل أقسى الظروف (المرتفعات العالية، الاستوائية، السباحة الممتدة). تركيبة خالية تماماً من الفلاتر القابلة للذوبان في الماء لحماية البيئة البحرية.', 
            en: 'Avene\'s strongest environmental protection. Relies on the <span class="glossary-term" onclick="openGlossary(\'triasorb\')">TriAsorB</span> filter. Specifically designed for extreme conditions (high altitudes, tropical, extended swimming). 100% free of water-soluble filters to protect the marine environment.' 
        },
        patient_benefit: { 
            ar: 'يوفر حماية قصوى وآمنة جداً للرضع (من عمر 6 أشهر)، الحوامل، ومرضى الأورام ومرضى الجراحات. مقاوم للماء والعرق بشكل استثنائي.', 
            en: 'Provides extreme and highly safe protection for infants (from 6 months), pregnant women, oncology, and post-surgery patients. Exceptionally water and sweat-resistant.' 
        },
        active_ingredients: [
            { name: 'TriAsorB™ + Pre-tocopheryl', concentration: { ar: 'SPF 50+', en: 'SPF 50+' }, role: { ar: 'حماية خلوية من الضوء الأزرق والأشعة.', en: 'Cellular protection from Blue Light and UV.' } }
        ]
    },
    clinical_usage: { frequency: { ar: 'عند التعرض للشمس.', en: 'Upon sun exposure.' }, application: { ar: 'للوجه والجسم. يمتص في 3 ثوانٍ.', en: 'For face and body. Absorbs in 3 seconds.' } },
    precautions: { indications: { ar: 'البشرة شديدة الضعف، الأطفال، والظروف البيئية القاسية.', en: 'Highly vulnerable skin, children, and extreme environmental conditions.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [204] Ultra Fluid Invisible / Tinted Perfector SPF 50
deepProductsList.push({
    id: 'avene_ultra_fluid', brandId: 'avene', familyId: 'sun_care', brand: 'Avene',
    name: { ar: 'ألترا فلويد SPF 50 (الخفي / الملون)', en: 'Ultra Fluid Invisible / Tinted Perfector SPF 50' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'الجيل الجديد من أفين (منافس الشاكا فلويد). قوام مائي خفيف كالهواء بفضل تكنولوجيا (Water-like). يحتوي على <span class="glossary-term" onclick="openGlossary(\'triasorb\')">TriAsorB</span> لحماية واسعة من الضوء الأزرق دون التسبب في حبوب أو لمعان.', 
            en: 'Avene\'s new generation (Shaka Fluid competitor). Air-light watery texture thanks to Water-like technology. Contains <span class="glossary-term" onclick="openGlossary(\'triasorb\')">TriAsorB</span> for broad Blue Light protection without causing breakouts or shine.' 
        }
    },
    clinical_usage: { frequency: { ar: 'يومياً صباحاً.', en: 'Daily AM.' }, application: { ar: 'يُرج جيداً قبل الاستخدام.', en: 'Shake well before use.' } },
    precautions: { indications: { ar: 'الاستخدام اليومي تحت المكياج للبشرة العادية والمختلطة.', en: 'Daily use under makeup for normal to combination skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [205] Sun Fluid SPF 50+ / Tinted Fluid
deepProductsList.push({
    id: 'avene_sun_fluid_50', brandId: 'avene', familyId: 'sun_care', brand: 'Avene',
    name: { ar: 'فلويد الحماية من الشمس SPF 50+ (العادي والملون)', en: 'Sun Fluid SPF 50+ / Tinted Fluid' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'سائل حماية كلاسيكي للبشرة المختلطة إلى الدهنية. يترك لمسة جافة غير لامعة (Dry Touch) ويحتوي على مياه أفين لتهدئة البشرة المتهيجة من الحرارة.', 
            en: 'Classic sun fluid for combination to oily skin. Leaves a dry, matte touch and contains Avene Water to soothe heat-irritated skin.' 
        }
    },
    clinical_usage: { frequency: { ar: 'قبل التعرض للشمس.', en: 'Before sun exposure.' } },
    precautions: { indications: { ar: 'البشرة العادية والمختلطة الحساسة.', en: 'Normal to combination sensitive skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [206] Sun Cream SPF 50+ / Tinted Cream
deepProductsList.push({
    id: 'avene_sun_cream_50', brandId: 'avene', familyId: 'sun_care', brand: 'Avene',
    name: { ar: 'كريم الحماية من الشمس SPF 50+ (العادي والملون)', en: 'Sun Cream SPF 50+ / Tinted Cream' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'النسخة الغنية بالترطيب من واقيات أفين (Cream). يغذي البشرة الجافة ويحميها من الشوارد الحرة والجفاف الناتج عن التعرض للشمس بفضل الجلسرين ومضادات الأكسدة.', 
            en: 'The moisturizing rich version of Avene sunscreens (Cream). Nourishes dry skin and protects it from free radicals and sun-induced dehydration thanks to Glycerin and antioxidants.' 
        }
    },
    clinical_usage: { frequency: { ar: 'قبل التعرض للشمس.', en: 'Before sun exposure.' } },
    precautions: { indications: { ar: 'البشرة الجافة إلى الجافة جداً.', en: 'Dry to very dry skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [207] Mineral Cream SPF 50+ (V. High Pro)
deepProductsList.push({
    id: 'avene_mineral_cream_50', brandId: 'avene', familyId: 'sun_care', brand: 'Avene',
    name: { ar: 'الكريم المعدني للحماية SPF 50+ (للحساسية المفرطة)', en: 'Sun Block Cream V High Pro SPF 50 Mineral' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'واقي فيزيائي 100%. خالٍ تماماً من الفلاتر الكيميائية (يعتمد على ثاني أكسيد التيتانيوم والزنك). يعكس الأشعة كالمرآة، مما يجعله الآمن والمناسب للبشرة التي تعاني من حساسية تجاه الفلاتر العضوية.', 
            en: '100% physical sunscreen. Completely free of chemical filters (relies on Titanium Dioxide and Zinc). Reflects rays like a mirror, making it safe and suitable for skin allergic to organic filters.' 
        }
    },
    clinical_usage: { frequency: { ar: 'قبل التعرض للشمس.', en: 'Before sun exposure.' }, application: { ar: 'يترك طبقة بيضاء خفيفة (طبيعة الفلاتر الفيزيائية).', en: 'Leaves a slight white cast (nature of physical filters).' } },
    precautions: { indications: { ar: 'البشرة غير المتسامحة (Intolerant)، بعد الليزر العنيف، والأطفال.', en: 'Intolerant skin, post-aggressive laser, and children.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [208] Sun Spray SPF 50+ / Children Spray
deepProductsList.push({
    id: 'avene_sun_spray_50', brandId: 'avene', familyId: 'sun_care', brand: 'Avene',
    name: { ar: 'بخاخ الحماية من الشمس SPF 50+ (وللأطفال)', en: 'Sun Spray SPF 50+ / Children Spray' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'حماية واسعة للجسم. بخاخ عملي يضمن توزيعاً متجانساً. تركيبة الأطفال خالية من العطور ومُختبرة لأعلى درجات الأمان ومقاومة الاحتكاك بالرمال.', 
            en: 'Broad body protection. Practical spray ensuring even distribution. The children\'s formula is fragrance-free and tested for maximum safety and sand-friction resistance.' 
        }
    },
    clinical_usage: { frequency: { ar: 'تجديد كل ساعتين.', en: 'Reapply every 2 hours.' } },
    precautions: { indications: { ar: 'حماية الجسم لجميع أفراد العائلة.', en: 'Body protection for the whole family.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [209] B-Protect Sunscreen 50+
deepProductsList.push({
    id: 'avene_b_protect', brandId: 'avene', familyId: 'sun_care', brand: 'Avene',
    name: { ar: 'بي-بروتيكت واقي الشمس المضيء SPF 50+', en: 'B-Protect Sunscreen 50+' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'عناية 3 في 1 (حماية شمس + حماية تلوث + إضاءة). يحتوي على كبسولات صبغية دقيقة (Micro-encapsulated pigments) تنفجر عند التدليك لتتكيف مع لون البشرة وتمنحها نضارة مشرقة.', 
            en: '3-in-1 care (Sun protection + Pollution shield + Illumination). Contains micro-encapsulated pigments that burst upon massage to adapt to skin tone and grant a radiant glow.' 
        }
    },
    clinical_usage: { frequency: { ar: 'صباحاً.', en: 'AM.' } },
    precautions: { indications: { ar: 'سكان المدن (التلوث)، والبشرة الباهتة.', en: 'City dwellers (pollution) and dull skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [210] Reflexe Solaire SPF 50+ (30ml)
deepProductsList.push({
    id: 'avene_reflexe_solaire', brandId: 'avene', familyId: 'sun_care', brand: 'Avene',
    name: { ar: 'ريفليكس سولير SPF 50+ (واقي الجيب)', en: 'Reflexe Solaire SPF 50+ 30ml' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'نفس تركيبة فلويد أفين الممتازة ولكن في عبوة مسطحة مريحة جداً للجيب (Pocket-size). مثالي للرياضيين، وحمله في الشنطة لتجديد الحماية بسهولة خلال اليوم.', 
            en: 'The same excellent Avene fluid formula but in a flat, pocket-size packaging. Ideal for athletes, and carrying in a bag for easy reapplication during the day.' 
        }
    },
    clinical_usage: { frequency: { ar: 'للتجديد السريع.', en: 'For quick reapplication.' } },
    precautions: { indications: { ar: 'الرياضة، السفر، والاستخدام العملي.', en: 'Sports, travel, and practical use.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [211] Antirougeurs Fort Relief Concentrate
deepProductsList.push({
    id: 'avene_antirougeurs_fort', brandId: 'avene', familyId: 'antirougeurs', brand: 'Avene',
    name: { ar: 'أنتيروجير فورت (علاج الاحمرار والوردية المركز)', en: 'Antirougeurs Fort Relief Concentrate Drops' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'علاج طوارئ مركز. يحتوي على نسبة عالية من <span class="glossary-term" onclick="openGlossary(\'ruscus_extract\')">مستخلص الروسكوس</span> لتقوية جدران الأوعية الدموية الهشة، مقترناً بمركب (Hesperidin) لتقليل توسع الشعيرات التي تظهر كعروق حمراء على الوجه.', 
            en: 'A concentrated SOS treatment. Contains a high percentage of <span class="glossary-term" onclick="openGlossary(\'ruscus_extract\')">Ruscus Extract</span> to strengthen fragile blood vessel walls, paired with Hesperidin to reduce capillary dilation that appears as red veins on the face.' 
        },
        patient_benefit: { 
            ar: 'يقلص الشعيرات الدموية الظاهرة، يهدئ نوبات التوهج (Flushing) والحرارة في الخدين والأنف، ويعالج الوردية الموضعية.', 
            en: 'Shrinks visible capillaries, soothes flushing and heat flare-ups on cheeks and nose, and treats localized rosacea.' 
        },
        active_ingredients: [
            { name: 'Ruscus Extract (High Conc.)', concentration: { ar: 'مكثف', en: 'Intense' }, role: { ar: 'قابض للأوعية الدموية الدقيقة.', en: 'Micro-vascular astringent.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        application: { ar: 'يوضع موضعياً على مناطق الاحمرار (الخدين وأطراف الأنف) قبل المرطب الأساسي.', en: 'Apply locally to redness areas (cheeks and nose tips) before core moisturizer.' }
    },
    precautions: { indications: { ar: 'الوردية (Rosacea)، الكوبيروز (Couperose)، والاحمرار الدائم.', en: 'Rosacea, Couperose, and permanent redness.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [212] Antirougeurs Day Emulsion / Cream SPF 30
deepProductsList.push({
    id: 'avene_antirougeurs_day', brandId: 'avene', familyId: 'antirougeurs', brand: 'Avene',
    name: { ar: 'أنتيروجير مستحلب/كريم النهار SPF 30', en: 'Antirougeurs Day Emulsion / Cream SPF 30' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'مرطب وقائي يدمج <span class="glossary-term" onclick="openGlossary(\'ruscus_extract\')">الروسكوس</span> مع حماية شمسية SPF30 (لأن الشمس هي المهيج الأول للوردية). يحتوي على صبغة خضراء خفيفة جداً لتحييد اللون الأحمر بصرياً فور وضعه.', 
            en: 'A protective moisturizer merging <span class="glossary-term" onclick="openGlossary(\'ruscus_extract\')">Ruscus</span> with SPF30 protection (since sun is the #1 rosacea trigger). Contains a very slight green tint to visually neutralize red color upon application.' 
        }
    },
    clinical_usage: { frequency: { ar: 'صباحاً.', en: 'AM.' }, application: { ar: 'يوزع بلطف على الوجه لتجنب الفرك الذي يزيد الاحمرار.', en: 'Distribute gently over face to avoid rubbing which increases redness.' } },
    precautions: { indications: { ar: 'الحماية اليومية لمرضى الوردية والاحمرار العابر.', en: 'Daily protection for rosacea patients and transient redness.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [213] Antirougeurs Soothing Cleansing Lotion
deepProductsList.push({
    id: 'avene_antirougeurs_cleanser', brandId: 'avene', familyId: 'antirougeurs', brand: 'Avene',
    name: { ar: 'أنتيروجير لوشن منظف مهدئ', en: 'Antirougeurs Soothing Cleansing Lotion' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'لوشن حليبي منعش. ينظف ويزيل المكياج دون الحاجة للشطف بالماء (لتجنب تهيج الجير أو الكلور في ماء الصنبور). يترك ملمساً مبرداً (Cooling effect) يطفيء حرارة الوجه.', 
            en: 'Refreshing milky lotion. Cleanses and removes makeup without needing water rinse (to avoid tap water lime/chlorine irritation). Leaves a cooling effect that quenches facial heat.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' }, application: { ar: 'يُدلك بلطف بأطراف الأصابع ثم يُمسح برفق بقطنة ناعمة. لا يُشطف.', en: 'Massage gently with fingertips then wipe softly with a cotton pad. Do not rinse.' } },
    precautions: { indications: { ar: 'تنظيف البشرة الحمراء والملتهبة.', en: 'Cleansing red and inflamed skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});
// ==========================================
// 💊 البلوك السابع والثلاثين (Block 37): AVENE - Body, Cold Cream & Essentials (Final)
// ==========================================

// --- 1. إضافات القاموس الطبي (Glossary Additions) ---

glossaryDict['selectiose'] = {
    title: { ar: 'سيليكتيوز (Selectiose) 🧬', en: 'Selectiose 🧬' },
    desc: { 
        ar: 'مكون نشط حاصل على براءة اختراع من بيير فابر. يعمل على ترميم حاجز الجلد وتقليل فرط النشاط المناعي (Skin hyper-reactivity)، مما يجعله مثالياً في الحد من الجفاف الشديد والالتهاب المرتبط به.', 
        en: 'A patented active ingredient by Pierre Fabre. Works to restore the skin barrier and reduce skin hyper-reactivity, making it ideal for limiting severe dryness and associated inflammation.' 
    }
};

glossaryDict['cold_cream_tech'] = {
    title: { ar: 'تركيبة الكولد كريم (Cold Cream) ❄️', en: 'Traditional Cold Cream ❄️' },
    desc: { 
        ar: 'تركيبة صيدلانية كلاسيكية تعتمد على مزيج من شمع النحل (Beeswax)، الزيوت المعدنية، ومياه أفين الحرارية. توفر طبقة عازلة (Occlusive layer) تحمي الجلد من الصقيع واعتداءات الشتاء القاسية وترمم التشققات.', 
        en: 'A classic pharmaceutical formula based on a blend of Beeswax, mineral oils, and Avene Thermal Water. Provides an occlusive layer protecting the skin from frost and harsh winter aggressions while repairing chaps.' 
    }
};

// --- 2. المنتجات السريرية (Clinical Products) ---

// [214] TriXera Nutrition Nutri-Fluid Lotion
deepProductsList.push({
    id: 'avene_trixera_lotion', brandId: 'avene', familyId: 'body_essentials', brand: 'Avene',
    name: { ar: 'تريزيرا لوشن (مرطب الجسم العائلي السائل)', en: 'TriXera Nutrition Nutri-Fluid Lotion' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستخدم <span class="glossary-term" onclick="openGlossary(\'selectiose\')">السيليكتيوز</span> لترميم حاجز البشرة، مع ثلاثي دهني نباتي (Lipidic trio) لتعويض نقص السيراميد. قوام (Nutri-Fluid) يجمع بين غنى الكريم وخفة اللوشن.', 
            en: 'Uses <span class="glossary-term" onclick="openGlossary(\'selectiose\')">Selectiose</span> to restore the skin barrier, with a plant-based lipidic trio to compensate for ceramide deficiency. A (Nutri-Fluid) texture combining the richness of a cream with the lightness of a lotion.' 
        },
        patient_benefit: { 
            ar: 'ترطيب 48 ساعة للوجه والجسم. يمتص فوراً ليسمح بارتداء الملابس مباشرة دون ملمس دبق، مناسب للرضع والأطفال والبالغين.', 
            en: '48-hour hydration for face and body. Absorbs instantly allowing immediate dressing without stickiness, suitable for infants, children, and adults.' 
        },
        active_ingredients: [
            { name: 'Selectiose + Lipidic Trio', concentration: { ar: 'مغذي', en: 'Nourishing' }, role: { ar: 'إعادة بناء الغلاف المائي الدهني.', en: 'Rebuilding the hydrolipidic film.' } }
        ]
    },
    clinical_usage: { frequency: { ar: '1 إلى 2 مرة يومياً.', en: '1 to 2 times daily.' }, application: { ar: 'يوزع على بشرة نظيفة وجافة (وجه وجسم).', en: 'Distribute over clean, dry skin (face & body).' } },
    precautions: { indications: { ar: 'البشرة الجافة للعائلة.', en: 'Dry skin for the family.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [215] TriXera Nutrition Nutri-Fluid Balm
deepProductsList.push({
    id: 'avene_trixera_balm', brandId: 'avene', familyId: 'body_essentials', brand: 'Avene',
    name: { ar: 'تريزيرا بلسم (مرطب الجسم شديد الجفاف)', en: 'TriXera Nutrition Nutri-Fluid Balm' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'النسخة الأكثر كثافة (Balm) من تريزيرا. يحتوي على تركيز أعلى من الدهون النباتية ليغلف البشرة شديدة الجفاف والمتقشرة، ويمنع تبخر الماء منها بقوة أكبر.', 
            en: 'The denser (Balm) version of TriXera. Contains a higher concentration of plant lipids to envelop severely dry, flaking skin, preventing water evaporation more forcefully.' 
        }
    },
    clinical_usage: { frequency: { ar: '1-2 مرة يومياً.', en: '1-2 times daily.' } },
    precautions: { indications: { ar: 'البشرة شديدة الجفاف (Very Dry Skin).', en: 'Very Dry Skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [216] TriXera Nutrition Cleanser (Gel / Bar)
deepProductsList.push({
    id: 'avene_trixera_cleanser', brandId: 'avene', familyId: 'body_essentials', brand: 'Avene',
    name: { ar: 'تريزيرا غسول (جل / صابونة)', en: 'TriXera Nutrition Cleanser / Cleansing Bar' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'غسول يومي خالي من الصابون. ينظف بلطف شديد بفضل عوامل التنظيف الحيوية، ويحمي البشرة من التأثير المجفف للماء العسر (Hard water) أثناء الاستحمام.', 
            en: 'Soap-free daily wash. Cleanses very gently thanks to bio-cleansing agents, and protects the skin from the drying effect of hard water during bathing.' 
        }
    },
    clinical_usage: { frequency: { ar: 'يومياً للاستحمام.', en: 'Daily for bathing.' } },
    precautions: { indications: { ar: 'استحمام العائلة للبشرة الجافة.', en: 'Family bathing for dry skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [217] Cold Cream Hand Cream
deepProductsList.push({
    id: 'avene_cold_cream_hand', brandId: 'avene', familyId: 'body_essentials', brand: 'Avene',
    name: { ar: 'كولد كريم لليدين (مرمم التشققات)', en: 'Cold Cream Concentrated Hand Cream' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'يعتمد على <span class="glossary-term" onclick="openGlossary(\'cold_cream_tech\')">تركيبة الكولد كريم</span> مع السوكرالفات (Sucralfate). يرمم شقوق الأيدي العاملة والجافة جداً، ويصنع قفازاً واقياً (Protective Glove) مقاوماً للماء.', 
            en: 'Relies on the <span class="glossary-term" onclick="openGlossary(\'cold_cream_tech\')">Cold Cream formula</span> with Sucralfate. Repairs cracks in working and severely dry hands, creating a water-resistant protective glove.' 
        }
    },
    clinical_usage: { frequency: { ar: 'عند الحاجة (خاصة في الشتاء أو بعد غسيل الأيدي المتكرر).', en: 'As needed (especially in winter or after frequent hand washing).' } },
    precautions: { indications: { ar: 'تشققات اليدين، الأكزيما التلامسية، والطقس البارد.', en: 'Hand chaps, contact eczema, and cold weather.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [218] Cold Cream Lip Balm / Cream
deepProductsList.push({
    id: 'avene_cold_cream_lip', brandId: 'avene', familyId: 'body_essentials', brand: 'Avene',
    name: { ar: 'كولد كريم للشفاه (مرطب ومغذي عميق)', en: 'Cold Cream Lip Balm / Lip Cream' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'غني بشمع النحل وفيتامين E. يذوب على الشفاه ليعالج الجفاف الشديد والتقشر، مع توفير لمعة طبيعية وحماية مضادة للأكسدة.', 
            en: 'Rich in Beeswax and Vitamin E. Melts onto lips to treat severe dryness and flaking, providing a natural shine and antioxidant protection.' 
        }
    },
    clinical_usage: { frequency: { ar: 'عند الحاجة.', en: 'As needed.' } },
    precautions: { indications: { ar: 'الشفاه المتشققة والجافة.', en: 'Chapped and dry lips.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [219] Gentle Milk Cleanser & Gentle Toner
deepProductsList.push({
    id: 'avene_gentle_cleansing_duo', brandId: 'avene', familyId: 'body_essentials', brand: 'Avene',
    name: { ar: 'الحليب المنظف والتونر اللطيف (للبشرة الجافة)', en: 'Gentle Milk Cleanser & Gentle Toner Dry Skin' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'ثنائي التنظيف الكلاسيكي. الحليب يذيب المكياج بلطف بالزيوت المرطبة، والتونر (الخالي من الكحول) غني بسيليكات دقيقة لتهدئة البشرة وإغلاق المسام بلطف، ويُرج قبل الاستخدام لتفعيل السيليكات.', 
            en: 'The classic cleansing duo. The milk dissolves makeup gently with hydrating oils, and the alcohol-free toner is rich in fine silicates to soothe skin and gently close pores, shaken before use to activate silicates.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مساءً لإزالة المكياج.', en: 'PM for makeup removal.' }, application: { ar: 'يُستخدم الحليب أولاً، ثم يُمسح الوجه بالتونر لإزالة البقايا وتلطيف الجلد.', en: 'Use milk first, then wipe face with toner to remove residue and soothe skin.' } },
    precautions: { indications: { ar: 'تنظيف البشرة الجافة والحساسة بأمان.', en: 'Safely cleansing dry and sensitive skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [220] Mattifying Cleansing Foam
deepProductsList.push({
    id: 'avene_mattifying_foam', brandId: 'avene', familyId: 'cleanance', brand: 'Avene',
    name: { ar: 'رغوة التنظيف المطفئة للمعان', en: 'Mattifying Cleansing Foam' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'رغوة خفيفة (Foam) خالية من الصابون، تنظف الوجه والعين. تحتوي على حمض الجلوتاميك لتنظيم إفراز الزهم في منطقة T-Zone دون التسبب في جفاف الخدين.', 
            en: 'A light, soap-free foam that cleanses face and eyes. Contains Glutamic Acid to regulate sebum secretion in the T-Zone without drying out the cheeks.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' } },
    precautions: { indications: { ar: 'البشرة العادية إلى المختلطة اللامعة.', en: 'Normal to combination shiny skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [221] Gentle Exfoliating Gel / Purifying Scrub
deepProductsList.push({
    id: 'avene_gentle_scrub', brandId: 'avene', familyId: 'body_essentials', brand: 'Avene',
    name: { ar: 'جل التقشير اللطيف / السكرب المنقي', en: 'Gentle Exfoliating Gel / Purifying Scrub' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'يجمع بين التقشير الميكانيكي (بميكروبيدات السليلوز وزيت الجوجوبا) والتقشير الكيميائي الخفيف (النياسيناميد وساليسيلات الصوديوم) لإزالة الخلايا الميتة وتنقية البشرة الحساسة دون خدشها.', 
            en: 'Combines mechanical peeling (Cellulose micro-beads & Jojoba oil) with mild chemical peeling (Niacinamide & Sodium Salicylate) to remove dead cells and purify sensitive skin without scratching.' 
        }
    },
    clinical_usage: { frequency: { ar: '1-2 مرة أسبوعياً.', en: '1-2 times a week.' }, application: { ar: 'يُدلك بلطف على بشرة رطبة ثم يُشطف.', en: 'Massage gently onto damp skin then rinse.' } },
    precautions: { indications: { ar: 'البشرة الباهتة، وتجديد النضارة الأسبوعي.', en: 'Dull skin, and weekly radiance renewal.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [222] Soothing Moisture Mask / Eye Contour Cream
deepProductsList.push({
    id: 'avene_soothing_essentials', brandId: 'avene', familyId: 'body_essentials', brand: 'Avene',
    name: { ar: 'الماسك المهدئ / كريم العين الملطف', en: 'Soothing Moisture Mask / Eye Contour Cream' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'عناية أساسية للترطيب. الماسك يغمر الوجه بالماء الحراري لمعالجة حروق الشمس أو التهيج الفوري، وكريم العين يزيل الاحتقان والتعب بفضل البابونج (Chamomile) والماء الحراري.', 
            en: 'Basic hydration care. The mask floods the face with thermal water to treat sunburns or instant irritation, and the eye cream decongests and relieves fatigue thanks to Chamomile and thermal water.' 
        }
    },
    clinical_usage: { frequency: { ar: 'عند الحاجة.', en: 'As needed.' } },
    precautions: { indications: { ar: 'البشرة المتهيجة، والعيون المرهقة.', en: 'Irritated skin, and fatigued eyes.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [223] Moisturizing Melt-In Body Balm / Self Tanner
deepProductsList.push({
    id: 'avene_body_specialties', brandId: 'avene', familyId: 'body_essentials', brand: 'Avene',
    name: { ar: 'بلسم الجسم الذوباني / التان الذاتي المرطب', en: 'Moisturizing Melt In Body Balm / Self Tanner Silky Gel' }, image: "", potency: 1, 
    pharmacology: {
        mechanism: { 
            ar: 'بلسم الجسم يوفر ترطيباً مريحاً برائحة زهرية خفيفة وتأثير مهدئ. والتان الذاتي يمنح البشرة الحساسة لوناً برونزياً طبيعياً ومتجانساً دون التعرض لأضرار الشمس، مع ترطيب عميق.', 
            en: 'The body balm provides comforting hydration with a light floral scent and soothing effect. The Self Tanner grants sensitive skin a natural, even bronze tone without sun damage exposure, with deep hydration.' 
        }
    },
    clinical_usage: { frequency: { ar: 'حسب الرغبة والحاجة.', en: 'As desired and needed.' } },
    precautions: { indications: { ar: 'عناية الجسم التجميلية للبشرة الحساسة.', en: 'Cosmetic body care for sensitive skin.' }, pregnancy_safe: true, sun_sensitivity: false }
});

// [224] Skin Recovery Cream (Classic)
deepProductsList.push({
    id: 'avene_skin_recovery', brandId: 'avene', familyId: 'tolerance', brand: 'Avene',
    name: { ar: 'سكين ريكفري كريم (الكلاسيكي للإصلاح)', en: 'Skin Recovery Cream' }, image: "", potency: 2, 
    pharmacology: {
        mechanism: { 
            ar: 'الإصدار الكلاسيكي (الذي سبقه Tolerance). غني بمركب البارسيراين (Parcerine) لتهدئة تهيج الجلد السريع وتقوية الحاجز الواقي، مصمم بأقل عدد من المكونات لتجنب التحسس.', 
            en: 'The classic version (predecessor to Tolerance). Rich in Parcerine complex to quickly soothe skin irritation and fortify the protective barrier, formulated with minimal ingredients to avoid allergies.' 
        }
    },
    clinical_usage: { frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' } },
    precautions: { indications: { ar: 'التحسس الجلدي والتهيج العابر.', en: 'Skin allergies and transient irritation.' }, pregnancy_safe: true, sun_sensitivity: false }
});
// ==========================================
// 🛡️ رقعة الإصلاح الشاملة (Universal Repair Patch)
// ==========================================

/**
 * إصلاح شامل لضمان اكتمال جميع المنتجات بالبيانات المطلوبة
 */
function initializeProductsData() {
    deepProductsList.forEach((product, index) => {
        // التحقق من البيانات الأساسية
        if (!product.id || !product.brand) {
            console.warn(`Product at index ${index} is missing critical data`);
        }

        // إضافة طبقة تجميع إذا كانت مفقودة
        if (!product.clinical_usage) {
            product.clinical_usage = {};
        }

        if (!product.clinical_usage.layering) {
            product.clinical_usage.layering = {
                do_not_mix_with: { ar: ['-'], en: ['-'] },
                best_mixed_with: { ar: ['-'], en: ['-'] }
            };
        }

        // التأكد من وجود الحقول الأساسية للحذر والتحذيرات
        if (!product.precautions) {
            product.precautions = {
                indications: { ar: 'لم تُحدد', en: 'Not specified' },
                pregnancy_safe: true,
                sun_sensitivity: false
            };
        }
    });

    console.log(`✅ تم تهيئة ${deepProductsList.length} منتج بنجاح`);
}

// استدعاء دالة التهيئة عند الحاجة
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', initializeProductsData);
}

// دعم بيئة Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        brandsList,
        casesList,
        skinTypesList,
        deepProductsList,
        glossaryDict,
        openGlossary,
        initializeProductsData
    };
}
