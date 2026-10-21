import React from 'react';
import styles from './WhySection.module.css';

const strengths = [
  {
    icon: 'spark',
    title: 'ذكاء اصطناعي يفهم خبرتك',
    desc: 'محرك استخلاص متقدم يحوّل إجاباتك البسيطة إلى ملف مهني متكامل واستراتيجية رقمية مخصصة — دون كتابة سطر واحد.',
  },
  {
    icon: 'globe',
    title: 'موقع شخصي يُبنى في دقائق',
    desc: 'قوالب مصممة باحتراف تنطلق من هويتك أنت، بأولوية للغة العربية وأداء عالمي السرعة.',
  },
  {
    icon: 'calendar',
    title: 'جلسات استشارية مؤتمتة',
    desc: 'حجز ومواعيد ودفع — النظام يدير جدولك ويدرّ دخلك بينما أنت تركز على ما تتقنه.',
  },
  {
    icon: 'package',
    title: 'منتجاتك الرقمية بضغطة',
    desc: 'حوّل دوراتك وكتبك وقوالبك إلى متجر متكامل ببوابات دفع محلية وعالمية.',
  },
  {
    icon: 'shield',
    title: 'بياناتك ملكك وحدك',
    desc: 'عزل كامل بين كل حساب، وشهادات تشفير على مستوى المؤسسات، وسياسة خصوصية واضحة بلا نجمات صغيرة.',
  },
  {
    icon: 'trend',
    title: 'تحليلات تقود نموك',
    desc: 'اعرف من زار موقعك، وماذا حمّل، ومن حجز جلسة — قراراتك القادمة مبنية على أرقام لا تخمين.',
  },
];

const iconPaths: Record<string, React.ReactNode> = {
  spark: <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  package: (
    <>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </>
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  trend: (
    <>
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </>
  ),
};

export const WhySection: React.FC = () => {
  return (
    <section id="why" className={styles.whySection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>لماذا Personal Plus؟</span>
          <h2 className={styles.sectionTitle}>
            كل ما يحتاجه صانع المعرفة، <span className={styles.limeText}>في منصة واحدة</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            توقف عن التنقل بين عشرة أدوات واشتراكات متفرقة. Personal Plus يجمع الهوية
            والحضور الرقمي والدخل في نظام واحد يعمل من أجلك.
          </p>
        </div>

        <div className={styles.strengthsGrid}>
          {strengths.map((item) => (
            <article key={item.title} className={styles.strengthCard}>
              <div className={styles.iconWrap}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.icon}
                >
                  {iconPaths[item.icon]}
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
