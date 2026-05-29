import { PageShell, PageHeader, PageNav } from "@/components/PageShell";
import {
  Section,
  Lead,
  Prose,
  Card,
  Grid,
  TermCard,
  KeyTakeaway,
  SubHeading,
} from "@/components/content";
import { Callout } from "@/components/Callout";
import { PromptCard } from "@/components/PromptCard";
import { CommandBlock } from "@/components/CommandBlock";
import { PlatformTabs } from "@/components/PlatformTabs";
import { Steps, Step } from "@/components/Steps";
import { Checklist } from "@/components/Checklist";
import {
  FileCode,
  Puzzle,
  Plug,
  Clock,
  Users,
  SlidersHorizontal,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

const toc = [
  { id: "what", label: "מה זה Claude Code" },
  { id: "install", label: "התקנה" },
  { id: "setup", label: "הגדרה והתחברות" },
  { id: "first-run", label: "הרצה ראשונה" },
  { id: "goal", label: "לתת מטרה" },
  { id: "claudemd", label: "CLAUDE.md — הזיכרון" },
  { id: "skills", label: "התקנת Skills" },
  { id: "plugins", label: "Plugins ו-Marketplaces" },
  { id: "mcp", label: "חיבור MCP" },
  { id: "automation", label: "תזמון ואוטומציה" },
  { id: "subagents", label: "Subagents (במקביל)" },
  { id: "power", label: "פקודות, Hooks, הרשאות" },
  { id: "checklist", label: "צ'קליסט" },
];

export default function CodePage() {
  return (
    <PageShell toc={toc}>
      <PageHeader
        step="03"
        title="Claude Code — הכוח המלא"
        lead="הכלי הכי עוצמתי בארגז. הוא חי בטרמינל, אבל אל תיבהל — אתה מדבר איתו בעברית רגילה. כאן נלמד להתקין, לתת לו מטרות שלמות, ולהעצים אותו עם מיומנויות, תוספים, חיבורים ואוטומציה."
        badges={["Windows · Mac · Linux", "גם ללא-טכניים", "30 דקות"]}
      />

      <Section id="what" eyebrow="אל תיבהל מהטרמינל" title="מה זה Claude Code — וגם אתה יכול">
        <Lead>
          Claude Code הוא אותו סוכן מבצע כמו Cowork, אבל ב"מצב מקצועי": שליטה מלאה,
          אוטומציה, ואינסוף הרחבות. הוא רץ ב<strong>טרמינל</strong> (חלון הפקודות
          השחור), אבל ההפתעה הגדולה — <strong>אתה כותב לו בשפה רגילה</strong>, בדיוק
          כמו בצ'אט.
        </Lead>
        <Prose>
          <p>
            "אבל אני לא מתכנת" — מצוין, זה לא מיועד רק למתכנתים. אנשים משתמשים
            ב-Claude Code כדי לארגן קבצים, לנתח נתונים, לבנות אתר אישי, לכתוב
            אוטומציות, ולתחזק פרויקטים — בלי לדעת לתכנת. הטרמינל הוא רק{" "}
            <strong>תיבת השיחה</strong>; Claude עושה את העבודה.
          </p>
        </Prose>
        <TermCard term="טרמינל" en="Terminal / Command Line">
          חלון טקסט שבו מקלידים פקודות למחשב. ב-Mac קוראים לו "Terminal", ב-Windows
          "PowerShell" או "Terminal". במדריך נפתח אותו פעם אחת, ומשם — הכל בעברית.
        </TermCard>
        <KeyTakeaway>
          Cowork = ממשק גרפי, פשוט. Claude Code = טרמינל, אבל הרבה יותר חזק וגמיש.
          אם Cowork הספיק לך — מעולה. רוצה אוטומציה, תוספים ושליטה מלאה? כאן זה קורה.
        </KeyTakeaway>
      </Section>

      <Section id="install" eyebrow="התקנה" title="להתקין את Claude Code">
        <Prose>
          <p>
            הדרך הקלה ביותר היא <strong>המתקין הרשמי</strong> — שורה אחת, בלי צורך
            בהתקנות מקדימות. פתח את הטרמינל והדבק:
          </p>
        </Prose>
        <PlatformTabs
          windows={
            <>
              <p>פתח <strong>PowerShell</strong> (חפש "PowerShell" בתפריט התחל) והדבק:</p>
              <CommandBlock label="PowerShell" commands={["irm https://claude.ai/install.ps1 | iex"]} />
              <p>
                לחלופין, אם מותקן אצלך <strong>Node.js</strong> (גרסה 18+):
              </p>
              <CommandBlock label="PowerShell" commands={["npm install -g @anthropic-ai/claude-code"]} />
              <p className="mt-2 text-sm text-muted">
                סגור ופתח מחדש את PowerShell אחרי ההתקנה כדי שהפקודה <code>claude</code> תיקלט.
              </p>
            </>
          }
          mac={
            <>
              <p>פתח את <strong>Terminal</strong> (Cmd+Space → "Terminal") והדבק:</p>
              <CommandBlock label="Terminal" commands={["curl -fsSL https://claude.ai/install.sh | bash"]} />
              <p>
                לחלופין, עם <strong>Node.js</strong> (18+) מותקן:
              </p>
              <CommandBlock label="Terminal" commands={["npm install -g @anthropic-ai/claude-code"]} />
              <p className="mt-2 text-sm text-muted">
                אותו דבר ב-Linux. אם תתבקש להוסיף תיקייה ל-PATH — העתק את ההוראה שתופיע על המסך.
              </p>
            </>
          }
        />
        <Callout variant="tip" title="לבדוק שהצליח">
          הקלד <code>claude --version</code>. אם חזר מספר גרסה — אתה בפנים. אם
          "command not found" — סגור ופתח את הטרמינל מחדש.
        </Callout>
      </Section>

      <Section id="setup" eyebrow="צעד ראשון" title="הגדרה והתחברות">
        <Steps>
          <Step n={1} title="היכנס לתיקיית עבודה">
            נווט לתיקייה שתעבוד בה. למשל ליצור תיקייה חדשה לפרויקט:
            <CommandBlock commands={["mkdir my-project", "cd my-project"]} />
          </Step>
          <Step n={2} title="הפעל את Claude">
            פשוט הקלד:
            <CommandBlock commands={["claude"]} />
            נפתחת שיחה אינטראקטיבית בתוך הטרמינל.
          </Step>
          <Step n={3} title="התחבר" last>
            בפעם הראשונה הקלד <code>/login</code>. ייפתח דפדפן להתחברות עם חשבון
            Claude שלך (אותו אחד מהצ'אט). אשר — וחזרת לטרמינל מחובר.
          </Step>
        </Steps>
        <Callout variant="note" title="פקודות לוכסן (Slash Commands)">
          כל מה שמתחיל ב-<code>/</code> הוא פקודה מיוחדת ל-Claude Code עצמו (כמו{" "}
          <code>/login</code>, <code>/help</code>, <code>/clear</code>). כל השאר —
          סתם דברים שאתה כותב — זו שיחה רגילה בעברית.
        </Callout>
      </Section>

      <Section id="first-run" eyebrow="בוא ננסה" title="ההרצה הראשונה שלך">
        <Prose>
          <p>
            עכשiו פשוט תכתוב לו משימה בעברית, כאילו אתה מדבר עם עובד. למשל:
          </p>
        </Prose>
        <PromptCard
          title="משימה ראשונה לדוגמה"
          prompt={`צור קובץ בשם hello.txt שכתוב בו "שלום עולם",
ואז הסבר לי בעברית מה עשית.`}
          note="Claude Code יראה לך מה הוא עומד לעשות, יבקש אישור, ויבצע. ככה מרגישים את זה."
        />
        <Prose>
          <p>שלוש פקודות שכדאי להכיר מההתחלה:</p>
          <ul>
            <li><code>/help</code> — רשימת כל הפקודות.</li>
            <li><code>/clear</code> — מנקה את השיחה הנוכחית ומתחיל נקי (חוסך בלבול והקשר מיותר).</li>
            <li><code>/compact</code> — מכווץ שיחה ארוכה לסיכום, כדי לפנות מקום ולהמשיך.</li>
          </ul>
        </Prose>
        <Callout variant="tip" title="הרגל זהב">
          משימה חדשה לגמרי? הרץ <code>/clear</code> קודם. שיחה "נקייה" נותנת תשובות
          ממוקדות. שיחה עמוסה בהקשר ישן מבלבלת את הסוכן.
        </Callout>
      </Section>

      <Section id="goal" eyebrow="הדרך הנכונה" title="לתת מטרה — ולתת לו לפרק למשימות">
        <Lead>
          הכוח האמיתי: אתה לא צריך לפרק את העבודה בעצמך. תן{" "}
          <strong>מטרה גדולה</strong>, ובקש מ-Claude Code לתכנן את הצעדים. הוא יחלק
          אותה למשימות, יבצע אחת-אחת, ויעדכן אותך.
        </Lead>
        <Steps>
          <Step n={1} title="תאר את היעד הגדול">
            "אני רוצה אתר תדמית פשוט לעסק שלי, עם דף בית, אודות וצור קשר".
          </Step>
          <Step n={2} title="בקש תוכנית לפני ביצוע">
            "תכין תוכנית עבודה מפורטת לפני שתתחיל לכתוב קוד, ותראה לי אותה לאישור".
          </Step>
          <Step n={3} title="אשר או חדד">
            עבור על התוכנית. "תוסיף גם גלריית תמונות" / "בלי טופס, רק מספר טלפון".
          </Step>
          <Step n={4} title="תן לו לרוץ" last>
            הוא יבצע צעד-צעד, יראה לך כל שינוי קובץ, ויבקש אישור לפעולות משמעותיות.
          </Step>
        </Steps>
        <PromptCard
          title="פרומפט 'מטרה גדולה'"
          prompt={`המטרה: [תאר את התוצאה הסופית שאתה רוצה]
תחשוב צעד-צעד ותכין תוכנית עבודה מפורטת.
הצג לי את התוכנית לאישור לפני שתתחיל.
תוך כדי עבודה — עדכן אותי בקצרה מה אתה עושה בכל שלב.
אם משהו לא ברור או יש כמה דרכים — תשאל אותי.`}
        />
        <Callout variant="note" title="Plan Mode">
          ב-Claude Code יש "מצב תכנון" (Plan Mode) שבו הוא <em>חוקר ומתכנן בלבד</em>{" "}
          בלי לגעת בקבצים, עד שתאשר. מצוין למשימות גדולות. אפשר להיכנס אליו דרך
          התפריט או בבקשה מפורשת "תתכנן בלבד קודם".
        </Callout>
      </Section>

      <Section id="claudemd" eyebrow="הזיכרון של הפרויקט" title="CLAUDE.md — לתת ל-Claude את הכללים שלך">
        <Lead>
          זה אולי הדבר הכי שימושי בכל הפרק. <code>CLAUDE.md</code> הוא קובץ פשוט
          שיושב בפרויקט, ו-Claude Code <strong>קורא אותו אוטומטית בכל שיחה</strong>.
          כאן כותבים את ההעדפות, הכללים וההקשר — פעם אחת.
        </Lead>
        <Steps>
          <Step n={1} title="צור אותו אוטומטית">
            הקלד <code>/init</code>. Claude יסרוק את הפרויקט וייצר קובץ{" "}
            <code>CLAUDE.md</code> התחלתי בשבילך.
          </Step>
          <Step n={2} title="ערוך לפי הטעם שלך" last>
            פתח אותו והוסף כללים. למשל: "ענה תמיד בעברית", "אל תוסיף הערות מיותרות
            בקוד", "אל תריץ פקודות מחיקה בלי אישור".
          </Step>
        </Steps>
        <PromptCard
          title="דוגמה ל-CLAUDE.md"
          prompt={`# הכללים שלי

## תקשורת
- ענה תמיד בעברית, קצר ולעניין.
- אם אתה לא בטוח — תשאל, אל תנחש.

## עבודה
- הצג תוכנית לפני שינויים גדולים.
- אל תמחק קבצים בלי לאשר איתי.
- שמור על קוד פשוט; בלי הרחבות שלא ביקשתי.`}
          note="שמור את זה כקובץ CLAUDE.md בשורש הפרויקט. אפשר גם קובץ גלובלי ב-~/.claude/CLAUDE.md שחל על כל הפרויקטים."
        />
        <Callout variant="important" title="ההבדל מהזיכרון של הצ'אט">
          הזיכרון בצ'אט (פרק 01) הוא אישי וחוצה-שיחות. <code>CLAUDE.md</code> הוא
          לפי-פרויקט וגלוי כקובץ. שניהם "זיכרון", אבל לא אותו דבר.
        </Callout>
      </Section>

      <Section id="skills" eyebrow="מומחיות לפי דרישה" title="התקנת Skills (מיומנויות)">
        <Prose>
          <p>
            מיומנות = חבילת ידע + הוראות + כלים לתחום ספציפי. כש-Claude מזהה משימה
            מתאימה, הוא מפעיל את המיומנות לבד. יש שלוש דרכים להתקין:
          </p>
        </Prose>
        <SubHeading>הדרך הקלה: דרך Plugin (מומלץ)</SubHeading>
        <Prose>
          <p>רוב המיומנויות מגיעות ארוזות בתוך plugins. ראה הסעיף הבא.</p>
        </Prose>
        <SubHeading>הדרך הידנית</SubHeading>
        <Prose>
          <p>
            מיומנויות חיות בתיקיית <code>.claude/skills/</code>. כל מיומנות היא
            תיקייה עם קובץ <code>SKILL.md</code>. אפשר להתקין מהרשת:
          </p>
        </Prose>
        <CommandBlock commands={["npx skills add <שם-או-כתובת>"]} />
        <Grid cols={2}>
          <Card icon={FileCode} title="Project scope">
            <code>.claude/skills/</code> בתוך הפרויקט. משותף עם הצוות דרך git.
            למיומנויות ספציפיות לפרויקט.
          </Card>
          <Card icon={BookOpen} title="User scope">
            <code>~/.claude/skills/</code> בתיקיית הבית. זמין בכל הפרויקטים שלך.
            למיומנויות אישיות.
          </Card>
        </Grid>
        <Callout variant="note" title="כבר יש לך מלא">
          בחשבון שלך כבר מותקנות עשרות מיומנויות. רשימה מלאה עם הסבר על כל אחת —
          בדף <strong>הבונוס</strong> בסוף המדריך.
        </Callout>
      </Section>

      <Section id="plugins" eyebrow="חבילות מוכנות" title="Plugins ו-Marketplaces">
        <Lead>
          Plugin אורז מיומנות אחת או יותר (ולפעמים גם hooks ו-MCP) לחבילה אחת.
          מתקינים מתוך "שוק" (Marketplace) — ישירות מהטרמינל, בלי לצאת.
        </Lead>
        <Steps>
          <Step n={1} title="פתח את דפדפן התוספים">
            הקלד <code>/plugin</code>. נפתח ממשק לעיון, התקנה וניהול.
          </Step>
          <Step n={2} title="הוסף marketplace (אם צריך)">
            ברירת המחדל היא השוק הרשמי של Anthropic. להוספת שוק נוסף מ-GitHub:
            <CommandBlock commands={["/plugin marketplace add <owner>/<repo>"]} />
          </Step>
          <Step n={3} title="התקן plugin">
            עיין בלשונית <strong>Discover</strong>, בחר plugin, ובחר scope
            (פרויקט או גלובלי). אפשר גם ישירות:
            <CommandBlock commands={["/plugin install <שם-הplugin>"]} />
          </Step>
          <Step n={4} title="זה זמין מיד" last>
            המיומנויות שבתוך ה-plugin פעילות בשיחה הנוכחית — בלי הפעלה מחדש.
          </Step>
        </Steps>
        <Grid cols={2}>
          <Card icon={Plug} title="השוק הרשמי">
            <code>anthropics/claude-plugins-official</code> — תוספים שעברו בדיקת
            איכות ובטיחות של Anthropic. התחל מכאן.
          </Card>
          <Card icon={Puzzle} title="שווקי קהילה">
            יש אלפי תוספים ומיומנויות מהקהילה. מצוין — אבל התקן רק ממקורות שאתה
            סומך עליהם (קוד רץ אצלך במחשב).
          </Card>
        </Grid>
        <Callout variant="warning" title="בטיחות תוספים">
          Plugin יכול להריץ קוד ולגשת לקבצים שלך. התקן מהשוק הרשמי או ממקורות
          מוכרים. אם אתה לא בטוח מה plugin עושה — אל תתקין.
        </Callout>
      </Section>

      <Section id="mcp" eyebrow="חיבור לעולם" title="חיבור MCP ו-Connectors">
        <Prose>
          <p>
            כמו ב-Cowork, גם כאן אפשר לחבר את Claude לכלים חיצוניים דרך MCP. בטרמינל
            זה אפילו יותר גמיש. להוספת שרת MCP:
          </p>
        </Prose>
        <CommandBlock
          commands={[
            "claude mcp add <שם> -- <פקודת-ההפעלה>",
            "claude mcp list",
            "claude mcp remove <שם>",
          ]}
        />
        <Prose>
          <p>
            בתוך שיחה, הפקודה <code>/mcp</code> מציגה את השרתים המחוברים, מצב
            החיבור, והכלים שכל אחד חושף. חיבורים שדורשים התחברות (OAuth) — יפתחו
            דפדפן לאישור.
          </p>
        </Prose>
        <Callout variant="tip" title="דוגמאות שימושיות">
          חיבור ל-GitHub (לנהל קוד ו-issues), ל-Supabase (מסד נתונים), ל-Notion,
          או ל-Linear. ברגע שמחובר — "תפתח issue חדש על הבאג שמצאנו" עובד ישירות.
        </Callout>
      </Section>

      <Section id="automation" eyebrow="להריץ לבד" title="תזמון ואוטומציה — שלוש רמות">
        <Lead>
          אחד הדברים החזקים: לגרום ל-Claude לרוץ <strong>אוטומטית</strong> — לפי
          זמן, אירוע, או בלולאה. יש שלוש רמות, מהקלה לעוצמתית:
        </Lead>
        <Grid cols={3}>
          <Card icon={Clock} title="1. ‎/loop (בסשן)">
            הדרך המהירה להריץ פרומפט שוב ושוב על מרווח זמן. תקף כל עוד הסשן פתוח.
          </Card>
          <Card icon={Clock} title="2. Scheduled Tasks">
            משימות מתוזמנות ששורדות הפעלה מחדש. רצות מקומית על המחשב שלך.
          </Card>
          <Card icon={Clock} title="3. Routines (ענן)">
            רצות על תשתית הענן של Anthropic — גם כשהמחשב סגור. הכי עוצמתי.
          </Card>
        </Grid>
        <SubHeading>‎/loop — לולאה מהירה</SubHeading>
        <CommandBlock commands={['/loop 30m "בדוק אם יש מיילים חדשים וסכם לי"']} />
        <Prose>
          <p>
            Claude ממיר את המרווח (כאן 30 דקות) לתזמון ומריץ אוטומטית. בלי מרווח —
            הוא יקבע לעצמו את הקצב.
          </p>
        </Prose>
        <SubHeading>Routines — אוטומציה בענן</SubHeading>
        <Prose>
          <p>
            אתה כותב סשן Claude Code כרגיל, שומר אותו כ-<strong>routine</strong>,
            ו-Anthropic מריצים אותו לפי <strong>טריגר</strong>:
          </p>
          <ul>
            <li><strong>מתוזמן:</strong> כל שעה / יום / שבוע.</li>
            <li><strong>API:</strong> כשמגיעה קריאת HTTP.</li>
            <li><strong>GitHub:</strong> על PR, push או issue חדש.</li>
          </ul>
          <p>
            היתרון הגדול: <strong>הלפטופ יכול להיות סגור</strong> — זה רץ בענן.
            נרחיב על זה בפרק הבא (ענן ו-Dispatching).
          </p>
        </Prose>
        <Callout variant="note" title="מכסות יומיות">
          מספר ה-routines ביום תלוי בתוכנית: Pro — 5, Max — 15,
          Team/Enterprise — 25. תכנן בהתאם.
        </Callout>
      </Section>

      <Section id="subagents" eyebrow="להכפיל כוח" title="Subagents — כמה סוכנים במקביל">
        <Prose>
          <p>
            למשימות גדולות, Claude Code יכול להפעיל <strong>תת-סוכנים</strong>{" "}
            (subagents) שעובדים על חלקים שונים — לפעמים במקביל. למשל: סוכן אחד חוקר,
            שני כותב, שלישי בודק.
          </p>
        </Prose>
        <CommandBlock commands={["/agents"]} />
        <Grid cols={2}>
          <Card icon={Users} title="מתי כדאי">
            משימות שמתפצלות לחלקים עצמאיים: לחקור כמה נושאים, לעבור על הרבה קבצים,
            או להשוות גישות.
          </Card>
          <Card icon={SlidersHorizontal} title="מה המחיר">
            כל סוכן צורך מכסה בנפרד. עשרה סוכנים במקביל = פי-עשרה צריכה. מהיר, אבל
            יקר. נדבר על העלות בפרק הבא.
          </Card>
        </Grid>
        <Callout variant="tip" title="לא תמיד צריך">
          לרוב המשימות סוכן אחד מספיק לגמרי. השתמש במקביליות רק כשיש באמת חלקים
          עצמאיים — אחרת זה בזבוז מכסה בלי תועלת.
        </Callout>
      </Section>

      <Section id="power" eyebrow="כלים מתקדמים" title="Slash Commands, Hooks והרשאות">
        <Grid cols={3}>
          <Card icon={FileCode} title="Slash Commands">
            פקודות <code>/</code> מובנות (<code>/clear</code>, <code>/mcp</code>),
            ואפשר ליצור <strong>פקודות מותאמות</strong> משלך — קובץ ב-
            <code>.claude/commands/</code> שמכיל פרומפט שאתה מפעיל בקיצור.
          </Card>
          <Card icon={Plug} title="Hooks">
            פעולות אוטומטיות שמופעלות על אירועים — למשל "הרץ בדיקת קוד אחרי כל
            עריכה". מוגדרות בקובץ ההגדרות (<code>settings.json</code>).
          </Card>
          <Card icon={ShieldCheck} title="Permission Modes">
            כמה Claude צריך לבקש אישור: ממצב זהיר (מאשר כל פעולה) ועד מצב אוטונומי.
            התחל זהיר עד שאתה סומך עליו.
          </Card>
        </Grid>
        <TermCard term="Permission Modes" en="מצבי הרשאה">
          קובעים עד כמה הסוכן עצמאי. במצב הזהיר הוא מבקש אישור לכל פעולה רגישה
          (עריכת קובץ, הרצת פקודה). למשימות שגרתיות אפשר להרחיב, אבל לעולם אל תיתן
          אוטונומיה מלאה על דברים שלא בדקת.
        </TermCard>
        <Callout variant="important" title="כלל ברזל לאוטומציה">
          ככל שאתה נותן יותר אוטונומיה (פחות אישורים, hooks, routines) — תוודא
          שהגדרת מגבלות ברורות ב-<code>CLAUDE.md</code> ושאתה מגבה. כוח גדול,
          אחריות גדולה.
        </Callout>
      </Section>

      <Section id="checklist" eyebrow="סיכום" title="צ'קליסט: שולט ב-Claude Code">
        <Checklist
          id="code"
          items={[
            "התקנתי את Claude Code והרצתי claude --version בהצלחה",
            "התחברתי עם /login",
            "הרצתי משימה ראשונה בעברית וראיתי איך הוא מבקש אישור",
            "אני יודע מתי להשתמש ב-/clear ו-/compact",
            "נתתי מטרה גדולה וביקשתי תוכנית לפני ביצוע",
            "יצרתי CLAUDE.md עם /init וערכתי בו כללים",
            "התקנתי plugin דרך /plugin",
            "אני יודע איך לחבר שרת MCP",
            "הבנתי את שלוש רמות התזמון (loop / scheduled / routines)",
            "אני יודע מה זה subagents ומתי (לא) להשתמש בהם",
          ]}
        />
      </Section>

      <PageNav
        prev={{ href: "/cowork", label: "Claude Cowork" }}
        next={{ href: "/cloud", label: "ענן ו-Dispatching" }}
      />
    </PageShell>
  );
}
