//                         2. Convert all the strings to title caps in a string array


//Anonymos Function : Syntax: var funName = function(){return};   funName();
//IIFE Function     : Syntax: (function FunctionName () {} ) ( argument );
//Arrow Function    : Syntax: var varName = (parameter)=>{};      varName();

//------------------Anonymos---------------------------
let titleCase = function (str) {
        str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].at(0).toUpperCase() + str[i].slice(1);
        }
        console.log(`2.Anonymos : RAJA GOPAL FSD-55 ==>  ${str.join(" ")}`)
        return str.join(' ');
    }

titleCase("RAJA GOPAL FSD-55");


//------------------IIFE---------------------------
(   function (str){
        str = str.toLowerCase().split(" ");
        for (var i=0; i<str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        console.log(`2.IIFE     : rajagopal t guvi  ==>  ${str.join(" ")}`)
        return str.join(" ")
    }
) ("rajagopal t guvi");


//------------------Arrow---------------------------
let arrfun = (str) => {
    str = str.toLowerCase().split(" ");
    for (var i=0; i<str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(`2.Arrow    : first LETTER uppercase  ==>  ${str.join(" ")}`)
    return str.join(" ")
};

arrfun("first LETTER uppercase");
