import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NotificationProvider } from "./context/NotificationContext";
import { OpportunityProvider } from "./context/OpportunityContext";
import { EventProvider } from "./context/EventContext";
import ReminderEngine from "./features/reminders/ReminderEngine";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <NotificationProvider>

  <OpportunityProvider>

    <EventProvider>

      <ReminderEngine />

      <BrowserRouter>
  <App />
</BrowserRouter>

      <Toaster />

    </EventProvider>

  </OpportunityProvider>

</NotificationProvider>

  </StrictMode>
);