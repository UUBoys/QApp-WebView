export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** This is the result of a Login/OAuth */
export type AuthResult = {
  __typename?: 'AuthResult';
  /** This is the token used for authentication (JWT Bearer) */
  token: Scalars['String']['output'];
};

export type CreateEstablishmentResult = {
  __typename?: 'CreateEstablishmentResult';
  establishment: Establishment;
};

export type CreateEventResult = {
  __typename?: 'CreateEventResult';
  event: Event;
};

/** This is the response of a Credits Balance */
export type CreditsBalance = {
  __typename?: 'CreditsBalance';
  /** This is the balance of the user */
  balance: Scalars['Int']['output'];
};

/** This is the response of a Credits TopUp */
export type CreditsTopUp = {
  __typename?: 'CreditsTopUp';
  /** This is the new balance of the user */
  newBalance: Scalars['Int']['output'];
  /** This is the old balance of the user */
  oldBalance: Scalars['Int']['output'];
};

/** Establishment type */
export type Establishment = {
  __typename?: 'Establishment';
  /** This is the city of the establishment */
  city: Scalars['String']['output'];
  /** This is the country of the establishment */
  country: Scalars['String']['output'];
  /** This is the cover image of the establishment */
  coverImage?: Maybe<Scalars['String']['output']>;
  /** This is the description of the establishment */
  description: Scalars['String']['output'];
  /** These are events, that belong to the establishment */
  events?: Maybe<Array<Maybe<Event>>>;
  /** This is the id of the establishment */
  id: Scalars['String']['output'];
  /** This is the name of the establishment */
  name: Scalars['String']['output'];
  /** This is the profile image of the establishment */
  profileImage?: Maybe<Scalars['String']['output']>;
  /** This is the street of the establishment */
  street: Scalars['String']['output'];
};

/** Event type */
export type Event = {
  __typename?: 'Event';
  /** This is the description of the event */
  description?: Maybe<Scalars['String']['output']>;
  /** This is the end date of the event */
  end_date: Scalars['String']['output'];
  /** ID of establishment that event belongs to */
  establishment_id: Scalars['String']['output'];
  /** This is the id of the event */
  id: Scalars['String']['output'];
  /** Image of the event */
  image?: Maybe<Scalars['String']['output']>;
  /** Maximum capacity of the event */
  maximumCapacity: Scalars['Int']['output'];
  /** This is the name of the event */
  name: Scalars['String']['output'];
  /** This is the price of the event */
  price: Scalars['Float']['output'];
  /** This is the start date of the event */
  start_date: Scalars['String']['output'];
  /** Tickets assigned to this event */
  tickets?: Maybe<Array<Maybe<EventAvailableTickets>>>;
};

/** Event available tickets */
export type EventAvailableTickets = {
  __typename?: 'EventAvailableTickets';
  available_quantity: Scalars['Int']['output'];
  event_id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  ticket_id: Scalars['String']['output'];
  ticket_name: Scalars['String']['output'];
};

export type GetEstablishmentsResponse = {
  __typename?: 'GetEstablishmentsResponse';
  establishments?: Maybe<Array<Maybe<Establishment>>>;
};

export type GetEventsResponse = {
  __typename?: 'GetEventsResponse';
  events?: Maybe<Array<Maybe<Event>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new establishment (requires authentication) */
  createEstablishment?: Maybe<CreateEstablishmentResult>;
  /** Create new event (requires authentication) */
  createEvent?: Maybe<CreateEventResult>;
  /** Delete event (requires authentication) */
  deleteEvent?: Maybe<RemoveEventResult>;
  /** Login with Google OAuth (requires Google ID Token) */
  googleOAuth?: Maybe<AuthResult>;
  login?: Maybe<AuthResult>;
  /** Purchase a ticket for an event (requires authentication and sufficient credits) */
  purchaseTicket?: Maybe<PurchaseTicketResult>;
  register?: Maybe<AuthResult>;
  /** Top up the credits of the user that is logged in (requires authentication) */
  topupCredits?: Maybe<CreditsTopUp>;
  /** Update an existing establishment (requires authentication) */
  updateEstablishment?: Maybe<UpdateEstablishmentResult>;
  /** Update event (requires authentication) */
  updateEvent?: Maybe<UpdateEventResult>;
};


