import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import BaseRepository from "./AbstractRepository";
class EventRepository extends BaseRepository<ComorionEvent> {
  async createEvent(event: ComorionEvent): Promise<ComorionEvent> {
    const data = await this._handleRequest(mutations.createEvent, {
      input: event
    });

    return data as ComorionEvent;
  }
  async updateEvent(event: ComorionEvent): Promise<ComorionEvent> {
    const data = await this._handleRequest(mutations.updateEvent, {
      input: event
    });

    return data as ComorionEvent;
  }
  async deleteEvent(id: string): Promise<ComorionEvent> {
    const data = await this._handleRequest(mutations.deleteEvent, {
      input: { id }
    });

    return data as ComorionEvent;
  }
  async getEventsByDate(
    starting: Date = new Date(),
    limit: number = 40,
    nextToken?: string
  ): Promise<GqlConn<ComorionEvent>> {
    const data = await this._handleRequest(queries.listEvents, {
      filter: { eventStart: { gt: starting } },
      limit,
      nextToken
    });

    return data as GqlConn<ComorionEvent>;
  }
  async getEventsFromTeam(
    teamId: string,
    limit: number = 40,
    nextToken?: string
  ): Promise<GqlConn<ComorionEvent>> {
    const data = await this._handleRequest(queries.queryEventsByTeamIdIdIndex, {
      teamId,
      first: limit,
      after: nextToken
    });

    return data as GqlConn<ComorionEvent>;
  }
}
export default EventRepository;
