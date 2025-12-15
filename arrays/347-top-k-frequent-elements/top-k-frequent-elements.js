/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let m = {}

    for(let i = 0 ;i < nums.length; i++){
        if(!m[nums[i]]){
            m[nums[i]] = 0
        }
        m[nums[i]]+=1;
    }

    const res = Object.entries(m).sort((a,b) => b[1] - a[1])
    return res.slice(0, k).map(x => parseInt(x[0]))
};