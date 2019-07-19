import { useState, useEffect } from "react";
import usePromise from "./usePromise";
export default function useConnection<T>(
  action: (nextToken?: string) => Promise<GqlConn<T>>
): [T[], () => void, boolean, boolean?, Error?] {
  const [nextToken, setNextToken] = useState<string | undefined>(undefined);
  const [data, loading, error] = usePromise<GqlConn<T>>(
    () => action(nextToken),
    [nextToken]
  );
  const [items, setItems] = useState<T[]>([]);
  useEffect(() => {
    if (data && data.items) {
      if (items.length) {
        setItems([...items, ...data.items]);
      } else {
        setItems(data.items);
      }
    } else {
      setItems([]);
    }
  }, [data]);
  const canLoadMore = data ? (data.nextToken ? true : false) : false;
  console.log({ canLoadMore, nextToken, data });
  const loadMore = () => setNextToken(data!.nextToken);
  return [items, loadMore, canLoadMore, loading, error];
}
