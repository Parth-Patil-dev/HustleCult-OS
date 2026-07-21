import AppRoutes from "./routes/AppRoutes";
import OpportunityDetails from "./pages/OpportunityDetails";

function App() {
  return <AppRoutes />;
  <Route
  path="/opportunities/:id"
  element={<OpportunityDetails />}
/>
}

export default App;