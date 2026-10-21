import React, { useState } from 'react';
import styles from './PricingSection.module.css';

interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
  ctaType: 'lime' | 'outline' | 'subtle';
}

{/* PLACEHOLDER */}
const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'البداية (Basic)',
    tagline: 'لأصحاب الخبرات والمستقلين في بداية انطلاقتهم الرقمية',
    monthlyPrice: 9, // {/* PLACEHOLDER */}
    annualPrice: 7,  // {/* PLACEHOLDER */}
    features: [
      'موقع شخصي متكامل باسم نطاق فرعي',
      'حتى 3 منتجات رقمية أو خدمات استشارية',
      'بوابة دفع آمنة (عمولة 4%)',
      'ربط التقويم لحجز المواعيد',
      'شهادة أمان SSL مجانية',
      'دعم فني عبر البريد الإلكتروني'
    ],
    ctaText: 'ابدأ بالخطة الأساسية',
    ctaType: 'outline',
  },
  {
    id: 'professional',
    name: 'الاحترافية (Pro)',
    tagline: 'للخبراء والمستشارين الراغبين في أتمتة المبيعات وتوسيع النطاق',
    monthlyPrice: 29, // {/* PLACEHOLDER */}
    annualPrice: 24,  // {/* PLACEHOLDER */}
    popular: true,
    badge: 'الأكثر طلباً وشعبية',
    features: [
      'كل ميزات خطة البداية بالكامل',
      'نطاق مخصص مجاني مدى الحياة (.com)',
      'منتجات واستشارات غير محدودة',
      'بدون أي عمولة إضافية على المبيعات (0%)',
      'أتمتة البريد الإلكتروني للعملاء',
      'إحصائيات وتحليلات نمو متقدمة',
      'أولوية الدعم الفني المباشر 24/7'
    ],
    ctaText: 'ابدأ التجربة المجانية (14 يوماً)',
    ctaType: 'lime',
  },
  {
    id: 'advanced',
    name: 'المتقدمة (Advanced)',
    tagline: 'للمؤسسات والفرق وصناع المحتوى ذوي المشاريع المتعددة',
    monthlyPrice: 59, // {/* PLACEHOLDER */}
    annualPrice: 49,  // {/* PLACEHOLDER */}
    features: [
      'كل ميزات الخطة الاحترافية',
      'إدارة حتى 3 مواقع ومشاريع شخصية',
      'تخصيص برمجي وتصميمي كامل (Custom CSS)',
      'ربط واجهات برمجة التطبيقات (API & Webhooks)',
      'فريق عمل متعدد المستخدمين (حتى 5 مدراء)',
      'مدير حساب شخصي مخصص لمتابعة نموك',
      'جلسة استشارية استراتيجية شهرية'
    ],
    ctaText: 'تواصل مع فريق المبيعات',
    ctaType: 'subtle',
  },
];

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={`container ${styles.pricingContainer}`}>
        {/* Header Section */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerRight}>
            <div className={styles.pricingBadge}>
              <span className={styles.badgeSpark}>✦</span>
              <span>خطط واستثمار مرن</span>
            </div>
            <h2 className={styles.sectionTitle}>
              استثمر في نموك الرقمي <br />
              <span className={styles.limeHighlight}>بخطط شفافة بدون مفاجآت</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              ابدأ اليوم بنموذج تسعير مرن يتناسب مع كل مرحلة من رحلتك. يمكنك الترقية، التخفيض، أو الإلغاء في أي وقت بدون أي التزامات معقدة.
            </p>
          </div>

          {/* Billing Toggle (Monthly / Annual) */}
          <div className={styles.billingToggleWrapper}>
            <div className={styles.toggleContainer}>
              <button
                type="button"
                className={`${styles.toggleBtn} ${billingCycle === 'monthly' ? styles.toggleActive : ''}`}
                onClick={() => setBillingCycle('monthly')}
              >
                الدفع الشهري
              </button>
              <button
                type="button"
                className={`${styles.toggleBtn} ${billingCycle === 'annual' ? styles.toggleActive : ''}`}
                onClick={() => setBillingCycle('annual')}
              >
                الدفع السنوي
                <span className={styles.discountBadge}>وفّر 20%</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`${styles.pricingCard} ${plan.popular ? styles.popularCard : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className={styles.popularRibbon}>
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.planTagline}>{plan.tagline}</p>
                </div>

                {/* Price Display */}
                {/* PLACEHOLDER */}
                <div className={styles.priceContainer}>
                  <div className={styles.priceWrapper}>
                    <span className={styles.currencySymbol}>$</span>
                    <span className={`${styles.priceNumber} en-font`}>{price}</span>
                    <span className={styles.pricePeriod}>
                      / {billingCycle === 'annual' ? 'شهرياً (تدفع سنوياً)' : 'شهرياً'}
                    </span>
                  </div>
                  <span className={styles.placeholderNotice}>{/* PLACEHOLDER */}أسعار تجريبية</span>
                </div>

                {/* CTA Button */}
                <div className={styles.cardAction}>
                  <button
                    type="button"
                    className={`${styles.planBtn} ${styles[plan.ctaType]}`}
                    onClick={() => alert(`تم اختيار ${plan.name} - شكراً لاهتمامك!`)}
                  >
                    <span>{plan.ctaText}</span>
                    <span className={styles.btnArrow}>←</span>
                  </button>
                </div>

                {/* Features List */}
                <div className={styles.featuresSection}>
                  <div className={styles.featuresTitle}>ما تشمله هذه الخطة:</div>
                  <ul className={styles.featuresList}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className={styles.featureCheckIcon}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className={styles.guaranteeBanner}>
          <div className={styles.guaranteeIcon}>🛡️</div>
          <div className={styles.guaranteeContent}>
            <h4 className={styles.guaranteeTitle}>ضمان استرداد الأموال لمدة 14 يوماً بدون أسئلة</h4>
            <p className={styles.guaranteeText}>
              جرّب المنصة بحرية كاملة. إذا لم تكن راضياً بنسبة 100% عن النتائج خلال الأسبوعين الأولين، سنعيد لك استثمارك كاملاً وفوراً.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
