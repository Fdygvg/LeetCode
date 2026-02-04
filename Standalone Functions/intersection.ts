  function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set<number>(nums1);
    const set2 = new Set<number>(nums2);

    const intersectionArray: number[] = [...set1].filter((x) => set2.has(x));
    return intersectionArray;
  }


const solving = intersection([1,2,3,4], [2,3,4,5])