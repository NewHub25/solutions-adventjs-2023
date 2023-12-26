function organizeChristmasDinner(dishes: Array<Array<string>>) {
  const set = new Set();
  const ingrReps = dishes
    .flat()
    .filter(
      ingr =>
        set.has(ingr) ? true : (set.add(ingr), false)
    );
  const uniqueIngreReps = [...new Set(ingrReps)]
  return uniqueIngreReps
    .sort()
    .map(
      ingredientRep => {
        const dishesByIng = dishes
          .filter(dish => dish.includes(ingredientRep))
          .map(fullArray => fullArray[0]);
        return [ingredientRep, ...dishesByIng.sort()];
      }
    );
}
const dishes = [
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
  ["christmas turkey", "turkey", "sauce", "herbs"],
]

console.log(organizeChristmasDinner(dishes));
/**
[ [ 'sauce', 'christmas turkey', 'pizza' ],
  [ 'sugar', 'cake', 'hot chocolate' ] ]
 */
console.log(organizeChristmasDinner([
  ["gingerbread", "flour", "ginger", "sugar"],
  ["glazed ham", "ham", "honey", "sugar", "vinegar"],
  ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
  ["vegetable soup", "carrot", "potato", "onion", "garlic"],
  ["fruit punch", "apple juice", "orange juice", "sugar"]
]));
/**
[ [ 'garlic', 'roast chicken', 'vegetable soup' ],
  [ 'sugar', 'fruit punch', 'gingerbread', 'glazed ham' ] ]
 */

/**
Building ingrReps:

O(n): Iterate through all elements in the arrays.
Building uniqueIngreReps:

O(m): Constructing a set of unique ingredients.
Sorting uniqueIngreReps:

O(m * log(m)): Sorting the unique ingredients.
Building the Final Result:

O(m * n * log(k)): For each unique ingredient, filter dishes and sort them.
In summary, the overall time complexity is O(m * n * log(k) + m * log(m)), where n is the total number of elements, m is the number of unique ingredients, and k is the maximum number of dishes containing a specific ingredient.

If m is significantly smaller than n, and k is not too large, you can simplify it to O(n * log(n)), but the precise complexity depends on the characteristics of your input data.
 */