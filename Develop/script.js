// Assignment code here
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Function to generate a password based on user criteria
function generatePassword() {
  var passwordLength = prompt("Enter the desired length of your password (between 8 and 128 characters):");
  passwordLength = parseInt(passwordLength);

  // Validate the password length
  if (passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength)) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "Click on the Generate Password Button to attempt the password generation again.";
  }

  // Prompt for character types to include
  var includeLowercase = prompt("Include lowercase characters? (Yes/No)").toLowerCase() === "yes";
  var includeUppercase = prompt("Include uppercase characters? (Yes/No)").toLowerCase() === "yes";
  var includeNumeric = prompt("Include numeric characters? (Yes/No)").toLowerCase() === "yes";
  var includeSpecial = prompt("Include special characters? (Yes/No)").toLowerCase() === "yes";

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You have to select Yes for at leaset one of the the following character types: Lowercase, Uppercase, Numerics and/or Special Characters.");
    return "Click on the Generate Password Button to attempt the password generation again.";
  }

  // Generate the password based on selected criteria
  var availableChars = "";
  if (includeLowercase) {
    availableChars += lowercaseChars;
  }
  if (includeUppercase) {
    availableChars += uppercaseChars;
  }
  if (includeNumeric) {
    availableChars += numericChars;
  }
  if (includeSpecial) {
    availableChars += specialChars;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars.charAt(randomIndex);
  }

  return password;
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