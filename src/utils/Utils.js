export const isNull = (val) => {
  if (
    val === undefined ||
    val === null ||
    val === "undefined" ||
    val === "null" ||
    val === ""
  ) {
    return true;
  }
  return false;
};
