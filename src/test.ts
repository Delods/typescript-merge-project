import { createAscendingArray, createDescendingArray } from './createArrays';
import { merge } from './mergingMethod';

function assert(cond: boolean, msg: string) {
  if (!cond) throw new Error(msg);
}

// Creating Arrays by (first paramenter is length, second is start value, third is max step)
const c1 = createAscendingArray(5, 0, 2);
const c2 = createAscendingArray(5, 10, 3);
const c3 = createDescendingArray(5, 20, 2);

console.log("c1:", c1);
console.log("c2:", c2);
console.log("c3:", c3);

// merge and check the result
const merged = merge(c1, c2, c3);
console.log("merged array:", merged);

// verify ascending order
for (let i = 1; i < merged.length; i++) {
  assert(merged[i - 1] <= merged[i], "Array is not sorted");
}
console.log("We have checked that the merged array is sorted in ascending order");