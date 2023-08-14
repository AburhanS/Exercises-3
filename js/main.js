/* //Exercise 1

function filterRange (arr, a, b){
    let result = [];
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    for (let i = 0; i < arr.length; i++){
        let element = arr[i];
        if(element >= a && element <= b){
            result.push(element);
        }
    }
    return result;
}

let testArray = [5, 3, 8, 1]

console.log(filterRange(testArray, 1, 4));
console.log(filterRange(testArray, 5, 2));
console.log(filterRange(testArray, 8, 8)); */



/* // Exercise 2

let john = {name: "John", age: 25}
let pete = {name: "Pete", age: 30} 
let mary = {name: "Mary", age: 28}

let users = [john, pete, mary]

let names = users.map(n => n.name);

console.log(names); */



/* // Exercise 3

let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let users = [john, pete, mary];
let ages = users.map(a => a.age);
let sum = 0;
let avrg = 0;

function averageFinder(arr){
    for (i = 0; i < arr.length; i++){
        sum += arr[i];
        avrg = sum / arr.length;
    }
    return avrg;
}

console.log(averageFinder(ages)); */