// ==========================================
// 🏥 SkinCare Pro - Elite Data Storage
// Block 1: BIODERMA (Sensibio, Photoderm, Atoderm)
// ==========================================

const brandsList = [];
const deepProductsList = [];
const glossaryDict = {};

// ==========================================
// 📚 القاموس الطبي التفاعلي (Glossary)
// ==========================================

glossaryDict['micellar_tech'] = {
    title: { ar: 'تقنية الميسيلار', en: 'Micellar Technology' },
    desc: { 
        ar: 'جزيئات تنظيف مجهرية تلتقط الأوساخ والمكياج مثل المغناطيس دون الإضرار بالحاجز الطبيعي للجلد.', 
        en: 'Microscopic cleansing particles that capture dirt and makeup like a magnet without damaging the skin barrier.' 
    }
};

glossaryDict['daf_patent'] = {
    title: { ar: 'براءة اختراع D.A.F', en: 'D.A.F.™ Patent' },
    desc: { 
        ar: 'مركب متطور يقلل من حساسية الجلد ويرفع من قدرته على تحمل العوامل الخارجية.', 
        en: 'Advanced complex that reduces skin sensitivity and boosts its tolerance against external factors.' 
    }
};

glossaryDict['blue_light_shield'] = {
    title: { ar: 'درع الضوء الأزرق', en: 'Blue Light Shield' },
    desc: { 
        ar: 'حماية مخصصة ضد الضوء المرئي عالي الطاقة الذي يسبب تصبغات الكلف العميقة.', 
        en: 'Specific protection against high-energy visible light that causes deep melasma pigmentation.' 
    }
};

// ==========================================
// 🏢 تعريف البراند والعائلات
// ==========================================

brandsList.push({
    id: 'bioderma', 
    name: 'Bioderma',
    families: [
        { id: 'sensibio', name: { ar: 'سينسيبيو (للبشرة الحساسة)', en: 'Sensibio (Sensitive Skin)' } },
        { id: 'photoderm', name: { ar: 'فوتوديرم (واقي الشمس)', en: 'Photoderm (Sun Protection)' } },
        { id: 'atoderm', name: { ar: 'أتوديرم (للجفاف الشديد)', en: 'Atoderm (Dry Skin)' } }
    ]
});

// ==========================================
// 🧪 المنتجات (Products)
// ==========================================

