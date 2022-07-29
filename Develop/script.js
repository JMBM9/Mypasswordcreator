






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min,max){
  if(!max) {
    max = min
    min = 0
  }

  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list [randomInt(list.length)]
}

function generate() {

  while(true) {

  var userInput= window.prompt(" how long would you like your password to be?")

 if (userInput === null){
  return
 }
var passwordLength = parseInt(userInput)

if(isNaN(passwordLength)){
  window.alert("Not a number!")
  }  else if (passwordLength < 8 || passwordLength > 128) {
window.alert("password must be between 8 and 128 characters!")
}  else {
  break
}

}


var userWantsNumbers = window.confirm("would you like to add numbers in your password?")
var userWantsSymbols = window.confirm("would you like to add symbols in your password?")
var userWantsLowercase = window.confirm("would you like to add lowercase in your password?")
var userWantsUppercase = window.confirm("would you like to add uppercase in your password?")

var numberList = [ "0", "1","2","3","4","5","6","7","8","9"]
var symbolsList = ["!","@","#","$","%","^","&","*"]
var lowercaseList = ["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseList =["A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var optionsCart= []

for (var i = 0; i < lowercaseList.length; i++){
  uppercaseList[i] = lowercaseList[i].toUpperCase()
}

if (userWantsNumbers === true){
  optionsCart.push(numberList)
}
if (userWantsSymbols === true){
  optionsCart.push(symbolsList)
}
if (userWantsLowercase === true){
  optionsCart.push(lowercaseList)
}
if (userWantsUppercase === true){
  optionsCart.push(uppercaseList)
}
if (optionsCart.length === 0){
  optionsCart.push(lowercaseList)
}

var generatedPassword=""

for (var i=0 ; i < passwordLength; i++){
  var randomList = getRandomItem(optionsCart)
  var randomChar = getRandomItem(randomList)
  generatedPassword += randomChar
}
return generatedPassword
}





// Write password to the #password input
function writePassword() {
  var password = generate();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
generate();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
