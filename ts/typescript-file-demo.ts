function makeCompact(arr: string[]) {
  if (arr.length > 3) {
    return arr.slice(0, 3);
  }
  return arr;
}

let beforeArr = [1, 2, 3, 4, 5];
let afterArr = compact(beforeArr); // code crash
console.log(afterArr);
