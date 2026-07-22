import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { useNotifications } from "@/context/NotificationContext";

const EventContext = createContext();

export function EventProvider({ children }) {

  const { addNotification } = useNotifications();

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "events",
      JSON.stringify(events)
    );
  }, [events]);

  function addEvent(event) {
    const newEvent = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),

      ...event,
    };

    setEvents((prev) => [
      ...prev,
      newEvent,
    ]);

    toast.success("Event added");
    addNotification({
  title: "New Calendar Event",
  message: `${newEvent.title} was added to your calendar`,
  type: "event",
});
  }

  function editEvent(id, updatedData) {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id
          ? {
              ...event,
              ...updatedData,
            }
          : event
      )
    );

    toast.success("Event updated");
  }

  function deleteEvent(id) {
    setEvents((prev) =>
      prev.filter((event) => event.id !== id)
    );

    toast.success("Event removed");
  }

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
        editEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error(
      "useEvents must be used inside EventProvider"
    );
  }

  return context;
}