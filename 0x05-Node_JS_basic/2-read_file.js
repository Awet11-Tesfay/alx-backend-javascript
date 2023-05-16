const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  data = data.toString().split('\n');

  let students = data.filter((item) => item);

  students = students.map((item) => item.split(','));

  const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

  const st_field = {};
  for (const i in students) {
    if (i !== 0) {
      if (!st_field[students[i][3]]) st_field[students[i][3]] = [];

      st_field[students[i][3]].push(students[i][0]);
    }
  }

  delete st_field.field;

  for (const key of Object.keys(st_field)) {
    console.log(
      `Number of students in ${key}: ${st_field[key].length}. List: ${st_field[
        key
      ].join(', ')}`,
    );
  }
}

module.exports = countStudents;
