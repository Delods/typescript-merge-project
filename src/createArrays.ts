export function createAscendingArray(n: number, start = 0, maxStep = 3): number[] {
  const arr: number[] = [];
  let val = start;
  for (let i = 0; i < n; i++) {
    val += Math.floor(Math.random() * (maxStep + 1));
    arr.push(val);
  }
  return arr;
}

export function createDescendingArray(n: number, start = 50, maxStep = 3): number[] {
  const arr: number[] = [];
  let val = start;
  for (let i = 0; i < n; i++) {
    val -= Math.floor(Math.random() * (maxStep + 1));
    arr.push(val);
  }
  return arr;
}
