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
const k = 4;
// let newArr = Array();
//
// for(let i = 0; i < s.length; i++){
//     for(let j = 1; j < s.length - 1; j++){
//         //newArr.push();
//         if(((s[i] & s[j]) !== 0) && (s[i] & s[j]) < k){
//             newArr.push((s[i] & s[j]));
//         }
//     }
// }
// console.log(Math.max(...newArr));

function getMaxLessThanK(n,k){
    let newArr = Array();

    if(k === 0){
        return n;
    }

    for(let i = 0; i < n.length; i++){
        for(let j = 1; j < n.length - 1; j++){
            //newArr.push();
            if(((n[i] & n[j]) !== 0) && (n[i] & n[j]) < k){
                newArr.push((n[i] & n[j]));
            }
        }
    }

    return Math.max(...newArr);
}

const testGetMax = [1,2,3,4];
const testK = 4;

console.log(getMaxLessThanK(testGetMax, testK));

//I missread I thought n was an array. It's not. It's an integer. I will change it up tomorrow.

daySix.innerHTML = '';