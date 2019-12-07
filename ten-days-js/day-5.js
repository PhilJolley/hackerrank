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