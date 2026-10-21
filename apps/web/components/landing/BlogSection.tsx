import React from 'react';
import styles from './BlogSection.module.css';

interface BlogPost {
  id: string;
  tag: string;
  readTime: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  icon: string;
}

{/* PLACEHOLDER */}
const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    tag: 'استراتيجيات المحتوى',
    readTime: '5 دقائق قراءة',
    title: 'كيف تحول استشاراتك الفردية إلى دورات رقمية تدر دخلاً سلبياً مستمراً؟',
    excerpt:
      'دليل خطوة بخطوة لأتمتة المعرفة، وتوثيق خبراتك العملية في منتجات رقمية قابلة للتوسع والبيع المتكرر لآلاف المستفيدين.',
    date: '12 أكتوبر 2026',
    author: 'أحمد المنصوري',
    icon: '💡',
  },
  {
    id: 'post-2',
    tag: 'بناء الهوية الشخصية',
    readTime: '4 دقائق قراءة',
    title: 'الدليل الشامل لصناعة هوية شخصية قوية تجذب العملاء المؤهلين في 2026',
    excerpt:
      'أهم الركائز البصرية والنفسية لترسيخ موقعك الريادي في مجالك التخصصي وتحويل المتابعين إلى عملاء يدفعون بسعادة.',
    date: '08 أكتوبر 2026',
    author: 'سارة العتيبي',
    icon: '🎯',
  },
  {
    id: 'post-3',
    tag: 'التسويق والمبيعات',
    readTime: '6 دقائق قراءة',
    title: '5 أخطاء يقع فيها الخبراء عند إطلاق موقعهم الشخصي الأول وكيف تتجنبها',
    excerpt:
      'تجنب العقبات الشائعة في صياغة الرسالة التسويقية، تصميم صفحات الهبوط، وتجربة الدفع السلسة لتحقيق أعلى معدل تحويل.',
    date: '29 سبتمبر 2026',
    author: 'فريق تحرير بيرسونال بلس',
    icon: '📈',
  },
];

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className={styles.blogSection}>
      <div className={`container ${styles.blogContainer}`}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerInfo}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeDot} />
              <span>المدونة والمقالات</span>
            </div>
            <h2 className={styles.sectionTitle}>
              أحدث الرؤى والأفكار <br />
              <span className={styles.titleHighlight}>لتطوير علامتك ومشروعك الرقمي</span>
            </h2>
            <p className={styles.sectionDesc}>
              مقالات ودراسات حالة عملية تساعدك على بناء نموذج عمل رقمي مربح ومستدام من واقع تجارب حقيقية.
            </p>
          </div>

          <div className={styles.headerAction}>
            <a href="#blog" className={styles.viewAllBtn}>
              <span>عرض جميع المقالات</span>
              <span className={styles.arrowIcon}>←</span>
            </a>
          </div>
        </div>

        {/* Blog Cards Grid */}
        {/* PLACEHOLDER */}
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.blogCard}>
              <div className={styles.cardHeaderBanner}>
                <div className={styles.postIconWrapper}>{post.icon}</div>
                <div className={styles.cardBadges}>
                  <span className={styles.tagBadge}>{post.tag}</span>
                  <span className={styles.readTimeBadge}>{post.readTime}</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.postTitle}>
                  <a href={`#blog-${post.id}`}>
                    {post.title}
                  </a>
                </h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>{post.author}</span>
                  <span className={styles.postDate}>{post.date}</span>
                </div>
                <a href={`#blog-${post.id}`} className={styles.readMoreLink}>
                  <span>اقرأ المقال</span>
                  <span className={styles.readMoreArrow}>←</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
