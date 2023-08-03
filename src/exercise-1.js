const getCommonItems = (array1, array2) => {
  // implement code here
  return array1.filter(items => array2.includes(items));
};

export default getCommonItems;
