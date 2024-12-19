const isDivisibleBy3 = (number) => {
    if (number%3 === 0) {
      return true;
    };
    return false;
  };
  
  const calculateSum = (arr) => {
    const length = arr.length;
  
    if (length === 0) {
      return 0;
    }
    else {
      let sum = 0;
      for (let i = 0; i < length; i+=1) {
        if (isDivisibleBy3(arr[i])) {
          sum += arr[i]
        }
        console.log(sum);
      }
      return sum;
    }
  };
  
  export default calculateSum;