class Solution {
  twoSum(nums, target) {
    const seen = {};

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];

      const complement = target - num;
      if (seen[complement] !== undefined) {
        return [seen[complement], i];
      }
      seen[num] = i;
    }
    return [];
  }

  groupAnagrams(strs) {
    const signatures = {};

    for (let i = 0; i < strs.length; i++) {
      const raw = strs[i];
      const sorted = strs[i].split("").sort().join("");

      if (signatures[sorted] !== undefined) {
        signatures[sorted].push(raw);
      } else {
        signatures[sorted] = [raw];
      }
    }
    return Object.values(signatures);
  }

  isIsomorphic(s, t) {
    let mapS = new Map();
    let mapT = new Map();

    for (let i = 0; i < s.length; i++) {
      let chS = s[i];
      let chT = t[i];
      if (mapS.has(chS)) {
        if (mapS.get(chS) !== chT) {
          return false;
        }
      }
      if (mapT.has(chT)) {
        if (mapT.get(chT) !== chS) {
          return false;
        }
      }
      mapS.set(chS, chT);
      mapT.set(chT, chS);
    }
    return true;
  }

  firstUniqChar(str) {
    const map = new Map();

    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      if (map.has(char)) {
        map.get(char).count += 1;
      } else {
        map.set(char, { count: 1, index: i });
      }
    }

    let firstUniqueIndex = Infinity;
    for (let [char, info] of map) {
      if (info.count === 1 && info.index < firstUniqueIndex) {
        firstUniqueIndex = info.index;
      }
    }
    return firstUniqueIndex === Infinity ? -1 : firstUniqueIndex;
  }
  merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
      if (i >= 0 && nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
  };

  reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;

      left++;
      right--;
    }
  };
}
