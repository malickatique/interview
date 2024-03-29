// Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['Hassan', 'Ali']);

numArray.push('An invalid number');

// How generic type translation works?
