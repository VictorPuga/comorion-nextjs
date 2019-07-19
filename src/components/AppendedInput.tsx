import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import findErrorMessages from '../utils/findErrorMessages';

export default function AppendedInput(props: AppendedInputProps) {
  const {
    label,
    value,
    onChange,
    validation,
    appendices,
    type,
    onValidationStateChange,
  } = props;
  const inputIdentifier = label + '_appendedinput';
  const isPrefix = type === 'prefix';
  const errorMessages = findErrorMessages<string>(value, validation);
  useEffect(() => {
    if (onValidationStateChange)
      onValidationStateChange(!Boolean(errorMessages.length));
  }, [JSON.stringify(errorMessages)]);
  return (
    <Form.Group controlId={inputIdentifier}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        isInvalid={errorMessages && JSON.stringify(errorMessages) !== '[]'}
        placeholder={label}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
      />
      <div className='d-flex flex-column'>
        <ToggleButtonGroup
          name='phonePrefix'
          onChange={(selectedVal: string) => {
            let updatedValue = '';
            const main = appendices
              .slice(0, -1)
              .map(({ value }) => value)
              .join('|')
              .replace(/\+/g, '\\+');
            const pre = isPrefix ? '^(.*?)' : ''; // Match everything up to `main` (included)
            const suf = isPrefix ? '' : '.*$'; // Match everything after `main` (included)
            updatedValue = value.replace(
              new RegExp(`${pre}(${main})${suf}`, 'g'),
              '%*%',
            );
            if (updatedValue.includes('%')) {
              updatedValue = updatedValue.replace(/(\%\*\%)+/, selectedVal);
            } else {
              updatedValue = isPrefix
                ? selectedVal + value
                : value + selectedVal;
            }
            onChange(updatedValue);
            if (document.getElementById(inputIdentifier))
              document.getElementById(inputIdentifier)!.focus();
          }}
          size='sm'
          className='mt-3'
        >
          {appendices.map(({ value, label }, i) => (
            <ToggleButton key={i} value={value}>
              {label || value}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Form.Control.Feedback type='invalid'>
          {errorMessages && errorMessages.map((el, i) => <p key={i}>{el}</p>)}
        </Form.Control.Feedback>
      </div>
    </Form.Group>
  );
}
