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

export type CreateOneEmployeeMutationVariables = Exact<{
  createOneEmployeeData: EmployeeCreateInput;
}>;


export type CreateOneEmployeeMutation = { __typename?: 'Mutation', createOneEmployee?: Maybe<{ __typename?: 'Employee', firstName?: Maybe<string>, pictureUrl?: Maybe<string>, email?: Maybe<string>, id: number, isAdmin?: Maybe<boolean>, phone?: Maybe<string>, birthDate?: Maybe<any>, address?: Maybe<string>, region?: Maybe<string>, city?: Maybe<string>, startDate?: Maybe<any>, endDate?: Maybe<any>, createdAt?: Maybe<any> }> };

export type GetEmployeeQueryVariables = Exact<{
  employeeId: Scalars['Int'];
}>;


export type GetEmployeeQuery = { __typename?: 'Query', employee?: Maybe<{ __typename?: 'Employee', firstName?: Maybe<string>, email?: Maybe<string>, lastName?: Maybe<string>, pictureUrl?: Maybe<string>, phone?: Maybe<string>, birthDate?: Maybe<any>, address?: Maybe<string>, city?: Maybe<string>, region?: Maybe<string>, startDate?: Maybe<any>, endDate?: Maybe<any>, createdAt?: Maybe<any> }> };

export type GetEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeesQuery = { __typename?: 'Query', employees?: Maybe<Array<Maybe<{ __typename?: 'Employee', id: number, firstName?: Maybe<string>, lastName?: Maybe<string>, email?: Maybe<string>, pictureUrl?: Maybe<string>, phone?: Maybe<string>, startDate?: Maybe<any> }>>> };


export const CreateOneEmployeeDocument = gql`
    mutation createOneEmployee($createOneEmployeeData: EmployeeCreateInput!) {
  createOneEmployee(data: $createOneEmployeeData) {
    firstName
    pictureUrl
    email
    id
    isAdmin
    phone
    birthDate
    address
    region
    city
    startDate
    endDate
    createdAt
  }
}
    `;
export type CreateOneEmployeeMutationFn = Apollo.MutationFunction<CreateOneEmployeeMutation, CreateOneEmployeeMutationVariables>;

/**
 * __useCreateOneEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateOneEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneEmployeeMutation, { data, loading, error }] = useCreateOneEmployeeMutation({
 *   variables: {
 *      createOneEmployeeData: // value for 'createOneEmployeeData'
 *   },
 * });
 */
export function useCreateOneEmployeeMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneEmployeeMutation, CreateOneEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneEmployeeMutation, CreateOneEmployeeMutationVariables>(CreateOneEmployeeDocument, options);
      }
export type CreateOneEmployeeMutationHookResult = ReturnType<typeof useCreateOneEmployeeMutation>;
export type CreateOneEmployeeMutationResult = Apollo.MutationResult<CreateOneEmployeeMutation>;
export type CreateOneEmployeeMutationOptions = Apollo.BaseMutationOptions<CreateOneEmployeeMutation, CreateOneEmployeeMutationVariables>;
export const GetEmployeeDocument = gql`
    query getEmployee($employeeId: Int!) {
  employee(employeeId: $employeeId) {
    firstName
    email
    lastName
    pictureUrl
    phone
    birthDate
    address
    city
    region
    startDate
    endDate
    createdAt
  }
}
    `;

/**
 * __useGetEmployeeQuery__
 *
 * To run a query within a React component, call `useGetEmployeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmployeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmployeeQuery({
 *   variables: {
 *      employeeId: // value for 'employeeId'
 *   },
 * });
 */
export function useGetEmployeeQuery(baseOptions: Apollo.QueryHookOptions<GetEmployeeQuery, GetEmployeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEmployeeQuery, GetEmployeeQueryVariables>(GetEmployeeDocument, options);
      }
export function useGetEmployeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmployeeQuery, GetEmployeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEmployeeQuery, GetEmployeeQueryVariables>(GetEmployeeDocument, options);
        }
export type GetEmployeeQueryHookResult = ReturnType<typeof useGetEmployeeQuery>;
export type GetEmployeeLazyQueryHookResult = ReturnType<typeof useGetEmployeeLazyQuery>;
export type GetEmployeeQueryResult = Apollo.QueryResult<GetEmployeeQuery, GetEmployeeQueryVariables>;
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