// 1. Let's build a Teacher interface

interface Teacher {
  readonly firstName: string;     // cannot be changed after initialization
  readonly lastName: string;      // cannot be changed after initialization
  fullTimeEmployee: boolean;      // required
  yearsOfExperience?: number;     // optional
  location: string;               // required
  [key: string]: any;             // allow any other properties like contract
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,  // extra property allowed
};

console.log(teacher3);
