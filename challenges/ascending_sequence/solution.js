export default (sequence) => {
  if (sequence.length < 2) {
    return false;
  }

  for(let i=1; i<sequence.length; i++) {
    if(sequence[i] !== sequence[i-1]+1){
      return false;
    }
  }
  return true;
}