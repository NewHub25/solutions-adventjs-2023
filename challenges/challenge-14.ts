function maxGifts(houses: Array<number>) {
  if (houses.length === 1) return houses[0];
  const maxGifts: Array<number> = [];
  maxGifts[0] = houses[0];
  maxGifts[1] = Math.max(houses[0], houses[1]);
  for (let i = 2; i < houses.length; i++) {
    maxGifts[i] = Math.max(maxGifts[i - 1], maxGifts[i - 2] + houses[i]);
  }
  return maxGifts[maxGifts.length - 1];
}
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9

/**
 * nitialization: The initialization of the maxGifts array takes constant time, O(1).
 * Loop: The loop iterates through each house once, performing constant-time operations in each iteration. Therefore, the loop contributes O(n) to the overall time complexity, where n is the number of houses.
 */