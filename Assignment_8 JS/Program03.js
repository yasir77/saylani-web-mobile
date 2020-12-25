// 3. write a program that inputs marks of three subjects.if the average of marks is more than 80,
// it displays message "you are above standard, Admission Granted!".

var sub1Marks = prompt("Enter Subject 1 Marks");
var sub2Marks = prompt("Enter Subject 2 Marks");
var sub3Marks = prompt("Enter Subject 3 Marks");
var averageMarks = (parseInt(sub1Marks)+parseInt(sub2Marks)+parseInt(sub3Marks))/3;
if (averageMarks>80) {
    alert("you are above standard, Admission Granted!");
}
