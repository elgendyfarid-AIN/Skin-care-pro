export type BrandKey = 'bioderma' | 'larocheposay' | 'avene' | 'filorga' | 'eucerin' | 'cetaphil' | 'cerave' | 'qv' | 'vichy' | 'uriage';

export type ProductCategory = 'cleanser' | 'moisturizer' | 'serum' | 'treatment' | 'sunscreen' | 'eye-care' | 'mist';

export type SkinType = 'all' | 'sensitive' | 'dry' | 'oily' | 'combination' | 'acne-prone' | 'redness-prone' | 'aging';

export type TimeOfUse = 'am' | 'pm' | 'am-pm';

export type PotencyLevel = 'mild' | 'moderate' | 'strong' | 'intense';

export type RoutineStep = 'cleanse' | 'tone' | 'treat' | 'serum' | 'eye' | 'moisturize' | 'protect' | 'spot';

export type SafetyLevel = 'very-safe' | 'safe' | 'caution' | 'patch-test';

export interface Product {
  id: string;
  brand: BrandKey;
  category: ProductCategory;
  name: {
    en: string;
    ar: string;
  };
  subtitle?: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  keyIngredients: {
    en: string[];
    ar: string[];
  };
  allIngredients?: {
    en: string[];
    ar: string[];
  };
  ph?: string;
  usage: {
    en: string;
    ar: string;
  };
  frequency: {
    en: string;
    ar: string;
  };
  timeOfUse: TimeOfUse;
  potency: {
    level: PotencyLevel;
    en: string;
    ar: string;
  };
  skinTypes: SkinType[];
  routinePosition: {
    step: RoutineStep;
    en: string;
    ar: string;
  };
  duration: {
    en: string;
    ar: string;
  };
  indications: {
    en: string[];
    ar: string[];
  };
  warnings: {
    en: string[];
    ar: string[];
  };
  notes: {
    en: string;
    ar: string;
  };
  safety: SafetyLevel;
  imagePrompt: string;
}

export interface BrandInfo {
  id: BrandKey;
  name: string;
  nameAr: string;
  country: string;
  description: {
    en: string;
    ar: string;
  };
  color: string;
}

export const brands: BrandInfo[] = [
  {
    id: 'bioderma',
    name: 'Bioderma',
    nameAr: 'بيوديرما',
    country: 'France',
    description: {
      en: 'Dermatological pioneer in skin biology, Bioderma creates products that preserve, activate, and restore the skin\'s natural processes.',
      ar: 'رائدة في علم الأحياء الجلدي، تُنشئ بيوديرما منتجات تحفظ وتُنشّط وتُعيد العمليات الطبيعية للجلد.'
    },
    color: '#00A8B5'
  },
  {
    id: 'larocheposay',
    name: 'La Roche-Posay',
    nameAr: 'لاروش بوزيه',
    country: 'France',
    description: {
      en: 'Dermatological skincare brand recommended by 90,000 dermatologists worldwide, formulated with thermal spring water.',
      ar: 'علامة العناية الجلدية الموصى بها من 90,000 طبيب أمراض جلدية حول العالم، مُركّبة بمياه الينابيع الحرارية.'
    },
    color: '#0077B6'
  },
  {
    id: 'avene',
    name: 'Avène',
    nameAr: 'أفين',
    country: 'France',
    description: {
      en: 'Centered around Avène Thermal Spring Water with soothing and anti-irritant properties for sensitive skin.',
      ar: 'تتمحور حول مياه أفين الحرارية ذات الخصائص المُهدّئة والمضادة للتهيج للبشرة الحساسة.'
    },
    color: '#00A3E0'
  },
  {
    id: 'filorga',
    name: 'Filorga',
    nameAr: 'فيلورجا',
    country: 'France',
    description: {
      en: 'French aesthetic medicine laboratory specializing in anti-aging skincare with clinically proven efficacy.',
      ar: 'مختبر فرنسي للطب التجميلي متخصص في العناية المضادة للشيخوخة بفعالية مُثبتة سريرياً.'
    },
    color: '#C8102E'
  },
  {
    id: 'eucerin',
    name: 'Eucerin',
    nameAr: 'يوسيرين',
    country: 'Germany',
    description: {
      en: 'Dermatological skincare brand with over 100 years of expertise in innovative and effective skincare solutions.',
      ar: 'علامة العناية الجلدية مع أكثر من 100 عام من الخبرة في حلول العناية بالبشرة المبتكرة والفعّالة.'
    },
    color: '#FFB81C'
  },
  {
    id: 'cetaphil',
    name: 'Cetaphil',
    nameAr: 'سيتافيل',
    country: 'USA',
    description: {
      en: 'Gentle skincare brand recommended by dermatologists for sensitive skin, with 75 years of heritage.',
      ar: 'علامة العناية اللطيفة بالبشرة الموصى بها من الأطباء للبشرة الحساسة، مع 75 عاماً من التراث.'
    },
    color: '#6BBE45'
  },
  {
    id: 'cerave',
    name: 'CeraVe',
    nameAr: 'سيرافي',
    country: 'USA',
    description: {
      en: 'Developed with dermatologists, CeraVe contains essential ceramides and MVE technology for 24-hour hydration.',
      ar: 'مطوّر مع أطباء الأمراض الجلدية، يحتوي سيرافي على السيراميدات الأساسية وتقنية MVE للترطيب 24 ساعة.'
    },
    color: '#003057'
  },
  {
    id: 'qv',
    name: 'QV',
    nameAr: 'كيوفي',
    country: 'Australia',
    description: {
      en: 'Australian dermatological skincare brand formulated for dry and sensitive skin conditions.',
      ar: 'علامة أسترالية للعناية الجلدية مُركّبة لحالات البشرة الجافة والحساسة.'
    },
    color: '#E87722'
  },
  {
    id: 'vichy',
    name: 'Vichy',
    nameAr: 'فيشي',
    country: 'France',
    description: {
      en: 'French dermocosmetic brand powered by Vichy Volcanic Water, rich in 15 essential minerals.',
      ar: 'علامة فرنسية للأدوية التجميلية الجلدية مدعومة بمياه فيشي البركانية الغنية بـ 15 معدناً أساسياً.'
    },
    color: '#00A9CE'
  },
  {
    id: 'uriage',
    name: 'Uriage',
    nameAr: 'يورياج',
    country: 'France',
    description: {
      en: 'French thermal dermatology brand utilizing the unique properties of Uriage Thermal Water from the French Alps.',
      ar: 'علامة فرنسية لأمراض الجلد الحرارية تستفيد من الخصائص الفريدة لمياه يورياج الحرارية من جبال الألب الفرنسية.'
    },
    color: '#0055A4'
  }
];

