interface InputValidationObject<T> {
  validate: (value: T) => boolean;
  invalidMessage: string;
}
interface BaseInputProps<T> {
  onChange: (value: T) => void;
  onValidationStateChange?: (validationState: boolean) => void;
  value: T;
  label: string;
  validation?: InputValidationObject<T>[];
}
interface AppendedInputProps extends BaseInputProps<string> {
  appendices: {
    value: string;
    label?: string;
  }[];
  type: "prefix" | "suffix";
}
interface ImageInputProps extends BaseInputProps<string> {
  sizeKb: number;
}
interface SelectInputProps extends BaseInputProps<string> {
  options: (string | { label: string; value: string })[];
}
interface TextareaInputProps extends BaseInputProps<string> {
  rows: number;
}
interface FormSubmitalProps {
  entity: string;
  onSubmit: (e: any) => any;
  isValid: boolean;
}
type InputTypes =
  | "Text"
  | "Select"
  | "Textarea"
  | "Place"
  | "Image"
  | "Appended";
interface PaginatedInput {
  onValidationStateChange?: (validationState: boolean) => void;
  valuePath: string;
  inputType?: InputTypes;
  label: string;
  required?: boolean;
  validation?: InputValidationObject<string>[];
  options?: (string | { label: string; value: string })[];
  rows?: number;
  appendices?: {
    value: string;
    label?: string;
  }[];
  type?: "prefix" | "suffix";
  sizeKb?: number;
}
interface PaginatedFormSection {
  inputs: PaginatedInput[];
  label: string;
}
interface PaginatedFormProps {
  sections: PaginatedFormSection[];
  onSubmit: (e: any) => any;
  updateData: (path: string, value: any) => void;
  entity: string;
  data: { [k: string]: any };
  width?: number | string;
  viewer?: (activeKey: number, errors: boolean[][]) => JSX.Element;
}
type InputPropsIntersection = BaseInputProps &
  AppendedInputProps &
  ImageInputProps &
  SelectInputProps &
  TextareaInputProps;
