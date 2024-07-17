import React from 'react';
import Student from './student';

const Students = () => {
  const students = [
    { name: 'berna', department: 'Science', finalGrade: 85, status: 'Pass' },
    { name: 'rico', department: 'Arts', finalGrade: 92, status: 'Pass' },
    { name: 'jeralyn', department: 'Commerce', finalGrade: 75, status: 'Pass' },
    { name: 'robiso', department: 'Science', finalGrade: 88, status: 'Pass' },
    { name: 'abiso', department: 'Arts', finalGrade: 95, status: 'Pass' },
    { name: 'oros', department: 'Commerce', finalGrade: 98, status: 'Pass' },
    { name: 'rolando mangila', department: 'Science', finalGrade: 70, status: 'Pass' },
    { name: 'cantos leonor', department: 'Arts',finalGrade: 90, status: 'Pass' },
    { name: 'march anton', department: 'Commerce',finalGrade: 74, status: 'Fail' },
    { name: 'march anthony', department: 'Science',finalGrade: 68,  status: 'Fail' },
  ];

  return (
    <table border="1">
      <thead>
        <tr>
          <th>No.</th>
          <th>Student Names</th>
          <th>Department</th>
          <th>Final Grade</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <Student key={index} index={index + 1} student={student} />
        ))}
      </tbody>
    </table>
  );
};

export default Students;
