class Solution:
    #  * Array Pattern: Use Constant Array to store all possible alphabets(a-z)
    #  * Time: O(n), Space: O(n)

    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        count = [0] * 26

        for ch_s, ch_t in zip(s, t):
            count[ord(ch_s) - ord('a')] += 1
            count[ord(ch_t) - ord('a')] -= 1

        return all(c == 0 for c in count)

    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        seen = {}
        for i in range(len(nums)):
            current = nums[i]
            if current in seen:
                if i - seen[current] <= k:
                    return True

            seen[current] = i
        return False

    def get_next(self, num: int) -> int:
        total_sum = 0
        while num > 0:
            digit = num % 10
            total_sum += digit ** 2
            num = num // 10
        return total_sum

    def isHappy(self, n: int) -> bool:
        slow = n
        fast = self.get_next(n)

        while fast != 1 and slow != fast:
            slow = self.get_next(slow)
            fast = self.get_next(self.get_next(fast))

        return fast == 1

    def twoSum(self, numbers: list[int], target: int) -> list[int]:
        left = 0
        right = len(numbers) - 1

        while left < right:
            current_sum = numbers[left] + numbers[right]

            if current_sum == target:
                return [left + 1, right + 1]
            elif current_sum < target:
                left += 1
            else:
                right -= 1

        return []

    def moveZeroes(self, nums: list[int]) -> list[int]:
        write = 0

        for read in range(len(nums)):
            if nums[read] != 0:
                nums[write] = nums[read]
                write += 1
        for i in range(write, len(nums)):
            nums[i] = 0

    def maxSubArray(self, nums: list[int]) -> int:
        max_sum = nums[0]
        current_sum = nums[0]

        for i in range(1, len(nums)):
            num = nums[i]

            current_sum = max(num, current_sum + num)
            max_sum = max(max_sum, current_sum)
        return max_sum

    def plusOne(self, digits: list[int]) -> list[int]:
        return list (map(int, (str(int("".join(map(str, digits)))+1))))

    def rotate(self, nums: list[int], k: int):
        n = len(nums)
        k %= n

        def reverse(start, end):
            while start < end:
                nums[start], nums[end] = nums[end], nums[start]
                start += 1
                end -= 1

        reverse(0, n-1)
        reverse(0, k-1)
        reverse(k, n-1)
        
    def hammingWeight(self, n: int) -> int:
        count = 0
        while n:
            count += n & 1
            n >>= 1
        return count

