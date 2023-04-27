var studentName = `Betty`;
var studentMajor = `ENG`;


var majorName;
var advisingLocation;

if(studentMajor == "BIOL") {
    majorName = "Biology"
    advisingLocation = "science Bldg, Room 310"
} else if (studentMajor == `CSCI`) {
    majorName = `Computer Science`;
    advisingLocation = `Sheppard Hall, Room 314`;
} else if (studentMajor == `ENG`) {
    majorName = `English`;
    advisingLocation = `Kerr Hall, Room 201`;
} else if (studentMajor == `HIST`) {
    majorName = `History`;
    advisingLocation = `Ker Hall, Room 114`;
} else if (majorName == `MKT`) {
    majorName = `Marketing`;
    advisingLocation = `Westly Hall, Room 310`;
} else {
    majorName = `<unknown>`;
    advisingLocation = `<unknown>`;
}


console.log("Student:", studentName);
console.log("Major:", majorName);
console.log("advising Location:", advisingLocation);