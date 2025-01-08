/*
[Tree]: 
    if in an array, they lay on each other as a tree structure
 - one node [i] to his left child index is 2 * [i] + 1 | right child index is 2 * [i] + 2
 - left or right child node [i] to his father node is ([i] - 1) >> 1

[Heap]: 
    heap is a special tree structure
    - Max heap each 'father' node bigger/equal than its child nodes
    - Min heap each 'father' node smaller/equal than its child node

[Heap sort] 
 - after completely made arry to heap, swap first and last element.
 - then do heapify form index 
 - util heapsize 1
 - then the entire array been sorted after this process
*/

import readline from "readline";


function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

const fake_heap_data: number[] = []
let currentHeapIndex = 0

const sortMaxHeap = (arr: number[], currentIndex: number) => {
    const currentFatherIndex = (currentIndex - 1) >> 1
    if (arr[currentIndex] > arr[currentFatherIndex]) {
        [arr[currentIndex], arr[currentFatherIndex]] = [arr[currentFatherIndex], arr[currentIndex]]
        sortMaxHeap(arr, currentFatherIndex)
    } else {
        return
    }

}

const complete_heap = (arr: number[]) => {
    let index = 0
    while (index < arr.length) {
        // const currentNum = arr[index]
        sortMaxHeap(arr, index)
        index++
    }
}

const main = async () => {
    while (true) {
        const answer = await askQuestion("Enter a inteager: ")
        if (answer === 'end') {
            break
        }
        const inputNumber = parseInt(answer)
        fake_heap_data[currentHeapIndex] = inputNumber
        sortMaxHeap(fake_heap_data, currentHeapIndex)

        currentHeapIndex++
        console.log(`${inputNumber} push successfully, type 'end' to quit the process`);
        console.log(`Current list: | ${fake_heap_data} | index: ${currentHeapIndex}`);
    }
    console.log(`===== END ===== \n`);
    console.log(`currentHeapIndex: ${currentHeapIndex} | fake_heap_data: ${fake_heap_data}`);
}

//index -TO-> children
const heapify = (arr: number[], index: number) => {
    while (true) {
        const currentLeftNode = (index << 1) + 1
        const currentRightNode = currentLeftNode + 1
        if (currentLeftNode > arr.length) {
            break
        }
        const largerChildIndex = arr[currentLeftNode] > arr[currentRightNode] ? currentLeftNode : currentRightNode
        if (arr[largerChildIndex] > arr[index]) {
            [arr[largerChildIndex], arr[index]] = [arr[index], arr[largerChildIndex]]
        }
        index = largerChildIndex
    }
}

// main()

const random_arr = [1, 8, 9, 3, 4, 5, 6, 0, 9]
// complete_heap(random_arr)
// heapify(random_arr, 0)


// back ward loop with heapify will also create a max heap!!!
for (let index = random_arr.length - 1; index >= 0; index--) {
    heapify(random_arr, index)
}
console.log({random_arr});
