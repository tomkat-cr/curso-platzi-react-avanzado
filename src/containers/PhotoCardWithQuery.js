// src/containers/PhotoCardWithQuery.js

import React from 'react'
import { useQuery } from '@apollo/client'

import { PhotoCard } from '../components/PhotoCard'
import { PhotoCardContentWithQuery } from './PhotoCardContentWithQuery'
import { getSinglePhoto } from '../hoc/getSiglePhoto'
import { WaitAnimation } from '../components/WaitAnimation'
import { ErrorShow, ERROR_GRAPHQL } from '../components/ErrorShow'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(getSinglePhoto, { variables: { id } })

  console.log('>>--> PhotoCardWithQuery - data:', data)

  if (error) {
    return <ErrorShow errorTitle={ERROR_GRAPHQL} errorMessage={error} errorDetail='[getSinglePhoto]' />
  }
  if (loading) {
    return (<WaitAnimation />)
  }

  const { photo = {} } = data
  return (
    <>
      <PhotoCard {...photo} />
      <PhotoCardContentWithQuery {...photo} />
    </>
  )
}

// La solucion con Render Props era esta, pero los HOC y los Render Props estan deprecated...
//
// import { Query } from '@apollo/client'
// export const PhotoCardWithQuery = ({ id }) => (
//   <Query query={getSinglePhoto} variables={{ id }}>
//     {
//       ({ loading, error, data }) => {
//         console.log('PhotoCardWithQuery - data:', data)
//         const { photo } = data
//         return (<PhotoCard {...photo} />)
//       }
//     }
//   </Query>
// )
