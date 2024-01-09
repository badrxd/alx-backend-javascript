export default function updateUniqueItems(map) {
  if (map === undefined || map.size < 1) {
    throw Error('Cannot process');
  }
  map.forEach((v, k, map) => (v === 1 ? map.set(k, 100) : null));
}
