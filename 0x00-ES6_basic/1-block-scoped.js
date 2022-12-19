export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;// eslint error - no-unused-variable
    const task2 = false;// eslint error - no-unused-variable
  }

  return [task, task2];
}
