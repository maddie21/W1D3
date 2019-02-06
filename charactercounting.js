function countLetters(inputString) {
    var letterCounter = {
    };
  
    function writeKeys(inputString) {
      var inputStringArray = inputString.toLowerCase().split("");
      for (var i = 0; i < inputStringArray.length; i++) {
        if (inputStringArray[i] === " ") {
          // do nothing if the character is a space
        } else if (letterCounter[inputStringArray[i]]) {
            letterCounter[inputStringArray[i]]++;
          } else {
            letterCounter[inputStringArray[i]] = 1;
          }
        }
      return letterCounter;
    }
    console.log(writeKeys(inputString));
  }
  
  
  
  countLetters("lighthouse in the house");
  