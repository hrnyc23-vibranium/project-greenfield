const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validate = (form, component) => {
  let errors = [];

  if (component === 'reviews') {
    if (!form.rating) errors.push('an overall rating');

    if (!form.recommend) errors.push('a recommended input');

    if (!form.name) errors.push('a nickname');

    if (!form.name) errors.push('a review summary');

    if (form.body.length < 50) errors.push('a review body over 50 characters');

    if (!emailIsValid(form.email)) errors.push('a valid email address');

    //check if characteristics exist
    //check if images are valid
  } else {
    if (!form.question) errors.push('a question');

    if (!form.name) errors.push('a nickname');

    if (!emailIsValid(form.email)) errors.push('a valid email address');
  }

  return errors.length > 0 ? errors : false;
};
