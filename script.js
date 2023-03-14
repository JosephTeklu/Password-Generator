// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePasswordAllTypes();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// this function will generate a password if the user selects to have all options in the password (lowercase, uppercase, numeric, specialCharacters)
function generatePasswordAllTypes(){
  // ask the user to pick a length for the password from 8-128, if the pick outside of the range, reprompt
  do{
    var length = prompt("Pick a length from 8 - 128");
  }while(length < 8 | length > 128);

  // ask the user how they want to generate the password and repeat prompts until they have picked at least one option
  do{
    var lowerCase = confirm("Do you want to add lower case characters to the password?");
    var upperCase = confirm("Do you want to add upper case characters to the password?");
    var numbers = confirm("Do you want to add numbers to the password?");
    var specialChars = confirm("Do you want to add special characters to the password?");
  }while(!lowerCase & !upperCase & !specialChars & !numbers);
  
  // create a variable to hold password
  var password = "";

  // loop through the length of the password the user choose
  for (let i = 0; i < length; i++) {
    // call the getLetter() function to get a letter
    var currentLetter = getLetter();

    // if the user chose to exclude certain characters
    // while(lowerCase === false | upperCase === false | numbers === false | specialChars === false)
    // {
    if(currentLetter.charCodeAt() >= 97 & currentLetter.charCodeAt() <= 122 & !lowerCase)
    {
      currentLetter = getLetter();
    }

    if(currentLetter.charCodeAt() >= 65 & currentLetter.charCodeAt() <= 90 & !upperCase){
      currentLetter = getLetter();
    }

    if(currentLetter.charCodeAt() >= 48 & currentLetter.charCodeAt() >= 57 & !numbers){
      currentLetter = getLetter();
    }

    if(currentLetter.charCodeAt() >= 32 & currentLetter.charCodeAt() >= 47 & !specialChars){
      currentLetter = getLetter();
    }

  }

  // return the password
  return password;
}

function getLetter(){
  var randomNumber = Math.floor(Math.random() * (126-32) + 32);
  return String.fromCharCode(randomNumber);
}

function holder(){
  // loop through what would be the length of the password
  for (var i = 0; i < length; i++) {
    // generate a random number that is a whole number from 32-126 which is the range of unicode values of all special/lowercase/uppercase/numeric characters
    var randomNumber = Math.floor(Math.random() * (126-32) + 32);

    // populate the password by getting the character from the randomly generated unicode
    password += String.fromCharCode(randomNumber);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
