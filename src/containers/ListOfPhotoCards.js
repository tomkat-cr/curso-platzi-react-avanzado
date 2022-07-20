import React from 'react'
import { useQuery } from '@apollo/client'
import { getPhotos } from '../hoc/getPhotos'
import { ListOfPhotosComponent } from '../components/ListOfPhotos'
import { WaitAnimation } from '../components/WaitAnimation'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(getPhotos, {
    variables: { categoryId }
  })

  // console.log('>>--> ListOfPhotos - data:', data)

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return (<WaitAnimation />)
  }

  return <ListOfPhotosComponent data={data} />
}
