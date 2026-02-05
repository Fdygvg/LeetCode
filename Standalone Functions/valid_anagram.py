from typing import List

def isAnagram(s: str, t: str) -> bool:
    #  * Array Pattern: Use Constant Array to store all possible alphabets(a-z) 
    #  * Time: O(n), Space: O(n)
    if len(s) != len(t):
        return False
    
    count = [0] * 26
    
    for ch_s, ch_t in zip(s, t):
      count[ord(ch_s) - ord('a')] += 1
      count[ord(ch_t) - ord('a')] -= 1

    return all(c == 0 for c in count)
