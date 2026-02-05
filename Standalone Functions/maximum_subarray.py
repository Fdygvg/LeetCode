def maxSubArray(nums: list[int]) -> int:
    max_sum = nums[0]
    current_sum = nums[0]

    for i in range(1, len(nums)):
        num = nums[i]

        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum
