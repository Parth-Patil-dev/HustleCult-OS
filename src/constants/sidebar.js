import {
  Home,
  Briefcase,
  CalendarDays,
  Inbox,
  FolderKanban,
  BookOpen,
  Settings,
  Lightbulb,
} from "lucide-react";

import { ROUTES } from "./routes";

export const sidebarItems = [
  {
    title: "Home",
    path: ROUTES.HOME,
    icon: Home,
  },
  {
  title: "Inbox",
  path: ROUTES.INBOX,
  icon: Inbox,
},
  {
    title: "Workspaces",
    path: ROUTES.WORKSPACES,
    icon: FolderKanban,
  },
  {
    title: "Opportunities",
    path: ROUTES.OPPORTUNITIES,
    icon: Briefcase,
  },
  {
  title: "Calendar",
  path: "/calendar",
  icon: CalendarDays,
},
  {
    title: "Ideas",
    path: ROUTES.IDEA_VAULT,
    icon: Lightbulb,
  },
  {
    title: "Knowledge Base",
    path: ROUTES.KNOWLEDGE_BASE,
    icon: BookOpen,
  },
  {
    title: "Settings",
    path: ROUTES.SETTINGS,
    icon: Settings,
  },
];