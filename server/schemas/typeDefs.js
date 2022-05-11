const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Company {
    _id: ID
    name: String
    employees: [User]
    days: [Day]
  }

  type Day {
    _id: ID
    date: String
    shifts: [Shift]
  }

  type Shift {
    startTime: String
    endTime: String
    day: Day
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;
