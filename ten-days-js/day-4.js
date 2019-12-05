let dayFour = document.querySelector('.day-4');
//working on creating objects
//two parameters a,b
//->must return an object modeling a rectangle that has the following properties
//->length: value is equal to a
//->width: value is equal to b
//->perimeter: value is equal to 2*(a + b)
//->area: value is equal to a * b

//I started off by creating an object before making a constructor function
// var rectangle = {
//   length: 2,
//   width: 3,
//   perimeter: 2 * (2+3),
//   area: 2*3
// };

//will do a constructor function
function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (a+b);
  this.area = a*b;
}

console.log(new Rectangle(2,3));
let playRectangle = new Rectangle(4,5);
dayFour.innerHTML = 'Our rectangle\'s length is ' + playRectangle.length + ' width is ' +
    playRectangle.width + ' perimeter is ' + playRectangle.perimeter + ' area is ' +
playRectangle.area;

//day 4 - part 2
let dayFourPart2 = document.querySelector('.day-4-part-2');
//iterating over objects
//one parameter a (objects), object
//each object in the array has two integer properties: x and y
//->function has to return a count of objects (o) in the array (a)
//->where o.x == o.y

function getCount(objects) {
  let count = 0;
  for(let i = 0; i < objects.length; i++){
    if(objects[i].x == objects[i].y){
      count++;
    }
  }

  return count;
}

//another way of looping through the array with objectss
let count = 0;
let playObject = [{x: 1, y: 2}, {x: 3, y: 3}];
for(let play in playObject){
  //console.log(playObject[play]);
  if(playObject[play].x == playObject[play].y){
    count++;
  }
}
console.log(count);
//console.log(playObject);

dayFourPart2.innerHTML = '';