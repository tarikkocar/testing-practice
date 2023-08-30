function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error("Input must be a string");
  }

  return string ? string[0].toUpperCase() + string.substring(1) : "";
}

module.exports = capitalize;
