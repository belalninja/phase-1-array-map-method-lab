const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  const x = tutorials.map(function (statement) {
    // console.log([...statement])
    return [...statement].map(function (letter, index, array) {
      if (array[index - 1] == [` `]) {
        // console.log(letter.toUpperCase());
        return letter.toUpperCase();
      } else if (index == [0]) {
        // console.log(letter);
        return letter.toUpperCase();
      } else {
        return letter;
      }
    });
  });
  return x.map((x) => x.join(``));
};
console.log(titleCased(tutorials));
console.log([...tutorials[0][4]]);
