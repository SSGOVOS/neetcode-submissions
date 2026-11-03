class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const myset = new Set();
        for (const c of nums)
        {
            if(myset.has(c))
                return true;
            myset.add(c)
        }
        return false
    }
}
