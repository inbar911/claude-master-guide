import { PageShell, PageHeader, PageNav } from "@/components/PageShell";
import {
  Section,
  Lead,
  Prose,
  Card,
  Grid,
  KeyTakeaway,
  SubHeading,
  Pill,
} from "@/components/content";
import { Callout } from "@/components/Callout";
import { CommandBlock } from "@/components/CommandBlock";
import { Steps, Step } from "@/components/Steps";
import {
  FileText,
  Palette,
  Hammer,
  Lightbulb,
  CheckCircle2,
  Zap,
  Wand2,
  ShieldCheck,
} from "lucide-react";

type Skill = { name: string; desc: string };

function SkillList({ skills }: { skills: Skill[] }) {
  return (
    <div className="my-5 grid gap-3 sm:grid-cols-2">
      {skills.map((s) => (
        <div
          key={s.name}
          className="rounded-xl border border-line bg-paper p-4 shadow-soft"
        >
          <code
            dir="ltr"
            className="inline-block rounded-md bg-ink/[0.06] px-2 py-0.5 font-mono text-[0.8rem] font-bold text-clay-dark"
          >
            {s.name}
          </code>
          <p className="mt-2 text-[0.92rem] leading-[1.7] text-ink/85">
            {s.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

const docs: Skill[] = [
  { name: "docx", desc: "יצירה ועריכה של מסמכי Word — דוחות, מכתבים, חוזים, הכל מעוצב." },
  { name: "pdf", desc: "כל פעולה על PDF: קריאה, מיזוג, פיצול, מילוי טפסים, חילוץ טקסט ו-OCR." },
  { name: "pptx", desc: "בניית מצגות PowerPoint מאפס או מתוך תוכן קיים." },
  { name: "xlsx", desc: "יצירה וניתוח של גיליונות Excel — טבלאות, נוסחאות, סיכומים." },
  { name: "doc-coauthoring", desc: "כתיבה משותפת ומובנית של תיעוד, הצעות ומסמכי החלטה — שלב אחר שלב." },
  { name: "internal-comms", desc: "תקשורת פנים-ארגונית: עדכוני הנהלה, ניוזלטרים, דוחות מצב, FAQ." },
  { name: "avoid-ai-writing", desc: "מנקה טקסט מ'ריח של AI' — מסיר ביטויים גנריים שמסגירים כתיבה אוטומטית." },
];

const design: Skill[] = [
  { name: "frontend-design", desc: "בניית ממשקי ווב מלוטשים ברמת פרודקשן — בלי אסתטיקת AI גנרית." },
  { name: "impeccable", desc: "עיצוב פרונטאנד ברמה גבוהה במיוחד — כשרוצים שזה ייראה מושלם." },
  { name: "canvas-design", desc: "אמנות ויזואלית, פוסטרים ומסמכי עיצוב כקבצי PNG/PDF." },
  { name: "brand-guidelines", desc: "מחיל צבעים וטיפוגרפיה של מותג על כל תוצר, לעקביות מותגית." },
  { name: "theme-factory", desc: "10 ערכות-נושא מוכנות (או חדשה לפי דרישה) למצגות, מסמכים ודפי נחיתה." },
  { name: "web-artifacts-builder", desc: "בניית artifacts מורכבים ב-claude.ai עם React, Tailwind ו-shadcn/ui." },
  { name: "algorithmic-art", desc: "אמנות גנרטיבית בקוד (p5.js) — flow fields, מערכות חלקיקים." },
  { name: "slack-gif-creator", desc: "יצירת GIF מונפש מותאם לסלאק." },
  { name: "remotion", desc: "יצירת סרטוני וידאו באמצעות React (ספריית Remotion)." },
];

const build: Skill[] = [
  { name: "fullstack-app", desc: "בניית אפליקציית פולסטאק שלמה מקצה לקצה — הבסיס לבניית מוצר." },
  { name: "claude-api", desc: "עבודה עם ה-API וה-SDK של Anthropic — לבנות אפליקציות מבוססות AI." },
  { name: "webapp-testing", desc: "בדיקת אפליקציות ווב מקומיות עם Playwright: לחיצות, צילומי מסך, לוגים." },
  { name: "modern-python", desc: "הקמת פרויקטי Python עם כלים מודרניים (uv, ruff, ty)." },
  { name: "mcp-builder", desc: "בניית שרתי MCP משלך כדי לחבר את Claude לשירותים חיצוניים." },
  { name: "devcontainer-setup", desc: "הקמת סביבות פיתוח מבודדות ובטוחות (devcontainers) עבור Claude Code." },
];

const think: Skill[] = [
  { name: "brainstorming", desc: "חקירת כוונה ודרישות לפני כל עבודה יצירתית. רץ אוטומטית לפני בנייה." },
  { name: "ask-questions-if-underspecified", desc: "שואל שאלות הבהרה כשהבקשה שלך לא מספיק ברורה — במקום לנחש." },
  { name: "writing-plans", desc: "כתיבת תוכנית ביצוע מסודרת למשימה רב-שלבית, לפני שנוגעים בקוד." },
  { name: "executing-plans", desc: "הרצת תוכנית כתובה עם נקודות ביקורת ואישור בדרך." },
  { name: "second-opinion", desc: "חוות דעת שנייה ממודל חיצוני (Codex/Gemini) על השינויים שלך." },
  { name: "let-fate-decide", desc: "מושך קלפי טארוט כדי 'להחליט' כשאתה אומר 'יאללה, מה שבא'. שובבי." },
];

const quality: Skill[] = [
  { name: "systematic-debugging", desc: "גישה שיטתית לכל באג — מבין את השורש לפני שמציע תיקון." },
  { name: "verification-before-completion", desc: "מאמת שהעבודה באמת עובדת לפני שמכריזים 'סיימתי'. ראיות לפני הצהרות." },
  { name: "test-driven-development", desc: "פיתוח מונחה-בדיקות: כותבים טסט קודם, ואז את הקוד." },
  { name: "requesting-code-review", desc: "בקשת ביקורת קוד לפני מיזוג — לוודא שהעבודה עומדת בדרישות." },
  { name: "differential-review", desc: "סקירה ממוקדת של ההבדלים (diff) בשינוי לפני שמאשרים." },
  { name: "git-cleanup", desc: "ניקוי בטוח של ענפי git מקומיים שכבר לא צריך." },
  { name: "finishing-a-development-branch", desc: "סגירת ענף פיתוח: מיזוג, פתיחת PR, או ניקוי — בצורה מסודרת." },
  { name: "dispatching-parallel-agents", desc: "פיצול שתי משימות עצמאיות ומעלה לסוכנים שרצים במקביל." },
];

const automation: Skill[] = [
  { name: "weekly-gmail-summary", desc: "סיכום שבועי של תיבת ה-Gmail בעברית, מקובץ לפי קטגוריה. אומר 'סכם לי מיילים'." },
  { name: "interpreting-culture-index", desc: "פענוח סקרי Culture Index ופרופילים התנהגותיים לניהול צוות וגיוס." },
];

const meta: Skill[] = [
  { name: "skill-creator", desc: "יצירה, עריכה ומדידת ביצועים של מיומנויות חדשות משלך." },
  { name: "writing-skills", desc: "הכללים והעקרונות לכתיבת מיומנות טובה שתופעל בזמן הנכון." },
  { name: "skill-improver", desc: "לולאת שיפור אוטומטית שמעלה את איכות מיומנות קיימת." },
  { name: "using-superpowers", desc: "איך בכלל למצוא ולהפעיל מיומנויות — נקודת הכניסה לכל המערכת." },
];

const toc = [
  { id: "how", label: "איך מיומנויות עובדות" },
  { id: "docs", label: "מסמכים ותוכן" },
  { id: "design", label: "עיצוב וויזואל" },
  { id: "build", label: "בנייה ופיתוח" },
  { id: "think", label: "חשיבה ותכנון" },
  { id: "quality", label: "איכות ועבודה מסודרת" },
  { id: "automation", label: "אוטומציה אישית" },
  { id: "meta", label: "מיומנויות משלך" },
  { id: "security", label: "ערכת אבטחה מתקדמת" },
  { id: "install", label: "להוסיף מיומנויות חדשות" },
];

export default function SkillsPage() {
  return (
    <PageShell toc={toc}>
      <PageHeader
        title="בונוס: המיומנויות שכבר יש לך בחשבון"
        lead="בחשבון שלך מותקנות יותר ממאה מיומנויות (Skills) — חבילות של ידע וכלים שמעצימות את Claude בתחומים ספציפיים. רובן מתפעלות את עצמן אוטומטית כשהמשימה מתאימה. כאן תמצא את החשובות שבהן, מה כל אחת עושה, ואיך להפעיל ולהוסיף עוד."
        badges={["100+ מיומנויות מותקנות", "הסבר בעברית", "הפעלה אוטומטית"]}
      />

      <Section id="how" eyebrow="לפני הרשימה" title="איך מיומנויות עובדות — ומאיפה הן הגיעו">
        <Lead>
          <strong>מיומנות (Skill)</strong> היא תיקייה עם הוראות, ידע וכלים לתחום
          מסוים. כשאתה נותן משימה, Claude מזהה אם יש מיומנות שמתאימה —{" "}
          <strong>ומפעיל אותה לבד</strong>. אתה לא חייב לזכור שמות.
        </Lead>
        <Grid cols={3}>
          <Card icon={Zap} title="הפעלה אוטומטית">
            תאר משימה רגיל — "תכין לי מצגת" — ו-Claude יפעיל את <code>pptx</code>{" "}
            מעצמו. זו דרך ברירת המחדל.
          </Card>
          <Card icon={Wand2} title="הפעלה ידנית">
            אפשר גם לקרוא למיומנות במפורש: הקלד <code>/</code> ואת שם המיומנות
            ב-Claude Code, או בקש "השתמש ב-frontend-design".
          </Card>
          <Card icon={CheckCircle2} title="כבר מותקנות">
            כל המיומנויות ברשימה הזו <strong>כבר נמצאות בחשבון שלך</strong>. אין
            מה להתקין — רק לדעת שהן קיימות.
          </Card>
        </Grid>
        <Callout variant="note" title="למה יש כל כך הרבה?">
          החשבון שלך כולל אוסף רחב — מכלי יצירת מסמכים ועיצוב, ועד ערכת אבטחה
          מקצועית שלמה (Trail of Bits). לא תשתמש בכולן, וזה בסדר גמור. הן פשוט
          זמינות לרגע שתצטרך. מיקדתי כאן את אלה שהכי רלוונטיות לעבודה יומיומית.
        </Callout>
      </Section>

      <Section id="docs" eyebrow="הכי שימושי לכולם" title="מסמכים ותוכן">
        <Prose>
          <p>
            ארבעת פורמטי האופיס המלאים, ועוזרי כתיבה. זה כנראה מה שתשתמש בו הכי
            הרבה:
          </p>
        </Prose>
        <SkillList skills={docs} />
        <Callout variant="tip" title="טיפ זהב">
          המיומנויות <code>docx</code>, <code>pdf</code>, <code>pptx</code> ו-
          <code>xlsx</code> הופכות את Cowork למשרד שלם. "תהפוך את ה-PDF הזה למצגת"
          — והוא מפעיל שתיים מהן ברצף.
        </Callout>
      </Section>

      <Section id="design" eyebrow="שיהיה יפה" title="עיצוב וויזואל">
        <Prose>
          <p>מכלי בניית ממשקים מלוטשים ועד אמנות, וידאו ו-GIF:</p>
        </Prose>
        <SkillList skills={design} />
      </Section>

      <Section id="build" eyebrow="לבנות מוצר" title="בנייה ופיתוח">
        <Prose>
          <p>
            הליבה לבניית אפליקציות. רלוונטי במיוחד כשעובדים עם Claude Code:
          </p>
        </Prose>
        <SkillList skills={build} />
      </Section>

      <Section id="think" eyebrow="לפני שבונים" title="חשיבה ותכנון">
        <Prose>
          <p>
            המיומנויות האלה גורמות ל-Claude לעצור, להבין ולתכנן — לפני שהוא רץ
            לבצע. הן מה שמונע "רץ בכיוון הלא נכון":
          </p>
        </Prose>
        <SkillList skills={think} />
      </Section>

      <Section id="quality" eyebrow="לעבוד נכון" title="איכות ועבודה מסודרת">
        <Prose>
          <p>
            מיומנויות שמכניסות משמעת הנדסית: בדיקות, ביקורת, אימות, וניהול גרסאות
            נקי:
          </p>
        </Prose>
        <SkillList skills={quality} />
      </Section>

      <Section id="automation" eyebrow="חוסך לך זמן" title="אוטומציה אישית">
        <SkillList skills={automation} />
        <Callout variant="tip" title="מותאם אישית לך">
          <code>weekly-gmail-summary</code> נבנתה לעבוד <strong>בעברית</strong> —
          פשוט תגיד "סכם לי את המיילים מהשבוע" והיא רצה דרך ה-Gmail connector.
        </Callout>
      </Section>

      <Section id="meta" eyebrow="לבנות בעצמך" title="מיומנויות משלך">
        <Prose>
          <p>
            כשתרצה להפוך תהליך חוזר משלך למיומנות קבועה — אלה הכלים שבונים
            מיומנויות:
          </p>
        </Prose>
        <SkillList skills={meta} />
      </Section>

      <Section id="security" eyebrow="לידיעה" title="ערכת אבטחה מתקדמת (Trail of Bits)">
        <Lead>
          חלק הארי של החשבון שלך הוא <strong>ערכת אבטחה מקצועית</strong> של
          Trail of Bits — עשרות מיומנויות לביקורת קוד, fuzzing, וסריקת חוזים
          חכמים. אם אתה לא חוקר אבטחה — לא תיגע ברובן, וזה בסדר. הן מופעלות לבד
          רק כשמתעוררת משימת אבטחה אמיתית.
        </Lead>
        <Grid cols={2}>
          <Card icon={ShieldCheck} title="סריקת בלוקצ'יין וחוזים חכמים">
            סורקים ייעודיים ל-Solana, Algorand, Cairo/StarkNet, Cosmos,
            Substrate/Polkadot ו-TON, וכן ניתוח טוקנים, בשלות קוד והתאמת קוד
            למפרט.
          </Card>
          <Card icon={ShieldCheck} title="סקירת קוד ואבטחה">
            <code>c-review</code>, <code>semgrep</code>, <code>codeql</code>,
            <code>variant-analysis</code>, <code>fp-check</code>,
            <code>insecure-defaults</code>, <code>supply-chain-risk-auditor</code>
            ועוד — זיהוי חולשות בקוד נייטיב ובתצורות.
          </Card>
          <Card icon={ShieldCheck} title="Fuzzing ובדיקות עומק">
            <code>aflpp</code>, <code>libfuzzer</code>, <code>libafl</code>,
            <code>cargo-fuzz</code>, <code>atheris</code>, <code>ossfuzz</code>,
            <code>harness-writing</code>, <code>coverage-analysis</code>,
            <code>mutation-testing</code> — הפצצת קוד בקלט אקראי לחשיפת קריסות.
          </Card>
          <Card icon={ShieldCheck} title="ניתוח, תיעוד והכנה לביקורת">
            <code>audit-prep-assistant</code>, <code>trailmark</code>,
            <code>diagramming-code</code>, <code>crypto-protocol-diagram</code>,
            <code>dwarf-expert</code>, <code>yara-rule-authoring</code> ועוד כלי
            הכנה ותיעוד לביקורות אבטחה.
          </Card>
        </Grid>
        <Callout variant="note" title="בשורה התחתונה">
          לא צריך להבין את הערכה הזו כדי להשתמש בכל השאר. היא יושבת ברקע, ומופעלת
          רק אם תבקש משהו כמו "תבדוק את הקוד הזה לחולשות אבטחה". אם אתה כן בעולם
          האבטחה — יש לך כאן ארסנל רציני.
        </Callout>
      </Section>

      <Section id="install" eyebrow="להרחיב" title="איך מוסיפים מיומנויות חדשות">
        <Lead>
          האוסף שלך לא נעול. אפשר להוסיף מיומנויות מהקהילה, ממרקטפלייסים, או לכתוב
          משלך. שלוש דרכים:
        </Lead>
        <SubHeading>דרך 1: מרקטפלייס בתוך Claude Code (הכי קל)</SubHeading>
        <Prose>
          <p>
            ב-Claude Code הקלד <code>/plugin</code>, עיין במרקטפלייסים, ובחר
            חבילה (plugin) שאורזת מיומנויות. ההתקנה אוטומטית.
          </p>
        </Prose>
        <SubHeading>דרך 2: התקנה מ-GitHub</SubHeading>
        <Prose>
          <p>
            הרבה אוספי מיומנויות מתפרסמים כ-repo. מתקינים בפקודה אחת בטרמינל:
          </p>
        </Prose>
        <CommandBlock
          commands={["npx skills add <author>/<repo>"]}
          label="התקנת מיומנויות מ-GitHub"
        />
        <SubHeading>דרך 3: לכתוב מיומנות משלך</SubHeading>
        <Steps>
          <Step n={1} title="בקש מ-Claude">
            הפעל את <code>skill-creator</code>: "תיצור לי מיומנות שעושה X". הוא
            ידריך אותך וייצר את המבנה.
          </Step>
          <Step n={2} title="המבנה">
            מיומנות = תיקייה עם קובץ <code>SKILL.md</code> (הוראות + תיאור
            שמפעיל אותה) ואולי קבצי עזר.
          </Step>
          <Step n={3} title="המיקום" last>
            המיומנויות שלך יושבות ב-<code>~/.claude/skills/</code>. תיקייה חדשה
            שם = מיומנות זמינה מיד.
          </Step>
        </Steps>
        <KeyTakeaway>
          זהו — סיימת את המדריך. יש לך עכשיו את התמונה המלאה: Chat לחשיבה, Cowork
          לביצוע, Code לכוח מלא, הענן לשיגור, והכל מתחבר למוח אחד — מועצם
          במאות מיומנויות. עכשיו לך תבנה.
        </KeyTakeaway>
      </Section>

      <PageNav prev={{ href: "/brain", label: "מוח אחד" }} />
    </PageShell>
  );
}
