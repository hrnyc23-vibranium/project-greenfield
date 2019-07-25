import parse from 'html-react-parser';

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

//MARKDOWN PARSER

//add all matches to a set, iterate through all the words in the set, and use that word to find all matches and replace that word with marked html tags
export const markdown = (text, query) => {
  if (query.length > 2) {
    let needToChange = new Set([]);
    let match; //potential matches
    let length = query.length;
    for (let i = 0; i <= text.length - length; i++) {
      match = text.substring(i, length + i);
      if (match.toLowerCase() === query.toLowerCase()) {
        needToChange.add(match);
      }
    }
    needToChange.forEach(word => {
      let regex = new RegExp(word, 'g');
      let replacement = `<mark>${word}</mark>`;
      text = text.replace(regex, replacement);
    });
  }
  return parse(text);
};

//VALIDATION

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validate = (form, component, categories) => {
  let errors = {};

  if (component === 'reviews') {
    if (!form.rating) errors.rating = 'an overall rating';

    if (!form.recommend) errors.recommend = 'a recommended input';

    if (!form.name) errors.name = 'a nickname';

    if (!form.summary) errors.summary = 'a review summary';

    if (form.body.length < 50) errors.body = 'a review body over 50 characters';

    if (!emailIsValid(form.email)) errors.email = 'a valid email address';

    //if given characteristics is not equal to product characteristics, add error

    if (
      Object.keys(form.characteristics).length !==
      Object.keys(categories).length
    )
      errors.characteristics = 'valid characteristic(s)';

    //check if characteristics exist
  } else {
    if (component === 'question') {
      if (!form.question || form.question === '')
        errors.question = 'a question';
    } else {
      if (!form.answer || form.answer === '') errors.answer = 'a answer';
    }

    if (!form.name || form.name === '') errors.name = 'a nickname';

    if (!emailIsValid(form.email) || form.email === '')
      errors.email = 'a valid email address';
  }
  return Object.keys(errors).length ? errors : false;
};
