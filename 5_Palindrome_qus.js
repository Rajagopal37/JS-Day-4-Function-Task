//                   5.Return all the palindromes in an array

//---------------------------Anonymos Function----------------------------

let arr1 = ["abc","did","Mom","Dad","xyz"];

let isPalindrome = function (str) {
    let toString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverse = toString.split("").reverse().join(""); // Corrected splitting and joining
    return toString === reverse;
}

let palindromes = function (a) { 
    const result = [];
    for (let i = 0; i < a.length; i++) {
        if (isPalindrome(a[i])) {
            result.push(a[i]); // Corrected pushing from 'a' array
        }
    }
    console.log(`5.Anonymos: ${arr1} Return all the palindromes in an array is ${result}`);
    document.getElementById("5a").innerHTML = (`Anonymos : ${arr1} Return all the palindromes in an array is ${result}`);
    return result;
}

palindromes(arr1);

//---------------------------IIFE Function----------------------------

let arr3 = ["abc","did","Mom","Dad","xyz"];

( function (a) { 
    const result = [];

    let isPalindromee = function (str) {
        let toString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
        let reverse = toString.split("").reverse().join(""); // Corrected splitting and joining
        return toString === reverse;
    }

    for (let i = 0; i < a.length; i++) {
        if (isPalindromee(a[i])) {
            result.push(a[i]); // Corrected pushing from 'a' array
        }
    }
    console.log(`5.IIFE : ${arr3} Return all the palindromes in an array is ${result}`);
    document.getElementById("5b").innerHTML = (`IIFE : ${arr3} Return all the palindromes in an array is ${result}`);
    return result;
} )

(arr3) 


//-----------------------------Arrow Function----------------------


let arr2 = ["Raja","Civic","Defied","Raji","Rotator","tenet"];

let palindromeCheck = (word) => {
    let toCvtString = word.toLowerCase().replace(/[^a-z0-9]/g,"");
    let toREverse = toCvtString.split("").reverse().join("");
    return toREverse === toCvtString;
} 

let polindromeFun = (arr) => {
    let result = [];
    for (let i=0; i<arr.length; i++) {
        if (palindromeCheck(arr[i])) {
            result.push(arr[i]);
        }
    }
    console.log(`5.Arrow : ${arr2} Return all the palindromes in an array is ${result}`);
    document.getElementById("5c").innerHTML = (`Arrow : ${arr2} Return all the palindromes in an array is ${result}`);
    return result
}
polindromeFun(arr2);
