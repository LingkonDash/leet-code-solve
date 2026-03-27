/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  //hash map obj,
  const obj = {};
  
  for(let i = 0; i < nums.length; i++) {

    // works if the hashmap has a value and the index is 0;
    if(obj[target - nums[i]] === 0) return [obj[target - nums[i]], i];

    // retuns is the value is allready in out has map.
    if(obj[target - nums[i]]) return [obj[target - nums[i]], i];
    
    // storing value in has map 
    obj[nums[i]] = i;

  }
};


const result = twoSum([2,7,11,15], 9);

console.log(result);
console.log(twoSum([3,2,4], 6));

