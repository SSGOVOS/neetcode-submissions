class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        my_dict = {}

        for word in strs:
            sorted_w = "".join(sorted(word))
            if sorted_w not in my_dict:
                my_dict[sorted_w] = []
            my_dict[sorted_w].append(word)
        
        return list(my_dict.values())