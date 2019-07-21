import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';
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
      <Link href='/' passHref>
        <Navbar.Brand>
          <Image src={Logo} height='60px' />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Link href='/create-team' passHref>
            <Nav.Link>Crea un equipo</Nav.Link>
          </Link>
          <Link href='/create-event' passHref>
            <Nav.Link>Crea un evento</Nav.Link>
          </Link>
          <Link href='/create-user' passHref>
            <Nav.Link>Sign In</Nav.Link>
          </Link>
          <Link href='/take-attendance' passHref>
            <Nav.Link>Tomar asistencia</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
