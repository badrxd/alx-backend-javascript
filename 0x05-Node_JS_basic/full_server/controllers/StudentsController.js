const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const globalText = ['This is the list of our students'];
    readDatabase(process.argv[2].toString())
      .then((data) => {
        for (const [index, field] of data.entries()) {
          let names = field.join(', ');
          names = `Number of students in ${index}: ${field.length}. List: ${names}`;
          globalText.push(names);
        }
        response.status(200).send(globalText.join('\n'));
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }

  static getByMajor(request, response) {
    const userMajor = request.params.major.toUpperCase();
    if (userMajor !== 'CS' && userMajor !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    return readDatabase(process.argv[2].toString())
      .then((data) => {
        const names = data.get(userMajor);
        response.status(200).send(`List: ${names.join(', ')}`);
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }
}
module.exports = StudentsController;
