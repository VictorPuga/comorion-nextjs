export default function flattenObject(
  object: object,
  separator: string = "."
): object {
  const ob: any = { ...object };
  let toReturn: any = {};
  for (var key in ob) {
    if (!ob.hasOwnProperty(key)) continue;
    if (typeof ob[key] == "object") {
      var flatObject: any = flattenObject(ob[key], separator);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        toReturn[key + separator + x] = flatObject[x];
      }
    } else {
      toReturn[key] = ob[key];
    }
  }
  return toReturn;
}
