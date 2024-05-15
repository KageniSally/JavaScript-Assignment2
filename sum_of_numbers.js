/*Question Two
 
Write a JavaScript function that takes a comma-separated numbers as input and returns the sum
 of those numbers. The function should validate the input:
 
If any non-numeric characters are present (except commas), treat those values as zero.
If the input string is empty, return zero.*/

let numbers = "";

function sum(numbers) {
    let sum = 0;
    if (numbers.length === 0) {
        return 0;
    } else {
        let newNumbers = numbers.split(",");
        for (let i = 0; i < newNumbers.length; i++) {
            let num = parseFloat(newNumbers[i]);
            if (!isNaN(num)) {
                sum += num;
            }

        }
        return sum;
    }
}

console.log(sum(numbers));




