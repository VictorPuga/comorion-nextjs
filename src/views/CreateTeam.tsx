import React from 'react';
import TeamView from '../components/TeamView';
import useNested from '../hooks/useNested';
import PaginatedForm from '../components/PaginatedForm';
import { initialTeam, sections } from './CreateTeamFormConfigs';

export default function CreateTeam(): JSX.Element {
  const [team, flatTeam, setTeam] = useNested(initialTeam);
  return (
    <PaginatedForm
      data={flatTeam}
      onSubmit={() => alert('SUBMISSION')}
      updateData={setTeam}
      sections={sections}
      entity='equipo'
      viewer={() => <TeamView team={team} />}
    />
  );
}
