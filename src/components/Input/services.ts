export default function getValidationError(
  value: string,
  expressionToMatch:
    | { [Symbol.match](string: string): RegExpMatchArray | null }
    | undefined,
  inputName: string
): string {
  const iEmpty = !value;
  if (iEmpty) {
    return `Error: ${inputName} must not be empty`;
  }
  if (expressionToMatch) {
    const isValueValid = Boolean(value.match(expressionToMatch));
    if (isValueValid) {
      return "";
    }
    return `Error: ${inputName} is invalid`;
  }
  return "";
}
