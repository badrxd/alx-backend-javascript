interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_1: Student = {
  firstName: "Badr",
  lastName: 'xd',
  age: 10,
  location: 'Beni mellal',
};
const student_2: Student = {
  firstName: "Badrxd",
  lastName: 'xdxd',
  age: 20,
  location: 'Rabat',
};
const studentsList: Student[] = [student_1, student_2];

const table = document.createElement("table")
document.body.appendChild(table)
studentsList.forEach(element => {
  const raw = table.insertRow()
  const td_1 = raw.insertCell()
  const td_2 = raw.insertCell()

  td_1.innerText = element.firstName
  td_2.innerText = element.location
});
