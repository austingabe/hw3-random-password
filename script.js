// <!-- Dynamically updated HTML and CSS powered by js
// Click the button to generate password and be given series of prompts for password criteria.
// When prompted for criteria, select which criteria to include in the password.
// When prompted for LENGTH, choose length of at least 8 characters and no more than 128.
// When prompted for chacter types, choose LOWERCASE, UPPERCASE, NUMERIC, and/or SPECIAL CHARACTERS.
// When each prompt is answered, input should be validated & at least one character type should be selected.
// When all prompts are answered, then password is generated.
// Then password is either displayed in ALERT or written to page. -->

// Assignment Code
var readout = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
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
  var useLowercase = confirm("Include lowercase characters in password?");
  var useUppercase = confirm("Include uppercase characters in password?");
  var useNumeric = confirm("Include numbers in password?");
  var useSpecial = confirm("Include special characters in password?");

  if (useLowercase === false && useUppercase === false && useNumeric === false && useSpecial === false) {
    alert("Please select at least one type of character");
    generatePassword();
  }
  else {
    //generate password
  }
  
}