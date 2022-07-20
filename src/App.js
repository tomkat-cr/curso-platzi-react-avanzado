// src/App.js
import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
// import { ListOfPhotos } from './components/ListOfPhotos'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'

// <ListOfPhotoCards /> = Todos
// <ListOfPhotoCards categoryId={1} /> = Gatos
// <ListOfPhotoCards categoryId={2} /> = Perros

export const App = () => (
  <div>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={1} />
  </div>
)
