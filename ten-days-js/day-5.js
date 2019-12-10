let dayFive = document.querySelector('.day-5');
//inheritance and prototypes to add a new method to an existing prototype
//add an area method to the Rectangle's prototype
//step 1
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function() {
    return this.w * this.h;
};
//let newRect = new Rectangle(2,3);
//console.log(newRect.area());

//step 2
//Create a square class with the following
//->subclass of Rectangle
//->it contains a constructor and no other methods (it will inherit the method from Rectangle)
//->It can use the Rectangle area method to calculate the area of a square

class Square extends Rectangle {
    constructor(h){
        super(h);
        this.h = h;
    }
}
let newSq = new Square(3);
console.log(newSq.area());
dayFive.innerHTML = '';

//day 5 part 2
let dayFivePart2 = document.querySelector('.day-5-part-2');
//has a tagged template literal that passes the area and perimeter
//->to a tag function named sides
//Recall that the first argument of a tag function is an array of string
//->literals from the template, and the subsequent values are the template's respective expression values.
//s1 and s2 are integers
//Step 1: finds s1 and s2 by plugging the area and perimeter values into the formula
//Step 2: Creates an array consisting of s1 and s2 and sorts it in ascending order
//step 3: Returns the sorted array
function sides(literals, ...expressions) {
    //console.log(expressions);
    //console.log(literals);
    let val1 = expressions[0];
    let val2 = expressions[1];

    //new arr
    let sortArr = Array();

    let areaCalc = val2 + Math.sqrt((val2**2) - (16 * val1) );
    let periCalc = val2 - Math.sqrt((val2**2) - (16 * val1) );

    //push to the new array
    sortArr.push(areaCalc / 4);
    sortArr.push(periCalc / 4);
    //sort the array
    sortArr.sort(function(a, b){return a-b});

    return sortArr;

}
let s1 = [140, 48];

dayFivePart2.innerHTML = '' + sides`The area is: ${s1[0]}
The perimeter is: ${s1[1]}
` + '';

//day 5 part 2
let dayFivePart3 = document.querySelector('.day-5-part-3');
//code block
//one parameter: an array (nums).
//-> loop through the array performing one of the following actions on each element.
//-> 1. if the element is even, multply the element by 2
//-> 2. if the element is odd, multply the element by 3
//function must return the modified array
//test array
//const array1 = [1, 4, 9, 16];

// pass a function to map
function modifyArray(nums) {
    const map1 = nums.map(x => x % 2 === 0 ? x * 2 : x * 3);
    //console.log(map1);
    return map1;
}
dayFivePart3.innerHTML = '';