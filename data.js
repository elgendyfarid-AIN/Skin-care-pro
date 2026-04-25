// ==========================================
// 🧪 3. المنتجات السريرية لـ La Roche-Posay (المجموعة 1 من 1 إلى 6)
// ==========================================

// [1] EFFACLAR DUO (+)
window.deepProductsList.push({
    id: 'lrp_effaclar_duo', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار ديو (+)', en: 'Effaclar Duo (+)' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { 
            ar: '5.5 (متوازن مع الغلاف الحمضي للحفاظ على قوة البكتيريا النافعة وتثبيط الضارة)', 
            en: '5.5 (Balanced with acid mantle to maintain beneficial bacteria and inhibit harmful ones)' 
        },
        mechanism: { 
            ar: 'استهداف بكتيريا <span class="glossary-term" onclick="openGlossary(\'c_acnes\')">C.acnes</span> ومنع تكوين <span class="glossary-term" onclick="openGlossary(\'biofilms\')">الأغشية الحيوية</span>، مع تقشير دقيق لمنع انسداد المسام وتقليل <span class="glossary-term" onclick="openGlossary(\'pih\')">التصبغات (PIH)</span>.', 
            en: 'Targets <span class="glossary-term" onclick="openGlossary(\'c_acnes\')">C.acnes</span> bacteria and prevents the formation of <span class="glossary-term" onclick="openGlossary(\'biofilms\')">Biofilms</span>, with precise micro-exfoliation to prevent clogged pores and reduce <span class="glossary-term" onclick="openGlossary(\'pih\')">PIH</span>.' 
        },
        patient_benefit: { 
            ar: '💡 <b>سريرياً:</b> لا يعالج الحبة فقط، بل يمنع تكونها من الأساس (Anti-relapse). الأهم أنه يمنع الحبة الحمراء من أن تترك بقعة بنية عنيدة بعد جفافها.', 
            en: '💡 <b>Clinically:</b> Does not just treat the pimple, it prevents its formation (Anti-relapse). Crucially, it stops red pimples from leaving stubborn brown marks.' 
        },
        active_ingredients: [
            { name: 'Niacinamide', concentration: '4%', role: { ar: 'مضاد للالتهاب ويهدئ الاحمرار بقوة.', en: 'Anti-inflammatory, strongly soothes redness.' } },
            { name: 'LHA', concentration: '0.3%', role: { ar: 'مقشر <span class="glossary-term" onclick="openGlossary(\'lha\')">LHA</span> يخترق المسام ببطء ولطف لتنظيفها دون تهيج.', en: 'A <span class="glossary-term" onclick="openGlossary(\'lha\')">LHA</span> exfoliator that slowly and gently penetrates pores without irritation.' } },
            { name: 'Salicylic Acid', concentration: '0.5%', role: { ar: 'يعمل بخاصية <span class="glossary-term" onclick="openGlossary(\'keratolytic\')">تحلل القرنية</span> لتذويب الدهون المتصلبة.', en: 'Provides <span class="glossary-term" onclick="openGlossary(\'keratolytic\')">Keratolytic</span> action to dissolve hardened sebum.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة مساءً (يمكن زيادتها لمرتين إذا تحملت البشرة).', en: 'Once daily PM (can increase to twice if tolerated).' },
        expected_duration: { 
            ar: 'تظهر النتائج الأولية (تقليل الاحمرار) خلال 12 ساعة، ويقل حجم الحبوب بشكل ملحوظ خلال 8 أيام. يستخدم ككورس لمدة 4 أسابيع متتالية.', 
            en: 'Initial results (reduced redness) within 12 hours, significant reduction in pimple size in 8 days. Use as a 4-week consecutive course.' 
        },
        step_in_routine: { ar: 'خطوة العلاج (بعد الغسول وقبل المرطب).', en: 'Treatment Step (After cleanser, before moisturizer).' },
        routine_step_number: 2,
        application: { 
            ar: 'توزع طبقة رقيقة على كامل الوجه لتنظيف المسام الخفية. <b>تريند العيادات:</b> لا يُستخدم كنقطة علاجية (Spot Treatment) فقط، بل على كامل منطقة المشكلة.', 
            en: 'Apply a thin layer over the entire face to clear hidden pores. <b>Clinic Trend:</b> Do not use as a Spot Treatment only, apply to the whole problem area.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات كيميائية قوية (AHA/BHA)', 'الريتينول'], en: ['Strong chemical exfoliants (AHA/BHA)', 'Retinol'] }, 
            best_mixed_with: { ar: ['غسول إيفاكلار', 'واقي شمس أنثيليوس (إلزامي صباحاً)'], en: ['Effaclar Cleanser', 'Anthelios SPF (Mandatory AM)'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب الخفيف إلى المتوسط، الرؤوس السوداء، والآثار الحمراء بعد الحبوب.', en: 'Mild to moderate acne, blackheads, and post-acne red marks.' },
        pregnancy_safe: false, 
        sun_sensitivity: true, 
        notes: { 
            ar: '<b>نصيحة ذهبية:</b> في الأسبوع الأول، قد تشعرين بوخز خفيف، هذا طبيعي لأن المسام تنفتح. إذا كان الجفاف شديداً، استخدمي تقنية <span class="glossary-term" onclick="alert(\'تقنية الساندويتش: وضع طبقة مرطب خفيف، ثم العلاج، ثم طبقة مرطب أخرى.\')">الساندويتش (Sandwich)</span> مع مرطب خفيف.', 
            en: '<b>Golden Pearl:</b> Mild tingling in the first week is normal as pores unclog. If dryness is severe, use the <span class="glossary-term" onclick="alert(\'Sandwich Technique: Light moisturizer, then treatment, then moisturizer again.\')">Sandwich Technique</span> with a light moisturizer.' 
        }
    }
});

// [2] EFFACLAR PURIFYING FOAMING GEL
window.deepProductsList.push({
    id: 'lrp_effaclar_gel', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار جل غسول رغوي منقي', en: 'Effaclar Purifying Foaming Gel' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { 
            ar: '5.5 (فسيولوجي لمنع تجريد البشرة من زيوتها الطبيعية الواقية)', 
            en: '5.5 (Physiological to prevent stripping the skin of its natural protective oils)' 
        },
        mechanism: { 
            ar: 'ينظف البشرة بلطف بفضل عوامل التنظيف المختارة للبشرة الحساسة، ويزيل الشوائب والزهم الزائد بفضل الزنك، مع الحفاظ على <span class="glossary-term" onclick="openGlossary(\'microbiome_science\')">الميكروبيوم</span>.', 
            en: 'Gently cleanses the skin with agents selected for sensitive skin. Eliminates impurities and excess sebum with Zinc, while preserving the <span class="glossary-term" onclick="openGlossary(\'microbiome_science\')">Microbiome</span>.' 
        },
        patient_benefit: { 
            ar: '💡 <b>سريرياً:</b> ينظم إفراز الدهون دون أن يترك شعوراً بشد البشرة أو "نظافة التزييق" (Squeaky clean) التي تدمر حاجز البشرة.', 
            en: '💡 <b>Clinically:</b> Regulates sebum production without leaving a tight or "squeaky clean" feeling that destroys the skin barrier.' 
        },
        active_ingredients: [
            { name: 'Zinc PCA', concentration: 'Active | فعال', role: { ar: 'يقلل اللمعان وله خصائص قوية مضادة للبكتيريا.', en: 'Reduces shine with strong antibacterial properties.' } },
            { name: 'Thermal Spring Water', concentration: 'Base | أساسي', role: { ar: 'مياه حرارية مهدئة غنية بالمعادن لتخفيف التهيج.', en: 'Soothing mineral-rich thermal water to reduce irritation.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً).', en: 'Twice daily (Morning and Evening).' },
        expected_duration: { 
            ar: 'يمكن استخدامه بشكل دائم كجزء من الروتين اليومي للحفاظ على نظافة المسام.', 
            en: 'Can be used continuously as part of the daily routine to maintain clear pores.' 
        },
        step_in_routine: { ar: 'الخطوة 1 (التنظيف).', en: 'Step 1 (Cleansing).' },
        routine_step_number: 1,
        application: { 
            ar: '<b>قاعدة الـ 60 ثانية:</b> يُرغى بماء فاتر ويُدلك بلطف لمدة 60 ثانية كاملة للسماح للزنك بالعمل، ثم يُشطف بماء بارد لغلق المسام.', 
            en: '<b>60-Second Rule:</b> Lather with lukewarm water and massage gently for a full 60 seconds to let Zinc work, then rinse with cool water to close pores.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['فرش التنظيف القاسية (تُهيج الغدد الدهنية وتزيد الحبوب).'], en: ['Harsh cleansing brushes (irritates sebaceous glands and worsens acne).'] }, 
            best_mixed_with: { ar: ['إيفاكلار ديو (+)', 'مرطبات السيراميد'], en: ['Effaclar Duo (+)', 'Ceramide moisturizers'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة الدهنية، المختلطة، والمعرضة لحب الشباب واللمعان.', en: 'Oily, combination, acne-prone skin, and excess shine.' },
        pregnancy_safe: true, 
        sun_sensitivity: false, 
        notes: { 
            ar: '<b>نصيحة ذهبية:</b> إذا كانت بشرتك دهنية جداً، لا تغسلها 3 مرات في اليوم! الغسيل المفرط يُحفز الغدد لفرز دهون تعويضية مضاعفة. التزم بمرتين فقط.', 
            en: '<b>Golden Pearl:</b> If you are very oily, do not wash 3 times a day! Over-washing triggers glands to produce double compensatory oil. Stick to twice only.' 
        }
    }
});

// [3] EFFACLAR ULTRA CONCENTRATED SERUM
window.deepProductsList.push({
    id: 'lrp_effaclar_serum', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار سيروم التقشير المركز', en: 'Effaclar Ultra Concentrated Serum' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { 
            ar: 'حامضي (<4.0) لضمان فعالية الأحماض في التقشير', 
            en: 'Acidic (<4.0) to ensure acid efficacy in exfoliation' 
        },
        mechanism: { 
            ar: 'مركب ثلاثي الأحماض <span class="glossary-term" onclick="openGlossary(\'aha_bha\')">(AHA/BHA/LHA)</span> يعمل بآلية تآزرية؛ حمض الجليكوليك يقشر السطح، والساليسيليك ينظف العمق، والنياسيناميد يرمم الحاجز.', 
            en: 'A tri-acid complex <span class="glossary-term" onclick="openGlossary(\'aha_bha\')">(AHA/BHA/LHA)</span> works synergistically; Glycolic exfoliates the surface, Salicylic clears depth, and Niacinamide repairs the barrier.' 
        },
        patient_benefit: { 
            ar: '💡 <b>سريرياً:</b> يستهدف "حب الشباب لدى البالغين" الذي يترك تصبغات وتجاعيد دقيقة معاً. يوفر تأثيراً مشابهاً للتقشير الكيميائي الخفيف في العيادة.', 
            en: '💡 <b>Clinically:</b> Targets "Adult Acne" which leaves pigmentation and fine wrinkles together. Provides an effect similar to a light in-clinic chemical peel.' 
        },
        active_ingredients: [
            { name: 'Glycolic Acid (AHA)', concentration: '3.5%', role: { ar: 'تقشير الخلايا السطحية وتفتيح التصبغات.', en: 'Surface cell exfoliation and brightening pigmentation.' } },
            { name: 'Salicylic Acid (BHA)', concentration: '1.5%', role: { ar: 'تذويب دهون المسام العميقة.', en: 'Dissolving deep pore sebum.' } },
            { name: 'Niacinamide', concentration: '2%', role: { ar: 'تهدئة التهيجات وتقوية الدرع الجلدي.', en: 'Soothing irritations and strengthening the skin shield.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'يبدأ من 2-3 مرات أسبوعياً، ويمكن زيادته ليومياً (مساءً فقط) حسب التحمل.', en: 'Start with 2-3 times a week, can increase to daily (PM only) as tolerated.' },
        expected_duration: { 
            ar: 'كورس علاجي مكثف يستمر من شهرين إلى 3 أشهر. تظهر النضارة من أول أسبوع، وتتلاشى التصبغات تدريجياً.', 
            en: 'Intensive treatment course lasting 2 to 3 months. Radiance appears in week 1, pigmentation fades gradually.' 
        },
        step_in_routine: { ar: 'خطوة السيروم (قبل المرطب).', en: 'Serum step (Before moisturizer).' },
        routine_step_number: 2,
        application: { 
            ar: 'توضع 3-4 قطرات على وجه نظيف تماماً <b>(وجاف تماماً لتجنب التهيج)</b>. <b>تريند العيادات:</b> مثالي لتطبيقه في بروتوكول الـ (Skin Cycling) في ليلة التقشير.', 
            en: 'Apply 3-4 drops to a perfectly clean <b>(and totally dry)</b> face. <b>Clinic Trend:</b> Ideal for integration into a (Skin Cycling) protocol on exfoliation night.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['أي مقشرات أخرى', 'الريتينول (في نفس الليلة)', 'فيتامين سي النقي'], en: ['Any other exfoliants', 'Retinol (same night)', 'Pure Vitamin C'] }, 
            best_mixed_with: { ar: ['مرطب غني بالسيراميد', 'واقي شمس (حتمي في اليوم التالي)'], en: ['Ceramide-rich moisturizer', 'SPF (Mandatory next day)'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب لدى البالغين، المسام الواسعة الخشنة، التصبغات العنيدة بعد الحبوب.', en: 'Adult acne, rough enlarged pores, persistent post-acne pigmentation.' },
        pregnancy_safe: false, 
        sun_sensitivity: true, 
        notes: { 
            ar: '<b>نصيحة ذهبية:</b> إذا شعرتِ بتهيج مستمر، اغسلي السيروم بعد 15 دقيقة من تطبيقه (تقنية Short Contact Therapy) للاستفادة منه دون أضرار.', 
            en: '<b>Golden Pearl:</b> If persistent irritation occurs, wash the serum off after 15 minutes (Short Contact Therapy) to gain benefits without damage.' 
        }
    }
});

// [4] EFFACLAR H ISO-BIOME CREAM
window.deepProductsList.push({
    id: 'lrp_effaclar_h_isobiome', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار H إيزو-بايوم (كريم مرطب معوض)', en: 'Effaclar H Iso-Biome Care Cream' }, image: "", potency: 2, 
    pharmacology: {
        ph_level: { 
            ar: '5.5 (لطيف لتهدئة الجلد المعالج بالروكيوتان)', 
            en: '5.5 (Gentle to soothe Roaccutane-treated skin)' 
        },
        mechanism: { 
            ar: 'يرمم الحاجز الجلدي المدمر ويستعيد توازن <span class="glossary-term" onclick="openGlossary(\'microbiome_science\')">الميكروبيوم</span> عبر تقنية <span class="glossary-term" onclick="openGlossary(\'aqua_posae_filiformis\')">APF</span>، مع توفير دهون تعويضية تحاكي دهون البشرة الطبيعية.', 
            en: 'Repairs the destroyed skin barrier and restores <span class="glossary-term" onclick="openGlossary(\'microbiome_science\')">Microbiome</span> balance via <span class="glossary-term" onclick="openGlossary(\'aqua_posae_filiformis\')">APF</span> tech, providing compensatory lipids mimicking natural skin fat.' 
        },
        patient_benefit: { 
            ar: '💡 <b>سريرياً:</b> راحة فورية بنسبة 80% من الجفاف، التشقق، وتقشر الوجه الذي يصاحب كورسات علاج حب الشباب الفموية القاسية.', 
            en: '💡 <b>Clinically:</b> 80% instant relief from severe dryness, cracking, and flaking associated with harsh oral acne treatments.' 
        },
        active_ingredients: [
            { name: 'Aqua Posae Filiformis', concentration: 'Active | فعال', role: { ar: 'براءة اختراع لإعادة توازن البكتيريا النافعة.', en: 'Patented ingredient to rebalance beneficial bacteria.' } },
            { name: 'Squalane + Ceramide', concentration: 'High | عالي', role: { ar: 'سد الفجوات في حاجز الجلد ومنع تبخر الماء.', en: 'Filling gaps in the skin barrier and preventing water loss.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'صباحاً ومساءً طوال فترة العلاج الطبي.', en: 'Morning and evening throughout the medical treatment period.' },
        expected_duration: { 
            ar: 'يُستخدم طوال أشهر كورس العلاج (مثل الروكيوتان) ويستمر لشهر بعد توقف العلاج لضمان ترميم كامل للحاجز.', 
            en: 'Used throughout the entire oral course (like Roaccutane) and for one month after to ensure full barrier repair.' 
        },
        step_in_routine: { ar: 'الترطيب (الخطوة الأخيرة قبل الواقي).', en: 'Moisturization (Final step before SPF).' },
        routine_step_number: 3,
        application: { 
            ar: 'يوضع بلطف دون فرك عنيف لتجنب تقشير الجلد الحساس. <b>تريند العيادات:</b> ممتاز كمرطب أساسي لتقنية (Slugging) الخفيفة فوق الريتينول لتقليل أضراره.', 
            en: 'Apply gently without harsh rubbing to avoid peeling sensitive skin. <b>Clinic Trend:</b> Excellent as a base moisturizer for light (Slugging) over retinol to reduce side effects.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['مقشرات إضافية (البشرة لا تتحملها أصلاً).'], en: ['Additional exfoliants (skin cannot tolerate them anyway).'] }, 
            best_mixed_with: { ar: ['أدوية حب الشباب الموصوفة كمعوض للجفاف (الروكيوتان/النت-لوك).'], en: ['Prescription acne meds to compensate for dryness (Roaccutane).'] } 
        }
    },
    precautions: {
        indications: { ar: 'البشرة المعرضة للحبوب والتي أصيبت بجفاف وتقشر شديد بسبب العلاجات الطبية.', en: 'Acne-prone skin severely dried and flaking due to medical treatments.' },
        pregnancy_safe: true, 
        sun_sensitivity: false, 
        notes: { 
            ar: '<b>نصيحة ذهبية:</b> رغم أنه مخصص للبشرة الجافة بسبب العلاج، إلا أن تركيبته (غير زؤانية) ومستحيل أن تسد المسام أو تسبب حبوباً جديدة.', 
            en: '<b>Golden Pearl:</b> Although intended for medically-dried skin, its formula is non-comedogenic and will absolutely not clog pores or cause new acne.' 
        }
    }
});

// [5] EFFACLAR MICRO-PEELING PURIFYING GEL
window.deepProductsList.push({
    id: 'lrp_effaclar_micro_peeling', brandId: 'laroche', familyId: 'effaclar', brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار مايكرو-بيلينج (غسول مقشر دقيق)', en: 'Effaclar Micro-Peeling Purifying Gel' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { 
            ar: 'قريب من الفسيولوجي مع لمسة حمضية للتقشير', 
            en: 'Near physiological with an acidic touch for exfoliation' 
        },
        mechanism: { 
            ar: 'قوة تقشير كيميائي مزدوجة تجمع بين حمض الساليسيليك (2%) و <span class="glossary-term" onclick="openGlossary(\'lha\')">LHA</span> لاختراق المسام السميكة (كالظهر) وتنظيفها من الدهون المتصلبة.', 
            en: 'Dual chemical exfoliation combining 2% Salicylic Acid and <span class="glossary-term" onclick="openGlossary(\'lha\')">LHA</span> to penetrate thick pores (like the back) and clear hardened sebum.' 
        },
        patient_benefit: { 
            ar: '💡 <b>سريرياً:</b> ينقذ مرضى حب الشباب العنيد في الجسم (الظهر والصدر). يقلل الإفرازات الدهنية ويزيل آثار الحبوب المتبقية.', 
            en: '💡 <b>Clinically:</b> Rescues patients with stubborn body acne (back and chest). Reduces sebum output and clears residual marks.' 
        },
        active_ingredients: [
            { name: 'Salicylic Acid (BHA)', concentration: '2%', role: { ar: 'التركيز الذهبي لفتح المسام وتقشير عميق.', en: 'The golden concentration for unclogging pores and deep exfoliation.' } },
            { name: 'LHA', concentration: '0.05%', role: { ar: 'تقشير سطحي ناعم يكمل عمل الساليسيليك.', en: 'Gentle surface exfoliation complementing Salicylic acid.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرة واحدة يومياً للوجه، أو في كل استحمام للجسم.', en: 'Once daily for face, or during every shower for the body.' },
        expected_duration: { 
            ar: 'كورس علاج لحبوب الجسم يمتد من 4 إلى 8 أسابيع. يمكن استخدامه للوجه من 2-3 مرات أسبوعياً كعناية مكثفة.', 
            en: 'Body acne treatment course lasts 4 to 8 weeks. Can be used on the face 2-3 times a week as intensive care.' 
        },
        step_in_routine: { ar: 'التنظيف العلاجي.', en: 'Therapeutic Cleansing.' },
        routine_step_number: 1,
        application: { 
            ar: 'يُرغى على بشرة مبللة، يُترك دقيقتين ليتفاعل الساليسيليك (Contact Therapy)، ثم يُشطف جيداً.', 
            en: 'Lather on wet skin, leave for 2 minutes to let Salicylic react (Contact Therapy), then rinse well.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['أحماض تقشير ليف-إن (يُترك على البشرة) في نفس الروتين لتجنب الحرق.'], en: ['Leave-in peeling acids in the same routine to avoid chemical burns.'] }, 
            best_mixed_with: { ar: ['مرطبات خفيفة', 'لوشن تفتيح للجسم'], en: ['Light moisturizers', 'Body brightening lotions'] } 
        }
    },
    precautions: {
        indications: { ar: 'حب الشباب الشديد، حبوب الظهر والصدر، الكيراتين المتصلب (جلد الوزة الخفيف).', en: 'Severe acne, back and chest acne, Keratosis Pilaris (mild).' },
        pregnancy_safe: false, 
        sun_sensitivity: true, 
        notes: { 
            ar: '<b>نصيحة ذهبية:</b> ممتاز جداً بعد التعرق الشديد في الجيم لمنع انسداد مسام الظهر (Bacne).', 
            en: '<b>Golden Pearl:</b> Excellent after heavy sweating at the gym to prevent back acne (Bacne).' 
        }
    }
});

// [6] سيكابلاست بوم بـ 5 بلس (Cicaplast Baume B5+)
window.deepProductsList.push({
    id: 'lrp_cicaplast_baume', brandId: 'laroche', familyId: 'cicaplast', brand: 'La Roche-Posay',
    name: { ar: 'سيكابلاست بوم بـ 5 (+)', en: 'Cicaplast Baume B5 (+)' }, image: "", potency: 3, 
    pharmacology: {
        ph_level: { 
            ar: 'متوازن تماماً ولا يحتوي على أحماض', 
            en: 'Perfectly balanced, containing no acids' 
        },
        mechanism: { 
            ar: 'يوفر بيئة مثالية لالتئام الجلد بفضل الـ <span class="glossary-term" onclick="openGlossary(\'madecassoside\')">ماديكاسوسيد</span>، مع إعادة توازن <span class="glossary-term" onclick="openGlossary(\'microbiome_science\')">الميكروبيوم</span> بمركب (Tribioma) الحصري لضمان التئام الجروح دون ترك ندبات.', 
            en: 'Provides an optimal environment for skin healing using <span class="glossary-term" onclick="openGlossary(\'madecassoside\')">Madecassoside</span>, rebalancing the <span class="glossary-term" onclick="openGlossary(\'microbiome_science\')">Microbiome</span> with Tribioma to ensure scarless healing.' 
        },
        patient_benefit: { 
            ar: '💡 <b>سريرياً:</b> "ضمادة سائلة" متعددة الأغراض. يعالج الجفاف الشديد، التشققات، الحروق السطحية، وتهيج الليزر في أيام معدودة.', 
            en: '💡 <b>Clinically:</b> A multi-purpose "Liquid Bandage". Treats severe dryness, cracks, superficial burns, and laser irritation in days.' 
        },
        active_ingredients: [
            { name: 'Panthenol (B5)', concentration: '5%', role: { ar: 'ترطيب عميق، ترميم الأنسجة، وتهدئة فورية للحكة.', en: 'Deep hydration, tissue repair, and instant itch relief.' } },
            { name: 'Madecassoside', concentration: 'Active | فعال', role: { ar: 'تسريع التئام الجروح وتجديد الخلايا.', en: 'Accelerates wound healing and cell renewal.' } }
        ]
    },
    clinical_usage: {
        frequency: { ar: 'مرتين يومياً، أو عند الحاجة المتكررة للترميم.', en: 'Twice daily, or as frequently as needed for repair.' },
        expected_duration: { 
            ar: 'ترميم كامل لطبقات الجلد السطحية خلال 7 أيام من الحروق الخفيفة أو التقشير. يمكن استخدامه بشكل متقطع عند الحاجة.', 
            en: 'Full epidermal repair within 7 days from mild burns or peels. Can be used intermittently as needed.' 
        },
        step_in_routine: { ar: 'الخطوة الأخيرة (للترميم الموضعي أو كمرطب ثقيل ليلي).', en: 'Final step (for targeted repair or as a heavy night cream).' },
        routine_step_number: 3,
        application: { 
            ar: 'توضع طبقة سميكة على بشرة نظيفة. <b>تريند العيادات:</b> هو بطل تقنية <span class="glossary-term" onclick="alert(\'Slugging: وضع طبقة سميكة من مرهم عازل كخطوة أخيرة في الليل لحبس كل الرطوبة والعلاجات في الجلد.\')">(Slugging)</span> لحبس الرطوبة ليلاً وتجديد البشرة المدمرة.', 
            en: 'Apply a generous layer. <b>Clinic Trend:</b> The champion of the <span class="glossary-term" onclick="alert(\'Slugging: Applying a thick layer of occlusive ointment as the final night step to lock in moisture and treatments.\')">(Slugging)</span> technique to lock in night moisture and renew destroyed skin.' 
        },
        layering: { 
            do_not_mix_with: { ar: ['يُمنع وضعه على الجروح المفتوحة التي تنزف بقوة.'], en: ['Do not apply on heavily bleeding, open wounds.'] }, 
            best_mixed_with: { ar: ['مياه فيتشي الحرارية للتهدئة', 'فوق الريتينول لتقليل التهيج (الساندويتش).'], en: ['Thermal Spring Water for soothing', 'Over retinol to reduce irritation (Sandwich).'] } 
        }
    },
    precautions: {
        indications: { ar: 'بعد جلسات الليزر، الديرمابين، التقشير الكيميائي، طفح الحفاض، التشققات الشتوية، الإكزيما الجافة.', en: 'Post-laser, Dermapen, chemical peels, diaper rash, winter cracks, dry eczema.' },
        pregnancy_safe: true, 
        sun_sensitivity: false, 
        notes: { 
            ar: '<b>نصيحة ذهبية:</b> آمن تماماً للرضع والأطفال (👶🏻 Child Safe). النسخة المحدثة (+) لا تترك الأثر الأبيض الثقيل المزعج الذي كان في النسخة القديمة.', 
            en: '<b>Golden Pearl:</b> Completely safe for babies and children (👶🏻 Child Safe). The updated (+) version does not leave the annoying heavy white cast of the old formula.' 
        }
    }
});
