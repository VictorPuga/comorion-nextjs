export default function unflatten(
  object: object,
  separator: string = "."
): object {
  var result = {};
  for (var i in object) {
    var keys = i.split(separator);
    keys.reduce(function(r, e, j) {
      return (
        (r as any)[e] ||
        ((r as any)[e] = isNaN(Number(keys[j + 1]))
          ? keys.length - 1 == j
            ? (object as any)[i]
            : {}
          : [])
      );
    }, result);
  }
  return result;
}
