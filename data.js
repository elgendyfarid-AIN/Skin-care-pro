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
        title: { ar: 'تقنية الساندويتش 🥪', en: 'Sandwich Method 🥪' },
        desc: { 
            ar: 'طريقة ذكية لتقليل تهيج البشرة من المواد الفعالة القوية. تعتمد على وضع طبقة رقيقة من المرطب، ثم المادة الفعالة، ثم طبقة أخرى من المرطب لتشكيل عازل يحمي حاجز البشرة.', 
            en: 'A smart method to reduce skin irritation from strong active ingredients. It involves applying a thin layer of moisturizer, then the active ingredient, and finally another layer of moisturizer to create a protective barrier.' 
        }
    },
    'c_acnes': {
        title: { ar: 'بكتيريا C.acnes 🦠', en: 'C.acnes Bacteria 🦠' },
        desc: { 
            ar: 'البكتيريا الرئيسية المسببة لحب الشباب. تعيش داخل المسام وتتغذى على الإفرازات الدهنية، مما يسبب الالتهاب والاحمرار.', 
            en: 'The primary bacteria responsible for acne. It lives inside the pores and feeds on sebum, causing inflammation and redness.' 
        }
    },
    'biofilms': {
        title: { ar: 'الأغشية الحيوية (Biofilms) 🛡️', en: 'Biofilms 🛡️' },
        desc: { 
            ar: 'درع واقي تبنيه البكتيريا حول نفسها لحماية نفسها من المضادات الحيوية وعلاجات الحبوب. تكسير هذا الدرع يعني القضاء على الحبوب من جذورها.', 
            en: 'A protective shield built by bacteria to defend against antibiotics and acne treatments. Breaking this shield eliminates breakouts from the root.' 
        }
    },
    'pih': {
        title: { ar: 'التصبغات (PIH) 🟤', en: 'PIH (Hyperpigmentation) 🟤' },
        desc: { 
            ar: 'البقع الداكنة أو البنية التي تتركها الحبة بعد أن تجف وتشفى، وتحدث نتيجة زيادة إنتاج الميلانين بسبب الالتهاب.', 
            en: 'Post-Inflammatory Hyperpigmentation: The dark or brown spots left behind after a pimple heals, caused by excess melanin production due to inflammation.' 
        }
    },
    'lha': {
        title: { ar: 'حمض LHA 🧪', en: 'LHA Acid 🧪' },
        desc: { 
            ar: 'مُقشر مشتق من حمض الساليسيليك، لكنه ألطف بكثير. يتميز بأنه "محب للدهون" فيخترق المسام ببطء لتنظيفها من الداخل دون تهيج البشرة.', 
            en: 'Lipo-Hydroxy Acid: A derivative of Salicylic Acid, but much gentler. Being lipophilic (fat-loving), it slowly penetrates and deeply cleanses pores without irritating the skin.' 
        }
    },
    'keratolytic': {
        title: { ar: 'تحلل القرنية (Keratolytic) 🧹', en: 'Keratolytic Action 🧹' },
        desc: { 
            ar: 'عملية إذابة وتقشير الطبقة الخارجية الميتة من الجلد (الكيراتين)، مما يساعد في فتح المسام المسدودة وتنعيم ملمس البشرة.', 
            en: 'The process of dissolving and exfoliating the dead outer layer of the skin (keratin), which helps unclog pores and smooth skin texture.' 
        }
    },
    'microbiome': {
        title: { ar: 'الميكروبيوم (Microbiome) ⚖️', en: 'Microbiome ⚖️' },
        desc: { 
            ar: 'النظام البيئي الطبيعي للبكتيريا والكائنات الدقيقة "النافعة" التي تعيش على سطح الجلد وتحميه من العدوى والأمراض الخارجية.', 
            en: 'The natural ecosystem of "good" bacteria and microorganisms living on the skin\'s surface, protecting it from external infections and diseases.' 
        }
    }
};

