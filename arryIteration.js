const number = [23, 3, 34, 563, 33, 45, 12, 66]

function myFunc(value , index , array ){
    // console.log(val * 3);

    return value > 2
}

const newArr =number.find(myFunc)

// console.log(numbers)
// console.log(newArr)

const fruit= ["Banana", "Orange", "Apple", "Mango"];
fruit.sort();
// console.log(fruits)

// Returns a random number:
const random = Math.floor(Math.random() * 10);
// console.log(random);

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]


const countVowels = (sentence)=>{
    let count = 0;

    const letters = Array.from(sentence);

    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++
        }
    })

    return count
    
}

// console.log(countVowels("I Love You"));


// finding duplicate value 
const num = [2, 53, 54, 3, 4, 6, 4, 8,2]

const duplicateNum = num.filter((value, index, array)=>{

    array.indexOf(value) !== index
    // console.log(value, index);
})

// console.log(duplicateNum);

const age = 18;

if(isNaN(age)){
    // console.log("not ok");
}else{
    // console.log("ok");
}

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// console.log(fruits);

let ab = [1, 3, 4];

// 
// console.log(a);

// console.log(a);

const bit =(48).toString(2)
// console.log(bit); 


