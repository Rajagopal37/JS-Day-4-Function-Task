//                         2. Convert all the strings to title caps in a string array


//Anonymos Function : Syntax: var funName = function(){return};   funName();
//IIFE Function     : Syntax: (function () {} ) ( argument );
//Arrow Function    : Syntax: var varName = (parameter)=>{};      varName();

//------------------Anonymos---------------------------
let titleCase = function (str) {
        str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].at(0).toUpperCase() + str[i].slice(1);
        }
        console.log(`2.Anonymos : my name is rajagopal ==>  ${str.join(" ")}`)
        document.getElementById("2a").innerHTML = "Anonymos : my name is rajagopal ==> "  + str.join(" ")
        return str.join(' ');
    }

titleCase("my name is rajagopal");


//------------------IIFE---------------------------
(   function (str){
        str = str.toLowerCase().split(" ");
        for (var i=0; i<str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        console.log(`2.IIFE     : I AM FULL STACK DEVELOPER  ==>  ${str.join(" ")}`)
        document.getElementById("2b").innerHTML = "IIFE : I AM FULL STACK DEVELOPER ==> "  + str.join(" ")
        return str.join(" ")
    }
) ("I AM FULL STACK DEVELOPER");


//------------------Arrow---------------------------
let arrfun = (str) => {
    str = str.toLowerCase().split(" ");
    for (var i=0; i<str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(`2.Arrow    : i aM fROm tEnKasI  ==>  ${str.join(" ")}`)
    document.getElementById("2c").innerHTML = "Arrow : i aM fROm tEnKasI ==> "  + str.join(" ")
    return str.join(" ")
};

arrfun("i aM fROm tEnKasI");
