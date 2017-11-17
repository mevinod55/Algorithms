/* Logic
1. Loop through each value
2. Check if value is less than values in sorted array (looping)
3. move the value in sorted array to next step.
4. if value is not less place the value at previous index
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([4,2,2,7,3,9,0]));
