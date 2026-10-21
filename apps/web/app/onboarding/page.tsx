"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import styles from "./onboarding.module.css";

interface Question {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "textarea";
}

const questions: Question[] = [
  {
    id: "fullName",
    label: "ما اسمك الكامل؟",
    placeholder: "مثال: د. علياء خليل",
    type: "text",
  },
  {
    id: "headline",
    label: "كيف تصف نفسك في سطر واحد؟",
    placeholder: "مثال: أخصائية رعاية أمومة وطفل معتمدة دولياً",
    type: "text",
  },
  {
    id: "expertise",
    label: "ما مجالات خبرتك الأساسية؟",
    placeholder: "اذكر 2-3 مجالات تبرع فيها بخبراتك العملية",
    type: "textarea",
  },
  {
    id: "audience",
    label: "من جمهورك المستهدف؟",
    placeholder: "مثال: أمهات جدد، مستشارات أعمال ناشئات",
    type: "textarea",
  },
  {
    id: "goals",
    label: "ما الهدف الذي تريد تحقيقه خلال 6 أشهر؟",
    placeholder: "مثال: إطلاق موقع شخصي وبيع 3 جلسات استشارية شهرياً",
    type: "textarea",
  },
  {
    id: "offers",
    label: "ما الخدمات أو المنتجات التي تبيعها حالياً؟",
    placeholder: "مثال: جلسات استشارية 1:1، دورة ماستركلاس، كتاب إلكتروني",
    type: "textarea",
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const current = questions[step];
  const progress = Math.round(((step + 1) / questions.length) * 100);

  function updateAnswer(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  async function handleNext() {
    const value = (answers[current.id] ?? "").trim();
    if (!value) return;

    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }

    setStatus("saving");
    setErrorMsg("");

    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { error } = await supabase.from("questionnaires").insert({
        user_id: user.id,
        status: "submitted",
        raw_answers: answers,
        submitted_at: new Date().toISOString(),
      });

      if (error) throw error;

      // Record AI-processing consent alongside the answers
      await supabase
        .from("profiles")
        .update({
          display_name: answers.fullName ?? null,
          consent_ai_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      router.push("/dashboard");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "تعذّر حفظ إجاباتك — حاول مرة أخرى.",
      );
    }
  }

  return (
    <main className={styles.shell}>
      <div className={styles.card}>
        <div className={styles.progressWrap}>
          <div className={styles.progressTrack}>
            <div className={styles.progressBar} style={{ width: `${progress}%` }} />
          </div>
          <span className={styles.progressText}>
            {step + 1} من {questions.length}
          </span>
        </div>

        <h1 className={styles.question}>{current.label}</h1>

        {current.type === "text" ? (
          <input
            className={styles.input}
            value={answers[current.id] ?? ""}
            onChange={(e) => updateAnswer(current.id, e.target.value)}
            placeholder={current.placeholder}
            autoFocus
          />
        ) : (
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            value={answers[current.id] ?? ""}
            onChange={(e) => updateAnswer(current.id, e.target.value)}
            placeholder={current.placeholder}
            rows={5}
            autoFocus
          />
        )}

        {status === "error" && (
          <div className={styles.errorBox} role="alert">
            {errorMsg}
          </div>
        )}

        <div className={styles.actions}>
          {step > 0 && (
            <button
              type="button"
              className={styles.backBtn}
              onClick={() => setStep(step - 1)}
              disabled={status === "saving"}
            >
              رجوع
            </button>
          )}

          <button
            type="button"
            className={styles.nextBtn}
            onClick={handleNext}
            disabled={status === "saving" || !(answers[current.id] ?? "").trim()}
          >
            {status === "saving"
              ? "جارٍ الحفظ..."
              : step === questions.length - 1
                ? "إرسال وحفظ"
                : "التالي"}
            <span className={styles.arrow}>←</span>
          </button>
        </div>

        <p className={styles.note}>
          إجاباتك تُحفظ في حسابك فقط، ولا تُشارك مع أي طرف ثالث.
        </p>
      </div>
    </main>
  );
}
