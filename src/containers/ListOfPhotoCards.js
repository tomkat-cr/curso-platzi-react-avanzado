import React from 'react'
import { useQuery } from '@apollo/client'
import { getPhotos } from '../hoc/getPhotos'
import { ListOfPhotosComponent } from '../components/ListOfPhotos'
import { WaitAnimation } from '../components/WaitAnimation'
import { ErrorShow, ERROR_GRAPHQL } from '../components/ErrorShow'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(getPhotos, {
    variables: { categoryId }
  })

  // console.log('>>--> ListOfPhotos - data:', data)

  if (error) {
    return <ErrorShow errorTitle={ERROR_GRAPHQL} errorMessage={error} errorDetail='[getPhotos]' />
  }
  if (loading) {
    return (<WaitAnimation />)
  }

  return <ListOfPhotosComponent data={data} />
}
