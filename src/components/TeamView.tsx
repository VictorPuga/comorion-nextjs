import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import parseCustomMarkdown from '../utils/parseCustomMarkdown';
import { gmapsEmbededApiKey } from '../keys';
export default function(props: { team: ComorionTeam }): JSX.Element {
  const { team: t } = props;
  return (
    <Container>
      <Jumbotron>
        <Row>
          <Col md={400}>
            <Figure>
              <Figure.Image
                width='100%'
                height='100%'
                alt={t.info.name + ' image'}
                src={t.logo}
                draggable={false}
              />
            </Figure>
          </Col>
          <Col style={{ paddingBottom: '15px' }}>
            <h1 className='wrap'>{t.info.name}</h1>
            <hr />
            <h3 className='wrap'>{t.info.headline}</h3>
            <br />
          </Col>
        </Row>
      </Jumbotron>
      <Row style={{ marginBottom: '5rem' }}>
        <Col md='6'>
          <div
            className='wrap'
            dangerouslySetInnerHTML={{
              __html: parseCustomMarkdown(t.info.body),
            }}
          />
        </Col>
        <Col md='6'>
          <h2 className='text-center mt-5 wrap'>"{t.info.description}"</h2>
        </Col>
      </Row>
      <Row>
        <Col md='6' style={{ marginBottom: '5rem' }}>
          <h2>Visítanos:</h2>
          <div>
            <iframe
              width='100%'
              height={300}
              style={{ border: 0, maxWidth: 500, maxHeight: 500 }}
              src={`https://www.google.com/maps/embed/v1/place?key=${gmapsEmbededApiKey}&q=place_id:${
                t.headquarters.placeId
              }&zoom=18`}
            />
            <h6 className='wrap'>Instrucciones de entrada:</h6>
            <p className='wrap'>{t.headquarters.instructions}</p>
          </div>
        </Col>
        <Col md='6' style={{ marginBottom: '5rem' }}>
          <h2>Contáctanos:</h2>
          <p>
            Email:{' '}
            <a href={'mailto:' + t.contactInfo.email}>{t.contactInfo.email}</a>
          </p>
          {t.contactInfo.phone && (
            <p>
              Celular: <a>{t.contactInfo.phone}</a>
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
}
