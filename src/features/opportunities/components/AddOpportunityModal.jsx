import { useState } from "react";
import {
  Image,
  Link2,
  FileText,
  Keyboard,
  ArrowLeft,
} from "lucide-react";
import OpportunityReview from "./OpportunityReview";
import Card from "@/components/ui/Card";

// Adjust this import if your dialog component lives elsewhere
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const methods = [
  {
    id: "poster",
    title: "Upload Poster",
    description: "Extract information using AI from an event poster.",
    icon: Image,
  },
  {
    id: "website",
    title: "Paste Website",
    description: "Import details from a website URL.",
    icon: Link2,
  },
  {
    id: "pdf",
    title: "Upload PDF",
    description: "Extract information from a brochure or rulebook.",
    icon: FileText,
  },
  {
    id: "manual",
    title: "Manual Entry",
    description: "Create an opportunity from scratch.",
    icon: Keyboard,
  },
];

function AddOpportunityModal({ open, onOpenChange }) {
  const [step, setStep] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState(null);

  function handleMethodClick(method) {
    setSelectedMethod(method);
    setStep(2);
  }

  function closeModal() {
    setStep(1);
    setSelectedMethod(null);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="max-w-3xl bg-slate-950 border-slate-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Add Opportunity
          </DialogTitle>
        </DialogHeader>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <p className="mb-6 text-slate-400">
              Choose how you would like to import an opportunity.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {methods.map((method) => {
                const Icon = method.icon;

                return (
                  <Card
                    key={method.id}
                    onClick={() => handleMethodClick(method)}
                    className="cursor-pointer border-slate-800 bg-slate-900 transition-all hover:border-blue-500 hover:scale-[1.02]"
                  >
                    <Icon
                      size={32}
                      className="mb-4 text-blue-400"
                    />

                    <h3 className="text-lg font-semibold text-white">
                      {method.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {method.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </>
        )}
        {step === 3 && (
    <>
        <button
            onClick={() => setStep(2)}
            className="mb-6 flex items-center gap-2 text-sm text-slate-400 hover:text-white"
        >
            <ArrowLeft size={18} />
            Back
        </button>

        <OpportunityReview />

        <div className="mt-8 flex justify-end gap-3">

            <button
                onClick={() => setStep(2)}
                className="rounded-lg border border-slate-700 px-5 py-2"
            >
                Back
            </button>

            <button
                className="rounded-lg bg-emerald-600 px-5 py-2 font-medium hover:bg-emerald-700"
            >
                Approve Opportunity
            </button>

        </div>
    </>
)}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <button
              onClick={() => setStep(1)}
              className="mb-6 flex items-center gap-2 text-sm text-slate-400 hover:text-white"
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <h2 className="mb-2 text-xl font-semibold">
              {selectedMethod.title}
            </h2>

            <p className="mb-8 text-slate-400">
              {selectedMethod.description}
            </p>

            {/* POSTER */}
            {selectedMethod.id === "poster" && (
              <div className="rounded-xl border-2 border-dashed border-slate-700 p-10 text-center">
                <Image
                  size={40}
                  className="mx-auto mb-4 text-blue-400"
                />

                <p className="text-lg font-medium">
                  Drag & Drop Poster Here
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  or click to browse your files
                </p>
              </div>
            )}

            {/* WEBSITE */}
            {selectedMethod.id === "website" && (
              <div>
                <input
                  type="text"
                  placeholder="https://example.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 outline-none focus:border-blue-500"
                />
              </div>
            )}

            {/* PDF */}
            {selectedMethod.id === "pdf" && (
              <div className="rounded-xl border-2 border-dashed border-slate-700 p-10 text-center">
                <FileText
                  size={40}
                  className="mx-auto mb-4 text-blue-400"
                />

                <p className="text-lg font-medium">
                  Upload Rulebook PDF
                </p>
              </div>
            )}

            {/* MANUAL */}
            {selectedMethod.id === "manual" && (
              <div className="space-y-4">
                <input
                  placeholder="Opportunity Title"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
                />

                <input
                  placeholder="Organizer"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
                />

                <input
                  placeholder="Registration Deadline"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
                />
              </div>
            )}

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={() => setStep(1)}
                className="rounded-lg border border-slate-700 px-5 py-2"
              >
                Back
              </button>

              <button
    onClick={() => setStep(3)}
    className="rounded-lg bg-blue-600 px-5 py-2 font-medium"
>
    Continue
</button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default AddOpportunityModal;