const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validate = (form, component) => {
  let errors = {};

  if (component === 'reviews') {
    if (!form.rating) errors.rating = 'an overall rating';

    if (!form.recommend) errors.recommend = 'a recommended input';

    if (!form.name) errors.name = 'a nickname';

    if (!form.summary) errors.summary = 'a review summary';

    if (form.body.length < 50) errors.body = 'a review body over 50 characters';

    if (!emailIsValid(form.email)) errors.email = 'a valid email address';

    //check if characteristics exist
    //check if images are valid
  } else {
    if (!form.question) errors.question = 'a question';

    if (!form.name) errors.name = 'a nickname';

    if (!emailIsValid(form.email)) errors.email = 'a valid email address';
  }

  return Object.keys(errors).length > 0 ? errors : false;
};
