export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  if (
    typeof dateToFormatTimeMillis !== "number" ||
    typeof systemDateTimeMillis !== "number"
  ) {
    return "Error: arguments must be numbers";
  }

  let dateToFormat = new Date(dateToFormatTimeMillis);
  let formattedDate =
    dateToFormat.getDate() +
    "/" +
    (dateToFormat.getMonth() + 1) +
    "/" +
    dateToFormat.getFullYear();

  let systemDateToFormat = new Date(systemDateTimeMillis);
  let formattedSystemDate =
    systemDateToFormat.getDate() +
    "/" +
    (systemDateToFormat.getMonth() + 1) +
    "/" +
    systemDateToFormat.getFullYear();

  return formattedDate === formattedSystemDate ? "TODAY" : formattedDate;
};
