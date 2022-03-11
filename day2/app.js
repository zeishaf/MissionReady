// const firstLine = 'The exact phrase she used was "There is no way we will get there in time"';
// const secondLine = "Jane's favorite class is English";

// console.log(firstLine)
// console.log(secondLine)

// const firstLine = "The exact phrase she used was \'There is no way we will get there in time\'";
// const secondLine = 'Jane\'s favorite class is English';

// console.log(firstLine)
// console.log(secondLine)

// const line1 = " \"Concentrate all your thoughts "
// const line2 = "upon the work in hand\. The sun\'s rays do not burn " 
// const line3 = "until brought to a focus. \" " 
// const line4 = "\- Alexander Graham Bell"

// console.log(line1 + line2 + line3 + line4)
// console.log(line1.length + line2.length + line3.length + line4.length)

const myMessage = "   The sky is blue today   ";
console.log(myMessage.length);

"   The sky is blue today   ".trim();

// inputString = ‘   HeLlO EverYone    ‘
function messageCaseConverter(inputString) {
    const trimmedInputString = inputString.trim(); // 'HeLlO EverYone'
    const length = trimmedInputString.length;

// If the length of the string is <= 10, return the uppercase version of the string 
    if (length <= 10) {
      return trimmedInputString.toUpperCase(); //HELLO EVERYONE
    } else if (length > 10) {
      return trimmedInputString.toLowerCase(); //hello everyone
    }
  }
  
  //  Prompt the user to enter a sentence and store the value in a variable .
  const userInput = prompt('Please enter a sentence');
  
  // Call the messageCaseConverter function and alert out the string returned
  const messageToUser = messageCaseConverter(userInput);
  alert(messageToUser);

  /*
  Exercise 4
  ==========
  Create a function called messageCaseConverter that does the following
      Trims the string passed to it as the parameter.
      Checks the length of a string after trimming and returns a different string based on the following conditions
        * If the length of the string is <= 10, return the uppercase version of the string
        * If the length of the string is > 10, return the lowercase version of the string.
  Prompt the user to enter a sentence and store the value in a variable .
  Call the messageCaseConverter function and alert out the string returned
  
  Examples, if I enter  
                      ‘   Hello world    ‘ 
            I should get 
                      ‘HELLO WORLD’
          
            if I enter
                      ‘   HeLlO EverYone    ‘ 
            I should get 
                      ‘hello everyone’
*/
// I - Creating the fn
// inputString = ‘   HeLlO EverYone    ‘
function messageCaseConverter(inputString) {
    const trimmedInputString = inputString.trim(); // 'HeLlO EverYone'
    const stringLength = trimmedInputString.length;
    // If the length of the string is <= 10, return the uppercase version of the string
    if (stringLength <= 10) {
      return trimmedInputString.toUpperCase(); // HELLOONE
    } else if (stringLength > 10) {
      return trimmedInputString.toLowerCase(); // hello everyone
    }
  }
  
  
  // II - Using the fn
  //  Prompt the user to enter a sentence and store the value in a variable .
  const userInput = prompt('Please enter a sentence');
  // Call the messageCaseConverter function and alert out the string returned
  const messageToUser = messageCaseConverter(userInput);
  alert(messageToUser);

  