"use client";

import React, { useState } from 'react';
import { CLIENTS_DATA, ClientData, ClientDeliverable } from '@/data/clientsData';
import BeyondBirthsLogo from './BeyondBirthsLogo';
import styles from './ClientsSection.module.css';

export const ClientsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'enterprise' | 'creator'>('all');

  const filteredClients = CLIENTS_DATA.filter((client) => {
    if (filter === 'all') return true;
    return client.category === filter;
  });

  const getDeliverableIcon = (type: ClientDeliverable['iconType']) => {
    switch (type) {
      case 'lms':
        return '🎓';
      case 'book':
        return '📚';
      case 'security':
        return '🛡️';
      case 'brand':
        return '✨';
      case 'web':
        return '💻';
      case 'course':
        return '🎥';
      default:
        return '📦';
    }
  };

  return (
    <section id="clients" className={styles.clientsSection} aria-labelledby="clients-heading">
      {/* Ambient background glows */}
      <div className={styles.ambientGlow} />
      <div className={styles.ambientGlowRight} />

      <div className={`container ${styles.clientsContainer}`}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeSpark}>✦</span>
            <span>شركاء النجاح وأعمالنا المميزة</span>
          </div>

          <h2 id="clients-heading" className={styles.sectionTitle}>
            خبرات حقيقية تحوّلت إلى <br />
            <span className={styles.limeHighlight}>أصول رقمية رابحة ومشاريع مؤثرة</span>
          </h2>

          <p className={styles.sectionSubtitle}>
            لا نقدّم قوالب جاهزة أو مجرد مواقع تقليدية. نحن نهندس هوية الخبير، نطور منصته المخصصة،
            ونبني منتجاته ومناهجه الرقمية كاملة بأعلى معايير الجودة والتحويل.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.tabsWrapper}>
          <div className={styles.tabsContainer} role="tablist" aria-label="تصنيفات العملاء">
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'all'}
              className={`${styles.tabBtn} ${filter === 'all' ? styles.tabBtnActive : ''}`}
              onClick={() => setFilter('all')}
            >
              <span>جميع المشاريع</span>
              <span className={styles.tabCount}>{CLIENTS_DATA.length}</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={filter === 'enterprise'}
              className={`${styles.tabBtn} ${filter === 'enterprise' ? styles.tabBtnActive : ''}`}
              onClick={() => setFilter('enterprise')}
            >
              <span>جهات حكومية ومؤسسية</span>
              <span className={styles.tabCount}>
                {CLIENTS_DATA.filter((c) => c.category === 'enterprise').length}
              </span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={filter === 'creator'}
              className={`${styles.tabBtn} ${filter === 'creator' ? styles.tabBtnActive : ''}`}
              onClick={() => setFilter('creator')}
            >
              <span>خبراء ومنصات رقمية</span>
              <span className={styles.tabCount}>
                {CLIENTS_DATA.filter((c) => c.category === 'creator').length}
              </span>
            </button>
          </div>
        </div>

        {/* Clients Cards Showcase */}
        <div className={styles.cardsList}>
          {filteredClients.map((client: ClientData) => (
            <article key={client.id} className={styles.clientCard} id={`client-${client.id}`}>
              {/* Card Top Meta Bar */}
              <div className={styles.cardTopBar}>
                <div className={styles.categoryBadge}>
                  <span className={styles.categoryDot} />
                  <span>{client.categoryLabelAr}</span>
                  <span style={{ opacity: 0.5 }}>•</span>
                  <span className="en-font" style={{ fontSize: '0.75rem', opacity: 0.85 }}>
                    {client.categoryLabelEn}
                  </span>
                </div>

                <div className={styles.topBarActions}>
                  <span className={styles.statusTag}>
                    <span>✓</span>
                    <span>{client.statusBadgeAr}</span>
                  </span>

                  {client.websiteUrl && (
                    <a
                      href={client.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.websiteBtn}
                      title={`زيارة منصة ${client.nameEn}`}
                    >
                      <span>{client.websiteDomain || 'زيارة الموقع'}</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className={styles.externalIcon}
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body Grid */}
              <div className={styles.cardBodyGrid}>
                {/* Column 1: Client Overview, Story, and Tags */}
                <div className={styles.clientBrandStory}>
                  {/* Client Logo */}
                  {client.logoType === 'hrsd' ? (
                    <div className={`${styles.logoBox} ${styles.hrsdLogoContainer}`}>
                      <img
                        src="/hrsd-logo.png"
                        alt="وزارة الموارد البشرية والتنمية الاجتماعية"
                        style={{ height: '48px', width: 'auto', display: 'block' }}
                      />
                    </div>
                  ) : (
                    <div className={`${styles.logoBox} ${styles.beyondBirthsLogoContainer}`}>
                      <BeyondBirthsLogo size="md" variant="dark" />
                    </div>
                  )}

                  <h3 className={styles.clientNameAr}>{client.nameAr}</h3>
                  <div className={styles.clientNameEn}>{client.nameEn}</div>

                  <div className={styles.clientRole}>
                    <span>نطاق العمل: </span>
                    <span>{client.roleAr}</span>
                  </div>

                  <p className={styles.clientSummary}>{client.summaryAr}</p>

                  {/* Technology & Methodology Tags */}
                  <div className={styles.tagsRow}>
                    {client.tagsAr.map((tag, idx) => (
                      <span key={idx} className={styles.tagPill}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Column 2: Key Deliverables & What We Built */}
                <div className={styles.deliverablesBox}>
                  <div className={styles.deliverablesHeader}>
                    <span className={styles.deliverablesTitle}>ما تم تنفيذه وتسليمه</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-sage)' }}>
                      Core Deliverables
                    </span>
                  </div>

                  {client.deliverablesAr.map((item, idx) => (
                    <div key={idx} className={styles.deliverableItem}>
                      <div className={styles.deliverableIconWrapper}>
                        {getDeliverableIcon(item.iconType)}
                      </div>
                      <div className={styles.deliverableText}>
                        <div className={styles.deliverableItemTitle}>{item.title}</div>
                        <div className={styles.deliverableItemDesc}>{item.description}</div>
                      </div>
                    </div>
                  ))}

                  {/* Sub-list for Courses if available (e.g. Beyond Births) */}
                  {client.coursesList && client.coursesList.length > 0 && (
                    <div className={styles.coursesSubSection}>
                      <div className={styles.coursesListTitle}>
                        <span>🎓 الدورات والورش الرقمية المطورة:</span>
                      </div>
                      <div className={styles.coursesList}>
                        {client.coursesList.map((course, cIdx) => (
                          <div key={cIdx} className={styles.courseItem}>
                            <span className={styles.courseDot} />
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaBannerInfo}>
            <h3 className={styles.ctaBannerTitle}>هل أنت مستعد لتكون قصة النجاح القادمة؟</h3>
            <p className={styles.ctaBannerDesc}>
              سواء كنت خبيراً مستقلاً أو مستشاراً أو تمثل مؤسسة — دعنا نحول معرفتك وخبراتك
              إلى هوية رقمية رائدة ومنتجات تحقق دخلاً ونمواً مستمراً.
            </p>
          </div>

          <a href="#pricing" className={styles.ctaBannerBtn}>
            <span>ابدأ مشروعك الرقمي الآن</span>
            <span>←</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
