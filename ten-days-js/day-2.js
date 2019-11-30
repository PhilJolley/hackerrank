//day two-part 1 (if-else)
let dayTwo = document.querySelector('.day-2');

function getGrade(score) {
    let grade;
    // Write your code here
    if(score <= 30 && score > 25) {
        grade = 'A';
    } else if(score <= 25 && score > 20) {
        grade = 'B';
    } else if(score <= 20 && score > 15) {
        grade = 'C';
    } else if(score <= 15 && score > 10) {
        grade = 'D';
    } else if(score <= 10 && score > 5) {
        grade = 'E';
    } else if(score <= 5 && score >= 0) {
        grade = 'F';
    }

    return grade;
}

dayTwo.innerHTML = 'Your grade is: ' + getGrade(25);

//day two-part 2
let dayTwoPart2 = document.querySelector('.day-2-part-2');

//code block
//s will be a string of the random letters in the alphabet (a-z)
//return A if index 0 i s (string) contains {a,e,i,o,u}
//return B if index 0 in s contains {b,c,d,f,g}
//return C if index 0 in s contains {h,j,k,l,m}
//return D if index 0 in s contains {n,p,q,r,s,t,v,w,x,y,z}
function getLetter(s) {
    let letter;
    // Write your code here
    switch(s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C';
            break;
        default:
            letter = 'D';
            break;
    }

    return letter;
}
const STRTEST = 'adfgt';
dayTwoPart2.innerHTML = 'The Letter is ' + getLetter(STRTEST);

//day 2-part 3 (loops)
let dayTwoPart3 = document.querySelector('.day-2-part-3');

//looping over the characters of a string
//print the vowels of the string (s) on each line.
//Must be printed in the order it appears
//second print consonant in s as it appears
function vowelsAndConsonants(s) {
    //code block
    let letters = Array();
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u'){
            console.log(s[i]);
        } else {
            //going to seperate the consonants into its own seperate array
            letters.push(s[i]);
        }
    }
    for(let j = 0; j < letters.length; j++) {
        console.log(letters[j]);
    }
}

const LETTERS = 'javascriptloops';
vowelsAndConsonants(LETTERS);