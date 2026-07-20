import {
  CheckCircle2,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

import Card from "@/components/ui/Card";

const extractedFields = [
  {
    label: "Title",
    value: "Google Solution Challenge",
    valid: true,
  },
  {
    label: "Organizer",
    value: "Google",
    valid: true,
  },
  {
    label: "Registration Deadline",
    value: "15 Aug 2026",
    valid: true,
  },
  {
    label: "Submission Deadline",
    value: "30 Sept 2026",
    valid: true,
  },
  {
    label: "Prize",
    value: "$10,000",
    valid: true,
  },
  {
    label: "Team Size",
    value: "Not Detected",
    valid: false,
  },
  {
    label: "Eligibility",
    value: "Missing",
    valid: false,
  },
];

function OpportunityReview() {
  return (
    <div className="space-y-6">

      <Card className="border-blue-500/30 bg-blue-500/10">

        <div className="flex items-center gap-3">

          <Sparkles className="text-blue-400" />

          <div>
            <h2 className="font-semibold text-white">
              AI Extraction Complete
            </h2>

            <p className="text-sm text-slate-400">
              Confidence Score: 94%
            </p>
          </div>

        </div>

      </Card>

      {extractedFields.map((field) => (
        <Card
          key={field.label}
          className="flex items-center justify-between"
        >
          <div>
            <p className="text-sm text-slate-400">
              {field.label}
            </p>

            <h3 className="mt-1 text-white font-medium">
              {field.value}
            </h3>
          </div>

          {field.valid ? (
            <CheckCircle2
              className="text-emerald-400"
              size={22}
            />
          ) : (
            <AlertTriangle
              className="text-amber-400"
              size={22}
            />
          )}
        </Card>
      ))}
    </div>
  );
}

export default OpportunityReview;