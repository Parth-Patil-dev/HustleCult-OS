import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import OpportunityDetails from "../pages/OpportunityDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Workspaces from "../pages/Workspaces";
import WorkspaceDetails from "../pages/WorkspaceDetails";
import Opportunities from "../pages/Opportunities";
import IdeaVault from "../pages/IdeaVault";
import KnowledgeBase from "../pages/KnowledgeBase";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";
import Inbox from "@/pages/Inbox";
import Calendar from "@/pages/Calendar";

import { ROUTES } from "../constants/routes";

function AppRoutes() {
  return (
    
      <Routes>
        {/* Public Routes */}
        <Route path={ROUTES.LOGIN} element={<Login />} />

        {/* Protected Layout */}
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.WORKSPACES} element={<Workspaces />} />
          <Route
            path={ROUTES.WORKSPACE_DETAILS}
            element={<WorkspaceDetails />}
          />
          <Route
            path={ROUTES.OPPORTUNITIES}
            element={<Opportunities />}
          />
          <Route
  path="/calendar"
  element={<Calendar />}
/>
          <Route
  path="/opportunities/:id"
  element={<OpportunityDetails />}
/>
          <Route
            path={ROUTES.IDEA_VAULT}
            element={<IdeaVault />}
          />
          <Route
            path={ROUTES.KNOWLEDGE_BASE}
            element={<KnowledgeBase />}
          />
          <Route path={ROUTES.INBOX} element={<Inbox />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default AppRoutes;