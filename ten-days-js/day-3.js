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