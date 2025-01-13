const countUniqChars = (text) => {
  const uniqChars = [];

  for (const char of text) {
    if (!uniqChars.includes(char)) {
      uniqChars.push(char);
    }
  }

  return uniqChars.length;
};

export default countUniqChars;