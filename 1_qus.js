//                         1. Print odd numbers in an array


//Anonymos Function : Syntax: var funName = function(){return};   funName();
//IIFE Function     : Syntax: (function FunctionName () {} ) ( );
//Arrow Function    : Syntax: var varName = (parameter)=>{};      varName();


        //anonymous function
            let odd = function(a) {
                arr =[];
                for ( let i=0; i<=a.length; i++) {
                    if (i%2==1) {
                        arr.push(i);
                    }
                }
                console.log(`1.anonymous: 1,2,3,4,5 -in Odd numbers are ${arr}`,arr)
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
                return arr
                }
            oddNum([1,2,3,4,5])


//-----------------------------------------------------------------