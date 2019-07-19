/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTicketInput = {
  id?: string | null,
  eventId: string,
  userId: string,
  eventCategory: Category,
  interest?: Interest | null,
  love?: number | null,
};

export enum Category {
  MACHINE_LEARNING = "MACHINE_LEARNING",
  BIOTECH = "BIOTECH",
  IOT = "IOT",
  DATA_SCIENCE = "DATA_SCIENCE",
  SOFTWARE = "SOFTWARE",
  BLOCKCHAIN = "BLOCKCHAIN",
  INVESTING = "INVESTING",
  ENTERPRENEURSHIP = "ENTERPRENEURSHIP",
}


export enum Interest {
  ABSOLUTELY_GOING = "ABSOLUTELY_GOING",
  MAYBE_GOING = "MAYBE_GOING",
  PROBABLY_NOT_GOING = "PROBABLY_NOT_GOING",
}


export type UpdateTicketInput = {
  id: string,
  eventId?: string | null,
  userId?: string | null,
  eventCategory?: Category | null,
  interest?: Interest | null,
  love?: number | null,
};

export type DeleteTicketInput = {
  id: string,
};

export type CreateEventInput = {
  id: string,
  image: ImageInput,
  category: Category,
  eventEnd: string,
  eventStart: string,
  info: InfoInput,
  button: ButtonInput,
  place: PlaceInput,
  teamId: string,
  ticketsSold: number,
  ticketsTotal: number,
};

export type ImageInput = {
  caption: string,
  url: string,
};

export type InfoInput = {
  name: string,
  headline: string,
  description: string,
  body: string,
};

export type ButtonInput = {
  label: string,
  link: string,
};

export type PlaceInput = {
  coordinates: CoordinatesInput,
  instructions: string,
};

export type CoordinatesInput = {
  latitude: number,
  longitude: number,
};

