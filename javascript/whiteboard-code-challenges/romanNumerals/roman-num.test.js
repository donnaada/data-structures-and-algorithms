const { getRomanNumeral } = require(".");

describe('Testing roman numerals', () => {
  test('2020 should return MMXX', ()=>{
    expect(getRomanNumeral(2020)).toEqual('MMXX');
  });

  test('634 should equal DCXXXIV', ()=>{
    expect(getRomanNumeral(634)).toEqual('DCXXXIV');
  });
});
