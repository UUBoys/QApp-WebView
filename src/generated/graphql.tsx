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

export type AuthResult = {
  __typename?: 'AuthResult';
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

export type CreditsBalance = {
  __typename?: 'CreditsBalance';
  balance: Scalars['Int']['output'];
};

export type CreditsTopUp = {
  __typename?: 'CreditsTopUp';
  newBalance: Scalars['Int']['output'];
  oldBalance: Scalars['Int']['output'];
};

export type Establishment = {
  __typename?: 'Establishment';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  coverImage?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  events?: Maybe<Array<Maybe<Event>>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  profileImage?: Maybe<Scalars['String']['output']>;
  street: Scalars['String']['output'];
};

export type Event = {
  __typename?: 'Event';
  description?: Maybe<Scalars['String']['output']>;
  end_date: Scalars['String']['output'];
  establishment_id: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  maximumCapacity: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  start_date: Scalars['String']['output'];
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
  createEstablishment?: Maybe<CreateEstablishmentResult>;
  createEvent?: Maybe<CreateEventResult>;
  googleOAuth?: Maybe<AuthResult>;
  login?: Maybe<AuthResult>;
  purchaseTicket?: Maybe<PurchaseTicketResult>;
  register?: Maybe<AuthResult>;
  search?: Maybe<SearchResultResponse>;
  topupCredits?: Maybe<CreditsTopUp>;
  updateEstablishment?: Maybe<UpdateEstablishmentResult>;
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
  description: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  establishment_id: Scalars['Int']['input'];
  maximumCapacity: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  start_date: Scalars['String']['input'];
};


export type MutationGoogleOAuthArgs = {
  idToken: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationPurchaseTicketArgs = {
  event_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};


export type MutationRegisterArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationSearchArgs = {
  query: Scalars['String']['input'];
  type: SearchType;
};


export type MutationTopupCreditsArgs = {
  amount: Scalars['Int']['input'];
};


export type MutationUpdateEstablishmentArgs = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  establishment_id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type PurchaseTicketResult = {
  __typename?: 'PurchaseTicketResult';
  ticket: Ticket;
};

export type Query = {
  __typename?: 'Query';
  getCredit?: Maybe<CreditsBalance>;
  getEstablishmentById?: Maybe<GetEstablishmentsResponse>;
  getEstablishments?: Maybe<GetEstablishmentsResponse>;
  getEstablishmentsForUser?: Maybe<GetEstablishmentsResponse>;
  getEvents?: Maybe<GetEventsResponse>;
};


export type QueryGetEstablishmentByIdArgs = {
  id: Scalars['Int']['input'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  result?: Maybe<SearchResultUnion>;
  searchType?: Maybe<SearchResultType>;
};

export type SearchResultResponse = {
  __typename?: 'SearchResultResponse';
  results?: Maybe<Array<Maybe<SearchResult>>>;
};

export enum SearchResultType {
  Establishment = 'ESTABLISHMENT',
  Event = 'EVENT'
}

export type SearchResultUnion = Establishment | Event;

export enum SearchType {
  All = 'ALL',
  Establishment = 'ESTABLISHMENT',
  Event = 'EVENT'
}

export type Ticket = {
  __typename?: 'Ticket';
  event_id: Scalars['String']['output'];
  id: Scalars['String']['output'];
  user_id: Scalars['Int']['output'];
};

export type UpdateEstablishmentResult = {
  __typename?: 'UpdateEstablishmentResult';
  establishment: Establishment;
};
