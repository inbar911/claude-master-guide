import Link from "next/link";
import {
  MessageSquare,
  Bot,
  Terminal,
  Cloud,
  Brain,
  Sparkles,
  ArrowLeft,
  Check,
  Compass,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";

const brains = [
  {
    href: "/chat",
    icon: MessageSquare,
    name: "Claude Chat",
    tag: "לדבר ולחשוב",
    desc: "השיחה הרגילה — שאלות, כתיבה, ניתוח, רעיונות. הבסיס לכל השאר.",
    points: ["שיחות ופרויקטים", "זיכרון אישי", "ארטיפקטים וקבצים"],
  },
  {
    href: "/cowork",
    icon: Bot,
    name: "Claude Cowork",
    tag: "לבצע בשבילך",
    desc: "סוכן שמקבל מטרה ומבצע אותה על הקבצים והאפליקציות שלך — בלי קוד.",
    points: ["עובד על קבצים מקומיים", "משימות רב-שלביות", "מחבר לכלים (MCP)"],
  },
  {
    href: "/code",
    icon: Terminal,
    name: "Claude Code",
    tag: "הכוח המלא",
    desc: "הכלי הכי חזק. בונה, מתקן, ומריץ — עם skills, plugins, ואוטומציה.",
    points: ["בונה פרויקטים שלמים", "מיומנויות ותוספים", "תזמון ואוטומציה"],
  },
];

const learnPath = [
  { step: "01", title: "תתחיל בצ'אט", desc: "תכיר את הממשק, הזיכרון, ופרויקטים. כאן בונים את האינטואיציה.", href: "/chat" },
  { step: "02", title: "תעבור ל-Cowork", desc: "תן ל-Claude לבצע משימות אמיתיות על הקבצים שלך — בלי שורת קוד.", href: "/cowork" },
  { step: "03", title: "תפתח את Claude Code", desc: "הכלי המלא: בנייה, מיומנויות, תוספים וחיבורים חיצוניים.", href: "/code" },
  { step: "04", title: "תעלה לענן", desc: "הרץ משימות במקביל ובלי המחשב שלך — dispatching ואוטומציה.", href: "/cloud" },
  { step: "05", title: "תחבר למוח אחד", desc: "תשלב את שלושתם לזרימת עבודה אחת חכמה.", href: "/brain" },
];

const whatYouGet = [
  { icon: Compass, title: "צעד אחר צעד", desc: "כל פעולה מוסברת מההתחלה, בלי להניח ידע טכני מוקדם." },
  { icon: Layers, title: "Windows + Mac", desc: "הוראות מדויקות לשתי המערכות, עם קיצורי מקלדת." },
  { icon: Zap, title: "פרומפטים מוכנים", desc: "תבניות שאפשר להעתיק בלחיצה ולהשתמש מיד." },
  { icon: ShieldCheck, title: "בטיחות ופרטיות", desc: "מה לאשר, ממה להיזהר, ואיך לא לדלוף מידע." },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-clay-tint/70 via-cream to-cream" />
        <div
          className="pointer-events-none absolute -top-32 start-1/4 h-96 w-96 rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(201,100,66,0.25), transparent 70%)" }}
        />
        <div className="relative mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-clay/25 bg-paper/80 px-4 py-1.5 text-sm font-medium text-clay-dark backdrop-blur">
            <Sparkles className="h-4 w-4" />
            המדריך העברי המלא — מעודכן למאי 2026
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.15] text-ink sm:text-6xl">
            לשלוט ב-Claude
            <span className="text-clay"> מאפס.</span>
            <br />
            Chat · Cowork · Code.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-[1.7] text-ink/75">
            מדריך אחד, בעברית, שמוביל אותך מהשיחה הראשונה ועד להרצת סוכנים בענן.
            בלי רקע טכני. רק תוצאות.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/chat"
              className="group inline-flex items-center gap-2 rounded-xl bg-clay px-6 py-3.5 text-base font-bold text-paper shadow-glow transition hover:bg-clay-dark"
            >
              בוא נתחיל
              <ArrowLeft className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/brain"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-paper px-6 py-3.5 text-base font-bold text-ink transition hover:border-clay/30"
            >
              <Brain className="h-5 w-5 text-clay" />
              איך משלבים את שלושתם
            </Link>
          </div>
        </div>
      </section>

      {/* Three brains */}
      <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8">
        <div className="mb-2 text-center font-mono text-xs font-bold uppercase tracking-widest text-clay">
          שלושה כלים, מוח אחד
        </div>
        <h2 className="text-center text-3xl font-black text-ink">
          מה בעצם נלמד כאן?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-ink/70">
          ל-Claude שלוש דרכי עבודה. כל אחת חזקה לבד — וביחד הן הופכות לכלי אחד עוצמתי.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {brains.map((b) => {
            const Icon = b.icon;
            return (
              <Link
                key={b.href}
                href={b.href}
                className="group flex flex-col rounded-2xl border border-line bg-paper p-6 shadow-soft transition hover:-translate-y-1 hover:border-clay/30 hover:shadow-card"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-clay-tint text-clay transition group-hover:bg-clay group-hover:text-paper">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <div className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-clay">
                  {b.tag}
                </div>
                <h3 className="text-xl font-black text-ink">{b.name}</h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink/75">
                  {b.desc}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-ink/80">
                      <Check className="h-4 w-4 shrink-0 text-sage" strokeWidth={2.5} />
                      {p}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </section>

      {/* What you get */}
      <section className="border-y border-line bg-paper/50">
        <div className="mx-auto w-full max-w-5xl px-5 py-14 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatYouGet.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title}>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-paper text-clay">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="mb-1 font-bold text-ink">{w.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning path */}
      <section className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
        <div className="mb-2 text-center font-mono text-xs font-bold uppercase tracking-widest text-clay">
          המסלול המומלץ
        </div>
        <h2 className="text-center text-3xl font-black text-ink">
          לאן הולכים, ובאיזה סדר
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-lg text-ink/70">
          אפשר לקפוץ לאן שרוצים — אבל אם מתחילים מאפס, זה הסדר שיחסוך לך הכי הרבה זמן.
        </p>

        <ol className="mt-10 space-y-3">
          {learnPath.map((p, i) => (
            <li key={p.step}>
              <Link
                href={p.href}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-5 shadow-soft transition hover:border-clay/30 hover:shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-clay/30 bg-clay-tint font-mono text-base font-black text-clay-dark">
                  {p.step}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-lg font-bold text-ink">{p.title}</span>
                  <span className="block text-sm leading-relaxed text-muted">{p.desc}</span>
                </span>
                <ArrowLeft className="h-5 w-5 shrink-0 text-clay opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-line">
        <div className="mx-auto w-full max-w-4xl px-5 py-16 text-center sm:px-8">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-clay text-paper shadow-glow">
            <Cloud className="h-7 w-7" />
          </div>
          <h2 className="text-3xl font-black text-ink">מוכן? בוא נהפוך אותך למקצוען.</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-ink/70">
            עשרים דקות בכל פרק — ותסיים עם שליטה מלאה בכלי ה-AI הכי חזק שיש היום.
          </p>
          <Link
            href="/chat"
            className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-clay px-7 py-4 text-base font-bold text-paper shadow-glow transition hover:bg-clay-dark"
          >
            לפרק הראשון: Claude Chat
            <ArrowLeft className="h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
