import Card from "@/components/ui/Card";
import StatPill from "@/components/ui/StatPill";
import {
  CheckSquare,
  FileText,
  Paperclip,
  MessageSquare,
} from "lucide-react";

function QuickStats({ opportunity }) {
  const tasks = opportunity.tasks || [];
  const notes = opportunity.notes || [];
  const attachments = opportunity.attachments || [];
  const comments = opportunity.comments || [];

  return (
    <Card>

      <h2 className="mb-5 text-lg font-semibold text-white">
        Quick Statistics
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <StatPill
  label="Tasks"
  value={tasks.length}
  icon={CheckSquare}
  color="bg-blue-950"
/>

<StatPill
  label="Notes"
  value={notes.length}
  icon={FileText}
  color="bg-emerald-950"
/>

<StatPill
  label="Files"
  value={attachments.length}
  icon={Paperclip}
  color="bg-violet-950"
/>

<StatPill
  label="Comments"
  value={comments.length}
  icon={MessageSquare}
  color="bg-amber-950"
/>

      </div>

    </Card>
  );
}

export default QuickStats;