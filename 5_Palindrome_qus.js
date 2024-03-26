//                   Return all the palindromes in an array

//Anonymos Function : Syntax: var funName = function(){return};   funName();
//IIFE Function     : Syntax: (function FunctionName () {} ) ( );
//Arrow Function    : Syntax: var varName = (parameter)=>{};      varName();


var arr = ["abc","did","Mom","Dad","xyz",300];

function isPalindrome (str) {  
    let right = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    let left = right.split("").reverse().join("");
    return right === left ;
}

