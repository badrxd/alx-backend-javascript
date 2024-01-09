export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) return '';
  return Array.from(set)
    .filter((e) => e.slice(0, startString.length) === startString)
    .map((e) => e.slice(startString.length))
    .join('-');
}
