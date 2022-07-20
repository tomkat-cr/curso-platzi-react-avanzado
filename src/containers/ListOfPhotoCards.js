import React from 'react'
import { useQuery } from '@apollo/client'
import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotosComponent } from '../components/ListOfPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(withPhotos, {
    variables: { categoryId }
  })

  // console.log('>>--> ListOfPhotos - data:', data)

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return <ListOfPhotosComponent data={data} />
}
