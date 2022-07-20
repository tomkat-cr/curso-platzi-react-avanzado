// src/index.js

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://mediabros-petgram-backend-tomkat-cr.vercel.app/graphql',
  // uri: 'http://localhost:3500/graphql',
  cache: new InMemoryCache()
})

// Actualización a React 18 (Julio 2022)
// Cambia la manera de iniciar la aplicación,
// utilizando ReactDOM.createRoot en vez de ReactDOM.render.

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
