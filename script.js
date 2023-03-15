// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // call password to generate the new password
  var password = generatePassword();

  // get the password id and put it in passwordText
  var passwordText = document.querySelector("#password");

  // set the generated password to the id to showcase
  passwordText.value = password;
}

function generatePassword()
{
  // prompt user to pick a number between 8-128 for the password length
  var length = prompt("PLEASE PICK A PASSWORD LENGTH FROM 8-128");
  // reprompt and show alert message if length is not between 8-128
  while(length <8 || length > 128)
  {
    // show alert
    alert("PICK A NUMBER BETWEEN 8-128 FOR THE PASSWORD LENGTH");
    // ask the user how many characters they want in the password
    length = prompt("PLEASE PICK A PASSWORD LENGTH FROM 8-128");
  }

  // declaring variables needed
  var lowerCase = false; var upperCase = false; var numbers = false; var specChar = false;
  var arr = [];

  // if the user doses not pick at lease one option the prompts will replay
  while(!lowerCase & !upperCase & !numbers & !specChar)
  {
    // confirm if user wants to include lowercase characters
    lowerCase = confirm("WOULD YOU LIKE TO ADD LOWERCASE LETTERS TO YOUR PASSWORD?");
    // if the user chooses to include lowercase characters
    if(lowerCase)
    {
      // fill the array with lowercase characters using their char chode
      for (let i = 97; i < 123; i++) {arr.push(String.fromCharCode(i));}
    }

    // confirm if the user wants to include uppercase characters
    upperCase = confirm("WOULD YOU LIKE TO ADD UPPERCASE LETTERS TO YOUR PASSWORD?");
    // if the user chooses to include lowercase characters
    if(upperCase)
    {
      // fill the array with uppercase characters using their char code
      for (let i = 65; i < 91; i++) {arr.push(String.fromCharCode(i));}
    }

    // confirm if the user wants to include numbers 
    numbers = confirm("WOULD YOU LIKE TO ADD NUMBERS TO YOUR PASSWORD?");
    // if the user chooses to include numbers
    if(numbers)
    {
      // fill the array with numbers using their char code
      for (let i = 48; i < 58; i++) {arr.push(String.fromCharCode(i));}
    }

    // confirm if the user wants to include special characters 
    specChar = confirm("WOULD YOU LIKE TO ADD SPECIAL CHARACTERS TO YOUR PASSWORD?");
    // if the user chooses to include characters 
    if(specChar)
    {
      // fill the array with characters using their char code
      for (let i = 33; i < 48; i++) {arr.push(String.fromCharCode(i));}
      for (let i = 58; i < 65; i++) {arr.push(String.fromCharCode(i));}
      for (let i = 91; i < 97; i++) {arr.push(String.fromCharCode(i));}
      for (let i = 123; i < 127; i++) {arr.push(String.fromCharCode(i));}
    }

    // show alert if no option has been picked before reprompting
    if(!lowerCase & !upperCase & !numbers & !specChar){
      alert("YOU MUST SELECT AT LEAST ONE OPTION TO GENERATE A PASSWORD");
    }
  }

  // loop through the length of the password 
  var password = "";
  for (let i = 0; i < length; i++) 
  {
      // and populate by picking a random number which will become the index of the character to use form the array
    password += arr[Math.floor(Math.random()*arr.length)];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
