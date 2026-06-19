export function travelModeCopy(mode = "driving") {
  return ({ driving: "Driving", walking: "Walking", transit: "Transit" })[mode] || "Navigation";
}
