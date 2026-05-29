import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heebo",
  display: "swap",
  fallback: ["Segoe UI", "Arial", "Rubik", "sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "המדריך המלא ל-Claude — Chat · Cowork · Code",
  description:
    "מדריך עברי מלא ופרקטי לשליטה ב-Claude: אפליקציית הצ'אט, Cowork, Claude Code, ענן ומיומנויות. בנוי לאנשים לא-טכניים.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "המדריך המלא ל-Claude",
    description: "Chat · Cowork · Code — הכל בעברית, צעד אחר צעד.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="font-sans">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
