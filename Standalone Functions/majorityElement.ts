function majorityElement(nums: number[]): number {
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

export{majorityElement}