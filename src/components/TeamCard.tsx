import React from 'react';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
export default function TeamCard(props: { team: ComorionTeam }): JSX.Element {
  const { team } = props;
  return (
    <Link href='team/[id]' as={`/team/${team.id}`}>
      <a
        style={{
          textDecoration: 'none',
        }}
      >
        <Card style={{ maxWidth: 500, marginBottom: '4em' }}>
          <Card.Header>
            <h3>{team.info.name}</h3>
            <hr />
            <h5>{team.info.headline}</h5>
          </Card.Header>
          <Card.Img
            draggable={false}
            variant='top'
            src={team.logo}
            alt={team.info.name + ' image'}
            style={{
              maxHeight: 500,
              maxWidth: 500,
            }}
          />
          <Card.Body>
            <p style={{ color: 'black' }}>{team.info.description}</p>
          </Card.Body>
        </Card>
      </a>
    </Link>
  );
}
