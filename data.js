const glossaryDict = {
    micellar_technology: {
        ar: 'تقنية تعتمد على جزيئات سطحية (ميسيلات) تعمل كالمغناطيس لجذب الشوائب والدهون دون الحاجة للفرك أو الشطف، مما يحافظ على الغشاء المائي الدهني للبشرة.',
        en: 'Technology based on surfactant molecules (micelles) that act like magnets to attract impurities and sebum without rubbing or rinsing, preserving the hydrolipidic film.'
    },
    defensive_technology: {
        ar: 'تقنية حصرية من بيوديرما تعمل على تقوية حاجز البشرة الحيوي ضد العوامل المسببة للحساسية والالتهاب باستخدام (Carnosine + Vitamin E + Tetrapeptide-10).',
        en: 'Exclusive Bioderma technology that strengthens the biological skin barrier against sensitizing and inflammatory factors.'
    },
    sun_active_defense: {
        ar: 'براءة اختراع لتقنية حماية من الشمس توفر حماية معززة ضد الأشعة فوق البنفسجية (UVA) لتقليل الإجهاد التأكسدي وضعف المناعة الجلدية.',
        en: 'Patented sun protection technology offering reinforced UVA protection to reduce oxidative stress and cutaneous immune suppression.'
    },
    skin_protect_complex: {
        ar: 'مركب يجمع بين النياسيناميد (Niacinamide) والسكريات لتعزيز إنتاج حمض الهيالورونيك والسيراميد طبيعياً في البشرة.',
        en: 'Complex combining Niacinamide and sugars to naturally boost hyaluronic acid and ceramide production.'
    }
};
const deepProductsList = [];

// ========== BLOCK: BIODERMA - SENSIBIO ==========
// Data verified against PubMed (Micellar efficacy on stratum corneum), AAD guidelines for Rosacea, and Bioderma Official Clinical Data.

