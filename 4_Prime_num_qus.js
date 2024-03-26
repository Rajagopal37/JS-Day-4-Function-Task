//           4.Return all the prime numbers in an array

//--------------------------Anonymos Function---------------------------------

const arr = [7,15,27,47,50];

let isPrime = function (num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let findPrimes = function (arr) {
    const primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    console.log(`4.Anonymos : ${arr} - prime numbers in an array ${primes}`)
    document.getElementById("4a").innerHTML = (`Anonymos : ${arr} - prime numbers in an array ${primes}`)
    return primes;
}  
findPrimes(arr);

//--------------------------IIFE Function---------------------------------

const arr_2 = [3,13,21,40];

( function (arr_2) {
    let isPrime2 = function (num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    const primes2 = [];
    for (let i = 0; i < arr_2.length; i++) {
        if (isPrime2(arr_2[i])) {
            primes2.push(arr_2[i]);
        }
    }
    console.log(`4.IIFE : ${arr_2} - prime numbers in an array ${primes2}`)
    document.getElementById("4b").innerHTML = (`IIFE : ${arr_2} - prime numbers in an array ${primes2}`)
    return primes2;
}  )

(arr_2);

//--------------------------Arrow Function---------------------------------

const arr_3 = [16,19,24,27,33,37];

let isPrime_3 =  (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let findPrimes_3 = (arr_3) => {
    const primes = [];
    for (let i = 0; i < arr_3.length; i++) {
        if (isPrime_3(arr_3[i])) {
            primes.push(arr_3[i]);
        }
    }
    console.log(`4.Anonymos : ${arr_3} - prime numbers in an array ${primes}`)
    document.getElementById("4c").innerHTML = (`Anonymos : ${arr_3} - prime numbers in an array ${primes}`)
    return primes;
}  
findPrimes_3(arr_3);