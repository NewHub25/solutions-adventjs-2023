/**
 *
 * @param {string} code
 * @returns {number}
 */
function compile(code) {
  let largeCode = "";
  for (let i = 0, l = -1; i < code.length; i++) {
    const char = code[i];
    if (char === "%") l = i;
    else if (char === "<" && l >= 0) {
      largeCode += code.substring(l + 1, i);
      l = -1;
    } else largeCode += char;
  }
  largeCode;
  let cont = 0;
  for (let j = 0, ignore = false; j < largeCode.length; j++) {
    const str = largeCode[j];
    if (str === "?") ignore = false;
    if (ignore) continue;
    cont += str === "+" && +1;
    cont += str === "-" && -1;
    cont *= str === "*" ? 2 : 1;
    if (str === "¿") ignore = !(cont > 0);
  }
  return cont;
}
// console.log(compile("++%++<")); // 6
// console.log(compile("++¿+?")); // 3
// console.log(compile("--¿+++?")); // -2
// console.log(compile("--¿+++?+++¿--?")); // -1
// console.log(compile("--%++<-¿+++?"));
console.log(compile("<%+¿++%++<?")); // 7
/**
 * First Loop:
    Iterates through each character of the code string once.
    Time complexity: O(n), where n is the length of the input code.
 * Second Loop:
    Iterates through each character of the largeCode string once.
    Time complexity: O(m), where m is the length of the largeCode string.
 * Overall Complexity:
    Combining the complexities of the two loops, the overall time complexity is O(n + m).
*/
