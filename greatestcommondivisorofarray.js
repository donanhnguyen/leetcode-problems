// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

 

// Example 1:

// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.
// Example 2:

// Input: nums = [7,5,6,8,3]
// Output: 1
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 8.
// The greatest common divisor of 3 and 8 is 1.

var findGCD = function(nums) {
    const sortedNums = nums.sort((a,b) => a-b);
    const min = nums[0];
    const max = nums[nums.length-1];
    let gcd = 1;
    for (let i = 1; i<=max ;  i++) {
        if (max % i === 0 && min % i === 0) {
            if (i > gcd) {
                gcd = i;
            }
        }
    }
    return gcd
};

// easy problem