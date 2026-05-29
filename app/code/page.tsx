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
  MessageSquare,
  Bot,
} from "lucide-react";

const toc = [
  { id: "what", label: "מה זה Claude Code" },
  { id: "install", label: "התקנה" },
  { id: "setup", label: "הגדרה והתחברות" },
  { id: "first-run", label: "הרצה ראשונה" },
  { id: "github-desktop", label: "GitHub Desktop" },
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
        lead="הכלי הכי עוצמתי בארגז — ועכשיו הוא חי בתוך אפליקציית Claude לדסקטופ, בלי טרמינל. כאן נלמד להתקין, לתת לו מטרות שלמות, ולהעצים אותו עם מיומנויות, תוספים, חיבורים ואוטומציה."
        badges={["Windows · Mac", "אפליקציה — בלי טרמינל", "גם ללא-טכניים"]}
      />

      <Section id="what" eyebrow="אותה אפליקציה, טאב חדש" title="מה זה Claude Code — בתוך האפליקציה שכבר יש לך">
        <Lead>
          Claude Code הוא אותו סוכן מבצע כמו Cowork, אבל ב"מצב מקצועי": שליטה מלאה,
          אוטומציה, ואינסוף הרחבות. והחדשות הטובות — <strong>הוא חי בתוך אפליקציית
          Claude לדסקטופ</strong>, אותה אחת מפרקים 01–02. לא צריך טרמינל ולא להתקין
          שום דבר בנפרד: זה פשוט <strong>טאב</strong>.
        </Lead>
        <Prose>
          <p>
            כשפותחים את האפליקציה רואים למעלה במרכז שלושה טאבים — וזה בדיוק המבנה
            של המדריך הזה:
          </p>
        </Prose>
        <Grid cols={3}>
          <Card icon={MessageSquare} title="Chat">
            שיחה רגילה, בלי גישה לקבצים — כמו claude.ai. זה פרק 01.
          </Card>
          <Card icon={Bot} title="Cowork">
            סוכן אוטונומי שעובד ברקע על מכונה בענן, בזמן שאתה עושה דברים אחרים. פרק 02.
          </Card>
          <Card icon={FileCode} title="Code">
            עוזר קוד אינטראקטיבי עם גישה ישירה לקבצים שלך — אתה מאשר כל שינוי בזמן
            אמת. כאן אנחנו.
          </Card>
        </Grid>
        <Prose>
          <p>
            "אבל אני לא מתכנת" — מצוין, זה לא מיועד רק למתכנתים. אנשים משתמשים
            ב-Claude Code כדי לארגן קבצים, לנתח נתונים, לבנות אתר אישי, לכתוב
            אוטומציות ולתחזק פרויקטים — בלי לדעת לתכנת. אתה כותב בעברית רגילה,
            ו-Claude עושה את העבודה ומראה לך כל שינוי לפני שהוא קורה.
          </p>
        </Prose>
        <KeyTakeaway>
          Cowork = סוכן ברקע שרץ לבד. Code = אתה והסוכן יושבים יחד על הקבצים שלך,
          צעד-צעד, עם אישור על כל שינוי. אותה אפליקציה — שני מצבי עבודה. (יש גם
          גרסת טרמינל למתקדמים; נגיע אליה מיד.)
        </KeyTakeaway>
      </Section>

      <Section id="install" eyebrow="התקנה" title="להתקין את אפליקציית Claude">
        <Lead>
          אם כבר התקנת את האפליקציה בפרק 01 — דלג ישר ל"הגדרה והתחברות". אם לא, זו
          הורדה רגילה של תוכנה, בדיוק כמו כל אפליקציה אחרת.
        </Lead>
        <PlatformTabs
          windows={
            <>
              <p>
                היכנס ל-<code>claude.ai/download</code>, הורד את המתקין ל-Windows
                (x64) והרץ אותו. אחרי ההתקנה פתח את <strong>Claude</strong> מתפריט
                התחל.
              </p>
              <p className="mt-2 text-sm text-muted">
                למעבדי ARM יש מתקין נפרד באותו עמוד. אין גרסת Linux — שם משתמשים
                בטרמינל (ראה למטה).
              </p>
            </>
          }
          mac={
            <>
              <p>
                היכנס ל-<code>claude.ai/download</code>, הורד את הגרסה ל-macOS
                (בנייה אחת ל-Intel ול-Apple Silicon) ופתח את קובץ ה-
                <code>.dmg</code>. גרור את <strong>Claude</strong> לתיקיית{" "}
                <strong>Applications</strong> ופתח משם.
              </p>
            </>
          }
        />
        <Callout variant="important" title="טאב Code דורש מנוי בתשלום">
          טאב ה-Code זמין במנוי <strong>Pro, Max, Team או Enterprise</strong>. אם
          בלחיצה על Code אתה מתבקש לשדרג — זו הסיבה. טאב ה-Chat עובד גם בחינם.
        </Callout>
        <Callout variant="note" title="למתקדמים: גרסת הטרמינל (CLI)">
          יש גם גרסת שורת-פקודה — שימושית למפתחים, ל-Linux ולאוטומציה בשרתים.
          התקנה בשורה אחת: ב-Windows דרך PowerShell{" "}
          <code>irm https://claude.ai/install.ps1 | iex</code>, או ב-Mac/Linux{" "}
          <code>curl -fsSL https://claude.ai/install.sh | bash</code>. שתי הגרסאות
          חולקות אותן הגדרות (CLAUDE.md, MCP, Skills) ואפשר להריץ אותן במקביל על
          אותו פרויקט.
        </Callout>
      </Section>

      <Section id="setup" eyebrow="צעד ראשון" title="הגדרה והתחברות">
        <Steps>
          <Step n={1} title="פתח את Claude והתחבר">
            פתח את האפליקציה. בפעם הראשונה התחבר עם חשבון Claude שלך (אותו אחד
            מהצ'אט).
          </Step>
          <Step n={2} title="לחץ על הטאב Code">
            למעלה במרכז יש שלושה טאבים: Chat, Cowork, Code. לחץ על{" "}
            <strong>Code</strong>.
          </Step>
          <Step n={3} title="אם ביקשו ממך לשדרג או להתחבר שוב" last>
            בקשת שדרוג = צריך מנוי בתשלום. בקשה להתחבר "אונליין" = השלם את
            ההתחברות בדפדפן והפעל מחדש את האפליקציה. אחרי זה הטאב נפתח.
          </Step>
        </Steps>
        <Callout variant="note" title="פקודות לוכסן (Slash Commands)">
          בתוך תיבת ההודעה, כל מה שמתחיל ב-<code>/</code> הוא פקודה מיוחדת ל-Claude
          Code (כמו <code>/clear</code> לשיחה נקייה, או <code>/init</code> ליצירת
          קובץ כללים). כל השאר — שיחה רגילה בעברית.
        </Callout>
      </Section>

      <Section id="first-run" eyebrow="בוא ננסה" title="ההרצה הראשונה שלך">
        <Steps>
          <Step n={1} title="בחר סביבה ותיקייה">
            בחר <strong>Local</strong> (הרצה על המחשב שלך, ישירות על הקבצים שלך).
            לחץ <strong>Select folder</strong> ובחר תיקיית פרויקט. התחל מתיקייה
            קטנה שאתה מכיר.
          </Step>
          <Step n={2} title="בחר מודל">
            ליד כפתור השליחה יש תפריט מודלים (Opus / Sonnet / Haiku). אפשר לשנות
            בכל רגע.
          </Step>
          <Step n={3} title="כתוב משימה בעברית">
            תאר מה אתה רוצה, כאילו אתה מדבר עם עובד. למשל: "סדר לי את הקבצים
            בתיקייה הזאת לפי סוג".
          </Step>
          <Step n={4} title="אשר או דחה כל שינוי" last>
            במצב ברירת המחדל (<strong>Ask</strong>) Claude מציג{" "}
            <strong>תצוגת שינויים</strong> (diff) עם כפתורי{" "}
            <strong>Accept / Reject</strong> לכל שינוי. הקבצים שלך לא משתנים עד
            שאתה מאשר.
          </Step>
        </Steps>
        <Callout variant="warning" title="Windows: צריך את Git מותקן">
          כדי שמצב <strong>Local</strong> יעבוד ב-Windows, צריך ש-<strong>Git</strong>{" "}
          יהיה מותקן במחשב. הורד פעם אחת מ-<code>git-scm.com/downloads/win</code>{" "}
          והתקן עם הגדרות ברירת המחדל. ב-Mac זה כבר מובנה ברוב המקרים.
        </Callout>
        <PromptCard
          title="משימה ראשונה לדוגמה"
          prompt={`צור קובץ בשם hello.txt שכתוב בו "שלום עולם",
ואז הסבר לי בעברית מה עשית.`}
          note="תראה תצוגת diff עם מה שעומד להשתנות, ותלחץ Accept. ככה מרגישים את זה."
        />
        <Prose>
          <p>שתי פעולות זהב מההתחלה:</p>
          <ul>
            <li><code>/clear</code> — מנקה את השיחה ומתחיל נקי (חוסך בלבול והקשר ישן).</li>
            <li><code>@שם-קובץ</code> — מושך קובץ ספציפי לתוך השיחה כדי לתת ל-Claude הקשר.</li>
          </ul>
        </Prose>
        <Callout variant="tip" title="להפריע ולכוון תוך כדי">
          לא חייבים לחכות שיסיים. כפתור ה-Stop עוצר מיד, או פשוט כתוב תיקון ולחץ
          Enter כדי לכוון בלי לעצור. גם גרירת קבצים או תמונות לתוך התיבה עובדת.
        </Callout>
      </Section>

      <Section id="github-desktop" eyebrow="מ-GitHub לתיקייה מקומית" title="GitHub Desktop — להביא פרויקטים למחשב">
        <Lead>
          הרבה פרויקטים, תבניות וקוד פתוח חיים ב-<strong>GitHub</strong> — בתוך
          "מאגרים" (repositories). כדי ש-Claude Code או Cowork יעבדו על פרויקט כזה,
          צריך קודם <strong>להוריד אותו לתיקייה על המחשב שלך</strong>. הדרך הכי קלה
          ללא-טכניים: <strong>GitHub Desktop</strong> — אפליקציה גרפית חינמית, בלי
          פקודות טרמינל.
        </Lead>
        <TermCard term="Repository" en="Repo / מאגר">
          תיקיית פרויקט שמנוהלת ב-Git ומאוחסנת ב-GitHub. מכילה את כל הקבצים +
          היסטוריית השינויים. "להוריד repo למחשב" נקרא <strong>Clone</strong>{" "}
          (שכפול).
        </TermCard>

        <SubHeading>שלב 1 — הורדה והתקנה</SubHeading>
        <Prose>
          <p>
            היכנס לאתר הרשמי <code>desktop.github.com</code> ולחץ על כפתור ההורדה
            הגדול. האתר מזהה את מערכת ההפעלה שלך אוטומטית.
          </p>
        </Prose>
        <PlatformTabs
          windows={
            <>
              <p>
                לחץ <strong>Download for Windows</strong>. ירד קובץ התקנה{" "}
                (<code>GitHubDesktopSetup-x64.exe</code>). לחץ עליו פעמיים — ההתקנה
                רצה לבד והאפליקציה נפתחת בסוף.
              </p>
            </>
          }
          mac={
            <>
              <p>
                לחץ <strong>Download for macOS</strong>. ירד קובץ{" "}
                <code>.zip</code>. לחץ עליו פעמיים לחילוץ, וגרור את{" "}
                <strong>GitHub Desktop</strong> לתיקיית{" "}
                <strong>Applications</strong>. פתח אותו משם.
              </p>
            </>
          }
        />

        <SubHeading>שלב 2 — התחברות לחשבון</SubHeading>
        <Steps>
          <Step n={1} title="צריך חשבון GitHub (חינם)">
            אין לך? היכנס ל-<code>github.com</code> והירשם בחינם (אימייל + סיסמה).
            זה לוקח דקה.
          </Step>
          <Step n={2} title="התחבר מתוך האפליקציה" last>
            במסך הפתיחה לחץ <strong>Sign in to GitHub.com</strong>. ייפתח דפדפן
            לאישור — אשר, וחזרת לאפליקציה מחובר. (אפשר גם דרך{" "}
            <strong>File → Options → Accounts</strong> ב-Windows, או{" "}
            <strong>GitHub Desktop → Settings → Accounts</strong> ב-Mac.)
          </Step>
        </Steps>

        <SubHeading>שלב 3 — להביא פרויקט לתיקייה (Clone)</SubHeading>
        <Steps>
          <Step n={1} title="פתח את חלון השכפול">
            בתפריט: <strong>File → Clone Repository</strong>.
          </Step>
          <Step n={2} title="בחר מה להוריד">
            בחר repo מהרשימה שלך, או הדבק כתובת URL של repo ציבורי בלשונית{" "}
            <strong>URL</strong>.
          </Step>
          <Step n={3} title="בחר תיקיית יעד">
            תחת <strong>Local Path</strong> בחר איפה זה יישמר. ברירת המחדל היא
            תיקיית <code>GitHub</code> בתוך המסמכים שלך — מצוין.{" "}
            <strong>זכור את הנתיב הזה</strong> — תצטרך אותו כדי להפנות אליו את
            Claude.
          </Step>
          <Step n={4} title="Clone" last>
            לחץ <strong>Clone</strong>. הקבצים יורדים לתיקייה שבחרת — וזהו, הפרויקט
            על המחשב שלך.
          </Step>
        </Steps>

        <Callout variant="tip" title="עכשיו תן ל-Claude גישה לתיקייה">
          זה כל הקסם: הנתיב שבחרת הוא תיקייה רגילה. ב-<strong>Claude Code</strong>{" "}
          פשוט הרץ <code>cd</code> לתוכה ואז <code>claude</code>. ב-
          <strong>Cowork</strong> בחר אותה כתיקיית העבודה. משם שני הכלים רואים
          ועובדים על אותם קבצים בדיוק.
        </Callout>
        <Callout variant="note" title="למה דווקא GitHub Desktop?">
          אפשר גם דרך פקודת <code>git clone</code> בטרמינל — אבל הממשק הגרפי קל
          בהרבה ללא-טכניים: רואים כפתורים במקום לזכור פקודות, וקל לראות שינויים
          ולהעלות אותם בחזרה (Commit / Push) בלחיצה.
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
        <Callout variant="note" title="Plan Mode (מצב תכנון)">
          באפליקציה יש בורר <strong>מצב הרשאה</strong>. בחר <strong>Plan mode</strong>{" "}
          כדי ש-Claude <em>יחקור ויתכנן בלבד</em> — בלי לגעת בקבצים — עד שתאשר.
          מצוין לפני משימה גדולה או refactor.
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
            מתאימה, הוא מפעיל אותה לבד. באפליקציה אפשר לעיין במיומנויות הזמינות בכל
            רגע: הקלד <code>/</code> בתיבה, או לחץ <strong>+</strong> →{" "}
            <strong>Slash commands</strong>. ולהתקנת חדשות:
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
            באפליקציה לחץ <strong>+</strong> ליד תיבת ההודעה ובחר{" "}
            <strong>Plugins</strong>. (בטרמינל: הפקודה <code>/plugin</code>.) נפתח
            ממשק לעיון, התקנה וניהול.
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
            כמו ב-Cowork, גם כאן אפשר לחבר את Claude לכלים חיצוניים (GitHub, Slack,
            Linear, Notion ועוד) דרך MCP. באפליקציה מחברים דרך תפריט ה-
            <strong>+</strong> / Connectors. בטרמינל זה אפילו יותר גמיש — להוספת
            שרת MCP:
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
        <Callout variant="note" title="גם סשנים מקבילים">
          מעבר לתת-סוכנים בתוך סשן, באפליקציה אפשר לפתוח <strong>כמה סשנים
          במקביל</strong> מהסרגל הצדדי — כל אחד על פרויקט/משימה משלו, בבידוד מלא.
          חלון אחד, כמה עבודות שרצות יחד.
        </Callout>
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
            בורר באפליקציה: <strong>Ask</strong> (מאשר כל שינוי — ברירת מחדל),{" "}
            <strong>Auto accept</strong> (מאשר עריכות לבד, מהיר) ו-<strong>Plan</strong>{" "}
            (מתכנן בלי לגעת). התחל ב-Ask עד שאתה סומך עליו.
          </Card>
        </Grid>
        <TermCard term="Permission Modes" en="מצבי הרשאה">
          קובעים עד כמה הסוכן עצמאי. במצב הזהיר הוא מבקש אישור לכל פעולה רגישה
          (עריכת קובץ, הרצת פקודה). למשימות שגרתיות אפשר להרחיב, אבל לעולם אל תיתן
          אוטונומיה מלאה על דברים שלא בדקת.
        </TermCard>
        <Callout variant="tip" title="היתרון הגרפי: לראות הכל">
          באפליקציה אתה רואה <strong>תצוגת diff</strong> צבעונית של כל שינוי, יכול
          לפתוח <strong>Preview</strong> שמריץ את האתר/האפליקציה שלך ישירות בחלון,
          ולסדר את הפאנלים (צ'אט, קבצים, טרמינל, תצוגה) איך שנוח לך. זה ההבדל הגדול
          מהטרמינל.
        </Callout>
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
            "הורדתי את אפליקציית Claude ופתחתי את הטאב Code",
            "התחברתי עם חשבון Claude",
            "בחרתי Local + תיקייה והרצתי משימה ראשונה בעברית",
            "ראיתי תצוגת diff ואישרתי שינוי עם Accept",
            "אני יודע מתי להשתמש ב-/clear ו-@קובץ",
            "נתתי מטרה גדולה וביקשתי Plan mode לפני ביצוע",
            "יצרתי CLAUDE.md עם /init וערכתי בו כללים",
            "התקנתי plugin דרך + ← Plugins",
            "אני יודע איך לחבר כלי חיצוני (MCP / Connector)",
            "הבנתי את מצבי ההרשאה (Ask / Auto accept / Plan)",
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
