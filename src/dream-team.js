import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let arrNames = [];
  members.forEach((item) => {
  if (typeof(item) === 'string') {
  arrNames.push(item);
  }
  });
  let result = arrNames.map((item) => {
  return item.substr(0, 1).toUpperCase();
  });
  // let result = letterArr.
  return result.sort().join('');
}
