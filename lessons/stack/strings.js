const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

export default (string) => {
  const stack = [];

  for (const symbol of string) {
    if (openingSymbols.includes(symbol)){
      stack.push(symbol);
    }
    else {
      if (openingSymbols.indexOf(stack.at(-1)) === closingSymbols.indexOf(symbol)){
        stack.pop();
    
      }
      else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
