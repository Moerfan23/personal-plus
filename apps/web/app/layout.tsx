import type { Metadata } from "next";
import { Tajawal, Inter } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-english",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Personal Plus | بيرسونال بلس - من خبرتك إلى مشروعك الرقمي",
    template: "%s | Personal Plus",
  },
  description:
    "منصة بيرسونال بلس - حوّل خبرتك ومهاراتك إلى مشروع رقمي متكامل وموقع شخصي احترافي.",
  icons: {
    icon:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><rect width='40' height='40' rx='10' fill='%23D5F36A'/><path d='M20 10v20M10 20h20' stroke='%230F1F1A' stroke-width='4' stroke-linecap='round'/></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
