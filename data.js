// ==========================================
// قاعدة البيانات السريرية العميقة (Clinical Data Base)
// ==========================================

const brandsList = [];
const casesList = [];
const skinTypesList = [];
const deepProductsList = [];

// 1. هيكل العلامات التجارية (قوائم التصفح)
brandsList.push({
    id: 'laroche', name: 'La Roche-Posay',
    families: [
        { id: 'effaclar', name: { ar: 'إيفاكلار (للبشرة الدهنية)', en: 'Effaclar (Oily Skin)' } },
        { id: 'toleriane', name: { ar: 'توليان (للبشرة الحساسة)', en: 'Toleriane' } }
    ]
});

brandsList.push({
    id: 'cerave', name: 'CeraVe',
    families: [
        { id: 'cleansers', name: { ar: 'المنظفات', en: 'Cleansers' } }
    ]
});

// 2. قائمة المنتجات العميقة
deepProductsList.push({
    id: 'lrp_effaclar_duo', 
    brandId: 'laroche', 
    familyId: 'effaclar', 
    brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار ديو (+)', en: 'Effaclar Duo (+)' },
    image: "", 
    
    // مؤشر القوة (1: لطيف، 2: متوسط، 3: قوي/مكثف)
    potency: 3, 
    
    pharmacology: {
        ph_level: '5.5 (متوازن مع الغلاف الحمضي)',
        mechanism: { 
            ar: 'استهداف بكتيريا C.acnes ومنع تكوين الأغشية الحيوية، مع تقشير دقيق لمنع انسداد المسام وتقليل التصبغات.', 
            en: 'Targets C.acnes biofilms and micro-exfoliates to prevent PIH.' 
        },
        // --- النتيجة أو الفائدة للمريض ---
        patient_benefit: {
            ar: 'يعالج الحبوب النشطة من جذورها ويمنع ظهور حبوب جديدة، والأهم أنه يمنع تحول الحبة الحمراء إلى بقعة داكنة أو أثر بني بعد جفافها.',
            en: 'Treats active breakouts, prevents new ones, and stops red pimples from turning into dark brown marks.'
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: '4%', role: { ar: 'مضاد للالتهاب ويهدئ الاحمرار.', en: 'Anti-inflammatory.' } },
            { name: 'LHA', concentration: '0.3%', role: { ar: 'مقشر دهني الذوبان يخترق المسام بلطف.', en: 'Lipophilic micro-exfoliator.' } },
            { name: 'Salicylic Acid', concentration: '0.5%', role: { ar: 'تحلل القرنية لتنظيف المسام.', en: 'Keratolytic action.' } }
        ]
    },

    clinical_usage: {
        step_in_routine: { ar: 'خطوة العلاج (بعد الغسول وقبل المرطب الخالي من الزيوت).', en: 'Treatment step.' },
        application: { ar: 'كمية بحجم حبة البازلاء (Pea-sized) توزع بطبقة رقيقة على كامل الوجه.', en: 'Pea-sized amount to the whole face.' },
        layering: {
            do_not_mix_with: ['مقشرات كيميائية قوية (AHA/BHA)', 'الريتينول ومشتقاته'],
            best_mixed_with: ['غسول لطيف', 'مرمّمات الحاجز (Ceramides) في أوقات الراحة']
        }
    },

    precautions: {
        pregnancy_safe: false, 
        sun_sensitivity: true, 
        notes: { 
            ar: 'قد يسبب وخزاً خفيفاً وجفافاً في الأسبوع الأول. يُنصح بتقنية الساندويتش (مرطب - إيفاكلار - مرطب) إذا زاد الجفاف.', 
            en: 'Mild tingling is normal. Use sandwich method if severe dryness occurs.' 
        }
    }
});
// ==========================================
// --- إضافة قسم العناية الشخصية (مزيلات العرق والمناطق الحساسة) ---
// ==========================================

// 1. إضافة البراندات والتصنيفات الجديدة
brandsList.push({
    id: 'uriage', name: 'Uriage',
    families: [
        { id: 'intimate_care', name: { ar: 'العناية بالمنطقة الحساسة', en: 'Intimate Hygiene' } }
    ]
});

brandsList.push({
    id: 'vichy', name: 'Vichy',
    families: [
        { id: 'deodorant', name: { ar: 'مزيلات العرق', en: 'Deodorants' } }
    ]
});

// 2. إضافة المنتجات العميقة

