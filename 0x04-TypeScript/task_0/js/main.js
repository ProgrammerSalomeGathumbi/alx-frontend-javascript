var student1 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 20,
    location: "Nairobi"
};
var student2 = {
    firstName: "John",
    lastName: "Doe",
    age: 19,
    location: "Nakuru"
};
var studentsList = [student1, student2];
function renderTable(students) {
    var table = document.createElement("table");
    students.forEach(function (student) {
        var row = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.textContent = student.firstName;
        td2.textContent = student.location;
        row.appendChild(td1);
        row.appendChild(td2);
        table.appendChild(row);
    });
    document.body.appendChild(table);
}
renderTable(studentsList);
