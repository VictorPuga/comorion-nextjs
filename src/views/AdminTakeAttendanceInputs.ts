type InputInterface = {
  name: string;
  label: string;
  optionValues: string[];
  optionLabels?: string[];
  isPrefix: boolean;
  onChange: (value: string) => string;
};
const Inputs: InputInterface[] = [
  {
    name: "studentId",
    optionValues: ["A01"],
    label: "Matrícula",
    isPrefix: true,
    onChange: (value: string) => value.toUpperCase()
  },
  {
    name: "email",
    optionValues: ["@gmail.com", "@tec.mx", "@itesm.mx", "@hotmail.com"],
    optionLabels: ["gmail", "tec", "itesm", "hotmail"],
    label: "Email",
    isPrefix: false,
    onChange: (value: string) => value
  },
  {
    name: "phone",
    optionValues: ["+521614", "+521"],
    label: "Celular",
    isPrefix: true,
    onChange: (value: string) => (value.match(/\d|^\+/g) || []).join("")
  }
];
export default Inputs;
