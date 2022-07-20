// src/containers/ToggleLikeMutation.js

import { useMutation } from '@apollo/client'
import { mutationLikePhoto } from '../hoc/mutarionLikePhoto'

export const useMuationToogleLike = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(mutationLikePhoto)
  return { mutation, mutationLoading, mutationError }
}
