function drawGift(size: number, symbol: string) {
  if (size < 2) return '#'.repeat(size) + '\n';
  const rows = Array(size - 2).fill('#' + symbol.repeat(size - 2) + '#');
  const faceArray = ['#'.repeat(size), ...rows, '#'.repeat(size)];
  const tempTop = [...faceArray];
  tempTop.pop();
  const topArray = tempTop.map(
    (row, index) =>
      ' '.repeat(size - index - 1) + row
  );
  const completeTop = topArray.map(
    (item, index) =>
      item +
      (
        index === 0 ?
          '' :
          symbol.repeat(index - 1) + '#'
      ) + '\n'
  );
  const completeFace = faceArray.map(
    (item, index) =>
      item +
      (
        index < size - 1 ?
          symbol.repeat(size - index - 2) + '#' :
          ''
      ) + '\n'
  );
  return completeTop.join('') + completeFace.join('');
}
function drawGift_2(size: number, symbol: string): string {
  if (size < 2) return '#\n';
  const result: Array<string> = [];
  const heightOfResult = size * 2 - 1;
  for (let y = 0; y < heightOfResult; y++) {
    let rowString = '';
    if (y < size) rowString += ' '.repeat(size - y - 1);
    if ([0, heightOfResult - 1].includes(y)) {
      rowString += '#'.repeat(size);
    } else {
      const stuffingFace = (y === size - 1 ? '#' : symbol).repeat(size - 2);
      const stuffingSide = symbol.repeat(size - 2 - Math.abs(y - size + 1));
      rowString += '#' + stuffingFace + '#' + stuffingSide + '#';
    }
    result.push(rowString);
    rowString = ''
  }
  return result.join('\n') + '\n';
}
const result = drawGift(4, '*');
console.log(result);
/**
   #### 
  #**## 
 #**#*# 
####**# 
#**#*# 
#**## 
####

 */
/**
 * O(size)
  The function has a constant-time check at the beginning: if (size < 2) return '#\n';
  
  The function then initializes some variables in constant time: const result: Array<string> = []; and const heightOfResult = size * 2 - 1;

  The main part of the function is the loop, which iterates heightOfResult times. Within the loop, most operations are constant time, including string concatenation and repetition. The time complexity within the loop is O(heightOfResult) or O(size).
  Therefore, the overall time complexity of the function is O(size) or O(heightOfResult), which simplifies to O(size) because it dominates the constant factor.

  In summary, the time complexity of the given function is O(size).
 */