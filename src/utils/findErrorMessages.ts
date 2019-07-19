export default function findErrorMessages<T>(
  value: T,
  validation?: InputValidationObject<T>[]
): string[] {
  const errorMessages = (validation || [])
    .map(({ validate, invalidMessage }) =>
      validate(value) ? false : invalidMessage
    )
    .filter((el: string | boolean) => el !== false) as string[];
  return errorMessages;
}
