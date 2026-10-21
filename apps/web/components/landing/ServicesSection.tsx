import React from 'react';
import styles from './ServicesSection.module.css';

interface ServiceCardData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  badge: string;
}

const servicesData: ServiceCardData[] = [
  {
    id: 'identity',
    number: '01',
    title: 'ابنِ هويتك',
    tagline: 'علامة شخصية ذات سلطة ومصداقية',
    description:
      'صمم ملفك التعريفي الاحترافي ونطاقك الشخصي الخاص بما يعكس عمق خبرتك، ويبني جسور الثقة المباشرة مع جمهورك المستهدف وعملائك المميزين.',
    features: [
      'نطاق مخصص باسمك (yourname.com)',
      'سيرة ذاتية تفاعلية وقصص نجاحك',
      'معرض لأبرز الإنجازات والشهادات',
      'تكامل مع شبكات التواصل الاجتماعي'
    ],
    badge: 'الخطوة الأولى',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'launch',
    number: '02',
    title: 'أطلق موقعك',
    tagline: 'منصة رقمية جاهزة في دقائق بدون برمجة',
    description:
      'احصل على موقع شخصي متكامل فائق السرعة، مصمم ومجهز خصيصاً للتحويل والمبيعات، متوافق مع كافة الهواتف الذكية ومحركات البحث SEO.',
    features: [
      'قوالب مصممة خصيصاً للمستشارين والخبراء',
      'سرعة تحميل فائقة وتوافق تام مع الجوال',
      'تهيئة شاملة لمحركات البحث (SEO)',
      'استضافة سحابية آمنة ومحمية بالكامل'
    ],
    badge: 'الخطوة الثانية',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    id: 'grow',
    number: '03',
    title: 'نمّي مشروعك',
    tagline: 'أتمتة المبيعات وتوسيع قاعدة عملائك',
    description:
      'ابدأ ببيع منتجاتك الرقمية، كتبك الإلكترونية، وجلساتك الاستشارية عبر بوابات دفع آمنة محلية وعالمية، مع تحليلات دقيقة لمتابعة نمو أرباحك.',
    features: [
      'جدولة جلسات الاستشارة وحجز المواعيد آلياً',
      'بيع الكتب الإلكترونية، القوالب، والدورات',
      'بوابات دفع متعددة (مدى، Apple Pay، بطاقات)',
      'لوحة تحليلات وإحصاءات الأرباح اللحظية'
    ],
    badge: 'الخطوة الثالثة',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={`container ${styles.servicesContainer}`}>
        {/* Two-column layout: Right column (header/overview) & Left column (3 cards) */}
        <div className={styles.servicesGrid}>
          {/* Right Column: Sticky Heading and Philosophy */}
          <div className={styles.servicesHeaderColumn}>
            <div className={styles.stickyWrapper}>
              <div className={styles.sectionBadge}>
                <span className={styles.badgeDot} />
                <span>خدماتنا المتكاملة</span>
              </div>

              <h2 className={styles.sectionTitle}>
                كل ما تحتاجه لتحويل خبرتك إلى <br />
                <span className={styles.titleHighlight}>مشروع رقمي رابح</span>
              </h2>

              <p className={styles.sectionDesc}>
                صممنا رحلة متكاملة من 3 محاور رئيسية تمكّنك من الانتقال بسلاسة من تقديم
                الخدمات العشوائية إلى امتلاك أصل رقمي مستدام يدرّ عليك دخلاً متصاعداً
                ويرسّخ مكانتك في مجالك.
              </p>

              <div className={styles.featureHighlights}>
                <div className={styles.miniFeature}>
                  <div className={styles.miniIcon}>⚡</div>
                  <div>
                    <h4 className={styles.miniTitle}>تنفيذ فائق السرعة</h4>
                    <p className={styles.miniText}>جاهز للنشر خلال 15 دقيقة فقط</p>
                  </div>
                </div>

                <div className={styles.miniFeature}>
                  <div className={styles.miniIcon}>🔒</div>
                  <div>
                    <h4 className={styles.miniTitle}>بنية تحتية آمنة</h4>
                    <p className={styles.miniText}>حماية كاملة لملفاتك ومدفوعاتك</p>
                  </div>
                </div>
              </div>

              <a href="#pricing" className={styles.sectionCtaBtn}>
                <span>ابدأ رحلة النجاح الآن</span>
                <span className={styles.ctaArrow}>←</span>
              </a>
            </div>
          </div>

          {/* Left Column: The 3 Detailed Service Cards */}
          <div className={styles.servicesCardsColumn}>
            {servicesData.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.cardTopRow}>
                  <div className={styles.cardIconBox}>{service.icon}</div>
                  <div className={styles.badgeAndNumber}>
                    <span className={styles.cardStepBadge}>{service.badge}</span>
                    <span className={`${styles.cardNumber} en-font`}>{service.number}</span>
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <h4 className={styles.cardTagline}>{service.tagline}</h4>
                <p className={styles.cardDesc}>{service.description}</p>

                <div className={styles.cardFeaturesList}>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <span className={styles.featureCheck}>✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
