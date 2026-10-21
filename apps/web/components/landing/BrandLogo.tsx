import React from 'react';
import styles from './BrandLogo.module.css';

interface BrandLogoProps {
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  theme = 'dark',
  size = 'md',
  showSubtitle = false,
}) => {
  return (
    <a
      href="#hero"
      className={`${styles.logoContainer} ${styles[size]} ${styles[theme]}`}
      aria-label="Personal Plus — الرئيسية"
      dir="ltr"
    >
      <span className={styles.wordmark}>
        <span className={styles.wordText}>Personal Plus</span>
        <span className={styles.plusSign}>+</span>
      </span>
      {showSubtitle && (
        <span className={styles.brandSubtitle}>من خبرتك إلى مشروعك الرقمي</span>
      )}
    </a>
  );
};

export default BrandLogo;
