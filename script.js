var generateBtn = document.querySelector("#generate");

//variables
const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const numericalChar = "0123456789";
const specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

//pw generator function
funtion generatePassword() {
  //empty strings to hold password
  var createdPassword='';
  var passwordChar='';

  //user prompts
  var lengthPW = parseInt(prompt("Pick between 8 and 128 characters for your password."))
  if (lengthPW < 8 || lengthPW > 128) {
      alert("Password must be between 8 and 128 characters.")
      return '';
  }

  var checkLowerCase = confirm("Would you like to include lowercase?");
  var checkUppercase = confirm("Would you like to include uppercase?");
  var checkNumbers = confirm("Would you like to include numbers?");
  var checkSymbols = confirm("Would you like to include symbols?");
  
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
