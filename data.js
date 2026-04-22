// ==========================================
// 🏥 SkinCare Pro - Elite Clinical Database
// ==========================================

// التأسيس الأساسي للمصفوفات
const brandsList = [];
const deepProductsList = [];
const glossaryDict = {};

// ==========================================
// 📚 1. القاموس الطبي (Pharmacological Glossary) - Bioderma
// ==========================================

glossaryDict['micellar_tech'] = {
    title: { ar: 'تقنية الميسيلار (Micellar Technology)', en: 'Micellar Technology' },
    desc: { 
        ar: 'جزيئات منظفة مجهرية تعمل كالمغناطيس لتلتقط الشوائب والمكياج بلطف فائق دون الحاجة للفرك أو الإخلال بطبقة الجلد الطبيعية.', 
        en: 'Microscopic cleansing molecules that act like a magnet to capture impurities and makeup ultra-gently without rubbing or disrupting the natural skin film.' 
    }
};

glossaryDict['daf_patent'] = {
    title: { ar: 'براءة اختراع D.A.F', en: 'D.A.F.™ Patent' },
    desc: { 
        ar: 'مركب حصري متطور (Dermatological Advanced Formulation) يقلل من تفاعل الجلد وحساسيته، ويرفع عتبة تحمله للعوامل الخارجية.', 
        en: 'An exclusive complex (Dermatological Advanced Formulation) that decreases skin reactivity and increases its tolerance threshold against external factors.' 
    }
};

glossaryDict['cellular_bioprotection'] = {
    title: { ar: 'الحماية الحيوية الخلوية', en: 'Cellular Bioprotection™' },
    desc: { 
        ar: 'براءة اختراع تحمي الحمض النووي (DNA) للخلايا بنسبة 99.6%، وتعزز مناعة الجلد الطبيعية ضد أضرار أشعة الشمس والشيخوخة المبكرة.', 
        en: 'A patent that protects cellular DNA by 99.6% and boosts the skin\'s natural immunity against sun damage and premature aging.' 
    }
};

// ==========================================
// 🏢 2. البلوك الأول (Block 1): BIODERMA
// ==========================================

brandsList.push({
    id: 'bioderma', name: 'Bioderma',
    families: [
        { id: 'sensibio', name: { ar: 'سينسيبيو (للبشرة الحساسة)', en: 'Sensibio (Sensitive Skin)' } },
        { id: 'photoderm', name: { ar: 'فوتوديرم (للحماية من الشمس)', en: 'Photoderm (Sun Protection)' } },
        { id: 'atoderm', name: { ar: 'أتوديرم (للجفاف الشديد)', en: 'Atoderm (Very Dry Skin)' } }
    ]
});

// --- عائلة Sensibio ---

