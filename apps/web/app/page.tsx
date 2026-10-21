import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Personal Plus</h1>
      <p>من خبرتك إلى مشروعك الرقمي.</p>

      <div className={styles.actions}>
        <Link href="/signup" className={styles.primaryBtn}>
          أنشئ حسابك المجاني
        </Link>
        <Link href="/login" className={styles.ghostBtn}>
          تسجيل الدخول
        </Link>
      </div>

      <p className={styles.note}>
        لوحة التحكم في المنصة: <Link href="/dashboard">/dashboard</Link>
      </p>
    </main>
  );
}
