import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import findErrorMessages from "../utils/findErrorMessages";
export default function TextareaInput(props: TextareaInputProps) {
  const {
    label,
    validation,
    value,
    onChange,
    rows,
    onValidationStateChange
  } = props;
  const errorMessages = findErrorMessages<string>(value, validation);
  useEffect(() => {
    if (onValidationStateChange)
      onValidationStateChange(!Boolean(errorMessages.length));
  }, [JSON.stringify(errorMessages)]);
  return (
    <Form.Group controlId="validationFormik04">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        isInvalid={errorMessages && JSON.stringify(errorMessages) !== "[]"}
        placeholder={label}
        value={value}
        as="textarea"
        rows={String(rows)}
        onChange={(e: any) => onChange(e.target.value as string)}
      />
      <Form.Control.Feedback type="invalid">
        {errorMessages && errorMessages.map((el, i) => <p key={i}>{el}</p>)}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
