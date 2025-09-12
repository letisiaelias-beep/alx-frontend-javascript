// task_1/js/main.ts

// Teacher interface:
// - firstName and lastName are readonly (set only at initialization)
// - fullTimeEmployee and location are required
// - yearsOfExperience is optional
// - index signature allows extra properties (e.g., contract)
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Example teachers
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
};

const teacher2: Teacher = {
  firstName: "Mary",
  lastName: "Wambui",
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: "Nairobi",
  contract: true, // extra property allowed by index signature
};

// The example from the exercise:
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

// Demonstrate that firstName/lastName are readonly (uncomment to see TS error):
// teacher1.firstName = "Bob"; // Error: cannot assign to 'firstName' because it is a read-only property