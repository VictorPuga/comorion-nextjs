import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import router from 'next/router';
import Logo from '../assets/logo.svg';

export default function Routes(): JSX.Element {
  return (
    <Navbar
      variant='light'
      collapseOnSelect
      expand='sm'
      style={{
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        background: '#f5f5f5',
      }}
      fixed='top'
    >
      <Navbar.Brand onClick={() => router.push('/')}>
        <Image src={Logo} height='60px' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link onClick={() => router.push('/create-team')}>
            Crea un equipo
          </Nav.Link>
          <Nav.Link onClick={() => router.push('/create-event')}>
            Crea un evento
          </Nav.Link>
          <Nav.Link onClick={() => router.push('/create-user')}>
            Sign In
          </Nav.Link>
          <Nav.Link onClick={() => router.push('/take-attendance')}>
            Tomar asistencia
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
