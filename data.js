// ==========================================
// قاعدة البيانات السريرية العميقة (Clinical Data Base)
// ==========================================

const brandsList = [];
const casesList = [];
const skinTypesList = [];
const deepProductsList = [];

// --- قاموس المصطلحات الطبية (Glossary) ---
const glossaryDict = {
    'sandwich_method': {
        title: { ar: 'تقنية الساندويتش 🥪', en: 'Sandwich Method' },
        desc: { ar: 'طريقة ذكية لتقليل تهيج البشرة من المواد الفعالة القوية. تعتمد على وضع طبقة رقيقة من المرطب، ثم المادة الفعالة، ثم طبقة أخرى من المرطب لتشكيل عازل يحمي حاجز البشرة.', en: 'Apply moisturizer, then active ingredient, then moisturizer to reduce irritation.' }
    },
    'c_acnes': {
        title: { ar: 'بكتيريا C.acnes 🦠', en: 'C.acnes Bacteria' },
        desc: { ar: 'البكتيريا الرئيسية المسببة لحب الشباب. تعيش داخل المسام وتتغذى على الإفرازات الدهنية، مما يسبب الالتهاب والاحمرار.', en: 'The main bacteria responsible for acne breakouts.' }
    },
    'biofilms': {
        title: { ar: 'الأغشية الحيوية (Biofilms) 🛡️', en: 'Biofilms' },
        desc: { ar: 'درع واقي تبنيه البكتيريا حول نفسها لحماية نفسها من المضادات الحيوية وعلاجات الحبوب. تكسير هذا الدرع يعني القضاء على الحبوب من جذورها.', en: 'A protective shield built by bacteria to resist treatments.' }
    },
    'pih': {
        title: { ar: 'التصبغات (PIH) 🟤', en: 'Post-Inflammatory Hyperpigmentation' },
        desc: { ar: 'البقع الداكنة أو البنية التي تتركها الحبة بعد أن تجف وتشفى، وتحدث نتيجة زيادة إنتاج الميلانين بسبب الالتهاب.', en: 'Dark spots left behind after a pimple heals.' }
    },
    'lha': {
        title: { ar: 'حمض LHA 🧪', en: 'Lipo-Hydroxy Acid (LHA)' },
        desc: { ar: 'مُقشر مشتق من حمض الساليسيليك، لكنه ألطف بكثير. يتميز بأنه "محب للدهون" فيخترق المسام ببطء لتنظيفها من الداخل دون تهيج البشرة.', en: 'A gentle, lipophilic derivative of salicylic acid.' }
    },
    'keratolytic': {
        title: { ar: 'تحلل القرنية (Keratolytic) 🧹', en: 'Keratolytic' },
        desc: { ar: 'عملية إذابة وتقشير الطبقة الخارجية الميتة من الجلد (الكيراتين)، مما يساعد في فتح المسام المسدودة وتنعيم ملمس البشرة.', en: 'The process of dissolving and exfoliating dead skin cells.' }
    },
    'microbiome': {
        title: { ar: 'الميكروبيوم (Microbiome) ⚖️', en: 'Microbiome' },
        desc: { ar: 'النظام البيئي الطبيعي للبكتيريا والكائنات الدقيقة "النافعة" التي تعيش على سطح الجلد وتحميه من العدوى والأمراض الخارجية.', en: 'The natural ecosystem of good bacteria on the skin.' }
    }
};

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
        mechanism: { ar: 'استهداف بكتيريا <span class="glossary-term" onclick="openGlossary(\'c_acnes\')">C.acnes</span> ومنع تكوين <span class="glossary-term" onclick="openGlossary(\'biofilms\')">الأغشية الحيوية</span>، مع تقشير دقيق لمنع انسداد المسام وتقليل <span class="glossary-term" onclick="openGlossary(\'pih\')">التصبغات (PIH)</span>.', en: 'Targets C.acnes biofilms and micro-exfoliates.' },
        patient_benefit: { ar: 'يعالج الحبوب النشطة من جذورها ويمنع ظهور حبوب جديدة، والأهم أنه يمنع تحول الحبة الحمراء إلى بقعة داكنة بعد جفافها.', en: 'Treats active breakouts, prevents new ones, and stops red pimples from turning into dark brown marks.' },
        active_ingredients: [
            { name: 'Niacinamide', concentration: '4%', role: { ar: 'مضاد للالتهاب ويهدئ الاحمرار.', en: 'Anti-inflammatory.' } },
            { name: 'LHA', concentration: '0.3%', role: { ar: 'مقشر <span class="glossary-term" onclick="openGlossary(\'lha\')">LHA</span> يخترق المسام بلطف لتنظيفها.', en: 'Lipophilic micro-exfoliator.' } },
            { name: 'Salicylic Acid', concentration: '0.5%', role: { ar: 'يعمل بخاصية <span class="glossary-term" onclick="openGlossary(\'keratolytic\')">تحلل القرنية</span> لتنظيف المسام.', en: 'Keratolytic action.' } }
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
        notes: { ar: 'قد يسبب وخزاً خفيفاً وجفافاً في الأسبوع الأول. يُنصح بـ <span class="glossary-term" onclick="openGlossary(\'sandwich_method\')">تقنية الساندويتش</span> إذا زاد الجفاف.', en: 'Mild tingling is normal. Use sandwich method if severe dryness occurs.' }
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
        ph_level: '5.5 (متوازن مع فسيولوجيا المنطقة)',
        mechanism: { ar: 'ينظف بلطف شديد بفضل مركب (Glyco-Gyn)، مع الحفاظ على <span class="glossary-term" onclick="openGlossary(\'microbiome\')">الميكروبيوم</span> الطبيعي للمنطقة لمنع نمو الفطريات.', en: 'Cleanses gently, respecting the intimate flora.' },
        patient_benefit: { ar: 'يمنع الروائح الكريهة، يحمي من الالتهابات والفطريات، ويوفر راحة وانتعاش.', en: 'Prevents odors, protects against infections, provides freshness.' },
        active_ingredients: [
            { name: 'Uriage Thermal Water', concentration: '10%', role: { ar: 'ترطيب وتهدئة فورية للاحمرار.', en: 'Soothes and hydrates.' } },
            { name: 'Lactic Acid', concentration: 'تركيز فسيولوجي', role: { ar: 'يحافظ على الحموضة الطبيعية لمنع البكتيريا.', en: 'Maintains optimal pH.' } }
        ]
    },

    clinical_usage: {
        frequency: { ar: 'يُستخدم مرة واحدة يومياً، أو مرتين في حالات الالتهابات.', en: '1-2 times daily.' },
        step_in_routine: { ar: 'أثناء الاستحمام.', en: 'During shower.' },
        application: { ar: 'يرغى مع الماء، يستخدم للاستعمال الخارجي فقط.', en: 'Lather with water, external use only.' },
        layering: {
            do_not_mix_with: ['الصابون القلوي العادي'],
            best_mixed_with: ['كريمات الترطيب المخصصة للمنطقة']
        }
    },

    precautions: {
        indications: { ar: 'الوقاية من الالتهابات، وأثناء الدورة الشهرية وبعد الولادة.', en: 'Infection prevention, menstruation, postpartum.' },
        pregnancy_safe: true, 
        sun_sensitivity: false, 
        notes: { ar: 'ممتاز للاستخدام اليومي للفتيات من سن 4 سنوات.', en: 'Daily use, from 4 years.' }
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
        mechanism: { ar: 'يمتص الروائح والرطوبة باستخدام المعادن الطبيعية.', en: 'Absorbs moisture using natural MgO.' },
        patient_benefit: { ar: 'حماية من رائحة العرق 48 ساعة، لا يسبب اسمرار الإبط.', en: '48h odor protection, prevents darkening.' },
        active_ingredients: [
            { name: 'Magnesium Oxide (MgO)', concentration: 'فعال', role: { ar: 'يمتص الرطوبة مثل الإسفنجة.', en: 'Absorbs excess moisture.' } },
            { name: 'Pro-Vitamin B5', concentration: 'فعال', role: { ar: 'يهدئ البشرة ويرممها.', en: 'Soothes and repairs skin.' } },
            { name: 'Aluminum Salts', concentration: '0%', role: { ar: 'السماح للغدد بالعمل طبيعياً.', en: 'Allows skin to breathe.' } }
        ]
    },

    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً.', en: 'Once daily.' },
        step_in_routine: { ar: 'يومياً صباحاً بعد الاستحمام.', en: 'Daily after shower.' },
        application: { ar: 'يمرر على إبط نظيف وجاف تماماً.', en: 'Apply to clean, dry underarms.' },
        layering: {
            do_not_mix_with: ['تطبيق مباشر بعد مقشرات قوية (AHA/BHA)'],
            best_mixed_with: ['غسولات تفتيح الإبط']
        }
    },

    precautions: {
        indications: { ar: 'حساسية أملاح الألمنيوم، وبعد جلسات الليزر.', en: 'Sensitive skin, after laser.' },
        pregnancy_safe: true, 
        sun_sensitivity: false, 
        notes: { ar: 'آمن تماماً للاستخدام مباشرة بعد الحلاقة.', en: 'Safe to use immediately after shaving.' }
    }
});
