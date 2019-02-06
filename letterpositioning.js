function letterPosition(inputString) {
    var letterPosition = {
    };
  
    function writeKeys(inputString) {
      var inputStringArray = inputString.toLowerCase().split("");
      for (var i = 0; i < inputStringArray.length; i++) {
        if (inputStringArray[i] === " ") {
          // do nothing if the character is a space
        } else if (letterPosition[inputStringArray[i]]) {
            letterPosition[inputStringArray[i]].push(i);
          } else {
            letterPosition[inputStringArray[i]] = [i];
          }
        }
      return letterPosition;
    }
    console.log(writeKeys(inputString));
  }
  
  letterPosition("lighthouse in the house");