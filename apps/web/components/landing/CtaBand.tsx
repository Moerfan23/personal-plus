import React from 'react';
import styles from './CtaBand.module.css';

export const CtaBand: React.FC = () => {
  return (
    <section className={styles.ctaBand}>
      <div className={`container ${styles.container}`}>
        <div className={styles.bandCard}>
          <div className={styles.glowOne} />
          <div className={styles.glowTwo} />

          <h2 className={styles.bandTitle}>
            خبرتك تستحق أكثر من حساب على وسائل التواصل.
          </h2>
          <p className={styles.bandDesc}>
            انطلق مجاناً اليوم — ابنِ علامتك التجارية الرقمية في أقل من ساعة،
            وارتقِ للخطط الاحترافية عندما يكبر مشروعك.
          </p>

          <div className={styles.bandActions}>
            <a href="#pricing" className={styles.primaryBtn}>
              <span>ابدأ مجاناً الآن</span>
              <span className={styles.arrow}>←</span>
            </a>
            <a href="#contact" className={styles.ghostBtn}>
              تحدث مع الفريق أولاً
            </a>
          </div>

          <div className={styles.bandTrust}>
            <span>✓ بلا بطاقة بنكية</span>
            <span>✓ إلغاء في أي وقت</span>
            <span>✓ دعم عربي كامل</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
