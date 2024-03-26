//          6.Return median of two sorted arrays of the same size

//---------------------------Anonymous------------------------

let findMedian = function (arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const middleIndex = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
    let median = Math.floor((mergedArray[middleIndex] + mergedArray[middleIndex - 1]) / 2)
    console.log(`6.Anonymous : The two sort an array [${arr1}] and [${arr2}] median is ${median}`)
    document.getElementById("6a").innerHTML = (`Anonymous : The two sort an array [${arr1}] and [${arr2}]  median is ${median}`);
    return median ;
}
}

const arrS1 = [1, 3, 5, 7, 9];
const arrS2 = [2, 4, 6, 8, 10];

findMedian(arrS1, arrS2);


//---------------------------IIFE------------------------

( function (arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const middleIndex = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
    let median = Math.floor((mergedArray[middleIndex] + mergedArray[middleIndex - 1]) / 2)
    console.log(`6.IIFE : The two sort an array [${arr1}] and [${arr2}] median is ${median}`)
    document.getElementById("6b").innerHTML = (`IIFE : The two sort an array [${arr1}] and [${arr2}]  median is ${median}`);
    return median ;
}
})

([4,9,10,7,8], [2, 4, 6, 8, 10]);