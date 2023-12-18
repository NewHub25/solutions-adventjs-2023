type IntervalHour = [number, number];

function optimizeIntervals(intervals: IntervalHour[]) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastInterval = result[result.length - 1];

    if (currentInterval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], currentInterval[1])
    } else { result.push(currentInterval) };

  }
  return result;
}

// Ejemplos de uso
console.log(optimizeIntervals([[5, 8], [2, 7], [3, 4]])); // [[2, 8]]
console.log(optimizeIntervals([[1, 3], [8, 10], [2, 6]])); // [[1, 6], [8, 10]]
console.log(optimizeIntervals([[3, 4], [1, 2], [5, 6]])); // [[1, 2], [3, 4], [5, 6]]

/**
Sorting:

Time Complexity: O(n log n)
(This is the dominant factor in the overall time complexity, where 'n' is the number of intervals.)
Iterating through the intervals:

Time Complexity: O(n)
(Each interval is processed once.)
Space Complexity:

Space Complexity: O(n)
(The space required for the result array.)
So, in simpler terms, the overall time complexity is O(n log n) due to sorting, and the space complexity is O(n).
 */