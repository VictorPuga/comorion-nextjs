import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import findErrorMessages from '../utils/findErrorMessages';
export default function ImageInput(props: ImageInputProps) {
  const {
    onChange,
    label,
    sizeKb = 200,
    value,
    validation,
    onValidationStateChange,
  } = props;
  const [dragStatus, setDragStatus] = useState<
    'none' | 'successfulDrag' | 'typeError' | 'sizeError' | 'successfulUpload'
  >('none');
  const errorMessages = findErrorMessages<string>(value, validation);
  useEffect(() => {
    if (onValidationStateChange)
      onValidationStateChange(
        !Boolean(errorMessages.length || !value.includes('https://')),
      );
  }, [JSON.stringify(errorMessages), value.includes('https://')]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    onDrop: useCallback((files: File[]) => {
      console.log(files);
      if (files.length && files[0].type.includes('image')) {
        if (files[0].size <= 100000) {
          var reader = new FileReader();
          reader.readAsDataURL(files[0]);
          reader.onload = function(e: any) {
            onChange(e.target.result);
            setDragStatus('successfulDrag');
          };
        } else {
          setDragStatus('sizeError');
        }
      } else {
        setDragStatus('typeError');
      }
    }, []),
  });
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        isInvalid={
          (errorMessages && JSON.stringify(errorMessages) !== '[]') ||
          dragStatus.includes('Error')
        }
        as='div'
        style={{
          height: 80,
          padding: 0,
          border: 'none',
        }}
        isValid={dragStatus === 'successfulDrag'}
      >
        <div
          {...getRootProps({
            style: {
              textAlign: 'center',
              paddingTop: 26,
              fontSize: 16,
              backgroundColor: '#f5f5f5',
              color: '#c0c0c0',
              height: 80,
            },
          })}
        >
          <input {...getInputProps()} multiple={false} />
          <p>Arrastra una foto o da click</p>
        </div>
      </Form.Control>
      <Form.Control.Feedback type='valid'>
        {dragStatus === 'successfulDrag' && 'Imagen aceptada'}
      </Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>
        {dragStatus === 'typeError' && 'Archivo debe ser imagen'}
        {dragStatus === 'sizeError' && `Archivo debe ser menor a ${sizeKb} kb`}
        {errorMessages && errorMessages.map((el, i) => <p key={i}>{el}</p>)}
      </Form.Control.Feedback>
      {dragStatus === 'successfulDrag' && (
        <>
          <Alert variant='warning' style={{ marginTop: 8 }}>
            Si te ha gustado esta imagen, <strong>asegurate de subirla</strong>{' '}
            antes de continuar.
            <br />
            Alternativamente, intenta con otra imagen.
          </Alert>
          <Button
            block
            style={{ marginTop: 8 }}
            onClick={() => alert(value)}
            variant='info'
            disabled={dragStatus !== 'successfulDrag'}
          >
            Subir imagen
          </Button>
        </>
      )}
    </Form.Group>
  );
}
