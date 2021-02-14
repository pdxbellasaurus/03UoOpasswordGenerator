// Assignment Code
var generateBtn = document.querySelector("#generate");
// Criteria variables: length 8 to 128 characters; at least one lowercase, uppercase, numeric, and/or special character
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numeric = "0123456789";
var special = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";
//make arrays 
var lowerCase =lowerCase.split("");
var upperCase = upperCase.split("");
var numeric = numeric.split("");
var special = special.split("");

// Global variable for password

var charChoice = [];
var password = []
var passLength = "";
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
//prompt and validate password length
function validateLength() {
  var passLength = prompt("Enter the password length value, between 8 and 128:");
console.log(passLength);

if (passLength < 8 || passLength > 128 || passLength === "") {
  alert("Invalid password length. Password length must be a value between 8 and 128.");
  validateLength();
} 
}
validateLength()
//Let user know they will have to select one of the following prompts, or at end of prompts for characters
alert("Password must include at least one lowercase, uppercase, numeric, and/or special character. Confirm from the following prompts.");

//Prompts for additional criteria and validate at least one has been chosen
function validateChoice() {
var lowerChoice = confirm("Include lowercase characters?");
var upperChoice = confirm("Include uppercase characters?");
var numChoice = confirm("Include numeric characters?");
var specialChoice = confirm("Include special characters?");

//Add criteria selections to an array to generate random password
  if (lowerChoice) {
    charChoice = charChoice.concat(lowerCase)
  }
  if (upperChoice) {
    charChoice = charChoice.concat(upperCase)
  }
  if (numChoice) {
    charChoice = charChoice.concat(numeric)
  }
  if (specialChoice) {
    charChoice = charChoice.concat(special)
  }
  else {(charChoice == 0);
    alert("Password must include at least one lowercase, uppercase, numeric, and/or special character."); 
    validateChoice();
  }
  }
    validateChoice()

console.log(charChoice)

var randomPass = [];
  // Loop to generate password
  for (var i = 0; i < passLength; i++) {
    var randomPass = [Math.floor(Math.random() * charChoice.length)];
    console.log(randomPass);
  }  
}

generateBtn.addEventListener("click", writePassword);