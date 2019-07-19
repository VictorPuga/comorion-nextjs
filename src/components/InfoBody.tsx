import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import parseCustomMarkdown from '../utils/parseCustomMarkdown';
type InfoBodyProps = {
  onHide: () => void;
  body: string;
  name: string;
};
export default function InfoBody(props: InfoBodyProps): JSX.Element {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <p className='wrap'>{props.name}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className='wrap'
        dangerouslySetInnerHTML={{
          __html: parseCustomMarkdown(props.body),
        }}
      />
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </>
  );
}
