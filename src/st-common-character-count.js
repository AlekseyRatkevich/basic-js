import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let arr = s1.split('').sort();
  let counter = 0;
  for (var q=1, i=1; q<arr.length; ++q) {
  if (arr[q] !== arr[q-1]) {
  arr[i++] = arr[q];
  }
  }
  arr.length = i;
  
  for (let elem of arr) {
  if (s2.includes(elem)) {counter++};
  }
  return counter;
}



