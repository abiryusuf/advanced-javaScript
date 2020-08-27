const students = [
    { studentID: 01, studentName: "Abir"},
    { studentID: 02, studentName: "Yusuf"}
];
// function studentInfo(info){
//     const student = [info.studentID, info.studentName.join(" ")];
//     return student;
// }

const result = students.map( x => x);
console.log(result);