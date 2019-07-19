// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTicket = `mutation CreateTicket($input: CreateTicketInput!) {
  createTicket(input: $input) {
    id
    eventId
    userId
    eventCategory
    interest
    love
  }
}
`;
export const updateTicket = `mutation UpdateTicket($input: UpdateTicketInput!) {
  updateTicket(input: $input) {
    id
    eventId
    userId
    eventCategory
    interest
    love
  }
}
`;
export const deleteTicket = `mutation DeleteTicket($input: DeleteTicketInput!) {
  deleteTicket(input: $input) {
    id
    eventId
    userId
    eventCategory
    interest
    love
  }
}
`;
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
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
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
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
export const createTeam = `mutation CreateTeam($input: CreateTeamInput!) {
  createTeam(input: $input) {
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
export const updateTeam = `mutation UpdateTeam($input: UpdateTeamInput!) {
  updateTeam(input: $input) {
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
export const deleteTeam = `mutation DeleteTeam($input: DeleteTeamInput!) {
  deleteTeam(input: $input) {
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
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
