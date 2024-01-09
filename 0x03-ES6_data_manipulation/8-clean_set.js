export default function cleanSet(set, startString) {
  return Array.from(set).filter((e) => e.slice(0, 3) === startString).map((e) => e.slice(3)).join('-');
}
