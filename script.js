// Variables for the password
var characterLength = [];
var userChoice = [''];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "}", "|", "~", "[", "]"];


// 1) Targets "Generate" button in HTML
var generateBtn = document.querySelector("#generate");
// 2) Event listener allows our code to respond once the generate button has been clicked, upon which the write password function will be activated
generateBtn.addEventListener("click", writePassword);


// 3) Collection of prompts for the user, to be executed by the generatePassword function 
function getPrompts() {
//    the response to this prompt, even if written numerically will be a string, use parseInt to convert to an integer, isNan(variable) used to throw an error if a non-numerical value is entered
  characterLength = parseInt(prompt("Please enter the desired password length. It must be between 8-128 characters."));
//    1. how do I connect it so that it can run
//    1. define that it must be between 8<128 characters
//    2. define that it must be numbers input to be valid
//    3. if characterLength is <8 || >128 || Nan (return error message)
  if (characterLength < 8 || characterLength > 128 || isNaN(characterLength)) {
    return alert("Please select a numerical value, between 8-128 characters.");
  } 
// how do I reset so the questions the prompts keep looping?... comes back as true after asking that question

//    4. Prompt user for lowercase (then repeat for upper, soecial characters and numbers)
//       If all prompts === true

lowerCase = confirm("Click OKAY to include lowercase characters.");
upperCase = confirm("Click OKAY to include uppercase characters.");
numbers = confirm("Click OKAY to include numbers.");
specialCharacters = confirm("Click OKAY to include special characters.");
}




// 4) Password to generate based on the prompts selected, action with the getprompts() function
function generatePassword() {
  getPrompts();
    // 1. call getPrompts function

// 2. Ensure what user inputs is valid 
// 3. Generate password based on criteria

// 4. Display generated password on page
  return "Generated password will go here";
}



// 4) Once the password has been generated, writePassword function will display the value in the #password input (text-area card)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // dont understand what this line means... what value?
  passwordText.value = password;
}