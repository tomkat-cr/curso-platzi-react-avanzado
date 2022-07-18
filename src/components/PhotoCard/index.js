// src/components/PhotoCard/index.js

import React, { useEffect, useRef, useState } from 'react'
import { Img, Anchor, Article, Button, ImageWrapper } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const useElementOnScreen = (options = null) => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const callbackFunction = (entries) => {
    const [entry] = entries
    console.log(entry.isIntersecting)
    if (entry.isIntersecting) setIsVisible(entry.isIntersecting)
  }

  if (options === null) {
    options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])

  return [containerRef, isVisible]
}

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [element, show] = useElementOnScreen()
  // const element = useRef(null)
  // const [show, setShow] = useState(false)

  // useEffect(function () {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 1.0
  //   }
  //   const observer = new window.IntersectionObserver(function (entries) {
  //     // const { isIntersecting } = entries[0]
  //     const { isIntersecting, intersectionRatio } = entries[0]
  //     // if (intersectionRatio <= 0) return
  //     console.log({ isIntersecting, intersectionRatio })
  //     if (isIntersecting) {
  //       setShow(true)
  //       // observer.disconnect()
  //     }
  //   }, options)
  //   observer.observe(element.current)
  // }, [element])

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
          <Button>
            {
              (likes === 0
                ? <MdFavoriteBorder size='32px' />
                : <MdFavorite size='32px' />
              )
            } {likes} Likes!
          </Button>
        </>
      }
    </Article>
  )
}
