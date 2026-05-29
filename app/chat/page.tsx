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
import { PlatformTabs } from "@/components/PlatformTabs";
import { Steps, Step } from "@/components/Steps";
import { Checklist } from "@/components/Checklist";
import {
  Download,
  FolderKanban,
  Brain,
  FileUp,
  Globe,
  Sparkle,
  Lock,
  PanelsTopLeft,
} from "lucide-react";

const toc = [
  { id: "what", label: "מה זה Claude Chat" },
  { id: "install", label: "התקנה (Win/Mac)" },
  { id: "tour", label: "סיור בממשק" },
  { id: "prompting", label: "איך לדבר עם Claude" },
  { id: "projects", label: "Projects — קבצים וידע" },
  { id: "artifacts", label: "Artifacts" },
  { id: "web-files", label: "חיפוש והעלאת קבצים" },
  { id: "memory", label: "זיכרון" },
  { id: "memory-import", label: "ייבוא זיכרון מ-AI אחר" },
  { id: "connectors", label: "Connectors (טעימה)" },
  { id: "privacy", label: "פרטיות וטעויות" },
  { id: "checklist", label: "צ'קליסט" },
];

export default function ChatPage() {
  return (
    <PageShell toc={toc}>
      <PageHeader
        step="01"
        title="Claude Chat — אפליקציית הדסקטופ"
        lead="כאן הכל מתחיל. נלמד להתקין את האפליקציה, להבין כל כפתור, לדבר עם Claude בצורה שמוציאה ממנו את המקסימום, ולנהל זיכרון אישי — כולל איך לייבא את כל מה ש-ChatGPT או Gemini כבר יודעים עליך."
        badges={["למתחילים מאפס", "Windows + Mac", "20 דקות"]}
      />

      <Section id="what" eyebrow="הבסיס" title="מה זה Claude Chat, ולמה דווקא בדסקטופ">
        <Lead>
          Claude Chat הוא העוזר החכם של Anthropic — אתה כותב, הוא עונה. שואלים אותו
          שאלות, מבקשים לכתוב, לנתח, לסכם, לתרגם, להסביר, לסדר מחשבות. זה הכלי
          הבסיסי, וממנו צומח כל השאר במדריך.
        </Lead>
        <Prose>
          <p>
            אפשר להשתמש ב-Claude בדפדפן (claude.ai), אבל{" "}
            <strong>אפליקציית הדסקטופ נותנת לך הרבה יותר</strong>: גישה לקבצים
            במחשב שלך, חיבור לכלים חיצוניים (MCP/Connectors), הרחבות בלחיצה אחת,
            וגישה ל-<strong>Cowork</strong> — הסוכן שמבצע משימות אמיתיות (פרק 02).
            הדפדפן מתאים לשאלות מהירות; הדסקטופ הוא סביבת עבודה.
          </p>
        </Prose>

        <Grid cols={3}>
          <Card icon={PanelsTopLeft} title="צ'אט">
            שיחה רגילה — הכלי הכי גמיש שיש. שאלות, כתיבה, מחקר, רעיונות.
          </Card>
          <Card icon={FolderKanban} title="Projects">
            תיקיות חכמות שמחזיקות הקשר וקבצים קבועים בין שיחות.
          </Card>
          <Card icon={Brain} title="זיכרון">
            Claude זוכר העדפות ועובדות עליך לאורך זמן, אם תאפשר לו.
          </Card>
        </Grid>

        <KeyTakeaway>
          אם אתה מתכוון להשתמש ב-Claude ברצינות — תוריד את אפליקציית הדסקטופ. כל
          הפיצ'רים המתקדמים במדריך הזה חיים שם.
        </KeyTakeaway>
      </Section>

      <Section id="install" eyebrow="התקנה" title="להתקין את האפליקציה — שלב אחר שלב">
        <Prose>
          <p>
            ההורדה חינמית. צריך רק חשבון Claude (אפשר להירשם בחינם עם אימייל או
            חשבון Google). התשלום (Pro/Max) פותח פיצ'רים מתקדמים כמו זיכרון
            ו-Cowork, אבל אפשר להתחיל בחינם.
          </p>
        </Prose>

        <PlatformTabs
          windows={
            <Steps>
              <Step n={1} title="הורדה">
                גלוש ל-<code>claude.ai/download</code> ולחץ על הורדה ל-Windows.
                יירד קובץ <code>.exe</code>.
              </Step>
              <Step n={2} title="התקנה">
                פתח את הקובץ שירד (בדרך כלל בתיקיית <strong>Downloads</strong>).
                אם Windows מציג אזהרת SmartScreen — לחץ{" "}
                <span className="kbd">More info</span> ואז{" "}
                <span className="kbd">Run anyway</span>. ההתקנה אוטומטית.
              </Step>
              <Step n={3} title="התחברות">
                האפליקציה תיפתח. התחבר עם אותו חשבון שיש לך ב-claude.ai.
              </Step>
              <Step n={4} title="הצמדה לשורת המשימות" last>
                לחץ ימני על האייקון ב-Taskbar →{" "}
                <span className="kbd">Pin to taskbar</span>. קיצור פתיחה מהיר:{" "}
                <span className="kbd">Win</span> ואז להקליד "Claude".
              </Step>
            </Steps>
          }
          mac={
            <Steps>
              <Step n={1} title="הורדה">
                גלוש ל-<code>claude.ai/download</code> ולחץ על הורדה ל-Mac. בחר
                את הגרסה המתאימה למעבד שלך (Apple Silicon למחשבי M, או Intel).
                אם אתה לא בטוח — תפריט אפל  →{" "}
                <span className="kbd">About This Mac</span>.
              </Step>
              <Step n={2} title="התקנה">
                פתח את קובץ ה-<code>.dmg</code> שירד, וגרור את אייקון{" "}
                <strong>Claude</strong> לתוך תיקיית <strong>Applications</strong>.
              </Step>
              <Step n={3} title="פתיחה ראשונה">
                פתח מ-Applications. אם מופיע "Claude is from the internet" — לחץ{" "}
                <span className="kbd">Open</span>. התחבר עם החשבון שלך.
              </Step>
              <Step n={4} title="קיצור גישה מהיר" last>
                לחץ ימני על האייקון ב-Dock →{" "}
                <span className="kbd">Options</span> →{" "}
                <span className="kbd">Keep in Dock</span>. פתיחה מהירה:{" "}
                <span className="kbd">Cmd</span>+<span className="kbd">Space</span>{" "}
                ואז "Claude".
              </Step>
            </Steps>
          }
        />

        <Callout variant="tip" title="קיצור זהב">
          על Mac אפשר להגדיר את Claude שייפתח עם קיצור מקלדת מכל מקום
          (Settings → קיצורים). זה הופך אותו לעוזר שתמיד במרחק הקשה אחת.
        </Callout>
      </Section>

      <Section id="tour" eyebrow="התמצאות" title="סיור מהיר בממשק">
        <Prose>
          <p>
            המסך מתחלק לשלושה אזורים. ברגע שתזהה אותם, לא תלך לאיבוד:
          </p>
        </Prose>
        <Steps>
          <Step n="א" title="סרגל צד (Sidebar)">
            רשימת השיחות שלך, ה-<strong>Projects</strong>, וכפתור{" "}
            <strong>New chat</strong>. כאן חוזרים לכל שיחה ישנה.
          </Step>
          <Step n="ב" title="חלון השיחה (מרכז)">
            כל ההתכתבות. ההודעות שלך מימין, התשובות של Claude. אפשר לערוך הודעה
            שכבר שלחת (ריחוף → אייקון עריכה) וזה "מגלגל" את השיחה מחדש מאותה נקודה.
          </Step>
          <Step n="ג" title="תיבת הכתיבה (למטה)" last>
            כאן כותבים. כפתור <strong>+</strong> מצרף קבצים ומחבר Connectors.
            למעלה אפשר לבחור <strong>מודל</strong> (Opus = הכי חכם, Sonnet = מהיר
            וחזק, Haiku = הכי מהיר) ולהדליק <strong>חיפוש ברשת</strong> או{" "}
            <strong>Extended thinking</strong> (חשיבה מעמיקה לפני תשובה).
          </Step>
        </Steps>

        <Callout variant="note" title="איזה מודל לבחור?">
          ברירת מחדל טובה: <strong>Sonnet</strong> לרוב המשימות. עבור לעבודה
          מורכבת שדורשת חשיבה עמוקה (קוד מסובך, ניתוח ארוך) — בחר{" "}
          <strong>Opus</strong>. אל תתלבט יותר מדי; אפשר להחליף תוך כדי.
        </Callout>
      </Section>

      <Section id="prompting" eyebrow="המיומנות הכי חשובה" title="איך לדבר עם Claude (Prompting)">
        <Lead>
          90% מההבדל בין תשובה בינונית למצוינת הוא{" "}
          <strong>איך שאתה מבקש</strong>. זו לא קסם — זו מיומנות פשוטה שאפשר ללמוד
          בחמש דקות.
        </Lead>

        <SubHeading>ארבעת המרכיבים של בקשה טובה</SubHeading>
        <Grid cols={2}>
          <Card title="1. הקשר (Context)">
            ספר מי אתה ומה המצב. "אני בעל עסק קטן למאפים" עדיף על כלום.
          </Card>
          <Card title="2. המשימה (Task)">
            מה בדיוק אתה רוצה. "כתוב 3 כותרות לפוסט" ולא "תעזור לי עם שיווק".
          </Card>
          <Card title="3. פורמט (Format)">
            איך תרצה את התשובה — רשימה? טבלה? פסקה קצרה? בעברית פשוטה?
          </Card>
          <Card title="4. דוגמה (Example)">
            אם יש סגנון שאתה אוהב — הראה דוגמה. Claude מחקה מצוין.
          </Card>
        </Grid>

        <PromptCard
          title="תבנית פתיחה אוניברסלית"
          prompt={`הקשר: [מי אני / מה המצב — משפט-שניים]
המשימה: [מה אני רוצה שתעשה]
פורמט התשובה: [רשימה / טבלה / טקסט קצר / טון]
מגבלות: [אורך, שפה, מה להימנע ממנו]`}
          note="העתק, מלא את הסוגריים, והדבק. זו נקודת פתיחה שמתאימה כמעט לכל בקשה."
        />

        <SubHeading>טכניקות שמשנות את המשחק</SubHeading>
        <Prose>
          <ul>
            <li>
              <strong>בקש ממנו לחשוב קודם:</strong> "תחשוב צעד-צעד לפני שתענה" משפר
              משמעותית משימות מורכבות.
            </li>
            <li>
              <strong>תן לו תפקיד:</strong> "תתנהג כעורך לשוני קפדן" ממקד את התשובה.
            </li>
            <li>
              <strong>בקש כמה גרסאות:</strong> "תן לי 3 גישות שונות" — ואז תבחר
              ותחדד.
            </li>
            <li>
              <strong>אל תפחד לתקן:</strong> "קצר מדי", "פחות רשמי", "בעברית" — שיחה
              היא תהליך, לא שאלה אחת.
            </li>
            <li>
              <strong>בקש שישאל אותך:</strong> "אם חסר לך מידע, תשאל אותי לפני
              שתתחיל" — מונע ניחושים.
            </li>
          </ul>
        </Prose>

        <Callout variant="tip" title="הסוד הכי פשוט">
          כשהתשובה לא טובה, במקום להתאמץ לנסח מחדש — פשוט תגיד ל-Claude{" "}
          <em>מה</em> לא עבד. "זה כללי מדי, תן דוגמאות קונקרטיות מהתחום שלי". הוא
          מתקן את עצמו מצוין.
        </Callout>
      </Section>

      <Section id="projects" eyebrow="עבודה מסודרת" title="Projects — לתת ל-Claude זיכרון לפרויקט">
        <Lead>
          Project הוא כמו תיקייה חכמה. כל השיחות בתוכו חולקות{" "}
          <strong>אותו ידע, אותם קבצים, ואותן הוראות</strong> — כך שאתה לא צריך
          להסביר את עצמך מחדש כל פעם.
        </Lead>
        <Prose>
          <p>מתי להשתמש? כשיש לך נושא מתמשך: עסק, ספר שאתה כותב, לקוח, קורס לימודים.</p>
        </Prose>
        <Steps>
          <Step n={1} title="צור Project">
            בסרגל הצד → <strong>Projects</strong> → <strong>New project</strong>.
            תן לו שם ברור.
          </Step>
          <Step n={2} title="הוסף ידע (Knowledge)">
            העלה קבצים שרלוונטיים תמיד — מסמך מיתוג, מחירון, קובץ סגנון כתיבה.
            Claude יתייחס אליהם בכל שיחה בפרויקט.
          </Step>
          <Step n={3} title="כתוב הוראות קבועות (Instructions)" last>
            למשל: "ענה תמיד בעברית, טון ידידותי, בלי ז'רגון". זה חל על כל שיחה
            בפרויקט.
          </Step>
        </Steps>
        <Callout variant="note" title="דוגמה מהחיים">
          בעל עסק יוצר Project בשם "השיווק שלי", מעלה את לוגו המותג + מסמך
          "קול המותג", וכותב בהוראות "כתוב בעברית, קליל ולא מתחנף". מעכשיו כל פוסט,
          מייל וכותרת יוצאים בדיוק בסגנון שלו — בלי להזכיר את זה שוב.
        </Callout>
      </Section>

      <Section id="artifacts" eyebrow="תוצרים חיים" title="Artifacts — כשהתשובה הופכת למסמך">
        <Prose>
          <p>
            כשאתה מבקש מ-Claude משהו "שלם" — מסמך ארוך, קוד, טבלה, דף נחיתה — הוא
            פותח אותו בחלון נפרד מימין שנקרא <strong>Artifact</strong>. היתרון: זה
            נשאר חי. אפשר לבקש שינויים והוא מעדכן את אותו תוצר במקום לכתוב הכל מחדש.
          </p>
          <ul>
            <li><strong>תצוגה חיה:</strong> דף אינטרנט או אפליקציה קטנה רצים מולך ממש שם.</li>
            <li><strong>עריכה מתמשכת:</strong> "תוסיף עמודה", "תשנה צבע לכחול" — והוא מעדכן.</li>
            <li><strong>הורדה ושיתוף:</strong> אפשר להוריד את התוצר או לשתף קישור.</li>
          </ul>
        </Prose>
        <PromptCard
          title="לבקש Artifact"
          prompt={`בנה לי דף נחיתה פשוט לעסק שלי (מאפייה).
כותרת, תיאור קצר, כפתור "הזמינו עכשיו", ופרטי קשר.
עיצוב נקי, חם, בעברית. תפתח את זה כ-Artifact שאוכל לראות.`}
        />
      </Section>

      <Section id="web-files" eyebrow="קלט חיצוני" title="חיפוש ברשת והעלאת קבצים">
        <Grid cols={2}>
          <Card icon={Globe} title="חיפוש ברשת">
            הדלק את כפתור החיפוש בתיבת הכתיבה, ו-Claude יביא מידע עדכני מהאינטרנט עם
            מקורות. מצוין לחדשות, מחירים, ונתונים שמשתנים.
          </Card>
          <Card icon={FileUp} title="העלאת קבצים">
            גרור קובץ לתיבה, או לחץ <strong>+</strong>. PDF, Word, Excel, תמונות,
            קוד — הוא קורא ומנתח. שאל "סכם לי את ה-PDF הזה" או "מה הטעות בטבלה".
          </Card>
        </Grid>
        <Callout variant="tip" title="שילוב חזק">
          תעלה חוזה PDF ותשאל "אילו סעיפים מסוכנים לי?". תעלה צילום מסך של שגיאה
          ותשאל "מה הבעיה?". תמונה + שאלה = אחד השימושים הכי שימושיים שיש.
        </Callout>
      </Section>

      <Section id="memory" eyebrow="המשכיות" title="זיכרון — Claude שזוכר אותך">
        <Lead>
          עם זיכרון פעיל, Claude זוכר עובדות והעדפות עליך בין שיחות — מה אתה עושה,
          איך אתה אוהב תשובות, על מה אתה עובד. אתה מפסיק לחזור על עצמך.
        </Lead>
        <Callout variant="important" title="דורש תוכנית בתשלום">
          זיכרון (וגם ייבוא זיכרון בסעיף הבא) זמין ב-<strong>Pro, Max, Team
          ו-Enterprise</strong>. בחשבון חינמי אין זיכרון מתמשך.
        </Callout>
        <Prose>
          <p>איך שולטים בזה (Settings → Memory / זיכרון):</p>
          <ul>
            <li><strong>הדלקה/כיבוי:</strong> אתה מחליט אם הזיכרון פעיל בכלל.</li>
            <li><strong>צפייה ועריכה:</strong> אפשר לראות מה Claude זוכר, ולמחוק פריטים.</li>
            <li><strong>בקשה ישירה:</strong> "תזכור שאני מעדיף תשובות קצרות" — והוא שומר.</li>
            <li><strong>שיחות נקיות:</strong> אפשר לפתוח שיחה בלי זיכרון כשרוצים התחלה נקייה.</li>
          </ul>
        </Prose>
        <Callout variant="note" title="הבדל חשוב">
          ה<strong>זיכרון</strong> הזה הוא של אפליקציית הצ'אט. ל-Claude Code יש
          "זיכרון" אחר לגמרי — קובץ בשם <code>CLAUDE.md</code> שחי בתוך הפרויקט
          (נדבר עליו בפרק 03). אל תתבלבל ביניהם.
        </Callout>
      </Section>

      <Section id="memory-import" eyebrow="מעבר חלק" title="לייבא זיכרון מ-ChatGPT או Gemini">
        <Lead>
          עברת מ-ChatGPT או Gemini? אתה לא חייב להתחיל מאפס. Anthropic בנו דף ייעודי
          שמעביר את כל מה ש-ה-AI הקודם יודע עליך לתוך Claude — בפחות מדקה.
        </Lead>
        <Steps>
          <Step n={1} title="פתח את דף הייבוא">
            גלוש ל-<code>claude.com/import-memory</code>. Claude ייתן לך{" "}
            <strong>פרומפט מוכן</strong> להעתקה.
          </Step>
          <Step n={2} title="הדבק ב-AI הישן">
            פתח את ChatGPT / Gemini / Grok, הדבק את הפרומפט, ושלח. ה-AI יפלוט את כל
            מה שהוא זוכר עליך — בלוק טקסט אחד.
          </Step>
          <Step n={3} title="העתק את הפלט">
            סמן את כל הטקסט שה-AI הישן ייצר, והעתק אותו.
          </Step>
          <Step n={4} title="הדבק ב-Claude" last>
            חזור לדף הייבוא של Claude (או להגדרות הזיכרון), הדבק, ו-Claude יעבד את
            זה לתוך מערכת הזיכרון שלו. זהו — הוא מכיר אותך.
          </Step>
        </Steps>
        <PromptCard
          title="אם הדף לא זמין לך — פרומפט ידני ל-AI הישן"
          prompt={`סכם את כל מה שאתה יודע עליי מהשיחות שלנו ומהזיכרון שלך:
מי אני, התחומים שאני עוסק בהם, ההעדפות שלי לגבי סגנון תשובות,
פרויקטים שאני עובד עליהם, ועובדות חשובות שכדאי לזכור.
החזר הכל כבלוק טקסט אחד, מסודר לפי נושאים, שאוכל להעתיק ל-AI אחר.`}
          note="עובד עם ChatGPT, Gemini, Grok וכו'. אחרי שתקבל את הפלט — הדבק אותו בהגדרות הזיכרון של Claude."
        />
        <Callout variant="warning" title="הגבלת אזור">
          נכון לתחילת 2026, יבוא/ייצוא זיכרון אוטומטי עדיין לא זמין בחלק
          מהמדינות (בריטניה, שוויץ, וה-EEA) בגלל רגולציית פרטיות. אם אתה שם —
          השיטה הידנית למעלה תמיד עובדת.
        </Callout>
      </Section>

      <Section id="connectors" eyebrow="חיבור לעולם" title="Connectors — טעימה ראשונה">
        <Prose>
          <p>
            Connectors מחברים את Claude לכלים אחרים: Google Drive, Gmail, Notion,
            לוח שנה ועוד. במקום להעתיק-להדביק, Claude קורא ופועל ישירות. בתיבת
            הכתיבה: כפתור <strong>+</strong> → <strong>Connectors</strong>.
          </p>
        </Prose>
        <Callout variant="note" title="נרחיב בהמשך">
          חיבור Connectors ו-MCP זה לב העניין של <strong>Cowork</strong> (פרק 02)
          ו-<strong>Claude Code</strong> (פרק 03). כאן רק תדע שזה קיים. שם נלמד
          להתקין צעד-צעד.
        </Callout>
        <TermCard term="MCP" en="Model Context Protocol">
          "שפה" סטנדרטית פתוחה שמאפשרת ל-Claude להתחבר לכלים ולמקורות מידע חיצוניים.
          תחשוב על זה כמו שקע USB אוניברסלי: כל כלי שתומך ב-MCP פשוט "מתחבר"
          ל-Claude. הסבר מלא — בפרק Cowork.
        </TermCard>
      </Section>

      <Section id="privacy" eyebrow="להישאר בטוח" title="פרטיות וטעויות נפוצות">
        <Grid cols={2}>
          <Card icon={Lock} title="מה לא להדביק">
            סיסמאות, מספרי כרטיס אשראי, מפתחות API, מסמכים סודיים של מקום העבודה
            בלי אישור. אם לא היית שולח את זה במייל — אל תדביק.
          </Card>
          <Card icon={Sparkle} title="לאמת עובדות קריטיות">
            Claude חכם מאוד אבל לא חף מטעויות. מספרים, תאריכים, ציטוטים משפטיים או
            רפואיים — תמיד תאמת ממקור.
          </Card>
        </Grid>
        <Prose>
          <ul>
            <li><strong>הגדרות פרטיות:</strong> ב-Settings אפשר לקבוע אם השיחות שלך משמשות לאימון. בדוק והחלט.</li>
            <li><strong>שיחה אחת = הקשר אחד:</strong> לנושא חדש לגמרי, פתח שיחה חדשה. זה שומר על תשובות ממוקדות.</li>
            <li><strong>אל תתייאש מ"לא יודע":</strong> אם Claude אומר שאין לו מידע עדכני — הדלק חיפוש ברשת.</li>
          </ul>
        </Prose>
      </Section>

      <Section id="checklist" eyebrow="סיכום" title="צ'קליסט: שולט ב-Chat">
        <Prose>
          <p>אם סימנת את כל אלה — אתה מוכן לעבור ל-Cowork.</p>
        </Prose>
        <Checklist
          id="chat"
          items={[
            "התקנתי את אפליקציית הדסקטופ והתחברתי",
            "אני יודע לבחור מודל ולהדליק חיפוש ברשת",
            "ניסחתי בקשה עם הקשר + משימה + פורמט",
            "יצרתי Project עם ידע והוראות קבועות",
            "העליתי קובץ (PDF/תמונה) ושאלתי עליו שאלה",
            "ביקשתי Artifact ועדכנתי אותו בלי לכתוב מחדש",
            "הבנתי איך עובד הזיכרון ואיך לראות/למחוק אותו",
            "ייבאתי (או יודע לייבא) זיכרון מ-AI אחר",
            "אני יודע מה לא להדביק לצ'אט",
          ]}
        />
      </Section>

      <PageNav
        prev={{ href: "/", label: "פתיחה" }}
        next={{ href: "/cowork", label: "Claude Cowork" }}
      />
    </PageShell>
  );
}
