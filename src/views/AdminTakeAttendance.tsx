import React, { useState } from 'react';
import withAdminProtection from '../hocs/withAdminProtection';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Inputs from './AdminTakeAttendanceInputs';
import useEventListener from '../hooks/useEventListener';
import UserRepository from '../repositories/UserRepository';
import AppendedInput from '../components/AppendedInput';

const userRepo = new UserRepository('mock');
export default withAdminProtection(function AdminTakeAttendance(): JSX.Element {
  const [user, setUser] = useState<null | ComorionUser>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<{
    studentId: string;
    email: string;
    phone: string;
    [key: string]: string;
  }>({
    studentId: '',
    email: '',
    phone: '',
  });
  useEventListener('keydown', (e: any) => {
    if (e.key === 'Enter' && !user) {
      const { studentId, email, phone } = inputValues;
      if (studentId) {
        userRepo
          .getUserWithId(studentId)
          .then(setUser)
          .catch(() =>
            alert(
              'Ha ocurrido un error al buscar e usuario.\nBusqueda no exitosa.',
            ),
          );
      } else if (email) {
        userRepo
          .getUserWithEmail(email)
          .then(setUser)
          .catch(() =>
            alert(
              'Ha ocurrido un error al buscar e usuario.\nBusqueda no exitosa.',
            ),
          );
      } else if (phone) {
        userRepo
          .getUserWithPhone(phone)
          .then(setUser)
          .catch(() =>
            alert(
              'Ha ocurrido un error al buscar e usuario.\nBusqueda no exitosa.',
            ),
          );
      } else {
        alert('No hay datos para buscar usuario');
      }
    } else if (e.key === 'Enter' && user) {
      setLoading(true);
      setTimeout(() => {
        setUser(null);
        setInputValues({
          studentId: '',
          email: '',
          phone: '',
        });
        setLoading(false);
      }, 1000 + Math.random() * 500);
    }
  });
  const updateInputValue = (key: string, value: string) => {
    setInputValues(oldInputVals => {
      const newInputVals = { ...oldInputVals };
      newInputVals[key] = value;
      return newInputVals;
    });
  };
  return (
    <Container>
      <Row>
        {Inputs.map(
          (
            { name, label, optionValues, optionLabels, isPrefix, onChange },
            index,
          ) => {
            let opts: {
              value: string;
              label?: string;
            }[] = [];
            const optVals = [...optionValues, ''];
            const optLabels = [...(optionLabels || optionValues), '...'];
            for (let i in optVals) {
              opts[i] = { value: optVals[i], label: optLabels[i] };
            }
            return (
              <Col
                key={index}
                sm='12'
                md={
                  index == 1
                    ? { order: 12, span: '12' }
                    : { order: 1, span: '6' }
                }
                lg={
                  index == 1 ? { order: 0, span: '6' } : { order: 0, span: '3' }
                }
              >
                <AppendedInput
                  appendices={opts}
                  type={isPrefix ? 'prefix' : 'suffix'}
                  onChange={(selectedVal: string) => {
                    updateInputValue(name, onChange(selectedVal));
                  }}
                  label={label}
                  value={inputValues[name]}
                />
              </Col>
            );
            /*  return (
              <Col key={index}>
                <Form.Group controlId={name}>
                  <Form.Label>{label}</Form.Label>
                  <Form.Control
                    placeholder={label}
                    value={inputValues[name]}
                    onChange={(e: any) =>
                      updateInputValue(name, onChange(e.target.value))
                    }
                  />
                  <div className="d-flex flex-column">
                    <ToggleButtonGroup
                      name="phonePrefix"
                      onChange={(selectedVal: string) => {
                        let updatedValue = "";
                        console.log(
                          optionValues
                            .map(el => (isPrefix ? `(^${el})` : `(${el}$)`))
                            .join("|")
                            .replace(/\+/g, "\\\\+")
                        );
                        updatedValue = inputValues[name].replace(
                          new RegExp(
                            optionValues
                              .map(el => (isPrefix ? `^${el}` : `${el}$`))
                              .join("|")
                              .replace(/\+/g, "\\+"),
                            "g"
                          ),
                          "%"
                        );
                        if (updatedValue.includes("%")) {
                          updatedValue = updatedValue.replace(
                            /\%+/,
                            selectedVal
                          );
                        } else {
                          updatedValue = isPrefix
                            ? selectedVal + inputValues[name]
                            : inputValues[name] + selectedVal;
                        }
                        updateInputValue(name, updatedValue);
                        if (document.getElementById(name))
                          document.getElementById(name)!.focus();
                      }}
                      size="sm"
                      className="mt-3"
                    >
                      {optVals.map((value, i) => (
                        <ToggleButton key={i} value={value}>
                          {optLabels[i]}
                        </ToggleButton>
                      ))}
                    </ToggleButtonGroup>
                  </div>
                </Form.Group>
              </Col>
            );
            */
          },
        )}
      </Row>
      <br />
      <Row>
        <Col>
          <h5>Enter</h5>
          <p>Buscar usuario o borrar datos</p>
          <br />
          <h5>Orden</h5>
          <p>Matrícula > Email > Teléfono</p>
        </Col>
        <Col>
          {user ? (
            <>
              <h4>Usuario encontrado</h4>
              <div className='font-weight-bold'>Nombre:</div>
              {`${user.fname} ${user.lname}`}
              <div className='font-weight-bold'>Institución:</div>{' '}
              {user.institution}
              <div className='font-weight-bold'>Cumpleaños:</div>{' '}
              {new Date(user.bdate).toLocaleDateString('es-MX', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
              <br />
              {loading && (
                <>
                  <div style={{ width: '2rem', margin: 'auto', marginTop: 20 }}>
                    <Spinner animation='border' />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p>Guardando asistencia...</p>
                  </div>
                </>
              )}
            </>
          ) : (
            <h4>No hay usuario</h4>
          )}
        </Col>
      </Row>
    </Container>
  );
});
