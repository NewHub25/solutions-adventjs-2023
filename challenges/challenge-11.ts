function getIndexsForPalindrome(word: string) {
  const wordReverted = word.split('').reverse().join('');
  if (word === wordReverted) return [];

  for (let i = 0; i < word.length - 1; i++) {
    for (let j = i + 1; j < word.length; j++) {
      const a = word[i];
      const b = word[j];
      if (a === b) continue;

      const x = word.substring(0, i);
      const y = word.substring(i + 1, j);
      const z = word.substring(j + 1);
      const newWord = x + b + y + a + z; // Switch
      const newWordReverted = newWord.split('').reverse().join('');

      if (newWord === newWordReverted) return [i, j];
    }
  }

  return null;
}

console.log(getIndexsForPalindrome('aaababa'))
/**
 * The initial reversal of the input word takes O(n) time.
 * The palindrome check takes O(n) time.
 * The nested loops iterate through all pairs of indices, resulting in O(n^2) iterations.
 * Inside the loops, string manipulations and palindrome checks are performed, each taking O(n) time.
 * As a result, the overall time complexity of the function is O(n^2) due to the nested loops, where "n" is the length of the input word. The other operations contribute to the overall complexity but are dominated by the nested loops.
 */