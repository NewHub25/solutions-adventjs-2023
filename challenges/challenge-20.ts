function distributeGifts(weights: (number | null)[][]): (number | null)[][] {
  const cols = weights.length;
  const rows = weights[0].length;
  const result = Array(cols)
    .fill(0)
    .map(
      () => Array(rows).fill(0)
    );

  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j < weights[i].length; j++) {
      let cont = 0;
      let sum = 0;
      if (weights[i][j]) { cont++; sum += weights[i][j] as number }
      if (weights[i - 1]?.[j]) { cont++; sum += weights[i - 1][j] as number }
      if (weights[i]?.[j + 1]) { cont++; sum += weights[i][j + 1] as number }
      if (weights[i + 1]?.[j]) { cont++; sum += weights[i + 1][j] as number }
      if (weights[i]?.[j - 1]) { cont++; sum += weights[i][j - 1] as number }
      result[i][j] = Math.round(sum / cont);
    }
  }
  return result
}
const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4]
]

console.log(distributeGifts(input));
/**
[
  [5, 3, 3],
  [6, 5, 3],
  [7, 6, 4]
]
 */
/**
 * The time complexity of the provided code is O(rows * cols), where rows is the number of rows in the weights array and cols is the number of columns in the weights array.
 */