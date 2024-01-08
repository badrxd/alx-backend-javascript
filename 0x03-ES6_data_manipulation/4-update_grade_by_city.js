export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((e) => e.location === city).map((e) => {
    const index = newGrades.findIndex((e2) => e2.studentId === e.id);
    return {
      ...e,
      grade: index === -1 ? 'N/A' : newGrades[index].grade,
    };
  });
}
