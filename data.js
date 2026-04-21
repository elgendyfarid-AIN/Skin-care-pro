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
    brandId: 'laroche', // للربط بالتصفح
    familyId: 'effaclar', // للربط بالتصفح
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
