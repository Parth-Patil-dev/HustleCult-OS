import { useState } from "react";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MessageSquare } from "lucide-react";
import { useOpportunities } from "@/context/OpportunityContext";

function CommentsCard({ opportunity }) {
  const [comment, setComment] = useState("");

  const { addComment } = useOpportunities();

  function handleSend() {
    if (!comment.trim()) return;

    addComment(opportunity.id, {
      author: "Parth",
      text: comment,
    });

    setComment("");
  }

  return (
    <Card>
      <div className="mb-5 flex items-center gap-2">
        <MessageSquare
          size={20}
          className="text-blue-400"
        />

        <h2 className="text-lg font-semibold text-white">
          Discussion
        </h2>
      </div>

      <div className="space-y-4">
        {(opportunity.comments || [])
  .slice()
  .reverse()
  .map((comment) => (
          <div
            key={comment.id}
            className="rounded-lg bg-slate-800 p-4"
          >
            <div className="flex items-center justify-between">

  <div className="flex items-center gap-3">

  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
      {comment.author.charAt(0)}
    </div>

  <h4 className="font-semibold text-white">
      {comment.author}
    </h4>

 </div>

  <span className="text-xs text-slate-400">
    {new Date(comment.time).toLocaleDateString([], {
  day: "numeric",
  month: "short",
})}
{" • "}
{new Date(comment.time).toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
})}
  </span>

</div>

            <p className="mt-2 whitespace-pre-wrap text-slate-300">
              {comment.text}
            </p>
          </div>
        ))}

        {(opportunity.comments || []).length === 0 && (
  <div className="rounded-lg border border-dashed border-slate-700 py-8 text-center">

    <MessageSquare
      size={34}
      className="mx-auto mb-3 text-slate-600"
    />

    <p className="text-slate-400">
      No discussion yet
    </p>

    <p className="mt-1 text-sm text-slate-500">
      Start the conversation about this opportunity.
    </p>

  </div>
)}
      </div>

      <div className="mt-5 flex gap-3">
        <textarea
  value={comment}
  onChange={(e) => setComment(e.target.value)}
  onKeyDown={(e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      handleSend();
    }
  }}
  placeholder="Write a comment..."
  rows={3}
  className="flex-1 resize-none rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none focus:border-blue-500"
/><textarea
  value={comment}
  onChange={(e) => setComment(e.target.value)}
  onKeyDown={(e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      handleSend();
    }
  }}
  placeholder="Write a comment..."
  rows={3}
  className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none focus:border-blue-500 resize-none"
/>

        <Button
  onClick={handleSend}
  disabled={!comment.trim()}
>
          Send
        </Button>
      </div>
    </Card>
  );
}

export default CommentsCard;