// [1] Sensibio H2O Micellar Water
deepProductsList.push({
    id: 'bio_sensibio_h2o', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو H2O ماء ميسيلار', en: 'Sensibio H2O Micellar Water' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (فسيولوجي)', en: '5.5 (Physiological)' },
        mechanism: { 
            ar: 'استخدام <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">تقنية الميسيلار</span> لتنقية البشرة من 99% من الملوثات.', 
            en: 'Using <span class="glossary-term" onclick="openGlossary(\'micellar_tech\')">Micellar Technology</span> to purify the skin from 99% of pollutants.' 
        },
        patient_benefit: { 
            ar: 'تنظيف فوري وتلطيف للبشرة دون الحاجة للشطف بالماء القاسي.', 
            en: 'Instant cleansing and soothing without the need for harsh tap water rinsing.' 
        },
        active_ingredients: [
            { name: 'PEG-6 Caprylic Glycerides', concentration: { ar: 'نقي', en: 'Pure' }, role: { ar: 'تنظيف ميسيلار.', en: 'Micellar cleansing.' } },
            { name: 'Cucumber Extract', concentration: { ar: 'مهدئ', en: 'Soothing' }, role: { ar: 'تقليل تهيج الجلد.', en: 'Reducing skin irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً.', en: 'Twice daily.' },
        step_in_routine: { ar: 'الخطوة الأولى (منظف جاف).', en: 'Step 1 (Dry Cleanser).' },
        routine_step_number: 1,
        usage_duration: { ar: 'استخدام يومي مستمر.', en: 'Continuous daily use.' },
        application: { ar: 'بواسطة قطنة طبية، يمسح الوجه والعين برفق.', en: 'Via medical cotton pad, wipe face and eyes gently.' },
        layering: { 
            do_not_mix_with: { ar: ['الفرك العنيف.'], en: ['Harsh rubbing.'] }, 
            best_mixed_with: { ar: ['Sensibio Defensive.'], en: ['Sensibio Defensive.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة، إزالة المكياج.', en: 'Sensitive skin, makeup removal.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'لا يحتاج لشطف.', en: 'No rinse needed.' }
    }
});

// [2] Sensibio Defensive Rich
deepProductsList.push({
    id: 'bio_sensibio_defensive_rich', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو ديفينسيف ريتش', en: 'Sensibio Defensive Rich' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'تقوية دفاعات البشرة الطبيعية ضد الالتهاب الناتج عن البيئة بتركيبة غنية بالدهون.', 
            en: 'Strengthening natural skin defenses against environmental inflammation with a lipid-rich formula.' 
        },
        patient_benefit: { 
            ar: 'ترطيب عميق يدوم 12 ساعة مع تهدئة فورية للوخز والحرارة.', 
            en: '12-hour deep hydration with instant relief for stinging and heat.' 
        },
        active_ingredients: [
            { name: 'Tetrapeptide-10', concentration: { ar: 'فعال', en: 'Active' }, role: { ar: 'تقوية حاجز الجلد.', en: 'Barrier strengthening.' } },
            { name: 'Red Sage Extract', concentration: { ar: 'مركز', en: 'Concentrated' }, role: { ar: 'مضاد للالتهاب.', en: 'Anti-inflammatory.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'الترطيب.', en: 'Moisturization.' },
        routine_step_number: 3,
        usage_duration: { ar: 'طويل الأمد.', en: 'Long-term.' },
        application: { ar: 'يوضع على الوجه والرقبة بعد التنظيف.', en: 'Apply to face and neck after cleansing.' },
        layering: { 
            do_not_mix_with: { ar: ['المقشرات القوية في نفس اللحظة.'], en: ['Strong exfoliants at the same moment.'] }, 
            best_mixed_with: { ar: ['Sensibio H2O.'], en: ['Sensibio H2O.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة الجافة جداً.', en: 'Very dry sensitive skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'أساس ممتاز للمكياج.', en: 'Excellent makeup base.' }
    }
});

// [3] Photoderm M SPF 50+ (Melasma)
deepProductsList.push({
    id: 'bio_photoderm_m', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم M (واقي تصبغات الكلف)', en: 'Photoderm M SPF 50+ (Melasma)' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'حماية فيزيائية وكيميائية مع <span class="glossary-term" onclick="openGlossary(\'blue_light_shield\')">درع الضوء الأزرق</span> لمنع تحفيز الميلانين.', 
            en: 'Physical and chemical protection with <span class="glossary-term" onclick="openGlossary(\'blue_light_shield\')">Blue Light Shield</span> to prevent melanin stimulation.' 
        },
        patient_benefit: { 
            ar: 'يمنع ظهور بقع الكلف الجديدة ويقلل من شدة البقع الموجودة بنسبة 66%.', 
            en: 'Prevents new melasma spots and reduces existing spot intensity by 66%.' 
        },
        active_ingredients: [
            { name: 'Iron Oxides', concentration: { ar: 'تركيز عالٍ', en: 'High' }, role: { ar: 'فلتر للضوء المرئي.', en: 'Visible light filter.' } },
            { name: 'Glabridin', concentration: { ar: 'نشط', en: 'Active' }, role: { ar: 'تفتيح وتثبيط الميلانين.', en: 'Brightening and melanin inhibition.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'كل صباح (يجدد كل ساعتين).', en: 'Every morning (reapply every 2 hours).' },
        step_in_routine: { ar: 'الحماية (آخر خطوة نهاراً).', en: 'Protection (last AM step).' },
        routine_step_number: 4,
        usage_duration: { ar: 'طوال فترة التعرض للشمس.', en: 'During sun exposure periods.' },
        application: { ar: 'يوزع بسخاء على كامل الوجه.', en: 'Distribute generously over the entire face.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد.'], en: ['None.'] }, 
            best_mixed_with: { ar: ['Pigmentbio C-Concentrate (مساءً).'], en: ['Pigmentbio C-Concentrate (PM).'] } 
        }
    },
    precautions: {
        indications: { ar: 'كلف الحمل، التصبغات الهرمونية.', en: 'Pregnancy mask, hormonal pigmentation.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'متوفر بعدة درجات لونية (Light/Golden).', en: 'Available in multiple shades (Light/Golden).' }
    }
});

// [4] Atoderm Cream Ultra
deepProductsList.push({
    id: 'bio_atoderm_ultra', brandId: 'bioderma', familyId: 'atoderm', brand: 'Bioderma',
    name: { ar: 'أتوديرم كريم ألترا', en: 'Atoderm Cream Ultra' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'تحفيز إنتاج حمض الهيالورونيك والسيراميد طبيعياً لتقوية حاجز الجلد.', 
            en: 'Stimulating natural HA and Ceramide production to strengthen the skin barrier.' 
        },
        patient_benefit: { 
            ar: 'ترطيب فوري يدوم 24 ساعة، يترك الجلد ناعماً ومرناً.', 
            en: 'Instant 24-hour hydration, leaving skin soft and supple.' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: { ar: 'مرمم', en: 'Repairing' }, role: { ar: 'تحفيز السيراميدات.', en: 'Ceramide stimulation.' } },
            { name: 'Omegas 3-6-9', concentration: { ar: 'مغذي', en: 'Nourishing' }, role: { ar: 'تغذية عميقة.', en: 'Deep nourishment.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: '1-2 مرة يومياً.', en: '1-2 times daily.' },
        step_in_routine: { ar: 'ترطيب الجسم والوجه.', en: 'Body and face hydration.' },
        routine_step_number: 3,
        usage_duration: { ar: 'استخدام يومي.', en: 'Daily use.' },
        application: { ar: 'على بشرة نظيفة ومجففة.', en: 'On clean, dry skin.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد.'], en: ['None.'] }, 
            best_mixed_with: { ar: ['Atoderm Shower Oil.'], en: ['Atoderm Shower Oil.'] } 
        }
    },
    precautions: {
        indications: { ar: 'الجفاف العادي إلى الشديد.', en: 'Normal to severe dryness.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مناسب لجميع أفراد العائلة والرضع.', en: 'Suitable for all family members and infants.' }
    }
});
// ==========================================
// 📚 تكملة القاموس الطبي لبيوديرما
// ==========================================

glossaryDict['cellular_bioprotection'] = {
    title: { ar: 'الحماية الحيوية الخلوية', en: 'Cellular Bioprotection™' },
    desc: { 
        ar: 'براءة اختراع تحفز الدفاعات الطبيعية للجلد وتحمي الحمض النووي (DNA) للخلايا من التلف الناتج عن الشمس.', 
        en: 'A patent that stimulates the skin’s natural defenses and protects cellular DNA from sun-induced damage.' 
    }
};

// ==========================================
// 🧪 تكملة منتجات بيوديرما المتبقية (Products)
// ==========================================

// [5] Sensibio Defensive (Normal/Light)
deepProductsList.push({
    id: 'bio_sensibio_defensive', brandId: 'bioderma', familyId: 'sensibio', brand: 'Bioderma',
    name: { ar: 'سينسيبيو ديفينسيف (كريم مهدئ خفيف)', en: 'Sensibio Defensive Active Soothing Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يهدئ البشرة على الفور بفضل البوليفينول المستخلص من المريمية الحمراء، ويقوي الحاجز بخفة تناسب البشرة العادية للمختلطة.', 
            en: 'Instantly soothes the skin with Red Sage polyphenols and strengthens the barrier with a lightweight texture for normal to combination skin.' 
        },
        patient_benefit: { 
            ar: 'ترطيب عميق غير دهني، يوقف الإحساس بالشد والوخز بشكل فوري ومستدام.', 
            en: 'Deep, non-greasy hydration that instantly and durably stops tightness and stinging.' 
        },
        active_ingredients: [
            { name: 'Carnosine', concentration: { ar: 'مضاد أكسدة', en: 'Antioxidant' }, role: { ar: 'منع الأكسدة وتقليل الحساسية البيئية.', en: 'Preventing oxidation and reducing environmental sensitivity.' } },
            { name: 'Red Sage Extract', concentration: { ar: 'مركز', en: 'Concentrated' }, role: { ar: 'مضاد قوي للالتهابات.', en: 'Potent anti-inflammatory.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً.', en: 'Morning and Evening.' },
        step_in_routine: { ar: 'الترطيب.', en: 'Moisturization.' },
        routine_step_number: 3,
        usage_duration: { ar: 'استخدام يومي.', en: 'Daily use.' },
        application: { ar: 'يوضع على وجه نظيف ومجفف بلطف.', en: 'Apply to gently dried, cleansed face.' },
        layering: { 
            do_not_mix_with: { ar: ['لا يوجد.'], en: ['None.'] }, 
            best_mixed_with: { ar: ['Sensibio H2O.'], en: ['Sensibio H2O.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة العادية إلى المختلطة.', en: 'Normal to combination sensitive skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'قوام خفيف يمتص فوراً، ممتاز كبرايمر للمكياج.', en: 'Lightweight texture absorbs instantly, excellent makeup primer.' }
    }
});

// [6] Photoderm Aquafluid SPF 50+
deepProductsList.push({
    id: 'bio_photoderm_aquafluid', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم أكوافلويد (واقي شمس مائي)', en: 'Photoderm Aquafluid SPF 50+ (Invisible)' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً', en: 'Physiologically Balanced' },
        mechanism: { 
            ar: 'يوفر حماية فائقة بتقنية <span class="glossary-term" onclick="openGlossary(\'cellular_bioprotection\')">الحماية الحيوية الخلوية</span> مع قوام مائي سائل يترك لمسة جافة خالية من اللمعان.', 
            en: 'Provides ultra protection with <span class="glossary-term" onclick="openGlossary(\'cellular_bioprotection\')">Cellular Bioprotection™</span> and a watery fluid texture for a dry, shine-free finish.' 
        },
        patient_benefit: { 
            ar: 'حماية قصوى بدون أي أثر أبيض أو إحساس دهني، يمتص في ثوانٍ.', 
            en: 'Maximum protection without white marks or greasy feel, absorbs in seconds.' 
        },
        active_ingredients: [
            { name: 'UVA/UVB Filters', concentration: { ar: 'SPF 50+', en: 'SPF 50+' }, role: { ar: 'حماية واسعة الطيف.', en: 'Broad-spectrum protection.' } },
            { name: 'Mattifying Powders', concentration: { ar: 'ثلاثي', en: 'Trio' }, role: { ar: 'التحكم في اللمعان (Dry Touch).', en: 'Shine control (Dry Touch).' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'قبل التعرض للشمس ويُجدد كل ساعتين.', en: 'Before sun exposure, reapply every 2 hours.' },
        step_in_routine: { ar: 'الحماية (الخطوة الأخيرة).', en: 'Protection (Last step).' },
        routine_step_number: 4,
        usage_duration: { ar: 'طوال فترة التعرض للشمس.', en: 'During sun exposure periods.' },
        application: { ar: 'يرج جيداً قبل الاستخدام، يوزع بسخاء.', en: 'Shake well before use, apply generously.' },
        layering: { 
            do_not_mix_with: { ar: ['السيرومات الزيتية الثقيلة.', 'المكياج الثقيل فوراً (انتظر 3 دقائق).'], en: ['Heavy oil serums.', 'Heavy makeup immediately (wait 3 mins).'] }, 
            best_mixed_with: { ar: ['مرطبات خفيفة.', 'سيروم فيتامين سي (تحته).'], en: ['Lightweight moisturizers.', 'Vitamin C serum (underneath).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة العادية، المختلطة، والدهنية.', en: 'Normal, combination, and oily skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'مقاوم للماء والعرق، لا يسد المسام.', en: 'Water and sweat resistant, non-comedogenic.' }
    }
});

// [7] Photoderm Cream SPF 50+
deepProductsList.push({
    id: 'bio_photoderm_cream', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم كريم (واقي شمس للترطيب)', en: 'Photoderm Cream SPF 50+ (Invisible/Light)' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يدمج الحماية القصوى ضد الأشعة مع قاعدة كريمية مغذية تمنع تبخر الماء من الجلد.', 
            en: 'Combines maximum UV protection with a nourishing cream base that prevents trans-epidermal water loss.' 
        },
        patient_benefit: { 
            ar: 'يحمي من حروق الشمس ويوفر ترطيباً مريحاً يمنع جفاف البشرة طوال اليوم.', 
            en: 'Protects against sunburns and provides comforting hydration preventing dryness all day.' 
        },
        active_ingredients: [
            { name: 'UVA/UVB Filters', concentration: { ar: 'SPF 50+', en: 'SPF 50+' }, role: { ar: 'حماية شمسية.', en: 'Sun protection.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'قبل التعرض للشمس ويُجدد كل ساعتين.', en: 'Before sun exposure, reapply every 2 hours.' },
        step_in_routine: { ar: 'واقي ومرطب نهاري.', en: 'AM SPF and moisturizer.' },
        routine_step_number: 4,
        usage_duration: { ar: 'طوال فترة النهار.', en: 'Throughout the day.' },
        application: { ar: 'يوزع بالتساوي على الوجه.', en: 'Apply evenly on face.' },
        layering: { 
            do_not_mix_with: { ar: ['المرطبات الثقيلة الأخرى (حتى لا يتكتل).'], en: ['Other heavy moisturizers (to avoid pilling).'] }, 
            best_mixed_with: { ar: ['الغسولات اللطيفة.'], en: ['Gentle cleansers.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الجافة والجافة جداً.', en: 'Dry and very dry skin.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'متوفر بنسخة شفافة ونسخة ملونة فاتحة (Light).', en: 'Available in invisible and tinted (Light) versions.' }
    }
});

// [8] Photoderm MAX Fluid SPF 100
deepProductsList.push({
    id: 'bio_photoderm_max_100', brandId: 'bioderma', familyId: 'photoderm', brand: 'Bioderma',
    name: { ar: 'فوتوديرم ماكس فلويد SPF 100', en: 'Photoderm MAX Fluid SPF 100' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يحتوي على أقصى تركيز من فلاتر الحماية لتقديم درع مطلق ضد الأشعة فوق البنفسجية في الحالات السريرية المعقدة.', 
            en: 'Contains the maximum concentration of protective filters to offer an absolute shield against UV rays in complex clinical cases.' 
        },
        patient_benefit: { 
            ar: 'حماية مطلقة للبشرة الحساسة جداً للشمس أو التي خضعت لإجراءات التجميل والليزر.', 
            en: 'Absolute protection for extreme sun-intolerant skin or post-cosmetic/laser procedures.' 
        },
        active_ingredients: [
            { name: 'Max UVA/UVB Filters', concentration: { ar: 'SPF 100', en: 'SPF 100' }, role: { ar: 'حماية قصوى مطلقة.', en: 'Ultimate maximum protection.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'قبل التعرض المباشر للشمس.', en: 'Before direct sun exposure.' },
        step_in_routine: { ar: 'الخطوة الأخيرة للوقاية.', en: 'Final prevention step.' },
        routine_step_number: 4,
        usage_duration: { ar: 'فترات التعرض الشديد للشمس.', en: 'Periods of extreme sun exposure.' },
        application: { ar: 'يُرج جيداً ويوزع بكثافة.', en: 'Shake well and apply generously.' },
        layering: { 
            do_not_mix_with: { ar: ['التقشير الكيميائي النهاري.'], en: ['Daytime chemical peels.'] }, 
            best_mixed_with: { ar: ['كريمات الترميم مثل سيكابلاست.'], en: ['Repair creams like Cicaplast.'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة البياض، فرط الحساسية للشمس، بعد جلسات الليزر.', en: 'Extremely fair skin, sun hypersensitivity, post-laser sessions.' },
        pregnancy_safe: true, sun_sensitivity: false, 
        notes: { ar: 'متوفر شفاف (Invisible) وملون (Light/Very Light).', en: 'Available in Invisible, Light, and Very Light tints.' }
    }
});

