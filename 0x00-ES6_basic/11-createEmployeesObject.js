export default function createEmployeesObject(departmentName, employees) {
  let allEmployee = '';
  let count = 0;
  const arrLen = employees.length;
  for (const employee of employees) {
    allEmployee += `'${employee}'`;

    count += 1;
    if (count !== arrLen) {
      allEmployee += ', ';
    }
  }

  return `{ ${departmentName}: [ ${allEmployee} ] }`;
}
