function decode_1(message: string) {
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

function decode_2(message: string) {
  let result: RegExpExecArray;
  while (result = /\(([a-zA-Z ]*?)\)/g.exec(message) as RegExpExecArray) {
    const capture = result[1].split('').reverse().join('');
    const before = message.substring(0, result.index);
    const after = message.substring(result.index + result[0].length);
    message = before + capture + after;
  }
  return message;
};

/**
 * O(n) => n is the length of the input string

The regular expression will still find all matches within the input string, but the number of matches is limited to two in the worst case: (/\(([a-zA-Z ]*?)\)/g.exec(message))) .

The regular expression engine may perform multiple passes over the string, but the total number of passes is still a constant factor, and the time complexity remains O(n), where n is the length of the input string.
Substring Operations (message.substring(...)):

Substring operations and other constant-time operations within the loop still contribute O(1) to each iteration.
Splitting and Reversing (result[1].split('').reverse().join('')):

The length of the captured substring may vary, but it is limited to a constant factor (at most two parentheses). The splitting and joining operations still take O(1) in each iteration.
In summary, the constraint that the parameter can have at most two chained parentheses does not change the overall time complexity, and the function remains O(n), where n is the length of the input string.
 */