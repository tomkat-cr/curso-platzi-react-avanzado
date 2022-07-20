// src/hoc/getCategory.js

import { gql } from '@apollo/client'

export const getCategory = gql`
  query getCategory($id: ID!) {
    category(id:$id) {
      id
      name
      emoji
      cover
      path
    }
  }
`
