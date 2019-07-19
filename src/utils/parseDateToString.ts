// @param [template] should use DD MM YYYY YY hh mm ss to parse the respective date values
export default function parseDateToString(
  date: Date = new Date(),
  template: string = "DD/MM/YYYY, hh:mm"
): string {
  // console.log(date);
  if (date.toString() !== "Invalid Date") {
    const stringDate = (x: number): string =>
      x < 10 ? "0" + String(x) : String(x);
    let baseString: string = template;
    if (baseString.includes("YYYY")) {
      const year = stringDate(date.getFullYear());
      baseString = baseString.replace(/YYYY/g, year);
    }
    if (baseString.includes("YY")) {
      const shortyear = stringDate(date.getFullYear()).substr(2, 2);
      baseString = baseString.replace(/YY/g, shortyear);
    }
    if (baseString.includes("MM")) {
      const month = stringDate(date.getMonth());
      baseString = baseString.replace(/MM/g, month);
    }
    if (baseString.includes("DD")) {
      const days = stringDate(date.getDate());
      baseString = baseString.replace(/DD/g, days);
    }
    if (baseString.includes("hh")) {
      const hours = stringDate(date.getHours());
      baseString = baseString.replace(/hh/g, hours);
    }
    if (baseString.includes("mm")) {
      const minutes = stringDate(date.getMinutes());
      baseString = baseString.replace(/mm/g, minutes);
    }
    if (baseString.includes("ss")) {
      const seconds = stringDate(date.getSeconds());
      baseString = baseString.replace(/ss/g, seconds);
    }
    return baseString;
  }
  return date.toString();
}
