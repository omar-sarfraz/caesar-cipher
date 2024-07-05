export function createDecrypter(key: number): Function {
  return () => console.log(key);
}
