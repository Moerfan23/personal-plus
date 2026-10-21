import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Personal Plus</h1>
      <p>من خبرتك إلى مشروعك الرقمي.</p>
      <p className={styles.note}>
        المنصة قيد الإنشاء — هذه صفحة تحقق من التأسيس التقني.
      </p>
    </main>
  );
}
