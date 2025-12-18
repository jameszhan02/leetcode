/*
 * @lc app=leetcode id=133 lang=typescript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */

function cloneGraph(node: _Node | null): _Node | null {
	if(!node) return null
    // save visted node index and deep clone here
    const vistedMap = new Map<number, _Node>()

    //1. when ever we meet a node then create a new node for it with only val, neighbors will be added only current node is in another node instance.
    //2. recurcively
    const deepCopiedNode = graphTraversal(node, vistedMap)

    return deepCopiedNode
};
const graphTraversal = (node: _Node, vistedMap: Map<number, _Node>): _Node => {
    //create a new Node with current value.
    const newNode = new _Node(node.val)
    vistedMap.set(newNode.val, newNode)
    for(let idx = 0; idx < node.neighbors.length; idx++){
        const currentNeighbor = node.neighbors[idx]
        if(!vistedMap.has(currentNeighbor.val)){
            const deepCopiedNode = graphTraversal(currentNeighbor, vistedMap)
            newNode.neighbors.push(deepCopiedNode)
        }else{
            newNode.neighbors.push(vistedMap.get(currentNeighbor.val))
        }
    }
    return newNode
}
// @lc code=end

