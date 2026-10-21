import React, { useState } from 'react';
import HeroMockup from './HeroMockup';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'products'>('profile');

  return (
    <section id="hero" className={styles.heroSection}>
      {/* Background Radial Glow */}
      <div className={styles.heroRadialGlow} />

      <div className={`container ${styles.heroContainer}`}>
        {/* Two-column layout */}
        <div className={styles.heroGrid}>
          {/* Right column in RTL: Main Value Proposition & CTAs */}
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeSparkle}>✦</span>
              <span>المنصة المتكاملة لصناع المعرفة والخبراء</span>
            </div>

            <h1 className={styles.heroTitle}>
              من خبرتك إلى <br />
              <span className={styles.limeHighlight}>مشروعك الرقمي.</span>
            </h1>

            <p className={styles.heroDescription}>
              حوّل رصيدك المعرفي وخبراتك المهنية إلى موقع شخصي فائق الاحترافية، جلسات
              استشارية مجدولة، ومنتجات رقمية عالية المبيعات — كل ذلك في مكان واحد وبدون
              الحاجة لأي خبرة تقنية.
            </p>

            {/* CTAs */}
            <div className={styles.ctaGroup}>
              <a href="#pricing" className={styles.primaryCta}>
                <span>ابدأ الآن</span>
                <span className={styles.arrowIcon}>←</span>
              </a>

              <a href="#services" className={styles.secondaryCta}>
                <span>استكشف المزايا</span>
              </a>
            </div>

            {/* Key Value Points */}
            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <span className={styles.trustCheck}>✓</span>
                <span>إطلاق فوري في دقائق</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustCheck}>✓</span>
                <span>بوابات دفع محلية وعالمية</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustCheck}>✓</span>
                <span>دعم عربي متكامل 100%</span>
              </div>
            </div>
          </div>

          {/* Left column in RTL: Interactive Dashboard Mockup */}
          <div className={styles.heroVisual}>
            <HeroMockup activeTab={activeTab} />
          </div>
        </div>

        {/* Tab Indicators below the two-column hero */}
        <div className={styles.tabsWrapper}>
          <div className={styles.tabsContainer} role="tablist" aria-label="أنماط المنصة">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'profile'}
              className={`${styles.tabBtn} ${activeTab === 'profile' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.tabIcon}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>الموقع الشخصي</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'products'}
              className={`${styles.tabBtn} ${activeTab === 'products' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('products')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.tabIcon}>
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>المنتجات الرقمية</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
