module.exports = function convertStringToArray(arrayAsString) {
  return arrayAsString.split(",").map(tech => tech.trim());
};
