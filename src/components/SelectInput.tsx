import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import findErrorMessages from '../utils/findErrorMessages';
export default function SelectInput(props: SelectInputProps) {
  const {
    label,
    validation,
    value,
    onChange,
    options,
    onValidationStateChange,
  } = props;
  const errorMessages = findErrorMessages<string>(value, validation);
  useEffect(() => {
    if (onValidationStateChange)
      onValidationStateChange(!Boolean(errorMessages.length));
  }, [JSON.stringify(errorMessages)]);
  return (
    <Form.Group controlId='validationFormik04'>
      <Form.Label>{label}</Form.Label>
      <div className='selectBox'>
        <Form.Control
          isInvalid={errorMessages && JSON.stringify(errorMessages) !== '[]'}
          placeholder={label}
          value={value}
          onChange={(e: any) => onChange(e.target.value as string)}
          as='select'
        >
          <optgroup label={label}>
            {options.map((el, i) => (
              <option key={i} value={typeof el != 'string' ? el.value : el}>
                {typeof el != 'string' ? el.label : el}
              </option>
            ))}
          </optgroup>
        </Form.Control>
      </div>
      <Form.Control.Feedback type='invalid'>
        {errorMessages && errorMessages.map(el => <p>{el}</p>)}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
