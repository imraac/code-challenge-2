//Write a JavaScript function that accepts two numbers to generate an array between them. For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].
function array(minNum, maxNum) {
    // make a function and a function name array that accepts two parameters as input
    let emptyArray = []; //make an empty array to push in the updated numbers
    for (let i = minNum; i <= maxNum; i++) {
      //it iterates from minNum to maxNum
      emptyArray.push(i); //pushes numbers to the empty array
    }
    return emptyArray; // returns the newarray
  }
  console.log(array(4, 7)); //outputs the result
  