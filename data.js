// ==========================================
// 🏥 SkinCare Pro - Elite Clinical Database
// 🏢 Brand: LA ROCHE-POSAY (Part 1)
// ⚠️ STRICT MODE: Validated Data Structure
// ==========================================

// 1. التأسيس الأساسي للمصفوفات
const brandsList = [];
const deepProductsList = [];
const glossaryDict = {};

// ==========================================
// 📚 القاموس الطبي التفاعلي لـ LA ROCHE-POSAY
// ==========================================

glossaryDict['microbiome_science'] = {
    title: { ar: 'علم الميكروبيوم', en: 'Microbiome Science' },
    desc: { 
        ar: 'توازن البكتيريا النافعة على سطح الجلد. الإخلال بهذا التوازن يؤدي إلى الالتهابات، حب الشباب، أو الإكزيما.', 
        en: 'The balance of beneficial bacteria on the skin surface. Disrupting this balance leads to inflammation, acne, or eczema.' 
    }
};

glossaryDict['mexoryl_400'] = {
    title: { ar: 'ميكسوريل 400', en: 'Mexoryl 400' },
    desc: { 
        ar: 'فلتر حماية حصري ومتطور جداً، وهو الوحيد القادر على صد الأشعة فوق البنفسجية الطويلة جداً (Ultra-Long UVA) التي تسبب التلف الخلوي العميق.', 
        en: 'An exclusive, highly advanced UV filter, the only one capable of blocking Ultra-Long UVA rays that cause deep cellular damage.' 
    }
};

glossaryDict['aqua_posae_filiformis'] = {
    title: { ar: 'أكوا بوزاي فيليفورميس', en: 'Aqua Posae Filiformis (APF)' },
    desc: { 
        ar: 'مكون نشط حصري يُزرع في مياه لاروش بوزيه الحرارية، يعمل على إعادة توازن الميكروبيوم وتقوية حاجز البشرة.', 
        en: 'An exclusive active ingredient grown in La Roche-Posay Thermal Spring Water, rebalances the microbiome and strengthens the skin barrier.' 
    }
};

// ==========================================
// 🏢 تعريف براند LA ROCHE-POSAY وعائلاته
// ==========================================

brandsList.push({
    id: 'laroche', 
    name: 'La Roche-Posay',
    families: [
        { id: 'effaclar', name: { ar: 'إيفاكلار (للبشرة الدهنية وحب الشباب)', en: 'Effaclar (Oily & Acne-Prone)' } },
        { id: 'lipikar', name: { ar: 'ليبيكار (للجفاف الشديد والإكزيما)', en: 'Lipikar (Severe Dryness & Eczema)' } },
        { id: 'anthelios', name: { ar: 'أنثيليوس (حماية فائقة من الشمس)', en: 'Anthelios (High Sun Protection)' } },
        { id: 'toleriane', name: { ar: 'توليريان (للبشرة شديدة الحساسية)', en: 'Toleriane (Ultra-Sensitive Skin)' } },
        { id: 'anti_aging', name: { ar: 'مضادات الشيخوخة والسيرومات', en: 'Anti-Aging & Serums' } },
        { id: 'physiological', name: { ar: 'المنظفات الفسيولوجية', en: 'Physiological Cleansers' } }
    ]
});

// ==========================================
// 🧪 المنتجات الطبية (الدفعة الأولى - 5 منتجات بعمق سريري)
// ==========================================

