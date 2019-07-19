import React from 'react';
import Button from 'react-bootstrap/Button';
import LoadingDisplay from './LoadingDisplay';
import ErrorDisplay from './ErrorDisplay';
import NoElements from './NoElements';
import useConnection from '../hooks/useConnection';
type ConnectionMapperProps = {
  errorMessage: string;
  noun: string;
  action: (nextToken?: string) => Promise<GqlConn<any>>;
  children: (items: any[]) => JSX.Element;
  plural?: string;
};
export default function ConnectionMapper(
  props: ConnectionMapperProps,
): JSX.Element {
  const plural = props.plural || props.noun + 's';
  const [items, loadMoreItems, canLoadMore, loading, error] = useConnection<
    GqlConn<any>
  >(props.action);
  if (error) return <ErrorDisplay message={props.errorMessage} />;
  if (loading) return <LoadingDisplay noun={plural} />;
  if (!items.length) return <NoElements noun={props.noun} plural={plural} />;
  return (
    <div style={{ width: '100%' }}>
      <div>{items && props.children(items)}</div>
      <div
        style={{
          margin: 'auto',
          marginTop: '2em',
          marginBottom: '2em',
        }}
      >
        {items && canLoadMore && (
          <Button onClick={loadMoreItems}>Cargar más {plural}</Button>
        )}
      </div>
    </div>
  );
}
