function decode(message: string) {
  return message.replace(/\([a-zA-Z ]*?\)/g, (match) => {
    let t = '';
      match = match.replace(/[()]/g, '');
    for (let i = match.length - 1; i >= 0; i--) {
      t += match[i];
    }
    return t;
  }).replace(/\([a-zA-Z ]*?\)/g, (match) => {
    let t = '';
      match = match.replace(/[()]/g, '');
    for (let i = match.length - 1; i >= 0; i--) {
      t += match[i];
    }
    return t;
  });
}

function decode(message: string) {
  let result: Array<string> & { length: number, index: number };
  while (result = /\(([a-zA-Z ]*?)\)/g.exec(message)) {
    const capture = result[1].split('').reverse().join('');
    const before = message.substring(0, result.index);
    const after = message.substring(result.index + result[0].length);
    message = before + capture + after;
  }
  return message;
};
