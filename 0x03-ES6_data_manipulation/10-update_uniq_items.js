export default function updateUniqueItems(map) {
  if (map === undefined || map instanceof Map === false) {
    throw Error('Cannot process');
  }
  map.forEach((v, k, map) => (v === 1 ? map.set(k, 100) : null));
}
