function isPalindrome(s: number): boolean {
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

