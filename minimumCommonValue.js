// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

 

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:

// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.
 

// easy, hashtable section, 50% acceptance

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let commonValues = [];
    let count1 = new Set();
    let count2 = new Set();
    for (let i = 0; i<nums1.length; i++) {
        count1.add(nums1[i])
    }
    for (let i = 0; i<nums2.length; i++) {
        count2.add(nums2[i])
    }
    for (let value of count1) {
        if (count2.has(value)) {
            commonValues.push(value)
        }
    }
    for (let value of count2) {
        if (count1.has(value)) {
            commonValues.push(value)
        }
    }
    if (commonValues.length) {
       return Math.min(...commonValues) 
    } else {
        return -1
    }
    
};