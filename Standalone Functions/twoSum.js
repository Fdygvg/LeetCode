/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    console.log("The Length Of Your Array = " + nums.length + "\n" + "The Target = " + target)
    const seen = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        const complement = target - num;
        if (seen[complement] !== undefined) {
            return [seen[complement], i]

        }
        seen[num] = i
    }
    return []
};

const result = twoSum([2, 7, 11, 15], 9)
console.log(result)