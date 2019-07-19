// @param [template] should use DD MM YYYY YY hh mm ss to parse the respective date values
export default function parseStringToDate(
  datestring: string,
  template: string = "DD/MM/YYYY, hh:mm"
): Date {
  if (
    datestring.match(new RegExp(template.replace(/[YMDhms]/g, "\\d"))) !== null
  ) {
    const baseDate = new Date();
    let yearHasBeenSet: boolean = false;
    const getDateSection = (search: string) =>
      Number(datestring.substr(template.indexOf(search), search.length));
    if (template.includes("YYYY")) {
      baseDate.setFullYear(getDateSection("YYYY"));
      yearHasBeenSet = true;
    }
    if (template.includes("YY") && !yearHasBeenSet)
      baseDate.setFullYear(2000 + getDateSection("YY"));
    if (template.includes("MM")) baseDate.setMonth(getDateSection("MM"));
    if (template.includes("DD")) baseDate.setDate(getDateSection("DD"));
    if (template.includes("hh")) baseDate.setHours(getDateSection("hh"));
    if (template.includes("mm")) baseDate.setMinutes(getDateSection("mm"));
    if (template.includes("ss")) baseDate.setSeconds(getDateSection("ss"));
    return baseDate;
  }
  return new Date("Invalid Date");
}
