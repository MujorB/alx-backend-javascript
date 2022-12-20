export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  const array2 = array;
  for (const value of array) {
    array2[idx] = appendString + value;
    idx += 1;
  }

  return array2;
}
