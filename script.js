// Assignment Code
var readout = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
// Arrays for possible character sets
var lowercaseChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChoices = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"];
var finalArray = [""];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // passwordString to put in values of random characters
  var passwordString = "";
  // Series of prompts requesting criteria
  var passwordLength = parseInt(prompt("Choose length of password between 8 and 128 characters"));
  var useLowercase = confirm("Include lowercase characters in password?");
  var useUppercase = confirm("Include uppercase characters in password?");
  var useNumeric = confirm("Include numbers in password?");
  var useSpecial = confirm("Include special characters in password?");

  // Ensuring that the length of the password is between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) !== "number" || passwordLength === NaN || passwordLength === null) {
    alert("Please submit a number between 8 and 128");
    return location.reload;
  }
  // Ensuring that at least one type of chacter is chosen
  else if (useLowercase === false && useUppercase === false && useNumeric === false && useSpecial === false) {
    alert("Please select at least one type of character");
    return location.reload;
  }
  // Pushing the chosen criteria to one final array
  else {
    if (useLowercase === true) {
      finalArray.push(lowercaseChoices);
    }
    if (useUppercase === true) {
      finalArray.push(uppercaseChoices);
    }
    if (useNumeric === true) {
      finalArray.push(numericChoices);
    }
    if (useSpecial === true) {
      finalArray.push(specialChoices);
    }
  // Attempting to randomize from finalArray and add to passwordString using a for loop
    for(var i=0; i<passwordLength; i++) {
       function randomCharacters() {
         passwordString += finalArray.charAt(Math.floor(Math.random() * passwordLength) + 0);
       }
       randomCharacters(i);
    }

  }
  
}