export type MutationCreateEstablishmentArgs = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  profileImage?: InputMaybe<Scalars['String']['input']>;
  street: Scalars['String']['input'];
};


export type MutationCreateEventArgs = {
  default_ticket_name?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  establishment_id: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  maximumCapacity: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  start_date: Scalars['String']['input'];
};


export type MutationDeleteEventArgs = {
  event_id: Scalars['String']['input'];
};


export type MutationGoogleOAuthArgs = {
  idToken: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationPurchaseTicketArgs = {
  event_id: Scalars['String']['input'];
  ticket_id: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationTopupCreditsArgs = {
  amount: Scalars['Int']['input'];
};


export type MutationUpdateEstablishmentArgs = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  establishment_id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateEventArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['String']['input']>;
  event_id: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  maximumCapacity?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  start_date?: InputMaybe<Scalars['String']['input']>;
};

/** This is the result of a ticket purchase */
export type PurchaseTicketResult = {
  __typename?: 'PurchaseTicketResult';
  event_id: Scalars['String']['output'];
  new_balance: Scalars['Int']['output'];
  ticket_id: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Get the credits of the user that is logged in (requires authentication) */
  getCredit?: Maybe<CreditsBalance>;
  /** Get a specific establishment by id */
  getEstablishmentById?: Maybe<GetEstablishmentsResponse>;
  /** Get all establishments */
  getEstablishments?: Maybe<GetEstablishmentsResponse>;
  /** Get all establishments for a specific user (requires authentication) */
  getEstablishmentsForUser?: Maybe<GetEstablishmentsResponse>;
  /** Get event by id */
  getEventById?: Maybe<GetEventsResponse>;
  /** Get all events */
  getEvents?: Maybe<GetEventsResponse>;
  /** Get all available tickets */
  getTickets?: Maybe<Array<Maybe<EventAvailableTickets>>>;
  /** Get all tickets for an event */
  getTicketsForEvent?: Maybe<Array<Maybe<EventAvailableTickets>>>;
  /** Get all tickets for a user (requires authentication) */
  getTicketsForUser?: Maybe<Array<Maybe<UserTicket>>>;
  /** Search for establishments and events - performs a full text search on the name of establishments/events depending on the type */
  search?: Maybe<SearchResultResponse>;
};


export type QueryGetEstablishmentByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetEventByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTicketsForEventArgs = {
  event_id: Scalars['String']['input'];
};


export type QuerySearchArgs = {
  query: Scalars['String']['input'];
  type: SearchType;
};

export type RemoveEventResult = {
  __typename?: 'RemoveEventResult';
  event: Event;
};

/** Search result - contains the type of the result and the result itself */
export type SearchResult = {
  __typename?: 'SearchResult';
  result?: Maybe<SearchResultUnion>;
  searchType?: Maybe<SearchResultType>;
};

/** Search result response - contains an array of search results */
export type SearchResultResponse = {
  __typename?: 'SearchResultResponse';
  results?: Maybe<Array<Maybe<SearchResult>>>;
};

/** Search result type - either event or establishment */
export enum SearchResultType {
  Establishment = 'ESTABLISHMENT',
  Event = 'EVENT'
}

export type SearchResultUnion = Establishment | Event;

/** Search type - what to search for */
export enum SearchType {
  All = 'ALL',
  Establishment = 'ESTABLISHMENT',
  Event = 'EVENT'
}

export type UpdateEstablishmentResult = {
  __typename?: 'UpdateEstablishmentResult';
  establishment: Establishment;
};

export type UpdateEventResult = {
  __typename?: 'UpdateEventResult';
  event: Event;
};

/** User ticket type */
export type UserTicket = {
  __typename?: 'UserTicket';
  bought_quantity: Scalars['Int']['output'];
  event_id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  ticket_id: Scalars['String']['output'];
  ticket_name: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};
