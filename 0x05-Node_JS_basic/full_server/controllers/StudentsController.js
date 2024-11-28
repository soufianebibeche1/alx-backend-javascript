import { readDatabase } from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2];
    readDatabase(databaseFile)
      .then((students) => {
        let responseText = 'This is the list of our students\n';
        Object.keys(students).sort((a, b) => a.localeCompare(b)).forEach((field) => {
          responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        });
        res.status(200).send(responseText.trim());
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    const databaseFile = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databaseFile)
      .then((students) => {
        const list = students[major] || [];
        res.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}
