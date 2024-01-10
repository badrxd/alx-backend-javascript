export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`
}

export interface StudentClassInter {
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructorInter {
  new(firstName: string, lastName: string): StudentClassInter
}

export class StudentClass implements StudentClassInter {
  _firstName: string;
  _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName
    this._lastName = lastName
  }

  workOnHomework() {
    return 'Currently working'
  }

  displayName() {
    return this._firstName
  }

}
