// Assignment code here
var specialCharacters = ['!','?','@','#','$','%','&','*','(',')']
var numberChar = ['1','2','3','4','5','6','7','8','9']
var upperCase = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


// function generatePassword
function getRandChar(arr) {
    return arr[Math.floor(Math.random()* arr.length )];
}

function passwordOptions() {
  var length = parseInt(prompt("How many charater would you like in your password? (8-128)")); 

  if (length < 8 || length > 128) {
    alert("Incorrect Length!");
    return null;
  }
  var hasSpecial = confirm('Would you like special characters?');
  var hasUpper = confirm('Would you like Uppercase Characters?');
  var hasLower = confirm('Would you like Lowercase Characters?');
  var hasNumber = confirm('Would you like numbers?');

  var options = {
    length,
    hasSpecial,
    hasNumber,
    hasLower,
    hasUpper
  }
  return options;
}



function generatePassword(){
  var options = passwordOptions();
  var password = [];
  var possibleChar = [];

  if (options.hasSpecial === true) {
    for (let i = 0; i < options.length; i++) {
      var randomChar = getRandChar(specialCharacters);
      possibleChar.push(randomChar);
    }
  }

  if (options.hasNumber === true) {
    for (let i = 0; i < options.length; i++) {
      var randomChar = getRandChar(numberChar);
      possibleChar.push(randomChar);
    }
  }

  if (options.hasUpper === true) {
    for (let i = 0; i < options.length; i++) {
      var randomChar = getRandChar(upperCase);
      possibleChar.push(randomChar);
    }
  }

  if (options.hasLower === true) {
    for (let i = 0; i < options.length; i++) {
      var randomChar = getRandChar(lowerCase);
      possibleChar.push(randomChar);
    }
  }

  for (let i = 0; i < options.length; i++) {
    var randomChar = getRandChar(possibleChar);
    password.push(randomChar);
  }

  return password.join("") // turns the whole array in to one string

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



