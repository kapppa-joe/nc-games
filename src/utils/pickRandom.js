export function pickRandom(array) {
  const len = array.length;
  const randomNum = (Math.random() * len) | 0;
  return array[randomNum];
}
