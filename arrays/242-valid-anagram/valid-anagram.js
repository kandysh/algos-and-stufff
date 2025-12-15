/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    let c = Array(26).fill(0); // constant space

    for (let i = 0 ; i<s.length; i++){
       c[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]+=1
       c[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]-=1
    }
   return c.every(x => x===0)
};