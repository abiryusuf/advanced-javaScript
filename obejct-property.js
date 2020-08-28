const students = [
    {id:001, name: "Abir"},
    {id:002, name: "Arafat"},
    {id:003, name: "Mim"},
    {id:004, name: "Munni"}
];
const output = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const studentName = element.name;
    output.push(studentName);
    //console.log(studentName)
}
console.log(output);

// function
const myFun = students.map(function(x){
    console.log("function", x.name);
});
// const result = myFun(students);
// console.log(result)
//Arrow 
const studentID = students.map(x => x.id);
console.log(studentID);

// filter
const studentName = students.filter(x => x.id>002);
console.log(studentName);