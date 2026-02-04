    def containsNearByDuplicate(self, nums: int, k: int) ->  bool:
        seen = {}
        for i in range(len(nums)):
            current = nums[i]
            if current in seen:
                if i - seen[current] <= k:
                    return True

            seen[current] = i
        return False