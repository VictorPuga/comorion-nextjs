import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import BaseRepository from "./AbstractRepository";
export default class TeamRepository extends BaseRepository<ComorionTeam> {
  async createTeam(team: ComorionTeam): Promise<ComorionTeam> {
    const data = await this._handleRequest(mutations.createTeam, {
      input: team
    });

    return data as ComorionTeam;
  }
  async updateTeam(team: ComorionTeam): Promise<ComorionTeam> {
    const data = await this._handleRequest(mutations.updateTeam, {
      input: team
    });

    return data as ComorionTeam;
  }
  async deleteTeam(id: string): Promise<ComorionTeam> {
    const data = await this._handleRequest(mutations.deleteTeam, {
      input: { id }
    });

    return data as ComorionTeam;
  }
  async listTeams(
    limit: number = 50,
    nextToken?: string
  ): Promise<GqlConn<ComorionTeam>> {
    const data = await this._handleRequest(queries.listTeams, {
      limit,
      nextToken
    });

    return data as GqlConn<ComorionTeam>;
  }
  async getTeam(id: string): Promise<ComorionTeam> {
    const data = await this._handleRequest(queries.getTeam, {
      id
    });

    return data as ComorionTeam;
  }
}
