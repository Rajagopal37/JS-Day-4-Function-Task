//                         1. Print odd numbers in an array


//Anonymos Function : Syntax: var funName = function(){return};   funName();
//IIFE Function     : Syntax: (function FunctionName () {} ) ( argument );
//Arrow Function    : Syntax: var varName = (parameter)=>{};      varName();


let titleCase = function (str) {
        str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].at(0).toUpperCase() + str[i].slice(1);
        }
        console.log(str.join(' '))
        return str.join(' ');
    }

titleCase("RAJA GOPAL FSD-55");

(   function (str){
        str = str.toLowerCase().split();
        for (var i=0; i<str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        console.log(`rajagopal t guvi to Title Uppercase is: ${str.join(" ")}`)
        return str.join(" ")
    }
) ("rajagopal t guvi");