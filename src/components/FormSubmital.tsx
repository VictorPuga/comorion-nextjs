import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default function FormSubmital(props: FormSubmitalProps): JSX.Element {
  const { entity, onSubmit, isValid } = props;
  return (
    <Container>
      <h3>¡Genial!</h3>
      <br />
      <p>Has finalizado de crear tu {entity} en la plataforma Comorión.</p>
      <p>Este es el momento de "hable ahora o calle para siempre."</p>
      <p>Revisa los datos una ultima vez y publica cuando estés listo.</p>
      <br />
      <Button variant='success' disabled={!isValid} onClick={onSubmit}>
        Publica tu {entity}
      </Button>
      {!isValid && (
        <Alert variant='danger' style={{ marginTop: 8 }}>
          Resuelve los errores de tu {entity} para publicarlo.
        </Alert>
      )}
    </Container>
  );
}
