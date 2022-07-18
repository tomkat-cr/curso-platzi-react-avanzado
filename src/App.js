// src/App.js
import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotos } from './components/ListOfPhotoCards'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotos />
  </div>
)
