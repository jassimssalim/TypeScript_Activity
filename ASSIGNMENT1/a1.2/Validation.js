// this code is combination of research in stackoverflow and applying knowledge -jassim
function isValidISBN10(isbn) {
    // Regex format to remove any non numeric
    var sanitizedISBN = isbn.replace(/[^0-9X]/gi, '');
    // Check length
    if (sanitizedISBN.length !== 10) {
        return false;
    }
    // Initialize sum
    var sum = 0;
    // Loop through each character and calculate the sum
    for (var i = 0; i < 10; i++) {
        var char = sanitizedISBN[i];
        var value = void 0;
        if (char === 'X') {
            value = 10;
        }
        else {
            value = parseInt(char, 10);
            // Ensure the character is a valid digit
            if (isNaN(value)) {
                return false;
            }
        }
        sum += value * (i + 1);
    }
    // Check if sum modulo 11 is zero
    return (sum % 11 === 0);
}


console.log(isValidISBN10('1112223339')); 
console.log(isValidISBN10('111222333')); 
console.log(isValidISBN10('1112223339X')); 
console.log(isValidISBN10('1234554321')); 
console.log(isValidISBN10('1234512345')); 
console.log(isValidISBN10('048665088X')); 
console.log(isValidISBN10('X123456788')); 
