// src/components/ListOfPhotoCards/index.js
// import React, { useEffect,useState } from 'react'
import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List, Item } from './styles'

import { photos } from '../../../api/db.json'

export const ListOfPhotos = () => {
//   const [photos, setPhotos] = useState([])
//   useEffect(function () {
//     window.fetch('https://mediabros-petgram-server-tomkat-cr.vercel.app/photos')
//       .then(res => res.json())
//       .then(response => {
//         setPhotos(response)
//       })
//       .catch((e) => console.error(e))
//   }, [])
  return (
    <List>
      {
        photos.map(photo => <Item key={photo.id}><PhotoCard {...photo} /></Item>)
      }
    </List>
  )
}
