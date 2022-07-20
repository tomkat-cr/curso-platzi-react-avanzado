// src/hooks/useLocalStorage.js

import { useState } from 'react'

// custom hook para manejar el localStorage de forma generica
export function useLocalStorage (keyId, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(keyId)
      const response = item !== null ? JSON.parse(item) : initialValue
      // console.log('useLocalStorage-key / response:', keyId, response)
      return response
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = (value) => {
    try {
      // console.log('setLocalStorage-key / value:', keyId, value)
      window.localStorage.setItem(keyId, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setLocalStorage]
}
