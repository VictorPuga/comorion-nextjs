export default function parseCustomMarkdown(source: string): string {
  // create a modified source
  let modsource = source;
  // convert # into h4
  modsource = modsource.replace(/#(.*)/g, "<h4>$1</h4>");
  // convert ** to bold
  modsource = modsource.replace(/\*\*(.*)\*\*/g, "<strong>$1</strong>");
  // conver * to italics
  modsource = modsource.replace(/\*(.*)\*/g, "<em>$1</em>");
  // convert []() to links
  modsource = modsource.replace(/\[(.*)]\((.*)\)/g, '<a href="$2">$1</a>');
  // convert --- to hr
  modsource = modsource.replace(/\n---\n/g, "<hr />");
  // convert \n to br
  modsource = modsource.replace(/\n/g, "<br />");
  return modsource;
}
