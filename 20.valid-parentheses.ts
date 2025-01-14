/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    //my first approach
    const firstApproach = () => {
        const openChar = ['(', '{', '[']
        const closeChar = [')', '}', ']']
        const stack: string[] = []
        console.log({ s });
        for (let index = 0; index < s.length; index++) {
            if (openChar.includes(s[index])) {
                stack.push(s[index])
            } else {
                const lastOpenChar: string = stack.pop() ?? ''
                const currentOpenIndex = openChar.indexOf(lastOpenChar)
                const currentCloseIndex = closeChar.indexOf(s[index])
                if (currentOpenIndex !== currentCloseIndex) return false
            }
        }
        if (stack.length !== 0) return false
        return true
    }
    //end of my first approach

    //faster solution:
    //basiclly same idea, but better logic
    const betterSolution = () => {
        const stack: string[] = [];

        for (let i = 0; i < s.length; i++) {
            let c = s.charAt(i);
            switch (c) {
                case '(': stack.push(')');
                    break;
                case '[': stack.push(']');
                    break;
                case '{': stack.push('}');
                    break;
                default:
                    if (c !== stack.pop()) {
                        return false;
                    }
            }
        }
        return stack.length === 0;
    }
    return betterSolution()
    //END of better 
};
// @lc code=end

