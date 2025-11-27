/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let b = {
        '{' : '}',
        '[': ']',
        '(':')' 
    }
    for (let i =0; i<s.length; i++){
        let c = s[i];
        if(b[c]){
            stack.push(b[c])
        }
        else{
            if(stack.pop() !== c){
                return false;
            }
        }
    }
    return stack.length ===0;
};