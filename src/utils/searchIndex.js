export function buildSearchIndex(opportunities) {
  const items = [];
items.push(
  {
    id: "action-dashboard",
    type: "Action",
    title: "Go to Dashboard",
    subtitle: "Open Home",
    route: "/",
  },
  {
    id: "action-opportunities",
    type: "Action",
    title: "Open Opportunities",
    subtitle: "Kanban Board",
    route: "/opportunities",
  },
  {
    id: "action-calendar",
    type: "Action",
    title: "Open Calendar",
    subtitle: "View Schedule",
    route: "/calendar",
  },
  {
    id: "action-analytics",
    type: "Action",
    title: "Open Analytics",
    subtitle: "Insights & Charts",
    route: "/analytics",
  }
);
  opportunities.forEach((opp) => {
    // Opportunity
    items.push({
      id: `opp-${opp.id}`,
      type: "Opportunity",
      title: opp.title,
      subtitle: opp.organization || "",
      route: `/opportunities/${opp.id}`,
    });

    // Tasks
    (opp.tasks || []).forEach((task) => {
      items.push({
        id: `task-${task.id}`,
        type: "Task",
        title: task.text,
        subtitle: opp.title,
        route: `/opportunities/${opp.id}`,
      });
    });

    // Notes
    (opp.notes || []).forEach((note) => {
      items.push({
        id: `note-${note.id}`,
        type: "Note",
        title: note.text,
        subtitle: opp.title,
        route: `/opportunities/${opp.id}`,
      });
    });
  });

  return items;
}