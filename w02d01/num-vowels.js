const numVowels = (str) => {
  if (!str) {
    return null;
  }

  let totVowels = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (const char of str) {
    if (vowels.includes(char)) {
      totVowels += 1;
    }
  }

  return totVowels;
};

module.exports = numVowels;
