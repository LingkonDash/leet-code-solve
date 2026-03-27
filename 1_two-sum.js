// Problem Description [ https://leetcode.com/problems/two-sum/description/ ] \\


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // Hash map to store value → index pairs
  const obj = {};
  
  for(let i = 0; i < nums.length; i++) {

    // Explicitly handle the case where the stored index is 0 (falsy in JavaScript)
    if(obj[target - nums[i]] === 0) return [obj[target - nums[i]], i];

    // Check if the complement (target - current value) exists in the hash map
    if(obj[target - nums[i]]) return [obj[target - nums[i]], i];
    
    // Store the current value and its index for future lookups
    obj[nums[i]] = i;

  }
};

const result = twoSum([2,7,11,15], 9);

console.log(result);
console.log(twoSum([3,2,4], 6));

