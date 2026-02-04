from typing import List

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
            fast= self.get_next(self.get_next(fast))
    
        return fast == 1
