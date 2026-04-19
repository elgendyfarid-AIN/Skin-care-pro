// القوائم الأساسية (لا تمسح هذا الجزء أبداً)
const productsList = [];
const ingredientsDictionary = {};

// ==========================================
// --- المنتج رقم 1: غسول إيفاكلار ---
// ==========================================
ingredientsDictionary["Zinc PCA"] = { 
    name: { ar: "زنك بيكولينات", en: "Zinc PCA" }, 
    desc: { ar: "مادة تنظم إفراز الدهون ولها خصائص مضادة للبكتيريا المسببة لحب الشباب.", en: "Regulates sebum production and has antibacterial properties." } 
};
ingredientsDictionary["Thermal Spring Water"] = { 
    name: { ar: "مياه الينابيع الحرارية", en: "Thermal Spring Water" }, 
    desc: { ar: "مياه طبيعية تهدئة تهيج البشرة وتخفف الاحمرار.", en: "Natural water that soothes skin irritation and reduces redness." } 
};

productsList.push({
    "brand": "La Roche-Posay",
    "name": {
        "ar": "إيفاكلار جل غسول رغوي",
        "en": "Effaclar Purifying Foaming Gel"
    },
    "description": {
        "ar": "غسول يومي للبشرة الدهنية والمعرضة لحب الشباب، ينظف بلطف ويقلل الإفرازات الدهنية دون تجفيف البشرة.",
        "en": "Daily cleanser for oily and acne-prone skin, gently cleanses and reduces sebum without over-drying."
    },
    "key_ingredients": ["Zinc PCA", "Thermal Spring Water"],
    "flags": {
        "pregnancy_safe": true
    }
});
