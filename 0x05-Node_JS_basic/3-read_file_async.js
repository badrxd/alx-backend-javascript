const { readFile } = require('fs').promises;

const countStudents = async path => {
  try {
    const fields = new Map();
    let NumStd = 0;
    let contents = await readFile(path, 'utf8');
    contents = contents.split('\n');
    for (let i = 0; i < contents.length; i += 1) {
      if (
        contents[i].length > 0
        && contents[i] !== 'firstname,lastname,age,field'
      ) {
        const data = contents[i].split(',');
        if (fields.has(data[3]) === false) {
          fields.set(data[3], []);
        }
        fields.get(data[3]).push(data[0]);
        NumStd += 1;
      }
    }
    console.log(`Number of students: ${NumStd}`);
    for (const [index, field] of fields.entries()) {
      let text = field.join(', ');
      text = `Number of students in ${index}: ${field.length}. List: ${text}`;
      console.log(text);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
