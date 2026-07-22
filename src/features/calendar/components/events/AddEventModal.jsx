import Card from "@/components/ui/Card";
import EventForm from "./EventForm";
import { useEvents } from "@/context/EventContext";

function AddEventModal({
  open,
  onClose,
}) {
  const { addEvent } = useEvents();

  if (!open) return null;

  function handleSubmit(data) {
    addEvent(data);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <Card className="w-full max-w-xl">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            Add Calendar Event
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-slate-400 hover:text-white"
          >
            ×
          </button>

        </div>

        <EventForm
          onSubmit={handleSubmit}
        />

      </Card>
    </div>
  );
}

export default AddEventModal;