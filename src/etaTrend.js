export function etaTrend(previousEta, currentEta) { if (currentEta < previousEta) return 'approaching'; if (currentEta > previousEta) return 'delayed'; return 'steady'; }
