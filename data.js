// ==========================================
// القوائم الأساسية للموقع (لا تمسحها أبداً)
// ==========================================
const ingredientsDictionary = {};
const brandsList = [];
const productsList = [];
const casesList = [];

// ==========================================
// 1. العلامات التجارية والعائلات
// ==========================================
brandsList.push({
    id: 'laroche',
    name: 'La Roche-Posay',
    families: [
        { id: 'effaclar', name: { ar: 'عائلة إيفاكلار (للبشرة الدهنية)', en: 'Effaclar (Oily Skin)' } }
    ]
});

// ==========================================
// 2. المواد الفعالة
// ==========================================
ingredientsDictionary["Zinc PCA"] = { 
    name: { ar: "زنك بيكولينات", en: "Zinc PCA" }, 
    desc: { ar: "ينظم الإفرازات الدهنية ويقاوم البكتيريا.", en: "Regulates sebum and fights bacteria." } 
};

// ==========================================
// 3. المنتجات (بالصور النصية)
// ==========================================
productsList.push({
    id: 'p_effaclar_gel',
    brandId: 'laroche',
    familyId: 'effaclar',
    name: { ar: "إيفاكلار جل غسول رغوي", en: "Effaclar Foaming Gel" },
    description: { ar: "غسول يومي للبشرة الدهنية وحب الشباب.", en: "Daily cleanser for oily and acne-prone skin." },
    key_ingredients: ["Zinc PCA"],
    flags: { pregnancy_safe: true },
    
    // ده كود لصورة شفافة تجريبية. لما تحب تحط صورة حقيقية، بتجيبها من أي موقع بيحول الصور لـ Base64 وتحط الكود الطويل هنا بين علامات التنصيص.
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
});

// ==========================================
// 4. الحالات والروتين العلاجي
// ==========================================
casesList.push({
    id: 'acne',
    name: { ar: 'حب الشباب', en: 'Acne' },
    routine: [
        { 
            stepTitle: { ar: 'الخطوة 1: الغسول والتنظيف العميق', en: 'Step 1: Cleansing' }, 
            productIds: ['p_effaclar_gel'] // الغسول هيظهر أوتوماتيك في الخطوة دي
        }
    ]
});
