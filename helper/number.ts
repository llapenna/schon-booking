export const clamp = (value: number, max = Infinity, min = 0) =>
  Math.min(Math.max(value, min), max);

export const nArray = (n: number) => Array.from({ length: n }, (_, i) => i);
