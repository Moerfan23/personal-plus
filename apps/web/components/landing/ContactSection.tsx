"use client";

import React, { useState } from 'react';
import { submitLead } from '@/lib/leads';
import type { LeadInterest } from '@/lib/leads';
import styles from './ContactSection.module.css';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const interestOptions: { value: LeadInterest; label: string }[] = [
  { value: 'website', label: 'موقع شخصي احترافي' },
  { value: 'consulting', label: 'جلسات استشارية' },
  { value: 'products', label: 'بيع منتجات رقمية' },
  { value: 'partnership', label: 'شراكة أو تعاون' },
  { value: 'general', label: 'استفسار عام' },
];

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState<LeadInterest>('website');
  const [message, setMessage] = useState('');
  const [honey, setHoney] = useState(''); // honeypot — bots fill it, humans don't see it
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honey) return; // silently drop bot submissions

    setStatus('submitting');
    setErrorMsg('');

    const result = await submitLead({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      interest,
      message: message.trim() || undefined,
      source: 'contact_form',
    });

    if (result.ok) {
      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } else {
      setStatus('error');
      setErrorMsg('تعذّر إرسال رسالتك الآن — حاول مرة أخرى أو راسلنا مباشرة على support@personalplus.io');
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contactGrid}>
          {/* Right column (RTL): pitch + direct channels */}
          <div className={styles.contactInfo}>
            <span className={styles.sectionTag}>تواصل معنا</span>
            <h2 className={styles.sectionTitle}>
              جاهز تبدأ رحلتك؟ <br />
              <span className={styles.limeText}>فريقنا بانتظارك.</span>
            </h2>
            <p className={styles.sectionDesc}>
              أخبرنا عن خبرتك وما تريد بناءه، وسنعود إليك خلال يوم عمل واحد بخطة
              واضحة للانطلاق — أو تجول في المنصة بنفسك وابدأ مجاناً اليوم.
            </p>

            <div className={styles.channels}>
              <a href="mailto:support@personalplus.io" className={styles.channelItem}>
                <span className={styles.channelIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </span>
                <span className={styles.channelText}>
                  <strong>البريد الإلكتروني</strong>
                  <span className="en-font" dir="ltr">support@personalplus.io</span>
                </span>
              </a>

              <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className={styles.channelItem}>
                <span className={styles.channelIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </span>
                <span className={styles.channelText}>
                  <strong>واتساب</strong>
                  <span>متاح طوال أيام الأسبوع</span>
                </span>
              </a>

              <div className={styles.channelItem}>
                <span className={styles.channelIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </span>
                <span className={styles.channelText}>
                  <strong>زمن الرد</strong>
                  <span>أقل من 24 ساعة عمل</span>
                </span>
              </div>
            </div>
          </div>

          {/* Left column (RTL): the lead form */}
          <div className={styles.formCard}>
            {status === 'success' ? (
              <div className={styles.successState} role="status">
                <div className={styles.successIcon}>✓</div>
                <h3>وصلت رسالتك!</h3>
                <p>
                  شكراً {name || 'لك'} — سيتواصل معك فريق Personal Plus خلال يوم عمل
                  واحد على البريد الذي أدخلته.
                </p>
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={() => setStatus('idle')}
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate={false}>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="lead-name" className={styles.label}>الاسم الكامل *</label>
                    <input
                      id="lead-name"
                      type="text"
                      className={styles.input}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: أحمد محمود"
                      required
                      minLength={2}
                      maxLength={100}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="lead-phone" className={styles.label}>رقم الجوال</label>
                    <input
                      id="lead-phone"
                      type="tel"
                      className={styles.input}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+20 1XX XXX XXXX"
                      maxLength={20}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="lead-email" className={styles.label}>البريد الإلكتروني *</label>
                    <input
                      id="lead-email"
                      type="email"
                      className={styles.input}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="lead-interest" className={styles.label}>ما الذي يهمك؟</label>
                    <select
                      id="lead-interest"
                      className={styles.input}
                      value={interest}
                      onChange={(e) => setInterest(e.target.value as LeadInterest)}
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="lead-message" className={styles.label}>رسالتك</label>
                  <textarea
                    id="lead-message"
                    className={`${styles.input} ${styles.textarea}`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="أخبرنا باختصار عن خبرتك وما تحقق بنائه..."
                    maxLength={2000}
                    rows={4}
                  />
                </div>

                {/* Honeypot — invisible to humans */}
                <input
                  type="text"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className={styles.honey}
                />

                {status === 'error' && (
                  <div className={styles.errorBox} role="alert">{errorMsg}</div>
                )}

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'جارٍ الإرسال...' : 'أرسل وابدأ رحلتك'}
                  {status !== 'submitting' && <span className={styles.submitArrow}>←</span>}
                </button>

                <p className={styles.privacyNote}>
                  بإرسالك هذا النموذج توافق على أن نتواصل معك بخصوص طلبك. لا نشارك
                  بياناتك مع أي طرف ثالث.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
