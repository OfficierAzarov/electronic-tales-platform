const generateTodayDate = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;
  return today;
};

const generateTodayDateString = () => {
  const todayDate = generateTodayDate();
  const todayDateString = String(todayDate);
  return todayDateString;
};

exports.generateTodayDate = generateTodayDate;
exports.generateTodayDateString = generateTodayDateString;