// [منتج 1]: غسول يورياج للمنطقة الحساسة
deepProductsList.push({
    id: 'uriage_gyn_phy', 
    brandId: 'uriage', 
    familyId: 'intimate_care', 
    brand: 'Uriage',
    name: { ar: 'غسول جين-في للمنطقة الحساسة', en: 'Gyn-Phy Intimate Hygiene Gel' },
    image: "", 
    
    potency: 1, // لطيف جداً
    
    pharmacology: {
        ph_level: '5.5 (متوازن مع فسيولوجيا المنطقة للحفاظ على البكتيريا النافعة)',
        mechanism: { 
            ar: 'ينظف بلطف شديد بفضل مركب (Glyco-Gyn) الحصري، مع الحفاظ على التوازن الميكروبيولوجي الدقيق للمنطقة (Microbiome).', 
            en: 'Cleanses gently with Glyco-Gyn complex, respecting the intimate flora.' 
        },
        patient_benefit: {
            ar: 'يمنع الروائح الكريهة، يحمي من الالتهابات والفطريات، ويوفر راحة وانتعاش طول اليوم بدون التسبب في أي جفاف.',
            en: 'Prevents odors, protects against infections, and provides all-day freshness without dryness.'
        },
        active_ingredients: [
            { name: 'Uriage Thermal Water', concentration: '10%', role: { ar: 'ترطيب وتهدئة فورية للاحمرار والحكة.', en: 'Soothes and hydrates.' } },
            { name: 'Lactic Acid', concentration: 'تركيز فسيولوجي', role: { ar: 'يحافظ على الحموضة الطبيعية لمنع نمو البكتيريا الضارة.', en: 'Maintains optimal pH.' } }
        ]
    },

    clinical_usage: {
        step_in_routine: { ar: 'خطوة التنظيف اليومية (أثناء الاستحمام).', en: 'Daily cleansing.' },
        application: { ar: 'يرغى مع الماء، يستخدم للاستعمال الخارجي فقط، ثم يشطف جيداً.', en: 'Lather with water, external use only, rinse thoroughly.' },
        layering: {
            do_not_mix_with: ['الصابون القلوي العادي (يدمر البكتيريا النافعة)', 'الدوش المهبلي الداخلي (إلا بوصفة طبية)'],
            best_mixed_with: ['كريمات الترطيب المخصصة للمنطقة إذا لزم الأمر']
        }
    },

    precautions: {
        pregnancy_safe: true, // آمن جداً
        sun_sensitivity: false, 
        notes: { 
            ar: 'ممتاز للاستخدام اليومي، وللفتيات من سن 4 سنوات فما فوق، ومثالي أثناء الدورة الشهرية وبعد الولادة.', 
            en: 'Suitable for daily use, girls from 4 years, during menstruation, and postpartum.' 
        }
    }
});

// [منتج 2]: مزيل عرق فيشي المعدني
deepProductsList.push({
    id: 'vichy_mineral_deo', 
    brandId: 'vichy', 
    familyId: 'deodorant', 
    brand: 'Vichy',
    name: { ar: 'رول أون مزيل عرق معدني 48 ساعة', en: '48H Mineral Deodorant Roll-On' },
    image: "", 
    
    potency: 1, // لطيف جداً
    
    pharmacology: {
        ph_level: 'متوازن للبشرة الحساسة',
        mechanism: { 
            ar: 'يعمل بتقنية امتصاص الروائح والرطوبة باستخدام المعادن الطبيعية (أكسيد المغنيسيوم) بدلاً من أملاح الألمنيوم، مما يسمح للجلد بالتنفس.', 
            en: 'Absorbs moisture and odor using natural MgO instead of Aluminum salts.' 
        },
        patient_benefit: {
            ar: 'حماية أكيدة من رائحة العرق لمدة يومين، لا يسبب اسمرار الإبط (خالي من الكحول)، ومثالي جداً لمن يعانون من تحسس تجاه مزيلات العرق القوية.',
            en: '48h odor protection, prevents underarm darkening, and highly tolerated by sensitive skin.'
        },
        active_ingredients: [
            { name: 'Magnesium Oxide (MgO)', concentration: 'فعال', role: { ar: 'يمتص الرطوبة مثل الإسفنجة (أقوى بـ 4 مرات من التلك).', en: 'Absorbs excess moisture.' } },
            { name: 'Pro-Vitamin B5', concentration: 'فعال', role: { ar: 'يهدئ البشرة ويرممها (ممتاز بعد إزالة الشعر).', en: 'Soothes and repairs skin.' } },
            { name: '0% Aluminum Salts', concentration: '0%', role: { ar: 'السماح للغدد العرقية بالعمل طبيعياً دون انسداد.', en: 'Allows skin to breathe.' } }
        ]
    },

    clinical_usage: {
        step_in_routine: { ar: 'يومياً صباحاً بعد الاستحمام.', en: 'Daily after shower.' },
        application: { ar: 'يمرر على إبط نظيف وجاف تماماً.', en: 'Apply to clean, dry underarms.' },
        layering: {
            do_not_mix_with: ['تطبيق مباشر بعد مقشرات قوية (AHA/BHA) لتجنب التهيج'],
            best_mixed_with: ['غسولات تفتيح الإبط الملطفة']
        }
    },

    precautions: {
        pregnancy_safe: true, // آمن جداً
        sun_sensitivity: false, 
        notes: { 
            ar: 'آمن تماماً للاستخدام مباشرة بعد الحلاقة أو إزالة الشعر بالليزر بفضل احتوائه على البانثينول.', 
            en: 'Safe to use immediately after shaving or laser hair removal.' 
        }
    }
});
