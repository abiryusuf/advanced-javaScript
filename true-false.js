// false 
// condition will be false if value is 0, NaN, null, undefined, empty string 
let name = "";

if(name){
    console.log("condition is true");
}
else {
    console.log("condition is false");
}
// 1 is related with true and 0 is related with false
// "==" double equal only check value and "===" three equal will check value and data type
// thats why "===" using triple always better in javascript 
const first = 2;
const second = "2";


if( first === second){
    console.log("condition is true");
}
else {
    console.log("condition is false");
}