
const nums = [1,2,3,-4,-5,6,7,8,9];

// Break: stop to execute the elements based on the condition
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if(element > 3){
        break;
      //console.log(element);
    }
    console.log("Break", element)
    
}
//continue: skip the specific element based on the condition and execute the rest of elements
for (let i = 0; i < nums.length; i++) {
    const con = nums[i];
    if(con < 0){
    continue;
    
}
console.log("continue", con);
}
