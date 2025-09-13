// 1) Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// 2) Directors interface
export interface Director extends Teacher {
  numberOfReports: number;
}

// 3) Interface for printTeacher function
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 4) printTeacher function as required
  export function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}
}

// ===== Examples =====
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: false,
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

console.log(printTeacher("John", "Doe")); // J. Doe


// Interface that describes the public instance shape of the class
export class StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }

  displayName(): string {
    return this.lastName;
  }
}
}

// Interface that describes the constructor signature (describes the constructor)
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// The class implementing the interface
export class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage (keep for manual testing / logs)
const studentExample = new StudentClass('Alice', 'Wonders');
console.log(studentExample.workOnHomework()); // "Currently working"
console.log(studentExample.displayName());   // "Alice"
