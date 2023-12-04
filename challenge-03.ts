function findNaughtyStep(original: string, modified: string): string {
  const [large, small] = original.length > modified.length ?
  [original, modified] : [modified, original];
  const characters = [...large].filter((letter, index) =>
    letter !== small[index]
  );
  return characters[0] ?? '';
}
