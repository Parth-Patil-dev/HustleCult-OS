import { useState } from "react";
import { useOpportunities } from "@/context/OpportunityContext";
import { Button } from "@/components/ui/Button";

function AddOpportunityModal({ open, onOpenChange }) {
  const { addOpportunity } = useOpportunities();

  const [formData, setFormData] = useState({
    title: "",
    type: "Hackathon",
    organization: "",
    deadline: "",
    description: "",
    stage: "Found",
    link: "",
    members: [],
  });


  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }


  function handleSubmit(e) {
    e.preventDefault();

    addOpportunity(formData);


    setFormData({
      title: "",
      type: "Hackathon",
      organization: "",
      deadline: "",
      description: "",
      stage: "Found",
      link: "",
      members: [],
    });


    onOpenChange(false);
  }


  if (!open) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="w-[500px] rounded-xl bg-white p-6 shadow-xl dark:bg-zinc-900">

        <div className="mb-6">

          <h2 className="text-2xl font-semibold">
            Add Opportunity
          </h2>

          <p className="text-sm text-muted-foreground">
            Track a new hackathon, competition, or opportunity.
          </p>

        </div>


        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >


          {/* Title */}

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Opportunity Name"
            className="w-full rounded-lg border p-3 bg-transparent"
            required
          />



          {/* Organization */}

          <input
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Organization"
            className="w-full rounded-lg border p-3 bg-transparent"
          />



          {/* Type */}

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 bg-transparent"
          >

            <option value="Hackathon">
              Hackathon
            </option>

            <option value="Ideathon">
              Ideathon
            </option>

            <option value="Competition">
              Competition
            </option>

            <option value="Internship">
              Internship
            </option>

            <option value="Grant">
              Grant
            </option>

            <option value="Other">
              Other
            </option>

          </select>



          {/* Deadline */}

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 bg-transparent"
          />



          {/* Status */}

          <select
            name="stage"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 bg-transparent"
          >

            <option value="Found">Found</option>
<option value="Interested">Interested</option>
<option value="Researching">Researching</option>
<option value="Active">Active</option>
<option value="Submitted">Submitted</option>
<option value="Results">Results</option>

          </select>



          {/* Website */}

          <input
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Website URL (optional)"
            className="w-full rounded-lg border p-3 bg-transparent"
          />



          {/* Description */}

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows={4}
            className="w-full rounded-lg border p-3 bg-transparent"
          />



          {/* Buttons */}

          <div className="flex justify-end gap-3 pt-4">

            <Button
              type="button"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>


            <Button type="submit">
              Add Opportunity
            </Button>

          </div>


        </form>

      </div>

    </div>
  );
}


export default AddOpportunityModal;