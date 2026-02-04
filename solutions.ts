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
}

export { }