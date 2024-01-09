export default function cleanSet(set, startString) {
  if (set.size < 1) {
    return ''
  }
  return Array.from(set).filter((e) => e.slice(0, 3) === startString && e.length > 3).map((e) => e.slice(3)).join('-');
}
