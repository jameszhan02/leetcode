const test_data = [3, 55, 77, 23, 65, 86, 224, 24, 1, 0, 52, 11, 55, 65]

/*
Q: give a number ask to put all number less or equal than this number put them in the the 'left' part of the array, rest (bigger than) in the right
A: [borderIndex] start from -1, compare the current poitner start from 0 if is less the target number, 
    swap the currentpointer index element with borderIndex+1 and borderIndex += 1,
    Loop Through the entire array, res will be the answer

=============================================================
Q: give a target number i, and arr, all nums less than i to the left, all bigger then i to the right, and in the middle is equals to i
A: Need to boderIndex, 1. leftBorder= -1 2. rightBorder=arr.length. and 3. pointer current
    1. if current element less then i : swap the current with leftBorder + 1 and leftBorder += 1, current++
    2. equal，current++ 
    3. bigger, swap current and rightBorder - 1, and rightBorder -= 1, current stay same (the current value was a new value just get swapped)
    4. end the compare if current 'hit' rightborder

    quick sort pick the last element in array and apply logic above, and swap the first element in 'larger group ' with the element we picket.
    and recursion makes quick sort 
*/

let stepCount = 0
const quickSort = (arr: number[], left: number, right: number) => {
  if (left >= right) {
    return
  }
  //TODO: instead of pick the most right, pick a random than swap it to the back, after the sort put it back to the first in 'bigger' group
  let leftPointer = left - 1
  let rightPointer = right
  const pivot = arr[right]
  for (let i = left; i < rightPointer - 1; i++) {
    if (arr[i] < pivot) {
      ;[arr[i], arr[leftPointer + 1]] = [arr[leftPointer + 1], arr[i]]
      leftPointer++
    }
    if (arr[i] > pivot) {
      ;[arr[i], arr[rightPointer - 1]] = [arr[rightPointer - 1], arr[i]]
      rightPointer--
    }
  }
  //switch
  ;[arr[right], arr[rightPointer]] = [arr[rightPointer], arr[right]]
  console.log(`Step ${stepCount++}: | ${test_data} |`)

  quickSort(arr, left, leftPointer)
  quickSort(arr, rightPointer, right)
}

quickSort(test_data, 0, test_data.length - 1)
console.log('Final: ' + test_data)
