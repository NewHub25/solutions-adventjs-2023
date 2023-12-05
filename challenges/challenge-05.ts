function cyberReindeer(road: string, time: number): Array<string> {
  const result = [road];
  let roadOpen = '.' + road.substring(1);
  let count = 0;
  let index = 0;
  while (time-- > 1) {
    count++;
    if (count === 5) {
      road = road.replace(/\|/g, '*');
      roadOpen = roadOpen.replace(/\|/g, '*');
    };
    if (road[index + 1] !== '|') {
      index++;
      let left = roadOpen.substring(0, index);
      let right = road.substring(index + 1);
      road = left + 'S' + right;
    }
    result.push(road);
  }
  return result;
}

const road = 'S..|..|||..';
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);
console.log(result);
/**
[ 'S..|..|||..',
  '.S.|..|||..',
  '..S|..|||..',
  '..S|..|||..',
  '..S|..|||..',
  '...S..***..',
  '...*S.***..',
  '...*.S***..',
  '...*..S**..',
  '...*..*S*..' ]
 */

/**
 * O(m*n)
 * The loop runs time times, and within each iteration:

The replace method is used on the road and roadOrigin strings. The replace method has a time complexity of O(n), where n is the length of the string.
The substring operations (substring(0, index) and substring(index + 1)) also have a time complexity of O(n), where n is the length of the string.
The push operation (result.push(road)) inside the loop has a constant time complexity of O(1).

Overall, the dominant factor in the time complexity is the loop itself, and within the loop, the replace and substring operations contribute to the time complexity.

Considering the worst-case scenario, the overall time complexity of the provided code is O(time * n), where n is the length of the input string road. The replace and substring operations are linear with respect to the length of the string.

 */