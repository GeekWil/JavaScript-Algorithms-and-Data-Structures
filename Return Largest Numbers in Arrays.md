<h1>Return Largest Numbers in an Array</h1>

```
function largestOfFour(arr) {

  let max = [];

  for (let i = 0; i < arr.length; i++) {
    let subArray = arr[i];
    let largestNumber = subArray[0];

    for (let j = 1; j < subArray.length; j++) {
      if (subArray[j] > largestNumber) {
        largestNumber = subArray[j];
      }
    }

    max.push(largestNumber);
  }

  return max;
}



largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```
