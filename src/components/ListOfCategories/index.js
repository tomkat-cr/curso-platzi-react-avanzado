// src/components/ListOfCategories/index.js

// import { Fragment } from 'react'
// Al intentar usar Fragment, ellinter dijo:
// Prefer fragment shorthand over React.Fragmenteslintreact/jsx-fragments
// Y el 'fragment shorthand' es <>...</>

import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { fetchApIData } from '../../hooks/fetchApiData'

// import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
  const url = 'https://mediabros-petgram-backend-tomkat-cr.vercel.app/categories'
  // console.log('ListOfCategories - URL:', url)
  const [categories, loading] = fetchApIData(url)
  // console.log('ListOfCategories - despues de llamar a fetchApIData - categories:', categories)
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
