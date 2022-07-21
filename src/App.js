// src/App.js

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/favs' element={<Favs />} />
        <Route path='/user' element={<User />} />
      </Routes>
      <NavBar />
    </>
  )
}
