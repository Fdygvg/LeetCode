function groupAnagrams(strs) {
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
