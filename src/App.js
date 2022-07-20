// src/App.js

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './pages/Home'

export const App = () => {
  const urlParam = new window.URLSearchParams(window.location.search)
  const detailId = urlParam.get('detail') // ID de la foto
  return (
    <>
      <a href='/'>
        <Logo />
      </a>
      <GlobalStyle />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : (
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='pet/:id' element={<Home />} />
            </Routes>
          )
      }
    </>
  )
}
