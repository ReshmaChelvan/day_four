//5.question:Return all the palindromes in an array
 
 //anonymous function:
 let isPalindrome=function (str) {
    let rev = str.split(" ").reverse().join("");
    if (rev == str) {
        return rev
    }
    else{
       return false
    }
}
console.log( isPalindrome("racecar" ))


//IIFE - Immediately Invoked function:

 const isPalin = ((name) => { 
   let result = name.split("").reverse().join("");
   if(name === result) {
     return `It's a Palindrome ${result}`
   } else { 
     return `It is not a palindrome ${result}`
   }
 })("mam")

 // console.log(isPalin)

   //arrow function:
   let person = (name) => {
        let Result = name.split("").reverse().join("");
           if(name === Result) { 
           console.log("it's a palindrome");
          }
         else { 
           console.log("it's Not a palindrome");
        } 
       }
       person('mam');
     
//question:6 Remove duplicates from an array
//anonymous function:
(function (number) {
    let FinalResult = [...new Set(number)];
  console.log(FinalResult);
}
([1,2,3,4,1,2,3,4]));

//IIFE-Immediately Invoked Function:
(function () {
    let number = [1,2,3,4,1,2,3,4];
    let FinalResult = [...new Set(number)];
    console.log(FinalResult);
}());

//arrow function:
let clone = (Value) => { 
      let FinalValue = [...new Set(Value)]
    console.log(FinalValue);
  }
  clone([1,2,3,4,5,5,4,3,2,1,'a','b','a','b'])
 
// //7.Question.Rotate an array by K times
//anonymous function:
let RotateArrays = function(Value, K) {
    let Array = Value.splice(Value.length-K);
    for (let i=0; i < Array.length; i++){
        Value.splice(i,0,Array[i]);
    }
    return Value;
}
console.log(RotateArrays([2,3,4,5,6],1));

//IIF Rotate an array by k times
let RotateArray = function(Value, K) {
    let Array = Value.splice(Value.length-K);
     for (let i=0; i < Array.length; i++){
         Value.splice(i,0,Array[i]);
     }
      console.log(Value);
  }([2,3,4,5,6],1);


//8.question:return median of two sorted arrays of the same size.

//anonymous function:
function median(arr) {
 const mid = Math.floor(arr.length / 2), nums = [...arr].sort((a, b) => a - b);
 return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}
console.log(median([5, 6, 50, 1, -5],[1, 2, 3, 4, 5]));

// //IIFE:immediately invoked function
const medianIife = (
  function median(act) {
     const mid = Math.floor(act.length / 2);
     nums = [...act].sort((a, b) => a - b);
     return act.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
 }
)([1,2,3,4,],[7,6,5,4]);

console.log(medianIife)