import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import styles from "./dashboard.module.css";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const [profileResult, questionnaireResult, sitesResult] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", user.id).maybeSingle(),
    supabase
      .from("questionnaires")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
    supabase
      .from("sites")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false }),
  ]);

  const profile = profileResult.data;
  const questionnaire = questionnaireResult.data;
  const sites = sitesResult.data ?? [];

  const displayName =
    profile?.display_name ||
    user.user_metadata?.full_name ||
    user.email?.split("@")[0] ||
    "مستخدم";

  const nextStepCopy = questionnaire
    ? "استكمال بياناتك وملفك ليمكن لأدوات الذكاء الاصطناعي بناء استراتيجيتك."
    : "أجب عن الاستبيان المجاني لنحوّل خبرتك إلى ملف مهني واستراتيجية رقمية.";

  return (
    <main className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.brand}>Personal&nbsp;Plus</span>
          <div className={styles.headerRight}>
            <span className={styles.userName}>{displayName}</span>
            <form action="/api/auth/signout" method="post">
              <button type="submit" className={styles.signOutBtn}>
                تسجيل الخروج
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className={styles.content}>
        <h1 className={styles.title}>لوحة التحكم</h1>
        <p className={styles.subtitle}>
          أهلاً {displayName} — هذه نظرة سريعة على مسيرتك داخل المنصة.
        </p>

        <div className={styles.statGrid}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>حالة الملف</span>
            <span className={styles.statValue}>
              {questionnaire ? "تم البدء" : "لم تبدأ بعد"}
            </span>
            <span className={styles.statHint}>
              {questionnaire
                ? `آخر تحديث: ${new Date(questionnaire.updated_at).toLocaleDateString("ar-EG")}`
                : "ابدأ الاستبيان لبناء ملفك الاحترافي"}
            </span>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statLabel}>المواقع المنشورة</span>
            <span className={styles.statValue}>{sites.length}</span>
            <span className={styles.statHint}>منصاتك الحية على Personal Plus</span>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statLabel}>الموافقة على الذكاء الاصطناعي</span>
            <span className={styles.statValue}>
              {profile?.consent_ai_at ? "مفعّلة" : "غير مفعّلة"}
            </span>
            <span className={styles.statHint}>
              مطلوبة لمعالجة بياناتك بالذكاء الاصطناعي
            </span>
          </div>
        </div>

        <div className={styles.actionCard}>
          <h2 className={styles.cardTitle}>الخطوة التالية</h2>
          <p className={styles.cardDesc}>{nextStepCopy}</p>
          <a href="/onboarding" className={styles.primaryBtn}>
            {questionnaire ? "متابعة الاستبيان" : "ابدأ الاستبيان"}
          </a>
        </div>

        {sites.length > 0 && (
          <div className={styles.sitesCard}>
            <h2 className={styles.cardTitle}>مواقعك</h2>
            <ul className={styles.siteList}>
              {sites.map((site) => (
                <li key={site.id} className={styles.siteItem}>
                  <span className={styles.siteSlug}>/s/{site.slug}</span>
                  <span className={styles.siteStatus}>
                    {site.published_snapshot_id ? "منشور" : "مسودة"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
