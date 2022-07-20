// src/components/ListOfPhotoCards/index.js

import React from 'react'

import { PhotoCard } from '../PhotoCard'
import { List, Item } from './styles'

export const ListOfPhotosComponent = ({ data }) => {
  const { photos } = data
  return (
    <List>
      {
        photos.map(photo => <Item key={photo.id}><PhotoCard {...photo} /></Item>)
      }
    </List>
  )
}
