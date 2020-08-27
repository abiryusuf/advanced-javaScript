let last = 40

function sum(first, second){
    let result = first + second + last;
    //console.log(last);
    if(result > 10){
        var mood = "happy"; //let cannot access outside of scope but var can
        mood = "fishy";
        console.log(mood);
    }
    else {
        console.log("Bad")
    }
   //console.log(mood);
    return result;
}
//console.log(result);

const output = sum(5,7);
//console.log(output);
