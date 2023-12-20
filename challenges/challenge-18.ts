function drawClock(time: string): string[][] {
  const draw1 = [
    '***   * *** *** * * *** *** *** *** ***',
    '* *   *   *   * * * *   *     * * * * *',
    '* *   *   *   * * * *   *     * * * * *',
    '* *   * *** *** *** *** ***   * *** ***',
    '* *   * *     *   *   * * *   * * *   *',
    '* *   * *     *   *   * * *   * * *   *',
    '***   * *** ***   * *** ***   * *** ***',
  ];
  const draw2 = [
    ' ',
    ' ',
    '*',
    ' ',
    '*',
    ' ',
    ' ',
  ];
  const ind1 = parseInt(time[0]) * 4;
  const ind2 = parseInt(time[1]) * 4;
  const ind3 = parseInt(time[3]) * 4;
  const ind4 = parseInt(time[4]) * 4;
  let temp = Array(7).fill('').map((m, i) => {
    const extract1 = draw1[i].substring(ind1, ind1 + 3);
    const extract2 = draw1[i].substring(ind2, ind2 + 3);
    return extract1 + ' ' + extract2;
  });
  temp = temp.map((m, i) => {
    return m + ' ' + draw2[i];
  });
  temp = temp.map((m, i) => {
    const extract1 = draw1[i].substring(ind3, ind3 + 3);
    const extract2 = draw1[i].substring(ind4, ind4 + 3);
    return m + ' ' + extract1 + ' ' + extract2;
  });
  const result = temp.map(m=>m.split(''));
  return result;
}

/**
 *Constant Time Operations:

Initialization of draw1 and draw2 arrays: O(1)
Calculation of ind1, ind2, ind3, and ind4: O(1)
Array Mapping and String Manipulation (three times):

Each operation involves iterating over a fixed-size array (temp with 7 elements): O(1)
The overall time complexity is dominated by constant time operations, and the array mapping and string manipulation operations have a fixed-size input. Therefore, the simplified time complexity of the given code is O(1), indicating constant time complexity.
 */