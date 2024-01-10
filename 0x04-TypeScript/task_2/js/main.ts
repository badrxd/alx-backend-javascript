export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {

  workFromHome(): string {
    return 'Working from home'
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break'
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
}
export class Teacher implements TeacherInterface {


  workFromHome(): string {
    return 'Cannot work from home'
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break'
  }
  workTeacherTasks(): string {
    return 'Getting to work'
  }
}

export function createEmployee(salary: number | string): TeacherInterface | DirectorInterface {
  return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director()
}

export function isDirector(employee: TeacherInterface | DirectorInterface): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

export function executeWork(employee: TeacherInterface | DirectorInterface): string {
  return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks()
}

type Subjects = 'Math' | 'History'

export function teachClass(todayClass: Subjects): string {
  return `todayClass ${todayClass}`
}

