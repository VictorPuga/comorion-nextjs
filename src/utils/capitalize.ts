export default function capitalize(
  str: string,
  onlyStart: boolean = false,
  delimiter: string = "_",
  join: string = " "
): string {
  const capitalizeWord = (s: string) =>
    s[0].toUpperCase() + s.toLowerCase().substr(1);
  if (onlyStart) return capitalize(str);
  return str
    .split(delimiter)
    .map(capitalizeWord)
    .join(join);
}
