// JavaScript arrays are used to store multiple values in a single variable.

const nums =[2,3,4,5,6,7,8,9];
//slice
const result = nums.slice("slice", 1,4);
console.log(result);

//splice
const str = nums.splice("splice", 1,4);
console.log(str);

//join
const join = nums.join( " ", 12, 13);
console.log("join", join);

console.log(nums.indexOf(3))

var name = "abir";
var res = name.split("");
console.log(res)

var array = ["A", "B", "C", "Abir", "Mim"];
array[0] = "F";
console.log(array);
console.log(array.sort())

var lastArray = array[array.length - 1];
console.log("Last Aarry", lastArray);

function arrayDemo(arr){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const lastArray = arr[arr.length -1 -i ]

        
    }
    return lastArray
}
console.log(arrayDemo(array));