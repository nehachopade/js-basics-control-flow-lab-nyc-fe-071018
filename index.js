// Write your code in this file!
function scuberGreetingForFeet(someNumber){
   
   if (someNumber<=400)
    {
      return 'This one is on me!'
    } else if (someNumber>2000 && someNumber<=2500){
      return 'I will gladly take your thirty bucks.'
    } else if (someNumber>=2501){
      return 'No can do.'
    }
}
function ternaryCheckCity(city){
  if(city=='NYC'){return 'Ok, sounds good.' }
  return No go.
  
}

/*describe('ternaryCheckCity()', function () {
    it('returns "Ok, sounds good." when the city is NYC', function () {
      expect(ternaryCheckCity('NYC')).to.equal('Ok, sounds good.');
    });

    it('should return "No go." if the destination city is not NYC', function () {
      expect(ternaryCheckCity('Pittsburgh')).to.equal('No go.');
    });
  });*/