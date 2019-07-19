import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import svg404 from '../assets/404.svg';

export default function NotFound(): JSX.Element {
  return (
    <Container className='text-center'>
      <h3>¡No hay nada!</h3>
      <div style={{ maxWidth: 700, margin: 'auto' }}>
        <Image fluid src={svg404} draggable={false} />
      </div>
      <p>
        Por favor, continúa a <a href='/'>la página principal</a>.
      </p>
    </Container>
  );
}
