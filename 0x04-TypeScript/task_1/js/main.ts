// task_1/js/main.ts

export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Directors extends Teacher and adds numberOfReports
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Example teachers (keep if present for previous task)
export const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Example director required by Task 2
export const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17
};

console.log(director1);
