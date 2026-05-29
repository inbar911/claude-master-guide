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
  Pill,
} from "@/components/content";
import { Callout } from "@/components/Callout";
import { PromptCard } from "@/components/PromptCard";
import { Steps, Step } from "@/components/Steps";
import { Checklist } from "@/components/Checklist";
import {
  Bot,
  MessageSquare,
  Terminal,
  FolderOpen,
  Target,
  Plug,
  Puzzle,
  RefreshCw,
  ShieldAlert,
  FileSpreadsheet,
  FileText,
  Search,
} from "lucide-react";

const toc = [
  { id: "what", label: "מה זה Cowork" },
  { id: "vs", label: "Chat מול Cowork מול Code" },
  { id: "start", label: "הפעלה ראשונה והרשאות" },
  { id: "goal", label: "איך לנסח מטרה" },
  { id: "mcp", label: "מה זה MCP" },
  { id: "connect", label: "לחבר כלים (Connectors)" },
  { id: "skills-plugins", label: "Skills ו-Plugins" },
  { id: "loop", label: "לולאת העבודה" },
  { id: "examples", label: "דוגמאות אמיתיות" },
  { id: "safety", label: "בטיחות ופיקוח" },
  { id: "checklist", label: "צ'קליסט" },
];

export default function CoworkPage() {
  return (
    <PageShell toc={toc}>
      <PageHeader
        step="02"
        title="Claude Cowork — הסוכן שמבצע בשבילך"
        lead="ב-Chat אתה שואל ו-Claude עונה. ב-Cowork אתה נותן מטרה — והוא פשוט עושה. עובד על הקבצים שלך, פותח אפליקציות, חוצה בין מקורות מידע, ומחזיר לך תוצר מוגמר. כל זה בלי לכתוב שורת קוד אחת."
        badges={["ללא קוד", "עובד על קבצים מקומיים", "תוכניות בתשלום"]}
      />

      <Section id="what" eyebrow="קפיצת המדרגה" title="מה זה Cowork באמת">
        <Lead>
          Cowork הוא <strong>סוכן אוטונומי</strong>. במקום לפרק משימה לעשר בקשות
          נפרדות, אתה מתאר את התוצאה הרצויה — והוא מתכנן, מבצע צעד-צעד, ומסיים.
          Anthropic מתארים את זה כ"כוח של Claude Code, בחוויה שמתאימה לעבודת ידע
          לא-טכנית".
        </Lead>
        <Prose>
          <p>
            ההבדל המהותי מצ'אט: ב-Cowork ל-Claude יש{" "}
            <strong>הרשאה לקרוא, לערוך וליצור קבצים</strong> בתיקיות שאתה מאשר. הוא
            לא רק <em>מסביר</em> איך לעשות — הוא <em>עושה</em>. הוא רץ על הדסקטופ,
            המקום שבו רוב העבודה באמת קורית: קבצים, תיקיות, והאפליקציות היומיומיות.
          </p>
        </Prose>
        <Grid cols={2}>
          <Card icon={FileText} title="מסנתז מסמכים">
            אוסף חומר ממקורות שונים והופך אותו לטיוטה מסודרת.
          </Card>
          <Card icon={FolderOpen} title="מסדר קבצים">
            ממיין, משנה שמות, מנקה כפילויות בתיקייה שלמה.
          </Card>
          <Card icon={Search} title="עורך מחקר">
            מאתר את המידע הרלוונטי על פני הרבה מקורות ומסכם.
          </Card>
          <Card icon={FileSpreadsheet} title="מחלץ נתונים">
            הופך מסמכים לא-מובנים (חוזים, דוחות) לטבלאות נקיות.
          </Card>
        </Grid>
        <Callout variant="note" title="איפה מוצאים את זה">
          Cowork נמצא בתוך אפליקציית הדסקטופ של Claude, וזמין ב
          <strong>כל התוכניות בתשלום</strong>. אם התקנת את האפליקציה בפרק 01 —
          הוא כבר שם.
        </Callout>
      </Section>

      <Section id="vs" eyebrow="להבין את ההבדל" title="Chat מול Cowork מול Code">
        <Prose>
          <p>
            שלושתם אותו מוח (Claude), אבל בשלוש רמות של "כמה הוא עושה בשבילך":
          </p>
        </Prose>
        <Grid cols={3}>
          <Card icon={MessageSquare} title="Chat">
            <Pill tone="ocean">מדבר</Pill>
            <p className="mt-2">
              עונה, מייעץ, כותב טקסט. אתה מבצע את הפעולות בעצמך. בלי גישה לקבצים.
            </p>
          </Card>
          <Card icon={Bot} title="Cowork">
            <Pill tone="clay">מבצע (ללא קוד)</Pill>
            <p className="mt-2">
              מקבל מטרה ומבצע על הקבצים והאפליקציות שלך. ממשק גרפי פשוט, לכולם.
            </p>
          </Card>
          <Card icon={Terminal} title="Code">
            <Pill tone="sage">מבצע (כוח מלא)</Pill>
            <p className="mt-2">
              אותה יכולת ביצוע, אבל בטרמינל — עם שליטה מלאה, אוטומציה ותוספים.
              לטכניים יותר.
            </p>
          </Card>
        </Grid>
        <KeyTakeaway>
          Cowork = Claude Code לאנשים לא-טכניים. אם המילה "טרמינל" מלחיצה אותך —
          Cowork הוא הבית שלך. אותה עוצמה, אפס שורות פקודה.
        </KeyTakeaway>
      </Section>

      <Section id="start" eyebrow="צעדים ראשונים" title="הפעלה ראשונה — והרשאות קבצים">
        <Steps>
          <Step n={1} title="פתח את Cowork">
            באפליקציית הדסקטופ, חפש את כניסת <strong>Cowork</strong> (לרוב בסרגל
            הצד או בתפריט העליון). פתח חלל עבודה (workspace) חדש.
          </Step>
          <Step n={2} title="הצבע על תיקייה">
            תן ל-Cowork גישה לתיקייה ספציפית שתעבוד בה — למשל
            <code>Documents/לקוח-כהן</code>. <strong>אל תיתן גישה לכל המחשב.</strong>{" "}
            תיקייה ממוקדת = בטוח יותר ומדויק יותר.
          </Step>
          <Step n={3} title="אשר הרשאות">
            Cowork יבקש רשות לקרוא/לערוך/ליצור קבצים בתיקייה. זה התכל'ס שלו —
            בלי זה הוא רק יכול לדבר. אשר רק את מה שאתה מבין.
          </Step>
          <Step n={4} title="תן את המטרה הראשונה" last>
            כתוב מה אתה רוצה להשיג (ראה הסעיף הבא — זו המיומנות החשובה ביותר כאן).
          </Step>
        </Steps>
        <Callout variant="warning" title="עיקרון הזהב של הרשאות">
          תן לסוכן את <strong>המינימום</strong> שהוא צריך. תיקייה אחת לפרויקט אחד.
          ככה גם אם הוא טועה — הנזק תחום. אפשר תמיד להרחיב הרשאות בהמשך.
        </Callout>
      </Section>

      <Section id="goal" eyebrow="המיומנות מספר 1" title="איך לנסח מטרה שהסוכן באמת יבצע נכון">
        <Lead>
          ההבדל בין סוכן שמבזבז לך זמן לבין כזה שחוסך לך שעות — הוא{" "}
          <strong>איך ניסחת את המטרה</strong>. סוכן טוב צריך לדעת: מה התוצאה, מאיפה
          החומר, ואיך נראית "הצלחה".
        </Lead>
        <SubHeading>האנטומיה של מטרה טובה</SubHeading>
        <Grid cols={2}>
          <Card icon={Target} title="התוצאה (Outcome)">
            לא "תעזור לי עם הדוח" אלא "צור דוח Word עם סיכום מנהלים + 3 גרפים".
          </Card>
          <Card icon={FolderOpen} title="המקורות (Inputs)">
            "השתמש בקבצי ה-Excel בתיקייה הזו" — תגיד לו בדיוק מאיפה לקחת.
          </Card>
          <Card icon={RefreshCw} title="הגדרת הצלחה">
            "הצלחה = קובץ אחד מסודר, בעברית, מוכן לשליחה למנהל".
          </Card>
          <Card icon={ShieldAlert} title="גבולות">
            "אל תמחק קבצים מקוריים", "אל תשנה את שמות הקבצים הקיימים".
          </Card>
        </Grid>
        <PromptCard
          title="תבנית מטרה ל-Cowork"
          prompt={`המטרה: [התוצר המוגמר שאני רוצה לקבל]
המקורות: [אילו קבצים/תיקיות להשתמש בהם]
איך נראית הצלחה: [מה הופך את זה ל"מוכן"]
מגבלות: [מה אסור — מחיקות, שינוי מקור, וכו']
לפני שתתחיל: אם משהו לא ברור, תשאל אותי. אל תנחש.`}
          note="ה'תשאל אותי' בסוף הוא קריטי — הוא מונע מהסוכן לרוץ בכיוון הלא נכון."
        />
        <Callout variant="tip" title="תן לו לתכנן קודם">
          בקש: "תציג לי תוכנית פעולה לפני שתבצע". Cowork יראה לך את הצעדים
          המתוכננים, ואתה מאשר/מתקן <em>לפני</em> שהוא נוגע בקבצים. שקיפות מלאה.
        </Callout>
      </Section>

      <Section id="mcp" eyebrow="המושג שחייבים להבין" title="מה זה MCP — בשפה של בן אדם">
        <TermCard term="MCP" en="Model Context Protocol">
          תקן פתוח שמאפשר ל-Claude להתחבר לכלים, אפליקציות ומקורות מידע חיצוניים
          בצורה אחידה. במקום שכל אפליקציה תדבר "שפה" אחרת — כולן מדברות MCP.
        </TermCard>
        <Prose>
          <p>
            <strong>אנלוגיה:</strong> תחשוב על MCP כמו שקע חשמל סטנדרטי. פעם לכל
            מכשיר היה תקע אחר. היום? כולם מתאימים לאותו שקע. MCP הוא ה"שקע" שמאפשר
            ל-Claude להתחבר ל-Google Drive, Gmail, Notion, מסד נתונים, או כל כלי
            אחר — בלי שתצטרך להעתיק-להדביק מידע ביניהם.
          </p>
          <p>
            <strong>למה אכפת לך?</strong> כי זה מה שהופך את Claude מ"עוזר שמדבר"
            ל"עוזר שמחובר". כשהוא מחובר ל-Drive שלך, אתה אומר "סכם לי את המסמך
            האחרון שערכתי" — והוא פשוט ניגש וקורא אותו.
          </p>
        </Prose>
        <Grid cols={2}>
          <Card title="Connector = MCP מוכן לשימוש">
            "Connector" הוא פשוט שרת MCP ארוז יפה, מוכן בלחיצה. רוב המשתמשים
            יצטרכו רק את אלה.
          </Card>
          <Card title="MCP Server = המנוע מאחורי הקלעים">
            התוכנה שמספקת את החיבור. יש מוכנים (Google, Slack...) ואפשר גם להריץ
            מקומיים. בפרק Code נתקין כאלה ידנית.
          </Card>
        </Grid>
      </Section>

      <Section id="connect" eyebrow="חיבור בפועל" title="לחבר כלי חיצוני (Connector)">
        <Prose>
          <p>בדסקטופ יש שתי דרכים, ושתיהן פשוטות:</p>
        </Prose>
        <SubHeading>דרך 1: Extensions (הכי קל — בלחיצה)</SubHeading>
        <Steps>
          <Step n={1} title="פתח הגדרות">
            <strong>Settings → Extensions</strong> באפליקציית הדסקטופ.
          </Step>
          <Step n={2} title="עיין בספרייה">
            לחץ <strong>Browse extensions</strong>. תראה כלים שעברו בדיקה של
            Anthropic.
          </Step>
          <Step n={3} title="התקן והגדר" last>
            בחר כלי → <strong>Install</strong>. אם צריך מפתח API או התחברות —
            הממשק ידריך אותך. זהו, הכלי זמין בשיחות.
          </Step>
        </Steps>
        <SubHeading>דרך 2: Connector מרחוק (Remote MCP)</SubHeading>
        <Prose>
          <p>
            לחיבור לשירות שיש לו כתובת MCP מרוחקת: בתיבת הכתיבה לחץ{" "}
            <strong>+</strong> → <strong>Connectors</strong> → הוסף connector
            מותאם והדבק את הכתובת. כך מתחברים גם לכלים שלא נמצאים בספרייה הרשמית.
          </p>
        </Prose>
        <Callout variant="note" title="כמה אפשר?">
          משתמשי חינם מוגבלים ל-connector מותאם אחד. תוכניות בתשלום
          (Pro/Max/Team/Enterprise) — ללא הגבלה מעשית. כדי לבדוק מה מחובר: כפתור
          <strong> + </strong> → <strong>Connectors</strong>.
        </Callout>
      </Section>

      <Section id="skills-plugins" eyebrow="להעצים את הסוכן" title="Skills ו-Plugins — מה ההבדל">
        <Lead>
          ברירת המחדל של Cowork כבר חזקה. אבל אפשר להוסיף לו{" "}
          <strong>מומחיות ספציפית</strong> דרך Skills, ולארוז חבילות יכולת דרך
          Plugins.
        </Lead>
        <Grid cols={2}>
          <Card icon={Puzzle} title="Skill (מיומנות)">
            הוראות + ידע + כלים לתחום מסוים. למשל מיומנות "ניתוח פיננסי" או "יצירת
            מצגות". כשהמשימה מתאימה — Claude מפעיל את המיומנות אוטומטית.
          </Card>
          <Card icon={Plug} title="Plugin (תוסף)">
            <strong>חבילה</strong> שאורזת מיומנות אחת או יותר, ולפעמים גם hooks
            וחיבורי MCP. מתקינים plugin — ומקבלים את כל מה שבתוכו בבת אחת.
          </Card>
        </Grid>
        <KeyTakeaway>
          הקשר פשוט: <strong>Plugins הם אריזת ההפצה, Skills הם התוכן.</strong> אתה
          מתקין plugins — ומשתמש ב-skills שבתוכם.
        </KeyTakeaway>
        <Prose>
          <p>
            Cowork מגיע עם plugins מובנים לתחומים כמו ניתוח פיננסי, הנדסה ומשאבי
            אנוש. ההתקנה והניהול המעמיקים של skills ו-plugins — בפרק{" "}
            <strong>Claude Code</strong> (03), שם זה הכי גמיש. ובדף הבונוס תמצא את
            רשימת המיומנויות שכבר יש לך בחשבון.
          </p>
        </Prose>
      </Section>

      <Section id="loop" eyebrow="ככה עובדים נכון" title="לולאת העבודה: מטרה → ביצוע → חידוד">
        <Steps>
          <Step n={1} title="נסח מטרה ברורה">
            לפי התבנית למעלה. ככל שתהיה ספציפי יותר — תקבל תוצאה טובה יותר.
          </Step>
          <Step n={2} title="אשר את התוכנית">
            בקש לראות תוכנית, ואשר אותה. זו ההזדמנות לתפוס אי-הבנות מוקדם.
          </Step>
          <Step n={3} title="תן לו לעבוד — ועקוב">
            Cowork ירוץ צעד-צעד ויראה לך מה הוא עושה. אתה לא צריך לשבת מעליו, אבל
            כדאי לזרוק מבט.
          </Step>
          <Step n={4} title="בדוק את התוצר">
            פתח את הקבצים שנוצרו. זה הצעד שאסור לדלג עליו — הסוכן מהיר, אבל האחריות
            עליך.
          </Step>
          <Step n={5} title="חדד בלשון טבעית" last>
            "הסיכום ארוך מדי, קצר לחצי", "תוסיף עמודת תאריכים". הוא מעדכן ולא מתחיל
            מאפס.
          </Step>
        </Steps>
      </Section>

      <Section id="examples" eyebrow="מהחיים" title="שלוש דוגמאות אמיתיות">
        <div className="space-y-4">
          <Card title="בעל עסק: סדר בקבלות">
            <p>
              "בתיקייה <code>קבלות-2026</code> יש 80 קבצי PDF. חלץ מכל אחד את
              התאריך, הספק והסכום, ובנה קובץ Excel מסכם ממוין לפי חודש. אל תמחק
              שום קובץ מקורי."
            </p>
          </Card>
          <Card title="עורך תוכן: טיוטה ממקורות">
            <p>
              "קרא את שלושת קבצי ה-Word בתיקייה, מצא את הרעיונות המשותפים, וכתוב
              טיוטת מאמר אחת בעברית, 800 מילים, טון מקצועי-נגיש. שמור כקובץ חדש."
            </p>
          </Card>
          <Card title="עצמאי: הכנה לפגישה">
            <p>
              "סכם לי את המייל האחרון מהלקוח (דרך ה-Gmail connector), הצלב מול
              ההצעה ב-<code>הצעות/לקוח-לוי.pdf</code>, ותכין לי דף נקודות לפגישה
              של מחר."
            </p>
          </Card>
        </div>
        <Callout variant="tip" title="שים לב לדפוס">
          בכל דוגמה: <strong>תוצר ברור + מקור מוגדר + מגבלה</strong>. זו הנוסחה.
          העתק אותה למשימות שלך.
        </Callout>
      </Section>

      <Section id="safety" eyebrow="לעבוד בראש שקט" title="בטיחות ופיקוח אנושי">
        <Prose>
          <ul>
            <li><strong>גבה לפני משימות גדולות:</strong> אם הסוכן הולך לשנות הרבה קבצים, העתק את התיקייה קודם. ביטחון זול.</li>
            <li><strong>קרא את התוכנית:</strong> אל תאשר ביצוע על עיוור. שתי דקות קריאה חוסכות שעה תיקונים.</li>
            <li><strong>תחם הרשאות:</strong> תיקייה ממוקדת, לא כל הדיסק. כלים חיצוניים — רק כאלה שאתה מכיר.</li>
            <li><strong>אל תיתן סודות:</strong> סיסמאות ומפתחות רגישים — לא בתוך קבצים שהסוכן ניגש אליהם, אלא דרך מנגנון מאובטח.</li>
            <li><strong>בדוק לפני שליחה:</strong> תוצר שהולך החוצה (ללקוח, למנהל) — תמיד עובר עליך עין אנושית.</li>
          </ul>
        </Prose>
        <Callout variant="important" title="העיקרון">
          Cowork תוכנן עם פיקוח אנושי בלב. הוא מהיר ועצמאי — אבל ההחלטות
          והאחריות נשארות שלך. תתייחס אליו כמו עובד מצוין שצריך אישור על דברים
          חשובים.
        </Callout>
      </Section>

      <Section id="checklist" eyebrow="סיכום" title="צ'קליסט: שולט ב-Cowork">
        <Checklist
          id="cowork"
          items={[
            "פתחתי workspace ונתתי גישה לתיקייה ממוקדת אחת",
            "הבנתי את ההבדל בין Chat, Cowork ו-Code",
            "ניסחתי מטרה עם תוצר + מקורות + הגדרת הצלחה + מגבלות",
            "ביקשתי לראות תוכנית לפני ביצוע",
            "אני יודע להסביר מה זה MCP במשפט",
            "חיברתי (או יודע לחבר) Connector דרך Extensions",
            "אני יודע את ההבדל בין Skill ל-Plugin",
            "בדקתי תוצר וחידדתי אותו בלשון טבעית",
            "אני מגבה לפני משימות גדולות ובודק לפני שליחה",
          ]}
        />
      </Section>

      <PageNav
        prev={{ href: "/chat", label: "Claude Chat" }}
        next={{ href: "/code", label: "Claude Code" }}
      />
    </PageShell>
  );
}
