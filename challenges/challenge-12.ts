function checkIsValidCopy(original: string, copy: string) {
  if (original.length !== copy.length) return false;
  const validator = ['[A-Za-z]', '#', '\\+', ':', '\\.', ' '];
  const regexs = validator.map(v => RegExp(v));
  for (let i = 0; i < original.length; i++) {
    const str = original[i];
    const srtCopy = copy[i];
    if (str === srtCopy || str.toLowerCase() === srtCopy) continue;

    let boo = false;
    for (let j = 0; j < regexs.length; j++) {
      const currRegex = regexs[j];
      const restRegexs = [...regexs].splice(j + 1);
      const someRegex = restRegexs.some(re => re.test(srtCopy));
      if (currRegex.test(str) && someRegex) {
        boo = true;
        break;
      }
    }
    if (!boo) return boo;
  }
  return true;
}
console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')) // true
/**
 * O(length)
 * The code checks if two strings are valid copies based on specific character matching rules. It runs in linear time, O(n), where n is the length of the input string.
 */