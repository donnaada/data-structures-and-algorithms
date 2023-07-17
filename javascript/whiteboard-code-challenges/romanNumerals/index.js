const getRomanNumeral = (year) => {
  let romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let results = '';

  for(let i = 0; i < romanNumerals.length;i++){
    let numeral = romanNumerals[i];
    if((year - numeral.value) >= 0){
      results += numeral.symbol;
      year -= numeral.value;
      i--;
    }
  }

  return results;

};

module.exports = {getRomanNumeral};
