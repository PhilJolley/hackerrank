//day 3
let dayThree = document.querySelector('.day-3');
//part 1 arrays
//function must find and return the second largest number in nums
// n is the length of the array 1-10.
//nums can be 1 to 100
function getSecondLargest(nums) {
    // Complete the function
    //sort the function
    nums.sort(function(x, y) { return x - y; } );

    //the second lowest number
    let lowNumber;

    //loop from the end of the array to find the smallest number
    for(let i = 0; i < nums.length; i++){
        if(nums[nums.length - i -1] > nums[nums.length - i -2]) {
            lowNumber = nums[nums.length - i -2];
            break;
        } else {
            continue;
        }
    }

    return lowNumber;
}
//test area [2,3,6,6,5]
const testArr = [2,3,6,6,5];
dayThree.innerHTML = 'The Original Array: ' + testArr + ' The Second Lowest Number in the Array: ' + getSecondLargest(testArr);

//day 3-part 2 (try, catch, and finally)
let dayThreePart2 = document.querySelector('.day-3-part-2');
//one parameter s (string)
//1. Try to reverse a string using the split, reverse, and join methods
//2. If an exception is thrown, catch it and print the contents of the
// exception's message on a new line.
//3. Print s on a new line. If no exception was thrown, then this should
// be the reversed string; if an exception was thrown, this should be the original string.

function reverseString(s) {
    //code block
    try {
        console.log(s.split('').reverse().join(''));
    } catch (e) {
        console.log(e.message);
        console.log(s);
    }
}
let testStr = '123';
console.log(reverseString(testStr));

dayThreePart2.innerHTML = '';
//to solve this I first made sure I could reverse the string.
//Second, I made test cases of what it would look like if I did have an argument that wasn't a string.

//Day 3 - Part 3
let dayThreePart3 = document.querySelector('.day-3-part-3');
//throw and catch, custom message
//one parameter, a is an integer
//if a is positive, return a string of YES
// else throw an error according to these rules:
//--if a = 0, message = "Zero Error"
//--if a = -integer, message = "Negative Error"

function isPositive(a) {
    //code block
    if(a === 0) {
        throw new Error('Zero Error');
    } else if(a < 0) {
        throw new Error('Negative Error');
    } else if(a > 0) {
        return 'YES';
    }
}

//console.log(isPositive(5));
//console.log(isPositive(0));
//console.log(isPositive(-2));

dayThreePart3.innerHTML = '';