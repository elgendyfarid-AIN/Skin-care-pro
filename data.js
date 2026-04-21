// ==========================================
// قاعدة البيانات السريرية العميقة (Clinical Data Base)
// ==========================================

const deepProductsList = [];

// [1] المنتج الأول كمثال حي على العمق الطبي
deepProductsList.push({
    id: 'lrp_effaclar_duo',
    brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار ديو (+)', en: 'Effaclar Duo (+)' },
    image: "", // الخانة محجوزة للصور مستقبلاً
    
    pharmacology: {
        ph_level: '5.5 (متوازن ليتناسب مع الغلاف الحمضي للبشرة)',
        mechanism: { 
            ar: 'يعمل على استهداف بكتيريا C.acnes ومنع تكوين الأغشية الحيوية (Biofilms) بفضل مادة Aqua Posae Filiformis، مع تقشير دقيق للطبقة المتقرنة لمنع انسداد المسام، وتقليل التصبغات الناتجة عن الالتهاب.', 
            en: 'Targets C.acnes biofilms, micro-exfoliates the stratum corneum, and prevents PIH.' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: '4%', role: { ar: 'مضاد للالتهاب، يهدئ الاحمرار، ويقلل التصبغات البنية (PIH).', en: 'Anti-inflammatory, prevents PIH.' } },
            { name: 'LHA (Lipo-Hydroxy Acid)', concentration: '0.3%', role: { ar: 'مُقشر دهني الذوبان، يخترق المسام بعمق ولطف شديد مقارنة بحمض الساليسيليك العادي.', en: 'Lipophilic micro-exfoliator.' } },
            { name: 'Salicylic Acid', concentration: '0.5%', role: { ar: 'تحلل القرنية (Keratolytic) لتنظيف المسام المسدودة.', en: 'Keratolytic action.' } },
            { name: 'Procerad', concentration: 'براءة اختراع', role: { ar: 'سيراميد مبتكر يمنع تحول الحبوب الحمراء إلى علامات بنية أو داكنة.', en: 'Prevents red/brown marks.' } },
            { name: 'Zinc PCA', concentration: 'تركيز منخفض', role: { ar: 'تنظيم الإفرازات الدهنية ومضاد للبكتيريا.', en: 'Sebo-regulating.' } }
        ]
    },

    clinical_usage: {
        step_in_routine: { ar: 'خطوة العلاج (بعد الغسول والتجفيف التام، وقبل المرطب الخالي من الزيوت إن لزم الأمر).', en: 'Treatment step.' },
        application: { ar: 'تُؤخذ كمية بحجم حبة البازلاء (Pea-sized)، وتوزع بطبقة رقيقة على كامل الوجه لتجنب ظهور حبوب جديدة، ولا يُستخدم كنقطة علاجية (Spot Treatment) فقط.', en: 'Apply a pea-sized amount to the whole face.' },
        frequency: { ar: 'مرة إلى مرتين يومياً.', en: '1-2 times daily.' },
        layering: {
            do_not_mix_with: ['مقشرات كيميائية قوية (AHA/BHA بتركيز عالي)', 'الريتينول ومشتقاته (لتجنب تدمير حاجز البشرة)'],
            best_mixed_with: ['غسول لطيف أو يحتوي على نسبة بسيطة من الساليسيليك', 'مرمّمات الحاجز (Ceramides) في أوقات الراحة', 'واقي شمس واسع المجال نهاراً']
        }
    },

    precautions: {
        pregnancy_safe: false, // يحتوي على مشتقات حمض الساليسيليك، يُفضل تجنبه احتياطياً
        sun_sensitivity: true, // التقشير يزيد من حساسية الجلد للضوء
        notes: { 
            ar: 'قد يسبب وخزاً خفيفاً وجفافاً في الأسبوع الأول (فترة التأقلم). إذا كان الجفاف شديداً، يُنصح بتطبيق تقنية الساندويتش (مرطب - إيفاكلار - مرطب).', 
            en: 'Mild tingling is normal. Use sandwich method if severe dryness occurs.' 
        }
    }
});

// الأكواد القادمة ستضاف هنا تباعاً باستخدام deepProductsList.push(...)
