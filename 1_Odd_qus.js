//                         1. Print odd numbers in an array

//anonymous function
    let odd = function(a) {
        let arr =[];
        for ( let i=0; i<=a.length; i++) {
            if (i%2==1) {
                arr.push(i);
            }
        }
        console.log(`1.anonymous: [1,2,3,4,5] -in Odd numbers are ${arr}`,arr)
        document.getElementById('1a').innerHTML = "Anonymous: [1,2,3,4,5] -in Odd numbers are " + arr
        return arr
    }

    odd([1,2,3,4,5]);
//--------------------------------------------

//IIFE
    (   function(a){
        let arr =[];
        for ( let i=0; i<=a.length; i++) {
            if (i%2==1) { arr.push(i); }
        }
        console.log(`1.IIFE:      1,2,3,4,5 -in odd numbers are ${arr}`, arr)
        // console.log(arr)
        document.getElementById('1b').innerHTML = "IIFE: [1,2,3,4,5] -in Odd numbers are " + arr

        return arr
        }
    )   ([1,2,3,4,5]);
//--------------------------------------------

//Arrow Function
    let oddNum = (a) => { 
        let arr =[];
        for ( let i=0; i<=a.length; i++) {
            if (i%2==1) { arr.push(i); }
        }
        console.log(`1.Arrow:     1,2,3,4,5 -in odd numbers are ${arr}`, arr)
        // console.log(arr)
        document.getElementById('1c').innerHTML = "Arrow: [1,2,3,4,5] -in Odd numbers are " + arr

        return arr
        }
    oddNum([1,2,3,4,5])


//-----------------------------------------------------------------
