export default (number) => {
  const string = number.toString(2).split('');
  let count = 0;

  for(const item of string) {
    if(item === '1'){
      count +=1;
    }
  }
  return count;
}