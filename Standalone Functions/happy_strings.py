def get_next(num: int) -> int:
        total_sum = 0
        while num > 0:
            digit = num % 10
            total_sum += digit ** 2
            num = num // 10
        return total_sum
def isHappy(n: int) -> bool:
        slow = n
        fast = get_next(n)

        while fast != 1 and slow != fast:
            slow = get_next(slow)
            fast= get_next(get_next(fast))
    
        return fast == 1

result = isHappy(19)
print(result)