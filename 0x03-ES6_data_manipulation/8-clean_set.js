export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) return '';
  return Array.from(set)
    .filter((e) => e.slice(0, 3) === startString > startString.length)
    .map((e) => e.slice(3))
    .join('-');
}
