function getStaircasePaths(steps: number, maxJump: number) {
  const result: Array<number[]> = []
  const findPaths = (currentPath: number[]) => {
    const remainingSteps = steps - currentPath.reduce((a, b) => a + b, 0);
    if (remainingSteps === 0) {
      result.push(currentPath);
      return;
    }
    for (let jump = 1; jump <= maxJump && jump <= remainingSteps; jump++) {
      findPaths([...currentPath, jump]);
    }
  }
  findPaths([]);
  return result;
}
console.log(getStaircasePaths(2, 1));
console.log(getStaircasePaths(3,3));
/**
The time complexity of the provided code is exponential, specifically O(m^n), where:

n is the number of steps.
m is the maximum number of steps an elf can jump in a single move (maxJump).
The space complexity is O(n), reflecting the maximum depth of the recursion.

In a more concise form:

Time complexity: O(m^n)
Space complexity: O(n)
 */