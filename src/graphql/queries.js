/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPisuc = /* GraphQL */ `
  query GetPisuc($id: ID!) {
    getPisuc(id: $id) {
      id
      pisuc
      currency
      country
      instrumentClass
      instrumentType
      instrumentDates
      instrumentProps
      createDate
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }`;

export const listPisucs = /* GraphQL */ `
  query ListPisucs(
    $filter: ModelPisucFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPisucs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pisuc
        currency
        country
        instrumentClass
        instrumentType
        instrumentDates
        instrumentProps
        createDate
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }`;

export const syncPisucs = /* GraphQL */ `
  query SyncPisucs(
    $filter: ModelPisucFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPisucs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        pisuc
        currency
        country
        instrumentClass
        instrumentType
        instrumentDates
        instrumentProps
        createDate
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }`;

  

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
