function findBalancedSegment(message: number[]) {
  let maxRange = 0, index = -1;
  for (let i = 0; i < message.length - 1; i++) {
    let count0 = 0, count1 = 0;
    for (let j = i; j < message.length; j++) {
      message[j] === 0 ? count0++ : count1++;
      if ((count0 === count1) && ((j - i) > maxRange)) {
        maxRange = j - i;
        index = i;
      }
    }
  }
  return index < 0 ? [] : [index, index + maxRange];
}
console.log(findBalancedSegment([1, 1, 0])); // [ 1, 2 ]
/**
 * The time complexity of the provided code is O(n^2), where n is the length of the input array message. The nested loops contribute to a quadratic growth in the number of operations as the input size increases. The space complexity is O(1), indicating constant space usage since the amount of memory used does not scale with the input size.
 */