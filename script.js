// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");


// The big dawg function. Generates a random password utilizing the user's input.
const generatePassword = () => {


  //VARIABLE LIBRARY
  const YesVars = []
  const randomYesChars = []


  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+","`", "-", "=", "[", "]", "{", "}", "|", ";", ":", "<", ">","/","?"];
  
  // how many characters will be generated
  var userInput = prompt("How many characters would you like? Between 8 and 128");

    if (userInput === null){
      alert("please input a value")
      return
      }
    
      var passwordLength = parseInt(userInput)
      

    if (passwordLength <= 8 || passwordLength >= 128){
      window.alert("Please input a value between 8 and 128")
      return 
      }
    
    // Which character types will be generated
    var yesNoQ1 = prompt("Do you want lowercase letters? yes/no ");
      if (yesNoQ1 === "yes" ) {
          YesVars.push(...lowercaseLetters)}
      
    var yesNoQ2 = prompt("Do you want uppercase letters? yes/no ");
      if (yesNoQ2 === "yes" ) {
          YesVars.push(...uppercaseLetters)}

    var yesNoQ3 = prompt("Do you want numbers? yes/no ");
      if (yesNoQ3 === "yes" ) {
          YesVars.push(...numericChars)}

    var yesNoQ4 = prompt("Do you want special characters? yes/no ");
      if (yesNoQ4 === "yes" ) {
          YesVars.push(...specialChar)}
    
    

    //Shuffles the YesVars array for more radom! By god do not touch this code     
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }

shuffleArray(YesVars)
 
// loop through the YesVars array to generate the password
  while (randomYesChars.length < passwordLength){
    const randomchar = Math.floor(Math.random() * YesVars.length);
    const randomYesChar = YesVars[randomchar];
      randomYesChars.push(randomYesChar)
      //write the agreed upon characters into the password
      password.value = randomYesChars.join("");   
console.log(randomYesChars)
}
};


    
// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  generatePassword()
});