// [1] Sensibio H2O
deepProductsList.push({
    id: 'bio_sensibio_h2o', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو H2O ماء ميسيلار', en: 'Sensibio H2O Micellar Water' }, image: "placeholder.png", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (درجة حموضة فسيولوجية)', en: '5.5 (Physiological pH)' },
        mechanism: { 
            ar: 'تستخدم <strong class="glossary-term" onclick="openGlossary(\'micellar_tech\')">تقنية الميسيلار</strong> المعلقة في ماء عالي النقاء لتنظيف البشرة من 99% من المكياج والملوثات الثقيلة.', 
            en: 'Utilizes <strong class="glossary-term" onclick="openGlossary(\'micellar_tech\')">Micellar Technology</strong> suspended in highly purified water to cleanse 99% of makeup and heavy pollutants.' 
        },
        patient_benefit: { 
            ar: 'المنظف الطبي الأول عالمياً. يزيل المكياج بمسحة واحدة دون الحاجة للشطف، ويهدئ البشرة فوراً لتجنب الشعور بالشد.', 
            en: 'The #1 medical cleanser globally. Removes makeup in a single wipe without rinsing, instantly soothing the skin.' 
        },
        active_ingredients: [
            { name: 'PEG-6 Caprylic/Capric Glycerides', concentration: { ar: 'ميسيلار فعال', en: 'Active Micelles' }, role: { ar: 'التقاط الشوائب بلطف فائق.', en: 'Ultra-gentle capturing of impurities.' } },
            { name: 'Cucumber Extract', concentration: { ar: 'مستخلص نقي', en: 'Pure Extract' }, role: { ar: 'تهدئة الاحتقان.', en: 'Decongests and soothes.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف الجاف).', en: 'Step 1 (Dry Cleansing).' },
        application: { ar: 'يُبلل قطن نظيف، يُمسح الوجه والعينان بلطف. لا يتطلب الشطف بالماء.', en: 'Soak a cotton pad, gently wipe face and eyes. No water rinsing required.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف بقطن خشن.'], en: ['Harsh rubbing with rough cotton pads.'] }, 
            best_mixed_with: { ar: ['كريمات سينسيبيو المهدئة.'], en: ['Sensibio soothing creams.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة والمتهيجة.', en: 'Sensitive and irritated skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'خالي من العطور والكحول.', en: 'Fragrance and alcohol-free.' }
    }
});

// [2] Sensibio Defensive Rich Cream
deepProductsList.push({
    id: 'bio_sensibio_defensive_rich', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو ديفينسيف ريتش (كريم مهدئ غني)', en: 'Sensibio Defensive Rich Cream' }, image: "placeholder.png", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يستهدف أسباب الالتهاب البيئية بفضل الكارنوزين ومستخلص المريمية، مع تعويض نقص الطبقة الدهنية بتركيبة غنية ومدعمة بـ <strong class="glossary-term" onclick="openGlossary(\'daf_patent\')">براءة اختراع D.A.F</strong>.', 
            en: 'Targets environmental inflammation causes with Carnosine and Sage extract, compensating lipid deficiency with a rich formula supported by <strong class="glossary-term" onclick="openGlossary(\'daf_patent\')">D.A.F.™ Patent</strong>.' 
        },
        patient_benefit: { 
            ar: 'يقوي حاجز البشرة الحساسة والجافة جداً، يوقف الوخز، ويوفر ترطيباً عميقاً ومريحاً.', 
            en: 'Strengthens the barrier of very dry, sensitive skin, stops stinging, and provides deep, comforting hydration.' 
        },
        active_ingredients: [
            { name: 'Tetrapeptide-10', concentration: { ar: 'ببتيد فعال', en: 'Active Peptide' }, role: { ar: 'تقوية حاجز البشرة المادي.', en: 'Strengthening the physical skin barrier.' } },
            { name: 'Squalane & Glycerin', concentration: { ar: 'مرتفع', en: 'High' }, role: { ar: 'تغذية وحبس الرطوبة.', en: 'Nourishment and moisture locking.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'خطوة الترطيب الأساسية.', en: 'Core hydration step.' },
        application: { ar: 'على الوجه والرقبة بعد التنظيف.', en: 'On face and neck after cleansing.' },
        layering: { 
            do_not_mix_with: { ar: ['المقشرات الكيميائية القوية.'], en: ['Strong chemical exfoliants.'] }, 
            best_mixed_with: { ar: ['Sensibio H2O.'], en: ['Sensibio H2O.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة الجافة إلى شديدة الجفاف.', en: 'Dry to very dry sensitive skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'ملمس غني ولكن يمتص بسرعة.', en: 'Rich texture but absorbs quickly.' }
    }
});

// --- عائلة Photoderm ---

// [3] Photoderm Aquafluid SPF 50+
deepProductsList.push({
    id: 'bio_photoderm_aquafluid', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم أكوافلويد واقي شمس شفاف', en: 'Photoderm Aquafluid SPF 50+ Invisible' }, image: "placeholder.png", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يوفر حماية قصوى بفضل الفلاتر الكيميائية الآمنة وتقنية <strong class="glossary-term" onclick="openGlossary(\'cellular_bioprotection\')">الحماية الحيوية الخلوية</strong> لتعزيز مناعة الجلد ضد الأشعة فوق البنفسجية.', 
            en: 'Provides extreme protection via safe chemical filters and <strong class="glossary-term" onclick="openGlossary(\'cellular_bioprotection\')">Cellular Bioprotection™</strong> technology to boost skin immunity against UV rays.' 
        },
        patient_benefit: { 
            ar: 'قوام مائي خفيف جداً (Dry touch) يُمتص فوراً ولا يترك أثراً دهنياً أو علامات بيضاء.', 
            en: 'Ultra-light water-like texture (Dry touch) absorbing instantly with no oily finish or white marks.' 
        },
        active_ingredients: [
            { name: 'UVA/UVB Filters', concentration: { ar: 'SPF 50+', en: 'SPF 50+' }, role: { ar: 'درع حماية ضد حروق الشمس.', en: 'Protection shield against sunburn.' } },
            { name: 'Mattifying Powders', concentration: { ar: 'ثلاثي', en: 'Trio' }, role: { ar: 'التحكم في اللمعان.', en: 'Shine control.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'قبل التعرض للشمس ويُجدد كل ساعتين.', en: 'Before sun exposure and reapply every 2 hours.' },
        step_in_routine: { ar: 'الخطوة الأخيرة في روتين الصباح.', en: 'Last step in AM routine.' },
        application: { ar: 'يُرج جيداً ويُوزع بسخاء على الوجه والرقبة.', en: 'Shake well and apply generously to face and neck.' },
        layering: { 
            do_not_mix_with: { ar: ['الزيوت الثقيلة جداً قبله.'], en: ['Very heavy oils underneath.'] }, 
            best_mixed_with: { ar: ['أي سيروم نهاري للترطيب.'], en: ['Any daytime hydrating serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة العادية، المختلطة، والدهنية.', en: 'Normal, combination, and oily skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مقاوم للماء وخالي من العطور.', en: 'Water-resistant and fragrance-free.' }
    }
});

// [4] Photoderm M Gel-Cream SPF 50+
deepProductsList.push({
    id: 'bio_photoderm_m', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم M جل-كريم (لعلاج الكلف)', en: 'Photoderm M Gel-Cream SPF 50+ (Tinted)' }, image: "placeholder.png", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يحتوي على أعلى تركيز من أكاسيد الحديد لامتصاص الضوء الأزرق (المسبب الرئيسي للكلف)، ومادة الجلابريدين لتثبيط إنتاج الميلانين.', 
            en: 'Contains the highest concentration of iron oxides to absorb Blue Light (melasma trigger), and Glabridin to inhibit melanin production.' 
        },
        patient_benefit: { 
            ar: 'الواقي الأول عالمياً المصمم خصيصاً لمنع وتقليل "كلف الحمل". يوحد لون البشرة بتغطية ممتازة.', 
            en: 'The #1 global sunscreen specifically designed to prevent and reduce "Pregnancy Mask". Evens skin tone with excellent coverage.' 
        },
        active_ingredients: [
            { name: 'Iron Oxides', concentration: { ar: 'تركيز عالي', en: 'High Concentration' }, role: { ar: 'صد الضوء الأزرق المرئي.', en: 'Blocks High-Energy Visible Blue Light.' } },
            { name: 'Glabridin', concentration: { ar: 'مثبط نشط', en: 'Active Inhibitor' }, role: { ar: 'تفتيح البقع الداكنة.', en: 'Brightens dark spots.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً كل صباح.', en: 'Daily every morning.' },
        step_in_routine: { ar: 'واقي شمس وتغطية (بديل الفاونديشن).', en: 'SPF and coverage (Foundation alternative).' },
        application: { ar: 'يُوزع بالتساوي على كامل الوجه.', en: 'Distribute evenly over the entire face.' },
        layering: { 
            do_not_mix_with: { ar: ['كريمات أساس ثقيلة جداً (لتجنب التكتل).'], en: ['Very heavy foundations (to avoid pilling).'] }, 
            best_mixed_with: { ar: ['سيرومات التفتيح ليلاً.'], en: ['Nighttime brightening serums.'] } 
        }
    },
    precautions: {
        indications: { ar: 'كلف الحمل، فرط التصبغ، والبقع الداكنة.', en: 'Pregnancy mask, hyperpigmentation, and dark spots.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'موصى به بشدة أثناء الحمل والتقلبات الهرمونية.', en: 'Highly recommended during pregnancy and hormonal fluctuations.' }
    }
});

// [5] Photoderm MAX Fluid SPF 100
deepProductsList.push({
    id: 'bio_photoderm_max_100', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم ماكس فلويد SPF 100', en: 'Photoderm MAX Fluid SPF 100' }, image: "placeholder.png", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'أعلى تركيز ممكن من الفلاتر الواقية في مختبرات بيوديرما لضمان أقصى درجات الحماية ضد الأشعة فوق البنفسجية في الحالات السريرية الحرجة.', 
            en: 'The highest possible concentration of protective filters in Bioderma labs to ensure ultimate UV protection in critical clinical cases.' 
        },
        patient_benefit: { 
            ar: 'يحمي البشرة شديدة البياض أو التي خضعت لإجراءات تجميلية قاسية من التصبغ العميق والندبات.', 
            en: 'Protects extremely fair skin or skin subjected to harsh cosmetic procedures from deep pigmentation and scarring.' 
        },
        active_ingredients: [
            { name: 'Maximum UVA/UVB Filters', concentration: { ar: 'SPF 100', en: 'SPF 100' }, role: { ar: 'درع حماية مطلق.', en: 'Absolute shield.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'قبل التعرض للشمس.', en: 'Before sun exposure.' },
        step_in_routine: { ar: 'الخطوة الصباحية الأخيرة.', en: 'Last AM step.' },
        application: { ar: 'يُرج جيداً ويُوزع بكثافة.', en: 'Shake well and distribute generously.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['كريمات الترميم (بعد الليزر).'], en: ['Repair creams (post-laser).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الفاتحة جداً، حساسية الشمس الشديدة، وبعد جلسات الليزر.', en: 'Extremely fair skin, severe sun intolerance, and post-laser sessions.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'متوفر بنسخة شفافة وملونة.', en: 'Available in invisible and tinted versions.' }
    }
});

// --- عائلة Atoderm ---

// [6] Atoderm Cream Ultra
deepProductsList.push({
    id: 'bio_atoderm_cream_ultra', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم كريم ألترا (ترطيب عميق)', en: 'Atoderm Cream Ultra' }, image: "placeholder.png", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'مركب Skin Protect يحفز إنتاج حمض الهيالورونيك والسيراميد طبيعياً في الجلد، مع تعويض الليبيدات (أوميجا 3، 6، 9) لتقوية الحاجز الواقي.', 
            en: 'Skin Protect Complex stimulates natural HA and ceramide production, replenishing lipids (Omegas 3, 6, 9) to strengthen the barrier.' 
        },
        patient_benefit: { 
            ar: 'ترطيب فوري وعميق يدوم 24 ساعة، يجعل البشرة ناعمة ومرنة لجميع أفراد العائلة.', 
            en: 'Instant, deep 24-hour hydration, making skin soft and supple for the whole family.' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: { ar: 'معزز حاجز', en: 'Barrier Booster' }, role: { ar: 'تحفيز بناء السيراميدات.', en: 'Stimulates ceramide synthesis.' } },
            { name: 'Omegas 3, 6, 9', concentration: { ar: 'مغذي', en: 'Nourishing' }, role: { ar: 'تغذية عميقة ومنع تبخر الماء.', en: 'Deep nourishment and prevents water loss.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '1 إلى 2 مرة يومياً.', en: '1 to 2 times daily.' },
        step_in_routine: { ar: 'ترطيب الجسم والوجه.', en: 'Body and face hydration.' },
        application: { ar: 'يوضع على بشرة نظيفة وجافة.', en: 'Apply to clean, dry skin.' },
        layering: { 
            do_not_mix_with: { ar: ['-'], en: ['-'] }, 
            best_mixed_with: { ar: ['أي غسول لطيف خالٍ من الصابون.'], en: ['Any gentle soap-free cleanser.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة العادية إلى الجافة، العناية اليومية.', en: 'Normal to dry skin, daily care.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'سريع الامتصاص ومناسب لجميع الأعمار.', en: 'Fast-absorbing and suitable for all ages.' }
    }
});
