"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import styles from "./auth.module.css";

type Mode = "login" | "signup";

export default function AuthPage({ mode }: { mode: Mode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isSignup = mode === "signup";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const supabase = createClient();

    if (isSignup) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } },
      });
      if (error) {
        setStatus("error");
        setErrorMsg(
          error.message.includes("already registered")
            ? "هذا البريد مسجّل بالفعل — جرّب تسجيل الدخول."
            : error.message,
        );
        return;
      }
      setStatus("success");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setStatus("error");
        setErrorMsg(
          error.message.includes("Invalid login")
            ? "البريد الإلكتروني أو كلمة المرور غير صحيحة."
            : error.message,
        );
        return;
      }
      window.location.href = "/dashboard";
    }
  }

  if (status === "success") {
    return (
      <main className={styles.authShell}>
        <div className={styles.authCard}>
          <div className={styles.successIcon}>✓</div>
          <h1 className={styles.authTitle}>أهلاً بك في Personal Plus</h1>
          <p className={styles.authSubtitle}>
            تم إنشاء حسابك بنجاح. يمكنك الآن الدخول والبدء في بناء ملفك الاحترافي.
          </p>
          <Link href="/login" className={styles.primaryBtn}>
            الانتقال لتسجيل الدخول
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.authShell}>
      <div className={styles.authCard}>
        <Link href="/" className={styles.brandMark}>
          Personal&nbsp;Plus
        </Link>

        <h1 className={styles.authTitle}>
          {isSignup ? "أنشئ حسابك المجاني" : "أهلاً بعودتك"}
        </h1>
        <p className={styles.authSubtitle}>
          {isSignup
            ? "حوّل خبرتك إلى مشروع رقمي في دقائق — بدون خبرة تقنية."
            : "سجّل الدخول لمتابعة بناء ملفك وموقعك."}
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {isSignup && (
            <div className={styles.field}>
              <label htmlFor="full-name" className={styles.label}>
                الاسم الكامل
              </label>
              <input
                id="full-name"
                type="text"
                className={styles.input}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="مثال: أحمد محمود"
                required
                maxLength={100}
              />
            </div>
          )}

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              البريد الإلكتروني
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              autoComplete="email"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>
              كلمة المرور
            </label>
            <input
              id="password"
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="8 أحرف على الأقل"
              required
              minLength={8}
              autoComplete={isSignup ? "new-password" : "current-password"}
            />
          </div>

          {status === "error" && (
            <div className={styles.errorBox} role="alert">
              {errorMsg}
            </div>
          )}

          <button type="submit" className={styles.primaryBtn} disabled={status === "loading"}>
            {status === "loading"
              ? "جارٍ المعالجة..."
              : isSignup
                ? "أنشئ حسابي المجاني"
                : "تسجيل الدخول"}
          </button>
        </form>

        <p className={styles.switchText}>
          {isSignup ? "لديك حساب بالفعل؟" : "ليس لديك حساب؟"}{" "}
          <Link href={isSignup ? "/login" : "/signup"} className={styles.switchLink}>
            {isSignup ? "سجّل الدخول" : "أنشئ حساباً مجانياً"}
          </Link>
        </p>
      </div>
    </main>
  );
}
