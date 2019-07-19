import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import BaseRepository from "./AbstractRepository";
class UserRepository extends BaseRepository<ComorionUser> {
  async createUser(user: ComorionUser): Promise<ComorionUser> {
    const data = await this._handleRequest(mutations.createUser, {
      input: user
    });
    return data as ComorionUser;
  }
  async updateUser(user: ComorionUser): Promise<ComorionUser> {
    const data = await this._handleRequest(mutations.updateUser, {
      input: user
    });
    return data as ComorionUser;
  }
  async deleteUser(id: string): Promise<ComorionUser> {
    const data = await this._handleRequest(mutations.deleteUser, {
      input: { id }
    });
    return data as ComorionUser;
  }
  async getUserWithEmail(email: string): Promise<ComorionUser> {
    const data = await this._handleRequest(queries.queryUsersByEmailIndex, {
      email,
      first: 10
    });
    return (data as GqlConn<ComorionUser>).items[0];
  }
  async getUserWithPhone(phone: string): Promise<ComorionUser> {
    const data = await this._handleRequest(queries.queryUsersByPhoneIndex, {
      phone,
      first: 10
    });
    return (data as GqlConn<ComorionUser>).items[0];
  }
  async getUserWithId(id: string): Promise<ComorionUser> {
    const data = await this._handleRequest(queries.getUser, {
      id
    });
    return data as ComorionUser;
  }
  async getUsersFromTeam(
    teamId: string,
    limit: number = 20,
    nextToken?: string
  ): Promise<GqlConn<ComorionUser>> {
    const data = await this._handleRequest(queries.queryUsersByTeamIdIdIndex, {
      teamId,
      first: limit,
      after: nextToken
    });
    return data as GqlConn<ComorionUser>;
  }
}
export default UserRepository;
