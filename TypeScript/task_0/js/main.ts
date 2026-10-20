interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 25,
  location: 'San Francisco',
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  location: 'New York',
};

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student: Student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  row.append(firstNameCell, locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
