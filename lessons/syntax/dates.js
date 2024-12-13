export const getWeekends = (format = 'long') => {
    const longFormat = ['saturday', 'sunday'];
    const shortFormat = ['sat', 'sun'];
  
    switch (format) {
      case 'long':
        return longFormat;
      case 'short':
        return shortFormat;
      default:
        console.log('This format is not supported');
        break;
    }
  };