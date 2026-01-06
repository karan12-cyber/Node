let word = "madam";

// Convert string to array
let charArray = word.split("");

let start = 0;
let end = word.length - 1;

let isPalindrome = true;

while (start < end) {
    if (charArray[start] !== charArray[end]) {
        isPalindrome = false;
        break;
    }
    start++;
    end--;
}

console.log(isPalindrome);
