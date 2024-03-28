function splitWords(sentence) {
  const words = [];
  let word = '';

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      if (word !== '') {
        words.push(word);
        word = '';
      }
    } else {
      word += sentence[i];
    }
  }

  if (word !== '') {
    words.push(word);
  }

  return words;
}

console.log(splitWords('Hello, world!')); // ['Hello,', 'world!']
