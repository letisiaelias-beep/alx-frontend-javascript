// 1) Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional attributes
}

// 2) Directors interface extends Teacher
export interface Director extends Teacher {
  numberOfReports: number;
}

// 3) Function interface for printTeacher
export interface Function printTeacher {
  (firstName: string, lastName: string): string;
}

// 4) Implementation of printTeacher function
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// ======== Examples ========

// Teacher example
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

// Directors example
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// printTeacher example
console.log(printTeacher("John", "Doe")); // J. Doe
