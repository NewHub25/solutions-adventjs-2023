/**
 *
 * @param {string} code
 * @returns {number}
 */
function compile(code) {
  let largeCode = "";
  for (let i = 0, l = -1; i < code.length; i++) {
    const char = code[i];
    if (char === "%" && l < 0) {
      l = i;
    } else if (char === "<" && l >= 0) {
      largeCode += char.substring(l + 1, i);
      l = -1;
    } else largeCode += char;
  }
  let cont = 0;
  for (let j = 0, ignore = false; j < largeCode.length; j++) {
    const str = largeCode[j];
    if (str === "?") ignore = false;
    if (ignore) continue;
    cont += str === "+" && +1;
    cont += str === "-" && -1;
    if (str === "¿") ignore = !(cont > 0);
  }
}
// console.log(compile("+++<++%")); // 3
// console.log(compile("++%++<")); // 6
// console.log(compile("++<--")); // 0
// console.log(compile("++¿+?")); // 3
// console.log(compile("--¿+++?")); // -2
console.log(compile("--¿+++?+++¿--?")); // -1
console.log(compile("--%++<-¿+++?"));
