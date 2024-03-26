//                         3.Sum of all numbers in an array


//Anonymos Function : Syntax: var funName = function(){return};   funName();
//IIFE Function     : Syntax: (function FunctionName () {} ) ( );
//Arrow Function    : Syntax: var varName = (parameter)=>{};      varName();


//------------------Anonymos---------------------------

        let sumArr = function (a) {
            let sum = 0;
            for(let i=0; i<a.length; i++) {
                sum += a[i];
            }
            console.log (`3.Anonymos : sum of a [1,2,3] is ${sum}`)
            document.getElementById("3a").innerHTML = (`Anonymos : sum of a [1,2,3] is ${sum}`)
            return sum;
        }
        sumArr([1,2,3]);
        

//------------------IIFE---------------------------

        ( function (arr){
            let sum = 0;
            for(let i=0; i<arr.length;i++){
                sum+=arr[i];
            }
            console.log (`3.IIFE     : sum of a [4,5,6] is ${sum}`)
            document.getElementById("3b").innerHTML = (`IIFE     : sum of a [4,5,6] is ${sum}`)

            return sum;

        } )
        ([4,5,6]);

//------------------Arrow---------------------------

        let sumofArray = (arr) => {
            let sum = 0;
            for(let i=0; i<arr.length;i++ ){
                sum+=arr[i]
            }
            console.log (`3.Arrow    : sum of a [7,8,9] is ${sum}`)
            document.getElementById("3c").innerHTML = (`Arrow    : sum of a [7,8,9] is ${sum}`)

            return sum
        }

        sumofArray([7,8,9]);

            
           