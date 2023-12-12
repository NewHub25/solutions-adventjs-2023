function createChristmasTree(ornaments: string, height: number) {
  let tree = '';
  let cont = 0;
  let index = 0;
  while (cont < height) {
    const array = Array.from({ length: cont + 1 }, () => {
      let char = ornaments[index % ornaments.length];
      index++;
      return char;
    });
    const spaceBackwards = ' '.repeat(height - cont - 1);
    tree += spaceBackwards;
    tree += array.join(' ') + '\n';
    cont++;
  }
  return tree + ' '.repeat(height - 1) + '|\n';
}
console.log(createChristmasTree('abc', 4));

/**
   a 
  b c 
 a b c 
a b c a 
   | 
 */
/**
 * The main loop in this code has a complexity of O(height), where "height" is the input parameter representing the height of the Christmas tree. Within the loop, there is an inner loop created by Array.from. The length of this inner loop is determined by the variable "cont," which ranges from 0 to "height - 1." Therefore, the inner loop has a complexity of O(height) as well.
 * Time complexity: O(height^2)
 * Space complexity: O(height)
 */