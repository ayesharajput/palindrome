// var string= prompt("enter word to find");
// var  StringToArr = string.split(''); 
// var arrayReverse = StringToArr .reverse();
// var arrayToString = arrayReverse.join(''); 
// if(string == arrayToString) {
//     console.log('It is a palindrome');
// }
// else {
//     console.log('It is not a palindrome');
// }




var checkPalindromeButton = document.getElementById("checkPalindrome");
var resultElement = document.getElementById("result");
checkPalindromeButton.addEventListener("click", function () {   
var string = document.getElementById("word").value.toLowerCase();   
var  StringToArr = string.split(''); 
var arrayReverse = StringToArr .reverse();
var arrayToString = arrayReverse.join(''); 

 
    if (string === arrayToString) {
        resultElement.textContent = `"${string}" is a palindrome.`;
    } else {
        resultElement.textContent = `"${string}" is not a palindrome.`;
    }
});
