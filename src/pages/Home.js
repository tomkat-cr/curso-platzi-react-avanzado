// src/pages/Home.js

import React from 'react'
import { useParams } from 'react-router-dom'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'

// <ListOfPhotoCards /> = Todos
// <ListOfPhotoCards categoryId={1} /> = Gatos
// <ListOfPhotoCards categoryId={2} /> = Perros

export const Home = () => {
  const urlParams = useParams()
  const { id } = urlParams
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
