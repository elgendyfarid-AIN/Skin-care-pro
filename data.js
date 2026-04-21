// ==========================================
// قاعدة البيانات السريرية العميقة (Clinical Data Base)
// ==========================================

const brandsList = [];
const casesList = [];
const skinTypesList = [];
const deepProductsList = [];

// --- 1. قاموس المصطلحات الطبية (Glossary) ---
const glossaryDict = {
    'sandwich_method': {
        title: { ar: 'تقنية الساندويتش 🥪', en: 'Sandwich Method 🥪' },
        desc: { 
            ar: 'طريقة ذكية لتقليل تهيج البشرة من المواد الفعالة القوية. تعتمد على وضع طبقة رقيقة من المرطب، ثم المادة الفعالة، ثم طبقة أخرى من المرطب لتشكيل عازل يحمي حاجز البشرة.', 
            en: 'A smart method to reduce skin irritation from strong active ingredients. It involves applying a thin layer of moisturizer, then the active ingredient, and finally another layer of moisturizer.' 
        }
    },
    'c_acnes': {
        title: { ar: 'بكتيريا C.acnes 🦠', en: 'C.acnes Bacteria 🦠' },
        desc: { 
            ar: 'البكتيريا الرئيسية المسببة لحب الشباب. تعيش داخل المسام وتتغذى على الإفرازات الدهنية، مما يسبب الالتهاب والاحمرار.', 
            en: 'The primary bacteria responsible for acne. It lives inside the pores and feeds on sebum, causing inflammation.' 
        }
    },
    'biofilms': {
        title: { ar: 'الأغشية الحيوية (Biofilms) 🛡️', en: 'Biofilms 🛡️' },
        desc: { 
            ar: 'درع واقي تبنيه البكتيريا حول نفسها لحماية نفسها من العلاجات. تكسير هذا الدرع يعني القضاء على الحبوب من جذورها.', 
            en: 'A protective shield built by bacteria to defend against treatments. Breaking this shield eliminates breakouts from the root.' 
        }
    },
    'pih': {
        title: { ar: 'التصبغات (PIH) 🟤', en: 'PIH (Hyperpigmentation) 🟤' },
        desc: { 
            ar: 'البقع الداكنة التي تتركها الحبة بعد أن تشفى، وتحدث نتيجة زيادة إنتاج الميلانين بسبب الالتهاب.', 
            en: 'Post-Inflammatory Hyperpigmentation: The dark spots left behind after a pimple heals, caused by excess melanin.' 
        }
    },
    'lha': {
        title: { ar: 'حمض LHA 🧪', en: 'LHA Acid 🧪' },
        desc: { 
            ar: 'مُقشر مشتق من حمض الساليسيليك، يتميز بأنه "محب للدهون" فيخترق المسام ببطء لتنظيفها دون تهيج.', 
            en: 'Lipo-Hydroxy Acid: A gentle derivative of Salicylic Acid that slowly penetrates and cleanses pores without irritation.' 
        }
    },
    'keratolytic': {
        title: { ar: 'تحلل القرنية (Keratolytic) 🧹', en: 'Keratolytic Action 🧹' },
        desc: { 
            ar: 'عملية إذابة وتقشير الطبقة الخارجية الميتة من الجلد، مما يساعد في فتح المسام المسدودة وتنعيم البشرة.', 
            en: 'The process of dissolving and exfoliating dead skin cells, helping unclog pores and smooth skin texture.' 
        }
    },
    'microbiome': {
        title: { ar: 'الميكروبيوم (Microbiome) ⚖️', en: 'Microbiome ⚖️' },
        desc: { 
            ar: 'النظام البيئي الطبيعي للبكتيريا "النافعة" التي تعيش على سطح الجلد وتحميه من العدوى.', 
            en: 'The natural ecosystem of "good" bacteria living on the skin\'s surface, protecting it from infections.' 
        }
    },
    // ---- مصطلحات يوسيرين الجديدة ----
    'thiamidol': {
        title: { ar: 'ثياميدول (Thiamidol) 💎', en: 'Thiamidol 💎' },
        desc: { 
            ar: 'براءة اختراع حصرية لشركة يوسيرين. مركب جبار يعمل على تثبيط إنتاج الميلانين من جذوره، ويعتبر حالياً من أقوى المواد عالمياً لعلاج التصبغات والكلف.', 
            en: 'Eucerin\'s exclusive patented ingredient. A highly effective compound that inhibits melanin production at the root, considered one of the strongest globally for hyperpigmentation.' 
        }
    },
    'tyrosinase': {
        title: { ar: 'إنزيم التيروزيناز (Tyrosinase) 🧬', en: 'Tyrosinase Enzyme 🧬' },
        desc: { 
            ar: 'الإنزيم الرئيسي المسؤول عن تصنيع صبغة الميلانين في الجلد. إيقاف عمل هذا الإنزيم يعني توقف ظهور التصبغات.', 
            en: 'The key enzyme responsible for melanin synthesis in the skin. Inhibiting this enzyme stops the formation of dark spots.' 
        }
    },
    'licochalcone_a': {
        title: { ar: 'ليكوتشالكون A 🌿', en: 'Licochalcone A 🌿' },
        desc: { 
            ar: 'مستخلص قوي جداً من جذور العرقسوس، يعمل كمضاد للالتهاب ومضاد للأكسدة، ويهدئ الاحمرار والتهيج في حالات حب الشباب والوردية.', 
            en: 'A potent extract from licorice root acting as a strong anti-inflammatory and antioxidant, soothing redness in acne and rosacea.' 
        }
    }
};

