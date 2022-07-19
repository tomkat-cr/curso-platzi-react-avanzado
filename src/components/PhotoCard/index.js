// src/components/PhotoCard/index.js

import React, { useEffect, useRef, useState } from 'react'
import { Img, Anchor, Article, Button, ImageWrapper } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

// Custom hook para generalizar el uso del intersection observer
export const useElementOnScreen = (optionsParam = null) => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // const callbackFunction = (entries) => {
  //   const [entry] = entries
  //   console.log('useElementOnScreen', entry.isIntersecting, entry)
  //   if (entry.isIntersecting) setIsVisible(entry.isIntersecting)
  // }

  let options
  if (options === null) {
    options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
  } else {
    options = optionsParam
  }

  useEffect(() => {
    import('intersection-observer')
      .then(() => {
        // const observer = new window.IntersectionObserver(callbackFunction, options)
        // if (containerRef.current) observer.observe(containerRef.current)
        // return () => {
        //   if (containerRef.current) observer.unobserve(containerRef.current)
        // }
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        }, options)
        observer.observe(containerRef.current)
      })
  }, [containerRef, options])

  return [containerRef, isVisible]
}

// Hook para mostrar cada foto
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [element, show] = useElementOnScreen()

  const keyId = `like-id-${id}`

  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(keyId)
      return like === 'true'
    } catch (e) {
      return false
    }
  })

  console.log('Liked:', liked)
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(keyId, value)
      setLiked(value)
    } catch (e) {
      console.error(e)
    }
  }

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
          <Button onClick={() => (setLocalStorage(!liked))}>
            <Icon size='32px' /> {likes} Likes!
          </Button>
        </>
      }
    </Article>
  )
}
