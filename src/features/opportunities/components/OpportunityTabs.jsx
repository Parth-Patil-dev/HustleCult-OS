import { useState } from "react";

import OverviewTab from "./OverviewTab";
import TasksTab from "./TasksTab";
import NotesTab from "./NotesTab";
import AttachmentsTab from "./AttachmentsTab";
import DiscussionTab from "./DiscussionTab";
import TimelineTab from "./TimelineTab";
import {
  LayoutDashboard,
  CheckSquare,
  FileText,
  Paperclip,
  MessageSquare,
  Clock3,
} from "lucide-react";
const tabs = [
  {
    label: "Overview",
    icon: LayoutDashboard,
  },
  {
    label: "Tasks",
    icon: CheckSquare,
  },
  {
    label: "Notes",
    icon: FileText,
  },
  {
    label: "Attachments",
    icon: Paperclip,
  },
  {
    label: "Discussion",
    icon: MessageSquare,
  },
  {
    label: "Timeline",
    icon: Clock3,
  },
];

function OpportunityTabs({ opportunity }) {
  const [activeTab, setActiveTab] =
    useState("Overview");

  return (
    <>
      <div className="mb-8 flex gap-3 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 p-2">

  {tabs.map(({ label, icon: Icon }) => (

    <button
      key={label}
      onClick={() => setActiveTab(label)}
      className={`flex items-center gap-2 rounded-xl px-4 py-3 transition-all duration-200 ${
        activeTab === label
          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
          : "text-slate-400 hover:bg-slate-800 hover:text-white"
      }`}
    >
      <Icon size={18} />

      <span>{label}</span>

    </button>

  ))}

</div>

      {activeTab === "Overview" && (
        <OverviewTab opportunity={opportunity} />
      )}

      {activeTab === "Tasks" && (
        <TasksTab opportunity={opportunity} />
      )}

      {activeTab === "Notes" && (
        <NotesTab opportunity={opportunity} />
      )}

      {activeTab === "Attachments" && (
        <AttachmentsTab opportunity={opportunity} />
      )}

      {activeTab === "Discussion" && (
        <DiscussionTab opportunity={opportunity} />
      )}

      {activeTab === "Timeline" && (
        <TimelineTab opportunity={opportunity} />
      )}
    </>
  );
}

export default OpportunityTabs;