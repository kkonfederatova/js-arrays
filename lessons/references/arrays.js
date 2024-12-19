export const reverse = (arr) => {
    let temp;
    for (let i = 0; i < (arr.length-1)/2; i+=1)
    {
      temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  };