/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../src/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AppointmentCreateInput: { // input type
    assuranceId: number; // Int!
    date: NexusGenScalars['Date']; // Date!
    employeeId: number; // Int!
    location: string; // String!
    notes?: string | null; // String
    title: string; // String!
  }
  AppointmentResolveInput: { // input type
    id: number; // Int!
    resolved: boolean; // Boolean!
  }
  EmployeeCreateInput: { // input type
    address: string; // String!
    birthDate: NexusGenScalars['Date']; // Date!
    city: string; // String!
    email: string; // String!
    endDate?: NexusGenScalars['Date'] | null; // Date
    firstName: string; // String!
    lastName: string; // String!
    phone: string; // String!
    pictureUrl?: string | null; // String
    region: string; // String!
    startDate: NexusGenScalars['Date']; // Date!
  }
  EmployeeUpdateInput: { // input type
    address: string; // String!
    birthDate: NexusGenScalars['Date']; // Date!
    city: string; // String!
    email: string; // String!
    endDate?: NexusGenScalars['Date'] | null; // Date
    firstName: string; // String!
    id: number; // Int!
    lastName: string; // String!
    phone: string; // String!
    pictureUrl?: string | null; // String
    region: string; // String!
    startDate: NexusGenScalars['Date']; // Date!
  }
  MissionCreateInput: { // input type
    address: string; // String!
    assuranceContractNumber: string; // String!
    assuranceId: number; // Int!
    carHolderEmail: string; // String!
    carHolderName: string; // String!
    carHolderPhone: string; // String!
    carRegistrationNumber: string; // String!
    employeeId: number; // Int!
    ends: NexusGenScalars['Date']; // Date!
    finished?: boolean | null; // Boolean
    repairAgencyEmail: string; // String!
    repairAgencyName: string; // String!
    repairAgencyPhone: string; // String!
    repairAgencyResponsible: string; // String!
    starts: NexusGenScalars['Date']; // Date!
    title: string; // String!
  }
  MissionResolveInput: { // input type
    finished: boolean; // Boolean!
    id: number; // Int!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: any
}

export interface NexusGenObjects {
  Appointment: { // root type
    assuranceId: number; // Int!
    createdAt: NexusGenScalars['Date']; // Date!
    date: NexusGenScalars['Date']; // Date!
    employeeId: number; // Int!
    id: number; // Int!
    location?: string | null; // String
    notes?: string | null; // String
    resolved?: boolean | null; // Boolean
    resolvedAt?: NexusGenScalars['Date'] | null; // Date
    title: string; // String!
  }
  Assurance: { // root type
    id: number; // Int!
    name?: string | null; // String
    pictureUrl?: string | null; // String
    slug?: string | null; // String
  }
  Employee: { // root type
    address?: string | null; // String
    birthDate?: NexusGenScalars['Date'] | null; // Date
    city?: string | null; // String
    createdAt?: NexusGenScalars['Date'] | null; // Date
    email?: string | null; // String
    endDate?: NexusGenScalars['Date'] | null; // Date
    firstName?: string | null; // String
    id: number; // Int!
    isAdmin?: boolean | null; // Boolean
    lastName?: string | null; // String
    phone?: string | null; // String
    pictureUrl?: string | null; // String
    region?: string | null; // String
    startDate?: NexusGenScalars['Date'] | null; // Date
  }
  Mission: { // root type
    address: string; // String!
    assuranceContractNumber: string; // String!
    assuranceId: number; // Int!
    carHolderEmail: string; // String!
    carHolderName: string; // String!
    carHolderPhone: string; // String!
    carRegistrationNumber: string; // String!
    createdAt: NexusGenScalars['Date']; // Date!
    employeeId: number; // Int!
    ends: NexusGenScalars['Date']; // Date!
    finished: boolean; // Boolean!
    id: number; // Int!
    repairAgencyEmail: string; // String!
    repairAgencyName: string; // String!
    repairAgencyPhone: string; // String!
    repairAgencyResponsible: string; // String!
    starts: NexusGenScalars['Date']; // Date!
    title: string; // String!
  }
  Mutation: {};
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Appointment: { // field return type
    assurance: NexusGenRootTypes['Assurance'] | null; // Assurance
    assuranceId: number; // Int!
    createdAt: NexusGenScalars['Date']; // Date!
    date: NexusGenScalars['Date']; // Date!
    employee: NexusGenRootTypes['Employee'] | null; // Employee
    employeeId: number; // Int!
    id: number; // Int!
    location: string | null; // String
    notes: string | null; // String
    resolved: boolean | null; // Boolean
    resolvedAt: NexusGenScalars['Date'] | null; // Date
    title: string; // String!
  }
  Assurance: { // field return type
    appointments: Array<NexusGenRootTypes['Appointment'] | null> | null; // [Appointment]
    id: number; // Int!
    name: string | null; // String
    pictureUrl: string | null; // String
    slug: string | null; // String
  }
  Employee: { // field return type
    address: string | null; // String
    appointments: Array<NexusGenRootTypes['Appointment'] | null> | null; // [Appointment]
    birthDate: NexusGenScalars['Date'] | null; // Date
    city: string | null; // String
    createdAt: NexusGenScalars['Date'] | null; // Date
    email: string | null; // String
    endDate: NexusGenScalars['Date'] | null; // Date
    firstName: string | null; // String
    id: number; // Int!
    isAdmin: boolean | null; // Boolean
    lastName: string | null; // String
    phone: string | null; // String
    pictureUrl: string | null; // String
    region: string | null; // String
    startDate: NexusGenScalars['Date'] | null; // Date
  }
  Mission: { // field return type
    address: string; // String!
    assurance: NexusGenRootTypes['Assurance'] | null; // Assurance
    assuranceContractNumber: string; // String!
    assuranceId: number; // Int!
    carHolderEmail: string; // String!
    carHolderName: string; // String!
    carHolderPhone: string; // String!
    carRegistrationNumber: string; // String!
    createdAt: NexusGenScalars['Date']; // Date!
    employee: NexusGenRootTypes['Employee'] | null; // Employee
    employeeId: number; // Int!
    ends: NexusGenScalars['Date']; // Date!
    finished: boolean; // Boolean!
    id: number; // Int!
    repairAgencyEmail: string; // String!
    repairAgencyName: string; // String!
    repairAgencyPhone: string; // String!
    repairAgencyResponsible: string; // String!
    starts: NexusGenScalars['Date']; // Date!
    title: string; // String!
  }
  Mutation: { // field return type
    createAppointment: NexusGenRootTypes['Appointment'] | null; // Appointment
    createMission: NexusGenRootTypes['Mission'] | null; // Mission
    createOneEmployee: NexusGenRootTypes['Employee'] | null; // Employee
    deleteOneEmployee: boolean | null; // Boolean
    resolveAppointment: NexusGenRootTypes['Appointment'] | null; // Appointment
    resolveMission: NexusGenRootTypes['Mission'] | null; // Mission
    updateOneEmployee: NexusGenRootTypes['Employee'] | null; // Employee
  }
  Query: { // field return type
    appointment: NexusGenRootTypes['Appointment'] | null; // Appointment
    appointments: Array<NexusGenRootTypes['Appointment'] | null> | null; // [Appointment]
    assurances: Array<NexusGenRootTypes['Assurance'] | null> | null; // [Assurance]
    employee: NexusGenRootTypes['Employee'] | null; // Employee
    employees: Array<NexusGenRootTypes['Employee'] | null> | null; // [Employee]
    mission: NexusGenRootTypes['Mission'] | null; // Mission
    missions: Array<NexusGenRootTypes['Mission'] | null> | null; // [Mission]
  }
}

