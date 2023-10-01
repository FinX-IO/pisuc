/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPisuc = /* GraphQL */ `
  mutation CreatePisuc(
    $input: CreatePisucInput!
    $condition: ModelPisucConditionInput
  ) {
    createPisuc(input: $input, condition: $condition) {
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

export const updatePisuc = /* GraphQL */ `
  mutation UpdatePisuc(
    $input: UpdatePisucInput!
    $condition: ModelPisucConditionInput
  ) {
    updatePisuc(input: $input, condition: $condition) {
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
  
export const deletePisuc = /* GraphQL */ `
  mutation DeletePisuc(
    $input: DeletePisucInput!
    $condition: ModelPisucConditionInput
  ) {
    deletePisuc(input: $input, condition: $condition) {
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
  
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
