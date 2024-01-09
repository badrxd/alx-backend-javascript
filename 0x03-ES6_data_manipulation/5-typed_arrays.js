export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');

  const Int8 = new DataView(new ArrayBuffer(length));
  Int8.setInt8(position, value);
  return Int8;
}
