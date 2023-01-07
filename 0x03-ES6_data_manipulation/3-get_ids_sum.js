export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((allStudents, stdnts) => allStudents + stdnts.id, 0);
  }
  return [];
}
