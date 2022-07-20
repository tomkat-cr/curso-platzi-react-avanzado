// src/components/PhotoCard/index.js

import React from 'react'
import { Img, Anchor, Article, ImageWrapper } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { FavButton } from '../FavButton'
import { useMuationToogleLike } from '../../containers/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

// Hook para mostrar cada foto
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [element, show] = useNearScreen()

  const keyId = `like-id-${id}`
  const [liked, setLiked] = useLocalStorage(keyId, false)
  // const { mutation, mutationLoading, mutationError } = useMuationToogleLike()
  const { mutation } = useMuationToogleLike()

  const handleFavClick = () => {
    // console.log('handleFavClick - {id, liked}:', { id, liked })
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }

  // console.log('Liked key / value:', keyId, liked)
  // console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })

  // TODO: volver a poner <Anchor href={`/detail/${id}`}>

  return (
    <Article ref={element}>
      {
        show &&
        <>
          <Anchor href={`?detail=${id}`}>
            <ImageWrapper>
              <Img src={src} />
            </ImageWrapper>
          </Anchor>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      }
    </Article>
  )
}
