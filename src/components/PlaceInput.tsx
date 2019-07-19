import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Geosuggest from 'react-geosuggest';

import findErrorMessages from '../utils/findErrorMessages';

// IMPORTANT:
// NoSSR wrapper is used because Placeinput uses `google` variable,
// which throws error with SSR
import NoSSR from 'react-no-ssr';

export default function WrappedInput(props: BaseInputProps<string>) {
  return (
    <NoSSR>
      <PlaceInput {...props} />
    </NoSSR>
  );
}

function PlaceInput(props: BaseInputProps<string>) {
  const { value, onChange, validation, label, onValidationStateChange } = props;
  const errorMessages = findErrorMessages<string>(value, validation);
  useEffect(() => {
    if (onValidationStateChange)
      onValidationStateChange(!Boolean(errorMessages.length));
  }, [JSON.stringify(errorMessages)]);
  return (
    <Form.Group controlId='FormValidation_5_2'>
      <Form.Label>{label}</Form.Label>
      <Geosuggest
        placeholder='¿Dónde es el Evento?'
        type='text'
        name='info_description'
        style={{
          suggests: {
            position: 'initial',
          },
        }}
        inputClassName='form-control dropdown-toggle'
        suggestsClassName='dropdown-menu show'
        suggestsHiddenClassName='d-none'
        suggestItemClassName='dropdown-item'
        suggestItemActiveClassName='dropdown-item active'
        onSuggestSelect={({ placeId }: { placeId: any }) => onChange(placeId)}
        location={
          new google.maps.LatLng(28.67391717379794, -106.07982229828644)
        }
        radius={100}
        country='mx'
        highlightMatch
      />
      <Form.Control.Feedback type='invalid'>
        {errorMessages && errorMessages.map((el, i) => <p key={i}>{el}</p>)}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