// --- 2. العلامات التجارية (Brands) ---
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

// إضافة يوسيرين
brandsList.push({
    id: 'eucerin', name: 'Eucerin',
    families: [
        { id: 'dermopurifyer', name: { ar: 'ديرموبيوريفاير (لحب الشباب)', en: 'DermoPurifyer (Acne)' } },
        { id: 'even_pigment', name: { ar: 'إيفين بيجمنت (للتصبغات)', en: 'Even Pigment (Hyperpigmentation)' } }
    ]
});

// --- 3. المنتجات العميقة ---

// [1] إيفاكلار ديو (+)
deepProductsList.push({
    id: 'lrp_effaclar_duo', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار ديو (+)', en: 'Effaclar Duo (+)' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { ar: '5.5 (متوازن مع الغلاف الحمضي)', en: '5.5 (Balanced with acid mantle)' },
        mechanism: { ar: 'استهداف بكتيريا <span class="glossary-term" onclick="openGlossary(\'c_acnes\')">C.acnes</span> ومنع تكوين <span class="glossary-term" onclick="openGlossary(\'biofilms\')">الأغشية الحيوية</span>، وتقليل <span class="glossary-term" onclick="openGlossary(\'pih\')">التصبغات (PIH)</span>.', en: 'Targets <span class="glossary-term" onclick="openGlossary(\'c_acnes\')">C.acnes</span> and prevents <span class="glossary-term" onclick="openGlossary(\'biofilms\')">Biofilms</span>, reducing <span class="glossary-term" onclick="openGlossary(\'pih\')">PIH</span>.' },
        patient_benefit: { ar: 'يعالج الحبوب النشطة ويمنع ظهور حبوب جديدة، ويمنع تحول الحبة الحمراء لبقعة داكنة.', en: 'Treats active breakouts, prevents new ones, and stops red pimples from turning into dark marks.' },
        active_ingredients: [
            { name: 'Niacinamide', concentration: '4%', role: { ar: 'مضاد للالتهاب ويهدئ الاحمرار.', en: 'Anti-inflammatory, soothes redness.' } },
            { name: 'LHA & Salicylic Acid', concentration: '0.3% + 0.5%', role: { ar: 'يعمل بخاصية <span class="glossary-term" onclick="openGlossary(\'keratolytic\')">تحلل القرنية</span> لتنظيف المسام.', en: 'Provides <span class="glossary-term" onclick="openGlossary(\'keratolytic\')">Keratolytic</span> action to deeply cleanse pores.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة مساءً، لمدة 4-8 أسابيع.', en: 'Once daily PM, for 4-8 weeks.' },
        step_in_routine: { ar: 'خطوة العلاج (بعد الغسول).', en: 'Treatment Step (After cleansing).' },
        application: { ar: 'كمية بحجم حبة البازلاء (Pea-sized) على كامل الوجه.', en: 'Pea-sized amount over the entire face.' },
        layering: { do_not_mix_with: { ar: ['مقشرات كيميائية قوية', 'الريتينول'], en: ['Strong chemical exfoliants', 'Retinol'] }, best_mixed_with: { ar: ['مرمّمات الحاجز (Ceramides)'], en: ['Barrier repair creams (Ceramides)'] } }
    },
    precautions: {
        indications: { ar: 'حب الشباب الخفيف للمتوسط والآثار الحمراء.', en: 'Mild to moderate acne and post-acne red marks.' },
        pregnancy_safe: false, sun_sensitivity: true, 
        notes: { ar: 'قد يسبب جفافاً. يُنصح بـ <span class="glossary-term" onclick="openGlossary(\'sandwich_method\')">تقنية الساندويتش</span>.', en: 'May cause dryness. Recommend <span class="glossary-term" onclick="openGlossary(\'sandwich_method\')">Sandwich Method</span>.' }
    }
});

// [2] يورياج جين في
deepProductsList.push({
    id: 'uriage_gyn_phy', brandId: 'uriage', familyId: 'intimate_care', brand: 'Uriage',
    name: { ar: 'غسول جين-في للمنطقة الحساسة', en: 'Gyn-Phy Intimate Hygiene Gel' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: '5.5 (متوازن مع فسيولوجيا المنطقة)', en: '5.5 (Physiologically balanced)' },
        mechanism: { ar: 'ينظف بلطف مع الحفاظ على <span class="glossary-term" onclick="openGlossary(\'microbiome\')">الميكروبيوم</span> الطبيعي لمنع الفطريات.', en: 'Cleanses gently, preserving the natural <span class="glossary-term" onclick="openGlossary(\'microbiome\')">Microbiome</span>.' },
        patient_benefit: { ar: 'يمنع الروائح الكريهة، يحمي من الالتهابات، ويوفر انتعاش.', en: 'Prevents odors, protects against infections.' },
        active_ingredients: [{ name: 'Lactic Acid', concentration: 'Physiological', role: { ar: 'يحافظ على الحموضة لمنع البكتيريا.', en: 'Maintains optimal pH.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'مرة إلى مرتين يومياً.', en: '1-2 times daily.' },
        step_in_routine: { ar: 'أثناء الاستحمام.', en: 'During shower.' },
        application: { ar: 'للاستعمال الخارجي فقط ثم يشطف.', en: 'External use only, then rinse.' },
        layering: { do_not_mix_with: { ar: ['الصابون القلوي العادي'], en: ['Standard alkaline soaps'] }, best_mixed_with: { ar: ['مرطبات المنطقة'], en: ['Intimate moisturizers'] } }
    },
    precautions: {
        indications: { ar: 'الوقاية من الالتهابات وأثناء الدورة الشهرية.', en: 'Infection prevention, during menstruation.' },
        pregnancy_safe: true, sun_sensitivity: false, notes: { ar: 'للفتيات من سن 4 سنوات.', en: 'Suitable for girls from 4 years.' }
    }
});

// [3] فيشي مزيل عرق
deepProductsList.push({
    id: 'vichy_mineral_deo', brandId: 'vichy', familyId: 'deodorant', brand: 'Vichy',
    name: { ar: 'مزيل عرق معدني 48 ساعة', en: '48H Mineral Deodorant' }, image: "", potency: 1, 
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { ar: 'يمتص الرطوبة بالمعادن بدلاً من الألمنيوم.', en: 'Absorbs moisture using minerals.' },
        patient_benefit: { ar: 'حماية 48 ساعة ولا يسبب اسمرار الإبط.', en: '48h protection, prevents darkening.' },
        active_ingredients: [{ name: 'Magnesium Oxide (MgO)', concentration: '', role: { ar: 'يمتص الرطوبة كالإسفنجة.', en: 'Absorbs moisture like a sponge.' } }]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً.', en: 'Daily.' },
        step_in_routine: { ar: 'صباحاً بعد الاستحمام.', en: 'Morning after shower.' },
        application: { ar: 'على إبط جاف ونظيف.', en: 'On dry, clean underarms.' },
        layering: { do_not_mix_with: { ar: ['مقشرات قوية (AHA/BHA)'], en: ['Strong exfoliants (AHA/BHA)'] }, best_mixed_with: { ar: ['-'], en: ['-'] } }
    },
    precautions: {
        indications: { ar: 'حساسية أملاح الألمنيوم وبعد الليزر.', en: 'Aluminum sensitivity, post-laser.' },
        pregnancy_safe: true, sun_sensitivity: false, notes: { ar: 'آمن بعد الحلاقة.', en: 'Safe after shaving.' }
    }
});

// ---------------------------------------------
// ---- منتجات يوسيرين الجديدة (العمق السريري) ----
// ---------------------------------------------

// [4] يوسيرين سائل إزالة اللمعان لحب الشباب
deepProductsList.push({
    id: 'eucerin_dermopurifyer_fluid', 
    brandId: 'eucerin', 
    familyId: 'dermopurifyer', 
    brand: 'Eucerin',
    name: { ar: 'ديرموبيوريفاير سائل إزالة اللمعان', en: 'DermoPurifyer Mattifying Fluid' },
    image: "", 
    potency: 2, // متوسط القوة
    
    pharmacology: {
        ph_level: { ar: 'متوازن للبشرة الدهنية', en: 'Balanced for oily skin' },
        mechanism: { 
            ar: 'يقوم بتقليل الإفرازات الدهنية بشكل ملحوظ، بينما يعمل مركب <span class="glossary-term" onclick="openGlossary(\'licochalcone_a\')">ليكوتشالكون A</span> على تهدئة التهاب الحبوب الحمراء ومنع تفاقمها.', 
            en: 'Significantly reduces sebum production, while <span class="glossary-term" onclick="openGlossary(\'licochalcone_a\')">Licochalcone A</span> soothes red, inflamed acne and prevents exacerbation.' 
        },
        patient_benefit: { 
            ar: 'يمنح البشرة تأثيراً مطفياً (Matte) يدوم لـ 8 ساعات، يعالج الحبوب تحت الجلد، ويخفف الاحمرار المزعج فوراً.', 
            en: 'Provides an 8-hour anti-shine (Matte) effect, treats comedones, and instantly reduces annoying redness.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid', concentration: 'فعال', role: { ar: 'يعمل بآلية <span class="glossary-term" onclick="openGlossary(\'keratolytic\')">تحلل القرنية</span> لتنقية المسام وتقليل البكتيريا.', en: 'Uses <span class="glossary-term" onclick="openGlossary(\'keratolytic\')">Keratolytic</span> action to purify pores and reduce bacteria.' } },
            { name: 'Licochalcone A', concentration: 'مرتفع', role: { ar: 'مضاد التهاب قوي يمتص الاحمرار.', en: 'Strong anti-inflammatory that absorbs redness.' } },
            { name: 'Sebum-Regulating Technology', concentration: '', role: { ar: 'جزيئات تمتص الدهون الزائدة.', en: 'Particles that absorb excess sebum.' } }
        ]
    },

    clinical_usage: {
        frequency: { 
            ar: 'يُستخدم مرتين يومياً (صباحاً ومساءً).', 
            en: 'Use twice daily (Morning and Evening).' 
        },
        step_in_routine: { 
            ar: 'بعد الغسول الديرموبيوريفاير وقبل واقي الشمس نهاراً.', 
            en: 'After DermoPurifyer cleanser and before sunscreen during the day.' 
        },
        application: { 
            ar: 'توزع كمية بحجم حبة الحمص على الوجه بالكامل مع تجنب محيط العينين.', 
            en: 'Apply a chickpea-sized amount to the entire face, avoiding the eye area.' 
        },
        layering: {
            do_not_mix_with: {
                ar: ['يُفضل عدم استخدامه في نفس الوقت مع علاج حبوب طبي قوي (مثل الروتينويد) لتجنب الجفاف المفرط.', 'المقشرات الفيزيائية القاسية.'],
                en: ['Avoid using simultaneously with strong medical acne treatments (like retinoids) to prevent severe dryness.', 'Harsh physical scrubs.']
            },
            best_mixed_with: {
                ar: ['يوسيرين ديرموبيوريفاير جل الغسول', 'واقي شمس يوسيرين للبشرة الدهنية (Oil Control)'],
                en: ['Eucerin DermoPurifyer Cleansing Gel', 'Eucerin Oil Control Sun Gel-Cream']
            }
        }
    },

    precautions: {
        indications: { 
            ar: 'البشرة المعرضة لحب الشباب، الرؤوس السوداء، والبشرة شديدة اللمعان.', 
            en: 'Acne-prone skin, blackheads, and highly shiny/oily skin.' 
        },
        pregnancy_safe: false, // يحتوي على الساليسيليك بتركيز فعال
        sun_sensitivity: true, 
        notes: { 
            ar: 'مضاد للبكتيريا ولا يسد المسام (Non-comedogenic). ممتاز كقاعدة (برايمر) قبل المكياج للبشرة الدهنية.', 
            en: 'Antibacterial and non-comedogenic. Excellent as a makeup primer for oily skin.' 
        }
    }
});

// [5] يوسيرين إيفين بيجمنت السيروم المزدوج
deepProductsList.push({
    id: 'eucerin_pigment_dual_serum', 
    brandId: 'eucerin', 
    familyId: 'even_pigment', 
    brand: 'Eucerin',
    name: { ar: 'إيفين بيجمنت السيروم المزدوج', en: 'Even Pigment Perfector Dual Serum' },
    image: "", 
    potency: 3, // قوي وفعال
    
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { 
            ar: 'يعمل مركب <span class="glossary-term" onclick="openGlossary(\'thiamidol\')">الثياميدول</span> على إعاقة إنزيم <span class="glossary-term" onclick="openGlossary(\'tyrosinase\')">التيروزيناز</span>، مما يوقف إنتاج صبغة الميلانين من الأساس، بينما يعمل الهيالورونيك على تجديد الخلايا السطحية.', 
            en: '<span class="glossary-term" onclick="openGlossary(\'thiamidol\')">Thiamidol</span> blocks the <span class="glossary-term" onclick="openGlossary(\'tyrosinase\')">Tyrosinase</span> enzyme, stopping melanin production at the source, while Hyaluronic acid renews surface cells.' 
        },
        patient_benefit: { 
            ar: 'تفتيح ملحوظ للبقع الداكنة والكلف خلال أسبوعين فقط من الاستخدام المنتظم، مع توحيد لون البشرة وإعطائها نضارة عميقة.', 
            en: 'Noticeable lightening of dark spots and melasma in just 2 weeks of regular use, evening out skin tone and providing deep radiance.' 
        },
        active_ingredients: [
            { name: 'Thiamidol', concentration: 'براءة اختراع', role: { ar: 'المكون الأول عالمياً في تثبيط الميلانين.', en: 'World-leading ingredient in inhibiting melanin.' } },
            { name: 'Hyaluronic Acid', concentration: 'عالي الجزيئات', role: { ar: 'ترطيب عميق وحبس للماء داخل طبقات الجلد.', en: 'Deep hydration and moisture lock within skin layers.' } }
        ]
    },

    clinical_usage: {
        frequency: { 
            ar: 'مرة واحدة يومياً (صباحاً أو مساءً). *الحد الأقصى لاستخدام الثياميدول هو 4 مرات يومياً (مجموع المنتجات).*', 
            en: 'Once daily (AM or PM). *Maximum Thiamidol application is 4 times per day (combined products).*' 
        },
        step_in_routine: { 
            ar: 'يُطبق كخطوة السيروم الأساسية (بعد الغسول وقبل الكريم المرطب/النهاري).', 
            en: 'Apply as the primary serum step (after cleansing, before moisturizer/day cream).' 
        },
        application: { 
            ar: 'ضغطة واحدة على منتصف الموزع المزدوج لمزج السيرومين معاً، ويوزع بلطف على الوجه والرقبة.', 
            en: 'Press the middle of the dual-dispenser to mix both serums, gently distribute over face and neck.' 
        },
        layering: {
            do_not_mix_with: {
                ar: ['يمنع استخدامه مع منتجات تحتوي على مقشرات قوية (لتقليل التحسس).'],
                en: ['Do not use with products containing strong exfoliants (to reduce sensitivity).']
            },
            best_mixed_with: {
                ar: ['يوسيرين إيفين بيجمنت الكريم النهاري (SPF30)', 'واقي شمس قوي.'],
                en: ['Eucerin Even Pigment Day Cream (SPF30)', 'Strong Sunscreen.']
            }
        }
    },

    precautions: {
        indications: { 
            ar: 'علاج الكلف، تصبغات الشمس، النمش، وآثار حب الشباب البنية الداكنة.', 
            en: 'Treatment of melasma, sun spots, freckles, and dark brown post-acne marks.' 
        },
        pregnancy_safe: true, // الثياميدول يعتبر آمناً (لكن يُفضل دائماً استشارة الطبيب)
        sun_sensitivity: false, // لا يسبب تحسس للضوء، ولكن العلاج يتطلب واقي شمس للنجاح
        notes: { 
            ar: 'العبوة مصممة بغرفتين (الغرفة الوردية للثياميدول، والبيضاء للهيالورونيك). يجب التأكد من خروج المادتين معاً عند الضغط.', 
            en: 'Dual-chamber design (Pink for Thiamidol, White for Hyaluronic). Ensure both dispense simultaneously.' 
        }
    }
});
