var myFunction = require('../js/game');


describe('Compares two attacks', function(){
  it('returns the greater attack', function(){
    var char1 = 10, char2 = 12;
    expect(myFunction.greaterThan(char1, char2)).toEqual(char2);
  })
  it('returns the greater attack', function(){
    var char1 = -1, char2 = 1;
    expect(myFunction.greaterThan(char1, char2)).toEqual(char2);
  })


})
