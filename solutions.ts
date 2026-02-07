class Solution {
  static containsDuplicate(nums: number[]): boolean {
    const seen: { [key: number]: boolean } = {};

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];

      if (num in seen) {
        return true;
      }
      seen[num] = true;
    }
    return false;
  }

  static intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set<number>(nums1);
    const set2 = new Set<number>(nums2);

    const intersectionArray: number[] = [...set1].filter((x) => set2.has(x));
    return intersectionArray;
  }

  static wordPattern(pattern: string, str: string): boolean {
    const words: string[] = str.split(" ");
    if (pattern.length !== words.length) {
      return false;
    }
    const letterToWord = new Map<string, string>();
    const wordToLetter = new Map<string, string>();

    for (let i = 0; i < pattern.length; i++) {
      let lW = pattern[i];
      let wL = words[i];

      if (letterToWord.has(lW)) {
        if (letterToWord.get(lW) !== wL) {
          return false;
        }
      }
      if (wordToLetter.has(wL)) {
        if (wordToLetter.get(wL) !== lW) {
          return false;
        }
      }
      wordToLetter.set(wL, lW);
      letterToWord.set(lW, wL);
    }

    return true;
  }

  static isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      while (left < right && !Solution.isAlphaNumeric(s[left])) {
        left++;
      }
      while (left < right && !Solution.isAlphaNumeric(s[right])) {
        right--;
      }
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  static isAlphaNumeric(char: string): boolean {
    return (
      (char >= "A" && char <= "Z") ||
      (char >= "a" && char <= "z") ||
      (char >= "0" && char <= "9")
    );
  }

  static removeDuplicates(nums: number[]): number[] | number {
    if (nums.length === 0) {
      return 0;
    }

    let write = 1;
    for (let read = 1; read < nums.length; read++) {
      if (nums[read] !== nums[write - 1]) {
        nums[write] = nums[read];
        write++;
      }
    }
    return write;
  }

  static maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
      let price = prices[i];
      if (price < minPrice) {
        minPrice = price;
      } else {
        let profit = price - minPrice;
        if (profit > maxProfit) {
          maxProfit = profit;
        }
      }
    }

    return maxProfit;
  }

  minSubArrayLen(target: number, nums: number[]): number {
    let minLength = Infinity;
    let sum = 0;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
      sum += nums[right];
      while (sum >= target) {
        minLength = Math.min(minLength, right - left + 1);
        sum -= nums[left];
        left++;
      }
    }
    return minLength === Infinity ? 0 : minLength;
  }

  majorityElement(nums: number[]): number {
    let candidate: number | null = null;
    let count = 0;
    for (let num = 0; num < nums.length; num++) {
      if (count === 0) {
        candidate = nums[num];
        count = 1;
      } else if (nums[num] === candidate) {
        count++;
      } else {
        count--;
      }
    }
    return candidate!;
  }


  isPalindrome(s: number): boolean {
    if(Math.sign(s) === -1)
        return false

    const str = String(s)
    
    let left: number = 0;
    let right: number = str.length - 1 

    while (left < right) {
        if (str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
}



}

  

export { Solution };