export type UpdateEventInput = {
  id: string,
  image?: ImageInput | null,
  category?: Category | null,
  eventEnd?: string | null,
  eventStart?: string | null,
  info?: InfoInput | null,
  button?: ButtonInput | null,
  place?: PlaceInput | null,
  teamId?: string | null,
  ticketsSold?: number | null,
  ticketsTotal?: number | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateTeamInput = {
  id: string,
  logo: ImageInput,
  info: InfoInput,
  contactInfo: ContactInfoInput,
};

export type ContactInfoInput = {
  email: string,
  phone?: string | null,
  headquarters: PlaceInput,
};

export type UpdateTeamInput = {
  id: string,
  logo?: ImageInput | null,
  info?: InfoInput | null,
  contactInfo?: ContactInfoInput | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreateUserInput = {
  id: string,
  fname: string,
  lname: string,
  birthday: string,
  email: string,
  phone: string,
  teamId?: string | null,
  picture?: ImageInput | null,
  institution?: Institution | null,
  about?: string | null,
  interests?: Array< Category > | null,
};

export enum Institution {
  TEC_PREPA = "TEC_PREPA",
  TEC_UNI = "TEC_UNI",
  TEC_TEACHER = "TEC_TEACHER",
  TEC_OTHER = "TEC_OTHER",
  STUDENT = "STUDENT",
  INTERNATIONAL = "INTERNATIONAL",
  GOV = "GOV",
  OTHER = "OTHER",
  ORION_INTERNAL = "ORION_INTERNAL",
  ORION = "ORION",
}


export type UpdateUserInput = {
  id: string,
  fname?: string | null,
  lname?: string | null,
  birthday?: string | null,
  email?: string | null,
  phone?: string | null,
  teamId?: string | null,
  picture?: ImageInput | null,
  institution?: Institution | null,
  about?: string | null,
  interests?: Array< Category > | null,
};

export type DeleteUserInput = {
  id: string,
};

export type TableTicketFilterInput = {
  id?: TableIDFilterInput | null,
  eventId?: TableIDFilterInput | null,
  userId?: TableIDFilterInput | null,
  love?: TableIntFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type TableEventFilterInput = {
  id?: TableIDFilterInput | null,
  image?: TableStringFilterInput | null,
  eventEnd?: TableStringFilterInput | null,
  eventStart?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  teamId?: TableIDFilterInput | null,
  ticketsSold?: TableIntFilterInput | null,
  ticketsTotal?: TableIntFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableTeamFilterInput = {
  id?: TableIDFilterInput | null,
  logo?: TableStringFilterInput | null,
  pitch?: TableStringFilterInput | null,
  slogan?: TableStringFilterInput | null,
};

export type TableUserFilterInput = {
  id?: TableIDFilterInput | null,
  fname?: TableStringFilterInput | null,
  lname?: TableStringFilterInput | null,
  birthday?: TableStringFilterInput | null,
  email?: TableStringFilterInput | null,
  phone?: TableStringFilterInput | null,
  teamId?: TableIDFilterInput | null,
};

export type CreateTicketMutationVariables = {
  input: CreateTicketInput,
};

export type CreateTicketMutation = {
  createTicket:  {
    __typename: "Ticket",
    id: string,
    eventId: string,
    userId: string,
    eventCategory: Category,
    interest: Interest | null,
    love: number | null,
  } | null,
};

export type UpdateTicketMutationVariables = {
  input: UpdateTicketInput,
};

export type UpdateTicketMutation = {
  updateTicket:  {
    __typename: "Ticket",
    id: string,
    eventId: string,
    userId: string,
    eventCategory: Category,
    interest: Interest | null,
    love: number | null,
  } | null,
};

export type DeleteTicketMutationVariables = {
  input: DeleteTicketInput,
};

export type DeleteTicketMutation = {
  deleteTicket:  {
    __typename: "Ticket",
    id: string,
    eventId: string,
    userId: string,
    eventCategory: Category,
    interest: Interest | null,
    love: number | null,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
};

export type CreateEventMutation = {
  createEvent:  {
    __typename: "Event",
    id: string,
    image:  {
      __typename: "Image",
      caption: string,
      url: string,
    },
    category: Category,
    eventEnd: string,
    eventStart: string,
    info:  {
      __typename: "Info",
      name: string,
      headline: string,
      description: string,
      body: string,
    },
    button:  {
      __typename: "Button",
      label: string,
      link: string,
    },
    place:  {
      __typename: "Place",
      instructions: string,
    },
    teamId: string,
    ticketsSold: number,
    ticketsTotal: number,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
};

export type UpdateEventMutation = {
  updateEvent:  {
    __typename: "Event",
    id: string,
    image:  {
      __typename: "Image",
      caption: string,
      url: string,
    },
    category: Category,
    eventEnd: string,
    eventStart: string,
    info:  {
      __typename: "Info",
      name: string,
      headline: string,
      description: string,
      body: string,
    },
    button:  {
      __typename: "Button",
      label: string,
      link: string,
    },
    place:  {
      __typename: "Place",
      instructions: string,
    },
    teamId: string,
    ticketsSold: number,
    ticketsTotal: number,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
};

export type DeleteEventMutation = {
  deleteEvent:  {
    __typename: "Event",
    id: string,
    image:  {
      __typename: "Image",
      caption: string,
      url: string,
    },
    category: Category,
    eventEnd: string,
    eventStart: string,
    info:  {
      __typename: "Info",
      name: string,
      headline: string,
      description: string,
      body: string,
    },
    button:  {
      __typename: "Button",
      label: string,
      link: string,
    },
    place:  {
      __typename: "Place",
      instructions: string,
    },
    teamId: string,
    ticketsSold: number,
    ticketsTotal: number,
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
};

export type CreateTeamMutation = {
  createTeam:  {
    __typename: "Team",
    id: string,
    logo:  {
      __typename: "Image",
      caption: string,
      url: string,
    },
    info:  {
      __typename: "Info",
      name: string,
      headline: string,
      description: string,
      body: string,
    },
    contactInfo:  {
      __typename: "ContactInfo",
      email: string,
      phone: string | null,
    },
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
};

export type UpdateTeamMutation = {
  updateTeam:  {
    __typename: "Team",
    id: string,
    logo:  {
      __typename: "Image",
      caption: string,
      url: string,
    },
    info:  {
      __typename: "Info",
      name: string,
      headline: string,
      description: string,
      body: string,
    },
    contactInfo:  {
      __typename: "ContactInfo",
      email: string,
      phone: string | null,
    },
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
};

export type DeleteTeamMutation = {
  deleteTeam:  {
    __typename: "Team",
    id: string,
    logo:  {
      __typename: "Image",
      caption: string,
      url: string,
    },
    info:  {
      __typename: "Info",
      name: string,
      headline: string,
      description: string,
      body: string,
    },
    contactInfo:  {
      __typename: "ContactInfo",
      email: string,
      phone: string | null,
    },
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    fname: string,
    lname: string,
    birthday: string,
    institution: Institution,
    email: string,
    phone: string,
    interests: Array< Category > | null,
    picture:  {
      __typename: "Image",
      caption: string,
      url: string,
    } | null,
    teamId: string | null,
    about: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    fname: string,
    lname: string,
    birthday: string,
    institution: Institution,
    email: string,
    phone: string,
    interests: Array< Category > | null,
    picture:  {
      __typename: "Image",
      caption: string,
      url: string,
    } | null,
    teamId: string | null,
    about: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    fname: string,
    lname: string,
    birthday: string,
    institution: Institution,
    email: string,
    phone: string,
    interests: Array< Category > | null,
    picture:  {
      __typename: "Image",
      caption: string,
      url: string,
    } | null,
    teamId: string | null,
    about: string | null,
  } | null,
};

export type GetTicketQueryVariables = {
  id: string,
};

export type GetTicketQuery = {
  getTicket:  {
    __typename: "Ticket",
    id: string,
    eventId: string,
    userId: string,
    eventCategory: Category,
    interest: Interest | null,
    love: number | null,
  } | null,
};

export type ListTicketsQueryVariables = {
  filter?: TableTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTicketsQuery = {
  listTickets:  {
    __typename: "TicketConnection",
    items:  Array< {
      __typename: "Ticket",
      id: string,
      eventId: string,
      userId: string,
      eventCategory: Category,
      interest: Interest | null,
      love: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QueryTicketsByUserIdIdIndexQueryVariables = {
  userId: string,
  first?: number | null,
  after?: string | null,
};

export type QueryTicketsByUserIdIdIndexQuery = {
  queryTicketsByUserIdIdIndex:  {
    __typename: "TicketConnection",
    items:  Array< {
      __typename: "Ticket",
      id: string,
      eventId: string,
      userId: string,
      eventCategory: Category,
      interest: Interest | null,
      love: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QueryTicketsByEventIdIdIndexQueryVariables = {
  eventId: string,
  first?: number | null,
  after?: string | null,
};

export type QueryTicketsByEventIdIdIndexQuery = {
  queryTicketsByEventIdIdIndex:  {
    __typename: "TicketConnection",
    items:  Array< {
      __typename: "Ticket",
      id: string,
      eventId: string,
      userId: string,
      eventCategory: Category,
      interest: Interest | null,
      love: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent:  {
    __typename: "Event",
    id: string,
    image:  {
      __typename: "Image",
      caption: string,
      url: string,
    },
    category: Category,
    eventEnd: string,
    eventStart: string,
    info:  {
      __typename: "Info",
      name: string,
      headline: string,
      description: string,
      body: string,
    },
    button:  {
      __typename: "Button",
      label: string,
      link: string,
    },
    place:  {
      __typename: "Place",
      instructions: string,
    },
    teamId: string,
    ticketsSold: number,
    ticketsTotal: number,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: TableEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents:  {
    __typename: "EventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      image:  {
        __typename: "Image",
        caption: string,
        url: string,
      },
      category: Category,
      eventEnd: string,
      eventStart: string,
      info:  {
        __typename: "Info",
        name: string,
        headline: string,
        description: string,
        body: string,
      },
      button:  {
        __typename: "Button",
        label: string,
        link: string,
      },
      place:  {
        __typename: "Place",
        instructions: string,
      },
      teamId: string,
      ticketsSold: number,
      ticketsTotal: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QueryEventsByEventStartIdIndexQueryVariables = {
  eventStart: string,
  first?: number | null,
  after?: string | null,
};

export type QueryEventsByEventStartIdIndexQuery = {
  queryEventsByEventStartIdIndex:  {
    __typename: "EventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      image:  {
        __typename: "Image",
        caption: string,
        url: string,
      },
      category: Category,
      eventEnd: string,
      eventStart: string,
      info:  {
        __typename: "Info",
        name: string,
        headline: string,
        description: string,
        body: string,
      },
      button:  {
        __typename: "Button",
        label: string,
        link: string,
      },
      place:  {
        __typename: "Place",
        instructions: string,
      },
      teamId: string,
      ticketsSold: number,
      ticketsTotal: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QueryEventsByTeamIdIdIndexQueryVariables = {
  teamId: string,
  first?: number | null,
  after?: string | null,
};

export type QueryEventsByTeamIdIdIndexQuery = {
  queryEventsByTeamIdIdIndex:  {
    __typename: "EventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      image:  {
        __typename: "Image",
        caption: string,
        url: string,
      },
      category: Category,
      eventEnd: string,
      eventStart: string,
      info:  {
        __typename: "Info",
        name: string,
        headline: string,
        description: string,
        body: string,
      },
      button:  {
        __typename: "Button",
        label: string,
        link: string,
      },
      place:  {
        __typename: "Place",
        instructions: string,
      },
      teamId: string,
      ticketsSold: number,
      ticketsTotal: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam:  {
    __typename: "Team",
    id: string,
    logo:  {
      __typename: "Image",
      caption: string,
      url: string,
    },
    info:  {
      __typename: "Info",
      name: string,
      headline: string,
      description: string,
      body: string,
    },
    contactInfo:  {
      __typename: "ContactInfo",
      email: string,
      phone: string | null,
    },
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: TableTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams:  {
    __typename: "TeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      logo:  {
        __typename: "Image",
        caption: string,
        url: string,
      },
      info:  {
        __typename: "Info",
        name: string,
        headline: string,
        description: string,
        body: string,
      },
      contactInfo:  {
        __typename: "ContactInfo",
        email: string,
        phone: string | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    fname: string,
    lname: string,
    birthday: string,
    institution: Institution,
    email: string,
    phone: string,
    interests: Array< Category > | null,
    picture:  {
      __typename: "Image",
      caption: string,
      url: string,
    } | null,
    teamId: string | null,
    about: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: TableUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "UserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      fname: string,
      lname: string,
      birthday: string,
      institution: Institution,
      email: string,
      phone: string,
      interests: Array< Category > | null,
      picture:  {
        __typename: "Image",
        caption: string,
        url: string,
      } | null,
      teamId: string | null,
      about: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QueryUsersByEmailIndexQueryVariables = {
  email: string,
  first?: number | null,
  after?: string | null,
};

export type QueryUsersByEmailIndexQuery = {
  queryUsersByEmailIndex:  {
    __typename: "UserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      fname: string,
      lname: string,
      birthday: string,
      institution: Institution,
      email: string,
      phone: string,
      interests: Array< Category > | null,
      picture:  {
        __typename: "Image",
        caption: string,
        url: string,
      } | null,
      teamId: string | null,
      about: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QueryUsersByPhoneIndexQueryVariables = {
  phone: string,
  first?: number | null,
  after?: string | null,
};

export type QueryUsersByPhoneIndexQuery = {
  queryUsersByPhoneIndex:  {
    __typename: "UserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      fname: string,
      lname: string,
      birthday: string,
      institution: Institution,
      email: string,
      phone: string,
      interests: Array< Category > | null,
      picture:  {
        __typename: "Image",
        caption: string,
        url: string,
      } | null,
      teamId: string | null,
      about: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QueryUsersByTeamIdIdIndexQueryVariables = {
  teamId: string,
  first?: number | null,
  after?: string | null,
};

export type QueryUsersByTeamIdIdIndexQuery = {
  queryUsersByTeamIdIdIndex:  {
    __typename: "UserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      fname: string,
      lname: string,
      birthday: string,
      institution: Institution,
      email: string,
      phone: string,
      interests: Array< Category > | null,
      picture:  {
        __typename: "Image",
        caption: string,
        url: string,
      } | null,
      teamId: string | null,
      about: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTicketSubscriptionVariables = {
  id?: string | null,
  eventId?: string | null,
  userId?: string | null,
  love?: number | null,
};

export type OnCreateTicketSubscription = {
  onCreateTicket:  {
    __typename: "Ticket",
    id: string,
    eventId: string,
    userId: string,
    eventCategory: Category,
    interest: Interest | null,
    love: number | null,
  } | null,
};

export type OnUpdateTicketSubscriptionVariables = {
  id?: string | null,
  eventId?: string | null,
  userId?: string | null,
  love?: number | null,
};

export type OnUpdateTicketSubscription = {
  onUpdateTicket:  {
    __typename: "Ticket",
    id: string,
    eventId: string,
    userId: string,
    eventCategory: Category,
    interest: Interest | null,
    love: number | null,
  } | null,
};

export type OnDeleteTicketSubscriptionVariables = {
  id?: string | null,
  eventId?: string | null,
  userId?: string | null,
  love?: number | null,
};

export type OnDeleteTicketSubscription = {
  onDeleteTicket:  {
    __typename: "Ticket",
    id: string,
    eventId: string,
    userId: string,
    eventCategory: Category,
    interest: Interest | null,
    love: number | null,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  id?: string | null,
  eventStart?: string | null,
  teamId?: string | null,
  ticketsSold?: number | null,
  ticketsTotal?: number | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent:  {
    __typename: "Event",
    id: string,
    image:  {
      __typename: "Image",
      caption: string,
      url: string,
    },
    category: Category,
    eventEnd: string,
    eventStart: string,
    info:  {
      __typename: "Info",
      name: string,
      headline: string,
      description: string,
      body: string,
    },
    button:  {
      __typename: "Button",
      label: string,
      link: string,
    },
    place:  {
      __typename: "Place",
      instructions: string,
    },
    teamId: string,
    ticketsSold: number,
    ticketsTotal: number,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  id?: string | null,
  eventStart?: string | null,
  teamId?: string | null,
  ticketsSold?: number | null,
  ticketsTotal?: number | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent:  {
    __typename: "Event",
    id: string,
    image:  {
      __typename: "Image",
      caption: string,
      url: string,
    },
    category: Category,
    eventEnd: string,
    eventStart: string,
    info:  {
      __typename: "Info",
      name: string,
      headline: string,
      description: string,
      body: string,
    },
    button:  {
      __typename: "Button",
      label: string,
      link: string,
    },
    place:  {
      __typename: "Place",
      instructions: string,
    },
    teamId: string,
    ticketsSold: number,
    ticketsTotal: number,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  id?: string | null,
  eventStart?: string | null,
  teamId?: string | null,
  ticketsSold?: number | null,
  ticketsTotal?: number | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent:  {
    __typename: "Event",
    id: string,
    image:  {
      __typename: "Image",
      caption: string,
      url: string,
    },
    category: Category,
    eventEnd: string,
    eventStart: string,
    info:  {
      __typename: "Info",
      name: string,
      headline: string,
      description: string,
      body: string,
    },
    button:  {
      __typename: "Button",
      label: string,
      link: string,
    },
    place:  {
      __typename: "Place",
      instructions: string,
    },
    teamId: string,
    ticketsSold: number,
    ticketsTotal: number,
  } | null,
};

export type OnCreateTeamSubscriptionVariables = {
  id?: string | null,
  logo?: ImageInput | null,
  info?: InfoInput | null,
  contactInfo?: ContactInfoInput | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam:  {
    __typename: "Team",
    id: string,
    logo:  {
      __typename: "Image",
      caption: string,
      url: string,
    },
    info:  {
      __typename: "Info",
      name: string,
      headline: string,
      description: string,
      body: string,
    },
    contactInfo:  {
      __typename: "ContactInfo",
      email: string,
      phone: string | null,
    },
  } | null,
};

export type OnUpdateTeamSubscriptionVariables = {
  id?: string | null,
  logo?: ImageInput | null,
  info?: InfoInput | null,
  contactInfo?: ContactInfoInput | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam:  {
    __typename: "Team",
    id: string,
    logo:  {
      __typename: "Image",
      caption: string,
      url: string,
    },
    info:  {
      __typename: "Info",
      name: string,
      headline: string,
      description: string,
      body: string,
    },
    contactInfo:  {
      __typename: "ContactInfo",
      email: string,
      phone: string | null,
    },
  } | null,
};

export type OnDeleteTeamSubscriptionVariables = {
  id?: string | null,
  logo?: ImageInput | null,
  info?: InfoInput | null,
  contactInfo?: ContactInfoInput | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam:  {
    __typename: "Team",
    id: string,
    logo:  {
      __typename: "Image",
      caption: string,
      url: string,
    },
    info:  {
      __typename: "Info",
      name: string,
      headline: string,
      description: string,
      body: string,
    },
    contactInfo:  {
      __typename: "ContactInfo",
      email: string,
      phone: string | null,
    },
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  birthday?: string | null,
  email?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    fname: string,
    lname: string,
    birthday: string,
    institution: Institution,
    email: string,
    phone: string,
    interests: Array< Category > | null,
    picture:  {
      __typename: "Image",
      caption: string,
      url: string,
    } | null,
    teamId: string | null,
    about: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  birthday?: string | null,
  email?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    fname: string,
    lname: string,
    birthday: string,
    institution: Institution,
    email: string,
    phone: string,
    interests: Array< Category > | null,
    picture:  {
      __typename: "Image",
      caption: string,
      url: string,
    } | null,
    teamId: string | null,
    about: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  birthday?: string | null,
  email?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    fname: string,
    lname: string,
    birthday: string,
    institution: Institution,
    email: string,
    phone: string,
    interests: Array< Category > | null,
    picture:  {
      __typename: "Image",
      caption: string,
      url: string,
    } | null,
    teamId: string | null,
    about: string | null,
  } | null,
};
