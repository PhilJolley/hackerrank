//day one
let dayOne = document.querySelector('.day-1');

function factorialFunction(num){
    if (num <= 1){
        return num;
    } else {
        return num * factorialFunction(num - 1);
    }
}

//console.log(factorialFunction(4));

function factorialWhileLoop(num){
    let checkNumber = num;
    let total = 1;
    if(num <= 1){
        return num;
    } else {
        while(checkNumber > 0) {
            total *= checkNumber;
            checkNumber--;
        }
        return total;
    }
}
dayOne.innerHTML = factorialFunction(3) + ' Recursive Function Value.' + ' While loop value ' + factorialWhileLoop(3) ;
