//complete this code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}

// Example usage:
const student = new Student("Alice", 20);
const teacher = new Teacher("Mr. Smith", 35);

student.study(); // Output: "Alice is studying."
teacher.teach(); // Output: "Mr. Smith is teaching."

// Do not change the code below this line
window.Person = Person;

window.Student = Student;
window.Teacher = Teacher;
