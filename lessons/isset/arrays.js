const get = (arr, index, defaultValue = null) => {
    if (index >= arr.length || index < 0) {
      return defaultValue;
    }
  
    return arr[index];
  };
  
  export default get;