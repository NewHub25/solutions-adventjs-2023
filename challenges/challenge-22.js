function compile(code) {
  let counter = arguments[1] ?? 0;
  let indexLoopStart = -1;
  let indexLoopEnd = -1;
  let subCodeConditional = "";
  code = code.replace(/¿.+?\?/, (match) => {
    subCodeConditional = match.substring(1, match.length - 1);
    return "";
  });
  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    if (char === "+") counter++;
    if (char === "-") counter--;
    if (char === "*") counter *= 2;
    if (char === "%") indexLoopStart = i;
    if (char === "<") indexLoopEnd = i;
  }
  if (indexLoopStart >= 0 && indexLoopEnd > indexLoopStart) {
    const subCodeLoop = code.substring(indexLoopStart + 1, indexLoopEnd);
    counter = compile(subCodeLoop, counter);
  }
  if (subCodeConditional && counter > 0)
    return compile(subCodeConditional, counter);
  return counter;
}
// console.log(compile("+++<++%")); // 3
// console.log(compile("++%++<")); // 6
// console.log(compile("++<--")); // 0
// console.log(compile("++¿+?")); // 3
// console.log(compile("--¿+++?")); // -2
console.log(compile("--¿+++?+++¿--?")); // -1
console.log(compile("--%++<-¿+++?"));
