// src/hoc/getUser.js

import { gql } from '@apollo/client'

export const getUser = gql`
  query getUser($id: ID!) {
    user(id:$id) {
      id
      name
      avatar
      email
      favs
    }
  }
`
