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

//let array = [["white", "goodness"], ["blue", "tranquility"]];

function colourAssociation(array){
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr[i] = {[array[i][0]]: array[i][1]}
   }
   return arr;
};
//console.log(colourAssociation(array))
// ---------------------------------------------------------------------------


// Combine objects
// 7 kyu https://www.codewars.com/kata/combine-objects

// const objA = { a: 10, b: 20, c: 30 };
// const objB = { a: 3, c: 6, d: 3 };

// let res = Object.assign(objA, objB);
// console.log(res)

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


// Get decimal part of the given number
// 7 kyu https://www.codewars.com/kata/get-decimal-part-of-the-given-number

function getDecimal(n){
  if (n < 0) {
    n = -n;
  }

  return n - Math.floor(n);
}
// console.log(getDecimal(-1.2));
// console.log(getDecimal(34.597))
// ---------------------------------------------------------------------------


// Maximum Triplet Sum (Array Series #7)
// 7 kyu https://www.codewars.com/kata/maximum-triplet-sum-array-series-number-7

function maxTriSum(numbers){
  let arr = [... new Set (numbers.sort((a, b) => a - b))];
  let result = arr.at(-3) + arr.at(-2) + arr.at(-1)
  return result;
}
// console.log(maxTriSum([3,2,6,8,2,3]));
// console.log(maxTriSum([-14,-12,-7,-42,-809,-14,-12]))
// ---------------------------------------------------------------------------


// Whose bicycle?
// 7 kyu https://www.codewars.com/kata/whose-bicycle


// ---------------------------------------------------------------------------


// Nickname Generator
// 7 kyu https://www.codewars.com/kata/nickname-generator

function nicknameGenerator(name){
  let i = name[2];

  if (name.length < 4) {
    return 'Error: Name too short';
  }
  else if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
    return name.slice(0, 4);
  }
  else return name.slice(0, 3);
}
// console.log(nicknameGenerator("Jimmy"));
// console.log(nicknameGenerator("Sam"));
// console.log(nicknameGenerator("Gregory"))
// ---------------------------------------------------------------------------


// Odd-Even String Sort
// 7 kyu https://www.codewars.com/kata/odd-even-string-sort

function sortMyString(S) {
  let str1 = '';
  let str2 = '';

  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) {
      str1 = str1 + S[i];
    } else {
      str2 = str2 + S[i];
    }
  }
  return `${str1} ${str2}`;
}
// console.log(sortMyString("CodeWars"));
// console.log(sortMyString("YCOLUE'VREER"))
// ---------------------------------------------------------------------------


// Power of two
// 7 kyu https://www.codewars.com/kata/power-of-two

function isPowerOfTwo(n){
  let result = 1;
  for (let i = 1; 2 ** i <= n; i++) {
    result *= 2;
  }
  return result == n ? true : false;
}
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5))
// ---------------------------------------------------------------------------


// String Reordering
// 7 kyu https://www.codewars.com/kata/string-reordering

// function sentence(List) {
  
// }
// let List = [
//   {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
//   {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
//  ];
// console.log(sentence(List));
// ---------------------------------------------------------------------------


// Minimize Sum Of Array (Array Series #1)
// 7 kyu https://www.codewars.com/kata/minimize-sum-of-array-array-series-number-1

function minSum(arr) {
  arr.sort((a, b) => a - b);
  let result = 0;

  while (arr.length > 0) {
    result += arr.shift() * arr.pop();
  }
  return result;
}
// console.log(minSum([5,4,2,3]));
// console.log(minSum([12,6,10,26,3,24]))
// ---------------------------------------------------------------------------


// Unpacking Arguments
// 7 kyu https://www.codewars.com/kata/unpacking-arguments


// ---------------------------------------------------------------------------


// Vowel one
// 7 kyu https://www.codewars.com/kata/vowel-one

function vowelOne(s){
  s = s.toLowerCase();
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a' || s[i] === 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
      result += 1;
    } else {
      result += 0;
    }
  }
  return result;
}
// console.log(vowelOne('vowelOne'))
// ---------------------------------------------------------------------------


//  Who is the killer?
// 7 kyu https://www.codewars.com/kata/who-is-the-killer-1

function killer(suspectInfo, dead) {
  let res1 = Object.values(suspectInfo);
  let keys = Object.keys(suspectInfo);
 
  for (let i = 0; i < res1.length; i++) {
    if (res1[i].includes(...dead)) {
      return keys[i]
    }
  }
}
//console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']));
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
