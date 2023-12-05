// Variables for the password
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "}", "|", "~", "[", "]"];


// Collection of prompts for the user, to be executed by the generatePassword function 
function getPrompts() {
  var characterLength = parseInt(
    prompt('How many characters would you like your password to contain?')
  );
  // Check to see if user length entry is a number
  if (Number.isNaN(characterLength)) {
    alert('Password length must be provided as a number');
    return null;
  }
  // Check if the password is at least 8 chars long
  if (characterLength < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  // Check if the password is less than 128 characters
  if (characterLength > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }

//  var characterLength = parseInt(prompt("Please enter the desired password length. It must be between 8-128 characters."), 10);

// if (characterLength < 8 || characterLength > 128 || Number.isNaN(characterLength)) {
//   alert("Please select a numerical value, between 8-128 characters.");
//   return null;
// } 

var hasLowerCase = confirm("Click OKAY to include lowercase characters.");

var hasUpperCase = confirm("Click OKAY to include uppercase characters.");

var hasNumbers = confirm("Click OKAY to include numeric characters.");

var hasSpecialChar = confirm("Click OKAY to include special characters.");


// If nothing is selected, ends the function and returns to regenerating the password again
if (
  hasLowerCase === false &&
  hasUpperCase === false &&
  hasNumbers === false &&
  hasSpecialChar === false
) {
    alert("At least 1 character type must be selected in order to generate password.")
    return null;
}

// Store user choices in an object and return it, so getPrompts() holds the value
var userChoices = {
  characterLength: characterLength,
  hasLowerCase: hasLowerCase,
  hasUpperCase: hasUpperCase,
  hasNumbers: hasNumbers,
  hasSpecialChar: hasSpecialChar
};

return userChoices;
}

console.log(getPrompts);

// Function to generate random numbers, this will be used repeatedly further down
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate the password
function generatePassword() {

  // User options
  var options = getPrompts();

  // Array to store the result
  var result = [];

  // Array to store the potenital characters to be included in the password
  var possibleCharacters = [];

  // Array to store a singular character from each character set selected, in order to guarentee all selections are met
  var guarenteedCharacter = [];

  // If no options exist, return null
  if (!options) return null;

  // Linking possible/guarenteed characters to the original character variables
  if (options.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guarenteedCharacter.push(getRandom(lowerCase));
  }

  if (options.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guarenteedCharacter.push(getRandom(upperCase));
  }

  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guarenteedCharacter.push(getRandom(numbers));
  }

  if (options.hasSpecialChar) {
    possibleCharacters = possibleCharacters.concat(specialChar);
    guarenteedCharacter.push(getRandom(specialChar));
  }

// Loop over the length of the password, selecting random indicies from the possible characters 
for (var i = 0; i < options.characterLength; i++) {
  var singularCharacter = getRandom(possibleCharacters);
  result.push(singularCharacter);
}

// Ensure 1 character from the selected section is definitely included
for (var i = 0; i < guarenteedCharacter.characterLength; i++) {
  result[i] = guarenteedCharacter[i];
}

// Transform into a string to pass through into writePassword()
return result.join('');
}


// Once the password has been generated, writePassword function will display the value in the #password input (text-area card)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}


// Targets "Generate" button in HTML
var generateBtn = document.querySelector("#generate");
// Event listener allows our code to respond once the generate button has been clicked, upon which the write password function will be activated
generateBtn.addEventListener("click", writePassword);












// var result = [];
// var possibleCharacters = [];
// var guarenteedCharacters = [];






//   if (characterLength < 8 || characterLength > 128 || isNaN(characterLength)) {
//     alert("Please select a numerical value, between 8-128 characters.");
//     return null;
//   } 

// if (confirm("Click OKAY to include lowercase characters.")) {
//   userChoices = userChoices.concat(lowerCase);
// }

// if (confirm("Click OKAY to include uppercase characters.")) {
//   userChoices = userChoices.concat(upperCase);
// }

// if (confirm("Click OKAY to include numbers characters.")) {
//   userChoices = userChoices.concat(numbers);
// }

// if (confirm("Click OKAY to include special characters.")) {
//   userChoices = userChoices.concat(specialCharacters);
// }
// return true;



// If at least one prompt is selected it should return true
// If its true then we can set up a variable that its done correctly 

// }

// Function for getting a random element from an array






// 4) Password to generate based on the prompts selected, action with the getprompts() function
// function generatePassword() {
//   getPrompts();
    // 1. call getPrompts function

    // array to store the result

    // array to store possible characters

    // array to store guarenteed characters

    // check if options exisst

    // add selected characters to an array of possible characters

    // loop over the passwords length selecting random indicies from the possible characters

    // mix in at least one of the guarenteed chars in the result

    // loop over the passweords length, selecting random indicies from the possible

// 2. Ensure what user inputs is valid 
// 3. Generate password based on criteria

// 4. Display generated password on page
//   return "Generated password will go here";
// }



// 4) Once the password has been generated, writePassword function will display the value in the #password input (text-area card)
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   // dont understand what this line means... what value?
//   passwordText.value = password;
// }