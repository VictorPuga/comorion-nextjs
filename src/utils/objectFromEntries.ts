export default function objectFromEntries(entries: [string, any][]) {
  return entries.reduce(
    function(prev, curr) {
      prev[curr[0]] = curr[1];
      return prev;
    },
    {} as { [key: string]: any }
  );
}
