* @param {number} n
* @return {string[]}
// */
var fizzBuzz = function(n) {
   arr = [];
   
   for(let x = 1; x <= n; x++){
       if(x % 15 === 0){
           arr.push('FizzBuzz');
       }else if(x % 3 === 0 ){
           arr.push('Fizz');
       }else if(x % 5 === 0){
           arr.push('Buzz');
       }else{
           arr.push(String(x));
       }
   }
   
   return arr;
};