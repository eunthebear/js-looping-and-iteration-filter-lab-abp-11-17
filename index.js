// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(element) {
    return element.toUpperCase() === string.toUpperCase();
  });
}