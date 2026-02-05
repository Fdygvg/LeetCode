function containsDuplicate(nums: number[]) {
    console.log("The Length Of Your Array = " + nums.length + "\n")
    const seen: { [key: number]: boolean } = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]


        if (num in seen) {
            return true
        }
        seen[num] = true
    }
    return false
};

const result: boolean = containsDuplicate([2, 7, 11, 15])
console.log(result)

export { }