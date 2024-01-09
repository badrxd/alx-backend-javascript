export default function createInt8TypedArray(length, position, value) {
  if (value < -128 || value > 127) {
    throw Error('Position outside range');
  }

  const Int8 = new DataView(new ArrayBuffer(length));
  Int8.setUint8(position, value);
  return Int8;
}
