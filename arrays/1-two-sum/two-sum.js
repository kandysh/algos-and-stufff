/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var diffMap = new Map();
    diffMap.set(target-nums[0], 0);
    for(let i =1; i< nums.length; ++i){
        if (diffMap.has(nums[i])){
            return [diffMap.get(nums[i]), i]
        }
        diffMap.set(target-nums[i], i)
    }
};