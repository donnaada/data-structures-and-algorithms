const anagramChecker = (str1, str2) => {
  let isAnagram = true;
  let arr1 = str1.replace(/\s/g, '').toLowerCase().split('').sort();
  let arr2 = str2.replace(/\s/g, '').toLowerCase().split('').sort();

  if (str1.length !== str2.length){
    isAnagram = false;
  } else {
    for (let i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]){
        isAnagram = false;
        break;
      }
    }
  }

  return isAnagram;
};

module.exports = { anagramChecker };
