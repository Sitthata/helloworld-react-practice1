type studentType = {
    name: string,
    age: number,
    course: string
}

const student: studentType = {
    name: "John",
    age: 23,
    course: "Computer Science"
}


// Destructuring
const { name: studentName, age, course } = student;
console.log(studentName, age, course); // John 23 Computer Science
