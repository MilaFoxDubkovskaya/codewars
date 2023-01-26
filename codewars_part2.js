// Arrow style Functions
// 8 kyu https://www.codewars.com/kata/take-an-arrow-to-the-knee-functionally

var ArrowFunc = function(arr) {
    return arr.map(el => String.fromCharCode(el)).join(''); 
  }
// ---------------------------------------------------------------------------


// Merge two sorted arrays into one
// 8 kyu https://www.codewars.com/kata/merge-two-sorted-arrays-into-one

function mergeArrays(arr1, arr2) {
  let arr = [];
  if (arr1.length === 0 && arr2.length === 0) {
    return arr;
  } else {
    return [...new Set (arr.concat(arr1, arr2).sort((a, b) => a - b))];
  }
}
// ---------------------------------------------------------------------------


// 16+18=214
// 7 kyu https://www.codewars.com/kata/16-plus-18-equals-214

function add(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  let lengthMax = Math.max(num1.length, num2.length);
  num1 = num1.padStart(lengthMax, 0);
  num2 = num2.padStart(lengthMax, 0);
  
  let result = ''
  for (let i = 0; i < lengthMax; i++) {
   result = result + (Number(num1[i]) + Number(num2[i]))
  } return +result;
}
// ---------------------------------------------------------------------------


// Add property to every object in array
// 7 kyu https://www.codewars.com/kata/add-property-to-every-object-in-array

// ---------------------------------------------------------------------------


// Colour Association
// 7 kyu https://www.codewars.com/kata/colour-association

// let array = [["white", "goodness"], ["blue", "tranquility"]];
//  console.log(array[0][1])
//  console.log(Object.fromEntries(array[0]))
// function colourAssociation(array){
//     let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     //arr = arr.push(array[i][0] = array[i][1])
//   }
// };
// console.log(colourAssociation(array))
// ---------------------------------------------------------------------------


// Combine objects
// 7 kyu https://www.codewars.com/kata/combine-objects

// const objA = { a: 10, b: 20, c: 30 };
// const objB = { a: 3, c: 6, d: 3 };

// function combine(objA, objB) {
//   let result = {...objA};
//   //let result = objA;
//   return result;

// }
// console.log(combine(objA, objB));
// //console.log(objA)

// const obj = { a: 10, b: 20, c: 30 };
// console.log(obj.a)
// ---------------------------------------------------------------------------


// Count the Digit
// 7 kyu https://www.codewars.com/kata/count-the-digit

function nbDig(n, d) {
  let count = 0;
  let str = '';
  let result;

  for (let k = 0; k <= n; k++) {
    result = k ** 2;
    str += result;
  }
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] == d) {
      count += 1;
    } 
  }
  return count;
}
//console.log(nbDig(10, 1));
// ---------------------------------------------------------------------------


// Find the missing element between two arrays
// 7 kyu https://www.codewars.com/kata/find-the-missing-element-between-two-arrays

function findMissing(arr1, arr2) {
  arr2.sort((a, b) => a - b);
  arr1.sort((a, b) => a - b);
  

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.length === 0) {
      return arr1[0];
    }
    else if (arr1[i] != arr2[i]) {
      return arr1[i];
    }
  }
}
// console.log(findMissing([1, 2, 3], [1, 3]));
// console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
