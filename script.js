// Variables for the password
var characterLength = [];
var userChoice = [];

const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "}", "|", "~", "[", "]"];


// 1) Assignment Code - linking to HTML button so an event listener can be added to it?
var generateBtn = document.querySelector("#generate");

// 2) Add event listener to generate button - initiates the JS code from the action of being clicked?
generateBtn.addEventListener("click", writePassword);

// 3) Prompts for the user to choose from after generate button has been pressed
function getPrompts() {
  characterLength = prompt("Please enter the desired password length. It must be between 8-128 characters." );
}

// 4) Password to generate based on the prompts selected in the above function, action with the getprompts() function
function generatePassword() {
}

// 5) Once the passwords been generated, write password into the #password input in the HTML
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}