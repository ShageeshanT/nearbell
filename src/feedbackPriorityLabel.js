export function feedbackPriorityLabel(priority = 'normal') {
  const value = String(priority).toLowerCase();
  if (value === 'urgent') return 'Review feedback before next beta build';
  if (value === 'low') return 'Track feedback for later polish';
  return 'Review feedback during beta grooming';
}
