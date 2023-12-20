function revealSabotage(store: string[][]) {
  for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < store[i].length; j++) {
      if (store[i][j] === '*') continue;
      let cont = 0;
      if (store[i - 1]?.[j]     === '*') cont++;
      if (store[i - 1]?.[j + 1] === '*') cont++;
      if (store[i]    ?.[j + 1] === '*') cont++;
      if (store[i + 1]?.[j + 1] === '*') cont++;
      if (store[i + 1]?.[j]     === '*') cont++;
      if (store[i + 1]?.[j - 1] === '*') cont++;
      if (store[i]    ?.[j - 1] === '*') cont++;
      if (store[i - 1]?.[j - 1] === '*') cont++;
      store[i][j] = String(cont ? cont : ' ');
    }
  }
  return store
}
const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]
console.log(revealSabotage(store))
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/

/**
 * The time complexity of the given code is O(n * m), where n is the number of rows and m is the number of columns in the input 2D array (store).
 */