// Given an integer x, return true if x is a palindrome, and false otherwise. 

// Example 

// Input: x = -121 
// Output: false 
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore, it is not a palindrome. 

let word1 = "mum"
let word2 ="-121"

if (word2=== word2.split('').reverse().join('')){
    console.log("palindrome");
} else{
    console.log("not a palindrome");
}

