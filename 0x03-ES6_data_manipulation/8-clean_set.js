export default function cleanSet(set, startString) {
  if (startString === undefined || set === undefined || startString.length === 0 || !(set instanceof Set )|| typeof startString !== 'string') return '';
  return Array.from(set)
    .filter((e) => e.slice(0, startString.length) === startString && e.length > startString.length)
    .map((e) => e.slice(startString.length))
    .join('-');
}
