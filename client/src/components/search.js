// import parse from 'html-react-parser';

// export const markdown = (text, query) => {
//   if (query.length > 2) {
//     let regex = new RegExp(query, 'gi');

//     let length = query.length
//     for (let i = 0; i < text.length; i++) {
//       let potMatch = text.substring(i, length)
//       if (potMatch.toLowerCase() === query.toLowerCase()) {

//         text.replace()
//       }
//     }

//     let startMark = text.toLowerCase().indexOf(query.toLowerCase());
//     let endMark = text
//       .toLowerCase()
//       .indexOf(query.toLowerCase()[query.length - 1]);

//     let replacement = `<mark>${text.substring(startMark, endMark + 1)}</mark>`;

//     let marked = parse(text.replace(regex, replacement));

//     return marked;
//   } else {
//     return text;
//   }
// };
