import {
  Home,
  MessageSquare,
  Bot,
  Terminal,
  Cloud,
  Brain,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  href: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  step?: string;
};

export const navItems: NavItem[] = [
  {
    href: "/",
    title: "פתיחה",
    subtitle: "מאיפה מתחילים",
    icon: Home,
  },
  {
    href: "/chat",
    title: "Claude Chat",
    subtitle: "אפליקציית הדסקטופ",
    icon: MessageSquare,
    step: "01",
  },
  {
    href: "/cowork",
    title: "Claude Cowork",
    subtitle: "הסוכן שמבצע בשבילך",
    icon: Bot,
    step: "02",
  },
  {
    href: "/code",
    title: "Claude Code",
    subtitle: "הכלי המלא",
    icon: Terminal,
    step: "03",
  },
  {
    href: "/cloud",
    title: "ענן ו-Dispatching",
    subtitle: "להריץ בלי המחשב",
    icon: Cloud,
    step: "04",
  },
  {
    href: "/brain",
    title: "מוח אחד",
    subtitle: "לשלב את שלושתם",
    icon: Brain,
    step: "05",
  },
  {
    href: "/skills",
    title: "בונוס: מיומנויות",
    subtitle: "המיומנויות שבחשבון",
    icon: Sparkles,
  },
];
