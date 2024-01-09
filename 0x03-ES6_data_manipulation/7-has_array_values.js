export default function hasValuesFromArray(set, arr) {
  let check = true;
  for (let i = 0; i < arr.length; i += 1) {
    if (!set.has(arr[i])) {
      check = false;
      break;
    }
  }
  return check;
}
