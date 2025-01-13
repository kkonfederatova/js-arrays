const getSameCount = (coll1, coll2) => {
  let count = 0;
  const uniqColl1 = _.uniq(coll1);
  const uniqColl2 = _.uniq(coll2);

  if (arr1.length === 0 || arr2.length === 0){
    return count;
  }

  for (const item1 of uniqColl1) {
    for (const item2 of uniqColl2) {
      if (item1 === item2) {
        count += 1;
        break;
      }
    }
  }

  return count;
};

export default getSameCount;