export const products: Product[] = [
  // Bioderma Products
  {
    id: 'bioderma-sensibio-h2o',
    brand: 'bioderma',
    category: 'cleanser',
    name: {
      en: 'Sensibio H2O Micellar Water',
      ar: 'سينسيبيو إتش2أو ماء ميسيلار'
    },
    subtitle: {
      en: 'Dermatological Micellar Water for Sensitive Skin',
      ar: 'ماء ميسيلار جلدي للبشرة الحساسة'
    },
    description: {
      en: 'The original dermatological micellar water that gently cleanses and removes makeup from face and eyes while respecting the skin balance. Formulated with fatty acid esters that mimic the skin\'s natural composition.',
      ar: 'ماء الميسيلار الجلدي الأصلي الذي ينظف بلطف ويزيل المكياج من الوجه والعيون مع احترام توازن البشرة. مُركّب باسترات الأحماض الدهنية التي تحاكي التركيب الطبيعي للبشرة.'
    },
    keyIngredients: {
      en: ['Micelles (Fatty Acid Esters)', 'Cucumis Sativus Extract', 'Mannitol', 'Xylitol', 'Rhamnose', 'Fructooligosaccharides'],
      ar: ['الميسيلات (استرات الأحماض الدهنية)', 'مستخلص الخيار', 'المانيتول', 'الزيليتول', 'الرامنوز', 'الفركتوأوليغوساكاريد']
    },
    ph: '5.5',
    usage: {
      en: 'Soak a cotton pad and gently cleanse face and eyes. Repeat until pad is clean. No rinsing required.',
      ar: 'اغمس قطنة ونظف الوجه والعيون بلطف. كرر حتى تصبح القطنة نظيفة. لا يحتاج لشطف.'
    },
    frequency: {
      en: 'Morning and evening, or as needed for makeup removal.',
      ar: 'صباحاً ومساءً، أو حسب الحاجة لإزالة المكياج.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'mild',
      en: 'Ultra-gentle, soap-free, fragrance-free, physiological pH',
      ar: 'فائق اللطافة، خالٍ من الصابون، خالٍ من العطور، pH فيزيولوجي'
    },
    skinTypes: ['all', 'sensitive'],
    routinePosition: {
      step: 'cleanse',
      en: 'First step - Cleansing',
      ar: 'الخطوة الأولى - التنظيف'
    },
    duration: {
      en: 'Continuous use; 500ml lasts approximately 2-3 months with daily use.',
      ar: 'استخدام مستمر؛ 500 مل تكفي تقريباً 2-3 شهور مع الاستخدام اليومي.'
    },
    indications: {
      en: ['Makeup removal', 'Gentle cleansing', 'Sensitive skin tolerance', 'Eye area safe'],
      ar: ['إزالة المكياج', 'تنظيف لطيف', 'تحمّل البشرة الحساسة', 'آمن لمنطقة العيون']
    },
    warnings: {
      en: ['For external use only.', 'Avoid direct contact with eyes if sensitive.'],
      ar: ['للاستخدام الخارجي فقط.', 'تجنب الاتصال المباشر بالعيون إذا كنت حساساً.']
    },
    notes: {
      en: 'Can be used without water (no-rinse formula). Perfect for travel and sensitive skin conditions.',
      ar: 'يمكن استخدامه بدون ماء (تركيبة لا تحتاج للشطف). مثالي للسفر وحالات البشرة الحساسة.'
    },
    safety: 'very-safe',
    imagePrompt: 'A clear bottle of Bioderma Sensibio H2O Micellar Water with pink cap, clean white background, product photography, soft lighting, elegant and minimal skincare presentation'
  },
  {
    id: 'bioderma-sensibio-ar',
    brand: 'bioderma',
    category: 'treatment',
    name: {
      en: 'Sensibio AR Anti-Redness Cream',
      ar: 'سينسيبيو إيه آر كريم مضاد للاحمرار'
    },
    subtitle: {
      en: 'Soothing Cream for Redness-Prone Skin with Rosactiv Patent',
      ar: 'كريم مهدئ للبشرة المعرضة للاحمرار ببراءة اختراع Rosactiv'
    },
    description: {
      en: 'Specifically formulated for skin prone to redness and rosacea. The Rosactiv patent acts on the vascular component of redness while soothing the skin and reducing visible redness.',
      ar: 'مُركّب خصيصاً للبشرة المعرضة للاحمرار ووردية الورد. براءة اختراع Rosactiv تعمل على المكوّن الوعائي للاحمرار مع تهدئة البشرة وتقليل الاحمرار المرئي.'
    },
    keyIngredients: {
      en: ['Rosactiv Patent', 'Enoxolone', 'Allantoin', 'Canola', 'Ginkgo Biloba', 'Sunflower Extract'],
      ar: ['براءة اختراع Rosactiv', 'إينوكسولون', 'الألانتوين', 'الكانولا', 'الجنكة بيلوبا', 'مستخلص دوار الشمس']
    },
    ph: '5.5',
    usage: {
      en: 'Apply to cleansed face morning and evening. Gently massage until absorbed.',
      ar: 'ضع على الوجه المنظف صباحاً ومساءً. دلك بلطف حتى الامتصاص.'
    },
    frequency: {
      en: 'Twice daily for at least 8 weeks for visible results.',
      ar: 'مرتين يومياً لمدة 8 أسابيع على الأقل لنتائج مرئية.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'moderate',
      en: 'Moderate - Targeted anti-redness active ingredients',
      ar: 'معتدل - مكونات فعالة مُستهدفة لمكافحة الاحمرار'
    },
    skinTypes: ['sensitive', 'redness-prone'],
    routinePosition: {
      step: 'treat',
      en: 'Treatment step - After cleansing, before moisturizer',
      ar: 'خطوة العلاج - بعد التنظيف، قبل المرطب'
    },
    duration: {
      en: '8-12 weeks for significant reduction in redness.',
      ar: '8-12 أسبوع لتقليل كبير في الاحمرار.'
    },
    indications: {
      en: ['Visible redness', 'Rosacea-prone skin', 'Flushing', 'Vascular redness'],
      ar: ['احمرار مرئي', 'بشرة معرضة لوردية الورد', 'الاحمرار المفاجئ', 'الاحمرار الوعائي']
    },
    warnings: {
      en: ['Discontinue if irritation occurs.', 'Use sunscreen during the day.'],
      ar: ['توقف إذا حدث تهيج.', 'استخدم واقي شمس خلال النهار.']
    },
    notes: {
      en: 'Excellent makeup base. Non-comedogenic. Sterile packaging preserves formula integrity.',
      ar: 'قاعدة مكياج ممتازة. غير مسدّدة للمسام. التعبئة المعقمة تحافظ على سلامة التركيبة.'
    },
    safety: 'safe',
    imagePrompt: 'A tube of Bioderma Sensibio AR cream with light pink packaging, clean white background, product photography, soft lighting, elegant skincare presentation'
  },
  // La Roche-Posay Products
  {
    id: 'laroche-effaclar-duo',
    brand: 'larocheposay',
    category: 'treatment',
    name: {
      en: 'Effaclar Duo(+) Anti-Acne Treatment',
      ar: 'إيفاكلار ديو(+) علاج حب الشباب'
    },
    subtitle: {
      en: 'Corrective Anti-Imperfection Care with Procerad',
      ar: 'عناية تصحيحية مضادة للعيوب مع Procerad'
    },
    description: {
      en: 'A complete treatment that targets acne imperfections, unclogs pores, and prevents post-acne marks. Formulated with Procerad (ceramide precursor) to prevent red and brown marks.',
      ar: 'علاج كامل يستهدف عيوب حب الشباب، يفتح المسام، ويمنع آثار ما بعد حب الشباب. مُركّب بـ Procerad (مقدمة السيراميد) لمنع العلامات الحمراء والبنية.'
    },
    keyIngredients: {
      en: ['Niacinamide', 'Procerad (Ceramide Precursor)', 'Salicylic Acid (LHA)', 'Zinc PCA', 'Mannose', 'Aquagenium'],
      ar: ['النياسيناميد', 'Procerad (مقدمة السيراميد)', 'حمض الساليسيليك (LHA)', 'زنك PCA', 'المانوز', 'أكواجينيوم']
    },
    ph: '5.5',
    usage: {
      en: 'Apply a thin layer to entire face after cleansing, morning and/or evening.',
      ar: 'ضع طبقة رقيقة على الوجه بالكامل بعد التنظيف صباحاً و/أو مساءً.'
    },
    frequency: {
      en: 'Once or twice daily. Start with once daily to assess tolerance.',
      ar: 'مرة أو مرتين يومياً. ابدأ بمرة واحدة يومياً لتقييم التحمل.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'moderate',
      en: 'Moderate - Active anti-acne and anti-mark ingredients',
      ar: 'معتدل - مكونات فعالة مضادة لحب الشباب والعلامات'
    },
    skinTypes: ['oily', 'acne-prone', 'combination'],
    routinePosition: {
      step: 'treat',
      en: 'Treatment step - After cleansing, before moisturizer',
      ar: 'خطوة العلاج - بعد التنظيف، قبل المرطب'
    },
    duration: {
      en: 'Visible results in 12 hours on imperfections; 8 weeks for marks.',
      ar: 'نتائج مرئية خلال 12 ساعة على العيوب؛ 8 أسابيع للعلامات.'
    },
    indications: {
      en: ['Acne imperfections', 'Clogged pores', 'Post-acne marks', 'Oily skin'],
      ar: ['عيوب حب الشباب', 'مسام مسدودة', 'آثار حب الشباب', 'البشرة الدهنية']
    },
    warnings: {
      en: ['May cause initial dryness or peeling.', 'Use sunscreen during the day.', 'Avoid eye area.'],
      ar: ['قد يسبب جفافاً أو تقشّراً أولياً.', 'استخدم واقي شمس خلال النهار.', 'تجنب منطقة العيون.']
    },
    notes: {
      en: 'Can be used as a spot treatment or all-over face treatment. Non-comedogenic, oil-free.',
      ar: 'يمكن استخدامه كعلاج موضعي أو على الوجه بالكامل. غير مسدّد للمسام، خالٍ من الزيوت.'
    },
    safety: 'safe',
    imagePrompt: 'A tube of La Roche-Posay Effaclar Duo+ with white and blue packaging, clean white background, product photography, soft lighting, elegant skincare presentation'
  },
  {
    id: 'laroche-cicaplast',
    brand: 'larocheposay',
    category: 'moisturizer',
    name: {
      en: 'Cicaplast Baume B5',
      ar: 'سيكابلاست بلسم ب5'
    },
    subtitle: {
      en: 'Soothing Repairing Balm for Irritated Skin',
      ar: 'بلسم مهدئ ومرمّم للبشرة المتهيجة'
    },
    description: {
      en: 'A multi-purpose repairing balm that soothes and restores irritated, sensitized skin. Formulated with Panthenol 5%, Madecassoside, and Copper-Zinc-Manganese. Suitable for babies, children, and adults.',
      ar: 'بلسم متعدد الاستخدامات يهدئ ويرمّم البشرة المتهيجة والحساسة. مُركّب بـ Panthenol 5%، Madecassoside، ونحاس-زنك-منجنيز. مناسب للأطفال الرضع والأطفال والبالغين.'
    },
    keyIngredients: {
      en: ['Panthenol (Vitamin B5) 5%', 'Madecassoside', 'Copper-Zinc-Manganese', 'Shea Butter', 'Glycerin', 'Dimethicone'],
      ar: ['بانثينول (فيتامين ب5) 5%', 'ماديكاسوسيد', 'نحاس-زنك-منجنيز', 'زبدة الشيا', 'الجلسرين', 'الديميثيكون']
    },
    ph: '5.5',
    usage: {
      en: 'Apply to cleansed, dry skin twice daily. Can be applied in a thick layer.',
      ar: 'ضع على البشرة النظيفة الجافة مرتين يومياً. يمكن وضعه بطبقة سميكة.'
    },
    frequency: {
      en: 'Twice daily or as needed on irritated areas.',
      ar: 'مرتين يومياً أو حسب الحاجة على المناطق المتهيجة.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'mild',
      en: 'Very gentle - Suitable for compromised skin barrier',
      ar: 'لطيف جداً - مناسب لحاجز البشرة المضعف'
    },
    skinTypes: ['all', 'sensitive', 'dry'],
    routinePosition: {
      step: 'moisturize',
      en: 'Moisturizing step - Last step before sunscreen (AM) or as final step (PM)',
      ar: 'خطوة الترطيب - الخطوة الأخيرة قبل واقي الشمس (صباحاً) أو كخطوة نهائية (مساءً)'
    },
    duration: {
      en: 'Continuous use until skin is repaired; then as needed.',
      ar: 'استخدام مستمر حتى تتعافى البشرة؛ ثم حسب الحاجة.'
    },
    indications: {
      en: ['Irritated skin', 'Post-procedure skin', 'Diaper rash', 'Dry patches', 'Minor burns'],
      ar: ['بشرة متهيجة', 'بشرة ما بعد العمليات', 'التهاب الحفاض', 'بقع جافة', 'حروق طفيفة']
    },
    warnings: {
      en: ['For external use only.', 'Do not use on deep or infected wounds without medical advice.'],
      ar: ['للاستخدام الخارجي فقط.', 'لا تستخدم على جروح عميقة أو مصابة دون استشارة طبية.']
    },
    notes: {
      en: 'Lanolin-free, fragrance-free, non-comedogenic. Can be used on face, body, and lips.',
      ar: 'خالٍ من اللانولين، خالٍ من العطور، غير مسدّد للمسام. يمكن استخدامه على الوجه والجسم والشفاه.'
    },
    safety: 'very-safe',
    imagePrompt: 'A tube of La Roche-Posay Cicaplast Baume B5 with white and blue packaging, clean white background, product photography, soft lighting, elegant skincare presentation'
  },
  // Avène Products
  {
    id: 'avene-tolerance',
    brand: 'avene',
    category: 'moisturizer',
    name: {
      en: 'Tolerance Control Soothing Recovery Cream',
      ar: 'توليرانس كونترول كريم التعافي المهدئ'
    },
    subtitle: {
      en: '48-Hour Hydration for Hypersensitive Skin with D-Sensinose',
      ar: 'ترطيب 48 ساعة للبشرة فائقة الحساسية مع D-Sensinose'
    },
    description: {
      en: 'Specifically designed for hypersensitive, reactive, and intolerant skin. Features D-Sensinose postbiotic ingredient derived from Avène Thermal Spring Water to calm discomfort in 30 seconds.',
      ar: 'مُصمّم خصيصاً للبشرة فائقة الحساسية والتفاعلية وغير المتسامحة. يحتوي على مكون D-Sensinose البيوتيكي المشتق من مياه أفين الحرارية لتهدئة الانزعاج خلال 30 ثانية.'
    },
    keyIngredients: {
      en: ['Avène Thermal Spring Water', 'D-Sensinose (Postbiotic)', 'Squalane', 'Glycerin', 'Beeswax', 'Arginine'],
      ar: ['مياه أفين الحرارية', 'D-Sensinose (ما بعد البيوتيك)', 'السكوالان', 'الجلسرين', 'شمع العسل', 'الأرجينين']
    },
    ph: '5.5',
    usage: {
      en: 'Apply morning and evening to face and eye contour after cleansing.',
      ar: 'ضع صباحاً ومساءً على الوجه وحول العين بعد التنظيف.'
    },
    frequency: {
      en: 'Twice daily. Can be used more frequently during flare-ups.',
      ar: 'مرتين يومياً. يمكن استخدامه بشكل أكثر تكراراً أثناء التفاقم.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'mild',
      en: 'Ultra-gentle - Sterile formula, preservative-free',
      ar: 'فائق اللطافة - تركيبة معقمة، خالية من المواد الحافظة'
    },
    skinTypes: ['sensitive', 'dry', 'all'],
    routinePosition: {
      step: 'moisturize',
      en: 'Moisturizing step - Final step before sunscreen (AM)',
      ar: 'خطوة الترطيب - الخطوة النهائية قبل واقي الشمس (صباحاً)'
    },
    duration: {
      en: 'Continuous use. Barrier restored in 48 hours.',
      ar: 'استخدام مستمر. يتم استعادة الحاجز خلال 48 ساعة.'
    },
    indications: {
      en: ['Hypersensitive skin', 'Reactive skin', 'Skin discomfort', 'Redness', 'Tightness', 'Burning sensation'],
      ar: ['بشرة فائقة الحساسية', 'بشرة تفاعلية', 'انزعاج البشرة', 'احمرار', 'شدّ', 'إحساس بالحرقان']
    },
    warnings: {
      en: ['For external use only.'],
      ar: ['للاستخدام الخارجي فقط.']
    },
    notes: {
      en: '98% ingredients of natural origin. Sterile Cosmetics technology with DEFI system. National Eczema Association approved.',
      ar: '98% من مكونات الطبيعة. تقنية التجميل المعقم مع نظام DEFI. معتمد من الجمعية الوطنية للأكزيما.'
    },
    safety: 'very-safe',
    imagePrompt: 'A tube of Avene Tolerance Control cream with white and soft blue packaging, clean white background, product photography, soft lighting, elegant skincare presentation'
  },
  {
    id: 'avene-thermal-water',
    brand: 'avene',
    category: 'mist',
    name: {
      en: 'Thermal Spring Water Spray',
      ar: 'بخاخ مياه الينابيع الحرارية'
    },
    subtitle: {
      en: 'Soothing and Anti-Irritant Thermal Water',
      ar: 'مياه حرارية مهدئة ومضادة للتهيج'
    },
    description: {
      en: 'Natural soothing and softening thermal spring water drawn directly from the Avène spring. Unique composition with low mineral content and a high concentration of silica.',
      ar: 'مياه الينابيع الحرارية الطبيعية المهدئة والملطّفة المأخوذة مباشرة من نبع أفين. تركيبة فريدة مع محتوى منخفض من المعادن وتركيز عالٍ من السيليكا.'
    },
    keyIngredients: {
      en: ['Avène Thermal Spring Water', 'Silica', 'Bicarbonates', 'Calcium', 'Magnesium'],
      ar: ['مياه أفين الحرارية', 'السيليكا', 'البيكربونات', 'الكالسيوم', 'المغنيسيوم']
    },
    ph: '7.5',
    usage: {
      en: 'Spray onto skin and leave for 2-3 minutes. Gently pat dry with a tissue.',
      ar: 'رش على البشرة واتركه لمدة 2-3 دقائق. دلك بلطف بمنشفة ورقية.'
    },
    frequency: {
      en: 'As often as needed throughout the day.',
      ar: 'حسب الحاجة على مدار اليوم.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'mild',
      en: 'Ultra-gentle - Pure thermal water',
      ar: 'فائق اللطافة - مياه حرارية نقية'
    },
    skinTypes: ['all', 'sensitive'],
    routinePosition: {
      step: 'tone',
      en: 'Toning step - After cleansing, before serum/moisturizer',
      ar: 'خطوة التبريد/التنغيم - بعد التنظيف، قبل السيروم/المرطب'
    },
    duration: {
      en: 'Continuous use as needed.',
      ar: 'استخدام مستمر حسب الحاجة.'
    },
    indications: {
      en: ['Soothing', 'Skin irritation', 'After sun exposure', 'Post-procedure', 'Diaper area', 'Set makeup'],
      ar: ['تهدئة', 'تهيج البشرة', 'بعد التعرض للشمس', 'ما بعد العمليات', 'منطقة الحفاض', 'تثبيت المكياج']
    },
    warnings: {
      en: ['For external use only.', 'Do not shake.'],
      ar: ['للاستخدام الخارجي فقط.', 'لا تهزّ الزجاجة.']
    },
    notes: {
      en: 'Extremely low mineral content (207mg/L) ensures perfect tolerance. Unique microflora properties.',
      ar: 'المحتوى المنخفض جداً من المعادن (207 ملغ/لتر) يضمن تحملاً مثالياً. خصائص ميكروفلورا فريدة.'
    },
    safety: 'very-safe',
    imagePrompt: 'A white spray bottle of Avene Thermal Spring Water with characteristic orange logo, clean white background, product photography, soft lighting, elegant skincare presentation'
  },
  // Filorga Products
  {
    id: 'filorga-ncef',
    brand: 'filorga',
    category: 'serum',
    name: {
      en: 'NCEF-Shot Supreme Polyrevitalizing Concentrate',
      ar: 'NCEF-Shot المركّز الفائق للتنشيط الشامل'
    },
    subtitle: {
      en: 'Intensive Cellular Booster with 50 Active Ingredients',
      ar: 'معزز خلوي مكثف مع 50 مكوناً فعالاً'
    },
    description: {
      en: 'A 10-day intensive treatment containing NCEF (New Cellular Encapsulated Factors), a unique complex with 50 revitalizing ingredients including vitamins, amino acids, minerals, and antioxidants.',
      ar: 'علاج مكثف لمدة 10 أيام يحتوي على NCEF (عوامل خلوية مُغلّفة جديدة)، مجمع فريد مع 50 مكوناً منشطاً يشمل الفيتامينات والأحماض الأمينية والمعادن ومضادات الأكسدة.'
    },
    keyIngredients: {
      en: ['NCEF Complex (50 Ingredients)', 'Hyaluronic Acid', 'Niacinamide', 'Vitamin C', 'Retinol', 'Amino Acids', 'Coenzymes'],
      ar: ['مجمع NCEF (50 مكوناً)', 'حمض الهيالورونيك', 'النياسيناميد', 'فيتامين سي', 'الريتينول', 'الأحماض الأمينية', 'الإنزيمات المساعدة']
    },
    ph: '7.0',
    usage: {
      en: 'Apply half a vial morning and evening before your regular skincare routine.',
      ar: 'ضع نصف أمبولة صباحاً ومساءً قبل روتين العناية المعتاد.'
    },
    frequency: {
      en: 'Intensive 10-day cure, 3-4 times per year.',
      ar: 'علاج مكثف لمدة 10 أيام، 3-4 مرات في السنة.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'intense',
      en: 'Intense - Equivalent to one meso-injection session',
      ar: 'مكثف - يعادل جلسة حقن ميزو واحدة'
    },
    skinTypes: ['aging', 'all'],
    routinePosition: {
      step: 'serum',
      en: 'Serum step - After cleansing/toning, before moisturizer',
      ar: 'خطوة السيروم - بعد التنظيف/التنغيم، قبل المرطب'
    },
    duration: {
      en: '10-day intensive cure. Visible results from day 1, optimal after 10 days.',
      ar: 'علاج مكثف لمدة 10 أيام. نتائج مرئية من اليوم الأول، مثالية بعد 10 أيام.'
    },
    indications: {
      en: ['Dull complexion', 'Fine lines', 'Dehydrated skin', 'Loss of radiance', 'Skin fatigue'],
      ar: ['بشرة باهتة', 'خطوط رفيعة', 'بشرة مجففة', 'فقدان الإشراق', 'تعب البشرة']
    },
    warnings: {
      en: ['Not suitable for pregnant or breastfeeding women (contains retinol).', 'Use sunscreen during the day.'],
      ar: ['غير مناسب للنساء الحوامل أو المرضعات (يحتوي على ريتينول).', 'استخدم واقي شمس خلال النهار.']
    },
    notes: {
      en: 'Each vial contains the equivalent concentration of one meso-injection. Can be layered with other treatments.',
      ar: 'كل أمبولة تحتوي على تركيز يعادل حقنة ميزو واحدة. يمكن دمجها مع علاجات أخرى.'
    },
    safety: 'caution',
    imagePrompt: 'A vial box set of Filorga NCEF-Shot with elegant white and silver packaging, clean white background, product photography, soft lighting, luxury skincare presentation'
  },
  {
    id: 'filorga-timefiller',
    brand: 'filorga',
    category: 'treatment',
    name: {
      en: 'Time-Filler 5XP Expression Line Serum',
      ar: 'تايم-فيلر 5XP سيروم خطوط التعبير'
    },
    subtitle: {
      en: 'Botox-Like Wrinkle Correction with Peptides',
      ar: 'تصحيح التجاعيد شبيه البوتوكس مع الببتيدات'
    },
    description: {
      en: 'A concentrated serum that targets 5 types of expression lines with a neuropeptidic complex. Features hexapeptide and octapeptide for a visible smoothing effect similar to botulinum toxin injections.',
      ar: 'سيروم مركّز يستهدف 5 أنواع من خطوط التعبير بمجمع نيوببتيدي. يحتوي على هكساببتيد وأوكتاببتيد لتأثير تنعيم مرئي مشابه لحقن الذيفان البوتوليني.'
    },
    keyIngredients: {
      en: ['Neuropeptidic Complex (Hexapeptide + Octapeptide)', 'Marine Ferment', 'Polysaccharides', 'Hyaluronic Acid', 'NCEF'],
      ar: ['المجمع النيوببتيدي (هكساببتيد + أوكتاببتيد)', 'مخمّر بحري', 'السكريات المتعددة', 'حمض الهيالورونيك', 'NCEF']
    },
    ph: '6.0',
    usage: {
      en: 'Apply to targeted areas (forehead, crow\'s feet, frown lines) morning and evening before moisturizer.',
      ar: 'ضع على المناطق المستهدفة (الجبهة، زوايا العين، خطوط التجعيد) صباحاً ومساءً قبل المرطب.'
    },
    frequency: {
      en: 'Twice daily for visible results in 7 days.',
      ar: 'مرتين يومياً لنتائج مرئية خلال 7 أيام.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'strong',
      en: 'Strong - Neuropeptide-based wrinkle correction',
      ar: 'قوي - تصحيح التجاعيد القائم على النيوببتيدات'
    },
    skinTypes: ['aging', 'all'],
    routinePosition: {
      step: 'treat',
      en: 'Treatment step - Targeted application before moisturizer',
      ar: 'خطوة العلاج - تطبيق مستهدف قبل المرطب'
    },
    duration: {
      en: 'Visible smoothing after 7 days; optimal results after 28 days.',
      ar: 'تنعيم مرئي بعد 7 أيام؛ نتائج مثالية بعد 28 يوماً.'
    },
    indications: {
      en: ['Expression lines', 'Forehead wrinkles', 'Crow\'s feet', 'Frown lines', 'Nasolabial folds'],
      ar: ['خطوط التعبير', 'تجاعيد الجبهة', 'زوايا العين', 'خطوط التجعيد', 'ثنايا الأنف والشفة']
    },
    warnings: {
      en: ['Avoid direct eye contact.', 'For external use only.'],
      ar: ['تجنب الاتصال المباشر بالعيون.', 'للاستخدام الخارجي فقط.']
    },
    notes: {
      en: '87% of women saw smoother skin after 7 days. Non-invasive alternative to botulinum toxin.',
      ar: '87% من النساء شهدن بشرة أكثر نعومة بعد 7 أيام. بديل غير جراحي للذيفان البوتوليني.'
    },
    safety: 'safe',
    imagePrompt: 'A sleek silver and white tube of Filorga Time-Filler 5XP serum, clean white background, product photography, soft lighting, luxury anti-aging skincare presentation'
  },
  // Eucerin Products
  {
    id: 'eucerin-hyaluron',
    brand: 'eucerin',
    category: 'moisturizer',
    name: {
      en: 'Hyaluron-Filler + Urea Day Cream',
      ar: 'هيالورون-فيلر + يوريا كريم النهار'
    },
    subtitle: {
      en: 'Anti-Wrinkle Day Cream for Very Dry Skin',
      ar: 'كريم نهار مضاد للتجاعيد للبشرة الجافة جداً'
    },
    description: {
      en: 'Combines two types of hyaluronic acid (long-chain for surface lines, short-chain for deep wrinkles) with 5% urea for intensive hydration. Includes high UVA filters to protect against photoaging.',
      ar: 'يجمع نوعين من حمض الهيالورونيك (طويل السلسلة للخطوط السطحية، قصير السلسلة للتجاعيد العميقة) مع 5% يوريا للترطيب المكثف. يشمل مرشحات UVA عالية للحماية من الشيخوخة الضوئية.'
    },
    keyIngredients: {
      en: ['Long-Chain Hyaluronic Acid', 'Short-Chain Hyaluronic Acid', 'Urea 5%', 'Glycine Saponin', 'UVA Filters', 'Glycerin'],
      ar: ['حمض الهيالورونيك طويل السلسلة', 'حمض الهيالورونيك قصير السلسلة', 'يوريا 5%', 'جلايسين صابونين', 'مرشحات UVA', 'الجلسرين']
    },
    ph: '5.0',
    usage: {
      en: 'Apply to face, neck, and décolleté in the morning after cleansing.',
      ar: 'ضع على الوجه والرقبة ومنطقة الصدر صباحاً بعد التنظيف.'
    },
    frequency: {
      en: 'Every morning.',
      ar: 'كل صباح.'
    },
    timeOfUse: 'am',
    potency: {
      level: 'moderate',
      en: 'Moderate - Dual-action anti-wrinkle + intensive hydration',
      ar: 'معتدل - عمل مزدوج مضاد للتجاعيد + ترطيب مكثف'
    },
    skinTypes: ['dry', 'aging'],
    routinePosition: {
      step: 'moisturize',
      en: 'Moisturizing step - Before sunscreen',
      ar: 'خطوة الترطيب - قبل واقي الشمس'
    },
    duration: {
      en: 'Continuous use. Visible wrinkle reduction after 4 weeks.',
      ar: 'استخدام مستمر. تقليل مرئي للتجاعيد بعد 4 أسابيع.'
    },
    indications: {
      en: ['Deep wrinkles', 'Dry skin with aging signs', 'Fine lines', 'Skin tightness', 'Roughness'],
      ar: ['تجاعيد عميقة', 'بشرة جافة مع علامات الشيخوخة', 'خطوط رفيعة', 'شد البشرة', 'خشونة']
    },
    warnings: {
      en: ['Contains UVA filters - sufficient for incidental sun exposure.', 'For very dry or atopic skin.'],
      ar: ['يحتوي على مرشحات UVA - كافٍ للتعرض العرضي للشمس.', 'للبشرة الجافة جداً أو الأتوبيك.']
    },
    notes: {
      en: 'Non-comedogenic, perfume-free, colorant-free. Proven tolerability on atopic dermatitis and psoriasis.',
      ar: 'غير مسدّد للمسام، خالٍ من العطر، خالٍ من الأصباغ. تحمّل مُثبت على الأكزيما الأتوبيك والصدفية.'
    },
    safety: 'safe',
    imagePrompt: 'A jar of Eucerin Hyaluron-Filler Urea Day Cream with white and gold packaging, clean white background, product photography, soft lighting, elegant skincare presentation'
  },
  {
    id: 'eucerin-urea-10',
    brand: 'eucerin',
    category: 'moisturizer',
    name: {
      en: 'UreaRepair 10% Lotion',
      ar: 'يورياريبير لوشن 10%'
    },
    subtitle: {
      en: 'Intensive Repair Lotion for Extremely Dry Skin',
      ar: 'لوشن إصلاح مكثف للبشرة الجافة جداً'
    },
    description: {
      en: 'Intensive body lotion with 10% urea and ceramides to repair the skin barrier and provide immediate relief for extremely dry, rough, and scaly skin.',
      ar: 'لوشن جسم مكثف مع 10% يوريا والسيراميدات لإصلاح حاجز البشرة وتوفير راحة فورية للبشرة الجافة جداً والخشنة والمتقشرة.'
    },
    keyIngredients: {
      en: ['Urea 10%', 'Ceramides', 'Natural Moisturizing Factors (NMF)', 'Lactic Acid', 'Glycerin'],
      ar: ['يوريا 10%', 'السيراميدات', 'عوامل الترطيب الطبيعية (NMF)', 'حمض اللاكتيك', 'الجلسرين']
    },
    ph: '4.5',
    usage: {
      en: 'Apply to affected areas twice daily or as needed. Massage gently until absorbed.',
      ar: 'ضع على المناطق المتأثرة مرتين يومياً أو حسب الحاجة. دلك بلطف حتى الامتصاص.'
    },
    frequency: {
      en: 'Twice daily or as needed.',
      ar: 'مرتين يومياً أو حسب الحاجة.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'strong',
      en: 'Strong - High urea concentration with keratolytic effect',
      ar: 'قوي - تركيز يوريا عالٍ بتأثير كيراتوليتيك'
    },
    skinTypes: ['dry'],
    routinePosition: {
      step: 'moisturize',
      en: 'Body moisturizing step - After showering',
      ar: 'خطوة ترطيب الجسم - بعد الاستحمام'
    },
    duration: {
      en: 'Continuous use. Immediate relief; barrier repair in 1 week.',
      ar: 'استخدام مستمر. راحة فورية؛ إصلاح الحاجز في أسبوع واحد.'
    },
    indications: {
      en: ['Extremely dry skin', 'Rough skin', 'Scaly skin', 'Xerosis', 'Atopic skin', 'Psoriasis-prone skin'],
      ar: ['بشرة جافة جداً', 'بشرة خشنة', 'بشرة متقشرة', 'جفاف البشرة', 'بشرة أتوبيك', 'بشرة معرضة للصدفية']
    },
    warnings: {
      en: ['May sting on very irritated or broken skin.', 'Not for face if you have sensitive facial skin.'],
      ar: ['قد يسبب حرقة على البشرة المتهيجة جداً أو المكسرة.', 'ليس للوجه إذا كانت بشرة وجهك حساسة.']
    },
    notes: {
      en: 'Dermatologically tested on dry, atopic, and psoriatic skin. Free from fragrances and colorants.',
      ar: 'مختبر جلدياً على البشرة الجافة والأتوبيك والصدفية. خالٍ من العطور والأصباغ.'
    },
    safety: 'safe',
    imagePrompt: 'A bottle of Eucerin UreaRepair 10% Lotion with white and yellow packaging, clean white background, product photography, soft lighting, elegant skincare presentation'
  },
  // Cetaphil Products
  {
    id: 'cetaphil-cleanser',
    brand: 'cetaphil',
    category: 'cleanser',
    name: {
      en: 'Gentle Skin Cleanser',
      ar: 'منظف البشرة اللطيف'
    },
    subtitle: {
      en: 'Clinically Proven Hydrating Cleanser for Sensitive Skin',
      ar: 'منظف مرطب مُثبت سريرياً للبشرة الحساسة'
    },
    description: {
      en: 'A creamy, non-foaming cleanser that removes dirt, makeup, and impurities while preserving the skin\'s natural moisture barrier. Clinically proven to defend against 5 signs of skin sensitivity.',
      ar: 'منظف كريمي غير رغوي يزيل الأوساخ والمكياج والشوائب مع الحفاظ على حاجز الرطوبة الطبيعي للبشرة. مُثبت سريرياً للدفاع ضد 5 علامات لحساسية البشرة.'
    },
    keyIngredients: {
      en: ['Niacinamide (Vitamin B3)', 'Panthenol (Pro-Vitamin B5)', 'Glycerin', 'Micellar Technology'],
      ar: ['النياسيناميد (فيتامين ب3)', 'البانثينول (برو-فيتامين ب5)', 'الجلسرين', 'تقنية الميسيلات']
    },
    ph: '5.5',
    usage: {
      en: 'Apply to damp skin and massage gently. Rinse or wipe off with soft cloth.',
      ar: 'ضع على بشرة رطبة ودلك بلطف. اشطف أو امسح بقماش ناعم.'
    },
    frequency: {
      en: 'Morning and evening.',
      ar: 'صباحاً ومساءً.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'mild',
      en: 'Ultra-gentle - Dermatologist recommended for sensitive skin',
      ar: 'فائق اللطافة - موصى به من أطباء الجلد للبشرة الحساسة'
    },
    skinTypes: ['all', 'sensitive', 'dry'],
    routinePosition: {
      step: 'cleanse',
      en: 'First step - Morning and evening cleansing',
      ar: 'الخطوة الأولى - تنظيف صباحاً ومساءً'
    },
    duration: {
      en: 'Continuous use. 236ml lasts approximately 2 months.',
      ar: 'استخدام مستمر. 236 مل تكفي تقريباً شهرين.'
    },
    indications: {
      en: ['Gentle cleansing', 'Makeup removal', 'Sensitive skin', 'Dry skin', 'Normal skin'],
      ar: ['تنظيف لطيف', 'إزالة المكياج', 'بشرة حساسة', 'بشرة جافة', 'بشرة طبيعية']
    },
    warnings: {
      en: ['For external use only.', 'Avoid direct eye contact.'],
      ar: ['للاستخدام الخارجي فقط.', 'تجنب الاتصال المباشر بالعيون.']
    },
    notes: {
      en: '94% of users felt the product gently cleansed their skin. Fragrance-free, paraben-free, hypoallergenic.',
      ar: '94% من المستخدمين شعروا أن المنتج نظف بشرتهم بلطف. خالٍ من العطر، خالٍ من البارابين، منخفض الحساسية.'
    },
    safety: 'very-safe',
    imagePrompt: 'A bottle of Cetaphil Gentle Skin Cleanser with characteristic green and white packaging, clean white background, product photography, soft lighting, clean skincare presentation'
  },
  {
    id: 'cetaphil-cream',
    brand: 'cetaphil',
    category: 'moisturizer',
    name: {
      en: 'Moisturizing Cream for Face & Body',
      ar: 'كريم الترطيب للوجه والجسم'
    },
    subtitle: {
      en: 'Intense Hydration for Dry to Very Dry Sensitive Skin',
      ar: 'ترطيب مكثف للبشرة الجافة إلى الجافة جداً الحساسة'
    },
    description: {
      en: 'A rich, non-greasy cream that provides intense hydration for dry to very dry sensitive skin on face and body. Clinically proven to start repairing the moisture barrier in 24 hours.',
      ar: 'كريم غني غير دهني يوفر ترطيباً مكثفاً للبشرة الجافة إلى الجافة جداً الحساسة على الوجه والجسم. مُثبت سريرياً لبدء إصلاح حاجز الرطوبة خلال 24 ساعة.'
    },
    keyIngredients: {
      en: ['Sweet Almond Oil', 'Niacinamide', 'Panthenol', 'Vitamin E', 'Glycerin', 'Petrolatum'],
      ar: ['زيت اللوز الحلو', 'النياسيناميد', 'البانثينول', 'فيتامين إي', 'الجلسرين', 'البتروليوم']
    },
    ph: '5.5',
    usage: {
      en: 'Apply to face and body as needed. Use after bathing for best results.',
      ar: 'ضع على الوجه والجسم حسب الحاجة. استخدم بعد الاستحمام لأفضل النتائج.'
    },
    frequency: {
      en: 'Twice daily or as needed.',
      ar: 'مرتين يومياً أو حسب الحاجة.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'mild',
      en: 'Gentle - Suitable for infants and adults',
      ar: 'لطيف - مناسب للرضع والبالغين'
    },
    skinTypes: ['dry', 'sensitive', 'all'],
    routinePosition: {
      step: 'moisturize',
      en: 'Moisturizing step - Last step before sunscreen (AM) or final step (PM)',
      ar: 'خطوة الترطيب - الخطوة الأخيرة قبل واقي الشمس (صباحاً) أو الخطوة النهائية (مساءً)'
    },
    duration: {
      en: 'Continuous use. 48-hour hydration with one application.',
      ar: 'استخدام مستمر. ترطيب 48 ساعة بتطبيق واحد.'
    },
    indications: {
      en: ['Dry skin', 'Very dry skin', 'Sensitive skin', 'Face and body', 'Eczema-prone skin'],
      ar: ['بشرة جافة', 'بشرة جافة جداً', 'بشرة حساسة', 'الوجه والجسم', 'بشرة معرضة للأكزيما']
    },
    warnings: {
      en: ['For external use only.'],
      ar: ['للاستخدام الخارجي فقط.']
    },
    notes: {
      en: 'Clinically proven to completely restore moisture barrier in 1 week. Fragrance-free, paraben-free.',
      ar: 'مُثبت سريرياً لاستعادة حاجز الرطوبة بالكامل في أسبوع واحد. خالٍ من العطر، خالٍ من البارابين.'
    },
    safety: 'very-safe',
    imagePrompt: 'A tub of Cetaphil Moisturizing Cream with green and white packaging, clean white background, product photography, soft lighting, clean skincare presentation'
  },
  // CeraVe Products
  {
    id: 'cerave-cream',
    brand: 'cerave',
    category: 'moisturizer',
    name: {
      en: 'Moisturizing Cream',
      ar: 'كريم الترطيب'
    },
    subtitle: {
      en: 'Barrier-Restoring Cream with Ceramides & MVE Technology',
      ar: 'كريم استعادة الحاجز مع السيراميدات وتقنية MVE'
    },
    description: {
      en: 'A rich, non-greasy cream that provides 24-hour hydration and helps restore the protective skin barrier with 3 essential ceramides, hyaluronic acid, and patented MVE delivery technology.',
      ar: 'كريم غني غير دهني يوفر ترطيباً لمدة 24 ساعة ويساعد على استعادة حاجز البشرة الواقي مع 3 سيراميدات أساسية وحمض الهيالورونيك وتقنية التوصيل MVE المعتمدة.'
    },
    keyIngredients: {
      en: ['Ceramide NP', 'Ceramide AP', 'Ceramide EOP', 'Hyaluronic Acid', 'MVE Technology', 'Glycerin', 'Cholesterol'],
      ar: ['سيراميد NP', 'سيراميد AP', 'سيراميد EOP', 'حمض الهيالورونيك', 'تقنية MVE', 'الجلسرين', 'الكوليسترول']
    },
    ph: '5.5',
    usage: {
      en: 'Apply liberally to face and body as often as needed.',
      ar: 'ضع بسخاء على الوجه والجسم كلما احتجت.'
    },
    frequency: {
      en: 'Twice daily or as needed.',
      ar: 'مرتين يومياً أو حسب الحاجة.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'mild',
      en: 'Gentle - Developed with dermatologists, National Eczema Association approved',
      ar: 'لطيف - مطوّر مع أطباء الأمراض الجلدية، معتمد من الجمعية الوطنية للأكزيما'
    },
    skinTypes: ['dry', 'sensitive', 'all'],
    routinePosition: {
      step: 'moisturize',
      en: 'Moisturizing step - Final step in routine',
      ar: 'خطوة الترطيب - الخطوة النهائية في الروتين'
    },
    duration: {
      en: 'Continuous use. MVE technology provides 24-hour controlled release.',
      ar: 'استخدام مستمر. تقنية MVE توفر إطلاقاً مضبوطاً لمدة 24 ساعة.'
    },
    indications: {
      en: ['Dry skin', 'Sensitive skin', 'Eczema-prone skin', 'Compromised skin barrier', 'Face and body'],
      ar: ['بشرة جافة', 'بشرة حساسة', 'بشرة معرضة للأكزيما', 'حاجز بشرة مضعف', 'الوجه والجسم']
    },
    warnings: {
      en: ['For external use only.'],
      ar: ['للاستخدام الخارجي فقط.']
    },
    notes: {
      en: 'Accepted by the National Eczema Association. Fragrance-free, non-comedogenic, non-irritating.',
      ar: 'مقبول من الجمعية الوطنية للأكزيما. خالٍ من العطر، غير مسدّد للمسام، غير متهيج.'
    },
    safety: 'very-safe',
    imagePrompt: 'A tub of CeraVe Moisturizing Cream with white and blue packaging, clean white background, product photography, soft lighting, clean skincare presentation'
  },
  {
    id: 'cerave-cleanser',
    brand: 'cerave',
    category: 'cleanser',
    name: {
      en: 'Hydrating Cleanser',
      ar: 'منظف مرطب'
    },
    subtitle: {
      en: 'Non-Foaming Cleanser with Ceramides & Hyaluronic Acid',
      ar: 'منظف غير رغوي مع السيراميدات وحمض الهيالورونيك'
    },
    description: {
      en: 'A gentle, non-foaming cleanser that cleanses and hydrates without disrupting the skin barrier. Contains 3 essential ceramides, hyaluronic acid, and MVE technology for continuous hydration.',
      ar: 'منظف لطيف غير رغوي ينظف ويرطب دون تعطيل حاجز البشرة. يحتوي على 3 سيراميدات أساسية وحمض الهيالورونيك وتقنية MVE للترطيب المستمر.'
    },
    keyIngredients: {
      en: ['Ceramide NP', 'Ceramide AP', 'Ceramide EOP', 'Hyaluronic Acid', 'MVE Technology', 'Glycerin'],
      ar: ['سيراميد NP', 'سيراميد AP', 'سيراميد EOP', 'حمض الهيالورونيك', 'تقنية MVE', 'الجلسرين']
    },
    ph: '5.5',
    usage: {
      en: 'Wet skin with lukewarm water. Massage cleanser gently, then rinse.',
      ar: 'رطب البشرة بماء فاتر. دلك المنظف بلطف، ثم اشطف.'
    },
    frequency: {
      en: 'Morning and evening.',
      ar: 'صباحاً ومساءً.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'mild',
      en: 'Ultra-gentle - Maintains skin barrier while cleansing',
      ar: 'فائق اللطافة - يحافظ على حاجز البشرة أثناء التنظيف'
    },
    skinTypes: ['dry', 'sensitive', 'all'],
    routinePosition: {
      step: 'cleanse',
      en: 'First step - Gentle cleansing morning and evening',
      ar: 'الخطوة الأولى - تنظيف لطيف صباحاً ومساءً'
    },
    duration: {
      en: 'Continuous use. Maintains hydration for 24 hours post-cleansing.',
      ar: 'استخدام مستمر. يحافظ على الترطيب لمدة 24 ساعة بعد التنظيف.'
    },
    indications: {
      en: ['Normal to dry skin', 'Sensitive skin', 'Eczema-prone skin', 'Gentle makeup removal'],
      ar: ['بشرة طبيعية إلى جافة', 'بشرة حساسة', 'بشرة معرضة للأكزيما', 'إزالة مكياج لطيفة']
    },
    warnings: {
      en: ['For external use only.', 'Avoid eye area if sensitive.'],
      ar: ['للاستخدام الخارجي فقط.', 'تجنب منطقة العيون إذا كنت حساساً.']
    },
    notes: {
      en: 'Endorsed by the Eczema Association of Australasia. Fragrance-free, non-comedogenic, non-irritating.',
      ar: 'مُصادق عليه من جمعية الأكزيما الأسترالية. خالٍ من العطر، غير مسدّد للمسام، غير متهيج.'
    },
    safety: 'very-safe',
    imagePrompt: 'A bottle of CeraVe Hydrating Cleanser with white and green packaging, clean white background, product photography, soft lighting, clean skincare presentation'
  },
  // QV Products
  {
    id: 'qv-gentle-wash',
    brand: 'qv',
    category: 'cleanser',
    name: {
      en: 'QV Gentle Wash',
      ar: 'كيوفي غسول لطيف'
    },
    subtitle: {
      en: 'Soap-Free Foaming Wash for Dry & Sensitive Skin',
      ar: 'غسول رغوي خالٍ من الصابون للبشرة الجافة والحساسة'
    },
    description: {
      en: 'A lightly foaming, soap-free body wash with 15% glycerin to help hydrate very dry, itchy skin during cleansing. pH-balanced and free from soap, fragrance, color, lanolin, and propylene glycol.',
      ar: 'غسول جسم رغوي خفيف خالٍ من الصابون مع 15% جلسرين للمساعدة في ترطيب البشرة الجافة جداً والحاكة أثناء التنظيف. متوازن الحموضة وخالٍ من الصابون والعطر واللون واللانولين والبروبيلين غليكول.'
    },
    keyIngredients: {
      en: ['Glycerin 15%', 'Sodium Lauroyl Sarcosinate', 'Lauryl Betaine', 'Sodium Cocoyl Isethionate'],
      ar: ['جلسرين 15%', 'لورويل ساركوسينات الصوديوم', 'لوريل بيتين', 'كوكويل إيزيثيونات الصوديوم']
    },
    ph: '5.5',
    usage: {
      en: 'Use daily in shower or bath. Apply to wet skin, lightly massage, rinse, and pat dry.',
      ar: 'استخدم يومياً في الدش أو الحمام. ضع على بشرة رطبة، دلك بلطف، اشطف، وجفف برفق.'
    },
    frequency: {
      en: 'Daily during shower or bath.',
      ar: 'يومياً أثناء الاستحمام.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'mild',
      en: 'Ultra-gentle - Higher glycerin concentration than standard washes',
      ar: 'فائق اللطافة - تركيز جلسرين أعلى من الغسولات العادية'
    },
    skinTypes: ['dry', 'sensitive', 'all'],
    routinePosition: {
      step: 'cleanse',
      en: 'Body cleansing step - First step in shower/bath routine',
      ar: 'خطوة تنظيف الجسم - الخطوة الأولى في روتين الاستحمام'
    },
    duration: {
      en: 'Continuous use. Immediate softness; barrier support with regular use.',
      ar: 'استخدام مستمر. نعومة فورية؛ دعم الحاجز مع الاستخدام المنتظم.'
    },
    indications: {
      en: ['Dry skin', 'Very dry skin', 'Itchy skin', 'Sensitive skin', 'Eczema-prone skin', 'Infants and elderly'],
      ar: ['بشرة جافة', 'بشرة جافة جداً', 'بشرة حاكة', 'بشرة حساسة', 'بشرة معرضة للأكزيما', 'الرضع وكبار السن']
    },
    warnings: {
      en: ['Avoid eyes. If lather enters eyes, rinse with clean water.', 'For external use only.'],
      ar: ['تجنب العيون. إذا دخل الرغو إلى العيون، اشطف بماء نظيف.', 'للاستخدام الخارجي فقط.']
    },
    notes: {
      en: 'Vegan friendly. Australian made. Dermatologically tested. Suitable for infants and the elderly.',
      ar: 'صديق للنباتيين. صناعة أسترالية. مختبر جلدياً. مناسب للرضع وكبار السن.'
    },
    safety: 'very-safe',
    imagePrompt: 'A bottle of QV Gentle Wash with light blue and white packaging, clean white background, product photography, soft lighting, clean skincare presentation'
  },
  {
    id: 'qv-cream',
    brand: 'qv',
    category: 'moisturizer',
    name: {
      en: 'QV Cream',
      ar: 'كريم كيوفي'
    },
    subtitle: {
      en: 'Highly Concentrated Moisturizing Cream for Dry Skin',
      ar: 'كريم ترطيب عالي التركيز للبشرة الجافة'
    },
    description: {
      en: 'A highly concentrated moisturizing cream with a light formulation that absorbs easily. Suitable for dry, sensitive, or scaly skin conditions. Free from fragrance, color, and lanolin.',
      ar: 'كريم ترطيب عالي التركيز بتركيبة خفيفة يمتص بسهولة. مناسب لحالات البشرة الجافة أو الحساسة أو المتقشرة. خالٍ من العطر واللون واللانولين.'
    },
    keyIngredients: {
      en: ['Petrolatum', 'Light Liquid Paraffin', 'Dimethicone', 'Glycerin', 'Squalane'],
      ar: ['البتروليوم', 'بارافين سائل خفيف', 'ديميثيكون', 'جلسرين', 'سكوالان']
    },
    ph: '5.5',
    usage: {
      en: 'Apply to affected areas as often as required, especially after bathing.',
      ar: 'ضع على المناطق المتأثرة حسب الحاجة، خاصة بعد الاستحمام.'
    },
    frequency: {
      en: 'As often as needed, especially after bathing.',
      ar: 'حسب الحاجة، خاصة بعد الاستحمام.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'mild',
      en: 'Gentle - Suitable for daily frequent application',
      ar: 'لطيف - مناسب للتطبيق المتكرر اليومي'
    },
    skinTypes: ['dry', 'sensitive', 'all'],
    routinePosition: {
      step: 'moisturize',
      en: 'Moisturizing step - After cleansing or bathing',
      ar: 'خطوة الترطيب - بعد التنظيف أو الاستحمام'
    },
    duration: {
      en: 'Continuous use. Immediate hydration and softness.',
      ar: 'استخدام مستمر. ترطيب ونعومة فورية.'
    },
    indications: {
      en: ['Dry skin', 'Rough skin', 'Flaking skin', 'Sensitive skin', 'Eczema-prone skin'],
      ar: ['بشرة جافة', 'بشرة خشنة', 'بشرة متقشرة', 'بشرة حساسة', 'بشرة معرضة للأكزيما']
    },
    warnings: {
      en: ['For external use only.', 'Avoid application to broken skin unless directed by a doctor.'],
      ar: ['للاستخدام الخارجي فقط.', 'تجنب التطبيق على بشرة مكسورة إلا بإشراف طبيب.']
    },
    notes: {
      en: 'Suitable for infants, children, and adults. Australian made. Dermatologically tested.',
      ar: 'مناسب للرضع والأطفال والبالغين. صناعة أسترالية. مختبر جلدياً.'
    },
    safety: 'very-safe',
    imagePrompt: 'A tub of QV Cream with light blue and white packaging, clean white background, product photography, soft lighting, clean skincare presentation'
  },
  // Vichy Products
  {
    id: 'vichy-mineral89',
    brand: 'vichy',
    category: 'serum',
    name: {
      en: 'Minéral 89 Hyaluronic Acid Booster',
      ar: 'مينيرال 89 معزز حمض الهيالورونيك'
    },
    subtitle: {
      en: 'Daily Skin Fortifying & Plumping Serum',
      ar: 'سيروم يومي لتقوية البشرة وملؤها'
    },
    description: {
      en: 'A fortifying and plumping daily booster with 89% Vichy Volcanic Water and natural origin hyaluronic acid. Strengthens the skin barrier and provides 72-hour hydration.',
      ar: 'معزز يومي لتقوية البشرة وملؤها مع 89% من مياه فيشي البركانية وحمض الهيالورونيك من أصل طبيعي. يقوي حاجز البشرة ويوفر ترطيباً لمدة 72 ساعة.'
    },
    keyIngredients: {
      en: ['Vichy Volcanic Water 89%', 'Natural Origin Hyaluronic Acid', 'Niacinamide', 'Vitamin E', 'Squalane'],
      ar: ['مياه فيشي البركانية 89%', 'حمض الهيالورونيك من أصل طبيعي', 'النياسيناميد', 'فيتامين إي', 'السكوالان']
    },
    ph: '7.0',
    usage: {
      en: 'Apply 2 drops to cleansed face morning and evening, before moisturizer.',
      ar: 'ضع قطرتين على الوجه المنظف صباحاً ومساءً، قبل المرطب.'
    },
    frequency: {
      en: 'Twice daily, every day.',
      ar: 'مرتين يومياً، كل يوم.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'mild',
      en: 'Gentle - Suitable for all skin types including sensitive',
      ar: 'لطيف - مناسب لجميع أنواع البشرة بما فيها الحساسة'
    },
    skinTypes: ['all', 'sensitive'],
    routinePosition: {
      step: 'serum',
      en: 'Serum/Booster step - After toning, before moisturizer',
      ar: 'خطوة السيروم/المعزز - بعد التنغيم، قبل المرطب'
    },
    duration: {
      en: 'Continuous daily use. Visible plumping after 1 hour; stronger barrier after 1 month.',
      ar: 'استخدام يومي مستمر. امتلاء مرئي بعد ساعة؛ حاجز أقوى بعد شهر.'
    },
    indications: {
      en: ['Dehydrated skin', 'Dull complexion', 'Fine lines from dehydration', 'Weakened skin barrier', 'Urban pollution exposure'],
      ar: ['بشرة مجففة', 'بشرة باهتة', 'خطوط رفيعة من الجفاف', 'حاجز بشرة ضعيف', 'التعرض للتلوث الحضري']
    },
    warnings: {
      en: ['For external use only.', 'Avoid direct eye contact.'],
      ar: ['للاستخدام الخارجي فقط.', 'تجنب الاتصال المباشر بالعيون.']
    },
    notes: {
      en: 'Only 11 ingredients. Fragrance-free, silicone-free, alcohol-free, colorant-free. 72-hour hydration.',
      ar: '11 مكوناً فقط. خالٍ من العطر، خالٍ من السيليكون، خالٍ من الكحول، خالٍ من الأصباغ. ترطيب 72 ساعة.'
    },
    safety: 'very-safe',
    imagePrompt: 'A glass bottle of Vichy Mineral 89 serum with transparent blue gel and silver pump, clean white background, product photography, soft lighting, elegant skincare presentation'
  },
  {
    id: 'vichy-liftactiv',
    brand: 'vichy',
    category: 'moisturizer',
    name: {
      en: 'LiftActiv Collagen Specialist',
      ar: 'ليفتاكتيف مختص الكولاجين'
    },
    subtitle: {
      en: 'Anti-Aging Cream to Correct Collagen Loss',
      ar: 'كريم مضاد للشيخوخة لتصحيح فقدان الكولاجين'
    },
    description: {
      en: 'An anti-aging cream loaded with powerful dermatological ingredients of natural origin: peptides, vitamin C, and Vichy Volcanic Water. Corrects signs of collagen loss on skin with biological de-aging effect.',
      ar: 'كريم مضاد للشيخوخة محمّل بمكونات جلدية قوية من أصل طبيعي: ببتيدات، فيتامين سي، ومياه فيشي البركانية. يصحح علامات فقدان الكولاجين في البشرة بتأثير إزالة الشيخوخة البيولوجية.'
    },
    keyIngredients: {
      en: ['Peptides', 'Vitamin C (Ascorbyl Glucoside)', 'Vichy Volcanic Water', 'Adenosine', 'Acetyl Tetrapeptide-9', 'Pea Extract'],
      ar: ['ببتيدات', 'فيتامين سي (أسكوربيل غلوكوزيد)', 'مياه فيشي البركانية', 'أدينوزين', 'أسيتيل تتراببتيد-9', 'مستخلص البازلاء']
    },
    ph: '5.5',
    usage: {
      en: 'Apply to face and neck morning and evening after serum.',
      ar: 'ضع على الوجه والرقبة صباحاً ومساءً بعد السيروم.'
    },
    frequency: {
      en: 'Twice daily for optimal anti-aging results.',
      ar: 'مرتين يومياً لأفضل نتائج مضادة للشيخوخة.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'moderate',
      en: 'Moderate - Peptide and vitamin C anti-aging complex',
      ar: 'معتدل - مجمع ببتيد وفيتامين سي مضاد للشيخوخة'
    },
    skinTypes: ['aging', 'all'],
    routinePosition: {
      step: 'moisturize',
      en: 'Moisturizing step - After serum, before sunscreen (AM)',
      ar: 'خطوة الترطيب - بعد السيروم، قبل واقي الشمس (صباحاً)'
    },
    duration: {
      en: 'Continuous use. Visible firmness improvement after 4 weeks.',
      ar: 'استخدام مستمر. تحسن مرئي في الثبات بعد 4 أسابيع.'
    },
    indications: {
      en: ['Loss of firmness', 'Fine lines and wrinkles', 'Dull complexion', 'Collagen degradation', 'Signs of aging'],
      ar: ['فقدان الثبات', 'خطوط رفيعة وتجاعيد', 'بشرة باهتة', 'تحلل الكولاجين', 'علامات الشيخوخة']
    },
    warnings: {
      en: ['Use sunscreen during the day.', 'Patch test if sensitive to vitamin C.'],
      ar: ['استخدم واقي شمس خلال النهار.', 'اختبار رقعي إذا كنت حساساً لفيتامين سي.']
    },
    notes: {
      en: 'Hypoallergenic. Powder-like enveloping texture for instant lift and comfort.',
      ar: 'منخفض الحساسية. قوام مغلف بودري للرفع الفوري والراحة.'
    },
    safety: 'safe',
    imagePrompt: 'A jar of Vichy LiftActiv Collagen Specialist with white and red packaging, clean white background, product photography, soft lighting, elegant anti-aging skincare presentation'
  },
  // Uriage Products
  {
    id: 'uriage-bariederm',
    brand: 'uriage',
    category: 'treatment',
    name: {
      en: 'Bariéderm Cica-Cream with Cu-Zn',
      ar: 'بارييدرم سيكا كريم مع نحاس-زنك'
    },
    subtitle: {
      en: 'Insulating Repairing Cream for Damaged Skin',
      ar: 'كريم عازل ومرمّم للبشرة التالفة'
    },
    description: {
      en: 'A protective repairing cream that insulates, soothes, and repairs damaged skin. Contains patented Poly-2P complex, Cu-Zn, D-Panthenol, and Uriage Thermal Water for immediate bandage effect.',
      ar: 'كريم واقي ومرمّم يعزل ويهدئ ويرمّم البشرة التالفة. يحتوي على مجمع Poly-2P المعتمد، نحاس-زنك، D-بانثينول، ومياه يورياج الحرارية لتأثير ضمادة فوري.'
    },
    keyIngredients: {
      en: ['Poly-2P Patent', 'Copper Gluconate', 'Zinc Oxide', 'D-Panthenol (Vitamin B5)', 'Hyaluronic Acid', 'Smectite', 'Uriage Thermal Water'],
      ar: ['براءة اختراع Poly-2P', 'جلوكونات النحاس', 'أكسيد الزنك', 'D-بانثينول (فيتامين ب5)', 'حمض الهيالورونيك', 'السِمكتيت', 'مياه يورياج الحرارية']
    },
    ph: '7.0',
    usage: {
      en: 'Apply in a thick layer to cleansed, dry skin. Reapply as needed.',
      ar: 'ضع بطبقة سميكة على بشرة نظيفة جافة. أعد التطبيق حسب الحاجة.'
    },
    frequency: {
      en: 'As often as needed on damaged or irritated areas.',
      ar: 'حسب الحاجة على المناطق التالفة أو المتهيجة.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'moderate',
      en: 'Moderate - Protective and repairing actives with barrier film',
      ar: 'معتدل - مكونات واقية ومرمّمة مع فيلم حاجز'
    },
    skinTypes: ['all', 'sensitive', 'dry'],
    routinePosition: {
      step: 'treat',
      en: 'Treatment/Protection step - On damaged areas, before or as moisturizer',
      ar: 'خطوة العلاج/الحماية - على المناطق التالفة، قبل المرطب أو كمرطب'
    },
    duration: {
      en: 'Use until skin is fully repaired, then as needed.',
      ar: 'استخدم حتى تتعافى البشرة بالكامل، ثم حسب الحاجة.'
    },
    indications: {
      en: ['Damaged skin', 'Irritated skin', 'Chafing', 'Post-procedure', 'Dry patches', 'Nose and lip area'],
      ar: ['بشرة تالفة', 'بشرة متهيجة', 'احتكاك', 'ما بعد العمليات', 'بقع جافة', 'منطقة الأنف والشفاه']
    },
    warnings: {
      en: ['For external use only.', 'Do not use on deep wounds without medical advice.'],
      ar: ['للاستخدام الخارجي فقط.', 'لا تستخدم على جروح عميقة دون استشارة طبية.']
    },
    notes: {
      en: 'Creates an immediate "bandage effect". Purifies with copper and zinc. Suitable for the whole family.',
      ar: 'يخلق "تأثير ضمادة" فوري. يطهّر بالنحاس والزنك. مناسب للعائلة بأكملها.'
    },
    safety: 'safe',
    imagePrompt: 'A tube of Uriage Bariederm Cica Cream with white packaging, clean white background, product photography, soft lighting, elegant skincare presentation'
  },
  {
    id: 'uriage-thermal-water',
    brand: 'uriage',
    category: 'mist',
    name: {
      en: 'Eau Thermale Spray',
      ar: 'بخاخ المياه الحرارية'
    },
    subtitle: {
      en: 'Soothing Thermal Water from the French Alps',
      ar: 'مياه حرارية مهدئة من جبال الألب الفرنسية'
    },
    description: {
      en: 'A unique thermal water from the Uriage spring at 422 meters altitude, naturally rich in mineral salts and trace elements. Isotonic and pure, it provides unique soothing and healing properties.',
      ar: 'مياه حرارية فريدة من نبع يورياج على ارتفاع 422 متراً، غنية طبيعياً بالأملاح المعدنية والعناصر النزرة. متساوية التوتر ونقية، توفر خصائص مهدئة وشافية فريدة.'
    },
    keyIngredients: {
      en: ['Uriage Thermal Water', 'Calcium', 'Magnesium', 'Zinc', 'Manganese', 'Silica', 'Iron'],
      ar: ['مياه يورياج الحرارية', 'الكالسيوم', 'المغنيسيوم', 'الزنك', 'المنجنيز', 'السيليكا', 'الحديد']
    },
    ph: '6.8',
    usage: {
      en: 'Spray and leave for 2-3 minutes. Do not pat dry to maximize mineral absorption.',
      ar: 'رش واترك لمدة 2-3 دقائق. لا تجفف بالتربيت لتحقيق أقصى امتصاص للمعادن.'
    },
    frequency: {
      en: 'As often as needed throughout the day.',
      ar: 'حسب الحاجة على مدار اليوم.'
    },
    timeOfUse: 'am-pm',
    potency: {
      level: 'mild',
      en: 'Ultra-gentle - Pure isotonic thermal water',
      ar: 'فائق اللطافة - مياه حرارية نقية متساوية التوتر'
    },
    skinTypes: ['all', 'sensitive'],
    routinePosition: {
      step: 'tone',
      en: 'Toning/Soothing step - After cleansing, before serum',
      ar: 'خطوة التبريد/التهدئة - بعد التنظيف، قبل السيروم'
    },
    duration: {
      en: 'Continuous use as needed.',
      ar: 'استخدام مستمر حسب الحاجة.'
    },
    indications: {
      en: ['Soothing', 'Skin irritation', 'Diaper rash', 'After shaving', 'After sun exposure', 'Post-procedure', 'Set makeup'],
      ar: ['تهدئة', 'تهيج البشرة', 'التهاب الحفاض', 'بعد الحلاقة', 'بعد التعرض للشمس', 'ما بعد العمليات', 'تثبيت المكياج']
    },
    warnings: {
      en: ['For external use only.', 'Do not shake.'],
      ar: ['للاستخدام الخارجي فقط.', 'لا تهزّ الزجاجة.']
    },
    notes: {
      en: 'Isotonic concentration (same salt concentration as skin cells) ensures perfect skin tolerance. Highest mineral concentration of all French thermal waters.',
      ar: 'تركيز متساوي التوتر (نفس تركيز الملح في خلايا البشرة) يضمن تحملاً مثالياً للبشرة. أعلى تركيز معدني من جميع المياه الحرارية الفرنسية.'
    },
    safety: 'very-safe',
    imagePrompt: 'A white spray bottle of Uriage Eau Thermale with blue logo, clean white background, product photography, soft lighting, elegant skincare presentation'
  }
];
