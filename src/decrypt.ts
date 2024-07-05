export function createDecrypter(key: number): Function {
  return (s: string): string => {
    return s;
  };
}
