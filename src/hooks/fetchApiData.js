// src/hooks/fetchApiData.js

import { useState, useEffect } from 'react'

// Custom hook para cargar las filas asincronamente
// Devuelve las filas y la condicion loading para saber si se esta cargando
export const fetchApIData = (url) => {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  // console.log('1) fetchApIData - started... URL:', url)

  // Efecto para traer la primera vez que se rendea el componente, las filas
  // con un fetch asincrono.
  useEffect(function () {
    setLoading(true)
    window.fetch(url)
      .then(res => res.json())
      .then(response => {
        // console.log('>>--> 2) fetchApIData - useEffect | URL:', url)
        setRows(response)
        setLoading(false)
      })
      .catch((e) => console.error('fetchApIData - ERROR:', e))
  }, [])
  // OJO ese `, []` al final lo que hace es que el useEffect solo se llame la 1era vez.
  // si no se pone, se queda constantemente haciendo el fetch() en un loop infinito.
  // Ese segundo parametro del useEffect es un array [] con las dependencias.
  // Si alguna de estas dependencias cambia, entonces se vuelve a llamar a useEffect.
  // Ver: https://reactjs.org/docs/hooks-reference.html#useeffect

  // console.log('3) fetchApIData - finished... Rows:', rows)
  return [rows, loading]
}
