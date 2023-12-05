function findNaughtyStep(original: string, modified: string): string {
  const [large, small] = original.length > modified.length ?
  [original, modified] : [modified, original];
  const characters = [...large].filter((letter, index) =>
    letter !== small[index]
  );
  return characters[0] ?? '';
}
/**
In summary, the provided code has a time complexity of O(n), where n is the length of the input strings. This is due to the filtering operation that compares characters in the worst case, iterating through each character of the strings. The other operations contribute constant time complexity O(1), and hence, the overall complexity is primarily determined by the linear iteration through the characters.
 */