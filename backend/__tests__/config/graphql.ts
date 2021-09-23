import { gql } from 'apollo-server';

export const GET_ALL_EMPLOYEES = gql`
  query getAllEmployeesQuery {
    employees {
      firstName
      id
      lastName
      pictureUrl
      email
      isAdmin
      phone
      birthDate
      address
      city
      endDate
      startDate
      region
      createdAt
    }
  }
`;

export const CREATE_EMPLOYEE = gql`
  mutation Mutation($createOneEmployeeData: EmployeeCreateInput!) {
    createOneEmployee(data: $createOneEmployeeData) {
      firstName
      lastName
      email
      isAdmin
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

export const CREATE_EMPLOYEE_TO_UPDATE = gql`
  mutation Mutation($createOneEmployeeData: EmployeeCreateInput!) {
    createOneEmployee(data: $createOneEmployeeData) {
      id
      firstName
      lastName
      email
      pictureUrl
      phone
      birthDate
      address
      city
      region
      startDate
      endDate
    }
  }
`;

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateOneEmployeeMutation($updateOneEmployeeData: EmployeeUpdateInput!) {
    updateOneEmployee(data: $updateOneEmployeeData) {
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

export const DELETE_EMPLOYEE = gql`
  mutation DeleteOneEmployeeMutation($deleteOneEmployeeId: Int!) {
    deleteOneEmployee(employeeId: $deleteOneEmployeeId)
  }
`;
