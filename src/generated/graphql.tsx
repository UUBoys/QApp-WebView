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
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type CreateEstablishmentResult = {
  __typename?: 'CreateEstablishmentResult';
  establishment?: Maybe<Establishment>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateEventResult = {
  __typename?: 'CreateEventResult';
  event?: Maybe<Event>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreditsBalance = {
  __typename?: 'CreditsBalance';
  balance?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreditsTopUp = {
  __typename?: 'CreditsTopUp';
  newBalance?: Maybe<Scalars['Int']['output']>;
  oldBalance?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Establishment = {
  __typename?: 'Establishment';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type Event = {
  __typename?: 'Event';
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['String']['output']>;
  establishment_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maximumCapacity?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  start_date?: Maybe<Scalars['String']['output']>;
};

export type GetEstablishmentsResponse = {
  __typename?: 'GetEstablishmentsResponse';
  establishments?: Maybe<Array<Maybe<Establishment>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetEventsResponse = {
  __typename?: 'GetEventsResponse';
  events?: Maybe<Array<Maybe<Event>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEstablishment?: Maybe<CreateEstablishmentResult>;
  createEvent?: Maybe<CreateEventResult>;
  googleOAuth?: Maybe<AuthResult>;
  login?: Maybe<AuthResult>;
  purchaseTicket?: Maybe<PurchaseTicketResult>;
  register?: Maybe<AuthResult>;
  topupCredits?: Maybe<CreditsTopUp>;
};


export type MutationCreateEstablishmentArgs = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
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


export type MutationTopupCreditsArgs = {
  amount: Scalars['Int']['input'];
};

export type PurchaseTicketResult = {
  __typename?: 'PurchaseTicketResult';
  success?: Maybe<Scalars['Boolean']['output']>;
  ticket?: Maybe<Ticket>;
};

export type Query = {
  __typename?: 'Query';
  getCredit?: Maybe<CreditsBalance>;
  getEstablishment?: Maybe<GetEstablishmentsResponse>;
  getEvents?: Maybe<GetEventsResponse>;
};


export type QueryGetEstablishmentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  event_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};
