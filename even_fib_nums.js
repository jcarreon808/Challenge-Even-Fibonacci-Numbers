/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
 let a = 0;
 let b = 1;
 let sum = 0;
  var  fibArray = [];
  var nextNum = 0;
  for (let i = 0; i<maxFibValue; i++){
    a = a + b;
    fibArray.push(a);
    b = a + b;
    fibArray.push(b);

    if (fibArray[i]<=maxFibValue){
      if(fibArray[i]%2 === 0){
        sum += fibArray[i];
      }
    }
  }

  return sum;
}
//console.log(_sumFibs(6));

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};