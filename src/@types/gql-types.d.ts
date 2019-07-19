interface GqlConn<T> {
  items: T[];
  nextToken: string;
}

interface GqlResult<T> {
  data?: {
    [key: string]: T | GqlConn<T>;
  };
  errors?: [object];
  extensions?: {
    [key: string]: any;
  };
}
