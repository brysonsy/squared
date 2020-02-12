const testArray = [1,2,3,4,5,6,7,8,9,10];

function squared(array) {
  let arrays = _.partition(array, n => Math.sqrt(n) % 1 === 0);
  return arrays;
}

console.log(squared(testArray));