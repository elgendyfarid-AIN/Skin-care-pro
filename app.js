/* ==========================================
// 🎨 التصميم الأليت الإقليمي (V2)
// للألوان والفخامة والحركات الناعمة
// ========================================== */

:root {
    --bg-color: #FDFDFD; /* أبيض لؤلؤي */
    --surface-color: #FFFFFF;
    --primary-navy: #0A192F; /* أزرق داكن فخم (الأليت) */
    --accent-gold: #D4AF37; /* ذهبي هادئ */
    --text-main: #333333; /* رمادي داكن مريح للعين */
    --text-muted: #666666;
    --border-color: #EAEAEA;
    --shadow-soft: 0 8px 30px rgba(0, 0, 0, 0.05);
    --shadow-hover: 0 12px 40px rgba(0, 0, 0, 0.1);
    --transition-smooth: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

[data-theme="dark"] {
    --bg-color: #060E17;
    --surface-color: #0A192F;
    --primary-navy: #E6F1FF;
    --accent-gold: #F3C623;
    --text-main: #FDFDFD;
    --text-muted: #A8B2D1;
    --border-color: #1A365D;
    --shadow-soft: 0 8px 30px rgba(0, 0, 0, 0.4);
    --shadow-hover: 0 12px 40px rgba(0, 0, 0, 0.6);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Tajawal', sans-serif; /* خط عربي حديث وأنيق */
}

body {
    background-color: var(--bg-color);
    color: var(--text-main);
    transition: var(--transition-smooth);
    line-height: 1.6;
    overflow-x: hidden;
}

/* شريط التنقل الأليت */
.elite-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background-color: var(--surface-color);
    box-shadow: var(--shadow-soft);
    position: sticky;
    top: 0;
    z-index: 100;
}

.brand-logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-navy);
    transition: var(--transition-smooth);
}

.brand-logo:hover {
    color: var(--accent-gold);
    transform: scale(1.05);
}

.gold-text {
    color: var(--accent-gold);
}

.controls-container {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.control-btn {
    background: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-main);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition-smooth);
}

.control-btn:hover {
    background-color: rgba(212, 175, 55, 0.1);
    color: var(--accent-gold);
    border-color: var(--accent-gold);
    transform: translateY(-2px);
}

/* شريط البحث */
.search-bar {
    outline: none;
    cursor: text;
}

.search-bar:focus {
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
}

/* تصميم كروت المنتجات والعائلات الأليت */
.main-container {
    padding: 2rem 5%;
}

.sections-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
}

.tab-btn {
    background: transparent;
    border: none;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-muted);
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: var(--transition-smooth);
}

.tab-btn.active, .tab-btn:hover {
    color: var(--primary-navy);
    border-bottom-color: var(--accent-gold);
}

.product-card {
    border: 1px solid var(--border-color);
    padding: 20px;
    border-radius: 12px;
    background-color: var(--surface-color);
    cursor: pointer;
    transition: var(--transition-smooth);
    border-bottom: 4px solid transparent;
}

.product-card:hover {
    box-shadow: var(--shadow-hover);
    transform: translateY(-8px);
    border-bottom-color: var(--accent-gold);
}

.routine-step-tag {
    position: absolute;
    top: 10px;
    right: 10px;
    background: var(--accent-gold);
    color: white;
    padding: 5px 10px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.9rem;
    box-shadow: var(--shadow-soft);
}

.elite-btn {
    margin-top: auto;
    background-color: var(--primary-navy);
    color: white;
    border-color: var(--primary-navy);
}

.elite-btn:hover {
    background-color: var(--accent-gold);
    color: white;
    border-color: var(--accent-gold);
}

/* تصميم البطاقة الطبية المحدثة (Modal الأليت) */
.modal-overlay, .glossary-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(6, 14, 23, 0.8);
    display: none; /* مخفي افتراضياً */
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.modal-content, .glossary-box {
    background-color: var(--surface-color);
    padding: 2rem;
    border-radius: 20px;
    width: 90%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: var(--shadow-hover);
    position: relative;
    transform: translateY(20px);
    transition: var(--transition-smooth);
    border: 1px solid var(--accent-gold);
}

.glossary-box {
    max-width: 400px;
    border-top: 5px solid var(--accent-gold);
}

.close-modal-btn, .close-glossary-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--text-muted);
    cursor: pointer;
    transition: var(--transition-smooth);
}

.close-modal-btn:hover, .close-glossary-btn:hover {
    color: #FF4D4D;
}

/* تصميم المكونات التفاعلية (القاموس) */
.interactive-term, .glossary-term {
    font-weight: 700;
    color: var(--accent-gold);
    text-decoration: none;
    border-bottom: 2px dashed var(--accent-gold);
    padding-bottom: 2px;
    cursor: pointer;
    transition: var(--transition-smooth);
}

.interactive-term:hover {
    background-color: rgba(212, 175, 55, 0.1); /* تأثير خفيف عند اللمس */
}

/* دعم الموبايل */
@media (max-width: 768px) {
    .sections-tabs {
        flex-direction: column;
        align-items: center;
    }
    .main-container {
        padding: 1rem;
    }
    .modal-content {
        padding: 1.5rem;
    }
    .search-bar {
        width: 150px;
    }
}
