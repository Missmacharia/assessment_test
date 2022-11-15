// Given a string s, reverse only all the vowels in the string and return it. 

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once. 

// Example 

// Input: s = "hello" 
// Output: "holle" 
function vowel (str){
    return (str=== "a" || str=== "A" || str=== "e" || str=== "E" ||
    str==="i" || str=== "I" || str === "o" || str=== "O" || str=== "u" || str==="U" )
    function reverseVowels (vowels){
        let x =0;
        let vwls = vowels.split('')
        let lets ="";
        for(let i=0; i<vwls.length; i++){
            if (vowel(vwls[i])){go
                x++
                lets +=vwls[i]
            }
        }
        for (let i = 0; i < vwls.length; i++) {
            if (vowel(str[i])) {
                vwls[i] = vowels[--x];
            }
            return vwls.join('')
        }
        console.log(vwls("hello"));
    }
}