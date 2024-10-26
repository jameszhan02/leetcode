/*
[Tree]: 
    if in an array, they lay on each other as a tree structure
 - one node [i] to his left child index is 2 * [i] + 1 | right child index is 2 * [i] + 2
 - left or right child node [i] to his father node is ([i] - 1) >> 1

[Heap]: 
    heap is a special tree structure
    - Max heap each 'father' node bigger/equal than its child nodes
    - Min heap each 'father' node smaller/equal than its child node
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
let isEnd = false

const sortMaxHeap = (arr: number[] ,currentIndex: number) => {
    const currentFatherIndex = (currentIndex - 1) >> 1
    if (arr[currentIndex] > arr[currentFatherIndex]) {
        [arr[currentIndex], arr[currentFatherIndex]] = [arr[currentFatherIndex], arr[currentIndex]]
        sortMaxHeap(arr, currentFatherIndex)
    }else{
        return
    }

}

const main = async () => {
    while (!isEnd) {
        const answer = await askQuestion("Enter a inteager: ")
        if (answer === 'end') {
            isEnd = true
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

main()

