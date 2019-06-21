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

  const prevDate = new Date(systemDateToFormat);
  console.log("prevDate", prevDate);
  prevDate.setDate(prevDate.getDate() - 1);

  const formattedPrevDate = `${prevDate.getDate()}/${prevDate.getMonth() +
    1}/${prevDate.getFullYear()}`;

  // console.log("now", systemDateToFormat);
  // console.log("newdate", prevDate);
  // console.log('prev', formattedPrevDate);

  if (formattedDate === formattedSystemDate) {
    return "TODAY";
  } else if (formattedDate === formattedPrevDate) {
    return "YESTERDAY";
  } else {
    return formattedDate;
  }
};
