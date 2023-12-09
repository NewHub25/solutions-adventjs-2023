function organizeGifts(gifts: string): string {
  const findType = /(?<=[a-z])/;

  const giftsList = gifts.split(findType);

  return giftsList.map(gifts => {
    const amount = parseInt(gifts);
    const letterType = gifts[gifts.length - 1];

    const pales = Math.floor(amount / 50);
    const boxes = Math.floor((amount % 50) / 10);
    const remainder = amount % 10;

    const finalPales = `[${letterType}]`.repeat(pales);
    const finalBoxes = `{${letterType}}`.repeat(boxes);
    const finalRemainder = remainder ?
      `(${letterType.repeat(remainder)})` :
      '';

    return finalPales + finalBoxes + finalRemainder;
  }).join('');
}
const result = organizeGifts('40c');
console.log(result); // '{c}{c}{c}{c}'

/**
Analyzing the time complexity of the given code in terms of big O notation.

The split function has a time complexity of O(n), where n is the length of the input string (gifts in this case).
The map function iterates through each element in giftsList. Inside the map function, the operations are constant time (O(1)) since they involve basic arithmetic and string manipulations.
The join function has a time complexity of O(m), where m is the total length of the resulting string.
The dominant factor for time complexity in this code is the split function, so the overall time complexity is O(n), where n is the length of the input string.

Therefore, the time complexity of the organizeGifts function is O(n), where n is the length of the input string (gifts).
Yes! 😉
 */