const mergeSort = (inputArray: number[]) => {
  if (inputArray.length < 2 || !inputArray) return
  process(inputArray, 0, inputArray.length)
}

const process = (arr: number[], start: number, end: number) => {
  if (start === end) return

  /*
  1: 1 | 2: 10 | 3: 11 | 4: 100 | 5: 101 | 6: 110 | 7: 111 | 8: 1000 ...
  num >> 1 == Math.floor(num / 2)
  --------------------
  How to conver num to binary mannully? 
  divide the number by 2 util 0 and recorde all reminder, write reverse order is the binary for the orginal num
  (start + end) >> 1 === start + ((end - start) >> 1) -> cal the half 'distance' between start and end then add that to start 
  by doing this way will avoid stackoverflow issue
  */
  const mid = start + ((end - start) >> 1)
  process(arr, start, mid)
  process(arr, mid + 1, end)
  merge(arr, start, mid, end)
}

const merge = (arr: number[], start: number, mid: number, end: number) => {
  //unit == unsigned
  const helpArr = new Uint8Array(end - start + 1)
  let helpIndex = 0
  let pointerLeft = start
  let pointerRight = mid + 1
  //compare the current pointers and copy the less one into the helper array - before one of them hit the end.
  while (pointerLeft <= mid && pointerRight <= end) {
    helpArr[helpIndex] =
      arr[pointerLeft] <= arr[pointerRight]
        ? arr[pointerLeft++]
        : arr[pointerRight++]
  }
  while (pointerLeft <= mid) {
    helpArr[helpIndex++] = arr[pointerLeft++]
  }
  while (pointerRight <= end) {
    helpArr[helpIndex++] = arr[pointerRight++]
  }
}


const res_merge_sort = mergeSort([3, 55, 77, 23, 65, 86, 224, 24, 1, 0, 52, 11])
console.log({res_merge_sort});



