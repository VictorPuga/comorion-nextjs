import React from 'react';
import TeamRepository from '../repositories/TeamRepository';
import ConnectionMapper from '../components/ConnectionMapper';
import TeamCard from '../components/TeamCard';
const repo = new TeamRepository('mock');
export default function Teams(): JSX.Element {
  return (
    <ConnectionMapper
      errorMessage='Error'
      noun='equipo'
      action={nt => repo.listTeams(5, nt)}
    >
      {items => (
        <div>
          {items.map(item => (
            <TeamCard key={Math.random()} team={item} />
          ))}
        </div>
      )}
    </ConnectionMapper>
  );
}
