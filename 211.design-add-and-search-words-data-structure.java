
/*
 * @lc app=leetcode id=211 lang=java
 *
 * [211] Design Add and Search Words Data Structure
 */
import java.util.*;

// @lc code=start
class LetterNode {
    HashMap<Character, LetterNode> children = new HashMap<>();
    boolean isWord = false;
}

class WordDictionary {
    private LetterNode root;

    public WordDictionary() {
        this.root = new LetterNode();
    }

    public void addWord(String word) {
        LetterNode cur = this.root;
        for (int i = 0; i < word.length(); i++) {
            if (cur.children.containsKey(word.charAt(i))) {
            } else {
                cur.children.put(word.charAt(i), new LetterNode());
            }
            cur = cur.children.get(word.charAt(i));
        }
        cur.isWord = true;
    }

    public boolean search(String word) {
        LetterNode cur = this.root;
        return dfsSearch(word, cur);
    }

    private boolean dfsSearch(String word, LetterNode currentNode) {
        LetterNode cur = currentNode;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            if (c == '.') {
                for (LetterNode node : cur.children.values()) {
                    if (dfsSearch(word.substring(i + 1), node)) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!cur.children.containsKey(c)) {
                    return false;
                }
                cur = cur.children.get(c);
            }
        }
        return cur.isWord;
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = new WordDictionary();
 * obj.addWord(word);
 * boolean param_2 = obj.search(word);
 */
// @lc code=end
