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
  Brain,
  MessageSquare,
  Bot,
  Terminal,
  Cloud,
  ArrowLeftRight,
  Database,
  FolderGit2,
  Workflow,
  Lightbulb,
  Repeat,
} from "lucide-react";

const toc = [
  { id: "idea", label: "הרעיון: מוח אחד, ארבע ידיים" },
  { id: "decide", label: "מתי להשתמש במה" },
  { id: "context", label: "שכבת ההקשר המשותפת" },
  { id: "handoff", label: "להעביר עבודה ביניהם" },
  { id: "workflow", label: "תהליך אמיתי מקצה לקצה" },
  { id: "day", label: "יום עבודה משולב" },
  { id: "mistakes", label: "טעויות נפוצות" },
  { id: "checklist", label: "צ'קליסט" },
];

export default function BrainPage() {
  return (
    <PageShell toc={toc}>
      <PageHeader
        step="05"
        title="מוח אחד — לשלב את שלושתם לזרימת עבודה אחת"
        lead="עכשיו אתה מכיר את Chat, Cowork, Code והענן בנפרד. הקסם האמיתי קורה כשמפסיקים לחשוב עליהם ככלים נפרדים ומתחילים לחשוב עליהם כעל מוח אחד עם כמה זוגות ידיים. כל אחד מצטיין בשלב אחר — וביחד הם מכסים את כל המסלול מרעיון ועד תוצר."
        badges={["שילוב מלא", "המשכיות הקשר", "תהליך מקצה לקצה"]}
      />

      <Section id="idea" eyebrow="התמונה הגדולה" title="מוח אחד, ארבע ידיים">
        <Lead>
          זה אותו Claude מאחורי כל הכלים. ההבדל הוא לא <em>חוכמה</em> — אלא{" "}
          <strong>כמה גישה ועצמאות</strong> נותנים לו. תחשוב על מומחה אחד שלובש
          כובע אחר לכל סוג משימה.
        </Lead>
        <Grid cols={2}>
          <Card icon={MessageSquare} title="Chat — לחשוב יחד">
            <Pill tone="ocean">להבין ולתכנן</Pill>
            <p className="mt-2">
              מברר רעיונות, מנסח, מייעץ, כותב טקסט. כאן מתחילים — לפני שנוגעים
              בכלום.
            </p>
          </Card>
          <Card icon={Bot} title="Cowork — לבצע בלי קוד">
            <Pill tone="clay">לעשות על הקבצים</Pill>
            <p className="mt-2">
              לוקח מטרה ומבצע על הקבצים והאפליקציות שלך. עבודת ידע יומיומית, ללא
              טרמינל.
            </p>
          </Card>
          <Card icon={Terminal} title="Code — כוח מלא">
            <Pill tone="sage">לבנות ולאוטמט</Pill>
            <p className="mt-2">
              שליטה מלאה, תוספים, אוטומציה, פרויקטים שלמים. למשימות הגדולות
              והחוזרות.
            </p>
          </Card>
          <Card icon={Cloud} title="Cloud — לשגר ולשחרר">
            <Pill tone="ocean">להריץ לבד</Pill>
            <p className="mt-2">
              לוקח את Code ומריץ אותו מרחוק, במקביל, בלי שתשב מולו. "שגר ושכח".
            </p>
          </Card>
        </Grid>
        <KeyTakeaway>
          אל תשאל "באיזה כלי להשתמש?" — שאל "<strong>כמה אני רוצה שהוא יעשה
          לבד, וכמה גישה זה דורש?</strong>". התשובה מצביעה על הכלי הנכון.
        </KeyTakeaway>
      </Section>

      <Section id="decide" eyebrow="המצפן" title="מתי להשתמש במה — טבלת ההחלטה">
        <Prose>
          <p>קח את המשימה שלך ועבור על השאלות לפי הסדר:</p>
        </Prose>
        <div className="my-6 space-y-3">
          <Card icon={MessageSquare} title="האם אני עדיין חושב / מתלבט / רוצה עצה?">
            <p>
              → <strong>Chat.</strong> כל עוד אתה מגבש מה אתה רוצה — הישאר בצ'אט.
              זול, מהיר, בלי סיכון לקבצים.
            </p>
          </Card>
          <Card icon={Bot} title="האם זו משימה על הקבצים שלי, ואני לא מתכנת?">
            <p>
              → <strong>Cowork.</strong> מסמכים, טבלאות, מיון קבצים, מחקר. נותן
              מטרה, מקבל תוצר.
            </p>
          </Card>
          <Card icon={Terminal} title="האם זה קוד / אוטומציה / משהו חוזר?">
            <p>
              → <strong>Code.</strong> פרויקטים, סקריפטים, משימות מתוזמנות,
              תוספים. הכוח המלא.
            </p>
          </Card>
          <Card icon={Cloud} title="האם זה ארוך / עצמאי / מקבילי?">
            <p>
              → <strong>Cloud.</strong> שגר את Code לענן, סגור את המחשב, חזור
              לתוצאה.
            </p>
          </Card>
        </div>
        <Callout variant="tip" title="לא חייבים לבחור פעם אחת">
          רוב המשימות האמיתיות <strong>נודדות בין כלים</strong>. מתחילים בצ'אט,
          ממשיכים ב-Cowork, מסיימים ב-Code. זה לא "או-או" — זה רצף.
        </Callout>
      </Section>

      <Section id="context" eyebrow="הדבק שמחבר" title="שכבת ההקשר המשותפת">
        <Lead>
          מה שהופך ארבעה כלים ל"מוח אחד" זה <strong>הקשר משותף</strong> —
          ש-Claude זוכר מי אתה ומה חשוב לך, בלי שתסביר מחדש כל פעם. שלושה מנגנונים
          עושים את זה:
        </Lead>
        <Grid cols={3}>
          <Card icon={Database} title="Memory (זיכרון)">
            ב-Chat: מה שלימדת אותו עליך — תפקיד, העדפות, סגנון. נישא איתך בין
            שיחות. זה ה"מי אתה".
          </Card>
          <Card icon={FolderGit2} title="Projects (פרויקטים)">
            ב-Chat: מרחב עם הקבצים וההנחיות של נושא ספציפי. כל שיחה בפרויקט כבר
            מכירה את הרקע. זה ה"על מה אנחנו עובדים".
          </Card>
          <Card icon={Terminal} title="CLAUDE.md">
            ב-Code: קובץ הנחיות בתוך הפרויקט. הסגנון, הכללים, המבנה. זה ה"איך
            אנחנו עובדים כאן".
          </Card>
        </Grid>
        <Callout variant="important" title="הכלל המאחד">
          תייצר את ההקשר <strong>פעם אחת</strong>, והוא משרת אותך בכל הכלים. מה
          שלימדת את הזיכרון ב-Chat — צובע גם את ההמלצות ב-Cowork. מה שכתבת
          ב-CLAUDE.md — מנחה גם את הריצות בענן. <strong>השקעה בהקשר היא ההשקעה
          הכי משתלמת.</strong>
        </Callout>
      </Section>

      <Section id="handoff" eyebrow="גשר בין הזירות" title="איך מעבירים עבודה מכלי לכלי">
        <Prose>
          <p>
            המעבר בין הכלים הוא לרוב <strong>קובץ או טקסט</strong>. ככה זה נראה
            בפועל:
          </p>
        </Prose>
        <div className="my-6 space-y-3">
          <Card icon={ArrowLeftRight} title="מ-Chat ל-Cowork">
            ניסחת בצ'אט מסמך אפיון או רשימת דרישות? שמור אותו כקובץ בתיקייה, ותן
            ל-Cowork לעבוד ממנו: "בנה לפי האפיון בקובץ הזה".
          </Card>
          <Card icon={ArrowLeftRight} title="מ-Cowork ל-Code">
            Cowork הכין מבנה ראשוני או נתונים? פתח את אותה תיקייה ב-Code כדי
            לבנות מעליה אוטומציה, טסטים, או פרויקט מלא.
          </Card>
          <Card icon={ArrowLeftRight} title="מ-Code לענן">
            הגדרת ב-Code פרויקט עם CLAUDE.md? שגר משימות לענן על אותו מאגר — הן
            יורשות את אותם כללים בדיוק.
          </Card>
          <Card icon={ArrowLeftRight} title="בחזרה ל-Chat">
            התוצר מוכן? הדבק אותו לצ'אט כדי לבקר, לסכם, או לנסח גרסה ללקוח. הסבב
            נסגר.
          </Card>
        </div>
        <PromptCard
          title="פתיחת שיחה שממשיכה עבודה קודמת"
          prompt={`אנחנו ממשיכים פרויקט שכבר התחלנו.
ההקשר: [הדבק כאן את הסיכום / האפיון / מה שכבר הוחלט]
הקובץ הרלוונטי נמצא ב: [נתיב]
המשימה עכשיו: [הצעד הבא]`}
          note="בכל מעבר בין כלים — תן לו את ההקשר בקצרה. שתי שורות רקע חוסכות בלבול ומחזירות אותו בדיוק לאן שהיית."
        />
      </Section>

      <Section id="workflow" eyebrow="הכל ביחד" title="תהליך אמיתי מקצה לקצה">
        <Lead>
          דוגמה מלאה: בעל עסק קטן רוצה להשיק דף נחיתה למוצר חדש. ככה כל ארבעת
          הכלים עובדים יחד:
        </Lead>
        <Steps>
          <Step n={1} title="Chat — לגבש את הרעיון">
            "אני משיק מוצר X. תעזור לי לנסח הצעת ערך, 3 כותרות, ומבנה לדף נחיתה."
            מתלבטים, מחדדים, מקבלים אפיון. שומרים אותו כקובץ.
          </Step>
          <Step n={2} title="Cowork — להכין את התוכן">
            "מהאפיון בקובץ הזה, כתוב את כל הטקסטים לדף בעברית, וצור תיקיית assets
            מסודרת." Cowork מייצר את התוכן המוגמר על הקבצים שלך.
          </Step>
          <Step n={3} title="Code — לבנות את הדף">
            פותחים את התיקייה ב-Code: "בנה דף נחיתה ב-Next.js מהתוכן הזה, פרוס
            ל-Vercel." הכלי בונה, מריץ ומעלה.
          </Step>
          <Step n={4} title="Cloud — לתחזק ולשפר">
            אחרי ההשקה: שגר לענן משימות שיפור עצמאיות — "שפר ביצועים", "הוסף
            גרסה אנגלית" — בזמן שאתה ממשיך הלאה.
          </Step>
          <Step n={5} title="Chat — לסכם ולתקשר" last>
            חוזרים לצ'אט: "כתוב פוסט לרשתות שמכריז על ההשקה, בטון של המותג שלי."
            הסבב נסגר, והמוח אותו מוח לאורך כל הדרך.
          </Step>
        </Steps>
        <Callout variant="note" title="שים לב מה קרה כאן">
          אף שלב לא התחיל מאפס. כל כלי קיבל את הפלט של הקודם, וכולם חלקו את אותו
          הקשר על המוצר. זה <strong>"מוח אחד"</strong> — לא ארבעה עוזרים נפרדים,
          אלא אחד שמלווה אותך מתחילת המסלול עד סופו.
        </Callout>
      </Section>

      <Section id="day" eyebrow="בשטח" title="איך נראה יום עבודה משולב">
        <Grid cols={2}>
          <Card icon={Lightbulb} title="בוקר — חשיבה">
            פותחים את היום ב-<strong>Chat</strong>: מתכננים, מתעדפים, מנסחים.
            בלי לגעת בכלום עדיין.
          </Card>
          <Card icon={Workflow} title="צהריים — ביצוע">
            עוברים ל-<strong>Cowork / Code</strong>: מבצעים את מה שתוכנן, על
            הקבצים והפרויקטים האמיתיים.
          </Card>
          <Card icon={Cloud} title="אחר הצהריים — שיגור">
            משגרים ל-<strong>ענן</strong> את המשימות הארוכות שירוצו לבד בזמן
            שאתה בפגישות.
          </Card>
          <Card icon={Repeat} title="ערב — אוטומציה">
            ב-<strong>Code</strong> מתזמנים משימות חוזרות (דוחות, סיכומים)
            שירוצו לבד מחר בבוקר.
          </Card>
        </Grid>
        <KeyTakeaway>
          המטרה היא שתפסיק "לבחור כלי" ותתחיל לזרום. עם הזמן זה הופך לטבעי כמו
          לדעת מתי לכתוב מייל ומתי להרים טלפון.
        </KeyTakeaway>
      </Section>

      <Section id="mistakes" eyebrow="ללמוד מראש" title="שלוש טעויות נפוצות (ואיך להימנע)">
        <div className="space-y-4">
          <Card title="טעות: לבצע בצ'אט מה שצריך Cowork">
            <p>
              מבקשים מ-Chat "תסדר לי את הקבצים" — אבל לצ'אט אין גישה לקבצים.{" "}
              <strong>תיקון:</strong> משימות על קבצים → Cowork או Code.
            </p>
          </Card>
          <Card title="טעות: לדלג על שלב ההקשר">
            <p>
              מתחילים כל שיחה מאפס ומסבירים הכל שוב. <strong>תיקון:</strong>{" "}
              השקיעו פעם אחת ב-Memory, Projects ו-CLAUDE.md — וחסכו את זה לתמיד.
            </p>
          </Card>
          <Card title="טעות: לשגר לענן בלי לבדוק">
            <p>
              משגרים 10 סוכנים, מאשרים את התוצאות בלי לקרוא. <strong>תיקון:</strong>{" "}
              הענן חוסך זמן המתנה, לא אחריות. כל תוצר עובר עין אנושית.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="checklist" eyebrow="סיכום" title="צ'קליסט: המוח האחד שלך">
        <Checklist
          id="brain"
          items={[
            "אני יודע להחליט בין Chat / Cowork / Code / Cloud לפי המשימה",
            "הגדרתי Memory ב-Chat שמתאר מי אני ומה אני מעדיף",
            "יצרתי לפחות Project אחד עם הקבצים וההנחיות שלו",
            "יש לי CLAUDE.md בפרויקט קוד אחד לפחות",
            "העברתי עבודה מכלי אחד לשני דרך קובץ/טקסט",
            "ביצעתי תהליך שלם שעבר בין לפחות שני כלים",
            "אני נותן הקשר קצר בכל מעבר במקום להתחיל מאפס",
            "אני בודק כל תוצר לפני שהוא יוצא החוצה",
          ]}
        />
        <Callout variant="tip" title="הצעד הבא">
          הבנת את המוח האחד? נשאר רק להעצים אותו. בדף הבונוס הבא — רשימת{" "}
          <strong>המיומנויות</strong> שכבר יש בחשבון שלך, מה כל אחת עושה, ואיך
          להפעיל אותן.
        </Callout>
      </Section>

      <PageNav
        prev={{ href: "/cloud", label: "ענן ו-Dispatching" }}
        next={{ href: "/skills", label: "בונוס: מיומנויות" }}
      />
    </PageShell>
  );
}
