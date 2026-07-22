import { useState, useEffect } from "react";

import MethodSelection from "./MethodSelection";
import ManualEntryForm from "./ManualEntryForm";
import PosterUpload from "./PosterUpload";
import WebsiteImport from "./WebsiteImport";
import PdfUpload from "./PdfUpload";
import OpportunityReview from "./OpportunityReview";
import { useOpportunities } from "@/context/OpportunityContext";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function AddOpportunityModal({ open, onOpenChange }) {
  const [step, setStep] = useState(1);

const {
  addOpportunity,
  editOpportunity,
  editingOpportunity,
  setEditingOpportunity,
} = useOpportunities();

const [method, setMethod] = useState(null);

  const [formData, setFormData] = useState({
  title: "",
  organization: "",
  type: "Hackathon",
  deadline: "",
  description: "",
  stage: "Found",
  link: "",
  members: [],
  priority: "Medium",
});
  useEffect(() => {
  if (!editingOpportunity) return;

  setFormData({
    title: editingOpportunity.title || "",
    organization: editingOpportunity.organization || "",
    type: editingOpportunity.type || "Hackathon",
    deadline: editingOpportunity.deadline || "",
    description: editingOpportunity.description || "",
    stage: editingOpportunity.stage || "Found",
    link: editingOpportunity.link || "",
    members: editingOpportunity.members || [],
    priority: editingOpportunity.priority || "Medium",
  });

  setMethod("manual");
  setStep(2);
  onOpenChange(true);
}, [editingOpportunity]);

  function handleClose() {
    setStep(1);
    setMethod(null);

    setFormData({
      title: "",
      organization: "",
      type: "Hackathon",
      deadline: "",
      description: "",
      stage: "Found",
      link: "",
      priority: "Medium",
      members: [],
    });
setEditingOpportunity(null);
    onOpenChange(false);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={handleClose}
    >
      <DialogContent className="max-w-4xl bg-slate-950 border-slate-800 text-white">

        <DialogHeader>
          <DialogTitle className="text-2xl">
            Add Opportunity
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <MethodSelection
            onSelect={(selectedMethod) => {
              setMethod(selectedMethod);
              setStep(2);
            }}
          />
        )}

        {step === 2 && method === "manual" && (
          <ManualEntryForm
            formData={formData}
            setFormData={setFormData}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}

        {step === 2 && method === "poster" && (
          <PosterUpload
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}

        {step === 2 && method === "website" && (
          <WebsiteImport
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}

        {step === 2 && method === "pdf" && (
          <PdfUpload
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <OpportunityReview
            formData={formData}
            onBack={() => setStep(2)}
            onApprove={() => {
  if (editingOpportunity) {
    editOpportunity(editingOpportunity.id, formData);
  } else {
    addOpportunity(formData);
  }

  handleClose();
}}
          />
        )}

      </DialogContent>
    </Dialog>
  );
}

export default AddOpportunityModal;