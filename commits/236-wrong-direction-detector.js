import { headingDifference } from './235-heading-difference.js';

export function isMovingAwayFromDestination(currentHeading, headingToDestination, thresholdDegrees = 100) {
  return headingDifference(currentHeading, headingToDestination) > thresholdDegrees;
}
