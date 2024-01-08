const getStudentsByLocation = (students, city) => students.filter((e) => e.location === city);

export default getStudentsByLocation;
