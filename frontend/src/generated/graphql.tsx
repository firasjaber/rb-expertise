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

/** Appointment between client ,assurance and SEAT */
export type Appointment = {
  __typename?: 'Appointment';
  /** Appointment assigned assurance */
  assurance?: Maybe<Assurance>;
  /** Appointment assigned assurance id */
  assuranceId: Scalars['Int'];
  /** Appointment creation date */
  createdAt: Scalars['Date'];
  /** Appointment potential date */
  date: Scalars['Date'];
  /** Appointment assigned employee */
  employee?: Maybe<Employee>;
  /** Appointment assigned employee id */
  employeeId: Scalars['Int'];
  /** Appointment id */
  id: Scalars['Int'];
  /** Appointment description */
  location?: Maybe<Scalars['String']>;
  /** Appointment additional notes */
  notes?: Maybe<Scalars['String']>;
  /** Appointment current status */
  resolved?: Maybe<Scalars['Boolean']>;
  /** Appointment resolvation date */
  resolvedAt?: Maybe<Scalars['Date']>;
  /** Appointment title */
  title: Scalars['String'];
};

export type AppointmentCreateInput = {
  assuranceId: Scalars['Int'];
  date: Scalars['Date'];
  employeeId: Scalars['Int'];
  location: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type AppointmentResolveInput = {
  id: Scalars['Int'];
  resolved: Scalars['Boolean'];
};

/** Assurance company associated with SEAT */
export type Assurance = {
  __typename?: 'Assurance';
  /** appointments associated with correspending assurance company */
  appointments?: Maybe<Array<Maybe<Appointment>>>;
  /** Assurance Company ID */
  id: Scalars['Int'];
  /** Assurance company full name */
  name?: Maybe<Scalars['String']>;
  /** Assurance company picture url */
  pictureUrl?: Maybe<Scalars['String']>;
  /** Assurance Company Slug (Short Name) */
  slug?: Maybe<Scalars['String']>;
};

/** SEAT Employee ( expert ) */
export type Employee = {
  __typename?: 'Employee';
  /** Employee address */
  address?: Maybe<Scalars['String']>;
  /** Appointment associeted with this Employee */
  appointments?: Maybe<Array<Maybe<Appointment>>>;
  /** Employee birth date */
  birthDate?: Maybe<Scalars['Date']>;
  /** Employee city */
  city?: Maybe<Scalars['String']>;
  /** Employee creation date */
  createdAt?: Maybe<Scalars['Date']>;
  /** Employee email */
  email?: Maybe<Scalars['String']>;
  /** Employee potention resigning date */
  endDate?: Maybe<Scalars['Date']>;
  /** Employee first name */
  firstName?: Maybe<Scalars['String']>;
  /** Employee id */
  id: Scalars['Int'];
  /** Employee role */
  isAdmin?: Maybe<Scalars['Boolean']>;
  /** Employee last name */
  lastName?: Maybe<Scalars['String']>;
  /** Employee phone number */
  phone?: Maybe<Scalars['String']>;
  /** Employee picture url */
  pictureUrl?: Maybe<Scalars['String']>;
  /** Employee Region */
  region?: Maybe<Scalars['String']>;
  /** Employee joining date */
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

/** Missions associated between employee, assurance company, and SEAT */
export type Mission = {
  __typename?: 'Mission';
  address: Scalars['String'];
  assurance?: Maybe<Assurance>;
  assuranceContractNumber: Scalars['String'];
  assuranceId: Scalars['Int'];
  carHolderEmail: Scalars['String'];
  carHolderName: Scalars['String'];
  carHolderPhone: Scalars['String'];
  carRegistrationNumber: Scalars['String'];
  createdAt: Scalars['Date'];
  employee?: Maybe<Employee>;
  employeeId: Scalars['Int'];
  ends: Scalars['Date'];
  finished: Scalars['Boolean'];
  id: Scalars['Int'];
  repairAgencyEmail: Scalars['String'];
  repairAgencyName: Scalars['String'];
  repairAgencyPhone: Scalars['String'];
  repairAgencyResponsible: Scalars['String'];
  starts: Scalars['Date'];
  title: Scalars['String'];
};

export type MissionCreateInput = {
  address: Scalars['String'];
  assuranceContractNumber: Scalars['String'];
  assuranceId: Scalars['Int'];
  carHolderEmail: Scalars['String'];
  carHolderName: Scalars['String'];
  carHolderPhone: Scalars['String'];
  carRegistrationNumber: Scalars['String'];
  employeeId: Scalars['Int'];
  ends: Scalars['Date'];
  finished?: Maybe<Scalars['Boolean']>;
  repairAgencyEmail: Scalars['String'];
  repairAgencyName: Scalars['String'];
  repairAgencyPhone: Scalars['String'];
  repairAgencyResponsible: Scalars['String'];
  starts: Scalars['Date'];
  title: Scalars['String'];
};

export type MissionResolveInput = {
  finished: Scalars['Boolean'];
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create an Appoinment */
  createAppointment?: Maybe<Appointment>;
  /** Create a mission */
  createMission?: Maybe<Mission>;
  /** Create an Employee */
  createOneEmployee?: Maybe<Employee>;
  /** Delete an Employee by ID */
  deleteOneEmployee?: Maybe<Scalars['Boolean']>;
  /** Resolve an Appointment */
  resolveAppointment?: Maybe<Appointment>;
  /** Resolve a Mission by changing status to finished */
  resolveMission?: Maybe<Mission>;
  /** Update an employee by ID */
  updateOneEmployee?: Maybe<Employee>;
};


export type MutationCreateAppointmentArgs = {
  data: AppointmentCreateInput;
};


export type MutationCreateMissionArgs = {
  data: MissionCreateInput;
};


export type MutationCreateOneEmployeeArgs = {
  data: EmployeeCreateInput;
};


export type MutationDeleteOneEmployeeArgs = {
  employeeId: Scalars['Int'];
};


export type MutationResolveAppointmentArgs = {
  data: AppointmentResolveInput;
};


export type MutationResolveMissionArgs = {
  data: MissionResolveInput;
};


export type MutationUpdateOneEmployeeArgs = {
  data: EmployeeUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  /** Get an appointment by ID */
  appointment?: Maybe<Appointment>;
  /** Get all Appointments */
  appointments?: Maybe<Array<Maybe<Appointment>>>;
  /** Get all Assurances Companies */
  assurances?: Maybe<Array<Maybe<Assurance>>>;
  /** Get an Employee by ID */
  employee?: Maybe<Employee>;
  /** Get all Employees */
  employees?: Maybe<Array<Maybe<Employee>>>;
  /** Get a single Mission by its ID */
  mission?: Maybe<Mission>;
  /** Get All Missions */
  missions?: Maybe<Array<Maybe<Mission>>>;
};


export type QueryAppointmentArgs = {
  appointmentId: Scalars['Int'];
};


export type QueryAppointmentsArgs = {
  active?: Maybe<Scalars['Boolean']>;
  searchQuery?: Maybe<Scalars['String']>;
};


export type QueryEmployeeArgs = {
  employeeId: Scalars['Int'];
};


export type QueryEmployeesArgs = {
  searchQuery?: Maybe<Scalars['String']>;
};


export type QueryMissionArgs = {
  missionId: Scalars['Int'];
};


export type QueryMissionsArgs = {
  active?: Maybe<Scalars['Boolean']>;
  searchQuery?: Maybe<Scalars['String']>;
};

export type CreateOneEmployeeMutationVariables = Exact<{
  createOneEmployeeData: EmployeeCreateInput;
}>;


export type CreateOneEmployeeMutation = { __typename?: 'Mutation', createOneEmployee?: Maybe<{ __typename?: 'Employee', firstName?: Maybe<string>, pictureUrl?: Maybe<string>, email?: Maybe<string>, id: number, isAdmin?: Maybe<boolean>, phone?: Maybe<string>, birthDate?: Maybe<any>, address?: Maybe<string>, region?: Maybe<string>, city?: Maybe<string>, startDate?: Maybe<any>, endDate?: Maybe<any>, createdAt?: Maybe<any> }> };

export type DeleteOneEmployeeMutationMutationVariables = Exact<{
  deleteOneEmployeeId: Scalars['Int'];
}>;


export type DeleteOneEmployeeMutationMutation = { __typename?: 'Mutation', deleteOneEmployee?: Maybe<boolean> };

export type UpdateOneEmployeeMutationMutationVariables = Exact<{
  updateOneEmployeeData: EmployeeUpdateInput;
}>;


export type UpdateOneEmployeeMutationMutation = { __typename?: 'Mutation', updateOneEmployee?: Maybe<{ __typename?: 'Employee', id: number, firstName?: Maybe<string>, lastName?: Maybe<string>, email?: Maybe<string>, pictureUrl?: Maybe<string>, isAdmin?: Maybe<boolean>, phone?: Maybe<string>, birthDate?: Maybe<any>, address?: Maybe<string>, city?: Maybe<string>, region?: Maybe<string>, startDate?: Maybe<any>, endDate?: Maybe<any>, createdAt?: Maybe<any> }> };

export type GetAppointmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAppointmentsQuery = { __typename?: 'Query', appointments?: Maybe<Array<Maybe<{ __typename?: 'Appointment', id: number, title: string, location?: Maybe<string>, date: any, notes?: Maybe<string>, resolved?: Maybe<boolean>, resolvedAt?: Maybe<any>, assuranceId: number, employeeId: number, employee?: Maybe<{ __typename?: 'Employee', firstName?: Maybe<string>, lastName?: Maybe<string>, email?: Maybe<string>, pictureUrl?: Maybe<string>, phone?: Maybe<string> }>, assurance?: Maybe<{ __typename?: 'Assurance', pictureUrl?: Maybe<string>, name?: Maybe<string> }> }>>> };

export type GetEmployeeQueryVariables = Exact<{
  employeeId: Scalars['Int'];
}>;


export type GetEmployeeQuery = { __typename?: 'Query', employee?: Maybe<{ __typename?: 'Employee', firstName?: Maybe<string>, email?: Maybe<string>, lastName?: Maybe<string>, pictureUrl?: Maybe<string>, phone?: Maybe<string>, birthDate?: Maybe<any>, address?: Maybe<string>, city?: Maybe<string>, region?: Maybe<string>, startDate?: Maybe<any>, endDate?: Maybe<any>, createdAt?: Maybe<any> }> };

export type GetEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeesQuery = { __typename?: 'Query', employees?: Maybe<Array<Maybe<{ __typename?: 'Employee', id: number, firstName?: Maybe<string>, lastName?: Maybe<string>, email?: Maybe<string>, pictureUrl?: Maybe<string>, phone?: Maybe<string>, startDate?: Maybe<any> }>>> };

export type GetIncomingTasksQueryVariables = Exact<{
  activeAppointment?: Maybe<Scalars['Boolean']>;
  activeMission?: Maybe<Scalars['Boolean']>;
}>;


export type GetIncomingTasksQuery = { __typename?: 'Query', appointments?: Maybe<Array<Maybe<{ __typename?: 'Appointment', id: number, title: string, date: any, employee?: Maybe<{ __typename?: 'Employee', pictureUrl?: Maybe<string>, firstName?: Maybe<string>, lastName?: Maybe<string> }> }>>>, missions?: Maybe<Array<Maybe<{ __typename?: 'Mission', id: number, title: string, starts: any, employee?: Maybe<{ __typename?: 'Employee', firstName?: Maybe<string>, lastName?: Maybe<string>, pictureUrl?: Maybe<string> }> }>>> };

export type GetSingleMissionQueryQueryVariables = Exact<{
  missionId: Scalars['Int'];
}>;


export type GetSingleMissionQueryQuery = { __typename?: 'Query', mission?: Maybe<{ __typename?: 'Mission', id: number, title: string, starts: any, ends: any, address: string, finished: boolean, createdAt: any, carRegistrationNumber: string, carHolderName: string, carHolderEmail: string, carHolderPhone: string, assuranceContractNumber: string, repairAgencyName: string, repairAgencyResponsible: string, repairAgencyEmail: string, repairAgencyPhone: string, employeeId: number, employee?: Maybe<{ __typename?: 'Employee', firstName?: Maybe<string>, lastName?: Maybe<string>, pictureUrl?: Maybe<string> }>, assurance?: Maybe<{ __typename?: 'Assurance', slug?: Maybe<string>, name?: Maybe<string>, pictureUrl?: Maybe<string> }> }> };

export type GetMissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMissionsQuery = { __typename?: 'Query', missions?: Maybe<Array<Maybe<{ __typename?: 'Mission', id: number, title: string, starts: any, ends: any, finished: boolean, employee?: Maybe<{ __typename?: 'Employee', firstName?: Maybe<string>, lastName?: Maybe<string>, pictureUrl?: Maybe<string> }> }>>> };


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
export const DeleteOneEmployeeMutationDocument = gql`
    mutation DeleteOneEmployeeMutation($deleteOneEmployeeId: Int!) {
  deleteOneEmployee(employeeId: $deleteOneEmployeeId)
}
    `;
export type DeleteOneEmployeeMutationMutationFn = Apollo.MutationFunction<DeleteOneEmployeeMutationMutation, DeleteOneEmployeeMutationMutationVariables>;

/**
 * __useDeleteOneEmployeeMutationMutation__
 *
 * To run a mutation, you first call `useDeleteOneEmployeeMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneEmployeeMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneEmployeeMutationMutation, { data, loading, error }] = useDeleteOneEmployeeMutationMutation({
 *   variables: {
 *      deleteOneEmployeeId: // value for 'deleteOneEmployeeId'
 *   },
 * });
 */
export function useDeleteOneEmployeeMutationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneEmployeeMutationMutation, DeleteOneEmployeeMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneEmployeeMutationMutation, DeleteOneEmployeeMutationMutationVariables>(DeleteOneEmployeeMutationDocument, options);
      }
export type DeleteOneEmployeeMutationMutationHookResult = ReturnType<typeof useDeleteOneEmployeeMutationMutation>;
export type DeleteOneEmployeeMutationMutationResult = Apollo.MutationResult<DeleteOneEmployeeMutationMutation>;
export type DeleteOneEmployeeMutationMutationOptions = Apollo.BaseMutationOptions<DeleteOneEmployeeMutationMutation, DeleteOneEmployeeMutationMutationVariables>;
export const UpdateOneEmployeeMutationDocument = gql`
    mutation UpdateOneEmployeeMutation($updateOneEmployeeData: EmployeeUpdateInput!) {
  updateOneEmployee(data: $updateOneEmployeeData) {
    id
    firstName
    lastName
    email
    pictureUrl
    isAdmin
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
export type UpdateOneEmployeeMutationMutationFn = Apollo.MutationFunction<UpdateOneEmployeeMutationMutation, UpdateOneEmployeeMutationMutationVariables>;

/**
 * __useUpdateOneEmployeeMutationMutation__
 *
 * To run a mutation, you first call `useUpdateOneEmployeeMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneEmployeeMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneEmployeeMutationMutation, { data, loading, error }] = useUpdateOneEmployeeMutationMutation({
 *   variables: {
 *      updateOneEmployeeData: // value for 'updateOneEmployeeData'
 *   },
 * });
 */
export function useUpdateOneEmployeeMutationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneEmployeeMutationMutation, UpdateOneEmployeeMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneEmployeeMutationMutation, UpdateOneEmployeeMutationMutationVariables>(UpdateOneEmployeeMutationDocument, options);
      }
export type UpdateOneEmployeeMutationMutationHookResult = ReturnType<typeof useUpdateOneEmployeeMutationMutation>;
export type UpdateOneEmployeeMutationMutationResult = Apollo.MutationResult<UpdateOneEmployeeMutationMutation>;
export type UpdateOneEmployeeMutationMutationOptions = Apollo.BaseMutationOptions<UpdateOneEmployeeMutationMutation, UpdateOneEmployeeMutationMutationVariables>;
export const GetAppointmentsDocument = gql`
    query getAppointments {
  appointments {
    id
    title
    location
    date
    notes
    resolved
    resolvedAt
    assuranceId
    employeeId
    employee {
      firstName
      lastName
      email
      pictureUrl
      phone
    }
    assurance {
      pictureUrl
      name
    }
  }
}
    `;

/**
 * __useGetAppointmentsQuery__
 *
 * To run a query within a React component, call `useGetAppointmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppointmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppointmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAppointmentsQuery(baseOptions?: Apollo.QueryHookOptions<GetAppointmentsQuery, GetAppointmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAppointmentsQuery, GetAppointmentsQueryVariables>(GetAppointmentsDocument, options);
      }
export function useGetAppointmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAppointmentsQuery, GetAppointmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAppointmentsQuery, GetAppointmentsQueryVariables>(GetAppointmentsDocument, options);
        }
export type GetAppointmentsQueryHookResult = ReturnType<typeof useGetAppointmentsQuery>;
export type GetAppointmentsLazyQueryHookResult = ReturnType<typeof useGetAppointmentsLazyQuery>;
export type GetAppointmentsQueryResult = Apollo.QueryResult<GetAppointmentsQuery, GetAppointmentsQueryVariables>;
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
export const GetIncomingTasksDocument = gql`
    query getIncomingTasks($activeAppointment: Boolean, $activeMission: Boolean) {
  appointments(active: $activeAppointment) {
    id
    title
    date
    employee {
      pictureUrl
      firstName
      lastName
    }
  }
  missions(active: $activeMission) {
    id
    title
    starts
    employee {
      firstName
      lastName
      pictureUrl
    }
  }
}
    `;

/**
 * __useGetIncomingTasksQuery__
 *
 * To run a query within a React component, call `useGetIncomingTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIncomingTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIncomingTasksQuery({
 *   variables: {
 *      activeAppointment: // value for 'activeAppointment'
 *      activeMission: // value for 'activeMission'
 *   },
 * });
 */
