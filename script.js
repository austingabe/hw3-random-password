// <!-- Dynamically updated HTML and CSS powered by js
// Click the button to generate password and be given series of prompts for password criteria.
// When prompted for LENGTH, choose length of at least 8 characters and no more than 128.
// When prompted for chacter types, choose LOWERCASE, UPPERCASE, NUMERIC, and/or SPECIAL CHARACTERS.
// When each prompt is answered, input should be validated & at least one character type should be selected.
// When all prompts are answered, then password is generated.
// Then password is either displayed in ALERT or written to page. -->

// Assignment Code
var readout = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var lowercaseChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChoices = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"];
//arrays for possible character sets


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordString = "";
  var passwordLength = parseInt(prompt("Choose length of password between 8 and 128 characters"));
  var useLowercase = confirm("Include lowercase characters in password?");
  var useUppercase = confirm("Include uppercase characters in password?");
  var useNumeric = confirm("Include numbers in password?");
  var useSpecial = confirm("Include special characters in password?");

  if (passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) !== "number" || passwordLength === NaN || passwordLength === null) {
    alert("Please submit a number between 8 and 128");
    return location.reload;
  }

  else if (useLowercase === false && useUppercase === false && useNumeric === false && useSpecial === false) {
    alert("Please select at least one type of character");
    return location.reload;
  }
  
  else {
    if (useLowercase === true) {
      caseArray.push(lowercaseChoices);
    }
    if (useUppercase === true) {
      caseArray.push(uppercaseChoices);
    }
    if (useNumeric === true) {
      caseArray.push(numericChoices);
    }
    if (useSpecial === true) {
      caseArray.push(specialChoices);
    }

    for(var i=0; i<passwordLength; i++) {
      var password = 
      var randomArrayChoice = [lowercaseChoices, uppercaseChoices, numericChoices, specialChoices];

    }
    
  }
  
}