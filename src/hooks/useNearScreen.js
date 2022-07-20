// src/hooks/useNearScreen.js

import { useEffect, useState, useRef } from 'react'

// Custom hook para generalizar el uso del intersection observer
export const useNearScreen = (optionsParam = null) => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // const callbackFunction = (entries) => {
  //   const [entry] = entries
  //   console.log('useNearScreen', entry.isIntersecting, entry)
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
