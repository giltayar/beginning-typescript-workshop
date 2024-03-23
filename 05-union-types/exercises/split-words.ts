function splitWords(sentence) {
  const words = [];
  let word = undefined;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      if (word !== undefined) {
        words.push(word);
        word = undefined;
      }
    } else {
      word += sentence[i];
    }
  }

  if (word !== undefined) {
    words.push(word);
  }

  return words;
}

console.log(splitWords('Hello worldsss')); // ['Hello', 'world']
