const { anagramChecker } = require(".");

describe('Test if strings are anagrams of each other', () => {
  test('Should return true', ()=>{
    let a = 'Listen';
    let b = 'Silent';

    expect(anagramChecker(a,b)).toBe(true);
  });

  test('Should return False', ()=>{
    let a = 'Listening';
    let b = 'Silent';

    expect(anagramChecker(a,b)).toBe(false);
  });
});
