function fibs(n) {
  let f1 = 0;
  let f2 = 1;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(f1);
    let next = f1 + f2;
    f1 = f2;
    f2 = next;
  }
  return arr;
}

console.table(fibs(8));

function fibsRec(n, f1 = 0, f2 = 1, arr = []) {
  if (n < 1) {
    return arr;
  }
  arr.push(f1);
  return fibsRec(n - 1, f2, f1 + f2, arr);
}

console.table(fibsRec(8));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.table(mergeSort([8, 3, 5, 1, 9, 2, 7, 4, 6]));
