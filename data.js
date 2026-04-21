// ==========================================
// قاعدة البيانات السريرية العميقة (Clinical Data Base)
// ==========================================

const brandsList = [];
const casesList = [];
const skinTypesList = [];
const deepProductsList = [];

brandsList.push({
    id: 'laroche', name: 'La Roche-Posay',
    families: [
        { id: 'effaclar', name: { ar: 'إيفاكلار (للبشرة الدهنية)', en: 'Effaclar (Oily Skin)' } },
        { id: 'toleriane', name: { ar: 'توليان (للبشرة الحساسة)', en: 'Toleriane' } }
    ]
});

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

// [1] إيفاكلار ديو
deepProductsList.push({
    id: 'lrp_effaclar_duo', 
    brandId: 'laroche', 
    familyId: 'effaclar', 
    brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار ديو (+)', en: 'Effaclar Duo (+)' },
    image: "", 
    potency: 3, 
    
    pharmacology: {
        ph_level: '5.5 (متوازن مع الغلاف الحمضي)',
        mechanism: { ar: 'استهداف بكتيريا C.acnes ومنع تكوين الأغشية الحيوية، مع تقشير دقيق لمنع انسداد المسام وتقليل التصبغات.', en: 'Targets C.acnes biofilms and micro-exfoliates.' },
        patient_benefit: { ar: 'يعالج الحبوب النشطة من جذورها ويمنع ظهور حبوب جديدة، والأهم أنه يمنع تحول الحبة الحمراء إلى بقعة داكنة بعد جفافها.', en: 'Treats active breakouts, prevents new ones, and stops red pimples from turning into dark brown marks.' },
        active_ingredients: [
            { name: 'Niacinamide', concentration: '4%', role: { ar: 'مضاد للالتهاب ويهدئ الاحمرار.', en: 'Anti-inflammatory.' } },
            { name: 'LHA', concentration: '0.3%', role: { ar: 'مقشر دهني الذوبان يخترق المسام بلطف.', en: 'Lipophilic micro-exfoliator.' } },
            { name: 'Salicylic Acid', concentration: '0.5%', role: { ar: 'تحلل القرنية لتنظيف المسام.', en: 'Keratolytic action.' } }
        ]
    },

    clinical_usage: {
        frequency: { ar: 'يُستخدم مرة واحدة مساءً (أو مرتين إذا تحملت البشرة)، لمدة لا تقل عن 4 إلى 8 أسابيع لظهور النتائج.', en: 'Once daily (PM), for 4-8 weeks.' },
        step_in_routine: { ar: 'خطوة العلاج (بعد الغسول وقبل المرطب الخالي من الزيوت).', en: 'Treatment step.' },
        application: { ar: 'كمية بحجم حبة البازلاء (Pea-sized) توزع بطبقة رقيقة على كامل الوجه، لا يستخدم كنقطة علاجية فقط.', en: 'Pea-sized amount to the whole face.' },
        layering: {
            do_not_mix_with: ['مقشرات كيميائية قوية (AHA/BHA)', 'الريتينول ومشتقاته'],
            best_mixed_with: ['غسول لطيف', 'مرمّمات الحاجز (Ceramides)']
        }
    },

    precautions: {
        indications: { ar: 'يُستخدم للحالات التي تعاني من حب الشباب الخفيف إلى المتوسط، الرؤوس السوداء، والآثار الحمراء بعد الحبوب.', en: 'Mild to moderate acne, blackheads, and post-acne marks.' },
        pregnancy_safe: false, 
        sun_sensitivity: true, 
        notes: { ar: 'قد يسبب وخزاً خفيفاً وجفافاً في الأسبوع الأول. يُنصح بتقنية الساندويتش إذا زاد الجفاف.', en: 'Mild tingling is normal. Use sandwich method if severe dryness occurs.' }
    }
});

