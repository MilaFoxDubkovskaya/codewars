// Function 1 - hello world
// 8 kyu https://www.codewars.com/kata/function-1-hello-world

function greet (str) {
    return 'hello world!';
  } 
// ----------------------------------------------------------------------------

// Quarter of the year
// 8 kyu https://www.codewars.com/kata/quarter-of-the-year

const quarterOf = (month) => {
    if (month > 0 && month < 4) {
      return 1;
    }
    else if (month > 3 && month < 7) {
      return 2;
    }
    else if (month > 6 && month < 10) {
      return 3;
    }
    else if (month > 9) {
      return 4;
    }
  }
// ----------------------------------------------------------------------------
  
// Capitalization and Mutability
// 8 kyu https://www.codewars.com/kata/capitalization-and-mutability

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1); 
}
// ----------------------------------------------------------------------------
  

// Century From Year
// 8 kyu https://www.codewars.com/kata/century-from-year

function century(year) {
    let centure = Math.ceil(year / 100);
    return centure;
  }
// ----------------------------------------------------------------------------
  
// Convert a Number to a String!
// 8 kyu https://www.codewars.com/kata/convert-a-number-to-a-string

function numberToString(num) {
    return String(num);
  }
// ----------------------------------------------------------------------------
  

// Convert a String to a Number!
// 8 kyu https://www.codewars.com/kata/convert-a-string-to-a-number

const stringToNumber = function(str){
    return Number(str);
  }
// ----------------------------------------------------------------------------
  

// Convert to Binary
// 8 kyu https://www.codewars.com/kata/convert-to-binary

function toBinary(n){
    return +n.toString(2);
  }
// ----------------------------------------------------------------------------
 


// Even or Odd
// 8 kyu https://www.codewars.com/kata/even-or-odd

function evenOrOdd(number) {
    if (number % 2 === 0) {
      return 'Even';
    }
    else {
      return 'Odd';
    }
  }
// ----------------------------------------------------------------------------
  

// Fake Binary
// 8 kyu https://www.codewars.com/kata/fake-binary/javascript

function fakeBin(x){
    let result = '';
    for (let i = 0; i < x.length; i++) {
      if (x[i] < 5) {
        result = result + '0';
      }
      else {
        result = result + '1';
      }
    }
    return result;
  }
// ----------------------------------------------------------------------------
 

// Largest Square Inside A Circle
// 7 kyu https://www.codewars.com/kata/largest-square-inside-a-circle

function areaLargestSquare(r) {
    return r ** 2 * 2; 
  }
// ----------------------------------------------------------------------------
  

// Number of Decimal Digits
// 7 kyu https://www.codewars.com/kata/number-of-decimal-digits

function digits(n) {
    return String(n).length;
  }
// ----------------------------------------------------------------------------
  

// Opposite number
// 8 kyu https://www.codewars.com/kata/opposite-number

function opposite(number) {
    return -number;
  }
// ----------------------------------------------------------------------------
  

// Perimeter sequence
// 7 kyu https://www.codewars.com/kata/perimeter-sequence

function perimeterSequence(a,n) {
    return a * n * 4;
  }
// ----------------------------------------------------------------------------
  

// Remove First and Last Character
// 8 kyu https://www.codewars.com/kata/remove-first-and-last-character

function removeChar(str){
    return str.slice(1, -1);
  };  
// ----------------------------------------------------------------------------
  

// Remove String Spaces
// 8 kyu https://www.codewars.com/kata/remove-string-spaces

function noSpace(x){
    return x.replaceAll(' ', '');
  }

// ИЛИ
function noSpace(x){
    return x.split(' ').join('');
  }
// ----------------------------------------------------------------------------
  

// String ends with?
// 7 kyu https://www.codewars.com/kata/string-ends-with

function solution(str, ending){
    return str.endsWith(ending);
  }
// ----------------------------------------------------------------------------
  

// Simple multiplication
// 8 kyu https://www.codewars.com/kata/simple-multiplication

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}
// ----------------------------------------------------------------------------
  

// String repeat
// 8 kyu https://www.codewars.com/kata/string-repeat

function repeatStr (n, s) {
    return s.repeat(n);
  }

// ИЛИ
function repeatStr (n, s) {
    let result = '';
    for (let i = 1; i <= n; i++) {
      result = result + s
    }
    return result;
  }
// ----------------------------------------------------------------------------
  

// Student's Final Grade
// 8 kyu https://www.codewars.com/kata/students-final-grade

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) {
      return 100;
    }
    else if (exam > 75 && projects >= 5) {
      return 90;
    }
    else if (exam > 50 && projects >= 2) {
      return 75;
    } 
    else {
      return 0;
    }
  }
// ----------------------------------------------------------------------------
  

// Switch it Up!
// 8 kyu https://www.codewars.com/kata/switch-it-up

function switchItUp(number){
    switch (number) {
      case 1:
        return 'One';
      case 2:
        return 'Two';
      case 3:
        return 'Three';
      case 4:
        return 'Four';
      case 5:
        return 'Five';
      case 6:
        return 'Six';
      case 7:
        return 'Seven';
      case 8:
        return 'Eight';
      case 9:
        return 'Nine';
      case 0:
        return 'Zero';
    }
  }
// ----------------------------------------------------------------------------
  

// Thinkful - Logic Drills: Traffic light
// 8 kyu https://www.codewars.com/kata/thinkful-logic-drills-traffic-light

function updateLight(current) {
    if (current === 'green') {
      return 'yellow';
    }
    else if (current === 'yellow') {
      return 'red';
    }
    else return 'green';
  }
// ----------------------------------------------------------------------------
  

// Third Angle of a Triangle
// 8 kyu https://www.codewars.com/kata/third-angle-of-a-triangle

function otherAngle(a, b) {
    return 180 - a - b;
  }
// ----------------------------------------------------------------------------
  

// Transportation on vacation
// 8 kyu https://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
    let sum = d * 40;
    return d < 3 ? sum : d < 7 ? sum - 20 : sum - 50;
  }
// ----------------------------------------------------------------------------
  

// Type of sum
// 8 kyu https://www.codewars.com/kata/type-of-sum

function typeOfSum(a, b) {
    return typeof(a + b);
  }
// ----------------------------------------------------------------------------
  

// Will you make it?
// 8 kyu https://www.codewars.com/kata/will-you-make-it

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump ? true : false;
  }; 
// ----------------------------------------------------------------------------
  
// ----------------------------------------------------------------------------
  
// ----------------------------------------------------------------------------
  