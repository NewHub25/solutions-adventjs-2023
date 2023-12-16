function autonomousDrive(store: Array<string>, movements: Array<'U' | 'R' | 'D' | 'L'>): Array<string> {
  let x = -1;
  let y = store.findIndex(row => (x = row.indexOf('!')) >= 0);
  for (const move of movements) {
    switch (move) {
      case 'U':
        {
          if (store[y - 1]?.[x] === '.') {
            store[y] = store[y].substring(0, x) + '.' + store[y].substring(x + 1);
            --y;
            store[y] = store[y].substring(0, x) + '!' + store[y].substring(x + 1);
          }
          break;
        }
      case 'R':
        {
          if (store[y]?.[x + 1] === '.') {
            store[y] = store[y].substring(0, x) + '.!' + store[y].substring(x + 2);
            x++;
          }
          break;
        }
      case 'D':
        {
          if (store[y + 1]?.[x] === '.') {
            store[y] = store[y].substring(0, x) + '.' + store[y].substring(x + 1);
            ++y;
            store[y] = store[y].substring(0, x) + '!' + store[y].substring(x + 1);
            console.log(y)
          }
          break;
        }
      case 'L':
        {
          if (store[y]?.[x - 1] === '.') {
            store[y] = store[y].substring(0, x - 1) + '!.' + store[y].substring(x + 1);
            x--;
          }
          break;
        }

    }
  }
  return store;
}
const store = [
  '..!....',
  '...*.*.',
  '..*..*.',
  '..*....'
];

const movements: Array<'U' | 'R' | 'D' | 'L'> = ['R', 'R', 'D', 'D', 'L', 'D'];
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/