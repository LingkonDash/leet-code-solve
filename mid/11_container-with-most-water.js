// Problem Description [ https://leetcode.com/problems/container-with-most-water/description/ ] \\


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

  // Tracks the maximum area encountered during iteration
  let maxWater = 0;
  let water = 0;

  // Initialize two pointers at the extreme ends of the array
  let l = 0;
  let r = height.length - 1;

  // Iterate until both pointers meet
  while(l < r) {

    // Compare heights to determine the limiting boundary
    if (height[l] < height[r]) {

      // Compute area using the left boundary as the limiting height
      water = height[l] * (r - l)

      // Move left pointer inward to potentially find a taller boundary
      l++

    } else {

      // Compute area using the right boundary as the limiting height
      water = height[r] * (r - l)

      // Move right pointer inward to potentially find a taller boundary
      r--
    }

    // Update the maximum area if the current value is greater
    if (water > maxWater) {
      maxWater = water
    }

  }
  
  // Return the maximum area found
  return maxWater;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

console.log(maxArea([1,2,1]));
