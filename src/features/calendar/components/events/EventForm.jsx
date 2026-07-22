import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useOpportunities } from "@/context/OpportunityContext";

function EventForm({ onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    category: "Reminder",
    priority: "Medium",
    description: "",
    opportunityId: "",
  });
  const { opportunities } = useOpportunities();

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
  e.preventDefault();

  console.log("Submit clicked");
  console.log(form);

  if (!form.title || !form.date) return;

  onSubmit(form);

  setForm({
    title: "",
    date: "",
    time: "",
    category: "Reminder",
    priority: "Medium",
    description: "",
    opportunityId: "",
  });
}

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        name="title"
        placeholder="Event title"
        value={form.title}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white"
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white"
      />

      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white"
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white"
      >
        <option>Registration</option>
        <option>Submission</option>
        <option>Meeting</option>
        <option>Reminder</option>
        <option>Interview</option>
        <option>Result</option>
        <option>Custom</option>
      </select>

      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
<select
  name="opportunityId"
  value={form.opportunityId}
  onChange={handleChange}
  className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white"
>
  <option value="">
    Standalone Event
  </option>

  {opportunities.map((opp) => (
    <option
      key={opp.id}
      value={opp.id}
    >
      {opp.title}
    </option>
  ))}
</select>
      <textarea
        name="description"
        placeholder="Description..."
        value={form.description}
        onChange={handleChange}
        rows={4}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white"
      />

      <Button
  type="submit"
  className="w-full"
>
  Save Event
</Button>
    </form>
  );
}

export default EventForm;