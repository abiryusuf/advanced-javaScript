const nums =[2,3,4,5,6,7,8,9];
//slice
const result = nums.slice("slice", 1,4);
console.log(result);

//splice
const str = nums.splice("splice", 1,4);
console.log(str);

//join
const join = nums.join( " ", 12, 13);
console.log(join);

console.log(nums.indexOf(3))