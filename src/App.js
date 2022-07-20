// src/App.js

import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
// import { ListOfPhotos } from './components/ListOfPhotos'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

// <ListOfPhotoCards /> = Todos
// <ListOfPhotoCards categoryId={1} /> = Gatos
// <ListOfPhotoCards categoryId={2} /> = Perros

export const App = () => {
  // Router con los parametros de la URL (no es lo recomandable BTW)
  const urlParam = new window.URLSearchParams(window.location.search)
  const detailId = urlParam.get('detail') // ID de la foto
  const categoryId = urlParam.get('cat') // ID de la categoria
  return (
    <div>
      <Logo />
      <GlobalStyle />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : (
            <>
              <ListOfCategories />
              <ListOfPhotoCards categoryId={categoryId} />
            </>
          )
      }
    </div>
  )
}
