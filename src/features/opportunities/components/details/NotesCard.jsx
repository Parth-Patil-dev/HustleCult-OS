import { useState } from "react";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StickyNote } from "lucide-react";
import { useOpportunities } from "@/context/OpportunityContext";

function NotesCard({ opportunity }) {
  const [note, setNote] = useState("");

  const { addNote } = useOpportunities();

  function handleAddNote() {
    if (!note.trim()) return;

    addNote(opportunity.id, note);

    setNote("");
  }

  return (
    <Card>

      <div className="mb-5 flex items-center gap-2">
        <StickyNote
          size={20}
          className="text-blue-400"
        />

        <h2 className="text-lg font-semibold text-white">
          Notes
        </h2>
      </div>

      <textarea
  value={note}
  onChange={(e) => setNote(e.target.value)}
  onKeyDown={(e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      handleAddNote();
    }
  }}
  placeholder="Write a note..."
  className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white outline-none focus:border-blue-500"
  rows={4}
/>

      <Button
  onClick={handleAddNote}
  disabled={!note.trim()}
>
        Add Note
      </Button>

      <div className="mt-6 space-y-3">

  {(opportunity.notes || []).length === 0 ? (

    <div className="rounded-lg border border-dashed border-slate-700 py-8 text-center">

      <StickyNote
        size={34}
        className="mx-auto mb-3 text-slate-600"
      />

      <p className="text-slate-400">
        No notes yet
      </p>

      <p className="mt-1 text-sm text-slate-500">
        Save research, ideas and reminders here.
      </p>

    </div>

  ) : (

    (opportunity.notes || [])
      .slice()
      .reverse()
      .map((item) => (
        <Card key={item.id}>
          <p className="whitespace-pre-wrap text-white">
            {item.text}
          </p>

          <p className="mt-2 text-xs text-slate-400">
            {new Date(item.createdAt).toLocaleDateString([], {
  day: "numeric",
  month: "short",
}) +
" • " +
new Date(item.createdAt).toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
})}
          </p>
        </Card>
      ))

  )}

</div>

    </Card>
  );
}

export default NotesCard;