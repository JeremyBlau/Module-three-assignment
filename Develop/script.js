// Assignment code here
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Function to generate a password based on user criteria
function generatePassword() {
  let passwordLength = prompt("Enter the desired length of your password (between 8 and 128 characters):");
  passwordLength = parseInt(passwordLength);

  // Validate the password length
  if (passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength)) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "Click on the Generate Password button to attempt the password generation again.";
  }

  // Prompt for character types to include
  const includeLowercase = prompt("Do you wish to include lowercase characters? (Yes/No)").toLowerCase() === "yes";
  const includeUppercase = prompt("Do you wish to include uppercase characters? (Yes/No)").toLowerCase() === "yes";
  const includeNumeric = prompt("Do you wish to include numeric characters? (Yes/No)").toLowerCase() === "yes";
  const includeSpecial = prompt("Do you wish to include special characters? (Yes/No)").toLowerCase() === "yes";

  // Validate at least one character type has been selected by the user selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You have to input Yes for at leaset one the prompts about including a Lowercase, Uppercase, Numerics and/or Special Characters.");
    return "Click on the Generate Password button to attempt the password generation again.";
  }

  // Generate the password based on selected criteria
  let availableChars = "";
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
var generateButton = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);