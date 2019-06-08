export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  if (
    typeof dateToFormatTimeMillis !== "number" ||
    typeof systemDateTimeMillis !== "number"
  ) {
    return "Error: arguments must be numbers";
  }

  const dateToFormat = new Date(dateToFormatTimeMillis);
  const formattedDate = `${dateToFormat.getDate()}/${dateToFormat.getMonth() +
    1}/${dateToFormat.getFullYear()}`;

  const systemDateToFormat = new Date(systemDateTimeMillis);
  const formattedSystemDate = `${systemDateToFormat.getDate()}/${systemDateToFormat.getMonth() +
    1}/${systemDateToFormat.getFullYear()}`;

  return formattedDate === formattedSystemDate ? "TODAY" : formattedDate;
};
