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
  Cloud,
  Laptop,
  Users,
  Eye,
  Gauge,
  Split,
  Clock,
  GitBranch,
  Send,
  Layers,
} from "lucide-react";

const toc = [
  { id: "what", label: "מה זה ענן ו-Dispatching" },
  { id: "local-vs-cloud", label: "מקומי מול ענן" },
  { id: "dispatch", label: "איך שולחים משימה לענן" },
  { id: "parallel", label: "כמה סוכנים במקביל" },
  { id: "view", label: "תצוגת הסוכנים" },
  { id: "cost", label: "עלות ומכסות" },
  { id: "when", label: "מתי כדאי ומתי לא" },
  { id: "checklist", label: "צ'קליסט" },
];

export default function CloudPage() {
  return (
    <PageShell toc={toc}>
      <PageHeader
        step="04"
        title="ענן ו-Dispatching — לשלוח עבודה ולהמשיך בחיים שלך"
        lead="עד עכשיו Claude עבד על המחשב שלך, ואתה חיכית מולו. ב-Cloud אתה שולח משימה לרוץ בשרתים של Anthropic — סוגר את המחשב, הולך לישון, וחוזר לתוצאה מוכנה. ואפשר לשלוח כמה משימות בו-זמנית."
        badges={["רץ בלי המחשב שלך", "סוכנים במקביל", "מבוסס Claude Code"]}
      />

      <Section id="what" eyebrow="הרעיון הגדול" title="מה זה בכלל לשלוח לענן">
        <Lead>
          <strong>Dispatching</strong> זה פשוט "לשגר משימה". במקום ש-Claude ירוץ
          על המחשב שלך ואתה תשב מולו — אתה מתאר את המשימה, לוחץ "שלח", והיא רצה
          על השרתים של Anthropic. המחשב שלך חופשי. אתה חופשי.
        </Lead>
        <Prose>
          <p>
            תחשוב על זה כמו ההבדל בין לבשל בעצמך לבין להזמין שליח. במקום לעמוד מול
            הסיר (המחשב), אתה נותן הזמנה ומקבל התראה כשמוכן. וכמו שאפשר להזמין
            מכמה מסעדות בבת אחת — אפשר לשגר <strong>כמה משימות במקביל</strong>,
            וכל אחת רצה אצלה בנפרד.
          </p>
        </Prose>
        <TermCard term="Cloud / ענן" en="Claude Code on the web">
          סביבת הרצה מרוחקת לסוכני Claude. אותו מוח של Claude Code, אבל רץ בשרת
          מבודד במקום על המחשב שלך — נגיש מהדפדפן ומאפליקציית הדסקטופ.
        </TermCard>
        <Grid cols={3}>
          <Card icon={Send} title="שולח ומשחרר">
            נותן משימה, סוגר את המחשב. המשימה ממשיכה לרוץ בלעדיך.
          </Card>
          <Card icon={Layers} title="כמה במקביל">
            כמה משימות עצמאיות יחד — לא מחכות אחת לשנייה.
          </Card>
          <Card icon={Eye} title="עוקב מכל מקום">
            רואה את ההתקדמות מהטלפון או מהדפדפן, חוזר כשמוכן.
          </Card>
        </Grid>
      </Section>

      <Section id="local-vs-cloud" eyebrow="שתי דרכים להריץ" title="מקומי מול ענן — מה ההבדל">
        <Prose>
          <p>
            אותה משימה יכולה לרוץ בשני מקומות. ההבדל הוא <strong>איפה</strong> היא
            רצה ו<strong>האם אתה צריך להיות שם</strong>:
          </p>
        </Prose>
        <Grid cols={2}>
          <Card icon={Laptop} title="מקומי (Local)">
            <Pill tone="sage">על המחשב שלך</Pill>
            <ul className="mt-3 space-y-1.5">
              <li>רץ על הקבצים והתוכנות שלך ישירות.</li>
              <li>אתה רואה כל צעד בזמן אמת ומגיב מיד.</li>
              <li>צריך שהמחשב יהיה דלוק ופתוח.</li>
              <li>מושלם לעבודה אינטראקטיבית — קוד, דיבוג, חידוד.</li>
            </ul>
          </Card>
          <Card icon={Cloud} title="ענן (Cloud)">
            <Pill tone="ocean">על שרת מרוחק</Pill>
            <ul className="mt-3 space-y-1.5">
              <li>רץ בשרת מבודד של Anthropic.</li>
              <li>המחשב שלך יכול להיות סגור — המשימה ממשיכה.</li>
              <li>אפשר להריץ הרבה משימות במקביל.</li>
              <li>מושלם למשימות ארוכות, עצמאיות, או "שגר ושכח".</li>
            </ul>
          </Card>
        </Grid>
        <KeyTakeaway>
          כלל אצבע: <strong>צריך לשבת ולהגיב תוך כדי? מקומי.</strong>{" "}
          <strong>משימה שתרוץ לבד עד שתסיים? ענן.</strong>
        </KeyTakeaway>
      </Section>

      <Section id="dispatch" eyebrow="בפועל" title="איך שולחים משימה לענן">
        <Prose>
          <p>
            הדרך הנגישה ביותר היא דרך הדפדפן או אפליקציית הדסקטופ — בלי טרמינל
            בכלל:
          </p>
        </Prose>
        <Steps>
          <Step n={1} title="פתח את Claude Code בענן">
            גש ל-<strong>claude.ai/code</strong> בדפדפן (או דרך אפליקציית
            הדסקטופ). תתחבר עם אותו חשבון.
          </Step>
          <Step n={2} title="חבר מקור (אם צריך)">
            למשימות קוד — חבר את מאגר ה-GitHub שלך. למשימות אחרות — תאר את ההקשר
            ישירות. הענן צריך גישה לחומר שעליו הוא עובד.
          </Step>
          <Step n={3} title="כתוב את המשימה">
            נסח מטרה ברורה (בדיוק כמו ב-Cowork): מה התוצר, מאיפה החומר, ואיך
            נראית הצלחה.
          </Step>
          <Step n={4} title="שגר" last>
            לחץ שלח. המשימה עוברת לשרת ומתחילה לרוץ. אתה יכול לסגור את החלון —
            היא לא תיעצר.
          </Step>
        </Steps>
        <PromptCard
          title="משימת ענן לדוגמה (פיתוח)"
          prompt={`במאגר הזה: תוסיף כפתור "ייצוא ל-PDF" בעמוד הדוחות.
- שמור על העיצוב הקיים.
- אל תיגע בלוגיקת ההרשאות.
כשתסיים, פתח Pull Request עם תיאור קצר של מה שינית.`}
          note="בענן נהוג לסיים ב'פתח Pull Request' — כך התוצאה מחכה לך מסודרת לבדיקה, בלי שתצטרך להיות נוכח."
        />
        <Callout variant="note" title="לא רק קוד">
          השם הוא "Claude Code", אבל הענן יודע לעשות הרבה מעבר לתכנות: מחקר ארוך,
          עיבוד הרבה קבצים, משימות שלוקחות זמן. חשוב על זה כ"מקום שבו סוכנים רצים
          לבד", לא רק כעל כלי למתכנתים.
        </Callout>
      </Section>

      <Section id="parallel" eyebrow="הכוח האמיתי" title="להריץ כמה סוכנים במקביל">
        <Lead>
          זה מה שהופך את הענן למשנה-משחק: לא חייבים לחכות שמשימה אחת תסתיים כדי
          להתחיל את הבאה. <strong>שגר חמש משימות עצמאיות — וכולן רצות יחד.</strong>
        </Lead>
        <Grid cols={2}>
          <Card icon={Split} title="משימות עצמאיות">
            "תקן באג A", "כתוב טסטים ל-B", "שדרג תיעוד ל-C" — אין ביניהן תלות,
            אז שגר את שלושתן יחד. פי 3 מהר.
          </Card>
          <Card icon={GitBranch} title="כל סוכן בבועה שלו">
            כל משימה רצה בסביבה מבודדת משלה. הן לא דורכות אחת לשנייה ולא מתבלבלות
            בקבצים.
          </Card>
        </Grid>
        <Callout variant="tip" title="איך לפצל נכון">
          הסוד הוא <strong>אי-תלות</strong>. אם משימה ב' צריכה את התוצאה של משימה
          א' — אל תריץ אותן במקביל, הן יתנגשו. רק משימות שלא תלויות זו בזו שווה
          לשגר ביחד.
        </Callout>
      </Section>

      <Section id="view" eyebrow="לראות הכל" title="תצוגת הסוכנים — לוח הבקרה שלך">
        <Prose>
          <p>
            כששולחים כמה משימות, צריך מקום לראות מה קורה עם כולן. זו{" "}
            <strong>תצוגת הסוכנים</strong> (Agent view) — לוח שמרכז את כל הריצות:
          </p>
        </Prose>
        <Grid cols={3}>
          <Card icon={Eye} title="סטטוס בזמן אמת">
            מי רץ, מי סיים, מי מחכה לאישור שלך. מבט אחד ואתה יודע איפה הכל עומד.
          </Card>
          <Card icon={Clock} title="היסטוריה">
            חוזר למשימות קודמות, רואה מה הסוכן עשה, ולומד מהריצות.
          </Card>
          <Card icon={Send} title="התערבות">
            אפשר לקפוץ פנימה לכל סוכן, לתת הנחיה נוספת, או לעצור משימה שסטתה.
          </Card>
        </Grid>
        <Callout variant="important" title="עדיין צריך עין אנושית">
          ריצה בענן לא פוטרת אותך מבדיקה. סוכן שפתח Pull Request — אתה עדיין קורא
          את השינוי לפני שמאשרים. הענן חוסך לך <em>זמן המתנה</em>, לא{" "}
          <em>אחריות</em>.
        </Callout>
      </Section>

      <Section id="cost" eyebrow="כמה זה עולה ממכסה" title="עלות ומכסות — לדעת לפני שמשגרים">
        <Lead>
          הענן רץ על תשתית אמיתית, אז הוא צורך מהמכסה שלך. הכלל פשוט ו
          <strong>לינארי</strong>: כל סוכן שרץ נחשב בנפרד.
        </Lead>
        <Grid cols={2}>
          <Card icon={Gauge} title="העלות לינארית">
            סוכן אחד = יחידת שימוש אחת. <strong>עשרה סוכנים במקביל = פי עשרה
            מהמכסה</strong> באותו פרק זמן. אין הנחת כמות — מקבילות עולה.
          </Card>
          <Card icon={Layers} title="לשגר בתבונה">
            מקבילות זה כוח, אבל גם הוצאה. שגר במקביל מה שבאמת דחוף או עצמאי —
            לא הכל סתם כי אפשר.
          </Card>
        </Grid>
        <Callout variant="warning" title="לפני שמשגרים 10 סוכנים">
          זכור: ריצות ענן ארוכות וכמה-סוכנים-במקביל "אוכלות" את המכסה היומית
          מהר. אם הגעת לתקרה — תצטרך לחכות לאיפוס או לשדרג תוכנית. תתכנן את
          המקבילות לפי מה שבאמת חשוב.
        </Callout>
        <Prose>
          <p>
            המכסות המדויקות משתנות לפי התוכנית (Pro / Max / Team / Enterprise)
            ומתעדכנות מדי פעם. הכלל שלא משתנה: <strong>יותר סוכנים במקביל =
            צריכה מהירה יותר</strong>. בדוק את המכסה הנוכחית שלך בהגדרות החשבון
            לפני ריצה גדולה.
          </p>
        </Prose>
      </Section>

      <Section id="when" eyebrow="שיקול דעת" title="מתי כדאי ענן — ומתי דווקא לא">
        <Grid cols={2}>
          <Card icon={Cloud} title="כדאי ענן כש...">
            <ul className="space-y-1.5">
              <li>המשימה ארוכה ועצמאית ("עבור על 200 קבצים").</li>
              <li>יש כמה משימות שלא תלויות זו בזו.</li>
              <li>אתה רוצה לסגור את המחשב וללכת.</li>
              <li>זה תהליך חוזר שאפשר לתזמן (ראה פרק Code).</li>
            </ul>
          </Card>
          <Card icon={Laptop} title="עדיף מקומי כש...">
            <ul className="space-y-1.5">
              <li>אתה רוצה לראות ולכוון כל צעד.</li>
              <li>המשימה צריכה קבצים/תוכנות שרק על המחשב שלך.</li>
              <li>זו עבודה קצרה ואינטראקטיבית.</li>
              <li>אתה עדיין מנסח ומגלה מה בדיוק אתה רוצה.</li>
            </ul>
          </Card>
        </Grid>
        <KeyTakeaway>
          הענן הוא לא תחליף למקומי — הוא <strong>שכבה נוספת</strong>. עבודה
          חיה ואינטראקטיבית מקומית, ומשימות "שגר ושכח" לענן. בפרק הבא נחבר את
          שלוש הזירות למוח אחד.
        </KeyTakeaway>
      </Section>

      <Section id="checklist" eyebrow="סיכום" title="צ'קליסט: שולט בענן">
        <Checklist
          id="cloud"
          items={[
            "אני יודע להסביר מה זה לשגר משימה לענן",
            "אני מבין מתי להריץ מקומי ומתי בענן",
            "פתחתי את Claude Code בענן והתחברתי",
            "שיגרתי משימה אחת וסגרתי את החלון בלי שהיא נעצרה",
            "אני יודע לפצל משימות עצמאיות ולהריץ במקביל",
            "אני יודע איפה לראות את תצוגת הסוכנים",
            "אני מבין שהעלות לינארית — עשרה סוכנים = פי עשרה מכסה",
            "אני בודק תוצר (Pull Request וכו') לפני שמאשרים",
          ]}
        />
      </Section>

      <PageNav
        prev={{ href: "/code", label: "Claude Code" }}
        next={{ href: "/brain", label: "מוח אחד" }}
      />
    </PageShell>
  );
}
