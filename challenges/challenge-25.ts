function travelDistance(map: string): number {
  const mapList = map.split('\n');
  let xi = -1;
  let yi = mapList.findIndex(f => (xi = f.indexOf('S')) >= 0);
  let cont = 0;
  for (let n = 1; n <= 9; n++) {
    let xj = -1;
    let yj = mapList.findIndex(f => (xj = f.indexOf(String(n))) >= 0);
    if (yj < 0) break;
    // Minimum square length
    const difx = Math.abs(xi - xj);
    const dify = Math.abs(yi - yj);
    cont += difx + dify;
    [xi, yi] = [xj, yj]
  }
  return cont;
}
const map = `.....1....
..S.......
.........
....3.....
......2...`;
const result = travelDistance(map);
console.log(result);
const result2 = travelDistance(`..S.1...`);
console.log(result2);

/**
The time complexity of the provided code is O(rows x columns), where rows and columns are the dimensions of the map.

In terms of big O notation:
- Time complexity: O(rows x columns)
- Space complexity: O(1)

This analysis is based on the fact that the loop iterates nine times, and the primary operation inside the loop has a time complexity proportional to the dimensions of the map.
 */