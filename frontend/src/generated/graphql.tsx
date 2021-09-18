import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
};

export type Employee = {
  __typename?: 'Employee';
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  city?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
};

export type EmployeeCreateInput = {
  address: Scalars['String'];
  birthDate: Scalars['Date'];
  city: Scalars['String'];
  email: Scalars['String'];
  endDate?: Maybe<Scalars['Date']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  pictureUrl?: Maybe<Scalars['String']>;
  region: Scalars['String'];
  startDate: Scalars['Date'];
};

export type EmployeeUpdateInput = {
  address: Scalars['String'];
  birthDate: Scalars['Date'];
  city: Scalars['String'];
  email: Scalars['String'];
  endDate?: Maybe<Scalars['Date']>;
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  pictureUrl?: Maybe<Scalars['String']>;
  region: Scalars['String'];
  startDate: Scalars['Date'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneEmployee?: Maybe<Employee>;
  updateOneEmployee?: Maybe<Employee>;
};


export type MutationCreateOneEmployeeArgs = {
  data: EmployeeCreateInput;
};


export type MutationUpdateOneEmployeeArgs = {
  data: EmployeeUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  employee?: Maybe<Employee>;
  employees?: Maybe<Array<Maybe<Employee>>>;
  me?: Maybe<Scalars['String']>;
};


export type QueryEmployeeArgs = {
  employeeId: Scalars['Int'];
};


export type QueryEmployeesArgs = {
  searchQuery?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type GetEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeesQuery = { __typename?: 'Query', employees?: Maybe<Array<Maybe<{ __typename?: 'Employee', id: number, firstName?: Maybe<string>, lastName?: Maybe<string>, email?: Maybe<string>, pictureUrl?: Maybe<string>, phone?: Maybe<string>, startDate?: Maybe<any> }>>> };


export const GetEmployeesDocument = gql`
    query GetEmployees {
  employees {
    id
    firstName
    lastName
    email
    pictureUrl
    phone
    startDate
  }
}
    `;

/**
 * __useGetEmployeesQuery__
 *
 * To run a query within a React component, call `useGetEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmployeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEmployeesQuery(baseOptions?: Apollo.QueryHookOptions<GetEmployeesQuery, GetEmployeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(GetEmployeesDocument, options);
      }
export function useGetEmployeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmployeesQuery, GetEmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(GetEmployeesDocument, options);
        }
export type GetEmployeesQueryHookResult = ReturnType<typeof useGetEmployeesQuery>;
export type GetEmployeesLazyQueryHookResult = ReturnType<typeof useGetEmployeesLazyQuery>;
export type GetEmployeesQueryResult = Apollo.QueryResult<GetEmployeesQuery, GetEmployeesQueryVariables>;