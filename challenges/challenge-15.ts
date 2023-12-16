type directions = Array<'U' | 'R' | 'D' | 'L'>;

function autonomousDrive(store: Array<string>, movements: directions): Array<string> {
  const { length } = store[0];
  const i = store.join('').indexOf('!');
  let x = i % length;
  let y = Math.floor(i / length);

  store[y] = store[y].substring(0, x) + '.' + store[y].substring(x + 1);

  for (const move of movements) {
    const yStep = y - Number(move === 'U') + Number(move === 'D');
    const xStep = x - Number(move === 'L') + Number(move === 'R');
    const stepExists = Number(store[yStep]?.[xStep] === '.');
    x = [x, xStep][stepExists];
    y = [y, yStep][stepExists];
  }

  store[y] = store[y].substring(0, x) + '!' + store[y].substring(x + 1);
  return store;
}
const store = [
  '***',
  '.!.',
  '***'
];

const movements: directions = ['D', 'U', 'R', 'R', 'R'];
const result = autonomousDrive(store, movements);
console.log(result); // [ '***', '..!', '***' ]

/**
 * Finding the initial position of '!' in the store array:
 * O(n) where n is the total number of characters in the store array.
 * Looping through the movements:
 * O(m) where m is the length of the 'movements' array.
 * Updating the position in the store array:
 * O(m) where m is the length of the 'movements' array.
 * The dominant factor is the initial position calculation (O(n)). Therefore, the overall time complexity of the function can be simplified to O(n).
 */