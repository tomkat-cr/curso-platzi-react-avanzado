// src/hoc/getSinglePhoto

import { gql } from '@apollo/client'

export const getSinglePhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
