//Sets variable generateBtn and prompts the browser to run script once Generate Password button is clicked
var generateBtn = document.querySelector("#generate");

//Sets empty array first, then defines arrays for lower/upper/num/special
var characterArray = []
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArray =  ["0","1","2","3","4","5", "6", "7", "8", "9"]
var specialCharacterArray =  ["@","%","+","\\","/","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_","."];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword()  {
//Recalls empty characterArray
  characterArray = [];
//Prompt user for amount of characters in their password  
  var length = prompt("How many characters would you like in your password? Between 8-128");
//Ask user to confirm if lowerCaseArray is to be added to characterArray
//If lowercase is true, lowercCse array included in password, if false skip and continue   
  var lowerCase = confirm("Would you like to include a lowercase letter?");
    if(lowerCase) {
      characterArray = (characterArray.concat(lowerCaseArray));
  }
//Ask user to confirm if upperCaseArray is to be added to characterArray
//If uppercase is true, upperCaseArray included in password, if false skip and continue  
  var upperCase = confirm("Would you like to include and uppercase letter?");
    if(upperCase) {
    characterArray = (characterArray.concat(upperCaseArray));
  }
//Ask user to confirm if numberArray is to be added to characterArray
//If number is true, numberArray included in password, if false skip and continue
  var number = confirm("Would you like to include a number?");
    if(number) {
    characterArray = (characterArray.concat(numberArray));
  }
//Ask user to confirm if specialCharacterArray is to be added to characterArray
//If special is true, specialCharacterArray included in password, if false skip and continue
  var special = confirm("Would you like to include a special character?");
    if(special) {
    characterArray = (characterArray.concat(specialCharacterArray));
  }
//Logs characterArray to console
//Randomizes characterArray, sets password and returns password to text area  
  console.log(characterArray)
  var password = "";
    for (var i = 0; i < length; i++) {
  password += characterArray[Math.floor(Math.random()*characterArray.length)];
  }
      
      
  return password;           
}


//Event listener to generate button
generateBtn.addEventListener("click", writePassword);









































