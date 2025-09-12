// 0x04-TypeScript/task_1/js/main.ts

export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // allow any extra attributes (e.g., contract)
  [key: string]: any;
}

export const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London'
};

export const teacher2: Teacher = {
  firstName: 'Mary',
  lastName: 'Wambui',
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: 'Nairobi',
  contract: true
};

export const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
