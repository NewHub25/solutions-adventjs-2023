type timeType = `${string}:${string}:${string}`;
type both = number | string;

function calculateTime(deliveries: Array<timeType>): string {
  const sumDates = deliveries.reduce((acc, curr) => {
    let [h, m, s] = curr.split(':') as both[];
    [s, m, h] = [s, m, h].map((x, index) => {
      const num = parseInt(x as string);
      return num * (60 ** index);
    });
    return acc + h + m + s;
  }, 0);
  let time = sumDates - 7 * 3600;
  let sign = time < 0 ? -1 : 1;
  time = Math.abs(time);
  let h: both = Math.floor(time / 3600);
  let m: both = Math.floor((time % 3600) / 60);
  let s: both = time % 60;
  [h, m, s] = [h, m, s].map(x => String(x).padStart(2, '0'));
  return (sign < 0 ? '-' : '') + `${h}:${m}:${s}`;
}
console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));
console.log(calculateTime(['02:00:00', '03:00:00', '02:00:00']));
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']));
// '00:30:00'

console.log(calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
])); // '-05:29:00'

/**
 * The time complexity of the calculateTime function is O(n), where n is the number of elements in the input array deliveries. This is because the function uses the reduce method to iterate through the array once, performing constant-time operations for each element. The operations within the loop, such as string splitting, type casting, and arithmetic calculations, are all constant time with respect to the size of the input.
 * The space complexity is O(1) since the function uses a constant amount of additional space regardless of the size of the input array. The space needed for variables like acc, curr, and [h, m, s] remains constant throughout the execution of the function. The function does not use any data structures that scale with the input size, leading to a constant space complexity.
 */