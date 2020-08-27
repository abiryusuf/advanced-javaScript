//The map() method creates a new array with the results of calling a function for every array element.

const numbers = [2, 3, 4, 5, 7, 8];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    //console.log(result);
    output.push(result);
    //console.log(output);

}
console.log(output);


// function square (element){
//     return element * element;
// }

const str = numbers.map(function(element, index){ //in parameters I can use three arguments index, array and element
    return element * element, index;
});
console.log("map", str)


//arrow function
const arrow = numbers.map(element => element * element);
console.log("arrow and map", arrow);

// const num = numbers.map = x => x * x;
// console.log(num);

// filter
const bigger = numbers.filter(x => x > 5);
console.log("filter", bigger);

//find