export function useGetIncomingTasksQuery(baseOptions?: Apollo.QueryHookOptions<GetIncomingTasksQuery, GetIncomingTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIncomingTasksQuery, GetIncomingTasksQueryVariables>(GetIncomingTasksDocument, options);
      }
export function useGetIncomingTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIncomingTasksQuery, GetIncomingTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIncomingTasksQuery, GetIncomingTasksQueryVariables>(GetIncomingTasksDocument, options);
        }
export type GetIncomingTasksQueryHookResult = ReturnType<typeof useGetIncomingTasksQuery>;
export type GetIncomingTasksLazyQueryHookResult = ReturnType<typeof useGetIncomingTasksLazyQuery>;
export type GetIncomingTasksQueryResult = Apollo.QueryResult<GetIncomingTasksQuery, GetIncomingTasksQueryVariables>;
export const GetSingleMissionQueryDocument = gql`
    query getSingleMissionQuery($missionId: Int!) {
  mission(missionId: $missionId) {
    id
    title
    starts
    ends
    address
    finished
    createdAt
    carRegistrationNumber
    carHolderName
    carHolderEmail
    carHolderPhone
    assuranceContractNumber
    repairAgencyName
    repairAgencyResponsible
    repairAgencyEmail
    repairAgencyPhone
    employeeId
    employee {
      firstName
      lastName
      pictureUrl
    }
    assurance {
      slug
      name
      pictureUrl
    }
  }
}
    `;

