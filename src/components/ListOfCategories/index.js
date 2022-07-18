// src/components/ListOfCategories/index.js

// import { Fragment } from 'react'
// Al intentar usar Fragment, ellinter dijo:
// Prefer fragment shorthand over React.Fragmenteslintreact/jsx-fragments
// Y el 'fragment shorthand' es <>...</>

import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

// import { categories } from '../../../api/db.json'

// Custom hook para cargar las categorias asincronamente
// Devuelve las categorias y la condicion loading para saber si se esta cargando
function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  // Efecto para traer la primera vez que se rendea el componente, las categorias
  // con un fetch asincrono.
  useEffect(function () {
    setLoading(true)
    window.fetch('https://mediabros-petgram-server-tomkat-cr.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
      .catch((e) => console.error(e))
  }, [])
  // OJO ese `, []` al final lo que hace es que el useEffect solo se llame la 1era vez.
  // si no se pone, se queda constantemente haciendo el fetch() en un loop infinito.
  // Ese segundo parametro del useEffect es un array [] con las dependencias.
  // Si alguna de estas dependencias cambia, entonces se vuelve a llamar a useEffect.
  // Ver: https://reactjs.org/docs/hooks-reference.html#useeffect

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowfixed] = useState(false)

  // Aca se cambio para usar una prpiedad 'fixed' en vez de una clase
  // Para evitar asi eventuales conflictos de clases coincidentes.
  // Se cambio: <List className={fixed ? 'fixed' : ''}>
  // Por: <List fixed={fixed}>
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? (<Item key={loading}>Cargando categorias...</Item>)
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  // En un componente se puede tener mas de un efecto diferente,
  // No hace falta tener todas las cosas en un solo efecto, asi cada
  // efecto tendra su propia logica, manteniendo las logicas del componente por separado.
  // Ademas es posible que cada efecto se tenga que limpiar de acuerdo a sus dependencias/

  // Efecto para aparecer y desaparecer el menu de categorias flotante
  // Apparece cuando la franja con las categorias principales desaparece al hacer scroll.
  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed &&
        setShowfixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    // Para que elimine el event listener cuando toque limpiar los efectos que tenemos
    // En este caso los listeners del scroll.
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  // Este efecto se va a activar cuando 'showFixed' cambie...

  return (
    <>
      {renderList() /* Rendea la franja de categorias principal */}
      {showFixed && renderList(true) /* Rendea las categorias flotantes */}
    </>
  )
}
