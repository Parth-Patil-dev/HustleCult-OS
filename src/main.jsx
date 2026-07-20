import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { OpportunityProvider } from "./context/OpportunityContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OpportunityProvider>
      <App />
    </OpportunityProvider>
  </StrictMode>
);