"use client";

import React, { useState } from 'react';
import styles from './HeroMockup.module.css';

interface HeroMockupProps {
  activeTab?: 'profile' | 'products';
}

export const HeroMockup: React.FC<HeroMockupProps> = ({ activeTab = 'profile' }) => {
  const [selectedBar, setSelectedBar] = useState<number | null>(4);

  const chartData = [
    { day: 'السبت', height: 45, value: '1,850 $' },
    { day: 'الأحد', height: 60, value: '2,400 $' },
    { day: 'الإثنين', height: 80, value: '3,650 $' },
    { day: 'الثلاثاء', height: 50, value: '2,100 $' },
    { day: 'الأربعاء', height: 95, value: '4,890 $' },
    { day: 'الخميس', height: 75, value: '3,200 $' },
    { day: 'الجمعة', height: 88, value: '3,950 $' },
  ];

  return (
    <div className={styles.mockupWrapper}>
      {/* Background ambient glow behind dashboard */}
      <div className={styles.ambientGlow} />

      {/* Main Glass Dashboard Card */}
      <div className={styles.dashboardCard}>
        {/* Card Header: Profile Info */}
        <div className={styles.profileHeader}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarImg}>
              <span>أم</span>
            </div>
            <span className={styles.onlineBadge} title="متصل الآن" />
          </div>

          <div className={styles.profileMeta}>
            <div className={styles.nameRow}>
              <h3 className={styles.profileName}>د. أحمد المنصوري</h3>
              <span className={styles.verifiedBadge} title="حساب خبير موثق">
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.checkIcon}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                موثق
              </span>
            </div>
            <p className={styles.profileRole}>مستشار استراتيجيات الأعمال والنمو</p>
          </div>

          <div className={styles.ratingBadge}>
            <span className={styles.star}>★</span>
            <span className={styles.ratingNum}>4.9</span>
            <span className={styles.reviewsCount}>(320+)</span>
          </div>
        </div>

        {/* Dynamic content based on activeTab */}
        {activeTab === 'profile' ? (
          <>
            {/* Metrics Row */}
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>إجمالي المبيعات</span>
                <div className={styles.metricValueRow}>
                  <span className={`${styles.metricValue} en-font`}>28,450 $</span>
                  <span className={styles.growthBadge}>+24.5% ↑</span>
                </div>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>العملاء النشطون</span>
                <div className={styles.metricValueRow}>
                  <span className={`${styles.metricValue} en-font`}>1,420</span>
                  <span className={styles.growthBadge}>+14% ↑</span>
                </div>
              </div>
            </div>

            {/* Weekly Bar Chart */}
            <div className={styles.chartSection}>
              <div className={styles.chartHeader}>
                <span className={styles.chartTitle}>نمو الإيرادات الأسبوعي</span>
                <span className={styles.chartPeriod}>آخر 7 أيام</span>
              </div>

              <div className={styles.chartBarsContainer}>
                {chartData.map((item, index) => {
                  const isSelected = selectedBar === index;
                  return (
                    <div
                      key={item.day}
                      className={styles.barColumn}
                      onMouseEnter={() => setSelectedBar(index)}
                    >
                      {isSelected && (
                        <div className={styles.barTooltip}>
                          <span className="en-font">{item.value}</span>
                        </div>
                      )}
                      <div className={styles.barTrack}>
                        <div
                          className={`${styles.barFill} ${isSelected ? styles.barFillActive : ''}`}
                          style={{ height: `${item.height}%` }}
                        />
                      </div>
                      <span className={styles.barDay}>{item.day}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Product List */}
            <div className={styles.recentSales}>
              <div className={styles.salesHeader}>
                <span>الخدمات الأكثر طلباً</span>
                <span className={styles.salesSub}>مكتمل 102 حجز</span>
              </div>
              <div className={styles.saleItem}>
                <div className={styles.saleIconBox}>💼</div>
                <div className={styles.saleInfo}>
                  <div className={styles.saleTitle}>جلسة استشارية خاصة 1:1</div>
                  <div className={styles.saleSubtitle}>60 دقيقة عبر زووم</div>
                </div>
                <div className={`${styles.salePrice} en-font`}>150 $</div>
              </div>
            </div>
          </>
        ) : (
          /* Products Tab View */
          <div className={styles.productsTabView}>
            <div className={styles.productsGrid}>
              <div className={styles.productCardItem}>
                <div className={styles.productThumb}>📚</div>
                <div className={styles.productDetails}>
                  <h4 className={styles.productItemTitle}>دليل بناء الهوية الرقمية</h4>
                  <span className={styles.productBadge}>كتاب إلكتروني PDF</span>
                  <div className={styles.productPriceRow}>
                    <span className={`${styles.productPrice} en-font`}>49 $</span>
                    <span className={styles.productSales}>84 مبيعات</span>
                  </div>
                </div>
              </div>

              <div className={styles.productCardItem}>
                <div className={styles.productThumb}>🎥</div>
                <div className={styles.productDetails}>
                  <h4 className={styles.productItemTitle}>ورشة العمل: أتمتة الاستشارات</h4>
                  <span className={styles.productBadge}>دورة مسجلة</span>
                  <div className={styles.productPriceRow}>
                    <span className={`${styles.productPrice} en-font`}>99 $</span>
                    <span className={styles.productSales}>46 مبيعات</span>
                  </div>
                </div>
              </div>

              <div className={styles.productCardItem}>
                <div className={styles.productThumb}>📋</div>
                <div className={styles.productDetails}>
                  <h4 className={styles.productItemTitle}>حزمة نماذج عقود العمل الحر</h4>
                  <span className={styles.productBadge}>قوالب جاهزة</span>
                  <div className={styles.productPriceRow}>
                    <span className={`${styles.productPrice} en-font`}>29 $</span>
                    <span className={styles.productSales}>118 مبيعات</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Button (Lime +) */}
      <div className={styles.floatingActionBtn} title="إضافة منتج رقمي أو استشارة جديدة">
        <svg viewBox="0 0 24 24" className={styles.floatingPlusIcon} fill="none" stroke="currentColor" strokeWidth="3">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        <span className={styles.floatingActionTooltip}>إضافة خدمة جديدة</span>
      </div>

      {/* Floating Card: Recent Order Notification */}
      <div className={styles.floatingOrderCard}>
        <div className={styles.orderIconWrapper}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.orderCheckSvg}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className={styles.orderText}>
          <div className={styles.orderHeadline}>طلب رقمي جديد!</div>
          <div className={styles.orderProduct}>دليل بناء الهوية الرقمية</div>
          <div className={styles.orderMeta}>
            <span className={`${styles.orderPrice} en-font`}>+49 $</span>
            <span className={styles.orderTime}>منذ دقيقتين</span>
          </div>
        </div>
      </div>

      {/* Floating Card: Fast Launch Badge */}
      <div className={styles.floatingLiveCard}>
        <span className={styles.livePulseDot} />
        <span className={styles.liveText}>الموقع منشور ومفعل بنجاح</span>
      </div>
    </div>
  );
};

export default HeroMockup;
