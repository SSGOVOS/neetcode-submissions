class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const newSet = new Set(nums)
        if ( newSet.size == nums.length)
            return false
        else
            return true
    }
}
