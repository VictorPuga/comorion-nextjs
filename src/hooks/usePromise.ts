import { useState, useEffect } from "react";
export default function usePromise<T>(
  action: () => Promise<T>,
  deps: any[]
): [T?, boolean?, Error?] {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  useEffect(() => {
    action()
      .then(setData)
      .catch(setError);
  }, deps);
  return [data, data === undefined && error === undefined, error];
}
/*
    const [events, setEvents] = useState<ComorionEvent[]>([]);
  const [nextToken, setNextToken] = useState<string | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  useEffect(() => {
    repo
      .getEventsByDate(new Date(), 400, nextToken)
      .then(events => {
        setEvents(events.items);
        setNextToken(events.nextToken);
      })
      .catch(e => setError(e));
  }, []);

*/