brandsList.push({
    id: 'laroche', name: 'La Roche-Posay',
    families: [
        { id: 'effaclar', name: { ar: 'إيفاكلار (للبشرة الدهنية)', en: 'Effaclar (Oily Skin)' } },
        { id: 'toleriane', name: { ar: 'توليان (للبشرة الحساسة)', en: 'Toleriane (Sensitive Skin)' } }
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
        ph_level: { ar: '5.5 (متوازن مع الغلاف الحمضي)', en: '5.5 (Balanced with acid mantle)' },
        mechanism: { 
            ar: 'استهداف بكتيريا <span class="glossary-term" onclick="openGlossary(\'c_acnes\')">C.acnes</span> ومنع تكوين <span class="glossary-term" onclick="openGlossary(\'biofilms\')">الأغشية الحيوية</span>، مع تقشير دقيق لمنع انسداد المسام وتقليل <span class="glossary-term" onclick="openGlossary(\'pih\')">التصبغات (PIH)</span>.', 
            en: 'Targets <span class="glossary-term" onclick="openGlossary(\'c_acnes\')">C.acnes</span> bacteria and prevents the formation of <span class="glossary-term" onclick="openGlossary(\'biofilms\')">Biofilms</span>, with precise micro-exfoliation to prevent clogged pores and reduce <span class="glossary-term" onclick="openGlossary(\'pih\')">PIH</span>.' 
        },
        patient_benefit: { 
            ar: 'يعالج الحبوب النشطة من جذورها ويمنع ظهور حبوب جديدة، والأهم أنه يمنع تحول الحبة الحمراء إلى بقعة داكنة بعد جفافها.', 
            en: 'Treats active breakouts from the root, prevents new ones, and crucially stops red pimples from turning into dark marks after drying.' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: '4%', role: { ar: 'مضاد للالتهاب ويهدئ الاحمرار.', en: 'Anti-inflammatory, soothes redness.' } },
            { name: 'LHA', concentration: '0.3%', role: { ar: 'مقشر <span class="glossary-term" onclick="openGlossary(\'lha\')">LHA</span> يخترق المسام بلطف لتنظيفها.', en: 'A <span class="glossary-term" onclick="openGlossary(\'lha\')">LHA</span> exfoliator that gently penetrates and cleanses pores.' } },
            { name: 'Salicylic Acid', concentration: '0.5%', role: { ar: 'يعمل بخاصية <span class="glossary-term" onclick="openGlossary(\'keratolytic\')">تحلل القرنية</span> لتنظيف المسام.', en: 'Provides <span class="glossary-term" onclick="openGlossary(\'keratolytic\')">Keratolytic</span> action to deeply cleanse pores.' } }
        ]
    },

    clinical_usage: {
        frequency: { 
            ar: 'يُستخدم مرة واحدة مساءً (أو مرتين إذا تحملت البشرة)، لمدة لا تقل عن 4 إلى 8 أسابيع لظهور النتائج.', 
            en: 'Use once daily PM (or twice if tolerated), for at least 4 to 8 weeks to see results.' 
        },
        step_in_routine: { 
            ar: 'خطوة العلاج (بعد الغسول وقبل المرطب الخالي من الزيوت).', 
            en: 'Treatment Step (After cleansing and before oil-free moisturizer).' 
        },
        application: { 
            ar: 'كمية بحجم حبة البازلاء (Pea-sized) توزع بطبقة رقيقة على كامل الوجه، لا يستخدم كنقطة علاجية فقط.', 
            en: 'Apply a Pea-sized amount in a thin layer over the entire face. Do not use as a spot treatment only.' 
        },
        layering: {
            do_not_mix_with: {
                ar: ['مقشرات كيميائية قوية (AHA/BHA)', 'الريتينول ومشتقاته'],
                en: ['Strong chemical exfoliants (AHA/BHA)', 'Retinol and its derivatives']
            },
            best_mixed_with: {
                ar: ['غسول لطيف', 'مرمّمات الحاجز (Ceramides)'],
                en: ['Gentle cleansers', 'Barrier repair creams (Ceramides)']
            }
        }
    },

    precautions: {
        indications: { 
            ar: 'يُستخدم للحالات التي تعاني من حب الشباب الخفيف إلى المتوسط، الرؤوس السوداء، والآثار الحمراء بعد الحبوب.', 
            en: 'Indicated for mild to moderate acne, blackheads, and post-acne red marks.' 
        },
        pregnancy_safe: false, 
        sun_sensitivity: true, 
        notes: { 
            ar: 'قد يسبب وخزاً خفيفاً وجفافاً في الأسبوع الأول. يُنصح بـ <span class="glossary-term" onclick="openGlossary(\'sandwich_method\')">تقنية الساندويتش</span> إذا زاد الجفاف.', 
            en: 'May cause mild tingling and dryness in the first week. We recommend the <span class="glossary-term" onclick="openGlossary(\'sandwich_method\')">Sandwich Method</span> if dryness persists.' 
        }
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
        ph_level: { ar: '5.5 (متوازن مع فسيولوجيا المنطقة)', en: '5.5 (Physiologically balanced)' },
        mechanism: { 
            ar: 'ينظف بلطف شديد بفضل مركب (Glyco-Gyn)، مع الحفاظ على <span class="glossary-term" onclick="openGlossary(\'microbiome\')">الميكروبيوم</span> الطبيعي للمنطقة لمنع نمو الفطريات.', 
            en: 'Cleanses very gently thanks to the (Glyco-Gyn) complex, preserving the natural <span class="glossary-term" onclick="openGlossary(\'microbiome\')">Microbiome</span> to prevent fungal overgrowth.' 
        },
        patient_benefit: { 
            ar: 'يمنع الروائح الكريهة، يحمي من الالتهابات والفطريات، ويوفر راحة وانتعاش.', 
            en: 'Prevents unpleasant odors, protects against infections, and provides all-day freshness.' 
        },
        active_ingredients: [
            { name: 'Uriage Thermal Water', concentration: '10%', role: { ar: 'ترطيب وتهدئة فورية للاحمرار.', en: 'Instant hydration and redness soothing.' } },
            { name: 'Lactic Acid', concentration: 'تركيز فسيولوجي', role: { ar: 'يحافظ على الحموضة الطبيعية لمنع البكتيريا.', en: 'Maintains optimal natural pH to prevent harmful bacteria.' } }
        ]
    },

    clinical_usage: {
        frequency: { 
            ar: 'يُستخدم مرة واحدة يومياً، أو مرتين في حالات الالتهابات.', 
            en: 'Use once daily, or twice daily during active infections.' 
        },
        step_in_routine: { 
            ar: 'أثناء الاستحمام.', 
            en: 'During shower/bathing.' 
        },
        application: { 
            ar: 'يرغى مع الماء، يستخدم للاستعمال الخارجي فقط.', 
            en: 'Lather with water. For external use only.' 
        },
        layering: {
            do_not_mix_with: {
                ar: ['الصابون القلوي العادي'],
                en: ['Standard alkaline soaps']
            },
            best_mixed_with: {
                ar: ['كريمات الترطيب المخصصة للمنطقة'],
                en: ['Specific intimate moisturizing creams']
            }
        }
    },

    precautions: {
        indications: { 
            ar: 'الوقاية من الالتهابات، وأثناء الدورة الشهرية وبعد الولادة.', 
            en: 'Infection prevention, during menstruation, and postpartum care.' 
        },
        pregnancy_safe: true, 
        sun_sensitivity: false, 
        notes: { 
            ar: 'ممتاز للاستخدام اليومي للفتيات من سن 4 سنوات.', 
            en: 'Excellent for daily use, suitable for girls from 4 years old.' 
        }
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
        ph_level: { ar: 'متوازن للبشرة الحساسة', en: 'Balanced for sensitive skin' },
        mechanism: { 
            ar: 'يمتص الروائح والرطوبة باستخدام المعادن الطبيعية.', 
            en: 'Absorbs odors and moisture using natural minerals.' 
        },
        patient_benefit: { 
            ar: 'حماية من رائحة العرق 48 ساعة، لا يسبب اسمرار الإبط.', 
            en: '48-hour odor protection, prevents underarm darkening.' 
        },
        active_ingredients: [
            { name: 'Magnesium Oxide (MgO)', concentration: 'فعال', role: { ar: 'يمتص الرطوبة مثل الإسفنجة.', en: 'Absorbs excess moisture like a sponge.' } },
            { name: 'Pro-Vitamin B5', concentration: 'فعال', role: { ar: 'يهدئ البشرة ويرممها.', en: 'Soothes and repairs the skin barrier.' } },
            { name: 'Aluminum Salts', concentration: '0%', role: { ar: 'السماح للغدد بالعمل طبيعياً.', en: 'Allows sweat glands to breathe naturally.' } }
        ]
    },

    clinical_usage: {
        frequency: { 
            ar: 'مرة واحدة يومياً.', 
            en: 'Once daily.' 
        },
        step_in_routine: { 
            ar: 'يومياً صباحاً بعد الاستحمام.', 
            en: 'Daily in the morning after showering.' 
        },
        application: { 
            ar: 'يمرر على إبط نظيف وجاف تماماً.', 
            en: 'Apply to completely clean, dry underarms.' 
        },
        layering: {
            do_not_mix_with: {
                ar: ['تطبيق مباشر بعد مقشرات قوية (AHA/BHA)'],
                en: ['Direct application after strong exfoliants (AHA/BHA)']
            },
            best_mixed_with: {
                ar: ['غسولات تفتيح الإبط'],
                en: ['Underarm brightening washes']
            }
        }
    },

    precautions: {
        indications: { 
            ar: 'حساسية أملاح الألمنيوم، وبعد جلسات الليزر.', 
            en: 'Sensitivity to aluminum salts, and post-laser hair removal.' 
        },
        pregnancy_safe: true, 
        sun_sensitivity: false, 
        notes: { 
            ar: 'آمن تماماً للاستخدام مباشرة بعد الحلاقة.', 
            en: 'Completely safe to use immediately after shaving.' 
        }
    }
});