export interface NexusGenFieldTypeNames {
  Appointment: { // field return type name
    assurance: 'Assurance'
    assuranceId: 'Int'
    createdAt: 'Date'
    date: 'Date'
    employee: 'Employee'
    employeeId: 'Int'
    id: 'Int'
    location: 'String'
    notes: 'String'
    resolved: 'Boolean'
    resolvedAt: 'Date'
    title: 'String'
  }
  Assurance: { // field return type name
    appointments: 'Appointment'
    id: 'Int'
    name: 'String'
    pictureUrl: 'String'
    slug: 'String'
  }
  Employee: { // field return type name
    address: 'String'
    appointments: 'Appointment'
    birthDate: 'Date'
    city: 'String'
    createdAt: 'Date'
    email: 'String'
    endDate: 'Date'
    firstName: 'String'
    id: 'Int'
    isAdmin: 'Boolean'
    lastName: 'String'
    phone: 'String'
    pictureUrl: 'String'
    region: 'String'
    startDate: 'Date'
  }
  Mission: { // field return type name
    address: 'String'
    assurance: 'Assurance'
    assuranceContractNumber: 'String'
    assuranceId: 'Int'
    carHolderEmail: 'String'
    carHolderName: 'String'
    carHolderPhone: 'String'
    carRegistrationNumber: 'String'
    createdAt: 'Date'
    employee: 'Employee'
    employeeId: 'Int'
    ends: 'Date'
    finished: 'Boolean'
    id: 'Int'
    repairAgencyEmail: 'String'
    repairAgencyName: 'String'
    repairAgencyPhone: 'String'
    repairAgencyResponsible: 'String'
    starts: 'Date'
    title: 'String'
  }
  Mutation: { // field return type name
    createAppointment: 'Appointment'
    createMission: 'Mission'
    createOneEmployee: 'Employee'
    deleteOneEmployee: 'Boolean'
    resolveAppointment: 'Appointment'
    resolveMission: 'Mission'
    updateOneEmployee: 'Employee'
  }
  Query: { // field return type name
    appointment: 'Appointment'
    appointments: 'Appointment'
    assurances: 'Assurance'
    employee: 'Employee'
    employees: 'Employee'
    mission: 'Mission'
    missions: 'Mission'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createAppointment: { // args
      data: NexusGenInputs['AppointmentCreateInput']; // AppointmentCreateInput!
    }
    createMission: { // args
      data: NexusGenInputs['MissionCreateInput']; // MissionCreateInput!
    }
    createOneEmployee: { // args
      data: NexusGenInputs['EmployeeCreateInput']; // EmployeeCreateInput!
    }
    deleteOneEmployee: { // args
      employeeId: number; // Int!
    }
    resolveAppointment: { // args
      data: NexusGenInputs['AppointmentResolveInput']; // AppointmentResolveInput!
    }
    resolveMission: { // args
      data: NexusGenInputs['MissionResolveInput']; // MissionResolveInput!
    }
    updateOneEmployee: { // args
      data: NexusGenInputs['EmployeeUpdateInput']; // EmployeeUpdateInput!
    }
  }
  Query: {
    appointment: { // args
      appointmentId: number; // Int!
    }
    appointments: { // args
      searchQuery?: string | null; // String
    }
    employee: { // args
      employeeId: number; // Int!
    }
    employees: { // args
      searchQuery?: string | null; // String
    }
    mission: { // args
      missionId: number; // Int!
    }
    missions: { // args
      searchQuery?: string | null; // String
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}