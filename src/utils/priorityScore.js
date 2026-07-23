export function calculatePriority(opportunity) {
  let score = 0;

  // Deadline (40)

  if (opportunity.deadline) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const deadline = new Date(opportunity.deadline);
    deadline.setHours(0, 0, 0, 0);

    const days = Math.ceil(
      (deadline - today) /
      (1000 * 60 * 60 * 24)
    );

    if (days <= 1) score += 40;
    else if (days <= 3) score += 30;
    else if (days <= 7) score += 20;
    else if (days <= 14) score += 10;
  }

  // Progress (30)

  const tasks = opportunity.tasks || [];

  const completed = tasks.filter(
    (t) => t.completed
  ).length;

  const progress =
    tasks.length === 0
      ? 0
      : (completed / tasks.length) * 100;

  if (progress < 25) score += 30;
  else if (progress < 50) score += 20;
  else if (progress < 75) score += 10;

  // Stage (20)

  switch (opportunity.stage) {
    case "Researching":
      score += 5;
      break;

    case "Active":
      score += 20;
      break;

    case "Submitted":
      score += 8;
      break;

    default:
      break;
  }

  // Team (10)

  const members =
    opportunity.members?.length || 0;

  if (members === 0) score += 10;
  else if (members <= 2) score += 5;

  return Math.min(score, 100);
}