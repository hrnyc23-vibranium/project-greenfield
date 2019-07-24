import parse from 'html-react-parser';

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
