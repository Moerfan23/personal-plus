import React, { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'services', 'clients', 'pricing', 'stats', 'blog'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.navbarHeader} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navbarContainer}`}>
        {/* Right side in RTL: Brand Logo */}
        <div className={styles.navBrand}>
          <BrandLogo theme="dark" size="md" />
        </div>

        {/* Center: Desktop Navigation Links (RTL order) */}
        <nav className={styles.desktopNav} aria-label="التنقل الرئيسي">
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a
                href="#hero"
                className={`${styles.navLink} ${activeSection === 'hero' ? styles.active : ''}`}
              >
                الرئيسية
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#services"
                className={`${styles.navLink} ${activeSection === 'services' ? styles.active : ''}`}
              >
                الخدمات
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#clients"
                className={`${styles.navLink} ${activeSection === 'clients' ? styles.active : ''}`}
              >
                أعمالنا والعملاء
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#pricing"
                className={`${styles.navLink} ${activeSection === 'pricing' ? styles.active : ''}`}
              >
                الأسعار
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#blog"
                className={`${styles.navLink} ${activeSection === 'blog' ? styles.active : ''}`}
              >
                المدونة
              </a>
            </li>
          </ul>
        </nav>

        {/* Left side in RTL: Auth & CTA Buttons */}
        <div className={styles.navActions}>
          <a href="#login" className={styles.loginLink} onClick={(e) => { e.preventDefault(); alert('بوابة الدخول ستكون متاحة قريباً للمشتركين'); }}>
            تسجيل الدخول
          </a>
          <a href="#pricing" className={styles.ctaButton}>
            ابدأ الآن
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`${styles.hamburgerBtn} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        <div className={styles.mobileDrawerContent}>
          <ul className={styles.mobileNavList}>
            <li>
              <a
                href="#hero"
                className={`${styles.mobileNavLink} ${activeSection === 'hero' ? styles.mobileActive : ''}`}
                onClick={closeMenu}
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`${styles.mobileNavLink} ${activeSection === 'services' ? styles.mobileActive : ''}`}
                onClick={closeMenu}
              >
                الخدمات
              </a>
            </li>
            <li>
              <a
                href="#clients"
                className={`${styles.mobileNavLink} ${activeSection === 'clients' ? styles.mobileActive : ''}`}
                onClick={closeMenu}
              >
                أعمالنا والعملاء
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className={`${styles.mobileNavLink} ${activeSection === 'pricing' ? styles.mobileActive : ''}`}
                onClick={closeMenu}
              >
                الأسعار
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className={`${styles.mobileNavLink} ${activeSection === 'blog' ? styles.mobileActive : ''}`}
                onClick={closeMenu}
              >
                المدونة
              </a>
            </li>
          </ul>

          <div className={styles.mobileActions}>
            <a
              href="#login"
              className={styles.mobileLoginLink}
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                alert('بوابة الدخول ستكون متاحة قريباً للمشتركين');
              }}
            >
              تسجيل الدخول
            </a>
            <a href="#pricing" className={styles.mobileCtaButton} onClick={closeMenu}>
              ابدأ الآن مجاناً
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
