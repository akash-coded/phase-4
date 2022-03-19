function compact(arr) {
  if (srr.length > 3) {
    return arr.trim(0, 3);
  }
  return arr;
}

let myArr = [1, 2, 3, 4, 5];
let trimmedArr = compact(myArr); // code crash
console.log(trimmedArr);
