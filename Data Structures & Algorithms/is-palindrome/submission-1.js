class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const final = s.toLowerCase().replace(/[^0-9a-z]/g, '')
        let left = 0;
        let right = final.length - 1;
        while(left <= right)
        {
            if(final[left] != final[right])
            return false;
            left++;
            right--;
        }
        return true;
    }
}
