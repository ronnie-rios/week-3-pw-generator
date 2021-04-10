var generateBtn = document.querySelector("#generate");

//variables
const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const numericalChar = "0123456789";
const specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

//pw generator function
function generatePassword() {
  //empty strings to hold password
  var createdPassword='';
  var passwordChar='';

  //user prompts
  //pw length prompt
  var lengthPW = parseInt(prompt("Pick between 8 and 128 characters for your password."))
  if (lengthPW < 8 || lengthPW > 128) {
      alert("Password must be between 8 and 128 characters.")
      return '';
  }
  //check if user wants upper, lower, numbers, or symbols in pw
  var checkLowerCase = confirm("Would you like to include lowercase?");
  var checkUppercase = confirm("Would you like to include uppercase?");
  var checkNumbers = confirm("Would you like to include numbers?");
  var checkSymbols = confirm("Would you like to include symbols?");
  
  //if statement to check if user has selected at least 1 value for pw
  if (!(checkUppercase||checkLowerCase||checkNumbers||checkSymbols)) {
    alert("Your password must contain at least one uppercase, lowercase, number, or symbol characters");
   return;
  }
  //if statements to add userinput to random pw
  if (checkLowerCase) {
    passwordChar += lowercaseChar;
  }

  if (checkUppercase) {
      passwordChar +=uppercaseChar;
    }

  if (checkNumbers) {
      passwordChar +=numericalChar;
    }

  if (checkSymbols) {
      passwordChar += specialChar;
  }
  //for loop to randomly generate characters for pw
  for (var i = 0; i < lengthPW; i++) {
    createdPassword += passwordChar[Math.floor(Math.random()*passwordChar.length)];
  }
  return createdPassword;

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
