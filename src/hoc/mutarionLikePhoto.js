// src/hoc/mutarionLikePhoto.js

import { gql } from '@apollo/client'

export const mutationLikePhoto = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
