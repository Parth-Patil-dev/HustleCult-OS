import {
  CheckCircle2,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

import Card from "@/components/ui/Card";

function OpportunityReview({
  formData,
  onBack,
  onApprove,
}) {
  const fields = [
    {
      label: "Title",
      value: formData.title || "Not provided",
    },
    {
      label: "Organization",
      value: formData.organization || "Not provided",
    },
    {
      label: "Type",
      value: formData.type,
    },
    {
      label: "Stage",
      value: formData.stage,
    },
    {
      label: "Deadline",
      value: formData.deadline || "Not provided",
    },
    {
      label: "Website",
      value: formData.link || "Not provided",
    },
    {
      label: "Description",
      value: formData.description || "Not provided",
    },
  ];

  return (
    <div className="space-y-6">

      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <Card className="border-blue-500/30 bg-blue-500/10">

        <div className="flex items-center gap-3">

          <Sparkles className="text-blue-400" />

          <div>
            <h2 className="font-semibold text-white">
              Review Opportunity
            </h2>

            <p className="text-sm text-slate-400">
              Verify the details before saving.
            </p>
          </div>

        </div>

      </Card>

      {fields.map((field) => (
        <Card
          key={field.label}
          className="flex items-center justify-between"
        >
          <div>

            <p className="text-sm text-slate-400">
              {field.label}
            </p>

            <h3 className="mt-1 font-medium text-white">
              {field.value}
            </h3>

          </div>

          <CheckCircle2
            className="text-emerald-400"
            size={22}
          />

        </Card>
      ))}

      <div className="flex justify-end gap-3">

        <button
          onClick={onBack}
          className="rounded-lg border border-slate-700 px-5 py-2"
        >
          Back
        </button>

        <button
          onClick={onApprove}
          className="rounded-lg bg-emerald-600 px-5 py-2 font-medium hover:bg-emerald-700"
        >
          Approve Opportunity
        </button>

      </div>

    </div>
  );
}

export default OpportunityReview;