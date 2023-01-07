export default function getStudentsByLocation(students, city) {
  const studentsCity = students.filter((selectedCity) => selectedCity.location === city);
  return studentsCity;
}
