export default function createIteratorObject(report) {
  const iter = [];
  for (const item in report.allEmployees) {
    if (Object.hasOwnProperty.call(report.allEmployees, item)) {
      iter.push(...report.allEmployees[item]);
    }
  }
  return iter;
}