// [1] EFFACLAR H ISO-BIOME ULTRA SOOTHING HYDRATING CARE CREAM
deepProductsList.push({
    id: 'lrp_effaclar_h_isobiome', 
    brandId: 'laroche', 
    familyId: 'effaclar', 
    brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار H إيزو-بايوم (كريم مرطب وملطف فائق)', en: 'Effaclar H Iso-Biome Ultra Soothing Hydrating Care' }, 
    image: "", 
    potency: 2, 
    pharmacology: {
        ph_level: { ar: 'فسيولوجي (5.5)', en: 'Physiological (5.5)' },
        mechanism: { 
            ar: 'يعمل على ترميم الحاجز الجلدي واستعادة توازن <span class="interactive-term" onclick="openGlossary(\'microbiome_science\')">الميكروبيوم</span> الذي تعرض للتدمير بسبب علاجات حب الشباب الفموية (مثل الأيزوتريتينوين).', 
            en: 'Repairs the skin barrier and restores <span class="interactive-term" onclick="openGlossary(\'microbiome_science\')">Microbiome</span> balance severely compromised by oral acne treatments (e.g., Isotretinoin).' 
        },
        patient_benefit: { 
            ar: 'يوفر راحة فورية من الجفاف الشديد، التشقق، والاحمرار الناتج عن الأدوية المجففة دون التسبب في انسداد المسام.', 
            en: 'Provides instant relief from severe dryness, cracking, and erythema induced by drying medications without clogging pores.' 
        },
        active_ingredients: [
            { name: 'Aqua Posae Filiformis', concentration: { ar: 'معدل بكتيري', en: 'Microbiome Modulator' }, role: { ar: 'إعادة توازن البكتيريا النافعة.', en: 'Rebalancing beneficial bacteria.' } },
            { name: 'Niacinamide + Panthenol', concentration: { ar: 'عالي', en: 'High' }, role: { ar: 'ترميم الحاجز وتقليل الالتهاب.', en: 'Barrier repair and inflammation reduction.' } },
            { name: 'Squalane', concentration: { ar: 'مرطب دهني', en: 'Lipid Replenisher' }, role: { ar: 'تعويض نقص الدهون بالبشرة.', en: 'Compensating for skin lipid deficiency.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'خطوة الترطيب الأساسية (التعويضية).', en: 'Core compensating hydration step.' },
        routine_step_number: 3,
        usage_duration: { ar: 'طوال فترة العلاج الدوائي لحب الشباب.', en: 'Throughout the duration of medical acne treatment.' },
        application: { ar: 'يوضع بلطف على بشرة نظيفة وجافة.', en: 'Apply gently to clean, dry skin.' },
        layering: { 
            do_not_mix_with: { ar: ['المقشرات القوية (AHA/BHA) أثناء فترة العلاج.', 'الغسولات الرغوية القاسية.'], en: ['Strong exfoliants (AHA/BHA) during treatment.', 'Harsh foaming cleansers.'] }, 
            best_mixed_with: { ar: ['Effaclar H Cleansing Cream.'], en: ['Effaclar H Cleansing Cream.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية المعرضة لحب الشباب والتي أضعفتها العلاجات المجففة.', en: 'Acne-prone oily skin weakened by drying treatments.' },
        pregnancy_safe: true, 
        sun_sensitivity: false, 
        notes: { ar: 'غير زؤاني (لا يسد المسام).', en: 'Non-comedogenic.' }
    }
});

// [2] LIPIKAR SYNDET AP+ CREAM WASH (Covers both 200ml & 400ml refill)
deepProductsList.push({
    id: 'lrp_lipikar_syndet_ap', 
    brandId: 'laroche', 
    familyId: 'lipikar', 
    brand: 'La Roche-Posay',
    name: { ar: 'ليبيكار سينديت AP+ (كريم غسول مرمم)', en: 'Lipikar Syndet AP+ Cream Wash' }, 
    image: "", 
    potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن (خالٍ من الصابون)', en: 'Balanced (Soap-Free)' },
        mechanism: { 
            ar: 'قاعدة غسيل لطيفة للغاية تعمل بتقنية <span class="interactive-term" onclick="openGlossary(\'aqua_posae_filiformis\')">Aqua Posae Filiformis</span> لتهدئة تهيج الجلد وتقليل الرغبة الشديدة في الحك أثناء الاستحمام.', 
            en: 'Ultra-gentle cleansing base utilizing <span class="interactive-term" onclick="openGlossary(\'aqua_posae_filiformis\')">Aqua Posae Filiformis</span> to soothe skin irritation and reduce severe scratching urge during bathing.' 
        },
        patient_benefit: { 
            ar: 'ينظف دون تجريد الجلد من زيوته الطبيعية، ويعيد بناء الحاجز المائي الدهني منذ الاستحمام الأول.', 
            en: 'Cleanses without stripping natural oils, rebuilding the hydrolipidic barrier from the first shower.' 
        },
        active_ingredients: [
            { name: 'Shea Butter', concentration: { ar: '20% (تعويض دهني)', en: '20% (Lipid-Replenishing)' }, role: { ar: 'تغذية الجلد وتكوين طبقة عازلة.', en: 'Nourishing skin and forming a protective film.' } },
            { name: 'Niacinamide', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'مضاد للحكة والالتهاب.', en: 'Anti-pruritic and anti-inflammatory.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً أثناء الاستحمام.', en: 'Daily during bathing.' },
        step_in_routine: { ar: 'الخطوة 1: التنظيف الطبي.', en: 'Step 1: Medical Cleansing.' },
        routine_step_number: 1,
        usage_duration: { ar: 'آمن للاستخدام المزمن والدائم.', en: 'Safe for chronic and permanent use.' },
        application: { ar: 'توضع كمية صغيرة على راحة اليد وتدلك على بشرة مبللة، ثم تشطف برفق.', en: 'Apply a small amount to palm, massage onto wet skin, then rinse gently.' },
        layering: { 
            do_not_mix_with: { ar: ['ليفة الاستحمام الخشنة (تزيد الإكزيما).', 'الماء شديد السخونة.'], en: ['Harsh bath loofahs (worsens eczema).', 'Extremely hot water.'] }, 
            best_mixed_with: { ar: ['Lipikar Baume AP+M (فوراً بعد التجفيف).'], en: ['Lipikar Baume AP+M (immediately after drying).'] } 
        }
    },
    precautions: {
        indications: { ar: 'الجفاف الشديد، الإكزيما التأتبية، الحكة، قشرة الرأس للرضع.', en: 'Severe dryness, atopic eczema, pruritus, cradle cap in infants.' },
        pregnancy_safe: true, 
        sun_sensitivity: false, 
        notes: { ar: 'آمن لحديثي الولادة (Pediatric Safe).', en: 'Safe for newborns (Pediatric Safe).' }
    }
});

// [3] ANTHELIOS AGE CORRECT PHOTOCORRECTION DAILY LIGHT CREAM SPF 50
deepProductsList.push({
    id: 'lrp_anthelios_age_correct_light', 
    brandId: 'laroche', 
    familyId: 'anthelios', 
    brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس إيدج كوريكت (كريم يومي لتصحيح التجاعيد SPF 50)', en: 'Anthelios Age Correct Photocorrection Daily Light Cream SPF 50' }, 
    image: "", 
    potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يوفر حماية واسعة الطيف مع تقنية (CELLOX-B3 TECH) للحد من تلف الخلايا الناتج عن التلوث والأشعة، ويصحح علامات الشيخوخة بجزيئات نشطة جلدياً.', 
            en: 'Provides broad-spectrum protection with (CELLOX-B3 TECH) to limit cellular damage from pollution and UV, correcting aging signs with dermatological actives.' 
        },
        patient_benefit: { 
            ar: 'يقلل التجاعيد بنسبة 15% والبقع الداكنة بنسبة 26% خلال 4 أسابيع مع حماية يومية فائقة.', 
            en: 'Reduces wrinkles by 15% and dark spots by 26% within 4 weeks alongside ultra daily protection.' 
        },
        active_ingredients: [
            { name: 'Fragmented Hyaluronic Acid', concentration: { ar: 'مجزأ للعمق', en: 'Fragmented for depth' }, role: { ar: 'ملء التجاعيد الدقيقة وترطيب عميق.', en: 'Plumping fine lines and deep hydration.' } },
            { name: 'PHE-Resorcinol + LHA', concentration: { ar: 'نشط', en: 'Active' }, role: { ar: 'تقشير دقيق وتفتيح البقع الداكنة.', en: 'Micro-exfoliation and brightening dark spots.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'كل صباح (كبديل للمرطب والواقي).', en: 'Every morning (as moisturizer and SPF alternative).' },
        step_in_routine: { ar: 'الخطوة الأخيرة نهاراً.', en: 'Last AM step.' },
        routine_step_number: 4,
        usage_duration: { ar: 'يومياً ومستمر.', en: 'Daily and continuous.' },
        application: { ar: 'يوزع بالتساوي على كامل الوجه والرقبة قبل التعرض للشمس.', en: 'Apply evenly to whole face and neck before sun exposure.' },
        layering: { 
            do_not_mix_with: { ar: ['الريتينول النهاري (ممنوع).'], en: ['Daytime Retinol (Prohibited).'] }, 
            best_mixed_with: { ar: ['Vitamin C10 Serum (تحته).', 'Retinol B3 Serum (مساءً فقط).'], en: ['Vitamin C10 Serum (underneath).', 'Retinol B3 Serum (PM only).'] } 
        }
    },
    precautions: {
        indications: { ar: 'التجاعيد، فقدان المرونة، البقع الداكنة الناجمة عن الشمس.', en: 'Wrinkles, loss of elasticity, sun-induced dark spots.' },
        pregnancy_safe: true, 
        sun_sensitivity: false, 
        notes: { ar: 'قوام خفيف غير دهني يمتص بسرعة.', en: 'Lightweight, non-greasy texture absorbs quickly.' }
    }
});

// [4] ANTHELIOS AGE CORRECT PHOTOCORRECTION GEL-CREAM SPF 50 TINTED
deepProductsList.push({
    id: 'lrp_anthelios_age_correct_tinted', 
    brandId: 'laroche', 
    familyId: 'anthelios', 
    brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس إيدج كوريكت الملون (جل-كريم لتصحيح التجاعيد SPF 50)', en: 'Anthelios Age Correct Photocorrection Tinted Gel-Cream SPF 50' }, 
    image: "", 
    potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'نفس آلية الإصدار الشفاف مع إضافة أكاسيد الحديد المعدنية لصد الضوء المرئي (Blue Light) وتوحيد لون البشرة فوراً.', 
            en: 'Same mechanism as the invisible version, with added mineral Iron Oxides to block visible Blue Light and instantly even skin tone.' 
        },
        patient_benefit: { 
            ar: 'حماية وتصحيح للتجاعيد مع تغطية تجميلية خفيفة (Tinted) تغني عن كريم الأساس اليومي.', 
            en: 'Protection and wrinkle correction with light cosmetic coverage (Tinted), replacing daily foundation.' 
        },
        active_ingredients: [
            { name: 'Mineral Iron Oxides', concentration: { ar: 'أصباغ معدنية', en: 'Mineral Pigments' }, role: { ar: 'حماية من الضوء الأزرق وتوحيد اللون.', en: 'Blue light protection and tone unifying.' } },
            { name: 'Hyaluronic Acid + Niacinamide', concentration: { ar: 'مرمم', en: 'Repairing' }, role: { ar: 'مكافحة الشيخوخة.', en: 'Anti-aging.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'كل صباح.', en: 'Every morning.' },
        step_in_routine: { ar: 'واقي شمس + تغطية تجميلية.', en: 'SPF + Cosmetic coverage.' },
        routine_step_number: 4,
        usage_duration: { ar: 'يومياً.', en: 'Daily.' },
        application: { ar: 'يوزع بالتربيت اللطيف لتجنب تكتل اللون.', en: 'Apply with gentle patting to avoid pigment pilling.' },
        layering: { 
            do_not_mix_with: { ar: ['كريمات الأساس الكثيفة (لتجنب التكتل واللمعان).'], en: ['Heavy foundations (to avoid pilling and shine).'] }, 
            best_mixed_with: { ar: ['سيروم هيالو B5.'], en: ['Hyalu B5 Serum.'] } 
        }
    },
    precautions: {
        indications: { ar: 'علامات تقدم السن، البشرة غير موحدة اللون.', en: 'Signs of aging, uneven skin tone.' },
        pregnancy_safe: true, 
        sun_sensitivity: false, 
        notes: { ar: 'مناسب لدرجات البشرة الحنطية والقمحية.', en: 'Suitable for medium and olive skin tones.' }
    }
});

// [5] ANTHELIOS UVMUNE 400 SPF 50+ OIL CONTROL GEL-CREAM TINTED
deepProductsList.push({
    id: 'lrp_anthelios_uvmune_oil_control_tinted', 
    brandId: 'laroche', 
    familyId: 'anthelios', 
    brand: 'La Roche-Posay',
    name: { ar: 'أنثيليوس يو في ميون 400 (جل-كريم ملون للتحكم في اللمعان SPF 50+)', en: 'Anthelios UVMune 400 Oil Control Tinted Gel-Cream SPF 50+' }, 
    image: "", 
    potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يوفر حماية قصوى باستخدام فلتر <span class="interactive-term" onclick="openGlossary(\'mexoryl_400\')">ميكسوريل 400</span>، مدعوماً بتقنية Airlicium لامتصاص الدهون الزائدة وتقليل اللمعان، مع صبغات معدنية للمسة نهائية غير لامعة.', 
            en: 'Provides extreme protection using the <span class="interactive-term" onclick="openGlossary(\'mexoryl_400\')">Mexoryl 400</span> filter, powered by Airlicium tech to absorb excess sebum, with mineral pigments for a matte finish.' 
        },
        patient_benefit: { 
            ar: 'يحمي من أطول وأخطر أشعة UVA، ويتحكم في اللمعان لمدة 12 ساعة مع توحيد لون البشرة بمظهر جاف (Dry Touch).', 
            en: 'Protects against the longest, most insidious UVA rays, controls shine for 12 hours, and evens skin tone with a Dry Touch finish.' 
        },
        active_ingredients: [
            { name: 'Mexoryl 400', concentration: { ar: 'فلتر حصري', en: 'Exclusive Filter' }, role: { ar: 'صد الأشعة فوق البنفسجية الطويلة جداً (380-400nm).', en: 'Blocking Ultra-Long UVA rays (380-400nm).' } },
            { name: 'Airlicium™ Micro-particles', concentration: { ar: 'ممتص للدهون', en: 'Sebum Absorbing' }, role: { ar: 'امتصاص العرق والدهون بفعالية هائلة.', en: 'Massively absorbing sweat and sebum.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'قبل التعرض للشمس ويُجدد عند الحاجة.', en: 'Before sun exposure, reapply as needed.' },
        step_in_routine: { ar: 'الخطوة الأخيرة (الحماية + التحكم في اللمعان).', en: 'Last step (Protection + Oil Control).' },
        routine_step_number: 4,
        usage_duration: { ar: 'طوال فترة النهار.', en: 'Throughout the day.' },
        application: { ar: 'يوزع بسرعة وبشكل متساوٍ على الوجه لأن قوامه الجل يجف سريعاً.', en: 'Distribute quickly and evenly on the face as the gel texture dries fast.' },
        layering: { 
            do_not_mix_with: { ar: ['المرطبات الزيتية الكثيفة (تفسد مفعول الـ Airlicium).'], en: ['Heavy oily moisturizers (disrupts Airlicium effect).'] }, 
            best_mixed_with: { ar: ['Effaclar Purifying Foaming Gel (كغسول).'], en: ['Effaclar Purifying Foaming Gel (as cleanser).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية والمختلطة والمعرضة لحب الشباب.', en: 'Oily, combination, and acne-prone skin.' },
        pregnancy_safe: true, 
        sun_sensitivity: false, 
        notes: { ar: 'لا يترك أثراً دهنياً، مقاوم جداً للماء والعرق.', en: 'Leaves no oily residue, highly water and sweat resistant.' }
    }
});
