export const generateId = (): string =>
  Math.random().toString(36).substring(2, 9);

export function updateArray<T>(
  array: T[],
  predicate: (item: T) => boolean,
  updater: (item: T) => T
): T[] {
  return array.map((item) => (predicate(item) ? updater(item) : item));
}
