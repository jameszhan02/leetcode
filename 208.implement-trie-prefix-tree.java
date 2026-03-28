/*
 * @lc app=leetcode id=208 lang=java
 *
 * [208] Implement Trie (Prefix Tree)
 */

import java.util.*;
// @lc code=start

class TrieNode {
    HashMap<Character, TrieNode> children = new HashMap<>();
    boolean isWord = false;
}

class Trie {
    private TrieNode root;

    public Trie() {
        this.root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode cur = root;
        for (int i = 0; i < word.length(); i++) {
            if (cur.children.containsKey(word.charAt(i))) {
            } else {
                cur.children.put(word.charAt(i), new TrieNode());
            }
            cur = cur.children.get(word.charAt(i));

        }
        cur.isWord = true;
    }

    public boolean search(String word) {
        TrieNode cur = root;
        for (int i = 0; i < word.length(); i++) {
            if (!cur.children.containsKey(word.charAt(i))) {
                return false;
            }
            cur = cur.children.get(word.charAt(i));
        }
        return cur.isWord;
    }

    public boolean startsWith(String prefix) {
        TrieNode cur = root;
        for (int i = 0; i < prefix.length(); i++) {
            if (!cur.children.containsKey(prefix.charAt(i))) {
                return false;
            }
            cur = cur.children.get(prefix.charAt(i));
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */
// @lc code=end
