import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://mediabros-petgram-backend-tomkat-cr.vercel.app/graphql',
  cache: new InMemoryCache()
})

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
