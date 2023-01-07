export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const arrBuffer = new ArrayBuffer(length);
  const arrView = new DataView(arrBuffer, 0, length);

  arrView.setInt8(position, value);
  return arrView;
}
