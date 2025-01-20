/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 */

// @lc code=start
function numIslands(grid: string[][]): number {
    //1. loop through entire array (2D)
    //2. if 1 detected?
    //3. find adjecent 1's until the 'island' complete, record 'island' corrdentoor in another 2D array
    //4. keep looping, skip if is already record in the island array
    //5. when it finished, show how many islands founded
    enum Direction {
        TOP = "top",
        LEFT = "left",
        RIGHT = "right",
        BOTTOM = "bottom",
        ORIGIN = "origin"
    }
    type Coordinate = {
        rowIndex: number
        colIndex: number
    }
    let islandCount = 0
    const matrixN = grid[0].length
    const islandArr = new Map()
    const calculateSerierNumber = (rowIndex, colIndex) => {
        return rowIndex * matrixN + colIndex
    }
    const checkRestDirection = ({ from, node }: {
        from: Direction,
        node: Coordinate
    }) => {
        //check
        const { rowIndex, colIndex } = node
        //top
        const topCoordinate: Coordinate = {
            rowIndex: rowIndex - 1,
            colIndex: colIndex
        }
        const topSerierNumber = calculateSerierNumber(topCoordinate.rowIndex, topCoordinate.colIndex)
        const topNode = grid[topCoordinate.rowIndex]?.[topCoordinate.colIndex]
        //bot
        const botCoordinate = {
            rowIndex: rowIndex + 1,
            colIndex: colIndex
        }
        const botSerierNumber = calculateSerierNumber(botCoordinate.rowIndex, botCoordinate.colIndex)
        const botNode = grid[botCoordinate.rowIndex]?.[botCoordinate.colIndex]
        //left
        const leftCoordinate = {
            rowIndex: rowIndex,
            colIndex: colIndex - 1
        }
        const leftSerierNumber = calculateSerierNumber(leftCoordinate.rowIndex, leftCoordinate.colIndex)
        const leftNode = grid[leftCoordinate.rowIndex]?.[leftCoordinate.colIndex]
        //right
        const rightCoordinate = {
            rowIndex: rowIndex,
            colIndex: colIndex + 1
        }
        const rightSerierNumber = calculateSerierNumber(rightCoordinate.rowIndex, rightCoordinate.colIndex)
        const rightNode = grid[rightCoordinate.rowIndex]?.[rightCoordinate.colIndex]

        if (topNode === "1" && from !== Direction.TOP && !islandArr.has(topSerierNumber)) {
            islandArr.set(topSerierNumber, 1)
            checkRestDirection({
                from: Direction.BOTTOM,
                node: topCoordinate
            })
        }
        if (botNode === "1" && from !== Direction.BOTTOM && !islandArr.has(botSerierNumber)) {
            islandArr.set(botSerierNumber, 1)
            checkRestDirection({
                from: Direction.TOP,
                node: botCoordinate
            })
        }
        if (leftNode === "1" && from !== Direction.LEFT && !islandArr.has(leftSerierNumber)) {
            islandArr.set(leftSerierNumber, 1)
            checkRestDirection({
                from: Direction.RIGHT,
                node: leftCoordinate
            })
        }
        if (rightNode === "1" && from !== Direction.RIGHT && !islandArr.has(rightSerierNumber)) {
            islandArr.set(rightSerierNumber, 1)
            checkRestDirection({
                from: Direction.LEFT,
                node: rightCoordinate
            })
        }

    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === "1") {
                //start island scan
                const serierNum = calculateSerierNumber(row, col)
                if (!islandArr.has(serierNum)) {
                    islandCount += 1
                    islandArr.set(serierNum, 1)
                    checkRestDirection({
                        from: Direction.ORIGIN,
                        node: { rowIndex: row, colIndex: col }
                    })
                }
            }
        }
    }

    return islandCount
};
// @lc code=end