/**
 * __useGetSingleMissionQueryQuery__
 *
 * To run a query within a React component, call `useGetSingleMissionQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleMissionQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleMissionQueryQuery({
 *   variables: {
 *      missionId: // value for 'missionId'
 *   },
 * });
 */
export function useGetSingleMissionQueryQuery(baseOptions: Apollo.QueryHookOptions<GetSingleMissionQueryQuery, GetSingleMissionQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSingleMissionQueryQuery, GetSingleMissionQueryQueryVariables>(GetSingleMissionQueryDocument, options);
      }
export function useGetSingleMissionQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSingleMissionQueryQuery, GetSingleMissionQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSingleMissionQueryQuery, GetSingleMissionQueryQueryVariables>(GetSingleMissionQueryDocument, options);
        }
export type GetSingleMissionQueryQueryHookResult = ReturnType<typeof useGetSingleMissionQueryQuery>;
export type GetSingleMissionQueryLazyQueryHookResult = ReturnType<typeof useGetSingleMissionQueryLazyQuery>;
export type GetSingleMissionQueryQueryResult = Apollo.QueryResult<GetSingleMissionQueryQuery, GetSingleMissionQueryQueryVariables>;
export const GetMissionsDocument = gql`
    query GetMissions {
  missions {
    id
    title
    starts
    ends
    employee {
      firstName
      lastName
      pictureUrl
    }
    finished
  }
}
    `;

/**
 * __useGetMissionsQuery__
 *
 * To run a query within a React component, call `useGetMissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMissionsQuery(baseOptions?: Apollo.QueryHookOptions<GetMissionsQuery, GetMissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMissionsQuery, GetMissionsQueryVariables>(GetMissionsDocument, options);
      }
export function useGetMissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMissionsQuery, GetMissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMissionsQuery, GetMissionsQueryVariables>(GetMissionsDocument, options);
        }
export type GetMissionsQueryHookResult = ReturnType<typeof useGetMissionsQuery>;
export type GetMissionsLazyQueryHookResult = ReturnType<typeof useGetMissionsLazyQuery>;
export type GetMissionsQueryResult = Apollo.QueryResult<GetMissionsQuery, GetMissionsQueryVariables>;