import React, { useState } from 'react';
import BrandLogo from './BrandLogo';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Main 4 Columns Grid */}
        <div className={styles.footerGrid}>
          {/* Column 1: Brand & Social */}
          <div className={styles.brandColumn}>
            <BrandLogo theme="dark" size="md" showSubtitle />
            <p className={styles.brandDescription}>
              المنصة المتكاملة الأولى عربياً المصممة خصيصاً لمساعدة الخبراء، المستشارين، وصناع المحتوى على تحويل خبراتهم إلى علامات تجارية رائدة ومشاريع رقمية مدرة للدخل.
            </p>

            <div className={styles.socialRow}>
              {/* X / Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X / Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/personalplusdev/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>روابط سريعة</h4>
            <ul className={styles.linksList}>
              <li><a href="#hero" className={styles.footerLink}>الرئيسية</a></li>
              <li><a href="#services" className={styles.footerLink}>خدمات المنصة</a></li>
              <li><a href="#clients" className={styles.footerLink}>أعمالنا والعملاء</a></li>
              <li><a href="#pricing" className={styles.footerLink}>خطط الأسعار</a></li>
              <li><a href="#stats" className={styles.footerLink}>قصص نجاح المشتركين</a></li>
              <li><a href="#blog" className={styles.footerLink}>المدونة والمقالات</a></li>
            </ul>
          </div>

          {/* Column 3: Support & Resources */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>الدعم والمصادر</h4>
            <ul className={styles.linksList}>
              <li><a href="#help" className={styles.footerLink} onClick={(e) => { e.preventDefault(); alert('مركز المساعدة قيد التطوير'); }}>مركز المساعدة والدعم</a></li>
              <li><a href="#guides" className={styles.footerLink} onClick={(e) => { e.preventDefault(); alert('أدلة البدء قيد الإعداد'); }}>دليل الانطلاق السريع</a></li>
              <li><a href="#terms" className={styles.footerLink} onClick={(e) => { e.preventDefault(); alert('الشروط والأحكام القياسية'); }}>الشروط والأحكام</a></li>
              <li><a href="#privacy" className={styles.footerLink} onClick={(e) => { e.preventDefault(); alert('سياسة الخصوصية وحماية البيانات'); }}>سياسة الخصوصية</a></li>
              <li><a href="#contact" className={styles.footerLink} onClick={(e) => { e.preventDefault(); alert('تواصل معنا: support@personalplus.io'); }}>اتصل بنا</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className={styles.newsletterColumn}>
            <h4 className={styles.columnTitle}>النشرة البريدية المتخصصة</h4>
            <p className={styles.newsletterDesc}>
              انضم لأكثر من 5,000 خبير ومستشار واحصل أسبوعياً على استراتيجيات مجربة لتوسيع نطاق مبيعاتك الرقمية.
            </p>

            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="أدخل بريدك الإلكتروني..."
                  className={styles.newsletterInput}
                  required
                />
                <button type="submit" className={styles.subscribeBtn} aria-label="اشتراك">
                  <span>اشترك</span>
                  <span className={styles.subArrow}>←</span>
                </button>
              </div>
              {subscribed && (
                <div className={styles.subscribeSuccess}>
                  ✓ تم اشتراكك بنجاح! تفقد بريدك الإلكتروني قريباً.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Details */}
        <div className={styles.bottomBar}>
          <div className={styles.copyrightText}>
            © {new Date().getFullYear()} بيرسونال بلس (<span className="en-font">Personal Plus</span>). جميع الحقوق محفوظة.
          </div>
          <div className={styles.madeWithText}>
            صُنع بشغف لتمكين صناع المعرفة في العالم العربي 🚀
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
