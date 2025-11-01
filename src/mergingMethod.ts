export function merge(a1: number[], a2: number[], a3: number[]): number[] {
  const out: number[] = [];
  let i = 0, j = 0, k = a3.length - 1;
  while (i < a1.length || j < a2.length || k >= 0) {
    const x = i < a1.length ? a1[i] : Infinity;
    const y = j < a2.length ? a2[j] : Infinity;
    const z = k >= 0 ? a3[k] : Infinity;
    if (x <= y && x <= z) { out.push(x); i++; }
    else if (y <= x && y <= z) { out.push(y); j++; }
    else { out.push(z); k--; }
  }
  return out;
}