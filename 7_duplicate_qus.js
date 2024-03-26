//          7.Remove duplicates from an array

//-----------------Anonymous------------------------

let duplicate = function (a) {
    let duparr = [...new Set(a)];
    console.log(`7.Anonymous  : An arrray is ${full_arr} without duplicates ${duparr}`);
    document.getElementById("7a").innerHTML = (`Anonymous : An arrray is [${full_arr}] without duplicates ${duparr}`);
    return duparr
}

let full_arr = [1,1,2,2,3,4,5,6,6];
duplicate(full_arr);


//-----------------IIFE------------------------
( function (a) {


    let duparr = [...new Set(a)];
    console.log(`7.IIFE  : An arrray is  ${a} without duplicates ${[...new Set(a)]}`);
    document.getElementById("7b").innerHTML = (`IIFE : An arrray is [${a}] without duplicates ${[...new Set(a)]}`);
    return duparr
} )

([13,13,44,44,55,66,66]);






    

