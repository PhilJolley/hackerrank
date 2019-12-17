let daySix = document.querySelector('.day-6');
//we receive a sequence of numbers, defined as S from 1 to n
//-> S = {1,2,3,4,5,...}
//->We want to find the maximum bitwise AND value between two integers a AND b.
//-> a < b (a has to be less than b).
//->We will also get a parameter of k
//-> we need to find the max bitwise a AND b where a & b < k
//-> if k = 2 and s = 2 ([1,2]) so the maximum a AND b is 0
//-> 1 === 0001 and 2 === 0010 that returns 0
//-> 2 === 0010 and 2 === 0010 that returns 2 because that's where they match
//-> we return zero because 2 is not less than 2. They only match at 0.
//NOTE: && is a logical operator and & is a bitwise operator
//if you do 1 & 2 it will return 0

const s = [1,2,3,4];
//const k = 4;

function getMaxLessThanK(n,k){
    if(n >= 2 && k >= 2) {
        let newArr = Array();
        let numArr = Array.from(Array(n), (x, index) => index + 1);

        for(let i = 0; i < numArr.length; i++){
            for(let j = 1; j < numArr.length - 1; j++){
                //newArr.push();
                if(((numArr[i] & numArr[j]) !== 0) && (numArr[i] & numArr[j]) < k){
                    newArr.push((numArr[i] & numArr[j]));
                }
            }
        }
    }

    return Math.max(...newArr);
}

const testGetMax = 4;
const testK = 4;

//console.log(getMaxLessThanK(testGetMax, testK));
//let newArr = Array.from(Array(4), (x, index) => index + 1);
//console.log(newArr);

//I missread I thought n was an array. It's not. It's an integer. I will change it up tomorrow.

daySix.innerHTML = '';

//while loop test
let testKey = 5;
let a = 1;
let kk = 2;
let newArr = Array();
while(testKey > a) {
    console.log('a: ' + a);
    let b = a + 1;
    while(testKey >= b) {
        console.log('a: ' + a + ' ' + 'b: ' + b);
        if( (a & b) < kk ){
            newArr.push(a & b);
        }
        b++;
    }
    a++;
}
console.log(Math.max(...newArr));
/*
* test cases
5 2
8 5
2 2
*
* */
function getMaxLessThanK(n,k) {
    if(k >= 2) {
        let a = 1;
        let newArr = Array();
        while(n > a) {
            let b = a + 1;
            while(n >= b) {
                if( (a & b) < k ){
                    newArr.push(a & b);
                }
                b++;
            }
            a++;
        }
        return Math.max(...newArr);
    }
}
console.log(getMaxLessThanK(3));

let daySixPart2 = document.querySelector('.day-6-part-2');

//code block
function getDayName(dateString) {
    let dayName = new Date(dateString);
    dayName = dayName.getDay();
    if(dayName === 0) {
        dayName = 'Sunday';
    } else if(dayName === 1) {
        dayName = 'Monday';
    } else if(dayName === 2) {
        dayName = 'Tuesday';
    } else if(dayName === 3) {
        dayName = 'Wednesday';
    } else if(dayName === 4) {
        dayName = 'Thursday';
    } else if(dayName === 5) {
        dayName = 'Friday';
    } else if(dayName === 6) {
        dayName = 'Saturday';
    }
    return dayName;
}
//let findDate = new Date('10/11/2009');
console.log('this date is: ' + getDayName('10/11/2009'));
//Date.getDay()

daySixPart2.innerHTML = '';