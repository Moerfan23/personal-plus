import React from 'react';
import styles from './StatsSection.module.css';

export const StatsSection: React.FC = () => {
  return (
    <section id="stats" className={styles.statsSection}>
      <div className={`container ${styles.statsContainer}`}>
        <div className={styles.statsGrid}>
          {/* Right Column in RTL: Stats and Impact Numbers */}
          <div className={styles.statsColumn}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeDot} />
              <span>أرقام وإنجازات</span>
            </div>

            <h2 className={styles.statsHeading}>
              أرقام تتحدث عن <br />
              <span className={styles.headingAccent}>ثقة صناع المعرفة بنا</span>
            </h2>

            <p className={styles.statsDescription}>
              انضم إلى نخبة من أفضل المدربين، المستشارين، وصناع المحتوى الذين اعتمدوا على بيرسونال بلس لبناء أصولهم الرقمية وتوسيع حضورهم المهني.
            </p>

            {/* PLACEHOLDER */}
            <div className={styles.metricsCardsGrid}>
              <div className={styles.metricItem}>
                <div className={`${styles.metricDigit} en-font`}>+150</div>
                <div className={styles.metricTitle}>منتج واستشارة رقمية</div>
                <div className={styles.metricSub}>تم إطلاقها بنجاح وتحقيق أرباح عبر المنصة</div>
                <span className={styles.placeholderLabel}>{/* PLACEHOLDER */}رقم تجريبي</span>
              </div>

              <div className={styles.metricItem}>
                <div className={`${styles.metricDigit} en-font`}>+500</div>
                <div className={styles.metricTitle}>خبير ومستشار نشط</div>
                <div className={styles.metricSub}>يديرون علاماتهم الشخصية واستشاراتهم</div>
                <span className={styles.placeholderLabel}>{/* PLACEHOLDER */}رقم تجريبي</span>
              </div>

              <div className={styles.metricItem}>
                <div className={`${styles.metricDigit} en-font`}>+10K</div>
                <div className={styles.metricTitle}>عميل ومستفيد في العالم العربي</div>
                <div className={styles.metricSub}>اشتروا خدمات ومنتجات عبر بواباتنا</div>
                <span className={styles.placeholderLabel}>{/* PLACEHOLDER */}رقم تجريبي</span>
              </div>
            </div>

            {/* Satisfaction Rate Ribbon */}
            <div className={styles.satisfactionRibbon}>
              <div className={styles.ribbonStars}>★★★★★</div>
              <div className={styles.ribbonText}>
                <span>نسبة رضا العملاء تتجاوز</span>
                <strong className="en-font"> 99.4% </strong>
                <span>بناءً على تقييمات المشتركين</span>
              </div>
            </div>
          </div>

          {/* Left Column in RTL: Real Experience / Testimonial Showcase */}
          {/* PLACEHOLDER */}
          <div className={styles.testimonialColumn}>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIconBox}>
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.quoteSvg}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className={styles.ratingRow}>
                <span className={styles.cardStars}>★★★★★</span>
                <span className={styles.verifiedReview}>تجربة موثقة</span>
              </div>

              <blockquote className={styles.testimonialQuote}>
                "تحويل خبرتي الاستشارية في التسويق إلى منصة رقمية مستقلة كان يبدو لي مهمة
                شاقة تتطلب شهوراً ومطورين. مع بيرسونال بلس، أنشأت موقعي بالكامل وبدأت ببيع
                أول جلسة استشارية خلال أقل من 48 ساعة فقط! التجربة وفّرت عليّ آلاف الدولارات
                ومنحتني استقلالية مالية كاملة."
              </blockquote>

              {/* Success Result Pill */}
              <div className={styles.resultPill}>
                <span className={styles.resultEmoji}>🚀</span>
                <span>حققت مبيعات تجاوزت </span>
                <strong className="en-font">+45,000 $</strong>
                <span> خلال 90 يوماً الأولى</span>
              </div>

              <div className={styles.authorSection}>
                <div className={styles.authorAvatar}>
                  <span className={styles.avatarInitials}>سع</span>
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>د. سارة العتيبي</h4>
                  <p className={styles.authorRole}>استشارية استراتيجيات التسويق والنمو المؤسسي</p>
                  <span className={`${styles.authorDomain} en-font`}>sarah-alotaibi.com</span>
                </div>
              </div>

              <div className={styles.testimonialFooterBadge}>
                <span>{/* PLACEHOLDER */}نموذج قصة نجاح ملهمة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
