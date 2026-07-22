import { ArrowLeft } from "lucide-react";
import { PRIORITIES } from "@/constants/priorities";

function ManualEntryForm({
  formData,
  setFormData,
  onBack,
  onNext,
}) {
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>

      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-sm text-slate-400 hover:text-white"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="space-y-4">

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Opportunity Title"
          className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
        />

        <input
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          placeholder="Organization"
          className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
        >
          <option>Hackathon</option>
          <option>Ideathon</option>
          <option>Competition</option>
          <option>Internship</option>
        </select>

        <select
          name="stage"
          value={formData.stage}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
        >
          <option>Found</option>
          <option>Interested</option>
          <option>Researching</option>
          <option>Active</option>
          <option>Submitted</option>
          <option>Results</option>
        </select>

        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
        />

        <input
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="Website URL"
          className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
        />
        <div className="space-y-2">

  <label className="text-sm text-slate-300">
    Priority
  </label>

  <select
    value={formData.priority || "Medium"}
    onChange={(e) =>
      setFormData({
        ...formData,
        priority: e.target.value,
      })
    }
    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none focus:border-blue-500"
  >

    {PRIORITIES.map((priority) => (
      <option
        key={priority}
        value={priority}
      >
        {priority}
      </option>
    ))}

  </select>

</div>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows={5}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
        />

      </div>

      <div className="mt-8 flex justify-end gap-3">

        <button
          onClick={onBack}
          className="rounded-lg border border-slate-700 px-5 py-2"
        >
          Back
        </button>

        <button
          onClick={onNext}
          className="rounded-lg bg-blue-600 px-5 py-2 font-medium hover:bg-blue-700"
        >
          Continue
        </button>

      </div>

    </div>
  );
}

export default ManualEntryForm;