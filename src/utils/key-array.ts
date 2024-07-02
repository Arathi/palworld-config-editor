export type KeyArray<T> = Array<keyof T>;

export function keysOf<T>(object: T): KeyArray<T> {
  // type KeyType = keyof T;
  const keys: KeyArray<T> = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
