let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDate = date => {
  let year = date.slice(0, 4);
  let month = Number(date.slice(5, 7));
  let day = date.slice(8, 10);

  return `${months[month - 1]} ${day}, ${year}`;
};
