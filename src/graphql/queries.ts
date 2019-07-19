// tslint:disable
// this is an auto generated file. This will be overwritten

export const getTicket = `query GetTicket($id: ID!) {
  getTicket(id: $id) {
    id
    eventId
    userId
    eventCategory
    interest
    love
  }
}
`;
export const listTickets = `query ListTickets(
  $filter: TableTicketFilterInput
  $limit: Int
  $nextToken: String
) {
  listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      eventId
      userId
      eventCategory
      interest
      love
    }
    nextToken
  }
}
`;
export const queryTicketsByUserIdIdIndex = `query QueryTicketsByUserIdIdIndex($userId: ID!, $first: Int, $after: String) {
  queryTicketsByUserIdIdIndex(userId: $userId, first: $first, after: $after) {
    items {
      id
      eventId
      userId
      eventCategory
      interest
      love
    }
    nextToken
  }
}
`;
export const queryTicketsByEventIdIdIndex = `query QueryTicketsByEventIdIdIndex($eventId: ID!, $first: Int, $after: String) {
  queryTicketsByEventIdIdIndex(
    eventId: $eventId
    first: $first
    after: $after
  ) {
    items {
      id
      eventId
      userId
      eventCategory
      interest
      love
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    image {
      caption
      url
    }
    category
    eventEnd
    eventStart
    info {
      name
      headline
      description
      body
    }
    button {
      label
      link
    }
    place {
      instructions
    }
    teamId
    ticketsSold
    ticketsTotal
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: TableEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      image {
        caption
        url
      }
      category
      eventEnd
      eventStart
      info {
        name
        headline
        description
        body
      }
      button {
        label
        link
      }
      place {
        instructions
      }
      teamId
      ticketsSold
      ticketsTotal
    }
    nextToken
  }
}
`;
export const queryEventsByEventStartIdIndex = `query QueryEventsByEventStartIdIndex(
  $eventStart: AWSDateTime!
  $first: Int
  $after: String
) {
  queryEventsByEventStartIdIndex(
    eventStart: $eventStart
    first: $first
    after: $after
  ) {
    items {
      id
      image {
        caption
        url
      }
      category
      eventEnd
      eventStart
      info {
        name
        headline
        description
        body
      }
      button {
        label
        link
      }
      place {
        instructions
      }
      teamId
      ticketsSold
      ticketsTotal
    }
    nextToken
  }
}
`;
export const queryEventsByTeamIdIdIndex = `query QueryEventsByTeamIdIdIndex($teamId: ID!, $first: Int, $after: String) {
  queryEventsByTeamIdIdIndex(teamId: $teamId, first: $first, after: $after) {
    items {
      id
      image {
        caption
        url
      }
      category
      eventEnd
      eventStart
      info {
        name
        headline
        description
        body
      }
      button {
        label
        link
      }
      place {
        instructions
      }
      teamId
      ticketsSold
      ticketsTotal
    }
    nextToken
  }
}
`;
export const getTeam = `query GetTeam($id: ID!) {
  getTeam(id: $id) {
    id
    logo {
      caption
      url
    }
    info {
      name
      headline
      description
      body
    }
    contactInfo {
      email
      phone
    }
  }
}
`;
export const listTeams = `query ListTeams(
  $filter: TableTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      logo {
        caption
        url
      }
      info {
        name
        headline
        description
        body
      }
      contactInfo {
        email
        phone
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    fname
    lname
    birthday
    institution
    email
    phone
    interests
    picture {
      caption
      url
    }
    teamId
    about
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: TableUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      fname
      lname
      birthday
      institution
      email
      phone
      interests
      picture {
        caption
        url
      }
      teamId
      about
    }
    nextToken
  }
}
`;
export const queryUsersByEmailIndex = `query QueryUsersByEmailIndex($email: AWSEmail!, $first: Int, $after: String) {
  queryUsersByEmailIndex(email: $email, first: $first, after: $after) {
    items {
      id
      fname
      lname
      birthday
      institution
      email
      phone
      interests
      picture {
        caption
        url
      }
      teamId
      about
    }
    nextToken
  }
}
`;
export const queryUsersByPhoneIndex = `query QueryUsersByPhoneIndex($phone: AWSPhone!, $first: Int, $after: String) {
  queryUsersByPhoneIndex(phone: $phone, first: $first, after: $after) {
    items {
      id
      fname
      lname
      birthday
      institution
      email
      phone
      interests
      picture {
        caption
        url
      }
      teamId
      about
    }
    nextToken
  }
}
`;
export const queryUsersByTeamIdIdIndex = `query QueryUsersByTeamIdIdIndex($teamId: ID!, $first: Int, $after: String) {
  queryUsersByTeamIdIdIndex(teamId: $teamId, first: $first, after: $after) {
    items {
      id
      fname
      lname
      birthday
      institution
      email
      phone
      interests
      picture {
        caption
        url
      }
      teamId
      about
    }
    nextToken
  }
}
`;
