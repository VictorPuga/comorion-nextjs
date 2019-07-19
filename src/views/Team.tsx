import React from 'react';
import usePromise from '../hooks/usePromise';
import TeamView from '../components/TeamView';
import TeamRepository from '../repositories/TeamRepository';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingDisplay from '../components/LoadingDisplay';
const repo = new TeamRepository('mock');

export default function Team(props: { id: string }): JSX.Element {
  const [data, loading, error] = usePromise<ComorionTeam>(
    () => repo.getTeam(props.id),
    [],
  );
  if (error) return <ErrorDisplay message={error.message} />;
  if (loading) return <LoadingDisplay noun={'el equipo'} />;
  return <TeamView team={data as ComorionTeam} />;
}
