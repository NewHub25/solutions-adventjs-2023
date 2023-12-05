// Complexity O(n)

function findFirstRepeated(gifts: number[]): number {
  const ar: Set<number> = new Set();
  for (const gift of gifts) {
    if (ar.has(gift)) {
      return gift;
    }
    ar.add(gift);
  }
  return -1;
}

/*
  The function appears to be complexity efficient.
  It uses a Set to perform fast lookups and has a time complexity of O(n) in the worst case, where "n" is the length of the array of gifts.
  In an array of 10_000_000 of length has a time of runtime near to 4 seconds.
*/
