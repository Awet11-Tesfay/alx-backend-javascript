interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Haile",
    lastName: "Gebregergis",
    age: 26,
    location: "Ethiopia",
};

const student2: Student = {
    firstName: "Awet",
    lastName: "Tesfay",
    age: 22,
    location: "Addis ababa",
};

const studentsList = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((obj) => {
    const row = document.createElement("tr");
    const cellName = document.createElement("td");
    const cellLocation = document.createElement("td");
    cellName.textContent = obj.firstName;
    cellLocation.textContent = obj.location;
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);