// [2] غسول يورياج
deepProductsList.push({
    id: 'uriage_gyn_phy', 
    brandId: 'uriage', 
    familyId: 'intimate_care', 
    brand: 'Uriage',
    name: { ar: 'غسول جين-في للمنطقة الحساسة', en: 'Gyn-Phy Intimate Hygiene Gel' },
    image: "", 
    potency: 1, 
    
    pharmacology: {
        ph_level: '5.5 (متوازن مع فسيولوجيا المنطقة للحفاظ على البكتيريا النافعة)',
        mechanism: { ar: 'ينظف بلطف شديد بفضل مركب (Glyco-Gyn) الحصري، مع الحفاظ على التوازن الميكروبيولوجي الدقيق.', en: 'Cleanses gently, respecting the intimate flora.' },
        patient_benefit: { ar: 'يمنع الروائح الكريهة، يحمي من الالتهابات والفطريات، ويوفر راحة وانتعاش طول اليوم بدون التسبب في أي جفاف.', en: 'Prevents odors, protects against infections, provides freshness.' },
        active_ingredients: [
            { name: 'Uriage Thermal Water', concentration: '10%', role: { ar: 'ترطيب وتهدئة فورية للاحمرار والحكة.', en: 'Soothes and hydrates.' } },
            { name: 'Lactic Acid', concentration: 'تركيز فسيولوجي', role: { ar: 'يحافظ على الحموضة الطبيعية لمنع نمو البكتيريا.', en: 'Maintains optimal pH.' } }
        ]
    },

    clinical_usage: {
        frequency: { ar: 'يُستخدم مرة واحدة يومياً، أو مرتين في حالات الدورة الشهرية والالتهابات.', en: '1-2 times daily.' },
        step_in_routine: { ar: 'خطوة التنظيف اليومية (أثناء الاستحمام).', en: 'Daily cleansing.' },
        application: { ar: 'يرغى مع الماء، يستخدم للاستعمال الخارجي فقط، ثم يشطف جيداً.', en: 'Lather with water, external use only, rinse thoroughly.' },
        layering: {
            do_not_mix_with: ['الصابون القلوي العادي', 'الدوش المهبلي الداخلي (إلا بوصفة)'],
            best_mixed_with: ['كريمات الترطيب المخصصة للمنطقة']
        }
    },

    precautions: {
        indications: { ar: 'يُستخدم للعناية اليومية، للوقاية من الالتهابات، وأثناء الدورة الشهرية وبعد الولادة.', en: 'Daily care, infection prevention, during menstruation.' },
        pregnancy_safe: true, 
        sun_sensitivity: false, 
        notes: { ar: 'ممتاز للاستخدام اليومي، وللفتيات من سن 4 سنوات فما فوق.', en: 'Suitable for daily use, girls from 4 years.' }
    }
});

// [3] مزيل عرق فيشي
deepProductsList.push({
    id: 'vichy_mineral_deo', 
    brandId: 'vichy', 
    familyId: 'deodorant', 
    brand: 'Vichy',
    name: { ar: 'رول أون مزيل عرق معدني 48 ساعة', en: '48H Mineral Deodorant Roll-On' },
    image: "", 
    potency: 1, 
    
    pharmacology: {
        ph_level: 'متوازن للبشرة الحساسة',
        mechanism: { ar: 'يعمل بتقنية امتصاص الروائح والرطوبة باستخدام المعادن الطبيعية بدلاً من أملاح الألمنيوم.', en: 'Absorbs moisture using natural MgO instead of Aluminum.' },
        patient_benefit: { ar: 'حماية أكيدة من رائحة العرق لمدة يومين، لا يسبب اسمرار الإبط، ومثالي جداً لمن يعانون من تحسس.', en: '48h odor protection, prevents darkening, suitable for sensitive skin.' },
        active_ingredients: [
            { name: 'Magnesium Oxide (MgO)', concentration: 'فعال', role: { ar: 'يمتص الرطوبة مثل الإسفنجة.', en: 'Absorbs excess moisture.' } },
            { name: 'Pro-Vitamin B5', concentration: 'فعال', role: { ar: 'يهدئ البشرة ويرممها (ممتاز بعد إزالة الشعر).', en: 'Soothes and repairs skin.' } },
            { name: 'Aluminum Salts', concentration: '0%', role: { ar: 'السماح للغدد العرقية بالعمل طبيعياً.', en: 'Allows skin to breathe.' } }
        ]
    },

    clinical_usage: {
        frequency: { ar: 'يُستخدم مرة واحدة يومياً أو عند الحاجة.', en: 'Once daily or as needed.' },
        step_in_routine: { ar: 'يومياً صباحاً بعد الاستحمام.', en: 'Daily after shower.' },
        application: { ar: 'يمرر على إبط نظيف وجاف تماماً.', en: 'Apply to clean, dry underarms.' },
        layering: {
            do_not_mix_with: ['تطبيق مباشر بعد مقشرات قوية (AHA/BHA) لتجنب التهيج'],
            best_mixed_with: ['غسولات تفتيح الإبط الملطفة']
        }
    },

    precautions: {
        indications: { ar: 'يستخدم لمن يعانون من حساسية لأملاح الألمنيوم، أو لمن يبحثون عن مزيل عرق آمن بعد جلسات الليزر وإزالة الشعر.', en: 'Sensitive skin, after laser hair removal.' },
        pregnancy_safe: true, 
        sun_sensitivity: false, 
        notes: { ar: 'آمن تماماً للاستخدام مباشرة بعد الحلاقة أو إزالة الشعر.', en: 'Safe to use immediately after shaving.' }
    }
});
