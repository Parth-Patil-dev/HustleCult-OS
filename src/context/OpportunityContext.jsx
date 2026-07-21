import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const OpportunityContext = createContext();

export function OpportunityProvider({ children }) {

  const [opportunities, setOpportunities] = useState(() => {
    const saved = localStorage.getItem("opportunities");

    return saved ? JSON.parse(saved) : [];
  });
  const [editingOpportunity, setEditingOpportunity] = useState(null);


  useEffect(() => {
    localStorage.setItem(
      "opportunities",
      JSON.stringify(opportunities)
    );
  }, [opportunities]);


  function addOpportunity(opportunity) {
    console.log("addOpportunity called", opportunity);

    const newOpportunity = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      ...opportunity,
    };


    setOpportunities((prev) => [
      ...prev,
      newOpportunity
    ]);


    toast.success("Opportunity added 🚀");
  }



  function editOpportunity(id, updatedData) {

    setOpportunities((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updatedData,
            }
          : item
      )
    );


    toast.success("Opportunity updated");
  }



  function deleteOpportunity(id) {

    setOpportunities((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );


    toast.success("Opportunity removed");
  }



  function updateStage(id, stage) {

    setOpportunities((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              stage,
            }
          : item
      )
    );

  }



  return (
    <OpportunityContext.Provider
      value={{
  opportunities,
  addOpportunity,
  editOpportunity,
  deleteOpportunity,
  updateStage,

  editingOpportunity,
  setEditingOpportunity,
}}
    >
      {children}
    </OpportunityContext.Provider>
  );
}



export function useOpportunities() {

  const context = useContext(
    OpportunityContext
  );


  if (!context) {
    throw new Error(
      "useOpportunities must be used inside OpportunityProvider"
    );
  }


  return context;
}