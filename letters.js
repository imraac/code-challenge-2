// Write a function that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
function change(input) { // make a function and function name which allows input as a parameter
    let changed = ''; //make a variable with an empty string
    for (const char of input) { // checks if char is equals to lowerCase if it does it changes it to upperCase if its upperCase change to lowerCase
        if (char === char.toLowerCase()) {
            changed += char.toUpperCase();
        } else {
            changed += char.toLowerCase();
        }
    }
    return changed;// returns the changed char
}
console.log(change("The Quick Brown Fox"));// the output
