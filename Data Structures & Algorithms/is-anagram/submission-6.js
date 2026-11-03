class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const revS = s.split('').sort().join('')
        const revT = t.split('').sort().join('')
        if(revS === revT)
            return true
        else
            return false
    }
}
