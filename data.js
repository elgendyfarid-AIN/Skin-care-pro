{
    id: 'lrp_effaclar_duo',
    brand: 'La Roche-Posay',
    name: { ar: 'إيفاكلار ديو (+)', en: 'Effaclar Duo (+)' },
    
    // 1. العمق الدوائي
    pharmacology: {
        ph_level: '5.5',
        mechanism: { ar: 'يعمل على تكسير البكتيريا المسببة للحبوب (C.acnes) بفضل مادة الميرتاسين، مع تنظيم الإفرازات الدهنية وتقشير دقيق للمسام المسدودة.', en: '...' },
        active_ingredients: [
            { name: 'Niacinamide', concentration: '4%', role: { ar: 'مضاد للالتهاب ومهدئ للاحمرار', en: 'Anti-inflammatory' } },
            { name: 'LHA + Salicylic Acid', concentration: '0.5%', role: { ar: 'تقشير كيميائي دقيق للطبقة القرنية', en: 'Micro-exfoliation' } }
        ]
    },

    // 2. الاستخدام المتقدم
    clinical_usage: {
        step_in_routine: { ar: 'الخطوة 3 (بعد الغسول والتونر المائي)', en: 'Step 3' },
        application: { ar: 'كمية بحجم حبة البازلاء (Pea-sized) توزع على كامل الوجه، وليس كنقطة علاجية (Spot treatment) فقط.', en: '...' },
        frequency: { ar: 'مرتين يومياً (صباحاً ومساءً)', en: 'Twice daily (AM/PM)' },
        
        // قواعد الدمج الاحترافية
        layering: {
            do_not_mix_with: ['Retinol', 'High-strength AHA/BHA', 'Pure Vitamin C'],
            best_mixed_with: ['Hyaluronic Acid', 'Ceramides']
        }
    },

    // 3. التحذيرات
    precautions: {
        pregnancy_safe: false,
        sun_sensitivity: true, // يتطلب واقي شمس
        notes: { ar: 'قد يسبب وخزاً خفيفاً في أول 3 أيام من الاستخدام، وهذا طبيعي.', en: '...' }
    }
}
