// src/components/ListOfPhotoCards/index.js

import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { PhotoCard } from '../PhotoCard'
import { List, Item } from './styles'

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotos = () => {
  const { loading, error, data } = useQuery(withPhotos)

  // console.log('>>--> ListOfPhotos - data:', data)

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  const { photos } = data

  return (
    <List>
      {
        photos.map(photo => <Item key={photo.id}><PhotoCard {...photo} /></Item>)
      }
    </List>
  )
}
