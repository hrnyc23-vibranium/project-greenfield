import parse from 'html-react-parser';

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
