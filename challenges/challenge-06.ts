function maxDistance(movements: string) {
  let left = 0;
  let right = 0;
  let anyWhere = 0;
  let difference: number;
  let result: number;
  for (let i = 0; i < movements.length; i++) {
    switch (movements[i]) {
      case '<': {
        left++;
        break;
      }
      case '>': {
        right++;
        break;
      }
      default: {
        anyWhere++;
      }
    }
  }
  difference = Math.abs(left - right);
  result = difference + anyWhere;
  return result;
}

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // 5

/**
 * O(n)
 * The time complexity of the provided code is O(n), where n is the length of the movements string. This is because the algorithm performs a constant amount of work for each character in the input string, leading to a linear time complexity.
 */