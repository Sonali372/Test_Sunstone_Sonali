function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/\s+/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome("Race car")); 
console.log(isPalindrome("Hello"));
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("No lemon no melon"));

