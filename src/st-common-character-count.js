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
  let arr = s1.split('');
  let arr2 = s2.split('');
  let counter = 0;
  
  arr.forEach((item) => {
  if (arr2.includes(item)) {
  counter++;
  arr2.splice(arr2.indexOf(item), 1)
  }
  })
  return counter;
}