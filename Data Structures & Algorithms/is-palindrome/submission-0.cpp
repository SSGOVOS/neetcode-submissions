class Solution {
public:
    bool isPalindrome(string s) {
        string cleaned;

        for(char& c : s)
        {
            if(isalnum(c))
                cleaned += tolower(c);
        }

        string reverse = cleaned;
        
        std::reverse(reverse.begin() , reverse.end());
        return cleaned == reverse;
    }
};
