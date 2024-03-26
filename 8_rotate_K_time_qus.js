
//------------------8.Rotate an array by k times------------------------


//-------------------Anonymous--------------------------------------
let k_time_rotate = function (arr,k) {
    if (!Array.isArray(arr) || !Number.isInteger(k) || k < 0 ){
        alert("Invaid input")
    }

    let rotate_times = k % arr.length;
    let rotate_nums = arr.slice(-rotate_times);
    let no_rotate = arr.slice(0, arr.length - rotate_times );
    let result = rotate_nums.concat(no_rotate);
    console.log(`Anonymous : An array of [${arr}] rotating by k (${k}) times, the result is -  ${result}`);
    document.getElementById("8a").innerHTML = (`Anonymous : An array of [${arr}] rotating by k (${k}) times, the result is -  ${result}`)
    return result;
}
let array = [1,2,3,4,5,6,7,8,9,10]
let k = 18;
k_time_rotate(array,k);

//-----------------------Arrow----------------------------------
let rotateArrayK = (arr,k) => {
    if( !Array.isArray(arr) || !Number.isInteger(k) || k<0 ) {
        alert("Invalit input")
    }

    let rotate_times = k % arr.length;
    let rotate_nums = arr.slice(-rotate_times);
    let no_rotate = arr.slice(0, arr.length-rotate_times);
    let result = rotate_nums.concat(no_rotate);
    console.log(`Arrow : An array of [${arr}] rotating by k (${k}) times, the result is -  ${result}`);
    document.getElementById("8b").innerHTML = (`Arrow : An array of [${arr}] rotating by k (${k}) times, the result is -  ${result}`)
}

let arrayWords = ["1.Job ","2.Dept ","3.Home ","4.Apache 160 4v ", "5.xuv 300 "]
let k_time = 1;
rotateArrayK(arrayWords,k_time);