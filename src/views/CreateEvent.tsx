import React from 'react';
import Modal from 'react-bootstrap/Modal';
import EventCard from '../components/EventCard';
import InfoBody from '../components/InfoBody';
import useNested from '../hooks/useNested';
// import EventRepository from '../repositories/EventRepository';
import PaginatedForm from '../components/PaginatedForm';
import { sections, initialEvent } from './CreateEventFormConfigs';
// const eventRepo = new EventRepository();
export default function CreateTeam(): JSX.Element {
  const [event, flatEvent, updateEvent] = useNested<ComorionEvent>(
    initialEvent,
  );
  return (
    <PaginatedForm
      sections={sections}
      data={flatEvent}
      entity='evento'
      updateData={updateEvent}
      onSubmit={() => alert('SUBMISSION')}
      viewer={activeKey =>
        activeKey === 4 ? (
          <Modal.Dialog>
            <InfoBody
              body={event.info.body}
              onHide={() => void 0}
              name={event.info.name}
            />
          </Modal.Dialog>
        ) : (
          <EventCard
            fromTemplate
            index={activeKey === 5 ? 1 : 0}
            eventObj={event}
          />
        )
      }
    />
  );
}
