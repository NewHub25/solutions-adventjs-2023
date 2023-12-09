function manufacture(gifts: string[], materials: string) {
  const result: Array<string> = [];
  for (const gift of gifts) {
    let temp = '';
    for (const cc of gift) {
      if (materials.indexOf(cc) < 0) break;
      temp += cc;
    }
    temp === gift && result.push(gift);
  }
  return result;
}

/*
Let's analyze the code in terms of its time complexity (Big O notation):
O(m*n)
The outer loop iterates through each gift in the gifts array. Let's denote the number of gifts as n.
The inner loop iterates through each character in a specific gift. Let's denote the maximum length of a gift as m.
*/
