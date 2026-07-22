import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Paperclip,
Upload,
Trash2,
} from "lucide-react";

import { useOpportunities } from "@/context/OpportunityContext";
function formatFileSize(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  if (bytes < 1024 * 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}
function getFileIcon(type) {
  if (type.startsWith("image/")) {
    return "🖼️";
  }

  if (type.includes("pdf")) {
    return "📄";
  }

  if (type.includes("presentation")) {
    return "📊";
  }

  if (type.includes("word")) {
    return "📝";
  }

  return "📁";
}
function AttachmentsCard({ opportunity }) {
  const {
  addAttachment,
  deleteAttachment,
} = useOpportunities();

  function handleUpload(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    addAttachment(opportunity.id, file);
    event.target.value = "";
  }

  return (
    <Card>

      <div className="mb-5 flex items-center justify-between">

        <div className="flex items-center gap-2">

          <Paperclip
            size={20}
            className="text-blue-400"
          />

          <h2 className="text-lg font-semibold text-white">
            Attachments
          </h2>

        </div>

        <label className="cursor-pointer">

  <input
  type="file"
  accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg,.zip"
    className="hidden"
    onChange={handleUpload}
  />

  <div className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
    <Upload size={16} />
    Upload
  </div>

</label>

      </div>

      {(opportunity.attachments || []).length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-700 py-8 text-center">

  <Paperclip
    size={34}
    className="mx-auto mb-3 text-slate-600"
  />

  <p className="text-slate-400">
    No attachments yet
  </p>

  <p className="mt-1 text-sm text-slate-500">
    Upload PDFs, PPTs, images and documents.
  </p>

</div>
      ) : (
        <div className="space-y-3">

          {opportunity.attachments.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between rounded-lg bg-slate-800 p-3"
            >

              <div className="flex items-center gap-3">
                <span className="text-2xl">
  {getFileIcon(file.type)}
</span>

                <div>

                  <p className="text-white">
                    {file.name}
                  </p>

                  <p className="text-xs text-slate-400">
                    {formatFileSize(file.size)}
                  </p>

                </div>
                <p className="text-xs text-slate-500">
  {new Date(file.uploadedAt).toLocaleDateString()}
</p>

              </div>
<Button
  variant="ghost"
  size="icon"
  className="text-slate-400 hover:text-red-500"
  onClick={() =>
    deleteAttachment(opportunity.id, file.id)
  }
>
  <Trash2 size={16} />
</Button>
            </div>
          ))}

        </div>
      )}

    </Card>
  );
}

export default AttachmentsCard;