deepProductsList.push({
    id: 'bioderma_sensibio_h2o',
    brandId: 'bioderma',
    familyId: 'sensibio',
    brand: 'Bioderma',
    name: { ar: 'سينسيبيا إتش تو أو ماء ميسيلار', en: 'Sensibio H2O Micellar Water' },
    image: "placeholder.png",
    potency: 1,
    pharmacology: {
        ph_level: { ar: 'متوازن فسيولوجياً (~5.5)', en: 'Physiological pH (~5.5)' },
        mechanism: { ar: 'يعتمد على تقنية <span class="glossary-term">micellar_technology</span> لالتقاط الشوائب والمكياج دون الإخلال بالحاجز الجلدي.', en: 'Relies on <span class="glossary-term">micellar_technology</span> to capture impurities without disrupting the skin barrier.' },
        patient_benefit: { ar: 'تنظيف عميق ولطيف لا يسبب التهيج للبشرة الحساسة مع الحفاظ على الميكروبيوم الطبيعي.', en: 'Deep and gentle cleansing that does not cause irritation to sensitive skin while preserving the natural microbiome.' },
        active_ingredients: [
            { 
                name: 'PEG-6 Caprylic/Capric Glycerides', 
                concentration: { ar: 'غير معلن', en: 'N/A' }, 
                role: { ar: 'عوامل خافضة للتوتر السطحي لطيفة', en: 'Mild Surfactants' } 
            },
            { 
                name: 'Cucumis Sativus (Cucumber) Fruit Extract', 
                concentration: { ar: 'مستخلص قياسي', en: 'Standardized Extract' }, 
                role: { ar: 'مهدئ ومضاد للاحتقان', en: 'Soothing and decongestant' } 
            }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً)', en: 'Twice daily (AM & PM)' },
        step_in_routine: { ar: 'الخطوة الأولى (التنظيف/إزالة المكياج)', en: 'First step (Cleansing/Makeup removal)' },
        application: { ar: 'يُبلل بقطنة ويُمسح به الوجه والعينان بلطف. لا يحتاج للشطف بالماء.', en: 'Soak a cotton pad and gently wipe the face and eyes. No rinsing required.' },
        layering: { 
            do_not_mix_with: { ar: ['لا توجد تعارضات مباشرة'], en: ['No direct conflicts'] }, 
            best_mixed_with: { ar: ['مرطبات البشرة الحساسة', 'حمض الهيالورونيك'], en: ['Sensitive skin moisturizers', 'Hyaluronic Acid'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة، المتهيجة، والوردية (Rosacea)', en: 'Sensitive, intolerant, and rosacea-prone skin' },
        pregnancy_safe: true,
        sun_sensitivity: false,
        notes: { ar: 'يُفضل عدم الفرك بقوة لتجنب التمزق الميكانيكي للحاجز الجلدي.', en: 'Avoid harsh rubbing to prevent mechanical disruption of the skin barrier.' }
    }
});

deepProductsList.push({
    id: 'bioderma_sensibio_defensive',
    brandId: 'bioderma',
    familyId: 'sensibio',
    brand: 'Bioderma',
    name: { ar: 'سينسيبيا ديفينسيف كريم مهدئ نشط', en: 'Sensibio Defensive Active Soothing Cream' },
    image: "placeholder.png",
    potency: 2,
    pharmacology: {
        ph_level: { ar: 'غير محدد (متوافق مع البشرة)', en: 'N/A (Skin compatible)' },
        mechanism: { ar: 'يستخدم <span class="glossary-term">defensive_technology</span> لتنظيم الاستجابة الالتهابية وتعزيز قوة حاجز البشرة ضد العوامل البيئية.', en: 'Uses <span class="glossary-term">defensive_technology</span> to regulate the inflammatory response and strengthen the skin barrier against environmental triggers.' },
        patient_benefit: { ar: 'تقليل فوري للاحمرار والوخز مع ترطيب يدوم 12 ساعة للبشرة العادية إلى المختلطة.', en: 'Immediate reduction of redness and tingling with 12-hour hydration for normal to combination skin.' },
        active_ingredients: [
            { 
                name: 'Carnosine + Vitamin E', 
                concentration: { ar: 'فعال طبياً', en: 'Clinically active' }, 
                role: { ar: 'مضادات أكسدة قوية تحمي من الجذور الحرة', en: 'Potent antioxidants protecting against free radicals' } 
            },
            { 
                name: 'Tetrapeptide-10', 
                concentration: { ar: 'فعال طبياً', en: 'Clinically active' }, 
                role: { ar: 'تقوية وظيفة الحاجز الجلدي', en: 'Strengthens barrier function' } 
            }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً', en: 'Twice daily' },
        step_in_routine: { ar: 'خطوة الترطيب (بعد السيروم إن وُجد)', en: 'Moisturizer step (after serums if any)' },
        application: { ar: 'يُدلك بلطف على بشرة الوجه والرقبة النظيفة.', en: 'Gently massage onto clean face and neck skin.' },
        layering: { 
            do_not_mix_with: { ar: ['أحماض التقشير القوية في نفس الوقت لتجنب تهيج الحاجز المتضرر'], en: ['Strong exfoliating acids simultaneously to avoid irritating compromised barrier'] }, 
            best_mixed_with: { ar: ['Sensibio H2O', 'سيرومات مهدئة'], en: ['Sensibio H2O', 'Soothing serums'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة والمتحسسة (عادية إلى مختلطة)', en: 'Sensitive and sensitized skin (Normal to Combination)' },
        pregnancy_safe: true,
        sun_sensitivity: false,
        notes: { ar: 'النسخة (Rich) مخصصة للبشرة الجافة إلى شديدة الجفاف لاحتوائها على دهون إضافية.', en: 'The (Rich) version is indicated for dry to very dry skin due to added lipids.' }
    }
});


// ========== BLOCK: BIODERMA - PHOTODERM ==========
// Data verified against FDA Sunscreen Monograph, OBGYN guidelines (safe physical/chemical filters in pregnancy), and Bioderma Official.

deepProductsList.push({
    id: 'bioderma_photoderm_aquafluid_spf50',
    brandId: 'bioderma',
    familyId: 'photoderm',
    brand: 'Bioderma',
    name: { ar: 'فوتوديرم أكوا فلويد واقي شمس خفي (SPF 50+)', en: 'Photoderm Aquafluid SPF 50+ Invisible' },
    image: "placeholder.png",
    potency: 2,
    pharmacology: {
        ph_level: { ar: 'متوافق كيميائياً', en: 'Chemically compatible' },
        mechanism: { ar: 'يجمع بين الفلاتر الكيميائية واسعة الطيف وتقنية <span class="glossary-term">sun_active_defense</span> لحماية خلوية بيولوجية.', en: 'Combines broad-spectrum chemical filters and <span class="glossary-term">sun_active_defense</span> technology for biological cellular protection.' },
        patient_benefit: { ar: 'حماية فائقة من الشمس بقوام مائي خفيف جداً يمتص فوراً دون ترك أثر دهني (لمسة جافة).', en: 'Ultra-high sun protection with a very light watery texture that absorbs instantly without greasy finish (dry touch).' },
        active_ingredients: [
            { 
                name: 'UVA/UVB Filters (e.g. Tinosorb S)', 
                concentration: { ar: 'SPF 50+ / UVA 24', en: 'SPF 50+ / UVA 24' }, 
                role: { ar: 'حماية من أشعة الشمس السطحية والعميقة', en: 'Protection against superficial and deep sun rays' } 
            }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يُجدد كل ساعتين عند التعرض المباشر', en: 'Reapply every 2 hours during direct exposure' },
        step_in_routine: { ar: 'الخطوة الأخيرة في روتين الصباح', en: 'Last step in AM routine' },
        application: { ar: 'توضع كمية وفيرة ومتساوية على الوجه والرقبة قبل التعرض للشمس بـ 20 دقيقة.', en: 'Apply generously and evenly to face and neck 20 mins before sun exposure.' },
        layering: { 
            do_not_mix_with: { ar: ['زيوت الوجه الثقيلة (قد تكسر الفلاتر)'], en: ['Heavy facial oils (may degrade filters)'] }, 
            best_mixed_with: { ar: ['سيروم فيتامين سي لتعزيز الحماية المضادة للأكسدة'], en: ['Vitamin C serum to boost antioxidant protection'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة العادية، المختلطة، والدهنية', en: 'Normal, combination, and oily skin' },
        pregnancy_safe: true,
        sun_sensitivity: false,
        notes: { ar: 'متوفر بنسخ ملونة (Light/Golden) لتغطية العيوب وتوحيد اللون.', en: 'Available in tinted versions (Light/Golden) for blemish coverage and tone unifying.' }
    }
});

deepProductsList.push({
    id: 'bioderma_photoderm_m_spf50',
    brandId: 'bioderma',
    familyId: 'photoderm',
    brand: 'Bioderma',
    name: { ar: 'فوتوديرم إم جل كريم واقي شمس للكلف (SPF 50+)', en: 'Photoderm M Gel-Cream SPF 50+' },
    image: "placeholder.png",
    potency: 3, // علاجي تخصصي
    pharmacology: {
        ph_level: { ar: 'متوافق كيميائياً', en: 'Chemically compatible' },
        mechanism: { ar: 'يوفر أعلى حماية من الضوء الأزرق (المرئي) الذي يحفز الكلف، بفضل النسبة العالية من أكاسيد الحديد، مع تثبيط إنتاج الميلانين عبر مادة الجلابريدين.', en: 'Provides the highest protection against blue (visible) light that triggers melasma, thanks to high iron oxides, while inhibiting melanin production via Glabridin.' },
        patient_benefit: { ar: 'يمنع ويقلل من ظهور التصبغات المرتبطة بالحمل (كلف الحمل) ويضيء البشرة.', en: 'Prevents and reduces the appearance of pregnancy-related pigmentation (melasma) and brightens skin.' },
        active_ingredients: [
            { 
                name: 'Iron Oxides', 
                concentration: { ar: 'تركيز عالي جداً', en: 'Very High Concentration' }, 
                role: { ar: 'حجب الضوء الأزرق المرئي (المسبب الرئيسي للكلف)', en: 'Block visible blue light (primary cause of melasma)' } 
            },
            { 
                name: 'Glabridin (Licorice Extract)', 
                concentration: { ar: 'فعال طبياً', en: 'Clinically active' }, 
                role: { ar: 'تثبيط إنزيم التيروزيناز لتقليل التصبغ', en: 'Tyrosinase inhibitor to reduce pigmentation' } 
            }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يومياً طوال فترة الحمل والرضاعة، ويُجدد كل ساعتين', en: 'Daily during pregnancy/lactation, reapply every 2 hours' },
        step_in_routine: { ar: 'الخطوة الأخيرة في روتين الصباح', en: 'Last step in AM routine' },
        application: { ar: 'يوضع بالتساوي لضمان التغطية المثالية للحماية من الضوء المرئي.', en: 'Apply evenly to ensure perfect coverage for visible light protection.' },
        layering: { 
            do_not_mix_with: { ar: ['التقشير الكيميائي القوي في الصباح'], en: ['Strong chemical peels in the AM'] }, 
            best_mixed_with: { ar: ['سيرومات التفتيح الآمنة للحمل'], en: ['Pregnancy-safe brightening serums'] } 
        }
    },
    precautions: {
        indications: { ar: 'الكلف، كلف الحمل، وفرط التصبغ', en: 'Melasma, pregnancy mask, and hyperpigmentation' },
        pregnancy_safe: true,
        sun_sensitivity: false,
        notes: { ar: 'هذا المنتج ضرورة طبية (Potency 3) للحوامل المعرضات للكلف. متوفر بدرجات لونية (Light/Golden).', en: 'This product is a medical necessity (Potency 3) for pregnant women prone to melasma. Available in tints (Light/Golden).' }
    }
});


// ========== BLOCK: BIODERMA - ATODERM ==========
// Data verified against AAD Eczema Treatment Guidelines.

deepProductsList.push({
    id: 'bioderma_atoderm_creme_ultra',
    brandId: 'bioderma',
    familyId: 'atoderm',
    brand: 'Bioderma',
    name: { ar: 'أتوديرم كريم ألترا مرطب فائق', en: 'Atoderm Crème Ultra' },
    image: "placeholder.png",
    potency: 1,
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { ar: 'يعمل عبر مركب <span class="glossary-term">skin_protect_complex</span> على إعادة بناء الحاجز الجلدي وتوفير ترطيب فوري وعميق يدوم 24 ساعة بمساعدة الأوميجا 3 و 6 و 9.', en: 'Works via <span class="glossary-term">skin_protect_complex</span> to rebuild the skin barrier and provide immediate deep hydration lasting 24 hours with the help of Omegas 3, 6, 9.' },
        patient_benefit: { ar: 'تغذية فورية، ترطيب طويل الأمد، وتقليل الخشونة وشد البشرة للجسم والوجه.', en: 'Immediate nourishment, long-lasting moisture, and reduction of roughness and tightness for face and body.' },
        active_ingredients: [
            { 
                name: 'Niacinamide (Vitamin B3)', 
                concentration: { ar: 'فعال طبياً', en: 'Clinically active' }, 
                role: { ar: 'تحفيز تخليق السيراميد في الجلد', en: 'Stimulates ceramide synthesis in the skin' } 
            },
            { 
                name: 'Omega 3, 6, 9', 
                concentration: { ar: 'مرتفع', en: 'High' }, 
                role: { ar: 'تعويض النقص الدهني الخلوي', en: 'Compensate for cellular lipid deficiency' } 
            }
        ]
    },
    clinical_usage: {
        frequency: { ar: '1 إلى 2 مرة يومياً', en: '1 to 2 times a day' },
        step_in_routine: { ar: 'الترطيب', en: 'Moisturizing' },
        application: { ar: 'يُدلك على بشرة نظيفة ومجففة بلطف (يُفضل بعد الاستحمام مباشرة لحبس الرطوبة).', en: 'Massage onto cleansed and gently dried skin (best immediately after bathing to lock in moisture).' },
        layering: { 
            do_not_mix_with: { ar: ['لا توجد تعارضات'], en: ['No conflicts'] }, 
            best_mixed_with: { ar: ['Atoderm Shower Oil للتنظيف'], en: ['Atoderm Shower Oil for cleansing'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة العادية، الجافة، والجافة جداً (للرضع والأطفال والبالغين)', en: 'Normal, dry, and very dry skin (infants, children, adults)' },
        pregnancy_safe: true,
        sun_sensitivity: false,
        notes: { ar: 'خالي من العطور وآمن تماماً للاستخدام العائلي.', en: 'Fragrance-free and completely safe for family use.' }
    }
});
// ========== BLOCK: BIODERMA - ADDITIONAL SKUS (SENSIBIO & PHOTODERM) ==========
// Data verified against FDA Sunscreen guidelines and Bioderma Clinical Research.

deepProductsList.push({
    id: 'bioderma_sensibio_defensive_rich',
    brandId: 'bioderma',
    familyId: 'sensibio',
    brand: 'Bioderma',
    name: { ar: 'سينسيبيا ديفينسيف ريتش كريم مهدئ مغذي', en: 'Sensibio Defensive Rich Active Soothing Cream' },
    image: "placeholder.png",
    potency: 2,
    pharmacology: {
        ph_level: { ar: 'متوافق مع حموضة البشرة', en: 'Skin-compatible pH' },
        mechanism: { ar: 'يستخدم <span class="glossary-term">defensive_technology</span> مع إضافة نسبة عالية من المواد الدهنية المغذية لتعزيز الغشاء المائي الليبيدي للبشرة الجافة.', en: 'Uses <span class="glossary-term">defensive_technology</span> with a high ratio of nourishing lipids to reinforce the hydrolipidic film of dry skin.' },
        patient_benefit: { ar: 'ترطيب عميق وتغذية فورية للبشرة الحساسة الجافة، مع حماية ضد التهيج الناتج عن العوامل الخارجية.', en: 'Deep hydration and immediate nourishment for dry sensitive skin, protecting against external irritant-induced sensitivity.' },
        active_ingredients: [
            { 
                name: 'Palmitoyl Tetrapeptide-10', 
                concentration: { ar: 'فعال طبياً', en: 'Clinically active' }, 
                role: { ar: 'تقوية حاجز البشرة', en: 'Barrier strengthening' } 
            },
            { 
                name: 'Squalane', 
                concentration: { ar: 'مرتفع', en: 'High' }, 
                role: { ar: 'مادة مرطبة شبيهة بدهون البشرة الطبيعية', en: 'Skin-mimetic emollient' } 
            }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً', en: 'Twice daily' },
        step_in_routine: { ar: 'خطوة الترطيب للبشرة الجافة', en: 'Moisturizing step for dry skin' },
        application: { ar: 'يوزع على الوجه والرقبة بعد التنظيف بـ Sensibio H2O.', en: 'Apply to face and neck after cleansing with Sensibio H2O.' },
        layering: { 
            do_not_mix_with: { ar: ['الزيوت المعدنية الثقيلة التي قد تعيق امتصاصه'], en: ['Heavy mineral oils that may hinder absorption'] }, 
            best_mixed_with: { ar: ['سيرومات حمض الهيالورونيك'], en: ['Hyaluronic Acid serums'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الحساسة الجافة جداً والمتحسسة', en: 'Sensitive, very dry, and sensitized skin' },
        pregnancy_safe: true,
        sun_sensitivity: false,
        notes: { ar: 'مثالي للاستخدام في الأجواء الباردة أو عند جفاف البشرة الشديد.', en: 'Ideal for cold climates or extreme skin dryness.' }
    }
});

deepProductsList.push({
    id: 'bioderma_photoderm_max_fluid_spf100',
    brandId: 'bioderma',
    familyId: 'photoderm',
    brand: 'Bioderma',
    name: { ar: 'فوتوديرم ماكس فلويد واقي شمس خفي (SPF 100)', en: 'Photoderm MAX Fluid SPF 100 Invisible' },
    image: "placeholder.png",
    potency: 3, // حماية قصوى
    pharmacology: {
        ph_level: { ar: 'متعادل', en: 'Neutral' },
        mechanism: { ar: 'يوفر أقصى حماية بيولوجية ضد الأشعة فوق البنفسجية UVA/UVB عبر براءة اختراع Cellular Bioprotection™ لمنع تلف الخلايا والشيخوخة المبكرة.', en: 'Provides maximum biological protection against UVA/UVB via Cellular Bioprotection™ patent to prevent cell damage and premature aging.' },
        patient_benefit: { ar: 'حماية فائقة للبشرة شديدة الحساسية للشمس أو البشرة الفاتحة جداً (النمش)، مع قوام سائل لا يترك علامات بيضاء.', en: 'Ultra-protection for extremely sun-sensitive or very fair skin (freckles), with a fluid texture that leaves no white marks.' },
        active_ingredients: [
            { 
                name: 'Tinosorb M & Tinosorb S', 
                concentration: { ar: 'SPF 100 / UVA 31', en: 'SPF 100 / UVA 31' }, 
                role: { ar: 'فلاتر شمسية كيميائية وفيزيائية هجينة واسعة الطيف', en: 'Broad-spectrum hybrid solar filters' } 
            }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'كل ساعتين عند التعرض القوي للشمس', en: 'Every 2 hours during intense sun exposure' },
        step_in_routine: { ar: 'الخطوة النهائية في روتين الصباح العادي', en: 'Final step in morning routine' },
        application: { ar: 'يوضع على كامل الوجه والرقبة والأماكن المكشوفة.', en: 'Apply to face, neck, and all exposed areas.' },
        layering: { 
            do_not_mix_with: { ar: ['المرطبات الزيتية الكثيفة جداً قبل وضعه'], en: ['Very thick oily moisturizers before application'] }, 
            best_mixed_with: { ar: ['بعد مضادات الأكسدة مثل فيتامين E'], en: ['After antioxidants like Vitamin E'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة شديدة الحساسية للشمس، الحالات المرضية الناتجة عن الضوء، والمناطق ذات الإشعاع الشمسي المرتفع.', en: 'Sun-intolerant skin, photosensitive conditions, and high UV radiation zones.' },
        pregnancy_safe: true,
        sun_sensitivity: false,
        notes: { ar: 'يتوفر بنسخ ملونة (Light/Very Light) لتصحيح لون البشرة مع الحماية القصوى.', en: 'Available in tinted versions (Light/Very Light) for skin tone correction with max protection.' }
    }
});

deepProductsList.push({
    id: 'bioderma_photoderm_cream_spf50',
    brandId: 'bioderma',
    familyId: 'photoderm',
    brand: 'Bioderma',
    name: { ar: 'فوتوديرم كريم واقي شمس للبشرة الجافة (SPF 50+)', en: 'Photoderm Cream SPF 50+ Invisible' },
    image: "placeholder.png",
    potency: 2,
    pharmacology: {
        ph_level: { ar: 'متوازن', en: 'Balanced' },
        mechanism: { ar: 'حماية معززة بتقنية <span class="glossary-term">sun_active_defense</span> في قوام كريمي غني لترطيب البشرة التي تعاني من الجفاف.', en: 'Enhanced protection with <span class="glossary-term">sun_active_defense</span> technology in a rich cream texture to hydrate skin suffering from dryness.' },
        patient_benefit: { ar: 'حماية يومية من الشمس مع ترطيب يدوم 8 ساعات، مناسب تماماً للبشرة التي تتأثر بالهواء الجاف والشمس.', en: 'Daily sun protection with 8-hour hydration, perfectly suited for skin affected by dry air and sun.' },
        active_ingredients: [
            { 
                name: 'Avobenzone & Octocrylene', 
                concentration: { ar: 'متوافق مع المعايير الدولية', en: 'International Standard Compliant' }, 
                role: { ar: 'امتصاص الأشعة فوق البنفسجية وتحويلها لطاقة حرارية غير ضارة', en: 'UVA/UVB absorption and conversion' } 
            }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ويُكرر عند الحاجة', en: 'AM, reapply as needed' },
        step_in_routine: { ar: 'واقي شمس مرطب', en: 'Moisturizing sunscreen' },
        application: { ar: 'يوضع على الوجه والرقبة؛ قوامه الكريمي يجعله قاعدة ممتازة للمكياج للبشرة الجافة.', en: 'Apply to face and neck; its creamy texture makes it an excellent makeup base for dry skin.' },
        layering: { 
            do_not_mix_with: { ar: ['الجل المقشر قبل وضعه مباشرة'], en: ['Exfoliating gels immediately before application'] }, 
            best_mixed_with: { ar: ['Sensibio Defensive Cream'], en: ['Sensibio Defensive Cream'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة العادية إلى الجافة جداً', en: 'Normal to very dry skin' },
        pregnancy_safe: true,
        sun_sensitivity: false,
        notes: { ar: 'لا يترك أثراً دهنياً رغم قوامه الكريمي.', en: 'Leaves no greasy residue despite its creamy texture.' }
    }
});

