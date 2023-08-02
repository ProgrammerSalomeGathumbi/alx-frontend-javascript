interface Student {
firstName: string;
lastName: string;
age: number;
location: string;     
}
const student1: Student = {

firstName: "Jane",
lastName: "Doe",
age: 20,
location: "Nairobi",     
};

const student2: Student = {
firstName: "John",
lastName: "Doe",
age: 19,
location: "Nakuru",     
};	

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]) {
const table = document.createElement("table");
students.forEach((student) => {
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.textContent = student.firstName;
    td2.textContent = student.location;
    row.appendChild(td1);
    row.appendChild(td2);
    table.appendChild(row);
  });
 document.body.appendChild(table);
}
renderTable(studentsList);
