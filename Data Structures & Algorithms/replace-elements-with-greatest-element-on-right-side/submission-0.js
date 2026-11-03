class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let current = arr[0]
        let result=[];
        let r=arr.length 
        for (let i = 0 ; i < arr.length ; i++)
        {
            let current_max_sub_array=Math.max(...arr.slice(i+1,r))
            // console.log(current_max_sub_array)
            result.push(current_max_sub_array)
        }
        result[r-1]=-1
        return result
    }
}
