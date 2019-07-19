import { API, graphqlOperation } from 'aws-amplify';
import * as Mocks from '../mocks/mockTypes';
// import aws_configs from "../aws-exports";
// API.configure(aws_configs);
type repoConfigs = 'mock' | 'appsync' | 'do-endpoint';
export default class AbstractRepository<T> {
  config: repoConfigs | null = null;
  constructor(config: repoConfigs = 'appsync') {
    this.config = config;
  }
  protected async _requestAppSync(
    operation: string,
    variables?: object,
  ): Promise<T | GqlConn<T>> {
    let response: GqlResult<T> | undefined = undefined;
    let data: T | GqlConn<T> | undefined = undefined;
    try {
      response = (await API.graphql(
        graphqlOperation(operation, variables),
      )) as GqlResult<T>;
    } catch (e) {
      throw new Error('Error performing GQL operation: ' + JSON.stringify(e));
    }
    console.log(response);
    if (response) {
      if (response.errors)
        throw new Error(
          'Errors performing GQL operation: ' +
            response.errors.map(err => JSON.stringify(err)).join(','),
        );
      if (response.data) {
        data = Object.values(response.data)[0];
        return data as T | GqlConn<T>;
      }
    }
    throw new Error('Unexpected error performing GQL operation');
  }
  protected async _mockRequest(
    operation: string,
    // variables?: object,
  ): Promise<T | GqlConn<T>> {
    const operationName: string = operation
      .match(/(mutation|query)\s(\w+)/g)![0]
      .split(' ')[1];
    const intoConnection = (element: T) => ({
      nextToken: '',
      items: [element, element],
    });
    console.log(operationName);
    await setTimeout(() => true, 1000);
    if (operationName.includes('Events'))
      return intoConnection((Mocks.event as unknown) as T);
    if (operationName.includes('Event')) return (Mocks.event as unknown) as T;
    if (operationName.includes('Teams'))
      return intoConnection((Mocks.team as unknown) as T);
    if (operationName.includes('Team')) return (Mocks.team as unknown) as T;
    if (operationName.includes('Users'))
      return intoConnection((Mocks.user as unknown) as T);
    if (operationName.includes('User')) return (Mocks.user as unknown) as T;
    throw new Error(
      'Unexpected error on mock request for operation ' + ' operation',
    );
  }
  protected async _handleRequest(
    operation: string,
    variables?: object,
  ): Promise<T | GqlConn<T>> {
    if (this.config === 'mock') return this._mockRequest(operation);
    if (this.config === 'appsync')
      return this._requestAppSync(operation, variables);
    if (this.config === 'do-endpoint')
      throw new Error('Config not yet supported');
    throw new Error('Invalid Repository Config');
  }
}
