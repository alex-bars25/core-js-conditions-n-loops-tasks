/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (king.x === queen.x || king.y === queen.y) {
    return true;
  }
  if (Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  return a === b || a === c || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let roman = '';
  let temp = num;
  while (temp) {
    if (temp >= 10) {
      temp -= 10;
      roman += 'X';
    } else if (temp >= 9) {
      temp -= 9;
      roman += 'IX';
    } else if (temp >= 5) {
      temp -= 5;
      roman += 'V';
    } else if (temp >= 4) {
      temp -= 4;
      roman += 'IV';
    } else if (temp >= 1) {
      temp -= 1;
      roman += 'I';
    }
  }
  return roman;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        str += 'minus';
        break;
      case ',':
        str += 'point';
        break;
      case '.':
        str += 'point';
        break;
      case '0':
        str += 'zero';
        break;
      case '1':
        str += 'one';
        break;
      case '2':
        str += 'two';
        break;
      case '3':
        str += 'three';
        break;
      case '4':
        str += 'four';
        break;
      case '5':
        str += 'five';
        break;
      case '6':
        str += 'six';
        break;
      case '7':
        str += 'seven';
        break;
      case '8':
        str += 'eight';
        break;
      case '9':
        str += 'nine';
        break;
      default:
        break;
    }
    if (i < numberStr.length - 1) {
      str += ' ';
    }
  }
  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }
  return str === reversed;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      index = i;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numStr = `${num}`;
  let isDigit = false;
  for (let i = 0; i < numStr.length; i += 1) {
    if (+numStr[i] === digit) {
      isDigit = true;
    }
  }
  return isDigit;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let index = -1;
  let leftSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    leftSum += arr[i];
    let rightSum = 0;
    for (let j = arr.length - 1; j >= 0; j -= 1) {
      rightSum += arr[j];
      if (leftSum === rightSum && i === j - 2) {
        index = i + 1;
      }
    }
  }
  return index;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }
  let [left, top] = [0, 0];
  let [right, bottom] = [size - 1, size - 1];
  let el = 1;
  while (left <= right) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = el;
      el += 1;
    }
    top += 1;
    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = el;
      el += 1;
    }
    right -= 1;
    for (let i = right; i >= left; i -= 1) {
      matrix[bottom][i] = el;
      el += 1;
    }
    bottom -= 1;
    for (let i = bottom; i >= top; i -= 1) {
      matrix[i][left] = el;
      el += 1;
    }
    left += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length - 1;
  const matrix2 = matrix;
  for (let i = 0; i < Math.floor(matrix.length / 2); i += 1) {
    for (let j = 0; j < matrix.length / 2; j += 1) {
      const temp = matrix[i][j];
      matrix2[i][j] = matrix[n - j][i];
      matrix2[n - j][i] = matrix[n - i][n - j];
      matrix2[n - i][n - j] = matrix[j][n - i];
      matrix2[j][n - i] = temp;
    }
  }
  return matrix2;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const input = arr;
  if (arr.length <= 1) {
    return arr;
  }
  const min = [];
  const max = [];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < arr[0]) {
      min[min.length] = arr[i];
    } else {
      max[max.length] = arr[i];
    }
  }
  const sorted = [...sortByAsc(min), arr[0], ...sortByAsc(max)];
  for (let i = 0; i < arr.length; i += 1) {
    input[i] = sorted[i];
  }
  return input;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  let iterationsLeft = 0;
  for (let i = 0; i < iterations; i += 1) {
    let even = '';
    let odd = '';
    for (let j = 0; j < result.length; j += 1) {
      if (j % 2 === 0) {
        even += result[j];
      } else {
        odd += result[j];
      }
    }
    result = even + odd;
    if (result === str) {
      iterationsLeft = iterations % (i + 1);
      i = iterations - iterationsLeft - 1;
    }
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const numArr = Array.from(`${number}`).map((item) => +item);
  let i = numArr.length - 2;
  for (i; i >= 0; i -= 1) {
    if (numArr[i] < numArr[i + 1]) {
      break;
    }
  }
  if (i) {
    let idx = i + 1;
    for (let j = idx; j < numArr.length; j += 1) {
      if (numArr[j] < numArr[idx] && numArr[j] > numArr[i]) {
        idx = j;
      }
    }
    [numArr[i], numArr[idx]] = [numArr[idx], numArr[i]];
    const before = numArr.splice(0, i + 1);
    const after = numArr;
    const result = +[...before, ...after.sort((a, b) => a - b)].join('');
    return result;
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
