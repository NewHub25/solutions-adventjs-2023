function checkIsValidCopy(original: string, copy: string) {
  let templateRegex = '';
  const oldLetters = '#+:. ';
  for (const str of original) {
    let tempRegex = str + str.toLowerCase();
    let ifIndex = oldLetters.indexOf(str);
    ifIndex = ifIndex < 0 ? 0 : ifIndex;
    tempRegex += oldLetters.substring(ifIndex);
    templateRegex += `[${tempRegex}]`;
  }
  templateRegex = '^' + templateRegex + '$';
  const regexp = RegExp(templateRegex);
  return regexp.test(copy);
}
console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')) // true
/**
 * O(length)
 * The code checks if two strings are valid copies based on specific character matching rules. It runs in linear time, O(n), where n is the length of the input string.
 */