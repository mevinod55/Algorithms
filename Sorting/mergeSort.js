function mergeSort(arr, p, q, r) {
  const max = Number.MAX_SAFE_INTEGER;
  const arr1 = arr.slice(p, q);
  const arr2 = arr.slice(q, r);
  arr1.push(max);
  arr2.push(max);
  const result = [];
  let i = 0;
  let j = 0;
  for (let k = 0; k < arr.length; k++) {
    if (arr1[i] <= arr2[j]) {
      result[k] = arr1[i];
      i += 1;
    } else {
      result[k] = arr2[j];
      j += 1;
    }
  }
  return result;
}

console.time('Merge Sort');
console.log(mergeSort([1,4,5,8,9,2,3,6,7], 0, 5, 9));
console.timeEnd('Merge Sort');
