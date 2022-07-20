// src/components/PhotoCard/index.js

import React from 'react'
import { Img, Anchor, Article, Button, ImageWrapper } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

// Hook para mostrar cada foto
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [element, show] = useNearScreen()

  const keyId = `like-id-${id}`
  const [liked, setLiked] = useLocalStorage(keyId, false)

  console.log('Liked key / value:', keyId, liked)
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show &&
        <>
          <Anchor href={`/detail/${id}`}>
            <ImageWrapper>
              <Img src={src} />
            </ImageWrapper>
          </Anchor>
          <Button onClick={() => (setLiked(!liked))}>
            <Icon size='32px' /> {likes} Likes!
          </Button>
        </>
      }
    </Article>
  )
}
