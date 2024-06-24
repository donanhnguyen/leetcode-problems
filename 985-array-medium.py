# You are given an integer array nums and an array queries where queries[i] = [vali, indexi].

# For each query i, first, apply nums[indexi] = nums[indexi] + vali, then print the sum of the even values of nums.

# Return an integer array answer where answer[i] is the answer to the ith query.

 

# Example 1:

# Input: nums = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
# Output: [8,6,2,4]
# Explanation: At the beginning, the array is [1,2,3,4].
# After adding 1 to nums[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
# After adding -3 to nums[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
# After adding -4 to nums[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
# After adding 2 to nums[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.
# Example 2:

# Input: nums = [1], queries = [[4,0]]
# Output: [0]


class Solution(object):
    def sumEvenAfterQueries(self, nums, queries):
        result = []
        allEvens = [num for num in nums if num % 2 == 0]
        runningSum = sum(allEvens)
        for i, query in enumerate(queries):
            val = query[0]
            index = query[1]
            previous = nums[index]
            nums[index] = nums[index] + val
            current = nums[index]
            if previous % 2 == 0:
                if current % 2 == 0:
                    if current > previous:
                        runningSum += current - previous
                    elif previous > current:
                        runningSum -= previous - current
                else:
                    runningSum -= previous
            else:
                if current % 2 == 0:
                    runningSum += current
            result.append(runningSum)
        return result
        