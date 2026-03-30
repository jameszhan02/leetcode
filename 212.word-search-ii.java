/*
 * @lc app=leetcode id=212 lang=java
 *
 * [212] Word Search II
 */

// @lc code=start

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

class Solution {
    int[][] directions = new int[][] { { 1, 0 }, { 0, 1 }, { -1, 0 }, { 0, -1 } };
    PrefixTree wordTree = new PrefixTree();
    // ⭐⭐⭐ avoid using HashSet
    ArrayList<String> res = new ArrayList<>();

    class PrefixTreeNode {
        HashMap<Character, PrefixTreeNode> children = new HashMap<>();
        boolean isWord = false;
        // ⭐⭐⭐ save word in the node instead of build string dynamiclly.
        String word = "";
    }

    class PrefixTree {
        PrefixTreeNode root = new PrefixTreeNode();

        public void insert(String word) {
            PrefixTreeNode cur = root;
            for (int i = 0; i < word.length(); i++) {
                if (cur.children.containsKey(word.charAt(i))) {
                } else {
                    cur.children.put(word.charAt(i), new PrefixTreeNode());
                }
                cur = cur.children.get(word.charAt(i));

            }
            cur.isWord = true;
            cur.word = word;
        }

        public boolean search(String word) {
            // base on the current tree check if the word is exist on the path.
            PrefixTreeNode currentNode = this.root;
            for (int i = 0; i < word.length(); i++) {
                char curChar = word.charAt(i);
                if (currentNode.children.containsKey(curChar)) {
                    currentNode = currentNode.children.get(curChar);
                } else {
                    return false;
                }
            }
            return true;
        }

    }

    public List<String> findWords(char[][] board, String[] words) {
        // load all first letter in to a hash Set.
        for (int i = 0; i < words.length; i++) {
            wordTree.insert(words[i]);
        }
        int m = board.length;
        int n = board[0].length;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                // check how many word in tree can be build start with current Pos.
                PrefixTreeNode currentNode = wordTree.root;
                wordTreeSearch(board, i, j, currentNode);
            }
        }
        return res;
    }

    private void wordTreeSearch(char[][] board, int m, int n, PrefixTreeNode currentNode) {
        if (m < 0 || n < 0 || m >= board.length || n >= board[0].length) {
            return;
        }
        if (!currentNode.children.containsKey(board[m][n]))
            return;
        if (board[m][n] == '#')
            return;
        PrefixTreeNode newNode = currentNode.children.get(board[m][n]);
        char temp = board[m][n];
        board[m][n] = '#';
        if (newNode.isWord) {
            res.add(newNode.word);
            newNode.isWord = false;
        }
        for (int d = 0; d < directions.length; d++) {
            int newM = m + directions[d][0];
            int newN = n + directions[d][1];
            wordTreeSearch(board, newM, newN, newNode);
        }
        board[m][n] = temp;

        // the key preformance booster. ⭐⭐⭐
        if (newNode.children.isEmpty()) {
            currentNode.children.remove(temp);
        }
    }
}
// @lc code=end
