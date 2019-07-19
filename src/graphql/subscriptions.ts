// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTicket = `subscription OnCreateTicket($id: ID, $eventId: ID, $userId: ID, $love: Int) {
  onCreateTicket(id: $id, eventId: $eventId, userId: $userId, love: $love) {
    id
    eventId
    userId
    eventCategory
    interest
    love
  }
}
`;
export const onUpdateTicket = `subscription OnUpdateTicket($id: ID, $eventId: ID, $userId: ID, $love: Int) {
  onUpdateTicket(id: $id, eventId: $eventId, userId: $userId, love: $love) {
    id
    eventId
    userId
    eventCategory
    interest
    love
  }
}
`;
export const onDeleteTicket = `subscription OnDeleteTicket($id: ID, $eventId: ID, $userId: ID, $love: Int) {
  onDeleteTicket(id: $id, eventId: $eventId, userId: $userId, love: $love) {
    id
    eventId
    userId
    eventCategory
    interest
    love
  }
}
`;
export const onCreateEvent = `subscription OnCreateEvent(
  $id: ID
  $eventStart: AWSDateTime
  $teamId: ID
  $ticketsSold: Int
  $ticketsTotal: Int
) {
  onCreateEvent(
    id: $id
    eventStart: $eventStart
    teamId: $teamId
    ticketsSold: $ticketsSold
    ticketsTotal: $ticketsTotal
  ) {
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
export const onUpdateEvent = `subscription OnUpdateEvent(
  $id: ID
  $eventStart: AWSDateTime
  $teamId: ID
  $ticketsSold: Int
  $ticketsTotal: Int
) {
  onUpdateEvent(
    id: $id
    eventStart: $eventStart
    teamId: $teamId
    ticketsSold: $ticketsSold
    ticketsTotal: $ticketsTotal
  ) {
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
export const onDeleteEvent = `subscription OnDeleteEvent(
  $id: ID
  $eventStart: AWSDateTime
  $teamId: ID
  $ticketsSold: Int
  $ticketsTotal: Int
) {
  onDeleteEvent(
    id: $id
    eventStart: $eventStart
    teamId: $teamId
    ticketsSold: $ticketsSold
    ticketsTotal: $ticketsTotal
  ) {
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
export const onCreateTeam = `subscription OnCreateTeam(
  $id: ID
  $logo: ImageInput
  $info: InfoInput
  $contactInfo: ContactInfoInput
) {
  onCreateTeam(id: $id, logo: $logo, info: $info, contactInfo: $contactInfo) {
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
export const onUpdateTeam = `subscription OnUpdateTeam(
  $id: ID
  $logo: ImageInput
  $info: InfoInput
  $contactInfo: ContactInfoInput
) {
  onUpdateTeam(id: $id, logo: $logo, info: $info, contactInfo: $contactInfo) {
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
export const onDeleteTeam = `subscription OnDeleteTeam(
  $id: ID
  $logo: ImageInput
  $info: InfoInput
  $contactInfo: ContactInfoInput
) {
  onDeleteTeam(id: $id, logo: $logo, info: $info, contactInfo: $contactInfo) {
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
export const onCreateUser = `subscription OnCreateUser(
  $id: ID
  $fname: String
  $lname: String
  $birthday: AWSDate
  $email: AWSEmail
) {
  onCreateUser(
    id: $id
    fname: $fname
    lname: $lname
    birthday: $birthday
    email: $email
  ) {
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
export const onUpdateUser = `subscription OnUpdateUser(
  $id: ID
  $fname: String
  $lname: String
  $birthday: AWSDate
  $email: AWSEmail
) {
  onUpdateUser(
    id: $id
    fname: $fname
    lname: $lname
    birthday: $birthday
    email: $email
  ) {
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
export const onDeleteUser = `subscription OnDeleteUser(
  $id: ID
  $fname: String
  $lname: String
  $birthday: AWSDate
  $email: AWSEmail
) {
  onDeleteUser(
    id: $id
    fname: $fname
    lname: $lname
    birthday: $birthday
    email: $email
  ) {
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
