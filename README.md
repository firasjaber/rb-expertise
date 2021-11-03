# RB Expertise Dashboard

- monorepo for Web App Management Tool for RB Expertise : contains CRA for frontend and Graphql API running on express for the backend

## Running the project

- you need docker to run the dev environment
- first clone the repo
  ` mkdir rb git clone https://github.com/firasjaber/rb-expertise/ rb`
- then execute the docker-compose file
  ` docker-compose up`
- to run e2e tests
  ` // still setting them up`

## Tech stack & libraries used

- GraphQL : running the graphql api for express
- GraphQL Nexus : Graphql schema builder
- Prisma : Typescript ORM
- PostgresQL : main project database
- Jest : unit & int testing framework
- React : user interface & frontend
- Apollo Graphql Client : graphql client for react
- Tailwindcss & Chakra : styling
- Formik & Yup : forms & validation
