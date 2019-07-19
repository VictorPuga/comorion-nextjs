import React, { useState, useLayoutEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import InfoBody from './InfoBody';
import stringToDate from '../utils/parseStringToDate';
import { campus, categories, events } from '../utils/comorionDictonaries';
import { gmapsEmbededApiKey } from '../keys';
export default function EventCard(props: {
  eventObj: ComorionEvent;
  fromTemplate?: boolean;
  index?: number;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  useLayoutEffect(() => setIndex(props.index ? props.index : 0), [props.index]);
  const ev: ComorionEvent = props.eventObj;
  const startDate: Date = props.fromTemplate
    ? stringToDate(ev.eventStart)
    : new Date(ev.eventStart);
  const endDate: Date = props.fromTemplate
    ? stringToDate(ev.eventEnd)
    : new Date(ev.eventEnd);
  const oneDayEvent = startDate.getDate() === endDate.getDate();
  return (
    <div style={{ maxWidth: 500, margin: 'auto', marginBottom: '4em' }}>
      <Card>
        <Card.Header>
          <h3>{ev.info.name}</h3>
          🏫 {campus[ev.campus]}
          <br />
          🛠{' '}
          <Link href='team/[id]' as={`team/${ev.teamId}`}>
            <a>Equipo organizador</a>
          </Link>
          <p>
            💡{' '}
            <Badge variant='secondary'>
              {categories[ev.category].toUpperCase()}
            </Badge>
            {'   '}
            <Badge variant='secondary'>{events[ev.type].toUpperCase()}</Badge>
            {'   '}
            <br />
            {ev.info.headline}
          </p>
        </Card.Header>
        <Carousel
          wrap={false}
          controls={false}
          indicators={false}
          activeIndex={index}
          onSelect={() => void 0}
        >
          <Carousel.Item>
            <Card.Img
              draggable={false}
              variant='top'
              src={ev.image}
              alt={ev.info.name + ' image'}
              style={{
                maxHeight: 500,
                maxWidth: 500,
              }}
            />
          </Carousel.Item>
          <Carousel.Item
            style={{ position: 'relative', width: '100%', paddingTop: '100%' }}
          >
            <iframe
              width='100%'
              height='100%'
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=${gmapsEmbededApiKey}&q=place_id:${
                ev.place.placeId
              }&zoom=18`}
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          {index ? (
            <Alert style={{ borderLeft: '5px solid #eee' }}>
              <div style={{ fontWeight: 'bold' }}>¿Dónde?</div>
              <div>{ev.place.instructions}</div>
            </Alert>
          ) : (
            <Alert style={{ borderLeft: '5px solid #eee' }}>
              <div style={{ fontWeight: 'bold' }}>¿Qué?</div>
              <div>{ev.info.description}</div>
            </Alert>
          )}
          {ev.info.body !== '' && (
            <Modal
              show={open}
              onHide={() => setOpen(!open)}
              size='lg'
              aria-labelledby='contained-modal-title-vcenter'
              centered
            >
              <InfoBody
                name={ev.info.name}
                onHide={() => setOpen(!open)}
                body={ev.info.body}
              />
            </Modal>
          )}
          <ButtonToolbar>
            <Button variant='light' onClick={() => setIndex(index ? 0 : 1)}>
              {index ? '¿Qué?' : '¿Dónde?'}
            </Button>
            {ev.info.body !== '' && (
              <Button
                style={{ marginLeft: '1em' }}
                variant='info'
                onClick={() => setOpen(true)}
              >
                Ver más
              </Button>
            )}
            {ev.button.label !== '' && (
              <Button
                style={{ marginLeft: '1em' }}
                variant='primary'
                href={ev.button.link}
              >
                {ev.button.label}
              </Button>
            )}
          </ButtonToolbar>
        </Card.Body>
        <Card.Footer className='text-muted'>
          {startDate && endDate ? (
            <>
              {oneDayEvent ? (
                <>
                  {startDate.toLocaleDateString('es-MX', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                  {' - '}
                  {endDate.toLocaleTimeString('es-MX', {
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </>
              ) : (
                <>
                  {startDate.toLocaleDateString('es-MX', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                  {' - '}
                  {endDate.toLocaleTimeString('es-MX', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </>
              )}
            </>
          ) : (
            <>Fecha Inválida</>
          )}
        </Card.Footer>
      </Card>
    </div>
  );
}
