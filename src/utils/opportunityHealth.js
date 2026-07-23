export function calculateOpportunityHealth(opportunity) {
  let score = 0;

  // Tasks
  const tasks = opportunity.tasks || [];

  if (tasks.length > 0) {
    const completed = tasks.filter(
      (t) => t.completed
    ).length;

    score += (completed / tasks.length) * 40;
  }

  // Notes
  score += Math.min(
    (opportunity.notes?.length || 0) * 5,
    15
  );

  // Attachments
  score += Math.min(
    (opportunity.attachments?.length || 0) * 5,
    15
  );

  // Comments
  score += Math.min(
    (opportunity.comments?.length || 0) * 5,
    15
  );

  // Deadline
  if (opportunity.deadline) {
    const days =
      (new Date(opportunity.deadline) - new Date()) /
      (1000 * 60 * 60 * 24);

    if (days > 14) score += 15;
    else if (days > 7) score += 10;
    else if (days > 3) score += 5;
  }

  return Math.min(Math.round(score), 100);
}